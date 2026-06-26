"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const STORAGE_KEY = "ceramiche-bressan-cookie-consent";
const CONSENT_VERSION = 1;

type ConsentSettings = {
  statistiche: boolean;
  contenutiEsterni: boolean;
};

type StoredConsent = ConsentSettings & {
  version: number;
  decided: boolean;
  updatedAt: string;
};

type CookieConsentContextValue = {
  settings: ConsentSettings;
  hasDecision: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  saveSettings: (settings: ConsentSettings) => void;
  acceptExternalContent: () => void;
  openPreferences: () => void;
};

const defaultSettings: ConsentSettings = {
  statistiche: false,
  contenutiEsterni: false
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

function readStoredConsent(): StoredConsent | null {
  try {
    const rawValue = window.localStorage.getItem(STORAGE_KEY);

    if (!rawValue) {
      return null;
    }

    const parsed = JSON.parse(rawValue) as StoredConsent;

    if (parsed.version !== CONSENT_VERSION || typeof parsed.decided !== "boolean") {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [hasDecision, setHasDecision] = useState(false);
  const [settings, setSettings] = useState<ConsentSettings>(defaultSettings);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [draftSettings, setDraftSettings] = useState<ConsentSettings>(defaultSettings);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const storedConsent = readStoredConsent();

      if (storedConsent) {
        const storedSettings = {
          statistiche: Boolean(storedConsent.statistiche),
          contenutiEsterni: Boolean(storedConsent.contenutiEsterni)
        };

        setSettings(storedSettings);
        setDraftSettings(storedSettings);
        setHasDecision(storedConsent.decided);
      }

      setIsReady(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const persistSettings = (nextSettings: ConsentSettings) => {
    const storedConsent: StoredConsent = {
      ...nextSettings,
      version: CONSENT_VERSION,
      decided: true,
      updatedAt: new Date().toISOString()
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storedConsent));
    setSettings(nextSettings);
    setDraftSettings(nextSettings);
    setHasDecision(true);
    setIsPreferencesOpen(false);
  };

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      settings,
      hasDecision,
      acceptAll: () =>
        persistSettings({
          statistiche: true,
          contenutiEsterni: true
        }),
      rejectAll: () => persistSettings(defaultSettings),
      saveSettings: persistSettings,
      acceptExternalContent: () =>
        persistSettings({
          ...settings,
          contenutiEsterni: true
        }),
      openPreferences: () => {
        setDraftSettings(settings);
        setIsPreferencesOpen(true);
      }
    }),
    [hasDecision, settings]
  );

  const showBanner = isReady && !hasDecision;

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      {isReady && settings.statistiche ? (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      ) : null}
      {showBanner ? (
        <div className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-5xl rounded-sm border border-ceramica/25 bg-[#fffaf1] p-4 shadow-soft sm:p-5">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-ceramica">Preferenze cookie</p>
              <p className="mt-2 leading-7 text-argilla">
                Usiamo strumenti necessari al funzionamento del sito. Con il tuo consenso possiamo
                attivare statistiche aggregate e contenuti esterni come Google Maps.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                className="focus-ring min-h-11 rounded-sm border border-oro/60 bg-transparent px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-ceramica transition hover:border-ceramica hover:bg-white/50"
                onClick={() => setIsPreferencesOpen(true)}
                type="button"
              >
                Gestisci preferenze
              </button>
              <button
                className="focus-ring min-h-11 rounded-sm border border-ceramica bg-transparent px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-ceramica transition hover:bg-white/50"
                onClick={value.rejectAll}
                type="button"
              >
                Rifiuta
              </button>
              <button
                className="focus-ring min-h-11 rounded-sm border border-ceramica bg-ceramica px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#004f31]"
                onClick={value.acceptAll}
                type="button"
              >
                Accetta
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {isPreferencesOpen ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#1e2318]/70 p-4"
          role="dialog"
        >
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-sm border border-ceramica/25 bg-[#fffaf1] p-5 shadow-soft sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-ceramica">Cookie</p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-ceramica">
                  Gestisci preferenze
                </h2>
              </div>
              <button
                aria-label="Chiudi preferenze cookie"
                className="focus-ring inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-ceramica/30 bg-white text-2xl leading-none text-ceramica"
                onClick={() => setIsPreferencesOpen(false)}
                type="button"
              >
                &times;
              </button>
            </div>

            <div className="mt-6 grid gap-4">
              <CookiePreferenceRow
                checked
                description="Servono al funzionamento del sito e al salvataggio delle preferenze. Sono sempre attivi."
                disabled
                label="Necessari"
              />
              <CookiePreferenceRow
                checked={draftSettings.statistiche}
                description="Consentono statistiche aggregate tramite Vercel Analytics e Speed Insights."
                label="Statistiche"
                onChange={(checked) => setDraftSettings((current) => ({ ...current, statistiche: checked }))}
              />
              <CookiePreferenceRow
                checked={draftSettings.contenutiEsterni}
                description="Consentono il caricamento di contenuti esterni, come la mappa di Google Maps."
                label="Contenuti esterni"
                onChange={(checked) =>
                  setDraftSettings((current) => ({ ...current, contenutiEsterni: checked }))
                }
              />
            </div>

            <div className="mt-6 flex flex-wrap justify-end gap-2">
              <button
                className="focus-ring min-h-11 rounded-sm border border-ceramica bg-transparent px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-ceramica transition hover:bg-white/50"
                onClick={value.rejectAll}
                type="button"
              >
                Rifiuta
              </button>
              <button
                className="focus-ring min-h-11 rounded-sm border border-oro/60 bg-transparent px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-ceramica transition hover:border-ceramica hover:bg-white/50"
                onClick={() => value.saveSettings(draftSettings)}
                type="button"
              >
                Salva preferenze
              </button>
              <button
                className="focus-ring min-h-11 rounded-sm border border-ceramica bg-ceramica px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#004f31]"
                onClick={value.acceptAll}
                type="button"
              >
                Accetta tutto
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </CookieConsentContext.Provider>
  );
}

function CookiePreferenceRow({
  checked,
  description,
  disabled = false,
  label,
  onChange
}: {
  checked: boolean;
  description: string;
  disabled?: boolean;
  label: string;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <label className="flex items-start justify-between gap-4 rounded-sm border border-oro/35 bg-white/55 p-4">
      <span>
        <span className="block font-serif text-xl font-semibold text-ceramica">{label}</span>
        <span className="mt-1 block leading-7 text-argilla">{description}</span>
      </span>
      <input
        checked={checked}
        className="mt-2 h-5 w-5 shrink-0 accent-ceramica"
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
        type="checkbox"
      />
    </label>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error("useCookieConsent must be used inside CookieConsentProvider");
  }

  return context;
}

export function CookiePreferencesButton() {
  const { openPreferences } = useCookieConsent();

  return (
    <button className="focus-ring text-left hover:text-ceramica" onClick={openPreferences} type="button">
      Gestisci preferenze cookie
    </button>
  );
}
