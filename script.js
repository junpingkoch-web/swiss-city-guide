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
      dress_sunglasses: "太阳镜 + 防晒霜",
      explainTitle: "这份旅行指南是怎么帮你个性化推荐的？",
      explainP1: "选择城市后，工具会实时调用 Open-Meteo 天气接口，获取当天的气温、降雨概率、风速，据此动态生成穿搭建议（比如降雨概率高会提示带雨伞、气温低会提示加保暖层）。景点、美食和交通信息则不是实时抓取的，而是我按城市手工整理的数据库，包含地址、简介和分类标签。",
      explainP2: "「旅行风格」和「同行者」这两个选项会影响景点和美食的筛选与排序规则：选择「轻松平衡型」会建议每天安排较少的重点行程；选择「紧凑行军型」则会给出更密集的日程。同行者是「长辈」时，会优先展示台阶少、更易到达的地点；是「亲子」时，会优先展示适合带小孩的地点。这是基于标签的规则匹配，不是每次都重新生成的AI推荐。",
      explainP3: "地图使用开源的 OpenStreetMap 地图数据（通过 Leaflet 库渲染），不依赖 Google Maps API Key。所有景点、美食和交通信息为人工整理，具体营业时间、票价和开放状态可能会变化，出行前请务必通过官方渠道核实最新信息。",
      compareTitle: "三座城市，怎么选",
      compareIntro: "拿最常被选的三座城市对比一下——同样是瑞士，体验差异其实很大。",
      compareHead: ["城市", "最适合谁", "花费水平", "节奏感", "一句话印象"],
      compareRows: [
        ["苏黎世", "独自旅行、想体验都市生活", "较高", "快节奏", "班霍夫大街购物、湖畔漫步和苏黎世山远眺，一天塞得满满当当"],
        ["日内瓦", "情侣、对国际化和历史感兴趣的人", "高（瑞士最贵城市之一）", "中等，散步节奏", "湖畔喷泉、联合国总部，还能跨境去法国境内的萨利夫山看全景"],
        ["琉森", "带孩子的家庭、长辈同行", "中等", "慢节奏，好走好停", "老城、雪山缆车和湖船一站式搞定，本地没机场但直达火车很方便"]
      ],
      compareNote: "这张表只是大方向参考，具体到某一次旅行，最终推荐清单还是会根据你实际选择的「旅行风格」和「同行者」重新排序和筛选——比如同样是苏黎世，带孩子和情侣两人的行程会完全不一样。",
      faqTitle: "常见问题",
      faq: [
        { q: "天气数据是实时的吗？", a: "是的，气候与穿搭建议基于 Open-Meteo 的实时天气接口，每次生成指南都会重新查询当天数据。" },
        { q: "景点和美食推荐是怎么筛选出来的？", a: "这些是我按城市手工整理的数据库，不是每次实时生成的。选择的「旅行风格」和「同行者」会通过标签匹配规则筛选和重新排序这些内容。" },
        { q: "地图用的是什么数据源？需要绑定 Google 账号吗？", a: "地图基于开源的 OpenStreetMap 数据，通过 Leaflet 库在浏览器本地渲染，不使用 Google Maps API，也不需要任何账号或授权。" },
        { q: "为什么换了旅行风格或同行者，景点数量和顺序会变？", a: "「轻松平衡型」建议每天安排较少重点、留出休息时间；「紧凑行军型」日程更密集。选择「长辈」会优先展示较易到达、台阶少的地点，选择「亲子」会优先展示适合带小孩的地点。" },
        { q: "这些景点、餐厅信息会不会过时？", a: "有可能。所有信息为人工整理，营业时间、票价、开放状态都可能随时间变化，出行前请通过官方渠道核实最新信息，不要完全依赖本工具。" },
        { q: "这个工具会保存我的选择或位置数据吗？", a: "不会。所有筛选和生成都在你的浏览器本地完成，只有语言偏好会保存在本地，不涉及任何定位权限或个人数据上传。" }
      ]
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
      dress_sunglasses: "Sunglasses + sunscreen",
      explainTitle: "How does this guide actually personalize its recommendations?",
      explainP1: "Once you pick a city, the tool calls the Open-Meteo weather API live to get the day's temperature, rain probability, and wind, and generates outfit tips dynamically from that (high rain probability suggests an umbrella, low temperature suggests a warm layer). Attractions, food, and transit info aren't fetched live — they come from a hand-curated database built per city, with addresses, short descriptions, and category tags.",
      explainP2: "\"Travel style\" and \"companions\" drive the filtering and reordering rules for attractions and food: choosing \"Relaxed & balanced\" suggests fewer highlights per day, while \"Compact\" gives a denser schedule. Picking \"Elders\" prioritizes easily-reached spots with fewer stairs, and \"Family with kids\" prioritizes kid-friendly places. This is tag-based rule matching, not a freshly generated AI recommendation each time.",
      explainP3: "The map uses open OpenStreetMap data, rendered through the Leaflet library — no Google Maps API key involved. All attraction, food, and transit info is hand-curated, and opening hours, prices, and availability can change, so always verify the latest details through official channels before your trip.",
      compareTitle: "Three cities, side by side",
      compareIntro: "Comparing the three most-picked cities head to head — same country, very different experiences.",
      compareHead: ["City", "Best for", "Cost level", "Pace", "One-line impression"],
      compareRows: [
        ["Zurich", "Solo travel, wanting an urban experience", "Higher", "Fast-paced", "Bahnhofstrasse shopping, a lakeside stroll, and a view from Uetliberg all fit into one day"],
        ["Geneva", "Couples, anyone into international flair and history", "High (one of Switzerland's priciest cities)", "Moderate, walking pace", "Lakeside fountain, UN headquarters, and a cross-border trip up Mont Salève for the panorama"],
        ["Lucerne", "Families with kids, traveling with elders", "Moderate", "Slow, easy-stopping pace", "Old town, mountain cable cars, and lake boats all in one place — no local airport, but a direct train makes it easy"]
      ],
      compareNote: "This table is just a rough starting point — for any actual trip, the final recommendations are still re-sorted and filtered based on the travel style and companions you actually choose. The same Zurich trip looks completely different for a family with kids versus a couple traveling alone.",
      faqTitle: "Frequently Asked Questions",
      faq: [
        { q: "Is the weather data actually live?", a: "Yes — climate and outfit tips are based on Open-Meteo's live weather API, queried fresh each time you build a guide." },
        { q: "How are the attraction and food recommendations chosen?", a: "They come from a hand-curated database built per city, not something generated live. Your chosen travel style and companions filter and reorder that content via tag matching." },
        { q: "What map data does this use? Do I need a Google account?", a: "The map uses open OpenStreetMap data, rendered locally in your browser via the Leaflet library — no Google Maps API and no account or authorization required." },
        { q: "Why do the number and order of attractions change when I switch travel style or companions?", a: "\"Relaxed & balanced\" suggests fewer highlights per day with room to rest; \"Compact\" gives a denser schedule. \"Elders\" prioritizes easily-reached spots with fewer stairs, and \"Family\" prioritizes kid-friendly places." },
        { q: "Could the attraction/restaurant info be outdated?", a: "It's possible. All info is hand-curated, and opening hours, prices, and availability can change over time — always verify current details through official channels before you go." },
        { q: "Does this tool save my selections or location data?", a: "No. All filtering and generation happens entirely in your browser; only your language preference is saved locally. No location permission is used." }
      ]
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
      dress_sunglasses: "Sonnenbrille + Sonnencreme",
      explainTitle: "Wie personalisiert dieser Reiseführer seine Empfehlungen eigentlich?",
      explainP1: "Sobald du eine Stadt wählst, ruft das Tool live die Open-Meteo-Wetter-API ab, um Temperatur, Regenwahrscheinlichkeit und Wind des Tages zu erhalten, und erstellt daraus dynamisch Kleidungstipps (hohe Regenwahrscheinlichkeit empfiehlt einen Regenschirm, niedrige Temperatur eine warme Schicht). Sehenswürdigkeiten, Essen und Verkehrsinfos werden nicht live abgerufen — sie stammen aus einer pro Stadt handkuratierten Datenbank mit Adressen, Kurzbeschreibungen und Kategorie-Tags.",
      explainP2: "„Reisestil“ und „Begleitung“ steuern die Filter- und Sortierregeln für Sehenswürdigkeiten und Essen: „Entspannt & ausgewogen“ empfiehlt weniger Highlights pro Tag, „Kompakt“ liefert einen dichteren Zeitplan. Die Wahl „Ältere“ priorisiert leicht erreichbare Orte mit wenigen Stufen, „Familie mit Kindern“ priorisiert familienfreundliche Orte. Das ist regelbasiertes Tag-Matching, keine bei jedem Aufruf neu generierte KI-Empfehlung.",
      explainP3: "Die Karte nutzt offene OpenStreetMap-Daten, dargestellt über die Leaflet-Bibliothek — keine Google-Maps-API nötig. Alle Angaben zu Sehenswürdigkeiten, Essen und Verkehr sind von Hand zusammengestellt; Öffnungszeiten, Preise und Verfügbarkeit können sich ändern, bitte vor der Reise die aktuellen Angaben über offizielle Kanäle prüfen.",
      compareTitle: "Drei Städte im Vergleich",
      compareIntro: "Ein direkter Vergleich der drei meistgewählten Städte — dasselbe Land, sehr unterschiedliche Erlebnisse.",
      compareHead: ["Stadt", "Geeignet für", "Kostenniveau", "Tempo", "Eindruck in einem Satz"],
      compareRows: [
        ["Zürich", "Alleinreisende, urbanes Erlebnis", "Höher", "Schnelles Tempo", "Einkaufsbummel an der Bahnhofstrasse, Spaziergang am See und Aussicht vom Uetliberg passen locker in einen Tag"],
        ["Genf", "Paare, alle mit Interesse an Internationalität und Geschichte", "Hoch (eine der teuersten Städte der Schweiz)", "Mittel, Spaziergängertempo", "Springbrunnen am See, UNO-Hauptsitz und ein grenzüberschreitender Ausflug auf den Mont Salève fürs Panorama"],
        ["Luzern", "Familien mit Kindern, Reisen mit älteren Angehörigen", "Mittel", "Langsames, bequemes Tempo", "Altstadt, Bergbahnen und Seeschiffe an einem Ort — kein eigener Flughafen, aber ein Direktzug macht es einfach"]
      ],
      compareNote: "Diese Tabelle ist nur ein grober Ausgangspunkt — für eine konkrete Reise werden die endgültigen Empfehlungen weiterhin anhand des gewählten Reisestils und der Begleitung neu sortiert und gefiltert. Dieselbe Zürich-Reise sieht für eine Familie mit Kindern völlig anders aus als für ein Paar allein.",
      faqTitle: "Häufig gestellte Fragen",
      faq: [
        { q: "Sind die Wetterdaten wirklich live?", a: "Ja — Klima- und Kleidungstipps basieren auf der Live-Wetter-API von Open-Meteo, die bei jeder Reiseführer-Erstellung neu abgefragt wird." },
        { q: "Wie werden die Sehenswürdigkeiten- und Essensempfehlungen ausgewählt?", a: "Sie stammen aus einer pro Stadt handkuratierten Datenbank, nicht aus einer Live-Generierung. Dein gewählter Reisestil und deine Begleitung filtern und sortieren diese Inhalte per Tag-Matching." },
        { q: "Welche Kartendaten werden verwendet? Brauche ich ein Google-Konto?", a: "Die Karte nutzt offene OpenStreetMap-Daten, lokal in deinem Browser über die Leaflet-Bibliothek dargestellt — keine Google-Maps-API, kein Konto oder Autorisierung nötig." },
        { q: "Warum ändern sich Anzahl und Reihenfolge der Sehenswürdigkeiten je nach Reisestil oder Begleitung?", a: "„Entspannt & ausgewogen“ empfiehlt weniger Highlights pro Tag mit mehr Zeit zum Ausruhen, „Kompakt“ liefert einen dichteren Zeitplan. „Ältere“ priorisiert leicht erreichbare Orte mit wenigen Stufen, „Familie“ priorisiert familienfreundliche Orte." },
        { q: "Könnten die Angaben zu Sehenswürdigkeiten/Restaurants veraltet sein?", a: "Möglich. Alle Angaben sind von Hand zusammengestellt, und Öffnungszeiten, Preise und Verfügbarkeit können sich ändern — bitte vor der Reise aktuelle Angaben über offizielle Kanäle prüfen." },
        { q: "Speichert dieses Tool meine Auswahl oder Standortdaten?", a: "Nein. Die gesamte Filterung und Erstellung läuft vollständig in deinem Browser ab; nur deine Sprachpräferenz wird lokal gespeichert. Es wird keine Standortberechtigung verwendet." }
      ]
    }
  };

  let currentLang = localStorage.getItem(LANG_KEY) || "de";

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

  const compareHeadEl = document.getElementById("compareTableHead");
  const compareBodyEl = document.getElementById("compareTableBody");
  function renderCompareTable() {
    if (!compareHeadEl || !compareBodyEl) return;
    const t = i18n[currentLang];
    compareHeadEl.innerHTML = (t.compareHead || []).map((h) => "<th>" + h + "</th>").join("");
    compareBodyEl.innerHTML = (t.compareRows || []).map((row) => {
      const cells = row.map((cell, i) => (i === 0 ? "<th scope=\"row\">" + cell + "</th>" : "<td>" + cell + "</td>")).join("");
      return "<tr>" + cells + "</tr>";
    }).join("");
  }

  const faqListEl = document.getElementById("faqList");
  function renderFAQ() {
    if (!faqListEl) return;
    const faq = (i18n[currentLang] && i18n[currentLang].faq) || [];
    faqListEl.innerHTML = "";
    faq.forEach((item) => {
      const details = document.createElement("details");
      details.className = "faq-item";
      const summary = document.createElement("summary");
      summary.innerHTML = '<span class="chev">▶</span> <span>' + item.q + "</span>";
      const body = document.createElement("div");
      body.className = "faq-a";
      body.textContent = item.a;
      details.appendChild(summary);
      details.appendChild(body);
      faqListEl.appendChild(details);
    });
  }

  function applyLang() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });
    renderCompareTable();
    renderFAQ();
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
      if (typeof gtag === "function") gtag("event", "tool_result_generated", { tool_name: "swiss-city-guide" });
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
