/* THE ANSWER KEY — data-medieval.js
   Medieval India, cut to the slivers that are actually asked.

   WHAT THIS SUBJECT IS FOR. Between the Guptas and 1757 there is a great deal
   of history and a fairly small number of question shapes: which battle in
   which year against whom, which Sultan built what, which minister ran which
   revenue system, which saint belonged to which order, and which traveller
   wrote which book. This file is organised around those shapes.

   NAMES AND SPELLINGS. Medieval Indian names are transliterated half a dozen
   different ways — Khalji and Khilji, Firoz and Firuz, Tughlaq and Tughluq,
   Krishnadevaraya and Krishna Deva Raya. The commonest textbook form is used
   here, and the alternative is given where a question is likely to use it.

   DATES. Regnal dates for the Sultanate and the Mughals are firm to the year
   and are given plainly. Battle years are firm. Birth years of saints are not,
   and are given as the tradition has them, marked as traditional where that
   matters.                                                                   */

(window.SUBJECTS = window.SUBJECTS || []).push({

id:"medieval", n:"Medieval India", tab:"Medieval", sub:"The Sultanate, the Mughals, the Marathas, and the Europeans",
w:"The Rajputs, the Delhi Sultanate, the Khaljis and Tughlaqs, Vijayanagara, the Mughals and their administration, the Marathas, the Bhakti and Sufi movements, the Sikh Gurus, medieval architecture, and the arrival of the Europeans.",
intro:"Medieval India from the Rajputs through the Sultanate, the Mughals, and the Marathas, with two new sections: how the Mughal state was actually run (the mansabdari system, revenue, and provincial administration), and the arrival of the five European powers — Portuguese, Dutch, English, French, and Danish — the questions on which turn on dates, first factories, and the order of arrival.",

topics:[

/* ===================================================================== 1 */
{id:"early-medieval", n:"The Rajputs, and the invasions from the north-west", hy:1,
 w:"The tripartite struggle for Kannauj, the Rajput clans, and the road from Sindh in 712 to Tarain in 1192.",
 quick:[
  "The **tripartite struggle** for **Kannauj** was fought between the **Palas** of Bengal, the **Gurjara-Pratiharas** of Malwa and the **Rashtrakutas** of the Deccan, from the 8th to the 10th century.",
  "**Sindh** was taken by the Arabs under **Muhammad bin Qasim** in `712 CE`, defeating **Dahir**.",
  "**Mahmud of Ghazni** raided India about **seventeen** times between 1000 and 1027, the most famous being the sack of **Somnath** in `1025`. He never tried to rule.",
  "**First Battle of Tarain, 1191** — Prithviraj Chauhan **beat** Muhammad Ghori. **Second Battle of Tarain, 1192** — Ghori beat Prithviraj. The order matters.",
  "**Battle of Chandawar, 1194** — Ghori defeated **Jaichand** of Kannauj, which finished Rajput resistance in the Ganga valley."
 ],
 blocks:[
  {h:"The tripartite struggle",
   cols:["Power","Founder and best-known ruler","What each is asked for"],
   rows:[
    ["Palas of Bengal","**Gopala** founded it; **Dharmapala** and **Devapala** were the great rulers","Buddhist. **Dharmapala founded Vikramshila** university and revived Nalanda. The **Pala school** of bronze and manuscript painting"],
    ["Gurjara-Pratiharas","**Nagabhata I** founded it; **Mihira Bhoja** was the greatest","Held Kannauj longest. Their break-up produced most of the Rajput states. **Al-Masudi** describes their strength"],
    ["Rashtrakutas of Manyakheta","**Dantidurga** founded it; **Krishna I**, **Amoghavarsha** and **Krishna III**","**Krishna I built the Kailasa temple at Ellora** — cut from a single rock, top down. **Amoghavarsha** wrote the **Kavirajamarga**, the first Kannada work on poetics, and turned Jain"]
   ]},

  {h:"The Rajput clans",
   cols:["Clan","Where","The ruler and the fact"],
   rows:[
    ["Chauhans (Chahamanas)","Ajmer, later Delhi","**Prithviraj III (Prithviraj Chauhan)** — won Tarain I, lost Tarain II. **Chand Bardai** wrote the **Prithviraj Raso** about him"],
    ["Gahadavalas","Kannauj and Varanasi","**Jaichand**, defeated at Chandawar in 1194"],
    ["Paramaras","Malwa, capital Dhar","**Raja Bhoja** — a scholar-king who wrote on almost everything; founded the Bhojshala at Dhar and the Bhojpur lake"],
    ["Solankis (Chalukyas of Gujarat)","Anhilwara","**Bhima I**, in whose reign Mahmud sacked **Somnath**. The **Dilwara** and **Modhera** temples belong to this line"],
    ["Chandelas","Bundelkhand, capital Khajuraho","**Dhanga** and **Vidyadhara** — the **Khajuraho** temples, including the Kandariya Mahadeva, are theirs. UNESCO listed"],
    ["Tomaras","Delhi","Traditionally founded Dhillika (Delhi) in 736 CE; displaced by the Chauhans"],
    ["Guhilas / Sisodias","Mewar, capital Chittor then Udaipur","The line of **Rana Kumbha**, **Rana Sanga** and **Maharana Pratap**"],
    ["Kalachuris","Tripuri, near Jabalpur","Also called Chedis"]
   ],
   note:"The Rajputs' recurring weakness in every account is the same: they fought as individual clans for personal honour, never combined for long, and had no answer to mounted archery or to a commander willing to break a truce."},

  {h:"The invasions, in order",
   cols:["Year","Event","What came of it"],
   rows:[
    ["`712`","**Muhammad bin Qasim** takes **Sindh**, defeating **Dahir** at Rewar","An Arab province in Sindh and Multan. Politically a dead end — it spread no further — but the first Muslim territory in India. The **Chachnama** is the chief source"],
    ["`1000–1027`","**Mahmud of Ghazni**'s raids, about seventeen of them","Plunder, not conquest. **Somnath, 1025**, was the richest. He annexed only Punjab. **Al-Biruni** came with him and wrote the **Kitab-ul-Hind (Tahqiq-i-Hind)**; **Firdausi**, author of the *Shahnama*, was at his court"],
    ["`1178`","Muhammad Ghori defeated at **Kayadara** by the Solanki forces of Gujarat","His one early failure; he turned to the Punjab route instead"],
    ["`1191`","**First Battle of Tarain** — **Prithviraj Chauhan wins**","Ghori is wounded and escapes"],
    ["`1192`","**Second Battle of Tarain** — **Ghori wins**","Prithviraj captured and killed. The decisive battle of medieval north India"],
    ["`1194`","**Battle of Chandawar** — Ghori defeats **Jaichand** of Kannauj","The Ganga-Yamuna doab opens up. Ghori goes home and leaves **Qutbuddin Aibak** in charge"],
    ["`1206`","Ghori is assassinated","Aibak declares himself Sultan at Lahore — the **Delhi Sultanate** begins"]
   ]},

  {careful:"**Mahmud of Ghazni and Muhammad Ghori are two different men, two centuries and two different purposes apart.** Mahmud raided for treasure between 1000 and 1027 and never intended to stay. Ghori conquered between 1175 and 1206 in order to rule, and it is his general Aibak who founds the Sultanate. Questions rely on the similar names."}
 ]},

/* ===================================================================== 2 */
{id:"slave", n:"The Delhi Sultanate — the Slave dynasty", hy:1,
 w:"1206 to 1290: Aibak, Iltutmish, Raziya and Balban.",
 quick:[
  "**Qutbuddin Aibak** (1206–1210) founded it, began the **Qutub Minar**, and died at Lahore falling from his horse while playing **chaugan** (polo).",
  "**Iltutmish** (1210–1236) is the **real founder** — he moved the capital to **Delhi**, introduced the **iqta**, struck the silver **tanka** and copper **jital**, and created the **Chalisa** (Turkan-i-Chihalgani), the corps of forty nobles.",
  "**Raziya** (1236–1240) is the **only woman ever to sit on the throne of Delhi**.",
  "**Balban** (1266–1287) called himself **Zill-i-Ilahi**, the shadow of God, enforced **sijda** and **paibos**, destroyed the Chalisa, and created the **Diwan-i-Arz**, the military department.",
  "Five dynasties in all: **Slave → Khalji → Tughlaq → Sayyid → Lodi**, 1206 to 1526."
 ],
 blocks:[
  {h:"The rulers",
   cols:["Ruler","Reign","What he or she is asked about"],
   rows:[
    ["**Qutbuddin Aibak**","1206–1210","A slave of Muhammad Ghori. Called **Lakh Baksh**, the giver of lakhs. Began the **Qutub Minar** in honour of the Sufi Qutbuddin Bakhtiyar Kaki; built the **Quwwat-ul-Islam** mosque at Delhi and the **Adhai Din ka Jhopra** at Ajmer. Capital at **Lahore**. Died playing chaugan"],
    ["Aram Shah","1210","Set aside within a year"],
    ["**Iltutmish**","1210–1236","Son-in-law of Aibak. Moved the capital to **Delhi**. Saved the Sultanate by refusing asylum to Jalaluddin Mangbarni and so keeping **Chengiz Khan** out. Received the **mansur**, the Caliph's letter of investiture, in **1229**, which made the Sultanate legitimate in Islamic law. Completed the **Qutub Minar**. Introduced the **iqta** system, the silver **tanka** and copper **jital**, and organised the **Chalisa**"],
    ["Ruknuddin Firoz","1236","Set aside by the nobles in favour of his sister"],
    ["**Raziya**","1236–1240","Nominated by Iltutmish over his sons. The **only woman to rule Delhi**. Discarded the veil and held open court. Overthrown by the Turkish nobles, who would not accept a woman"],
    ["Bahram Shah, Masud Shah, Nasiruddin Mahmud","1240–1266","The period of the Chalisa's dominance — the nobles made and unmade sultans"],
    ["**Ghiyasuddin Balban**","1266–1287","Had been Nasiruddin's deputy (**Naib**) for twenty years before taking the throne himself. See below"],
    ["Kaiqubad and Kayumars","1287–1290","The dynasty collapses; Jalaluddin Khalji takes over"]
   ]},

  {h:"Balban's theory of kingship",
   list:[
    "Took the title **Zill-i-Ilahi** — the shadow of God on earth — and traced his descent to the mythical Turkish hero **Afrasiyab**.",
    "Enforced **sijda** (prostration before the sultan) and **paibos** (kissing his feet) at court — Persian practices that orthodox Muslims objected to as idolatrous.",
    "Introduced the Persian festival of **Nauroz** at court, and banned laughter and wine in his presence.",
    "**Destroyed the Chalisa** by poisoning, exiling or executing its members — the nobility was never again able to make a sultan.",
    "Created the **Diwan-i-Arz**, the military department, under an **Ariz-i-Mumalik**, and separated the army from the nobles' private followings.",
    "Policy of **blood and iron** towards rebels; refortified the north-west against the Mongols and did not expand elsewhere.",
    "**Amir Khusrau** began his career at Balban's court."
   ]}
 ]},

/* ===================================================================== 3 */
{id:"khalji-tughlaq", n:"The Khaljis and the Tughlaqs", hy:1,
 w:"Alauddin Khalji's market control, Muhammad bin Tughlaq's two famous failures, and Firoz Shah's public works.",
 quick:[
  "**Alauddin Khalji** (1296–1316) was the **first Sultan to keep a large permanent standing army paid in cash**, and the first to control market prices through the **Diwan-i-Riyasat**.",
  "His revenue was assessed by **measurement (masahat)** at **half** the produce — the highest demand of the Sultanate.",
  "**Malik Kafur** led the Deccan campaigns that took Alauddin's authority as far as **Madurai**.",
  "**Muhammad bin Tughlaq** (1325–1351) is remembered for two failures: moving the capital to **Daulatabad** in `1327`, and the **token currency** of copper and brass in `1329–30`.",
  "**Firoz Shah Tughlaq** (1351–1388) made **jizya** a separate tax, dug canals, founded four towns, and moved two **Ashokan pillars** to Delhi."
 ],
 blocks:[
  {h:"The Khaljis, 1290–1320",
   cols:["Ruler","Reign","Detail"],
   rows:[
    ["Jalaluddin Khalji","1290–1296","Ended the Turkish monopoly on the throne — the first non-Turk. Mild to the point of weakness; murdered by his nephew Alauddin at Kara"],
    ["**Alauddin Khalji**","1296–1316","See below. Called himself **Sikandar-i-Sani**, the second Alexander"],
    ["Mubarak Shah","1316–1320","Alauddin's son; reversed almost everything his father had done"],
    ["Khusrau Khan","1320","A converted Hindu general who seized the throne for a few months; overthrown by Ghazi Malik, who became Ghiyasuddin Tughlaq"]
   ]},

  {h:"Alauddin Khalji — the four measures",
   cols:["Measure","What it was"],
   rows:[
    ["The standing army","The **first Sultan to pay a large army directly in cash** from the treasury rather than through iqta assignments. Introduced the **dagh** (branding of horses) and the **chehra** (a descriptive roll of each soldier) to stop fraud"],
    ["Market control","Prices for grain, cloth, horses, slaves and cattle were **fixed by the state** and enforced by the **Diwan-i-Riyasat** under a **Shahna-i-Mandi**. Grain was stockpiled in state granaries. **Ziauddin Barani** describes the whole system; it collapsed after Alauddin's death"],
    ["Land revenue","Assessed by **measurement (masahat)** at **half the produce** — *biswa* as the unit. The intermediaries (khuts, muqaddams, chaudharis) lost their privileges; the state dealt with the peasant directly"],
    ["Control of the nobility","Banned wine, gambling and social gatherings among nobles; confiscated charitable and religious grants; built a spy system (**barids** and **munhiyans**). Marriage alliances among nobles required his permission"]
   ]},

  {h:"Alauddin's conquests",
   cols:["Campaign","Year","Note"],
   rows:[
    ["Gujarat","1299","Kafur was captured here and brought into service"],
    ["Ranthambhore","1301","Hammira Deva of the Chauhans killed"],
    ["Chittor","**1303**","Rana Ratan Singh defeated. The **Padmini** legend belongs to this siege, from Malik Muhammad Jayasi's **Padmavat**, written more than two centuries later"],
    ["Malwa","1305",""],
    ["Devagiri, Warangal, Dwarasamudra, Madurai","1307–1311","Under **Malik Kafur**. The southern kingdoms were made tributary, not annexed — Alauddin took tribute and left them standing"],
    ["Mongol invasions","1297–1308","Six major Mongol attacks, all repelled. The reason the standing army existed"]
   ]},

  {h:"The Tughlaqs, 1320–1414",
   cols:["Ruler","Reign","Detail"],
   rows:[
    ["Ghiyasuddin Tughlaq","1320–1325","Founded **Tughlaqabad**. Died when a wooden pavilion collapsed on him at Afghanpur — whether by accident or by his son's design is still argued"],
    ["**Muhammad bin Tughlaq**","1325–1351","The most learned and least successful Sultan. See below. **Ibn Battuta** arrived in 1333 and served as qazi of Delhi for years — his **Rihla** is the great source"],
    ["**Firoz Shah Tughlaq**","1351–1388","See below"],
    ["Later Tughlaqs","1388–1414","Break-up. **Timur** sacked Delhi in **1398** and left it in ruins"]
   ]},

  {h:"Muhammad bin Tughlaq's five schemes",
   cols:["Scheme","What happened"],
   rows:[
    ["Transfer of the capital","**1327**, from Delhi to **Devagiri**, renamed **Daulatabad** — chosen because it was central to an empire that now reached the far south. The whole administration and much of the population were moved 1,500 km; two years later it was moved back"],
    ["Token currency","**1329–30**. Bronze and copper coins issued at the **face value of silver** — sound in principle, and done in China and Persia. It failed because the mint was not a monopoly: every household could and did forge them, and the treasury had to redeem the forgeries"],
    ["Taxation of the Doab","Raised at exactly the moment a famine struck. Produced a peasant rebellion and the abandonment of villages"],
    ["Khurasan expedition","An army of 370,000 raised for a campaign in Central Asia, paid for a year, and then disbanded without marching"],
    ["Qarachil expedition","A campaign into the Kumaon hills that was destroyed by the terrain and the weather"],
    ["Diwan-i-Kohi","A **department of agriculture**, with state loans (*sondhar*) to bring waste land under the plough — the one scheme that was a sound idea competently begun, and it too failed for want of follow-through"]
   ]},

  {h:"Firoz Shah Tughlaq's public works",
   list:[
    "Made **jizya** a **separate tax** collected from non-Muslims, where it had previously been merged with land revenue — a change of principle, not just of accounting.",
    "Dug **five canals**, the largest from the Yamuna to Hissar, and levied a **haqq-i-sharb** (irrigation tax) of a tenth on the water.",
    "Founded four towns: **Firozabad** (in Delhi), **Hissar**, **Fatehabad** and **Jaunpur**.",
    "Created the **Diwan-i-Khairat** (a department for charity, and for the marriage of poor girls), the **Diwan-i-Bundagan** (a department for slaves — he had 180,000 of them), and an employment bureau.",
    "**Moved two Ashokan pillars** to Delhi — one from Topra, one from Meerut. He had no idea what the writing on them said; he thought them monuments to some earlier king.",
    "Made **iqtas hereditary** and stopped branding horses — both reversals of Alauddin, and both weakened the army.",
    "Wrote the **Futuhat-i-Firozshahi**, his own account of his reign. **Ziauddin Barani** (Tarikh-i-Firozshahi) and **Shams-i-Siraj Afif** were at his court."
   ]},

  {careful:"**Muhammad bin Tughlaq's token currency was not a foolish idea; it was a badly policed one.** Token coinage worked in Persia and China at the same period. What defeated it was that the coins were of ordinary bronze, easily copied, and the state had no monopoly on minting. Questions sometimes offer 'the idea was unsound' as an option — the standard textbook answer is that the *execution* was."}
 ]},

/* ===================================================================== 4 */
{id:"sultanate-admin", n:"Sayyids, Lodis, and how the Sultanate was run", hy:1,
 w:"The last two dynasties, the departments, the taxes, and the iqta.",
 quick:[
  "**Sayyid dynasty** (1414–1451): founded by **Khizr Khan**, Timur's deputy — the shortest-lived of the five.",
  "**Lodi dynasty** (1451–1526): the **first Afghan** dynasty of Delhi. **Bahlol**, **Sikandar**, **Ibrahim**.",
  "**Sikandar Lodi founded Agra** in `1504` and made it his capital; he also fixed a standard yard, the **Gaz-i-Sikandari**.",
  "The Sultanate's four taxes were **Kharaj** (land), **Zakat** (a religious levy on Muslims), **Jizya** (on non-Muslims) and **Khams** (a share of war booty).",
  "An **iqta** was an assignment of the *revenue* of a piece of land in place of a salary — not a grant of the land itself."
 ],
 blocks:[
  {h:"Sayyids and Lodis",
   cols:["Ruler","Reign","Detail"],
   rows:[
    ["Khizr Khan","1414–1421","Timur's deputy at Multan. Never took the title of Sultan; ruled in the name of Timur's successor"],
    ["Mubarak Shah","1421–1434","The **Tarikh-i-Mubarakshahi** of Yahya bin Ahmad is the source for the period"],
    ["Muhammad Shah, Alam Shah","1434–1451","Alam Shah handed Delhi to Bahlol Lodi and retired to Badaun"],
    ["**Bahlol Lodi**","1451–1489","The **first Afghan** Sultan. Treated his nobles as equals — the Afghan tribal idea of kingship, not the Turkish absolutist one. Annexed Jaunpur"],
    ["**Sikandar Lodi**","1489–1517","The ablest of the three. **Founded Agra in 1504** and moved his capital there. Standardised the yard as the **Gaz-i-Sikandari**. Wrote poetry under the name Gulrukhi"],
    ["**Ibrahim Lodi**","1517–1526","Tried to impose Turkish-style absolutism on Afghan nobles who would not have it. His uncle Alam Khan and **Daulat Khan Lodi** of Punjab invited **Babur** in. Killed at the **First Battle of Panipat, 1526**"]
   ]},

  {h:"The departments",
   cols:["Department","In charge of"],
   rows:[
    ["Diwan-i-Wizarat","**Finance and revenue**, under the **Wazir**. The senior department. Its accounts branches were the *Mustakhraj* (arrears) and the *Mushrif-i-Mumalik* (accountant general)"],
    ["Diwan-i-Arz","**The military**, under the **Ariz-i-Mumalik**. Created by **Balban**. Recruitment, equipment, the *dagh* and the *chehra*"],
    ["Diwan-i-Insha","**Royal correspondence**, under the **Dabir-i-Khas**"],
    ["Diwan-i-Risalat","**Religious matters, appeals and pious foundations**. Some historians read it as a foreign-affairs department instead"],
    ["Diwan-i-Qaza","**Justice**, under the **Qazi-ul-Quzat**, the chief judge"],
    ["Barid-i-Mumalik","**Intelligence** — the news-writers (*barids*) posted in every district, and the secret reporters (*munhiyans*)"],
    ["Sadr-us-Sudur","**Charity and religious endowments** — often the same person as the chief qazi"],
    ["Diwan-i-Kohi","**Agriculture** — created by Muhammad bin Tughlaq"],
    ["Diwan-i-Khairat, Diwan-i-Bundagan","**Charity** and **slaves** — both created by Firoz Shah Tughlaq"]
   ]},

  {h:"The taxes",
   cols:["Tax","On whom, and how much"],
   rows:[
    ["**Kharaj**","Land revenue, from all cultivators. Between a fifth and a half of the produce depending on the reign; **half** under Alauddin Khalji"],
    ["**Zakat**","A religious levy on **Muslims** with property above a threshold, at **2.5 per cent**, spent on specified charitable heads"],
    ["**Jizya**","A tax on **non-Muslims** in return for protection and exemption from military service. Women, children, the old, the disabled and Brahmins were generally exempt — **until Firoz Shah Tughlaq, who taxed Brahmins too**"],
    ["**Khams**","The state's share of **war booty**. Islamic law gives the state a **fifth** and the soldiers four-fifths; **Alauddin Khalji reversed the proportion**, taking four-fifths for the state"],
    ["Others","**Ghari** (a house tax) and **Charai** (a grazing tax), both introduced by Alauddin Khalji"]
   ]},

  {h:"The iqta",
   list:[
    "An **iqta** was an assignment of the **revenue** of a defined area, given to an officer (**iqtadar** or **muqti**) in place of a cash salary. The land itself stayed with the state.",
    "The iqtadar collected the revenue, kept his own pay and the pay of his troops, and sent the surplus (**fawazil**) to the centre.",
    "Introduced by **Iltutmish**; systematised, audited and made strictly transferable by **Alauddin Khalji** and **Balban**.",
    "**Firoz Shah Tughlaq made iqtas hereditary**, which turned officers into landholders and is one of the standard explanations for the Sultanate's military decline.",
    "The village-level intermediaries — **khut**, **muqaddam**, **chaudhari** — collected from the peasants and were the layer Alauddin attacked and Firoz restored."
   ]},

  {h:"The provincial kingdoms that broke away",
   cols:["Kingdom","Ruling house","Known for"],
   rows:[
    ["Jaunpur","Sharqi","A great centre of Indo-Islamic architecture — the Atala and Jama Masjids. Called the Shiraz of the East"],
    ["Malwa","Ghuri, then Khalji, capital Mandu","The Jahaz Mahal and Hindola Mahal at Mandu; Rani Roopmati and Baz Bahadur"],
    ["Gujarat","Muzaffarid","**Ahmad Shah I** founded **Ahmedabad** in 1411. **Mahmud Begarha** was the greatest ruler"],
    ["Bengal","Ilyas Shahi, then Hussain Shahi","**Alauddin Hussain Shah** patronised **Chaitanya** and Bengali literature"],
    ["Kashmir","Shah Miri","**Zain-ul-Abidin** (1420–1470), called **Bud Shah** — the tolerant one, who brought papier-mâché, shawl-weaving and paper-making to Kashmir"],
    ["Mewar","Sisodia","**Rana Kumbha** built the **Vijay Stambha** at Chittor; **Rana Sanga** fought Babur at Khanwa"],
    ["Marwar","Rathore","**Rao Jodha** founded Jodhpur in 1459"],
    ["Kamarupa, Ahom","Ahom","The Ahoms held Assam against the Mughals for two centuries; **Lachit Borphukan** won the **Battle of Saraighat, 1671**"]
   ]}
 ]},

/* ===================================================================== 5 */
{id:"vijayanagara", n:"Vijayanagara and the Bahmani kingdom", hy:1,
 w:"Two southern powers, 1336 to the 17th century — their capitals, their great figures and the battle that ended one of them.",
 quick:[
  "**Vijayanagara** was founded in `1336` by **Harihara I** and **Bukka I** at **Hampi** on the **Tungabhadra**, on the advice of the sage **Vidyaranya**.",
  "Four dynasties ruled it: **Sangama → Saluva → Tuluva → Aravidu**.",
  "**Krishnadevaraya** (1509–1529, Tuluva) was the greatest; he wrote the **Amuktamalyada** in **Telugu** and kept the **Ashtadiggajas**, eight poets, at court.",
  "The **Battle of Talikota (Rakshasa-Tangadi), `1565`** — the combined Deccan sultanates destroyed Vijayanagara's army; the city was sacked and never recovered.",
  "**Bahmani** was founded in `1347` by **Alauddin Hasan Bahman Shah** at **Gulbarga**, later **Bidar**; its greatest minister was **Mahmud Gawan**."
 ],
 blocks:[
  {h:"Vijayanagara — the four dynasties",
   cols:["Dynasty","Years","Chief rulers"],
   rows:[
    ["**Sangama**","1336–1485","**Harihara I** and **Bukka I** (founders); **Devaraya I**; **Devaraya II**, the greatest of the line, called Gajabetekara"],
    ["**Saluva**","1485–1505","**Saluva Narasimha**, who seized power to save the state from collapse"],
    ["**Tuluva**","1505–1570","**Krishnadevaraya** (1509–1529); **Achyutadevaraya**; **Sadashivaraya**, under whom **Aliya Rama Raya** held real power and lost Talikota"],
    ["**Aravidu**","1570–1646","**Tirumala**, who moved the capital to Penukonda and then Chandragiri. A rump state until the Bijapur and Golconda sultanates finished it"]
   ]},

  {h:"Krishnadevaraya",
   cols:["","Detail"],
   rows:[
    ["Reign","1509–1529"],
    ["Battles","Defeated the Bahmani forces; took **Raichur** from **Ismail Adil Shah of Bijapur in 1520**; defeated the Gajapati of Odisha and married his daughter"],
    ["His book","The **Amuktamalyada**, a Telugu poem which includes a section of advice on statecraft"],
    ["His court","The **Ashtadiggajas** — eight great Telugu poets, of whom **Allasani Peddana** was called the Andhrakavita Pitamaha. The age is the golden age of Telugu literature"],
    ["Buildings","The **Vittalaswami** and **Hazara Rama** temples at Hampi; the town of Nagalapuram, named for his mother"],
    ["Visitors","The Portuguese **Domingo Paes** and **Duarte Barbosa**, whose descriptions of the city are the fullest that survive"]
   ]},

  {h:"How Vijayanagara was run",
   cols:["Term","What it means"],
   rows:[
    ["**Nayankara**","The system of assigning territory (an *amaram*) to a military chief (**nayaka** or **amaranayaka**) who kept troops out of it and paid a fixed tribute. It made the state strong in war and fragile in peace"],
    ["**Ayagar**","The village establishment of **twelve** hereditary officers — accountant, watchman, smith, potter and so on — paid in tax-free land"],
    ["Rayarekha","Land revenue, generally about a **sixth** of the produce, varying with soil and crop"],
    ["Provinces","Called **rajya** or **mandalam**, under a governor who was usually a prince of the royal house"],
    ["Coins","Gold **varaha** (pagoda) and **pratapa**; the coinage was famous for its purity"],
    ["Army","Included a large body of **Muslim cavalry and archers**, recruited deliberately, with a mosque provided for them — one of the standard points about the state's religious policy"]
   ]},

  {h:"The Bahmani kingdom, 1347–1518",
   cols:["","Detail"],
   rows:[
    ["Founded","**1347**, by **Alauddin Hasan Bahman Shah**, also called **Hasan Gangu**, a noble who revolted against Muhammad bin Tughlaq"],
    ["Capitals","**Gulbarga** first, moved to **Bidar** by Ahmad Shah I in 1425"],
    ["**Mahmud Gawan**","A Persian trader who became **wazir** under **Muhammad Shah III** and ran the kingdom for twenty years. Reformed the revenue by measurement, divided the kingdom into eight **tarafs**, took most of the army under direct royal pay, and built the **madrasa at Bidar** — a three-storey college with a library of 3,000 manuscripts. **Executed in 1481** on a forged charge of treason, after which the kingdom fell apart"],
    ["The factions","The **Deccanis** (locally settled Muslims and Habshis) against the **Afaqis** or **Pardesis** (newcomers from Persia and Central Asia). Gawan was an Afaqi, and the split killed him and the state"],
    ["The five successors","**Bijapur** (Adil Shahi), **Golconda** (Qutb Shahi), **Ahmednagar** (Nizam Shahi), **Berar** (Imad Shahi), **Bidar** (Barid Shahi)"]
   ]},

  {h:"Talikota, 1565",
   list:[
    "Also called the **Battle of Rakshasa-Tangadi**, after the two villages the fighting actually took place between.",
    "**Vijayanagara**, under **Aliya Rama Raya**, against a confederacy of **Bijapur, Ahmednagar, Golconda and Bidar**. Berar stayed out.",
    "Rama Raya was captured and killed. The city of Vijayanagara was sacked over several months and abandoned.",
    "The Aravidu line survived as a small state; the empire did not. The immediate cause of the alliance was Rama Raya's habit of playing the sultanates against each other until they combined."
   ]},

  {h:"The foreign visitors to Vijayanagara",
   cols:["Visitor","From","Whose reign"],
   rows:[
    ["Nicolo Conti","Italy","**Devaraya I**, c. 1420"],
    ["Abdur Razzaq","Persia (envoy of Shah Rukh of Herat)","**Devaraya II**, c. 1443"],
    ["Athanasius Nikitin","Russia","c. 1470, mainly on the Bahmani kingdom"],
    ["Domingo Paes and Duarte Barbosa","Portugal","**Krishnadevaraya**"],
    ["Fernao Nuniz","Portugal","**Achyutadevaraya**"]
   ]},

  {h:"Deccan architecture",
   cols:["Building","Where","Built by"],
   rows:[
    ["**Gol Gumbaz**","Bijapur","**Muhammad Adil Shah**. The **second-largest dome in the world** by unsupported span, with a whispering gallery"],
    ["Ibrahim Rauza","Bijapur","Ibrahim Adil Shah II — called the Taj of the Deccan"],
    ["**Charminar**","Hyderabad","**Muhammad Quli Qutb Shah**, 1591, when he founded the city"],
    ["Golconda Fort","Hyderabad","Qutb Shahi — famous for its acoustics and for the diamond trade"],
    ["Mahmud Gawan Madrasa","Bidar","Mahmud Gawan, 1472 — Persian in style, faced with coloured tiles"]
   ]}
 ]},

/* ===================================================================== 6 */
{id:"mughal-early", n:"The Mughals — Babur, Humayun, Sher Shah, Akbar", hy:1,
 w:"1526 to 1605: four battles that made the empire, and the man who ran it best in between.",
 quick:[
  "Babur's four battles: **Panipat I (1526)** against Ibrahim Lodi, **Khanwa (1527)** against Rana Sanga, **Chanderi (1528)** against Medini Rai, **Ghaghra (1529)** against the Afghans.",
  "**Sher Shah Suri** (1540–1545) ruled for five years and left more behind than most who ruled thirty: the **Grand Trunk Road**, the silver **rupiya**, the **dam**, the sarai network and a measured revenue system.",
  "**Second Battle of Panipat, `1556`** — Akbar's forces under **Bairam Khan** defeated **Hemu**.",
  "Akbar abolished the **pilgrimage tax in 1563** and **jizya in 1564** — early in the reign, and before any of the religious experiments.",
  "The **Mansabdari** system graded every officer by two numbers: **zat** (personal rank and pay) and **sawar** (the cavalry he had to maintain)."
 ],
 blocks:[
  {h:"Babur, 1526–1530",
   cols:["","Detail"],
   rows:[
    ["Who","Zahiruddin Muhammad Babur, ruler of Farghana, descended from **Timur** on his father's side and **Chengiz Khan** on his mother's"],
    ["Why he came","Invited by **Daulat Khan Lodi** of Punjab and **Alam Khan**, Ibrahim Lodi's uncle, both of whom wanted Ibrahim gone"],
    ["**Panipat I, 1526**","Against **Ibrahim Lodi**, who was killed — the only Delhi Sultan to die on a battlefield. Babur's advantages were **field artillery** and the **tulughma**, the flanking manoeuvre"],
    ["**Khanwa, 1527**","Against **Rana Sanga** of Mewar and a Rajput confederacy. The harder of the two battles, and the one that actually secured north India. Babur declared it a **jihad** and took the title **Ghazi**"],
    ["Chanderi, 1528","Against **Medini Rai** of Malwa"],
    ["**Ghaghra, 1529**","Against the Afghans of Bihar and Bengal — the last of the Lodi resistance"],
    ["His book","The **Tuzuk-i-Baburi (Baburnama)**, written in **Chagatai Turkish** — a famously candid memoir. Translated into Persian by Abdur Rahim Khan-i-Khanan"],
    ["Died","1530 at Agra; buried, as he wished, at **Kabul**"]
   ]},

  {h:"Humayun, 1530–1540 and 1555–1556",
   list:[
    "Divided the empire among his brothers **Kamran, Askari and Hindal** at the start, in the Timurid manner — the root of most of his troubles.",
    "**Battle of Chausa, 1539** and **Battle of Kannauj (Bilgram), 1540** — both lost to **Sher Shah Suri**. Humayun fled to Persia.",
    "Fifteen years in exile. His son **Akbar** was born at **Amarkot** in Sindh in **1542**, to **Hamida Banu Begum**.",
    "Recovered Delhi in **1555** after the **Battle of Sirhind**, with Persian help and Bairam Khan's generalship.",
    "Died in **1556** falling down the stairs of his library at Din Panah.",
    "**Humayun's Tomb** at Delhi was built by his widow **Hamida Banu (Haji) Begum** — the **first great Mughal garden tomb**, the model for the Taj Mahal. UNESCO listed.",
    "**Gulbadan Begum**, his sister, wrote the **Humayun-nama**."
   ]},

  {h:"Sher Shah Suri, 1540–1545 — the interruption that mattered",
   cols:["What he did","Detail"],
   rows:[
    ["Revenue","Land **measured** (*zabti*) with a standard bigha; the state took **a third** of the average produce. Every peasant received a **patta** stating his holding and his dues, and gave a **qabuliyat**, a deed of agreement. The base of Akbar's system"],
    ["Currency","The silver **rupiya** of 178 grains and the copper **dam** — the ancestor of the modern rupee. Fixed the ratio between them and struck coins of reliable purity"],
    ["Roads","Rebuilt and extended the **Sadak-e-Azam**, later the **Grand Trunk Road**, from Sonargaon in Bengal to the Indus. Three other great roads besides"],
    ["Sarais","About **1,700 sarais** along the roads, each with separate quarters for Hindus and Muslims, free food, and a mosque. They doubled as **post stations** — the postal service ran through them"],
    ["Army","Recruited and paid directly, with the horses branded; abolished the tribal levy"],
    ["Buildings","**Rohtasgarh** fort; the **Purana Qila** at Delhi with its Qila-i-Kuhna mosque; his own **tomb at Sasaram**, standing in a lake — held to be one of the finest tombs in India"],
    ["Died","**1545**, from an explosion during the siege of **Kalinjar**. His son Islam Shah followed; the dynasty ended in 1555"]
   ]},

  {h:"Akbar, 1556–1605",
   cols:["","Detail"],
   rows:[
    ["Accession","Aged **13**, at Kalanaur. **Bairam Khan** was regent until 1560"],
    ["**Panipat II, 1556**","Against **Hemu**, the Hindu general of the Sur claimant Adil Shah. Hemu had taken Delhi and was winning until he was hit in the eye by an arrow"],
    ["**Haldighati, 1576**","Against **Maharana Pratap** of Mewar. The Mughal force was commanded by **Man Singh** of Amber. Pratap survived and was never captured; Mewar was never fully subdued in his lifetime"],
    ["Conquests","Malwa 1561, Gondwana 1564 (against **Rani Durgavati**), Chittor 1568, Ranthambhore 1569, Gujarat 1572–73, Bengal 1576, Kabul 1585, Kashmir 1586, Sindh 1591, Orissa 1592, Kandahar 1595, Berar, Khandesh and part of Ahmednagar 1600–01"],
    ["Taxes abolished","**Pilgrimage tax in 1563**; **jizya in 1564**"],
    ["Rajput policy","Marriage alliances and high office rather than tribute. **Bharmal** of Amber was the first to ally; his grandson **Man Singh** commanded Mughal armies; **Todar Mal** and **Birbal** were Hindus in the highest offices"],
    ["Religion","**Ibadat Khana** at Fatehpur Sikri, 1575 — a hall for religious debate, opened to all faiths in 1578. The **Mahzar** of 1579, a declaration by the ulama making him the final arbiter in religious disputes. **Din-i-Ilahi** in 1582 — a personal order of discipleship rather than a religion; it attracted very few followers, of whom Birbal was the only Hindu of note. **Sulh-i-Kul**, universal peace, is the name for the policy as a whole"],
    ["Buildings","**Agra Fort**; **Fatehpur Sikri** with the **Buland Darwaza** (raised in 1576 to mark the Gujarat conquest), the Panch Mahal, the Diwan-i-Khas and Salim Chishti's tomb; the forts at **Allahabad** and **Lahore**; his own tomb at **Sikandra**, finished by Jahangir"],
    ["Died","1605; buried at **Sikandra**, near Agra"]
   ]},

  {h:"Akbar's men",
   cols:["Name","What he did"],
   rows:[
    ["**Abul Fazl**","Wrote the **Akbarnama**, whose third volume is the **Ain-i-Akbari** — the administrative gazetteer of the empire, and the single most important source for it"],
    ["Faizi","Abul Fazl's brother; poet laureate; translated the Lilavati into Persian"],
    ["**Todar Mal**","Finance minister; built the **Dahsala** revenue settlement of 1580"],
    ["**Birbal**","Raja Birbal, the only Hindu to join the Din-i-Ilahi; killed on campaign in 1586"],
    ["**Tansen**","The greatest musician of the court, from Gwalior; one of the nine gems"],
    ["Abdur Rahim Khan-i-Khanan","Commander and poet; translated the Baburnama into Persian"],
    ["Man Singh and Bhagwan Das","Rajput generals of Amber"],
    ["Abdul Qadir **Badauni**","Wrote the **Muntakhab-ut-Tawarikh** — hostile to Akbar's religious policy, which is exactly why it is valuable"],
    ["Mullah Do Piyaza, Hamid Bakari, Fakir Aziao-Din","The rest of the traditional **Navaratna**, the nine gems"]
   ]},

  {h:"Mughal administration",
   cols:["Institution","How it worked"],
   rows:[
    ["**Mansabdari**","Every officer held a **mansab** — a rank expressed as two numbers. **Zat** fixed his personal status and pay; **sawar** fixed the number of cavalry he had to maintain. Ranks ran from 10 to 5,000, and above that only for princes. Not hereditary; on death, the estate reverted to the state (**escheat**)"],
    ["**Jagirdari**","A mansabdar was usually paid by assignment of the revenue of a **jagir** rather than in cash. The jagir was **transferable** — deliberately, so that no officer built a local base. **Watan jagirs** of Rajput chiefs were the exception, being hereditary"],
    ["**Dahsala / Zabti**","**Todar Mal**, 1580. The average produce and average price of ten years were used to fix the revenue **in cash** per bigha for each crop; land was classified as **polaj** (always cultivated), **parauti** (fallow briefly), **chachar** (fallow three or four years) and **banjar** (waste). The state took **a third**"],
    ["Other revenue methods","**Ghalla-bakshi (batai)** — crop-sharing on the field. **Kankut** — estimation by eye. **Nasaq** — assessment on past figures. Used where measurement was impractical"],
    ["The four ministers","**Diwan-i-Ala** (finance, the senior), **Mir Bakshi** (military pay and mansabs, and the head of intelligence), **Mir Saman / Khan-i-Saman** (the imperial household and karkhanas), **Sadr-us-Sudur** (religious endowments and charity)"],
    ["Provinces","**Suba** under a **Subedar**, divided into **sarkars** under a **faujdar**, then **parganas** under a **shiqdar** and **amil**, then the village. The **kotwal** ran the city"]
   ]}
 ]},

/* ===================================================================== 7 */
{id:"mughal-late", n:"The Mughals — Jahangir to the last of them", hy:1,
 w:"1605 to 1857: Nur Jahan, the Taj, Aurangzeb's Deccan, and the long decline.",
 quick:[
  "**Captain William Hawkins** reached Jahangir's court in `1608`; **Sir Thomas Roe** in `1615`. The English got their first factory at **Surat** in `1613`.",
  "The **Taj Mahal** was built `1632–1653` for **Mumtaz Mahal**; the architect generally named is **Ustad Ahmad Lahori**.",
  "**Aurangzeb** re-imposed **jizya** in `1679`, annexed **Bijapur** in `1686` and **Golconda** in `1687`, and spent his last twenty-six years in the Deccan.",
  "**Nadir Shah** sacked Delhi in `1739` and took away the **Peacock Throne** and the **Koh-i-Noor**.",
  "**Third Battle of Panipat, `1761`** — **Ahmad Shah Abdali** destroyed the Maratha army under **Sadashivrao Bhau**."
 ],
 blocks:[
  {h:"Jahangir, 1605–1627",
   cols:["","Detail"],
   rows:[
    ["Name","Salim, who took the title Nuruddin Muhammad **Jahangir**, seizer of the world"],
    ["Justice","Hung a **golden chain of justice** from the Agra fort to the riverbank, so that any petitioner could ring it"],
    ["**Nur Jahan**","Mehrunnisa, married 1611. Her father **Itmad-ud-Daulah** became wazir and her brother **Asaf Khan** a leading noble; coins were struck in her name. The 'Nur Jahan junta' is the standard phrase for the group's dominance after 1620"],
    ["The English","**Captain William Hawkins**, 1608–11, got nothing. **Sir Thomas Roe**, ambassador of James I, 1615–19, got trading concessions. The English factory at **Surat** dates from **1613**"],
    ["Sikhs","**Guru Arjan Dev** was executed in **1606** for having blessed the rebel prince Khusrau"],
    ["Conquests","**Mewar** submitted in 1615 under Rana Amar Singh; **Kangra** taken 1620; **Ahmednagar** annexed. **Kandahar** lost to Persia in 1622"],
    ["Painting","The **high point of Mughal painting**. **Ustad Mansur** (birds and animals; the dodo and the turkey), **Abul Hasan** (Nadir-uz-Zaman), **Bishandas** (portraits), **Manohar**"],
    ["Buildings","**Itmad-ud-Daulah's tomb** at Agra, built by Nur Jahan for her father — the **first Mughal building faced entirely in white marble** and the first with **pietra dura** inlay. Also Akbar's tomb at Sikandra, and the Shalimar Bagh in Kashmir"],
    ["His book","The **Tuzuk-i-Jahangiri**, his own memoirs in Persian"]
   ]},

  {h:"Shah Jahan, 1628–1658",
   cols:["","Detail"],
   rows:[
    ["**Taj Mahal**","Begun **1632**, finished about **1653**, for **Arjumand Banu Begum (Mumtaz Mahal)**, who died in 1631 at Burhanpur. The architect usually named is **Ustad Ahmad Lahori**. UNESCO listed 1983"],
    ["Delhi","Founded **Shahjahanabad** and built the **Red Fort (Lal Qila)** with its Diwan-i-Am and Diwan-i-Khas, and the **Jama Masjid**, the largest mosque in India"],
    ["Other buildings","**Moti Masjid** at Agra; the **Sheesh Mahal**; the **Peacock Throne (Takht-i-Taus)**, which took seven years to make"],
    ["The Deccan","Ahmednagar annexed 1633; Bijapur and Golconda made tributary. **Aurangzeb** was viceroy of the Deccan"],
    ["Kandahar","**Lost permanently in 1649** after three failed campaigns — the great military failure of the reign"],
    ["Visitors","**Francois Bernier** (French physician, *Travels in the Mogul Empire*), **Jean-Baptiste Tavernier** (French jeweller), **Niccolao Manucci** (Italian), **Peter Mundy** (English)"],
    ["**Dara Shukoh**","His eldest son and chosen heir; translated fifty **Upanishads** into Persian as the **Sirr-i-Akbar** and wrote the **Majma-ul-Bahrain**, on the meeting-point of Hinduism and Islam"],
    ["The succession war","1657–58. **Battle of Dharmat** and then **Battle of Samugarh, 1658**, where Aurangzeb beat Dara. Shah Jahan was imprisoned in Agra fort until his death in 1666"]
   ]},

  {h:"Aurangzeb, 1658–1707",
   cols:["","Detail"],
   rows:[
    ["Titles","**Alamgir**, seizer of the universe. Called **Zinda Pir**, the living saint, for his personal austerity"],
    ["Religious measures","Re-imposed **jizya in 1679**; abolished the pilgrimage tax on Hindus but reintroduced it later; banned music at court; demolished a number of temples, notably at Mathura and Varanasi; appointed **muhtasibs** to enforce moral law. Compiled the **Fatawa-i-Alamgiri**, a digest of Hanafi law"],
    ["Sikhs","**Guru Tegh Bahadur** executed at Delhi in **1675**. **Guru Gobind Singh** founded the **Khalsa** in 1699 in the resistance that followed"],
    ["Marathas","**Shivaji** escaped from Agra in 1666. **Sambhaji** was captured and executed in **1689**. The war then became a guerrilla war that lasted until Aurangzeb's death"],
    ["Deccan","Annexed **Bijapur 1686** and **Golconda 1687**, which finished the Deccan sultanates — and removed the buffer between the Mughals and the Marathas. Spent from 1681 to 1707 in the Deccan and never returned north"],
    ["Rajputs","Broke with Marwar and Mewar after 1679, ending Akbar's alliance system"],
    ["Buildings","**Bibi ka Maqbara** at Aurangabad (for his wife, a smaller copy of the Taj); the **Moti Masjid** inside the Red Fort; the **Badshahi Mosque** at Lahore — the largest of his works"],
    ["Died","**1707** at Ahmednagar, aged 88; buried plainly at **Khuldabad**"]
   ]},

  {careful:"**The empire's largest extent and its collapse are the same reign.** Aurangzeb ruled more of India than any Mughal before him, and the twenty-six years in the Deccan that achieved it drained the treasury, wore out the army, left the north unadministered and created the Maratha state as a permanent enemy. Both statements are true and the exam asks either."},

  {h:"The later Mughals",
   cols:["Ruler","Reign","What happened"],
   rows:[
    ["Bahadur Shah I","1707–1712","Called **Shah-i-Bekhabar**, the heedless king. Reversed the anti-Rajput and anti-Maratha policies; released Shahu"],
    ["Jahandar Shah","1712–1713","Put on the throne by **Zulfiqar Khan**, who abolished jizya. Both were killed within a year"],
    ["**Farrukhsiyar**","1713–1719","A puppet of the **Sayyid brothers**, Abdullah Khan and Hussain Ali. Granted the English East India Company the **farman of 1717** — duty-free trade in Bengal, called the Company's *Magna Carta*. Blinded and killed by his own kingmakers"],
    ["**Muhammad Shah 'Rangeela'**","1719–1748","**Nadir Shah** of Persia invaded, won the **Battle of Karnal (1739)**, sacked Delhi and carried off the **Peacock Throne** and the **Koh-i-Noor**. The Nizam, Awadh and Bengal became effectively independent in this reign"],
    ["Ahmad Shah and Alamgir II","1748–1759","**Ahmad Shah Abdali** raided repeatedly; the wazir Imad-ul-Mulk ruled and murdered"],
    ["**Shah Alam II**","1759–1806","Defeated at the **Battle of Buxar, 1764**, and granted the **Diwani of Bengal, Bihar and Orissa** to the Company in **1765**. Blinded by Ghulam Qadir in 1788; became a Company pensioner in 1803"],
    ["Akbar II","1806–1837","A pensioner. Gave **Ram Mohan Roy** the title Raja and sent him to England"],
    ["**Bahadur Shah Zafar**","1837–1857","The last Mughal. Proclaimed emperor by the rebels of 1857, tried, and **exiled to Rangoon**, where he died in 1862"]
   ]},

  {h:"The three battles of Panipat",
   cols:["Battle","Year","Who fought","Who won"],
   rows:[
    ["First","**1526**","**Babur** against **Ibrahim Lodi**","Babur — the Mughal empire begins"],
    ["Second","**1556**","**Bairam Khan** for Akbar against **Hemu**","Akbar — Mughal rule is restored"],
    ["Third","**1761**","**Ahmad Shah Abdali** against the **Marathas** under **Sadashivrao Bhau**","Abdali — the Maratha bid for empire ends, and the field is left open for the British"]
   ]}
 ]},

/* ===================================================================== 8 */
{id:"marathas", n:"Shivaji and the Marathas", hy:1,
 w:"The Ashta Pradhan, Chauth and Sardeshmukhi, the Peshwas, and the confederacy.",
 quick:[
  "**Shivaji** was crowned **Chhatrapati** at **Raigad** in `1674`.",
  "He killed **Afzal Khan** of Bijapur at **Pratapgarh** in `1659`, and escaped from **Agra** in `1666`.",
  "The **Treaty of Purandar, `1665`**, was signed with **Jai Singh** for Aurangzeb — Shivaji gave up 23 of 35 forts.",
  "**Chauth** was a quarter of the revenue; **Sardeshmukhi** a further tenth — both levied on territory outside Maratha rule.",
  "The **Ashta Pradhan** was Shivaji's council of eight, headed by the **Peshwa**; it was an advisory council, not a cabinet — the Chhatrapati was not bound by it."
 ],
 blocks:[
  {h:"Shivaji",
   cols:["","Detail"],
   rows:[
    ["Born","1627 or 1630 at **Shivneri** fort — both dates are in use. Father **Shahji Bhonsle**, a noble of Bijapur; mother **Jijabai**"],
    ["Guru","**Samarth Ramdas**, author of the **Dasbodh**. **Dadaji Kondadev** was his tutor"],
    ["Afzal Khan","Killed at **Pratapgarh, 1659**, at a meeting arranged as a parley"],
    ["Shaista Khan","Aurangzeb's uncle, surprised in his own camp at Pune in **1663** and wounded — he lost his thumb"],
    ["Surat","Sacked in **1664**, and again in 1670"],
    ["**Treaty of Purandar, 1665**","With **Jai Singh**. Shivaji surrendered 23 of his 35 forts; his son **Sambhaji** was given a Mughal mansab"],
    ["Agra","Went to Aurangzeb's court in **1666**, was slighted and detained, and **escaped** — the episode that made his reputation across India"],
    ["Coronation","**1674 at Raigad**, as **Chhatrapati**, with a Brahmin brought from Varanasi to perform it. He struck coins (*hon* and *shivrai*) and began the Rajyabhisheka era"],
    ["Died","**1680** at Raigad"]
   ]},

  {h:"The Ashta Pradhan",
   cols:["Office","What he handled"],
   rows:[
    ["**Peshwa (Mukhya Pradhan)**","The chief — general administration and finance. Later the office became hereditary and then supreme"],
    ["Amatya (Majumdar)","Accounts of the state"],
    ["Sachiv (Shurunavis)","Royal correspondence"],
    ["Mantri (Waqia-navis)","The king's personal record and the intelligence of the court"],
    ["Senapati (Sar-i-Naubat)","Command of the army"],
    ["Sumant (Dabir)","Foreign affairs"],
    ["**Nyayadhish**","Justice"],
    ["**Panditrao**","Religious affairs and charity"]
   ],
   note:"Nyayadhish and Panditrao were the only two whose duties were not also military. All others could be, and were, sent on campaign."},

  {h:"Revenue and the army",
   list:[
    "**Chauth** — one **quarter** of the land revenue, levied on territory outside Maratha control in return for not raiding it.",
    "**Sardeshmukhi** — a further **tenth**, claimed as the hereditary right of the Sardeshmukh, the head of all deshmukhs.",
    "Inside Maratha territory, land was measured with a **kathi** and the state took about **two-fifths** of the produce — the **Kathi system**, from Malik Ambar's practice at Ahmednagar.",
    "The army was paid in **cash**, and the **jagir (mokasa)** system was avoided where possible. Forts were commanded by three officers of equal rank so that none could sell one.",
    "Two kinds of cavalry: **bargirs**, mounted and equipped by the state, and **silahdars**, who brought their own horse and were paid more.",
    "A **navy** — unusual among Indian powers — under **Kanhoji Angre**, based at Kolaba and Vijaydurg."
   ]},

  {h:"The Peshwas",
   cols:["Peshwa","Years","What he is asked about"],
   rows:[
    ["Balaji Vishwanath","1713–1720","Made the office effectively hereditary. Got the Mughal grant of **Chauth and Sardeshmukhi** of the Deccan in 1719"],
    ["**Baji Rao I**","1720–1740","The greatest. Never lost a battle. Took Malwa, Gujarat and Bundelkhand; raided the outskirts of Delhi in 1737; defeated the Nizam at **Bhopal, 1737**. The architect of the confederacy"],
    ["Balaji Baji Rao (Nana Saheb)","1740–1761","Maratha power at its widest — and the **Third Battle of Panipat, 1761**, which broke it. He died soon after"],
    ["**Madhav Rao I**","1761–1772","Rebuilt Maratha power in ten years and restored the emperor to Delhi in 1772. His death is where Grant Duff dates the end of the empire"],
    ["Narayan Rao, Sawai Madhav Rao, Baji Rao II","1772–1818","Decline, faction, and the three **Anglo-Maratha Wars**. **Baji Rao II** signed the **Treaty of Bassein, 1802**, accepting subsidiary alliance; the confederacy was dissolved in **1818**"]
   ]},

  {h:"The confederacy — the five houses",
   cols:["House","Seat"],
   rows:[
    ["Peshwa","**Pune**"],
    ["Gaekwad","**Baroda**"],
    ["Holkar","**Indore**"],
    ["Scindia (Shinde)","**Gwalior**"],
    ["Bhonsle","**Nagpur**"]
   ]}
 ]},

/* ===================================================================== 9 */
{id:"bhakti-sufi", n:"The Bhakti and Sufi movements", hy:1,
 w:"Saint by saint: language, region, and whether the god had form or not.",
 quick:[
  "**Nirguna** bhakti worships a god without form or attribute — Kabir, Nanak, Ravidas. **Saguna** bhakti worships a god with form — Surdas, Tulsidas, Mirabai, Chaitanya.",
  "**Alvars** were the Vaishnava saints of the Tamil country (twelve of them); **Nayanars** the Shaiva saints (sixty-three).",
  "**Shankaracharya** taught **Advaita** (non-dualism), **Ramanuja** **Vishishtadvaita** (qualified non-dualism), **Madhva** **Dvaita** (dualism).",
  "The four great Sufi **silsilas** in India: **Chishti**, **Suhrawardi**, **Qadiri**, **Naqshbandi**.",
  "**Moinuddin Chishti**'s shrine is at **Ajmer**; **Nizamuddin Auliya**'s at Delhi; **Baba Farid**'s at Ajodhan (Pakpattan)."
 ],
 blocks:[
  {h:"The philosophers of the schools",
   cols:["Name","Doctrine","Detail"],
   rows:[
    ["**Shankaracharya**","**Advaita** — non-dualism","8th century, from Kaladi in Kerala. Only brahman is real; the world is *maya*. Founded four mathas: **Sringeri** (south), **Puri** (east), **Dwarka** (west), **Badrinath** (north)"],
    ["**Ramanuja**","**Vishishtadvaita** — qualified non-dualism","11th–12th century, Sriperumbudur. God is real and so are souls and matter, but dependent on him. **Sri Vaishnavism**; opened bhakti to all castes"],
    ["**Madhvacharya**","**Dvaita** — dualism","13th century, Udupi, Karnataka. God and the soul are permanently distinct"],
    ["Nimbarka","**Dvaitadvaita**","13th century; Radha-Krishna worship"],
    ["**Vallabhacharya**","**Shuddhadvaita**","15th–16th century. The **Pushtimarga**, the path of grace; the Krishna of Nathdwara. The **Ashtachhap**, eight poets, includes Surdas"],
    ["Chaitanya","Achintya Bhedabheda","See below"]
   ]},

  {h:"The Nirguna saints — god without form",
   cols:["Saint","Region and language","Detail"],
   rows:[
    ["**Kabir**","Varanasi; **Hindi with a Braj and Awadhi mix**","A weaver (*julaha*). Traditionally a disciple of **Ramananda**. Attacked ritual, caste, idol worship, the Vedas and the Quran alike. His verses are the **Bijak**; some are in the **Guru Granth Sahib**. The Kabirpanth follows him"],
    ["**Guru Nanak**","Punjab; **Punjabi**","1469–1539. Born at Talwandi (Nankana Sahib). *Na koi Hindu na koi Musalman*. Instituted **langar** and **sangat**. See the Sikh Gurus topic"],
    ["**Ravidas**","Varanasi; Hindi","A cobbler; a contemporary of Kabir. Forty of his hymns are in the Guru Granth Sahib. Revered as Guru Ravidas"],
    ["**Dadu Dayal**","Rajasthan; Hindi","Founded the Dadupanth; taught that no scripture and no priest is needed"],
    ["Sena, Sadhna, Pipa","North India","Barber, butcher and Rajput chief respectively — the standard list used to show that bhakti crossed caste"]
   ]},

  {h:"The Saguna saints — god with form",
   cols:["Saint","Region and language","Detail"],
   rows:[
    ["**Surdas**","Braj; **Braj Bhasha**","Blind poet of Krishna's childhood. The **Sursagar**, Sur Saravali, Sahitya Lahiri. One of the Ashtachhap"],
    ["**Tulsidas**","Awadh; **Awadhi**","The **Ramcharitmanas** — the Rama story retold in the people's language, the single most influential devotional text of north India. Also the Vinaya Patrika and Hanuman Chalisa"],
    ["**Mirabai**","Mewar, Rajasthan; **Rajasthani and Braj**","A Sisodia princess married into the Rathore house of Merta; devoted to Krishna as Giridhar Gopal. Her padas are sung across north India"],
    ["**Chaitanya Mahaprabhu**","Bengal and Odisha; **Bengali and Sanskrit**","1486–1533. Founded **Gaudiya Vaishnavism**; made **kirtan** — mass congregational singing and dancing — the central practice. Patronised by **Alauddin Hussain Shah** of Bengal. The **Chaitanya Charitamrita** of Krishnadasa Kaviraja is his life"],
    ["Vidyapati","Mithila; **Maithili**","Radha-Krishna songs; the father of Maithili literature"],
    ["Chandidas","Bengal; **Bengali**","Radha-Krishna padas; among the earliest Bengali poets"],
    ["Narsinh Mehta","Gujarat; **Gujarati**","*Vaishnav jan to tene kahiye* — Gandhi's favourite bhajan"],
    ["Shankardev","Assam; **Assamese**","Founded the **Ekasarana Nama-Dharma**, the **sattras**, and **Sattriya** dance; wrote the Kirtan Ghosha"]
   ]},

  {h:"The Maharashtra and Karnataka lines",
   cols:["Saint","Region","Detail"],
   rows:[
    ["**Jnaneshwar**","Maharashtra","13th century. Wrote the **Jnaneshwari**, a Marathi commentary on the Gita — the beginning of the **Varkari** tradition of Pandharpur"],
    ["Namdev","Maharashtra","A tailor; his abhangas are in the Guru Granth Sahib as well"],
    ["Eknath","Maharashtra","Wrote in Marathi and argued for it against Sanskrit"],
    ["**Tukaram**","Maharashtra","17th century; the greatest of the Varkari poets. A contemporary of Shivaji"],
    ["**Ramdas**","Maharashtra","The **Dasbodh**; Shivaji's spiritual guide"],
    ["**Basavanna**","Karnataka","12th century. Founded the **Virashaiva (Lingayat)** movement; rejected caste, ritual and the Vedas; wrote **vachanas** in **Kannada**. Ran the **Anubhava Mantapa**, an assembly open to all"],
    ["**Akka Mahadevi**","Karnataka","The best-known woman of the Virashaiva movement; her vachanas are central to Kannada literature"],
    ["Allama Prabhu","Karnataka","Presided over the Anubhava Mantapa"],
    ["Lal Ded (Lalleshwari)","Kashmir","14th century; her *vakhs* are the earliest Kashmiri poetry, and she is claimed by Hindus and Muslims alike"]
   ]},

  {h:"The Sufi orders",
   cols:["Silsila","Founded in India by","Character"],
   rows:[
    ["**Chishti**","**Khwaja Moinuddin Chishti** (d. 1236), shrine at **Ajmer**","The most important in India. Accepted no state service and no grants; used **sama** (music) as a devotional practice. Successors: **Qutbuddin Bakhtiyar Kaki** (Delhi), **Baba Fariduddin Ganj-i-Shakar** (Ajodhan, whose verses are in the Guru Granth Sahib), **Nizamuddin Auliya** (Delhi), **Nasiruddin Chiragh-i-Dehli**, **Salim Chishti** (Fatehpur Sikri), **Gesu Daraz** (Gulbarga)"],
    ["**Suhrawardi**","**Bahauddin Zakariya**, Multan","Accepted state patronage, land and office — the deliberate opposite of the Chishti position"],
    ["**Qadiri**","Popular in Punjab and Sindh","**Miyan Mir** was **Dara Shukoh**'s spiritual guide"],
    ["**Naqshbandi**","**Khwaja Baqi Billah**, Delhi","Orthodox; rejected sama and the doctrine of *wahdat-ul-wujud*. **Shaikh Ahmad Sirhindi**, called Mujaddid Alf-i-Sani, opposed Akbar's religious policy from within it"]
   ]},

  {h:"The Sufi vocabulary",
   cols:["Term","Meaning"],
   rows:[
    ["Khanqah","The hospice where a Sufi master lived with his disciples"],
    ["Pir and Murid","Master and disciple"],
    ["Silsila","A chain of spiritual succession — hence an order"],
    ["Sama","Devotional music. The Chishtis permitted it; the Naqshbandis did not"],
    ["Wahdat-ul-Wujud","The unity of being — that only God truly exists. Held by Ibn Arabi and by many Indian Sufis, and rejected as heretical by the orthodox"],
    ["Fana","Annihilation of the self in God"],
    ["Urs","The death anniversary of a saint, kept as a wedding — the union with God"],
    ["Dargah","The tomb-shrine of a saint"],
    ["**Amir Khusrau**","Disciple of Nizamuddin Auliya. Called **Tuti-i-Hind**, the parrot of India. Wrote in Persian and Hindavi; credited with the **qawwali** form and with the beginnings of Hindustani music. Served seven Sultans"]
   ]},

  {careful:"**Bhakti and Sufism influenced each other but were not one movement, and neither was founded to unite Hindus and Muslims.** Both are devotional movements internal to their own traditions that happened to arrive at similar positions — a personal God, a rejection of ritual and clergy, and worship in the local language. Kabir and Nanak are the figures who genuinely sit across both."}
 ]},

/* ===================================================================== 10 */
{id:"sikh-gurus", n:"The ten Sikh Gurus", hy:1,
 w:"Each Guru, his dates, and the one thing he added.",
 quick:[
  "**Guru Angad** gave the **Gurmukhi** script; **Guru Ram Das** founded **Amritsar**; **Guru Arjan Dev** compiled the **Adi Granth** in `1604` and built the **Harmandir Sahib**.",
  "**Guru Hargobind** militarised the community, wore **two swords** (*miri* and *piri*) and built the **Akal Takht**.",
  "**Guru Arjan Dev** was executed under **Jahangir** (`1606`); **Guru Tegh Bahadur** under **Aurangzeb** (`1675`).",
  "**Guru Gobind Singh** founded the **Khalsa** at Anandpur Sahib on **Baisakhi `1699`** and chose the **Panj Pyare**.",
  "He ended the line of living Gurus: after him the **Guru Granth Sahib** itself is the Guru."
 ],
 blocks:[
  {h:"The ten",
   cols:["Guru","Years as Guru","What he added"],
   rows:[
    ["**1. Nanak**","1469–1539","Founded the faith. Instituted **sangat** (congregation), **langar** (the free kitchen) and **pangat** (eating in a row, without caste). Founded Kartarpur"],
    ["**2. Angad**","1539–1552","Gave the **Gurmukhi** script, in which the scripture is written. Formalised the langar; began the mall akhara for physical training"],
    ["**3. Amar Das**","1552–1574","Built the **baoli at Goindwal**; instituted the **manji** system of preaching districts; abolished the veil and permitted widow remarriage; composed the **Anand Sahib**"],
    ["**4. Ram Das**","1574–1581","**Founded Amritsar** (Ramdaspur) and dug the sacred tank. Began the **masand** system for collecting offerings. Emperor **Akbar** granted the land"],
    ["**5. Arjan Dev**","1581–1606","Compiled the **Adi Granth in 1604** and installed it in the **Harmandir Sahib (Golden Temple)**, which he built. Made the masand system a regular tithe. **Executed at Lahore in 1606** under **Jahangir** — the first martyr"],
    ["**6. Hargobind**","1606–1644","**Militarised** the community after his father's death. Wore **two swords**, for **miri** (temporal power) and **piri** (spiritual). Built the **Akal Takht** facing the Harmandir Sahib, and the fort of Lohgarh"],
    ["**7. Har Rai**","1644–1661","Aided **Dara Shukoh** during the war of succession, which set Aurangzeb against the Gurus"],
    ["**8. Har Krishan**","1661–1664","Became Guru at **five** and died at **eight** — the youngest. **Gurudwara Bangla Sahib** at Delhi stands where he tended the sick during a smallpox epidemic, and died of it"],
    ["**9. Tegh Bahadur**","1664–1675","**Executed at Delhi in 1675** under **Aurangzeb**, having taken up the cause of the Kashmiri Pandits' right to their own faith. **Gurudwara Sis Ganj** marks the place; **Rakab Ganj** where he was cremated. Founded **Anandpur Sahib**"],
    ["**10. Gobind Singh**","1675–1708","Founded the **Khalsa** on **Baisakhi 1699** at Anandpur Sahib, chose the **Panj Pyare**, instituted the **five Ks** and the names **Singh** and **Kaur**. Wrote the **Dasam Granth** (Jaap Sahib, Zafarnama, Bachitra Natak). Fought the battles of Bhangani, Anandpur and Chamkaur. Ended personal guruship, conferring it on the **Guru Granth Sahib**. Died at **Nanded in 1708**"]
   ]},

  {h:"The Khalsa",
   list:[
    "Founded at **Anandpur Sahib on Baisakhi, 1699** (30 March by most reckonings).",
    "The **Panj Pyare**, the five beloved, were **Daya Ram, Dharam Das, Himmat Rai, Mohkam Chand and Sahib Chand** — from five different regions and five different castes.",
    "The **five Ks**: **Kesh** (uncut hair), **Kangha** (comb), **Kara** (steel bracelet), **Kirpan** (sword), **Kachera** (short breeches).",
    "**Amrit Sanchar** — initiation by the double-edged sword stirred in sweetened water. Men take the name **Singh**, women **Kaur**.",
    "The masand system was abolished at the same time, the Guru dealing with the community directly.",
    "**Banda Singh Bahadur** carried on the fight after 1708, took Sirhind in 1710, struck coins in the Gurus' name, and was executed at Delhi in **1716**."
   ]}
 ]},

/* ===================================================================== 11 */
{id:"med-arch", n:"Medieval architecture and the books written about it", hy:0,
 w:"Which building belongs to which reign, and which chronicle to which court.",
 quick:[
  "The **Qutub Minar** was begun by **Aibak** and finished by **Iltutmish**; the top storeys were rebuilt by **Firoz Shah Tughlaq**.",
  "The **true arch and true dome** enter India with the Sultanate; the **Alai Darwaza** (`1311`, Alauddin Khalji) is the first mature example.",
  "**Humayun's Tomb** is the first great Mughal garden tomb; **Itmad-ud-Daulah's tomb** the first in white marble; the **Taj Mahal** the culmination of both.",
  "**Ibn Battuta** came under **Muhammad bin Tughlaq**; **Al-Biruni** with **Mahmud of Ghazni**; **Bernier and Tavernier** under **Shah Jahan**.",
  "The **Ain-i-Akbari** by **Abul Fazl** is the third volume of the Akbarnama, and is the administrative record of Akbar's empire."
 ],
 blocks:[
  {h:"The Sultanate's buildings",
   cols:["Building","Where","By whom"],
   rows:[
    ["**Qutub Minar**","Delhi","Begun by **Qutbuddin Aibak**, completed by **Iltutmish**; upper storeys rebuilt by **Firoz Shah Tughlaq**. Named for the Sufi **Qutbuddin Bakhtiyar Kaki**. UNESCO listed"],
    ["Quwwat-ul-Islam mosque","Delhi","Aibak — the earliest surviving mosque in India, built with material from demolished temples"],
    ["Adhai Din ka Jhopra","Ajmer","Aibak"],
    ["**Alai Darwaza**","Delhi","**Alauddin Khalji**, 1311 — the first true dome and horseshoe arch in India"],
    ["Siri Fort, Hauz Khas, Alai Minar","Delhi","Alauddin Khalji"],
    ["Tughlaqabad","Delhi","Ghiyasuddin Tughlaq"],
    ["Firozabad, Kotla Firoz Shah","Delhi","Firoz Shah Tughlaq — where one of the two Ashokan pillars he moved still stands"],
    ["Lodi Gardens tombs","Delhi","Sayyid and Lodi — the octagonal tomb type"],
    ["Atala and Jama Masjid","Jaunpur","The **Sharqi** kings"],
    ["Jahaz Mahal, Hindola Mahal","Mandu","The Sultans of Malwa"]
   ]},

  {h:"The Mughals' buildings, by reign",
   cols:["Reign","Buildings"],
   rows:[
    ["Babur","Almost nothing survives; mosques at Panipat and Sambhal are attributed to him"],
    ["Humayun","**Din Panah** at Delhi. His **tomb** was built after his death by **Hamida Banu Begum** — the first great garden tomb (*charbagh*), and the model for the Taj"],
    ["**Akbar**","**Agra Fort** (red sandstone); **Fatehpur Sikri** — Buland Darwaza, Panch Mahal, Diwan-i-Khas, Jodha Bai's palace, **Salim Chishti's tomb**; forts at **Lahore** and **Allahabad**; his own tomb at **Sikandra**"],
    ["**Jahangir**","**Itmad-ud-Daulah's tomb**, Agra — the **first entirely white marble** Mughal building, with the first **pietra dura**; Shalimar Bagh, Kashmir; Akbar's tomb finished"],
    ["**Shah Jahan**","**Taj Mahal**; **Red Fort** and **Jama Masjid** at Delhi; **Shahjahanabad**; Moti Masjid at Agra; the **Peacock Throne**. The reign is the peak of Mughal building"],
    ["Aurangzeb","**Bibi ka Maqbara**, Aurangabad; **Moti Masjid** in the Red Fort; **Badshahi Mosque**, Lahore. Marks the decline — plaster in place of inlay"]
   ]},

  {h:"The books and who wrote them",
   cols:["Book","Author","About"],
   rows:[
    ["Chachnama","Anonymous, Persian translation","The Arab conquest of Sindh"],
    ["**Kitab-ul-Hind (Tahqiq-i-Hind)**","**Al-Biruni**","India's sciences, religion and society, c. 1030. Came with Mahmud of Ghazni"],
    ["Tarikh-i-Firozshahi","**Ziauddin Barani**","The Sultanate from Balban to Firoz Shah. Also wrote the **Fatawa-i-Jahandari**"],
    ["Khazain-ul-Futuh, Tughlaqnama, Ashiqa","**Amir Khusrau**","Alauddin Khalji's conquests, and much else"],
    ["**Rihla**","**Ibn Battuta**","The Moroccan traveller who served **Muhammad bin Tughlaq** as qazi of Delhi from 1334"],
    ["Futuhat-i-Firozshahi","**Firoz Shah Tughlaq** himself","His own account of his reign"],
    ["Tarikh-i-Mubarakshahi","Yahya bin Ahmad Sirhindi","The Sayyid period"],
    ["Padmavat","**Malik Muhammad Jayasi**","An **Awadhi** poem of 1540 — the source of the Padmini story, written 237 years after the siege of Chittor"],
    ["**Baburnama (Tuzuk-i-Baburi)**","**Babur**","In Chagatai Turkish"],
    ["Humayun-nama","**Gulbadan Begum**","Humayun's sister's account"],
    ["**Akbarnama** and **Ain-i-Akbari**","**Abul Fazl**","The official history, and the administrative gazetteer that forms its third volume"],
    ["Muntakhab-ut-Tawarikh","**Badauni**","Akbar's reign, from a hostile orthodox position"],
    ["Tabaqat-i-Akbari","Nizamuddin Ahmad","Akbar's reign"],
    ["**Tuzuk-i-Jahangiri**","**Jahangir**","His own memoirs"],
    ["Padshahnama","Abdul Hamid Lahori","Shah Jahan's reign"],
    ["Travels in the Mogul Empire","**Francois Bernier**","Shah Jahan and Aurangzeb; a doctor at Dara Shukoh's service"],
    ["Travels in India","**Jean-Baptiste Tavernier**","A jeweller; six voyages under Shah Jahan and Aurangzeb"],
    ["Storia do Mogor","**Niccolao Manucci**","An Italian who spent most of his life in India"],
    ["Muntakhab-ul-Lubab","Khafi Khan","Aurangzeb's reign, written in secret"]
   ]}
 ]},

/* ===================================================================== 12 */
{id:"mughal-admin", n:"The Mughal administration", hy:1,
 w:"The mansabdari system, the revenue system, and how the empire was actually run.",
 quick:[
  "The **Mansabdari system** was introduced by **Akbar** — a dual rank of **Zat** (personal status) and **Sawar** (cavalry obligation).",
  "**Todar Mal's** revenue system (**Zabti** or **Dahsala**) measured the land, averaged ten years of prices, and fixed revenue at roughly **one-third** of the produce.",
  "The empire was divided into **Subahs** (provinces), each under a **Subedar** (governor). Below the Subah: **Sarkar** → **Pargana** → **Village**.",
  "Jagirs were assigned for salary and were **not hereditary** — mansabdars were transferred regularly to prevent the growth of feudal power.",
  "**Akbar** abolished the **Jizya** (tax on non-Muslims). **Aurangzeb** reimposed it in `1679`."
 ],
 blocks:[
  {h:"The mansabdari system",
   cols:["Term","What it means"],
   rows:[
    ["**Mansab**","A rank or position in the imperial service — not an office or a post but a numerical grade"],
    ["**Zat rank**","The **personal status** of the mansabdar — his pay grade and his position in the court hierarchy"],
    ["**Sawar rank**","The **cavalry obligation** — how many horsemen the mansabdar was expected to maintain for the emperor"],
    ["First class","Sawar rank **equals** the Zat rank"],
    ["Second class","Sawar rank is **more than half** but less than the Zat rank"],
    ["Third class","Sawar rank is **less than half** of the Zat rank"],
    ["Highest ranks","Initially capped at `5,000`. Only princes of the blood could hold ranks above `5,000`. The cap was later raised as the empire expanded"],
    ["Key feature","**Not hereditary.** The mansab died with the holder. This prevented the growth of feudal families"]
   ]},

  {careful:"**Zat is personal status, Sawar is cavalry.** Questions swap these constantly. The trap is to say 'Zat is the number of horsemen' — it is not. Zat determines the mansabdar's pay and position; Sawar determines how many horses and riders he must maintain. A mansabdar with Zat 3000 / Sawar 3000 is first class; Zat 3000 / Sawar 1000 is third class."},

  {h:"Revenue administration — Todar Mal's system",
   cols:["Term","What it means"],
   rows:[
    ["**Zabti / Dahsala**","The standard system introduced by **Todar Mal** under Akbar. Land was measured; the average of **ten years'** prices was taken; revenue was fixed at about **one-third** of the average produce. Also called *Ain-i-Dahsala* (the ten-year system)"],
    ["**Batai / Ghalla-bakshi**","Crop-sharing — the harvest was divided between the cultivator and the state. Used where measurement was impractical"],
    ["**Kankut**","Estimation by inspection — the standing crop was estimated and revenue fixed accordingly"],
    ["**Nasaq**","A lump-sum assessment based on past payment records"],
    ["**Bigha**","The standard unit of area for land measurement. Akbar standardised it"],
    ["**Patwari**","The village-level official who kept the revenue records"]
   ]},

  {h:"The provincial hierarchy",
   list:[
    "**Subah** (province) — governed by a **Subedar** (also called **Sipahsalar**). Akbar divided the empire into `15` subahs; by Aurangzeb's time there were `21`.",
    "**Sarkar** (district) — headed by a **Faujdar** (military) and an **Amalguzar** (revenue).",
    "**Pargana** — headed by a **Shiqdar** (law and order), **Amin** (revenue), **Qanungo** (records) and **Patwari** (village records).",
    "**Village** — the basic unit, managed by the **Muqaddam** (village headman) and the **Patwari**."
   ]},

  {h:"The central officials",
   swap:[
    ["**Wazir / Diwan**","Head of the revenue and finance department","The most powerful minister. Also called **Diwan-i-Ala** under later Mughals"],
    ["**Mir Bakshi**","Head of the military department — the **paymaster**","Maintained the records of all mansabdars, verified muster rolls, and presented candidates for appointment"],
    ["**Sadr-us-Sudur**","Head of the **religious and charitable** department","In charge of madad-i-maash (revenue-free land grants) and enforcing Sharia (under the orthodox rulers)"],
    ["**Qazi-ul-Quzat**","The **Chief Justice**","Head of the judicial system. Dispensed justice according to Islamic law"],
    ["**Mir Saman**","Head of the **royal household** — the karkhanas (workshops)","Supervised the manufacture of goods for the court"],
    ["**Vakil**","The **Prime Minister** under the early Mughals (Babur and Humayun)","The post declined in importance under Akbar, who preferred to concentrate power in his own hands"]
   ]},

  {h:"Akbar's reforms beyond revenue",
   cols:["Reform","What it was"],
   rows:[
    ["**Sulh-i-Kul**","Universal peace and tolerance — the governing principle of Akbar's reign. All religions were to be treated with equal respect"],
    ["**Din-i-Ilahi**","A **syncretic religious order** founded by Akbar in `1582`. Not a new religion but a spiritual fellowship. Only `18` Hindus joined, the most prominent being **Birbal**"],
    ["**Ibadat Khana**","The **Hall of Worship** at Fatehpur Sikri — built in `1575` for religious debates between scholars of all faiths"],
    ["**Abolition of Jizya**","Akbar abolished the Jizya (poll tax on non-Muslims) in `1564`. Aurangzeb reimposed it in `1679` — one of the most asked dates in medieval India"],
    ["**Abolition of pilgrim tax**","Along with Jizya, Akbar also abolished the tax levied on Hindu pilgrims visiting sacred places"],
    ["**Ilahi Era**","A new calendar system introduced by Akbar in `1583`, beginning from his accession. Purely solar, not tied to any religion"]
   ]},

  {careful:"**Akbar abolished the Jizya in 1564; Aurangzeb reimposed it in 1679.** These two dates are among the most asked in medieval Indian history. The trap is swapping the two emperors — or placing the reimposition under Shah Jahan (who did not reimpose it). Din-i-Ilahi was Akbar's, not anyone else's — it died with him."}

 ]},

/* ===================================================================== 13 */
{id:"europeans", n:"The arrival of the Europeans", hy:1,
 w:"Portuguese, Dutch, English, French, Danish — who came first, what they built, and in what order they left.",
 quick:[
  "**Vasco da Gama** reached **Calicut** in `1498` — the first European to reach India by sea. The local ruler was the **Zamorin**.",
  "The **English East India Company** was founded in `1600`; its first factory in India was at **Surat** (`1613`).",
  "Order of European arrival: **Portuguese → Dutch → English → French → Danish** (by first permanent settlement).",
  "The Portuguese were the **first to arrive** (`1498`) and the **last to leave** — Goa was liberated only in `1961`.",
  "The **Carnatic Wars** (`1746–1763`) between the French and the British decided European supremacy in India — the French lost."
 ],
 blocks:[
  {h:"The five European powers, in order of arrival",
   cols:["Power","Company / Arrival","First settlement in India","What happened to them"],
   rows:[
    ["**Portuguese**","Vasco da Gama reached **Calicut**, `1498`","Factory at Calicut (`1500`), then **Cochin** (`1503`). **Goa** captured by **Albuquerque** in `1510` — became the capital of Portuguese India","Monopolized the spice trade in the 16th century. Declined from the 17th century as the Dutch and English grew stronger. **Last to leave India** — Goa liberated in `1961`"],
    ["**Dutch**","**VOC** (Dutch East India Company), `1602`","Factories at **Masulipatnam** (`1605`), **Pulicat**, **Surat**, **Nagapattinam**","Focused on the spice trade (pepper and cinnamon). Lost the **Battle of Colachel** (`1741`) to **Travancore**. Left India by the late 18th century to focus on the Dutch East Indies (Indonesia)"],
    ["**English**","**East India Company**, chartered `1600`","First factory at **Surat** (`1613`). **Fort St George** / Madras (`1639`). **Bombay** (`1668` — a dowry gift from Portugal). **Fort William** / Calcutta (`1690`)","Won supremacy over the French in the Carnatic Wars. After the **Battle of Plassey** (`1757`) became the dominant power in India"],
    ["**French**","**French East India Company** (*Compagnie des Indes orientales*), `1664`","**Surat** (`1668`), **Pondicherry** (`1674`) — their capital in India. **Chandernagore** (`1692`) in Bengal","Lost to the British: **Battle of Wandiwash** (`1760`), **Treaty of Paris** (`1763`). Retained five small territories (Pondicherry, Karikal, Yanam, Mahe, Chandernagore) until `1954`"],
    ["**Danish**","Danish East India Company, `1616`","**Tranquebar** (Tamil Nadu, `1620`), **Serampore** (Bengal, `1755`)","The smallest European presence. **Sold all possessions to the British** in `1845`. Serampore is remembered for the **Serampore Trio** (Carey, Marshman, Ward) and their press"]
   ]},

  {careful:"**The Portuguese were the first to arrive and the LAST to leave.** Vasco da Gama reached India in 1498; Goa was liberated only in 1961, fourteen years after Indian independence. No other European power remained that long. The Danish were the second-last European power to have territory in India (sold in 1845), not the French — the French territories were transferred in 1954."},

  {h:"The English East India Company — the key dates",
   swap:[
    ["`1600`","**Company chartered** by Queen Elizabeth I","Formally: 'The Governor and Company of Merchants of London Trading into the East Indies'"],
    ["`1608`","**Captain Hawkins** arrives at the court of **Jahangir** at Agra","Seeking trading rights; Jahangir was initially cordial"],
    ["`1613`","First factory at **Surat**","A factory is a warehouse and trading post, not a manufacturing unit"],
    ["`1615`","**Sir Thomas Roe** arrives as ambassador of **James I** to Jahangir","Secured a farman (imperial order) allowing the English to trade freely"],
    ["`1639`","**Fort St George** built at **Madras** (now Chennai)","The first English fortified settlement — became the centre of the Madras Presidency"],
    ["`1661`","**Bombay** given to **Charles II** as dowry by the Portuguese (marriage to Catherine of Braganza)","Transferred to the Company in `1668` for an annual rent of £10"],
    ["`1690`","**Job Charnock** founds **Calcutta** and builds **Fort William**","Became the capital of British India in 1773"],
    ["`1757`","**Battle of Plassey** — **Robert Clive** defeats **Siraj-ud-Daulah** with the help of **Mir Jafar**","The beginning of British political control in India"],
    ["`1764`","**Battle of Buxar** — decisive victory over the combined forces of the Nawab of Bengal, the Nawab of Awadh, and Shah Alam II","More significant militarily than Plassey — established British supremacy in northern India"]
   ]},

  {h:"The Carnatic Wars — how the French lost",
   cols:["War","Years","Key events","Result"],
   rows:[
    ["**First Carnatic War**","`1746–1748`","Extension of the Austrian War of Succession to India. French under **Dupleix** captured Madras. **Battle of Adyar** (`1746`) — small French force defeated the Nawab of Arcot's army","Ended by **Treaty of Aix-la-Chapelle** (`1748`). Madras returned to the British. Inconclusive"],
    ["**Second Carnatic War**","`1749–1754`","Dupleix tried to install puppet nawabs. **Robert Clive** captured **Arcot** (`1751`) with only 200 men — the turning point. Dupleix was recalled to France","**Treaty of Pondicherry** (`1754`). French influence in the Deccan broken. Dupleix's recall ended French ambition in India"],
    ["**Third Carnatic War**","`1756–1763`","Extension of the Seven Years' War. **Battle of Wandiwash** (`1760`) — the decisive battle. British under **Eyre Coote** defeated the French under **Lally**. Pondicherry fell in `1761`","**Treaty of Paris** (`1763`). France returned to India only as a trading power. French territories (Pondicherry etc.) returned but could not be fortified"]
   ]},

  {h:"The Portuguese in India — more detail",
   list:[
    "**Vasco da Gama** arrived at Calicut on `20 May 1498`, guided by an Arab navigator (**Ibn Majid**, according to some sources). He was received by the **Zamorin** (Samuthiri) of Calicut.",
    "**Pedro Álvares Cabral** arrived in `1500` and established the first Portuguese factory at Calicut.",
    "**Alfonso de Albuquerque** captured **Goa** from the Sultan of Bijapur in `1510`. He is called the **real founder of Portuguese power in India**. He introduced a policy of intermarriage and encouraged settlements.",
    "The Portuguese brought **tobacco, potato, maize, cashew nut, pineapple, and papaya** to India — all New World crops.",
    "They also introduced the **printing press** to India — at Goa, in `1556`.",
    "**Decline**: the Portuguese lost Hormuz to Persia (1622) and most of their eastern possessions to the Dutch. By the late 17th century they held little beyond Goa, Daman and Diu."
   ]},

  {careful:"**The Battle of Plassey (1757) was NOT a Carnatic War — it was in Bengal.** The Carnatic Wars were fought in southern India between the French and the British. Plassey was a separate conflict in which Clive defeated the Nawab of Bengal. The Battle of **Wandiwash** (`1760`) was the decisive battle of the Carnatic Wars. Questions often swap Plassey and Wandiwash."}

 ]}

]});
