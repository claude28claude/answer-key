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

id:"polity", n:"Polity", tab:"Polity", sub:"The Constitution from Fundamental Rights to Centre-State",
w:"Fundamental Rights, Directive Principles, Fundamental Duties, Parliament, Emergency, key amendments, the President and Governor, constitutional bodies, and Centre-State relations with the Seventh Schedule.",
intro:"The constitution from the citizen outward: the rights guaranteed by Part III, the aspirations in Part IV, the duties in Part IVA; then the organs of government — Parliament and the executive; then the emergency provisions and the amendments that reshaped the document; and finally, how power is divided between Centre and State.",

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
 ]},

/* ===================================================================== 9 */
{id:"fund-rights", n:"Fundamental Rights (Articles 12–35)", hy:1,
 w:"The six Fundamental Rights, the five writs, and the articles that are actually asked.",
 quick:[
  "Part III of the Constitution (Articles `12` to `35`) guarantees **six** Fundamental Rights. Originally there were **seven** — the **Right to Property** (Article `31`) was removed by the **44th Amendment, 1978**, and is now only a legal right under Article `300A`.",
  "Fundamental Rights are **enforceable in court** — Article `32` (Supreme Court) and Article `226` (High Courts). Directive Principles are not.",
  "Article `13` declares any law inconsistent with Fundamental Rights to be **void**. This is the basis of **judicial review** of legislation in India.",
  "Article `17` — abolition of untouchability — is the **only** Fundamental Right that is **absolute**. Every other right has reasonable restrictions.",
  "Article `32` was called by Dr. Ambedkar **'the heart and soul of the Constitution'** — it guarantees the right to move the Supreme Court directly for the enforcement of Fundamental Rights."
 ],
 blocks:[
  {h:"The six Fundamental Rights",
   cols:["Right","Articles","What it covers"],
   rows:[
    ["**Right to Equality**","`14–18`","Equality before law (`14`), no discrimination (`15`), equal opportunity in public employment (`16`), abolition of untouchability (`17`), abolition of titles (`18`)"],
    ["**Right to Freedom**","`19–22`","Six freedoms (`19`), protection against ex-post-facto laws and double jeopardy (`20`), protection of life and personal liberty (`21`), right to education (`21A`), protection against arrest and detention (`22`)"],
    ["**Right against Exploitation**","`23–24`","Prohibition of traffic in human beings and forced labour (`23`), prohibition of child labour in factories, mines and hazardous occupations (`24`)"],
    ["**Right to Freedom of Religion**","`25–28`","Freedom of conscience and free profession, practice and propagation of religion (`25`), freedom to manage religious affairs (`26`), no compulsory religious taxes (`27`), no religious instruction in state-funded schools (`28`)"],
    ["**Cultural and Educational Rights**","`29–30`","Protection of interests of minorities (`29`), right of minorities to establish and administer educational institutions (`30`)"],
    ["**Right to Constitutional Remedies**","`32`","The right to move the Supreme Court for the enforcement of Fundamental Rights. The Supreme Court can issue the **five writs**"]
   ]},

  {careful:"**Article 15 lists exactly FIVE grounds of non-discrimination: religion, race, caste, sex and place of birth.** 'Language' is NOT one of them — it is the single most common wrong option in SSC papers. The Constitution protects linguistic minorities elsewhere (Articles 29–30, 350A, 350B), but language is absent from Article 15's list."},

  {h:"The key articles, one by one",
   cols:["Article","Subject","The point that is asked"],
   rows:[
    ["`14`","**Equality before law** and **equal protection of laws**","Two concepts from two traditions: equality before law from **Dicey** (British — negative, nobody is above the law), equal protection from the **US 14th Amendment** (positive, equals treated equally). Article 14 contains **both**"],
    ["`15`","Prohibition of **discrimination**","Five grounds only: religion, race, caste, sex, place of birth. The State *may* make special provisions for women and children (15(3)), and for socially and educationally backward classes, SCs and STs (15(4) and 15(5))"],
    ["`16`","**Equality of opportunity** in public employment","Does not prevent the State from reserving posts for backward classes (16(4)), or for any class of citizens inadequately represented (16(4A) — added by **77th Amendment**, for SCs/STs in promotion)"],
    ["`17`","**Abolition of untouchability**","The ONLY Fundamental Right that is **absolute** — no exceptions, no reasonable restrictions. Enforcement through the **Protection of Civil Rights Act, 1955**"],
    ["`18`","**Abolition of titles**","No citizen may accept a title from a foreign state. Military and academic distinctions are exempt. The **Bharat Ratna and Padma awards** are NOT titles and do not violate this article (Balaji Raghavan case, 1996)"],
    ["`19`","**Six freedoms**","Speech and expression (a), assembly (b), association (c), movement (d), residence (e), profession/trade (f). Originally **seven** — freedom to acquire property (f) was repealed by the **44th Amendment**. Each has **reasonable restrictions** listed in clauses (2) to (6)"],
    ["`20`","**Protection in respect of conviction**","Three protections: no **ex-post-facto** criminal law (20(1)), no **double jeopardy** (20(2)), no **self-incrimination** (20(3)). Available even during an Emergency"],
    ["`21`","**Protection of life and personal liberty**","The **most expanded** article — the Supreme Court has read into it the rights to livelihood, privacy, clean environment, shelter, medical aid, speedy trial, legal aid, dignity, and education (before 21A)"],
    ["`21A`","**Right to education**","Added by the **86th Amendment, 2002**. Free and compulsory education for children aged `6` to `14`. Implemented by the **Right of Children to Free and Compulsory Education Act, 2009** (RTE Act)"],
    ["`22`","**Protection against arrest and detention**","Two parts: ordinary arrest (right to be informed, right to consult a lawyer, right to be produced before a magistrate within **24 hours**) and **preventive detention** (an advisory board must review within **3 months**)"],
    ["`32`","**Right to Constitutional Remedies**","Dr. Ambedkar: *the heart and soul of the Constitution*. Cannot be suspended except during a **National Emergency** (Art 359). Article `226` gives the **same writ powers to High Courts**, but for all rights, not only Fundamental Rights"]
   ]},

  {h:"The five writs",
   cols:["Writ","Literal meaning","What it does"],
   rows:[
    ["**Habeas Corpus**","*Have the body*","Orders a person who has detained another to **produce the detained person before the court**. Used against unlawful detention. The **most important** writ for personal liberty"],
    ["**Mandamus**","*We command*","Orders a **public authority to perform a duty** it has failed to perform. Cannot be issued against **private persons**, the **President**, the **Governor**, or a **Chief Justice** acting in a judicial capacity"],
    ["**Certiorari**","*To be certified*","Transfers a case from a **lower court** or tribunal to a **higher court** for review — typically when the lower court has exceeded its jurisdiction or violated principles of natural justice"],
    ["**Prohibition**","*To forbid*","Orders a lower court or tribunal to **stop proceedings** that exceed its jurisdiction. Like certiorari but issued **before** the decision, not after"],
    ["**Quo Warranto**","*By what authority*","Challenges a person who holds a **public office** without legal authority. The only writ that can be sought by **any person**, not only the aggrieved party"]
   ]},

  {careful:"**Article 32 is a Fundamental Right itself, and it is the ONLY article whose suspension requires a Presidential order under Article 359.** Article 226 (High Court writs) is NOT a Fundamental Right and continues to operate during an Emergency — this distinction is asked constantly. Also: Mandamus CANNOT be issued against the President or a Governor — the two constitutional heads are protected."},

  {h:"What happens during an Emergency",
   cols:["Type of Emergency","Effect on Fundamental Rights"],
   rows:[
    ["**National Emergency (Art 352)**","Article `19` is **automatically suspended** if the proclamation is on the ground of war or external aggression (not on ground of armed rebellion, after the 44th Amendment). Other FRs (except `20` and `21`) may be suspended by a **Presidential order under Art 359**"],
    ["**President's Rule (Art 356)**","Fundamental Rights are **NOT affected** — they continue in full force"],
    ["**Financial Emergency (Art 360)**","Fundamental Rights are **NOT affected** — but salaries and allowances can be reduced"]
   ]},

  {h:"The Right to Property — how it was removed",
   swap:[
    ["Originally","Article `31` — Right to Property — was a **Fundamental Right** in Part III","It was the most amended article in the Constitution's first three decades"],
    ["Removed by","**44th Amendment, 1978**","Article 31 was repealed and a new Article `300A` was inserted in Part XII"],
    ["Now","Property is a **legal right**, not a Fundamental Right","The State can still acquire property, but the affected person can go to a **High Court** (Art 226), not to the **Supreme Court** under Art 32"],
    ["Why it was removed","To clear the path for **land reforms** and **nationalisation**","The repeated clashes between Parliament and the Supreme Court over property compensation — starting from the **First Amendment** itself — made the change inevitable"]
   ]}

 ]},

/* ===================================================================== 10 */
{id:"dpsp", n:"Directive Principles of State Policy (Articles 36–51)", hy:1,
 w:"The principles the State must strive toward — not enforceable, but fundamental in governance.",
 quick:[
  "DPSPs are in **Part IV** (Articles `36` to `51`). They are **not enforceable** by any court (Article `37`), but are *fundamental in the governance of the country*.",
  "Borrowed from the **Irish Constitution**, which took them from the **Spanish** Constitution.",
  "Originally DPSPs could not override Fundamental Rights. The **42nd Amendment** added Article `31C`, which said DPSPs in Articles 39(b) and (c) prevail over Articles 14 and 19. The **Minerva Mills case (1980)** struck down the broader extension, preserving the balance.",
  "The three-way classification into **Socialist, Gandhian and Liberal-Intellectual** principles is widely used but is **not in the Constitution** — it comes from constitutional commentators.",
  "Several DPSPs have been **implemented through legislation**: Article `40` through the **73rd and 74th Amendments** (Panchayats and Municipalities), Article `45` through the **86th Amendment** (right to education), and Article `39A` through the **Legal Services Authorities Act, 1987**."
 ],
 blocks:[
  {h:"Socialist principles",
   cols:["Article","Directive","The point that is asked"],
   rows:[
    ["`38`","**Social order** for the promotion of welfare","The State shall strive to minimise **inequalities in income, status, facilities and opportunities** — clause (2) was added by the **44th Amendment**"],
    ["`39`","Certain principles of policy","Six sub-clauses: (a) adequate means of livelihood, (b) distribution of material resources for the common good, (c) no concentration of wealth, (d) **equal pay for equal work** for both men and women, (e) health of workers and children, (f) opportunities for children in freedom and dignity"],
    ["`39A`","**Equal justice and free legal aid**","Added by the **42nd Amendment**. Implemented through the **Legal Services Authorities Act, 1987**, and the **NALSA** (National Legal Services Authority)"],
    ["`41`","**Right to work**, education and public assistance","In cases of unemployment, old age, sickness and disablement — a DPSP, not a Fundamental Right"],
    ["`42`","Just and humane **conditions of work** and maternity relief","Basis for the **Maternity Benefit Act**"],
    ["`43`","**Living wage** and decent standard of life for workers","Also covers the promotion of **cottage industries** — which makes this article appear under Gandhian principles too in some classifications"],
    ["`43A`","**Participation of workers** in management of industries","Added by the **42nd Amendment**"]
   ]},

  {h:"Gandhian principles",
   cols:["Article","Directive","The point that is asked"],
   rows:[
    ["`40`","Organisation of **village panchayats**","The State shall take steps to organise them as units of self-government. Implemented by the **73rd Amendment (1992)**, which added Part IXA and the Eleventh Schedule"],
    ["`43`","Promotion of **cottage industries**","The same article that directs a living wage — its cottage-industry clause is treated as Gandhian"],
    ["`46`","Promotion of educational and economic interests of **SCs, STs and other weaker sections**","Protection from social injustice and all forms of exploitation"],
    ["`47`","**Prohibition** of intoxicating drinks and drugs injurious to health","Raising the level of nutrition and the standard of living — a duty, not a ban. Some states have enacted prohibition laws citing this article"],
    ["`48`","Prohibition of slaughter of **cows** and calves and other milch and draught cattle","Organisation of agriculture and animal husbandry on modern and scientific lines"]
   ]},

  {h:"Liberal-intellectual principles",
   cols:["Article","Directive","The point that is asked"],
   rows:[
    ["`44`","**Uniform Civil Code**","The State shall endeavour to secure a UCC throughout India. The most debated DPSP — **never implemented** nationally. **Goa** is the only state that has a uniform civil code (inherited from the Portuguese)"],
    ["`45`","Early childhood care for children below `6` years","**Changed by the 86th Amendment (2002)**: the original article directed free and compulsory education for children under 14. That duty moved to Article `21A` (a Fundamental Right). The current Article 45 covers only **early childhood care for under-6**"],
    ["`48A`","Protection and improvement of **environment** and safeguarding forests and wildlife","Added by the **42nd Amendment**. Read with Article `51A(g)` (the Fundamental Duty to protect the environment)"],
    ["`49`","Protection of **monuments** and places and objects of national importance from spoliation, disfigurement, destruction","Basis for the **Ancient Monuments and Archaeological Sites and Remains Act**"],
    ["`50`","Separation of **judiciary** from the **executive**","In the public services of the State. Not yet fully implemented at the lower-court level in all states"],
    ["`51`","Promotion of **international peace and security**","Maintenance of just and honourable relations between nations, and respect for **international law** and treaty obligations. India's position at the UN and in Non-Alignment is cited under this article"]
   ]},

  {careful:"**Article 45 is a favourite trap because it was rewritten.** Before 2002, it said 'free and compulsory education for all children until they complete the age of fourteen years.' After the **86th Amendment**, that duty became Article `21A` — a justiciable Fundamental Right. The current Article 45 says only 'early childhood care and education for all children until they complete the age of six years.' If a question asks what Article 45 *originally* said, the answer is education for under-14. If it asks what Article 45 says *now*, the answer is care for under-6."},

  {h:"Fundamental Rights vs. Directive Principles — the evolution",
   cols:["Case","Year","What it decided"],
   rows:[
    ["**Champakam Dorairajan**","`1951`","Fundamental Rights **prevail** over DPSPs — the starting position"],
    ["**Golaknath**","`1967`","Parliament **cannot** amend Fundamental Rights at all — even to implement DPSPs"],
    ["**Kesavananda Bharati**","`1973`","Overruled Golaknath: Parliament **can** amend FRs, but cannot destroy the **basic structure** of the Constitution"],
    ["**42nd Amendment**","`1976`","Gave DPSPs in Articles 39(b) and (c) **primacy** over Articles 14 and 19, and tried to extend this to **all** DPSPs"],
    ["**Minerva Mills**","`1980`","Struck down the blanket extension: the **harmony and balance** between FRs and DPSPs is itself part of the basic structure. DPSPs in 39(b) and (c) still prevail over Articles 14 and 19, but no wider"]
   ]},

  {h:"DPSPs that have been implemented",
   swap:[
    ["Art `39A` — Free legal aid","**Legal Services Authorities Act, 1987** and **NALSA**",""],
    ["Art `40` — Panchayats","**73rd Amendment (1992)** — Part IX, Eleventh Schedule",""],
    ["Art `41` — Right to work","**MGNREGA, 2005** — 100 days of guaranteed employment",""],
    ["Art `43` — Cottage industries","**Khadi and Village Industries Commission** set up under the KVIC Act, 1956",""],
    ["Art `44` — Uniform Civil Code","**Not implemented nationally** — Goa is the only state with one (inherited, not enacted under Art 44)",""],
    ["Art `45` — Education (original)","**86th Amendment** moved it to Article `21A` as a Fundamental Right; **RTE Act, 2009**",""],
    ["Art `47` — Prohibition","Several states enacted prohibition laws: **Gujarat (since 1960)**, Bihar (since 2016), Nagaland, Mizoram",""],
    ["Art `48` — Cow protection","Most states have **anti-cow-slaughter laws**; no central legislation",""],
    ["Art `48A` — Environment","**Environment Protection Act, 1986**, Wildlife Protection Act, 1972, Forest Conservation Act, 1980",""],
    ["Art `50` — Separation of judiciary","**Criminal Procedure Code, 1973** (Sections 3 and 4) separated the judiciary from the executive at the magistrate level, but not yet fully at all levels",""]
   ]},

  {careful:"**The Gandhian classification of Article 43 (cottage industries) and the Socialist classification of Article 43 (living wage) come from the SAME article.** Article 43 directs both a living wage AND the promotion of cottage industries. Different commentators place it under different headings depending on which clause they emphasise. If an exam names Article 43 and asks which category, accept either — but if it says 'cottage industries', it is Gandhian."}

 ]},

/* ===================================================================== 11 */
{id:"fund-duties", n:"Fundamental Duties (Article 51A)", hy:1,
 w:"The eleven duties of every citizen — added in 1976, expanded in 2002, and asked as a list.",
 quick:[
  "Fundamental Duties are in **Part IVA**, **Article `51A`**. Part IVA was added by the **42nd Amendment (1976)** on the recommendation of the **Swaran Singh Committee**.",
  "Originally **ten** duties. The **11th** — duty of parents/guardians to provide opportunities for education to children aged `6` to `14` — was added by the **86th Amendment (2002)**, the same amendment that made education a Fundamental Right (Art `21A`).",
  "Borrowed from the **USSR Constitution** (now defunct). India is one of the few democracies with a list of duties in the constitution.",
  "Like DPSPs, Fundamental Duties are **not directly enforceable** — there is no legal sanction for their violation. But the courts can take them into account when examining the constitutional validity of a law.",
  "They are applicable to **citizens only**, not to foreigners. Some Fundamental Rights (Articles 14, 20, 21, 25) apply to **all persons** including foreigners — but duties are for citizens alone."
 ],
 blocks:[
  {h:"The eleven Fundamental Duties",
   cols:["Clause","Duty","The keyword that identifies it"],
   rows:[
    ["**(a)**","To abide by the **Constitution** and respect its ideals and institutions, the **National Flag** and the **National Anthem**","Constitution, Flag, Anthem"],
    ["**(b)**","To cherish and follow the **noble ideals** that inspired the **national struggle for freedom**","Freedom struggle"],
    ["**(c)**","To uphold and protect the **sovereignty, unity and integrity** of India","Sovereignty and integrity"],
    ["**(d)**","To **defend the country** and render national service when called upon","Defence"],
    ["**(e)**","To promote **harmony and the spirit of common brotherhood** amongst all the people of India, transcending religious, linguistic and regional or sectional diversities, and to **renounce practices derogatory to the dignity of women**","Brotherhood, dignity of women"],
    ["**(f)**","To value and preserve the rich heritage of the **composite culture**","Composite culture"],
    ["**(g)**","To protect and improve the **natural environment** including forests, lakes, rivers and wildlife, and to have **compassion for living creatures**","Environment, wildlife"],
    ["**(h)**","To develop **scientific temper**, humanism and the spirit of inquiry and reform","Scientific temper"],
    ["**(i)**","To safeguard **public property** and to abjure violence","Public property, non-violence"],
    ["**(j)**","To strive towards **excellence** in all spheres of individual and collective activity","Excellence"],
    ["**(k)**","To provide opportunities for **education** to children between `6` and `14` years — by parent or guardian","Education of children — **added 2002**"]
   ]},

  {careful:"**The 11th duty (clause k) and Article 21A both came from the same amendment — the 86th (2002).** The amendment did three things simultaneously: (1) inserted Article `21A` making education a Fundamental Right, (2) changed Article `45` from education-for-under-14 to early-childhood-care-for-under-6, and (3) added clause (k) to Article 51A as a Fundamental Duty. If a question asks 'which amendment added the 11th Fundamental Duty?', the answer is the **86th**, not the 42nd."},

  {h:"Fundamental Duties vs. Fundamental Rights and DPSPs",
   cols:["","Fundamental Rights (Part III)","DPSPs (Part IV)","Fundamental Duties (Part IVA)"],
   rows:[
    ["**Enforceable?**","**Yes** — through Articles 32 and 226","**No** — Article 37","**No** — no provision for enforcement"],
    ["**Apply to**","Some to all persons, some to citizens only","The **State** — directions to the government","**Citizens only**"],
    ["**Source**","**US Bill of Rights** (mostly)","**Irish Constitution**","**USSR Constitution**"],
    ["**Added by**","Original Constitution, 1950","Original Constitution, 1950","**42nd Amendment, 1976**"],
    ["**Number**","Six categories (originally seven)","Articles 36–51 (about 20 principles)","**11** (originally 10)"],
    ["**During Emergency**","Article 19 auto-suspended; others may be suspended under Art 359 (except 20 and 21)","**Not affected**","**Not affected**"]
   ]},

  {h:"How the courts have used Fundamental Duties",
   swap:[
    ["AIIMS Students Union case (2001)","The Supreme Court held that Fundamental Duties can be used to **determine the reasonableness of restrictions** on Fundamental Rights under Article 19","A law enacted to give effect to a duty is more likely to survive a challenge"],
    ["Ranganath Misra Commission (2007)","Recommended that Fundamental Duties be made **enforceable by suitable legislation**","Not implemented — they remain non-justiciable"],
    ["Verma Committee (1999)","Set up to examine how to **teach** Fundamental Duties — recommended including them in the school curriculum","The NCERT textbooks now include them"],
    ["Prevention of Insults to National Honour Act, 1971","Gives legal force to duty **(a)** — disrespecting the flag or anthem is punishable","The only duty that has a dedicated penal statute"]
   ]},

  {h:"The Swaran Singh Committee — what it recommended vs. what was adopted",
   list:[
    "The **Swaran Singh Committee (1976)** recommended the inclusion of Fundamental Duties. Parliament accepted the list but **rejected** two recommendations:",
    "**Rejected:** the Committee wanted a duty to **pay taxes** — Parliament did not include it.",
    "**Rejected:** the Committee wanted **Parliament to impose penalties** for non-compliance with duties — Parliament did not include any penalty provision.",
    "The Committee recommended **eight** duties. Parliament added **two more** (scientific temper and excellence), making **ten** in the 42nd Amendment. The **eleventh** came later, with the 86th Amendment in 2002."
   ]},

  {careful:"**There is NO duty to pay taxes in Article 51A.** The Swaran Singh Committee recommended it, but Parliament rejected it. This is a standard SSC trap — if a question asks which of these is NOT a Fundamental Duty, 'duty to pay taxes' is almost always the correct answer."}

 ]},

/* ===================================================================== 12 */
{id:"parliament", n:"Parliament — Lok Sabha and Rajya Sabha", hy:1,
 w:"The composition, sessions and law-making powers of both Houses, and the differences between them.",
 quick:[
  "**Parliament** = **President** + **Rajya Sabha** (Council of States) + **Lok Sabha** (House of the People) — **Article 79**.",
  "**Lok Sabha**: maximum `552` members (`530` from states + `20` from UTs + `2` Anglo-Indians — but Anglo-Indian nomination removed by the **104th Amendment, 2020**). Term **5 years**. Minimum age **25**. Presided over by the **Speaker**.",
  "**Rajya Sabha**: maximum `250` members (`238` elected by state and UT legislatures + `12` nominated by the President). It is **permanent** — not subject to dissolution. **One-third** of members retire every `2` years. Minimum age **30**. Presided over by the **Chairman** (the **Vice President**).",
  "A **Money Bill** can only be introduced in **Lok Sabha** (**Article 110**). The Rajya Sabha gets **14 days** and may only *recommend* — it cannot amend or reject. The **Speaker's certification** that a bill is a money bill is **final** and cannot be questioned.",
  "**Quorum** is **one-tenth** of total membership (**Article 100**). The gap between two sessions cannot exceed **6 months** (**Article 85**)."
 ],
 blocks:[
  {h:"Lok Sabha against Rajya Sabha",
   cols:["","Lok Sabha","Rajya Sabha"],
   rows:[
    ["Maximum strength","`552` (now effectively `550` after 104th Amendment)","`250`"],
    ["How chosen","**Directly elected** by the people","**Indirectly elected** by state legislatures (single transferable vote) + 12 nominated"],
    ["Term","**5 years** (can be dissolved earlier)","**Permanent**; members serve 6 years, 1/3 retire every 2 years"],
    ["Minimum age","`25` years","`30` years"],
    ["Presiding officer","**Speaker** (elected from among members)","**Chairman** (the Vice President, who is NOT a member of the House)"],
    ["Money Bills","**Introduced here only**; Lok Sabha has the final word","Can only **recommend** within 14 days; has no power to amend or reject"],
    ["No-confidence motion","**Only in Lok Sabha** — Art 75. The government must have LS confidence","Rajya Sabha cannot move a no-confidence motion"],
    ["Joint sitting","Lok Sabha **dominates** because of its larger numbers","Rajya Sabha participates but is outnumbered"]
   ]},

  {careful:"**Money Bills cannot go to a joint sitting.** Article 108 provides for joint sitting only for **ordinary bills**, and only when there is a disagreement between the two Houses. A Money Bill's deadlock is resolved by the 14-day rule, not by a joint sitting. Questions routinely ask whether a joint sitting can be called for a Money Bill — the answer is **no**."},

  {h:"The three kinds of bill",
   cols:["Type","Where introduced","If the two Houses disagree"],
   rows:[
    ["**Ordinary Bill**","Either House","**Joint sitting** under Article 108, presided by the **Speaker**. Has happened only **3 times**: Dowry Prohibition Act (1961), Banking Service Commission Repeal Act (1978), POTA (2002)"],
    ["**Money Bill** (Art 110)","**Lok Sabha only**","Rajya Sabha has **14 days** to recommend. If it does not act, or LS rejects its recommendations, the bill is deemed passed. **No joint sitting.**"],
    ["**Constitutional Amendment Bill** (Art 368)","Either House","Must be passed by **each House separately** by **special majority**. **No joint sitting.** Some amendments also need ratification by **half the state legislatures**"],
    ["**Finance Bill (Type I)**","Lok Sabha only","Treated as a Money Bill"],
    ["**Finance Bill (Type II)**","Lok Sabha only","Treated as an Ordinary Bill — **joint sitting is possible**"]
   ]},

  {h:"The three sessions",
   cols:["Session","Months","What happens"],
   rows:[
    ["**Budget session**","February to May","The **Union Budget** is presented (since 2017, on `1 February`). The longest session"],
    ["**Monsoon session**","July to August/September","Legislative business, private members' bills"],
    ["**Winter session**","November to December","The shortest of the three"]
   ]},

  {h:"Key numbers and articles",
   swap:[
    ["Quorum","**One-tenth** of total membership (Art 100)","If there is no quorum, the presiding officer adjourns or suspends the sitting"],
    ["Prorogation vs adjournment","**Adjournment** ends a sitting; **prorogation** ends a session","Bills do not lapse on prorogation — they lapse only on **dissolution** of Lok Sabha"],
    ["Anti-defection","**Tenth Schedule**, inserted by the **52nd Amendment (1985)**","Decision by the **Speaker/Chairman**, now subject to judicial review (Kihoto Hollohan case, 1992)"],
    ["Question Hour","First hour of every sitting","**Starred** questions get oral answers; **unstarred** get written answers; **short-notice** questions are for urgent matters"],
    ["Zero Hour","Starts at **noon**, after Question Hour","Not mentioned in the rules — it is a **convention**, not a procedure"],
    ["Article 105","**Parliamentary privileges** — freedom of speech in Parliament","No member is liable in court for anything said or any vote given in Parliament"]
   ]},

  {careful:"**The Vice President is the Chairman of Rajya Sabha but is NOT a member of Rajya Sabha.** The Vice President can vote only in the event of a tie — a **casting vote** (Art 89). The Speaker, by contrast, IS a member of Lok Sabha, votes only in a tie, and ordinarily does not vote to preserve the convention of impartiality. The question usually asks whether the Chairman is a member — and the answer is **no**."}

 ]},

/* ===================================================================== 13 */
{id:"emergency", n:"Emergency Provisions (Articles 352, 356, 360)", hy:1,
 w:"The three types of emergency, when each has been used, and what happens to Fundamental Rights during one.",
 quick:[
  "Three types: **National Emergency** (Art `352`), **President's Rule** (Art `356`) and **Financial Emergency** (Art `360`).",
  "National Emergency has been proclaimed **3 times**: `1962` (Chinese aggression), `1971` (Pakistan war) and `1975` (internal emergency). The 1975 proclamation was on grounds of *internal disturbance*, a phrase the **44th Amendment** changed to **armed rebellion**.",
  "During a National Emergency, **Article 19** is automatically suspended. But **Articles 20 and 21 can never be suspended** — even during emergency (**44th Amendment**).",
  "**Financial Emergency has never been proclaimed.** Not once in India's history.",
  "The **44th Amendment (1978)** imposed safeguards on all three emergencies: written cabinet advice for Art 352, judicial review of Art 356 (strengthened later by the **S.R. Bommai** case, 1994), and the protection of Articles 20 and 21."
 ],
 blocks:[
  {h:"The three emergencies compared",
   cols:["","National Emergency (Art 352)","President's Rule (Art 356)","Financial Emergency (Art 360)"],
   rows:[
    ["Ground","War, external aggression or **armed rebellion**","Failure of constitutional machinery in a **state**","Threat to **financial stability or credit** of India"],
    ["Proclaimed by","**President**, on written advice of the **Cabinet** (44th Amendment)","**President**, on Governor's report or otherwise","**President**"],
    ["Parliamentary approval","Within **1 month**, by **special majority**","Within **2 months**, by **simple majority**","Within **2 months**, by **simple majority**"],
    ["Maximum duration","**Indefinite**, with 6-month extensions (each by special majority)","**3 years**, with 6-month extensions","**Indefinite**, until revoked"],
    ["Times used","**3** — 1962, 1971, 1975","**Over 100 times**","**Never**"],
    ["Revocation","President must revoke if Lok Sabha passes a resolution (simple majority). The 44th Amendment added this check","Automatically revoked if not approved in time","President may revoke at any time"]
   ]},

  {careful:"**Articles 20 and 21 can NEVER be suspended**, not even during a National Emergency. Before the 44th Amendment, ALL Fundamental Rights could be suspended. The 44th Amendment protected Art 20 (protection against ex-post-facto laws and double jeopardy) and Art 21 (right to life and personal liberty) absolutely. This is one of the most-asked SSC questions on emergency."},

  {h:"What happens to Fundamental Rights during National Emergency",
   cols:["Article","Position during National Emergency"],
   rows:[
    ["**Art 19** (six freedoms)","**Automatically suspended** — no separate order needed (Art 358)"],
    ["**Art 20** (ex-post-facto laws, double jeopardy, self-incrimination)","**Cannot be suspended** — absolutely protected by the 44th Amendment"],
    ["**Art 21** (right to life and personal liberty)","**Cannot be suspended** — absolutely protected by the 44th Amendment"],
    ["**Other FRs (Art 14, 15, 16, etc.)**","Can be suspended by a **separate Presidential Order** under Art 359 — but only for the period of the emergency"],
    ["**Art 32** (right to constitutional remedies)","Can be suspended by a Presidential Order under Art 359, except for enforcement of Art 20 and 21"]
   ]},

  {h:"President's Rule — the key cases",
   cols:["Case / Event","What happened"],
   rows:[
    ["**First imposition**","Punjab, `1951` — the first use of Art 356"],
    ["**Kerala, 1959**","The first state where an elected government was dismissed under Art 356 — the **Namboodiripad** government"],
    ["**S.R. Bommai v. Union of India (1994)**","The **landmark case**. SC laid down guidelines: (a) the President's satisfaction is **justiciable**, (b) the court can restore the dismissed government, (c) the state assembly should not be dissolved until Parliament approves, (d) **floor test** is the proper way to determine majority, not the Governor's personal assessment"],
    ["**Most imposed in**","The 1970s and 1980s saw the most frequent use. It was used **over 100 times** before the Bommai judgment restricted it"],
    ["**Uttarakhand, 2016**","SC quashed the imposition as unconstitutional and restored the elected government — the Bommai principles applied"]
   ]},

  {h:"The three proclamations of National Emergency",
   swap:[
    ["1962","Chinese aggression (**external emergency**)","In force until `1968` — continued 6 years after the war ended"],
    ["1971","Pakistan war (**external emergency**)","The 1962 proclamation was still in force; the 1971 one was **additional**. Both revoked together in `1977`"],
    ["1975","**Internal disturbance** (**internal emergency**)","Proclaimed on `25 June 1975` by President Fakhruddin Ali Ahmed on PM Indira Gandhi's advice. Elections postponed, press censored, opposition leaders arrested. Revoked in `1977` when elections were called"],
    ["The aftermath","The **44th Amendment (1978)** tightened safeguards","Changed 'internal disturbance' to **armed rebellion**, required **written cabinet advice**, gave Lok Sabha the power to force revocation, protected Art 20 and 21"]
   ]},

  {careful:"**Financial Emergency has never been declared — not once.** It exists only on paper (Art 360). During it, the President can direct states to reduce salaries and can reduce salaries of all government servants including **judges of the Supreme Court and High Courts**. The fact that it was never used, and the fact that judges' salaries can be reduced under it, are both high-frequency questions."}

 ]},

/* ===================================================================== 14 */
{id:"amendments", n:"Constitutional Amendments — the ones that are asked", hy:1,
 w:"The amendment procedure and the fifteen amendments SSC actually asks about, by number and year.",
 quick:[
  "**Article 368** gives the procedure. A Constitutional Amendment Bill can be introduced in **either House** (no prior Presidential recommendation needed) but requires a **special majority**: majority of total membership of the House **AND** two-thirds of members present and voting.",
  "Some amendments also require **ratification by the legislatures of half the states** — anything that touches the federal structure: election of President, executive/judicial power of Centre and states, representation of states in Parliament, the Seventh Schedule, Article 368 itself.",
  "No **joint sitting** for a Constitutional Amendment Bill. Each House must pass it separately.",
  "The **42nd Amendment (1976)** is the largest single amendment — called the *Mini Constitution*. The **44th Amendment (1978)** reversed most of it.",
  "The latest major amendment the SSC asks about is the **104th Amendment (2020)** — extending SC/ST reservation in legislatures to `2030` and ending Anglo-Indian nomination to Lok Sabha."
 ],
 blocks:[
  {h:"The amendment procedure — three routes",
   cols:["Route","Majority required","Used for"],
   rows:[
    ["**Simple majority**","Ordinary majority of members present and voting","Amendments under **Articles 2, 3, 4** (admission/formation of new states), **Article 169** (abolition of Legislative Councils), and certain other provisions that are explicitly exempted from Art 368"],
    ["**Special majority**","Majority of **total membership** of the House + **two-thirds** of members present and voting","Most amendments — Fundamental Rights, DPSPs, all other provisions not in the third category"],
    ["**Special majority + ratification by half the states**","Same as above + approval by **at least half** the state legislatures by simple majority","Federal provisions: election of President (Art 54, 55), extent of executive/judicial power, representation of states in Parliament, Seventh Schedule, Article 368 itself"]
   ]},

  {h:"The amendments SSC asks about",
   cols:["Amendment (Year)","What it did","The one fact that is asked"],
   rows:[
    ["**1st (1951)**","Added the **Ninth Schedule** (laws placed here are shielded from judicial review). Added reasonable restrictions to Art 19(1)(a) — freedom of speech","**Ninth Schedule** — and that laws in it *were* immune from review until the **I.R. Coelho case (2007)** said the basic structure test still applies"],
    ["**7th (1956)**","Reorganised states on **linguistic basis**. Abolished the old A/B/C/D state categories and created **14 states and 6 UTs**","States reorganised on **language**, and the old four-tier classification was dropped"],
    ["**24th (1971)**","Parliament can amend **any part** of the Constitution including Fundamental Rights. The President **must** give assent to amendment bills","A response to the **Golaknath case (1967)**, which had said Parliament cannot amend FRs"],
    ["**42nd (1976)**","The **'Mini Constitution'**: added **Fundamental Duties** (Part IVA), amended the **Preamble** (added *Socialist, Secular, Integrity*), moved 5 subjects from State to Concurrent List, curtailed judicial review, extended terms of LS and state assemblies to 6 years","It added **Socialist, Secular** and **Integrity** to the Preamble, and added **Fundamental Duties**"],
    ["**44th (1978)**","**Reversed** the 42nd: restored LS/assembly term to 5 years, restored judicial review, changed 'internal disturbance' to **armed rebellion** in Art 352, removed **Right to Property** from FRs (now Art 300A — a legal right, not fundamental)","Right to Property **removed** from FRs. Art 20 and 21 made **non-suspendable**"],
    ["**52nd (1985)**","Added the **Tenth Schedule** — the **anti-defection law**","The **Tenth Schedule**. Two-thirds is the magic number for a valid split (now merger — 'split' was deleted by the 91st)"],
    ["**61st (1989)**","Reduced **voting age** from `21` to **`18`** years","Article **326** was amended"],
    ["**73rd (1992)**","Gave **constitutional status to Panchayati Raj** — Part IX, **Eleventh Schedule** (29 subjects). Three-tier structure, reservation for SC/ST/women, five-year term, State Election Commission, State Finance Commission","**Eleventh Schedule** — and the three-tier system (village / intermediate / district)"],
    ["**74th (1992)**","Gave constitutional status to **Municipalities** — Part IXA, **Twelfth Schedule** (18 subjects)","**Twelfth Schedule** — the 18 subjects of municipal governance"],
    ["**86th (2002)**","Made education a **Fundamental Right** — **Art 21A** (free and compulsory education for ages 6–14). Changed DPSP **Art 45** (now about early childhood care for under-6). Added the **11th Fundamental Duty** (parents to provide education to children 6–14)","Three changes in one amendment — Art 21A, Art 45 rewritten, 11th duty added"],
    ["**91st (2003)**","Capped the size of the **Council of Ministers** at **15%** of the total strength of the lower house (Lok Sabha or state assembly). Deleted the provision for 'split' in the Tenth Schedule — now only **merger** (with two-thirds) is recognised","**15% cap** on the Council of Ministers"],
    ["**101st (2016)**","Introduced **GST**. Inserted **Art 246A** (giving both Parliament and state legislatures the power to make laws on GST), **Art 269A** (inter-state GST), **Art 279A** (GST Council). Abolished CST, entry tax and several local levies","**GST Council** (Art 279A) — and that it subsumed central excise, service tax, VAT and entry tax"],
    ["**103rd (2019)**","Provided **10% reservation for EWS** (Economically Weaker Sections) in education and public employment — added Art 15(6) and Art 16(6)","**EWS** reservation — above and beyond the existing SC/ST/OBC quotas"],
    ["**104th (2020)**","Extended **reservation for SC/ST** in Lok Sabha and state assemblies for another **10 years** (to `2030`). **Removed** the provision for nomination of **Anglo-Indian** members to Lok Sabha and state assemblies","Anglo-Indian nomination **ended**; SC/ST reservation extended to **2030**"]
   ]},

  {careful:"**The 42nd and 44th are a matched pair — nearly every change the 42nd made, the 44th reversed.** Questions swap them: they will say the 42nd removed Right to Property (it was the 44th), or that the 44th added Fundamental Duties (it was the 42nd), or that the 44th amended the Preamble (it was the 42nd). If an amendment question feels slightly wrong, check whether the number should be the other one of this pair."},

  {h:"The Schedules and which amendment created them",
   cols:["Schedule","Subject","Added by"],
   rows:[
    ["**First Schedule**","States and UTs, their territories","**Original** Constitution"],
    ["**Eighth Schedule**","Languages recognised — originally 14, now **22**","**Original**; languages added by 21st (Sindhi), 71st (Konkani, Manipuri, Nepali), 92nd (Bodo, Dogri, Maithili, Santhali)"],
    ["**Ninth Schedule**","Laws shielded from judicial review","**1st Amendment (1951)**"],
    ["**Tenth Schedule**","Anti-defection law","**52nd Amendment (1985)**"],
    ["**Eleventh Schedule**","29 subjects for Panchayats","**73rd Amendment (1992)**"],
    ["**Twelfth Schedule**","18 subjects for Municipalities","**74th Amendment (1992)**"]
   ]},

  {h:"The landmark cases behind the amendments",
   swap:[
    ["Shankari Prasad (1951)","Parliament **can** amend FRs — the word 'law' in Art 13 does not include a constitutional amendment","Upheld the 1st Amendment"],
    ["Golaknath (1967)","Parliament **cannot** amend FRs — overruled Shankari Prasad","Led to the **24th Amendment** to overturn this ruling"],
    ["Kesavananda Bharati (1973)","Parliament can amend any part of the Constitution, **but cannot destroy its basic structure**","The **basic structure doctrine** — the most important constitutional case. Decided 7–6"],
    ["Minerva Mills (1980)","Reaffirmed basic structure. Struck down parts of the 42nd Amendment that tried to bar judicial review of amendments","The balance between FRs and DPSPs is itself part of the basic structure"],
    ["I.R. Coelho (2007)","Laws in the Ninth Schedule are **not immune** from review if they violate the basic structure","Put a limit on the Ninth Schedule's protection"]
   ]}

 ]},

/* ===================================================================== 15 */
{id:"president-governor", n:"The President and the Governor", hy:1,
 w:"Election, powers, ordinances, and the differences between the two offices.",
 quick:[
  "The President is elected **indirectly** by an **electoral college** of the **elected members** of both Houses of Parliament and the elected members of the State Legislative Assemblies (`Article 54`). Nominated members and MLCs do NOT vote.",
  "Qualifications: citizen of India, completed `35` years, qualified to be a member of the Lok Sabha (`Article 58`). Term: `5` years, no limit on re-election.",
  "The **Governor** is **appointed** by the President (`Article 155`), holds office at the **pleasure of the President** (`Article 156`), and is NOT elected.",
  "The President can return a bill (not a Money Bill) for reconsideration (`Article 111`). If Parliament passes it again, the President **must** give assent. The Governor can additionally **reserve** a bill for the President's consideration (`Article 200`) — a power the President does not have.",
  "**Ordinance power**: the President under `Article 123`, the Governor under `Article 213`. An ordinance must be laid before Parliament/Legislature within **six weeks** of reassembly, or it ceases to operate."
 ],
 blocks:[
  {h:"President — election and the electoral college",
   cols:["Detail","What Article 54 says"],
   rows:[
    ["**Who votes**","Elected members of **both Houses of Parliament** (Lok Sabha + Rajya Sabha) AND elected members of the **State Legislative Assemblies**. Since 70th Amendment (1992), also Delhi and Puducherry assemblies"],
    ["**Who does NOT vote**","**Nominated** members of either House, **nominated** MLAs, and **MLCs** — Members of Legislative Councils do not vote at all"],
    ["**Value of an MLA's vote**","State population ÷ (total elected MLAs × 1000). Varies from state to state — UP's MLA has the highest vote value"],
    ["**Value of an MP's vote**","Total value of all MLAs' votes ÷ total elected MPs. Same for every MP"],
    ["**How it works**","Single transferable vote, proportional representation, **secret ballot**"],
    ["**Disputes**","Decided by the **Supreme Court** (`Article 71`). The election of a President cannot be challenged on the ground of a vacancy in the electoral college"]
   ]},

  {careful:"**The President does NOT vote in the presidential election.** The President is part of Parliament (`Article 79`) but is not an elected member of either House. Nor do nominated members of Rajya Sabha, nominated MLAs, or any MLC (whether elected or nominated) vote. The electoral college is strictly **elected MPs + elected MLAs**. This is the single most-asked trap on this topic."},

  {h:"President vs Governor — a comparison",
   cols:["","President","Governor"],
   rows:[
    ["**How chosen**","**Elected** indirectly by electoral college","**Appointed** by the President (`Article 155`)"],
    ["**Term**","`5` years, removable only by **impeachment** (`Article 61`)","`5` years in theory, but holds office at **pleasure of President** — can be removed at will (`Article 156`)"],
    ["**Minimum age**","`35` years","`35` years"],
    ["**Qualifications**","Citizen, 35, qualified for Lok Sabha (`Article 58`)","Citizen, 35, not holding office of profit (`Article 157–158`)"],
    ["**Oath**","Administered by **Chief Justice of India** (`Article 60`)","Administered by the **High Court Chief Justice** (`Article 159`)"],
    ["**Impeachment**","By Parliament: `Article 61`. 14 days' notice, resolution by **2/3 majority** in each House","**No impeachment process**. Removed by the President; can be removed by the Supreme Court on proven grounds (Rameshwar Prasad case)"],
    ["**Ordinance power**","`Article 123` — when **Parliament** is not in session","`Article 213` — when **State Legislature** is not in session"],
    ["**Pardoning power**","`Article 72` — can pardon **death sentences**, court-martial sentences","`Article 161` — can pardon offences under State law, but **cannot** pardon death sentences or court-martial sentences"],
    ["**Assent to bills**","Can give assent, withhold, or return for reconsideration (`Article 111`). If repassed, **must** assent","Can give assent, withhold, return for reconsideration, or **reserve for President** (`Article 200`). If repassed, **must** assent — but reservation overrides this"],
    ["**Discretionary power**","Almost none; acts on **aid and advice** of the Council of Ministers (`Article 74`)","**Several**: appointing CM when no clear majority, dismissing a government, reserving bills for President, reporting failure of constitutional machinery"]
   ]},

  {careful:"**The Governor can pardon but CANNOT commute a death sentence.** Under `Article 161`, the Governor can grant pardons, reprieves, respites and remissions for offences against **State laws only**. But the power to pardon a **death sentence** rests solely with the **President** under `Article 72`. A common SSC question mixes up these two pardoning powers."},

  {h:"The President's legislative powers",
   cols:["Power","Article","Key detail"],
   rows:[
    ["**Summoning and proroguing**","`Article 85`","Summons each House, prorogues either House, **dissolves Lok Sabha** (Rajya Sabha is not subject to dissolution)"],
    ["**First address**","`Article 87`","Addresses both Houses at the start of the **first session each year** and the first session after each general election"],
    ["**Nomination to Rajya Sabha**","`Article 80(1)(a)`","Nominates **12 members** with special knowledge in literature, science, art and social service"],
    ["**Nomination to Lok Sabha**","formerly `Article 331`","Could nominate **2 Anglo-Indians** — this was **removed** by the **104th Amendment (2020)**"],
    ["**Assent to bills**","`Article 111`","Three options: assent, withhold, or return for reconsideration. If repassed without amendment, **must** assent. No time limit on withholding (the **pocket veto**)"],
    ["**Ordinances**","`Article 123`","Has the same force as an Act of Parliament. Must be laid before Parliament within **6 weeks** of reassembly"]
   ]},

  {h:"Key articles at a glance",
   swap:[
    ["`Article 52`","There shall be a President of India",""],
    ["`Article 53`","Executive power vested in the President, exercised through officers subordinate to him",""],
    ["`Article 54`","Election of the President — the electoral college","Elected members of Parliament + State Legislative Assemblies"],
    ["`Article 61`","Impeachment of the President","2/3 majority in each House; no equivalent for Governor"],
    ["`Article 72`","President's pardoning power","Can pardon death sentences; Governor under Art 161 **cannot**"],
    ["`Article 74`","Council of Ministers to aid and advise the President","42nd Amendment made advice binding; 44th allowed President to ask Cabinet to reconsider once"],
    ["`Article 111`","Assent to bills","Three options; if repassed, must assent"],
    ["`Article 123`","President's ordinance power","When Parliament not in session; lapses 6 weeks after reassembly"],
    ["`Article 155`","Appointment of Governor","By the **President**"],
    ["`Article 156`","Term of Governor","At **pleasure of President**"],
    ["`Article 200`","Governor's assent to bills","Four options — the extra one is **reserve for President**"],
    ["`Article 213`","Governor's ordinance power","Like Art 123, but for State Legislature"]
   ]}

 ]},

/* ===================================================================== 16 */
{id:"const-bodies", n:"Constitutional and Statutory Bodies", hy:1,
 w:"The bodies created by the Constitution itself, the key statutory ones, and how to tell them apart.",
 quick:[
  "A **constitutional body** is established by the Constitution and can be altered only by constitutional amendment. A **statutory body** is created by an Act of Parliament and can be abolished or changed by another Act.",
  "The **Election Commission** (`Article 324`), **CAG** (`Article 148`), **UPSC** (`Article 315`), **Finance Commission** (`Article 280`), and the commissions for **SCs** (`Article 338`) and **STs** (`Article 338A`) are constitutional bodies.",
  "The **NHRC**, **CIC (Central Information Commission)**, **NCBC**, **Lokpal** and **NITI Aayog** are **statutory or executive** bodies — they are NOT in the Constitution.",
  "The **Attorney General** (`Article 76`) is a constitutional office — appointed by the President, qualified to be a Supreme Court judge. Can participate in Parliament proceedings but **cannot vote**.",
  "The **CEC (Chief Election Commissioner)** can be removed only by the same process as a Supreme Court judge — **impeachment by Parliament**. Other Election Commissioners can be removed by the President on the CEC's recommendation."
 ],
 blocks:[
  {h:"The constitutional bodies",
   cols:["Body","Article","Key facts"],
   rows:[
    ["**Election Commission of India**","`324`","CEC + such other ECs as President may fix (currently **3-member** since 1993). CEC can be removed only by **impeachment** (same process as SC judge). Other ECs can be removed by President on CEC's recommendation. Conducts elections to Parliament, State Legislatures, President and Vice President"],
    ["**Comptroller and Auditor General (CAG)**","`148–151`","Appointed by the President. Removed only by **impeachment**. Audits all expenditure of the Union and States. Reports to the **President** (Union) or **Governor** (State), who lays it before Parliament/Legislature. Called the **guardian of the public purse**. Dr B. R. Ambedkar called the CAG the most important officer under the Constitution"],
    ["**Union Public Service Commission (UPSC)**","`315–323`","Chairman and members appointed by the **President**. Chairman on retirement is **not eligible** for any further government employment (members may become Chairman). Conducts the **Civil Services Exam** and advises on disciplinary matters. The advice is **not binding** on the government, but any deviation must be reported to Parliament"],
    ["**State Public Service Commission (SPSC)**","`315–323`","Chairman and members appointed by the **Governor**. Chairman on retirement may be appointed Chairman or member of **UPSC** or Chairman of another SPSC — but not any other government post"],
    ["**Finance Commission**","`280`","Constituted by the President **every 5 years**. Chairman must be a person with experience in public affairs. Recommends the **distribution of net proceeds of taxes** between Centre and States, and principles governing **grants-in-aid**. Recommendations are **advisory**, not binding"],
    ["**National Commission for SCs**","`338`","Constitutional since the original Constitution (renamed by 65th Amendment 1990). Investigates matters relating to safeguards for SCs. Reports to the **President** annually"],
    ["**National Commission for STs**","`338A`","Created by **89th Amendment (2003)** — separated from the SC Commission. Same powers: investigates, reports to the President"],
    ["**Special Officer for Linguistic Minorities**","`350B`","Appointed by the President. Investigates matters relating to safeguards for linguistic minorities. Reports to the President, who lays it before Parliament. Added by the **7th Amendment (1956)**"]
   ]},

  {careful:"**NHRC is NOT a constitutional body.** It is a *statutory* body created by the **Protection of Human Rights Act, 1993**. It can be abolished by Parliament tomorrow without touching the Constitution. The same applies to the **CIC** (Right to Information Act, 2005), **Lokpal** (Lokpal and Lokayuktas Act, 2013), **NCBC** — but the NCBC became *partly* constitutional by the **102nd Amendment (2018)**, which inserted `Article 338B`. The distinction between constitutional and statutory is the single most-asked question about these bodies."},

  {h:"The key statutory and executive bodies",
   cols:["Body","Created by","Key facts"],
   rows:[
    ["**National Human Rights Commission (NHRC)**","Protection of Human Rights Act, **1993**","Chairman must be a **retired Chief Justice of India**. Members include a retired SC judge, a retired HC Chief Justice, and two persons with knowledge of human rights. Investigates human rights violations, but its recommendations are **not binding**"],
    ["**Central Information Commission (CIC)**","Right to Information Act, **2005**","CIC and Information Commissioners appointed by President on recommendation of a committee (PM + Leader of Opposition + Union Cabinet Minister)"],
    ["**Lokpal**","Lokpal and Lokayuktas Act, **2013**","Chairperson must be a retired CJI, or a retired SC judge, or an eminent person. Jurisdiction over the **Prime Minister** (with exceptions), Ministers, MPs, and Group A and B officers"],
    ["**National Commission for Backward Classes (NCBC)**","`Article 338B` (102nd Amendment, **2018**)","Originally statutory (1993 Act). Given **constitutional status** by the 102nd Amendment. Considers inclusion in and exclusion from the OBC list"],
    ["**NITI Aayog**","Executive resolution, **2015**","Replaced the **Planning Commission**. **Not even statutory** — created by a Cabinet resolution, not an Act. Chairman is the **Prime Minister**. Has no power to allocate funds"],
    ["**National Commission for Women (NCW)**","National Commission for Women Act, **1990**","Statutory body. Reviews constitutional and legal safeguards for women. Recommendations are advisory"]
   ]},

  {h:"Constitutional offices — Attorney General and Advocate General",
   cols:["","Attorney General of India","Advocate General of a State"],
   rows:[
    ["**Article**","`76`","`165`"],
    ["**Appointed by**","The **President**","The **Governor**"],
    ["**Qualification**","Must be qualified to be a **Supreme Court judge**","Must be qualified to be a **High Court judge**"],
    ["**Term**","Holds office during the **pleasure of the President** — no fixed term","Holds office during the **pleasure of the Governor**"],
    ["**In Parliament/Legislature**","Can **speak and take part** in proceedings of both Houses. Has a **right of audience** in all courts. But **cannot vote**","Can speak and take part in the proceedings of the State Legislature. But **cannot vote**"],
    ["**Not a member**","Is **not** a member of either House of Parliament","Is **not** a member of the State Legislature"]
   ]},

  {careful:"**The Attorney General can participate in Parliament but CANNOT vote.** The same applies to the Advocate General in the State Legislature. They are not members — they are officers of the court who are given a *right of audience* as a constitutional privilege. A question that asks 'who can attend Parliamentary proceedings without being a member' expects the Attorney General."},

  {h:"How they are removed — the three standards",
   swap:[
    ["**Impeachment process** (like a SC judge)","CEC, CAG — removed by President on an address by **both Houses** of Parliament, passed by **special majority** (majority of total membership + 2/3 of those present and voting)","The process has **never been used** against any of these officers"],
    ["**Removal by President on CEC's recommendation**","Other Election Commissioners — not the CEC","The CEC is the only one with impeachment protection; the others serve under the CEC"],
    ["**At the pleasure of the President/Governor**","Attorney General, Advocate General, Governor","No grounds need to be stated; removal is at will. The Sarkaria Commission recommended that Governors should ordinarily be allowed to complete their 5-year term"],
    ["**UPSC Chairman and members**","Removed by the **President** on the report of the **Supreme Court** — not by impeachment","The SC holds an inquiry, and the President can remove on its report (`Article 317`)"],
    ["**Finance Commission members**","**No specific removal procedure** in the Constitution","Their term is defined by the President's order constituting the commission"]
   ]}

 ]}

]});
