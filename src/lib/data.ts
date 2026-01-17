import type { TeamMember, Video } from "@/types";
import { Locale } from "@/i18n/dictionary";

// --- SLOVAK DATA (SK) ---

const videosSk: Video[] = [
  {
    id: "v1",
    title: "Hazbin Hotel: Pilot (CZ/SK dabing)",
    youtubeId: "Zlmswo0S0e0",
    thumbnailUrl: "https://img.youtube.com/vi/Zlmswo0S0e0/maxresdefault.jpg",
    category: "Hazbin Hotel",
    views: "1.2k",
    date: "2024-01-15",
    description: "Pilotná epizóda Hazbin Hotelu v slovenskom alebo českom dabingu. Sledujte, ako sa hlavné postavy snažia zmeniť svoju budúcnosť v muzikálovom svete plnom emócií a humoru.",
    featured: true
  },
  {
    id: "v2",
    title: "Helluva Boss: Murder Family (S1E1) - CZ/SK",
    youtubeId: "OlahNrlbaX4",
    thumbnailUrl: "https://img.youtube.com/vi/OlahNrlbaX4/maxresdefault.jpg",
    category: "Helluva Boss",
    views: "890",
    date: "2024-02-01",
    description: "I.M.P. má novú zákazku! Blitzo a jeho tím sa vydávajú na Zem, aby vyrovnali účty s vražednou rodinou. Akcia, humor a kopec krvi.",
    featured: false
  },
  {
    id: "v3",
    title: "Digital Circus: Pilot (CZ/SK dabing)",
    youtubeId: "HwAPLk_sQ3w",
    thumbnailUrl: "https://img.youtube.com/vi/HwAPLk_sQ3w/maxresdefault.jpg",
    category: "Cirkus",
    views: "2.5k",
    date: "2024-03-10",
    description: "Pomni uviazne vo virtuálnom svete! Pridajte sa k Caineovi a ostatným v tomto bizarnom cirkuse, z ktorého niet úniku.",
    featured: true
  },
  {
    id: "v4",
    title: "Hazbin Hotel: Addict (Music Video CZ/SK)",
    youtubeId: "ulfeM8JGq7s",
    thumbnailUrl: "https://img.youtube.com/vi/ulfeM8JGq7s/maxresdefault.jpg",
    category: "Music",
    views: "500",
    date: "2024-01-20",
    description: "Angel Dust v hudobnom klipe, ktorý vás chytí za srdce. Česko-slovenská verzia hitu Addict.",
    featured: false
  },
  {
    id: "v5",
    title: "Helluva Boss: Loo Loo Land (S1E2) - CZ/SK",
    youtubeId: "kpnwRg268FQ",
    thumbnailUrl: "https://img.youtube.com/vi/kpnwRg268FQ/maxresdefault.jpg",
    category: "Helluva Boss",
    views: "750",
    date: "2024-02-15",
    description: "Stolas berie Octavii do Loo Loo Landu! Nie všetko však ide podľa plánu, keď sa objaví Robo Fizz.",
    featured: false
  },
  {
    id: "v6",
    title: "Vlog: Ako vzniká dabing? (Home Studio Tour)",
    youtubeId: "9bZkp7q19f0", 
    thumbnailUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    category: "Vlog",
    views: "120",
    date: "2024-04-05",
    description: "Nazrite do zákulisia EchoDabingu! Ukážeme vám naše domáce štúdiá, mikrofóny a ako prebieha nahrávanie na diaľku.",
    featured: false
  },
  {
    id: "v7",
    title: "Hazbin Hotel: Alastor's Game (Song CZ/SK)",
    youtubeId: "D0q0QeQd0e0", 
    thumbnailUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    category: "Music",
    views: "300",
    date: "2024-01-25",
    description: "Rádiový démon spieva! Alastorova pieseň v českom alebo slovenskom podaní.",
    featured: false
  },
  {
    id: "v8",
    title: "Helluva Boss: Spring Broken (S1E3) - CZ/SK",
    youtubeId: "Rghsj3gJ3g0", 
    thumbnailUrl: "https://img.youtube.com/vi/Rghsj3gJ3g0/maxresdefault.jpg",
    category: "Helluva Boss",
    views: "600",
    date: "2024-03-01",
    description: "Verosika Mayday a jej partia sú v meste! Blitzo musí čeliť svojej ex v stávke o parkovacie miesto.",
    featured: false
  },
  {
    id: "v9",
    title: "Lackadaisy: Pilot (CZ/SK dabing)",
    youtubeId: "v0e9z0z0z0", 
    thumbnailUrl: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&q=80",
    category: "Jiné",
    views: "400",
    date: "2024-05-01",
    description: "Mačky, prohibícia a jazz. Lackadaisy prichádza s českým alebo slovenským dabingom.",
    featured: false
  },
  {
    id: "v10",
    title: "Murder Drones: Pilot (CZ/SK dabing)",
    youtubeId: "m0d0r0n3s", 
    thumbnailUrl: "https://images.unsplash.com/photo-1535378437327-b71494694e80?w=800&q=80",
    category: "Jiné",
    views: "900",
    date: "2024-06-01",
    description: "Roboti na opustenej planéte. Uzi sa spojí s N, aby prežili.",
    featured: true
  },
  {
    id: "v11",
    title: "Helluva Boss: C.H.E.R.U.B. (S1E4) - CZ/SK",
    youtubeId: "c8e7u6b", 
    thumbnailUrl: "https://img.youtube.com/vi/c8e7u6b/maxresdefault.jpg",
    category: "Helluva Boss",
    views: "550k",
    date: "2024-03-15",
    description: "Cherubovia vs I.M.P.! Kto vyhrá v boji o život starého vynálezcu?",
    featured: false
  },
  {
    id: "v12",
    title: "Hazbin Hotel: Poison (Song CZ/SK)",
    youtubeId: "p0i5o4n", 
    thumbnailUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    category: "Music",
    views: "250k",
    date: "2024-02-10",
    description: "Angel Dust spieva o svojej závislosti. Emotívna pieseň v slovenčine.",
    featured: false
  }
];

const teamMembersSk: TeamMember[] = [
  {
    id: "t1",
    name: "MysterTrolles",
    role: "Zakladateľ & Réžia",
    bio: "MysterTrolles je srdcom a dušou EchoDabingu. Skupinu založil v roku 2024 s víziou priniesť kvalitný český a slovenský dabing indie animácií. Okrem réžie prepožičiava hlas mnohým postavám vrátane Alastora. Jeho vášeň pre detail a perfekcionizmus posúva každý projekt na novú úroveň. Vo voľnom čase sa venuje streamovaniu a práci s komunitou.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&q=80",
    projects: ["Hazbin Hotel", "Helluva Boss", "Digital Circus"],
    social: { twitter: "https://twitter.com", instagram: "https://instagram.com", youtube: "https://youtube.com" },
    audioSample: "/audio/myster.mp3"
  },
  {
    id: "t2",
    name: "Lboy",
    role: "Zvukový majster & Web",
    bio: "Lboy je technický mág, ktorý stojí za krištáľovo čistým zvukom našich dabingov. Stará sa o mix, mastering a zvukové efekty. Okrem toho je hlavným vývojárom nášho webu a Discord botov. Jeho precíznosť zabezpečuje, že každý výstrel a každý šepot znie presne tak, ako má. Miluje kávu a kódovanie v noci.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&q=80",
    projects: ["Web", "Discord", "SFX"],
    social: { github: "https://github.com", twitter: "https://twitter.com" },
    audioSample: "/audio/lboy.mp3"
  },
  {
    id: "t3",
    name: "Juki",
    role: "Hlavná dabérka",
    bio: "Juki je hlasom Charlie a mnohých ďalších ženských postáv. Jej hlasový rozsah je neuveriteľný – dokáže prejsť od jemného spevu k drsnému revu počas sekundy. Študuje herectvo a jej talent je nepopierateľný. V tíme je známa svojou pozitívnou energiou a neustálym spevom.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    projects: ["Hazbin Hotel", "Helluva Boss"],
    social: { instagram: "https://instagram.com" },
    audioSample: "/audio/juki.mp3"
  },
  {
    id: "t4",
    name: "Yaakub",
    role: "Dabér & Preklad",
    bio: "Yaakub sa stará o to, aby naše dabingy dávali zmysel aj v češtine. Jeho preklady sú vtipné, trefné a rešpektujú originál. Okrem toho dabuje postavy ako Angel Dust. Je majstrom slovných hračiek a improvizácie.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&q=80",
    projects: ["Hazbin Hotel", "Překlad"],
    social: { twitter: "https://twitter.com" },
    audioSample: "/audio/yaakub.mp3"
  },
  {
    id: "t5",
    name: "Annie",
    role: "Dabérka",
    bio: "Annie je novou posilou tímu, ale už si získala srdcia fanúšikov ako hlas Vaggie. Jej vážny a odhodlaný tón je perfektný pre silné ženské postavy.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    projects: ["Hazbin Hotel"],
    social: { instagram: "https://instagram.com" },
    audioSample: "/audio/annie.mp3"
  },
  {
    id: "t6",
    name: "Tom",
    role: "Dabér & Strih",
    bio: "Tom pomáha so strihom videa a dabuje vedľajšie role. Je neoceniteľný pre svoju rýchlosť a spoľahlivosť.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    projects: ["Edit", "Helluva Boss"],
    social: { youtube: "https://youtube.com" },
    audioSample: "/audio/tom.mp3"
  },
  {
    id: "t7",
    name: "Katy",
    role: "Grafika & Art",
    bio: "Katy vytvára celú vizuálnu identitu EchoDabingu – od miniatúr na YouTube až po dizajn merchu. Jej štýl je nezameniteľný.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
    projects: ["Art", "Design"],
    social: { instagram: "https://instagram.com" },
    audioSample: "/audio/katy.mp3"
  },
  {
    id: "t8",
    name: "Dave",
    role: "Produkcia",
    bio: "Dave drží celý tím pohromade. Plánuje nahrávanie, komunikuje s partnermi a rieši krízové situácie. Bez neho by bol chaos.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    projects: ["Produkce"],
    social: { twitter: "https://twitter.com" },
    audioSample: "/audio/dave.mp3"
  }
];

const timelineSk = [
  { year: "2024", title: "Založenie", description: "Vznik skupiny nadšencov do dabingu a indie animácií." },
  { year: "2024", title: "Prvé video", description: "Vydanie pilotu Hazbin Hotel s českým a slovenským dabingom." },
  { year: "2025", title: "Reštart", description: "Obnovenie činnosti pod názvom EchoDabing Revive." },
  { year: "2025", title: "Vlastný web", description: "Spustenie oficiálneho webu pre našich fanúšikov." },
  { year: "2026", title: "Budúcnosť", description: "Plány na ďalšie epizódy a rozšírenie tímu." }
];

const statsSk = [
  { id: "subscribers", label: "Odberatelia", icon: "Users" },
  { id: "views", label: "Pozretia", icon: "Eye" },
  { id: "videos", label: "Videá", icon: "Video" }
];

const faqSk = [
  { 
    question: "Máte nejaké centrálne štúdio?", 
    answer: "Nie, sme plne digitálny a decentralizovaný tím! Nemáme žiadnu fyzickú budovu ani sídlo. Každý člen EchoDabingu nahráva zo svojho domáceho štúdia, nech je to v Prahe, Brne, Ostrave alebo kdekoľvek inde. Všetka naša komunikácia, skúšky aj porady prebiehajú online na Discorde. To nám dáva slobodu spolupracovať s talentmi z celého Česka a Slovenska." 
  },
  { 
    question: "Ako sa môžem pridať do tímu?", 
    answer: "Nábor prebieha výhradne cez náš Discord server, kde pravidelne vypisujeme castingy na nové role. Hľadáme nielen dabérov, ale aj zvukárov, prekladateľov a grafikov. Ak máš kvalitný mikrofón (XLR/USB), chuť tvoriť a aspoň trochu talentu, určite sa prihlás! Sleduj kanál #oznámení, aby ti nič neušlo." 
  },
  { 
    question: "Kedy vyjde ďalší diel?", 
    answer: "Túto otázku dostávame najčastejšie! Tvorba kvalitného dabingu je časovo veľmi náročný proces. Zahŕňa preklad, úpravu dialógov, nahrávanie všetkých hercov (ktorí to robia vo svojom voľnom čase), čistenie zvuku, mixáž, mastering a finálny strih videa. Vždy uprednostňujeme kvalitu pred rýchlosťou, takže prosíme o trpezlivosť. Sledujte naše sociálne siete pre aktuálny stav." 
  },
  { 
    question: "Aký používate softvér a vybavenie?", 
    answer: "Každý člen tímu používa vlastné vybavenie (bežne dostupné mikrofóny). Video striháme a upravujeme v CapCut a Adobe Premiere Pro. Na komunikáciu a organizáciu je naším domovom Discord." 
  },
  { 
    question: "Prečo to trvá tak dlho?", 
    answer: "EchoDabing je fanúšikovský projekt, ktorý robíme vo svojom voľnom čase po škole alebo práci. Nie sme platené štúdio. Navyše sa snažíme o čo najvyššiu kvalitu – trafiť sa presne do 'klapiek' (lip-sync), prespievať pesničky tak, aby zneli dobre česky aj slovensky, a namiešať zvuk na nerozoznanie od originálu. To všetko zaberie desiatky hodín práce na jednu epizódu." 
  },
  { 
    question: "Budete dabovať aj iné seriály?", 
    answer: "Naše primárne zameranie je Hazbin Hotel, Helluva Boss a Digital Circus. Sme však otvorení novým výzvam! O výbere nových projektov často hlasujeme na našom Discorde alebo sa rozhodujeme podľa toho, čo nás ako tím najviac baví. Ak máte tip na skvelý indie animák, dajte nám vedieť!" 
  },
  {
    question: "Kde vás môžem podporiť?", 
    answer: "Najväčšou podporou je pre nás váš odber, like a komentár na YouTube. Zdieľanie našich videí medzi kamarátmi nám tiež obrovsky pomáha šíriť našu tvorbu ďalej." 
  },
  {
    question: "Robíte aj dabing na zákazku?",
    answer: "Našou prioritou sú vlastné projekty a obľúbené animované série. Ak máš však zaujímavý projekt, pokojne sa nám ozvi – spoločne môžeme prebrať možnosti spolupráce."
  },
  {
    question: "Čo sa stane, keď dabér odíde?",
    answer: "Občas sa stane, že niekto z tímu odíde. V takých prípadoch vypisujeme nový casting na našom Discorde a hľadáme novú posilu, ktorá sa do roly aj kolektívu dobre hodí."
  },
  {
    question: "Ako riešite autorské práva?",
    answer: "Všetky naše dabingy sú neziskové fanúšikovské projekty (fan dubs) tvorené s rešpektom k pôvodným autorom. Rešpektujeme autorské práva a robíme to predovšetkým z lásky k animácii a dobrým príbehom."
  },
  {
    question: "Môžem použiť váš dabing vo svojom videu?",
    answer: "Ak chceš použiť časť nášho dabingu vo svojom videu, vždy nás najskôr kontaktuj na Discorde alebo e-maile. Po dohode a uvedení zdroja sa zvyčajne dá nájsť rozumné riešenie."
  },
  {
    question: "Plánujete vlastný merch?",
    answer: "Momentálne sa sústreďujeme hlavne na dabing a videá. Do budúcna však nevylučujeme vlastný merch – sleduj naše sociálne siete, aby ti prípadné novinky neušli."
  }
];

const blogPostsSk = [
  {
    id: "b1",
    title: "Ako sme dabovali Hazbin Hotel",
    excerpt: "Pohľad do zákulisia nahrávania najnáročnejšieho muzikálu roka. Krv, pot a slzy (smiechu).",
    date: "10. 1. 2026",
    image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=800&q=80",
    author: "MysterTrolles"
  },
  {
    id: "b2",
    title: "Nábor nových hlasov 2026",
    excerpt: "Hľadáme nové talenty! Máš hlas, ktorý by sa hodil do našich projektov? Prihlás sa.",
    date: "5. 1. 2026",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?w=800&q=80",
    author: "Lboy"
  },
  {
    id: "b3",
    title: "EchoDabing na Comic-Cone",
    excerpt: "Stretni nás naživo! Budeme mať panel o amatérskom dabingu.",
    date: "20. 12. 2025",
    image: "https://images.unsplash.com/photo-1519683109079-d5f539e1d02a?w=800&q=80",
    author: "Juki"
  }
];

const storySk = [
  {
    type: "paragraph",
    content: [
      { text: "Začiatok.", highlight: true, highlightColor: "text-neon-red" },
      { text: " Možno si myslíte, že náš začiatok začína niekde pri našom prvom pilote, a tým je Hazbin Hotel pilot. Ale nie je to tak – náš skutočný začiatok nezačal pri obyčajnom dabingu, ale pri " },
      { text: "paródiách", highlight: true, highlightColor: "text-neon-red" },
      { text: "." }
    ]
  },
  {
    type: "paragraph",
    content: [
      { text: "A nie, vtedy sme neboli taký veľký tím ako dnes. Boli sme len traja – " },
      { text: "Lukboy (AlphaLuk), HeriXon (HeriXon075) a ja, MysterTroll", highlight: true, highlightColor: "text-white" },
      { text: ". Zoznámili sme sa na Minecraft serveri, kde sme sa viac spoznali, začali spolu kecat a jedného dňa nás napadlo: " },
      { text: "„Čo keby sme robili paródie na Harryho Pottera alebo South Park?“", italic: true },
      { text: " A tam to celé začalo." }
    ]
  },
  {
    type: "paragraph",
    content: [
      { text: "Naše prvé paródie už nikto neuvidí – ani my sami nie, pretože boli zmazané spolu so starým kanálom EchoDabingu. Áno, toto je náš druhý kanál, ktorý sa volal " },
      { text: "EchoDabing „Revive“", highlight: true, highlightColor: "text-neon-orange" },
      { text: ", ako asi viete – „Revive“ preto, že sme ho obnovili." }
    ]
  },
  {
    type: "paragraph",
    content: [
      { text: "Ale prečo sme ten pôvodný vôbec zmazali? No, za prvé – zmazal som ho ja, a za druhé – preto, že sme boli neaktívni a občas sme sa nedokázali dohodnúť. Nakoniec som tam daboval sám, ale to predsa nemá zmysel, že áno?" }
    ]
  },
  {
    type: "divider"
  },
  {
    type: "paragraph",
    content: [
      { text: "Po pár mesiacoch som ale narazil na jeden začínajúci projekt na YouTube, ktorý ma inšpiroval k tomu, aby som skupinu znovu založil, prebudil chalanov a oživil ju pod menom " },
      { text: "EchoDabing Revive", highlight: true, highlightColor: "text-neon-orange" },
      { text: ". A tu by sa dalo povedať, že príbeh končí – ale má to " },
      { text: "háčik", highlight: true, highlightColor: "text-neon-red" },
      { text: "." }
    ]
  },
  {
    type: "paragraph",
    content: [
      { text: "Viete, my sme chceli dabovať paródie, nie robiť „dabing ako dabing“. Lenže som v náborovom príspevku " },
      { text: "zabudol napísať", highlight: true, highlightColor: "text-neon-red", underline: true },
      { text: " (alebo upozorniť), že hľadáme ľudí na paródie, nie na bežný dabing." }
    ]
  },
  {
    type: "paragraph",
    content: [
      { text: "A keď video na TikToku veľmi vybuchlo, boli sme v háji, ale aj dosť prekvapení, pretože sa prihlásilo strašne veľa ľudí. A čo im ako povieme, keď ich bolo toľko – „nie“? Tak sme zapojili mikrofóny a začali pekne jedného po druhom naberať do našej skupiny." }
    ]
  },
  {
    type: "paragraph",
    style: "quote",
    content: [
      { text: "A to je príbeh EchoDabingu. Niekedy premýšľam, ako by to celé dopadlo, keby som vtedy nezabudol upozorniť, že chceme dabovať paródie. No, neviem… ale jedno je isté – nikdy by som nestretol tých úžasných ľudí, ktorých mám strašne rád, a veľmi by som sa s nimi chcel niekedy osobne stretnúť." }
    ]
  },
  {
    type: "signature",
    text: "– MysterTrolles (Preložené do slovenčiny)"
  }
];


// --- CZECH DATA (CS) ---

const videosCs: Video[] = [
  {
    id: "v1",
    title: "Hazbin Hotel: Pilot (CZ/SK dabing)",
    youtubeId: "Zlmswo0S0e0",
    thumbnailUrl: "https://img.youtube.com/vi/Zlmswo0S0e0/maxresdefault.jpg",
    category: "Hazbin Hotel",
    views: "1.2k",
    date: "2024-01-15",
    description: "Pilotní epizoda Hazbin Hotelu ve slovenském nebo českém dabingu. Sledujte, jak se hlavní postavy snaží změnit svou budoucnost v muzikálovém světě plném emocí a humoru.",
    featured: true
  },
  {
    id: "v2",
    title: "Helluva Boss: Murder Family (S1E1) - CZ/SK",
    youtubeId: "OlahNrlbaX4",
    thumbnailUrl: "https://img.youtube.com/vi/OlahNrlbaX4/maxresdefault.jpg",
    category: "Helluva Boss",
    views: "890",
    date: "2024-02-01",
    description: "I.M.P. má novou zakázku! Blitzo a jeho tým se vydávají na Zemi, aby vyrovnali účty s vražednou rodinou. Akce, humor a kopa krve.",
    featured: false
  },
  {
    id: "v3",
    title: "Digital Circus: Pilot (CZ/SK dabing)",
    youtubeId: "HwAPLk_sQ3w",
    thumbnailUrl: "https://img.youtube.com/vi/HwAPLk_sQ3w/maxresdefault.jpg",
    category: "Cirkus",
    views: "2.5k",
    date: "2024-03-10",
    description: "Pomni uvízne ve virtuálním světě! Přidejte se k Caineovi a ostatním v tomto bizarním cirkuse, ze kterého není úniku.",
    featured: true
  },
  {
    id: "v4",
    title: "Hazbin Hotel: Addict (Music Video CZ/SK)",
    youtubeId: "ulfeM8JGq7s",
    thumbnailUrl: "https://img.youtube.com/vi/ulfeM8JGq7s/maxresdefault.jpg",
    category: "Music",
    views: "500",
    date: "2024-01-20",
    description: "Angel Dust v hudebním klipu, který vás chytne za srdce. Česko-slovenská verze hitu Addict.",
    featured: false
  },
  {
    id: "v5",
    title: "Helluva Boss: Loo Loo Land (S1E2) - CZ/SK",
    youtubeId: "kpnwRg268FQ",
    thumbnailUrl: "https://img.youtube.com/vi/kpnwRg268FQ/maxresdefault.jpg",
    category: "Helluva Boss",
    views: "750",
    date: "2024-02-15",
    description: "Stolas bere Octavii do Loo Loo Landu! Ne všechno však jde podle plánu, když se objeví Robo Fizz.",
    featured: false
  },
  {
    id: "v6",
    title: "Vlog: Jak vzniká dabing? (Home Studio Tour)",
    youtubeId: "9bZkp7q19f0", 
    thumbnailUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    category: "Vlog",
    views: "120",
    date: "2024-04-05",
    description: "Nahlédněte do zákulisí EchoDabingu! Ukážeme vám naše domácí studia, mikrofony a jak probíhá nahrávání na dálku.",
    featured: false
  },
  {
    id: "v7",
    title: "Hazbin Hotel: Alastor's Game (Song CZ/SK)",
    youtubeId: "D0q0QeQd0e0", 
    thumbnailUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    category: "Music",
    views: "300",
    date: "2024-01-25",
    description: "Rádiový démon zpívá! Alastorova píseň v českém nebo slovenském podání.",
    featured: false
  },
  {
    id: "v8",
    title: "Helluva Boss: Spring Broken (S1E3) - CZ/SK",
    youtubeId: "Rghsj3gJ3g0", 
    thumbnailUrl: "https://img.youtube.com/vi/Rghsj3gJ3g0/maxresdefault.jpg",
    category: "Helluva Boss",
    views: "600",
    date: "2024-03-01",
    description: "Verosika Mayday a její parta jsou ve městě! Blitzo musí čelit své ex v sázce o parkovací místo.",
    featured: false
  },
  {
    id: "v9",
    title: "Lackadaisy: Pilot (CZ/SK dabing)",
    youtubeId: "v0e9z0z0z0", 
    thumbnailUrl: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&q=80",
    category: "Jiné",
    views: "400",
    date: "2024-05-01",
    description: "Kočky, prohibice a jazz. Lackadaisy přichází s českým nebo slovenským dabingem.",
    featured: false
  },
  {
    id: "v10",
    title: "Murder Drones: Pilot (CZ/SK dabing)",
    youtubeId: "m0d0r0n3s", 
    thumbnailUrl: "https://images.unsplash.com/photo-1535378437327-b71494694e80?w=800&q=80",
    category: "Jiné",
    views: "900",
    date: "2024-06-01",
    description: "Roboti na opuštěné planetě. Uzi se spojí s N, aby přežili.",
    featured: true
  },
  {
    id: "v11",
    title: "Helluva Boss: C.H.E.R.U.B. (S1E4) - CZ/SK",
    youtubeId: "c8e7u6b", 
    thumbnailUrl: "https://img.youtube.com/vi/c8e7u6b/maxresdefault.jpg",
    category: "Helluva Boss",
    views: "550k",
    date: "2024-03-15",
    description: "Cherubové vs I.M.P.! Kdo vyhraje v boji o život starého vynálezce?",
    featured: false
  },
  {
    id: "v12",
    title: "Hazbin Hotel: Poison (Song CZ/SK)",
    youtubeId: "p0i5o4n", 
    thumbnailUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    category: "Music",
    views: "250k",
    date: "2024-02-10",
    description: "Angel Dust zpívá o své závislosti. Emotivní píseň ve slovenštině.",
    featured: false
  }
];

const teamMembersCs: TeamMember[] = [
  {
    id: "t1",
    name: "MysterTrolles",
    role: "Zakladatel & Režie",
    bio: "MysterTrolles je srdcem a duší EchoDabingu. Skupinu založil v roce 2024 s vizí přinést kvalitní český a slovenský dabing indie animací. Kromě režie propůjčuje hlas mnoha postavám včetně Alastora. Jeho vášeň pro detail a perfekcionismus posouvá každý projekt na novou úroveň. Ve volném čase se věnuje streamování a práci s komunitou.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&q=80",
    projects: ["Hazbin Hotel", "Helluva Boss", "Digital Circus"],
    social: { twitter: "https://twitter.com", instagram: "https://instagram.com", youtube: "https://youtube.com" },
    audioSample: "/audio/myster.mp3"
  },
  {
    id: "t2",
    name: "Lboy",
    role: "Zvukový mistr & Web",
    bio: "Lboy je technický mág, který stojí za křišťálově čistým zvukem našich dabingů. Stará se o mix, mastering a zvukové efekty. Kromě toho je hlavním vývojářem našeho webu a Discord botů. Jeho preciznost zajišťuje, že každý výstřel a každý šepot zní přesně tak, jak má. Miluje kávu a kódování v noci.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&q=80",
    projects: ["Web", "Discord", "SFX"],
    social: { github: "https://github.com", twitter: "https://twitter.com" },
    audioSample: "/audio/lboy.mp3"
  },
  {
    id: "t3",
    name: "Juki",
    role: "Hlavní dabérka",
    bio: "Juki je hlasem Charlie a mnoha dalších ženských postav. Její hlasový rozsah je neuvěřitelný – dokáže přejít od jemného zpěvu k drsnému řevu během sekundy. Studuje herectví a její talent je nepopiratelný. V týmu je známá svou pozitivní energií a neustálým zpěvem.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    projects: ["Hazbin Hotel", "Helluva Boss"],
    social: { instagram: "https://instagram.com" },
    audioSample: "/audio/juki.mp3"
  },
  {
    id: "t4",
    name: "Yaakub",
    role: "Dabér & Překlad",
    bio: "Yaakub se stará o to, aby naše dabingy dávaly smysl i v češtině. Jeho překlady jsou vtipné, trefné a respektují originál. Kromě toho dabuje postavy jako Angel Dust. Je mistrem slovních hříček a improvizace.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&q=80",
    projects: ["Hazbin Hotel", "Překlad"],
    social: { twitter: "https://twitter.com" },
    audioSample: "/audio/yaakub.mp3"
  },
  {
    id: "t5",
    name: "Annie",
    role: "Dabérka",
    bio: "Annie je novou posilou týmu, ale už si získala srdce fanoušků jako hlas Vaggie. Její vážný a odhodlaný tón je perfektní pro silné ženské postavy.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    projects: ["Hazbin Hotel"],
    social: { instagram: "https://instagram.com" },
    audioSample: "/audio/annie.mp3"
  },
  {
    id: "t6",
    name: "Tom",
    role: "Dabér & Střih",
    bio: "Tom pomáhá se střihem videa a dabuje vedlejší role. Je neocenitelný pro svou rychlost a spolehlivost.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    projects: ["Edit", "Helluva Boss"],
    social: { youtube: "https://youtube.com" },
    audioSample: "/audio/tom.mp3"
  },
  {
    id: "t7",
    name: "Katy",
    role: "Grafika & Art",
    bio: "Katy vytváří celou vizuální identitu EchoDabingu – od miniatur na YouTube až po design merche. Její styl je nezaměnitelný.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
    projects: ["Art", "Design"],
    social: { instagram: "https://instagram.com" },
    audioSample: "/audio/katy.mp3"
  },
  {
    id: "t8",
    name: "Dave",
    role: "Produkce",
    bio: "Dave drží celý tým pohromadě. Plánuje nahrávání, komunikuje s partnery a řeší krizové situace. Bez něj by byl chaos.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
    projects: ["Produkce"],
    social: { twitter: "https://twitter.com" },
    audioSample: "/audio/dave.mp3"
  }
];

const timelineCs = [
  { year: "2024", title: "Založení", description: "Vznik skupiny nadšenců do dabingu a indie animací." },
  { year: "2024", title: "První video", description: "Vydání pilotu Hazbin Hotel s českým a slovenským dabingem." },
  { year: "2025", title: "Restart", description: "Obnovení činnosti pod názvem EchoDabing Revive." },
  { year: "2025", title: "Vlastní web", description: "Spuštění oficiálního webu pro naše fanoušky." },
  { year: "2026", title: "Budoucnost", description: "Plány na další epizody a rozšíření týmu." }
];

const statsCs = [
  { id: "subscribers", label: "Odběratelé", icon: "Users" },
  { id: "views", label: "Zhlédnutí", icon: "Eye" },
  { id: "videos", label: "Videa", icon: "Video" }
];

const faqCs = [
  { 
    question: "Máte nějaké centrální studio?", 
    answer: "Ne, jsme plně digitální a decentralizovaný tým! Nemáme žádnou fyzickou budovu ani sídlo. Každý člen EchoDabingu nahrává ze svého domácího studia, ať je to v Praze, Brně, Ostravě nebo kdekoliv jinde. Veškerá naše komunikace, zkoušky i porady probíhají online na Discordu. To nám dává svobodu spolupracovat s talenty z celého Česka a Slovenska." 
  },
  { 
    question: "Jak se mohu přidat do týmu?", 
    answer: "Nábor probíhá výhradně přes náš Discord server, kde pravidelně vypisujeme castingy na nové role. Hledáme nejen dabéry, ale i zvukaře, překladatele a grafiky. Pokud máš kvalitní mikrofon (XLR/USB), chuť tvořit a alespoň trochu talentu, určitě se přihlaš! Sleduj kanál #oznámení, aby ti nic neuniklo." 
  },
  { 
    question: "Kdy vyjde další díl?", 
    answer: "Tuto otázku dostáváme nejčastěji! Tvorba kvalitního dabingu je časově velmi náročný proces. Zahrnuje překlad, úpravu dialogů, nahrávání všech herců (kteří to dělají ve svém volném čase), čištění zvuku, mixáž, mastering a finální střih videa. Vždy upřednostňujeme kvalitu před rychlostí, takže prosíme o trpělivost. Sledujte naše sociální sítě pro aktuální stav." 
  },
  { 
    question: "Jaký používáte software a vybavení?", 
    answer: "Každý člen týmu používá vlastní vybavení (běžně dostupné mikrofony). Video stříháme a upravujeme v CapCut a Adobe Premiere Pro. Pro komunikaci a organizaci je naším domovem Discord." 
  },
  { 
    question: "Proč to trvá tak dlouho?", 
    answer: "EchoDabing je fanouškovský projekt, který děláme ve svém volném čase po škole nebo práci. Nejsme placené studio. Navíc se snažíme o co nejvyšší kvalitu – trefit se přesně do 'klapek' (lip-sync), přezpívat písničky tak, aby zněly dobře česky i slovensky, a namíchat zvuk k nerozeznání od originálu. To vše zabere desítky hodin práce na jednu epizodu." 
  },
  { 
    question: "Budete dabovat i jiné seriály?", 
    answer: "Naše primární zaměření je Hazbin Hotel, Helluva Boss a Digital Circus. Jsme však otevřeni novým výzvám! O výběru nových projektů často hlasujeme na našem Discordu nebo se rozhodujeme podle toho, co nás jako tým nejvíce baví. Pokud máte tip na skvělý indie animák, dejte nám vědět!" 
  },
  {
    question: "Kde vás mohu podpořit?", 
    answer: "Největší podporou je pro nás váš odběr, like a komentář na YouTube. Sdílení našich videí mezi kamarády nám také obrovsky pomáhá šířit naši tvorbu dál." 
  },
  {
    question: "Děláte i dabing na zakázku?",
    answer: "Naší prioritou jsou vlastní projekty a oblíbené animované série. Pokud máš však zajímavý projekt, klidně se nám ozvi – společně můžeme probrat možnosti spolupráce."
  },
  {
    question: "Co se stane, když dabér odejde?",
    answer: "Občas se stane, že někdo z týmu odejde. V takových případech vypisujeme nový casting na našem Discordu a hledáme novou posilu, která se do role i kolektivu dobře hodí."
  },
  {
    question: "Jak řešíte autorská práva?",
    answer: "Všechny naše dabingy jsou neziskové fanouškovské projekty (fan dubs) tvořené s respektem k původním autorům. Respektujeme autorská práva a děláme to především z lásky k animaci a dobrým příběhům."
  },
  {
    question: "Mohu použít váš dabing ve svém videu?",
    answer: "Pokud chceš použít část našeho dabingu ve svém videu, vždy nás nejdříve kontaktuj na Discordu nebo e-mailu. Po dohodě a uvedení zdroje se obvykle dá najít rozumné řešení."
  },
  {
    question: "Plánujete vlastní merch?",
    answer: "Momentálně se soustředíme hlavně na dabing a videa. Do budoucna však nevylučujeme vlastní merch – sleduj naše sociální sítě, aby ti případné novinky neunikly."
  }
];

const blogPostsCs = [
  {
    id: "b1",
    title: "Jak jsme dabovali Hazbin Hotel",
    excerpt: "Pohled do zákulisí nahrávání nejnáročnějšího muzikálu roku. Krev, pot a slzy (smíchu).",
    date: "10. 1. 2026",
    image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=800&q=80",
    author: "MysterTrolles"
  },
  {
    id: "b2",
    title: "Nábor nových hlasů 2026",
    excerpt: "Hledáme nové talenty! Máš hlas, který by se hodil do našich projektů? Přihlaš se.",
    date: "5. 1. 2026",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?w=800&q=80",
    author: "Lboy"
  },
  {
    id: "b3",
    title: "EchoDabing na Comic-Conu",
    excerpt: "Potkej nás naživo! Budeme mít panel o amatérském dabingu.",
    date: "20. 12. 2025",
    image: "https://images.unsplash.com/photo-1519683109079-d5f539e1d02a?w=800&q=80",
    author: "Juki"
  }
];

const storyCs = [
  {
    type: "paragraph",
    content: [
      { text: "Začátek.", highlight: true, highlightColor: "text-neon-red" },
      { text: " Možná si myslíte, že náš začátek začíná někde u našeho prvního pilotu, a tím je HazbinHotel pilot. Ale není tomu tak – náš skutečný začátek nezačal u obyčejného dabingu, ale u " },
      { text: "parodií", highlight: true, highlightColor: "text-neon-red" },
      { text: "." }
    ]
  },
  {
    type: "paragraph",
    content: [
      { text: "A ne, tehdy jsme nebyli tak velký tým jako dnes. Byli jsme jen tři – " },
      { text: "Lukboy (AlphaLuk), HeriXon (HeriXon075) a já, MysterTroll", highlight: true, highlightColor: "text-white" },
      { text: ". Seznámili jsme se na Minecraft serveru, kde jsme se víc poznali, začali spolu kecat a jednoho dne nás napadlo: " },
      { text: "„Co kdybychom dělali parodie na Harryho Pottera nebo South Park?“", italic: true },
      { text: " A tam to celé začalo." }
    ]
  },
  {
    type: "paragraph",
    content: [
      { text: "Naše první parodie už nikdo neuvidí – ani my sami ne, protože byly smazány spolu se starým kanálem EchoDabingu. Ano, tohle je náš druhý kanál, který se jmenoval " },
      { text: "EchoDabing „Revive“", highlight: true, highlightColor: "text-neon-orange" },
      { text: ", jak asi víte – „Revive“ proto, že jsme ho obnovili." }
    ]
  },
  {
    type: "paragraph",
    content: [
      { text: "Ale proč jsme ten původní vůbec smazali? No, za prvé – smazal jsem ho já, a za druhé – proto, že jsme byli neaktivní a občas jsme se nedokázali domluvit. Nakonec jsem tam daboval sám, ale to přece nemá smysl, že jo?" }
    ]
  },
  {
    type: "divider"
  },
  {
    type: "paragraph",
    content: [
      { text: "Po pár měsících jsem ale narazil na jeden začínající projekt na YouTube, který mě inspiroval k tomu, abych skupinu znovu založil, probudil kluky a oživil ji pod jménem " },
      { text: "EchoDabing Revive", highlight: true, highlightColor: "text-neon-orange" },
      { text: ". A tady by se dalo říct, že příběh končí – ale má to " },
      { text: "háček", highlight: true, highlightColor: "text-neon-red" },
      { text: "." }
    ]
  },
  {
    type: "paragraph",
    content: [
      { text: "Víte, my jsme chtěli dabovat parodie, ne dělat „dabing jako dabing“. Jenže jsem v náborovém příspěvku " },
      { text: "zapomněl napsat", highlight: true, highlightColor: "text-neon-red", underline: true },
      { text: " (nebo upozornit), že hledáme lidi na parodie, ne na běžný dabing." }
    ]
  },
  {
    type: "paragraph",
    content: [
      { text: "A když video na TikToku hodně vybuchlo, byli jsme v háji, ale i dost překvapení, protože se přihlásilo strašně moc lidí. A co jim jako řekneme, když jich bylo tolik – „ne“? Tak jsme zapojili mikrofony a začali pěkně jednoho po druhém nabírat do naší skupiny." }
    ]
  },
  {
    type: "paragraph",
    style: "quote",
    content: [
      { text: "A to je příběh EchoDabingu. Někdy přemýšlím, jak by to celé dopadlo, kdybych tehdy nezapomněl upozornit, že chceme dabovat parodie. No, nevím… ale jedno je jisté – nikdy bych nepotkal ty úžasné lidi, které mám strašně rád, a moc bych se s nimi chtěl někdy osobně setkat." }
    ]
  },
  {
    type: "signature",
    text: "– MysterTrolles (Přeloženo do češtiny)"
  }
];

// --- EXPORTS ---

// Helpers for fetching data by locale
export const getVideos = (locale: Locale) => locale === 'cs' ? videosCs : videosSk;
export const getTeamMembers = (locale: Locale) => locale === 'cs' ? teamMembersCs : teamMembersSk;
export const getTimeline = (locale: Locale) => locale === 'cs' ? timelineCs : timelineSk;
export const getStats = (locale: Locale) => locale === 'cs' ? statsCs : statsSk;
export const getFaq = (locale: Locale) => locale === 'cs' ? faqCs : faqSk;
export const getBlogPosts = (locale: Locale) => locale === 'cs' ? blogPostsCs : blogPostsSk;
export const getStory = (locale: Locale) => locale === 'cs' ? storyCs : storySk;

// Default exports for backward compatibility (using SK as default or fallback)
// Ideally, consumers should switch to using the getters above.
export const videos = videosSk;
export const teamMembers = teamMembersSk;
export const timeline = timelineSk;
export const stats = statsSk;
export const faq = faqSk;
export const blogPosts = blogPostsSk;
export const story = storySk;
