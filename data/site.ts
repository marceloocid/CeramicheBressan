export const site = {
  visibleName: "Ceramiche Artistiche Bressan C2",
  legalName: "Bressan C 2 Ceramiche di Bressan Bruno & Figli S.n.c.",
  address: "Via San Giuseppe, 9 — 36060 Pianezze (VI), Italia",
  streetAddress: "Via San Giuseppe, 9",
  city: "Pianezze",
  province: "Vicenza",
  postalCode: "36060",
  country: "IT",
  phone: "0424 75762",
  phoneHref: "tel:+39042475762",
  vat: "02084630249",
  facebookUrl: "https://www.facebook.com/people/Ceramiche-Bressan-C2/100057633592183/",
  email: "ceramichebressanc2@gmail.com",
  emailHref: "mailto:ceramichebressanc2@gmail.com",
  b2bNotice:
    "Le nostre creazioni sono destinate a negozi e punti vendita. Non effettuiamo vendita online o vendita diretta al pubblico dalla sede produttiva."
};

export const navItems = [
  { label: "Azienda", href: "/azienda" },
  { label: "Collezioni", href: "/creazioni" },
  { label: "Per negozi", href: "/per-rivenditori" },
  { label: "Catalogo", href: "/catalogo" },
  { label: "Contatti", href: "/contatti" }
];

export type ProductImage = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
};

export type CollectionCategory = {
  title: string;
  slug: string;
  image: string;
  alt: string;
  imageFit?: "cover" | "contain";
  description: string;
  themes: string[];
};

export type CatalogItem = {
  name: string;
  slug: string;
  category: string;
  theme: string;
  description: string;
  images: ProductImage[];
};

const image = (src: string, alt: string, fit: ProductImage["fit"] = "contain"): ProductImage => ({
  src,
  alt,
  fit
});

export const collectionCategories: CollectionCategory[] = [
  {
    title: "Ceramiche per la tavola",
    slug: "tavola",
    image: "/images/collezione-tavola.jpg",
    alt: "Piatti e vassoi in ceramica decorati per la tavola",
    imageFit: "cover",
    description:
      "Piatti, vassoi, ciotole e servizi coordinati pensati per negozi casa, botteghe e punti vendita con un assortimento artigianale italiano.",
    themes: ["Servizi decorati", "Piatti e vassoi", "Caprese e pomodori"]
  },
  {
    title: "Cucina e servizio",
    slug: "cucina",
    image: "/images/limoni/ChatGPT Image 20 jun 2026, 21_26_28.png",
    alt: "Caraffe e accessori in ceramica con decoro limoni",
    description:
      "Accessori da cucina, contenitori, caraffe e piccoli oggetti funzionali con decori riconoscibili e luminosi.",
    themes: ["Limoni", "Olive", "Ortaggi", "Asparagi"]
  },
  {
    title: "Decori gastronomici italiani",
    slug: "gastronomia",
    image: "/images/pizza_e_bruschette/ChatGPT Image 21 jun 2026, 18_32_20 (3).png",
    alt: "Piatti e taglieri in ceramica decorati per pizza e bruschette",
    description:
      "Linee ispirate alla tavola italiana, adatte a negozi regalo, concept store e spazi dedicati alla cucina mediterranea.",
    themes: ["Pizza e bruschette", "Linea Pasta", "Caprese"]
  },
  {
    title: "Frutta, agrumi e vendemmia",
    slug: "frutta",
    image: "/images/agrumi/ChatGPT Image 20 jun 2026, 18_29_35 (1).png",
    alt: "Servizio in ceramica con decoro agrumi",
    description:
      "Decori con limoni, arance, uva, frutti di bosco e frutta mista per assortimenti vivaci ma ordinati.",
    themes: ["Agrumi", "Frutta mista", "Frutti di bosco", "Uva"]
  },
  {
    title: "Natura, fiori e mare",
    slug: "natura",
    image: "/images/mare/ChatGPT Image 20 jun 2026, 18_17_43 (2).png",
    alt: "Oggetti in ceramica con decori marini",
    description:
      "Proposte decorative legate a fiori, paesaggi marini e motivi naturali, pensate anche per punti vendita turistici.",
    themes: ["Fiori", "Mare", "Souvenir decorativi"]
  },
  {
    title: "Complementi e idee regalo",
    slug: "regalo",
    image: "/images/oggetto-regalo.jpg",
    alt: "Oggetto regalo in ceramica artigianale",
    imageFit: "contain",
    description:
      "Vasi, complementi e piccoli oggetti decorativi per arricchire l'esposizione con pezzi facili da proporre al punto vendita.",
    themes: ["Vasi", "Oggettistica", "Decorazioni dipinte a mano"]
  }
];

export const catalogItems: CatalogItem[] = [
  {
    name: "Linea agrumi",
    slug: "agrumi",
    category: "frutta",
    theme: "Agrumi",
    description:
      "Servizi, tazze e piccoli complementi con decori di arance e limoni, adatti a una vetrina luminosa e mediterranea.",
    images: [
      image("/images/agrumi/ChatGPT Image 20 jun 2026, 18_29_35 (3).png", "Composizione da tavola con decoro arance e limoni"),
      image("/images/agrumi/ChatGPT Image 20 jun 2026, 18_29_35 (2).png", "Tazze e vassoio in ceramica con decoro agrumi"),
      image("/images/agrumi/ChatGPT Image 20 jun 2026, 18_29_35 (1).png", "Servizio in ceramica decorato con agrumi"),
      image("/images/agrumi/ChatGPT Image 20 jun 2026, 18_29_36 (4).png", "Bicchieri e vassoio in ceramica con agrumi")
    ]
  },
  {
    name: "Linea limoni",
    slug: "limoni",
    category: "cucina",
    theme: "Limoni",
    description:
      "Caraffe, bottiglie, servizi e accessori con decoro limoni, pensati per negozi casa e assortimenti estivi.",
    images: [
      image("/images/limoni/ChatGPT Image 20 jun 2026, 17_23_02.png", "Servizio completo in ceramica con decoro limoni"),
      image("/images/limoni/ChatGPT Image 20 jun 2026, 20_39_18 (5).png", "Bottiglie e brocca in ceramica con limoni"),
      image("/images/limoni/ChatGPT Image 20 jun 2026, 21_26_28.png", "Brocche e vassoio in ceramica decorati con limoni"),
      image("/images/limoni/ChatGPT Image 21 jun 2026, 10_28_23 (1).png", "Caraffe e ciotola in ceramica con decoro limoni"),
      image("/images/limoni/ChatGPT Image 21 jun 2026, 10_28_24 (3).png", "Bottiglie, contenitore e tazze con decoro limoni"),
      image("/images/limoni/ChatGPT Image 21 jun 2026, 10_28_24 (4).png", "Piatti sagomati e tazze con decoro limoni")
    ]
  },
  {
    name: "Frutta mista",
    slug: "frutta-mista",
    category: "frutta",
    theme: "Frutta",
    description:
      "Composizioni con pere, uva, frutta dipinta e piccoli pezzi coordinati per una proposta colorata ma artigianale.",
    images: [
      image("/images/frutta_mista/ChatGPT Image 20 jun 2026, 21_10_41.png", "Teiera, tazze e contenitori in ceramica con frutta"),
      image("/images/frutta_mista/ChatGPT Image 20 jun 2026, 21_11_07.png", "Piatto crostata, vassoio e tazza con frutta dipinta"),
      image("/images/frutta_mista/ChatGPT Image 20 jun 2026, 21_26_36.png", "Composizione con piatto e brocca decorati con frutta"),
      image("/images/frutta_mista/ChatGPT Image 20 jun 2026, 21_26_32.png", "Bottiglie, piatto e vassoio con decori di frutta"),
      image("/images/frutta_mista/ChatGPT Image 20 jun 2026, 20_39_44 (4).png", "Bottiglia, piatto e brocca con frutta dipinta"),
      image("/images/agrumi/ChatGPT Image 20 jun 2026, 21_10_56.png", "Ciotole e vassoio in ceramica con decori di frutta mista"),
      image("/images/ortaggi/ChatGPT Image 20 jun 2026, 18_35_35 (2).png", "Brocche sagomate a frutta in ceramica"),
      image("/images/frutta_mista/ChatGPT Image 20 jun 2026, 21_11_13.png", "Bottiglie e brocca con decori di pera e frutta"),
      image("/images/frutta_mista/ChatGPT Image 20 jun 2026, 20_26_15.png", "Foglie e frutti decorativi in ceramica")
    ]
  },
  {
    name: "Frutti di bosco e crostata",
    slug: "frutti-di-bosco",
    category: "tavola",
    theme: "Frutti di bosco",
    description:
      "Servizi da tavola, alzate e oggetti coordinati con piccoli frutti e decori per crostata.",
    images: [
      image("/images/frutti_di_bosco/ChatGPT Image 20 jun 2026, 17_28_53 (1).png", "Servizio da tavola con bordo a frutti di bosco"),
      image("/images/frutti_di_bosco/ChatGPT Image 20 jun 2026, 17_28_53 (2).png", "Piatti e vassoi con piccoli frutti dipinti"),
      image("/images/frutti_di_bosco/ChatGPT Image 20 jun 2026, 17_28_54 (3).png", "Alzata e piatti con decoro frutti di bosco"),
      image("/images/frutti_di_bosco/ChatGPT Image 20 jun 2026, 20_20_06.png", "Teiere e piatti con decoro frutta"),
      image("/images/frutti_di_bosco/ChatGPT Image 20 jun 2026, 20_23_12.png", "Servizio tè e piatti decorati con frutta"),
      image("/images/frutti_di_bosco/ChatGPT Image 20 jun 2026, 20_23_15.png", "Teiera, tazze e piatti con piccoli frutti"),
      image("/images/frutti_di_bosco/ChatGPT Image 20 jun 2026, 20_26_11.png", "Barattoli decorativi con frutti e limoni"),
      image("/images/frutti_di_bosco/ChatGPT Image 20 jun 2026, 20_39_18 (1).png", "Piatti crostata e vassoio con frutti dipinti"),
      image("/images/frutti_di_bosco/ChatGPT Image 20 jun 2026, 20_39_43 (2).png", "Piatto crostata e vassoio con frutta mista"),
      image("/images/frutti_di_bosco/ChatGPT Image 20 jun 2026, 21_26_47 (1).png", "Composizione da cucina con piatto crostata e frutti")
    ]
  },
  {
    name: "Uva e vendemmia",
    slug: "uva",
    category: "frutta",
    theme: "Uva",
    description:
      "Vassoi, ciotole e bottiglie con uva dipinta, adatti a botteghe, enoteche e punti vendita legati al territorio.",
    images: [
      image("/images/uva/ChatGPT Image 20 jun 2026, 20_26_19.png", "Piatti e ciotole in ceramica con piccoli grappoli d'uva"),
      image("/images/uva/ChatGPT Image 20 jun 2026, 20_30_57.png", "Ciotole sagomate con decoro uva"),
      image("/images/uva/ChatGPT Image 20 jun 2026, 20_39_42 (1).png", "Vassoio, tazza e piatto con uva e frutta"),
      image("/images/uva/ChatGPT Image 20 jun 2026, 20_39_44 (3).png", "Bottiglie e vassoio con decoro uva"),
      image("/images/uva/ChatGPT Image 20 jun 2026, 21_11_11.png", "Piatto e brocca con grappoli d'uva dipinti")
    ]
  },
  {
    name: "Olive",
    slug: "olive",
    category: "cucina",
    theme: "Olive",
    description:
      "Accessori e vassoi con rami d'olivo, bottiglie per condimenti e piccoli pezzi da servizio coordinati.",
    images: [
      image("/images/olive/ChatGPT Image 20 jun 2026, 18_21_58.png", "Bottiglie e piatto con rami d'olivo"),
      image("/images/olive/ChatGPT Image 20 jun 2026, 18_22_05.png", "Vassoio ovale e ciotola con decoro olive"),
      image("/images/olive/ChatGPT Image 20 jun 2026, 18_25_24.png", "Servizio con bottiglie e piatto decorati a olive"),
      image("/images/olive/ChatGPT Image 20 jun 2026, 18_25_28.png", "Composizione coordinata con decoro olive")
    ]
  },
  {
    name: "Ortaggi misti",
    slug: "ortaggi",
    category: "cucina",
    theme: "Ortaggi",
    description:
      "Barattoli, piatti, brocche e ciotole con peperoni, verdure e piccoli ortaggi dipinti a mano.",
    images: [
      image("/images/ortaggi/ChatGPT Image 20 jun 2026, 18_35_36 (4).png", "Vassoi e ciotole con decoro ortaggi"),
      image("/images/ortaggi/ChatGPT Image 20 jun 2026, 20_30_44.png", "Piatti e ciotole con verdure dipinte")
    ]
  },
  {
    name: "Asparagi",
    slug: "asparagi",
    category: "cucina",
    theme: "Asparagi",
    description:
      "Vassoi, piatti e ciotole con decoro asparagi, una linea essenziale per una tavola naturale e riconoscibile.",
    images: [
      image("/images/ortaggi/ChatGPT Image 21 jun 2026, 18_46_28 (4).png", "Composizione completa con piatti e ciotole ad asparagi"),
      image("/images/ortaggi/ChatGPT Image 21 jun 2026, 18_46_28 (3).png", "Servizio con ciotola e vassoio decorati ad asparagi"),
      image("/images/ortaggi/ChatGPT Image 21 jun 2026, 18_46_27 (2).png", "Piatto e vassoio con asparagi dipinti"),
      image("/images/ortaggi/ChatGPT Image 21 jun 2026, 18_46_27 (1).png", "Vassoio ovale in ceramica con decoro asparagi")
    ]
  },
  {
    name: "Pomodori, caprese e mozzarella",
    slug: "pomodori-caprese",
    category: "tavola",
    theme: "Pomodori",
    description:
      "Piatti e vassoi con pomodori, basilico, caprese e mozzarella, pensati per una proposta italiana chiara e immediata.",
    images: [
      image("/images/pomodori/ChatGPT Image 21 jun 2026, 18_29_14.png", "Vassoio caprese e piatti con pomodori dipinti"),
      image("/images/pomodori/ChatGPT Image 20 jun 2026, 17_22_56 (1).png", "Servizio in ceramica con decoro pomodori e basilico"),
      image("/images/collezione-tavola.jpg", "Esposizione di piatti caprese e mozzarella in ceramica", "cover")
    ]
  },
  {
    name: "Pizza e bruschette",
    slug: "pizza-bruschette",
    category: "gastronomia",
    theme: "Pizza",
    description:
      "Piatti e taglieri decorati per pizza e bruschette, con scritte e colori pensati per punti vendita turistici e negozi cucina.",
    images: [
      image("/images/pizza_e_bruschette/ChatGPT Image 21 jun 2026, 18_32_20 (3).png", "Linea pizza e bruschette con piatti e vassoio"),
      image("/images/pizza_e_bruschette/ChatGPT Image 21 jun 2026, 18_32_21 (4).png", "Composizione completa pizza e bruschette"),
      image("/images/pizza_e_bruschette/ChatGPT Image 21 jun 2026, 18_32_19 (1).png", "Piatti e accessori con decoro pizza"),
      image("/images/pizza_e_bruschette/ChatGPT Image 21 jun 2026, 18_32_20 (2).png", "Piatto pizza e tagliere bruschette in ceramica"),
      image("/images/pizza_e_bruschette/ChatGPT Image 21 jun 2026, 10_34_50.png", "Vetrina cucina con piatti pizza e bruschette"),
      image("/images/pizza_e_bruschette/ChatGPT Image 21 jun 2026, 10_34_41.png", "Piatti pizza e bruschette su tavola apparecchiata")
    ]
  },
  {
    name: "Linea Pasta",
    slug: "pasta-spaghetti",
    category: "gastronomia",
    theme: "Tavola italiana",
    description:
      "Piatti sagomati e vassoi decorati con motivi ispirati alla pasta italiana, pensati per una tavola vivace, autentica e riconoscibile.",
    images: [
      image("/images/pasta_e_spaghetti/ChatGPT Image 20 jun 2026, 21_26_47 (5).png", "Vassoi pasta e spaghetti ambientati in cucina"),
      image("/images/pasta_e_spaghetti/ChatGPT Image 20 jun 2026, 21_39_32.png", "Linea pasta e spaghetti con piatti e piccoli vassoi"),
      image("/images/pasta_e_spaghetti/ChatGPT Image 20 jun 2026, 20_15_02.png", "Piatti a forma di pesce con scritta spaghetti"),
      image("/images/pasta_e_spaghetti/ChatGPT Image 20 jun 2026, 18_35_35 (3).png", "Piatti sagomati per pasta e spaghetti"),
      image("/images/pasta_e_spaghetti/ChatGPT Image 20 jun 2026, 17_22_56 (3).png", "Servizio con piatti pasta e barattoli decorati"),
      image("/images/ortaggi/ChatGPT Image 20 jun 2026, 18_32_34.png", "Barattoli e brocca in ceramica con pasta in rilievo"),
      image("/images/ortaggi/ChatGPT Image 20 jun 2026, 18_35_35 (1).png", "Barattoli, bottiglia e caraffa con decori di pasta")
    ]
  },
  {
    name: "Fiori",
    slug: "fiori",
    category: "natura",
    theme: "Fiori",
    description:
      "Teiere, tazze, piatti e piccoli oggetti con fiori dipinti, adatti a negozi regalo e assortimenti primaverili.",
    images: [
      image("/images/fiori/ChatGPT Image 20 jun 2026, 17_37_40 (1).png", "Teiera, tazza e zuccheriera con girasoli"),
      image("/images/fiori/ChatGPT Image 20 jun 2026, 17_37_41 (3).png", "Fiori decorativi e piatti in ceramica"),
      image("/images/fiori/ChatGPT Image 20 jun 2026, 17_57_16.png", "Tazze e servizio con decoro girasoli"),
      image("/images/fiori/ChatGPT Image 20 jun 2026, 20_30_49.png", "Piatti con bordo floreale dipinto")
    ]
  },
  {
    name: "Mare",
    slug: "mare",
    category: "natura",
    theme: "Mare",
    description:
      "Oggetti e piatti con conchiglie, stelle marine e piccoli soggetti marini, ideali anche per punti vendita turistici.",
    images: [
      image("/images/mare/ChatGPT Image 20 jun 2026, 18_16_07.png", "Oggetti in ceramica con decori marini e conchiglie"),
      image("/images/mare/ChatGPT Image 20 jun 2026, 18_17_43 (1).png", "Piatti e piccoli oggetti con stelle marine"),
      image("/images/mare/ChatGPT Image 20 jun 2026, 18_17_43 (2).png", "Vassoi e piatti con decoro mare"),
      image("/images/mare/ChatGPT Image 20 jun 2026, 18_17_44 (3).png", "Piatti e pesci decorativi in ceramica"),
      image("/images/mare/ChatGPT Image 20 jun 2026, 18_17_46 (4).png", "Composizione completa con soggetti marini")
    ]
  },
  {
    name: "Piatti e decori dipinti",
    slug: "piatti-decori-dipinti",
    category: "regalo",
    theme: "Dipinti a mano",
    description:
      "Esempi di piatti, dettagli decorativi e pezzi dipinti a mano per valorizzare l'esposizione con lavorazioni riconoscibili.",
    images: [
      image("/images/piatto-decorato.jpg", "Piatto decorato in ceramica dipinto a mano", "cover"),
      image("/images/piatti-dipinti-a-mano.jpg", "Piatti in ceramica dipinti a mano", "cover"),
      image("/images/dettagli-decorazione.jpg", "Dettaglio di decorazione manuale su ceramica", "cover")
    ]
  },
  {
    name: "Vasi e complementi",
    slug: "vasi-complementi",
    category: "regalo",
    theme: "Complementi",
    description:
      "Vasi e forme decorative per completare una proposta da negozio casa, regalo o bottega artigianale.",
    images: [
      image("/images/vaso-in-ceramica.png", "Vaso in ceramica artistica"),
      image("/images/vasi-ceramica-artistica.jpg", "Vasi e complementi decorativi in ceramica artistica", "cover"),
      image("/images/oggetto-regalo.jpg", "Oggetto regalo in ceramica artigianale")
    ]
  }
];
