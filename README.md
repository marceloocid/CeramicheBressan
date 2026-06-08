# Ceramiche Artistiche Bressan C2

Sito web corporate/catalogo per una bottega artigiana di ceramiche artistiche a Pianezze, Vicenza.

Non è una piattaforma ecommerce: non ci sono carrello, checkout, prezzi o pagamenti. Le CTA portano a telefono, contatti, richiesta disponibilità e visita in laboratorio.

## Esecuzione

```bash
npm install
npm run dev
```

Aprire `http://localhost:3000`.

## Immagini

Le immagini placeholder sono in `public/images`:

- `laboratorio-ceramica.jpg`
- `home-laboratorio-bressan.jpg`
- `piatti-dipinti-a-mano.jpg`
- `vasi-ceramica-artistica.jpg`
- `dettagli-decorazione.jpg`
- `collezione-tavola.jpg`
- `ceramiche-cucina.jpg`

Sostituire questi file con fotografie reali del laboratorio, dei prodotti o da Facebook solo dopo conferma del cliente e verifica dei diritti di utilizzo. I componenti contengono commenti nei punti in cui le immagini vengono usate.

## Telefono, email e dati aziendali

I dati principali sono in `data/site.ts`.

- Telefono: `site.phone` e `site.phoneHref`
- Indirizzo: `site.address`
- Ragione sociale e P.IVA: `site.legalName`, `site.vat`
- Facebook: `site.facebookUrl`
- Email: `site.email`

Nota: l’email `info@ceramichebressanc2.it` è inserita come dato da confermare nel codice, non come dato verificato.

## Testi

I testi principali sono nelle pagine dentro `app/`:

- Home: `app/page.tsx`
- Azienda: `app/azienda/page.tsx`
- Creazioni: `app/creazioni/page.tsx`
- Lavorazione: `app/lavorazione/page.tsx`
- Catalogo: `app/catalogo/page.tsx`
- Contatti: `app/contatti/page.tsx`

Categorie e prodotti generici del catalogo sono in `data/site.ts`.

## Prima della pubblicazione

- Confermare email e dati di contatto.
- Sostituire le foto placeholder con immagini reali autorizzate.
- Collegare il modulo contatti a un servizio email, CRM o backend.
- Completare Privacy Policy e Cookie Policy con testi legali definitivi.
- Verificare eventuale consenso cookie se restano attivi servizi terzi come Google Maps.
