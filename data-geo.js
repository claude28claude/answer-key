/* THE ANSWER KEY — data-geo.js
   Geography: from the Himalayas to climate, soils and vegetation.

   WHY THE HIMALAYAS CARRY THE SUBJECT. In an SSC paper the Himalayas supply
   more geography questions than any other single topic, and they supply them in
   four fixed shapes: which range, which peak and how high, which pass connects
   what to what, and which river rises where. Everything here is arranged around
   those four shapes.

   ONE FIGURE THAT IS GENUINELY CONTESTED. The height of Everest was revised to
   8,848.86 m in December 2020 by Nepal and China jointly; the older 8,848 m is
   still in circulation and still appears as an option. Both are given.

   HEIGHTS AND LENGTHS MOVE BY SMALL AMOUNTS between sources — a peak's height by
   a metre or two, a glacier's length by a kilometre or two, a range's length by
   a hundred kilometres depending on where it is taken to end. The figure used
   in the standard textbooks is given, and where the disagreement is large
   enough to matter, both figures are given.                                  */

(window.SUBJECTS = window.SUBJECTS || []).push({

id:"geo", n:"Geography", tab:"Geography", sub:"Physical geography, climate and environment",
w:"India's physical divisions, the Himalayas, the Northern Plains, the Peninsular Plateau, coasts and islands, rivers, climate, soils and natural vegetation.",
intro:"The physical divisions first, then the Himalayas in full detail, then the other landforms — the Northern Plains, the Peninsular Plateau, the coasts and islands. After the land, the rivers, the climate, the soils and the vegetation.",

topics:[

/* ===================================================================== 1 */
{id:"divisions", n:"India's physical divisions", hy:1,
 w:"The six divisions, and the numbers that anchor the whole subject.",
 quick:[
  "India's area is `3,287,263` sq km — **2.4 per cent** of the world's land area, and the **seventh largest** country.",
  "The mainland runs from `8°4'N` to `37°6'N` and `68°7'E` to `97°25'E`. Including the islands, the southern limit is `6°45'N` (Indira Point).",
  "The **Tropic of Cancer (23°30'N)** passes through **eight** states: Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram.",
  "`82°30'E` is the **Standard Meridian**, passing through **Mirzapur** in Uttar Pradesh; IST is **UTC + 5:30**.",
  "The land frontier is `15,200` km; the coastline of the mainland is `6,100` km, and `7,516.6` km including the islands."
 ],
 blocks:[
  {h:"The six physiographic divisions",
   cols:["Division","Roughly how much of India","The point that is asked"],
   rows:[
    ["**The Northern and North-Eastern Mountains**","About 11 per cent","The Himalayas and the Purvanchal. **Young fold mountains**, still rising, tectonically active"],
    ["**The Northern Plains**","About 43 per cent of the plains area","Built from the alluvium of the Indus, Ganga and Brahmaputra. Divided into **Bhabar**, **Terai**, **Bhangar** (older alluvium, with kankar) and **Khadar** (newer alluvium, renewed each flood)"],
    ["**The Peninsular Plateau**","The largest division","The oldest landmass in India, part of **Gondwana**. Includes the Deccan Trap, the Malwa and Chotanagpur plateaus, the Aravallis, the Vindhyas, the Satpuras and both Ghats"],
    ["**The Indian Desert (Thar)**","Western Rajasthan","Barchan dunes; the **Luni** is its only significant river; rainfall under 150 mm"],
    ["**The Coastal Plains**","East and west coasts","The **Eastern** coastal plain is wider, with deltas (Mahanadi, Godavari, Krishna, Kaveri). The **Western** is narrower, with estuaries, lagoons and no large deltas"],
    ["**The Islands**","Two groups","**Andaman and Nicobar** — of volcanic and tectonic origin, in the Bay of Bengal. **Lakshadweep** — coral atolls, in the Arabian Sea"]
   ]},

  {careful:"**The Meghalaya plateau is not Himalayan.** The Garo, Khasi and Jaintia hills are a detached block of the **Peninsular Plateau**, separated from the Chotanagpur plateau by the **Malda gap**. They sit next to the north-eastern Himalayas and are constantly mistaken for part of them."},

  {h:"The numbers that anchor everything",
   swap:[
    ["Area","3,287,263 sq km","2.4% of the world's land; 7th largest country"],
    ["Latitudinal extent","8°4'N to 37°6'N","30° 4' — about 3,214 km north to south"],
    ["Longitudinal extent","68°7'E to 97°25'E","29° 18' — about 2,933 km east to west"],
    ["Standard Meridian","82°30'E","Through **Mirzapur**, Uttar Pradesh. IST = UTC + 5:30"],
    ["Southernmost point of India","**Indira Point**, 6°45'N","Great Nicobar. Formerly Pygmalion Point; submerged in the 2004 tsunami"],
    ["Southernmost point of the mainland","**Kanyakumari**, 8°4'N",""],
    ["Northernmost point","**Indira Col**","In the Siachen region"],
    ["Land frontier","15,200 km",""],
    ["Coastline","6,100 km mainland; 7,516.6 km with islands","**Gujarat** has the longest coastline of any state"],
    ["Longest land border with","**Bangladesh**, 4,096.7 km","Then China 3,488 km, Pakistan 3,323 km, Nepal 1,751 km, Myanmar 1,643 km, Bhutan 699 km, Afghanistan 106 km"]
   ]},

  {h:"The states the Tropic of Cancer crosses, west to east",
   list:[
    "**Gujarat** — **Rajasthan** — **Madhya Pradesh** — **Chhattisgarh** — **Jharkhand** — **West Bengal** — **Tripura** — **Mizoram**. Eight in all.",
    "A mnemonic in that order: *Gujarat Rajasthan Made Chhattisgarh Jharkhand West Tripura Mizoram*.",
    "It does **not** pass through Bihar, Odisha or Assam, which are the standard wrong options."
   ]}
 ]},

/* ===================================================================== 2 */
{id:"himalaya-form", n:"The Himalayas — formation and the three ranges", hy:1,
 w:"How they were made, and the three parallel ranges from north to south.",
 quick:[
  "The Himalayas are **young fold mountains**, raised by the collision of the **Indian plate** with the **Eurasian plate**, which closed the **Tethys Sea**.",
  "Length about `2,400` km (some sources 2,500), in an **arc**. Width `400` km in Kashmir narrowing to about `150` km in Arunachal.",
  "Three parallel ranges, north to south: **Himadri** (Greater), **Himachal** (Lesser), **Shivaliks** (Outer).",
  "Every peak above `8,000` m is in the **Himadri**. The **Shivaliks** are the youngest and lowest, made of unconsolidated sediment, which is why they slide.",
  "The longitudinal valleys between the Shivaliks and the Lesser Himalayas are called **duns** or **doons** — Dehra Dun is the largest."
 ],
 blocks:[
  {h:"How they were formed",
   list:[
    "About 200 million years ago the supercontinent **Pangaea** split into **Laurasia (Angara)** in the north and **Gondwana** in the south, with the **Tethys Sea** between them.",
    "The **Indian plate** broke off Gondwana and drifted north, and its sediments piled up in the Tethys geosyncline.",
    "The collision with the **Eurasian plate**, beginning about 50 to 70 million years ago, buckled those sediments upward. The mountains are therefore **folded sedimentary rock**, and marine fossils are found near their summits.",
    "**Three phases of upheaval** are recognised: the **Greater Himalayas** rose first, in the Eocene; the **Lesser Himalayas** in the Miocene; the **Shivaliks** last, in the Pliocene and Pleistocene — which is why they are the softest and the most landslide-prone.",
    "The collision has not stopped. The Himalayas are still rising by a few millimetres a year, and the whole belt is **seismically active** — Zones IV and V of India's seismic map."
   ]},

  {h:"The three parallel ranges, north to south",
   cols:["Range","Average height","What defines it"],
   rows:[
    ["**Himadri** — Greater or Inner Himalayas","**About 6,100 m**, width 120–190 km","The **most continuous** of the three, and the highest. **All the 8,000 m peaks are here.** Folds are **asymmetrical**, with a steep southern face. Perennially snow-bound, and the source of every great Himalayan glacier"],
    ["**Himachal** — Lesser or Middle Himalayas","**3,700–4,500 m**, width about 50 km","Highly compressed and altered rock. Carries the **hill stations** — Shimla, Mussoorie, Nainital, Ranikhet, Darjeeling. Its ranges: the **Pir Panjal** (the longest), the **Dhauladhar** in Himachal, the **Nag Tibba** and **Mussoorie** ranges, and the **Mahabharat** in Nepal"],
    ["**Shivaliks** — Outer Himalayas","**900–1,100 m**, width 10–50 km","The **youngest and lowest**. Built of **unconsolidated gravel, sand and clay** brought down by the rivers — which makes them highly erodible and the belt where landslides happen. Called the **Jammu Hills** in Jammu and the **Dafla, Miri, Abor and Mishmi** hills in the east"]
   ]},

  {h:"The Trans-Himalayas",
   p:"North of the Greater Himalayas, and separated from them by the Indus and Satluj valleys. Also called the **Tibetan Himalaya**, because they are built largely of Tibetan sediment. About 1,000 km east to west, 40 km wide at the ends and up to 222 km in the middle.",
   cols:["Range","Detail"],
   rows:[
    ["**Karakoram**","The northernmost. Holds **K2** and the great glaciers — **Siachen, Baltoro, Biafo, Hispar**. Called the backbone of High Asia"],
    ["**Ladakh range**","Between the Indus and the Shyok. **Khardung La** crosses it"],
    ["**Zaskar range**","South of the Ladakh range, between the Indus and the Great Himalayas. The Kashmir valley lies between the **Zaskar** and the **Pir Panjal**"],
    ["**Kailash range**","In Tibet — an offshoot of the Ladakh range. **Mount Kailash** and **Lake Mansarovar** are here, and the Indus, Satluj and Brahmaputra all rise in the neighbourhood"]
   ]},

  {h:"The duns",
   list:[
    "A **dun** (or doon) is a flat-floored **longitudinal valley** lying between the Shivaliks and the Lesser Himalayas, formed when a lake behind the rising Shivaliks silted up and drained.",
    "**Dehra Dun** is the largest — about 75 km long and 15 to 20 km wide.",
    "Others: **Kotli Dun**, **Patli Dun**, **Udhampur** and **Kota**.",
    "Do not confuse a **dun** with a **duar**. The **Duars** are the plains at the foot of the Bhutan and eastern Himalayas, in West Bengal and Assam — tea country, not a valley between two ranges."
   ]},

  {h:"Why the Himalayas matter physically",
   list:[
    "**A climatic divide.** They block the cold, dry winds of Central Asia from entering India in winter, and they force the south-west monsoon to rise and shed its rain — which is why the northern plains get rain at all and why Tibet is a desert.",
    "**A watershed.** The three great river systems — **Indus, Ganga, Brahmaputra** — all rise in or beyond them, and are **perennial** because they are fed by snowmelt as well as rain.",
    "**Two syntaxial bends.** The range turns sharply south at **Nanga Parbat** in the west and at **Namcha Barwa** in the east — the two hairpin ends of the arc.",
    "**The snow line is lower in the east than in the west** — about **4,000 m** in the eastern Himalayas against **5,800 to 6,000 m** in the western — because the eastern Himalayas get far heavier precipitation. This runs against the instinct that the higher latitude of the west should lower it, which is exactly why it is asked.",
    "**Vegetation by altitude:** tropical deciduous → **subtropical pine (chir)** → temperate (**oak, deodar, blue pine**) → **alpine** (silver fir, birch, juniper, rhododendron) → tundra above the tree line."
   ]}
 ]},

/* ===================================================================== 3 */
{id:"himalaya-regions", n:"The four Himalayan regions, west to east", hy:1,
 w:"Punjab, Kumaon, Nepal and Assam Himalaya — divided by rivers, and what is in each.",
 quick:[
  "The four regions are divided by rivers: **Indus to Satluj** = Punjab (Kashmir) Himalaya; **Satluj to Kali** = Kumaon; **Kali to Teesta** = Nepal; **Teesta to Dihang** = Assam Himalaya.",
  "The **Nepal Himalaya** is the highest section, and holds Everest, Kanchenjunga, Makalu and Dhaulagiri.",
  "**Karewas** are the lake deposits of the Kashmir valley, and are what **saffron** is grown on, at Pampore.",
  "**Ladakh** and **Spiti** are **cold deserts** — inside the Himalayas but in the rain shadow of the Great Himalayan range.",
  "Beyond the Dihang gorge the mountains turn south as the **Purvanchal** — Patkai Bum, Naga Hills, Manipur Hills, Mizo Hills."
 ],
 blocks:[
  {h:"The four regions",
   cols:["Region","Between","Length","What is in it"],
   rows:[
    ["**Punjab (Kashmir) Himalaya**","**Indus and Satluj**","About 560 km","Also called the Kashmir or Himachal Himalaya. Contains the **Karakoram, Ladakh, Zaskar and Pir Panjal** ranges; the **Kashmir valley** with its **Karewas**; the **Dal** and **Wular** lakes; the cold desert of **Ladakh**; the shrines of **Vaishno Devi** and **Amarnath**. Passes: **Zoji La, Banihal, Photu La, Khardung La, Rohtang, Shipki La, Baralacha La**"],
    ["**Kumaon Himalaya**","**Satluj and Kali**","About 320 km","Uttarakhand. The **Garhwal** section in the west, **Kumaon** in the east. Peaks **Nanda Devi, Kamet, Trishul, Badrinath, Kedarnath**; the sources of the **Ganga (Gangotri)** and **Yamuna (Yamunotri)**; the **bugyals**, or alpine meadows; the **Valley of Flowers**. Passes: **Mana, Niti, Lipulekh**"],
    ["**Nepal Himalaya**","**Kali and Teesta**","About 800 km","The **highest** section. **Everest, Kanchenjunga, Makalu, Dhaulagiri, Annapurna, Cho Oyu**. Its Indian portion is **Sikkim** and the Darjeeling hills. Passes: **Nathu La, Jelep La**"],
    ["**Assam Himalaya**","**Teesta and Dihang (Brahmaputra)**","About 720 km","Bhutan and **Arunachal Pradesh**. Peaks **Namcha Barwa, Kangto**. The eastern hills of the Dafla, Miri, Abor and Mishmi. Passes: **Bomdi La, Diphu, Pangsau**"]
   ]},

  {h:"The Purvanchal — where the Himalayas turn south",
   p:"Past the **Dihang gorge**, the mountains bend sharply south and run down India's eastern border. Lower than the Himalayas, thickly forested, and mostly composed of sandstone.",
   cols:["Hills","State","Highest point"],
   rows:[
    ["**Patkai Bum**","Arunachal Pradesh and the Myanmar border","Forms the border with Myanmar. **Pangsau Pass** crosses it"],
    ["**Naga Hills**","Nagaland","**Saramati, 3,826 m** — the highest point of the Purvanchal"],
    ["**Barail range**","Between Nagaland and Manipur",""],
    ["**Manipur Hills**","Manipur","Enclose the Manipur valley and **Loktak Lake**, with its floating phumdis and the Keibul Lamjao National Park"],
    ["**Mizo (Lushai) Hills**","Mizoram","**Phawngpui, the Blue Mountain, 2,157 m**"],
    ["Mikir and Rengma Hills","Assam",""]
   ]},

  {h:"The valleys asked by name",
   cols:["Valley","Where","Note"],
   rows:[
    ["**Kashmir valley**","Between the **Pir Panjal** and the **Zaskar**","Filled with **Karewas** — old lake deposits, on which **saffron** is grown at Pampore"],
    ["**Nubra valley**","Ladakh","Reached over **Khardung La**; the Shyok and Nubra rivers meet here"],
    ["**Lahaul and Spiti**","Himachal Pradesh","**Cold desert**, in the rain shadow. The Chandra and Bhaga meet at Tandi to form the Chenab"],
    ["**Kullu and Kangra**","Himachal Pradesh","Kangra is a longitudinal trough at the foot of the Dhauladhar"],
    ["**Sangla (Baspa) valley**","Kinnaur, Himachal Pradesh",""],
    ["**Doon valley**","Uttarakhand","The largest of the duns"],
    ["**Valley of Flowers**","Chamoli, Uttarakhand","A **UNESCO World Heritage Site** together with **Nanda Devi National Park**. Discovered by Frank Smythe in 1931"],
    ["**Yumthang valley**","North Sikkim","Called the valley of flowers of Sikkim; rhododendron sanctuary"],
    ["**Dzukou valley**","On the Nagaland–Manipur border",""],
    ["**Markha valley**","Ladakh",""]
   ]},

  {h:"The Himalayan World Heritage Sites",
   cols:["Site","State","Listed"],
   rows:[
    ["**Nanda Devi and Valley of Flowers National Parks**","Uttarakhand","1988, extended 2005 — natural"],
    ["**Great Himalayan National Park**","Kullu, Himachal Pradesh","2014 — natural"],
    ["**Khangchendzonga National Park**","Sikkim","2016 — India's first and only **mixed** (natural and cultural) World Heritage Site"],
    ["Mountain Railways of India","Darjeeling, Kalka-Shimla, Nilgiri","1999–2008 — cultural. The **Darjeeling Himalayan Railway** was the first of the three"]
   ]}
 ]},

/* ===================================================================== 4 */
{id:"peaks", n:"The peaks", hy:1,
 w:"Every peak asked, with its height, its range, and whether it is in India.",
 quick:[
  "**Mount Everest — `8,848.86` m**, revised jointly by Nepal and China in December `2020`. The older figure of `8,848` m still appears as an option.",
  "**Kanchenjunga, `8,586` m**, is the **highest peak in India** as ordinarily answered, and the **third highest in the world**.",
  "**K2 (Godwin-Austen), `8,611` m**, the **second highest in the world**, lies in the part of Kashmir under Pakistan's control. India claims it, so some sources call it India's highest — this is the trap.",
  "**Nanda Devi, `7,816` m**, is the highest peak **entirely within Indian-administered territory** and the second-highest in India.",
  "**Anamudi, `2,695` m** (Kerala) is the highest peak in **South India** and in the **Western Ghats**."
 ],
 blocks:[
  {h:"The world's highest, and where India stands",
   cols:["Peak","Height","Range and country"],
   rows:[
    ["**1. Mount Everest**","**8,848.86 m**","Great Himalaya, **Nepal–China**. *Sagarmatha* in Nepali, *Chomolungma* in Tibetan. Named after **Sir George Everest**, Surveyor General of India"],
    ["**2. K2 (Godwin-Austen)**","**8,611 m**","**Karakoram**, in Gilgit-Baltistan under Pakistan's control and claimed by India. Also called Qogir"],
    ["**3. Kanchenjunga**","**8,586 m**","Great Himalaya, **India (Sikkim)–Nepal**. The name means the five treasures of the great snow"],
    ["4. Lhotse","8,516 m","Nepal–China"],
    ["5. Makalu","8,485 m","Nepal–China"],
    ["6. Cho Oyu","8,188 m","Nepal–China"],
    ["7. Dhaulagiri","8,167 m","**Nepal** — the highest peak lying wholly within one country other than China"],
    ["8. Manaslu","8,163 m","Nepal"],
    ["9. Nanga Parbat","8,126 m","**Karakoram/Himalaya**, in Pakistan-administered Kashmir. Called the Killer Mountain"],
    ["10. Annapurna","8,091 m","Nepal — the first 8,000 m peak ever climbed, in 1950"]
   ],
   note:"There are **fourteen** peaks above 8,000 m in the world, and every one of them is in the Himalaya or the Karakoram."},

  {careful:"**'The highest peak in India' has two defensible answers and the exam expects one of them.** If Pakistan-administered Kashmir is counted as Indian territory — which the Government of India's position requires — the answer is **K2, 8,611 m**. If the question means territory India actually administers, the answer is **Kanchenjunga, 8,586 m**. Most SSC keys have used **Kanchenjunga**. If the question says *entirely within India*, the answer is **Nanda Devi, 7,816 m**, because Kanchenjunga straddles the Nepal border."},

  {h:"The peaks in India",
   cols:["Peak","Height","Where"],
   rows:[
    ["**K2 (Godwin-Austen)**","8,611 m","Karakoram — in the part of Kashmir under Pakistan's control"],
    ["**Kanchenjunga**","8,586 m","**Sikkim**, on the Nepal border"],
    ["**Nanda Devi**","7,816 m","**Uttarakhand** — the highest **entirely** within India"],
    ["**Kamet**","7,756 m","Uttarakhand, on the Tibet border"],
    ["Saltoro Kangri","7,742 m","Karakoram, Ladakh"],
    ["Saser Kangri","7,672 m","Karakoram, Ladakh"],
    ["Mamostong Kangri","7,516 m","Karakoram, Ladakh"],
    ["Rimo I","7,385 m","Karakoram, Ladakh"],
    ["Trishul","7,120 m","Uttarakhand — the first peak over 7,000 m ever climbed, in 1907"],
    ["**Namcha Barwa**","7,782 m","On the Arunachal–Tibet border. The **eastern syntaxial bend**; the Brahmaputra takes its great U-turn around it"],
    ["Kangto","7,060 m","Arunachal Pradesh — the state's highest"],
    ["Nun Kun","7,135 m","Zaskar range, Ladakh"],
    ["Badrinath and Kedarnath peaks","7,138 m and 6,940 m","Uttarakhand"],
    ["Gurla Mandhata","7,728 m","Tibet, visible from Lipulekh"]
   ]},

  {h:"The highest point of each range and region",
   cols:["Range or region","Highest point","Height"],
   rows:[
    ["**Western Ghats / South India**","**Anamudi**, Kerala","**2,695 m**"],
    ["**Nilgiris**","**Doda Betta**","2,637 m"],
    ["Karnataka","**Mullayanagiri**, Chikmagalur","1,930 m"],
    ["Tamil Nadu","Doda Betta","2,637 m"],
    ["**Eastern Ghats**","**Arma Konda (Jindhagada Peak)**, Andhra Pradesh","1,690 m"],
    ["Odisha","**Deomali**","1,672 m"],
    ["**Aravalli**","**Guru Shikhar**, Mount Abu, Rajasthan","1,722 m"],
    ["**Satpura**","**Dhupgarh**, Pachmarhi, Madhya Pradesh","1,350 m"],
    ["Maikal / Amarkantak","Amarkantak — source of the Narmada and the Son","1,048 m"],
    ["**Purvanchal / Nagaland**","**Saramati**","3,826 m"],
    ["Mizoram","**Phawngpui (Blue Mountain)**","2,157 m"],
    ["Meghalaya","**Shillong Peak**","1,965 m"],
    ["Manipur","Mount Iso / Tempü","2,994 m"],
    ["Andaman and Nicobar","**Saddle Peak**, North Andaman","732 m"],
    ["**India's only active volcano**","**Barren Island**, Andaman","354 m"]
   ]}
 ]},

/* ===================================================================== 5 */
{id:"passes", n:"The passes", hy:1,
 w:"Every pass asked, with what it connects to what — the highest-frequency Himalayan question there is.",
 quick:[
  "**Zoji La** connects **Srinagar to Kargil and Leh**. **Banihal** connects **Jammu to Srinagar** (through the Jawahar Tunnel).",
  "**Rohtang** connects **Kullu to Lahaul-Spiti**, and the **Atal Tunnel** runs beneath it. **Shipki La** is where the **Satluj enters India**.",
  "**Nathu La** and **Jelep La** connect **Sikkim to Tibet**; Nathu La is on the old silk route and was reopened for trade in `2006`.",
  "**Lipulekh** is the pass on the **Kailash Mansarovar** route, at the tri-junction of India, Nepal and China.",
  "**Diphu Pass** is the tri-junction of **India, Myanmar and China**; **Pangsau Pass** carries the old **Stilwell Road** into Myanmar."
 ],
 blocks:[
  {h:"Jammu and Kashmir, and Ladakh",
   cols:["Pass","Range","Connects"],
   rows:[
    ["**Zoji La (Zojila)**","Great Himalaya","**Srinagar to Kargil and Leh**, on NH-1. Snowbound in winter; the Zojila tunnel is under construction to keep it open"],
    ["**Banihal Pass**","**Pir Panjal**","**Jammu to Srinagar**. The **Jawahar Tunnel** runs beneath it, which is what keeps the valley connected in winter"],
    ["**Khardung La**","**Ladakh range**","**Leh to the Nubra valley** and on towards Siachen. One of the highest motorable passes in the world"],
    ["**Chang La**","Ladakh range","**Leh to Pangong Tso**"],
    ["**Photu La (Fotu La)**","**Zaskar range**","The **highest point on the Srinagar–Leh highway**"],
    ["Namika La","Zaskar range","On the Srinagar–Leh highway, before Fotu La"],
    ["**Karakoram Pass**","**Karakoram**","**Ladakh to Xinjiang, China**. On the ancient caravan route; the highest pass on the old silk route"],
    ["Aghil Pass","Karakoram","North of **K2**, into Tibet"],
    ["**Pir Panjal Pass**","Pir Panjal","The traditional route from Jammu to the Kashmir valley, closed since Partition"],
    ["Burzil Pass","Great Himalaya","Srinagar to Gilgit"],
    ["Lanak La","Ladakh","Ladakh to Lhasa, Tibet"],
    ["Sia La and Bilafond La","Saltoro, Karakoram","On the Siachen glacier front"]
   ]},

  {h:"Himachal Pradesh",
   cols:["Pass","Connects"],
   rows:[
    ["**Rohtang Pass**","**Kullu valley to Lahaul and Spiti**. The **Atal Tunnel**, opened in 2020, runs under it — the world's longest highway tunnel above 10,000 feet"],
    ["**Shipki La**","**Himachal Pradesh to Tibet**. The **Satluj enters India** here"],
    ["**Baralacha La**","On the **Manali–Leh highway**, joining Lahaul to Ladakh"],
    ["**Kunzum Pass**","**Lahaul to Spiti**"],
    ["Debsa Pass","Kullu to Spiti"]
   ]},

  {h:"Uttarakhand",
   cols:["Pass","Connects"],
   rows:[
    ["**Mana Pass**","**Uttarakhand to Tibet**, beyond Badrinath. Among the highest vehicle-accessible passes in the world"],
    ["**Niti Pass**","Uttarakhand to Tibet, in Chamoli"],
    ["**Lipulekh Pass**","The **Kailash Mansarovar** pilgrimage route. At the **tri-junction of India, Nepal and China**, and the subject of a boundary dispute with Nepal"],
    ["Muling La","Uttarakhand to Tibet, near Gangotri"],
    ["Traill's Pass","Across the Nanda Devi sanctuary rim"]
   ]},

  {h:"Sikkim and Arunachal Pradesh",
   cols:["Pass","State","Connects"],
   rows:[
    ["**Nathu La**","**Sikkim**","**Sikkim to the Chumbi valley, Tibet**. Part of the old **silk route**; closed after 1962 and **reopened for trade in 2006**"],
    ["**Jelep La**","Sikkim","Sikkim to Lhasa, through the Chumbi valley"],
    ["Donkha La","Sikkim","Sikkim to Tibet"],
    ["**Bomdi La**","**Arunachal Pradesh**","Arunachal to **Lhasa, Tibet**"],
    ["**Diphu Pass**","Arunachal Pradesh","At the **tri-junction of India, Myanmar and China**"],
    ["**Pangsau Pass (Hell Pass)**","Arunachal Pradesh","**Arunachal to Myanmar**, on the old **Stilwell Road** of the Second World War"],
    ["Yonggyap, Kumjawng, Hpungan","Arunachal Pradesh","Into Tibet and Myanmar"]
   ]},

  {h:"The passes that are not in the Himalayas",
   p:"Asked in the same set, and worth keeping apart.",
   cols:["Pass or gap","Range","Connects"],
   rows:[
    ["**Palakkad (Palghat) Gap**","**Western Ghats**","**Coimbatore to Kochi** — the largest break in the Western Ghats, about 24 to 30 km wide. Carries both road and rail"],
    ["**Shencottah (Senkottai) Gap**","Western Ghats","Kollam to Madurai — the second major gap"],
    ["**Thal Ghat**","Western Ghats","**Mumbai to Nashik**"],
    ["**Bhor Ghat**","Western Ghats","**Mumbai to Pune**"],
    ["Naneghat","Western Ghats","An ancient Satavahana-period trade route"],
    ["**Haldighati**","**Aravalli**","The pass in Rajasthan where the 1576 battle was fought"],
    ["Goran Ghat","Aravalli","Udaipur to Sirohi"],
    ["Asirgarh","**Satpura**","The historic gateway from the north into the Deccan"]
   ]},

  {careful:"**Zoji La and Jelep La are at opposite ends of the country.** *Zoji La* is in Ladakh, on the Srinagar–Leh road. *Jelep La* is in Sikkim, on the road to Lhasa. The *-la* ending simply means pass in Tibetan, so almost every Himalayan pass has it, and the names are easy to swap under time pressure."}
 ]},

/* ===================================================================== 6 */
{id:"glaciers-rivers", n:"Glaciers and the Himalayan rivers", hy:1,
 w:"The glaciers by length, the three river systems, and the confluences that get asked.",
 quick:[
  "**Siachen** (Karakoram, about `76` km) is the **longest glacier in India** and the longest outside the polar regions after Tajikistan's Fedchenko.",
  "The **Ganga** begins at **Devprayag**, where the **Bhagirathi** (from **Gangotri**, at **Gaumukh**) meets the **Alaknanda**. Neither river is called the Ganga above that point.",
  "The **Indus** is the longest of the three systems — about `3,180` km, of which only about `1,114` km is in India.",
  "The **Brahmaputra** rises as the **Yarlung Tsangpo**, turns around **Namcha Barwa**, enters India as the **Siang or Dihang**, and leaves as the **Jamuna** in Bangladesh.",
  "The **Kosi** is the **Sorrow of Bihar**; the **Damodar** was the Sorrow of Bengal; the **Brahmaputra** is the Sorrow of Assam."
 ],
 blocks:[
  {h:"The glaciers",
   cols:["Glacier","Where","Length and note"],
   rows:[
    ["**Siachen**","**Karakoram**, Ladakh","About **76 km** — the **longest in India**. The world's highest battlefield"],
    ["**Baltoro**","Karakoram","About 62 km"],
    ["**Biafo** and **Hispar**","Karakoram","About 63 km and 49 km; together they form one of the longest ice corridors outside the poles"],
    ["**Gangotri**","Uttarakhand","About **30 km** — the source of the **Bhagirathi**, at the snout called **Gaumukh**"],
    ["**Zemu**","Sikkim, on Kanchenjunga","About 26 km — the **largest in the eastern Himalayas**, and a source of the Teesta"],
    ["**Bara Shigri**","Lahaul, Himachal Pradesh","About 27 km — the **largest in Himachal Pradesh**"],
    ["**Yamunotri**","Uttarakhand, Bandarpunch","The source of the **Yamuna**"],
    ["**Chorabari**","Kedarnath, Uttarakhand","The source of the **Mandakini**"],
    ["**Satopanth** and **Bhagirath Kharak**","Uttarakhand","Sources of the **Alaknanda**"],
    ["**Milam, Pindari, Kafni**","Kumaon, Uttarakhand","Pindari is the source of the **Pindar**, which joins the Alaknanda at Karnaprayag"],
    ["**Drang Drung (Durung Drung)**","Zanskar, Ladakh","The second largest in Ladakh after Siachen"],
    ["Machoi, Kolahoi","Kashmir","Kolahoi feeds the Jhelum"]
   ],
   note:"The **Fedchenko** glacier, often offered as an option, is in **Tajikistan**, not India — and it, not Siachen, is the longest outside the polar regions."},

  {h:"The Indus system",
   cols:["River","Rises at","Note"],
   rows:[
    ["**Indus (Sindhu)**","**Bokhar Chu**, near **Lake Mansarovar**, Tibet","About **3,180 km** in all; only about **1,114 km** in India. Enters India in Ladakh, near Demchok. Called the **Singi Khamban**, the lion's mouth, in Tibet"],
    ["**Jhelum**","**Verinag** spring, Anantnag, Kashmir","Flows through the Kashmir valley and **Wular Lake**; joins the Chenab at Trimmu in Pakistan. **Srinagar** stands on it"],
    ["**Chenab**","**Tandi**, Himachal Pradesh, where the **Chandra** and **Bhaga** meet","Hence also called the **Chandrabhaga**. The **largest tributary of the Indus** by volume"],
    ["**Ravi**","Near **Rohtang**, Kullu hills, Himachal Pradesh","The smallest of the five Punjab rivers. **Lahore** and Amritsar lie in its basin"],
    ["**Beas**","**Beas Kund**, near Rohtang","The only one of the five that flows **entirely within India**. Joins the Satluj at Harike"],
    ["**Satluj**","**Rakas Tal**, near Lake Mansarovar, Tibet","An **antecedent** river — older than the Himalayas, which it cuts through in a gorge. Enters India at **Shipki La**. The **Bhakra Nangal** dam is on it"]
   ]},

  {h:"The Indus Waters Treaty, 1960",
   list:[
    "Signed on **19 September 1960** at Karachi by **Jawaharlal Nehru** and **Ayub Khan**, brokered by the **World Bank**.",
    "**India** gets the three **eastern** rivers — **Ravi, Beas, Satluj** — for unrestricted use.",
    "**Pakistan** gets the three **western** rivers — **Indus, Jhelum, Chenab** — with India permitted limited non-consumptive, domestic and run-of-the-river hydro use.",
    "Roughly **20 per cent** of the total water is India's share and 80 per cent Pakistan's.",
    "A **Permanent Indus Commission** with one commissioner from each country administers it."
   ]},

  {h:"The Ganga system",
   cols:["","Detail"],
   rows:[
    ["Where it begins","At **Devprayag**, where the **Bhagirathi** meets the **Alaknanda**. The Bhagirathi comes from the **Gangotri** glacier at **Gaumukh**; the Alaknanda from the Satopanth and Bhagirath Kharak glaciers"],
    ["Length","About **2,525 km** — the **longest river wholly within India**, and the largest river basin in India"],
    ["**The Panch Prayag**","**Vishnuprayag** (Alaknanda + Dhauliganga), **Nandprayag** (+ Nandakini), **Karnaprayag** (+ Pindar), **Rudraprayag** (+ Mandakini), **Devprayag** (+ Bhagirathi)"],
    ["Enters the plains at","**Haridwar**"],
    ["**Left-bank tributaries**","**Ramganga, Gomti, Ghaghara, Gandak, Burhi Gandak, Kosi, Mahananda**"],
    ["**Right-bank tributaries**","**Yamuna** (its longest tributary), **Tons, Son, Punpun**"],
    ["The Yamuna","Rises at the **Yamunotri** glacier on **Bandarpunch**. Joins the Ganga at **Prayagraj**. Its own tributaries are the **Chambal, Sind, Betwa** and **Ken** from the peninsular plateau on the right, and the **Hindon** and **Tons** on the left — **Tons is the Yamuna's longest tributary**"],
    ["The Kosi","The **Sorrow of Bihar** — it shifts its course drastically and floods. Formed by the Sun Kosi, Arun and Tamur in Nepal"],
    ["Below Farakka","Splits: the **Bhagirathi-Hooghly** goes south into West Bengal; the main stream enters Bangladesh as the **Padma**"],
    ["The delta","The **Sundarbans**, the world's largest delta, shared with Bangladesh. A UNESCO World Heritage Site and a Ramsar site"]
   ]},

  {h:"The Brahmaputra system",
   cols:["","Detail"],
   rows:[
    ["Rises at","The **Chemayungdung glacier**, in the **Kailash range** near Lake Mansarovar, Tibet"],
    ["In Tibet","Called the **Yarlung Tsangpo**. Flows east for about 1,200 km, parallel to the Himalayas"],
    ["The Great Bend","Turns sharply south around **Namcha Barwa** — the **eastern syntaxial bend** — and cuts a gorge deeper than the Grand Canyon"],
    ["In India","Enters Arunachal Pradesh as the **Siang** or **Dihang**. Joined by the **Dibang** and the **Lohit** near Sadiya, from where it is the **Brahmaputra**"],
    ["Length","About **2,900 km**, of which only about **916 km** is in India"],
    ["Character","**Braided**, with a very heavy silt load and a shifting bed. Contains **Majuli**, the largest river island in the world, and the Umananda island at Guwahati, one of the smallest inhabited"],
    ["Tributaries","**North bank:** Subansiri, Kameng, Manas, Sankosh, Teesta. **South bank:** Burhi Dihing, Dhansiri, Kopili"],
    ["The Teesta","Rises in Sikkim; joins the Brahmaputra in Bangladesh, not in India"],
    ["In Bangladesh","Called the **Jamuna**. Joins the **Padma** (the Ganga), and the combined stream is the **Meghna**, which enters the Bay of Bengal"],
    ["Name","The **Sorrow of Assam**, for its floods"]
   ]},

  {h:"Himalayan rivers against peninsular rivers",
   cols:["","Himalayan","Peninsular"],
   rows:[
    ["Flow","**Perennial** — fed by snowmelt as well as monsoon rain","**Seasonal** — monsoon rain only, and many run nearly dry in summer"],
    ["Age and stage","**Youthful.** Actively eroding, cutting gorges, with great erosive power","**Mature.** Graded beds, shallow valleys, little erosive power left"],
    ["Course","**Meandering**, and prone to shifting course across the plains","**Fixed** courses in shallow rocky valleys"],
    ["Basins","**Very large** — the Ganga basin alone is about 8.6 lakh sq km in India","Comparatively small"],
    ["Deltas","Large deltas: the Sundarbans","East-flowing rivers form deltas; **west-flowing rivers form estuaries** — the Narmada and Tapi both do"],
    ["Antecedent rivers","The **Indus, Satluj** and **Brahmaputra** are older than the Himalayas and cut through them",""]
   ]},

  {careful:"**No river is called the Ganga above Devprayag, and no river is called the Brahmaputra above Sadiya.** The Ganga's headstreams are the Bhagirathi and the Alaknanda; the Brahmaputra's are the Siang, the Dibang and the Lohit. Questions ask for 'the source of the Ganga' expecting **Gangotri glacier / Gaumukh** — the source of the *Bhagirathi* — and that is the accepted answer."}
 ]},

/* ===================================================================== 7 */
{id:"northern-plains", n:"The Northern Plains", hy:1,
 w:"The alluvial plains of the Indus, Ganga and Brahmaputra — their sub-divisions, soils and the features that are asked.",
 quick:[
  "The Northern Plains stretch about `2,400` km from the Satluj–Indus plain in the west to the Brahmaputra plain in the east, and are `150–300` km wide.",
  "They are built entirely of **alluvium** — river-deposited sediment — and are among the most fertile regions in the world.",
  "Four belts run parallel to the Himalayas, south from the foothills: **Bhabar → Terai → Bhangar → Khadar**.",
  "The plains are divided into three sections by river system: the **Punjab plain** (Indus system), the **Ganga plain** (the largest), and the **Brahmaputra plain**.",
  "The soil depth in places exceeds `3,000` m — the alluvium has been accumulating since the Himalayas began rising."
 ],
 blocks:[
  {h:"The four belts, Himalayas to river",
   cols:["Belt","Position","What defines it"],
   rows:[
    ["**Bhabar**","Immediately below the Shivaliks, `8–16` km wide","A narrow belt of **pebbles and boulders**. Rivers disappear underground here — they sink into the porous gravel and re-emerge in the Terai. **No cultivation** because of the stony, porous ground"],
    ["**Terai**","South of the Bhabar, `15–30` km wide","The zone where the rivers **re-emerge**. Marshy, thickly forested, and until the 1950s full of malaria. Much of it has since been cleared for farming. The **Dudhwa and Corbett** national parks sit in the Terai belt"],
    ["**Bhangar**","The higher, older flood plain, above the reach of normal floods","Made of **older alluvium** (Pleistocene). Contains **kankar** — nodules of calcium carbonate — which is the single most-tested identifier of Bhangar. Forms terraces and upland patches"],
    ["**Khadar**","The lower, newer flood plain, renewed each monsoon","Made of **newer alluvium** deposited by current floods. Extremely fertile — **no kankar**, finer silt. Renewed every year, which is why it is called the *bangar* of the farmer's calendar in some regions"]
   ]},

  {careful:"**Bhangar has kankar; Khadar does not.** This is the single most reliable way the exam distinguishes the two. Bhangar = older, higher, kankar nodules, less fertile. Khadar = newer, lower, no kankar, more fertile but flood-prone. If a question says 'contains calcium carbonate nodules', it is Bhangar. If it says 'renewed by annual floods', it is Khadar."},

  {h:"The three regional plains",
   cols:["Plain","River system","Key fact"],
   rows:[
    ["**Punjab plain (Sindh plain in Pakistan)**","Indus and its five tributaries: **Jhelum, Chenab, Ravi, Beas, Satluj**","The land between two rivers is a **doab** — Punjab literally means 'five waters'. The doabs have their own names: **Bist Doab** (Beas–Satluj), **Bari Doab** (Beas–Ravi), **Rachna Doab** (Ravi–Chenab), **Chaj Doab** (Chenab–Jhelum)"],
    ["**Ganga plain**","Ganga and its tributaries — Yamuna, Ghaghara, Gandak, Kosi, Son, Chambal","The **largest** of the three sections, running from Haryana to West Bengal. Divided into the **Upper Ganga plain** (Haryana, UP), the **Middle Ganga plain** (Bihar), and the **Lower Ganga/Delta** (West Bengal, Bangladesh)"],
    ["**Brahmaputra plain**","Brahmaputra and its tributaries — Subansiri, Manas, Teesta","Also called the **Assam plain**. Narrower and more flood-prone. Contains **Majuli**, the world's largest river island"]
   ]},

  {h:"Landforms of the plains",
   swap:[
    ["Doab","The land between two rivers","From Persian *do* (two) + *ab* (water). The Punjab has four named doabs"],
    ["Oxbow lake","A U-shaped lake formed when a river meander is cut off","Common in the middle Ganga plain and the Brahmaputra plain"],
    ["Levee","A natural raised bank along a river, built by repeated flood deposits","The Kosi in Bihar shifts course within its own levee system"],
    ["Flood plain","The flat area beside a river that is covered during floods","The Khadar belt is essentially the active flood plain"],
    ["Delta","A fan-shaped deposit of silt at a river's mouth","The **Sundarbans** is the world's largest delta, shared by the Ganga and Brahmaputra"],
    ["Terai","The marshy re-emergence zone below the Bhabar","Once malarial forest; now heavily cultivated"]
   ]},

  {careful:"**The Kosi is the Sorrow of Bihar, not the Sorrow of Bengal.** The Brahmaputra is the Sorrow of Assam. The Damodar was historically the Sorrow of Bengal (before the DVC dams). These three 'Sorrow' tags are mixed up constantly."},

  {h:"Numbers worth knowing",
   cols:["Measure","Value"],
   rows:[
    ["Length of the Northern Plains","About `2,400` km east to west"],
    ["Width","`150–300` km, widest in the middle Ganga plain"],
    ["Depth of alluvium","Over `3,000` m in places near the Shivaliks"],
    ["Width of the Bhabar belt","`8–16` km"],
    ["Width of the Terai belt","`15–30` km"],
    ["Majuli island area","About `880` sq km (shrinking due to erosion)"],
    ["Sundarbans delta area (Indian side)","About `9,630` sq km"]
   ]}

 ]},

/* ===================================================================== 8 */
{id:"peninsular-plateau", n:"The Peninsular Plateau", hy:1,
 w:"India's oldest landmass — the Central Highlands, the Deccan, the Ghats, and the ranges that frame them.",
 quick:[
  "The Peninsular Plateau is the **oldest** landmass in India, part of the ancient **Gondwana** supercontinent — made of old igneous and metamorphic rock.",
  "It is broadly **triangular**, bounded by the **Aravallis** in the north-west, the **Vindhyas and Satpuras** in the north, and the **Western and Eastern Ghats** on either side.",
  "Two broad divisions: the **Central Highlands** (north of the Narmada) and the **Deccan Plateau** (south of the Narmada).",
  "The plateau tilts gently from **west to east**, which is why most peninsular rivers — Godavari, Krishna, Kaveri, Mahanadi — flow **eastward** into the Bay of Bengal.",
  "The **Aravallis** are the oldest fold mountains in India; the **Western Ghats** are higher and more continuous than the Eastern Ghats; the two Ghats meet at the **Nilgiri hills**."
 ],
 blocks:[
  {h:"Central Highlands vs Deccan Plateau",
   cols:["","Central Highlands","Deccan Plateau"],
   rows:[
    ["Position","**North** of the Narmada","**South** of the Narmada"],
    ["Slope","Slopes **northward** towards the Ganga plain","Slopes gently from **west to east**"],
    ["Major rivers","Chambal, Betwa, Ken — all tributaries of the Yamuna, flowing **north**","Godavari, Krishna, Kaveri, Mahanadi — flowing **east**"],
    ["Rock type","Bundelkhand gneiss, Vindhyan sandstone","**Deccan Trap** — basalt lava flows covering about 5 lakh sq km, producing **black soil (regur)**"],
    ["Key plateaus","**Malwa Plateau** (MP, Rajasthan) — black soil, relatively flat","**Chotanagpur Plateau** (Jharkhand) — rich in minerals: coal, iron ore, mica, manganese"]
   ]},

  {h:"The mountain ranges of the Peninsula",
   cols:["Range","Position","Key fact"],
   rows:[
    ["**Aravallis**","North-west; Delhi to Gujarat","The **oldest fold mountains in India** — heavily eroded, average height only `400–600` m. **Guru Shikhar** (`1,722` m, near Mount Abu) is the highest peak. Rich in non-ferrous minerals: lead, zinc, copper"],
    ["**Vindhyas**","Runs roughly east–west, north of the Narmada","Forms the **traditional boundary** between North India and South India. Made of ancient sandstone"],
    ["**Satpuras**","South of and parallel to the Vindhyas, between the Narmada and the Tapi","**Dhupgarh** (`1,350` m) in the Mahadeo hills is the highest point. The Pachmarhi hill station sits on the Satpuras"],
    ["**Western Ghats (Sahyadri)**","Along the western coast, from the Tapi to Kanyakumari","Average height `900–1,600` m. **Higher** and **more continuous** than the Eastern Ghats. Peaks: **Anai Mudi** (`2,695` m, highest in peninsular India), **Doda Betta** (`2,637` m). A UNESCO World Heritage Site for biodiversity"],
    ["**Eastern Ghats**","Along the eastern coast, from Odisha to Tamil Nadu","**Discontinuous** — broken by the Godavari, Krishna, Kaveri and Mahanadi rivers. Average height `600` m. Highest peak: **Mahendragiri** (`1,501` m). The Shevroy, Javadi and Palkonda hills are part of the Eastern Ghats"],
    ["**Nilgiri Hills**","Where Western and Eastern Ghats **meet**","The junction point. Contains **Ooty (Udhagamandalam)** at `2,240` m"]
   ]},

  {careful:"**Anai Mudi is the highest peak in peninsular India, not Doda Betta.** Anai Mudi (`2,695` m) is in the Anamalai hills of Kerala — part of the Western Ghats. Doda Betta (`2,637` m) is in the Nilgiris. Questions that ask for the 'highest peak south of the Himalayas' want Anai Mudi. Doda Betta is the standard wrong option."},

  {h:"The Deccan Trap and black soil",
   list:[
    "The **Deccan Trap** is a massive sheet of solidified basalt lava that covers about **5 lakh sq km** of Maharashtra, western MP, Karnataka and Gujarat.",
    "It was formed by volcanic eruptions roughly `65–67` million years ago — around the time of the dinosaur extinction (the Cretaceous–Paleogene boundary).",
    "The basalt weathers into **black soil (regur)** — self-ploughing, moisture-retentive, and ideal for **cotton**. Maharashtra's black cotton soil belt sits on the Deccan Trap.",
    "The stepped, flat-topped hills of the Deccan (like the Ajanta hills) are typical of trap topography — *trap* comes from the Swedish for 'step'.",
    "Questions confuse the Deccan Trap (igneous basalt, Cretaceous) with the Vindhyan system (sedimentary sandstone, Proterozoic). They are different rock types from different eras."
   ]},

  {careful:"**The Meghalaya plateau is NOT part of the Himalayas.** The Garo, Khasi and Jaintia hills are a **detached block of the Peninsular Plateau**, separated from the Chotanagpur plateau by the **Malda gap** (also called the Rajmahal gap). They sit right next to the north-eastern Himalayas and are constantly mistaken for part of them, but they are made of old Gondwana rock, not young fold-mountain sediment."},

  {h:"Western Ghats vs Eastern Ghats",
   cols:["","Western Ghats","Eastern Ghats"],
   rows:[
    ["Other name","**Sahyadri**","No single alternative name"],
    ["Continuity","**Continuous** — unbroken from the Tapi to Kanyakumari","**Discontinuous** — broken by rivers (Godavari, Krishna, Kaveri, Mahanadi)"],
    ["Average height","`900–1,600` m","`600` m"],
    ["Highest peak","**Anai Mudi** — `2,695` m","**Mahendragiri** — `1,501` m"],
    ["Rainfall","**Windward** side of the south-west monsoon — very heavy rainfall (Western coast)","**Rain shadow** of the Western Ghats in some sections"],
    ["Biodiversity","UNESCO World Heritage Site — extremely high endemism","Comparatively lower, but the Araku Valley and Nallamala hills are biodiversity spots"],
    ["Hill stations","Mahabaleshwar, Munnar, Coorg, Ooty (at the junction)","Araku Valley, Horsley Hills"]
   ]},

  {h:"Key plateaus at a glance",
   swap:[
    ["Malwa Plateau","MP and Rajasthan; black soil; drained by Chambal, Betwa, Ken","Part of the Central Highlands"],
    ["Chotanagpur Plateau","Jharkhand; **India's mineral heartland** — coal, iron ore, mica, manganese, bauxite","Drained by the Damodar and Subarnarekha rivers"],
    ["Meghalaya Plateau","Garo, Khasi, Jaintia hills; **Peninsular** rock, NOT Himalayan","Separated from the main plateau by the Malda gap"],
    ["Deccan Plateau","South of the Narmada; basalt trap in the north-west, granite-gneiss in the south","Tilts west to east — rivers flow eastward"],
    ["Bundelkhand Plateau","Southern UP and northern MP; granite and gneiss","Part of the Central Highlands, between the Yamuna and the Vindhyas"]
   ]}

 ]},

/* ===================================================================== 9 */
{id:"coastal-islands", n:"The Coastal Plains and the Islands", hy:1,
 w:"The western and eastern coasts, the lakes and lagoons, and the two island groups.",
 quick:[
  "The **Western coastal plain** is narrow (`50–65` km) and has estuaries and lagoons but **no major deltas**.",
  "The **Eastern coastal plain** is wider (`100–130` km) and has the **large deltas** of the Mahanadi, Godavari, Krishna and Kaveri.",
  "Two island groups: **Andaman and Nicobar** (Bay of Bengal, volcanic/tectonic origin) and **Lakshadweep** (Arabian Sea, coral atolls).",
  "**Barren Island** in the Andamans is India's **only active volcano**.",
  "The total coastline including islands is `7,516.6` km; **Gujarat** has the longest coastline of any state."
 ],
 blocks:[
  {h:"The Western Coastal Plain, north to south",
   cols:["Section","Extent","Key feature"],
   rows:[
    ["**Konkan**","Mumbai to Goa","Narrow, rocky, with sea cliffs. The ports of Mumbai and Marmagao sit here"],
    ["**Karnataka coast (Kanara)**","Goa to Mangalore","Relatively flat; the Sharavathi Falls (including **Jog Falls**, `253` m) is nearby in the Western Ghats"],
    ["**Malabar**","Mangalore to Kanyakumari (Kerala coast)","**Backwaters (kayals)** — a chain of lagoons, lakes and canals. **Vembanad Lake** is the longest lake in India (`96.5` km). Coconut and spice plantations"]
   ]},

  {h:"The Eastern Coastal Plain, north to south",
   cols:["Section","Extent","Key feature"],
   rows:[
    ["**Utkal plain**","Odisha coast","The **Mahanadi delta** is here. **Chilika Lake** — India's largest coastal lagoon (`1,100` sq km), a Ramsar site, famous for Irrawaddy dolphins"],
    ["**Northern Circars (Andhra plain)**","Odisha border to Krishna delta","Wide alluvial plain with the deltas of the **Godavari** (second largest in India) and the **Krishna**. **Pulicat Lake** straddles the Andhra–Tamil Nadu border"],
    ["**Coromandel**","South of the Krishna delta, along Tamil Nadu","The **Kaveri delta** — called the *granary of South India*. Receives rainfall from the **north-east monsoon** (October–December), unlike the rest of India"]
   ]},

  {careful:"**Western coast = estuaries; Eastern coast = deltas.** The Narmada and Tapi flow into the Arabian Sea through **estuaries** — they form no deltas because the hard-rock rift valleys they flow through produce little silt, and the coast is narrow. The east-flowing rivers (Mahanadi, Godavari, Krishna, Kaveri) cross the wide, gentle Deccan Plateau, collect enormous silt loads, and deposit them as **large deltas** on the wider eastern plain."},

  {h:"The important lakes and lagoons",
   swap:[
    ["Chilika Lake","India's largest **coastal lagoon**, `1,100` sq km, Odisha","Ramsar site; Irrawaddy dolphins; Nalabana bird sanctuary inside it"],
    ["Vembanad Lake","Longest lake in India — `96.5` km, Kerala","Part of the Kerala backwaters; Kumarakom bird sanctuary on its banks; Nehru Trophy boat race held here"],
    ["Pulicat Lake","Second largest coastal lagoon, on the Andhra–Tamil Nadu border","Sriharikota island (ISRO's launch centre) separates it from the Bay of Bengal"],
    ["Ashtamudi Lake","Kerala's second largest lake, a Ramsar site","Eight-armed ('ashta-mudi') shape; important for coir processing and fisheries"],
    ["Kolleru Lake","Between the Krishna and Godavari deltas, Andhra Pradesh","A freshwater lake that fills in the monsoon; Ramsar site"]
   ]},

  {h:"Andaman and Nicobar Islands",
   cols:["Fact","Detail"],
   rows:[
    ["Location","**Bay of Bengal**, between `6°N` and `14°N`. About `1,200` km from the mainland (Kolkata)"],
    ["Origin","**Volcanic and tectonic** — an extension of the submerged mountain chain from Arakan Yoma (Myanmar). NOT coral"],
    ["Total islands","`572` islands — **38 inhabited**. The Andaman group has `325` islands; the Nicobar group has `24`"],
    ["Separation","The **10° Channel** separates the Andaman group from the Nicobar group"],
    ["Highest point","**Saddle Peak** (`737` m) on North Andaman"],
    ["Active volcano","**Barren Island** — India's **only active volcano**. Last erupted in 2017"],
    ["Dormant volcano","**Narcondam Island** — the only dormant volcano in India"],
    ["Indira Point","Southernmost point of India, `6°45'N`, on **Great Nicobar**. Submerged in the 2004 tsunami"],
    ["Tribes","**Jarawa, Sentinelese, Onge, Great Andamanese, Shompen, Nicobarese** — protected under the Andaman and Nicobar Protection of Aboriginal Tribes Regulation"]
   ]},

  {h:"Lakshadweep Islands",
   cols:["Fact","Detail"],
   rows:[
    ["Location","**Arabian Sea**, about `280–480` km off the Kerala coast"],
    ["Origin","**Coral atolls** — built on submarine ridges by coral organisms. Completely different from Andaman's volcanic origin"],
    ["Total islands","`36` islands — **10 inhabited**. Total area only `32` sq km — **India's smallest Union Territory**"],
    ["Capital","**Kavaratti**"],
    ["Separation from Maldives","The **8° Channel** (Eight Degree Channel) separates Minicoy from the Maldives"],
    ["Separation within Lakshadweep","The **9° Channel** separates Minicoy from the rest of Lakshadweep"],
    ["Key feature","**Pitti Island** — a bird sanctuary, the smallest island, uninhabited. Coral reefs around the islands are rich fishing grounds"]
   ]},

  {careful:"**Lakshadweep is coral; Andaman and Nicobar is volcanic.** They are NOT the same type of island. Lakshadweep is built by living coral organisms on submarine ridges in the Arabian Sea — low, flat atolls, highest point barely `5` m. Andaman and Nicobar is an extension of the Arakan Yoma mountain chain, of volcanic and tectonic origin, with peaks up to `737` m and India's only active volcano (Barren Island). A question that says 'coral atolls' means Lakshadweep; one that says 'volcanic' or 'extension of a mountain chain' means Andaman and Nicobar."},

  {h:"The channels at a glance",
   swap:[
    ["8° Channel","Between **Minicoy** (Lakshadweep) and the **Maldives**",""],
    ["9° Channel","Between **Minicoy** and the rest of **Lakshadweep**","Minicoy is the southernmost island of Lakshadweep"],
    ["10° Channel","Between the **Andaman** group and the **Nicobar** group","About `150` km wide"],
    ["Duncan Passage","Between **South Andaman** and **Little Andaman**",""],
    ["Palk Strait","Between India (**Tamil Nadu**) and **Sri Lanka**","About `53–80` km wide; contains **Pamban Island** (Rameswaram)"]
   ]}

 ]},

/* ===================================================================== 10 */
{id:"pen-rivers", n:"The Peninsular Rivers", hy:1,
 w:"The east-flowing and west-flowing rivers of peninsular India — source, length, tributaries and the delta-vs-estuary rule.",
 quick:[
  "Almost every peninsular river flows **east** into the **Bay of Bengal** and forms a **delta**. The two big exceptions — **Narmada** and **Tapi** — flow **west** into the **Arabian Sea** and form **estuaries**.",
  "The **Godavari** is the longest peninsular river (`1,465 km`) and drains the largest area — it is called the **Dakshin Ganga**.",
  "Peninsular rivers are **rain-fed and seasonal**: they depend on the monsoon and many shrink to a trickle in summer, unlike the perennial Himalayan rivers fed by snowmelt.",
  "The **Narmada** and **Tapi** flow in **rift valleys** — fault-formed troughs — which is why they flow west against the general eastward tilt of the peninsula, and why they form estuaries instead of deltas.",
  "The **watershed** between the east-flowing and west-flowing systems is the **Western Ghats**, which run close to the west coast; rivers rising on their eastern slope have a long run to the Bay of Bengal, while rivers on the western slope have only a short run to the Arabian Sea."
 ],
 blocks:[
  {h:"The major east-flowing rivers",
   cols:["River","Length","Source","Key facts"],
   rows:[
    ["**Godavari**","`1,465 km`","**Trimbakeshwar**, near Nasik, Maharashtra","Longest peninsular river. Called **Dakshin Ganga**. Drains parts of Maharashtra, Telangana, Andhra Pradesh, Chhattisgarh, Odisha. Major tributaries: **Pranhita, Indravati, Manjira, Sabari**. Forms a large delta in Andhra Pradesh"],
    ["**Krishna**","`1,400 km`","**Mahabaleshwar**, Maharashtra","Second longest. Flows through Maharashtra, Karnataka, Telangana, Andhra Pradesh. Tributaries: **Bhima, Tungabhadra, Koyna, Ghatprabha, Malaprabha**. The **Nagarjuna Sagar** and **Srisailam** dams are on it"],
    ["**Kaveri**","`805 km`","**Talakaveri**, Brahmagiri Hills, Coorg (Karnataka)","Called the **Ganga of the South**. Flows through Karnataka and Tamil Nadu. Creates **Shivasamudram Falls** (one of India's earliest hydroelectric sites) and the island of **Srirangapatna**. Tributaries: **Hemavati, Shimsha, Arkavati, Kabini, Amaravati**"],
    ["**Mahanadi**","`851 km`","Near **Sihawa**, Chhattisgarh","Flows through Chhattisgarh and Odisha. The **Hirakud Dam** on it is one of the longest earthen dams in the world. Forms a delta near Cuttack. Tributaries: **Seonath, Hasdeo, Mand, Ib, Jonk**"],
    ["**Subarnarekha**","`395 km`","Near **Ranchi**, Jharkhand","Flows through Jharkhand, West Bengal, Odisha. Creates the **Hundru Falls** near Ranchi"],
    ["**Brahmani**","`799 km`","Confluence of **Koel** and **Sankh** at Vedvyas, Odisha","Flows entirely through Odisha. Shares its delta with the Baitarani river"]
   ]},

  {h:"The two major west-flowing rivers",
   cols:["River","Length","Source","Key facts"],
   rows:[
    ["**Narmada**","`1,312 km`","**Amarkantak** plateau, Madhya Pradesh","Flows through a **rift valley** between the Vindhyas (north) and the Satpuras (south). Passes through the **Marble Rocks** gorge at **Jabalpur** (Dhuandhar Falls). The **Sardar Sarovar Dam** (Gujarat) and **Indira Sagar Dam** (MP) are on it. Enters the Arabian Sea through the **Gulf of Khambhat** via an estuary"],
    ["**Tapi (Tapti)**","`724 km`","**Multai**, near Betul, Madhya Pradesh","Also flows in a **rift valley**, roughly parallel to the Narmada but to its south. Passes through MP, Maharashtra, Gujarat. Enters the Arabian Sea at **Surat** through an estuary. The **Ukai Dam** is on it"]
   ]},

  {careful:"**Narmada and Tapi are the ONLY two major peninsular rivers that flow west.** Every other major peninsular river — Godavari, Krishna, Kaveri, Mahanadi — flows east. The reason is geological: the peninsula tilts gently eastward, and the Western Ghats form the main watershed close to the west coast. The Narmada and Tapi are exceptions because they follow **rift valleys** (fault-formed troughs) that happen to run east-to-west."},

  {h:"Why some rivers form deltas and others form estuaries",
   cols:["Feature","Delta-forming (east-flowing)","Estuary-forming (west-flowing)"],
   rows:[
    ["**Gradient**","Gentle slope over a long distance — sediment is deposited at the mouth","Steeper gradient through rift valleys — sediment is carried out to sea"],
    ["**Flood plain**","Wide alluvial plains allow the river to slow and spread","Narrow rift valleys give no room to spread"],
    ["**Course length**","Long courses (`800–1,465 km`) — more time to pick up and sort sediment","Shorter effective courses to the coast"],
    ["**Examples**","Godavari delta, Krishna delta, Kaveri delta, Mahanadi delta","Narmada estuary (Gulf of Khambhat), Tapi estuary (at Surat)"]
   ]},

  {h:"River disputes and interstate water — the ones that are asked",
   swap:[
    ["Kaveri water dispute","Between **Karnataka** and **Tamil Nadu**","One of the oldest inter-state river disputes in India; adjudicated by the Kaveri Water Disputes Tribunal"],
    ["Krishna water dispute","Between **Maharashtra, Karnataka** and **Andhra Pradesh/Telangana**","The Krishna Water Disputes Tribunal (KWDT) made two awards"],
    ["Godavari water dispute","Between **Maharashtra, Karnataka, Andhra Pradesh, Madhya Pradesh, Odisha**","Resolved by the Godavari Water Disputes Tribunal in 1980"],
    ["Narmada water dispute","Between **Madhya Pradesh, Gujarat, Maharashtra, Rajasthan**","The Narmada Water Disputes Tribunal (1969) allocated shares; the Sardar Sarovar Dam height was a long-running controversy"]
   ]},

  {h:"The falls — peninsular rivers and their waterfalls",
   cols:["Waterfall","River","Location","Note"],
   rows:[
    ["**Shivasamudram Falls**","Kaveri","Karnataka","One of India's earliest hydroelectric projects (1902)"],
    ["**Dhuandhar Falls**","Narmada","Jabalpur, MP","At the **Marble Rocks** gorge — the spray looks like smoke (*dhuandhar*)"],
    ["**Hundru Falls**","Subarnarekha","Near Ranchi, Jharkhand","One of the highest in Jharkhand"],
    ["**Jog / Gersoppa Falls**","Sharavathi","Karnataka","Highest plunge waterfall in India (`253 m`). The Sharavathi is a smaller west-flowing river, not one of the six major ones"],
    ["**Chitrakote Falls**","Indravati","Chhattisgarh","Called the **Niagara of India** because of its horseshoe shape"]
   ]},

  {careful:"**Jog Falls is NOT on the Kaveri.** It is on the **Sharavathi**, a small west-flowing river in Karnataka. This is one of the most common wrong associations in SSC geography. Similarly, **Dhuandhar Falls** is on the **Narmada**, not the Tapi — the two rift-valley rivers are constantly swapped."}

 ]},

/* ===================================================================== 11 */
{id:"climate", n:"Climate of India", hy:1,
 w:"The monsoon mechanism, the four seasons, rainfall distribution and the numbers that are asked.",
 quick:[
  "India has a **tropical monsoon** climate. The monsoon dominates the rainfall pattern — about `75–90 per cent` of annual rainfall comes from the **south-west monsoon** (June–September).",
  "Under the **Köppen classification**, most of India is **Aw** (tropical savanna) or **Cwg** (humid subtropical with dry winter). The Thar is **BWh** (hot desert) and the Western Ghats are **Am** (tropical monsoon).",
  "The four seasons: **Cold weather** (December–February), **Hot weather** (March–May), **Advancing south-west monsoon** (June–September), **Retreating monsoon** (October–November).",
  "**Mawsynram** in Meghalaya receives the highest average annual rainfall in the world — about `11,872 mm`. **Cherrapunji**, nearby, holds the record for the highest rainfall in a single year.",
  "The **Western Ghats** cause **orographic rainfall** on the windward side (west) and a **rain shadow** on the leeward side (east) — which is why Pune and Bengaluru are drier than the Konkan coast."
 ],
 blocks:[
  {h:"The four seasons",
   cols:["Season","Months","What defines it"],
   rows:[
    ["**Cold weather season**","December – February","Clear skies, low humidity, cool dry winds from the north-west (the **N-E trade winds** after they cross the Tropic of Cancer). **Western disturbances** bring rainfall to Punjab, Haryana, Himachal, J&K. Frost in the northern plains; snowfall in the Himalayas"],
    ["**Hot weather season**","March – May","Temperatures rise sharply — `45°C` and above in the north-western plains. An intense **low-pressure area** develops over the Thar and adjoining Pakistan. **Loo** — hot, dry winds — blow across the northern plains. **Nor'westers** (Kalbaisakhi) bring thunderstorms to Bengal and Assam; **mango showers** (pre-monsoon rain) occur in Kerala and Karnataka"],
    ["**Advancing south-west monsoon**","June – September","The ITCZ shifts north, the **south-east trade winds** cross the equator, are deflected right by the Coriolis force, and arrive as the **south-west monsoon**. Two branches: the **Arabian Sea branch** and the **Bay of Bengal branch**. The monsoon **'bursts'** over Kerala around **1 June** and covers the whole country by mid-July"],
    ["**Retreating monsoon**","October – November","The monsoon withdraws from the north-west first and from Tamil Nadu last. The **Bay of Bengal** gets cyclones. The **north-east monsoon** (returning winds now carrying moisture from the Bay) gives **Tamil Nadu** most of its rainfall in this season — the reason Chennai's wettest months are October–December, not June–September"]
   ]},

  {careful:"**Tamil Nadu gets most of its rain from the retreating monsoon, not the advancing one.** During the south-west monsoon (June–September), Tamil Nadu lies in the **rain shadow** of the Western Ghats and stays dry. Its main rainfall comes from the **north-east monsoon** in October–December, when moisture-laden winds from the Bay of Bengal hit the Coromandel coast. This is why Chennai's rainfall pattern is the opposite of Mumbai's."},

  {h:"The south-west monsoon — the two branches",
   cols:["Branch","Route","Where it rains"],
   rows:[
    ["**Arabian Sea branch**","Hits the **Western Ghats** first, then splits: one arm goes north along the west coast, another curves around the Ghats towards central India","**Heavy orographic rain** on the windward (western) side of the Ghats — Konkan, Malabar. **Rain shadow** on the lee side — the Deccan Plateau is drier. The branch that moves north gives rain to Gujarat, Rajasthan (some) and reaches the **Ganga plain** from the west"],
    ["**Bay of Bengal branch**","Enters the **north-east** first (Assam, Meghalaya) and then moves west along the **Ganga plain**","Gives very heavy rain to **Meghalaya** (Mawsynram, Cherrapunji) because the hills force the moist air sharply upward. Then progresses westward — by the time it reaches **Rajasthan** and **Punjab**, it carries less moisture. The **Aravallis** run parallel to the winds rather than across them, so they do NOT cause orographic rain — which is why Rajasthan stays dry"]
   ]},

  {careful:"**The Aravallis do NOT block the monsoon.** They run roughly **south-west to north-east**, which is nearly parallel to the Arabian Sea branch of the monsoon. Because they do not lie across the wind, they cause almost no orographic rainfall. This is a standard wrong option — 'the Aravallis cause rain in Rajasthan' — and the correct answer is that their alignment lets the monsoon pass without rising."},

  {h:"Rainfall extremes and patterns",
   swap:[
    ["Wettest place (annual average)","**Mawsynram**, Meghalaya — about `11,872 mm`","Cherrapunji (Sohra), nearby, was once recorded as the wettest but Mawsynram now holds the average record"],
    ["Highest single-year rainfall","**Cherrapunji** — `26,471 mm` in 1860–61","This one-year record has not been broken"],
    ["Driest region","**Western Rajasthan (Thar Desert)** — under `150 mm`","Jaisalmer gets about `100 mm` a year"],
    ["City with inverted rainfall","**Chennai** — wettest in October–December","Gets rain from the north-east monsoon, not the south-west"],
    ["Western disturbances","Bring **winter rain** to north India (Dec–Feb)","Originating over the Mediterranean, they travel eastward and cause rain and snowfall in J&K, Himachal, Punjab"],
    ["Mango showers","**Pre-monsoon rain** in Kerala and Karnataka (April–May)","Named because they help the early ripening of mangoes"],
    ["Loo","**Hot dry westerly winds** in the northern plains (April–June)","Temperatures can exceed `45°C`; the Loo blows from Rajasthan and Pakistan"],
    ["Nor'westers / Kalbaisakhi","**Thunderstorms** in Bengal and Assam (April–May)","Called Kalbaisakhi ('the calamity of Baisakh'); beneficial for tea and jute crops"]
   ]},

  {h:"Koeppen's classification — the types that apply to India",
   cols:["Code","Name","Where in India"],
   rows:[
    ["**Aw**","Tropical savanna","Most of peninsular India — distinct wet and dry seasons"],
    ["**Am**","Tropical monsoon","Western coast (Konkan, Malabar), Western Ghats — very heavy monsoon rain, short dry season"],
    ["**Cwg**","Humid subtropical with dry winter","The Ganga plain — warm wet summer, cool dry winter"],
    ["**BWh**","Hot desert","Western Rajasthan (Thar)"],
    ["**BSh**","Semi-arid / steppe","Parts of Rajasthan, Gujarat, Haryana around the desert margin"],
    ["**Dfc**","Subarctic / cold humid","Parts of Arunachal Pradesh and Ladakh at high altitude"],
    ["**ET**","Tundra","The highest parts of J&K and Ladakh — permafrost"]
   ]},

  {h:"The monsoon's advance and retreat — the calendar",
   list:[
    "**1 June** — the monsoon normally reaches **Kerala**.",
    "**10 June** — reaches **Mumbai** and the Konkan coast.",
    "**Mid-June** — covers the entire south and the Bay of Bengal branch reaches the north-east.",
    "**1 July** — reaches the **eastern half** of the Ganga plain.",
    "**15 July** — covers the **entire country**, including western Rajasthan and Punjab (the last to be covered).",
    "**1 September** — the monsoon begins **withdrawing** from western Rajasthan.",
    "**Mid-October** — has withdrawn from the northern plains.",
    "**Mid-December** — has withdrawn from the rest of India. Tamil Nadu is the last to lose the monsoon influence, since the retreating monsoon's NE winds pick up moisture from the Bay and give it rain."
   ]}

 ]},

/* ===================================================================== 12 */
{id:"soils", n:"Soils of India", hy:1,
 w:"The six major soil types — where they are found, what they are made of, and what grows in them.",
 quick:[
  "India has **six major soil types**: Alluvial, Black (Regur), Red, Laterite, Arid (Desert) and Forest (Mountain).",
  "**Alluvial soil** covers the largest area — the entire Indo-Gangetic plain, the coastal deltas and parts of the river valleys. It is further divided into **Bhangar** (older, higher, with kankar nodules) and **Khadar** (newer, in the flood plains, renewed each year).",
  "**Black soil (Regur)** is formed from the weathering of **Deccan Trap basalt**. It is the ideal soil for **cotton** — hence called **black cotton soil**.",
  "The **Indian Council of Agricultural Research (ICAR)** classifies Indian soils into **eight** types, adding Peaty/Marshy and Saline/Alkaline to the six above.",
  "Soil erosion is worst in the **Shivalik foothills** (unconsolidated sediment), the **Chambal ravines** and the **Thar margin** — the areas where neither root cover nor compacted rock holds the surface in place."
 ],
 blocks:[
  {h:"The six major soil types at a glance",
   cols:["Soil","Where found","Formed from","Crops / use"],
   rows:[
    ["**Alluvial**","Indo-Gangetic plain, Brahmaputra valley, coastal deltas, river valleys of peninsular India","**Transported** — deposited by rivers. Bhangar = old alluvium (with **kankar** lime nodules); Khadar = new alluvium (renewed every flood)","Rice, wheat, sugarcane, jute — the most **productive** soil and the most widely cultivated"],
    ["**Black (Regur)**","Maharashtra, Madhya Pradesh, Gujarat, Karnataka, Andhra Pradesh — the **Deccan Trap** region","**In situ** weathering of **basalt** lava. The dark colour comes from **titaniferrous magnetite** and clay minerals, not humus","**Cotton** (hence 'black cotton soil'). Also sugarcane, jowar, wheat. It **self-ploughs** — swells when wet, shrinks and cracks when dry"],
    ["**Red**","Odisha, Chhattisgarh, southern fringe of the Gangetic plain, Tamil Nadu, parts of Karnataka, Andhra Pradesh","Weathering of **crystalline igneous** and **metamorphic** rocks. Red colour from **ferric oxide (iron)**","Wheat, rice, millets, pulses, tobacco. Deficient in nitrogen, phosphorus and humus; responds well to fertilisers"],
    ["**Laterite**","Western Ghats, parts of Odisha, Meghalaya plateau, some areas of Tamil Nadu, Karnataka, Kerala","Intense **leaching** in areas of heavy rainfall — soluble minerals are washed out, leaving behind **iron** and **aluminium hydroxides**. The name comes from Latin *later* (brick)","**Tea, coffee, cashew, rubber** on the hill slopes. Humus-poor because of high temperature and bacterial activity. Hardens into brick when exposed to air — used as a building material in Kerala"],
    ["**Arid (Desert)**","Western Rajasthan, parts of Gujarat, Haryana and southern Punjab","**Sandy**, with high **salt content** (kankar at the base). Low organic matter and moisture. Colour ranges from red to brown","Productive when irrigated — the **Indira Gandhi Canal** has turned parts of the Thar into cultivable land. Bajra, gram, guar"],
    ["**Forest (Mountain)**","Himalayan slopes, Western and Eastern Ghats, hill areas above `1,500 m`","**Humus-rich** due to the accumulation of leaf litter. Texture varies from **loamy** to **silty**. Often acidic at higher altitudes","Orchards (apple, walnut in Kashmir; tea in Darjeeling and Nilgiris). Thin and easily eroded where deforestation occurs"]
   ]},

  {careful:"**Black soil is NOT formed from alluvium — it is formed from basalt.** The Deccan Trap is a massive lava flow (not river deposits), and the weathering of this **basalt** produces the black soil. Its dark colour comes from **titaniferrous magnetite** and clay minerals, NOT from humus. This is the single most common wrong reason given in SSC options — 'rich in humus' is always a trap for black soil."},

  {h:"Alluvial soil — the Bhangar and Khadar distinction",
   cols:["","Bhangar (old alluvium)","Khadar (new alluvium)"],
   rows:[
    ["**Position**","Above the flood plain, on **terraces**","In the flood plain itself, along the river banks"],
    ["**Age**","Older, more compacted","Younger, renewed by each flood"],
    ["**Texture**","Coarser, often clayey, with **kankar** (lime nodules)","Finer, more sandy, richer in fresh silt"],
    ["**Fertility**","Less fertile — not renewed","**More fertile** — refreshed annually by new alluvium"],
    ["**Colour**","Dark, sometimes yellowish","Lighter, sandy"]
   ]},

  {h:"What each soil type is rich in and deficient in",
   cols:["Soil","Rich in","Deficient in"],
   rows:[
    ["**Alluvial**","Potash, lime","Nitrogen, phosphorus (in some areas)"],
    ["**Black**","Lime, iron, magnesia, alumina, **calcium carbonate**","**Nitrogen, phosphorus, organic matter**"],
    ["**Red**","Iron, potash","Nitrogen, phosphorus, humus, lime"],
    ["**Laterite**","Iron, aluminium","Nitrogen, potash, lime, organic matter — almost everything soluble is leached out"],
    ["**Arid**","Soluble salts, phosphate","Humus, nitrogen, moisture"],
    ["**Forest**","Humus (at lower altitudes)","Can be very acidic at higher altitudes; thin and easily eroded"]
   ]},

  {h:"Soil conservation — the methods that are asked",
   swap:[
    ["Contour ploughing","Ploughing along the **contour lines** of a slope, not up and down","Slows water run-off and reduces soil erosion on slopes"],
    ["Terrace farming","Cutting **step-like flat surfaces** into a hillside","Used extensively in the Himalayas and the Western Ghats"],
    ["Strip cropping","Growing different crops in **alternate strips** along the contour","One strip catches the soil washed from the next"],
    ["Shelter belts","Rows of **trees planted as windbreaks**","Used in arid and semi-arid areas to stop wind erosion; the Indira Gandhi Canal zone uses them"],
    ["Mulching","Covering the soil surface with **crop residue or organic material**","Retains moisture and protects the surface from rain impact"]
   ]},

  {careful:"**Laterite soil hardens into brick when cut and exposed to air** — this is how it gets its name (Latin *later* = brick). In Kerala it is widely used as a building material. But this same hardening makes it very poor for agriculture unless continuously enriched. The standard trap is 'laterite is fertile because it is found in high-rainfall areas' — in fact the high rainfall is exactly what makes it infertile, because **leaching** washes out every soluble nutrient."}

 ]},

/* ===================================================================== 13 */
{id:"vegetation", n:"Natural Vegetation", hy:1,
 w:"The five vegetation types, the rainfall and altitude that decide each, and the trees that identify them.",
 quick:[
  "India's vegetation is governed by **rainfall** in the plains and by **altitude** in the mountains. Temperature matters, but rainfall is the primary control.",
  "**Tropical Deciduous (Monsoon) forests** cover the largest area — roughly 65 per cent of the total forest cover. They are NOT the densest; that is the evergreen.",
  "Five major types: **Tropical Evergreen**, **Tropical Deciduous**, **Thorn and Scrub**, **Montane**, and **Mangrove (Tidal)**.",
  "India's total forest cover (2023 State of Forest Report) is about `713,789` sq km — `21.71%` of the geographical area. The target is `33%`.",
  "**Madhya Pradesh** has the largest forest cover in absolute area. **Mizoram** has the highest percentage of its area under forest (about `84%`)."
 ],
 blocks:[
  {h:"The five types at a glance",
   cols:["Type","Rainfall / Altitude","Where","Signature trees"],
   rows:[
    ["**Tropical Evergreen**","Above `200 cm` rainfall","Western Ghats (windward), NE India, Andaman & Nicobar","Ebony, mahogany, rosewood, rubber, cinchona. Dense canopy, no definite season of leaf-fall"],
    ["**Tropical Deciduous** (Monsoon)","`70–200 cm` rainfall","The largest area — most of peninsular India, the eastern slopes of the Western Ghats, Jharkhand, Odisha, eastern MP","**Moist deciduous** (`100–200 cm`): teak, sal, shisham, sandalwood. **Dry deciduous** (`70–100 cm`): tendu, palas, amaltas, neem"],
    ["**Thorn and Scrub**","Below `70 cm` rainfall","Western Rajasthan, SW Haryana, Gujarat (Kutch and Kathiawar), southern Punjab","Babool (kikar), ber, date palm, khejri, cactus. Leaves are small or turn to thorns to reduce water loss"],
    ["**Montane (Mountain)**","Varies by altitude, not rainfall","The Himalayas, the Western Ghats above `1,500 m`, the Nilgiris, Meghalaya hills","Temperate: oak, chestnut, birch. Conifers: pine, deodar, spruce, fir. Alpine: juniper, rhododendron, birch scrub. Above `3,600 m`: mosses and lichens (tundra)"],
    ["**Mangrove (Tidal)**","Coastal, saline, waterlogged","River deltas and estuaries — Sundarbans (largest), Bhitarkanika (Odisha), Pichavaram (Tamil Nadu), Gulf of Kutch","Sundari (gives the Sundarbans their name), rhizophora, avicennia. Stilt roots and breathing roots (pneumatophores)"]
   ]},

  {careful:"**Teak is deciduous, not evergreen.** It sheds its leaves in the dry season and is the most important timber tree of the **moist deciduous** forests. SSC questions regularly place teak among evergreen trees — it does not belong there. The evergreen timbers are **ebony, mahogany and rosewood**. If a question lists teak alongside those three and asks which does not belong, teak is the answer."},

  {h:"Tropical Deciduous — the two sub-types",
   cols:["","Moist Deciduous","Dry Deciduous"],
   rows:[
    ["Rainfall","`100–200 cm`","`70–100 cm`"],
    ["Where","Eastern slopes of the Western Ghats, NE India, Jharkhand, Odisha, Chhattisgarh, eastern MP","Bihar, UP, Karnataka interior, Tamil Nadu interior, the drier parts of MP"],
    ["Key trees","**Teak**, **sal**, shisham (sheesham), sandalwood, bamboo, mulberry","**Tendu**, **palas** (flame of the forest), amaltas, neem, pipal"],
    ["Leaf-fall","Shed leaves for about `6–8` weeks in the dry season","Shed leaves for a longer period; the forest looks bare for several months"],
    ["Economic value","Teak and sal are the most commercially valuable Indian hardwoods","Tendu leaves are used to wrap **bidi** — a major forest product by revenue"]
   ]},

  {h:"Montane forests — the altitude bands",
   cols:["Altitude band","Vegetation","Examples"],
   rows:[
    ["`1,000–2,000 m`","**Wet temperate** — broad-leaved evergreen","Oak, chestnut, laurel, magnolia. Found in the eastern Himalayas, Western Ghats above `1,500 m`"],
    ["`1,500–3,000 m`","**Coniferous** — needle-leaved","**Pine** (Chir pine in the western Himalayas), **deodar** (the most valued), spruce, silver fir, cedar"],
    ["`3,000–3,600 m`","**Alpine** — stunted trees and scrub","Juniper, rhododendron, silver birch. Trees become increasingly dwarfed"],
    ["Above `3,600 m`","**Alpine meadows**, then tundra","Grasses and sedges at first (*bugyals* in Uttarakhand), then mosses and lichens near the snowline"]
   ]},

  {careful:"**Deodar is a conifer, not a broadleaf tree.** Its name comes from Sanskrit *devadāru* (timber of the gods). It grows between `1,500` and `3,200 m` in the western Himalayas — Himachal Pradesh, Uttarakhand, Jammu & Kashmir. Questions sometimes place it among the broad-leaved temperate trees (oak, chestnut); it belongs with the conifers (pine, spruce, fir)."},

  {h:"Mangrove forests — the key sites",
   swap:[
    ["**Sundarbans**","West Bengal — the **largest** mangrove area in India and the world","Home to the Royal Bengal Tiger; UNESCO World Heritage Site. Named after the **sundari** tree"],
    ["**Bhitarkanika**","Odisha — the second-largest mangrove in India","At the mouth of the Brahmani and Baitarani rivers. Famous for saltwater crocodiles"],
    ["**Pichavaram**","Tamil Nadu — one of the largest mangroves on the east coast","Between the Vellar and Kollidam rivers, near Chidambaram"],
    ["**Gulf of Kutch**","Gujarat — marine national park with mangroves","The westernmost significant mangrove area in India"],
    ["**Andaman & Nicobar**","Extensive mangroves along the coast","Diverse species; relatively undisturbed compared to mainland mangroves"]
   ]},

  {h:"Trees and their states — the pairs that are asked",
   swap:[
    ["**Sal**","Jharkhand, Chhattisgarh, Odisha, eastern UP","Moist deciduous. The **Sal** forests of the Chotanagpur plateau are the densest stands"],
    ["**Teak**","MP, Maharashtra, Karnataka, Kerala, Tamil Nadu","Moist deciduous. MP has the largest teak forests in India"],
    ["**Sandalwood**","Karnataka (Mysore region)","Moist deciduous. Karnataka produces most of India's sandalwood"],
    ["**Sundari**","Sundarbans, West Bengal","Mangrove. Hard, durable wood that resists saltwater"],
    ["**Khejri (Prosopis cineraria)**","Rajasthan — the **state tree** of Rajasthan","Thorn forest. Grows in the Thar desert; the Bishnoi community protects it"],
    ["**Chir pine**","Western Himalayas — Uttarakhand, Himachal","Coniferous. The commonest pine of the lower Himalayan slopes (`1,000–1,800 m`)"]
   ]},

  {careful:"**The Western Ghats are an evergreen AND deciduous zone — it depends on which side.** The windward (western) slopes receive heavy rainfall (`>200 cm`) and carry **tropical evergreen** forests. The leeward (eastern) slopes, in the rain shadow, receive much less rain and carry **deciduous** forests. A question that asks about 'the forests of the Western Ghats' without specifying the slope is testing whether you know this distinction."}

 ]}

]});
