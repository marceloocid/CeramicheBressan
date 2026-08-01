import type { Locale } from "@/lib/i18n";

export type StoriaRecognition = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  imageOnRight: boolean;
};

type StoriaContent = {
  pageTitle: string;
  heroTitle: string;
  heroCaption: string;
  heroParagraphs: string[];
  recognitionsTitle: string;
  recognitionsIntro: string;
  companyTransition: string;
  recognitions: StoriaRecognition[];
  todayTitle: string;
  todayParagraphs: string[];
};

export const storiaContent: Record<Locale, StoriaContent> = {
  it: {
    pageTitle: "La nostra storia",
    heroTitle: "Bruno Bressan, nostro padre",
    heroCaption:
      "Bruno Bressan al lavoro in laboratorio, tra i biscuit di ceramica ancora da decorare.",
    heroParagraphs: [
      "Al centro di questa storia c'è Bruno Bressan. Per una vita intera le sue mani hanno plasmato la ceramica: ha imparato a conoscere ogni impasto, ogni tempo di essiccazione, ogni sfumatura di colore, molto prima che tutto questo diventasse un mestiere di famiglia.",
      "Inizia a lavorare giovanissimo, a soli 14 anni, come operaio in una ditta di ceramiche di Marostica. Dopo dieci anni sul campo ne diventa responsabile — ma non si ferma qui: insieme all'amico Francesco Muttin decide di mettersi in proprio, aprendo un piccolo laboratorio di ceramica sotto casa. Negli anni '70 i due costruiscono il capannone di Pianezze in cui l'azienda si trova ancora oggi, dando vita a Ceramiche Artistiche \"BreMu\" — il nome che unisce le famiglie Bressan e Muttin."
    ],
    recognitionsTitle: "I suoi riconoscimenti",
    recognitionsIntro:
      "Il suo impegno non è passato inosservato: nel corso degli anni Bruno è stato riconosciuto più volte dalla Camera di Commercio, dal Comune e dall'Associazione Artigiani di Vicenza — testimonianze concrete di un lavoro che ha saputo farsi conoscere ben oltre i confini di Pianezze:",
    companyTransition:
      "La società BreMu dura ventiquattro anni. Nel 1988 Bruno avvia una nuova attività: nasce così Ceramiche Bressan C2, la stessa azienda — con lo stesso nome — che portiamo avanti ancora oggi.",
    recognitions: [
      {
        src: "/images/storia/riconoscimento-medaglia-oro-1976.webp",
        width: 1400,
        height: 1000,
        alt: "Attestato di Benemerenza e Medaglia d'Oro conferiti a Ceramiche Artistiche Bre-Mu nel 1976",
        caption:
          "Medaglia d'Oro, Camera di Commercio di Vicenza, 8 settembre 1976 — per i meriti nel commercio con l'estero (l'azienda si chiamava allora Ceramiche Artistiche \"Bre=Mu\").",
        imageOnRight: false
      },
      {
        src: "/images/storia/dirigente-artigiano-benemerito-1990.webp",
        width: 1400,
        height: 1050,
        alt: "Riconoscimento Dirigente Artigiano Benemerito conferito a Bressan Bruno nel 1990",
        caption:
          "\"Dirigente Artigiano Benemerito\", Associazione Artigiani di Vicenza, 17 marzo 1990 — a Bressan Bruno.",
        imageOnRight: true
      },
      {
        src: "/images/storia/mostra-artigianato-marostica-1991.webp",
        width: 1400,
        height: 1020,
        alt: "Attestato della quindicesima Mostra dell'Artigianato di Marostica del 1991",
        caption:
          "15ª Mostra dell'Artigianato, Mandamento di Marostica — attestato di partecipazione, 1991.",
        imageOnRight: false
      },
      {
        src: "/images/storia/mostra-artigianato-trentennale-2007.webp",
        width: 1000,
        height: 1140,
        alt: "Attestato della Mostra dell'Artigianato del trentennale a Ceramiche Bressan C2 nel 2007",
        caption:
          "Mostra dell'Artigianato, ex Opificio \"Baggio\", Marostica — edizione del trentennale, 2007, come Ceramiche Bressan C2 di Bressan Bruno & Figli (Giovanni e Luca).",
        imageOnRight: true
      },
      {
        src: "/images/storia/bruno-bressan-premiazione-storica.webp",
        width: 1000,
        height: 1440,
        alt: "Bruno Bressan durante una premiazione storica mentre riceve un riconoscimento",
        caption: "Bruno Bressan riceve un riconoscimento.",
        imageOnRight: false
      }
    ],
    todayTitle: "Oggi",
    todayParagraphs: [
      "Bruno non c'è più, ma ogni volta che un nuovo pezzo viene dipinto a mano nel nostro laboratorio, in qualche modo la sua storia continua. Oggi la famiglia Bressan porta avanti a Pianezze la stessa cura artigianale e lo stesso legame con il territorio che lui ha coltivato per tutta la vita: le stesse mani, cambiate di generazione in generazione, la stessa attenzione a ogni dettaglio, in ogni pezzo che esce dal laboratorio.",
      "È un'eredità che non si conserva in una vetrina, ma nel gesto quotidiano di chi, ancora oggi, continua a lavorare la ceramica con la stessa cura di allora."
    ]
  },
  en: {
    pageTitle: "Our history",
    heroTitle: "Bruno Bressan, our father",
    heroCaption:
      "Bruno Bressan at work in the workshop, surrounded by ceramic bisque still waiting to be decorated.",
    heroParagraphs: [
      "At the heart of this story is Bruno Bressan. For an entire lifetime, his hands shaped ceramics: he learned to understand every clay body, every drying time and every shade of color, long before all of this became the family trade.",
      "He began working at a very young age, just 14, as an employee at a ceramics company in Marostica. After ten years of hands-on experience, he became its manager — but he did not stop there: together with his friend Francesco Muttin, he decided to set up on his own, opening a small ceramics workshop beneath his home. In the 1970s, the two built the factory in Pianezze where the company is still based today, founding Ceramiche Artistiche \"BreMu\" — a name combining the Bressan and Muttin families."
    ],
    recognitionsTitle: "His awards",
    recognitionsIntro:
      "His commitment did not go unnoticed: over the years, Bruno was recognized on several occasions by the Chamber of Commerce, the Municipality and the Vicenza Artisans Association — tangible acknowledgements of work that became known far beyond Pianezze:",
    companyTransition:
      "The BreMu partnership lasted twenty-four years. In 1988, Bruno started a new business: Ceramiche Bressan C2 was born, the same company — under the same name — that we continue to run today.",
    recognitions: [
      {
        src: "/images/storia/riconoscimento-medaglia-oro-1976.webp",
        width: 1400,
        height: 1000,
        alt: "Certificate of Merit and Gold Medal awarded to Ceramiche Artistiche Bre-Mu in 1976",
        caption:
          "Gold Medal, Vicenza Chamber of Commerce, 8 September 1976 — for achievements in foreign trade (the company was then called Ceramiche Artistiche \"Bre=Mu\").",
        imageOnRight: false
      },
      {
        src: "/images/storia/dirigente-artigiano-benemerito-1990.webp",
        width: 1400,
        height: 1050,
        alt: "Dirigente Artigiano Benemerito award presented to Bressan Bruno in 1990",
        caption:
          "\"Dirigente Artigiano Benemerito\" (Meritorious Artisan Executive), Associazione Artigiani di Vicenza, 17 March 1990 — awarded to Bressan Bruno.",
        imageOnRight: true
      },
      {
        src: "/images/storia/mostra-artigianato-marostica-1991.webp",
        width: 1400,
        height: 1020,
        alt: "Certificate from the 15th Craft Exhibition in Marostica in 1991",
        caption:
          "15th Craft Exhibition, Marostica District — certificate of participation, 1991.",
        imageOnRight: false
      },
      {
        src: "/images/storia/mostra-artigianato-trentennale-2007.webp",
        width: 1000,
        height: 1140,
        alt: "Certificate from the 30th-anniversary Craft Exhibition awarded to Ceramiche Bressan C2 in 2007",
        caption:
          "Craft Exhibition, former \"Baggio\" factory, Marostica — 30th-anniversary edition, 2007, as Ceramiche Bressan C2 di Bressan Bruno & Figli (Giovanni and Luca).",
        imageOnRight: true
      },
      {
        src: "/images/storia/bruno-bressan-premiazione-storica.webp",
        width: 1000,
        height: 1440,
        alt: "Bruno Bressan receiving an award during a historical ceremony",
        caption: "Bruno Bressan receives an award.",
        imageOnRight: false
      }
    ],
    todayTitle: "Today",
    todayParagraphs: [
      "Bruno is no longer with us, but every time a new piece is painted by hand in our workshop, his story somehow continues. Today, the Bressan family carries forward in Pianezze the same artisan care and the same bond with the local area that he nurtured throughout his life: the same hands, changed from one generation to the next, the same attention to every detail, in every piece that leaves the workshop.",
      "It is a legacy that is not preserved in a display case, but in the daily gesture of those who, even today, continue to work with ceramics with the same care as before."
    ]
  }
};

type StoriaHeroImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const storiaHeroImage: Record<Locale, StoriaHeroImage> = {
  it: {
    src: "/images/storia/bruno-bressan-laboratorio-dittico.webp",
    width: 1536,
    height: 2116,
    alt: "Due fotografie storiche di Bruno Bressan al lavoro in laboratorio tra ceramiche ancora da decorare"
  },
  en: {
    src: "/images/storia/bruno-bressan-laboratorio-dittico.webp",
    width: 1536,
    height: 2116,
    alt: "Two historical photographs of Bruno Bressan at work in the ceramics workshop among pieces still waiting to be decorated"
  }
};
