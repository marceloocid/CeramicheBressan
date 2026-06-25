"use client";

import Script from "next/script";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";

type SubmitStatus = "idle" | "success" | "error";

type TurnstileWidgetOptions = {
  sitekey: string;
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => void;
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileWidgetOptions) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const errorMessage =
  "Si è verificato un errore durante l’invio. Riprova tra poco o contattaci direttamente via email.";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | undefined>(undefined);
  const [scriptReady, setScriptReady] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const resetTurnstile = useCallback(() => {
    setTurnstileToken("");
    window.turnstile?.reset(turnstileWidgetId.current);
  }, []);

  useEffect(() => {
    if (!scriptReady || !siteKey || !turnstileRef.current || !window.turnstile || turnstileWidgetId.current) {
      return;
    }

    turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
      sitekey: siteKey,
      callback: (token) => setTurnstileToken(token),
      "expired-callback": () => setTurnstileToken(""),
      "error-callback": () => setTurnstileToken("")
    });

    return () => {
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetId.current);
        turnstileWidgetId.current = undefined;
      }
    };
  }, [scriptReady, siteKey]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");

    if (!siteKey || !turnstileToken) {
      setStatus("error");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const privacyAccepted = formData.get("privacy") === "on";

    if (!privacyAccepted) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome: formData.get("nome"),
          azienda: formData.get("azienda"),
          email: formData.get("email"),
          telefono: formData.get("telefono"),
          citta: formData.get("citta"),
          messaggio: formData.get("messaggio"),
          website: formData.get("website"),
          privacy: privacyAccepted,
          turnstileToken
        })
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      formRef.current?.reset();
      setStatus("success");
      resetTurnstile();
    } catch {
      setStatus("error");
      resetTurnstile();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {siteKey ? (
        <Script
          id="cloudflare-turnstile"
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onLoad={() => setScriptReady(true)}
          onReady={() => setScriptReady(true)}
        />
      ) : null}
      <form className="paper-panel grid gap-5 rounded-sm p-6 shadow-soft" onSubmit={handleSubmit} ref={formRef}>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input autoComplete="off" id="website" name="website" tabIndex={-1} type="text" />
        </div>

        <div>
          <label className="block text-sm font-bold uppercase tracking-[0.1em] text-ceramica" htmlFor="nome">
            Nome e cognome
          </label>
          <input
            className="focus-ring mt-2 w-full rounded-sm border border-oro/45 bg-white/80 px-4 py-3 text-argilla"
            id="nome"
            name="nome"
            required
            type="text"
          />
        </div>
        <div>
          <label className="block text-sm font-bold uppercase tracking-[0.1em] text-ceramica" htmlFor="azienda">
            Nome del negozio / attività
          </label>
          <input
            className="focus-ring mt-2 w-full rounded-sm border border-oro/45 bg-white/80 px-4 py-3 text-argilla"
            id="azienda"
            name="azienda"
            required
            type="text"
          />
        </div>
        <div>
          <label className="block text-sm font-bold uppercase tracking-[0.1em] text-ceramica" htmlFor="email">
            Email
          </label>
          <input
            className="focus-ring mt-2 w-full rounded-sm border border-oro/45 bg-white/80 px-4 py-3 text-argilla"
            id="email"
            name="email"
            required
            type="email"
          />
        </div>
        <div>
          <label className="block text-sm font-bold uppercase tracking-[0.1em] text-ceramica" htmlFor="telefono">
            Telefono
          </label>
          <input
            className="focus-ring mt-2 w-full rounded-sm border border-oro/45 bg-white/80 px-4 py-3 text-argilla"
            id="telefono"
            name="telefono"
            type="tel"
          />
        </div>
        <div>
          <label className="block text-sm font-bold uppercase tracking-[0.1em] text-ceramica" htmlFor="citta">
            Città
          </label>
          <input
            className="focus-ring mt-2 w-full rounded-sm border border-oro/45 bg-white/80 px-4 py-3 text-argilla"
            id="citta"
            name="citta"
            type="text"
          />
        </div>
        <div>
          <label className="block text-sm font-bold uppercase tracking-[0.1em] text-ceramica" htmlFor="messaggio">
            Messaggio
          </label>
          <textarea
            className="focus-ring mt-2 min-h-36 w-full rounded-sm border border-oro/45 bg-white/80 px-4 py-3 text-argilla"
            id="messaggio"
            maxLength={3000}
            name="messaggio"
            required
          />
        </div>

        <label className="flex gap-3 text-sm leading-6 text-argilla">
          <input className="mt-1 h-4 w-4 shrink-0 accent-ceramica" name="privacy" required type="checkbox" />
          <span>Accetto il trattamento dei dati personali per essere ricontattato in merito alla mia richiesta.</span>
        </label>

        {siteKey ? (
          <div className="min-h-[65px]">
            <div ref={turnstileRef} />
          </div>
        ) : (
          <p className="rounded-sm border border-oro/45 bg-white/75 p-3 text-sm leading-6 text-argilla">
            Verifica antispam non configurata.
          </p>
        )}

        <button
          className="focus-ring min-h-12 rounded-sm border border-ceramica bg-ceramica px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-[#004f31] disabled:cursor-not-allowed disabled:opacity-65"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Invio in corso..." : "Invia richiesta"}
        </button>

        {status === "success" ? (
          <p className="rounded-sm border border-ceramica/25 bg-ceramica/10 p-3 text-sm font-bold leading-6 text-ceramica">
            Grazie, la tua richiesta è stata inviata correttamente. Ti ricontatteremo al più presto.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="rounded-sm border border-red-200 bg-red-50 p-3 text-sm font-bold leading-6 text-red-800">
            {errorMessage}
          </p>
        ) : null}

        <p className="text-sm leading-6 text-argilla">
          Le richieste sono rivolte a negozi, botteghe e punti vendita. Non effettuiamo vendita online
          o vendita diretta al pubblico dalla sede produttiva.
        </p>
      </form>
    </>
  );
}
