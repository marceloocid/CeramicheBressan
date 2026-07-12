import type { Locale, RouteKey } from "@/lib/i18n";

export const seoText: Record<
  Locale,
  Record<RouteKey, { title: string; description: string }>
> = {
  it: {
    home: {
      title: "Ceramiche dipinte a mano a Pianezze",
      description:
        "Ceramiche artistiche dipinte a mano a Pianezze, Vicenza: creazioni artigianali italiane per casa, tavola, regalo, negozi e punti vendita."
    },
    azienda: {
      title: "Azienda artigiana a Pianezze",
      description:
        "Scopri Ceramiche Artistiche Bressan C2, bottega artigiana a Pianezze, Vicenza, specializzata in ceramiche dipinte a mano per negozi e punti vendita."
    },
    creazioni: {
      title: "Collezioni di ceramiche artigianali",
      description:
        "Famiglie decorative e collezioni di ceramiche artigianali italiane dipinte a mano per casa, tavola, regalo, negozi e botteghe."
    },
    catalogo: {
      title: "Catalogo ceramiche artistiche",
      description:
        "Catalogo fotografico di linee e creazioni in ceramica artistica dipinta a mano per negozi, botteghe e punti vendita."
    },
    perRivenditori: {
      title: "Ceramiche artigianali per negozi",
      description:
        "Informazioni per negozi, botteghe e punti vendita interessati a ceramiche artistiche italiane dipinte a mano e assortimenti artigianali."
    },
    lavorazione: {
      title: "Lavorazione artigianale",
      description:
        "Decorazione manuale, cura dei dettagli e lavorazione artigianale delle ceramiche artistiche Bressan C2."
    },
    contatti: {
      title: "Contatti e richiesta informazioni",
      description:
        "Contatti, sede e modulo di richiesta informazioni per Ceramiche Artistiche Bressan C2 a Pianezze, Vicenza."
    },
    privacy: {
      title: "Privacy Policy",
      description:
        "Informativa privacy per il sito Ceramiche Artistiche Bressan C2, il modulo di contatto e i servizi tecnici collegati."
    },
    cookie: {
      title: "Cookie Policy",
      description:
        "Informativa sui cookie e sui servizi terzi usati dal sito Ceramiche Artistiche Bressan C2."
    }
  },
  en: {
    home: {
      title: "Hand-painted ceramics from Pianezze",
      description:
        "Hand-painted artistic ceramics from Pianezze, Vicenza: Italian artisan creations for the home, table, gift sector, shops and points of sale."
    },
    azienda: {
      title: "Italian ceramic workshop in Pianezze",
      description:
        "Discover Ceramiche Artistiche Bressan C2, an artisan workshop in Pianezze, Vicenza, specializing in hand-painted ceramics for shops and points of sale."
    },
    creazioni: {
      title: "Artisan ceramic collections",
      description:
        "Decorative families and collections of hand-painted Italian artisan ceramics for the home, table, gift sector, shops and boutiques."
    },
    catalogo: {
      title: "Artistic ceramics catalog",
      description:
        "Photographic catalog of hand-painted artistic ceramic lines and creations for shops, boutiques and points of sale."
    },
    perRivenditori: {
      title: "Artisan ceramics for retailers",
      description:
        "Information for shops, boutiques and points of sale interested in hand-painted Italian artistic ceramics and artisan assortments."
    },
    lavorazione: {
      title: "Artisan workmanship",
      description:
        "Hand decoration, attention to detail and artisan workmanship behind Bressan C2 artistic ceramics."
    },
    contatti: {
      title: "Contact and information request",
      description:
        "Contact details, workshop location and information request form for Ceramiche Artistiche Bressan C2 in Pianezze, Vicenza."
    },
    privacy: {
      title: "Privacy Policy",
      description:
        "Privacy notice for the Ceramiche Artistiche Bressan C2 website, contact form and related technical services."
    },
    cookie: {
      title: "Cookie Policy",
      description:
        "Information about cookies and third-party services used by the Ceramiche Artistiche Bressan C2 website."
    }
  }
};

export const globalText = {
  it: {
    brandAria: "Vai alla home",
    mainNavigation: "Navigazione principale",
    mobileNavigation: "Navigazione mobile",
    requestInfo: "Richiedi informazioni",
    contactUs: "Contattaci",
    discoverCatalog: "Scopri il catalogo",
    links: "Link",
    contacts: "Contatti",
    facebook: "Facebook",
    privacyPolicy: "Privacy Policy",
    cookiePolicy: "Cookie Policy",
    websiteCredit: "Design e sviluppo web di",
    websiteCreditName: "Marcelo Cid",
    languageSelector: "Selettore lingua",
    currentLanguage: "Lingua corrente",
    switchTo: "Passa a",
    mobileContactAria: "Vai alla pagina contatti"
  },
  en: {
    brandAria: "Go to home page",
    mainNavigation: "Main navigation",
    mobileNavigation: "Mobile navigation",
    requestInfo: "Request information",
    contactUs: "Contact us",
    discoverCatalog: "View the catalog",
    links: "Links",
    contacts: "Contact",
    facebook: "Facebook",
    privacyPolicy: "Privacy Policy",
    cookiePolicy: "Cookie Policy",
    websiteCredit: "Web design and development by",
    websiteCreditName: "Marcelo Cid",
    languageSelector: "Language selector",
    currentLanguage: "Current language",
    switchTo: "Switch to",
    mobileContactAria: "Go to the contact page"
  }
} satisfies Record<Locale, Record<string, string>>;

export const cookieText = {
  it: {
    bannerTitle: "Preferenze cookie",
    bannerText:
      "Usiamo strumenti necessari al funzionamento del sito. Con il tuo consenso possiamo attivare statistiche aggregate e contenuti esterni come Google Maps.",
    manage: "Gestisci preferenze",
    reject: "Rifiuta",
    accept: "Accetta",
    modalEyebrow: "Cookie",
    modalTitle: "Gestisci preferenze",
    closeLabel: "Chiudi preferenze cookie",
    necessary: "Necessari",
    necessaryDescription:
      "Servono al funzionamento del sito e al salvataggio delle preferenze. Sono sempre attivi.",
    statistics: "Statistiche",
    statisticsDescription: "Consentono statistiche aggregate tramite Vercel Analytics e Speed Insights.",
    external: "Contenuti esterni",
    externalDescription: "Consentono il caricamento di contenuti esterni, come la mappa di Google Maps.",
    save: "Salva preferenze",
    acceptAll: "Accetta tutto",
    preferencesButton: "Gestisci preferenze cookie"
  },
  en: {
    bannerTitle: "Cookie preferences",
    bannerText:
      "We use tools required for the website to work. With your consent, we can enable aggregated statistics and external content such as Google Maps.",
    manage: "Manage preferences",
    reject: "Reject",
    accept: "Accept",
    modalEyebrow: "Cookies",
    modalTitle: "Manage preferences",
    closeLabel: "Close cookie preferences",
    necessary: "Necessary",
    necessaryDescription:
      "Required for the website to work and to save your preferences. They are always active.",
    statistics: "Statistics",
    statisticsDescription: "Allow aggregated statistics through Vercel Analytics and Speed Insights.",
    external: "External content",
    externalDescription: "Allow external content to load, such as the Google Maps map.",
    save: "Save preferences",
    acceptAll: "Accept all",
    preferencesButton: "Manage cookie preferences"
  }
} satisfies Record<Locale, Record<string, string>>;

export const catalogUiText = {
  it: {
    openLarge: "Apri immagine grande per",
    imageSingular: "immagine",
    imagePlural: "immagini",
    viewGallery: "Vedi la galleria",
    askInfo: "Chiedi informazioni",
    gallery: "Galleria",
    closeGallery: "Chiudi la galleria",
    previousImage: "Immagine precedente",
    nextImage: "Immagine successiva",
    goToImage: "Vai all'immagine"
  },
  en: {
    openLarge: "Open large image for",
    imageSingular: "image",
    imagePlural: "images",
    viewGallery: "View gallery",
    askInfo: "Ask for information",
    gallery: "Gallery",
    closeGallery: "Close gallery",
    previousImage: "Previous image",
    nextImage: "Next image",
    goToImage: "Go to image"
  }
} satisfies Record<Locale, Record<string, string>>;

export const contactFormText = {
  it: {
    hiddenWebsite: "Website",
    name: "Nome e cognome",
    company: "Nome del negozio / attività",
    email: "Email",
    phone: "Telefono",
    city: "Città",
    message: "Messaggio",
    privacy:
      "Accetto il trattamento dei dati personali per essere ricontattato in merito alla mia richiesta.",
    loadingAntispam: "Caricamento verifica antispam...",
    antispamFailed: "Verifica antispam non caricata. Ricarica la pagina o riprova tra poco.",
    antispamMissing: "Verifica antispam non configurata.",
    submitting: "Invio in corso...",
    submit: "Invia richiesta",
    success: "Grazie, la tua richiesta è stata inviata correttamente. Ti ricontatteremo al più presto.",
    requiredError: "Completa i campi obbligatori e controlla che l'email sia corretta.",
    privacyError: "Per inviare la richiesta è necessario accettare il trattamento dei dati personali.",
    turnstileError:
      "Completa la verifica antispam prima di inviare. Se non appare, ricarica la pagina o riprova tra poco.",
    sendError:
      "Si è verificato un errore durante l’invio. Riprova tra poco o contattaci direttamente via email.",
    b2bNote:
      "Le richieste sono rivolte a negozi, botteghe e punti vendita. Non effettuiamo vendita online o vendita diretta al pubblico dalla sede produttiva."
  },
  en: {
    hiddenWebsite: "Website",
    name: "Full name",
    company: "Shop / business name",
    email: "Email",
    phone: "Phone",
    city: "City",
    message: "Message",
    privacy:
      "I consent to the processing of my personal data so I can be contacted about my request.",
    loadingAntispam: "Loading anti-spam check...",
    antispamFailed: "Anti-spam verification did not load. Reload the page or try again shortly.",
    antispamMissing: "Anti-spam verification is not configured.",
    submitting: "Sending...",
    submit: "Send request",
    success: "Thank you, your request has been sent successfully. We will contact you as soon as possible.",
    requiredError: "Complete the required fields and check that the email address is correct.",
    privacyError: "To send the request, you need to accept the processing of your personal data.",
    turnstileError:
      "Complete the anti-spam verification before sending. If it does not appear, reload the page or try again shortly.",
    sendError:
      "An error occurred while sending. Please try again shortly or contact us directly by email.",
    b2bNote:
      "Requests are intended for shops, boutiques and points of sale. We do not sell online or directly to the public from the workshop."
  }
} satisfies Record<Locale, Record<string, string>>;

export const mapText = {
  it: {
    title: "Mappa per Ceramiche Artistiche Bressan C2 a Pianezze",
    eyebrow: "Google Maps",
    blockedTitle: "Mappa non caricata",
    blockedText: "Per visualizzare la mappa di Google Maps è necessario accettare i contenuti esterni.",
    accept: "Accetta e mostra la mappa",
    open: "Apri su Google Maps"
  },
  en: {
    title: "Map for Ceramiche Artistiche Bressan C2 in Pianezze",
    eyebrow: "Google Maps",
    blockedTitle: "Map not loaded",
    blockedText: "To view the Google Maps map, you need to accept external content.",
    accept: "Accept and show the map",
    open: "Open in Google Maps"
  }
} satisfies Record<Locale, Record<string, string>>;

export const legalText = {
  it: {
    lastUpdated: "4 luglio 2026",
    privacy: {
      eyebrow: "Informativa",
      title: "Privacy Policy",
      intro:
        "Informazioni sul trattamento dei dati personali raccolti tramite questo sito e tramite il modulo di richiesta informazioni.",
      sections: [
        {
          title: "Titolare del trattamento",
          paragraphs: [
            "Il titolare del trattamento è {legalName}, con sede in {address}, C.F. / P.IVA {vat}.",
            "Email di contatto: {email}.",
            "Per richieste relative alla privacy è possibile utilizzare lo stesso recapito email indicato sopra."
          ]
        },
        {
          title: "Dati raccolti",
          paragraphs: [
            "Il modulo di contatto può raccogliere nome e cognome, nome del negozio o attività, email, telefono, città, messaggio e consenso al trattamento dei dati personali per essere ricontattati in merito alla richiesta inviata.",
            "Il sito può inoltre trattare dati tecnici necessari al funzionamento, alla sicurezza e alla protezione antispam del modulo.",
            "Le preferenze cookie e servizi esterni vengono salvate localmente nel browser per ricordare la scelta dell’utente."
          ]
        },
        {
          title: "Finalità del trattamento",
          paragraphs: [
            "I dati inviati tramite il modulo vengono utilizzati per rispondere alle richieste ricevute, fornire informazioni sulle linee disponibili, valutare collaborazioni con negozi, botteghe e punti vendita e gestire comunicazioni collegate alla richiesta.",
            "I dati tecnici possono essere utilizzati per sicurezza, prevenzione dello spam, funzionamento del sito, gestione delle preferenze e, solo con consenso, statistiche aggregate del traffico."
          ]
        },
        {
          title: "Base giuridica",
          paragraphs: [
            "Il trattamento dei dati inviati volontariamente tramite il modulo di contatto si basa sull'esecuzione di misure precontrattuali richieste dall'interessato e sul consenso espresso per essere ricontattati in merito alla richiesta inviata.",
            "I trattamenti tecnici necessari al funzionamento, alla sicurezza del sito e alla prevenzione dello spam si basano sul legittimo interesse del titolare a mantenere il sito sicuro e correttamente funzionante."
          ]
        },
        {
          title: "Conservazione",
          paragraphs: [
            "I dati saranno conservati per il tempo necessario a gestire la richiesta e gli eventuali rapporti successivi con il punto vendita interessato. In assenza di rapporti commerciali successivi, le richieste ricevute tramite il modulo sono conservate di norma per un periodo massimo di 24 mesi, salvo obblighi di legge o necessità di tutela dei diritti del titolare."
          ]
        },
        {
          title: "Diritti dell’interessato",
          paragraphs: [
            "L’interessato può richiedere accesso, rettifica, cancellazione, limitazione, opposizione al trattamento e portabilità dei dati nei casi previsti dalla normativa applicabile.",
            "Le richieste possono essere inviate ai recapiti indicati in questa informativa.",
            "L’interessato ha inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali."
          ]
        }
      ],
      thirdPartyTitle: "Servizi terzi",
      thirdPartyServices: [
        {
          name: "Resend",
          text: "servizio utilizzato lato server per l'invio delle email generate dal modulo di contatto."
        },
        {
          name: "Cloudflare Turnstile",
          text: "servizio antispam utilizzato per verificare che l'invio del modulo non provenga da sistemi automatici."
        },
        {
          name: "Vercel Analytics e Speed Insights",
          text: "strumenti di statistiche aggregate e misurazione delle prestazioni, attivati solo se l'utente accetta la categoria Statistiche."
        },
        {
          name: "Google Maps",
          text: "contenuto esterno disponibile nella pagina Contatti, caricato nella pagina solo dopo il consenso ai Contenuti esterni."
        }
      ],
      updatedTitle: "Ultimo aggiornamento"
    },
    cookie: {
      eyebrow: "Informativa",
      title: "Cookie Policy",
      intro:
        "Informazioni sull'uso di cookie, tecnologie simili e servizi terzi collegati al funzionamento di questo sito.",
      sections: [
        {
          title: "Titolare",
          paragraphs: [
            "Il sito è riferito a {legalName}, con sede in {address}, C.F. / P.IVA {vat}.",
            "Per richieste relative a cookie e privacy è possibile scrivere a {email}."
          ]
        },
        {
          title: "Cookie tecnici",
          paragraphs: [
            "Il sito può utilizzare cookie tecnici o tecnologie equivalenti necessari al corretto funzionamento delle pagine, alla sicurezza e alla gestione del modulo di contatto.",
            "Le preferenze espresse nel banner vengono salvate localmente nel browser per ricordare la scelta dell’utente. Questa memorizzazione è considerata necessaria alla gestione del consenso."
          ]
        },
        {
          title: "Consenso e preferenze",
          paragraphs: [
            "Il banner permette di accettare, rifiutare o gestire separatamente Statistiche e Contenuti esterni. Le preferenze possono essere modificate in qualsiasi momento dal link nel footer.",
            "L'utente può gestire o bloccare i cookie e tecnologie simili anche attraverso le impostazioni del proprio browser. La disattivazione di alcune funzioni può limitare la corretta visualizzazione di servizi esterni, come la mappa.",
            "Per i trattamenti collegati ai cookie, l'utente ha anche diritto di proporre reclamo al Garante per la protezione dei dati personali."
          ]
        }
      ],
      servicesTitle: "Servizi terzi",
      services: [
        {
          title: "Cloudflare Turnstile",
          text: "usato nel modulo di contatto per prevenire invii automatici e spam. Può trattare dati tecnici necessari alla verifica."
        },
        {
          title: "Vercel Analytics e Speed Insights",
          text: "usati per statistiche aggregate e misurazione delle prestazioni. Vengono caricati solo se l'utente accetta la categoria Statistiche."
        },
        {
          title: "Google Maps",
          text: "disponibile nella pagina Contatti per mostrare la sede produttiva. L'iframe viene caricato solo dopo il consenso ai Contenuti esterni."
        },
        {
          title: "Resend",
          text: "utilizzato lato server per inviare le richieste del modulo via email; non è un widget di tracciamento nel browser."
        }
      ],
      updatedTitle: "Aggiornamento"
    }
  },
  en: {
    lastUpdated: "July 4, 2026",
    privacy: {
      eyebrow: "Notice",
      title: "Privacy Policy",
      intro:
        "Information about the processing of personal data collected through this website and through the information request form.",
      sections: [
        {
          title: "Data controller",
          paragraphs: [
            "The data controller is {legalName}, with registered office at {address}, tax code / VAT no. {vat}.",
            "Contact email: {email}.",
            "Privacy-related requests may be sent to the same email address indicated above."
          ]
        },
        {
          title: "Data collected",
          paragraphs: [
            "The contact form may collect full name, shop or business name, email, phone number, city, message and consent to personal data processing in order to be contacted about the submitted request.",
            "The website may also process technical data necessary for operation, security and anti-spam protection of the form.",
            "Cookie and external-service preferences are stored locally in the browser to remember the user's choice."
          ]
        },
        {
          title: "Purposes of processing",
          paragraphs: [
            "Data submitted through the form is used to respond to requests, provide information about available lines, evaluate collaborations with shops, boutiques and points of sale, and manage communications related to the request.",
            "Technical data may be used for security, spam prevention, website operation, preference management and, only with consent, aggregated traffic statistics."
          ]
        },
        {
          title: "Legal basis",
          paragraphs: [
            "Processing of data voluntarily submitted through the contact form is based on pre-contractual measures requested by the data subject and on the consent given to be contacted about the submitted request.",
            "Technical processing necessary for website operation, security and spam prevention is based on the controller's legitimate interest in keeping the website secure and properly functioning."
          ]
        },
        {
          title: "Retention",
          paragraphs: [
            "Data will be retained for the time necessary to manage the request and any subsequent relationship with the interested point of sale. In the absence of subsequent commercial relationships, requests received through the form are normally retained for a maximum period of 24 months, unless legal obligations or the need to protect the controller's rights require otherwise."
          ]
        },
        {
          title: "Data subject rights",
          paragraphs: [
            "The data subject may request access, rectification, erasure, restriction, objection to processing and data portability in the cases provided for by applicable law.",
            "Requests may be sent to the contact details indicated in this notice.",
            "The data subject also has the right to lodge a complaint with the Italian Data Protection Authority."
          ]
        }
      ],
      thirdPartyTitle: "Third-party services",
      thirdPartyServices: [
        {
          name: "Resend",
          text: "server-side service used to send emails generated by the contact form."
        },
        {
          name: "Cloudflare Turnstile",
          text: "anti-spam service used to verify that form submissions do not come from automated systems."
        },
        {
          name: "Vercel Analytics and Speed Insights",
          text: "aggregated statistics and performance measurement tools, activated only if the user accepts the Statistics category."
        },
        {
          name: "Google Maps",
          text: "external content available on the Contact page, loaded only after consent to External content."
        }
      ],
      updatedTitle: "Last updated"
    },
    cookie: {
      eyebrow: "Notice",
      title: "Cookie Policy",
      intro:
        "Information about the use of cookies, similar technologies and third-party services connected to the operation of this website.",
      sections: [
        {
          title: "Controller",
          paragraphs: [
            "This website refers to {legalName}, with registered office at {address}, tax code / VAT no. {vat}.",
            "For cookie and privacy requests, you can write to {email}."
          ]
        },
        {
          title: "Technical cookies",
          paragraphs: [
            "The website may use technical cookies or equivalent technologies necessary for correct page operation, security and management of the contact form.",
            "Preferences expressed in the banner are stored locally in the browser to remember the user's choice. This storage is considered necessary for consent management."
          ]
        },
        {
          title: "Consent and preferences",
          paragraphs: [
            "The banner allows users to accept, reject or separately manage Statistics and External content. Preferences can be changed at any time through the link in the footer.",
            "Users can also manage or block cookies and similar technologies through their browser settings. Disabling some functions may limit the correct display of external services, such as the map.",
            "For processing related to cookies, users also have the right to lodge a complaint with the Italian Data Protection Authority."
          ]
        }
      ],
      servicesTitle: "Third-party services",
      services: [
        {
          title: "Cloudflare Turnstile",
          text: "used in the contact form to prevent automated submissions and spam. It may process technical data necessary for verification."
        },
        {
          title: "Vercel Analytics and Speed Insights",
          text: "used for aggregated statistics and performance measurement. They are loaded only if the user accepts the Statistics category."
        },
        {
          title: "Google Maps",
          text: "available on the Contact page to show the production workshop. The iframe is loaded only after consent to External content."
        },
        {
          title: "Resend",
          text: "used server-side to send form requests by email; it is not a browser tracking widget."
        }
      ],
      updatedTitle: "Updated"
    }
  }
} satisfies Record<Locale, Record<string, unknown>>;

export const pageText = {
  it: {
    home: {
      heroEyebrow: "Bottega artigiana a Pianezze",
      heroTitle: "Ceramiche artistiche dipinte a mano",
      heroIntro:
        "Creazioni in ceramica per la casa, la tavola e il regalo, pensate per arricchire negozi, botteghe e punti vendita con il valore dell’artigianato italiano.",
      heroPrimary: "Sfoglia il catalogo",
      heroSecondary: "Scopri le collezioni",
      workshopEyebrow: "La bottega",
      workshopTitle: "Ceramiche nate per essere esposte, raccontate e scelte",
      workshopIntro:
        "Lavoriamo con negozi, botteghe e punti vendita che desiderano proporre ceramiche artistiche italiane, curate nei dettagli e dal carattere autentico.",
      workshopParagraphs: [
        "A Pianezze, nel territorio vicentino, Bressan C2 realizza ceramiche artistiche, oggettistica varia e prodotti per la casa, la tavola, la cucina e il regalo con un linguaggio caldo, familiare e riconoscibile.",
        "Il sito è una vetrina di creazioni e collezioni: per conoscere disponibilità e dettagli, il contatto avviene direttamente con l’azienda."
      ],
      pillars: [
        {
          title: "Tradizione artigianale",
          text: "Una bottega legata al territorio vicentino, dove forme e colori conservano il calore della ceramica italiana."
        },
        {
          title: "Decorazioni dipinte a mano",
          text: "Decori, pennellate e piccoli dettagli rendono ogni creazione riconoscibile, viva e naturalmente diversa."
        },
        {
          title: "Creazioni per negozi e punti vendita",
          text: "Oggetti in ceramica pensati per arricchire esposizioni, vetrine e spazi dedicati alla casa e al regalo."
        }
      ],
      collectionsEyebrow: "Collezioni",
      collectionsTitle: "Una selezione per casa, tavola e regalo",
      collectionsIntro:
        "Una panoramica di famiglie decorative e ispirazioni: ogni richiesta viene gestita con contatto diretto.",
      retailEyebrow: "Pensate per il punto vendita",
      retailTitle: "Oggetti da esporre, raccontare e scegliere",
      retailIntro:
        "Le nostre ceramiche nascono per essere esposte, raccontate e scelte: oggetti decorativi e funzionali che portano nel negozio il calore della lavorazione artigianale italiana.",
      retailPrimary: "Per negozi",
      retailSecondary: "Scopri le collezioni",
      heroAlt: "Laboratorio Bressan C2 con ceramiche artistiche dipinte a mano",
      detailAlt: "Dettagli di decorazione manuale su ceramica"
    },
    cta: {
      eyebrow: "Contatto diretto",
      title: "Cerchi ceramiche artigianali per il tuo punto vendita?",
      text: "Contattaci per conoscere le linee disponibili e valutare insieme le creazioni più adatte al tuo spazio."
    },
    azienda: {
      heroEyebrow: "Azienda",
      heroTitle: "Una bottega artigiana nel territorio vicentino",
      heroIntro:
        "Da Bressan C2 la ceramica nasce come oggetto decorativo e funzionale: forme, colori e dettagli pensati per portare nei punti vendita il calore della lavorazione artigianale italiana.",
      heroAlt: "Bottega artigiana di ceramiche a Pianezze",
      paragraphs: [
        "Ceramiche Artistiche Bressan C2 opera a Pianezze, in un territorio vicentino dove la ceramica conserva un forte legame con la casa, la tavola e gli oggetti decorativi. La bottega realizza ceramiche artistiche, oggettistica varia e prodotti per la cucina con un linguaggio caldo, familiare e riconoscibile.",
        "Il lavoro artigianale si riconosce nella cura delle superfici, nella scelta dei colori e nell’attenzione al dettaglio. Ogni creazione viene pensata per essere proposta in un punto vendita con un carattere riconoscibile, caldo e autenticamente artigianale.",
        "La continuità familiare e la dimensione artigianale permettono un rapporto diretto con negozi, botteghe e realtà che scelgono ceramiche italiane da inserire nel proprio assortimento con cura.",
        "Non una piattaforma di vendita online, ma una vetrina di forme e decori da conoscere attraverso catalogo visuale, richiesta di informazioni e contatto diretto."
      ],
      retailEyebrow: "Per negozi e punti vendita",
      retailTitle: "Creazioni artigianali da inserire nel tuo spazio",
      retailText:
        "Le nostre creazioni sono rivolte a negozi, botteghe e punti vendita dedicati alla casa, al regalo e al turismo, che cercano oggetti in ceramica artistica da proporre con identità e valore artigianale.",
      locationEyebrow: "Dove lavoriamo",
      locationTitle: "Pianezze, nel territorio vicentino",
      locationIntro:
        "La nostra sede produttiva si trova a Pianezze, in provincia di Vicenza. Da qui realizziamo ceramiche artistiche dipinte a mano per negozi, botteghe e punti vendita.",
      productionSite: "Sede produttiva",
      directionsText: "Per indicazioni, contatti e mappa completa puoi visitare la pagina contatti.",
      directionsButton: "Vedi contatti e mappa",
      companyData: "Dati aziendali",
      visibleName: "Nome visibile",
      legalName: "Ragione sociale",
      address: "Indirizzo",
      phone: "Telefono",
      email: "Email",
      vat: "P.IVA / C.F.",
      activity: "Attività",
      activityText:
        "Ceramiche artistiche, oggettistica varia in ceramica, prodotti in ceramica per la casa e la cucina, dipinti a mano."
    },
    creazioni: {
      eyebrow: "Creazioni e collezioni",
      title: "Collezioni artigianali in ceramica",
      intro:
        "Una panoramica delle proposte Bressan C2 per negozi casa, regalo, botteghe e punti vendita che scelgono prodotti artigianali italiani.",
      notice:
        "Le immagini rappresentano esempi di produzione. Per conoscere linee disponibili e dettagli sulle creazioni, contattaci direttamente.",
      productEyebrow: "Dal tema al prodotto",
      productTitle: "Una lettura ordinata delle proposte",
      productIntro:
        "Questa pagina presenta le famiglie decorative e le direzioni di assortimento. Il catalogo raccoglie invece le serie fotografiche complete, con tutti gli esempi disponibili per ogni tema.",
      promptTitle: "Vuoi vedere gli esempi concreti?",
      promptText:
        "Nel catalogo trovi le linee come agrumi, limoni, pizza, Linea Pasta, ortaggi, fiori e mare, con tutte le immagini disponibili per ciascuna serie.",
      promptButton: "Vai al catalogo"
    },
    catalogo: {
      eyebrow: "Catalogo",
      title: "Esempi fotografici per tema",
      intro:
        "Una selezione organizzata di ceramiche artistiche per negozi, botteghe e punti vendita. Ogni scheda raccoglie tutte le immagini disponibili della stessa linea o famiglia di prodotto.",
      notice:
        "Le immagini rappresentano esempi di prodotto. Per disponibilità e dettagli sulle linee, contattaci direttamente.",
      indexLabel: "Indice del catalogo",
      ctaEyebrow: "Collezioni per il punto vendita",
      ctaTitle: "Parliamo delle linee disponibili",
      ctaText:
        "Se hai un negozio, una bottega o un punto vendita, contattaci per ricevere maggiori informazioni sulle linee più adatte al tuo assortimento.",
      ctaButton: "Richiedi informazioni"
    },
    retailers: {
      eyebrow: "Per negozi",
      title: "Ceramiche artigianali per il tuo negozio",
      intro:
        "Collaboriamo con negozi, botteghe e punti vendita che cercano oggetti in ceramica curati, decorativi e dal carattere italiano.",
      collaborationsEyebrow: "Collaborazioni",
      collaborationsTitle: "Per chi lavoriamo",
      collaborationsIntro:
        "Le nostre creazioni trovano spazio in realtà che scelgono oggetti artigianali italiani da esporre e raccontare.",
      audiences: [
        "Negozi di articoli regalo",
        "Negozi per la casa",
        "Botteghe artigiane",
        "Negozi di ceramiche",
        "Punti vendita turistici",
        "Concept store",
        "Attività commerciali"
      ],
      valueEyebrow: "Valore professionale",
      valueTitle: "Perché scegliere Bressan C2",
      valueIntro:
        "Una produzione artigianale riconoscibile aiuta il negozio a proporre oggetti con identità, cura del dettaglio e valore decorativo.",
      reasons: [
        "Produzione artigianale",
        "Estetica italiana",
        "Oggetti decorativi e funzionali",
        "Cura della decorazione",
        "Ceramiche adatte all’esposizione in negozio",
        "Contatto diretto per informazioni e dettagli"
      ],
      finalTitle: "Vuoi inserire le nostre ceramiche nel tuo negozio?",
      finalText:
        "Contattaci per conoscere le linee disponibili e valutare insieme le creazioni più adatte al tuo punto vendita.",
      finalButton: "Contattaci"
    },
    lavorazione: {
      eyebrow: "Lavorazione artigianale",
      title: "La qualità si vede nei dettagli",
      intro:
        "La ceramica artigianale richiede tempo, sensibilità e attenzione. Bressan C2 valorizza il lavoro manuale per creare oggetti caldi, curati e riconoscibili.",
      imageAlt: "Decorazione manuale di una ceramica artistica",
      steps: [
        {
          title: "Decorazione manuale",
          text: "Il decoro nasce dal gesto della mano: colori, pennellate e piccoli segni rendono ogni ceramica personale e riconoscibile."
        },
        {
          title: "Cura dei dettagli",
          text: "Bordi, superfici e proporzioni vengono osservati con attenzione, per ottenere oggetti piacevoli da usare e da esporre."
        },
        {
          title: "Smalti, colori e finiture",
          text: "La scelta cromatica accompagna la forma e valorizza il carattere della ceramica, tra toni classici e richiami alla tradizione."
        },
        {
          title: "Produzione pensata per durare",
          text: "Le creazioni sono pensate per mantenere valore nel tempo e portare nel punto vendita una presenza curata e riconoscibile."
        }
      ],
      finalTitle: "Vuoi conoscere le linee disponibili?",
      finalText:
        "Se hai un negozio, una bottega o un punto vendita, contattaci per conoscere prodotti, categorie e disponibilità.",
      finalButton: "Richiedi informazioni"
    },
    contatti: {
      eyebrow: "Contatti",
      title: "Parliamo del tuo punto vendita",
      intro:
        "Per informazioni sulle linee disponibili, sulle collaborazioni con negozi e botteghe o sulle creazioni più adatte al tuo assortimento, inviaci una richiesta o contattaci direttamente.",
      infoTitle: "Informazioni per negozi",
      infoText:
        "Raccontaci il tipo di negozio, la zona e le linee che ti interessano: ti risponderemo con indicazioni chiare e adatte al tuo assortimento.",
      highlights: [
        "Linee disponibili per negozi e punti vendita",
        "Informazioni su assortimento e collaborazioni",
        "Produzione artigianale a Pianezze, Vicenza"
      ],
      phone: "Telefono",
      productionSite: "Sede produttiva",
      commercialRequests: "Richieste commerciali",
      formAnchor: "Vai al modulo",
      formEyebrow: "Modulo",
      formTitle: "Richiedi informazioni",
      formIntro:
        "Compila il modulo per ricevere informazioni sulle linee disponibili, sulle collaborazioni con negozi e sui prodotti più adatti al tuo punto vendita.",
      directTitle: "Preferisci scriverci direttamente?",
      mapEyebrow: "Dove siamo",
      mapTitle: "Via San Giuseppe, 9 - Pianezze",
      mapText:
        "La sede produttiva di Ceramiche Artistiche Bressan C2 si trova a Pianezze, in provincia di Vicenza."
    }
  },
  en: {
    home: {
      heroEyebrow: "Artisan workshop in Pianezze",
      heroTitle: "Hand-painted artistic ceramics",
      heroIntro:
        "Ceramic creations for the home, table and gift sector, designed to enrich shops, boutiques and points of sale with the value of Italian craftsmanship.",
      heroPrimary: "Browse the catalog",
      heroSecondary: "Discover the collections",
      workshopEyebrow: "The workshop",
      workshopTitle: "Ceramics made to be displayed, described and chosen",
      workshopIntro:
        "We work with shops, boutiques and points of sale that want to offer Italian artistic ceramics with careful details and an authentic character.",
      workshopParagraphs: [
        "In Pianezze, in the Vicenza area, Bressan C2 creates artistic ceramics, decorative objects and pieces for the home, table, kitchen and gift sector with a warm, familiar and recognizable language.",
        "This website is a showcase of creations and collections: availability and details are handled through direct contact with the company."
      ],
      pillars: [
        {
          title: "Artisan tradition",
          text: "A workshop rooted in the Vicenza area, where shapes and colors preserve the warmth of Italian ceramics."
        },
        {
          title: "Hand-painted decoration",
          text: "Decorations, brushstrokes and small details make every creation recognizable, alive and naturally unique."
        },
        {
          title: "Pieces for shops and points of sale",
          text: "Ceramic objects designed to enrich displays, windows and spaces dedicated to the home and gift sector."
        }
      ],
      collectionsEyebrow: "Collections",
      collectionsTitle: "A selection for the home, table and gift sector",
      collectionsIntro:
        "An overview of decorative families and inspirations: every request is handled through direct contact.",
      retailEyebrow: "Designed for retail displays",
      retailTitle: "Objects to display, describe and choose",
      retailIntro:
        "Our ceramics are made to be displayed, described and chosen: decorative and functional objects that bring the warmth of Italian artisan work into the shop.",
      retailPrimary: "For retailers",
      retailSecondary: "Discover the collections",
      heroAlt: "Bressan C2 workshop with hand-painted artistic ceramics",
      detailAlt: "Details of hand decoration on ceramic"
    },
    cta: {
      eyebrow: "Direct contact",
      title: "Looking for artisan ceramics for your point of sale?",
      text: "Contact us to learn about available lines and choose together the creations best suited to your space."
    },
    azienda: {
      heroEyebrow: "Company",
      heroTitle: "An artisan workshop in the Vicenza area",
      heroIntro:
        "At Bressan C2, ceramics are created as decorative and functional objects: shapes, colors and details designed to bring the warmth of Italian artisan work into points of sale.",
      heroAlt: "Artisan ceramic workshop in Pianezze",
      paragraphs: [
        "Ceramiche Artistiche Bressan C2 works in Pianezze, in the Vicenza area, where ceramics keep a strong connection with the home, the table and decorative objects. The workshop creates artistic ceramics, decorative pieces and kitchen items with a warm, familiar and recognizable language.",
        "The artisan work can be seen in the care given to surfaces, the choice of colors and the attention to detail. Every creation is designed to be presented in a point of sale with a recognizable, warm and authentically handmade character.",
        "Family continuity and the artisan scale of the workshop allow a direct relationship with shops, boutiques and businesses that choose Italian ceramics for carefully curated assortments.",
        "This is not an online shop, but a showcase of shapes and decorations to explore through the visual catalog, information requests and direct contact."
      ],
      retailEyebrow: "For shops and points of sale",
      retailTitle: "Artisan creations for your retail space",
      retailText:
        "Our creations are intended for shops, boutiques and points of sale dedicated to the home, gift and tourism sectors, looking for artistic ceramic objects with identity and artisan value.",
      locationEyebrow: "Where we work",
      locationTitle: "Pianezze, in the Vicenza area",
      locationIntro:
        "Our production workshop is in Pianezze, in the province of Vicenza. From here we create hand-painted artistic ceramics for shops, boutiques and points of sale.",
      productionSite: "Production workshop",
      directionsText: "For directions, contact details and the full map, visit the contact page.",
      directionsButton: "View contact details and map",
      companyData: "Company details",
      visibleName: "Public name",
      legalName: "Legal name",
      address: "Address",
      phone: "Phone",
      email: "Email",
      vat: "VAT / tax code",
      activity: "Activity",
      activityText:
        "Artistic ceramics, decorative ceramic objects, ceramic products for the home and kitchen, hand-painted."
    },
    creazioni: {
      eyebrow: "Creations and collections",
      title: "Artisan ceramic collections",
      intro:
        "An overview of Bressan C2 proposals for homeware shops, gift stores, boutiques and points of sale choosing Italian artisan products.",
      notice:
        "The images show examples of production. To learn about available lines and details, contact us directly.",
      productEyebrow: "From motif to product",
      productTitle: "An organized view of the proposals",
      productIntro:
        "This page presents the decorative families and assortment directions. The catalog gathers the complete photographic series, with all available examples for each theme.",
      promptTitle: "Would you like to see concrete examples?",
      promptText:
        "In the catalog you will find lines such as citrus, lemons, pizza, Pasta line, vegetables, flowers and sea, with all available images for each series.",
      promptButton: "Go to catalog"
    },
    catalogo: {
      eyebrow: "Catalog",
      title: "Photographic examples by theme",
      intro:
        "An organized selection of artistic ceramics for shops, boutiques and points of sale. Each card gathers all available images from the same line or product family.",
      notice:
        "The images show product examples. For availability and details about the lines, contact us directly.",
      indexLabel: "Catalog index",
      ctaEyebrow: "Collections for points of sale",
      ctaTitle: "Let’s discuss the available lines",
      ctaText:
        "If you have a shop, boutique or point of sale, contact us to receive more information about the lines best suited to your assortment.",
      ctaButton: "Request information"
    },
    retailers: {
      eyebrow: "For retailers",
      title: "Artisan ceramics for your shop",
      intro:
        "We work with shops, boutiques and points of sale looking for carefully made, decorative ceramic objects with an Italian character.",
      collaborationsEyebrow: "Collaborations",
      collaborationsTitle: "Who we work with",
      collaborationsIntro:
        "Our creations find their place in businesses that choose Italian artisan objects to display and describe.",
      audiences: [
        "Gift shops",
        "Homeware shops",
        "Artisan boutiques",
        "Ceramic shops",
        "Tourist points of sale",
        "Concept stores",
        "Retail businesses"
      ],
      valueEyebrow: "Professional value",
      valueTitle: "Why choose Bressan C2",
      valueIntro:
        "A recognizable artisan production helps retailers offer objects with identity, attention to detail and decorative value.",
      reasons: [
        "Artisan production",
        "Italian aesthetic",
        "Decorative and functional objects",
        "Careful decoration",
        "Ceramics suited to retail display",
        "Direct contact for information and details"
      ],
      finalTitle: "Would you like to include our ceramics in your shop?",
      finalText:
        "Contact us to learn about available lines and evaluate together the creations best suited to your point of sale.",
      finalButton: "Contact us"
    },
    lavorazione: {
      eyebrow: "Artisan workmanship",
      title: "Quality is visible in the details",
      intro:
        "Artisan ceramics require time, sensitivity and attention. Bressan C2 values manual work to create warm, carefully made and recognizable objects.",
      imageAlt: "Hand decoration of an artistic ceramic piece",
      steps: [
        {
          title: "Hand decoration",
          text: "The decoration comes from the gesture of the hand: colors, brushstrokes and small marks make each ceramic personal and recognizable."
        },
        {
          title: "Attention to detail",
          text: "Edges, surfaces and proportions are carefully observed to obtain objects that are pleasant to use and to display."
        },
        {
          title: "Glazes, colors and finishes",
          text: "The color choices accompany the shape and enhance the character of the ceramic, between classic tones and references to tradition."
        },
        {
          title: "Production designed to last",
          text: "The creations are designed to retain value over time and bring a careful, recognizable presence into the point of sale."
        }
      ],
      finalTitle: "Would you like to learn about the available lines?",
      finalText:
        "If you have a shop, boutique or point of sale, contact us to learn about products, categories and availability.",
      finalButton: "Request information"
    },
    contatti: {
      eyebrow: "Contact",
      title: "Let’s talk about your point of sale",
      intro:
        "For information about available lines, collaborations with shops and boutiques, or the creations best suited to your assortment, send us a request or contact us directly.",
      infoTitle: "Information for shops",
      infoText:
        "Tell us about your type of shop, your area and the lines you are interested in: we will reply with clear information suited to your assortment.",
      highlights: [
        "Available lines for shops and points of sale",
        "Information about assortments and collaborations",
        "Artisan production in Pianezze, Vicenza"
      ],
      phone: "Phone",
      productionSite: "Production workshop",
      commercialRequests: "Business requests",
      formAnchor: "Go to the form",
      formEyebrow: "Form",
      formTitle: "Request information",
      formIntro:
        "Fill in the form to receive information about available lines, collaborations with shops and the products best suited to your point of sale.",
      directTitle: "Would you rather write to us directly?",
      mapEyebrow: "Where we are",
      mapTitle: "Via San Giuseppe, 9 - Pianezze",
      mapText:
        "The Ceramiche Artistiche Bressan C2 production workshop is located in Pianezze, in the province of Vicenza."
    }
  }
} satisfies Record<Locale, Record<string, unknown>>;

export function getSeoText(locale: Locale, routeKey: RouteKey) {
  return seoText[locale][routeKey];
}
