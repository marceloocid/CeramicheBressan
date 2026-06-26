# Ceramiche Artistiche Bressan C2

Sito web corporate/catalogo per Ceramiche Artistiche Bressan C2, bottega artigiana di ceramiche dipinte a mano a Pianezze, Vicenza.

Il sito non è una piattaforma ecommerce: non ci sono carrello, checkout, prezzi o pagamenti. La navigazione presenta l'azienda, le collezioni, il catalogo visuale e i contatti per negozi, botteghe, punti vendita e clienti interessati.

## Stack

- Next.js App Router
- React
- Tailwind CSS
- Resend per l'invio del modulo contatti
- Cloudflare Turnstile per protezione antispam
- Vercel Analytics e Speed Insights

## Esecuzione locale

```bash
npm install
npm run dev -- -p 3000
```

Aprire `http://localhost:3000`.

## Comandi utili

```bash
npm run lint
npm run build
```

## Variabili ambiente

Creare `.env.local` partendo da `.env.local.example`.

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_SITE_URL=
```

Note:

- Non committare `.env.local`.
- `CONTACT_FROM_EMAIL` deve usare un mittente valido per Resend.
- In produzione configurare `NEXT_PUBLIC_SITE_URL` con il dominio reale.
- Verificare in Cloudflare Turnstile che il dominio di produzione sia autorizzato.

## Pagine principali

- `/` - Home
- `/azienda` - Azienda e dati aziendali
- `/creazioni` - Collezioni e famiglie decorative
- `/per-rivenditori` - Informazioni per negozi e punti vendita
- `/catalogo` - Catalogo fotografico per serie/prodotto
- `/lavorazione` - Lavorazione artigianale
- `/contatti` - Contatti, modulo richiesta informazioni e mappa
- `/privacy-policy`
- `/cookie-policy`

## Catalogo e immagini

I dati principali del catalogo sono in `data/site.ts`.

- `collectionCategories` rappresenta famiglie editoriali e categorie generali.
- `catalogItems` rappresenta serie/prodotti concreti.
- Ogni item può avere `images[]`; la prima immagine è usata come immagine principale della scheda.
- Le immagini della galleria si aprono nel lightbox del catalogo.

Le immagini originali sono in `public/images`. Non vanno sovrascritte, ritagliate o ottimizzate automaticamente senza decisione esplicita.

La cartella `public/images/muestra` è stata rimossa intenzionalmente perché non usata nel sito.

## Favicon e icone

La sorgente del favicon è:

```text
public/favicon-source.png
```

Da questa immagine derivano:

- `public/favicon.ico`
- `public/favicon.svg`
- `public/apple-touch-icon.png`
- `app/favicon.ico`
- `app/icon.png`
- `app/apple-icon.png`

Se si cambia il favicon, sostituire `public/favicon-source.png` e rigenerare questi file.

## Formulario contatti

Il modulo in `components/ContactForm.tsx` invia i dati a:

```text
app/api/contact/route.ts
```

La API route:

- accetta solo `POST`,
- valida nome, email, messaggio e consenso privacy,
- valida il token Cloudflare Turnstile lato server,
- usa un honeypot `website`,
- invia email tramite Resend,
- usa l'email del visitatore come `Reply-To`.

Non viene inviata email automatica all'utente.

## SEO e pubblicazione

Il sito include:

- metadata globale in `app/layout.tsx`,
- metadata specifica nelle pagine principali,
- Open Graph e Twitter card base,
- `app/sitemap.ts`,
- `app/robots.ts`,
- structured data `LocalBusiness`.

Prima della pubblicazione verificare:

- dominio reale in `NEXT_PUBLIC_SITE_URL`,
- Resend con dominio/mittente verificato,
- Turnstile configurato per il dominio reale,
- Privacy Policy e Cookie Policy con il titolare o consulente incaricato,
- eventuale banner consenso se richiesto da servizi terzi attivi,
- caricamento reale di mappa, analytics e modulo in produzione.

## Dati aziendali

I dati principali sono in `data/site.ts`.

- `site.visibleName`
- `site.legalName`
- `site.address`
- `site.phone` e `site.phoneHref`
- `site.email` e `site.emailHref`
- `site.vat`
- `site.facebookUrl`

## Note legali

Le pagine Privacy Policy e Cookie Policy sono strutturate ma contengono punti segnati come `[DA COMPLETARE]` o `[DA VERIFICARE]`. Non considerarle definitive senza revisione del titolare o di un consulente.
