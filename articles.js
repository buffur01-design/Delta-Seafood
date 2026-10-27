const articles = [
  {
    published: "2026-10-17",
    en: {
      date: "17 October 2026",
      title: "We are part of the fall market in Tvøroyri",
      image: "á heystmarknaði.jpg",
      alt: "Delta on the fall market in Tvøroyri",
      text: `<p> We are proud to be part of the fall market in Tvøroyri, where we showcase our products and connect with the locals and give them the opportunity to try our salted fish products.</p>`
    },
    fo: {
      date: "17. oktobur 2026",
      title: "Vit luttaka á heystimarknaðinum á Tvøroyri",
      image: "á heystmarknaði.jpg",
      alt: "Framleiðsluvirkið hjá Delta Seafood",
      text: `<p>Vit eru errin at vera partur av heystmarknaðinum á Tvøroyri. Vit burturluta saltfiska vørur, og tað er møguligt at keypa saltfiska vørur.</p>`
    }
  },
  {
    published: "2026-08-20",
    en: {
      date: "20 August 2026",
      title: "Minister of fisheries visits Delta Seafood",
      image: "Bárður á steig vitjan.jpg",
      alt: "Minister of fisheries visits Delta Seafood",
      text: `<p>Yesterday we had the pleasure of hosting the Minister of foreign affairs and fisheries with this administration. We talked about different topics which could lead to higher utilization of the firm on Tvøroyri. We are gratefull for the visit and are happy that the minister with administration takes it times to visit firm in the industry</p>`
    },
    fo: {
      date: "20. august 2026",
      title: "Landstýrismaðurin í uttanríkis- og fiskivinnumálum vitjar Delta Seafood",
      image: "Bárður á steig vitjan.jpg",
      alt: "Landstýrismaðurin í uttanríkis- og fiskivinnumálum vitjar Delta Seafood",
      text: `<p>Í gjár høvdu okur vitjan av landsstýrismanninum Bárður á Steig Nielsen í uttanríkis-og fiskimálaráðnum við umsiting.
Tosað bleiv um ymisk viðurskifti, sum kunnu geva meira virksemið á virkinum á Tvøroyri.
Okur takka fyri vitjanina og fegnast um, at landsstýrismaðurin við umsiting kemur út til vinnuna. </p>`
    }
  },
  {
    published: "2026-04-01",
    en: {
      date: "1 April 2026",
      title: "We are attending Seafood Expo Global 2026 in Barcelona",
      image: "seafood-expo.png",
      alt: "Seafood Expo Global 2026",
      text: `<p>Delta Seafood will be exhibiting at Seafood Expo Global 2026 in Barcelona as part of the Faroes Booth.</p><p>We look forward to meeting our customers and partners at the event.</p>`
    },
    fo: {
      date: "1. apríl 2026",
      title: "Vit luttaka á Seafood Expo Global 2026 í Barcelona",
      image: "seafood-expo.png",
      alt: "Seafood Expo Global 2026",
      text: `<p>Delta Seafood verður við á Seafood Expo Global 2026 í Barcelona sum partur av føroyska básinum.</p><p>Vit gleða okkum til at hitta kundar og samstarvsfelagar á stevnuni.</p>`
    }
  },
  {
    published: "2025-10-23",
    en: {
      date: "23 Oktober 2025",
      title: "Minister of foreign affairs and fisheries visits",
      image: "sirið stenberg vitjar.jpg",
      alt: "Sirið Stenberg vitjar",
      text: `<p>Last week we had the pleasure of hosting the Minister of foreign affairs and fisheries Sirið Stenberg. We told her about our work and the company. We also talked about the big need for raw fish products. In the debate today about fishing rights the fish industry on land is forgotten. The visit ended with a tour of the facility.</p>`
    },
    fo: {
      date: "23. oktober 2025",
      title: "Landstýriskvinnan í uttanríkis- og fiskivinnumálum á vitjan",
      image: "sirið stenberg vitjar.jpg",
      alt: "Landstýriskvinnan í uttanríkis- og fiskivinnumálum á vitjan",
      text: `<p>Í farnu viku var Sirið Stenberg á vitjan har vit greiddu henni um virksemið á virkinum hjá okkum. Eisini var komi inn á stóra tørvin av rávørum. Í kjakinum um veiðiloyvir verður fiskivinnan á landi ofta gloymd. Túrurin endaði við rundvísing á virkinum.</p>`
    }
  },
  {

    published: "2025-08-20",
    en: {
      date: "20 August 2025",
      title: "Fridgerd Mortensen work anniversary",
      image: "fridgerd-mortensen-starvsdag.jpg",
      alt: "Fridgerd Mortensen work anniversary",
      text: `<p>Fridgerd Mortensen celebrated her 30 year work anniversary with her colleagues at Delta Seafood.</p><p>The company thanks her for her dedication and looks forward to many more years of success.</p>`
    },
    fo: {
      date: "20. august 2025",
      title: "Fridgerd Mortensen 30 ára starvsdag",
      image: "fridgerd-mortensen-starvsdag.jpg",
      alt: "Fridgerd Mortensen á starvsdegi",
      text: `<p>Fridgerd Mortensen hátíðarhelt 30 ára starvsdagin saman við starvsfeløgunum hjá Delta Seafood.</p><p>Fyritøkan takkar henni fyri trúgva tænastu og gleðir seg til nógv góð ár afturat.</p>`
    }
  },
  {
    published: "2025-08-20",
    en: {
      date: "20 August 2025",
      title: "Hallur Hentze work anniversary",
      image: "hallur-hentze-starvsdag.jpg",
      alt: "Hallur Hentze work anniversary",
      text: `<p>Hallur Hentze celebrated his 30 year work anniversary with his colleagues at Delta Seafood.</p><p>The company thanks him for his dedication and looks forward to many more years of success.</p>`
    },
    fo: {
      date: "20. august 2025",
      title: "Hallur Hentze 30 ára starvsdag",
      image: "hallur-hentze-starvsdag.jpg",
      alt: "Hallur Hentze á starvsdegi",
      text: `<p>Hallur Hentze hátíðarhelt 30 ára starvsdagin saman við starvsfeløgunum hjá Delta Seafood.</p><p>Fyritøkan takkar honum fyri trúgva tænastu og gleðir seg til nógv góð ár afturat.</p>`
    }
  },
  {
    published: "2025-08-20",
    en: {
      date: "20 August 2025",
      title: "Danjal Olsen work anniversary",
      image: "danjal-olsen-starvsdag.jpg",
      alt: "Danjal Olsen work anniversary",
      text: `<p>Danjal Olsen celebrated his 30 year work anniversary with his colleagues at Delta Seafood.</p><p>The company thanks him for his dedication and looks forward to many more years of success.</p>`
    },
    fo: {
      date: "20. august 2025",
      title: "Danjal Olsen 30 ára starvsdag",
      image: "danjal-olsen-starvsdag.jpg",
      alt: "Danjal Olsen á starvsdegi",
      text: `<p>Danjal Olsen hátíðarhelt 30 ára starvsdagin saman við starvsfeløgunum hjá Delta Seafood.</p><p>Fyritøkan takkar honum fyri trúgva tænastu og gleðir seg til nógv góð ár afturat.</p>`
    }
  },
  {
    published: "2025-08-20",
    en: {
      date: "20 August 2025",
      title: "Torfrið Joensen work anniversary",
      image: "torfrid-joensen-starvsdag.jpg",
      alt: "Torfrið Joensen work anniversary",
      text: `<p>Torfrið Joensen celebrated her 30 year work anniversary with her colleagues at Delta Seafood.</p><p>The company thanks her for her dedication and looks forward to many more years of success.</p>`
    },
    fo: {
      date: "20. august 2025",
      title: "Torfrið Joensen 30 ára starvsdag",
      image: "torfrid-joensen-starvsdag.jpg",
      alt: "Torfrið Joensen á starvsdegi",
      text: `<p>Torfrið Joensen hátíðarhelt 30 ára starvsdagin saman við starvsfeløgunum hjá Delta Seafood.</p><p>Fyritøkan takkar henni fyri trúgva tænastu og gleðir seg til nógv góð ár afturat.</p>`
    }
  },
  {
    published: "2025-04-01",
    en: {
      date: "1 April 2025",
      title: "We are attending Seafood Expo Global 2025 in Barcelona",
      image: "seafood-expo.png",
      alt: "Seafood Expo Global 2025",
      text: `<p>Delta Seafood will be exhibiting at Seafood Expo Global 2025 in Barcelona as part of the Faroes Booth.</p><p>We look forward to meeting our customers and partners at the event.</p>`
    },
    fo: {
      date: "1. apríl 2025",
      title: "Vit luttaka á Seafood Expo Global 2025 í Barcelona",
      image: "seafood-expo.png",
      alt: "Seafood Expo Global 2025",
      text: `<p>Delta Seafood verður við á Seafood Expo Global 2025 í Barcelona sum partur av føroyska básinum.</p><p>Vit gleða okkum til at hitta kundar og samstarvsfelagar á stevnuni.</p>`
    }
  },
  {
    published: "2024-03-01",
    en: {
      date: "1 March 2024",
      title: "Jónas Øster finishes his apprenticeship as a mechanic",
      image: "jonas-progv.jpg",
      alt: "Jónas Øster graduation",
      text: `<p>This week we are celebrating that Jónas Øster has finished his apprenticeship as a mechanic at Delta Seafood. He has been part of the company for four years and has shown great dedication and skill in his work. Tórur, our chief mechanic, has been his mentor and guided him through the apprenticeship. We are proud of Jónas and wish him all the best as he continues his career at Delta Seafood.</p><p>The company thanks him for his dedication and looks forward to many more years of success.</p>`
    },
    fo: {
      date: "1. mars 2024",
      title: "Jónas Øster liðugur í læru sum maskinsmiður",
      image: "jonas-progv.jpg",
      alt: "Jónas Øster liðugur í læru",
      text: `<p>Hesa vikuna hátíðarhalda vit, at Jónas Øster er liðugur í læru sum maskinsmiður hjá Delta Seafood. Hann hevur verið partur av fyritøkuni í fýra ár og hevur víst stóran dugnaskap og ágrýtni í arbeiðinum. Tórur, høvuðsmekanikari okkara, hevur verið lærumeistari hansara og vegleitt honum gjøgnum lærutíðina. Vit eru errin av Jónasi og ynskja honum alt tað besta í framtíðarstarvinum, sum hann heldur fram við hjá Delta Seafood.</p><p>Fyritøkan takkar honum fyri góða arbeiðið og gleðir seg til nógv góð ár afturat.</p>`
    }
  },
  {
    published: "2015-04-10",
    en: {
      date: "10 April 2015",
      title: "Delta Seafood to run TG Seafood",
      image: "tg.jpg",
      alt: "Delta Seafood to run TG Seafood",
      text: `<p>Delta Seafood has decided to expand our current work site by adding an additional building of 1,000 square metres.</p>`
    },
    fo: {
      date: "10. apríl 2015",
      title: "Delta Seafood tekur við rakstrinum av TG Seafood",
      image: "tg.jpg",
      alt: "Delta Seafood tekur við TG Seafood",
      text: `<p>Delta Seafood hevur gjørt av at víðka verandi virksemi. Ein nýggjur virkisbygningur á 1.000 fermetrar verður lagdur afturat.</p>`
    }
  }
];

function getArticlePublishedTime(article){
  const publishedDate = article.published || (article.en && article.en.date) || "";
  const timestamp = Date.parse(publishedDate);
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function getArticlesNewestFirst(articleList){
  return [...articleList].sort((a, b) => getArticlePublishedTime(b) - getArticlePublishedTime(a));
}
