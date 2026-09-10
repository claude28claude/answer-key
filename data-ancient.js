/* THE ANSWER KEY — data-ancient.js
   Ancient India, cut to the slivers that are actually asked.

   WHAT IS LEFT OUT AND WHY. This is not a history of ancient India. It is the
   part of ancient India that appears in an SSC question: the site and what was
   found there, the king and the one thing he is known for, the text and who
   wrote it, the council and who presided. Interpretation, historiography and
   debate are left out except where the debate is itself the answer.

   DATES. Ancient dates are ranges, not points, and different textbooks give
   different ones. Where a date is genuinely settled — the Kalinga war, the
   accession of Kanishka, the Gupta era — it is given plainly. Where it is not,
   the range the standard textbooks use is given, and the fact that it is a
   range is stated rather than hidden behind a single confident number.

   THE TRAPS. Which site had the dockyard and which had the ploughed field.
   Which council was under which king. Which Chandragupta. Which river the
   Rig Veda calls holiest as against which it names most often. Each of those
   is in a Careful box.                                                       */

(window.SUBJECTS = window.SUBJECTS || []).push({

id:"ancient", n:"Ancient India", tab:"Ancient", sub:"Stone age to Harsha",
w:"From the stone age to Harsha: the Indus cities, the Vedas, the sixteen Mahajanapadas, Jainism and Buddhism, the Mauryas, the Guptas, and the Sangam south.",
intro:"The stone age and the Indus cities first, because they are asked as site-and-finding pairs and nothing else. Then the Vedas, the Mahajanapadas and the two heterodox faiths, which supply most of the questions on ancient India between them. Then the three empires — Maurya, Kushana, Gupta — and the Sangam south, which is a separate history and is asked separately.",

topics:[

/* ===================================================================== 1 */
{id:"prehistory", n:"The stone age and the first villages", hy:0,
 w:"Palaeolithic to Chalcolithic — the sites, and the single thing each one is famous for.",
 quick:[
  "**Bhimbetka** (Madhya Pradesh) — rock shelters and paintings, discovered by **V. S. Wakankar** in `1957`. A UNESCO World Heritage Site.",
  "**Mehrgarh** (Baluchistan) — the earliest evidence of **agriculture** (wheat and barley) and of settled village life in the subcontinent.",
  "**Burzahom** (Kashmir) — **pit dwellings**, and dogs buried with their masters.",
  "**Koldihwa** (Uttar Pradesh) — the earliest evidence of **rice** cultivation.",
  "**Adamgarh** (Madhya Pradesh) — the earliest evidence of the **domestication of animals**."
 ],
 blocks:[
  {h:"The four ages, in order",
   cols:["Age","Roughly","What defines it"],
   rows:[
    ["Palaeolithic","Up to c. 10,000 BCE","Hunting and gathering. Unpolished, chipped stone tools — hand-axes, cleavers, choppers. No pottery, no farming"],
    ["Mesolithic","c. 10,000–6000 BCE","**Microliths** — tiny stone blades hafted into wood or bone. The first domestication of animals; the beginning of burial with grave goods"],
    ["Neolithic","c. 6000–1000 BCE","**Polished** stone tools, agriculture, permanent settlement, pottery, the wheel. Different regions enter it at very different dates"],
    ["Chalcolithic","c. 3000–1000 BCE","Copper and stone used together. Painted pottery. Overlaps the Harappan cities in time but is a separate, village-level culture"]
   ]},

  {h:"The sites to know",
   cols:["Site","State or region","What it is known for"],
   rows:[
    ["Bhimbetka","Madhya Pradesh","Over 700 rock shelters with paintings running from the Palaeolithic onward. Found by **V. S. Wakankar**, 1957; UNESCO listed 2003"],
    ["Soan valley","Punjab, now Pakistan","The Soanian pebble-tool industry — the classic Lower Palaeolithic culture of the north-west"],
    ["Attirampakkam","Tamil Nadu","Acheulian hand-axes; among the oldest Palaeolithic sequences yet excavated in India"],
    ["Hunsgi and Isampur","Karnataka","Large Lower Palaeolithic sites in the Deccan"],
    ["Bagor","Rajasthan","The **largest Mesolithic site** in India, on the Kothari river"],
    ["Adamgarh","Madhya Pradesh","The **earliest evidence of animal domestication** in India"],
    ["Sarai Nahar Rai and Mahadaha","Uttar Pradesh","Mesolithic human burials, some of them double burials"],
    ["Bhimbetka (again)","Madhya Pradesh","Also a major Mesolithic site — the sequence is continuous"],
    ["Mehrgarh","Baluchistan","The **earliest farming village** in the subcontinent — wheat, barley, and later cotton and cattle. The ancestor site of the Harappan tradition"],
    ["Burzahom and Gufkral","Kashmir","**Pit dwellings** cut into the ground against the cold; dogs buried alongside their owners. *Gufkral* means the cave of the potter"],
    ["Chirand","Bihar","A Neolithic site remarkable for its **bone tools** — of antler and horn"],
    ["Koldihwa and Mahagara","Uttar Pradesh","The **earliest evidence of rice** in India"],
    ["Utnur and Piklihal","Andhra Pradesh, Karnataka","Neolithic **ash mounds** — the burnt remains of huge cattle pens"],
    ["Daojali Hading","Assam","Neolithic site of the north-east, with jadeite, which points to contact with China"],
    ["Inamgaon","Maharashtra","The best-excavated **Jorwe** Chalcolithic settlement, with evidence of irrigation channels"],
    ["Ahar and Gilund","Rajasthan","The Ahar or Banas Chalcolithic culture — copper-rich, black-and-red ware"],
    ["Navdatoli","Madhya Pradesh","Malwa Chalcolithic culture; a remarkably wide range of cultivated crops"]
   ]}
 ]},

/* ===================================================================== 2 */
{id:"indus", n:"The Indus Valley Civilisation", hy:1,
 w:"Site by site: who excavated it, which river it sat on, and the one find that is only there.",
 quick:[
  "Harappa was excavated in `1921` by **Daya Ram Sahni**; Mohenjodaro in `1922` by **R. D. Banerji** — both under **Sir John Marshall**, Director-General of the ASI, who announced the discovery in 1924.",
  "The mature phase runs roughly `2600–1900 BCE`. It is a **Bronze Age** civilisation: copper, bronze, gold and silver were known; **iron was not**.",
  "**Lothal** has the dockyard. **Kalibangan** has the ploughed field. **Dholavira** has the water reservoirs and the signboard. **Chanhudaro** is the only major city with **no citadel**.",
  "**Rakhigarhi** (Haryana) is the largest Harappan site in India; **Mohenjodaro** the largest overall.",
  "The script is **undeciphered**, and is written **boustrophedon** — right to left on the first line, left to right on the next."
 ],
 blocks:[
  {h:"The frame",
   swap:[
    ["Also called","The Harappan Civilisation","Named for the first site excavated, not the largest"],
    ["Mature phase","c. 2600–1900 BCE","Early Harappan c. 3300–2600; Late Harappan c. 1900–1300"],
    ["Metal age","Bronze Age","No iron anywhere in the mature phase"],
    ["Extent","Roughly 1.3 million sq km","The largest in area of the four early river-valley civilisations"],
    ["Discovered under","Sir John Marshall","Director-General of the Archaeological Survey of India"]
   ]},

  {h:"The sites and their single distinguishing find",
   cols:["Site","River and location","What is only there"],
   rows:[
    ["Harappa","Ravi — Sahiwal, Punjab, Pakistan","Six-plus-six rows of **granaries**; the **cemetery R-37** and the later **Cemetery H**; coffin burial; workmen's quarters. Excavated by **Daya Ram Sahni**, 1921"],
    ["Mohenjodaro","Indus — Larkana, Sindh, Pakistan","The **Great Bath**; the **Great Granary**, its largest building; the **Pashupati seal**; the bronze **Dancing Girl**; the steatite **bearded priest-king**. The name means the mound of the dead. Excavated by **R. D. Banerji**, 1922"],
    ["Lothal","Bhogava, near the Sabarmati — Gujarat","The **dockyard**, the only one in the civilisation; a **bead factory**; **rice husk**; fire altars; a double burial. Excavated by S. R. Rao"],
    ["Kalibangan","Ghaggar — Rajasthan","The **ploughed field**, the earliest anywhere; **fire altars**; wooden drains; camel bones. The name means black bangles. Excavated by B. B. Lal and B. K. Thapar"],
    ["Dholavira","Khadir Bet, Rann of Kutch — Gujarat","A **three-part city** (citadel, middle town, lower town) instead of two; giant **water reservoirs**; the ten-sign **signboard**. **UNESCO World Heritage Site, 2021**. Excavated by R. S. Bisht"],
    ["Rakhigarhi","Ghaggar — Hisar, Haryana","The **largest Harappan site in India**, and one of the largest anywhere"],
    ["Chanhudaro","Indus — Sindh, Pakistan","The **only major city with no citadel**. Bead-making, and a factory for bangles and seals. Excavated by N. G. Majumdar"],
    ["Banawali","Rangoi — Hisar, Haryana","Barley of a very high quality; a city laid out on a radial rather than a grid plan"],
    ["Surkotada","Gujarat, Kutch","**Horse bones** — disputed, and the only claim of its kind"],
    ["Ropar / Rupnagar","Sutlej — Punjab","The **first Harappan site excavated after independence**; a dog buried with a human"],
    ["Alamgirpur","Hindon — Meerut, Uttar Pradesh","The **easternmost** site"],
    ["Sutkagendor","Dasht — Baluchistan","The **westernmost** site; a trading post on the route to Mesopotamia"],
    ["Daimabad","Pravara — Maharashtra","The **southernmost** site; the bronze hoard, including the famous **bronze chariot**"],
    ["Manda","Chenab — Jammu","The **northernmost** site"]
   ]},

  {careful:"**Lothal has the dockyard; Kalibangan has the ploughed field.** These two are swapped in options more often than any other pair in ancient history. Fire altars are found at **both**, which is what makes the swap plausible."},

  {h:"Town planning and daily life",
   cols:["Feature","The detail that gets asked"],
   rows:[
    ["The grid","Streets cutting each other at right angles, dividing the city into blocks. The main street of Mohenjodaro runs north to south"],
    ["Two parts","A raised **citadel** to the west, holding the public buildings, and a larger **lower town** to the east where people lived. Dholavira has three parts, Chanhudaro none"],
    ["Bricks","Burnt bricks, made to a standard ratio of **4 : 2 : 1** — length, breadth, thickness"],
    ["Drainage","Covered drains along every street, with manholes for cleaning. The most advanced of any ancient civilisation, and the feature most often named as its hallmark"],
    ["The Great Bath","At Mohenjodaro. About **11.88 m by 7.01 m**, and **2.43 m deep**, with steps at both ends and a bitumen lining"],
    ["Weights","Made of chert, in a **binary** series for the small ones — 1, 2, 4, 8, 16, 32 — and decimal multiples above. 16 and its multiples are the commonest"],
    ["Crops","Wheat, barley, peas, sesame, mustard, cotton. **Rice only at Lothal and Rangpur.** They were the **first people in the world to grow cotton** — the Greeks called it *sindon*, after the Sindhu"],
    ["Animals","Humped bull, buffalo, elephant, camel, dog, cat. **No convincing evidence of the horse**; the Surkotada bones are disputed. **The lion is absent from the seals**"],
    ["Religion","Mother Goddess figurines; the **Pashupati seal** — a horned figure seated in a yogic posture surrounded by animals; the pipal tree; the humped bull. **No building has been identified with certainty as a temple**"],
    ["Burials","Extended burial, north-south, at Harappa and Kalibangan; the dead buried with pots and ornaments"]
   ]},

  {h:"The script, the seals, and the trade",
   list:[
    "The script has about **400 to 600 signs**, is **pictographic**, and remains **undeciphered**. It is written **boustrophedon** — right to left on one line and left to right on the next, the way an ox ploughs.",
    "Seals are mostly of **steatite**, square, with an animal and a line of script. The **unicorn** is the commonest animal on them.",
    "Mesopotamian records name a trading partner called **Meluhha**, which is generally taken to be the Indus region. Dilmun (Bahrain) and Magan (Oman) were the intermediate ports.",
    "A Harappan seal has been found at **Ur** in Mesopotamia, and Mesopotamian cylinder seals at Indus sites — the two-way find that establishes the trade.",
    "**Shortughai**, in Afghanistan on the Oxus, was a Harappan outpost, placed there for **lapis lazuli**."
   ]},

  {h:"Why it ended — the theories, none of them settled",
   cols:["Theory","Argued by","The problem with it"],
   rows:[
    ["Aryan invasion","Mortimer Wheeler, from unburied skeletons at Mohenjodaro","The skeletons are from different levels and different periods; the reading has been largely abandoned"],
    ["Flooding and river shift","M. R. Sahni, Robert Raikes","Explains particular sites, not the whole system"],
    ["Drying of the Ghaggar-Hakra","Various","Fits the abandonment of the eastern sites; monsoon weakening around 2000 BCE supports it. Currently the most favoured"],
    ["Deforestation and ecological exhaustion","Fairservis","Hard to demonstrate from the evidence available"],
    ["Decline of trade with Mesopotamia","Various","A contributing pressure rather than a cause"]
   ]}
 ]},

/* ===================================================================== 3 */
{id:"vedic", n:"The Vedic age", hy:1,
 w:"The four Vedas and what is in each, the two Vedic periods, and how they differ.",
 quick:[
  "**Rig Veda** — `1028` hymns in `10` mandalas. Books **II to VII** are the oldest (the family books); **Book IX** is entirely to Soma; **Book X** holds the **Purusha Sukta**, the first mention of the four varnas.",
  "The **Gayatri Mantra** is in Mandala III of the Rig Veda, addressed to **Savitri**, the sun.",
  "The river named **most often** in the Rig Veda is the **Sindhu**. The river called **holiest** — *naditama* — is the **Saraswati**. These are different questions with different answers.",
  "**Satyameva Jayate**, on the national emblem, comes from the **Mundaka Upanishad**.",
  "**Iron** — called *krishna ayas*, black metal — appears only in the **Later** Vedic period, not the early one."
 ],
 blocks:[
  {h:"The four Vedas",
   cols:["Veda","What it contains","The point that is asked"],
   rows:[
    ["Rig Veda","1028 hymns (suktas) in 10 mandalas, to the gods","The **oldest text in any Indo-European language**. Mandalas II–VII are the family books and the oldest layer; I and X are the latest"],
    ["Sama Veda","Melodies set to Rig Vedic verses, for the Udgatri priest","The **origin of Indian classical music**. Almost all its verses are borrowed from the Rig Veda"],
    ["Yajur Veda","Sacrificial formulae, in prose and verse, for the Adhvaryu priest","The **only Veda in prose as well as verse**. Split into Shukla (white) and Krishna (black) recensions"],
    ["Atharva Veda","Charms, spells, remedies, and the concerns of ordinary life","The **latest**, and the one **not counted in the *trayi***, the three-fold Veda. The oldest source for Indian medicine"]
   ]},

  {h:"The layers built on the Vedas",
   cols:["Layer","What it is"],
   rows:[
    ["Brahmanas","Prose explanations of the rituals. The **Shatapatha Brahmana** (attached to the Yajur Veda) is the largest and most important"],
    ["Aranyakas","The forest books — for those who had withdrawn from the village. The bridge from ritual to philosophy"],
    ["Upanishads","Philosophy: brahman, atman, karma, rebirth. Traditionally **108**, of which about **13 are the principal ones**. Also called **Vedanta**, the end of the Veda"],
    ["Vedangas","The six limbs: **Shiksha** (phonetics), **Kalpa** (ritual), **Vyakarana** (grammar), **Nirukta** (etymology), **Chhanda** (metre), **Jyotisha** (astronomy)"],
    ["Upavedas","**Ayurveda** (medicine, from the Rig or Atharva), **Dhanurveda** (archery, from the Yajur), **Gandharvaveda** (music, from the Sama), **Shilpaveda** (crafts, from the Atharva)"],
    ["The six systems","Samkhya (Kapila), Yoga (Patanjali), Nyaya (Gautama), Vaisheshika (Kanada), Mimamsa (Jaimini), Vedanta (Badarayana)"]
   ]},

  {h:"Early Vedic against Later Vedic",
   cols:["","Early Vedic (c. 1500–1000 BCE)","Later Vedic (c. 1000–600 BCE)"],
   rows:[
    ["Text","Rig Veda","The other three Vedas, the Brahmanas, the Upanishads"],
    ["Where","**Sapta Sindhu** — the land of seven rivers, in Punjab and the north-west","The **Ganga-Yamuna doab** and eastward"],
    ["Economy","**Pastoral** — the cow is the unit of wealth; *gavishti*, the search for cows, is the word for war","**Agricultural** — the plough, iron tools, and settled farming"],
    ["Metal","Copper and bronze (*ayas*)","**Iron** — *krishna ayas* or *shyama ayas*"],
    ["Pottery","Ochre Coloured Pottery","**Painted Grey Ware (PGW)**, and later Northern Black Polished Ware"],
    ["Politics","**Jana** (tribe), led by a **rajan** who is a chief and not a king. **Sabha**, **Samiti** and **Vidatha** check him","**Janapada** and territorial kingdom. Sabha and Samiti weaken; the king claims divinity through great sacrifices"],
    ["Sacrifices","Small, domestic","**Rajasuya** (consecration), **Ashvamedha** (horse sacrifice, for paramountcy), **Vajapeya** (chariot race, for rejuvenation)"],
    ["Chief gods","**Indra** (most hymns, about 250), **Agni** (second, about 200), **Varuna** (moral order, *rita*), Soma","**Prajapati** rises to the top; **Rudra** and **Vishnu** grow important; Indra and Agni decline"],
    ["Varna","Mentioned only in the late Purusha Sukta; based on occupation and not yet rigid","Hardened, hereditary, with the fourfold order fully in place"],
    ["Women","Attend the sabha; Ghosha, Lopamudra, Apala and Vishvavara compose hymns; no child marriage or sati","Position clearly declines; barred from assemblies and from the upper sacrifices"]
   ]},

  {careful:"**The Aryan question is unsettled, and the exam still uses the older answer.** The standard textbook position is that the Vedic people entered north-west India from Central Asia around 1500 BCE. Bal Gangadhar Tilak argued for an Arctic home; Max Muller for Central Asia; others for an indigenous origin. If asked what the *Rig Veda* itself describes, the answer is the Sapta Sindhu region."},

  {h:"The named things",
   cols:["Term","What it means"],
   rows:[
    ["Dasarajna","The **Battle of Ten Kings**, fought on the **Parushni** (Ravi). **Sudas** of the Bharata tribe defeated a confederacy of ten. The priest-rivalry of **Vasishtha** and **Vishvamitra** sits behind it"],
    ["Sapta Sindhu","The seven rivers: Sindhu, Vitasta (Jhelum), Asikni (Chenab), Parushni (Ravi), Vipasha (Beas), Shutudri (Sutlej), and the Saraswati"],
    ["Purohita, Senani, Gramani","The priest, the army commander, and the head of the village — the three officials of the early period. There was no standing army and no regular taxation"],
    ["Bali","A **voluntary** offering to the chief in the early period; it hardens into a compulsory tax later"],
    ["Nishka, Satamana, Krishnala","Gold and silver ornaments used as units of value. **They are not coins** — coinage begins later, with the punch-marked coins"],
    ["Ashramas","The four stages — brahmacharya, grihastha, vanaprastha, sannyasa. Fully formed only in the **Later** Vedic period"],
    ["Gotra","First appears in the **Later** Vedic period, along with the rule against marrying within it"]
   ]}
 ]},

/* ===================================================================== 4 */
{id:"mahajanapadas", n:"The sixteen Mahajanapadas and the rise of Magadha", hy:1,
 w:"The list and where it comes from, the four dynasties that built Magadha, and Alexander.",
 quick:[
  "The list of sixteen Mahajanapadas comes from the Buddhist **Anguttara Nikaya**, and a differing list from the Jain **Bhagavati Sutra**.",
  "Four dynasties built Magadha in order: **Haryanka → Shishunaga → Nanda → Maurya**.",
  "**Bimbisara** (Haryanka) was a contemporary of both the Buddha and Mahavira; his capital was **Rajgir** (Girivraja).",
  "**Udayin**, son of Ajatashatru, founded **Pataliputra** at the meeting of the Ganga and the Son.",
  "**Mahapadma Nanda** called himself *Ekarat*, sole sovereign, and *Sarva-kshatrantaka*, the destroyer of all Kshatriyas."
 ],
 blocks:[
  {h:"The sixteen, and their capitals",
   cols:["Mahajanapada","Capital","Modern region"],
   rows:[
    ["Magadha","Girivraja (Rajgir), later Pataliputra","South Bihar"],
    ["Anga","Champa","Bhagalpur, Bihar"],
    ["Kasi","Varanasi","Eastern Uttar Pradesh"],
    ["Kosala","Shravasti (north), Kushavati/Ayodhya (south)","Eastern Uttar Pradesh"],
    ["Vajji (Vrijji)","Vaishali","North Bihar — a **confederacy of eight clans**, the best-known early republic"],
    ["Malla","Kushinagar and Pava","Eastern Uttar Pradesh — a republic"],
    ["Chedi","Sotthivati (Shuktimati)","Bundelkhand"],
    ["Vatsa","Kaushambi","Allahabad region"],
    ["Kuru","Indraprastha","Delhi–Meerut"],
    ["Panchala","Ahichchhatra (north), Kampilya (south)","Rohilkhand, western UP"],
    ["Matsya","Viratanagara","Alwar and Jaipur, Rajasthan"],
    ["Surasena","Mathura","Braj region"],
    ["Assaka (Ashmaka)","Potali / Potana","On the Godavari — the only one south of the Vindhyas"],
    ["Avanti","Ujjayini (north), Mahishmati (south)","Malwa"],
    ["Gandhara","Taxila","North-west Pakistan"],
    ["Kamboja","Rajapura / Hataka","Beyond Gandhara"]
   ]},

  {h:"Why Magadha won",
   list:[
    "**Iron.** The richest iron deposits in eastern India lay close to Rajgir, at modern Jharkhand — weapons and, more importantly, axes and ploughshares to clear the forest.",
    "**Elephants.** The eastern forests supplied war elephants, which the western kingdoms had to buy.",
    "**The rivers.** Both capitals sat on water — Rajgir ringed by five hills, Pataliputra at the meeting of the Ganga and the Son, a natural fort on three sides.",
    "**Fertility.** The middle Ganga plain gave a large surplus and so a large standing army.",
    "**Rulers who were not fastidious.** Parricide is recorded for three successive Haryanka kings, and none of them was troubled by orthodox opinion about it."
   ]},

  {h:"The four dynasties",
   cols:["Dynasty","Rulers","What each is remembered for"],
   rows:[
    ["Haryanka (c. 544–412 BCE)","**Bimbisara**, Ajatashatru, Udayin","**Bimbisara** — matrimonial alliances with Kosala, Vaishali and Madra; annexed **Anga**; contemporary of the Buddha and Mahavira. **Ajatashatru** — killed his father; conquered Vaishali using the *rathamusala* (a chariot with a mace) and the *mahashilakantaka* (a stone-throwing engine); the **First Buddhist Council** met in his reign. **Udayin** — founded **Pataliputra**"],
    ["Shishunaga (c. 412–344 BCE)","Shishunaga, Kalashoka","Shishunaga finally destroyed the power of **Avanti**, ending the century-old rivalry. The **Second Buddhist Council** met at Vaishali under **Kalashoka**"],
    ["Nanda (c. 344–322 BCE)","**Mahapadma Nanda**, Dhana Nanda","The **first non-Kshatriya dynasty** of note. Mahapadma called himself **Ekarat** and **Sarva-kshatrantaka**. **Dhana Nanda** was the ruler whose army made Alexander's troops refuse to go further, and whom Chandragupta Maurya overthrew"],
    ["Maurya (322–185 BCE)","Chandragupta, Bindusara, Ashoka","See the Mauryan topic"]
   ]},

  {h:"Alexander in India",
   cols:["","Detail"],
   rows:[
    ["When","**326 BCE**. He entered through the Khyber, having taken Persia"],
    ["The battle","The **Battle of the Hydaspes** — on the **Jhelum** — against **Porus** (Puru). Alexander won, and restored Porus to his kingdom"],
    ["Ambhi","The king of **Taxila**, who submitted without fighting and helped Alexander against Porus"],
    ["Where he stopped","The **Beas** (Hyphasis). His army mutinied and refused to march on the Nandas"],
    ["Died","**323 BCE at Babylon**, aged 32, on the way home"],
    ["What it left","Direct India–Greece contact; four distinct routes opened by land and sea; Greek settlements in the north-west; and dated Greek accounts that give ancient Indian chronology its first firm pegs"]
   ]},

  {careful:"**Alexander and Chandragupta Maurya never fought.** Alexander invaded in 326 BCE and died in 323. Chandragupta overthrew the Nandas around 322 BCE and later defeated **Seleucus Nicator**, Alexander's general, in about 305 BCE. Questions offer 'Alexander was defeated by Chandragupta Maurya' as a plausible-looking option."}
 ]},

/* ===================================================================== 5 */
{id:"jain-buddh", n:"Jainism and Buddhism", hy:1,
 w:"The two heterodox faiths side by side — founders, doctrines, councils, and the split in each.",
 quick:[
  "**Mahavira** was the **24th** Tirthankara, not the founder. **Rishabhadeva** was the first, and is named in the **Rig Veda**.",
  "Mahavira added a **fifth** vow — **brahmacharya** — to Parshvanatha's four.",
  "The Buddha was born at **Lumbini**, enlightened at **Bodh Gaya**, first preached at **Sarnath**, and died at **Kushinagar**. Four places, four different states or countries.",
  "The **Fourth Buddhist Council**, under **Kanishka** in Kashmir, produced the split into **Hinayana** and **Mahayana**.",
  "Both faiths reject the authority of the Vedas, both reject animal sacrifice, and both were preached in the people's language — **Prakrit** by Mahavira, **Pali** by the Buddha — not Sanskrit."
 ],
 blocks:[
  {h:"Jainism — the frame",
   cols:["","Detail"],
   rows:[
    ["Tirthankaras","**24**. First **Rishabhadeva** (symbol: the bull; named in the Rig Veda). 23rd **Parshvanatha** (symbol: the snake; of Varanasi; 8th century BCE; taught four vows). 24th **Mahavira** (symbol: the lion)"],
    ["Mahavira","Born **540 BCE** at **Kundagrama** near Vaishali; of the Jnatrika clan. Father **Siddhartha**, mother **Trishala** (sister of the Lichchhavi chief Chetaka). Wife **Yashoda**, daughter **Priyadarshana**"],
    ["His life","Renounced at **30**; attained **Kaivalya** at **42** under a sal tree at **Jrimbhikagrama** on the bank of the **Rijupalika**; died at **Pavapuri** in **468 BCE**, aged 72"],
    ["Titles","**Jina** (conqueror), **Mahavira** (the great hero), **Nirgrantha** (free of bonds), **Kevalin**"],
    ["The five vows","**Ahimsa** (non-violence), **Satya** (truth), **Asteya** (non-stealing), **Aparigraha** (non-possession) — all four from Parshvanatha — and **Brahmacharya** (celibacy), which Mahavira added"],
    ["Three jewels","**Triratna** — right faith (samyak darshana), right knowledge (samyak jnana), right conduct (samyak charitra)"],
    ["Doctrines","**Anekantavada** — reality has many aspects. **Syadvada** — every statement is true only from some standpoint. **Sallekhana** — voluntary death by fasting"],
    ["On god","Does **not** deny the existence of gods, but places them below the Jina. Believes in **karma** and in the soul (*jiva*), including in plants and stones"]
   ]},

  {h:"Jain councils and the split",
   cols:["Council","Where and when","Presided by","Result"],
   rows:[
    ["First","**Pataliputra**, early 3rd century BCE","**Sthulabhadra**","The 12 **Angas** compiled. Bhadrabahu's followers, away in the south, rejected them"],
    ["Second","**Vallabhi** (Gujarat), 512 CE","**Devardhi Kshamasramana**","The canon finally written down, in **Ardhamagadhi** Prakrit"]
   ],
   note:"The split came from a twelve-year famine in Magadha in Chandragupta Maurya's time. Bhadrabahu led a group south to Shravanabelagola; those who stayed under Sthulabhadra took to wearing white. Hence **Digambara** (sky-clad, the southern group) and **Shvetambara** (white-clad)."},

  {h:"Jainism — the patrons and the places",
   cols:["Name or place","Detail"],
   rows:[
    ["Chandragupta Maurya","Is said to have abdicated, followed Bhadrabahu south, and died by sallekhana at **Shravanabelagola**"],
    ["Kharavela of Kalinga","1st century BCE. His **Hathigumpha inscription** at Udayagiri is the great Jain royal record"],
    ["Amoghavarsha","Rashtrakuta king; wrote the **Kavirajamarga** and abdicated to become a Jain monk"],
    ["Kumarapala","Chalukya of Gujarat, converted by **Hemachandra**"],
    ["Shravanabelagola","Karnataka. The **Gomateshwara (Bahubali)** monolith, raised by **Chamundaraya**, minister of the Western Ganga king. Anointed once every twelve years"],
    ["Dilwara temples","Mount Abu, Rajasthan — marble carving of the Solanki period"],
    ["Others","Ranakpur (Rajasthan), Palitana (Gujarat), Girnar, Khajuraho's Jain group, Ellora caves 30–34"]
   ]},

  {h:"Buddhism — the frame",
   cols:["","Detail"],
   rows:[
    ["Born","**563 BCE** at **Lumbini** (Nepal), of the **Shakya** clan. Father **Suddhodana** of Kapilavastu, mother **Mayadevi**, who died a week later; raised by his aunt **Prajapati Gautami**"],
    ["Family","Wife **Yashodhara**, son **Rahula**"],
    ["The four sights","An old man, a sick man, a corpse, and an ascetic — after which he left"],
    ["Renunciation","At **29** — the **Mahabhinishkramana**. His horse was **Kanthaka**, his charioteer **Channa**"],
    ["Enlightenment","At **35**, at **Bodh Gaya** (Uruvela), under a **pipal** tree on the bank of the **Niranjana** (Falgu). His first teachers had been Alara Kalama and Uddaka Ramaputta, both abandoned"],
    ["First sermon","At **Sarnath**, near Varanasi — the **Dharmachakra Pravartana**, the turning of the wheel of law — to five former companions"],
    ["Death","At **Kushinagar**, aged **80**, in **483 BCE** — the **Mahaparinirvana**"],
    ["Language","**Pali**"]
   ]},

  {h:"The Buddha's teaching, in the order it is asked",
   cols:["","Detail"],
   rows:[
    ["Four Noble Truths","There is suffering (*dukkha*); it has a cause (*samudaya*), which is craving; it can be ended (*nirodha*); there is a path to ending it (*magga*)"],
    ["Eightfold Path","Right view, right resolve, right speech, right action, right livelihood, right effort, right mindfulness, right concentration — the **Middle Path** between indulgence and mortification"],
    ["Triratna","**Buddha, Dhamma, Sangha** — the three refuges"],
    ["On god and soul","Silent on god; **denies a permanent soul** (*anatta*). This is the sharpest doctrinal break from both Hinduism and Jainism, which affirm the soul"],
    ["Tripitaka","**Vinaya Pitaka** (monastic rules), **Sutta Pitaka** (discourses), **Abhidhamma Pitaka** (philosophy). Written in Pali"],
    ["Symbols","Birth — the **lotus and the bull**. Renunciation — the **horse**. Enlightenment — the **bodhi tree**. First sermon — the **wheel (dharmachakra)**. Death — the **stupa**. The Buddha was not shown in human form until the Gandhara school"]
   ]},

  {h:"The four Buddhist councils",
   cols:["Council","Where and when","Patron king","President","Outcome"],
   rows:[
    ["First","**Rajgriha**, 483 BCE","**Ajatashatru**","**Mahakassapa**","The **Vinaya** recited by **Upali** and the **Sutta** by **Ananda**"],
    ["Second","**Vaishali**, 383 BCE","**Kalashoka**","Sabakami","The first schism — **Sthaviravadins** against **Mahasanghikas**, over ten relaxations of the rules"],
    ["Third","**Pataliputra**, 250 BCE","**Ashoka**","**Moggaliputta Tissa**","The **Abhidhamma Pitaka** added, completing the Tripitaka. Missionaries sent abroad"],
    ["Fourth","**Kundalvana, Kashmir**, 1st century CE","**Kanishka**","**Vasumitra**, with **Ashvaghosha** as deputy","The final split into **Hinayana** and **Mahayana**. Proceedings in **Sanskrit**"]
   ]},

  {h:"The three vehicles",
   swap:[
    ["Hinayana","The lesser vehicle","Also Theravada. Pali canon; the Buddha is a teacher, not a god; individual salvation by one's own effort. Sri Lanka, Myanmar, Thailand"],
    ["Mahayana","The greater vehicle","Sanskrit; the Buddha worshipped as divine; **bodhisattvas** who postpone their own nirvana to help others. China, Japan, Korea, Vietnam"],
    ["Vajrayana","The thunderbolt vehicle","Tantric; magical and ritual practice; the **taras**, female counterparts. Tibet, Bhutan, Ladakh, Mongolia"]
   ]},

  {careful:"**Ashoka did not convene the Fourth Council, and Kanishka did not convene the Third.** The pairing is Ashoka–Third–Pataliputra–Moggaliputta Tissa and Kanishka–Fourth–Kashmir–Vasumitra. This is the single most swapped pair in the Buddhism syllabus."},

  {h:"The two side by side",
   cols:["","Jainism","Buddhism"],
   rows:[
    ["Founder figure","Mahavira, the **24th** Tirthankara","Gautama Buddha, the founder"],
    ["Language","**Prakrit** (Ardhamagadhi)","**Pali**"],
    ["Soul","Affirms the soul (*jiva*) — in animals, plants and even matter","**Denies** a permanent soul (*anatta*)"],
    ["Ahimsa","Taken to its extreme — the mouth cloth, the sweeping brush","Practised, but moderately"],
    ["Asceticism","Severe; sallekhana is honoured","The **Middle Path**, explicitly rejecting extreme mortification"],
    ["Spread","Stayed in India, chiefly in the west and south. **Never left the subcontinent**","Spread across Asia and largely **disappeared from India**"],
    ["Royal patrons","Chandragupta Maurya, Kharavela, Amoghavarsha, Kumarapala","Bimbisara, Ajatashatru, Ashoka, Kanishka, Harshavardhana, the Palas"]
   ]}
 ]},

/* ===================================================================== 6 */
{id:"maurya", n:"The Mauryan Empire", hy:1,
 w:"Three rulers, the Arthashastra, and Ashoka's edicts — which edict says what.",
 quick:[
  "**Chandragupta Maurya** defeated **Seleucus Nicator** around `305 BCE`; **Megasthenes** came as Seleucus's ambassador and wrote the **Indica**.",
  "The **Kalinga war** was fought in `261 BCE`, in Ashoka's eighth regnal year, and is described in **Major Rock Edict XIII**.",
  "Ashoka's edicts were deciphered by **James Prinsep** in `1837`.",
  "Ashoka is called **Devanampiya Piyadasi** in almost all his edicts. His personal name appears only in a few — **Maski**, **Gujarra**, **Nettur** and **Udegolam**.",
  "The **Sarnath Lion Capital** is India's **national emblem**; the **Ashoka Chakra** on the flag comes from its abacus."
 ],
 blocks:[
  {h:"The three rulers",
   cols:["Ruler","Reign","What he is asked about"],
   rows:[
    ["Chandragupta Maurya","c. 322–297 BCE","Overthrew the Nandas with **Chanakya (Kautilya, Vishnugupta)**. Defeated **Seleucus Nicator** c. 305 BCE and took Baluchistan and Kabul, giving 500 elephants in return. Turned Jain in old age, went south with Bhadrabahu, and died by **sallekhana** at **Shravanabelagola**. Greek sources call him **Sandrocottus**"],
    ["Bindusara","c. 297–273 BCE","Called **Amitrochates** (slayer of foes) by the Greeks. Followed the **Ajivika** sect. Received **Deimachus**, ambassador of Antiochus I. Is said to have asked for sweet wine, figs and a sophist, and been told the last was not for export"],
    ["Ashoka","c. 268–232 BCE","The **Kalinga war** in 261 BCE and the conversion that followed. Sent **Mahendra** and **Sanghamitra** to Sri Lanka. Convened the **Third Buddhist Council**. Created the **Dhamma Mahamatras** in his fourteenth year"]
   ]},

  {h:"Ashoka's edicts — what is where",
   p:"Written mostly in **Prakrit** and in the **Brahmi** script. Two exceptions matter and are asked directly.",
   cols:["Edict or group","What it says or where it is"],
   rows:[
    ["Major Rock Edicts","**Fourteen** of them, at Girnar, Dhauli, Jaugada, Kalsi, Shahbazgarhi, Mansehra, Sopara, Yerragudi"],
    ["**Major Rock Edict XIII**","The **Kalinga war** — the remorse, the dead and deported, and the names of five Greek kings, which is what dates Ashoka's reign"],
    ["Major Rock Edict XII","**Religious tolerance** — honour other sects, and do not praise your own by disparaging theirs"],
    ["Major Rock Edict II","Medical treatment for men and animals; wells and roadside trees"],
    ["Major Rock Edict I","Bans animal sacrifice and the festival gatherings (*samajas*)"],
    ["Minor Rock Edicts","At **Maski, Gujarra, Nettur, Udegolam, Brahmagiri, Bhabru, Rupnath, Sasaram**. **Maski and Gujarra name Ashoka personally**"],
    ["Pillar Edicts","**Seven**, at Delhi-Topra, Delhi-Meerut, Allahabad, Lauriya-Araraj, Lauriya-Nandangarh, Rampurva"],
    ["Kandahar edicts","**Greek and Aramaic** — Afghanistan. The bilingual Kandahar inscription is the western limit of the empire"],
    ["Shahbazgarhi and Mansehra","Written in **Kharosthi**, which runs right to left — the only two rock edicts not in Brahmi"],
    ["Barabar caves","Near Gaya. Donated by Ashoka to the **Ajivikas** — the earliest rock-cut caves in India"],
    ["Rummindei pillar","Lumbini. Records Ashoka's visit and the tax remission granted to the village"],
    ["Schism edict","At Sarnath, Sanchi and Kaushambi — threatens expulsion for those who split the Sangha"]
   ]},

  {careful:"**Ashoka's dhamma is not Buddhism.** The edicts nowhere ask anyone to become a Buddhist. Dhamma is a code of conduct — obedience to elders, kindness to servants and animals, truthfulness, tolerance of other sects. Ashoka was personally a Buddhist and preached dhamma as a public ethic; the two are separate things and a question that conflates them is testing exactly this."},

  {h:"Administration",
   cols:["Office or term","What it was"],
   rows:[
    ["Mantriparishad","The council of ministers"],
    ["Samaharta","Chief of **revenue** — the highest civil officer after the king"],
    ["Sannidhata","Chief **treasurer**, in charge of the stores"],
    ["Rajukas","Officers of the districts, with both revenue and judicial power. Ashoka gave them authority to award punishments"],
    ["Pradeshika, Yukta","Provincial and subordinate officials, sent on tour every five years (*anusandhana*)"],
    ["Dhamma Mahamatras","Created by Ashoka in his fourteenth year to propagate and supervise dhamma"],
    ["The four provinces","**Taxila** for Uttarapatha, **Ujjain** for Avantirashtra, **Suvarnagiri** for Dakshinapatha, **Tosali** for Kalinga. **Pataliputra** was the centre, directly under the king"],
    ["The city","Megasthenes describes Pataliputra run by **six boards of five members** each — thirty in all — for crafts, foreigners, births and deaths, trade, manufactures, and the sales tax"],
    ["Espionage","**Gudhapurushas** — spies, of two kinds: *sanstha* (stationary) and *sanchari* (wandering)"]
   ]},

  {h:"The Arthashastra",
   list:[
    "By **Kautilya**, also called Chanakya and Vishnugupta — traditionally the minister of Chandragupta Maurya.",
    "**Fifteen books** (*adhikaranas*), 180 sections. A manual of statecraft, economics and war, not a history.",
    "**Rediscovered in 1905 by R. Shamasastry**, who published it in 1909 — before that it was known only by reputation.",
    "The **Saptanga** theory: a state has seven limbs — *swami* (king), *amatya* (minister), *janapada* (territory and people), *durga* (fort), *kosha* (treasury), *danda* (army), *mitra* (ally).",
    "The **Mandala** theory of foreign policy — your neighbour is your enemy and your neighbour's neighbour your friend — and the six-fold policy (*shadgunya*).",
    "Its date is disputed: some of it is clearly Mauryan, some clearly later. Treat it as a composite text."
   ]},

  {h:"Mauryan art and the end",
   cols:["","Detail"],
   rows:[
    ["Pillars","Monolithic, of Chunar sandstone, with the **Mauryan polish** that has never been reproduced. Free-standing, not part of a building — unlike the Achaemenid pillars they are often compared to"],
    ["Sarnath Lion Capital","Four lions back to back. **Adopted as India's State Emblem on 26 January 1950.** The abacus carries a bull, a horse, an elephant and a lion, separated by wheels — one of those wheels is the **Ashoka Chakra** on the flag"],
    ["Stupas","**Sanchi** — the great stupa was begun by Ashoka in brick; the stone casing and the gateways (toranas) are later, Satavahana work"],
    ["Caves","**Barabar and Nagarjuni** hills, near Gaya — given to the Ajivikas. The earliest rock-cut caves in India"],
    ["Yaksha and Yakshi figures","The Didarganj Yakshi (Patna) and the Parkham Yaksha — large free-standing polished figures of the period"],
    ["The end","The last Mauryan, **Brihadratha**, was killed in **185 BCE** by his own commander-in-chief **Pushyamitra Sunga**, who founded the Sunga dynasty"]
   ]}
 ]},

/* ===================================================================== 7 */
{id:"post-maurya", n:"After the Mauryas — Sungas to Kushanas", hy:1,
 w:"Sungas, Satavahanas, Indo-Greeks, Shakas and Kushanas, and the two schools of art.",
 quick:[
  "The **Indo-Greeks** were the first to issue **gold coins** in India, and the first to put a **king's portrait and name** on a coin.",
  "**Gautamiputra Satakarni** is the greatest Satavahana; the record of his reign is the **Nashik prashasti**, written by his mother **Gautami Balashri**.",
  "**Rudradaman I**'s **Junagadh rock inscription** (`150 CE`) is the **earliest long inscription in Sanskrit** — and records the repair of the **Sudarshana lake**, first built under Chandragupta Maurya.",
  "**Kanishka**'s accession in `78 CE` marks the start of the **Saka era**, which is India's national calendar.",
  "**Gandhara** art shows Greek influence and uses **grey schist**; **Mathura** art is indigenous and uses **red sandstone**."
 ],
 blocks:[
  {h:"Sungas and Kanvas",
   cols:["","Detail"],
   rows:[
    ["Sunga (185–73 BCE)","Founded by **Pushyamitra Sunga** after killing Brihadratha. Capital at **Vidisha** and Pataliputra"],
    ["Pushyamitra","Performed the **Ashvamedha** twice — a Brahmanical revival after the Mauryan patronage of Buddhism. **Patanjali**, author of the **Mahabhashya** on Panini's grammar, was his contemporary"],
    ["Art","The **Bharhut stupa** and the stone railing and gateways at **Sanchi** belong to this period"],
    ["Last Sunga","**Devabhuti**, killed by his own minister **Vasudeva**, who founded the **Kanva** dynasty (73–28 BCE)"]
   ]},

  {h:"The Satavahanas (the Andhras)",
   cols:["","Detail"],
   rows:[
    ["Founder","**Simuka**. Capital at **Pratishthana (Paithan)** on the Godavari"],
    ["Greatest ruler","**Gautamiputra Satakarni** (c. 106–130 CE). Destroyed the Shaka ruler **Nahapana** and restruck his coins. Called *ekabrahmana* and the destroyer of the Kshaharatas"],
    ["The record","The **Nashik prashasti**, an inscription set up by his mother **Gautami Balashri** — the main source for the dynasty"],
    ["Successor","**Vashishthiputra Pulumavi**, who lost ground to **Rudradaman I** of the Western Kshatrapas"],
    ["Hala","The seventeenth king; compiled the **Gathasaptashati** (Gaha Sattasai), 700 verses in **Prakrit**"],
    ["Coins","The **first Indian dynasty to issue lead coins** in quantity; also potin and copper. Their ship-and-mast coins are evidence of maritime trade"],
    ["Naming","**Matronymic** — kings named after their mothers (Gautami-putra, Vashishthi-putra), though succession was through the father"],
    ["Art","**Karle** and **Bhaja** chaitya halls; **Amaravati** and **Nagarjunakonda** stupas"]
   ]},

  {h:"The invaders from the north-west, in order",
   cols:["Group","Key ruler","What they are asked for"],
   rows:[
    ["Indo-Greeks (Bactrian Greeks)","**Menander** (Milinda), c. 165–145 BCE","**First gold coins in India**; **first coins with a king's portrait and name**. Menander was converted to Buddhism by **Nagasena**, and their dialogue is the **Milindapanho**. The **Heliodorus pillar** at Besnagar (Vidisha) records a Greek ambassador who became a Vaishnava"],
    ["Shakas (Scythians)","**Rudradaman I**, c. 130–150 CE","Five branches; the **Western Kshatrapas** of Ujjain mattered most. The **Junagadh rock inscription** of 150 CE is the **earliest long Sanskrit inscription**, recording the repair of the **Sudarshana lake**. **Vikramaditya** of Ujjain is said to have defeated the Shakas in 57 BCE, giving the **Vikrama Samvat**"],
    ["Parthians (Pahlavas)","**Gondophernes**","Ruled briefly in the north-west. St Thomas is said to have come to India in his reign"],
    ["Kushanas","**Kanishka**, accession 78 CE","See below"]
   ]},

  {h:"The Kushanas",
   cols:["","Detail"],
   rows:[
    ["Origin","A branch of the **Yuezhi** of Central Asia. **Kujula Kadphises** founded the line; **Vima Kadphises** issued a large gold coinage and was a Shaiva"],
    ["Kanishka","Accession **78 CE** — the year taken as the start of the **Saka era**, adopted as India's national calendar in 1957. Two capitals: **Purushapura (Peshawar)** and **Mathura**"],
    ["What he did","Convened the **Fourth Buddhist Council** in Kashmir; patronised Buddhism without suppressing anything else — his coins carry Greek, Persian and Indian deities together"],
    ["His court","**Ashvaghosha** (poet, wrote the *Buddhacharita*), **Vasumitra**, **Nagarjuna** (the Madhyamika philosopher, the doctrine of *shunyata*), **Charaka** (medicine), **Mathara**, **Agisala** (a Greek engineer)"],
    ["Coins","The **finest gold coins** of ancient India before the Guptas, on the Roman standard — which is itself evidence of the Roman trade"],
    ["Empire","Reached from Central Asia to the Ganga valley; controlled the **Silk Road**, which is where its wealth came from"],
    ["End","Declined in the 3rd century; the **Sassanians** took the western territories"]
   ]},

  {h:"Gandhara against Mathura — the difference that is asked",
   cols:["","Gandhara school","Mathura school"],
   rows:[
    ["Where","North-west — Taxila, Peshawar, Swat","Mathura, Uttar Pradesh"],
    ["Material","**Grey schist** (blue-grey slate), later stucco","**Spotted red sandstone** from Sikri"],
    ["Influence","**Greco-Roman** — wavy hair, a heavy draped robe with deep folds, sharp features. Called Greco-Buddhist","**Indigenous**, developing from the earlier yaksha figures"],
    ["The Buddha","Serene, ascetic, with a moustache in some early pieces; the halo is plain","Muscular, powerful, smiling, head shaven; the halo is richly decorated. The right hand is often in abhaya mudra"],
    ["Subject","Almost entirely Buddhist","Buddhist, **and also Jain and Brahmanical** — the only school of the three that carved for all three faiths"],
    ["Third school","**Amaravati** — lower Krishna valley, Satavahana patronage, in **white marble-like limestone**; narrative panels rather than single figures",""]
   ]},

  {careful:"**The Saka era begins in 78 CE and the Vikram Samvat in 57 BCE.** The Saka era is the **national calendar of India** and its year 1 is 78 CE, generally credited to Kanishka. Vikram Samvat runs 57 years *ahead* of the Christian era and is credited to Vikramaditya of Ujjain. Questions swap the two dates and the two founders freely."}
 ]},

/* ===================================================================== 8 */
{id:"sangam", n:"The Sangam Age and the far south", hy:1,
 w:"Chera, Chola and Pandya — capital, port, emblem — and the literature that names them.",
 quick:[
  "Three kingdoms: **Chera** (emblem the **bow**), **Chola** (the **tiger**), **Pandya** (the **fish**).",
  "**Tolkappiyam** is the earliest Tamil work to survive — a grammar.",
  "**Karikala** of the Cholas won the **Battle of Venni** and built the **Kallanai (Grand Anicut)** on the Kaveri — still in use.",
  "**Silappadikaram** (Ilango Adigal) and **Manimekalai** (Sattanar) are the twin epics, and are **post-Sangam**, not Sangam.",
  "Roman trade with the Tamil coast was so heavy that **Pliny** complained of the drain of Roman gold to India."
 ],
 blocks:[
  {h:"The three Sangams",
   list:[
    "Tradition names **three** literary assemblies (*sangams*), held under **Pandya** patronage.",
    "The **first** at Madurai, the **second** at Kapatapuram, the **third** at Madurai again. Only the works of the third survive.",
    "The literature was composed roughly between **300 BCE and 300 CE**, by 473 poets, of whom about 30 were women — **Avvaiyar** is the best known.",
    "The Sangam poems are secular, not religious, and are the best source for early south Indian society."
   ]},

  {h:"The literature",
   cols:["Work","What it is"],
   rows:[
    ["Tolkappiyam","By **Tolkappiyar**. The **oldest surviving Tamil work** — a grammar that also describes the society"],
    ["Ettuthogai","The **Eight Anthologies** — including Purananuru, Akananuru, Narrinai, Kurunthogai, Aingurunuru"],
    ["Pattuppattu","The **Ten Idylls** — including Thirumurugatrupadai, Pattinappalai, Mullaippattu"],
    ["Pathinenkilkanakku","The **Eighteen Minor Works** on ethics — including the **Tirukkural** of **Thiruvalluvar**, in 1330 couplets"],
    ["Silappadikaram","By **Ilango Adigal**. The story of Kovalan, Kannagi and the anklet — the **first Tamil epic**. **Post-Sangam**"],
    ["Manimekalai","By **Sattanar**. The sequel, Buddhist in outlook, about Kovalan's daughter. **Post-Sangam**"]
   ]},

  {h:"The three crowned kings",
   cols:["Kingdom","Capital","Port","Emblem","Best-known ruler"],
   rows:[
    ["Chera","**Vanji** (Karur)","**Muziris (Musiri)** and Tondi","**Bow and arrow**","**Senguttuvan**, who established the **Pattini cult** — the worship of Kannagi as the goddess of chastity"],
    ["Chola","**Uraiyur**, later **Puhar (Kaveripattinam)**","**Puhar**","**Tiger**","**Karikala** — won the **Battle of Venni**, built the **Kallanai** dam on the Kaveri, and cleared forest for cultivation"],
    ["Pandya","**Madurai**","**Korkai**","**Fish**","**Nedunjeliyan**, who won the Battle of Talaiyalanganam. Famous for **pearls**, and the only south Indian kingdom Megasthenes names"]
   ]},

  {h:"Society, trade and land",
   cols:["Term","What it means"],
   rows:[
    ["Tinai","The **five landscapes**, each with its own deity, people and way of life: **Kurinji** (hills, Murugan), **Mullai** (forest, Mayon/Vishnu), **Marutham** (farmland, Indra), **Neithal** (coast, Varuna), **Palai** (desert, Kottravai)"],
    ["Vellalar","The landowning cultivators — the dominant social group"],
    ["Uzhavar and Adimai","Ploughmen, and the lowest labouring group"],
    ["Enadi","A title of honour conferred by the king on a warrior"],
    ["Hero stones (nadukal)","Raised where a warrior fell, and worshipped — the earliest form of memorial in the Tamil country"],
    ["Muziris","The Chera port on the Malabar coast, named repeatedly in Roman sources. A Roman temple of Augustus stood there"],
    ["Yavanas","The Tamil word for the Greeks and later the Romans and Arabs — traders and mercenary bodyguards"],
    ["Periplus of the Erythraean Sea","A Greek merchant's handbook of the 1st century CE, the best outside source for the ports of the Indian coast"],
    ["Roman coin hoards","Found in quantity in Tamil Nadu and Kerala; **Pliny the Elder** complained in the *Naturalis Historia* of the drain of Roman gold eastward"]
   ]}
 ]},

/* ===================================================================== 9 */
{id:"gupta", n:"The Gupta Empire and Harsha", hy:1,
 w:"The golden age — its rulers, its science, and the inscription that records each reign.",
 quick:[
  "The **Gupta era** begins in `319–320 CE`, with **Chandragupta I**.",
  "**Samudragupta**'s reign is recorded in the **Allahabad Pillar Inscription (Prayag Prashasti)**, composed by **Harisena**. V. A. Smith called him the **Indian Napoleon**.",
  "**Fa-Hien** visited in the reign of **Chandragupta II**; **Hiuen Tsang** in the reign of **Harshavardhana**. Two different visitors, two different centuries.",
  "**Aryabhata**'s *Aryabhatiya* (`499 CE`) states that the earth rotates on its axis and gives a value of pi.",
  "**Harshavardhana** was stopped on the **Narmada** by **Pulakeshin II** of the Chalukyas — the one defeat of his career, recorded in the **Aihole inscription**."
 ],
 blocks:[
  {h:"The Gupta rulers",
   cols:["Ruler","Reign","What he is asked about"],
   rows:[
    ["Sri Gupta and Ghatotkacha","Late 3rd century CE","The two founders, titled only *maharaja*"],
    ["**Chandragupta I**","c. 319–335 CE","Took the title **Maharajadhiraja**. Married **Kumaradevi**, a **Lichchhavi** princess, and issued the king-and-queen type coins. The **Gupta era of 319–320 CE** starts with him"],
    ["**Samudragupta**","c. 335–375 CE","The **Allahabad Pillar Inscription**, composed by **Harisena**, lists his conquests: nine kings of the north uprooted, twelve of the south defeated and restored. Performed the **Ashvamedha**. His **lyre (vina) type coin** shows him playing"],
    ["**Chandragupta II Vikramaditya**","c. 375–415 CE","Destroyed the **Western Kshatrapas** and took Gujarat, gaining the western ports. Married his daughter **Prabhavatigupta** to the Vakataka **Rudrasena II**. **Fa-Hien** visited. The **Mehrauli iron pillar** at Delhi is attributed to a king Chandra, generally taken to be him"],
    ["**Kumaragupta I**","c. 415–455 CE","Title **Mahendraditya**. Founded **Nalanda Mahavihara**. The **Huna** attacks begin at the end of his reign"],
    ["**Skandagupta**","c. 455–467 CE","Repelled the **Hunas**. His **Junagadh inscription** records the repair of the **Sudarshana lake** — the third time that lake appears in Indian history"],
    ["After him","","Decline through weak successors, the Huna kings **Toramana** and **Mihirakula**, and the rise of feudatories such as the Maukharis and the later Guptas"]
   ]},

  {careful:"**Three different Chandraguptas.** *Chandragupta Maurya* (322 BCE), *Chandragupta I* (319 CE, Gupta), and *Chandragupta II Vikramaditya* (375 CE, Gupta). Seleucus was defeated by the first; Fa-Hien visited the third. Six hundred years separate the Maurya from the Guptas."},

  {h:"The golden age — the names",
   cols:["Name","Field","The one thing"],
   rows:[
    ["Aryabhata","Astronomy and mathematics","The **Aryabhatiya**, 499 CE. States that the **earth rotates on its axis**, explains eclipses by shadow, gives pi as 3.1416, and uses a place-value system"],
    ["Varahamihira","Astronomy","**Brihat Samhita** and **Panchasiddhantika** — a compendium of five astronomical systems, including a Greek one"],
    ["Brahmagupta","Mathematics","**Brahmasphuta Siddhanta**, 628 CE — the first text to treat **zero as a number** and to give rules for negative numbers. Slightly post-Gupta"],
    ["Kalidasa","Literature","**Abhijnanashakuntalam**, **Meghaduta**, **Raghuvamsha**, **Kumarasambhava**, **Vikramorvashiyam**, **Malavikagnimitram**"],
    ["Vishakhadatta","Drama","**Mudrarakshasa** — about Chanakya and the fall of the Nandas; and the **Devichandraguptam**"],
    ["Shudraka","Drama","**Mrichchhakatika** — the little clay cart"],
    ["Amarasimha","Lexicography","**Amarakosha**, the Sanskrit thesaurus"],
    ["Vagbhata","Medicine","**Ashtanga Hridaya** and **Ashtanga Samgraha**"],
    ["Dhanvantari","Medicine","One of the nine gems (Navaratna) of Chandragupta II's court"],
    ["Palakapya","Veterinary","The **Hastyayurveda**, on the care of elephants"]
   ]},

  {h:"Gupta art and architecture",
   list:[
    "The **Nagara** style of temple begins here — a square sanctum (*garbhagriha*) with a tower (*shikhara*) above it, on a raised platform.",
    "**Dashavatara temple, Deogarh** (Uttar Pradesh) — the earliest surviving stone temple with a shikhara.",
    "**Bhitargaon** (Uttar Pradesh) — the earliest surviving **brick** temple.",
    "**Ajanta caves** — the finest of the paintings, in caves 1, 2, 16 and 17, belong to the Gupta and Vakataka period. UNESCO listed.",
    "The **Sultanganj Buddha**, over two metres of solid copper, and the **Mehrauli iron pillar**, which has not rusted in sixteen centuries, show the metallurgy.",
    "Gupta **gold coins are called dinaras**, and are the most numerous gold issues of ancient India — though their gold content falls steadily over the dynasty."
   ]},

  {h:"Harshavardhana",
   cols:["","Detail"],
   rows:[
    ["Reign","**606–647 CE**. The **Harsha era** dates from his accession in 606"],
    ["Dynasty and capital","**Pushyabhuti (Vardhana)**. Capital moved from **Thanesar** to **Kannauj**"],
    ["The one defeat","**Pulakeshin II** of the Chalukyas of Badami stopped him at the **Narmada**, around 618–19 CE. Recorded in the **Aihole inscription** of Pulakeshin, composed by **Ravikirti**"],
    ["The visitor","**Hiuen Tsang (Xuanzang)**, in India 630–645 CE. Called the **Prince of Pilgrims**; his account is the **Si-Yu-Ki**. He studied at **Nalanda** under Shilabhadra"],
    ["The assemblies","A great assembly at **Kannauj** in honour of Hiuen Tsang, and the **Prayag** assembly held every five years, at which Harsha gave away everything he owned including his clothes"],
    ["His own writing","Three Sanskrit plays: **Ratnavali**, **Priyadarshika**, **Nagananda**"],
    ["His biographer","**Banabhatta**, who wrote the **Harshacharita** — the first historical biography in Sanskrit — and the romance **Kadambari**"],
    ["Religion","Began a Shaiva, became a patron of Buddhism, but supported all sects. Endowed **Nalanda** heavily"]
   ]},

  {h:"The foreign visitors, in order",
   cols:["Visitor","When","Whose reign","Wrote"],
   rows:[
    ["Megasthenes","c. 302–298 BCE","**Chandragupta Maurya**","**Indica** — survives only in quotations by later Greek writers"],
    ["Deimachus","c. 290 BCE","**Bindusara**","Ambassador of Antiochus I of Syria"],
    ["Fa-Hien (Faxian)","399–414 CE","**Chandragupta II**","**Fo-Kuo-Ki**. Came for Buddhist texts and barely mentions the king by name"],
    ["Hiuen Tsang (Xuanzang)","630–645 CE","**Harshavardhana**","**Si-Yu-Ki**. The single most detailed foreign account of early India"],
    ["I-tsing (Yijing)","671–695 CE","After Harsha","An account of Nalanda and of Buddhist practice"],
    ["Al-Biruni","c. 1017–1030 CE","Came with **Mahmud of Ghazni**","**Tahqiq-i-Hind (Kitab-ul-Hind)** — see Medieval India"]
   ]}
 ]}

]});
