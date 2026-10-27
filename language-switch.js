(function(){
  const navbar = document.querySelector(".navbar");
  if(!navbar) return;

  let switcher = navbar.querySelector(".site-language-switcher");
  if(!switcher){
    switcher = document.createElement("div");
    switcher.className = "site-language-switcher";
    switcher.setAttribute("aria-label", "Choose language");
    switcher.innerHTML = `
      <button type="button" data-lang="en">EN</button>
      <button type="button" data-lang="fo">FO</button>
    `;
    navbar.appendChild(switcher);
  }

  const language = localStorage.getItem("deltaLanguage") === "fo" ? "fo" : "en";
  document.documentElement.lang = language;

  switcher.querySelectorAll("button").forEach(button => {
    const active = button.dataset.lang === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active);

    button.addEventListener("click", () => {
      localStorage.setItem("deltaLanguage", button.dataset.lang);
      location.reload();
    });
  });

  const commonLabels = {
    en:{home:"Home", products:"Products", facilities:"About our facilities", contact:"Contact"},
    fo:{home:"Heim", products:"Vørur", facilities:"Um okkara virkir", contact:"Samband"}
  }[language];

  document.querySelectorAll('.navbar a[href="./"], .navbar a[href="index.html"]').forEach(link => {
    if(!link.classList.contains("logo")) link.textContent = commonLabels.home;
  });
  document.querySelectorAll('.navbar a[href="products.html"]').forEach(link => link.textContent = commonLabels.products);
  document.querySelectorAll('.navbar a[href="about-our-facilities.html"], .navbar a[href="facilities.html"]').forEach(link => {
    if(link.closest(".dropdown")) return;
    link.textContent = commonLabels.facilities;
  });
  document.querySelectorAll('.navbar a[href="contact.html"]').forEach(link => link.textContent = commonLabels.contact);

  {
    const translationByMatch = new Map(pageTranslations.map(item => [item.match, item]));

    const translateSubtree = root => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const textNodes = [];
      while(walker.nextNode()) textNodes.push(walker.currentNode);
      textNodes.forEach(node => {
        if(node.parentElement?.closest("script, style")) return;
        const original = node.nodeValue.trim().replace(/\s+/g, " ");
        const translation = translationByMatch.get(original);
        if(translation){
          node.nodeValue = node.nodeValue.replace(node.nodeValue.trim(), translation[language]);
          return;
        }

        if(language === "fo" && node.parentElement?.closest(".modal-description, #modalText")){
        const productPhrases = [
          [/Fillets/g, "Fløk"],
          [/Splitted|Spillted|Splited/g, "Flaktur fiskur"],
          [/Headed and gutted without tail/g, "Avhøvdaður og kruvdur uttan hala"],
          [/Headed and gutted with tail/g, "Avhøvdaður og kruvdur við hala"],
          [/Headed on gutted with tail/g, "Við høvdi, kruvdur og við hala"],
          [/Frozen interleaved/gi, "Frystar interleave-vørur"],
          [/Interleaved frozen products/gi, "Frystar interleave-vørur"],
          [/interleaved/gi, "interleave"],
          [/Other products/g, "Aðrar vørur"],
          [/Packaging/g, "Pakking"],
          [/Quality grades/g, "Góðskuflokkar"],
          [/Quality grade/g, "Góðskuflokkur"],
          [/Wet salted/g, "Saltaðar vørur"],
          [/Light salted/g, "Lættsaltaðar vørur"],
          [/Frozen/g, "Fryst"],
          [/IQF/g, "IQF"],
          [/Block frozen/g, "Blokkfrystur"],
          [/Skinless/g, "Uttan skræðu"],
          [/Skin on/g, "Við skræðu"],
          [/Skin off/g, "Uttan skræðu"],
          [/ungraded/gi, "Óflokkaður"],
          [/Heads/g, "Høvd"],
          [/Roe/g, "Rogn"],
          [/Tongue/g, "Tungur"],
          [/Portions/g, "Portiónir"],
          [/Loins/g, "Ryggstykki"],
          [/Tails/g, "Halar"],
          [/skinless/g, "uttan skræðu"],
          [/skin on/g, "við skræðu"],
          [/skin off/g, "uttan skræðu"],
          [/sizes from/g, "støddir frá"],
          [/sizes/g, "støddir"],
          [/size/g, "stødd"],
          [/ up to /g, " upp í "],
          [/ to /g, " til "],
          [/ and /g, " og "]
        ];
        let translated = node.nodeValue;
        productPhrases.forEach(([pattern, replacement]) => translated = translated.replace(pattern, replacement));
          node.nodeValue = translated;
        }
      });
    };

    window.translateDeltaSubtree = translateSubtree;
    translateSubtree(document.body);

    const translatedTitle = translationByMatch.get(document.title);
    if(translatedTitle) document.title = translatedTitle[language];
  }
})();
