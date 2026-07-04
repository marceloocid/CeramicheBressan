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
    image: "/images/limoni/brocche-vassoio-limoni-ceramica.png",
    alt: "Caraffe e accessori in ceramica con decoro limoni",
    description:
      "Accessori da cucina, contenitori, caraffe e piccoli oggetti funzionali con decori riconoscibili e luminosi.",
    themes: ["Limoni", "Olive", "Ortaggi", "Asparagi"]
  },
  {
    title: "Decori gastronomici italiani",
    slug: "gastronomia",
    image: "/images/pizza_e_bruschette/linea-pizza-bruschette-ceramica.png",
    alt: "Piatti e taglieri in ceramica decorati per pizza e bruschette",
    description:
      "Linee ispirate alla tavola italiana, adatte a negozi regalo, concept store e spazi dedicati alla cucina mediterranea.",
    themes: ["Pizza e bruschette", "Linea Pasta", "Caprese"]
  },
  {
    title: "Frutta, agrumi e vendemmia",
    slug: "frutta",
    image: "/images/agrumi/servizio-agrumi-ceramica.png",
    alt: "Servizio in ceramica con decoro agrumi",
    description:
      "Decori con limoni, arance, uva, frutti di bosco e frutta mista per assortimenti vivaci ma ordinati.",
    themes: ["Agrumi", "Frutta mista", "Frutti di bosco", "Uva"]
  },
  {
    title: "Natura, fiori e mare",
    slug: "natura",
    image: "/images/mare/vassoi-piatti-mare-ceramica.png",
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
      image("/images/agrumi/composizione-agrumi-ceramica.png", "Composizione da tavola con decoro arance e limoni"),
      image("/images/agrumi/tazze-vassoio-agrumi-ceramica.png", "Tazze e vassoio in ceramica con decoro agrumi"),
      image("/images/agrumi/servizio-agrumi-ceramica.png", "Servizio in ceramica decorato con agrumi"),
      image("/images/agrumi/bicchieri-vassoio-agrumi-ceramica.png", "Bicchieri e vassoio in ceramica con agrumi")
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
      image("/images/limoni/brocche-vassoio-limoni-ceramica.png", "Brocche e vassoio in ceramica decorati con limoni"),
      image("/images/limoni/caraffe-ciotola-limoni-ceramica.png", "Caraffe e ciotola in ceramica con decoro limoni"),
      image("/images/limoni/servizio-limoni-ceramica.png", "Servizio completo in ceramica con decoro limoni"),
      image("/images/limoni/bottiglie-brocca-limoni-ceramica.png", "Bottiglie e brocca in ceramica con limoni"),
      image("/images/limoni/bottiglie-tazze-limoni-ceramica.png", "Bottiglie, contenitore e tazze con decoro limoni"),
      image("/images/limoni/piatti-tazze-limoni-ceramica.png", "Piatti sagomati e tazze con decoro limoni")
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
      image("/images/frutta_mista/teiera-tazze-frutta-ceramica.png", "Teiera, tazze e contenitori in ceramica con frutta"),
      image("/images/frutta_mista/piatto-vassoio-frutta-ceramica.png", "Piatto crostata, vassoio e tazza con frutta dipinta"),
      image("/images/frutta_mista/piatto-brocca-frutta-ceramica.png", "Composizione con piatto e brocca decorati con frutta"),
      image("/images/frutta_mista/bottiglie-vassoio-frutta-ceramica.png", "Bottiglie, piatto e vassoio con decori di frutta"),
      image("/images/frutta_mista/bottiglia-brocca-frutta-ceramica.png", "Bottiglia, piatto e brocca con frutta dipinta"),
      image("/images/agrumi/ciotole-vassoio-frutta-ceramica.png", "Ciotole e vassoio in ceramica con decori di frutta mista"),
      image("/images/ortaggi/brocche-frutta-ceramica.png", "Brocche sagomate a frutta in ceramica"),
      image("/images/frutta_mista/bottiglie-brocca-pera-ceramica.png", "Bottiglie e brocca con decori di pera e frutta"),
      image("/images/frutta_mista/foglie-frutti-ceramica.png", "Foglie e frutti decorativi in ceramica")
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
      image("/images/frutti_di_bosco/piatto-crostata-frutti-ceramica.png", "Composizione da cucina con piatto crostata e frutti"),
      image("/images/frutti_di_bosco/vassoio-frutti-bosco-ceramica.png", "Piatto crostata e vassoio con frutta mista"),
      image("/images/frutti_di_bosco/piatti-frutti-bosco-ceramica.png", "Piatti crostata e vassoio con frutti dipinti"),
      image("/images/frutti_di_bosco/servizio-frutti-bosco-ceramica.png", "Servizio da tavola con bordo a frutti di bosco"),
      image("/images/frutti_di_bosco/piatti-vassoi-frutti-bosco-ceramica.png", "Piatti e vassoi con piccoli frutti dipinti"),
      image("/images/frutti_di_bosco/alzata-frutti-bosco-ceramica.png", "Alzata e piatti con decoro frutti di bosco"),
      image("/images/frutti_di_bosco/teiere-piatti-frutta-ceramica.png", "Teiere e piatti con decoro frutta"),
      image("/images/frutti_di_bosco/servizio-te-frutta-ceramica.png", "Servizio tè e piatti decorati con frutta"),
      image("/images/frutti_di_bosco/teiera-tazze-frutti-ceramica.png", "Teiera, tazze e piatti con piccoli frutti"),
      image("/images/frutti_di_bosco/barattoli-frutti-limoni-ceramica.png", "Barattoli decorativi con frutti e limoni")
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
      image("/images/uva/piatto-brocca-uva-ceramica.png", "Piatto e brocca con grappoli d'uva dipinti"),
      image("/images/uva/vassoio-tazza-uva-ceramica.png", "Vassoio, tazza e piatto con uva e frutta"),
      image("/images/uva/bottiglie-vassoio-uva-ceramica.png", "Bottiglie e vassoio con decoro uva"),
      image("/images/uva/piatti-ciotole-uva-ceramica.png", "Piatti e ciotole in ceramica con piccoli grappoli d'uva"),
      image("/images/uva/ciotole-uva-ceramica.png", "Ciotole sagomate con decoro uva")
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
      image("/images/olive/servizio-olive-ceramica.png", "Servizio con bottiglie e piatto decorati a olive"),
      image("/images/olive/composizione-olive-ceramica.png", "Composizione coordinata con decoro olive"),
      image("/images/olive/bottiglie-rami-olivo-ceramica.png", "Bottiglie e piatto con rami d'olivo"),
      image("/images/olive/vassoio-ciotola-olive-ceramica.png", "Vassoio ovale e ciotola con decoro olive")
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
      image("/images/ortaggi/vassoi-ciotole-ortaggi-ceramica.png", "Vassoi e ciotole con decoro ortaggi"),
      image("/images/ortaggi/piatti-ciotole-verdure-ceramica.png", "Piatti e ciotole con verdure dipinte")
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
      image("/images/ortaggi/servizio-asparagi-ceramica.png", "Composizione completa con piatti e ciotole ad asparagi"),
      image("/images/ortaggi/ciotola-vassoio-asparagi-ceramica.png", "Servizio con ciotola e vassoio decorati ad asparagi"),
      image("/images/ortaggi/piatto-vassoio-asparagi-ceramica.png", "Piatto e vassoio con asparagi dipinti"),
      image("/images/ortaggi/vassoio-ovale-asparagi-ceramica.png", "Vassoio ovale in ceramica con decoro asparagi")
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
      image("/images/pomodori/vassoio-caprese-pomodori-ceramica.png", "Vassoio caprese e piatti con pomodori dipinti"),
      image("/images/pomodori/servizio-pomodori-basilico-ceramica.png", "Servizio in ceramica con decoro pomodori e basilico"),
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
      image("/images/pizza_e_bruschette/linea-pizza-bruschette-ceramica.png", "Linea pizza e bruschette con piatti e vassoio"),
      image("/images/pizza_e_bruschette/composizione-pizza-bruschette-ceramica.png", "Composizione completa pizza e bruschette"),
      image("/images/pizza_e_bruschette/piatti-accessori-pizza-ceramica.png", "Piatti e accessori con decoro pizza"),
      image("/images/pizza_e_bruschette/piatto-pizza-tagliere-bruschette-ceramica.png", "Piatto pizza e tagliere bruschette in ceramica"),
      image("/images/pizza_e_bruschette/vetrina-pizza-bruschette-ceramica.png", "Vetrina cucina con piatti pizza e bruschette"),
      image("/images/pizza_e_bruschette/tavola-pizza-bruschette-ceramica.png", "Piatti pizza e bruschette su tavola apparecchiata")
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
      image("/images/pasta_e_spaghetti/vassoi-pasta-spaghetti-ceramica.png", "Vassoi pasta e spaghetti ambientati in cucina"),
      image("/images/pasta_e_spaghetti/linea-pasta-spaghetti-ceramica.png", "Linea pasta e spaghetti con piatti e piccoli vassoi"),
      image("/images/pasta_e_spaghetti/piatti-pesce-spaghetti-ceramica.png", "Piatti a forma di pesce con scritta spaghetti"),
      image("/images/pasta_e_spaghetti/piatti-pasta-spaghetti-ceramica.png", "Piatti sagomati per pasta e spaghetti"),
      image("/images/pasta_e_spaghetti/servizio-pasta-barattoli-ceramica.png", "Servizio con piatti pasta e barattoli decorati"),
      image("/images/ortaggi/barattoli-brocca-pasta-ceramica.png", "Barattoli e brocca in ceramica con pasta in rilievo"),
      image("/images/ortaggi/barattoli-caraffa-pasta-ceramica.png", "Barattoli, bottiglia e caraffa con decori di pasta")
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
      image("/images/fiori/tazze-girasoli-ceramica.png", "Tazze e servizio con decoro girasoli"),
      image("/images/fiori/teiera-girasoli-ceramica.png", "Teiera, tazza e zuccheriera con girasoli"),
      image("/images/fiori/fiori-decorativi-ceramica.png", "Fiori decorativi e piatti in ceramica"),
      image("/images/fiori/piatti-floreali-ceramica.png", "Piatti con bordo floreale dipinto")
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
      image("/images/mare/vassoi-piatti-mare-ceramica.png", "Vassoi e piatti con decoro mare"),
      image("/images/mare/conchiglie-marine-ceramica.png", "Oggetti in ceramica con decori marini e conchiglie"),
      image("/images/mare/piatti-stelle-marine-ceramica.png", "Piatti e piccoli oggetti con stelle marine"),
      image("/images/mare/pesci-decorativi-ceramica.png", "Piatti e pesci decorativi in ceramica"),
      image("/images/mare/soggetti-marini-ceramica.png", "Composizione completa con soggetti marini")
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
      image("/images/piatti-dipinti-a-mano.jpg", "Piatti in ceramica dipinti a mano", "cover"),
      image("/images/piatto-decorato.jpg", "Piatto decorato in ceramica dipinto a mano", "cover"),
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
      image("/images/vasi-ceramica-artistica.jpg", "Vasi e complementi decorativi in ceramica artistica", "cover"),
      image("/images/vaso-in-ceramica.png", "Vaso in ceramica artistica"),
      image("/images/oggetto-regalo.jpg", "Oggetto regalo in ceramica artigianale")
    ]
  }
];
