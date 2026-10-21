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
  phone: "+39 0424 75762",
  phoneE164: "+39042475762",
  phoneHref: "tel:+39042475762",
  mobilePhone: "+39 333 100 31 53",
  mobilePhoneE164: "+393331003153",
  mobilePhoneHref: "tel:+393331003153",
  whatsappHref: "https://wa.me/393331003153",
  vat: "02084630249",
  facebookUrl: "https://www.facebook.com/BressanC2",
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
      "Le nostre creazioni sono pensate soprattutto per negozi e punti vendita. Non effettuiamo vendita online: per acquisti diretti in sede o maggiori informazioni, contattaci.",
    countryName: "Italia",
    footerDescription:
      "Ceramiche artistiche dipinte a mano per negozi e punti vendita — Pianezze, Vicenza. Creazioni in ceramica artigianale per casa, tavola e regalo.",
    structuredDataDescription:
      "Realtà artigianale a conduzione familiare che realizza ceramiche artistiche, oggettistica varia in ceramica e creazioni dipinte a mano per casa, tavola e regalo."
  },
  en: {
    b2bNotice:
      "Our creations are designed primarily for shops and points of sale. We do not sell online: for purchases directly from our premises or further information, contact us.",
    countryName: "Italy",
    footerDescription:
      "Hand-painted artistic ceramics for shops and points of sale — Pianezze, Vicenza. Artisan ceramic pieces for the home, table and gift sector.",
    structuredDataDescription:
      "Family-run artisan business creating hand-painted artistic ceramics, decorative objects and ceramic pieces for the home, table and gift sector."
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
    { label: "Storia", routeKey: "storia" },
    { label: "Collezioni", routeKey: "creazioni" },
    { label: "Per negozi", routeKey: "perRivenditori" },
    { label: "Catalogo", routeKey: "catalogo" },
    { label: "Contatti", routeKey: "contatti" }
  ],
  en: [
    { label: "Company", routeKey: "azienda" },
    { label: "History", routeKey: "storia" },
    { label: "Collections", routeKey: "creazioni" },
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
      image: "/images/righe_multicolori/servizio-righe-multicolori-ceramica.webp",
      alt: "Piatti, brocca, ciotola e barattoli in ceramica con righe multicolori",
      imageFit: "contain",
      description:
        "Piatti, vassoi, ciotole e servizi coordinati pensati per negozi casa, botteghe e punti vendita con un assortimento artigianale italiano.",
      themes: ["Frutti di bosco e crostata", "Caprese e pomodori", "Righe, cerchi e spirali"]
    },
    {
      title: "Cucina e servizio",
      slug: "cucina",
      image: "/images/limoni/brocche-vassoio-limoni-ceramica.webp",
      alt: "Caraffe e accessori in ceramica con decoro limoni",
      description:
        "Accessori da cucina, contenitori, caraffe e piccoli oggetti funzionali con decori riconoscibili e luminosi.",
      themes: ["Limoni", "Olive", "Ortaggi", "Asparagi"]
    },
    {
      title: "Decori gastronomici italiani",
      slug: "gastronomia",
      image: "/images/pizza_e_bruschette/linea-pizza-bruschette-ceramica.webp",
      alt: "Piatti e taglieri in ceramica decorati per pizza e bruschette",
      description:
        "Linee ispirate alla tavola italiana, adatte a negozi regalo, concept store e spazi dedicati alla cucina mediterranea.",
      themes: ["Pizza e bruschette", "Linea Pasta"]
    },
    {
      title: "Frutta, agrumi e vendemmia",
      slug: "frutta",
      image: "/images/agrumi/servizio-agrumi-ceramica.webp",
      alt: "Servizio in ceramica con decoro agrumi",
      description:
        "Decori con limoni, arance, uva, frutta mista, anguria e fragole per assortimenti vivaci ma ordinati.",
      themes: ["Agrumi", "Frutta mista", "Uva", "Anguria e fragole"]
    },
    {
      title: "Natura, fiori e mare",
      slug: "natura",
      image: "/images/papaveri_dipinti/tre-ciotole-papaveri-ceramica.webp",
      alt: "Tre ciotole in ceramica bianca con papaveri rossi e foglie verdi",
      description:
        "Fiori dipinti, foglie e decori marini su piatti, ciotole e complementi: dalla lavanda ai papaveri, proposte per negozi casa, regalo e punti vendita turistici.",
      themes: ["Fiori e foglie", "Lavanda e papaveri", "Mare"]
    },
    {
      title: "Complementi e idee regalo",
      slug: "regalo",
      image: "/images/oggetto-regalo.jpg",
      alt: "Oggetto regalo in ceramica artigianale",
      imageFit: "contain",
      description:
        "Vasi, piatti decorativi e complementi come la Rosa dei venti per arricchire l'esposizione con idee regalo dipinte a mano.",
      themes: ["Vasi e complementi", "Piatti decorativi", "Rosa dei venti"]
    }
  ],
  en: [
    {
      title: "Ceramics for the table",
      slug: "tavola",
      image: "/images/righe_multicolori/servizio-righe-multicolori-ceramica.webp",
      alt: "Ceramic plates, pitcher, bowl and jars with multicolored stripes",
      imageFit: "contain",
      description:
        "Plates, trays, bowls and coordinated services created for homeware shops, boutiques and points of sale looking for Italian artisan assortments.",
      themes: ["Wild berries and tart", "Caprese and tomatoes", "Stripes, circles and spirals"]
    },
    {
      title: "Kitchen and serving pieces",
      slug: "cucina",
      image: "/images/limoni/brocche-vassoio-limoni-ceramica.webp",
      alt: "Ceramic pitchers and accessories decorated with lemons",
      description:
        "Kitchen accessories, containers, pitchers and practical small pieces with bright, recognizable decorations.",
      themes: ["Lemons", "Olives", "Vegetables", "Asparagus"]
    },
    {
      title: "Italian food-inspired decorations",
      slug: "gastronomia",
      image: "/images/pizza_e_bruschette/linea-pizza-bruschette-ceramica.webp",
      alt: "Ceramic plates and boards decorated for pizza and bruschetta",
      description:
        "Lines inspired by the Italian table, suitable for gift shops, concept stores and spaces dedicated to Mediterranean cooking.",
      themes: ["Pizza and bruschetta", "Pasta line"]
    },
    {
      title: "Fruit, citrus and harvest motifs",
      slug: "frutta",
      image: "/images/agrumi/servizio-agrumi-ceramica.webp",
      alt: "Ceramic service decorated with citrus fruit",
      description:
        "Decorations with lemons, oranges, grapes, mixed fruit, watermelon and strawberries for lively, well-balanced assortments.",
      themes: ["Citrus fruit", "Mixed fruit", "Grapes", "Watermelon and strawberries"]
    },
    {
      title: "Nature, flowers and sea",
      slug: "natura",
      image: "/images/papaveri_dipinti/tre-ciotole-papaveri-ceramica.webp",
      alt: "Three white ceramic bowls with red poppies and green leaves",
      description:
        "Painted flowers, leaves and sea motifs on plates, bowls and decorative pieces: from lavender to poppies, ideas for homeware shops, gift shops and tourist points of sale.",
      themes: ["Flowers and leaves", "Lavender and poppies", "Sea"]
    },
    {
      title: "Decorative pieces and gift ideas",
      slug: "regalo",
      image: "/images/oggetto-regalo.jpg",
      alt: "Artisan ceramic gift object",
      imageFit: "contain",
      description:
        "Vases, decorative plates and pieces such as the compass rose enrich retail displays with hand-painted gift ideas.",
      themes: ["Vases and decorative pieces", "Decorative plates", "Compass rose"]
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
        image("/images/agrumi/composizione-agrumi-ceramica.webp", "Composizione da tavola con decoro arance e limoni"),
        image("/images/agrumi/tazze-vassoio-agrumi-ceramica.webp", "Tazze e vassoio in ceramica con decoro agrumi"),
        image("/images/agrumi/servizio-agrumi-ceramica.webp", "Servizio in ceramica decorato con agrumi"),
        image("/images/agrumi/bicchieri-vassoio-agrumi-ceramica.webp", "Bicchieri e vassoio in ceramica con agrumi")
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
        image("/images/limoni/brocche-vassoio-limoni-ceramica.webp", "Brocche e vassoio in ceramica decorati con limoni"),
        image("/images/limoni/caraffe-ciotola-limoni-ceramica.webp", "Caraffe e ciotola in ceramica con decoro limoni"),
        image("/images/limoni/servizio-limoni-ceramica.webp", "Servizio completo in ceramica con decoro limoni"),
        image("/images/limoni/bottiglie-brocca-limoni-ceramica.webp", "Bottiglie e brocca in ceramica con limoni"),
        image("/images/limoni/bottiglie-tazze-limoni-ceramica.webp", "Bottiglie, contenitore e tazze con decoro limoni"),
        image("/images/limoni/piatti-tazze-limoni-ceramica.webp", "Piatti sagomati e tazze con decoro limoni"),
        image("/images/limoni/due-brocche-limoni-ceramica.webp", "Due brocche bianche con limoni gialli e foglie verdi"),
        image("/images/limoni/vassoio-quadrato-ciotole-limoni-ceramica.webp", "Vassoio quadrato e due ciotole sagomate con limoni e foglie verdi"),
        image("/images/limoni/ciotola-vassoio-quadrato-limoni-ceramica.webp", "Ciotola e vassoio quadrato con decoro limoni su un piano in pietra"),
        image("/images/limoni/ciotola-limoni-tavola-ceramica.webp", "Ciotola bianca con grandi limoni dipinti su un tavolo"),
        image("/images/limoni/piatti-ciotola-limoni-tavola-ceramica.webp", "Due piatti e una ciotola con limoni dipinti su un tavolo in legno"),
        image("/images/limoni/barattoli-sale-zucchero-limoni-ceramica.webp", "Barattoli con coperchio e scritte Sale e Zucchero decorati con limoni"),
        image("/images/limoni/vassoio-ciotoline-limoni-ceramica.webp", "Vassoio allungato e due ciotoline sagomate con limoni dipinti"),
        image("/images/limoni/anatra-borsetta-limoni-ceramica.webp", "Anatra e piccolo vaso a forma di borsetta decorati con limoni")
      ]
    },
    {
      name: "Limoni e olive",
      slug: "limoni-olive",
      category: "cucina",
      theme: "Limoni e olive",
      description:
        "Vassoi, piatti a scomparti, ciotole e poggiamestoli con limoni gialli, olive scure e foglie verdi.",
      images: [
        image("/images/limoni_e_olive/piatto-vassoio-limoni-olive-ceramica.webp", "Piatto a tre scomparti e vassoio ovale con limoni e olive"),
        image("/images/limoni_e_olive/vassoio-ovale-limoni-olive-ceramica.webp", "Vassoio ovale con manici, limoni gialli e olive scure"),
        image("/images/limoni_e_olive/piatto-sagomato-limoni-olive-ceramica.webp", "Piatto sagomato bianco con limoni gialli, olive scure e foglie verdi"),
        image("/images/limoni_e_olive/piatto-scomparti-limoni-olive-ceramica.webp", "Piatto tondo a tre scomparti con limoni e rami d’olivo"),
        image("/images/limoni_e_olive/ciotola-ovale-limoni-olive-ceramica.webp", "Ciotola ovale con limoni, olive e bordo verde"),
        image("/images/limoni_e_olive/poggiamestolo-limoni-olive-ceramica.webp", "Poggiamestolo con limoni e olive dipinti e bordo verde")
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
        image("/images/frutta_mista/teiera-tazze-frutta-ceramica.webp", "Teiera, tazze e contenitori in ceramica con frutta"),
        image("/images/frutta_mista/piatto-vassoio-frutta-ceramica.webp", "Piatto crostata, vassoio e tazza con frutta dipinta"),
        image("/images/frutta_mista/piatto-brocca-frutta-ceramica.webp", "Composizione con piatto e brocca decorati con frutta"),
        image("/images/frutta_mista/bottiglie-vassoio-frutta-ceramica.webp", "Bottiglie, piatto e vassoio con decori di frutta"),
        image("/images/frutta_mista/bottiglia-brocca-frutta-ceramica.webp", "Bottiglia, piatto e brocca con frutta dipinta"),
        image("/images/agrumi/ciotole-vassoio-frutta-ceramica.webp", "Ciotole e vassoio in ceramica con decori di frutta mista"),
        image("/images/ortaggi/brocche-frutta-ceramica.webp", "Brocche sagomate a frutta in ceramica"),
        image("/images/frutta_mista/bottiglie-brocca-pera-ceramica.webp", "Bottiglie e brocca con decori di pera e frutta"),
        image("/images/frutta_mista/foglie-frutti-ceramica.webp", "Foglie e frutti decorativi in ceramica")
      ]
    },
    {
      name: "Anguria",
      slug: "anguria",
      category: "frutta",
      theme: "Anguria",
      description:
        "Piatti, ciotole e bicchieri ispirati all’anguria, con rossi vivaci, bordi verdi e piccoli semi dipinti.",
      images: [
        image("/images/anguria/piatti-ciotola-anguria-ceramica.webp", "Piatti tondi, piatto quadrato e ciotola con decoro anguria"),
        image("/images/anguria/ciotole-bicchiere-anguria-ceramica.webp", "Ciotole e bicchiere in ceramica con interno rosso e decoro anguria"),
        image("/images/anguria/ciotola-anguria-ceramica.webp", "Ciotola con interno rosso, semi neri e bordo verde ispirata all’anguria"),
        image("/images/anguria/piatto-sagomato-anguria-ceramica.webp", "Piatto sagomato con anguria dipinta e spicchi laterali")
      ]
    },
    {
      name: "Fragole e fiocchi",
      slug: "fragole-fiocchi",
      category: "frutta",
      theme: "Fragole",
      description:
        "Vassoi ovali dal bordo sagomato con fragole dipinte, foglie verdi e fiocchi in rilievo.",
      images: [
        image("/images/fragole_e_fiocchi/vassoio-ovale-fragole-fiocchi-ceramica.webp", "Vassoio ovale bianco con fragole dipinte e due fiocchi verdi in rilievo"),
        image("/images/fragole_e_fiocchi/vassoio-fragole-fiocchi-esposto-ceramica.webp", "Vassoio ovale esposto in verticale con fragole e fiocchi verdi"),
        image("/images/fragole_e_fiocchi/dettaglio-fiocco-verde-fragole-ceramica.webp", "Primo piano del fiocco verde in rilievo sul vassoio con fragole"),
        image("/images/fragole_e_fiocchi/dettaglio-bordo-fragole-fiocchi-ceramica.webp", "Dettaglio del bordo sagomato con fragole rosse e foglie verdi")
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
        image("/images/frutti_di_bosco/piatto-crostata-frutti-ceramica.webp", "Composizione da cucina con piatto crostata e frutti"),
        image("/images/frutti_di_bosco/vassoio-frutti-bosco-ceramica.webp", "Piatto crostata e vassoio con frutta mista"),
        image("/images/frutti_di_bosco/piatti-frutti-bosco-ceramica.webp", "Piatti crostata e vassoio con frutti dipinti"),
        image("/images/frutti_di_bosco/servizio-frutti-bosco-ceramica.webp", "Servizio da tavola con bordo a frutti di bosco"),
        image("/images/frutti_di_bosco/piatti-vassoi-frutti-bosco-ceramica.webp", "Piatti e vassoi con piccoli frutti dipinti"),
        image("/images/frutti_di_bosco/alzata-frutti-bosco-ceramica.webp", "Alzata e piatti con decoro frutti di bosco"),
        image("/images/frutti_di_bosco/teiere-piatti-frutta-ceramica.webp", "Teiere e piatti con decoro frutta"),
        image("/images/frutti_di_bosco/servizio-te-frutta-ceramica.webp", "Servizio tè e piatti decorati con frutta"),
        image("/images/frutti_di_bosco/teiera-tazze-frutti-ceramica.webp", "Teiera, tazze e piatti con piccoli frutti"),
        image("/images/frutti_di_bosco/barattoli-frutti-limoni-ceramica.webp", "Barattoli decorativi con frutti e limoni")
      ]
    },
    {
      name: "Cerchi multicolori",
      slug: "cerchi-multicolori",
      category: "tavola",
      theme: "Cerchi",
      description:
        "Brocche bianche con cerchi di diversi colori, bordo e manico rossi.",
      images: [
        image("/images/cerchi_multicolori/brocca-cerchi-multicolori-ceramica.webp", "Brocca bianca con cerchi multicolori e manico rosso su un piano in pietra"),
        image("/images/cerchi_multicolori/dettaglio-brocca-cerchi-multicolori-ceramica.webp", "Dettaglio della brocca con cerchi multicolori, bordo e manico rossi")
      ]
    },
    {
      name: "Righe multicolori",
      slug: "righe-multicolori",
      category: "tavola",
      theme: "Righe",
      description:
        "Piatti, brocche, ciotole e barattoli attraversati da righe vivaci in diversi colori.",
      images: [
        image("/images/righe_multicolori/servizio-righe-multicolori-ceramica.webp", "Piatti, brocca, ciotola e barattoli con righe multicolori"),
        image("/images/righe_multicolori/piatto-righe-multicolori-ceramica.webp", "Piatto tondo bianco con righe rosse, gialle, verdi e blu")
      ]
    },
    {
      name: "Spirali multicolori",
      slug: "spirali-multicolori",
      category: "tavola",
      theme: "Spirali",
      description:
        "Teiere, ciotole, piatti e vassoi con spirali multicolori e superfici esterne dai colori vivaci.",
      images: [
        image("/images/spirali_multicolori/teiera-ciotole-spirali-multicolori-ceramica.webp", "Teiera, ciotole e vassoio allungato con spirali multicolori"),
        image("/images/spirali_multicolori/piatto-accessorio-spirali-multicolori-ceramica.webp", "Piatto dal bordo ondulato e piccolo accessorio con spirali multicolori")
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
        image("/images/uva/piatto-brocca-uva-ceramica.webp", "Piatto e brocca con grappoli d'uva dipinti"),
        image("/images/uva/vassoio-tazza-uva-ceramica.webp", "Vassoio, tazza e piatto con uva e frutta"),
        image("/images/uva/bottiglie-vassoio-uva-ceramica.webp", "Bottiglie e vassoio con decoro uva"),
        image("/images/uva/piatti-ciotole-uva-ceramica.webp", "Piatti e ciotole in ceramica con piccoli grappoli d'uva"),
        image("/images/uva/ciotole-uva-ceramica.webp", "Ciotole sagomate con decoro uva")
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
        image("/images/olive/servizio-olive-ceramica.webp", "Servizio con bottiglie e piatto decorati a olive"),
        image("/images/olive/composizione-olive-ceramica.webp", "Composizione coordinata con decoro olive"),
        image("/images/olive/bottiglie-rami-olivo-ceramica.webp", "Bottiglie e piatto con rami d'olivo"),
        image("/images/olive/vassoio-ciotola-olive-ceramica.webp", "Vassoio ovale e ciotola con decoro olive"),
        image("/images/olive/ciotole-piatto-olive-ceramica.webp", "Ciotole e piatto ovale con olive verdi e scure dipinte"),
        image("/images/olive/due-ciotole-olive-ceramica.webp", "Due ciotole bianche con olive e foglie verdi"),
        image("/images/olive/piatto-ciotolina-olive-ceramica.webp", "Piatto ovale e ciotolina con rami d’olivo su un piano in pietra"),
        image("/images/olive/bottiglia-poggiamestolo-accessorio-olive-ceramica.webp", "Bottiglia con scritta Olio, poggiamestolo e piccolo accessorio con decoro olive"),
        image("/images/olive/poggiamestolo-olive-ceramica.webp", "Poggiamestolo allungato con olive scure e foglie verdi"),
        image("/images/olive/bottiglia-olio-olive-ceramica.webp", "Bottiglia slanciata con scritta Olio e ramo d’olivo dipinto")
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
        image("/images/ortaggi/vassoi-ciotole-ortaggi-ceramica.webp", "Vassoi e ciotole con decoro ortaggi"),
        image("/images/ortaggi/piatti-ciotole-verdure-ceramica.webp", "Piatti e ciotole con verdure dipinte")
      ]
    },
    {
      name: "Pomodori e ortaggi dipinti",
      slug: "pomodori-ortaggi-dipinti",
      category: "cucina",
      theme: "Pomodori e ortaggi",
      description:
        "Ciotole, piatti, bottiglie e poggiamestoli con pomodori, olive e ortaggi dipinti su fondo bianco.",
      images: [
        image("/images/pomodori_e_ortaggi_dipinti/ciotole-piatto-pomodori-ortaggi-ceramica.webp", "Tre ciotole e un piatto ovale con pomodori, olive e ortaggi dipinti"),
        image("/images/pomodori_e_ortaggi_dipinti/ciotola-pomodori-dipinti-ceramica.webp", "Ciotola bianca con grandi pomodori rossi e tralci verdi"),
        image("/images/pomodori_e_ortaggi_dipinti/due-ciotole-pomodori-olive-ceramica.webp", "Due ciotole con pomodori rossi, olive e foglie verdi"),
        image("/images/pomodori_e_ortaggi_dipinti/piatto-ovale-ortaggi-dipinti-ceramica.webp", "Piatto ovale con pomodoro, peperone, melanzana, aglio e olive dipinti"),
        image("/images/pomodori_e_ortaggi_dipinti/ciotola-pasta-pomodori-olive-ceramica.webp", "Ciotola bianca con scritta Pasta, pomodori rossi e olive"),
        image("/images/pomodori_e_ortaggi_dipinti/bottiglia-poggiamestoli-pomodori-olive-ceramica.webp", "Bottiglia con scritta Olio e due poggiamestoli con pomodori e olive"),
        image("/images/pomodori_e_ortaggi_dipinti/due-poggiamestoli-pomodori-olive-ceramica.webp", "Due poggiamestoli di forme diverse con pomodori, olive e bordo verde"),
        image("/images/pomodori_e_ortaggi_dipinti/bottiglia-olio-pomodori-olive-ceramica.webp", "Bottiglia bianca con pomodoro rosso, olive e scritta Olio")
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
        image("/images/ortaggi/servizio-asparagi-ceramica.webp", "Composizione completa con piatti e ciotole ad asparagi"),
        image("/images/ortaggi/ciotola-vassoio-asparagi-ceramica.webp", "Servizio con ciotola e vassoio decorati ad asparagi"),
        image("/images/ortaggi/piatto-vassoio-asparagi-ceramica.webp", "Piatto e vassoio con asparagi dipinti"),
        image("/images/ortaggi/vassoio-ovale-asparagi-ceramica.webp", "Vassoio ovale in ceramica con decoro asparagi")
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
        image("/images/pomodori/vassoio-caprese-pomodori-ceramica.webp", "Vassoio caprese e piatti con pomodori dipinti"),
        image("/images/pomodori/servizio-pomodori-basilico-ceramica.webp", "Servizio in ceramica con decoro pomodori e basilico"),
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
        image("/images/pizza_e_bruschette/linea-pizza-bruschette-ceramica.webp", "Linea pizza e bruschette con piatti e vassoio"),
        image("/images/pizza_e_bruschette/composizione-pizza-bruschette-ceramica.webp", "Composizione completa pizza e bruschette"),
        image("/images/pizza_e_bruschette/piatti-accessori-pizza-ceramica.webp", "Piatti e accessori con decoro pizza"),
        image("/images/pizza_e_bruschette/piatto-pizza-tagliere-bruschette-ceramica.webp", "Piatto pizza e tagliere bruschette in ceramica"),
        image("/images/pizza_e_bruschette/vetrina-pizza-bruschette-ceramica.webp", "Vetrina cucina con piatti pizza e bruschette"),
        image("/images/pizza_e_bruschette/tavola-pizza-bruschette-ceramica.webp", "Piatti pizza e bruschette su tavola apparecchiata")
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
        image("/images/pasta_e_spaghetti/vassoi-pasta-spaghetti-ceramica.webp", "Vassoi pasta e spaghetti ambientati in cucina"),
        image("/images/pasta_e_spaghetti/linea-pasta-spaghetti-ceramica.webp", "Linea pasta e spaghetti con piatti e piccoli vassoi"),
        image("/images/pasta_e_spaghetti/piatti-pesce-spaghetti-ceramica.webp", "Piatti a forma di pesce con scritta spaghetti"),
        image("/images/pasta_e_spaghetti/piatti-pasta-spaghetti-ceramica.webp", "Piatti sagomati per pasta e spaghetti"),
        image("/images/pasta_e_spaghetti/servizio-pasta-barattoli-ceramica.webp", "Servizio con piatti pasta e barattoli decorati"),
        image("/images/ortaggi/barattoli-brocca-pasta-ceramica.webp", "Barattoli e brocca in ceramica con pasta in rilievo"),
        image("/images/ortaggi/barattoli-caraffa-pasta-ceramica.webp", "Barattoli, bottiglia e caraffa con decori di pasta")
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
        image("/images/fiori/tazze-girasoli-ceramica.webp", "Tazze e servizio con decoro girasoli"),
        image("/images/fiori/teiera-girasoli-ceramica.webp", "Teiera, tazza e zuccheriera con girasoli"),
        image("/images/fiori/fiori-decorativi-ceramica.webp", "Fiori decorativi e piatti in ceramica"),
        image("/images/fiori/piatti-floreali-ceramica.webp", "Piatti con bordo floreale dipinto"),
        image("/images/fiori/piatti-vassoio-ciotola-girasoli-ceramica.webp", "Piatti, vassoio, ciotola e piccolo accessorio decorati con girasoli"),
        image("/images/fiori/brocca-contenitori-girasoli-ceramica.webp", "Brocca e contenitori con girasoli dipinti su un mobile in legno"),
        image("/images/fiori/brocca-girasoli-ceramica.webp", "Brocca bianca con girasoli gialli, foglie verdi e manico bianco"),
        image("/images/fiori/ciotola-girasoli-ceramica.webp", "Ciotola bianca con grandi girasoli gialli e foglie verdi"),
        image("/images/fiori/poggiamestolo-girasole-ceramica.webp", "Poggiamestolo bianco con girasole dipinto e bordo verde"),
        image("/images/fiori/maialini-girasoli-ceramica.webp", "Due maialini in ceramica con girasoli e dettagli verdi"),
        image("/images/fiori/oche-girasole-fiore-viola-ceramica.webp", "Due oche in ceramica decorate con un girasole e un fiore viola"),
        image("/images/fiori/vasi-fiori-rosa-rilievo-ceramica.webp", "Due vasi bianchi con fiori rosa in rilievo e foglie verdi")
      ]
    },
    {
      name: "Calle dipinte",
      slug: "calle-dipinte",
      category: "natura",
      theme: "Calle",
      description:
        "Piatti, vasi e oche decorative con calle e foglie verdi su fondo bianco.",
      images: [
        image("/images/calle_dipinte/piatto-calle-dipinte-ceramica.webp", "Piatto bianco con calle dipinte e foglie verdi su un supporto"),
        image("/images/calle_dipinte/oche-calle-ceramica.webp", "Due oche in ceramica con calle dipinte e colli pendenti da una mensola"),
        image("/images/calle_dipinte/oca-calle-mensola-ceramica.webp", "Oca in ceramica con calle bianche e foglie verdi su una mensola"),
        image("/images/calle_dipinte/vaso-calle-ceramica.webp", "Vaso slanciato in ceramica con calle e bordo verde")
      ]
    },
    {
      name: "Edera e stelle",
      slug: "edera-e-stelle",
      category: "natura",
      theme: "Edera e stelle",
      description:
        "Piatti bianchi con foglie d’edera, piccole stelle gialle e dettagli rossi lungo il bordo verde.",
      images: [
        image("/images/edera_e_stelle/piatto-edera-stelle-ceramica.webp", "Piatto bianco con bordo verde, foglie d’edera e stelle gialle su un tavolo"),
        image("/images/edera_e_stelle/piatto-edera-stelle-lino-ceramica.webp", "Piatto con foglie verdi e stelle gialle appoggiato su un telo di lino"),
        image("/images/edera_e_stelle/dettaglio-piatto-edera-stelle-ceramica.webp", "Vista ravvicinata del piatto con foglie d’edera, stelle gialle e puntini rossi"),
        image("/images/edera_e_stelle/dettaglio-bordo-edera-stelle-ceramica.webp", "Dettaglio del bordo verde con foglia d’edera e piccole stelle gialle")
      ]
    },
    {
      name: "Fiori bianchi e foglie",
      slug: "fiori-bianchi-foglie-sfumate",
      category: "natura",
      theme: "Fiori bianchi",
      description:
        "Piatti tondi e quadrati con fiori bianchi e foglie sfumate nei toni verdi, lilla e ocra.",
      images: [
        image("/images/fiori_bianchi_e_foglie_sfumate/piatti-fiori-bianchi-foglie-sfumate-ceramica.webp", "Piatto tondo e piatto quadrato con fiori bianchi e foglie sfumate"),
        image("/images/fiori_bianchi_e_foglie_sfumate/piatto-tondo-fiori-bianchi-ceramica.webp", "Piatto tondo con fiori bianchi e foglie ocra su un supporto"),
        image("/images/fiori_bianchi_e_foglie_sfumate/piatto-quadrato-fiori-bianchi-ceramica.webp", "Piatto quadrato con fiori bianchi, foglie verdi e sfumature lilla"),
        image("/images/fiori_bianchi_e_foglie_sfumate/dettaglio-fiori-bianchi-foglie-ocra-ceramica.webp", "Dettaglio di fiori bianchi e foglie sfumate nei toni ocra e marrone")
      ]
    },
    {
      name: "Lavanda",
      slug: "lavanda",
      category: "natura",
      theme: "Lavanda",
      description:
        "Ciotole e vassoi allungati con rametti di lavanda, foglie verdi e dettagli nei toni blu e lilla.",
      images: [
        image("/images/lavanda/ciotole-lavanda-ceramica.webp", "Due ciotole bianche con lavanda dipinta su un tavolo in legno"),
        image("/images/lavanda/ciotola-bianca-lavanda-ceramica.webp", "Ciotola bianca con rametti di lavanda dipinti sul bordo"),
        image("/images/lavanda/ciotolina-bianca-lavanda-ceramica.webp", "Piccola ciotola bianca con fiori di lavanda blu e lilla"),
        image("/images/lavanda/ciotola-lilla-lavanda-ceramica.webp", "Ciotola ovale con esterno lilla e fiori di lavanda all’interno"),
        image("/images/lavanda/vassoi-lavanda-ceramica.webp", "Due vassoi allungati con rametti di lavanda e fiocchi lilla dipinti"),
        image("/images/lavanda/vassoio-lavanda-verticale-ceramica.webp", "Vassoio rettangolare esposto in verticale con un mazzo di lavanda dipinto")
      ]
    },
    {
      name: "Margherite arancioni",
      slug: "margherite-arancio",
      category: "natura",
      theme: "Margherite",
      description:
        "Vassoi rettangolari dal bordo verde con margherite arancio e rosse su un fondo dai toni caldi.",
      images: [
        image("/images/margherite_arancio/vassoio-margherite-arancio-ceramica.webp", "Vassoio allungato con margherite arancio e rosse su fondo chiaro"),
        image("/images/margherite_arancio/vassoio-margherite-arancio-legno-ceramica.webp", "Vassoio rettangolare con margherite arancio e bordo verde su un tavolo in legno"),
        image("/images/margherite_arancio/dettaglio-margherite-arancio-ceramica.webp", "Dettaglio dei petali arancio e del bordo verde del vassoio"),
        image("/images/margherite_arancio/dettaglio-fiori-rossi-arancio-ceramica.webp", "Primo piano delle margherite rosse e arancio sul vassoio in ceramica")
      ]
    },
    {
      name: "Papaveri dipinti",
      slug: "papaveri-dipinti",
      category: "natura",
      theme: "Papaveri",
      description:
        "Ciotole, poggiamestoli e piccoli vasi a forma di borsetta con papaveri rossi e foglie verdi.",
      images: [
        image("/images/papaveri_dipinti/tre-ciotole-papaveri-ceramica.webp", "Tre ciotole bianche con papaveri rossi su un tavolo in legno"),
        image("/images/papaveri_dipinti/ciotola-papaveri-ceramica.webp", "Ciotola bianca con grandi papaveri rossi e foglie verdi"),
        image("/images/papaveri_dipinti/poggiamestolo-papavero-ceramica.webp", "Poggiamestolo bianco con papavero rosso dipinto e bordo verde"),
        image("/images/papaveri_dipinti/due-vasi-borsetta-papaveri-ceramica.webp", "Due vasi a forma di borsetta con papaveri e manici verdi"),
        image("/images/papaveri_dipinti/vaso-borsetta-papaveri-ceramica.webp", "Vaso a forma di borsetta bianca con manici verdi e papaveri rossi"),
        image("/images/papaveri_dipinti/elemento-cilindrico-bicchiere-papaveri-ceramica.webp", "Elemento cilindrico e bicchiere bianchi con papaveri rossi dipinti")
      ]
    },
    {
      name: "Rose dipinte",
      slug: "rose-dipinte",
      category: "natura",
      theme: "Rose",
      description:
        "Decoro di rose rosa e foglie verdi su ceramica bianca, con un sottile bordo rosa.",
      images: [
        image("/images/rose_dipinte/decoro-rose-rosa-ceramica.webp", "Elemento bianco in ceramica con rose rosa e foglie verdi lungo il bordo")
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
        image("/images/mare/vassoi-piatti-mare-ceramica.webp", "Vassoi e piatti con decoro mare"),
        image("/images/mare/conchiglie-marine-ceramica.webp", "Oggetti in ceramica con decori marini e conchiglie"),
        image("/images/mare/piatti-stelle-marine-ceramica.webp", "Piatti e piccoli oggetti con stelle marine"),
        image("/images/mare/pesci-decorativi-ceramica.webp", "Piatti e pesci decorativi in ceramica"),
        image("/images/mare/soggetti-marini-ceramica.webp", "Composizione completa con soggetti marini")
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
        image("/images/dettagli-decorazione.webp", "Dettaglio di decorazione manuale su ceramica", "cover"),
        image("/images/piatti_e_decori_dipinti/sole-volto-parete-ceramica.webp", "Sole in ceramica con volto giallo e raggi rossi su una parete chiara"),
        image("/images/piatti_e_decori_dipinti/sole-volto-parete-verde-ceramica.webp", "Sole decorativo con volto e raggi rossi su una parete verde chiaro"),
        image("/images/piatti_e_decori_dipinti/dettaglio-volto-sole-ceramica.webp", "Primo piano del volto giallo e arancio del sole decorativo"),
        image("/images/piatti_e_decori_dipinti/dettaglio-raggi-sole-ceramica.webp", "Dettaglio dei raggi rossi e delle volute colorate del sole in ceramica")
      ]
    },
    {
      name: "Rosa dei venti",
      slug: "rosa-dei-venti",
      category: "regalo",
      theme: "Rosa dei venti",
      description:
        "Targa decorativa tonda con rosa dei venti verde e gialla e nomi dei venti in italiano.",
      images: [
        image("/images/rosa_dei_venti/targa-rosa-dei-venti-ceramica.webp", "Targa tonda con rosa dei venti verde e gialla e nomi dei venti in italiano")
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
        image("/images/vaso-in-ceramica.webp", "Vaso in ceramica artistica"),
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
        image("/images/agrumi/composizione-agrumi-ceramica.webp", "Table composition with orange and lemon ceramic decoration"),
        image("/images/agrumi/tazze-vassoio-agrumi-ceramica.webp", "Ceramic cups and tray with citrus decoration"),
        image("/images/agrumi/servizio-agrumi-ceramica.webp", "Ceramic service decorated with citrus fruit"),
        image("/images/agrumi/bicchieri-vassoio-agrumi-ceramica.webp", "Ceramic glasses and tray with citrus fruit")
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
        image("/images/limoni/brocche-vassoio-limoni-ceramica.webp", "Ceramic pitchers and tray decorated with lemons"),
        image("/images/limoni/caraffe-ciotola-limoni-ceramica.webp", "Ceramic carafes and bowl with lemon decoration"),
        image("/images/limoni/servizio-limoni-ceramica.webp", "Complete ceramic service with lemon decoration"),
        image("/images/limoni/bottiglie-brocca-limoni-ceramica.webp", "Ceramic bottles and pitcher with lemons"),
        image("/images/limoni/bottiglie-tazze-limoni-ceramica.webp", "Bottles, container and cups with lemon decoration"),
        image("/images/limoni/piatti-tazze-limoni-ceramica.webp", "Shaped plates and cups with lemon decoration"),
        image("/images/limoni/due-brocche-limoni-ceramica.webp", "Two white pitchers with yellow lemons and green leaves"),
        image("/images/limoni/vassoio-quadrato-ciotole-limoni-ceramica.webp", "Square tray and two shaped bowls with lemons and green leaves"),
        image("/images/limoni/ciotola-vassoio-quadrato-limoni-ceramica.webp", "Bowl and square tray with lemon decoration on a stone surface"),
        image("/images/limoni/ciotola-limoni-tavola-ceramica.webp", "White bowl with large painted lemons on a table"),
        image("/images/limoni/piatti-ciotola-limoni-tavola-ceramica.webp", "Two plates and a bowl with painted lemons on a wooden table"),
        image("/images/limoni/barattoli-sale-zucchero-limoni-ceramica.webp", "Lidded jars marked Sale and Zucchero decorated with lemons"),
        image("/images/limoni/vassoio-ciotoline-limoni-ceramica.webp", "Elongated tray and two small shaped bowls with painted lemons"),
        image("/images/limoni/anatra-borsetta-limoni-ceramica.webp", "Duck and small handbag-shaped vase decorated with lemons")
      ]
    },
    {
      name: "Lemons and olives",
      slug: "limoni-olive",
      category: "cucina",
      theme: "Lemons and olives",
      description:
        "Trays, divided plates, bowls and spoon rests with yellow lemons, dark olives and green leaves.",
      images: [
        image("/images/limoni_e_olive/piatto-vassoio-limoni-olive-ceramica.webp", "Three-section plate and oval tray with lemons and olives"),
        image("/images/limoni_e_olive/vassoio-ovale-limoni-olive-ceramica.webp", "Oval tray with handles, yellow lemons and dark olives"),
        image("/images/limoni_e_olive/piatto-sagomato-limoni-olive-ceramica.webp", "White shaped plate with yellow lemons, dark olives and green leaves"),
        image("/images/limoni_e_olive/piatto-scomparti-limoni-olive-ceramica.webp", "Round three-section plate with lemons and olive branches"),
        image("/images/limoni_e_olive/ciotola-ovale-limoni-olive-ceramica.webp", "Oval bowl with lemons, olives and a green rim"),
        image("/images/limoni_e_olive/poggiamestolo-limoni-olive-ceramica.webp", "Spoon rest with painted lemons and olives and a green rim")
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
        image("/images/frutta_mista/teiera-tazze-frutta-ceramica.webp", "Ceramic teapot, cups and containers with fruit"),
        image("/images/frutta_mista/piatto-vassoio-frutta-ceramica.webp", "Tart plate, tray and cup with painted fruit"),
        image("/images/frutta_mista/piatto-brocca-frutta-ceramica.webp", "Composition with plate and pitcher decorated with fruit"),
        image("/images/frutta_mista/bottiglie-vassoio-frutta-ceramica.webp", "Bottles, plate and tray with fruit decorations"),
        image("/images/frutta_mista/bottiglia-brocca-frutta-ceramica.webp", "Bottle, plate and pitcher with painted fruit"),
        image("/images/agrumi/ciotole-vassoio-frutta-ceramica.webp", "Ceramic bowls and tray with mixed fruit decorations"),
        image("/images/ortaggi/brocche-frutta-ceramica.webp", "Fruit-shaped ceramic pitchers"),
        image("/images/frutta_mista/bottiglie-brocca-pera-ceramica.webp", "Bottles and pitcher with pear and fruit decorations"),
        image("/images/frutta_mista/foglie-frutti-ceramica.webp", "Decorative ceramic leaves and fruit")
      ]
    },
    {
      name: "Watermelon",
      slug: "anguria",
      category: "frutta",
      theme: "Watermelon",
      description:
        "Plates, bowls and tumblers inspired by watermelon, with vivid reds, green rims and small painted seeds.",
      images: [
        image("/images/anguria/piatti-ciotola-anguria-ceramica.webp", "Round plates, a square plate and a bowl with watermelon decoration"),
        image("/images/anguria/ciotole-bicchiere-anguria-ceramica.webp", "Ceramic bowls and a tumbler with red interiors and watermelon decoration"),
        image("/images/anguria/ciotola-anguria-ceramica.webp", "Bowl with a red interior, black seeds and a green rim inspired by watermelon"),
        image("/images/anguria/piatto-sagomato-anguria-ceramica.webp", "Shaped plate with painted watermelon and slices at the sides")
      ]
    },
    {
      name: "Strawberries and bows",
      slug: "fragole-fiocchi",
      category: "frutta",
      theme: "Strawberries",
      description:
        "Oval trays with shaped rims, painted strawberries, green leaves and raised bows.",
      images: [
        image("/images/fragole_e_fiocchi/vassoio-ovale-fragole-fiocchi-ceramica.webp", "White oval tray with painted strawberries and two raised green bows"),
        image("/images/fragole_e_fiocchi/vassoio-fragole-fiocchi-esposto-ceramica.webp", "Oval tray displayed upright with strawberries and green bows"),
        image("/images/fragole_e_fiocchi/dettaglio-fiocco-verde-fragole-ceramica.webp", "Close-up of the raised green bow on the strawberry tray"),
        image("/images/fragole_e_fiocchi/dettaglio-bordo-fragole-fiocchi-ceramica.webp", "Detail of the shaped rim with red strawberries and green leaves")
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
        image("/images/frutti_di_bosco/piatto-crostata-frutti-ceramica.webp", "Kitchen composition with tart plate and fruit"),
        image("/images/frutti_di_bosco/vassoio-frutti-bosco-ceramica.webp", "Tart plate and tray with mixed fruit"),
        image("/images/frutti_di_bosco/piatti-frutti-bosco-ceramica.webp", "Tart plates and tray with painted berries"),
        image("/images/frutti_di_bosco/servizio-frutti-bosco-ceramica.webp", "Table service with wild berry border"),
        image("/images/frutti_di_bosco/piatti-vassoi-frutti-bosco-ceramica.webp", "Plates and trays with small painted berries"),
        image("/images/frutti_di_bosco/alzata-frutti-bosco-ceramica.webp", "Stand and plates with wild berry decoration"),
        image("/images/frutti_di_bosco/teiere-piatti-frutta-ceramica.webp", "Teapots and plates with fruit decoration"),
        image("/images/frutti_di_bosco/servizio-te-frutta-ceramica.webp", "Tea service and plates decorated with fruit"),
        image("/images/frutti_di_bosco/teiera-tazze-frutti-ceramica.webp", "Teapot, cups and plates with small fruit"),
        image("/images/frutti_di_bosco/barattoli-frutti-limoni-ceramica.webp", "Decorative jars with fruit and lemons")
      ]
    },
    {
      name: "Multicolored circles",
      slug: "cerchi-multicolori",
      category: "tavola",
      theme: "Circles",
      description:
        "White pitchers with circles in different colors and red rims and handles.",
      images: [
        image("/images/cerchi_multicolori/brocca-cerchi-multicolori-ceramica.webp", "White pitcher with multicolored circles and a red handle on a stone surface"),
        image("/images/cerchi_multicolori/dettaglio-brocca-cerchi-multicolori-ceramica.webp", "Detail of the pitcher with multicolored circles and a red rim and handle")
      ]
    },
    {
      name: "Multicolored stripes",
      slug: "righe-multicolori",
      category: "tavola",
      theme: "Stripes",
      description:
        "Plates, pitchers, bowls and jars with vivid stripes in different colors.",
      images: [
        image("/images/righe_multicolori/servizio-righe-multicolori-ceramica.webp", "Plates, a pitcher, a bowl and jars with multicolored stripes"),
        image("/images/righe_multicolori/piatto-righe-multicolori-ceramica.webp", "Round white plate with red, yellow, green and blue stripes")
      ]
    },
    {
      name: "Multicolored spirals",
      slug: "spirali-multicolori",
      category: "tavola",
      theme: "Spirals",
      description:
        "Teapots, bowls, plates and trays with multicolored spirals and brightly colored outer surfaces.",
      images: [
        image("/images/spirali_multicolori/teiera-ciotole-spirali-multicolori-ceramica.webp", "Teapot, bowls and elongated tray with multicolored spirals"),
        image("/images/spirali_multicolori/piatto-accessorio-spirali-multicolori-ceramica.webp", "Plate with a wavy rim and a small accessory with multicolored spirals")
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
        image("/images/uva/piatto-brocca-uva-ceramica.webp", "Plate and pitcher with painted grape clusters"),
        image("/images/uva/vassoio-tazza-uva-ceramica.webp", "Tray, cup and plate with grapes and fruit"),
        image("/images/uva/bottiglie-vassoio-uva-ceramica.webp", "Bottles and tray with grape decoration"),
        image("/images/uva/piatti-ciotole-uva-ceramica.webp", "Ceramic plates and bowls with small grape clusters"),
        image("/images/uva/ciotole-uva-ceramica.webp", "Shaped bowls with grape decoration")
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
        image("/images/olive/servizio-olive-ceramica.webp", "Service with bottles and plate decorated with olives"),
        image("/images/olive/composizione-olive-ceramica.webp", "Coordinated composition with olive decoration"),
        image("/images/olive/bottiglie-rami-olivo-ceramica.webp", "Bottles and plate with olive branches"),
        image("/images/olive/vassoio-ciotola-olive-ceramica.webp", "Oval tray and bowl with olive decoration"),
        image("/images/olive/ciotole-piatto-olive-ceramica.webp", "Bowls and an oval plate with painted green and dark olives"),
        image("/images/olive/due-ciotole-olive-ceramica.webp", "Two white bowls with olives and green leaves"),
        image("/images/olive/piatto-ciotolina-olive-ceramica.webp", "Oval plate and small bowl with olive branches on a stone surface"),
        image("/images/olive/bottiglia-poggiamestolo-accessorio-olive-ceramica.webp", "Bottle marked Olio, spoon rest and small accessory with olive decoration"),
        image("/images/olive/poggiamestolo-olive-ceramica.webp", "Elongated spoon rest with dark olives and green leaves"),
        image("/images/olive/bottiglia-olio-olive-ceramica.webp", "Tall bottle marked Olio with a painted olive branch")
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
        image("/images/ortaggi/vassoi-ciotole-ortaggi-ceramica.webp", "Trays and bowls with vegetable decoration"),
        image("/images/ortaggi/piatti-ciotole-verdure-ceramica.webp", "Plates and bowls with painted vegetables")
      ]
    },
    {
      name: "Painted tomatoes and vegetables",
      slug: "pomodori-ortaggi-dipinti",
      category: "cucina",
      theme: "Tomatoes and vegetables",
      description:
        "Bowls, plates, bottles and spoon rests with tomatoes, olives and vegetables painted on a white background.",
      images: [
        image("/images/pomodori_e_ortaggi_dipinti/ciotole-piatto-pomodori-ortaggi-ceramica.webp", "Three bowls and an oval plate with painted tomatoes, olives and vegetables"),
        image("/images/pomodori_e_ortaggi_dipinti/ciotola-pomodori-dipinti-ceramica.webp", "White bowl with large red tomatoes and green vines"),
        image("/images/pomodori_e_ortaggi_dipinti/due-ciotole-pomodori-olive-ceramica.webp", "Two bowls with red tomatoes, olives and green leaves"),
        image("/images/pomodori_e_ortaggi_dipinti/piatto-ovale-ortaggi-dipinti-ceramica.webp", "Oval plate with painted tomato, pepper, aubergine, garlic and olives"),
        image("/images/pomodori_e_ortaggi_dipinti/ciotola-pasta-pomodori-olive-ceramica.webp", "White bowl marked Pasta with red tomatoes and olives"),
        image("/images/pomodori_e_ortaggi_dipinti/bottiglia-poggiamestoli-pomodori-olive-ceramica.webp", "Bottle marked Olio and two spoon rests with tomatoes and olives"),
        image("/images/pomodori_e_ortaggi_dipinti/due-poggiamestoli-pomodori-olive-ceramica.webp", "Two differently shaped spoon rests with tomatoes, olives and a green rim"),
        image("/images/pomodori_e_ortaggi_dipinti/bottiglia-olio-pomodori-olive-ceramica.webp", "White bottle with a red tomato, olives and the word Olio")
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
        image("/images/ortaggi/servizio-asparagi-ceramica.webp", "Complete composition with asparagus plates and bowls"),
        image("/images/ortaggi/ciotola-vassoio-asparagi-ceramica.webp", "Service with bowl and tray decorated with asparagus"),
        image("/images/ortaggi/piatto-vassoio-asparagi-ceramica.webp", "Plate and tray with painted asparagus"),
        image("/images/ortaggi/vassoio-ovale-asparagi-ceramica.webp", "Oval ceramic tray with asparagus decoration")
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
        image("/images/pomodori/vassoio-caprese-pomodori-ceramica.webp", "Caprese tray and plates with painted tomatoes"),
        image("/images/pomodori/servizio-pomodori-basilico-ceramica.webp", "Ceramic service with tomato and basil decoration"),
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
        image("/images/pizza_e_bruschette/linea-pizza-bruschette-ceramica.webp", "Pizza and bruschetta line with plates and tray"),
        image("/images/pizza_e_bruschette/composizione-pizza-bruschette-ceramica.webp", "Complete pizza and bruschetta composition"),
        image("/images/pizza_e_bruschette/piatti-accessori-pizza-ceramica.webp", "Plates and accessories with pizza decoration"),
        image("/images/pizza_e_bruschette/piatto-pizza-tagliere-bruschette-ceramica.webp", "Pizza plate and ceramic bruschetta board"),
        image("/images/pizza_e_bruschette/vetrina-pizza-bruschette-ceramica.webp", "Kitchen display with pizza and bruschetta plates"),
        image("/images/pizza_e_bruschette/tavola-pizza-bruschette-ceramica.webp", "Pizza and bruschetta plates on a set table")
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
        image("/images/pasta_e_spaghetti/vassoi-pasta-spaghetti-ceramica.webp", "Pasta and spaghetti trays set in a kitchen"),
        image("/images/pasta_e_spaghetti/linea-pasta-spaghetti-ceramica.webp", "Pasta and spaghetti line with plates and small trays"),
        image("/images/pasta_e_spaghetti/piatti-pesce-spaghetti-ceramica.webp", "Fish-shaped plates with spaghetti lettering"),
        image("/images/pasta_e_spaghetti/piatti-pasta-spaghetti-ceramica.webp", "Shaped plates for pasta and spaghetti"),
        image("/images/pasta_e_spaghetti/servizio-pasta-barattoli-ceramica.webp", "Service with pasta plates and decorated jars"),
        image("/images/ortaggi/barattoli-brocca-pasta-ceramica.webp", "Ceramic jars and pitcher with raised pasta decoration"),
        image("/images/ortaggi/barattoli-caraffa-pasta-ceramica.webp", "Jars, bottle and carafe with pasta decorations")
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
        image("/images/fiori/tazze-girasoli-ceramica.webp", "Cups and service with sunflower decoration"),
        image("/images/fiori/teiera-girasoli-ceramica.webp", "Teapot, cup and sugar bowl with sunflowers"),
        image("/images/fiori/fiori-decorativi-ceramica.webp", "Decorative flowers and ceramic plates"),
        image("/images/fiori/piatti-floreali-ceramica.webp", "Plates with painted floral border"),
        image("/images/fiori/piatti-vassoio-ciotola-girasoli-ceramica.webp", "Plates, a tray, a bowl and a small accessory decorated with sunflowers"),
        image("/images/fiori/brocca-contenitori-girasoli-ceramica.webp", "Pitcher and containers with painted sunflowers on a wooden cabinet"),
        image("/images/fiori/brocca-girasoli-ceramica.webp", "White pitcher with yellow sunflowers, green leaves and a white handle"),
        image("/images/fiori/ciotola-girasoli-ceramica.webp", "White bowl with large yellow sunflowers and green leaves"),
        image("/images/fiori/poggiamestolo-girasole-ceramica.webp", "White spoon rest with a painted sunflower and a green rim"),
        image("/images/fiori/maialini-girasoli-ceramica.webp", "Two ceramic pigs with sunflowers and green details"),
        image("/images/fiori/oche-girasole-fiore-viola-ceramica.webp", "Two ceramic geese decorated with a sunflower and a purple flower"),
        image("/images/fiori/vasi-fiori-rosa-rilievo-ceramica.webp", "Two white pots with raised pink flowers and green leaves")
      ]
    },
    {
      name: "Painted calla lilies",
      slug: "calle-dipinte",
      category: "natura",
      theme: "Calla lilies",
      description:
        "Plates, vases and decorative geese with calla lilies and green leaves on a white background.",
      images: [
        image("/images/calle_dipinte/piatto-calle-dipinte-ceramica.webp", "White plate with painted calla lilies and green leaves on a stand"),
        image("/images/calle_dipinte/oche-calle-ceramica.webp", "Two ceramic geese with painted calla lilies and necks hanging over a shelf"),
        image("/images/calle_dipinte/oca-calle-mensola-ceramica.webp", "Ceramic goose with white calla lilies and green leaves on a shelf"),
        image("/images/calle_dipinte/vaso-calle-ceramica.webp", "Tall ceramic vase with calla lilies and a green rim")
      ]
    },
    {
      name: "Ivy and stars",
      slug: "edera-e-stelle",
      category: "natura",
      theme: "Ivy and stars",
      description:
        "White plates with ivy leaves, small yellow stars and red details around a green rim.",
      images: [
        image("/images/edera_e_stelle/piatto-edera-stelle-ceramica.webp", "White plate with a green rim, ivy leaves and yellow stars on a table"),
        image("/images/edera_e_stelle/piatto-edera-stelle-lino-ceramica.webp", "Plate with green leaves and yellow stars resting on a linen cloth"),
        image("/images/edera_e_stelle/dettaglio-piatto-edera-stelle-ceramica.webp", "Close view of the plate with ivy leaves, yellow stars and red dots"),
        image("/images/edera_e_stelle/dettaglio-bordo-edera-stelle-ceramica.webp", "Detail of the green rim with an ivy leaf and small yellow stars")
      ]
    },
    {
      name: "White flowers and leaves",
      slug: "fiori-bianchi-foglie-sfumate",
      category: "natura",
      theme: "White flowers",
      description:
        "Round and square plates with white flowers and shaded leaves in green, lilac and ochre tones.",
      images: [
        image("/images/fiori_bianchi_e_foglie_sfumate/piatti-fiori-bianchi-foglie-sfumate-ceramica.webp", "Round and square plates with white flowers and shaded leaves"),
        image("/images/fiori_bianchi_e_foglie_sfumate/piatto-tondo-fiori-bianchi-ceramica.webp", "Round plate with white flowers and ochre leaves on a stand"),
        image("/images/fiori_bianchi_e_foglie_sfumate/piatto-quadrato-fiori-bianchi-ceramica.webp", "Square plate with white flowers, green leaves and lilac shading"),
        image("/images/fiori_bianchi_e_foglie_sfumate/dettaglio-fiori-bianchi-foglie-ocra-ceramica.webp", "Detail of white flowers and shaded leaves in ochre and brown tones")
      ]
    },
    {
      name: "Lavender",
      slug: "lavanda",
      category: "natura",
      theme: "Lavender",
      description:
        "Bowls and elongated trays with lavender sprigs, green leaves and details in blue and lilac tones.",
      images: [
        image("/images/lavanda/ciotole-lavanda-ceramica.webp", "Two white bowls with painted lavender on a wooden table"),
        image("/images/lavanda/ciotola-bianca-lavanda-ceramica.webp", "White bowl with lavender sprigs painted around the rim"),
        image("/images/lavanda/ciotolina-bianca-lavanda-ceramica.webp", "Small white bowl with blue and lilac lavender flowers"),
        image("/images/lavanda/ciotola-lilla-lavanda-ceramica.webp", "Oval bowl with a lilac exterior and lavender flowers inside"),
        image("/images/lavanda/vassoi-lavanda-ceramica.webp", "Two elongated trays with painted lavender sprigs and lilac bows"),
        image("/images/lavanda/vassoio-lavanda-verticale-ceramica.webp", "Rectangular tray displayed upright with a painted bunch of lavender")
      ]
    },
    {
      name: "Orange daisies",
      slug: "margherite-arancio",
      category: "natura",
      theme: "Daisies",
      description:
        "Rectangular trays with green rims and orange and red daisies on a warm-toned background.",
      images: [
        image("/images/margherite_arancio/vassoio-margherite-arancio-ceramica.webp", "Elongated tray with orange and red daisies on a pale background"),
        image("/images/margherite_arancio/vassoio-margherite-arancio-legno-ceramica.webp", "Rectangular tray with orange daisies and a green rim on a wooden table"),
        image("/images/margherite_arancio/dettaglio-margherite-arancio-ceramica.webp", "Detail of the orange petals and green rim of the tray"),
        image("/images/margherite_arancio/dettaglio-fiori-rossi-arancio-ceramica.webp", "Close-up of the red and orange daisies on the ceramic tray")
      ]
    },
    {
      name: "Painted poppies",
      slug: "papaveri-dipinti",
      category: "natura",
      theme: "Poppies",
      description:
        "Bowls, spoon rests and small handbag-shaped vases with red poppies and green leaves.",
      images: [
        image("/images/papaveri_dipinti/tre-ciotole-papaveri-ceramica.webp", "Three white bowls with red poppies on a wooden table"),
        image("/images/papaveri_dipinti/ciotola-papaveri-ceramica.webp", "White bowl with large red poppies and green leaves"),
        image("/images/papaveri_dipinti/poggiamestolo-papavero-ceramica.webp", "White spoon rest with a painted red poppy and a green rim"),
        image("/images/papaveri_dipinti/due-vasi-borsetta-papaveri-ceramica.webp", "Two handbag-shaped vases with poppies and green handles"),
        image("/images/papaveri_dipinti/vaso-borsetta-papaveri-ceramica.webp", "White handbag-shaped vase with green handles and red poppies"),
        image("/images/papaveri_dipinti/elemento-cilindrico-bicchiere-papaveri-ceramica.webp", "White cylindrical piece and tumbler with painted red poppies")
      ]
    },
    {
      name: "Painted roses",
      slug: "rose-dipinte",
      category: "natura",
      theme: "Roses",
      description:
        "Pink roses and green leaves on white ceramic, finished with a fine pink border.",
      images: [
        image("/images/rose_dipinte/decoro-rose-rosa-ceramica.webp", "White ceramic piece with pink roses and green leaves around the edge")
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
        image("/images/mare/vassoi-piatti-mare-ceramica.webp", "Trays and plates with sea decoration"),
        image("/images/mare/conchiglie-marine-ceramica.webp", "Ceramic objects with marine decorations and shells"),
        image("/images/mare/piatti-stelle-marine-ceramica.webp", "Plates and small objects with starfish"),
        image("/images/mare/pesci-decorativi-ceramica.webp", "Plates and decorative ceramic fish"),
        image("/images/mare/soggetti-marini-ceramica.webp", "Complete composition with marine subjects")
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
        image("/images/dettagli-decorazione.webp", "Detail of hand decoration on ceramic", "cover"),
        image("/images/piatti_e_decori_dipinti/sole-volto-parete-ceramica.webp", "Ceramic sun with a yellow face and red rays on a pale wall"),
        image("/images/piatti_e_decori_dipinti/sole-volto-parete-verde-ceramica.webp", "Decorative sun with a face and red rays on a pale green wall"),
        image("/images/piatti_e_decori_dipinti/dettaglio-volto-sole-ceramica.webp", "Close-up of the yellow and orange face of the decorative sun"),
        image("/images/piatti_e_decori_dipinti/dettaglio-raggi-sole-ceramica.webp", "Detail of the red rays and colored curls of the ceramic sun")
      ]
    },
    {
      name: "Compass rose",
      slug: "rosa-dei-venti",
      category: "regalo",
      theme: "Compass rose",
      description:
        "Round decorative plaque with a green and yellow compass rose and wind names in Italian.",
      images: [
        image("/images/rosa_dei_venti/targa-rosa-dei-venti-ceramica.webp", "Round plaque with a green and yellow compass rose and wind names in Italian")
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
        image("/images/vaso-in-ceramica.webp", "Artistic ceramic vase"),
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
