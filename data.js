// Curated Swiss city travel guide data. Coordinates are real places;
// live weather is fetched at runtime (see script.js). Attractions/food carry
// tags used for style/companion-adaptive scoring, not hard filters.
window.SWISS_CITIES = [
  {
    id: "zurich",
    canton: "ZH",
    name: { de: "Zürich", en: "Zurich", zh: "苏黎世" },
    region: { de: "Deutschschweiz", en: "German-speaking Switzerland", zh: "德语区" },
    coords: { lat: 47.3769, lon: 8.5417 },
    airport: {
      label: "Zürich Flughafen (ZRH)",
      coords: { lat: 47.4647, lon: 8.5492 },
      note: {
        de: "Bahn direkt vom Flughafen-Bahnhof zum Hauptbahnhof, ca. 10 Min., mehrmals pro Stunde.",
        en: "Train direct from the airport station to Zürich HB, ~10 min, several times per hour.",
        zh: "机场火车站直达苏黎世中央车站，约10分钟，每小时多班。"
      }
    },
    localTransit: {
      de: "ZVV-Tram/Bus/S-Bahn-Netz deckt die ganze Stadt ab; Zürich Card lohnt sich für Museen + ÖV.",
      en: "The ZVV tram/bus/S-Bahn network covers the whole city; the Zürich Card bundles museums + transit.",
      zh: "ZVV 电车/公交/城铁网络覆盖全城；苏黎世卡可同时用于博物馆和公共交通。"
    },
    attractions: [
      { emoji: "🏛️", name: "Grossmünster", reason: { de: "Wahrzeichen mit Doppeltürmen und Turmpanorama über die Altstadt.", en: "Landmark twin-tower church with a rooftop panorama over the old town.", zh: "双塔地标教堂，塔顶可俯瞰老城全景。" }, tags: ["couple", "family", "elders", "relaxed", "compact"], difficulty: "easy", coords: { lat: 47.3703, lon: 8.5442 } },
      { emoji: "🛍️", name: "Bahnhofstrasse", reason: { de: "Berühmte Einkaufsmeile, endet direkt am Seeufer.", en: "Famous shopping avenue that ends right at the lakefront.", zh: "著名购物大道，尽头直通湖畔。" }, tags: ["couple", "family", "elders", "relaxed", "compact"], difficulty: "easy", coords: { lat: 47.3742, lon: 8.5395 } },
      { emoji: "🌊", name: "Zürichsee-Promenade", reason: { de: "Flacher Seeuferweg, ideal für einen Spaziergang oder eine Bootsfahrt.", en: "Flat lakeside promenade, perfect for a stroll or a boat trip.", zh: "平坦湖滨步道，适合散步或乘船游览。" }, tags: ["family", "elders", "relaxed"], difficulty: "easy", coords: { lat: 47.3653, lon: 8.5462 } },
      { emoji: "🎨", name: "Kunsthaus Zürich", reason: { de: "Eine der bedeutendsten Kunstsammlungen der Schweiz.", en: "One of Switzerland's most important art collections.", zh: "瑞士最重要的艺术收藏馆之一。" }, tags: ["couple", "elders", "relaxed"], difficulty: "easy", coords: { lat: 47.3706, lon: 8.5484 } },
      { emoji: "⛰️", name: "Uetliberg", reason: { de: "Zürichs Hausberg per Zahnradbahn, Panoramaweg mit Stadt- und Alpenblick.", en: "Zurich's home mountain by cogwheel train, a panoramic ridge trail over the city and Alps.", zh: "苏黎世的\"城市之山\"，齿轨小火车直达，山脊步道可眺望全城与阿尔卑斯山。" }, tags: ["couple", "compact"], difficulty: "moderate", coords: { lat: 47.3527, lon: 8.4915 } },
      { emoji: "🏺", name: "Landesmuseum", reason: { de: "Schweizer Geschichte anschaulich erzählt, direkt beim Hauptbahnhof.", en: "Swiss history told vividly, right next to the main station.", zh: "生动讲述瑞士历史，就在中央车站旁边。" }, tags: ["family", "elders", "couple", "relaxed"], difficulty: "easy", coords: { lat: 47.3782, lon: 8.5402 } },
      { emoji: "🦁", name: "Zoo Zürich", reason: { de: "Grosser, moderner Zoo mit Regenwaldhaus – ein halber Tag für die ganze Familie.", en: "A large, modern zoo with a rainforest biodome — a half-day out for the whole family.", zh: "现代化大型动物园，设有热带雨林馆——适合全家消磨半天。" }, tags: ["family"], difficulty: "easy", coords: { lat: 47.3856, lon: 8.5747 } }
    ],
    food: [
      { emoji: "🥘", dish: { de: "Zürcher Geschnetzeltes mit Rösti", en: "Zürcher Geschnetzeltes (veal in cream sauce) with Rösti", zh: "苏黎世奶油炖小牛肉配薯饼" }, restaurant: "Zeughauskeller", note: { de: "Historische Bierhalle im alten Zeughaus, mitten in der Altstadt.", en: "A historic beer hall in the old armoury, right in the old town.", zh: "老城中心的历史悠久的军械库啤酒馆。" }, coords: { lat: 47.3701, lon: 8.5413 } },
      { emoji: "🍬", dish: { de: "Luxemburgerli", en: "Luxemburgerli (mini macarons)", zh: "卢森堡马卡龙（迷你马卡龙）" }, restaurant: "Confiserie Sprüngli, Paradeplatz", note: { de: "Zürcher Institution seit 1836, direkt am Paradeplatz.", en: "A Zurich institution since 1836, right on Paradeplatz.", zh: "1836年创立的苏黎世老字号，就在天堂广场。" }, coords: { lat: 47.3689, lon: 8.5389 } },
      { emoji: "🧀", dish: { de: "Fondue & Raclette", en: "Fondue & raclette", zh: "奶酪火锅与烤奶酪" }, restaurant: "Swiss Chuchi (Hotel Adler)", note: { de: "Urchig-schweizerisches Ambiente im Niederdorf.", en: "Rustic Swiss atmosphere in the Niederdorf old-town quarter.", zh: "位于下城区，充满瑞士乡土风情。" }, coords: { lat: 47.3715, lon: 8.5445 } },
      { emoji: "🌭", dish: { de: "St. Galler Bratwurst", en: "St. Galler bratwurst", zh: "圣加仑白肠" }, restaurant: "Sternen Grill, Bellevue", note: { de: "Kultiger Take-away-Grillstand direkt am Bellevue.", en: "A cult take-away grill stand right at Bellevue square.", zh: "贝尔维尤广场旁的经典外带烤肠摊。" }, coords: { lat: 47.3667, lon: 8.5451 } }
    ]
  },
  {
    id: "geneva",
    canton: "GE",
    name: { de: "Genf", en: "Geneva", zh: "日内瓦" },
    region: { de: "Romandie (Westschweiz)", en: "French-speaking Switzerland", zh: "法语区" },
    coords: { lat: 46.2044, lon: 6.1432 },
    airport: {
      label: "Genève Aéroport (GVA)",
      coords: { lat: 46.2381, lon: 6.1089 },
      note: {
        de: "Zug direkt zum Bahnhof Genève-Cornavin, ca. 6–8 Min., sehr häufig.",
        en: "Train direct to Genève-Cornavin station, ~6–8 min, very frequent.",
        zh: "火车直达日内瓦科纳万车站，约6-8分钟，班次密集。"
      }
    },
    localTransit: {
      de: "TPG-Busse und Trams decken die Stadt ab; viele Hotels geben eine kostenlose Transportkarte aus.",
      en: "TPG buses and trams cover the city; many hotels issue a free transit card.",
      zh: "TPG 公交与电车覆盖全城；许多酒店会提供免费交通卡。"
    },
    attractions: [
      { emoji: "⛲", name: "Jet d'Eau", reason: { de: "140 Meter hohe Wasserfontäne, das Wahrzeichen am Seeufer.", en: "A 140-metre fountain jet, the lakeside landmark.", zh: "140米高的湖畔喷泉地标。" }, tags: ["couple", "family", "elders", "relaxed", "compact"], difficulty: "easy", coords: { lat: 46.2073, lon: 6.1571 } },
      { emoji: "🏙️", name: "Vieille Ville & Cathédrale St-Pierre", reason: { de: "Kopfsteinpflaster-Altstadt, Turmaufstieg mit Rundblick.", en: "Cobblestone old town, with a tower climb for a panoramic view.", zh: "鹅卵石老城，登塔可览全城风光。" }, tags: ["couple", "family"], difficulty: "moderate", coords: { lat: 46.2011, lon: 6.1489 } },
      { emoji: "🌺", name: "Jardin Anglais & Horloge Fleurie", reason: { de: "Seepark mit der berühmten Blumenuhr, entspannter Spaziergang.", en: "Lakeside garden with the famous flower clock, a relaxed stroll.", zh: "湖畔花园，以著名的花钟闻名，适合悠闲漫步。" }, tags: ["family", "elders", "relaxed"], difficulty: "easy", coords: { lat: 46.2075, lon: 6.1503 } },
      { emoji: "🕊️", name: "Palais des Nations (UN Genf)", reason: { de: "Geführte Tour durch den europäischen UNO-Sitz.", en: "Guided tour through the UN's European headquarters.", zh: "参观联合国欧洲总部，跟随导览深入了解。" }, tags: ["couple", "elders"], difficulty: "easy", coords: { lat: 46.2265, lon: 6.1403 } },
      { emoji: "🎨", name: "Musée d'Art et d'Histoire (MAH)", reason: { de: "Genfs grösstes Museum, von Antike bis Moderne.", en: "Geneva's largest museum, spanning antiquity to modern art.", zh: "日内瓦最大的博物馆，从古代文物到现代艺术一应俱全。" }, tags: ["couple", "elders", "relaxed"], difficulty: "easy", coords: { lat: 46.2007, lon: 6.1444 } },
      { emoji: "🚋", name: "Carouge", reason: { de: "Mediterran anmutendes Künstlerviertel mit Cafés und Ateliers.", en: "A Mediterranean-feel artists' quarter full of cafés and studios.", zh: "地中海风情艺术家街区，咖啡馆与工作室林立。" }, tags: ["couple", "relaxed"], difficulty: "easy", coords: { lat: 46.1856, lon: 6.1389 } },
      { emoji: "🏔️", name: "Mont Salève (Seilbahn)", reason: { de: "Gleich hinter der Grenze in Frankreich: Panorama über Genf, See und Alpen.", en: "Just across the French border: a panorama over Geneva, the lake and the Alps.", zh: "跨过法国边境即达，可俯瞰日内瓦、湖泊与阿尔卑斯山全景。" }, tags: ["couple", "compact"], difficulty: "moderate", coords: { lat: 46.1922, lon: 6.1611 } }
    ],
    food: [
      { emoji: "🫕", dish: { de: "Fondue moitié-moitié", en: "Fondue moitié-moitié", zh: "半半奶酪火锅" }, restaurant: "Les Armures", note: { de: "Historisches Haus in der Altstadt, bekannt für prominente Gäste.", en: "A historic house in the old town, known for its famous guests.", zh: "老城历史建筑，以曾接待名人政要而闻名。" }, coords: { lat: 46.2015, lon: 6.1477 } },
      { emoji: "🐟", dish: { de: "Filets de perche", en: "Perch fillets (filets de perche)", zh: "白鲈鱼片" }, restaurant: "Buvette des Bains des Pâquis", note: { de: "Lässiges Seebad-Lokal direkt am Wasser.", en: "A relaxed lakeside bathing-house eatery right on the water.", zh: "湖畔浴场旁的悠闲餐馆，紧邻水边。" }, coords: { lat: 46.2098, lon: 6.1522 } },
      { emoji: "🥐", dish: { de: "Longeole-Wurst & Charcuterie", en: "Longeole sausage & charcuterie", zh: "隆若乔香肠与冷肉拼盘" }, restaurant: "Traditionelles Bistro in Carouge", note: { de: "Genfer Wurstspezialität, am besten in einem der Bistros in Carouge.", en: "A Geneva sausage specialty, best enjoyed in a Carouge bistro.", zh: "日内瓦本地香肠特色菜，最适合在卡鲁日的小酒馆里品尝。" }, coords: { lat: 46.1850, lon: 6.1395 } },
      { emoji: "🍫", dish: { de: "Genfer Schokolade", en: "Geneva chocolate", zh: "日内瓦巧克力" }, restaurant: "Chocolaterie Stettler", note: { de: "Traditionelle Genfer Chocolatier seit den 1920ern.", en: "A traditional Geneva chocolatier since the 1920s.", zh: "自1920年代起营业的传统日内瓦巧克力店。" }, coords: { lat: 46.2001, lon: 6.1467 } }
    ]
  },
  {
    id: "basel",
    canton: "BS",
    name: { de: "Basel", en: "Basel", zh: "巴塞尔" },
    region: { de: "Deutschschweiz", en: "German-speaking Switzerland", zh: "德语区" },
    coords: { lat: 47.5596, lon: 7.5886 },
    airport: {
      label: "EuroAirport Basel-Mulhouse-Freiburg (BSL)",
      coords: { lat: 47.5896, lon: 7.5299 },
      note: {
        de: "Der Flughafen liegt auf französischem Boden; Bus 50 fährt direkt zum Bahnhof SBB, ca. 20–30 Min.",
        en: "The airport is actually on French soil; bus 50 runs direct to Basel SBB station, ~20–30 min.",
        zh: "机场实际位于法国境内；50路巴士直达巴塞尔SBB火车站，约20-30分钟。"
      }
    },
    localTransit: {
      de: "BVB-Trams und -Busse decken die kompakte Innenstadt gut ab; viele Hotels geben eine kostenlose BaselCard aus.",
      en: "BVB trams and buses cover the compact city centre well; many hotels issue a free BaselCard.",
      zh: "BVB 电车与公交很好地覆盖了紧凑的市中心；许多酒店提供免费的巴塞尔卡。"
    },
    attractions: [
      { emoji: "🏛️", name: "Basler Münster", reason: { de: "Roter Sandsteindom mit Terrasse hoch über dem Rhein.", en: "Red sandstone cathedral with a terrace high above the Rhine.", zh: "红砂岩大教堂，露台俯瞰莱茵河。" }, tags: ["couple", "family", "elders", "relaxed", "compact"], difficulty: "easy", coords: { lat: 47.5585, lon: 7.5934 } },
      { emoji: "🎨", name: "Kunstmuseum Basel", reason: { de: "Die älteste öffentlich zugängliche Kunstsammlung der Welt.", en: "The oldest publicly accessible art collection in the world.", zh: "世界上最古老的对公众开放的艺术收藏馆。" }, tags: ["couple", "elders", "relaxed"], difficulty: "easy", coords: { lat: 47.5545, lon: 7.5897 } },
      { emoji: "🌊", name: "Rheinschwimmen & Uferpromenade", reason: { de: "Im Sommer treiben Einheimische mit dem Wickelfisch den Rhein hinunter – einzigartiges Baseler Erlebnis.", en: "In summer, locals float down the Rhine in a waterproof \"Wickelfisch\" bag — a uniquely Basel experience.", zh: "夏季当地人用防水袋顺莱茵河漂流——巴塞尔独有的体验。" }, tags: ["couple", "compact"], difficulty: "moderate", coords: { lat: 47.5615, lon: 7.5935 } },
      { emoji: "🕰️", name: "Rathaus & Marktplatz", reason: { de: "Leuchtend rotes Rathaus am belebten Marktplatz.", en: "The vividly red town hall on the lively market square.", zh: "鲜红色市政厅，坐落于热闹的集市广场。" }, tags: ["couple", "family", "elders", "relaxed"], difficulty: "easy", coords: { lat: 47.5585, lon: 7.5883 } },
      { emoji: "🧪", name: "Fondation Beyeler", reason: { de: "Weltklasse-Museum für moderne Kunst, etwas ausserhalb in Riehen.", en: "A world-class modern art museum, a short trip out in Riehen.", zh: "世界级现代艺术博物馆，位于稍远的里恩区。" }, tags: ["couple", "elders"], difficulty: "easy", coords: { lat: 47.5934, lon: 7.6217 } },
      { emoji: "🎪", name: "Zoo Basel (\"Zolli\")", reason: { de: "Einer der ältesten Zoos der Schweiz, mitten in der Stadt.", en: "One of Switzerland's oldest zoos, right in the city.", zh: "瑞士最古老的动物园之一，就在市中心。" }, tags: ["family"], difficulty: "easy", coords: { lat: 47.5495, lon: 7.5824 } }
    ],
    food: [
      { emoji: "🥣", dish: { de: "Basler Mehlsuppe", en: "Basel flour soup (Mehlsuppe)", zh: "巴塞尔面粉浓汤" }, restaurant: "Zum Goldenen Sternen", note: { de: "Eines der ältesten Restaurants der Schweiz, direkt am Rhein.", en: "One of Switzerland's oldest restaurants, right on the Rhine.", zh: "瑞士最古老的餐厅之一，坐落于莱茵河畔。" }, coords: { lat: 47.5559, lon: 7.5951 } },
      { emoji: "🍪", dish: { de: "Basler Läckerli", en: "Basler Läckerli (spiced honey biscuit)", zh: "巴塞尔蜂蜜香料饼干" }, restaurant: "Läckerli Huus", note: { de: "Die klassische Basler Confiserie für dieses Gebäck.", en: "The classic Basel confectioner for this treat.", zh: "巴塞尔经典甜点老店。" }, coords: { lat: 47.5567, lon: 7.5896 } },
      { emoji: "🐟", dish: { de: "Rheinfisch-Gerichte", en: "Rhine-style fish dishes", zh: "莱茵河风味鱼料理" }, restaurant: "Restaurant Kunsthalle Basel", note: { de: "Terrasse mit Blick auf den Theaterplatz.", en: "A terrace overlooking Theaterplatz.", zh: "露台可眺望剧院广场。" }, coords: { lat: 47.5544, lon: 7.5906 } },
      { emoji: "🧀", dish: { de: "Rösti & Käsegerichte", en: "Rösti & cheese classics", zh: "薯饼与奶酪经典菜" }, restaurant: "Restaurant Safran Zunft", note: { de: "Historisches Zunfthaus-Restaurant in der Altstadt.", en: "A historic guild-house restaurant in the old town.", zh: "老城内的历史行会餐厅。" }, coords: { lat: 47.5578, lon: 7.5892 } }
    ]
  },
  {
    id: "bern",
    canton: "BE",
    name: { de: "Bern", en: "Bern", zh: "伯尔尼" },
    region: { de: "Deutschschweiz, Bundesstadt", en: "German-speaking Switzerland, federal capital", zh: "德语区，联邦首都" },
    coords: { lat: 46.9480, lon: 7.4474 },
    airport: {
      label: "Bern-Belp (BRN) / meist via Zürich",
      coords: { lat: 46.9141, lon: 7.4971 },
      note: {
        de: "Bern-Belp ist klein mit wenigen Flügen; die meisten Reisenden kommen über den Flughafen Zürich (Zug ca. 1 Std. nach Bern).",
        en: "Bern-Belp is small with limited flights; most travellers arrive via Zürich Airport (train ~1 hour to Bern).",
        zh: "伯尔尼-贝尔普机场航班较少；多数旅客经苏黎世机场转乘火车抵达伯尔尼（约1小时）。"
      }
    },
    localTransit: {
      de: "Bernmobil-Trams und -Busse; die kompakte Altstadt lässt sich aber grösstenteils zu Fuss erkunden.",
      en: "Bernmobil trams and buses; the compact old town is mostly walkable, though.",
      zh: "Bernmobil 电车与公交发达；不过紧凑的老城区大部分可步行游览。"
    },
    attractions: [
      { emoji: "🐻", name: "BärenPark", reason: { de: "Freianlage für Berns Wappentier direkt an der Aare.", en: "An open-air park for Bern's heraldic bears, right on the Aare river.", zh: "位于阿勒河畔，为伯尔尼市徽动物棕熊设立的露天园区。" }, tags: ["family", "relaxed"], difficulty: "easy", coords: { lat: 46.9490, lon: 7.4632 } },
      { emoji: "🕰️", name: "Zytglogge", reason: { de: "Mittelalterlicher astronomischer Uhrturm im Herzen der Altstadt.", en: "A medieval astronomical clock tower in the heart of the old town.", zh: "老城中心的中世纪天文钟塔。" }, tags: ["couple", "family", "elders", "relaxed", "compact"], difficulty: "easy", coords: { lat: 46.9481, lon: 7.4475 } },
      { emoji: "🏞️", name: "Aare-Schwimmen", reason: { de: "Berühmtes Sommervergnügen: mit der Strömung durch die Stadt treiben.", en: "A famous summer pastime: floating with the current through the city.", zh: "夏季经典活动：顺着水流漂过整座城市。" }, tags: ["couple", "compact"], difficulty: "moderate", coords: { lat: 46.9526, lon: 7.4508 } },
      { emoji: "🏛️", name: "Bundeshaus", reason: { de: "Geführte Tour durchs Schweizer Parlamentsgebäude.", en: "A guided tour through the Swiss parliament building.", zh: "参观瑞士联邦议会大厦，跟随导览深入了解。" }, tags: ["couple", "elders"], difficulty: "easy", coords: { lat: 46.9465, lon: 7.4441 } },
      { emoji: "🌹", name: "Rosengarten", reason: { de: "Panoramablick auf die Altstadt, mit Bänken zum Verweilen.", en: "A panoramic view of the old town, with benches to linger on.", zh: "可俯瞰老城全景的玫瑰园，设有长椅供休憩。" }, tags: ["couple", "family", "elders", "relaxed"], difficulty: "easy", coords: { lat: 46.9503, lon: 7.4590 } },
      { emoji: "🎨", name: "Zentrum Paul Klee", reason: { de: "Museum für den Maler Paul Klee in markanter Architektur.", en: "A museum for painter Paul Klee in striking architecture.", zh: "为画家保罗·克利设立的博物馆，建筑设计极具特色。" }, tags: ["couple", "elders"], difficulty: "easy", coords: { lat: 46.9424, lon: 7.4726 } },
      { emoji: "🌉", name: "Lauben (Altstadt-Arkaden)", reason: { de: "UNESCO-Welterbe-Arkaden voller Läden, wetterunabhängig.", en: "UNESCO World Heritage arcades full of shops, rain or shine.", zh: "世界遗产拱廊街，店铺林立，不惧风雨。" }, tags: ["couple", "family", "elders", "relaxed", "compact"], difficulty: "easy", coords: { lat: 46.9474, lon: 7.4459 } }
    ],
    food: [
      { emoji: "🍲", dish: { de: "Berner Platte", en: "Berner Platte (meat & sauerkraut platter)", zh: "伯尔尼大拼盘（腌肉酸菜拼盘）" }, restaurant: "Kornhauskeller", note: { de: "Prunkvoller historischer Kornspeicher-Keller.", en: "A grand historic grain-cellar hall.", zh: "宏伟的历史谷仓地下大厅。" }, coords: { lat: 46.9483, lon: 7.4488 } },
      { emoji: "🍺", dish: { de: "Craft-Bier & Rösti", en: "Craft beer & Rösti", zh: "精酿啤酒与瑞士薯饼" }, restaurant: "Altes Tramdepot", note: { de: "Brauereigasthaus direkt beim Bärenpark.", en: "A brewery restaurant right next to the Bear Park.", zh: "紧邻熊苑的酿酒餐厅。" }, coords: { lat: 46.9491, lon: 7.4629 } },
      { emoji: "🧀", dish: { de: "Käsefondue", en: "Cheese fondue", zh: "奶酪火锅" }, restaurant: "Restaurant Della Casa", note: { de: "Traditionslokal, beliebt bei Einheimischen und Politikern.", en: "A traditional spot popular with locals and politicians alike.", zh: "深受本地人和政界人士喜爱的传统餐厅。" }, coords: { lat: 46.9459, lon: 7.4453 } },
      { emoji: "🍫", dish: { de: "Toblerone-Schokolade", en: "Toblerone chocolate", zh: "瑞士三角巧克力（Toblerone）" }, restaurant: "Confiserie Tschirren", note: { de: "Bern ist die Heimat der Toblerone-Marke.", en: "Bern is the birthplace of the Toblerone brand.", zh: "伯尔尼是瑞士三角巧克力品牌的发源地。" }, coords: { lat: 46.9469, lon: 7.4468 } }
    ]
  },
  {
    id: "lucerne",
    canton: "LU",
    name: { de: "Luzern", en: "Lucerne", zh: "琉森" },
    region: { de: "Deutschschweiz", en: "German-speaking Switzerland", zh: "德语区" },
    coords: { lat: 47.0502, lon: 8.3093 },
    airport: {
      label: "kein eigener Flughafen / via Zürich",
      note: {
        de: "Anreise meist über den Flughafen Zürich, danach Direktzug nach Luzern HB (ca. 45–50 Min.).",
        en: "Usually arrive via Zürich Airport, then a direct train to Luzern HB (~45–50 min).",
        zh: "通常经苏黎世机场抵达，再乘直达火车前往琉森中央车站（约45-50分钟）。"
      }
    },
    localTransit: {
      de: "VBL-Busse decken die Stadt ab; die Altstadt und der Seeuferbereich sind gut zu Fuss erreichbar.",
      en: "VBL buses cover the city; the old town and lakefront are easily walkable.",
      zh: "VBL 公交覆盖全城；老城与湖滨区域步行即可轻松到达。"
    },
    attractions: [
      { emoji: "🌉", name: "Kapellbrücke", reason: { de: "Berühmte gedeckte Holzbrücke mit Wasserturm, das Wahrzeichen der Stadt.", en: "The famous covered wooden bridge with its water tower, the city's icon.", zh: "著名的木质廊桥与水塔，琉森的城市地标。" }, tags: ["couple", "family", "elders", "relaxed", "compact"], difficulty: "easy", coords: { lat: 47.0512, lon: 8.3067 } },
      { emoji: "⛪", name: "Hofkirche", reason: { de: "Kirche mit markanten Doppeltürmen, nahe am Seeufer.", en: "A church with striking twin towers, close to the lakefront.", zh: "双塔醒目的教堂，紧邻湖岸。" }, tags: ["couple", "family", "elders", "relaxed"], difficulty: "easy", coords: { lat: 47.0538, lon: 8.3103 } },
      { emoji: "🦁", name: "Löwendenkmal", reason: { de: "Bewegendes Denkmal für gefallene Schweizer Gardisten, in einen Fels gehauen.", en: "A moving monument to fallen Swiss Guards, carved into a rock face.", zh: "为阵亡瑞士卫队士兵而建的感人纪念碑，直接雕刻于岩壁之上。" }, tags: ["couple", "family", "elders", "relaxed"], difficulty: "easy", coords: { lat: 47.0566, lon: 8.3103 } },
      { emoji: "🚡", name: "Mount Pilatus", reason: { de: "Steilste Zahnradbahn der Welt hinauf zum Panoramagipfel.", en: "The world's steepest cogwheel railway, up to a panoramic summit.", zh: "世界最陡齿轨铁路，直达全景山顶。" }, tags: ["couple", "compact"], difficulty: "moderate", coords: { lat: 46.9787, lon: 8.2540 } },
      { emoji: "🚠", name: "Mount Rigi", reason: { de: "\"Königin der Berge\" – sanftere Alternative zum Pilatus, per Schiff und Bahn erreichbar.", en: "The \"Queen of the Mountains\" — a gentler alternative to Pilatus, reached by boat and train.", zh: "\"山之女王\"——比皮拉图斯山更为平缓，需乘船和火车前往。" }, tags: ["family", "elders", "relaxed"], difficulty: "moderate", coords: { lat: 47.0567, lon: 8.4877 } },
      { emoji: "🖼️", name: "Sammlung Rosengart / KKL", reason: { de: "Kunstsammlung und markantes Kultur- und Kongresszentrum am See.", en: "An art collection and a striking lakeside culture & convention centre.", zh: "艺术收藏馆与湖畔标志性文化会议中心。" }, tags: ["couple", "elders"], difficulty: "easy", coords: { lat: 47.0503, lon: 8.3081 } },
      { emoji: "⛵", name: "Vierwaldstättersee-Rundfahrt", reason: { de: "Entspannte Schifffahrt mit Blick auf die umliegenden Berge.", en: "A relaxed boat cruise with views of the surrounding mountains.", zh: "轻松的湖上游船，可欣赏四周群山景色。" }, tags: ["family", "elders", "relaxed"], difficulty: "easy", coords: { lat: 47.0538, lon: 8.3057 } }
    ],
    food: [
      { emoji: "🥧", dish: { de: "Chügelipastete", en: "Chügelipastete (vol-au-vent with meat ragout)", zh: "琉森肉馅酥皮盒（Chügelipastete）" }, restaurant: "Wirtshaus Galliker", note: { de: "Beliebtes Traditionslokal abseits der Touristenpfade.", en: "A beloved traditional restaurant off the tourist track.", zh: "深受当地人喜爱的传统餐厅，游客较少涉足。" }, coords: { lat: 47.0489, lon: 8.3025 } },
      { emoji: "🍺", dish: { de: "Rösti & Bier", en: "Rösti & beer", zh: "瑞士薯饼与啤酒" }, restaurant: "Rathaus Brauerei", note: { de: "Hausbrauerei direkt bei der Kapellbrücke.", en: "A house brewery right by the Kapellbrücke.", zh: "紧邻卡佩尔桥的自酿啤酒餐厅。" }, coords: { lat: 47.0517, lon: 8.3059 } },
      { emoji: "🍦", dish: { de: "Eis & Kaffee am See", en: "Ice cream & coffee by the lake", zh: "湖畔冰淇淋与咖啡" }, restaurant: "Cafés an der Schwanenplatz-Promenade", note: { de: "Perfekt für eine Pause zwischen den Sehenswürdigkeiten.", en: "Perfect for a break between sights.", zh: "景点间歇小憩的绝佳选择。" }, coords: { lat: 47.0525, lon: 8.3084 } },
      { emoji: "🧀", dish: { de: "Fondue mit Folklore-Abend", en: "Fondue with a folklore evening", zh: "奶酪火锅配民俗表演之夜" }, restaurant: "Stadtkeller", note: { de: "Live-Alphorn und Jodel-Show zum Essen.", en: "Live alphorn and yodelling show with dinner.", zh: "用餐同时欣赏现场阿尔卑斯长号与约德尔歌表演。" }, coords: { lat: 47.0511, lon: 8.3072 } }
    ]
  },
  {
    id: "lugano",
    canton: "TI",
    name: { de: "Lugano", en: "Lugano", zh: "卢加诺" },
    region: { de: "Tessin (Italienische Schweiz)", en: "Ticino (Italian-speaking Switzerland)", zh: "提契诺（意大利语区）" },
    coords: { lat: 46.0037, lon: 8.9511 },
    airport: {
      label: "Aeroporto di Lugano (Agno) / oft via Zürich oder Mailand",
      coords: { lat: 46.0042, lon: 8.9103 },
      note: {
        de: "Der kleine Flughafen Agno hat einen Shuttlebus zur Stadt (ca. 15 Min.); viele reisen alternativ mit dem Zug via Zürich (ca. 2 Std. 45 durch den Gotthard) oder ab Mailand-Malpensa an.",
        en: "The small Agno airport has a shuttle bus to town (~15 min); many instead arrive by train via Zürich (~2h45 through the Gotthard) or from Milan-Malpensa.",
        zh: "小型阿尼奥机场有班车前往市区（约15分钟）；许多人选择经苏黎世乘火车穿越哥达隧道（约2小时45分）或从米兰马尔彭萨机场前来。"
      }
    },
    localTransit: {
      de: "TPL-Busse und die Standseilbahn zum Bahnhof; die Altstadt ist kompakt und gut zu Fuss erkundbar.",
      en: "TPL buses and the funicular up to the station; the old town is compact and easily walkable.",
      zh: "TPL 公交与通往火车站的缆车；老城紧凑，步行即可轻松游览。"
    },
    attractions: [
      { emoji: "⛪", name: "Cattedrale di San Lorenzo", reason: { de: "Renaissance-Fassade mit Blick über die Dächer zum See.", en: "A Renaissance façade with rooftop views down to the lake.", zh: "文艺复兴风格立面，屋顶视野可俯瞰湖景。" }, tags: ["couple", "family", "elders", "relaxed"], difficulty: "easy", coords: { lat: 46.0056, lon: 8.9494 } },
      { emoji: "🌊", name: "Lungolago", reason: { de: "Palmengesäumte Seepromenade mit mediterranem Flair.", en: "A palm-lined lakeside promenade with a Mediterranean feel.", zh: "棕榈树环绕的湖滨长廊，充满地中海风情。" }, tags: ["couple", "family", "elders", "relaxed", "compact"], difficulty: "easy", coords: { lat: 46.0021, lon: 8.9531 } },
      { emoji: "⛰️", name: "Monte San Salvatore", reason: { de: "Standseilbahn auf den markanten Kegelberg mit 360°-Panorama.", en: "A funicular up the distinctive cone-shaped peak for a 360° panorama.", zh: "缆车直达标志性锥形山峰，可欣赏360度全景。" }, tags: ["couple", "compact"], difficulty: "moderate", coords: { lat: 45.9749, lon: 8.9542 } },
      { emoji: "⛰️", name: "Monte Brè", reason: { de: "Sonnigster Berg der Schweiz, mit Künstlerdorf und Panoramaweg.", en: "Switzerland's sunniest mountain, with an artists' village and panoramic trail.", zh: "瑞士日照最充足的山，山上有艺术家村与全景步道。" }, tags: ["couple", "family"], difficulty: "moderate", coords: { lat: 45.9989, lon: 8.9767 } },
      { emoji: "🎨", name: "LAC Lugano Arte e Cultura", reason: { de: "Modernes Kultur- und Kunstzentrum direkt am See.", en: "A modern culture and art centre right on the lake.", zh: "湖畔现代文化艺术中心。" }, tags: ["couple", "elders", "relaxed"], difficulty: "easy", coords: { lat: 46.0034, lon: 8.9522 } },
      { emoji: "🏞️", name: "Parco Ciani", reason: { de: "Grosser Seepark mit Gärten, ideal zum Entspannen.", en: "A large lakeside park with gardens, ideal for unwinding.", zh: "大型湖滨公园，花园环绕，适合放松休憩。" }, tags: ["family", "elders", "relaxed"], difficulty: "easy", coords: { lat: 46.0027, lon: 8.9571 } },
      { emoji: "🛍️", name: "Via Nassa", reason: { de: "Elegante Einkaufsstrasse der Altstadt unter Arkaden.", en: "The old town's elegant arcaded shopping street.", zh: "老城优雅的拱廊购物街。" }, tags: ["couple", "family", "elders", "relaxed", "compact"], difficulty: "easy", coords: { lat: 46.0031, lon: 8.9503 } }
    ],
    food: [
      { emoji: "🍝", dish: { de: "Risotto ticinese", en: "Ticino-style risotto", zh: "提契诺风味烩饭" }, restaurant: "Ristorante Bottegone del Vino", note: { de: "Klassische Tessiner Trattoria mit grosser Weinauswahl.", en: "A classic Ticino trattoria with a large wine list.", zh: "经典提契诺小酒馆，酒单丰富。" }, coords: { lat: 46.0041, lon: 8.9498 } },
      { emoji: "🥓", dish: { de: "Luganighe-Wurst vom Grill", en: "Grilled luganighe sausage", zh: "烤卢加尼盖香肠" }, restaurant: "Traditionelles Grotto ausserhalb der Stadt", note: { de: "Rustikales Tessiner Grotto-Erlebnis unter Kastanienbäumen.", en: "A rustic Ticino \"grotto\" experience under chestnut trees.", zh: "栗树荫下的提契诺乡村石屋餐厅体验。" }, coords: { lat: 46.0110, lon: 8.9605 } },
      { emoji: "🍷", dish: { de: "Merlot del Ticino", en: "Merlot del Ticino wine tasting", zh: "提契诺美乐红酒品鉴" }, restaurant: "Enoteca in der Altstadt", note: { de: "Lokale Weinbar zum Verkosten der Tessiner Merlots.", en: "A local wine bar for tasting Ticino's Merlots.", zh: "老城内的本地酒吧，可品尝提契诺美乐红酒。" }, coords: { lat: 46.0044, lon: 8.9509 } },
      { emoji: "🍨", dish: { de: "Gelato am Lungolago", en: "Gelato on the Lungolago", zh: "湖滨长廊冰淇淋" }, restaurant: "Gelaterie an der Seepromenade", note: { de: "Italienisches Gelato mit Seeblick.", en: "Italian-style gelato with a lake view.", zh: "意式冰淇淋，坐拥湖景。" }, coords: { lat: 46.0018, lon: 8.9538 } }
    ]
  }
];

// Lighter-weight canton-capital entries: one headline sight + one food pick
// each, so the guide reaches (near-)full coverage of Switzerland's 26 cantons
// without the full depth of the flagship cities above.
window.SWISS_CANTON_CITIES = [
  {
    id: "fribourg", canton: "FR", light: true,
    name: { de: "Freiburg", en: "Fribourg", zh: "弗里堡" },
    region: { de: "Kanton Freiburg", en: "Canton of Fribourg", zh: "弗里堡州" },
    coords: { lat: 46.8065, lon: 7.1619 },
    blurb: { de: "Mittelalterliche Altstadt über der Saane, Sprachgrenze zwischen Deutsch und Französisch.", en: "A medieval old town above the Saane river, right on the German/French language border.", zh: "萨林河畔的中世纪老城，德语区与法语区的分界地带。" },
    topSight: { emoji: "⛪", name: "Cathédrale St-Nicolas", reason: { de: "Gotische Kathedrale mit Turmaufstieg über die Altstadt.", en: "A Gothic cathedral with a tower climb over the old town.", zh: "哥特式大教堂，登塔可俯瞰老城。" }, coords: { lat: 46.8062, lon: 7.1608 } },
    food: { emoji: "🧀", dish: { de: "Fondue fribourgeoise (Vacherin/Gruyère)", en: "Fondue fribourgeoise (Vacherin/Gruyère)", zh: "弗里堡奶酪火锅（瓦什兰/格鲁耶尔奶酪）" }, restaurant: "Restaurant in der Altstadt", note: { de: "Fribourg ist die Heimat von Gruyère und Vacherin.", en: "Fribourg is the home of Gruyère and Vacherin cheese.", zh: "弗里堡正是格鲁耶尔与瓦什兰奶酪的故乡。" }, coords: { lat: 46.8060, lon: 7.1620 } },
    transitNote: { de: "Kein eigener Flughafen; Anreise meist über Genf oder Zürich per Bahn (ca. 1–1.5 Std.). Kompakte Altstadt, gut zu Fuss erkundbar.", en: "No airport; usually reached by train from Geneva or Zürich (~1–1.5 h). The compact old town is easily walkable.", zh: "无自有机场；通常从日内瓦或苏黎世乘火车抵达（约1-1.5小时）。老城紧凑，步行即可游览。" }
  },
  {
    id: "solothurn", canton: "SO", light: true,
    name: { de: "Solothurn", en: "Solothurn", zh: "索洛图恩" },
    region: { de: "Kanton Solothurn", en: "Canton of Solothurn", zh: "索洛图恩州" },
    coords: { lat: 47.2088, lon: 7.5323 },
    blurb: { de: "Barockstadt der Zahl 11 — 11 Türme, 11 Brunnen, 11 Kirchen, so die lokale Legende.", en: "The baroque \"city of eleven\" — local legend counts 11 towers, 11 fountains, 11 churches.", zh: "巴洛克风格的\"数字11之城\"——当地传说中有11座塔、11座喷泉、11座教堂。" },
    topSight: { emoji: "⛪", name: "St.-Ursen-Kathedrale", reason: { de: "Prächtige Barockkathedrale im Herzen der Altstadt.", en: "A magnificent baroque cathedral in the heart of the old town.", zh: "老城中心的华丽巴洛克大教堂。" }, coords: { lat: 47.2079, lon: 7.5372 } },
    food: { emoji: "🍰", dish: { de: "Solothurner Torte", en: "Solothurner Torte (almond cake)", zh: "索洛图恩杏仁蛋糕" }, restaurant: "Konditorei in der Altstadt", note: { de: "Lokale Mandeltorten-Spezialität.", en: "A local almond-cake specialty.", zh: "本地特色杏仁蛋糕。" }, coords: { lat: 47.2083, lon: 7.5365 } },
    transitNote: { de: "Kein eigener Flughafen; gute Bahnverbindung ab Zürich oder Basel (ca. 1 Std.). Altstadt ist Fussgängerzone.", en: "No airport; good train links from Zürich or Basel (~1 h). The old town is pedestrian-friendly.", zh: "无自有机场；从苏黎世或巴塞尔乘火车约1小时可达。老城为步行区。" }
  },
  {
    id: "schaffhausen", canton: "SH", light: true,
    name: { de: "Schaffhausen", en: "Schaffhausen", zh: "沙夫豪森" },
    region: { de: "Kanton Schaffhausen", en: "Canton of Schaffhausen", zh: "沙夫豪森州" },
    coords: { lat: 47.6970, lon: 8.6304 },
    blurb: { de: "Altstadt mit der Munot-Festung, direkt neben dem grössten Wasserfall Europas.", en: "An old town with the circular Munot fortress, right next to Europe's largest waterfall.", zh: "拥有穆诺特圆形要塞的老城，紧邻欧洲最大瀑布。" },
    topSight: { emoji: "🌊", name: "Rheinfall", reason: { de: "Der grösste Wasserfall Europas, nur wenige Minuten von der Altstadt entfernt.", en: "Europe's largest waterfall, just minutes from the old town.", zh: "欧洲最大的瀑布，距老城仅几分钟车程。" }, coords: { lat: 47.6779, lon: 8.6152 } },
    food: { emoji: "🍷", dish: { de: "Hallauer Blauburgunder (Rotwein)", en: "Hallauer Pinot Noir (red wine)", zh: "哈劳产黑皮诺红酒" }, restaurant: "Weinstube in der Altstadt", note: { de: "Schaffhausen ist bekannt für Rotwein entlang des Rheins.", en: "Schaffhausen is known for red wine grown along the Rhine.", zh: "沙夫豪森以莱茵河沿岸出产的红酒闻名。" }, coords: { lat: 47.6975, lon: 8.6310 } },
    transitNote: { de: "Kein eigener Flughafen; ca. 45 Min. per Bahn ab Zürich. Munot und Altstadt gut zu Fuss erreichbar, Rheinfall per Bus oder kurzer Zugfahrt.", en: "No airport; ~45 min by train from Zürich. The Munot and old town are walkable; the Rheinfall is a short bus or train ride away.", zh: "无自有机场；从苏黎世乘火车约45分钟。穆诺特要塞与老城步行可达，莱茵瀑布需乘公交或短途火车。" }
  },
  {
    id: "stgallen", canton: "SG", light: true,
    name: { de: "St. Gallen", en: "St. Gallen", zh: "圣加仑" },
    region: { de: "Kanton St. Gallen", en: "Canton of St. Gallen", zh: "圣加仑州" },
    coords: { lat: 47.4245, lon: 9.3767 },
    blurb: { de: "UNESCO-Weltkulturerbe-Stiftsbezirk mit einer der ältesten Bibliotheken der Welt.", en: "A UNESCO World Heritage abbey district with one of the world's oldest libraries.", zh: "世界遗产修道院区，藏有世界最古老的图书馆之一。" },
    topSight: { emoji: "🏛️", name: "Stiftsbibliothek", reason: { de: "Barocke Bibliothekssaal mit jahrhundertealten Handschriften.", en: "A baroque library hall with centuries-old manuscripts.", zh: "巴洛克风格图书馆大厅，藏有数百年历史的手稿。" }, coords: { lat: 47.4238, lon: 9.3775 } },
    food: { emoji: "🌭", dish: { de: "St. Galler Bratwurst (ohne Senf!)", en: "St. Galler Bratwurst (traditionally without mustard!)", zh: "圣加仑白肠（传统上不蘸芥末！）" }, restaurant: "Wurst-Stand in der Altstadt", note: { de: "Ein Wahrzeichen der Stadt — Einheimische essen sie pur.", en: "A city icon — locals eat it plain, no mustard.", zh: "城市名片——当地人讲究不加芥末原味享用。" }, coords: { lat: 47.4239, lon: 9.3767 } },
    transitNote: { de: "Kein eigener Flughafen; ca. 1 Std. per Bahn ab Zürich. Altstadt kompakt, gut zu Fuss erkundbar.", en: "No airport; ~1 h by train from Zürich. The old town is compact and walkable.", zh: "无自有机场；从苏黎世乘火车约1小时。老城紧凑，步行可游览。" }
  },
  {
    id: "chur", canton: "GR", light: true,
    name: { de: "Chur", en: "Chur", zh: "库尔" },
    region: { de: "Kanton Graubünden", en: "Canton of Graubünden", zh: "格劳宾登州" },
    coords: { lat: 46.8499, lon: 9.5329 },
    blurb: { de: "Die älteste durchgehend besiedelte Stadt der Schweiz, Tor zu den Bündner Alpen.", en: "Switzerland's oldest continuously inhabited town, gateway to the Graubünden Alps.", zh: "瑞士历史最悠久、持续有人居住的城市，通往格劳宾登阿尔卑斯山的门户。" },
    topSight: { emoji: "⛪", name: "Kathedrale St. Mariä Himmelfahrt", reason: { de: "Romanisch-gotische Kathedrale in der historischen Altstadt.", en: "A Romanesque-Gothic cathedral in the historic old town.", zh: "位于历史老城中的罗马式-哥特式大教堂。" }, coords: { lat: 46.8508, lon: 9.5316 } },
    food: { emoji: "🥩", dish: { de: "Bündnerfleisch & Capuns", en: "Bündnerfleisch (air-dried beef) & Capuns", zh: "格劳宾登风干牛肉与卡普恩斯饺" }, restaurant: "Restaurant in der Altstadt", note: { de: "Die berühmteste Spezialität Graubündens.", en: "Graubünden's most famous specialty.", zh: "格劳宾登州最著名的特色美食。" }, coords: { lat: 46.8501, lon: 9.5310 } },
    transitNote: { de: "Kein eigener Flughafen; meist über Zürich per Bahn (ca. 1.5 Std.), Ausgangspunkt für Arosa/St. Moritz. Altstadt gut zu Fuss erreichbar.", en: "No airport; usually via Zürich by train (~1.5 h), a gateway to Arosa/St. Moritz. The old town is walkable.", zh: "无自有机场；通常经苏黎世乘火车抵达（约1.5小时），是前往阿罗萨/圣莫里茨的门户。老城步行可达。" }
  },
  {
    id: "sion", canton: "VS", light: true,
    name: { de: "Sitten", en: "Sion", zh: "锡永" },
    region: { de: "Kanton Wallis", en: "Canton of Valais", zh: "瓦莱州" },
    coords: { lat: 46.2311, lon: 7.3589 },
    blurb: { de: "Zwei Burghügel über der Rhone-Ebene, umgeben von Rebbergen.", en: "Two hilltop castles above the Rhône valley, surrounded by vineyards.", zh: "俯瞰罗纳河谷的双城堡山丘，四周葡萄园环绕。" },
    topSight: { emoji: "🏰", name: "Château de Valère", reason: { de: "Burg mit der ältesten noch spielbaren Orgel der Welt.", en: "A castle housing the world's oldest playable organ.", zh: "城堡内保存着世界上现存最古老的可演奏管风琴。" }, coords: { lat: 46.2298, lon: 7.3625 } },
    food: { emoji: "🧀", dish: { de: "Raclette du Valais & Trockenfleisch", en: "Raclette du Valais & dried meat", zh: "瓦莱风味烤奶酪与风干牛肉" }, restaurant: "Restaurant in der Altstadt", note: { de: "Das Wallis ist die historische Heimat der Raclette.", en: "Valais is the historic home of raclette.", zh: "瓦莱州正是烤奶酪（Raclette）的历史发源地。" }, coords: { lat: 46.2315, lon: 7.3595 } },
    transitNote: { de: "Kein eigener Flughafen; ca. 2 Std. per Bahn ab Genf. Burghügel per Fussweg, sonst kompakte Altstadt.", en: "No airport; ~2 h by train from Geneva. The castle hill is a walk up; otherwise a compact old town.", zh: "无自有机场；从日内瓦乘火车约2小时。城堡山需步行登顶，其余老城区紧凑。" }
  },
  {
    id: "lausanne", canton: "VD", light: true,
    name: { de: "Lausanne", en: "Lausanne", zh: "洛桑" },
    region: { de: "Kanton Waadt", en: "Canton of Vaud", zh: "沃州" },
    coords: { lat: 46.5197, lon: 6.6323 },
    blurb: { de: "Olympische Hauptstadt am Genfersee, gotische Kathedrale hoch über der Stadt.", en: "The Olympic capital on Lake Geneva, with a Gothic cathedral high above the city.", zh: "日内瓦湖畔的奥林匹克之都，哥特式大教堂高踞城市之上。" },
    topSight: { emoji: "🏛️", name: "Musée Olympique", reason: { de: "Sitz des IOC, interaktives Museum zur Olympia-Geschichte.", en: "Home of the IOC, an interactive museum on Olympic history.", zh: "国际奥委会总部所在地，互动式奥运历史博物馆。" }, coords: { lat: 46.5088, lon: 6.6349 } },
    food: { emoji: "🥔", dish: { de: "Papet vaudois", en: "Papet vaudois (leek & potato stew with sausage)", zh: "沃州韭葱土豆炖香肠" }, restaurant: "Restaurant in Ouchy", note: { de: "Das klassische Waadtländer Traditionsgericht.", en: "The classic traditional Vaud dish.", zh: "沃州经典传统家常菜。" }, coords: { lat: 46.5063, lon: 6.6273 } },
    transitNote: { de: "Genf Flughafen ca. 40 Min. per Bahn. TL-Metro (m1/m2) verbindet Bahnhof, Altstadt und Ouchy am See.", en: "Geneva Airport ~40 min by train. The TL metro (m1/m2) links the station, old town and lakeside Ouchy.", zh: "距日内瓦机场约40分钟火车车程。TL地铁（m1/m2线）连接火车站、老城与湖畔乌希区。" }
  },
  {
    id: "neuchatelcity", canton: "NE", light: true,
    name: { de: "Neuenburg", en: "Neuchâtel", zh: "纳沙泰尔" },
    region: { de: "Kanton Neuenburg", en: "Canton of Neuchâtel", zh: "纳沙泰尔州" },
    coords: { lat: 46.9900, lon: 6.9293 },
    blurb: { de: "\"Aus einem Stück Butter geschnitzt\", soll Alexandre Dumas über die gelbe Sandstein-Altstadt gesagt haben.", en: "Alexandre Dumas reportedly said it looked \"carved from a block of butter\" — the honey-coloured sandstone old town.", zh: "据说大仲马曾形容这座黄色砂岩老城\"像是从一块黄油上雕刻出来的\"。" },
    topSight: { emoji: "🏰", name: "Château de Neuchâtel", reason: { de: "Schloss und Kollegiatkirche hoch über dem See.", en: "A castle and collegiate church high above the lake.", zh: "俯瞰湖泊的城堡与教务教堂。" }, coords: { lat: 46.9915, lon: 6.9302 } },
    food: { emoji: "🧀", dish: { de: "Neuenburger Fondue (mit Weisswein)", en: "Neuchâtel fondue (made with local white wine)", zh: "纳沙泰尔奶酪火锅（配本地白葡萄酒）" }, restaurant: "Brasserie in der Altstadt", note: { de: "Neuenburg ist zudem für seine Uhrmacherei-Tradition bekannt.", en: "Neuchâtel is also renowned for its watchmaking tradition.", zh: "纳沙泰尔同时也以其钟表制造传统而闻名。" }, coords: { lat: 46.9906, lon: 6.9297 } },
    transitNote: { de: "Kein eigener Flughafen; ca. 40 Min. per Bahn ab Bern. Altstadt und Seepromenade gut zu Fuss erreichbar.", en: "No airport; ~40 min by train from Bern. The old town and lakeside promenade are walkable.", zh: "无自有机场；从伯尔尼乘火车约40分钟。老城与湖滨步道步行可达。" }
  },
  {
    id: "delemont", canton: "JU", light: true,
    name: { de: "Delsberg", en: "Delémont", zh: "德莱蒙" },
    region: { de: "Kanton Jura", en: "Canton of Jura", zh: "汝拉州" },
    coords: { lat: 47.3667, lon: 7.3444 },
    blurb: { de: "Hauptstadt des jüngsten Schweizer Kantons (seit 1979), Tor zur Pferdezucht-Region des Jura.", en: "Capital of Switzerland's youngest canton (since 1979), gateway to the Jura's horse-breeding country.", zh: "瑞士最年轻州（1979年建州）的首府，通往汝拉马术养殖地区的门户。" },
    topSight: { emoji: "🏛️", name: "Altstadt mit Türmen", reason: { de: "Barocke Altstadt mit historischen Stadttoren.", en: "A baroque old town with historic city gates.", zh: "巴洛克风格老城，保留着历史城门。" }, coords: { lat: 47.3653, lon: 7.3459 } },
    food: { emoji: "🧀", dish: { de: "Tête de Moine (mit der Girolle geschabt)", en: "Tête de Moine cheese (shaved with a Girolle)", zh: "修士头奶酪（用专用刨刀削成花瓣状）" }, restaurant: "Käserei/Restaurant in der Region", note: { de: "Das ikonische Jura-Käse-Erlebnis.", en: "The iconic Jura cheese experience.", zh: "汝拉州标志性的奶酪体验。" }, coords: { lat: 47.3660, lon: 7.3440 } },
    transitNote: { de: "Kein eigener Flughafen; ca. 1 Std. per Bahn ab Basel. Kleine, kompakte Altstadt.", en: "No airport; ~1 h by train from Basel. A small, compact old town.", zh: "无自有机场；从巴塞尔乘火车约1小时。老城小巧紧凑。" }
  },
  {
    id: "aarau", canton: "AG", light: true,
    name: { de: "Aarau", en: "Aarau", zh: "阿劳" },
    region: { de: "Kanton Aargau", en: "Canton of Aargau", zh: "阿尔高州" },
    coords: { lat: 47.3925, lon: 8.0442 },
    blurb: { de: "Bunte, bemalte Dachtraufen (\"Dachgeländer\") prägen die kompakte Altstadt an der Aare.", en: "Colourfully painted eaves (\"Dachgeländer\") mark the compact old town on the Aare river.", zh: "彩绘屋檐是这座阿勒河畔紧凑老城的显著特色。" },
    topSight: { emoji: "🌉", name: "Alte Holzbrücke & Altstadt", reason: { de: "Historische Gassen mit den charakteristischen bemalten Dachrinnen.", en: "Historic lanes with the town's signature painted eaves.", zh: "历史街巷，饰有标志性的彩绘屋檐。" }, coords: { lat: 47.3915, lon: 8.0455 } },
    food: { emoji: "🥕", dish: { de: "Aargauer Rüeblitorte", en: "Aargau carrot cake (Rüeblitorte)", zh: "阿尔高胡萝卜蛋糕" }, restaurant: "Konditorei in der Altstadt", note: { de: "Der Aargau gilt als Heimat dieses Schweizer Klassikers.", en: "Aargau is considered the home of this Swiss classic.", zh: "阿尔高州被视为这道瑞士经典甜点的发源地。" }, coords: { lat: 47.3920, lon: 8.0440 } },
    transitNote: { de: "Kein eigener Flughafen; ca. 30 Min. per Bahn ab Zürich. Altstadt sehr kompakt und autofrei.", en: "No airport; ~30 min by train from Zürich. The old town is very compact and car-free.", zh: "无自有机场；从苏黎世乘火车约30分钟。老城非常紧凑，无车通行。" }
  },
  {
    id: "frauenfeld", canton: "TG", light: true,
    name: { de: "Frauenfeld", en: "Frauenfeld", zh: "弗劳恩费尔德" },
    region: { de: "Kanton Thurgau", en: "Canton of Thurgau", zh: "图尔高州" },
    coords: { lat: 47.5584, lon: 8.8993 },
    blurb: { de: "Kleine Kantonshauptstadt inmitten von Obstgärten, nahe dem Bodensee.", en: "A small cantonal capital amid orchards, close to Lake Constance.", zh: "位于果园环绕之中的小型州府，临近博登湖。" },
    topSight: { emoji: "🏰", name: "Schloss Frauenfeld", reason: { de: "Mittelalterliches Schloss über der Murg, heute Museum.", en: "A medieval castle above the Murg river, now a museum.", zh: "俯瞰穆尔格河的中世纪城堡，现为博物馆。" }, coords: { lat: 47.5597, lon: 8.8985 } },
    food: { emoji: "🍎", dish: { de: "Thurgauer Most & Apfelspezialitäten", en: "Thurgau cider (\"Most\") & apple specialties", zh: "图尔高苹果酒与苹果特色美食" }, restaurant: "Mosterei/Hofladen in der Region", note: { de: "Der Thurgau ist die grösste Apfelanbau-Region der Schweiz.", en: "Thurgau is Switzerland's largest apple-growing region.", zh: "图尔高州是瑞士最大的苹果种植区。" }, coords: { lat: 47.5580, lon: 8.9000 } },
    transitNote: { de: "Kein eigener Flughafen; ca. 30 Min. per Bahn ab Zürich. Kleine, gut zu Fuss erkundbare Altstadt.", en: "No airport; ~30 min by train from Zürich. A small, walkable old town.", zh: "无自有机场；从苏黎世乘火车约30分钟。老城小巧，步行可游览。" }
  },
  {
    id: "zugcity", canton: "ZG", light: true,
    name: { de: "Zug", en: "Zug", zh: "楚格" },
    region: { de: "Kanton Zug", en: "Canton of Zug", zh: "楚格州" },
    coords: { lat: 47.1662, lon: 8.5155 },
    blurb: { de: "Kleine Seestadt am Zugersee, bekannt für ihre niedrigen Steuern und die Kirschtorte.", en: "A small lakeside town on Lake Zug, known for low taxes and its cherry cake.", zh: "楚格湖畔小城，以低税率与樱桃蛋糕闻名。" },
    topSight: { emoji: "🕰️", name: "Zytturm", reason: { de: "Farbiger Uhrturm, das Wahrzeichen der Altstadt.", en: "A colourful clock tower, the old town's landmark.", zh: "色彩斑斓的钟楼，老城地标。" }, coords: { lat: 47.1717, lon: 8.5155 } },
    food: { emoji: "🍰", dish: { de: "Zuger Kirschtorte", en: "Zuger Kirschtorte (cherry cake)", zh: "楚格樱桃蛋糕" }, restaurant: "Konditorei in der Altstadt", note: { de: "Weltberühmte Zuger Spezialität.", en: "A world-famous Zug specialty.", zh: "享誉世界的楚格特色甜点。" }, coords: { lat: 47.1665, lon: 8.5150 } },
    transitNote: { de: "Kein eigener Flughafen; ca. 25 Min. per Bahn ab Zürich. Seepromenade und Altstadt gut zu Fuss erreichbar.", en: "No airport; ~25 min by train from Zürich. The lakeside promenade and old town are walkable.", zh: "无自有机场；从苏黎世乘火车约25分钟。湖滨步道与老城步行可达。" }
  },
  {
    id: "altdorf", canton: "UR", light: true,
    name: { de: "Altdorf", en: "Altdorf", zh: "阿尔特多夫" },
    region: { de: "Kanton Uri", en: "Canton of Uri", zh: "乌里州" },
    coords: { lat: 46.8802, lon: 8.6414 },
    blurb: { de: "Die Heimat der Wilhelm-Tell-Legende, am Fusse der Gotthard-Route.", en: "The home of the William Tell legend, at the foot of the Gotthard route.", zh: "威廉·退尔传说的故乡，坐落在圣哥达山口脚下。" },
    topSight: { emoji: "🏛️", name: "Tell-Denkmal", reason: { de: "Statue zu Ehren des Schweizer Nationalhelden auf dem Hauptplatz.", en: "A statue honouring Switzerland's national hero on the main square.", zh: "主广场上纪念瑞士民族英雄的雕像。" }, coords: { lat: 46.8809, lon: 8.6428 } },
    food: { emoji: "🧀", dish: { de: "Urner Alpkäse", en: "Uri alpine cheese", zh: "乌里高山奶酪" }, restaurant: "Alpkäserei/Restaurant vor Ort", note: { de: "Einfache, herzhafte Alpkost.", en: "Simple, hearty alpine fare.", zh: "朴实浓郁的高山美食。" }, coords: { lat: 46.8800, lon: 8.6410 } },
    transitNote: { de: "Kein eigener Flughafen; ca. 1 Std. per Bahn ab Zürich (Gotthard-Achse). Kleines, zu Fuss erkundbares Dorfzentrum.", en: "No airport; ~1 h by train from Zürich (Gotthard axis). A small, walkable village centre.", zh: "无自有机场；从苏黎世乘火车约1小时（圣哥达轴线）。村中心小巧，步行可游览。" }
  },
  {
    id: "schwyzcity", canton: "SZ", light: true,
    name: { de: "Schwyz", en: "Schwyz", zh: "施维茨" },
    region: { de: "Kanton Schwyz", en: "Canton of Schwyz", zh: "施维茨州" },
    coords: { lat: 47.0207, lon: 8.6531 },
    blurb: { de: "Der Kanton, der der ganzen Schweiz ihren Namen gab.", en: "The canton that gave Switzerland its name.", zh: "整个瑞士国名的由来正是这个州。" },
    topSight: { emoji: "🏛️", name: "Bundesbriefmuseum", reason: { de: "Museum mit dem Bundesbrief von 1291, der Gründungsurkunde der Eidgenossenschaft.", en: "A museum housing the 1291 Federal Charter, the founding document of the Confederation.", zh: "馆藏1291年《联邦宪章》原件，瑞士联邦的建国文献。" }, coords: { lat: 47.0212, lon: 8.6524 } },
    food: { emoji: "🧀", dish: { de: "Schwyzer Alpkäse", en: "Schwyz alpine cheese", zh: "施维茨高山奶酪" }, restaurant: "Restaurant in der Altstadt", note: { de: "Traditionelle Innerschweizer Alpkost.", en: "Traditional central-Swiss alpine fare.", zh: "瑞士中部传统高山美食。" }, coords: { lat: 47.0200, lon: 8.6535 } },
    transitNote: { de: "Kein eigener Flughafen; ca. 1 Std. per Bahn ab Zürich. Kompakte, zu Fuss erkundbare Altstadt.", en: "No airport; ~1 h by train from Zürich. A compact, walkable old town.", zh: "无自有机场；从苏黎世乘火车约1小时。老城紧凑，步行可游览。" }
  },
  {
    id: "stans", canton: "NW", light: true,
    name: { de: "Stans", en: "Stans", zh: "施坦斯" },
    region: { de: "Kanton Nidwalden", en: "Canton of Nidwalden", zh: "下瓦尔登州" },
    coords: { lat: 46.9581, lon: 8.3667 },
    blurb: { de: "Kleine Kantonshauptstadt, Tor zum Stanserhorn mit der offenen \"CabriO\"-Seilbahn.", en: "A small cantonal capital, gateway to the Stanserhorn and its unique open-top \"CabriO\" cable car.", zh: "小型州府，通往施坦瑟霍恩山的门户，山上有独特的敞篷\"CabriO\"缆车。" },
    topSight: { emoji: "🚡", name: "Stanserhorn CabriO", reason: { de: "Weltweit einzigartige Seilbahn mit offenem Oberdeck und Panoramablick.", en: "A cable car with a unique open-top deck and panoramic views.", zh: "全球独一无二的敞篷双层缆车，全景视野。" }, coords: { lat: 46.9247, lon: 8.3628 } },
    food: { emoji: "🧀", dish: { de: "Nidwaldner Alpkäse", en: "Nidwalden alpine cheese", zh: "下瓦尔登高山奶酪" }, restaurant: "Bergrestaurant Stanserhorn", note: { de: "Alpkäse mit Panoramablick geniessen.", en: "Enjoy alpine cheese with a panoramic view.", zh: "在全景视野中享用高山奶酪。" }, coords: { lat: 46.9250, lon: 8.3620 } },
    transitNote: { de: "Kein eigener Flughafen; ca. 1 Std. per Bahn ab Zürich via Luzern. Zentrum klein und zu Fuss erkundbar.", en: "No airport; ~1 h by train from Zürich via Lucerne. The centre is small and walkable.", zh: "无自有机场；经琉森从苏黎世乘火车约1小时。中心区小巧，步行可游览。" }
  },
  {
    id: "glarus", canton: "GL", light: true,
    name: { de: "Glarus", en: "Glarus", zh: "格拉鲁斯" },
    region: { de: "Kanton Glarus", en: "Canton of Glarus", zh: "格拉鲁斯州" },
    coords: { lat: 47.0406, lon: 9.0672 },
    blurb: { de: "Nach dem grossen Brand von 1861 im Rastermuster wiederaufgebaut, umringt von steilen Bergen.", en: "Rebuilt on a grid plan after the great fire of 1861, ringed by steep mountains.", zh: "1861年大火后按棋盘式规划重建，四周高山环绕。" },
    topSight: { emoji: "⛰️", name: "Glärnisch-Panorama", reason: { de: "Dramatische Bergkulisse direkt über der Stadt.", en: "A dramatic mountain backdrop right above the town.", zh: "小城正上方壮观的山脉背景。" }, coords: { lat: 47.0350, lon: 9.0650 } },
    food: { emoji: "🥧", dish: { de: "Glarner Pastete / Zigerkrapfen", en: "Glarner pastry with Schabziger cheese", zh: "格拉鲁斯什布奇格奶酪馅饼" }, restaurant: "Bäckerei in der Altstadt", note: { de: "Herzhaftes Gebäck mit dem würzigen Schabziger-Käse.", en: "A savoury pastry with tangy Schabziger cheese.", zh: "使用风味独特的什布奇格奶酪制作的咸味糕点。" }, coords: { lat: 47.0410, lon: 9.0670 } },
    transitNote: { de: "Kein eigener Flughafen; ca. 1.5 Std. per Bahn ab Zürich. Kompaktes Zentrum, gut zu Fuss erkundbar.", en: "No airport; ~1.5 h by train from Zürich. A compact centre, easily walkable.", zh: "无自有机场；从苏黎世乘火车约1.5小时。中心区紧凑，步行可游览。" }
  },
  {
    id: "appenzell", canton: "AI", light: true,
    name: { de: "Appenzell", en: "Appenzell", zh: "阿彭策尔" },
    region: { de: "Kanton Appenzell Innerrhoden", en: "Canton of Appenzell Innerrhoden", zh: "内阿彭策尔州" },
    coords: { lat: 47.3315, lon: 9.4104 },
    blurb: { de: "Bunt bemalte Fachwerkhäuser und die traditionelle Landsgemeinde per Handzeichen.", en: "Colourfully painted timber houses and the traditional Landsgemeinde open-air vote by show of hands.", zh: "色彩斑斓的木结构房屋，以及传统的\"举手表决\"露天州民大会。" },
    topSight: { emoji: "🏘️", name: "Hauptgasse", reason: { de: "Bunte, kunstvoll bemalte Häuserfassaden im Dorfzentrum.", en: "Colourful, elaborately painted house façades in the village centre.", zh: "村中心色彩缤纷、装饰精美的房屋立面。" }, coords: { lat: 47.3312, lon: 9.4095 } },
    food: { emoji: "🧀", dish: { de: "Appenzeller Käse & Biber", en: "Appenzeller cheese & Biber (spiced honey pastry)", zh: "阿彭策尔奶酪与蜂蜜香料饼" }, restaurant: "Käserei/Bäckerei im Dorf", note: { de: "Zwei Wahrzeichen der Appenzeller Küche.", en: "Two icons of Appenzell cuisine.", zh: "阿彭策尔美食的两大标志。" }, coords: { lat: 47.3318, lon: 9.4100 } },
    transitNote: { de: "Kein eigener Flughafen; ca. 1.5 Std. per Bahn ab Zürich via St. Gallen (Appenzellerbahn). Dorf klein und zu Fuss erkundbar.", en: "No airport; ~1.5 h by train from Zürich via St. Gallen (the Appenzell railway). The village is small and walkable.", zh: "无自有机场；经圣加仑从苏黎世乘火车（阿彭策尔铁路）约1.5小时。村庄小巧，步行可游览。" }
  },
  {
    id: "herisau", canton: "AR", light: true,
    name: { de: "Herisau", en: "Herisau", zh: "黑里绍" },
    region: { de: "Kanton Appenzell Ausserrhoden", en: "Canton of Appenzell Ausserrhoden", zh: "外阿彭策尔州" },
    coords: { lat: 47.3853, lon: 9.2793 },
    blurb: { de: "Historisches Zentrum der Textil- und Stickereiindustrie, umgeben von grünen Hügeln.", en: "A historic hub of the textile and embroidery industry, ringed by green hills.", zh: "曾是纺织与刺绣产业中心，四周绿丘环绕。" },
    topSight: { emoji: "🏛️", name: "Altstadt Herisau", reason: { de: "Gepflegtes Ortszentrum mit Textilerbe.", en: "A well-kept town centre with a textile heritage.", zh: "保存完好的小镇中心，承载纺织业历史。" }, coords: { lat: 47.3856, lon: 9.2792 } },
    food: { emoji: "🧀", dish: { de: "Appenzeller Spezialitäten", en: "Appenzell regional specialties", zh: "阿彭策尔地方特色美食" }, restaurant: "Restaurant im Zentrum", note: { de: "Käse- und Wurstspezialitäten der Region.", en: "Regional cheese and sausage specialties.", zh: "地区特色奶酪与香肠。" }, coords: { lat: 47.3850, lon: 9.2790 } },
    transitNote: { de: "Kein eigener Flughafen; ca. 1.5 Std. per Bahn ab Zürich via St. Gallen. Zentrum klein und zu Fuss erkundbar.", en: "No airport; ~1.5 h by train from Zürich via St. Gallen. The centre is small and walkable.", zh: "无自有机场；经圣加仑从苏黎世乘火车约1.5小时。中心区小巧，步行可游览。" }
  },
  {
    id: "liestal", canton: "BL", light: true,
    name: { de: "Liestal", en: "Liestal", zh: "利斯塔尔" },
    region: { de: "Kanton Basel-Landschaft", en: "Canton of Basel-Landschaft", zh: "巴塞尔乡村州" },
    coords: { lat: 47.4849, lon: 7.7343 },
    blurb: { de: "Bekannt für das nächtliche Chienbäse-Feuerfest und Kirschanbau im Baselbiet.", en: "Known for the nocturnal Chienbäse fire festival and cherry orchards of the Basel countryside.", zh: "以夜间举行的\"Chienbäse\"篝火节和巴塞尔乡村的樱桃种植闻名。" },
    topSight: { emoji: "🏛️", name: "Oberes Tor", reason: { de: "Historisches Stadttor am Eingang zur Altstadt.", en: "A historic city gate at the entrance to the old town.", zh: "老城入口处的历史城门。" }, coords: { lat: 47.4845, lon: 7.7350 } },
    food: { emoji: "🍒", dish: { de: "Baselbieter Kirsch-Spezialitäten", en: "Basel-Landschaft cherry specialties", zh: "巴塞尔乡村樱桃特色美食" }, restaurant: "Hofladen/Restaurant in der Region", note: { de: "Das Baselbiet ist bekannt für seine Kirschbäume.", en: "The Basel countryside is known for its cherry orchards.", zh: "巴塞尔乡村以其樱桃果园而闻名。" }, coords: { lat: 47.4840, lon: 7.7345 } },
    transitNote: { de: "Kein eigener Flughafen; ca. 15 Min. per Bahn ab Basel. Kleines Zentrum, gut zu Fuss erkundbar.", en: "No airport; ~15 min by train from Basel. A small centre, easily walkable.", zh: "无自有机场；从巴塞尔乘火车约15分钟。中心区小巧，步行可游览。" }
  },
  {
    id: "sarnencity", canton: "OW", light: true,
    name: { de: "Sarnen", en: "Sarnen", zh: "萨尔嫩" },
    region: { de: "Kanton Obwalden", en: "Canton of Obwalden", zh: "上瓦尔登州" },
    coords: { lat: 46.8987, lon: 8.2456 },
    blurb: { de: "Kleine Seestadt am Sarnersee, Tor zu Melchsee-Frutt und dem Titlis-Gebiet.", en: "A small lakeside town on Sarnersee, gateway to Melchsee-Frutt and the Titlis area.", zh: "萨尔嫩湖畔小城，通往梅尔希湖-弗鲁特与铁力士山区域的门户。" },
    topSight: { emoji: "🏛️", name: "Schlosshügel Landenberg", reason: { de: "Historischer Burghügel mit Blick über Sarnen und den See.", en: "A historic castle hill overlooking Sarnen and the lake.", zh: "历史城堡山，俯瞰萨尔嫩镇与湖泊。" }, coords: { lat: 46.8974, lon: 8.2444 } },
    food: { emoji: "🧀", dish: { de: "Obwaldner Alpkäse", en: "Obwalden alpine cheese", zh: "上瓦尔登高山奶酪" }, restaurant: "Café in der Altstadt", note: { de: "Einfache, herzhafte Alpkost der Region.", en: "Simple, hearty regional alpine fare.", zh: "朴实浓郁的地方高山美食。" }, coords: { lat: 46.8985, lon: 8.2460 } },
    transitNote: { de: "Kein eigener Flughafen; ca. 1 Std. per Bahn ab Luzern. Zentrum klein, Seepromenade gut zu Fuss erreichbar.", en: "No airport; ~1 h by train from Lucerne. A small centre with a walkable lakeside promenade.", zh: "无自有机场；从琉森乘火车约1小时。中心区小巧，湖滨步道步行可达。" }
  },
  {
    id: "bellinzona", canton: "TI", light: true,
    name: { de: "Bellinzona", en: "Bellinzona", zh: "贝林佐纳" },
    region: { de: "Kanton Tessin (Hauptstadt)", en: "Canton of Ticino (capital)", zh: "提契诺州（首府）" },
    coords: { lat: 46.1944, lon: 9.0175 },
    blurb: { de: "Die Tessiner Kantonshauptstadt mit drei UNESCO-Welterbe-Burgen, die das Tal bewachen.", en: "Ticino's cantonal capital, with three UNESCO World Heritage castles guarding the valley.", zh: "提契诺州首府，三座联合国教科文组织世界遗产城堡守护着山谷。" },
    topSight: { emoji: "🏰", name: "Castelgrande", reason: { de: "Die grösste der drei Burgen, hoch über der Altstadt.", en: "The largest of the three castles, high above the old town.", zh: "三座城堡中最大的一座，俯瞰老城。" }, coords: { lat: 46.1936, lon: 9.0206 } },
    food: { emoji: "🍝", dish: { de: "Risotto & Polenta ticinese", en: "Ticino-style risotto & polenta", zh: "提契诺风味烩饭与玉米糊" }, restaurant: "Grotto in der Altstadt", note: { de: "Klassische Tessiner Küche mit lokalem Merlot.", en: "Classic Ticino cuisine paired with local Merlot.", zh: "经典提契诺美食，搭配本地美乐红酒。" }, coords: { lat: 46.1940, lon: 9.0180 } },
    transitNote: { de: "Nächster Flughafen Lugano-Agno (ca. 30 Min.) oder Mailand-Malpensa; direkte Bahn ab Zürich via Gotthard (ca. 2.5 Std.). Burgen per Fussweg oder Bus erreichbar.", en: "Nearest airport is Lugano-Agno (~30 min) or Milan-Malpensa; direct train from Zürich via the Gotthard (~2.5 h). The castles are reached on foot or by bus.", zh: "最近机场为卢加诺-阿尼奥机场（约30分钟）或米兰马尔彭萨机场；从苏黎世经圣哥达直达火车约2.5小时。城堡可步行或乘公交前往。" }
  }
];
