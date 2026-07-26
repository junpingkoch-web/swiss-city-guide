(function () {
  "use strict";

  const LANG_KEY = "swissCityGuide.lang";
  const CITIES = (window.SWISS_CITIES || []).concat(window.SWISS_CANTON_CITIES || []);

  const i18n = {
    zh: {
      appTitle: "瑞士城市旅行指南",
      cityLabel: "选择城市",
      styleLabel: "旅行风格",
      styleRelaxed: "轻松平衡型",
      styleCompact: "紧凑行军型",
      companionLabel: "同行者",
      companionCouple: "情侣",
      companionElders: "长辈",
      companionFamily: "亲子",
      planBtn: "生成旅行指南",
      planning: "正在获取实时天气与生成地图…",
      weatherTitle: "气候与穿搭建议",
      weatherSource: "数据来源：Open-Meteo",
      mapTitle: "个性化地图",
      legendSight: "景点", legendFood: "美食", legendAirport: "机场",
      attractionsTitle: "必去景点",
      foodTitle: "必吃美食",
      transportTitle: "交通建议",
      airportLabel: "机场到市区",
      localTransitLabel: "市内交通",
      posterTitle: "旅程插画海报",
      downloadPoster: "下载海报",
      tipTitle: "温馨小贴士",
      adLabel: "广告",
      coffeeBtn: "请我喝杯咖啡",
      coffeeTooltip: "喜欢这个工具？请我喝杯咖啡",
      helpTitle: "使用说明",
      helpTip1: "选择城市、旅行风格与同行者，点击“生成旅行指南”。",
      helpTip2: "景点与美食数量、顺序会根据旅行风格与同行者自动调整。",
      helpTip3: "地图上的 emoji 标记按类型区分：🏛️景点 🍽️美食 ✈️机场，方便快速视觉定位。",
      helpTip4: "天气数据为实时接口获取；右上角可随时切换 中文 / EN / DE。",
      disclaimer: "天气数据实时抓取自公开接口；景点、美食与交通信息为人工整理，仅供参考，出行前请核实最新营业时间与开放情况。",
      tempLabel: "气温", precipLabel: "降雨概率", windLabel: "风速", sunLabel: "日出/日落",
      recommendedFor: "适合",
      badge_couple: "情侣", badge_elders: "长辈", badge_family: "亲子",
      badge_relaxed: "轻松风格", badge_compact: "紧凑风格",
      paceRelaxed: "轻松平衡型：建议每天安排 2–3 个重点行程，预留充足休息与用餐时间。",
      paceCompact: "紧凑行军型：行程更紧凑，建议尽早出发，合理安排交通换乘时间。",
      companionElderNote: "已优先展示较易到达、较少台阶的地点。",
      companionFamilyNote: "已优先展示适合亲子同行的地点。",
      dress_shoes: "舒适的步行鞋", dress_daypack: "轻便随身包", dress_water: "水壶",
      dress_cash: "现金/银行卡（交通、门票）", dress_maps: "手机（离线地图）",
      dress_umbrella: "雨伞/防水外套", dress_warmLayer: "保暖外套/围巾",
      dress_windbreaker: "防风外套", dress_sunHat: "遮阳帽 + 充足饮水",
      dress_sunglasses: "太阳镜 + 防晒霜"
    },
    en: {
      appTitle: "Swiss City Guide",
      cityLabel: "Choose a city",
      styleLabel: "Travel style",
      styleRelaxed: "Relaxed & balanced",
      styleCompact: "Compact / forced-march",
      companionLabel: "Companions",
      companionCouple: "Couple",
      companionElders: "Elders",
      companionFamily: "Family with kids",
      planBtn: "Build my guide",
      planning: "Fetching live weather and building the map…",
      weatherTitle: "Climate & outfit tips",
      weatherSource: "Source: Open-Meteo",
      mapTitle: "Personalized map",
      legendSight: "Sights", legendFood: "Food", legendAirport: "Airport",
      attractionsTitle: "Must-see attractions",
      foodTitle: "Must-eat food",
      transportTitle: "Getting around",
      airportLabel: "Airport to city centre",
      localTransitLabel: "Local transit",
      posterTitle: "Illustrated trip poster",
      downloadPoster: "Download poster",
      tipTitle: "Friendly tips",
      adLabel: "Advertisement",
      coffeeBtn: "Buy me a coffee",
      coffeeTooltip: "Enjoyed this tool? Buy me a coffee",
      helpTitle: "How to use",
      helpTip1: "Pick a city, travel style and companions, then click “Build my guide”.",
      helpTip2: "The number and order of attractions/food adapts to your travel style and companions.",
      helpTip3: "Map markers are color-coded by emoji: 🏛️ sights, 🍽️ food, ✈️ airport — for quick visual scanning.",
      helpTip4: "Weather is fetched live; switch 中文 / EN / DE anytime in the top right.",
      disclaimer: "Weather is fetched live from a public API; attractions, food and transit info are hand-curated for reference only — always check current opening hours before you go.",
      tempLabel: "Temperature", precipLabel: "Rain chance", windLabel: "Wind", sunLabel: "Sunrise/Sunset",
      recommendedFor: "Good for",
      badge_couple: "Couples", badge_elders: "Elders", badge_family: "Family",
      badge_relaxed: "Relaxed pick", badge_compact: "Compact pick",
      paceRelaxed: "Relaxed & balanced: plan 2–3 highlights per day and leave plenty of time for rest and meals.",
      paceCompact: "Compact / forced-march: a tighter schedule — start early and plan transit connections carefully.",
      companionElderNote: "Prioritizing easily-reached spots with fewer stairs.",
      companionFamilyNote: "Prioritizing family-friendly spots.",
      dress_shoes: "Comfortable walking shoes", dress_daypack: "Lightweight daypack", dress_water: "Water bottle",
      dress_cash: "Cash/card (transit, tickets)", dress_maps: "Phone (offline maps)",
      dress_umbrella: "Umbrella/rain jacket", dress_warmLayer: "Warm layer/scarf",
      dress_windbreaker: "Windproof jacket", dress_sunHat: "Sun hat + extra water",
      dress_sunglasses: "Sunglasses + sunscreen"
    },
    de: {
      appTitle: "Schweizer Stadtreiseführer",
      cityLabel: "Stadt wählen",
      styleLabel: "Reisestil",
      styleRelaxed: "Entspannt & ausgewogen",
      styleCompact: "Kompakt / Marschtempo",
      companionLabel: "Begleitung",
      companionCouple: "Paar",
      companionElders: "Ältere",
      companionFamily: "Familie mit Kindern",
      planBtn: "Reiseführer erstellen",
      planning: "Live-Wetter wird geladen und Karte erstellt…",
      weatherTitle: "Klima & Kleidungstipps",
      weatherSource: "Quelle: Open-Meteo",
      mapTitle: "Persönliche Karte",
      legendSight: "Sehenswürdigkeiten", legendFood: "Essen", legendAirport: "Flughafen",
      attractionsTitle: "Top-Sehenswürdigkeiten",
      foodTitle: "Kulinarische Highlights",
      transportTitle: "Verkehrsmittel",
      airportLabel: "Flughafen zur Innenstadt",
      localTransitLabel: "Nahverkehr",
      posterTitle: "Illustriertes Reiseposter",
      downloadPoster: "Poster herunterladen",
      tipTitle: "Kleine Tipps",
      adLabel: "Anzeige",
      coffeeBtn: "Spendier einen Kaffee",
      coffeeTooltip: "Hat dir das Tool geholfen? Spendier einen Kaffee",
      helpTitle: "Bedienung",
      helpTip1: "Stadt, Reisestil und Begleitung wählen, dann auf „Reiseführer erstellen“ klicken.",
      helpTip2: "Anzahl und Reihenfolge von Sehenswürdigkeiten/Essen passen sich an Reisestil und Begleitung an.",
      helpTip3: "Kartensymbole nach Emoji sortiert: 🏛️ Sehenswürdigkeiten, 🍽️ Essen, ✈️ Flughafen — für schnelles visuelles Erfassen.",
      helpTip4: "Wetter wird live abgerufen; oben rechts jederzeit zwischen 中文 / EN / DE wechseln.",
      disclaimer: "Wetterdaten stammen live aus einer offenen Schnittstelle; Sehenswürdigkeiten, Essen und Verkehrsinfos sind von Hand zusammengestellt und dienen nur der Orientierung — bitte vor der Reise aktuelle Öffnungszeiten prüfen.",
      tempLabel: "Temperatur", precipLabel: "Regenwahrscheinlichkeit", windLabel: "Wind", sunLabel: "Sonnenauf-/-untergang",
      recommendedFor: "Geeignet für",
      badge_couple: "Paare", badge_elders: "Ältere", badge_family: "Familie",
      badge_relaxed: "Entspannt-Tipp", badge_compact: "Kompakt-Tipp",
      paceRelaxed: "Entspannt & ausgewogen: 2–3 Highlights pro Tag einplanen, genug Zeit für Pausen und Essen lassen.",
      paceCompact: "Kompakt / Marschtempo: dichterer Zeitplan — früh starten und Umsteigezeiten gut einplanen.",
      companionElderNote: "Leicht erreichbare Orte mit wenigen Stufen werden bevorzugt gezeigt.",
      companionFamilyNote: "Familienfreundliche Orte werden bevorzugt gezeigt.",
      dress_shoes: "Bequeme Gehschuhe", dress_daypack: "Leichter Tagesrucksack", dress_water: "Wasserflasche",
      dress_cash: "Bargeld/Karte (ÖV, Tickets)", dress_maps: "Handy (Offline-Karten)",
      dress_umbrella: "Regenschirm/Regenjacke", dress_warmLayer: "Warme Schicht/Schal",
      dress_windbreaker: "Winddichte Jacke", dress_sunHat: "Sonnenhut + zusätzliches Wasser",
      dress_sunglasses: "Sonnenbrille + Sonnencreme"
    }
  };

  let currentLang = localStorage.getItem(LANG_KEY) || "zh";

  function t(key) {
    return (i18n[currentLang] && i18n[currentLang][key]) || i18n.en[key] || key;
  }

  function loc(field) {
    if (!field) return "";
    return field[currentLang] || field.en || field.de || "";
  }

  // ---------- Elements ----------
  const citySelect = document.getElementById("citySelect");
  const styleSelect = document.getElementById("styleSelect");
  const companionSelect = document.getElementById("companionSelect");
  const planBtn = document.getElementById("planBtn");
  const statusLine = document.getElementById("statusLine");
  const results = document.getElementById("results");
  const weatherBody = document.getElementById("weatherBody");
  const dressList = document.getElementById("dressList");
  const paceNote = document.getElementById("paceNote");
  const cityBlurb = document.getElementById("cityBlurb");
  const attractionList = document.getElementById("attractionList");
  const foodList = document.getElementById("foodList");
  const airportNote = document.getElementById("airportNote");
  const localTransitNote = document.getElementById("localTransitNote");
  const posterContainer = document.getElementById("posterContainer");
  const downloadPosterBtn = document.getElementById("downloadPosterBtn");
  const helpToggle = document.getElementById("helpToggle");
  const helpModal = document.getElementById("helpModal");
  const helpClose = document.getElementById("helpClose");

  function populateCities() {
    citySelect.innerHTML = "";
    CITIES.forEach((c) => {
      const opt = document.createElement("option");
      opt.value = c.id;
      opt.textContent = (c.canton ? "[" + c.canton + "] " : "") + loc(c.name) + " — " + loc(c.region);
      citySelect.appendChild(opt);
    });
  }

  function applyLang() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
    });
    document.documentElement.lang = currentLang;
    const selectedCity = citySelect.value;
    populateCities();
    if (selectedCity) citySelect.value = selectedCity;
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLang = btn.getAttribute("data-lang");
      localStorage.setItem(LANG_KEY, currentLang);
      applyLang();
      if (!results.hidden) renderAll();
    });
  });

  helpToggle.addEventListener("click", () => { helpModal.hidden = false; });
  helpClose.addEventListener("click", () => { helpModal.hidden = true; });
  helpModal.addEventListener("click", (e) => { if (e.target === helpModal) helpModal.hidden = true; });

  // ---------- Weather ----------
  async function fetchWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
      `&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max` +
      `&timezone=auto&forecast_days=1`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("weather fetch failed");
    return res.json();
  }

  function summarizeWeather(w) {
    const d = w.daily;
    return {
      tempMax: Math.round(d.temperature_2m_max[0]),
      tempMin: Math.round(d.temperature_2m_min[0]),
      precipMax: d.precipitation_probability_max[0],
      windMax: Math.round(d.wind_speed_10m_max[0]),
      sunrise: (d.sunrise[0] || "").slice(-5),
      sunset: (d.sunset[0] || "").slice(-5)
    };
  }

  function renderWeather(summary) {
    weatherBody.innerHTML = "";
    const stats = [
      [t("tempLabel"), `${summary.tempMin}° – ${summary.tempMax}°C`],
      [t("precipLabel"), `${summary.precipMax}%`],
      [t("windLabel"), `${summary.windMax} km/h`],
      [t("sunLabel"), `${summary.sunrise} / ${summary.sunset}`]
    ];
    stats.forEach(([label, value]) => {
      const div = document.createElement("div");
      div.className = "weather-stat";
      div.innerHTML = `<span class="stat-label">${label}</span><span class="stat-value">${value}</span>`;
      weatherBody.appendChild(div);
    });
  }

  function computeDress(summary) {
    const items = ["dress_shoes", "dress_daypack", "dress_water", "dress_cash", "dress_maps"];
    if (summary.precipMax >= 50) items.push("dress_umbrella");
    if (summary.tempMin < 10) items.push("dress_warmLayer");
    if (summary.windMax >= 30) items.push("dress_windbreaker");
    if (summary.tempMax > 25 && summary.precipMax < 30) items.push("dress_sunHat");
    if (summary.precipMax < 30) items.push("dress_sunglasses");
    return items;
  }

  function renderDress(keys) {
    dressList.innerHTML = "";
    keys.forEach((k) => {
      const li = document.createElement("li");
      li.textContent = t(k);
      dressList.appendChild(li);
    });
  }

  // ---------- Adaptive scoring ----------
  function scoreItem(item, style, companion) {
    if (!item.tags) return 0;
    let score = 0;
    if (item.tags.includes(companion)) score += 2;
    if (item.tags.includes(style)) score += 1;
    if (item.difficulty === "moderate" && (companion === "elders" || companion === "family")) score -= 1;
    return score;
  }

  function pickAdaptive(items, style, companion, nRelaxed, nCompact) {
    const scored = items.map((item, idx) => ({ item, idx, score: scoreItem(item, style, companion) }));
    scored.sort((a, b) => b.score - a.score || a.idx - b.idx);
    const n = style === "compact" ? nCompact : nRelaxed;
    return scored.slice(0, Math.min(n, items.length)).map((s) => s.item);
  }

  function badgesFor(item) {
    const badges = [];
    if (!item.tags) return badges;
    ["couple", "elders", "family"].forEach((tag) => {
      if (item.tags.includes(tag)) badges.push(t("badge_" + tag));
    });
    return badges;
  }

  function renderPoiList(el, items, nameFn) {
    el.innerHTML = "";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.className = "poi-item";
      const badges = badgesFor(item).join(" · ");
      li.innerHTML = `
        <span class="poi-emoji">${item.emoji}</span>
        <div class="poi-body">
          <div class="poi-name">${nameFn(item)}</div>
          <div class="poi-reason">${item.reason ? loc(item.reason) : (item.note ? loc(item.note) : "")}</div>
          ${badges ? `<span class="poi-badge">${t("recommendedFor")}: ${badges}</span>` : ""}
        </div>`;
      el.appendChild(li);
    });
  }

  function renderPace(style, companion) {
    let note = style === "compact" ? t("paceCompact") : t("paceRelaxed");
    if (companion === "elders") note += " " + t("companionElderNote");
    if (companion === "family") note += " " + t("companionFamilyNote");
    paceNote.textContent = note;
  }

  // ---------- Map ----------
  let map = null;
  let markerGroup = null;

  function ensureMap() {
    if (map) return;
    map = L.map("cityMap", { scrollWheelZoom: false });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 19
    }).addTo(map);
    markerGroup = L.layerGroup().addTo(map);
  }

  function emojiIcon(symbol) {
    return L.divIcon({
      html: `<div class="emoji-marker">${symbol}</div>`,
      className: "",
      iconSize: [26, 26],
      iconAnchor: [13, 13]
    });
  }

  function renderMap(city, shownAttractions, shownFood) {
    ensureMap();
    markerGroup.clearLayers();
    const boundsPoints = [];

    shownAttractions.forEach((a) => {
      const m = L.marker([a.coords.lat, a.coords.lon], { icon: emojiIcon(a.emoji) });
      m.bindPopup(`<b>${a.name}</b><br>${loc(a.reason)}`);
      markerGroup.addLayer(m);
      boundsPoints.push([a.coords.lat, a.coords.lon]);
    });

    shownFood.forEach((f) => {
      const m = L.marker([f.coords.lat, f.coords.lon], { icon: emojiIcon("🍽️") });
      m.bindPopup(`<b>${f.restaurant}</b><br>${loc(f.dish)}`);
      markerGroup.addLayer(m);
      boundsPoints.push([f.coords.lat, f.coords.lon]);
    });

    if (city.airport && city.airport.coords) {
      const m = L.marker([city.airport.coords.lat, city.airport.coords.lon], { icon: emojiIcon("✈️") });
      m.bindPopup(`<b>${city.airport.label}</b>`);
      markerGroup.addLayer(m);
      // Airport is often far from the centre; keep it off the fitBounds calc
      // so the city-centre cluster doesn't get zoomed out into illegibility.
    }

    if (boundsPoints.length) {
      map.fitBounds(boundsPoints, { padding: [30, 30], maxZoom: 15 });
    } else {
      map.setView([city.coords.lat, city.coords.lon], 13);
    }
    setTimeout(() => { if (map) map.invalidateSize(); }, 150);
  }

  // ---------- Main flow ----------
  let lastResult = null;

  function renderAll() {
    if (!lastResult) return;
    const { city, summary, style, companion } = lastResult;

    renderWeather(summary);
    renderDress(computeDress(summary));

    if (city.light) {
      cityBlurb.textContent = loc(city.blurb);
      paceNote.textContent = "";
    } else {
      cityBlurb.textContent = "";
      renderPace(style, companion);
    }

    const shownAttractions = city.light ? [city.topSight] : pickAdaptive(city.attractions, style, companion, 5, 7);
    const shownFood = city.light ? [city.food] : pickAdaptive(city.food, style, companion, 3, 4);

    renderPoiList(attractionList, shownAttractions, (item) => item.name);
    renderPoiList(foodList, shownFood, (item) => `${loc(item.dish)} — ${item.restaurant}`);

    if (city.light) {
      airportNote.textContent = loc(city.transitNote);
      localTransitNote.textContent = "";
    } else {
      airportNote.textContent = `${city.airport.label}: ${loc(city.airport.note)}`;
      localTransitNote.textContent = loc(city.localTransit);
    }

    renderMap(city, shownAttractions, shownFood);

    if (window.RoutePoster) {
      window.RoutePoster.render(posterContainer, {
        title: loc(city.name),
        stops: shownAttractions.map((a) => ({ emoji: a.emoji, label: a.name })),
        tipTitle: t("tipTitle"),
        tip: buildFriendlyTip(summary, city)
      });
    }
  }

  function buildFriendlyTip(summary, city) {
    const lines = [];
    if (summary.precipMax >= 50) {
      lines.push({ zh: "今天降雨概率较高，记得带伞或雨衣～", en: "High chance of rain today — bring an umbrella or rain jacket.", de: "Hohe Regenwahrscheinlichkeit heute — Regenschirm nicht vergessen." });
    } else if (summary.precipMax < 30) {
      lines.push({ zh: "今天天气晴朗，别忘了防晒霜和太阳镜！", en: "Clear skies today — don't forget sunscreen and sunglasses!", de: "Klarer Himmel heute — Sonnencreme und Sonnenbrille nicht vergessen!" });
    }
    if (summary.tempMin < 10) {
      lines.push({ zh: "早晚温差较大，带件保暖外套更安心。", en: "Big temperature swings morning/evening — pack a warm layer.", de: "Grosse Temperaturschwankungen morgens/abends — eine warme Schicht einpacken." });
    }
    lines.push({ zh: `在${loc(city.name)}多和当地人聊聊天，会发现意想不到的小惊喜～`, en: `Chat with locals in ${loc(city.name)} — you might stumble on a lovely surprise.`, de: `Sprich in ${loc(city.name)} mit Einheimischen — oft wartet eine schöne Überraschung.` });
    return lines.map((l) => l[currentLang] || l.en).join(" ");
  }

  if (downloadPosterBtn) {
    downloadPosterBtn.addEventListener("click", () => {
      if (window.RoutePoster) window.RoutePoster.download(posterContainer, "swiss-city-poster.png");
    });
  }

  async function planRoute() {
    const city = CITIES.find((c) => c.id === citySelect.value);
    const style = styleSelect.value;
    const companion = companionSelect.value;
    if (!city) return;

    planBtn.disabled = true;
    statusLine.hidden = false;
    statusLine.textContent = t("planning");
    results.hidden = true;

    try {
      const weatherRaw = await fetchWeather(city.coords.lat, city.coords.lon).catch(() => null);
      const summary = weatherRaw ? summarizeWeather(weatherRaw) : { tempMax: 20, tempMin: 12, precipMax: 30, windMax: 12, sunrise: "06:30", sunset: "20:30" };

      lastResult = { city, summary, style, companion };
      renderAll();

      results.hidden = false;
      statusLine.hidden = true;
    } catch (err) {
      console.error("planRoute error:", err);
      statusLine.textContent = t("planning");
    } finally {
      planBtn.disabled = false;
    }
  }

  planBtn.addEventListener("click", planRoute);

  applyLang();
})();
