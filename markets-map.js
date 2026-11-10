(function(){
  "use strict";

  /*
   * Add future markets to this list. Each entry needs a unique id,
   * its continent id, a display name and country-centre coordinates.
   */
  const MARKET_COUNTRIES = [
    {
      id:"spain",
      continent:"europe",
      name:{en:"Spain", fo:"Spania"},
      coordinates:[40.4168, -3.7038],
      zoom:6
    },
    {
      id:"italy",
      continent:"europe",
      name:{en:"Italy", fo:"Italia"},
      coordinates:[41.9028, 12.4964],
      zoom:6
    },
    {
      id:"usa",
      continent:"north-america",
      name:{en:"USA", fo:"USA"},
      coordinates:[39.8283, -98.5795],
      zoom:5
    }
  ];

  const MARKET_CONTINENTS = [
    {
      id:"europe",
      name:{en:"Europe", fo:"Evropa"},
      coordinates:[49.5, 10.5],
      zoom:4
    },
    {
      id:"north-america",
      name:{en:"North America", fo:"Norðuramerika"},
      coordinates:[43, -101],
      zoom:4
    }
  ];

  const mapElement = document.getElementById("marketMap");
  const listElement = document.getElementById("marketCountryList");
  const levelElement = document.getElementById("marketMapLevel");
  if(!mapElement || !listElement) return;

  const language = document.documentElement.lang === "fo" ? "fo" : "en";
  const labels = language === "fo"
    ? {
        country:"Marknaðarland",
        continents:"Vísir heimspartar — zooma inn fyri at síggja lond",
        countries:"Vísir lond — vel eitt Delta Seafood-búmerki",
        unavailable:"Kortið kundi ikki lesast inn. Londini síggjast framvegis í listanum.",
        open:"Vís"
      }
    : {
        country:"Market country",
        continents:"Showing continents — zoom in to see countries",
        countries:"Showing countries — select a Delta Seafood pin",
        unavailable:"The map could not load. The countries remain available in the list.",
        open:"View"
      };

  const logoUrl = encodeURI("Delta búmerki uttan tekst.png");
  const countryButtons = new Map();
  let map = null;
  let countryMarkers = new Map();

  function setActiveCountry(id){
    countryButtons.forEach((button, buttonId) => {
      button.classList.toggle("is-active", buttonId === id);
      button.setAttribute("aria-pressed", String(buttonId === id));
    });
  }

  function focusCountry(country){
    if(!map) return;
    setActiveCountry(country.id);
    map.flyTo(country.coordinates, country.zoom, {duration:.8});
    map.once("moveend", () => {
      const marker = countryMarkers.get(country.id);
      if(marker) marker.openPopup();
    });
  }

  function buildCountryList(){
    MARKET_COUNTRIES.forEach(country => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      const image = document.createElement("img");
      const name = document.createElement("span");
      const arrow = document.createElement("span");

      button.type = "button";
      button.className = "market-country-button";
      button.setAttribute("aria-pressed", "false");
      button.setAttribute("aria-label", `${labels.open} ${country.name[language]}`);
      image.src = logoUrl;
      image.alt = "";
      name.textContent = country.name[language];
      arrow.className = "country-arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "→";

      button.append(image, name, arrow);
      button.addEventListener("click", () => focusCountry(country));
      item.appendChild(button);
      listElement.appendChild(item);
      countryButtons.set(country.id, button);
    });
  }

  buildCountryList();

  if(typeof window.L === "undefined"){
    mapElement.classList.add("map-unavailable");
    mapElement.textContent = labels.unavailable;
    if(levelElement) levelElement.hidden = true;
    return;
  }

  function createLogoIcon(isContinent){
    const badgeClass = isContinent ? "delta-pin-badge is-continent" : "delta-pin-badge";
    const size = isContinent ? [72, 60] : [58, 52];
    return L.divIcon({
      className:"delta-map-icon",
      html:`<span class="${badgeClass}"><img src="${logoUrl}" alt=""></span>`,
      iconSize:size,
      iconAnchor:[size[0] / 2, size[1]],
      popupAnchor:[0, -size[1] + 8]
    });
  }

  function createPopup(title, detail){
    const content = document.createElement("div");
    const heading = document.createElement("strong");
    const description = document.createElement("span");
    heading.textContent = title;
    description.textContent = detail;
    content.append(heading, description);
    return content;
  }

  map = L.map(mapElement, {
    minZoom:2,
    maxZoom:18,
    worldCopyJump:true,
    zoomControl:true
  }).setView([31, -29], 2);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom:18
  }).addTo(map);

  const continentMarkers = MARKET_CONTINENTS.map(continent => {
    const count = MARKET_COUNTRIES.filter(country => country.continent === continent.id).length;
    const detail = language === "fo"
      ? (count === 1 ? "1 marknaðarland" : `${count} marknaðarlond`)
      : `${count} market ${count === 1 ? "country" : "countries"}`;
    const marker = L.marker(continent.coordinates, {
      icon:createLogoIcon(true),
      title:continent.name[language],
      alt:continent.name[language]
    });
    marker.bindTooltip(continent.name[language], {direction:"top", offset:[0, -52]});
    marker.bindPopup(createPopup(continent.name[language], detail));
    marker.on("click", () => map.flyTo(continent.coordinates, continent.zoom, {duration:.8}));
    return marker;
  });

  MARKET_COUNTRIES.forEach(country => {
    const marker = L.marker(country.coordinates, {
      icon:createLogoIcon(false),
      title:country.name[language],
      alt:country.name[language]
    });
    marker.bindTooltip(country.name[language], {direction:"top", offset:[0, -45]});
    marker.bindPopup(createPopup(country.name[language], labels.country));
    marker.on("click", () => setActiveCountry(country.id));
    countryMarkers.set(country.id, marker);
  });

  const continentLayer = L.layerGroup(continentMarkers);
  const countryLayer = L.layerGroup(Array.from(countryMarkers.values()));
  const COUNTRY_ZOOM = 4;

  function updateMarkerLevel(){
    const showCountries = map.getZoom() >= COUNTRY_ZOOM;
    if(showCountries){
      if(map.hasLayer(continentLayer)) map.removeLayer(continentLayer);
      if(!map.hasLayer(countryLayer)) countryLayer.addTo(map);
    } else {
      if(map.hasLayer(countryLayer)) map.removeLayer(countryLayer);
      if(!map.hasLayer(continentLayer)) continentLayer.addTo(map);
      setActiveCountry(null);
    }
    if(levelElement) levelElement.textContent = showCountries ? labels.countries : labels.continents;
  }

  map.on("zoomend", updateMarkerLevel);
  updateMarkerLevel();

  window.addEventListener("resize", () => map.invalidateSize({pan:false}));
  window.setTimeout(() => map.invalidateSize({pan:false}), 0);
})();
