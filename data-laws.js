/* THE ANSWER KEY — data-laws.js
   The three new criminal laws: BNS, BNSS and BSA.

   WHY THIS SUBJECT IS DIFFERENT FROM THE REST OF THE SITE. These three Acts
   are asked BY NUMBER. The question is not "what is murder" but "murder is
   punishable under which section of the Bharatiya Nyaya Sanhita" — and the
   distractors are the other real section numbers. So every entry here carries
   three things: the new number, the old IPC / CrPC / Evidence Act number it
   replaces, and the punishment.

   HOW THE NUMBERS WERE CHECKED. Section numbers were verified against the bare
   Acts and against published section-mapping tables, not written from memory,
   because a wrong number here is worse than no number at all. Where a figure
   is genuinely disputed between sources — the chapter count of the BNS is the
   main one — the dispute is stated rather than resolved silently.

   ONE THING TO KEEP STRAIGHT THROUGHOUT. These are not renamings. The BNS
   dropped 19 IPC provisions, added 20 new offences, and renumbered everything,
   so the old number and the new number almost never match. Answering an IPC
   number to a BNS question is the commonest way to lose the mark.           */

(window.SUBJECTS = window.SUBJECTS || []).push({

id:"laws", n:"The New Criminal Laws", tab:"New Laws", sub:"BNS · BNSS · BSA",
w:"The three Acts that replaced the IPC, the CrPC and the Evidence Act on 1 July 2024 — with the section numbers that are asked by number.",
intro:"Three Acts, passed together in December 2023 and in force from 1 July 2024. The Bharatiya Nyaya Sanhita replaced the Indian Penal Code, the Bharatiya Nagarik Suraksha Sanhita replaced the Code of Criminal Procedure, and the Bharatiya Sakshya Adhiniyam replaced the Indian Evidence Act. Because these are asked by section number, each topic gives the new number, the old number it replaces, and the punishment.",

topics:[

/* ===================================================================== 1 */
{id:"frame", n:"The three Acts — dates, counts and what replaced what", hy:1,
 w:"The frame: every date, every count, and the three old Acts that were repealed.",
 quick:[
  "All three passed the **Lok Sabha on 20 December 2023** and the **Rajya Sabha on 21 December 2023**; received **Presidential assent on 25 December 2023**; came into force on **1 July 2024**.",
  "**BNS** — `358` sections, replacing the IPC's `511`. **BNSS** — `531` sections, replacing the CrPC's `484`. **BSA** — `170` sections, replacing the Evidence Act's `167`.",
  "The BNS adds **20 new offences**, drops **19** IPC provisions, introduces **community service** as a punishment in **6** offences, a **mandatory minimum** punishment in **23**, and raises fines in **83**.",
  "The **Bharatiya Nagarik Suraksha Sanhita** is the **procedure** code. Its name contains *Suraksha* — protection — and that is the one that trips people up: the *Nyaya* Sanhita is the penal code, the *Nagarik Suraksha* Sanhita the procedure code.",
  "The three old Acts were of `1860` (IPC), `1973` (CrPC) and `1872` (Evidence Act) — so the oldest thing replaced was the **Evidence Act**, not the Penal Code."
 ],
 blocks:[
  {h:"The three Acts side by side",
   cols:["New Act","Replaced","Sections then and now","Chapters"],
   rows:[
    ["**Bharatiya Nyaya Sanhita, 2023 (BNS)**","**Indian Penal Code, 1860**","511 → **358**","23 → **20**"],
    ["**Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)**","**Code of Criminal Procedure, 1973**","484 → **531**","37 → **39**"],
    ["**Bharatiya Sakshya Adhiniyam, 2023 (BSA)**","**Indian Evidence Act, 1872**","167 → **170**","11 → **12**"]
   ],
   note:"The BNS is the only one of the three that got SHORTER. The other two grew. That is worth holding on to, because a question is as likely to ask which Act shrank as which one has 358 sections."},

  {careful:"**The chapter counts are the one figure sources disagree on.** The BNS is described as having 20 chapters in most places and 19 in some, and the BNSS as 39 chapters in some sources and 43 in others. The **section counts** — 358, 531, 170 — are not disputed anywhere and are what is actually asked. If a chapter count must be given, use 20 for the BNS and 39 for the BNSS."},

  {h:"The dates",
   swap:[
    ["Passed, Lok Sabha","20 December 2023",""],
    ["Passed, Rajya Sabha","21 December 2023",""],
    ["Presidential assent","25 December 2023","All three on the same day"],
    ["Came into force","1 July 2024","By notification. Section 106(2) of the BNS — hit and run — was held back and notified later"],
    ["Introduced by","Amit Shah, Union Home Minister","First introduced in August 2023, withdrawn, and reintroduced in December 2023 as the 'Second' Bills after the Standing Committee reported"],
    ["Reviewed by","The Parliamentary Standing Committee on Home Affairs","Chaired by Brij Lal"]
   ]},

  {h:"What the BNS changed, in numbers",
   cols:["Change","How many"],
   rows:[
    ["New offences added","**20**"],
    ["IPC provisions dropped","**19**"],
    ["Offences for which **community service** is a punishment","**6**"],
    ["Offences given a **mandatory minimum** sentence","**23**"],
    ["Offences for which the **fine** was increased","**83**"],
    ["Offences for which the **term of imprisonment** was increased","**33**"],
    ["Sections in the BNS","**358**, in 20 chapters"]
   ]},

  {h:"The twenty chapters of the BNS",
   p:"Learn the order rather than the exact ranges — knowing that the human-body offences begin at 100 and the property offences at 303 places almost any section within twenty.",
   cols:["Chapter","Subject","Opens at"],
   rows:[
    ["I","Preliminary","`1`"],
    ["II","Of punishments","`4`"],
    ["III","General exceptions, including private defence","`14`"],
    ["IV","Of abetment, criminal conspiracy and attempt","`45`"],
    ["V","**Of offences against woman and child**","`63`"],
    ["VI","**Of offences affecting the human body**","`100`"],
    ["VII","**Of offences against the State**","`147`"],
    ["VIII","Of offences relating to the Army, Navy and Air Force","`159`"],
    ["IX","Of offences relating to elections","`169`"],
    ["X","Of offences relating to coin, currency notes and Government stamps","`178`"],
    ["XI","**Of offences against the public tranquillity**","`189`"],
    ["XII","Of offences by or relating to public servants","`198`"],
    ["XIII","Of contempts of the lawful authority of public servants","`206`"],
    ["XIV","Of false evidence and offences against public justice","`227`"],
    ["XV","Of offences affecting public health, safety, convenience, decency and morals","`270`"],
    ["XVI","Of offences relating to religion","`298`"],
    ["XVII","**Of offences against property**","`303`"],
    ["XVIII","Of offences relating to documents and property marks","`335`"],
    ["XIX","Of criminal intimidation, insult, annoyance and defamation","`351`"],
    ["XX","Repeal and savings","`358`"]
   ]},

  {careful:"**Chapter V comes before Chapter VI, and that is the point.** In the IPC, offences against women sat inside the chapter on offences affecting the human body. The BNS pulls them out and puts them **first**, as Chapter V, before the general body-offences chapter. It is the change the drafters most often point to, and 'which chapter of the BNS deals with offences against women and children' is a real question with the answer **Chapter V**."}
 ]},

/* ===================================================================== 2 */
{id:"bns-punish", n:"BNS — punishments and the general scheme", hy:1,
 w:"The six punishments, community service, and the general exceptions.",
 quick:[
  "**Section 4** lists the punishments. There are now **six**; the IPC had five. The new one is **community service**.",
  "Community service applies to exactly **six** offences: `202`, `209`, `226`, `303(2)`, `355` and `356(2)`.",
  "In `303(2)` — petty theft under ₹5,000 by a first-time offender who returns the property — community service is **mandatory**, not an alternative. In the other five it is one option among several.",
  "**Section 20** is the child under **seven** — nothing is an offence. **Section 21** is the child between **seven and twelve** of immature understanding.",
  "**Section 22** is unsoundness of mind. Private defence runs from **Section 34 to Section 44**."
 ],
 blocks:[
  {h:"The six punishments — BNS Section 4",
   cols:["Punishment","Note"],
   rows:[
    ["Death","Retained. The BNS did not abolish it"],
    ["Imprisonment for life","Means the remainder of the person's natural life"],
    ["Imprisonment","Of two descriptions — **rigorous** (with hard labour) and **simple**"],
    ["Forfeiture of property",""],
    ["Fine",""],
    ["**Community service**","**New.** Defined in the explanation to Section 23 of the BNSS as work the court may order an offender to perform as a form of punishment that benefits the community, **for which he is not entitled to any remuneration**"]
   ]},

  {h:"The six offences that carry community service",
   cols:["Section","Offence","Old IPC","Note"],
   rows:[
    ["`202`","Public servant unlawfully engaging in trade","168","An alternative to imprisonment"],
    ["`209`","Non-appearance in response to a proclamation under Section 84 of the BNSS","174A","An alternative"],
    ["`226`","Attempt to commit suicide to compel or restrain the exercise of a lawful power by a public servant","**New offence**","An alternative. Aimed at hunger strikes and self-harm used as pressure"],
    ["`303(2)`","**Theft** where the value is **under ₹5,000**, the offender is a **first-time** offender, and the property is **returned or its value restored**","379","**Mandatory** — the section says the offender *shall* be punished with community service"],
    ["`355`","Misconduct in public by a drunken person","510","An alternative"],
    ["`356(2)`","**Defamation**","500","An alternative to simple imprisonment up to two years or a fine, or both"]
   ]},

  {h:"The general exceptions that get asked",
   cols:["Section","What it covers","Old IPC"],
   rows:[
    ["`14`","Act done by a person bound by law","76"],
    ["`18`","**Accident** in doing a lawful act","80"],
    ["`19`","Act likely to cause harm but done without criminal intent, to prevent other harm — **necessity**","81"],
    ["`20`","**Act of a child under seven** — *doli incapax*, nothing is an offence","82"],
    ["`21`","**Act of a child above seven and under twelve** who has not attained sufficient maturity of understanding","83"],
    ["`22`","**Act of a person of unsound mind**","84"],
    ["`23`","Act of a person **intoxicated against his will**","85"],
    ["`25`","Act not intended to cause death, done **by consent**","87"],
    ["`28`","What **consent** is not — consent given under fear or misconception","90"],
    ["`33`","**Trivial harm** — *de minimis*","95"],
    ["`34` to `44`","**The right of private defence** — of body and of property. `38` covers when the right extends to causing death; `44` covers harm to an innocent person in exercising it","96–106"]
   ]},

  {h:"Abetment, conspiracy and attempt",
   cols:["Section","What it covers","Old IPC"],
   rows:[
    ["`45`","Abetment of a thing — the definition","107"],
    ["`46`","Abettor","108"],
    ["`49`","Abetment where the act is committed and no express provision is made","109"],
    ["`55`","Abetment of an offence punishable with death or life imprisonment, where the offence is not committed","115"],
    ["`61`","**Criminal conspiracy** — `61(1)` the definition, `61(2)` the punishment","120A, 120B"],
    ["`62`","**Attempt** to commit an offence punishable with imprisonment for life or imprisonment, where no express provision is made","511"]
   ]},

  {careful:"**Section 62 of the BNS replaces Section 511 of the IPC.** The general attempt provision moved from the very last section of the penal code to a section in the fourth chapter. Anyone who learnt 'attempt is 511' has to unlearn the position as well as the number."}
 ]},

/* ===================================================================== 3 */
{id:"bns-body", n:"BNS — offences affecting the human body", hy:1,
 w:"Murder, culpable homicide, hurt, kidnapping and trafficking — Chapter VI, from Section 100.",
 quick:[
  "**Culpable homicide is `100`; murder is `101`; the punishment for murder is `103`.** Three different sections, and questions use all three.",
  "**Mob lynching** — murder by a group of five or more on grounds of race, caste, community, sex, place of birth, language or personal belief — is `103(2)`. Punishment: **death or life imprisonment**, and a fine.",
  "**Hit and run** — causing death by rash driving and **escaping without reporting** — is `106(2)`, with up to **ten years**. Plain death by negligence is `106(1)`, up to **five years**.",
  "**Attempt to murder is `109`** (old IPC 307). **Abetment of suicide is `108`** (old 306).",
  "**Acid attack** is `124`; **kidnapping for ransom** is `140`; **trafficking of persons** is `143`."
 ],
 blocks:[
  {h:"Homicide",
   cols:["Section","Offence","Old IPC","Punishment"],
   rows:[
    ["`100`","**Culpable homicide** — the definition","299","—"],
    ["`101`","**Murder** — the definition. `101(2)` defines murder by a group of five or more on the specified grounds","300","—"],
    ["`102`","Culpable homicide by causing the death of a person other than the one intended","301","—"],
    ["`103(1)`","**Punishment for murder**","302","**Death or imprisonment for life**, and fine"],
    ["`103(2)`","**Murder by a group of five or more (mob lynching)** on grounds of race, caste, community, sex, place of birth, language, personal belief or any similar ground","**New**","**Death or imprisonment for life**, and fine. Each member of the group is liable"],
    ["`104`","Punishment for murder by a person under sentence of imprisonment for life","303","Death, or life imprisonment meaning the remainder of natural life"],
    ["`105`","**Punishment for culpable homicide not amounting to murder**","304","Life imprisonment, or 5 to 10 years, plus fine — or up to 10 years and fine if without intent to cause death"],
    ["`106(1)`","**Causing death by negligence**","304A","**Up to 5 years** and fine. For a **registered medical practitioner** acting in the course of a medical procedure, **up to 2 years** and fine"],
    ["`106(2)`","**Causing death by rash and negligent driving and escaping without reporting** the incident to a police officer or magistrate — **hit and run**","**New**","**Up to 10 years** and fine"],
    ["`107`","Abetment of suicide of a **child or a person of unsound mind**","305","Death, life imprisonment, or up to 10 years, plus fine"],
    ["`108`","**Abetment of suicide**","306","Up to 10 years and fine"],
    ["`109`","**Attempt to murder**","307","Up to 10 years and fine; up to life if hurt is caused. If by a life-convict, death is possible"],
    ["`110`","Attempt to commit culpable homicide","308","Up to 3 years, or up to 7 years if hurt is caused"]
   ]},

  {careful:"**`106(2)` was not brought into force with the rest of the Act.** The hit-and-run provision was held back on 1 July 2024 after a nationwide protest by transport operators, and notified separately later. A question on 'which provision of the BNS was deferred' has this as its answer."},

  {h:"Organised crime and terrorism — new to the penal code",
   cols:["Section","Offence","Punishment"],
   rows:[
    ["`111`","**Organised crime** — continuing unlawful activity by a crime syndicate: kidnapping, extortion, contract killing, land grabbing, financial scams, cybercrime, trafficking in people, drugs or arms","If it results in **death**: death or life imprisonment, and a fine of at least ₹10 lakh. Otherwise: **at least 5 years**, up to life, and a fine of at least ₹5 lakh"],
    ["`112`","**Petty organised crime** — theft from a vehicle, pick-pocketing, snatching, card skimming, selling public examination question papers, and similar acts by a gang causing general insecurity","**1 to 7 years** and fine"],
    ["`113`","**Terrorist act** — an act intended to threaten the unity, integrity, sovereignty, security or economic security of India, or to strike terror in the people","If it causes **death**: death or life imprisonment. Otherwise: **at least 5 years**, up to life. `113(4)` covers organising camps and `113(5)` membership of a terrorist organisation"]
   ],
   note:"Terrorism was previously dealt with only under the Unlawful Activities (Prevention) Act. Section 113 places it in the general penal code as well, and a proviso lets a senior police officer decide which of the two Acts to charge under — which is one of the main criticisms of the section."},

  {h:"Hurt",
   cols:["Section","Offence","Old IPC","Punishment"],
   rows:[
    ["`114`","Hurt — the definition","319","—"],
    ["`115`","**Voluntarily causing hurt**","321, 323","Up to 1 year, or fine up to ₹10,000, or both"],
    ["`116`","Grievous hurt — the definition","320","—"],
    ["`117(1)`","**Voluntarily causing grievous hurt**","322, 325","Up to 7 years and fine"],
    ["`117(3)`","Grievous hurt causing permanent disability or a vegetative state","**New**","**At least 10 years**, up to life"],
    ["`117(4)`","**Grievous hurt by a group of five or more** on grounds of race, caste, community, sex, place of birth, language or personal belief","**New**","Up to 7 years and fine"],
    ["`118`","Voluntarily causing hurt or grievous hurt by **dangerous weapons or means**","324, 326","Up to 3 years, or fine, or both; for grievous hurt, life or 1 to 10 years and fine"],
    ["`120`","Hurt or grievous hurt to **extort a confession** or to compel restoration of property","330, 331","Up to 7 years, or 10 years for grievous hurt"],
    ["`121`","Hurt or grievous hurt to **deter a public servant** from his duty","332, 333","Up to 5 years, or 10 years for grievous hurt"],
    ["`123`","Causing hurt by means of **poison** with intent to commit an offence","328","Up to 10 years and fine"],
    ["`124`","**Grievous hurt by acid** — `124(1)` throwing or administering acid; `124(2)` attempting to","326A, 326B","`124(1)`: **at least 10 years**, up to life, and a fine sufficient to meet the victim's medical expenses. `124(2)`: 5 to 7 years and fine"],
    ["`125`","Act endangering the **life or personal safety** of others","336, 337, 338","Up to 3 months to 3 years depending on the harm caused"]
   ]},

  {h:"Wrongful restraint, confinement, force and assault",
   cols:["Section","Offence","Old IPC"],
   rows:[
    ["`126`","**Wrongful restraint** — obstructing a person from proceeding in a direction he has a right to","339, 341"],
    ["`127`","**Wrongful confinement** — restraining a person within certain limits","340, 342 to 348"],
    ["`128`","Force — the definition","349"],
    ["`129`","**Criminal force** and **assault**","350, 351"],
    ["`130`","Assault or criminal force to **deter a public servant** from his duty","353"],
    ["`131`","Punishment for assault or criminal force otherwise than on grave provocation","352"]
   ]},

  {h:"Kidnapping, abduction, slavery and trafficking",
   cols:["Section","Offence","Old IPC","Punishment"],
   rows:[
    ["`135`","Kidnapping from India, and kidnapping from lawful guardianship — the definitions","359, 360, 361","—"],
    ["`137`","**Punishment for kidnapping**","363","Up to 7 years and fine"],
    ["`139`","**Kidnapping or maiming a child for the purpose of begging**","363A","At least 10 years, up to life; if maimed, at least 20 years up to life"],
    ["`140`","**Kidnapping or abduction in order to murder, or for ransom**","364, 364A","For ransom: **death or life imprisonment**, and fine"],
    ["`143`","**Trafficking of persons**","370","**7 to 10 years** and fine; more than one person, or a child, attracts higher minimums, up to life"],
    ["`144`","**Exploitation of a trafficked person**","370A","5 to 7 years for a child; 3 to 5 years for an adult"],
    ["`145`","Habitual dealing in slaves","371","Life imprisonment, or up to 10 years and fine"],
    ["`146`","Unlawful compulsory labour","374","Up to 5 years and fine"]
   ]}
 ]},

/* ===================================================================== 4 */
{id:"bns-women", n:"BNS — offences against women and children", hy:1,
 w:"Chapter V, Sections 63 to 99 — the chapter the BNS moved to the front.",
 quick:[
  "**Rape is `63`; the punishment for rape is `64`; gang rape is `70`.**",
  "`69` is **new**: sexual intercourse obtained by **deceitful means or a false promise of marriage** — up to ten years.",
  "`70(2)` — **gang rape of a woman under eighteen** — carries **life imprisonment for the remainder of natural life, or death**.",
  "**Dowry death is `80`** (old IPC 304B); **cruelty by a husband or his relatives is `85`** (old 498A), with the definition of cruelty in `86`.",
  "**Stalking is `78`**; **voyeurism `77`**; **sexual harassment `75`**; **outraging modesty `74`**."
 ],
 blocks:[
  {h:"Rape and its aggravated forms",
   cols:["Section","Offence","Old IPC","Punishment"],
   rows:[
    ["`63`","**Rape** — the definition, with its seven descriptions and two exceptions","375","—"],
    ["`64(1)`","**Punishment for rape**","376(1)","**At least 10 years**, up to life, and fine"],
    ["`64(2)`","Rape by a police officer, public servant, member of the armed forces, or in a hospital, remand home or place of custody, or of a woman incapable of giving consent, or causing grievous bodily harm","376(2)","**At least 10 years**, up to life meaning the remainder of natural life, and fine"],
    ["`65(1)`","**Rape of a woman under sixteen**","376AB and 376DA equivalents","**At least 20 years**, up to life meaning the remainder of natural life, and fine"],
    ["`65(2)`","**Rape of a woman under twelve**","376AB","**At least 20 years**, up to life meaning the remainder of natural life, **or death**, and fine"],
    ["`66`","Rape causing the victim's **death or a persistent vegetative state**","376A","**At least 20 years**, up to life meaning the remainder of natural life, **or death**"],
    ["`67`","Sexual intercourse by a **husband upon his wife during separation**","376B","2 to 7 years and fine"],
    ["`68`","Sexual intercourse by a **person in authority** — a public servant, jail or hospital superintendent, guardian","376C","5 to 10 years and fine"],
    ["`69`","**Sexual intercourse by employing deceitful means or by making a promise to marry without any intention of fulfilling it**","**New offence**","**Up to 10 years** and fine. The explanation defines deceitful means to include a false promise of employment or promotion, and marriage after suppressing identity"],
    ["`70(1)`","**Gang rape**","376D","**At least 20 years**, up to life meaning the remainder of natural life, and fine"],
    ["`70(2)`","**Gang rape of a woman under eighteen**","376DA, 376DB","**Life imprisonment for the remainder of natural life, or death**, and fine"],
    ["`71`","**Repeat offenders** — a second conviction under 64, 65, 66 or 70","376E","Life imprisonment for the remainder of natural life, or death"],
    ["`72`","**Disclosing the identity of a victim** of rape and related offences","228A","Up to 2 years and fine"],
    ["`73`","**Printing or publishing any matter relating to court proceedings** in such cases without permission","**New**","Up to 2 years and fine"]
   ]},

  {careful:"**Marital rape remains an exception, and the BNS kept it.** Exception 2 to Section 63 provides that sexual intercourse by a man with his own wife, the wife not being under eighteen, is not rape. The BNS **raised the age in that exception from fifteen to eighteen** but did not remove the exception itself. Both halves of that sentence get asked."},

  {h:"Assault, harassment, stalking and voyeurism",
   cols:["Section","Offence","Old IPC","Punishment"],
   rows:[
    ["`74`","**Assault or criminal force on a woman with intent to outrage her modesty**","354","1 to 5 years and fine"],
    ["`75`","**Sexual harassment** — unwelcome physical contact, a demand for sexual favours, showing pornography, or sexually coloured remarks","354A","Up to 3 years and fine; up to 1 year for a sexually coloured remark"],
    ["`76`","**Assault or criminal force with intent to disrobe** a woman","354B","3 to 7 years and fine"],
    ["`77`","**Voyeurism**","354C","1 to 3 years and fine for a first conviction; 3 to 7 years on a second"],
    ["`78`","**Stalking**","354D","Up to 3 years and fine for a first conviction; up to 5 years on a second"],
    ["`79`","**Word, gesture or act intended to insult the modesty of a woman**","509","Up to 3 years and fine"]
   ]},

  {h:"Marriage, dowry and cruelty",
   cols:["Section","Offence","Old IPC","Punishment"],
   rows:[
    ["`80`","**Dowry death** — death of a woman within seven years of marriage by burns, bodily injury or otherwise than in normal circumstances, where she was subjected to cruelty for dowry","304B","**At least 7 years**, up to life"],
    ["`81`","Cohabitation caused by a man **deceitfully inducing a belief of lawful marriage**","493","Up to 10 years and fine"],
    ["`82`","**Bigamy** — marrying again during the lifetime of a spouse. `82(2)` covers concealing the former marriage","494, 495","Up to 7 years and fine; up to 10 years if the former marriage was concealed"],
    ["`83`","Marriage ceremony gone through **fraudulently** without lawful marriage","496","Up to 7 years and fine"],
    ["`84`","**Enticing or taking away a married woman** with intent to have illicit intercourse","498","Up to 2 years, or fine, or both"],
    ["`85`","**Cruelty by a husband or his relatives**","498A","**Up to 3 years** and fine"],
    ["`86`","**The definition of cruelty** for the purposes of Section 85 — wilful conduct likely to drive a woman to suicide or cause grave injury, or harassment with a view to coercing her over property","Explanation to 498A","—"],
    ["`87`","**Kidnapping or abducting a woman to compel her to marry**","366","Up to 10 years and fine"]
   ]},

  {careful:"**498A is now `85`, and the definition of cruelty was split into its own section, `86`.** The IPC had the offence and its explanation in one section. The BNS puts the offence in 85 and the explanation in 86, so a question that asks 'which section defines cruelty' has the answer 86, not 85."},

  {h:"Miscarriage and offences against children",
   cols:["Section","Offence","Old IPC","Punishment"],
   rows:[
    ["`88`","**Causing miscarriage**","312","Up to 3 years, or fine, or both; up to 7 years if the woman was quick with child"],
    ["`89`","Causing miscarriage **without the woman's consent**","313","Life imprisonment, or up to 10 years, and fine"],
    ["`90`","Death caused by an act done with intent to cause miscarriage","314","Up to 10 years; life if without consent"],
    ["`91`","Act done with intent to **prevent a child being born alive** or to cause it to die after birth","315","Up to 10 years, or fine, or both"],
    ["`92`","Causing the death of a **quick unborn child** by an act amounting to culpable homicide","316","Up to 10 years and fine"],
    ["`93`","**Exposure and abandonment of a child under twelve** by a parent or person having care of it","317","Up to 7 years and fine"],
    ["`94`","**Concealment of birth** by secret disposal of the body","318","Up to 2 years, or fine, or both"],
    ["`95`","**Hiring, employing or engaging a child to commit an offence**","**New**","3 to 10 years and fine — and the same punishment as the offence committed, if the child commits it"],
    ["`96`","**Procuration of a child** for illicit intercourse or prostitution","366A, 372","Up to 10 years and fine"],
    ["`97`","**Kidnapping or abducting a child** under ten with intent to steal from its person","369","Up to 7 years and fine"],
    ["`98`","Selling a child for the purpose of prostitution","372","Up to 10 years and fine"],
    ["`99`","Buying a child for the purpose of prostitution","373","Up to 14 years and fine"]
   ]}
 ]},

/* ===================================================================== 5 */
{id:"bns-state", n:"BNS — offences against the State and public tranquillity", hy:1,
 w:"Sedition's replacement, waging war, unlawful assembly, rioting, and promoting enmity.",
 quick:[
  "**Section `152` replaced sedition (IPC 124A).** It is headed *Act endangering sovereignty, unity and integrity of India* — and the word **sedition** appears nowhere in the BNS.",
  "`152` punishment: **imprisonment for life, or up to seven years**, and a fine. The old 124A carried life or up to three years — so the maximum term went **up**, not down.",
  "**Waging war against the Government of India is `147`** (old IPC 121).",
  "**Unlawful assembly `189`; rioting `191`; affray `195`; promoting enmity between groups `196`** (old 153A).",
  "`197` — imputations and assertions prejudicial to national integration — now expressly covers such statements made through **electronic communication**."
 ],
 blocks:[
  {h:"Offences against the State — Chapter VII",
   cols:["Section","Offence","Old IPC","Punishment"],
   rows:[
    ["`147`","**Waging, attempting to wage, or abetting war against the Government of India**","121","**Death or imprisonment for life**, and fine"],
    ["`148`","**Conspiracy** to commit an offence punishable under Section 147","121A","Life imprisonment, or up to 10 years, and fine"],
    ["`149`","**Collecting arms** with the intention of waging war","122","Life imprisonment, or up to 10 years, and fine"],
    ["`150`","**Concealing with intent to facilitate** a design to wage war","123","Up to 10 years and fine"],
    ["`151`","**Assaulting the President or the Governor** with intent to compel or restrain the exercise of any lawful power","124","Up to 7 years and fine"],
    ["`152`","**Act endangering the sovereignty, unity and integrity of India**","**Replaces 124A (sedition)**","**Imprisonment for life, or up to 7 years**, and fine"],
    ["`153`","Waging war against a power in **alliance** with the Government of India","125","Life imprisonment, or up to 7 years, and fine"],
    ["`154`","**Depredation** on the territories of a power at peace with India","126","Up to 7 years, fine, and forfeiture of property"],
    ["`157`","Public servant **negligently suffering a prisoner of State to escape**","129","Simple imprisonment up to 3 years and fine"]
   ]},

  {h:"What Section 152 actually says",
   p:"Whoever, purposely or knowingly, by words either spoken or written, or by signs, or by visible representation, **or by electronic communication, or by use of financial means**, or otherwise — excites or attempts to excite **secession, armed rebellion or subversive activities**, or encourages feelings of **separatist activities**, or endangers the **sovereignty or unity and integrity of India** — commits the offence.",
   list:[
    "The word **sedition** does not appear. So does the phrase 'disaffection towards the Government', which was the heart of the old 124A.",
    "The test shifts from **disaffection towards the Government** to **danger to the sovereignty, unity and integrity of India** — the State rather than the government of the day.",
    "**Electronic communication** and **use of financial means** are named as modes of commission, which is genuinely new.",
    "The punishment is **life imprisonment or up to seven years**, plus fine — where 124A had life or up to three years.",
    "It is **cognizable and non-bailable**, as 124A was."
   ]},

  {careful:"**'Sedition has been abolished' is only half true, and the exam tests the half.** The *offence* of sedition as worded in IPC 124A is gone, and the word is not used. But Section 152 covers much of the same ground with a wider list of modes and a **higher maximum sentence**. The safe formulation is: *sedition under IPC 124A was repealed and replaced by BNS Section 152, which is differently worded and more severely punished.* The Rajasthan High Court in **Tejender Pal Singh v. State of Rajasthan (2024)** warned against using 152 against peaceful criticism."},

  {h:"Offences against public tranquillity — Chapter XI",
   cols:["Section","Offence","Old IPC","Punishment"],
   rows:[
    ["`189`","**Unlawful assembly** — five or more persons with a common object of the specified kinds; and being a member of one","141 to 145","Up to 6 months, or fine, or both; up to 2 years if armed with a deadly weapon"],
    ["`190`","**Every member of an unlawful assembly is guilty of an offence committed in prosecution of its common object**","149","The same punishment as the offence committed"],
    ["`191`","**Rioting** — an unlawful assembly that uses force or violence","146, 147","Up to 2 years, or fine, or both; up to 5 years if armed with a deadly weapon"],
    ["`192`","**Wantonly giving provocation** with intent to cause a riot","153","Up to 1 year, or fine, or both, if a riot follows"],
    ["`195`","**Affray** — two or more persons fighting in a public place and disturbing the public peace","159, 160","Up to 1 month, or fine up to ₹1,000, or both"],
    ["`196`","**Promoting enmity between different groups** on grounds of religion, race, place of birth, residence or language, and acts prejudicial to harmony","153A","Up to 3 years, or fine, or both; up to 5 years if committed in a place of worship"],
    ["`197`","**Imputations and assertions prejudicial to national integration** — including those made through **electronic communication**","153B","Up to 3 years, or fine, or both; up to 5 years if in a place of worship"]
   ]},

  {h:"Contempt of the lawful authority of public servants — the two new ones",
   cols:["Section","Offence","Note"],
   rows:[
    ["`209`","**Non-appearance in response to a proclamation** under Section 84 of the BNSS","Carries community service as an alternative"],
    ["`226`","**Attempt to commit suicide to compel or restrain the exercise of a lawful power** by a public servant","**A new offence.** Up to 1 year, or fine, or community service, or all. Aimed at hunger strikes and threats of self-harm used to obstruct officials"]
   ]}
 ]},

/* ===================================================================== 6 */
{id:"bns-property", n:"BNS — property, documents and defamation", hy:1,
 w:"Theft, snatching, robbery, dacoity, cheating, forgery and defamation — Chapter XVII onward.",
 quick:[
  "**Theft is `303`; snatching is `304`** — and snatching is a **brand-new offence** with no IPC equivalent.",
  "**Extortion `308`, robbery `309`, dacoity `310`, criminal breach of trust `316`, cheating `318`.**",
  "**Cheating** is `318` — `318(1)` the definition, `318(4)` the punishment that replaces the famous **IPC 420**.",
  "**Forgery is `336`; using a forged document is `341`; criminal intimidation is `351`; defamation is `356`.**",
  "`356(2)` — the punishment for defamation — now includes **community service** as an option, which IPC 500 did not."
 ],
 blocks:[
  {h:"Theft, snatching and robbery",
   cols:["Section","Offence","Old IPC","Punishment"],
   rows:[
    ["`303(1)`","**Theft** — the definition","378","—"],
    ["`303(2)`","**Punishment for theft**","379","Up to 3 years, or fine, or both. **But** if the value is under ₹5,000, it is a first conviction, and the property is returned, the punishment is **community service**"],
    ["`304`","**Snatching** — theft made sudden or quick by seizing or grabbing movable property from a person or their possession","**New offence**","Up to 3 years and fine"],
    ["`305`","Theft in a **dwelling house**, or of means of transport, or of an idol from a temple","380","Up to 7 years and fine"],
    ["`306`","Theft by a **clerk or servant** of property in his master's possession","381","Up to 7 years and fine"],
    ["`307`","Theft after **preparation to cause death or hurt** in order to commit it","382","Up to 10 years and fine"],
    ["`308`","**Extortion** — `308(1)` the definition, `308(2)` the punishment","383, 384","Up to 7 years, or fine, or both"],
    ["`309`","**Robbery** — theft or extortion with violence. `309(4)` is the punishment","390, 392","Rigorous imprisonment up to 10 years and fine; up to 14 years if on a highway between sunset and sunrise"],
    ["`310`","**Dacoity** — robbery by **five or more** persons acting together","391, 395","Life imprisonment, or rigorous imprisonment up to 10 years, and fine"],
    ["`311`","Robbery or dacoity with an **attempt to cause death or grievous hurt**","397, 398","At least 7 years"],
    ["`312`","Being one of a **gang of robbers**","401","Rigorous imprisonment up to 7 years and fine"]
   ]},

  {h:"Misappropriation, breach of trust and cheating",
   cols:["Section","Offence","Old IPC","Punishment"],
   rows:[
    ["`314`","**Dishonest misappropriation of property**","403","6 months to 2 years and fine"],
    ["`315`","Misappropriation of the property of a **deceased person**","404","Up to 3 years and fine; up to 7 years if by a clerk or servant"],
    ["`316`","**Criminal breach of trust.** `316(2)` general; `316(3)` by a carrier; `316(4)` by a clerk or servant; `316(5)` by a **public servant, banker, merchant or agent**","405 to 409","`316(2)`: up to 5 years and fine. `316(5)`: **life imprisonment**, or up to 10 years, and fine"],
    ["`317`","**Stolen property** — dishonestly receiving or retaining it, and habitually dealing in it","410 to 414","Up to 3 years; up to 10 years for habitual dealing"],
    ["`318`","**Cheating.** `318(1)` the definition; `318(2)` the general punishment; `318(4)` cheating and thereby **dishonestly inducing delivery of property** — the old **420**","415, 417, 418, 420","`318(2)`: up to 3 years, or fine, or both. `318(4)`: **up to 7 years** and fine"],
    ["`319`","**Cheating by personation**","416, 419","Up to 5 years, or fine, or both"],
    ["`324`","**Mischief**","425, 426","Up to 6 months, or fine, or both, rising with the loss caused"],
    ["`329`","**Criminal trespass** and **house-trespass** — the definitions and the punishment for criminal trespass","441, 447","Up to 3 months, or fine up to ₹5,000, or both"],
    ["`330`","**House-trespass** and house-breaking — the definitions","442, 445","—"],
    ["`331`","Punishment for **house-trespass and house-breaking**","448, 453 to 460","Up to 2 years and fine, rising for aggravated forms"]
   ]},

  {careful:"**'420' is gone as a number but not as an offence.** Cheating and dishonestly inducing the delivery of property is now **BNS 318(4)**. The colloquial use of 'a 420' will outlive the section by decades; the exam wants 318(4)."},

  {h:"Documents, forgery, intimidation and defamation",
   cols:["Section","Offence","Old IPC","Punishment"],
   rows:[
    ["`335`","Making a **false document**","464","—"],
    ["`336`","**Forgery** — `336(2)` is the general punishment; `336(3)` forgery for the purpose of harming reputation","463, 465","Up to 2 years, or fine, or both; up to 3 years for `336(3)`"],
    ["`337`","Forgery of a **record of a court or a public register**","466","Up to 7 years and fine"],
    ["`338`","Forgery of a **valuable security or a will**","467","Life imprisonment, or up to 10 years, and fine"],
    ["`340`","**Forged document** — the definition, and using a forged document as genuine","470, 471","The same punishment as if the person had forged it"],
    ["`351`","**Criminal intimidation.** `351(2)` the general punishment; `351(3)` threat of death or grievous hurt; `351(4)` anonymous criminal intimidation","503, 506, 507","`351(2)`: up to 2 years, or fine, or both. `351(3)`: up to 7 years"],
    ["`352`","**Intentional insult with intent to provoke a breach of the peace**","504","Up to 2 years, or fine, or both"],
    ["`353`","**Statements conducing to public mischief** — including false information circulated by **electronic means**","505","Up to 3 years, or fine, or both"],
    ["`354`","Act caused by **inducing a belief of divine displeasure**","508","Up to 1 year, or fine, or both"],
    ["`355`","**Misconduct in public by a drunken person**","510","Up to 24 hours' simple imprisonment, or fine up to ₹1,000, or **community service**"],
    ["`356`","**Defamation.** `356(1)` the definition; `356(2)` the punishment; `356(3)` printing defamatory matter; `356(4)` selling it","499, 500, 501, 502","`356(2)`: **simple imprisonment up to 2 years, or fine, or both, or community service**"]
   ]}
 ]},

/* ===================================================================== 7 */
{id:"bns-new", n:"BNS — the new offences, and what was dropped", hy:1,
 w:"The twenty additions worth knowing by number, and the notable repeals.",
 quick:[
  "**Twenty** new offences were added and **nineteen** IPC provisions dropped.",
  "**Adultery** (IPC 497) and **unnatural offences** (IPC 377) do **not** appear in the BNS — both had already been struck down or read down by the Supreme Court.",
  "**Attempt to commit suicide** (IPC 309) is not in the BNS as a general offence; only the narrow `226` — attempting suicide to compel a public servant — survives.",
  "**Thugs** (IPC 310–311) and the offence of being a thug were dropped, as were the sections on **dacoity with murder** as a separate head.",
  "The new offences most often asked: **organised crime `111`, petty organised crime `112`, terrorism `113`, mob lynching `103(2)`, hit and run `106(2)`, deceitful sexual intercourse `69`, snatching `304`, attempt to suicide to compel a public servant `226`**."
 ],
 blocks:[
  {h:"The new offences worth knowing by number",
   cols:["Section","New offence","Punishment"],
   rows:[
    ["`103(2)`","**Mob lynching** — murder by a group of five or more on grounds of race, caste, community, sex, place of birth, language or personal belief","Death or life imprisonment, and fine"],
    ["`106(2)`","**Hit and run** — causing death by rash driving and escaping without reporting","Up to 10 years and fine"],
    ["`111`","**Organised crime**","Death or life if it causes death; otherwise at least 5 years, and a fine of at least ₹5 lakh"],
    ["`112`","**Petty organised crime**","1 to 7 years and fine"],
    ["`113`","**Terrorist act**","Death or life if it causes death; otherwise at least 5 years up to life"],
    ["`117(3)`","**Grievous hurt causing permanent disability or a vegetative state**","At least 10 years, up to life"],
    ["`117(4)`","**Grievous hurt by a group of five or more** on the specified grounds","Up to 7 years and fine"],
    ["`69`","**Sexual intercourse by deceitful means or a false promise of marriage**","Up to 10 years and fine"],
    ["`70(2)`","**Gang rape of a woman under eighteen** — brought into the penal code itself","Life for the remainder of natural life, or death"],
    ["`73`","**Publishing matter relating to court proceedings** in a rape case without permission","Up to 2 years and fine"],
    ["`95`","**Hiring, employing or engaging a child** to commit an offence","3 to 10 years and fine"],
    ["`152`","**Act endangering the sovereignty, unity and integrity of India** — the new formulation replacing sedition","Life, or up to 7 years, and fine"],
    ["`226`","**Attempt to commit suicide to compel or restrain a public servant**","Up to 1 year, fine, or community service"],
    ["`304`","**Snatching**","Up to 3 years and fine"],
    ["`4(f)`","**Community service** as a form of punishment","A new punishment rather than a new offence, but asked in the same set"]
   ]},

  {h:"What was dropped",
   cols:["Old IPC section","Offence","Why it went"],
   rows:[
    ["**497**","**Adultery**","Struck down as unconstitutional in **Joseph Shine v. Union of India (2018)**. Not re-enacted"],
    ["**377**","Unnatural offences","**Read down** in **Navtej Singh Johar v. Union of India (2018)** so far as consenting adults were concerned. The BNS omitted the section entirely — which has drawn criticism, since it also removed the only provision covering non-consensual sex against adult men and transgender persons"],
    ["**309**","**Attempt to commit suicide**","Already largely displaced by the Mental Healthcare Act, 2017. Only the narrow BNS `226` survives"],
    ["**124A**","**Sedition**","Repealed as worded; replaced in substance by BNS `152`"],
    ["310, 311","Thug, and punishment for being a thug","Obsolete"],
    ["153AA","Carrying arms in a mass drill","Obsolete"],
    ["**Others**","Nineteen provisions in all were dropped","Mostly colonial-era or duplicated offences"]
   ]},

  {careful:"**The BNS did not create marital rape, decriminalise adultery, or abolish the death penalty.** Adultery was already gone by a 2018 judgment; the BNS simply did not re-enact it. The death penalty is retained in Section 4 and in a number of offences. And Exception 2 to Section 63 keeps the marital-rape exception, with the age raised from fifteen to eighteen. Each of these is offered as a distractor."}
 ]},

/* ===================================================================== 8 */
{id:"bnss", n:"BNSS — the procedure code and its timelines", hy:1,
 w:"Zero FIR, e-FIR, the fifteen-day custody rule, trial in absentia, and every statutory deadline.",
 quick:[
  "`531` sections, `39` chapters, replacing the CrPC's `484` sections.",
  "**Section `173`** is the FIR provision. It gives statutory backing to the **Zero FIR** — an FIR may be registered at any police station regardless of jurisdiction — and to the **e-FIR**, which must be signed within **three days**.",
  "**Section `187`** — the **fifteen days of police custody** may now be taken **in parts** within the first **40 or 60 days** of the 60 or 90-day period, instead of only at the start.",
  "**Section `356`** — **trial in absentia** of a **proclaimed offender**: two warrants **30 days apart**, a newspaper notice, and the trial cannot begin until **90 days** after charges are framed.",
  "**Section `392`** — judgment must be pronounced **within 45 days** of the end of the trial. **Section `479`** — a first-time offender who has served **one-third** of the maximum sentence as an undertrial must be released on bond."
 ],
 blocks:[
  {h:"Registration, investigation and arrest",
   cols:["Section","What it does","Old CrPC"],
   rows:[
    ["`35`","**Arrest without a warrant.** `35(7)` requires the **prior permission of an officer not below the rank of Deputy Superintendent of Police** before arresting a person for an offence punishable with less than three years who is **over sixty** or infirm","41"],
    ["`47`","A person arrested must be **informed of the grounds of arrest** and of the right to bail","50"],
    ["`48`","The police **must inform a relative or friend** of the arrest, and the information must be displayed at the police station and district headquarters","50A"],
    ["`58`","A person arrested must be produced before a Magistrate within **24 hours**, excluding travel time","57"],
    ["`105`","**Audio-video recording of search and seizure is mandatory**, and the recording must be sent to the Magistrate without delay","New"],
    ["`173(1)`","**FIR in a cognizable case** may be given **orally, in writing, or by electronic communication**. Information may be given **at any police station irrespective of the area** — the **Zero FIR**, given statutory force for the first time","154"],
    ["`173(3)`","For a cognizable offence punishable with **three years or more but less than seven**, the officer may — with a DSP's permission — conduct a **preliminary enquiry within 14 days** to see whether a prima facie case exists","New"],
    ["`176(3)`","**Forensic investigation is mandatory** for offences punishable with **seven years or more** — a forensic expert must visit the crime scene and record the collection of evidence on an electronic device","New"],
    ["`180`","Statements of witnesses may be recorded by **audio-video electronic means**","161"],
    ["`183`","A Magistrate must record the statement of a **rape victim** by audio-video means; a woman Magistrate where available","164"],
    ["`187`","Custody. See below","167"],
    ["`193`","The **police report (charge sheet)**. Investigation in an offence against a child or a rape case must be completed within **two months** of recording the information. `193(3)(ii)` requires the police to **inform the informant or victim of the progress of the investigation within 90 days**","173"]
   ]},

  {h:"Section 187 — the custody change, exactly",
   list:[
    "Under the **CrPC**, the 15 days of **police custody** could only be taken in the **first 15 days** after production before the Magistrate. After that, only judicial custody was possible.",
    "Under **BNSS 187**, the same **15-day total** may be authorised **in whole or in parts, at any time during the first 40 days** (for offences with a 60-day limit) or the **first 60 days** (for offences with a 90-day limit).",
    "The overall limits are unchanged: **90 days** for offences punishable with death, life imprisonment, or imprisonment of **ten years or more**; **60 days** for everything else.",
    "On expiry of 90 or 60 days, the accused **must be released on bail** if willing to furnish it — **default bail**, unchanged in principle.",
    "Where no Judicial Magistrate is available, an **Executive Magistrate** may authorise detention for a maximum of **7 days** in aggregate.",
    "The practical criticism is that the police can now interrupt a bail application by claiming a fresh slice of police custody weeks into the case."
   ]},

  {h:"Trial, and the new statutory deadlines",
   cols:["Section","Deadline or provision"],
   rows:[
    ["`173(3)`","Preliminary enquiry, where permitted: **14 days**"],
    ["`184`","Medical examination of a **rape victim**: the registered medical practitioner must send the report to the investigating officer within **seven days**"],
    ["`193`","Investigation in cases of offences against children and rape: **two months** from the recording of information"],
    ["`193(3)(ii)`","The **victim must be informed of the progress** of the investigation within **90 days**"],
    ["`230`","The accused and the victim must be **supplied copies of the police report and other documents within 14 days** of production or appearance"],
    ["`251`","**Charges** must be framed by a Court of Session within **60 days** of the first hearing on charge"],
    ["`258`","Judgment in a warrant case tried by a Magistrate: **within 30 days** of the close of arguments, extendable to **45 days** for reasons recorded"],
    ["`346`","Adjournments: not more than **two** may be granted in any case, and only for reasons recorded"],
    ["`392`","**Judgment must be pronounced within 45 days** of the termination of the trial"],
    ["`472`","**Mercy petition**: a convict under sentence of death may petition the Governor within **30 days**, and the President within **60 days** of the Governor's rejection. There is no time limit on the President's decision, and the section bars an appeal to any court against the President's order"]
   ]},

  {h:"The new mechanisms",
   cols:["Section","What it introduces"],
   rows:[
    ["`356`","**Inquiry, trial or judgment in absentia of a proclaimed offender.** Available only against a **declared proclaimed offender** who has absconded and cannot be tried in the ordinary way. The court must issue **two consecutive arrest warrants at least 30 days apart**, publish a notice in a **national or local newspaper** and at the person's last address, and inform a relative. The trial **cannot begin until 90 days after charges are framed**"],
    ["`398`","**Witness Protection Scheme** — every State Government is required to prepare and notify one. The CrPC had no such provision"],
    ["`397`","Recording of evidence of a witness whose evidence is essential and who is unlikely to be available"],
    ["`479`","**Maximum period of detention of an undertrial.** A person who has served **half** the maximum sentence must be released on bond; a **first-time offender** who has served **one-third** must be released. Does not apply to offences punishable with death or life imprisonment. The Supreme Court has held that the section applies **retrospectively**"],
    ["`530`","**All trials, inquiries and proceedings may be held in electronic mode** — including the issue and service of summons, the examination of witnesses, and the recording of evidence"],
    ["`532`","Summons and warrants may be served by electronic communication"],
    ["`107`","**Attachment, forfeiture and restoration of property** derived from criminal activity"],
    ["`111` to `113` (of the BNSS)","Provisions on **mutual legal assistance** and the transfer of persons and property between India and other countries"]
   ]},

  {h:"Samples, handcuffing, and the sanction question",
   list:[
    "**Section 349** allows a Magistrate to order any person — including one **not arrested** — to give **specimen signatures, handwriting, finger impressions and voice samples**. Voice samples are new.",
    "**Section 43(3)** permits **handcuffing** during arrest or production in court for a habitual or repeat offender, or for an offence of **organised crime, terrorism, drug offences, illegal arms, rape, acid attack, counterfeit currency, human trafficking, sexual offences against children or offences against the State**. This has been criticised as inconsistent with **Prem Shankar Shukla v. Delhi Administration (1980)**, which restricted handcuffing severely.",
    "**Section 218** requires the **prior sanction of the Government** to prosecute a **judge, magistrate or public servant** for an act done in the discharge of official duty — and provides that the sanction must be decided within **120 days**, failing which it is **deemed to have been granted**. That deeming provision is new.",
    "**Section 173(4)** allows a person aggrieved by refusal to register an FIR to apply to the Superintendent of Police, and then to a Magistrate under Section 175(3)."
   ]},

  {careful:"**Zero FIR was not invented by the BNSS.** It existed as an administrative practice, backed by Supreme Court directions and Home Ministry advisories, for years before 2024. What Section 173 did was give it **statutory** force for the first time. A question asking 'which of the following was introduced by the BNSS' expects Zero FIR to be treated as introduced *as a statutory right*; one asking whether Zero FIR existed before 2024 expects yes."}
 ]},

/* ===================================================================== 9 */
{id:"bsa", n:"BSA — the law of evidence", hy:1,
 w:"170 sections, and the one real change: electronic records are now primary evidence.",
 quick:[
  "`170` sections in `12` chapters, replacing the Indian Evidence Act's `167` sections in `11` chapters. The **oldest** of the three repealed Acts — `1872`.",
  "The central change: **electronic and digital records are now primary evidence**, where the Evidence Act treated them as secondary.",
  "**Section `61`** — admissibility may **not be denied** merely because a record is electronic. **Section `63`** replaces the old **65B**, and now requires a **certificate signed both by the person in charge of the device and by an expert**.",
  "**Section `22`** — confession caused by inducement, threat, **coercion** or promise is irrelevant. *Coercion* is the word the BSA added.",
  "**Section `23`** — a confession to a **police officer** is not proved against the accused; `23(2)` covers a confession in police custody, admissible only in the immediate presence of a **Magistrate**."
 ],
 blocks:[
  {h:"What actually changed",
   cols:["Change","Detail"],
   rows:[
    ["Electronic records as **primary** evidence","Under the Evidence Act, a printout or copy of an electronic record was **secondary** evidence. Under the BSA, **Section 57** expressly treats electronic records as **primary** evidence, with explanations covering records stored in multiple files, on multiple devices and in multiple copies"],
    ["The scope of 'document'","**Section 2** defines *document* to include **electronic and digital records** — emails, server logs, smartphone and computer messages, locational evidence, and voice mail"],
    ["The dual certificate","**Section 63(4)**, replacing the old 65B(4), now requires a certificate signed by **both** the person in charge of the device **and** an expert, in the form set out in the **Schedule** to the Act. The Evidence Act needed only one signature"],
    ["Coercion added","**Section 22** adds **coercion** to the list of things that make a confession irrelevant — inducement, threat, coercion or promise"],
    ["Joint trials","An explanation was added to the joint-trial provision covering a trial where an accused has absconded or not responded to an arrest warrant"],
    ["What did **not** change","Almost everything else. The BSA is the least altered of the three Acts — roughly **24 sections** were substantively modified, **two** added and **six** repealed. The structure of relevancy, burden of proof, presumptions, estoppel and examination of witnesses is carried over"]
   ]},

  {h:"The sections asked by number",
   cols:["BSA","Heading","Old IEA"],
   rows:[
    ["`2`","**Definitions** — including *document*, extended to electronic and digital records","3"],
    ["`4`","Facts forming part of the **same transaction**","6"],
    ["`22`","**Confession caused by inducement, threat, coercion or promise** — when irrelevant","24"],
    ["`23(1)`","**Confession to a police officer** — not to be proved against a person accused of any offence","25"],
    ["`23(2)`","Confession made while in **police custody** — not proved unless made in the **immediate presence of a Magistrate**; with the proviso on **discovery of a fact**","26 and 27"],
    ["`24`","Confession affecting the person making it **and others jointly under trial** for the same offence","30"],
    ["`26`","Statements by a person who is **dead or cannot be found** — including the **dying declaration**","32"],
    ["`39`","**Opinions of experts**","45"],
    ["`55`","**Oral evidence must be direct**","60"],
    ["`57`","**Primary evidence** — with the explanations extending it to electronic records","62"],
    ["`58`","**Secondary evidence**","63"],
    ["`61`","**Electronic or digital record** — admissibility not to be denied on the ground that it is electronic","New"],
    ["`62`","Special provisions as to evidence relating to an electronic record","65A"],
    ["`63`","**Admissibility of electronic records** — the certificate requirement","**65B**"],
    ["`104` to `107`","**Burden of proof** — the general rules","101 to 104"],
    ["`120`","**Presumption as to absence of consent** in certain prosecutions for rape","114A"],
    ["`124`","Who may testify — **competency of witnesses**","118"],
    ["`142`","**Examination-in-chief, cross-examination and re-examination**","137"],
    ["`168`","Court's power to put questions or order production","165"]
   ]},

  {careful:"**The BSA is not a rewrite; it is the Evidence Act with a digital layer and a new name.** Around 160 of its 170 sections carry over the old law almost unchanged. If a question asks what the BSA *changed*, the expected answers are: electronic records as primary evidence, the wider definition of *document*, the dual certificate under Section 63, and the addition of *coercion* in Section 22. If it asks what the BSA *is*, the answer is the successor to the Indian Evidence Act, 1872."}
 ]},

/* ===================================================================== 10 */
{id:"mapping", n:"The old number to the new number", hy:1,
 w:"One table. The sections that were famous by their old numbers, and what they are now.",
 quick:[
  "The mapping is **not** a fixed offset — the BNS reordered the chapters, so every number has to be learnt individually.",
  "The three that come up most: **302 → `103`** (murder), **420 → `318(4)`** (cheating), **498A → `85`** (cruelty by husband).",
  "**376 → `64`** (rape), **304B → `80`** (dowry death), **307 → `109`** (attempt to murder).",
  "**124A → `152`** (sedition's replacement), **511 → `62`** (attempt), **154 CrPC → `173` BNSS** (FIR).",
  "**65B of the Evidence Act → `63` of the BSA** (electronic records)."
 ],
 blocks:[
  {h:"IPC to BNS — the famous numbers",
   cols:["Old IPC","Offence","New BNS"],
   rows:[
    ["**302**","Punishment for murder","**`103(1)`**"],
    ["299","Culpable homicide","`100`"],
    ["300","Murder — the definition","`101`"],
    ["304","Culpable homicide not amounting to murder","`105`"],
    ["304A","Causing death by negligence","`106(1)`"],
    ["**304B**","Dowry death","**`80`**"],
    ["305","Abetment of suicide of a child or insane person","`107`"],
    ["306","Abetment of suicide","`108`"],
    ["**307**","Attempt to murder","**`109`**"],
    ["308","Attempt to commit culpable homicide","`110`"],
    ["319 / 323","Hurt / voluntarily causing hurt","`114` / `115`"],
    ["320 / 325","Grievous hurt / voluntarily causing grievous hurt","`116` / `117`"],
    ["324 / 326","Hurt / grievous hurt by dangerous weapons","`118`"],
    ["326A","Acid attack","`124(1)`"],
    ["339 / 341","Wrongful restraint","`126`"],
    ["340 / 342","Wrongful confinement","`127`"],
    ["354","Outraging the modesty of a woman","`74`"],
    ["354A","Sexual harassment","`75`"],
    ["354B","Assault with intent to disrobe","`76`"],
    ["354C","Voyeurism","`77`"],
    ["354D","Stalking","`78`"],
    ["363","Kidnapping","`137`"],
    ["364A","Kidnapping for ransom","`140`"],
    ["370","Trafficking of persons","`143`"],
    ["**375 / 376**","Rape / punishment for rape","**`63` / `64`**"],
    ["376D","Gang rape","`70(1)`"],
    ["376E","Repeat offenders","`71`"],
    ["379","Theft","`303(2)`"],
    ["380","Theft in a dwelling house","`305`"],
    ["384","Extortion","`308`"],
    ["392","Robbery","`309`"],
    ["395","Dacoity","`310`"],
    ["403","Criminal misappropriation","`314`"],
    ["406 / 409","Criminal breach of trust / by a public servant","`316(2)` / `316(5)`"],
    ["411","Receiving stolen property","`317`"],
    ["**420**","Cheating and dishonestly inducing delivery of property","**`318(4)`**"],
    ["425","Mischief","`324`"],
    ["441 / 447","Criminal trespass","`329`"],
    ["463 / 465","Forgery","`336`"],
    ["467","Forgery of a valuable security or will","`338`"],
    ["471","Using a forged document as genuine","`340`"],
    ["**499 / 500**","Defamation","**`356`**"],
    ["503 / 506","Criminal intimidation","`351`"],
    ["504","Intentional insult to provoke a breach of the peace","`352`"],
    ["505","Statements conducing to public mischief","`353`"],
    ["509","Word or gesture insulting the modesty of a woman","`79`"],
    ["510","Misconduct in public by a drunken person","`355`"],
    ["**498A**","Cruelty by a husband or his relatives","**`85`** (with cruelty defined in `86`)"],
    ["494","Bigamy","`82`"],
    ["**121**","Waging war against the Government of India","**`147`**"],
    ["**124A**","Sedition","**`152`** — differently worded"],
    ["141 / 143","Unlawful assembly","`189`"],
    ["147","Rioting","`191`"],
    ["149","Every member of an unlawful assembly guilty","`190`"],
    ["**153A**","Promoting enmity between groups","**`196`**"],
    ["153B","Imputations prejudicial to national integration","`197`"],
    ["159","Affray","`195`"],
    ["82 / 83 / 84","Child under 7 / child 7–12 / unsoundness of mind","`20` / `21` / `22`"],
    ["96 to 106","Right of private defence","`34` to `44`"],
    ["120A / 120B","Criminal conspiracy","`61(1)` / `61(2)`"],
    ["**511**","Attempt to commit an offence","**`62`**"],
    ["**497**","Adultery","**Dropped**"],
    ["**377**","Unnatural offences","**Dropped**"],
    ["**309**","Attempt to commit suicide","**Dropped**, except `226`"]
   ]},

  {h:"CrPC to BNSS — the ones worth knowing",
   cols:["Old CrPC","Provision","New BNSS"],
   rows:[
    ["41","Arrest without a warrant","`35`"],
    ["50","Grounds of arrest to be communicated","`47`"],
    ["57","Production before a Magistrate within 24 hours","`58`"],
    ["82","Proclamation for a person absconding","`84`"],
    ["107 / 144","Security for keeping the peace / power to issue orders in urgent cases of nuisance or apprehended danger","`126` / `163`"],
    ["**154**","**FIR in a cognizable case**","**`173`**"],
    ["156(3)","Magistrate's power to order investigation","`175(3)`"],
    ["161","Examination of witnesses by the police","`180`"],
    ["164","Recording of confessions and statements","`183`"],
    ["**167**","**Custody pending investigation**","**`187`**"],
    ["**173**","**Police report on completion of investigation**","**`193`**"],
    ["190","Cognizance of offences by a Magistrate","`210`"],
    ["197","Prosecution of judges and public servants","`218`"],
    ["436A","Maximum period of detention of an undertrial","**`479`**"],
    ["437 / 439","Bail in non-bailable offences / powers of the High Court and Court of Session","`480` / `483`"],
    ["438","Anticipatory bail","`482`"],
    ["482","Inherent powers of the High Court","`528`"],
    ["—","**Trial in absentia** of a proclaimed offender","**`356`** (new)"],
    ["—","**Witness Protection Scheme**","**`398`** (new)"],
    ["—","**Proceedings in electronic mode**","**`530`** (new)"]
   ]},

  {h:"Evidence Act to BSA",
   cols:["Old IEA","Provision","New BSA"],
   rows:[
    ["3","Definitions","`2`"],
    ["6","Same-transaction facts","`4`"],
    ["24","Confession by inducement, threat or promise","`22` — with **coercion** added"],
    ["25 / 26 / 27","Confession to a police officer, in custody, and discovery of a fact","`23`"],
    ["30","Confession affecting a co-accused","`24`"],
    ["32","Statements of persons who are dead — dying declaration","`26`"],
    ["45","Opinion of experts","`39`"],
    ["60","Oral evidence must be direct","`55`"],
    ["62 / 63","Primary / secondary evidence","`57` / `58`"],
    ["**65B**","**Electronic records**","**`63`** — with a dual certificate"],
    ["101 to 104","Burden of proof","`104` to `107`"],
    ["114A","Presumption as to absence of consent","`120`"],
    ["137","Examination-in-chief and cross-examination","`142`"],
    ["165","Court's power to put questions","`168`"]
   ]}
 ]}

]});
