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
  // DATO DA CONFERMARE con il cliente prima della pubblicazione.
  email: "info@ceramichebressanc2.it",
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

export const collectionCategories = [
  {
    title: "Ceramiche per la tavola",
    slug: "tavola",
    image: "/images/collezione-tavola.jpg",
    alt: "Piatti e ceramiche artigianali per la tavola",
    description:
      "Piatti, ciotole e forme pensate per portare nel punto vendita il calore della ceramica dipinta a mano."
  },
  {
    title: "Oggetti per la cucina",
    slug: "cucina",
    image: "/images/ceramiche-cucina.jpg",
    alt: "Oggetti in ceramica per la cucina artigianale",
    description:
      "Elementi pratici e decorativi per negozi dedicati alla casa, alla cucina e agli oggetti scelti con cura."
  },
  {
    title: "Complementi decorativi",
    slug: "decorativi",
    image: "/images/vasi-ceramica-artistica.jpg",
    alt: "Vasi e complementi decorativi in ceramica artistica",
    description:
      "Vasi, oggetti e dettagli ornamentali per arricchire l’esposizione con forme dal carattere italiano."
  },
  {
    title: "Articoli regalo",
    slug: "regalo",
    image: "/images/dettagli-decorazione.jpg",
    alt: "Articoli regalo in ceramica artistica",
    description:
      "Proposte artigianali per botteghe, negozi regalo e spazi che scelgono prodotti riconoscibili."
  },
  {
    title: "Ceramiche dipinte a mano",
    slug: "dipinti",
    image: "/images/piatti-dipinti-a-mano.jpg",
    alt: "Piatto in ceramica dipinto a mano",
    description:
      "Oggetti in cui il gesto manuale resta visibile: pennellate, decori e sfumature danno valore all’esposizione."
  },
  {
    title: "Souvenir e oggettistica artistica",
    slug: "souvenir",
    image: "/images/oggetto-regalo.jpg",
    alt: "Souvenir e oggettistica artistica in ceramica",
    description:
      "Oggettistica in ceramica per punti vendita turistici e realtà che cercano prodotti artigianali italiani."
  }
];

export const catalogItems = [
  {
    name: "Piatto decorato",
    category: "tavola",
    image: "/images/piatto-decorato.jpg",
    alt: "Piatto decorato in ceramica dipinto a mano",
    description: "Un articolo decorativo e funzionale per spazi dedicati alla casa, alla tavola e al regalo."
  },
  {
    name: "Vaso in ceramica",
    category: "decorativi",
    image: "/images/vaso-in-ceramica.png",
    alt: "Vaso in ceramica artistica",
    imageFit: "contain",
    description: "Forma decorativa adatta all’esposizione in negozio e a un assortimento artigianale."
  },
  {
    name: "Servizio da tavola",
    category: "tavola",
    image: "/images/collezione-tavola.jpg",
    alt: "Servizio da tavola in ceramica artigianale",
    description: "Coordinati per tavola dal carattere italiano, adatti a negozi casa e botteghe."
  },
  {
    name: "Oggetti per cucina",
    category: "cucina",
    image: "/images/ceramiche-cucina.jpg",
    alt: "Oggetti in ceramica per la cucina",
    description: "Accessori decorativi e funzionali per negozi dedicati alla cucina e alla casa."
  },
  {
    name: "Decoro artigianale",
    category: "dipinti",
    image: "/images/dettagli-decorazione.jpg",
    alt: "Dettaglio di decorazione manuale su ceramica",
    description: "Dettagli dipinti a mano per valorizzare l’assortimento con oggetti distintivi."
  },
  {
    name: "Oggetto regalo",
    category: "regalo",
    image: "/images/oggetto-regalo.jpg",
    alt: "Oggetto regalo in ceramica artigianale",
    imageFit: "contain",
    description: "Piccole creazioni in ceramica per negozi regalo, souvenir e concept store."
  }
];
