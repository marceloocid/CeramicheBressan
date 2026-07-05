import { getRoutePath, type Locale, type RouteKey } from "@/lib/i18n";

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
  emailHref: "mailto:ceramichebressanc2@gmail.com"
};

export type SiteContent = {
  b2bNotice: string;
  countryName: string;
  footerDescription: string;
  structuredDataDescription: string;
};

export const siteContent: Record<Locale, SiteContent> = {
  it: {
    b2bNotice:
      "Le nostre creazioni sono destinate a negozi e punti vendita. Non effettuiamo vendita online o vendita diretta al pubblico dalla sede produttiva.",
    countryName: "Italia",
    footerDescription:
      "Ceramiche artistiche dipinte a mano per negozi e punti vendita — Pianezze, Vicenza. Creazioni in ceramica artigianale per casa, tavola e regalo.",
    structuredDataDescription:
      "Bottega artigiana di ceramiche artistiche, oggettistica varia in ceramica e creazioni dipinte a mano per casa, tavola e regalo."
  },
  en: {
    b2bNotice:
      "Our creations are intended for shops and points of sale. We do not sell online or directly to the public from the workshop.",
    countryName: "Italy",
    footerDescription:
      "Hand-painted artistic ceramics for shops and points of sale — Pianezze, Vicenza. Artisan ceramic pieces for the home, table and gift sector.",
    structuredDataDescription:
      "Italian artisan workshop creating hand-painted artistic ceramics, decorative objects and ceramic pieces for the home, table and gift sector."
  }
};

export type NavItem = {
  label: string;
  href: string;
  routeKey: RouteKey;
};

const navLabels: Record<Locale, Array<{ label: string; routeKey: RouteKey }>> = {
  it: [
    { label: "Azienda", routeKey: "azienda" },
    { label: "Collezioni", routeKey: "creazioni" },
    { label: "Per negozi", routeKey: "perRivenditori" },
    { label: "Catalogo", routeKey: "catalogo" },
    { label: "Contatti", routeKey: "contatti" }
  ],
  en: [
    { label: "Company", routeKey: "azienda" },
    { label: "Creations", routeKey: "creazioni" },
    { label: "Retailers", routeKey: "perRivenditori" },
    { label: "Catalog", routeKey: "catalogo" },
    { label: "Contact", routeKey: "contatti" }
  ]
};

export function getSiteContent(locale: Locale) {
  return siteContent[locale];
}

export function getNavItems(locale: Locale): NavItem[] {
  return navLabels[locale].map((item) => ({
    ...item,
    href: getRoutePath(item.routeKey, locale)
  }));
}

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

const collectionCategoriesByLocale: Record<Locale, CollectionCategory[]> = {
  it: [
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
  ],
  en: [
    {
      title: "Ceramics for the table",
      slug: "tavola",
      image: "/images/collezione-tavola.jpg",
      alt: "Decorated ceramic plates and serving trays for the table",
      imageFit: "cover",
      description:
        "Plates, trays, bowls and coordinated services created for homeware shops, boutiques and points of sale looking for Italian artisan assortments.",
      themes: ["Decorated services", "Plates and trays", "Caprese and tomatoes"]
    },
    {
      title: "Kitchen and serving pieces",
      slug: "cucina",
      image: "/images/limoni/brocche-vassoio-limoni-ceramica.png",
      alt: "Ceramic pitchers and accessories decorated with lemons",
      description:
        "Kitchen accessories, containers, pitchers and practical small pieces with bright, recognizable decorations.",
      themes: ["Lemons", "Olives", "Vegetables", "Asparagus"]
    },
    {
      title: "Italian food-inspired decorations",
      slug: "gastronomia",
      image: "/images/pizza_e_bruschette/linea-pizza-bruschette-ceramica.png",
      alt: "Ceramic plates and boards decorated for pizza and bruschetta",
      description:
        "Lines inspired by the Italian table, suitable for gift shops, concept stores and spaces dedicated to Mediterranean cooking.",
      themes: ["Pizza and bruschetta", "Pasta line", "Caprese"]
    },
    {
      title: "Fruit, citrus and harvest motifs",
      slug: "frutta",
      image: "/images/agrumi/servizio-agrumi-ceramica.png",
      alt: "Ceramic service decorated with citrus fruit",
      description:
        "Decorations with lemons, oranges, grapes, berries and mixed fruit for lively, well-balanced assortments.",
      themes: ["Citrus fruit", "Mixed fruit", "Wild berries", "Grapes"]
    },
    {
      title: "Nature, flowers and sea",
      slug: "natura",
      image: "/images/mare/vassoi-piatti-mare-ceramica.png",
      alt: "Ceramic objects with sea-inspired decorations",
      description:
        "Decorative proposals linked to flowers, marine landscapes and natural motifs, also suited to tourist points of sale.",
      themes: ["Flowers", "Sea", "Decorative souvenirs"]
    },
    {
      title: "Decorative pieces and gift ideas",
      slug: "regalo",
      image: "/images/oggetto-regalo.jpg",
      alt: "Artisan ceramic gift object",
      imageFit: "contain",
      description:
        "Vases, decorative complements and small gift pieces that enrich retail displays with objects that are easy to present.",
      themes: ["Vases", "Decorative objects", "Hand-painted details"]
    }
  ]
};

const catalogItemsByLocale: Record<Locale, CatalogItem[]> = {
  it: [
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
  ],
  en: [
    {
      name: "Citrus line",
      slug: "agrumi",
      category: "frutta",
      theme: "Citrus fruit",
      description:
        "Services, cups and small accessories decorated with oranges and lemons, ideal for a bright Mediterranean display.",
      images: [
        image("/images/agrumi/composizione-agrumi-ceramica.png", "Table composition with orange and lemon ceramic decoration"),
        image("/images/agrumi/tazze-vassoio-agrumi-ceramica.png", "Ceramic cups and tray with citrus decoration"),
        image("/images/agrumi/servizio-agrumi-ceramica.png", "Ceramic service decorated with citrus fruit"),
        image("/images/agrumi/bicchieri-vassoio-agrumi-ceramica.png", "Ceramic glasses and tray with citrus fruit")
      ]
    },
    {
      name: "Lemon line",
      slug: "limoni",
      category: "cucina",
      theme: "Lemons",
      description:
        "Pitchers, bottles, services and accessories decorated with lemons, designed for homeware shops and summer assortments.",
      images: [
        image("/images/limoni/brocche-vassoio-limoni-ceramica.png", "Ceramic pitchers and tray decorated with lemons"),
        image("/images/limoni/caraffe-ciotola-limoni-ceramica.png", "Ceramic carafes and bowl with lemon decoration"),
        image("/images/limoni/servizio-limoni-ceramica.png", "Complete ceramic service with lemon decoration"),
        image("/images/limoni/bottiglie-brocca-limoni-ceramica.png", "Ceramic bottles and pitcher with lemons"),
        image("/images/limoni/bottiglie-tazze-limoni-ceramica.png", "Bottles, container and cups with lemon decoration"),
        image("/images/limoni/piatti-tazze-limoni-ceramica.png", "Shaped plates and cups with lemon decoration")
      ]
    },
    {
      name: "Mixed fruit",
      slug: "frutta-mista",
      category: "frutta",
      theme: "Fruit",
      description:
        "Compositions with pears, grapes, painted fruit and coordinated small pieces for a colorful yet artisanal proposal.",
      images: [
        image("/images/frutta_mista/teiera-tazze-frutta-ceramica.png", "Ceramic teapot, cups and containers with fruit"),
        image("/images/frutta_mista/piatto-vassoio-frutta-ceramica.png", "Tart plate, tray and cup with painted fruit"),
        image("/images/frutta_mista/piatto-brocca-frutta-ceramica.png", "Composition with plate and pitcher decorated with fruit"),
        image("/images/frutta_mista/bottiglie-vassoio-frutta-ceramica.png", "Bottles, plate and tray with fruit decorations"),
        image("/images/frutta_mista/bottiglia-brocca-frutta-ceramica.png", "Bottle, plate and pitcher with painted fruit"),
        image("/images/agrumi/ciotole-vassoio-frutta-ceramica.png", "Ceramic bowls and tray with mixed fruit decorations"),
        image("/images/ortaggi/brocche-frutta-ceramica.png", "Fruit-shaped ceramic pitchers"),
        image("/images/frutta_mista/bottiglie-brocca-pera-ceramica.png", "Bottles and pitcher with pear and fruit decorations"),
        image("/images/frutta_mista/foglie-frutti-ceramica.png", "Decorative ceramic leaves and fruit")
      ]
    },
    {
      name: "Wild berries and tart",
      slug: "frutti-di-bosco",
      category: "tavola",
      theme: "Wild berries",
      description:
        "Table services, stands and coordinated objects with small berries and tart-inspired decorations.",
      images: [
        image("/images/frutti_di_bosco/piatto-crostata-frutti-ceramica.png", "Kitchen composition with tart plate and fruit"),
        image("/images/frutti_di_bosco/vassoio-frutti-bosco-ceramica.png", "Tart plate and tray with mixed fruit"),
        image("/images/frutti_di_bosco/piatti-frutti-bosco-ceramica.png", "Tart plates and tray with painted berries"),
        image("/images/frutti_di_bosco/servizio-frutti-bosco-ceramica.png", "Table service with wild berry border"),
        image("/images/frutti_di_bosco/piatti-vassoi-frutti-bosco-ceramica.png", "Plates and trays with small painted berries"),
        image("/images/frutti_di_bosco/alzata-frutti-bosco-ceramica.png", "Stand and plates with wild berry decoration"),
        image("/images/frutti_di_bosco/teiere-piatti-frutta-ceramica.png", "Teapots and plates with fruit decoration"),
        image("/images/frutti_di_bosco/servizio-te-frutta-ceramica.png", "Tea service and plates decorated with fruit"),
        image("/images/frutti_di_bosco/teiera-tazze-frutti-ceramica.png", "Teapot, cups and plates with small fruit"),
        image("/images/frutti_di_bosco/barattoli-frutti-limoni-ceramica.png", "Decorative jars with fruit and lemons")
      ]
    },
    {
      name: "Grapes and harvest",
      slug: "uva",
      category: "frutta",
      theme: "Grapes",
      description:
        "Trays, bowls and bottles with painted grapes, suited to boutiques, wine shops and points of sale connected to the local territory.",
      images: [
        image("/images/uva/piatto-brocca-uva-ceramica.png", "Plate and pitcher with painted grape clusters"),
        image("/images/uva/vassoio-tazza-uva-ceramica.png", "Tray, cup and plate with grapes and fruit"),
        image("/images/uva/bottiglie-vassoio-uva-ceramica.png", "Bottles and tray with grape decoration"),
        image("/images/uva/piatti-ciotole-uva-ceramica.png", "Ceramic plates and bowls with small grape clusters"),
        image("/images/uva/ciotole-uva-ceramica.png", "Shaped bowls with grape decoration")
      ]
    },
    {
      name: "Olives",
      slug: "olive",
      category: "cucina",
      theme: "Olives",
      description:
        "Accessories and trays with olive branches, condiment bottles and small coordinated serving pieces.",
      images: [
        image("/images/olive/servizio-olive-ceramica.png", "Service with bottles and plate decorated with olives"),
        image("/images/olive/composizione-olive-ceramica.png", "Coordinated composition with olive decoration"),
        image("/images/olive/bottiglie-rami-olivo-ceramica.png", "Bottles and plate with olive branches"),
        image("/images/olive/vassoio-ciotola-olive-ceramica.png", "Oval tray and bowl with olive decoration")
      ]
    },
    {
      name: "Mixed vegetables",
      slug: "ortaggi",
      category: "cucina",
      theme: "Vegetables",
      description:
        "Jars, plates, pitchers and bowls with peppers, vegetables and small hand-painted garden motifs.",
      images: [
        image("/images/ortaggi/vassoi-ciotole-ortaggi-ceramica.png", "Trays and bowls with vegetable decoration"),
        image("/images/ortaggi/piatti-ciotole-verdure-ceramica.png", "Plates and bowls with painted vegetables")
      ]
    },
    {
      name: "Asparagus",
      slug: "asparagi",
      category: "cucina",
      theme: "Asparagus",
      description:
        "Trays, plates and bowls with asparagus decoration, an essential line for a natural and recognizable table.",
      images: [
        image("/images/ortaggi/servizio-asparagi-ceramica.png", "Complete composition with asparagus plates and bowls"),
        image("/images/ortaggi/ciotola-vassoio-asparagi-ceramica.png", "Service with bowl and tray decorated with asparagus"),
        image("/images/ortaggi/piatto-vassoio-asparagi-ceramica.png", "Plate and tray with painted asparagus"),
        image("/images/ortaggi/vassoio-ovale-asparagi-ceramica.png", "Oval ceramic tray with asparagus decoration")
      ]
    },
    {
      name: "Tomatoes, caprese and mozzarella",
      slug: "pomodori-caprese",
      category: "tavola",
      theme: "Tomatoes",
      description:
        "Plates and trays with tomatoes, basil, caprese and mozzarella, designed for a clear and immediate Italian proposal.",
      images: [
        image("/images/pomodori/vassoio-caprese-pomodori-ceramica.png", "Caprese tray and plates with painted tomatoes"),
        image("/images/pomodori/servizio-pomodori-basilico-ceramica.png", "Ceramic service with tomato and basil decoration"),
        image("/images/collezione-tavola.jpg", "Display of caprese and mozzarella ceramic plates", "cover")
      ]
    },
    {
      name: "Pizza and bruschetta",
      slug: "pizza-bruschette",
      category: "gastronomia",
      theme: "Pizza",
      description:
        "Decorated plates and boards for pizza and bruschetta, with colors and lettering designed for tourist points of sale and kitchen shops.",
      images: [
        image("/images/pizza_e_bruschette/linea-pizza-bruschette-ceramica.png", "Pizza and bruschetta line with plates and tray"),
        image("/images/pizza_e_bruschette/composizione-pizza-bruschette-ceramica.png", "Complete pizza and bruschetta composition"),
        image("/images/pizza_e_bruschette/piatti-accessori-pizza-ceramica.png", "Plates and accessories with pizza decoration"),
        image("/images/pizza_e_bruschette/piatto-pizza-tagliere-bruschette-ceramica.png", "Pizza plate and ceramic bruschetta board"),
        image("/images/pizza_e_bruschette/vetrina-pizza-bruschette-ceramica.png", "Kitchen display with pizza and bruschetta plates"),
        image("/images/pizza_e_bruschette/tavola-pizza-bruschette-ceramica.png", "Pizza and bruschetta plates on a set table")
      ]
    },
    {
      name: "Pasta line",
      slug: "pasta-spaghetti",
      category: "gastronomia",
      theme: "Italian table",
      description:
        "Shaped plates and trays decorated with motifs inspired by Italian pasta, created for a lively, authentic and recognizable table.",
      images: [
        image("/images/pasta_e_spaghetti/vassoi-pasta-spaghetti-ceramica.png", "Pasta and spaghetti trays set in a kitchen"),
        image("/images/pasta_e_spaghetti/linea-pasta-spaghetti-ceramica.png", "Pasta and spaghetti line with plates and small trays"),
        image("/images/pasta_e_spaghetti/piatti-pesce-spaghetti-ceramica.png", "Fish-shaped plates with spaghetti lettering"),
        image("/images/pasta_e_spaghetti/piatti-pasta-spaghetti-ceramica.png", "Shaped plates for pasta and spaghetti"),
        image("/images/pasta_e_spaghetti/servizio-pasta-barattoli-ceramica.png", "Service with pasta plates and decorated jars"),
        image("/images/ortaggi/barattoli-brocca-pasta-ceramica.png", "Ceramic jars and pitcher with raised pasta decoration"),
        image("/images/ortaggi/barattoli-caraffa-pasta-ceramica.png", "Jars, bottle and carafe with pasta decorations")
      ]
    },
    {
      name: "Flowers",
      slug: "fiori",
      category: "natura",
      theme: "Flowers",
      description:
        "Teapots, cups, plates and small objects with painted flowers, suited to gift shops and spring assortments.",
      images: [
        image("/images/fiori/tazze-girasoli-ceramica.png", "Cups and service with sunflower decoration"),
        image("/images/fiori/teiera-girasoli-ceramica.png", "Teapot, cup and sugar bowl with sunflowers"),
        image("/images/fiori/fiori-decorativi-ceramica.png", "Decorative flowers and ceramic plates"),
        image("/images/fiori/piatti-floreali-ceramica.png", "Plates with painted floral border")
      ]
    },
    {
      name: "Sea",
      slug: "mare",
      category: "natura",
      theme: "Sea",
      description:
        "Objects and plates with shells, starfish and small marine subjects, ideal for tourist points of sale.",
      images: [
        image("/images/mare/vassoi-piatti-mare-ceramica.png", "Trays and plates with sea decoration"),
        image("/images/mare/conchiglie-marine-ceramica.png", "Ceramic objects with marine decorations and shells"),
        image("/images/mare/piatti-stelle-marine-ceramica.png", "Plates and small objects with starfish"),
        image("/images/mare/pesci-decorativi-ceramica.png", "Plates and decorative ceramic fish"),
        image("/images/mare/soggetti-marini-ceramica.png", "Complete composition with marine subjects")
      ]
    },
    {
      name: "Painted plates and decorations",
      slug: "piatti-decori-dipinti",
      category: "regalo",
      theme: "Hand-painted",
      description:
        "Examples of plates, decorative details and hand-painted pieces that enhance displays with recognizable craftsmanship.",
      images: [
        image("/images/piatti-dipinti-a-mano.jpg", "Hand-painted ceramic plates", "cover"),
        image("/images/piatto-decorato.jpg", "Hand-painted decorated ceramic plate", "cover"),
        image("/images/dettagli-decorazione.jpg", "Detail of hand decoration on ceramic", "cover")
      ]
    },
    {
      name: "Vases and decorative complements",
      slug: "vasi-complementi",
      category: "regalo",
      theme: "Decorative complements",
      description:
        "Vases and decorative forms for completing a proposal for homeware shops, gift stores or artisan boutiques.",
      images: [
        image("/images/vasi-ceramica-artistica.jpg", "Decorative artistic ceramic vases and complements", "cover"),
        image("/images/vaso-in-ceramica.png", "Artistic ceramic vase"),
        image("/images/oggetto-regalo.jpg", "Artisan ceramic gift object")
      ]
    }
  ]
};

export function getCollectionCategories(locale: Locale) {
  return collectionCategoriesByLocale[locale];
}

export function getCatalogItems(locale: Locale) {
  return catalogItemsByLocale[locale];
}

export const navItems = getNavItems("it");
export const collectionCategories = getCollectionCategories("it");
export const catalogItems = getCatalogItems("it");
