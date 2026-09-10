/* THE ANSWER KEY — data-geo.js
   Geography, built around the Himalayas.

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

id:"geo", n:"Geography", tab:"Geography", sub:"The Himalayas",
w:"India's physical divisions, and then the Himalayas in full — the three ranges, the four regions, the peaks, the passes, the glaciers and the rivers.",
intro:"The physical divisions first, so that the Himalayas have somewhere to sit. Then the mountains themselves: how they were formed, the three ranges running parallel from north to south, the four regions running west to east, and then the four things that are actually asked — peaks, passes, glaciers and rivers — each as its own table.",

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
 ]}

]});
