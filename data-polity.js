/* THE ANSWER KEY — data-polity.js
   A small Polity section: Centre-State relations, and the Seventh Schedule.

   WHY ONLY THESE TWO. The rest of Polity is covered at length elsewhere. These
   two are here because they are asked constantly and understood badly, and
   because the questions on them are almost always one of four shapes:

     - which List does this subject sit in
     - which Article covers this relation
     - which body is constitutional, statutory, or neither
     - how many entries, how many votes, how many years

   All four are answerable from a table, and all four are here.

   THE ENTRY COUNTS. The number of entries in each List has changed with
   amendment, and sources quote both the original and the present figures.
   Both are given every time, because a question that says "originally" wants a
   different number from one that says "at present".                         */

(window.SUBJECTS = window.SUBJECTS || []).push({

id:"polity", n:"Polity", tab:"Polity", sub:"Centre-State and Schedule 7",
w:"The Seventh Schedule entry by entry, and the legislative, administrative and financial relations between the Union and the States.",
intro:"Two topics only, done properly. The Seventh Schedule first — the three Lists, their entry counts, the subjects that moved between them, and which entries are actually asked. Then the three kinds of Centre-State relation, Article by Article, with the five exceptions that let Parliament legislate on a State subject.",

topics:[

/* ===================================================================== 1 */
{id:"schedule7", n:"The Seventh Schedule — the frame", hy:1,
 w:"Three Lists, their counts then and now, and the five subjects the 42nd Amendment moved.",
 quick:[
  "The Seventh Schedule flows from **Article 246**. **Union List (List I)** — `100` entries at present, originally `97`. **State List (List II)** — `61` at present, originally `66`. **Concurrent List (List III)** — `52` at present, originally `47`.",
  "**Residuary powers belong to Parliament** — **Article 248** and **Entry 97** of the Union List. This follows Canada, and is the opposite of the United States, Australia and Switzerland, where residuary power stays with the states.",
  "The **42nd Amendment (1976)** moved **five** subjects from the State List to the Concurrent List: **education, forests, weights and measures, protection of wild animals and birds, and administration of justice**.",
  "Order of precedence under Article 246: **Union List over Concurrent List over State List.** The Union List wins every conflict.",
  "The Seventh Schedule was borrowed in design from the **Government of India Act, 1935**, which had the same three-list structure."
 ],
 blocks:[
  {h:"The three Lists",
   cols:["List","Entries: originally → now","Who legislates"],
   rows:[
    ["**List I — Union List**","**97 → 100**","**Parliament alone** has exclusive power"],
    ["**List II — State List**","**66 → 61**","**The State Legislature** alone, in normal circumstances — subject to five exceptions"],
    ["**List III — Concurrent List**","**47 → 52**","**Both** Parliament and the State Legislatures. Where they conflict, the **Union law prevails** (Article 254)"]
   ],
   note:"The State List is the only one that SHRANK, and it shrank because entries were moved out of it into the Concurrent List. That direction of travel — from State to Concurrent, never the other way — is itself a point that gets asked."},

  {h:"What the 42nd Amendment moved from State to Concurrent, 1976",
   cols:["Subject","New Concurrent entry","Old State entry"],
   rows:[
    ["**Education**, including technical education, medical education and universities","**25**","11 (omitted)"],
    ["**Forests**","**17A**","19 (omitted)"],
    ["**Weights and measures**","**33A**","29 (omitted)"],
    ["**Protection of wild animals and birds**","**17B**","20 (omitted)"],
    ["**Administration of justice**; constitution and organisation of all courts except the Supreme Court and the High Courts","**11A**","3 and 11 (part, omitted)"]
   ],
   note:"The same amendment added **Entry 20A — population control and family planning** — to the Concurrent List, and **Entry 2A — deployment of the armed forces of the Union in any State** — to the Union List. A common mnemonic for the five that moved: *Education, Forests, Weights, Wildlife, Justice.*"},

  {h:"The other changes worth knowing",
   cols:["Amendment","What it did to the Schedule"],
   rows:[
    ["**6th Amendment, 1956**","Added **Entry 92A** to the Union List — taxes on the **inter-State sale or purchase** of goods"],
    ["**7th Amendment, 1956**","Reorganised the states; added **Article 258A**, letting a State entrust functions to the Union"],
    ["**42nd Amendment, 1976**","The five transfers above, plus Union List Entry 2A and Concurrent List Entry 20A"],
    ["**46th Amendment, 1982**","Added **Entry 92B** to the Union List — taxes on the **consignment** of goods"],
    ["**88th Amendment, 2003**","Added **Entry 92C** to the Union List — **service tax**. It was **never brought into force**, and was deleted by the 101st"],
    ["**101st Amendment, 2016 (GST)**","Inserted **Article 246A**, **269A** and **279A**. **Omitted** Union List Entries 92 and 92C, and State List Entry 52 (entry tax). **Restricted** State List Entry 54 to petroleum crude, high-speed diesel, petrol, natural gas, aviation turbine fuel and alcoholic liquor"]
   ]},

  {careful:"**Entry 92C is a favourite question because it never worked.** Service tax was added to the Union List by the 88th Amendment in 2003 and **never notified**, so the entry existed on paper and was never used; the 101st Amendment then removed it. If asked which entry of the Union List was inserted but never brought into force, the answer is **92C**."},

  {h:"The doctrines the courts use when two laws collide",
   cols:["Doctrine","What it means"],
   rows:[
    ["**Pith and substance**","A law is judged by its **true nature and character**, not by its incidental effects. If a State law is in pith and substance about a State subject, it survives even if it touches a Union subject in passing"],
    ["**Colourable legislation**","*What cannot be done directly cannot be done indirectly.* A legislature cannot dress up a law on a subject it has no power over as a law on one it does"],
    ["**Repugnancy (Article 254)**","On a Concurrent subject, if a State law conflicts with a Union law, the **Union law prevails** and the State law is void to the extent of the conflict. **Exception:** a State law **reserved for and given the President's assent** prevails in that State — but Parliament may still override it later by a fresh law"],
    ["**Harmonious construction**","Where two entries appear to overlap, the court reads them so that both can operate, rather than letting one cancel the other"],
    ["**Territorial nexus**","A State law can affect something outside the State if there is a sufficient connection between the State and the subject matter"]
   ]}
 ]},

/* ===================================================================== 2 */
{id:"union-list", n:"Union List — the entries that are asked", hy:1,
 w:"The hundred entries reduced to the ones that appear in questions, grouped.",
 quick:[
  "**Entry 1** is Defence. **Entry 97** is the **residuary** entry — any matter not in the other two Lists.",
  "**Entry 2A** — deployment of the armed forces of the Union in any State — was added by the **42nd Amendment**.",
  "**Railways is Entry 22** and is a **Union** subject; **roads and bridges** other than national highways are in the **State** List.",
  "**Entry 63** names four universities by name: **Banaras Hindu University, Aligarh Muslim University, Delhi University**, and any other declared an institution of national importance.",
  "**Entry 66** — coordination and determination of standards in institutions of higher education — is the entry the UGC and the central regulators rest on."
 ],
 blocks:[
  {h:"Defence, security and foreign affairs",
   cols:["Entry","Subject"],
   rows:[
    ["**1**","**Defence** of India"],
    ["**2**","Naval, military and air forces; any other armed forces of the Union"],
    ["**2A**","**Deployment of any armed force of the Union in any State** in aid of the civil power — *added by the 42nd Amendment, 1976*"],
    ["3","Delimitation of cantonment areas and local self-government in them"],
    ["**6**","**Atomic energy** and mineral resources necessary for its production"],
    ["7","Industries declared necessary for the purpose of defence"],
    ["**9**","**Preventive detention** for reasons connected with **defence, foreign affairs or the security of India**"],
    ["**10**","**Foreign affairs** and all matters bringing the Union into relation with any foreign country"],
    ["**14**","**Entering into treaties and agreements** with foreign countries, and implementing them"],
    ["15","War and peace"],
    ["**17**","**Citizenship, naturalisation and aliens**"],
    ["18","Extradition"],
    ["**19**","Admission into, and emigration and expulsion from, India — **passports and visas**"]
   ]},

  {h:"Transport and communication",
   cols:["Entry","Subject"],
   rows:[
    ["**22**","**Railways**"],
    ["23","Highways **declared to be national highways** by Parliament"],
    ["24","Shipping and navigation on inland waterways declared to be national waterways"],
    ["25","Maritime shipping and navigation; lighthouses"],
    ["**27**","**Major ports** — their constitution and powers"],
    ["**29**","**Airways, aircraft and air navigation**"],
    ["**31**","**Posts and telegraphs, telephones, wireless, broadcasting** and other like forms of communication"]
   ]},

  {h:"Money, banking, trade and industry",
   cols:["Entry","Subject"],
   rows:[
    ["**36**","**Currency, coinage and legal tender**; foreign exchange"],
    ["37","Foreign loans"],
    ["**38**","**Reserve Bank of India**"],
    ["40","**Lotteries organised by the Government of India** or a State Government"],
    ["**41**","**Trade and commerce with foreign countries**; import and export across customs frontiers"],
    ["43, 44","Incorporation, regulation and winding up of **trading corporations**, and of corporations generally, other than co-operative societies"],
    ["**45**","**Banking**"],
    ["**47**","**Insurance**"],
    ["48","**Stock exchanges** and futures markets"],
    ["**49**","**Patents, inventions and designs; copyright; trademarks** and merchandise marks"],
    ["51","Establishment of **standards of quality** for goods to be exported"],
    ["**52**","**Industries** the control of which by the Union is **declared by Parliament to be expedient in the public interest**"],
    ["53, 54, 55","Regulation and development of **oilfields and mineral oil**; **regulation of mines and mineral development** where declared expedient in the public interest; labour and safety in mines and oilfields"],
    ["**56**","**Regulation and development of inter-State rivers and river valleys** where declared expedient in the public interest"],
    ["57","**Fishing and fisheries beyond territorial waters**"]
   ]},

  {h:"Education, institutions and elections",
   cols:["Entry","Subject"],
   rows:[
    ["62","The **National Library, the Indian Museum, the Imperial War Museum, the Victoria Memorial** and the Indian War Memorial"],
    ["**63**","The institutions known as the **Banaras Hindu University**, the **Aligarh Muslim University** and the **Delhi University**, and any other declared an institution of national importance"],
    ["**64**","Institutions of **scientific or technical education** financed by the Union and declared of national importance"],
    ["65","Union agencies for professional, vocational or technical training, and for the promotion of special studies"],
    ["**66**","**Coordination and determination of standards** in institutions for **higher education or research**, and in scientific and technical institutions"],
    ["**67**","**Ancient and historical monuments and archaeological sites of national importance**"],
    ["**70**","The **Union Public Service Commission** and the **Joint Public Service Commissions**"],
    ["**72**","**Elections to Parliament, to the State Legislatures, and to the offices of President and Vice-President**; the Election Commission"],
    ["**76**","**Audit of the accounts of the Union and of the States**"],
    ["**77, 78**","Constitution, organisation, jurisdiction and powers of the **Supreme Court** and of the **High Courts**"],
    ["81","**Inter-State migration; inter-State quarantine**"]
   ]},

  {h:"The taxing entries",
   cols:["Entry","Tax"],
   rows:[
    ["**82**","**Taxes on income other than agricultural income**"],
    ["**83**","**Duties of customs**, including export duties"],
    ["**84**","**Duties of excise** on **petroleum crude, high-speed diesel, motor spirit (petrol), natural gas, aviation turbine fuel and tobacco** — narrowed to this list by the 101st Amendment"],
    ["**85**","**Corporation tax**"],
    ["86","Taxes on the capital value of assets, **excluding agricultural land**"],
    ["87, 88","**Estate duty** and duties in respect of succession, **other than agricultural land**"],
    ["89","**Terminal taxes** on goods or passengers carried by railway, sea or air"],
    ["90","Taxes other than stamp duties on **stock exchange** transactions"],
    ["**92A**","Taxes on the **inter-State sale or purchase** of goods — *added by the 6th Amendment, 1956*"],
    ["**92B**","Taxes on the **consignment** of goods in inter-State trade — *added by the 46th Amendment, 1982*"],
    ["96","**Fees** in respect of any of the matters in this List, but not court fees"],
    ["**97**","**Any other matter not enumerated in List II or List III**, including any tax not mentioned in either — the **residuary entry**"]
   ]}
 ]},

/* ===================================================================== 3 */
{id:"state-list", n:"State List — the entries that are asked", hy:1,
 w:"The sixty-one entries reduced to the ones that appear in questions.",
 quick:[
  "**Entry 1 is public order; Entry 2 is police.** Both are State subjects, which is the constitutional basis of every argument about central forces in a state.",
  "**Agriculture is Entry 14; land is Entry 18; water is Entry 17** — all three are State subjects, and all three are asked.",
  "**Public health and sanitation, hospitals and dispensaries** is **Entry 6** — a State subject. **Population control and family planning** is **Concurrent** (Entry 20A). The two are constantly confused.",
  "**Entries 11 (education), 19 (forests), 20 (wild animals and birds) and 29 (weights and measures) were omitted** by the 42nd Amendment and now sit in the Concurrent List.",
  "**Entry 45 is land revenue; Entry 46 is taxes on agricultural income; Entry 51 is excise on alcoholic liquor** — the three State revenue heads that survived GST."
 ],
 blocks:[
  {h:"Public order, administration and local government",
   cols:["Entry","Subject"],
   rows:[
    ["**1**","**Public order** — but not the use of any naval, military or air force of the Union"],
    ["**2**","**Police**, including railway and village police"],
    ["**4**","**Prisons**, reformatories and Borstal institutions"],
    ["**5**","**Local government** — municipal corporations, improvement trusts, district boards, mining settlement authorities and other local authorities"],
    ["**6**","**Public health and sanitation; hospitals and dispensaries**"],
    ["**7**","**Pilgrimages**, other than pilgrimages to places outside India"],
    ["**8**","**Intoxicating liquors** — production, manufacture, possession, transport, purchase and sale"],
    ["9","Relief of the disabled and the unemployable"],
    ["10","Burials and burial grounds; cremations and cremation grounds"],
    ["12","Libraries, museums and other similar institutions controlled by the State; **ancient monuments other than those of national importance**"],
    ["**13**","**Communications** — roads, bridges, ferries and other means of communication not specified in List I; municipal tramways; ropeways"]
   ]},

  {h:"Land, water and agriculture — the three that matter most",
   cols:["Entry","Subject"],
   rows:[
    ["**14**","**Agriculture**, including agricultural education and research, protection against pests and prevention of plant diseases"],
    ["15","Preservation, protection and improvement of **stock** and prevention of animal diseases; veterinary training and practice"],
    ["16","Pounds and the prevention of cattle trespass"],
    ["**17**","**Water** — water supplies, irrigation and canals, drainage and embankments, water storage and water power — **subject to Entry 56 of the Union List**"],
    ["**18**","**Land** — rights in or over land, land tenures, the relation of landlord and tenant, collection of rents, transfer and alienation of agricultural land, land improvement, agricultural loans, colonisation"],
    ["21","**Fisheries**"],
    ["23","Regulation of mines and mineral development — **subject to Entry 54 of the Union List**"],
    ["24","**Industries** — subject to Entries 7 and 52 of the Union List"],
    ["25","Gas and gas-works"]
   ],
   note:"Entry 17 on water and Entry 56 on the Union List are the pair that produce every inter-State river dispute: the State owns its water, but Parliament may take over the regulation of an inter-State river when it declares that expedient in the public interest."},

  {h:"Trade, and the rest",
   cols:["Entry","Subject"],
   rows:[
    ["**26, 27**","**Trade and commerce within the State**; production, supply and distribution of goods — subject to Entry 33 of the Concurrent List"],
    ["**28**","**Markets and fairs**"],
    ["30","Money-lending and money-lenders; relief of agricultural indebtedness"],
    ["31","Inns and innkeepers"],
    ["32","**Incorporation of corporations other than trading corporations** — and, expressly, **co-operative societies**"],
    ["**33**","**Theatres and dramatic performances; cinemas** (subject to Union List Entry 60 on the sanctioning of films); **sports, entertainments and amusements**"],
    ["**34**","**Betting and gambling**"],
    ["35","Works, lands and buildings vested in or in the possession of the State"],
    ["**Omitted**","**11 (education), 19 (forests), 20 (protection of wild animals and birds), 29 (weights and measures)** — moved to the Concurrent List by the 42nd Amendment. **52 (entry tax)** — omitted by the 101st Amendment"]
   ]},

  {h:"The taxing entries",
   cols:["Entry","Tax"],
   rows:[
    ["**45**","**Land revenue**"],
    ["**46**","**Taxes on agricultural income** — the reason agricultural income is outside the Union's income-tax net"],
    ["47","Duties in respect of succession to **agricultural land**"],
    ["**49**","**Taxes on lands and buildings** — the basis of property tax"],
    ["50","Taxes on **mineral rights** — subject to Parliament's limitations"],
    ["**51**","**Duties of excise on alcoholic liquors** for human consumption, opium, Indian hemp and other narcotics manufactured in the State"],
    ["**54**","Taxes on the sale of **petroleum crude, high-speed diesel, motor spirit (petrol), natural gas, aviation turbine fuel and alcoholic liquor** — everything else was folded into GST by the 101st Amendment"],
    ["56","Taxes on **goods and passengers** carried by road or inland waterways"],
    ["**57**","**Taxes on vehicles**"],
    ["58","Taxes on animals and boats"],
    ["59","**Tolls**"],
    ["**60**","**Taxes on professions, trades, callings and employment** — professional tax"],
    ["62","Taxes on **entertainments and amusements** to the extent levied by a Panchayat, Municipality, Regional Council or District Council"],
    ["63","**Rates of stamp duty** on documents other than those specified in the Union List"]
   ]},

  {careful:"**Alcohol and petroleum are the two things GST did not swallow, and that is why they are asked.** Excise on alcoholic liquor (Entry 51) and the sales tax on five petroleum products and liquor (Entry 54) stayed with the States. They are the largest remaining independent State tax bases, which is why every State budget discussion turns on them."}
 ]},

/* ===================================================================== 4 */
{id:"concurrent-list", n:"Concurrent List — the entries that are asked", hy:1,
 w:"The fifty-two entries, and which of them arrived in 1976.",
 quick:[
  "**Criminal law is Entry 1 and criminal procedure Entry 2** — which is why the **BNS** and the **BNSS** are Parliament's laws but a State may amend them for itself with the President's assent.",
  "**Entry 5** is personal law — **marriage and divorce, adoption, wills, succession, joint family and partition**.",
  "The five entries added by the **42nd Amendment**: **11A** administration of justice, **17A** forests, **17B** protection of wild animals and birds, **20A** population control and family planning, **25** education, **33A** weights and measures.",
  "**Entry 20 is economic and social planning** — the entry that carries five-year planning and most central schemes.",
  "**Electricity is Entry 38; factories Entry 36; trade unions Entry 22; social security Entry 23** — the entire labour and industrial regulation field is Concurrent."
 ],
 blocks:[
  {h:"Law, courts and procedure",
   cols:["Entry","Subject"],
   rows:[
    ["**1**","**Criminal law**, including all matters included in the Indian Penal Code at the commencement of the Constitution — but not offences against laws in the Union or State Lists"],
    ["**2**","**Criminal procedure**, including all matters included in the Code of Criminal Procedure at the commencement of the Constitution"],
    ["**3**","**Preventive detention** for reasons connected with the **security of a State**, the maintenance of **public order**, or the maintenance of **supplies and services essential to the community**"],
    ["4","Removal from one State to another of prisoners and accused persons"],
    ["**5**","**Marriage and divorce; infants and minors; adoption; wills, intestacy and succession; joint family and partition** — all personal law"],
    ["6","**Transfer of property** other than agricultural land; registration of deeds and documents"],
    ["7, 8","**Contracts**; actionable wrongs"],
    ["9","Bankruptcy and insolvency"],
    ["**11A**","**Administration of justice**; constitution and organisation of **all courts except the Supreme Court and the High Courts** — *added by the 42nd Amendment*"],
    ["**12**","**Evidence and oaths**"],
    ["**13**","**Civil procedure**, including all matters in the Code of Civil Procedure"],
    ["14","**Contempt of court**, but not of the Supreme Court"],
    ["**46**","**Jurisdiction and powers of all courts except the Supreme Court**, with respect to any of the matters in this List"]
   ],
   note:"Entries 1, 2 and 12 are why the three new criminal laws — the BNS, the BNSS and the BSA — are Central Acts, and also why a State can amend them in its own territory with the President's assent under Article 254(2)."},

  {h:"Welfare, labour and the economy",
   cols:["Entry","Subject"],
   rows:[
    ["17","Prevention of cruelty to animals"],
    ["**17A**","**Forests** — *added by the 42nd Amendment*"],
    ["**17B**","**Protection of wild animals and birds** — *added by the 42nd Amendment*"],
    ["18","Adulteration of foodstuffs"],
    ["**19**","**Drugs and poisons** — subject to Union List Entry 59 on opium"],
    ["**20**","**Economic and social planning**"],
    ["**20A**","**Population control and family planning** — *added by the 42nd Amendment*"],
    ["21","Commercial and industrial monopolies, combines and trusts"],
    ["**22**","**Trade unions; industrial and labour disputes**"],
    ["**23**","**Social security and social insurance; employment and unemployment**"],
    ["**24**","**Welfare of labour** — conditions of work, provident funds, employers' liability, workmen's compensation, invalidity and old-age pensions, maternity benefits"],
    ["**25**","**Education**, including technical education, medical education and universities — *added by the 42nd Amendment* — and vocational and technical training of labour"],
    ["26","Legal, medical and other professions"],
    ["27","Relief and rehabilitation of persons displaced from their original place of residence"],
    ["28","Charities and charitable institutions; religious endowments"],
    ["29","Prevention of the extension of **infectious or contagious diseases** from one State to another"],
    ["30","**Vital statistics**, including registration of births and deaths"]
   ]},

  {h:"Infrastructure, property and the rest",
   cols:["Entry","Subject"],
   rows:[
    ["**31**","**Ports other than major ports**"],
    ["32","Shipping and navigation on **inland waterways** other than national waterways"],
    ["33","Trade and commerce in, and the production, supply and distribution of, specified goods — including **foodstuffs, cattle fodder, raw cotton and raw jute**"],
    ["**33A**","**Weights and measures** except the establishment of standards — *added by the 42nd Amendment*"],
    ["34","Price control"],
    ["**35**","**Mechanically propelled vehicles**, including the principles on which taxes on them are to be levied"],
    ["**36**","**Factories**"],
    ["37","Boilers"],
    ["**38**","**Electricity**"],
    ["**39**","**Newspapers, books and printing presses**"],
    ["40","**Archaeological sites and remains other than those of national importance**"],
    ["41","Custody, management and disposal of **enemy property**"],
    ["**42**","**Acquisition and requisitioning of property**"],
    ["45","Inquiries and statistics for the purpose of any of the matters in List II or List III"],
    ["47","**Fees** in respect of any of the matters in this List, but not court fees"]
   ]},

  {careful:"**Population control is Concurrent; public health is State.** Family planning (Concurrent Entry 20A) and public health, hospitals and dispensaries (State Entry 6) are different entries in different Lists, added at different times. So is **education** — Concurrent since 1976 — against **libraries and museums controlled by the State**, which stayed in the State List. The most common failure here is assuming a whole field sits in one List."}
 ]},

/* ===================================================================== 5 */
{id:"legislative", n:"Legislative relations — Articles 245 to 255", hy:1,
 w:"The five ways Parliament can legislate on a State subject, and what happens when two laws collide.",
 quick:[
  "**Article 248** and **Entry 97** give **residuary powers to Parliament**.",
  "**Article 249** — Parliament may legislate on a State subject **in the national interest** if the **Rajya Sabha** passes a resolution by **two-thirds of members present and voting**. The law lasts **one year** and is renewable indefinitely.",
  "**Article 250** — Parliament may legislate on any State subject during a **National Emergency**. Such a law lapses **six months** after the emergency ends.",
  "**Article 252** — Parliament may legislate for **two or more States by their consent** — and such a law can then be amended or repealed **only by Parliament**, not by the States.",
  "**Article 253** — Parliament may legislate on any State subject to **implement an international treaty or agreement**, without any State's consent."
 ],
 blocks:[
  {h:"The Articles",
   cols:["Article","What it provides"],
   rows:[
    ["**245**","**Extent of laws.** Parliament may make laws for the whole or any part of India; a State Legislature for the whole or any part of that State. **Only Parliament has extra-territorial power** — it may make a law applying to Indian subjects and their property anywhere in the world"],
    ["**246**","**The three Lists.** Establishes the order of precedence: **Union List, then Concurrent List, then State List**"],
    ["**246A**","**Special provision for GST** — *inserted by the 101st Amendment*. Both Parliament and the State Legislatures may legislate on goods and services tax; but Parliament has **exclusive** power over **inter-State supply**"],
    ["**247**","Parliament may establish **additional courts** for the better administration of its own laws"],
    ["**248**","**Residuary powers of legislation belong to Parliament** — including any tax not mentioned in the State or Concurrent List"],
    ["**249**","**Legislation in the national interest.** See below"],
    ["**250**","**Legislation during a National Emergency.** See below"],
    ["**251**","Articles 249 and 250 do **not restrict** a State Legislature's own power — but where the two laws conflict, the **parliamentary law prevails**"],
    ["**252**","**Legislation by consent of two or more States.** See below"],
    ["**253**","**Legislation to give effect to international agreements.** See below"],
    ["**254**","**Inconsistency between Union and State law** — the repugnancy rule. See below"],
    ["**255**","Requirements as to recommendations and previous sanctions are matters of **procedure only** — a law is not invalid merely because a required recommendation was not obtained, if the Governor or the President has assented"]
   ]},

  {h:"The five exceptions — when Parliament may legislate on a State subject",
   cols:["How","Article","The exact condition"],
   rows:[
    ["**In the national interest**","**249**","The **Rajya Sabha** must pass a resolution supported by **not less than two-thirds of the members present and voting**. The law then operates for **one year**, renewable any number of times, and **ceases six months** after the resolution stops being in force"],
    ["**During a National Emergency**","**250**","No resolution is needed. Such a law **ceases six months after the Proclamation ceases to operate**"],
    ["**By the request of two or more States**","**252**","Two or more State Legislatures pass resolutions asking Parliament to legislate. The Act applies to those States and to **any other State that later adopts it**. Crucially, it can be **amended or repealed only by Parliament**"],
    ["**To implement an international agreement**","**253**","Parliament may legislate on any State subject to implement a **treaty, agreement or convention**, or a decision of an international body. **No State consent is required at all** — this is the widest of the five"],
    ["**During President's Rule**","**356 and 357**","When a State's legislature is dissolved or suspended, **Parliament exercises its legislative power**, and may delegate it to the President. Such a law continues after President's Rule ends until repealed by the State Legislature"]
   ],
   note:"Parliament also legislates for Union Territories on all three Lists, under Article 246(4)."},

  {h:"Laws actually made under Article 252",
   list:[
    "**Prize Competitions Act, 1955**",
    "**Wild Life (Protection) Act, 1972** — before forests and wildlife moved to the Concurrent List in 1976",
    "**Water (Prevention and Control of Pollution) Act, 1974**",
    "**Urban Land (Ceiling and Regulation) Act, 1976**",
    "**Transplantation of Human Organs Act, 1994**"
   ]},

  {h:"Laws actually made under Article 253",
   list:[
    "**United Nations (Privileges and Immunities) Act, 1947**",
    "**Geneva Conventions Act, 1960**",
    "**Air (Prevention and Control of Pollution) Act, 1981** — following the Stockholm Conference of 1972",
    "**Environment (Protection) Act, 1986** — the same origin",
    "**Anti-Hijacking Act** and the **Tokyo Convention Act, 1975**"
   ]},

  {h:"Article 254 — the repugnancy rule, exactly",
   list:[
    "**254(1):** If a State law on a **Concurrent** subject is repugnant to a Union law, the **Union law prevails** and the State law is void **to the extent of the repugnancy**.",
    "**254(2) — the exception:** if the State law was **reserved for the consideration of the President and has received his assent**, then the **State law prevails in that State**.",
    "**But Parliament keeps the last word.** Even after such assent, Parliament may enact a fresh law on the same matter — adding to, amending, varying or repealing the State law — and the parliamentary law then prevails again.",
    "The rule applies only where there is a **direct and irreconcilable conflict**. If the two laws can stand together, both operate."
   ]},

  {careful:"**Article 249 needs two-thirds of those *present and voting*, not two-thirds of the total membership of the Rajya Sabha.** This is the single most reliably tested detail in Centre-State relations. Compare it with Article 312 (creating a new All-India Service), which also needs a **Rajya Sabha** resolution by two-thirds of members present and voting, and with Article 368 amendments, which need a majority of the **total membership** *and* two-thirds present and voting in each House."}
 ]},

/* ===================================================================== 6 */
{id:"administrative", n:"Administrative relations — Articles 256 to 263", hy:1,
 w:"The Union's directions to States, water disputes, and the Inter-State Council.",
 quick:[
  "**Article 256** — a State's executive power must be so exercised as to ensure **compliance with laws made by Parliament**.",
  "**Article 257** — a State's executive power must not **impede or prejudice** the Union's; the Union may direct a State on **means of communication of national or military importance** and on the **protection of railways**.",
  "**Article 262** — **inter-State water disputes**: Parliament may provide for adjudication, and may **bar the jurisdiction of the Supreme Court** over them. Hence the **Inter-State River Water Disputes Act, 1956**.",
  "**Article 263** — the **Inter-State Council**. It is **constitutional but not mandatory**: the President *may* establish it. It was set up in `1990`, chaired by the **Prime Minister**.",
  "**Article 365** — if a State fails to comply with a Union direction, the President may hold that the State's government **cannot be carried on in accordance with the Constitution**, opening the door to Article 356."
 ],
 blocks:[
  {h:"The Articles",
   cols:["Article","What it provides"],
   rows:[
    ["**256**","**Obligation of States.** The executive power of every State must be so exercised as to ensure **compliance with the laws made by Parliament**; and the Union may give a State such directions as appear necessary for that purpose"],
    ["**257(1)**","The executive power of a State must not **impede or prejudice** the exercise of the Union's executive power; the Union may give directions to that end"],
    ["**257(2)**","Union directions as to the construction and maintenance of **means of communication declared to be of national or military importance**"],
    ["**257(3)**","Union directions as to the **measures to be taken for the protection of the railways** within the State"],
    ["**258(1)**","**The Union may confer powers on a State** — the President may, **with the consent of the State Government**, entrust functions of the Union to that State or its officers"],
    ["**258(2)**","Parliament may, by law, confer powers and impose duties on a State or its officers in relation to a Union subject — **and here no State consent is needed**"],
    ["**258A**","**A State may entrust functions to the Union** — the Governor may, with the Union Government's consent, entrust State functions to it. *Added by the 7th Amendment, 1956*"],
    ["**261**","**Full faith and credit** must be given throughout India to the **public acts, records and judicial proceedings** of the Union and of every State"],
    ["**262**","**Adjudication of disputes relating to the waters of inter-State rivers.** Parliament may provide for adjudication, and **may provide that neither the Supreme Court nor any other court shall exercise jurisdiction** over such a dispute"],
    ["**263**","**The Inter-State Council.** The **President may by order establish** a council to inquire into and advise on disputes between States, to investigate and discuss subjects of common interest, and to make recommendations for better coordination of policy"]
   ]},

  {careful:"**Article 258(1) needs State consent; Article 258(2) does not.** When the *President* entrusts Union functions to a State, the State must consent. When *Parliament* by law confers powers or imposes duties on a State in relation to a Union subject, no consent is required. That asymmetry is the question."},

  {h:"The two Articles that convert a refusal into President's Rule",
   cols:["Article","What it says"],
   rows:[
    ["**355**","**Duty of the Union** to protect every State against **external aggression and internal disturbance**, and to ensure that the government of every State is carried on in accordance with the provisions of the Constitution. This is the Article that **justifies** intervention"],
    ["**356**","**President's Rule** — where the President, on the Governor's report or otherwise, is satisfied that the government of a State cannot be carried on in accordance with the Constitution"],
    ["**365**","Where a State **fails to comply with any direction** given by the Union, it shall be **lawful for the President to hold** that a situation has arisen in which the government of the State cannot be carried on in accordance with the Constitution. In effect, Article 365 turns a refused direction into a ground for Article 356"]
   ],
   note:"**S. R. Bommai v. Union of India (1994)** is the controlling case on Article 356: the proclamation is subject to judicial review, the majority of a government must be tested on the floor of the House and not in the Governor's judgment, and the Assembly may not be dissolved before both Houses of Parliament have approved the proclamation."},

  {h:"Water disputes under Article 262",
   cols:["","Detail"],
   rows:[
    ["The two Acts of 1956","The **River Boards Act, 1956** — for the regulation and development of inter-State rivers by boards set up on State request; almost never used. The **Inter-State River Water Disputes Act, 1956** — for tribunals"],
    ["How a tribunal is set up","A State applies to the Union Government; if the Government is of the opinion that the dispute cannot be settled by negotiation, it **must** constitute a tribunal. The award, once published, is **binding**"],
    ["Jurisdiction of the courts","Section 11 of the 1956 Act **bars the Supreme Court and every other court** from jurisdiction over a dispute referred to a tribunal — under the authority of Article 262"],
    ["The tribunals","**Krishna** (Andhra Pradesh, Karnataka, Maharashtra), **Godavari**, **Narmada** (Madhya Pradesh, Gujarat, Maharashtra, Rajasthan), **Ravi and Beas**, **Cauvery** (Karnataka, Tamil Nadu, Kerala, Puducherry), **Vansadhara**, **Mahadayi (Mandovi)** and **Mahanadi**"],
    ["The pending reform","The **Inter-State River Water Disputes (Amendment) Bill** proposes a **single standing tribunal** with multiple benches and a **Disputes Resolution Committee** to attempt settlement first, replacing the practice of setting up a fresh tribunal for each dispute"]
   ]},

  {h:"The Inter-State Council and the Zonal Councils — the difference that is asked",
   cols:["","Inter-State Council","Zonal Councils"],
   rows:[
    ["Source","**Constitutional** — Article 263","**Statutory** — the **States Reorganisation Act, 1956**"],
    ["Set up","**1990**, by a Presidential Order, on the recommendation of the **Sarkaria Commission**","1956"],
    ["Chairman","**The Prime Minister**","**The Union Home Minister**"],
    ["Members","All **Chief Ministers**; the Chief Ministers or administrators of Union Territories; **six Union Cabinet Ministers** nominated by the Prime Minister","The Chief Ministers and two other ministers of each State in the zone; the administrators of UTs in the zone. The **Vice-Chairman** is a Chief Minister of a member State, by **annual rotation**"],
    ["Number","One","**Five** — Northern (Delhi), Central (Prayagraj), Eastern (Kolkata), Western (Mumbai), Southern (Chennai)"],
    ["Nature of function","**Recommendatory** — it advises, it does not decide","**Advisory** as well"],
    ["Standing Committee","Yes — set up 1996, chaired by the Union Home Minister",""]
   ],
   note:"The **North-Eastern Council** is separate again, created by the **North-Eastern Council Act, 1971**, with headquarters at **Shillong**. **Sikkim** was added to it in **2002**. It is therefore statutory, and it is not one of the five Zonal Councils."},

  {h:"The other integrating devices",
   list:[
    "**All-India Services** — **Article 312**. The IAS, IPS and Indian Forest Service are recruited and trained by the Union but serve the States. A new All-India Service requires a **Rajya Sabha resolution by two-thirds of members present and voting**. Parliament cannot create an **All-India Judicial Service** below the rank of district judge.",
    "**Public Service Commissions** — the Chairman and members of a **State** PSC are appointed by the **Governor** but can be **removed only by the President** (Article 317).",
    "**A single integrated judiciary**, with the Supreme Court at the top of both Union and State jurisdictions.",
    "**A single Constitution, single citizenship, and a common All-India civil service.**",
    "**The Election Commission** and the **Comptroller and Auditor General** — one of each, for both Union and States.",
    "**Article 307** — Parliament may appoint an authority to carry out the purposes of Articles 301 to 304 on the freedom of trade and commerce."
   ]}
 ]},

/* ===================================================================== 7 */
{id:"financial", n:"Financial relations — Articles 264 to 293", hy:1,
 w:"The tax split, the Finance Commission, the GST Council, and the grants.",
 quick:[
  "**Article 280** — the **Finance Commission**, constituted by the **President** every **five years**, with a **chairman and four other members**.",
  "**Article 279A** — the **GST Council**. Chaired by the **Union Finance Minister**; decisions need a **three-fourths majority of weighted votes**, with the **Centre holding one-third** and **all the States together two-thirds**.",
  "**Article 271** — a **surcharge** on Union taxes goes **wholly to the Union** and is not shared with the States. It is the standard way the divisible pool is bypassed.",
  "The **15th Finance Commission** (chairman **N. K. Singh**) recommended **41 per cent** of the divisible pool for the States for 2021–26; the **14th** (chairman **Y. V. Reddy**) had recommended **42 per cent**.",
  "The **16th Finance Commission**, chaired by **Arvind Panagariya**, covers the period **2026–31**."
 ],
 blocks:[
  {h:"The Articles",
   cols:["Article","What it provides"],
   rows:[
    ["**265**","**No tax shall be levied or collected except by authority of law.**"],
    ["266","The **Consolidated Fund** and the **Public Account** of India and of each State"],
    ["267","The **Contingency Fund** — of India, placed at the disposal of the President; of a State, at the disposal of the Governor"],
    ["**268**","Duties **levied by the Union but collected and appropriated by the States** — stamp duties"],
    ["**269**","Taxes **levied and collected by the Union but assigned to the States** — taxes on the inter-State sale or consignment of goods"],
    ["**269A**","**GST on inter-State supply** — levied and collected by the **Government of India** and **apportioned between the Union and the States**. *Inserted by the 101st Amendment*"],
    ["**270**","Taxes **levied and collected by the Union and distributed** between the Union and the States — the **divisible pool**, whose share is set on the Finance Commission's recommendation"],
    ["**271**","**Surcharge** on any of the duties or taxes in Articles 269 and 270, **for the purposes of the Union** — and it goes **entirely to the Union**. GST is excluded from this power"],
    ["**275**","**Statutory grants** — grants-in-aid from the Union to States in need, charged on the Consolidated Fund of India, including specific grants for **Scheduled Tribes and Scheduled Areas** and for the administration of Assam's tribal areas"],
    ["**280**","**The Finance Commission**"],
    ["**282**","**Discretionary grants** — the Union or a State may make **any grant for any public purpose**, even one outside its own legislative competence. Most centrally sponsored schemes rest on this Article"],
    ["**292, 293**","**Borrowing** — by the Government of India, and by a State. A **State cannot borrow outside India at all**, and needs the Union's consent to borrow at home if any part of a Union loan to it is still outstanding"],
    ["**360**","**Financial Emergency** — never yet proclaimed in India"]
   ]},

  {h:"The Finance Commission",
   cols:["","Detail"],
   rows:[
    ["Constituted by","**The President**, under **Article 280**, every **fifth year** or earlier if he considers it necessary"],
    ["Composition","A **chairman and four other members**. Parliament determines their qualifications and the manner of selection"],
    ["Its terms of reference","The **distribution of the net proceeds of shareable taxes** between the Union and the States, and among the States; the **principles governing grants-in-aid** to States out of the Consolidated Fund of India; measures to **augment the resources of Panchayats and Municipalities** (added by the 73rd and 74th Amendments); and any other matter referred by the President"],
    ["Its status","**Recommendatory only.** The recommendations are not binding on the Government, though they have in practice always been accepted for tax devolution"],
    ["Laid before","The report, with an explanatory memorandum on the action taken, is **laid before both Houses of Parliament**"],
    ["First Commission","**1951**, chairman **K. C. Neogy**"],
    ["**14th**","Chairman **Y. V. Reddy**, for 2015–20. Raised the States' share of the divisible pool from **32 per cent to 42 per cent** — the largest single jump ever, and it abolished the distinction between plan and non-plan grants"],
    ["**15th**","Chairman **N. K. Singh**, for 2021–26. Recommended **41 per cent** — the one-point reduction reflecting the conversion of Jammu and Kashmir and Ladakh into Union Territories. Used the **2011 Census** for population, which the southern States objected to"],
    ["**16th**","Chairman **Arvind Panagariya**, constituted **December 2023**, for the award period **2026–31**"]
   ]},

  {h:"The GST Council — Article 279A",
   cols:["","Detail"],
   rows:[
    ["Constituted by","**The President**, within sixty days of the commencement of the 101st Amendment"],
    ["**Chairperson**","**The Union Finance Minister**"],
    ["Members","The **Union Minister of State** in charge of Revenue or Finance, and **one minister nominated by each State Government**"],
    ["**Vice-Chairperson**","Chosen **from among the State ministers**, by themselves, for a period they decide"],
    ["**Quorum**","**One-half** of the total number of members"],
    ["**Voting**","Every decision needs a **majority of not less than three-fourths of the weighted votes** of the members present and voting — with the **Union's vote weighted at one-third** and **all the State votes together at two-thirds**"],
    ["What it recommends","The taxes to be subsumed; the goods and services to be taxed or exempted; the model GST laws; the **rates including floor rates with bands**; the threshold turnover for exemption; and special provisions for the north-eastern and hill States"],
    ["Its status","**Recommendatory**, as the Supreme Court held in **Union of India v. Mohit Minerals (2022)** — the recommendations are not binding on the Union or the States"]
   ],
   note:"The weighting means neither side can act alone: the Centre alone has one-third and cannot reach three-fourths; the States together have two-thirds and also cannot. Every decision needs the Centre plus at least twenty States."},

  {h:"How the taxes are split — the four categories",
   cols:["Category","Article","Example"],
   rows:[
    ["**Levied by the Union, collected and appropriated by the States**","**268**","Stamp duties on bills of exchange, cheques, promissory notes"],
    ["**Levied and collected by the Union, assigned wholly to the States**","**269**","Taxes on the inter-State sale and consignment of goods"],
    ["**Levied and collected by the Union, distributed between Union and States**","**270**","Income tax, corporation tax, customs, the excise duties that remain — the **divisible pool**"],
    ["**Levied and collected by the Union, kept entirely by the Union**","**271** and the Union List's own heads","Surcharges, and cesses. **Neither is shared**, which is why the States' effective share is well below the headline 41 per cent"]
   ]},

  {careful:"**A cess and a surcharge are the two ways the divisible pool is bypassed, and neither is shared with the States.** The Finance Commission's 41 per cent is 41 per cent of the *divisible pool*, and cesses and surcharges sit outside it. This is the substance of almost every complaint by States about fiscal federalism, and the question usually takes the form: which of these is *not* shareable with the States?"}
 ]},

/* ===================================================================== 8 */
{id:"federalism", n:"How federal India actually is, and who has said so", hy:1,
 w:"The unitary features, the commissions on Centre-State relations, and the phrases that get quoted.",
 quick:[
  "**Article 1** calls India a **Union of States** — not a federation. The Drafting Committee chose *Union* deliberately: Ambedkar said it signals that the federation is **not the result of an agreement** and that **no State has the right to secede**.",
  "**K. C. Wheare** called India **quasi-federal**. **Ivor Jennings** called it a **federation with a strong centralising tendency**. **Granville Austin** called it **co-operative federalism**.",
  "The **Sarkaria Commission** (`1983–88`) recommended a permanent **Inter-State Council** and that Article 356 be used only as a **last resort**. It refused to recommend drastic change.",
  "The **Punchhi Commission** (`2007–10`) proposed a **localised emergency** confined to a district or part of a State, and a **fixed five-year tenure** for Governors.",
  "**NITI Aayog** (`2015`) is **neither constitutional nor statutory** — it is an executive body created by a Cabinet resolution, replacing the Planning Commission."
 ],
 blocks:[
  {h:"Federal features against unitary features",
   cols:["Federal","Unitary"],
   rows:[
    ["Two sets of government, Union and State","**A single Constitution** for both, which the States did not frame and cannot amend"],
    ["A written Constitution","**Single citizenship**"],
    ["**Division of powers** in the Seventh Schedule","**Residuary powers with the Union** (Article 248), and Union List predominance (Article 246)"],
    ["**Supremacy of the Constitution**","**An integrated judiciary**, not two parallel court systems"],
    ["A **rigid** Constitution in its federal parts — amendable only with the ratification of half the States","**Flexible in most parts** — Parliament can amend much of it alone"],
    ["An **independent judiciary** with the power of judicial review","**All-India Services** (Article 312) staffing the States"],
    ["**Bicameralism** at the Centre","**Emergency provisions** that turn the system unitary (Articles 352, 356, 360)"],
    ["","**Governors appointed by the Centre**, holding office during the President's pleasure"],
    ["","**Parliament can alter State boundaries and names** by a simple majority, without a State's consent (Article 3)"],
    ["","**Unequal representation in the Rajya Sabha**, by population rather than by parity"],
    ["","**Veto over State Bills** reserved by the Governor for the President's assent (Article 200 and 201)"],
    ["","**A single Election Commission and a single CAG**"]
   ]},

  {h:"The commissions and committees on Centre-State relations",
   cols:["Body","Years","What it recommended"],
   rows:[
    ["**Administrative Reforms Commission**","1966–70","The Setalvad study team on Centre-State relations. Recommended establishing an **Inter-State Council under Article 263**, appointing persons of standing outside politics as Governors, and delegating maximum powers to the States"],
    ["**Rajamannar Committee**","1969","Appointed by the **Tamil Nadu** Government under the DMK. Recommended an Inter-State Council, the **deletion of Articles 356, 357 and 365**, the abolition of the **All-India Services**, and that residuary powers go to the States. The Centre took no action on it"],
    ["**Anandpur Sahib Resolution**","1973","Passed by the **Akali Dal**. Would have confined the Centre to **defence, foreign affairs, communications, currency and railways**, leaving everything else to the States"],
    ["**West Bengal Memorandum**","1977","Proposed replacing the word *Centre* with *Union* throughout, confining the Union to **defence, foreign affairs, currency, communications and economic coordination**, abolishing Articles 356 and 357, and giving the **Rajya Sabha equal powers** with the Lok Sabha"],
    ["**Sarkaria Commission**","**1983–1988**","Chaired by **R. S. Sarkaria**, with B. Sivaraman and S. R. Sen. **247 recommendations.** Held that the existing arrangements were **basically sound** and rejected drastic change. Recommended a **permanent Inter-State Council** (acted on in 1990); that **Article 356 be used sparingly, as a last resort**; that the Governor be an eminent person from outside the State, not active in politics; that the **National Development Council be reconstituted**; that residuary powers of **taxation** stay with Parliament but other residuary matters go to the **Concurrent List**; and that the **All-India Services be strengthened**"],
    ["**Punchhi Commission**","**2007–2010**","Chaired by **Madan Mohan Punchhi**, a former Chief Justice of India. **273 recommendations** in seven volumes. Proposed a **'localised emergency'** confined to a district or part of a State without dissolving the Assembly; a **fixed five-year tenure** for Governors with removal only by a process similar to impeachment; that the Governor's discretion in appointing a Chief Minister follow clear rules; that the Union consult the States before legislating on a **Concurrent** subject; a **superseding Inter-State Council** as the forum for consultation; and the creation of an overriding structure to handle **internal security**"]
   ]},

  {h:"The bodies, and whether they are constitutional",
   cols:["Body","Status","Source"],
   rows:[
    ["**Finance Commission**","**Constitutional**","Article 280"],
    ["**GST Council**","**Constitutional**","Article 279A, inserted by the 101st Amendment"],
    ["**Inter-State Council**","**Constitutional** but **not mandatory**","Article 263 — the President *may* establish it; established 1990"],
    ["**Election Commission**","**Constitutional**","Article 324"],
    ["**Comptroller and Auditor General**","**Constitutional**","Article 148"],
    ["**Union and State Public Service Commissions**","**Constitutional**","Articles 315 to 323"],
    ["**Zonal Councils**","**Statutory**","States Reorganisation Act, 1956"],
    ["**North-Eastern Council**","**Statutory**","North-Eastern Council Act, 1971"],
    ["**Inter-State River Water Disputes Tribunals**","**Statutory**","Inter-State River Water Disputes Act, 1956, under Article 262"],
    ["**National Human Rights Commission**","**Statutory**","Protection of Human Rights Act, 1993"],
    ["**NITI Aayog**","**Neither** — an **executive** body","A **Cabinet resolution of 1 January 2015**, replacing the Planning Commission"],
    ["**Planning Commission** (1950–2014)","**Was neither** — an executive body","A Cabinet resolution of March 1950"],
    ["**National Development Council**","**Neither** — an executive body","A Cabinet resolution of 1952"]
   ]},

  {careful:"**Neither the Planning Commission nor NITI Aayog was ever constitutional or statutory.** Both were created by a Cabinet resolution, which is why the Planning Commission could be abolished overnight in 2014 without any amendment or Act. This is the most common single error on the whole topic, because both bodies behaved as though they had far more authority than their legal basis."},

  {h:"The phrases that get quoted",
   swap:[
    ["Article 1","**Union of States**","Ambedkar: the word *Union* was chosen to show that the federation is **not the result of an agreement** and that **no State has the right to secede** from it"],
    ["Ambedkar's phrase","An **indestructible Union of destructible States**","Contrast the United States: an indestructible union of indestructible states"],
    ["K. C. Wheare","**Quasi-federal**","A unitary state with subsidiary federal features rather than the reverse"],
    ["Ivor Jennings","A **federation with a strong centralising tendency**",""],
    ["Granville Austin","**Co-operative federalism**","'The Indian Constitution is perhaps the first constituent body to embrace from the start what A. H. Birch and others have called co-operative federalism'"],
    ["Paul Appleby","**Extremely federal**","A minority view, and worth remembering because it is the odd one out"],
    ["The Supreme Court","**Federal in structure with unitary features**","*State of West Bengal v. Union of India (1963)* held that the Indian Constitution is not truly federal; *S. R. Bommai (1994)* affirmed federalism as part of the basic structure"]
   ]}
 ]}

]});
