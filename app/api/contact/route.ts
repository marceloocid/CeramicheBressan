import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_MESSAGE_LENGTH = 3000;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  nome?: unknown;
  azienda?: unknown;
  email?: unknown;
  telefono?: unknown;
  citta?: unknown;
  messaggio?: unknown;
  website?: unknown;
  privacy?: unknown;
  turnstileToken?: unknown;
};

type TurnstileResponse = {
  success: boolean;
  "error-codes"?: string[];
};

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function fieldLine(label: string, value: string) {
  return `${label}: ${value || "-"}`;
}

async function verifyTurnstile(token: string, request: Request) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return { ok: false, error: "Turnstile non configurato." };
  }

  const ip =
    request.headers.get("CF-Connecting-IP") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "";

  const body = new URLSearchParams({
    secret,
    response: token
  });

  if (ip) {
    body.set("remoteip", ip);
  }

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body
  });

  if (!response.ok) {
    return { ok: false, error: "Verifica antispam non disponibile." };
  }

  const result = (await response.json()) as TurnstileResponse;

  if (!result.success) {
    return { ok: false, error: "Verifica antispam non superata." };
  }

  return { ok: true };
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Richiesta non valida." }, { status: 400 });
  }

  const nome = asText(payload.nome);
  const azienda = asText(payload.azienda);
  const email = asText(payload.email).toLowerCase();
  const telefono = asText(payload.telefono);
  const citta = asText(payload.citta);
  const messaggio = asText(payload.messaggio);
  const website = asText(payload.website);
  const turnstileToken = asText(payload.turnstileToken);
  const privacyAccepted = payload.privacy === true;

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!nome || !email || !messaggio) {
    return NextResponse.json({ error: "Nome, email e messaggio sono obbligatori." }, { status: 400 });
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Email non valida." }, { status: 400 });
  }

  if (messaggio.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: "Il messaggio è troppo lungo." }, { status: 400 });
  }

  if (!privacyAccepted) {
    return NextResponse.json({ error: "Consenso privacy obbligatorio." }, { status: 400 });
  }

  if (!turnstileToken) {
    return NextResponse.json({ error: "Verifica antispam obbligatoria." }, { status: 400 });
  }

  const turnstile = await verifyTurnstile(turnstileToken, request);

  if (!turnstile.ok) {
    return NextResponse.json({ error: turnstile.error }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return NextResponse.json({ error: "Invio email non configurato." }, { status: 500 });
  }

  const plainText = [
    "Nuova richiesta dal sito Ceramiche Bressan",
    "",
    fieldLine("Nome", nome),
    fieldLine("Email", email),
    fieldLine("Telefono", telefono),
    fieldLine("Negozio / attività", azienda),
    fieldLine("Città", citta),
    "",
    "Messaggio:",
    messaggio,
    "",
    "Consenso privacy: accettato"
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #2f2a24;">
      <h1 style="font-size: 20px;">Nuova richiesta dal sito Ceramiche Bressan</h1>
      <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefono:</strong> ${escapeHtml(telefono) || "-"}</p>
      <p><strong>Negozio / attività:</strong> ${escapeHtml(azienda) || "-"}</p>
      <p><strong>Città:</strong> ${escapeHtml(citta) || "-"}</p>
      <p><strong>Messaggio:</strong></p>
      <p>${escapeHtml(messaggio).replace(/\n/g, "<br />")}</p>
      <p><strong>Consenso privacy:</strong> accettato</p>
    </div>
  `;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    to,
    from,
    replyTo: email,
    subject: "Nuova richiesta dal sito Ceramiche Bressan",
    text: plainText,
    html
  });

  if (error) {
    return NextResponse.json({ error: "Invio email non riuscito." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
