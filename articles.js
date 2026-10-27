const articles = [
  {
    published: "2026-06-24",
    en: {
      date: "24 June 2026",
      title: "Production facility update",
      image: "delta-seafood-building.jpg",
      alt: "Delta Seafood facility",
      text: `<p>Delta Seafood continues to develop its production facilities in Tvøroyri. The company is focused on improving efficiency, quality, and capacity while maintaining strong links to the local community.</p><p>The facility plays an important role in processing high-quality seafood products for both local and international markets.</p>`
    },
    fo: {
      date: "24. juni 2026",
      title: "Dagføring um framleiðsluvirkið",
      image: "delta-seafood-building.jpg",
      alt: "Framleiðsluvirkið hjá Delta Seafood",
      text: `<p>Delta Seafood heldur fram við at menna framleiðsluvirkið á Tvøroyri. Dentur verður lagdur á at betra um virkni, góðsku og framleiðsluorku, samstundis sum sterka tilknýtið til lokalsamfelagið verður varðveitt.</p><p>Virkið hevur ein týðandi leiklut í framleiðsluni av góðum fiskavørum til bæði føroyska og altjóða marknaðin.</p>`
    }
  },
  {
    published: "2026-05-10",
    en: {
      date: "10 May 2026",
      title: "Salted fish products",
      image: "salted-cod.png",
      alt: "Salted cod products",
      text: `<p>Our salted fish products remain an important part of the Delta Seafood product range. The products are prepared with focus on quality, consistency, and customer requirements.</p><p>Delta Seafood produces different salted fish products for selected markets and customers.</p>`
    },
    fo: {
      date: "10. mai 2026",
      title: "Saltfiskaúrdráttir",
      image: "salted-cod.png",
      alt: "Saltfiskaúrdráttir",
      text: `<p>Saltfiskaúrdráttirnir eru framvegis ein týðandi partur av vøruúrvalinum hjá Delta Seafood. Vørurnar verða framleiddar við denti á góðsku, støðufesti og ynskini hjá kundunum.</p><p>Delta Seafood framleiðir ymiskar saltfiskaúrdráttir til útvaldar marknaðir og kundar.</p>`
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
