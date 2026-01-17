export const locales = ["cs", "sk"] as const;

export type Locale = (typeof locales)[number];

type Dictionary = {
  nav: {
    home: string;
    about: string;
    videos: string;
    team: string;
    dabers: string;
    contact: string;
    youtubeSubscribe: string;
    youtubeSubscribeMobile: string;
  };
  home: {
    hero: {
      badge: string;
      title: string;
      description: string;
      watchPilot: string;
      subscribeChannel: string;
    };
    stats: {
      subscribers: string;
      views: string;
      videos: string;
    };
    recent: {
      heading: string;
      subheading: string;
      allVideos: string;
    };
  };
  about: {
    headingPrefix: string;
    headingHighlight: string;
    faqTitle: string;
    faqHighlight: string;
  };
  team: {
    defaultTitlePrefix: string;
    defaultTitleHighlight: string;
    emptyTitle: string;
    emptyDescription: string;
    clearFilter: string;
    searchPlaceholder: string;
    activeSectionTitle: string;
    sleepingSectionTitle: string;
    sleepingSectionDescription: string;
    ctaHeadingPrefix: string;
    ctaHeadingHighlight: string;
    ctaDescription: string;
    ctaRequirement: string;
    ctaButton: string;
    demoAlertPrefix: string;
  };
  videos: {
    heroTitlePrefix: string;
    heroTitleHighlight: string;
    heroSubtitle: string;
    searchPlaceholder: string;
    allVideosHeading: string;
    foundResultsLabel: string;
    filterLabelNewest: string;
    loadMore: string;
    playlistsTitle: string;
    hazbinTitle: string;
    helluvaTitle: string;
    playlistPlayAll: string;
  };
  contact: {
    heroTitlePrefix: string;
    heroTitleHighlight: string;
    heroSubtitle: string;
    howToContactHeading: string;
    howToContactText: string;
  };
  footer: {
    tagline: string;
    navHeading: string;
    navHome: string;
    navAbout: string;
    navVideos: string;
    navTeam: string;
    navContact: string;
    contactHeading: string;
    newsletterHeading: string;
    newsletterText: string;
    newsletterEmailPlaceholder: string;
    newsletterButton: string;
    copyright: string;
  };
};

const csDictionary: Dictionary = {
  nav: {
    home: "Domů",
    about: "O nás",
    videos: "Videa",
    team: "Tým",
    dabers: "Dabéři",
    contact: "Kontakt",
    youtubeSubscribe: "Odebírat",
    youtubeSubscribeMobile: "Odebírat",
  },
  home: {
    hero: {
      badge: "Nový dabing venku",
      title: "ECHO DABING",
      description:
        "EchoDabing dává život vašim oblíbeným postavám. Profesionální kvalita v českém a slovenském jazyce.",
      watchPilot: "Sledovat pilot",
      subscribeChannel: "Odebírat kanál",
    },
    stats: {
      subscribers: "Odběratelé",
      views: "Zhlédnutí",
      videos: "Videa",
    },
    recent: {
      heading: "Poslední tvorba",
      subheading: "Sledujte naše nejnovější dabingové kousky.",
      allVideos: "Všechna videa",
    },
  },
  about: {
    headingPrefix: "Náš",
    headingHighlight: "Příběh",
    faqTitle: "Časté",
    faqHighlight: "dotazy",
  },
  team: {
    defaultTitlePrefix: "Náš",
    defaultTitleHighlight: "Tým",
    emptyTitle: "Nikdo nenalezen",
    emptyDescription: "Zkuste hledat jiné jméno.",
    clearFilter: "Zrušit filtr",
    searchPlaceholder: "Hledat člena...",
    activeSectionTitle: "Aktivní členové",
    sleepingSectionTitle: "Spící členové",
    sleepingSectionDescription:
      "Členové, kteří mají roli neaktivní a momentálně nedabují.",
    ctaHeadingPrefix: "Máš",
    ctaHeadingHighlight: "hlas?",
    ctaDescription:
      "Stále hledáme nové talenty. Ať už chceš dabovat, stříhat, překládat nebo mixovat zvuk, rádi tě přivítáme.",
    ctaRequirement:
      "Podmínkou je vlastní vybavení a nahrávání z domova",
    ctaButton: "Přejít na Discord server",
    demoAlertPrefix: "Přehrávám ukázku",
  },
  videos: {
    heroTitlePrefix: "Knihovna",
    heroTitleHighlight: "Videí",
    heroSubtitle: "Prozkoumej naše nejnovější dabingové kousky.",
    searchPlaceholder: "Hledat epizodu, postavu, sérii...",
    allVideosHeading: "Všechna videa",
    foundResultsLabel: "Nalezených videí:",
    filterLabelNewest: "Nejnovější",
    loadMore: "Načíst další",
    playlistsTitle: "Série a playlisty",
    hazbinTitle: "Hazbin Hotel",
    helluvaTitle: "Helluva Boss",
    playlistPlayAll: "Přehrát vše",
  },
  contact: {
    heroTitlePrefix: "KONTAKTUJTE",
    heroTitleHighlight: "NÁS",
    heroSubtitle:
      "Jsme online. Všude tam, kde je dobrý internet a skvělý dabing.",
    howToContactHeading: "Jak nás kontaktovat",
    howToContactText:
      "Máš dotaz, chceš něco řešit nebo nahlásit chybu? Napiš přímo AlphaLukovi na Discordu.",
  },
  footer: {
    tagline:
      "Profesionální amatérský dabing. Dáváme hlas postavám, které milujete.",
    navHeading: "Navigace",
    navHome: "Domů",
    navAbout: "O nás",
    navVideos: "Videa",
    navTeam: "Tým",
    navContact: "Kontakt",
    contactHeading: "Kontakt",
    newsletterHeading: "Newsletter",
    newsletterText:
      "Odebírat novinky o nových videích a castinzích.",
    newsletterEmailPlaceholder: "Váš email",
    newsletterButton: "Odebírat",
    copyright:
      "EchoDabing. Všechna práva vyhrazena. S láskou AlphaLuk.",
  },
};

const skDictionary: Dictionary = {
  nav: {
    home: "Domov",
    about: "O nás",
    videos: "Videá",
    team: "Tím",
    dabers: "Dabéri",
    contact: "Kontakt",
    youtubeSubscribe: "Odoberať",
    youtubeSubscribeMobile: "Odoberať",
  },
  home: {
    hero: {
      badge: "Nový dabing vonku",
      title: "ECHO DABING",
      description:
        "EchoDabing dáva život vašim obľúbeným postavám. Profesionálna kvalita v českom a slovenskom jazyku.",
      watchPilot: "Pozrieť pilot",
      subscribeChannel: "Odoberať kanál",
    },
    stats: {
      subscribers: "Odberatelia",
      views: "Pozretia",
      videos: "Videá",
    },
    recent: {
      heading: "Posledná tvorba",
      subheading: "Sledujte naše najnovšie dabingové kúsky.",
      allVideos: "Všetky videá",
    },
  },
  about: {
    headingPrefix: "Náš",
    headingHighlight: "Príbeh",
    faqTitle: "Časté",
    faqHighlight: "otázky",
  },
  team: {
    defaultTitlePrefix: "Náš",
    defaultTitleHighlight: "Tím",
    emptyTitle: "Nikto nenájdený",
    emptyDescription: "Skúste hľadať podľa iného mena.",
    clearFilter: "Zrušiť filter",
    searchPlaceholder: "Hľadať člena...",
    activeSectionTitle: "Aktívni členovia",
    sleepingSectionTitle: "Tí čo spia",
    sleepingSectionDescription:
      "Členovia, ktorí majú rolu neaktívny a momentálne nedabujú.",
    ctaHeadingPrefix: "Máš",
    ctaHeadingHighlight: "hlas?",
    ctaDescription:
      "Stále hľadáme nové talenty. Či chceš dabovať, strihať, prekladať alebo mixovať zvuk, radi ťa privítame.",
    ctaRequirement:
      "Podmienkou je vlastné vybavenie a nahrávanie z domu",
    ctaButton: "Prejsť na Discord server",
    demoAlertPrefix: "Prehrávam ukážku",
  },
  videos: {
    heroTitlePrefix: "Knižnica",
    heroTitleHighlight: "Videí",
    heroSubtitle: "Preskúmaj naše najnovšie dabingové kúsky.",
    searchPlaceholder: "Hľadať epizódu, postavu, sériu...",
    allVideosHeading: "Všetky videá",
    foundResultsLabel: "Nájdených videí:",
    filterLabelNewest: "Najnovšie",
    loadMore: "Načítať ďalšie",
    playlistsTitle: "Série a playlisty",
    hazbinTitle: "Hazbin Hotel",
    helluvaTitle: "Helluva Boss",
    playlistPlayAll: "Prehrať všetko",
  },
  contact: {
    heroTitlePrefix: "KONTAKTUJTE",
    heroTitleHighlight: "NÁS",
    heroSubtitle:
      "Sme online. Všade tam, kde je dobrý internet a skvelý dabing.",
    howToContactHeading: "Ako nás kontaktovať",
    howToContactText:
      "Máš otázku, chceš niečo riešiť alebo nahlásiť chybu? Napíš priamo AlphaLukovi na Discorde.",
  },
  footer: {
    tagline:
      "Profesionálny amatérsky dabing. Dávame hlas postavám, ktoré milujete.",
    navHeading: "Navigácia",
    navHome: "Domov",
    navAbout: "O nás",
    navVideos: "Videá",
    navTeam: "Tím",
    navContact: "Kontakt",
    contactHeading: "Kontakt",
    newsletterHeading: "Newsletter",
    newsletterText:
      "Odoberať novinky o nových videách a castingoch.",
    newsletterEmailPlaceholder: "Váš email",
    newsletterButton: "Odoberať",
    copyright:
      "EchoDabing. Všetky práva vyhradené. S láskou AlphaLuk.",
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  cs: csDictionary,
  sk: skDictionary,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] || skDictionary;
}
