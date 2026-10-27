(function(){
  const navbar = document.querySelector(".navbar");
  if(!navbar || navbar.querySelector(".mobile-menu-toggle")) return;

  function getLabels(){
    return document.documentElement.lang === "fo"
      ? { open:"Opna valmynd", close:"Lat valmynd aftur" }
      : { open:"Open navigation menu", close:"Close navigation menu" };
  }

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "mobile-menu-toggle";
  toggle.setAttribute("aria-label", getLabels().open);
  toggle.setAttribute("aria-expanded", "false");
  toggle.innerHTML = "<span></span><span></span><span></span>";

  const menuGroups = Array.from(navbar.children).filter(element =>
    element.classList.contains("menu-left") ||
    element.classList.contains("menu-right") ||
    element.classList.contains("menu")
  );
  menuGroups.forEach((group, index) => {
    if(!group.id) group.id = `mobile-menu-group-${index + 1}`;
  });
  if(menuGroups.length){
    toggle.setAttribute("aria-controls", menuGroups.map(group => group.id).join(" "));
  }

  navbar.insertBefore(toggle, navbar.firstChild);
  navbar.classList.add("mobile-nav-ready");

  function setMenuOpen(open){
    navbar.classList.toggle("mobile-menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    const labels = getLabels();
    toggle.setAttribute("aria-label", open ? labels.close : labels.open);
  }

  toggle.addEventListener("click", () => {
    setMenuOpen(!navbar.classList.contains("mobile-menu-open"));
  });

  navbar.querySelectorAll(".menu-left a, .menu-right a, .menu a").forEach(link => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", event => {
    if(event.key === "Escape" && navbar.classList.contains("mobile-menu-open")){
      setMenuOpen(false);
      toggle.focus();
    }
  });

  navbar.querySelectorAll("[data-lang]").forEach(button => {
    button.addEventListener("click", () => setTimeout(() => {
      const labels = getLabels();
      const open = navbar.classList.contains("mobile-menu-open");
      toggle.setAttribute("aria-label", open ? labels.close : labels.open);
    }, 0));
  });

  window.addEventListener("resize", () => {
    if(window.innerWidth > 1100) setMenuOpen(false);
  });
})();
