/* THE ANSWER KEY — data-trig.js
   Trigonometry and the whole of height and distance, as questions.

   THE SYLLABUS SAYS "simple problems only" for height and distance, and
   means it: every question in a paper reduces to one of a small set of
   right triangles with 30°, 45° or 60° in them. So the three height-and-
   distance topics here are arranged as that set — the single triangle, then
   two angles or two observers, then the standard results worth carrying in
   your head, such as h = √(xy) for two complementary angles.

   ANGLES OUTSIDE THE STANDARD SET are only ever asked in order to be
   reduced to it, so that is how they are taught here. */

(window.SUBJECTS = window.SUBJECTS || []).push({

id:"trig", n:"Trigonometry and Height–Distance", tab:"Trigonometry", sub:"Ratios, identities, heights",
part:"Maths — every formula as a question",
w:"The ratios and the table, the standard identities and the manipulations SSC builds on them, maximum and minimum values, and height and distance from the single triangle to the standard results.",
intro:"Four topics of trigonometry, then three of height and distance. The table of standard values is the first thing and the last thing: no question in the chapter can be done without it, and almost every question can be done with it.",

topics:[

/* ============================================================ 1 — The ratios, the table and complementary angles (22 questions) */
{
id:"trig-ratios", n:"The ratios, the table and complementary angles", hy:1,
w:"The six ratios on a right triangle, the table of values at 0°, 30°, 45°, 60° and 90°, the reciprocal and quotient relations, the complementary-angle rules, the ranges, and the conversion between degrees and radians.",
quick:[
 "**sinθ = opposite/hypotenuse**, **cosθ = adjacent/hypotenuse**, **tanθ = opposite/adjacent**. Which side counts as *opposite* and which as *adjacent* changes with the angle you stand at; only the **hypotenuse** stays the same side whichever acute angle you use.",
 "**cosecθ = 1/sinθ**, **secθ = 1/cosθ**, **cotθ = 1/tanθ**. The pairing is sin with cosec and cos with sec — the names cross over, and that crossing is the commonest slip in the chapter.",
 "**tanθ = sinθ/cosθ** and **cotθ = cosθ/sinθ**. So tan30° = (½)/(√3/2) = 1/√3, which is how to rebuild any missing entry of the table without memorising it twice.",
 "The table, as the three sines: **sin0° = 0, sin30° = ½, sin45° = 1/√2, sin60° = √3/2, sin90° = 1**. Read the same five numbers backwards for cosine. **tan90° and sec90° are not defined**, and so are **cot0° and cosec0°**.",
 "**sin(90° − θ) = cosθ**, **tan(90° − θ) = cotθ**, **sec(90° − θ) = cosecθ** — the co-ratio of the complement. So `cos55° = sin35°` and `sin35°/cos55° = 1`, and `sin²20° + sin²70° = sin²20° + cos²20° = 1`.",
 "On `0°` to `90°`: **sinθ and cosθ lie between `0` and `1`**, **tanθ runs from `0` to `∞`**, and **secθ and cosecθ are never less than `1`**. As θ grows, sinθ, tanθ and secθ increase while cosθ, cotθ and cosecθ decrease.",
 "**π radians = 180°**, so `1° = π/180 radians`, `30° = π/6` and `1 radian = 180°/π ≈ 57°16′`. An arc of length `l` on a circle of radius `r` subtends **θ = l/r radians** at the centre."
],
blocks:[
 {h:"THE TABLE — every ratio at every standard angle",
  cols:["Ratio","0°","30°","45°","60°","90°"],
  rows:[
  ["**sinθ**","0","½","1/√2","√3/2","1"],
  ["**cosθ**","1","√3/2","1/√2","½","0"],
  ["**tanθ**","0","1/√3","1","√3","not defined"],
  ["**cosecθ**","not defined","2","√2","2/√3","1"],
  ["**secθ**","1","2/√3","√2","2","not defined"],
  ["**cotθ**","not defined","√3","1","1/√3","0"]
 ],
  note:"Read the sine row left to right and the cosine row right to left: they are the same five numbers. A ratio is *not defined* wherever its reciprocal is zero — cosec0° and cot0° because sin0° = 0, sec90° and tan90° because cos90° = 0."},

 {h:"THE SHEET — the definitions, the relations, the ranges and the radians",
  cols:["Asked as","The relation","What to watch"],
  rows:[
  ["**sinθ**","opposite/hypotenuse","The side opposite θ over the side opposite the right angle"],
  ["**cosθ**","adjacent/hypotenuse","*Adjacent* means the leg that touches θ, not either leg at random"],
  ["**tanθ**","opposite/adjacent = sinθ/cosθ","The only one of the three that never involves the hypotenuse"],
  ["**cosecθ**","hypotenuse/opposite = 1/sinθ","Paired with **sin**, in spite of the name looking like cos"],
  ["**secθ**","hypotenuse/adjacent = 1/cosθ","Paired with **cos**"],
  ["**cotθ**","adjacent/opposite = 1/tanθ = cosθ/sinθ","Paired with tan"],
  ["**The three reciprocal products**","sinθ·cosecθ = 1, cosθ·secθ = 1, tanθ·cotθ = 1","Each is `1` at every angle where both ratios exist"],
  ["**The two quotients**","tanθ = sinθ/cosθ, cotθ = cosθ/sinθ","Any entry of the table can be rebuilt from the sine and cosine rows"],
  ["**Complementary angles**","sin(90° − θ) = cosθ, cos(90° − θ) = sinθ, tan(90° − θ) = cotθ, cot(90° − θ) = tanθ, sec(90° − θ) = cosecθ, cosec(90° − θ) = secθ","The ratio turns into its co-ratio and the sign never changes"],
  ["**sinA = cosB, or tanA·tanB = 1, or sinA·cosecB = 1**","⇒ A + B = 90°","This is how every *find the angle* question of this kind is set"],
  ["**Range of sinθ and cosθ on 0° to 90°**","Both lie between `0` and `1` inclusive","`sinθ = 1.2` or `cosθ = 5/3` is impossible, whatever the rest of the question says"],
  ["**Range of tanθ and cotθ on 0° to 90°**","From `0` up to `∞`","Any positive number at all is a possible tangent"],
  ["**Range of secθ and cosecθ on 0° to 90°**","At least `1`, never a proper fraction","`secθ = ½` and `cosecθ = 0.6` are impossible"],
  ["**Which way each ratio moves as θ grows from 0° to 90°**","sinθ, tanθ and secθ increase; cosθ, cotθ and cosecθ decrease","The three *co*- ratios are the three that fall"],
  ["**Given one ratio, find the others**","Draw the right triangle, label the two sides the ratio names, and get the third by Pythagoras","The two cases SSC uses are **3-4-5** and **5-12-13**"],
  ["**Degrees to radians**","π radians = 180°, so multiply by π/180","30° = π/6, 45° = π/4, 60° = π/3, 90° = π/2"],
  ["**Radians to degrees**","Multiply by 180°/π, so 1 radian = 180°/π ≈ 57°16′","A radian is a little under `60°`, not a little over `1°`"],
  ["**Angle subtended by an arc**","θ = arc/radius, in **radians**; equivalently arc = rθ","The answer comes out in radians and usually has to be converted before it matches an option"],
  ["**Simple equations on 0° to 90°**","2sinθ = 1 ⇒ θ = 30°; tanθ = √3 ⇒ θ = 60°; sinθ = cosθ ⇒ θ = 45°","Solve for the ratio first, then read the angle off the table"]
 ]},

 {careful:"**Which leg is the opposite and which the adjacent depends on the angle you are standing at.** In a right triangle `ABC` with the right angle at `B`, the side `BC` is opposite `∠A` but adjacent to `∠C`, so `sinA = BC/AC` while `cosC = BC/AC` as well. Only the **hypotenuse** `AC` is fixed — it is always the side facing the right angle. A ratio written down for the wrong vertex is the commonest way a correct formula gives a wrong answer."},

 {careful:"**cosec is the reciprocal of sin, and sec is the reciprocal of cos** — the names cross over. So `cosec30° = 2` while `sec30° = 2/√3`, and `cosec0°` is not defined while `sec0° = 1`. Reading *cosec* as the reciprocal of *cos* reverses every one of those four values, and both of the swapped values are always on the option list."},

 {careful:"The complementary-angle rules use **90° − θ**, not `180° − θ`, and the ratio changes into its **co-ratio** with no change of sign: **sin(90° − θ) = cosθ**, never `−sinθ` and never `cosecθ`. So `cos55° = sin35°`, and therefore `sin35°/cos55°` is `1` and not `35/55` — the two angles add to `90°`, which is the whole point of the question."},

 {h:"QUESTIONS — the ratios, the table, the complements and the radians",
  mcq:[
  {q:"In a right triangle, `sinθ` is defined as:",
   o:["opposite/hypotenuse","adjacent/hypotenuse","opposite/adjacent","hypotenuse/opposite"],
   a:0,
   why:"**sinθ = opposite/hypotenuse.** Option B is **cosθ = adjacent/hypotenuse**, option C is **tanθ = opposite/adjacent** and option D is **cosecθ = hypotenuse/opposite** — the reciprocal of the right answer, and the one most often ticked by anyone who remembers the two sides but not which way up they go. The hypotenuse is always the side facing the right angle, whichever acute angle θ is.",
   tag:"Definition"},

  {q:"In △ABC the right angle is at `B`. Then `cosA` equals:",
   o:["BC/AC","AB/BC","BC/AB","AB/AC"],
   a:3,
   why:"**cosA = adjacent/hypotenuse.** The right angle is at `B`, so the hypotenuse is `AC`; the leg touching `∠A` is `AB`, so cosA = `AB/AC`. Option A is `BC/AC`, which is **sinA** — `BC` is the leg *opposite* `∠A`, and taking it as the adjacent side is exactly the error this question is built on. Option C is tanA and option B is cotA.",
   tag:"Which side"},

  {q:"The value of `tan30°` is:",
   o:["√3","1/√3","√3/2","2/√3"],
   a:1,
   why:"**tanθ = sinθ/cosθ**, so tan30° = (½)/(√3/2) = `1/√3`. Option A is `√3`, which is **tan60°** — the two tangents are reciprocals, and swapping 30° for 60° is the standard slip. Option C is sin60° and option D is sec30°.",
   tag:"tan30°"},

  {q:"The value of `cos60°` is:",
   o:["√3/2","1/√2","½","√3"],
   a:2,
   why:"**cos60° = ½**, because the cosine row of the table is the sine row read backwards: cos60° = sin30° = `½`. Option A is `√3/2`, which is **cos30°** — the single commonest confusion in the table, since 60° feels like the bigger answer when in fact the cosine *falls* as the angle grows. Option B is cos45°.",
   tag:"cos60°"},

  {q:"The value of `sec45°` is:",
   o:["1/√2","2/√3","2","√2"],
   a:3,
   why:"**secθ = 1/cosθ**, and cos45° = 1/√2, so sec45° = `√2`. Option A is cos45° itself, left un-inverted — the trap in every sec and cosec question. Option B is sec30° = 2/√3 and option C is sec60° = 2.",
   tag:"sec45°"},

  {q:"Which of these is **not defined**?",
   o:["cot90°","sec90°","cosec90°","tan45°"],
   a:1,
   why:"**secθ = 1/cosθ**, and cos90° = 0, so `sec90°` has no value. Option A is tempting because cot and sec both look like they should fail at 90°, but **cot90° = cos90°/sin90° = 0/1 = 0**, a perfectly good value. The four undefined entries in the whole table are **tan90°, sec90°, cot0° and cosec0°** — a ratio fails exactly where its reciprocal is zero.",
   tag:"Not defined"},

  {q:"The reciprocal of `cosθ` is:",
   o:["cotθ","cosecθ","secθ","sinθ"],
   a:2,
   why:"**cosθ·secθ = 1**, so the reciprocal of cosθ is `secθ`. Option B, `cosecθ`, is the reciprocal of **sinθ** — the names cross over, and this is the most expensive piece of bookkeeping in the chapter: cosec goes with sin, sec goes with cos. Option A is the reciprocal of tanθ.",
   tag:"Reciprocals"},

  {q:"`cotθ` is equal to:",
   o:["sinθ/cosθ","cosθ/sinθ","1/cosθ","sinθ·cosθ"],
   a:1,
   why:"**cotθ = cosθ/sinθ = 1/tanθ.** Option A, `sinθ/cosθ`, is **tanθ** itself — the two quotients are inverses of each other and writing the wrong one down inverts the final answer. Option C is secθ. Either quotient lets any entry of the table be rebuilt from the sine and cosine rows alone.",
   tag:"Quotients"},

  {q:"`tan(90° − θ)` is equal to:",
   o:["tanθ","−tanθ","cosecθ","cotθ"],
   a:3,
   why:"**tan(90° − θ) = cotθ.** Every complementary-angle rule turns a ratio into its **co-ratio** — sin into cos, tan into cot, sec into cosec — with no change of sign. Option B is the rule for `180° − θ`, which is a different chapter and the wrong answer here; option C comes from pairing tan with cosec instead of cot.",
   tag:"90° − θ"},

  {q:"The value of `sin35°/cos55°` is:",
   o:["sin20°","35/55","1","cos20°"],
   a:2,
   why:"**cos(90° − θ) = sinθ**, and 55° = 90° − 35°, so cos55° = sin35° and the ratio is `1`. Option B divides the angles instead of the ratios, which is the error the question exists to catch — `sin35°/cos55°` is not `35/55`, because a ratio is not proportional to its angle. Option A subtracts the angles, the same mistake in another form.",
   tag:"Complementary"},

  {q:"The value of `sin²20° + sin²70°` is:",
   o:["1","½","0","sin²50°"],
   a:0,
   why:"**sin(90° − θ) = cosθ**, so sin70° = sin(90° − 20°) = cos20°, and the expression becomes **sin²20° + cos²20° = 1**. Option D subtracts the angles, which no rule allows. The same pairing collapses `cos²25° + cos²65°` to `1` and `tan10°·tan80°` to `1`, because in each case the two angles add to `90°`.",
   tag:"Complementary"},

  {q:"If `tan2θ·tan4θ = 1`, then θ is:",
   o:["15°","22½°","30°","45°"],
   a:0,
   why:"**tanA·tanB = 1 means B = 90° − A**, because tan(90° − A) = cotA = 1/tanA. So 2θ + 4θ = 90°, giving 6θ = 90° and θ = `15°`. Option B comes from setting 4θ = 90° and ignoring the other factor; option C from making the two angles add to 180° instead of 90°, which is the standard slip.",
   tag:"A + B = 90°"},

  {q:"As θ increases from `0°` to `90°`, which of these decreases?",
   o:["sinθ","tanθ","cosθ","secθ"],
   a:2,
   why:"**On 0° to 90°, sinθ, tanθ and secθ increase, while cosθ, cotθ and cosecθ decrease** — the three *co*- ratios are the three that fall. The table shows it: cos0° = 1, cos45° = 1/√2, cos90° = 0. Option D is tempting because secθ = 1/cosθ and cosθ is falling, but the reciprocal of a falling positive quantity **rises**, from `1` at 0° to no value at all at 90°.",
   tag:"Increasing"},

  {q:"For an acute angle θ, which of these is impossible?",
   o:["cosecθ = ½","sinθ = 0.8","tanθ = 5","cosθ = 0.2"],
   a:0,
   why:"**cosecθ = 1/sinθ and sinθ ≤ 1, so cosecθ ≥ 1** — it can never be a proper fraction, and the same holds for secθ. Options B and D are fine because **sinθ and cosθ both lie between `0` and `1`**, and option C is fine because **tanθ runs from `0` all the way to `∞`**. Option C is the one most often picked, on the feeling that a trigonometric ratio cannot exceed `1` — true for sin and cos, false for tan, sec and cosec.",
   tag:"Ranges"},

  {q:"If `sinθ = 3/5`, then `tanθ` is:",
   o:["4/5","3/4","4/3","5/3"],
   a:1,
   why:"sinθ = 3/5 puts the opposite side at `3` and the hypotenuse at `5`, so by Pythagoras the adjacent side is √(25 − 9) = `4` — the 3-4-5 triangle. Then **tanθ = opposite/adjacent = 3/4**. Option A is cosθ, option C is cotθ (the right triangle, the ratio upside down) and option D is cosecθ.",
   tag:"3-4-5"},

  {q:"If `cosθ = 5/13`, then `cotθ` is:",
   o:["12/5","13/12","5/12","12/13"],
   a:2,
   why:"cosθ = 5/13 puts the adjacent side at `5` and the hypotenuse at `13`, so the opposite side is √(169 − 25) = `12` — the 5-12-13 triangle. Then **cotθ = adjacent/opposite = 5/12**. Option A is `12/5`, which is **tanθ** — the reciprocal, and the answer anyone gets who writes cot as opposite/adjacent. Option B is cosecθ and option D is sinθ.",
   tag:"5-12-13"},

  {q:"`1 radian` is approximately:",
   o:["57°16′","60°","1°","180°"],
   a:0,
   why:"**π radians = 180°**, so **1 radian = 180°/π ≈ 57°16′**. Option C is the trap: a radian is not a degree-sized unit at all, it is a little under `60°`, because π is a little over `3`. Option D is π radians, not one radian.",
   tag:"1 radian"},

  {q:"`30°` expressed in radians is:",
   o:["π/4","π/3","π/2","π/6"],
   a:3,
   why:"**π radians = 180°**, so to turn degrees into radians multiply by π/180: 30 × π/180 = `π/6`. Option B is `π/3`, which is **60°** — doubling or halving at the wrong moment is the whole of the difficulty here. Option A is 45° and option C is 90°.",
   tag:"Radians"},

  {q:"An arc of length `11` cm on a circle of radius `7` cm subtends at the centre an angle of:",
   o:["45°","90°","60°","120°"],
   a:1,
   why:"**θ = arc/radius, in radians**, so θ = 11/7 radians. Converting with 180°/π and π = 22/7: (11/7) × 180 × (7/22) = 1980/22 = `90°`. The trap is to stop at `11/7` and treat it as degrees, or to pick the option that looks like a half-turn fraction; the formula gives radians and the answer must be converted before it can match a degree option.",
   tag:"arc = rθ"},

  {q:"If `2sinθ = 1` and θ is acute, then θ is:",
   o:["15°","45°","60°","30°"],
   a:3,
   why:"Divide first: **sinθ = ½, and sin30° = ½, so θ = `30°`**. Option B comes from reading the equation as `sin2θ = 1`, which would give 2θ = 90° and θ = 45° — the `2` multiplies the ratio, not the angle. The companions are `tanθ = √3 ⇒ θ = 60°` and `sinθ = cosθ ⇒ θ = 45°`; always solve for the ratio first, then read the angle off the table.",
   tag:"Find θ"},

  {q:"The sides of the right triangle in the figure are in the ratio `1 : √3 : 2`. The sine of its smallest angle is:",
   o:["1/√3","½","√3/2","2"],
   a:1,
   why:"The smallest angle faces the smallest side, so it is the `30°` angle, and **sinθ = opposite/hypotenuse = 1/2 = `½`**. Option C, `√3/2`, is the sine of the *other* acute angle, 60° — equivalently cos30° — and it is the standard misreading of this triangle. Option A is tan30° and option D is cosec30°.",
   tag:"30-60-90",
   d:"t-30-60-90",
   dcap:"The 30-60-90 triangle: the side opposite 30° is half the hypotenuse."},

  {q:"The two legs of the right triangle in the figure are equal, so each acute angle is `45°`. Which statement follows?",
   o:["sin45° = cos45°","sin45° = ½","tan45° = √2","cosec45° = 2"],
   a:0,
   why:"With both legs equal, the opposite and adjacent sides of either acute angle are the same, so **sin45° = cos45° = 1/√2** — and this is why `sinθ = cosθ` has the single acute solution `45°`. Option C is the trap: `√2` is the **hypotenuse** of this triangle and so is sec45° and cosec45°, while **tan45° = opposite/adjacent = 1**. Option B is sin30° and option D is cosec30°.",
   tag:"45-45-90",
   d:"t-45-45-90",
   dcap:"The 45-45-90 triangle: equal legs, hypotenuse √2 times a leg."}
 ],
  note:"Every question above is one row of the sheet or one cell of the table. If a value had to be worked out rather than recalled, rebuild it from the sine and cosine rows with tanθ = sinθ/cosθ and the three reciprocals — that is cheaper than memorising thirty entries."}
]
},

/* ============================================================ 2 — The standard identities and what questions do with them (22 questions) */
{
id:"trig-identities", n:"The standard identities and what questions do with them", hy:1,
w:"Three identities and their rearrangements — the secθ − tanθ pair, the (sinθ + cosθ) = k family, the fourth and sixth powers, and the expressions SSC sets again and again.",
quick:[
 "**sin²θ + cos²θ = 1**, **1 + tan²θ = sec²θ**, **1 + cot²θ = cosec²θ**. Every question in the chapter is one of these three, rearranged.",
 "**sec²θ − tan²θ = 1** and **cosec²θ − cot²θ = 1**, so **secθ − tanθ = 1/(secθ + tanθ)** and **cosecθ − cotθ = 1/(cosecθ + cotθ)**. Given one of a pair, the other is its reciprocal.",
 "**(sinθ + cosθ)² = 1 + 2sinθcosθ**, so from sinθ + cosθ = k comes **sinθcosθ = (k² − 1)/2**. And **(sinθ − cosθ)² = 1 − 2sinθcosθ**, so the two squares add to `2`.",
 "**sin⁴θ + cos⁴θ = 1 − 2sin²θcos²θ** and **sin⁶θ + cos⁶θ = 1 − 3sin²θcos²θ**. The `2` and the `3` are the whole question, and both answers are always offered.",
 "**tanθ + cotθ = 1/(sinθcosθ) = secθ·cosecθ**, and **tan²θ + cot²θ = (tanθ + cotθ)² − 2**. The *product* tanθ·cotθ is `1`; the sum never is.",
 "**sinθ + cosecθ = 2** forces sinθ = `1`, so sinⁿθ + cosecⁿθ = `2` for every n. In the same way **tanθ + cotθ = 2** forces tanθ = `1`, and θ = `45°`.",
 "**√((1 − sinθ)/(1 + sinθ)) = secθ − tanθ** and **(1 + cosθ)/(1 − cosθ) = (cosecθ + cotθ)²** — the two expressions the paper asks you to simplify most often."
],
blocks:[
 {h:"THE SHEET — every identity, with the form the question uses",
  cols:["Asked as","The identity","What the question does with it"],
  rows:[
  ["**sin²θ + cos²θ**","= 1","sin²θ = 1 − cos²θ = (1 − cosθ)(1 + cosθ), and cos²θ = 1 − sin²θ"],
  ["**1 + tan²θ**","= sec²θ","tan²θ = sec²θ − 1, and sec²θ − tan²θ = 1"],
  ["**1 + cot²θ**","= cosec²θ","cot²θ = cosec²θ − 1, and cosec²θ − cot²θ = 1"],
  ["**(secθ − tanθ)(secθ + tanθ)**","= 1","secθ − tanθ = 1/(secθ + tanθ). Add the two to get 2secθ, subtract to get 2tanθ"],
  ["**(cosecθ − cotθ)(cosecθ + cotθ)**","= 1","cosecθ − cotθ = 1/(cosecθ + cotθ). Add to get 2cosecθ, subtract to get 2cotθ"],
  ["**(sinθ + cosθ)²**","= 1 + 2sinθcosθ","Given sinθ + cosθ = k, sinθcosθ = (k² − 1)/2"],
  ["**(sinθ − cosθ)²**","= 1 − 2sinθcosθ","(sinθ + cosθ)² + (sinθ − cosθ)² = 2, whatever the angle"],
  ["**sin⁴θ + cos⁴θ**","= 1 − 2sin²θcos²θ","It is (sin²θ + cos²θ)² − 2sin²θcos²θ, the a² + b² = (a + b)² − 2ab line"],
  ["**sin⁶θ + cos⁶θ**","= 1 − 3sin²θcos²θ","It is a³ + b³ = (a + b)³ − 3ab(a + b) with a = sin²θ and b = cos²θ"],
  ["**tanθ + cotθ**","= 1/(sinθcosθ) = secθ·cosecθ","Not `1`. The product tanθ·cotθ is what equals 1"],
  ["**tan²θ + cot²θ**","= (tanθ + cotθ)² − 2","Also equals sec²θ + cosec²θ − 2"],
  ["**sec²θ + cosec²θ**","= sec²θ·cosec²θ = 1/(sin²θcos²θ)","The one identity where a sum equals a product"],
  ["**tan²θ − sin²θ**","= tan²θsin²θ","The companion is cot²θ − cos²θ = cot²θcos²θ"],
  ["**(1 + cosθ)/(1 − cosθ)**","= (cosecθ + cotθ)²","Its square root is cosecθ + cotθ, which is also sinθ/(1 − cosθ)"],
  ["**√((1 − sinθ)/(1 + sinθ))**","= secθ − tanθ","Because (1 − sinθ)/(1 + sinθ) = (1 − sinθ)²/cos²θ"],
  ["**sinθ in terms of tanθ**","sinθ = tanθ/√(1 + tan²θ)","and cosθ = 1/√(1 + tan²θ), from the triangle with sides tanθ, 1 and √(1 + tan²θ)"],
  ["**sinθ + cosecθ = 2**","forces sinθ = 1","so sinⁿθ + cosecⁿθ = 2 for every n. Likewise tanθ + cotθ = 2 forces tanθ = 1"],
  ["**x = a·secθ, y = b·tanθ**","x²/a² − y²/b² = 1","Eliminating θ means finding the identity the two ratios satisfy. x = a·sinθ, y = a·cosθ gives x² + y² = a²"]
 ]},

 {careful:"**sin²θ + cos²θ = 1 does not make sinθ + cosθ = 1.** Squaring the sum gives **(sinθ + cosθ)² = 1 + 2sinθcosθ**, which is larger than 1 for every angle strictly between `0°` and `90°` — at `45°` the sum is `√2`. This is the trigonometric form of the same slip as (a + b)² = a² + b²."},

 {careful:"The `2` and the `3`: **sin⁴θ + cos⁴θ = 1 − 2sin²θcos²θ** but **sin⁶θ + cos⁶θ = 1 − 3sin²θcos²θ**. Both are offered in every question built on either, and the factor is the only thing being tested. The fourth-power one comes from a² + b² = (a + b)² − 2ab, the sixth from a³ + b³ = (a + b)³ − 3ab(a + b)."},

 {careful:"**tanθ·cotθ = 1, but tanθ + cotθ is not 1.** The sum is **1/(sinθcosθ) = secθ·cosecθ**, and since sinθcosθ is at most `½` the sum is never smaller than `2`. The same warning holds for sinθ and cosecθ: their product is `1`, their sum is not."},

 {h:"QUESTIONS — the identities, one at a time",
  mcq:[
  {q:"`1 + tan²θ` is equal to:",
   o:["sec²θ","cosec²θ","cot²θ","sin²θ"],
   a:0,
   why:"**1 + tan²θ = sec²θ**, which is sin²θ + cos²θ = 1 divided through by cos²θ. Option B is the adjacent identity, **1 + cot²θ = cosec²θ** — pairing `tan` with `cosec` instead of with `sec` is the commonest confusion in the chapter. Keep them together by the first letters: tan goes with sec, cot goes with cosec.",
   tag:"1 + tan²θ"},

  {q:"`(1 − sin²θ)(1 + tan²θ)` simplifies to:",
   o:["cos²θ","sec²θ","`1`","tan²θ"],
   a:2,
   why:"**1 − sin²θ = cos²θ** and **1 + tan²θ = sec²θ**, so the product is cos²θ·sec²θ = `1`, because cosθ·secθ = 1. Options A and B are the two factors themselves — each is the answer one step before the end, and stopping there is the trap. Any product of this kind should be turned into sines and cosines before it is multiplied out.",
   tag:"sin²θ + cos²θ"},

  {q:"`(sinθ + cosθ)²` is equal to:",
   o:["1 − 2sinθcosθ","1 + 2sinθcosθ","2sinθcosθ","1 + sinθcosθ"],
   a:1,
   why:"**(sinθ + cosθ)² = sin²θ + cos²θ + 2sinθcosθ = 1 + 2sinθcosθ.** Option A is the other member of the pair, **(sinθ − cosθ)² = 1 − 2sinθcosθ**, and the sign is the only difference between them. Option D drops the factor of 2, which is the term the identity exists for.",
   tag:"(sinθ + cosθ)²"},

  {q:"If `sinθ + cosθ = √2`, then `sinθcosθ` is:",
   o:["`1`","`√2 − 1`","`½`","`2`"],
   a:2,
   why:"**(sinθ + cosθ)² = 1 + 2sinθcosθ**, so from sinθ + cosθ = k comes **sinθcosθ = (k² − 1)/2** = (2 − 1)/2 = `½`. Option A is k² − 1 with the division by 2 forgotten — the standard slip. The angle here is `45°`, where sinθ = cosθ = 1/√2 and the product is indeed `½`.",
   tag:"sinθcosθ"},

  {q:"`(sinθ + cosθ)² + (sinθ − cosθ)²` is equal to:",
   o:["`1`","`4`","2 + 4sinθcosθ","`2`"],
   a:3,
   why:"The two squares are **1 + 2sinθcosθ** and **1 − 2sinθcosθ**, so the middle terms cancel and the sum is **2(sin²θ + cos²θ) = 2** for every angle. Option A is the value of sin²θ + cos²θ alone, which is the answer before the doubling; option C adds the middle terms instead of cancelling them. Note the matching result: the *difference* of the same two squares is 4sinθcosθ.",
   tag:"Sum of the squares"},

  {q:"If `sinθ + cosθ = 7/5` and θ is acute, then `sinθ − cosθ` may be:",
   o:["`1/5`","`1/25`","`12/25`","`24/25`"],
   a:0,
   why:"**(sinθ + cosθ)² = 1 + 2sinθcosθ** gives 49/25 = 1 + 2sinθcosθ, so sinθcosθ = `12/25`. Then **(sinθ − cosθ)² = 1 − 2sinθcosθ** = 1 − 24/25 = 1/25, so sinθ − cosθ = `1/5`. Option B is that square left un-rooted, which is the commonest error here; options C and D are sinθcosθ and 2sinθcosθ, the working rather than the answer. The two ratios are 4/5 and 3/5.",
   tag:"sinθ − cosθ"},

  {q:"`sin⁴θ + cos⁴θ` is equal to:",
   o:["1 − 3sin²θcos²θ","1 + 2sin²θcos²θ","1 − sin²θcos²θ","1 − 2sin²θcos²θ"],
   a:3,
   why:"Treat it as a² + b² with a = sin²θ and b = cos²θ: **a² + b² = (a + b)² − 2ab**, so **sin⁴θ + cos⁴θ = 1 − 2sin²θcos²θ**. Option A is the sixth-power identity, **sin⁶θ + cos⁶θ = 1 − 3sin²θcos²θ**, and it is offered in every question of this kind. The factor is `2` for the fourth powers and `3` for the sixth.",
   tag:"sin⁴θ + cos⁴θ"},

  {q:"`sin⁶θ + cos⁶θ` is equal to:",
   o:["1 − 2sin²θcos²θ","1 − 3sin²θcos²θ","1 − 3sin⁴θcos⁴θ","1 + 3sin²θcos²θ"],
   a:1,
   why:"Treat it as a³ + b³ with a = sin²θ and b = cos²θ: **a³ + b³ = (a + b)³ − 3ab(a + b)** = 1 − 3sin²θcos²θ. So **sin⁶θ + cos⁶θ = 1 − 3sin²θcos²θ**. Option A is the fourth-power version and option C raises the product to the wrong power — ab is sin²θcos²θ, not sin⁴θcos⁴θ.",
   tag:"sin⁶θ + cos⁶θ"},

  {q:"If `sinθcosθ = 1/4`, then `sin⁶θ + cos⁶θ` is:",
   o:["`7/8`","`13/16`","`1/4`","`1/16`"],
   a:1,
   why:"**sin⁶θ + cos⁶θ = 1 − 3sin²θcos²θ**, and sin²θcos²θ = (1/4)² = 1/16, so the value is 1 − 3/16 = `13/16`. Option A is **sin⁴θ + cos⁴θ = 1 − 2(1/16) = 7/8**, the fourth-power answer, and it is the tempting one. Option C is 1 − 3(1/4), which is what squaring sinθcosθ too late gives; option D is sin²θcos²θ itself.",
   tag:"sin⁶θ + cos⁶θ"},

  {q:"If `secθ + tanθ = 3`, then `secθ − tanθ` is:",
   o:["`9`","`1/9`","`3`","`1/3`"],
   a:3,
   why:"**(secθ + tanθ)(secθ − tanθ) = sec²θ − tan²θ = 1**, so **secθ − tanθ = 1/(secθ + tanθ)** = `1/3`. Option B squares before taking the reciprocal, which is the usual slip — the identity gives `1`, not `1`², so no square is involved. Here secθ = (3 + 1/3)/2 = 5/3 and tanθ = (3 − 1/3)/2 = 4/3, and 25/9 − 16/9 = 1 as it must.",
   tag:"secθ − tanθ"},

  {q:"If `cosecθ + cotθ = 5/3`, then `cotθ` is:",
   o:["`3/5`","`8/15`","`17/15`","`16/15`"],
   a:1,
   why:"**cosec²θ − cot²θ = 1**, so **cosecθ − cotθ = 1/(cosecθ + cotθ)** = `3/5`. Subtracting the two equations gives 2cotθ = 5/3 − 3/5 = 16/15, so `cotθ = 8/15`. Option A is cosecθ − cotθ, the result one step before the end and the commonest tick; option D is 2cotθ, left undivided; option C is cosecθ, which comes from adding instead of subtracting.",
   tag:"cosecθ − cotθ"},

  {q:"`(secθ + tanθ)/(secθ − tanθ)` is equal to:",
   o:["`1`","(secθ − tanθ)²","(secθ + tanθ)²","sec²θ + tan²θ"],
   a:2,
   why:"Since **secθ − tanθ = 1/(secθ + tanθ)**, dividing by it multiplies by secθ + tanθ, so the quotient is **(secθ + tanθ)²**. Option A is what the *product* of the two brackets gives, and treating a quotient as the product is the trap. Option B is the reciprocal of the right answer, which is the value of (secθ − tanθ)/(secθ + tanθ).",
   tag:"secθ + tanθ"},

  {q:"`tanθ + cotθ` is equal to:",
   o:["`1`","secθ·cosecθ","sec²θ + cosec²θ","`2`"],
   a:1,
   why:"**tanθ + cotθ = sinθ/cosθ + cosθ/sinθ = (sin²θ + cos²θ)/(sinθcosθ) = 1/(sinθcosθ) = secθ·cosecθ.** Option A is the value of the *product* tanθ·cotθ, and confusing the sum with the product is the standard error. Option D is the smallest value the sum can take, not the sum itself.",
   tag:"tanθ + cotθ"},

  {q:"If `tanθ + cotθ = 2`, then `tan²θ + cot²θ` is:",
   o:["`4`","`6`","`1`","`2`"],
   a:3,
   why:"**tan²θ + cot²θ = (tanθ + cotθ)² − 2tanθcotθ = (tanθ + cotθ)² − 2**, because tanθcotθ = 1. So the value is 2² − 2 = `2`. Option A is the square with the correction term forgotten — the commonest tick here. The condition itself forces tanθ = 1, so θ = `45°`, where tan²θ + cot²θ is plainly 1 + 1 = `2`.",
   tag:"tan²θ + cot²θ"},

  {q:"If `sinθ + cosecθ = 2`, then `sin⁵θ + cosec⁵θ` is:",
   o:["`32`","`10`","`2`","`64`"],
   a:2,
   why:"**x + 1/x = 2 only when x = 1**, so sinθ + cosecθ = 2 forces sinθ = `1` and cosecθ = `1`, which makes **sinⁿθ + cosecⁿθ = 2 for every n** — here `2`. Option A is 2⁵, got by raising the given value to the fifth power, and it is the one the question is built to catch: the sum of two fifth powers is not the fifth power of the sum. The same family: tanθ + cotθ = 2 gives tanⁿθ + cotⁿθ = 2.",
   tag:"sinⁿθ + cosecⁿθ"},

  {q:"`sec²θ + cosec²θ` is equal to:",
   o:["sec²θ·cosec²θ","`1`","tan²θ + cot²θ","sec²θ − cosec²θ"],
   a:0,
   why:"**sec²θ + cosec²θ = 1/cos²θ + 1/sin²θ = (sin²θ + cos²θ)/(sin²θcos²θ) = 1/(sin²θcos²θ) = sec²θ·cosec²θ** — the one identity in the chapter where a sum equals a product. Option C is short by exactly 2, since **tan²θ + cot²θ = sec²θ + cosec²θ − 2**, and it is the tempting answer because the two expressions look interchangeable. Option B comes from misremembering sec²θ − tan²θ = 1.",
   tag:"sec²θ + cosec²θ"},

  {q:"`tan²θ − sin²θ` is equal to:",
   o:["tan²θsin²θ","sin²θcos²θ","sec²θ − 1","tan²θ + sin²θ"],
   a:0,
   why:"**tan²θ − sin²θ = sin²θ/cos²θ − sin²θ = sin²θ(1 − cos²θ)/cos²θ = sin²θ·sin²θ/cos²θ = tan²θsin²θ** — a difference that turns into a product. Option C is the value of tan²θ alone, from **sec²θ − 1 = tan²θ**, so it is the answer with the sin²θ never subtracted. The companion result, asked just as often, is **cot²θ − cos²θ = cot²θcos²θ**.",
   tag:"tan²θ − sin²θ"},

  {q:"`(1 + cosθ)/(1 − cosθ)` is equal to:",
   o:["(cosecθ − cotθ)²","(secθ + tanθ)²","(cosecθ + cotθ)²","cosec²θ + cot²θ"],
   a:2,
   why:"Multiply top and bottom by (1 + cosθ): the denominator becomes **1 − cos²θ = sin²θ**, leaving (1 + cosθ)²/sin²θ = [(1 + cosθ)/sinθ]² = **(cosecθ + cotθ)²**. Option A is its reciprocal, the value of (1 − cosθ)/(1 + cosθ), and the sign inside the bracket is the whole question. Option B belongs to the sine version: **(1 + sinθ)/(1 − sinθ) = (secθ + tanθ)²**.",
   tag:"(1 + cosθ)/(1 − cosθ)"},

  {q:"`√((1 − sinθ)/(1 + sinθ))` is equal to:",
   o:["secθ + tanθ","cosecθ − cotθ","1 − sinθ","secθ − tanθ"],
   a:3,
   why:"Multiply top and bottom by (1 − sinθ): **(1 − sinθ)/(1 + sinθ) = (1 − sinθ)²/(1 − sin²θ) = (1 − sinθ)²/cos²θ**, whose square root is (1 − sinθ)/cosθ = **secθ − tanθ**. Option A is the reciprocal, the value of √((1 + sinθ)/(1 − sinθ)), and it is the one ticked when the two brackets are read the wrong way round. Option B is the answer to the cosine version, √((1 − cosθ)/(1 + cosθ)) = cosecθ − cotθ.",
   tag:"secθ − tanθ"},

  {q:"`sinθ` written in terms of `tanθ` is:",
   o:["tanθ/√(1 + tan²θ)","1/√(1 + tan²θ)","√(1 + tan²θ)/tanθ","tanθ/(1 + tan²θ)"],
   a:0,
   why:"From **1 + tan²θ = sec²θ** the hypotenuse is √(1 + tan²θ) against an opposite side of tanθ and an adjacent side of 1, so **sinθ = tanθ/√(1 + tan²θ)**. Option B is **cosθ = 1/√(1 + tan²θ)**, the same triangle read off the wrong side, and it is the standard confusion. Option D forgets the square root, which would make sinθ larger than 1 for tanθ between 0 and 1.",
   tag:"sinθ from tanθ"},

  {q:"If `x = a·secθ` and `y = b·tanθ`, then eliminating θ gives:",
   o:["x²/a² + y²/b² = 1","x²/a² − y²/b² = 1","y²/b² − x²/a² = 1","x²/a² − y²/b² = 0"],
   a:1,
   why:"secθ = x/a and tanθ = y/b, and the identity joining them is **sec²θ − tan²θ = 1**, so **x²/a² − y²/b² = 1**. Option A is what the pair x = a·sinθ, y = b·cosθ would give, through sin²θ + cos²θ = 1, and it is the tempting one because that is the identity most often reached for. Option C has the subtraction the wrong way round, which would need tan²θ − sec²θ = 1.",
   tag:"Eliminating θ"},

  {q:"Which of these is **not** a correct trigonometric identity?",
   o:["sin²θ + cos²θ = 1","sec²θ − tan²θ = 1","sinθ + cosθ = 1","cosec²θ − cot²θ = 1"],
   a:2,
   why:"**sin²θ + cos²θ = 1** is the identity; **sinθ + cosθ** is not `1`, because squaring it gives **1 + 2sinθcosθ**, which exceeds 1 for every angle strictly between `0°` and `90°`. At `45°` the sum is `√2` and at `30°` it is (1 + √3)/2, neither of them 1. The other three options are correct as written and are the three Pythagorean identities in their subtracted form.",
   tag:"The big slip"}
 ],
  note:"Every question above is answered by one line from the sheet. If a question needed more than about three lines of writing, the identity it rests on is the one to go back to."}
]
},

/* ============================================================ 3 — Conditional identities and special angles (22 questions) */
{
id:"trig-conditional", n:"Conditional identities and special angles", hy:1,
w:"The compound, double and triple angle formulas, the surd values they give for 15°, 75° and 22½°, the products and sums SSC sets, and the rule for reducing an angle above 90°.",
quick:[
 "**sin(A ± B) = sinA·cosB ± cosA·sinB** and **cos(A ± B) = cosA·cosB ∓ sinA·sinB**. Sine keeps the sign of the bracket; cosine reverses it.",
 "**tan(A ± B) = (tanA ± tanB)/(1 ∓ tanA·tanB)**. The sign below is always the opposite of the sign above.",
 "**sin15° = (√3 − 1)/(2√2)**, `cos15° = (√3 + 1)/(2√2)`, `tan15° = 2 − √3`, `tan75° = 2 + √3`, `tan22½° = √2 − 1`.",
 "**sin2θ = 2sinθcosθ** and **cos2θ = 1 − 2sin²θ = 2cos²θ − 1 = cos²θ − sin²θ**. Read backwards: `1 − cos2θ = 2sin²θ` and `1 + cos2θ = 2cos²θ`.",
 "**sin3θ = 3sinθ − 4sin³θ** and **cos3θ = 4cos³θ − 3cosθ**. The cube comes last for sine and first for cosine.",
 "**tanA·tan(60° − A)·tan(60° + A) = tan3A**, so `tan10°·tan50°·tan70° = tan30° = 1/√3`.",
 "**sin(180° − θ) = sinθ**, `cos(180° − θ) = −cosθ`, `tan(180° − θ) = −tanθ` — so `sin120° = √3/2`, `cos135° = −1/√2`, `tan150° = −1/√3`."
],
blocks:[
 {h:"THE SHEET — every formula this topic tests",
  cols:["Asked as","The formula","What it is used for"],
  rows:[
  ["**sin(A + B)**","sinA·cosB + cosA·sinB","The plus inside stays a plus outside"],
  ["**sin(A − B)**","sinA·cosB − cosA·sinB","Gives sin15° from 45° − 30°"],
  ["**cos(A + B)**","cosA·cosB − sinA·sinB","Like paired with like, and the sign reverses"],
  ["**cos(A − B)**","cosA·cosB + sinA·sinB","Gives cos15° from 45° − 30°"],
  ["**tan(A + B)**","(tanA + tanB)/(1 − tanA·tanB)","Plus above, minus below"],
  ["**tan(A − B)**","(tanA − tanB)/(1 + tanA·tanB)","Gives tan15° = 2 − √3"],
  ["**sin15°, cos15°**","(√3 − 1)/(2√2) and (√3 + 1)/(2√2)","Also written (√6 − √2)/4 and (√6 + √2)/4; sin75° = cos15° and cos75° = sin15°"],
  ["**tan15°, tan75°**","2 − √3 and 2 + √3","Reciprocals — their product is 1"],
  ["**tan22½°**","√2 − 1","And cot22½° = tan67½° = √2 + 1"],
  ["**sin2θ**","2sinθcosθ = 2tanθ/(1 + tan²θ)","So sinθcosθ = ½sin2θ, which is never more than ½"],
  ["**cos2θ**","1 − 2sin²θ = 2cos²θ − 1 = cos²θ − sin²θ","Three faces of one formula — use the one matching the ratio you were given"],
  ["**cos2θ from tanθ alone**","(1 − tan²θ)/(1 + tan²θ)","Used when the question gives only tanθ"],
  ["**tan2θ**","2tanθ/(1 − tan²θ)","It is tan(A + B) with A = B = θ"],
  ["**1 − cos2θ**","2sin²θ","Minus goes with sine"],
  ["**1 + cos2θ**","2cos²θ","Plus goes with cosine"],
  ["**sin3θ**","3sinθ − 4sin³θ","3sin20° − 4sin³20° = sin60° = √3/2"],
  ["**cos3θ**","4cos³θ − 3cosθ","The cube comes first for cosine"],
  ["**tan3θ**","(3tanθ − tan³θ)/(1 − 3tan²θ)","Both signs minus, unlike tan(A + B)"],
  ["**tanA·tan(60° − A)·tan(60° + A)**","tan3A","And cotA·cot(60° − A)·cot(60° + A) = cot3A"],
  ["**tan1°·tan2°·…·tan89°**","1","Pairs off as tanθ·tan(90° − θ) = 1, with tan45° = 1 left in the middle"],
  ["**sin²1° + sin²2° + … + sin²89°**","44½","44 pairs each worth 1, plus sin²45° = ½; the cosine version run to 90° is also 44½, since cos²90° = 0"],
  ["**A + B + C = 180°**","tanA + tanB + tanC = tanA·tanB·tanC","In any triangle the sum of the tangents is their product"],
  ["**A + B + C = 180°, halved**","tan(A/2)tan(B/2) + tan(B/2)tan(C/2) + tan(C/2)tan(A/2) = 1","The half-angle companion, and the one offered as a decoy for the line above"],
  ["**sin(180° − θ)**","sinθ","sin120° = sin60° = √3/2"],
  ["**cos(180° − θ)**","−cosθ","cos135° = −cos45° = −1/√2, and cos120° = −½"],
  ["**tan(180° − θ)**","−tanθ","tan150° = −tan30° = −1/√3"]
 ]},

 {careful:"**sin(A ± B) = sinA·cosB ± cosA·sinB** keeps the sign of the bracket. **cos(A ± B) = cosA·cosB ∓ sinA·sinB** reverses it. **tan(A ± B) = (tanA ± tanB)/(1 ∓ tanA·tanB)** carries the bracket's sign above and the opposite sign below. Those three lines are most of the marks in this topic, and the flip belongs to cosine and to the denominator of tangent — nowhere else."},

 {careful:"**cos2θ = 1 − 2sin²θ** and **cos2θ = 2cos²θ − 1** — the `1` comes first with sine and last with cosine. Writing `2sin²θ − 1` or `1 − 2cos²θ` instead gives −cos2θ, and both wrong versions are always among the options. The check takes two seconds: at θ = 0°, cos0° = `1`, and 1 − 0 = 1 and 2 − 1 = 1, while the wrong pair give −1."},

 {careful:"**sin3θ = 3sinθ − 4sin³θ** but **cos3θ = 4cos³θ − 3cosθ**. The cube is the second term for sine and the first for cosine, and swapping them turns the answer into its own negative. In **tan3θ = (3tanθ − tan³θ)/(1 − 3tan²θ)** both signs are minus, which is the one place the tangent formula does *not* behave like tan(A + B)."},

 {h:"QUESTIONS — the formulas, one at a time",
  mcq:[
  {q:"`sin(A + B)` expands to:",
   o:["sinA·cosB + cosA·sinB","sinA·cosB − cosA·sinB","cosA·cosB − sinA·sinB","sinA·sinB + cosA·cosB"],
   a:0,
   why:"**sin(A + B) = sinA·cosB + cosA·sinB.** Sine keeps the sign of the bracket, and every term pairs one sine with one cosine. Option B is **sin(A − B)**. Options C and D are the two cosine formulas — **cos(A + B) = cosA·cosB − sinA·sinB** and **cos(A − B) = cosA·cosB + sinA·sinB** — where like is paired with like and the sign does reverse.",
   tag:"sin(A + B)"},

  {q:"`cos(A − B)` expands to:",
   o:["cosA·cosB − sinA·sinB","cosA·cosB + sinA·sinB","cosA·sinB + sinA·cosB","cosA·cosB + 2sinA·sinB"],
   a:1,
   why:"**cos(A − B) = cosA·cosB + sinA·sinB.** Cosine reverses the sign: a minus inside the bracket becomes a plus in the expansion. Option A is **cos(A + B)**, and ticking it is the entire trap of this formula. Option C is sin(A + B), which mixes sine with cosine instead of pairing like with like.",
   tag:"cos(A − B)"},

  {q:"`tan(A − B)` equals:",
   o:["(tanA + tanB)/(1 − tanA·tanB)","(tanA − tanB)/(1 − tanA·tanB)","(tanA − tanB)/(1 + tanA·tanB)","(tanA + tanB)/(1 + tanA·tanB)"],
   a:2,
   why:"**tan(A − B) = (tanA − tanB)/(1 + tanA·tanB).** Written once for both cases it is **tan(A ± B) = (tanA ± tanB)/(1 ∓ tanA·tanB)**: the numerator carries the bracket's sign and the denominator carries the opposite one. Option A is tan(A + B); option B is the commonest written slip, keeping the minus in both places.",
   tag:"tan(A − B)"},

  {q:"`sin15°` is equal to:",
   o:["(√3 + 1)/(2√2)","(√6 − √2)/2","(√3 − 1)/2","(√3 − 1)/(2√2)"],
   a:3,
   why:"**sin15° = sin(45° − 30°) = sin45°·cos30° − cos45°·sin30°** = (1/√2)(√3/2) − (1/√2)(1/2) = `(√3 − 1)/(2√2)`, the same number as (√6 − √2)/4. Option A is `cos15° = (√3 + 1)/(2√2)` — the same two surds joined by a plus, and the option most often ticked. Option B is the right value rationalised with the 2 in the denominator dropped, so it is twice too large.",
   tag:"sin15°"},

  {q:"`tan15°` is equal to:",
   o:["2 + √3","2 − √3","√3 − 1","(2 − √3)/2"],
   a:1,
   why:"**tan15° = tan(45° − 30°) = (1 − tan30°)/(1 + tan30°)** = (√3 − 1)/(√3 + 1), and rationalising gives (√3 − 1)²/2 = (4 − 2√3)/2 = `2 − √3`. Option A is `tan75° = 2 + √3`; the two are reciprocals, because tan15°·tan75° = 1 and (2 − √3)(2 + √3) = 4 − 3 = 1. Option C is the un-rationalised numerator left standing on its own.",
   tag:"tan15°"},

  {q:"`tan22½°` is equal to:",
   o:["√2 − 1","√2 + 1","2 − √2","(√2 − 1)/2"],
   a:0,
   why:"Put 2θ = 45° in **tan2θ = 2tanθ/(1 − tan²θ)**: writing `t` for tan22½°, 1 = 2t/(1 − t²), so t² + 2t − 1 = 0 and t = `√2 − 1`, taking the positive root because the angle is acute. Option B is `cot22½° = tan67½° = √2 + 1`, and the product of the two is 1 — reaching for the reciprocal is the trap here.",
   tag:"tan22½°"},

  {q:"`sin2θ` is equal to:",
   o:["sin²θ − cos²θ","2cos²θ − 1","sinθ·cosθ","2sinθ·cosθ"],
   a:3,
   why:"**sin2θ = 2sinθcosθ.** Option C is the same product with the 2 dropped, which is `½sin2θ` — and that factor is exactly why sinθcosθ can never exceed ½. Option B is **cos2θ** written in cosine alone, and option A is −cos2θ, since **cos2θ = cos²θ − sin²θ**.",
   tag:"sin2θ"},

  {q:"`cos2θ`, written in `sinθ` alone, is:",
   o:["2sin²θ − 1","1 − sin²θ","1 − 2sin²θ","2 − sin²θ"],
   a:2,
   why:"**cos2θ = cos²θ − sin²θ = 1 − 2sin²θ**, replacing cos²θ by 1 − sin²θ. In cosine alone the same identity reads **cos2θ = 2cos²θ − 1**, and option A is that version with sin written where cos belongs — it equals −cos2θ. Option B is `cos²θ`, which is not cos2θ at all.",
   tag:"cos2θ"},

  {q:"`1 + cos2θ` is equal to:",
   o:["2cos²θ","2sin²θ","cos²θ","2cosθ"],
   a:0,
   why:"**1 + cos2θ = 2cos²θ** and **1 − cos2θ = 2sin²θ** — plus goes with cosine, minus with sine. The first follows from cos2θ = 2cos²θ − 1 and the second from cos2θ = 1 − 2sin²θ. Option B is the companion identity with the sign swapped, which is the one mistake this pair invites; option D drops the square.",
   tag:"1 + cos2θ"},

  {q:"`tan2θ` equals:",
   o:["2tanθ/(1 + tan²θ)","2tanθ/(1 − tan²θ)","(1 − tan²θ)/(2tanθ)","(1 − tan²θ)/(1 + tan²θ)"],
   a:1,
   why:"**tan2θ = 2tanθ/(1 − tan²θ)** — it is tan(A + B) with both angles equal to θ. Option A is **sin2θ = 2tanθ/(1 + tan²θ)** and option D is **cos2θ = (1 − tan²θ)/(1 + tan²θ)**; all three are built from the same two pieces, and the denominator is the only thing that tells them apart. Option C is the correct fraction turned upside down.",
   tag:"tan2θ"},

  {q:"If `tanθ = 1/√3`, then `cos2θ` is:",
   o:["√3/2","2/3","√3","1/2"],
   a:3,
   why:"**cos2θ = (1 − tan²θ)/(1 + tan²θ)** = (1 − ⅓)/(1 + ⅓) = (2/3) ÷ (4/3) = `1/2`. It checks out directly: tanθ = 1/√3 means θ = 30°, and cos60° = ½. Option A is `cosθ = cos30° = √3/2`, the angle the question did not ask about; option B is the numerator left undivided; option C is **tan2θ = 2tanθ/(1 − tan²θ) = √3**, which is the wrong ratio of the right angle.",
   tag:"cos2θ from tanθ"},

  {q:"`sin3θ` equals:",
   o:["4sin³θ − 3sinθ","4cos³θ − 3cosθ","3sinθ − 4sin³θ","3sin³θ − 4sinθ"],
   a:2,
   why:"**sin3θ = 3sinθ − 4sin³θ.** The sine formula opens with the plain ratio and subtracts the cube; the cosine formula is the other way round, **cos3θ = 4cos³θ − 3cosθ**. Option A is the two terms swapped, which is −sin3θ, and option B is cos3θ itself — the pair most often confused. A check at θ = 90°: 3(1) − 4(1) = `−1` = sin270°.",
   tag:"sin3θ"},

  {q:"`cos3θ` equals:",
   o:["4cos³θ − 3cosθ","3cosθ − 4cos³θ","4cos³θ + 3cosθ","3cos³θ − 4cosθ"],
   a:0,
   why:"**cos3θ = 4cos³θ − 3cosθ.** The cube comes first for cosine and last for sine, where **sin3θ = 3sinθ − 4sin³θ**. Option B is the sine pattern written out with cosines, and it equals −cos3θ. The check: at θ = 0° the right formula gives 4 − 3 = `1` = cos0°, while option B gives −1.",
   tag:"cos3θ"},

  {q:"The value of `3sin20° − 4sin³20°` is:",
   o:["1/2","√3","1/√2","√3/2"],
   a:3,
   why:"**sin3θ = 3sinθ − 4sin³θ**, so with θ = 20° the whole expression is `sin60° = √3/2`. The trap is to start computing sin20° instead of recognising the identity. Option A is cos60° and option B is tan60° — the right angle with the wrong ratio — and option C is sin45°, which is what reading the expression as sin(3 × 15°) gives.",
   tag:"sin3θ"},

  {q:"`tan3θ` equals:",
   o:["(3tanθ + tan³θ)/(1 + 3tan²θ)","(3tanθ − tan³θ)/(1 − 3tan²θ)","(3tanθ − tan³θ)/(1 + 3tan²θ)","3tanθ/(1 − tan³θ)"],
   a:1,
   why:"**tan3θ = (3tanθ − tan³θ)/(1 − 3tan²θ).** Both signs are minus, and the 3 sits with the plain term above and with the squared term below. Option C flips the lower sign — the habit carried over from **tan(A + B) = (tanA + tanB)/(1 − tanA·tanB)**, where the two signs genuinely are opposite. Option D loses the cube above and the square below.",
   tag:"tan3θ"},

  {q:"`tan10°·tan50°·tan70°` is equal to:",
   o:["√3","1","1/√3","1/3"],
   a:2,
   why:"**tanA·tan(60° − A)·tan(60° + A) = tan3A.** With A = 10° the three angles come out as 10°, 50° and 70° exactly, so the product is `tan30° = 1/√3`. Option A is tan60°, which is what reading `3A` as 60° rather than 30° gives; option B belongs to the different product tan10°·tan80°, where the angles are complementary and tanθ·tan(90° − θ) = 1; option D is the right answer squared.",
   tag:"tan3A product"},

  {q:"The value of `tan1°·tan2°·tan3°·…·tan89°` is:",
   o:["0","1","44½","89"],
   a:1,
   why:"Pair the factors from the two ends: **tan(90° − θ) = cotθ, so tanθ·tan(90° − θ) = 1.** The 89 factors give 44 such pairs — (tan1°·tan89°), (tan2°·tan88°) up to (tan44°·tan46°) — each worth 1, and the middle factor tan45° is itself `1`, so the product is **1**. Option C is the answer to the *sum* `sin²1° + sin²2° + … + sin²89° = 44½`, the question this one is most often confused with; option D is merely the number of factors, and nothing here is zero because no factor is zero.",
   tag:"tan product"},

  {q:"`sin²1° + sin²2° + sin²3° + … + sin²89°` equals:",
   o:["44½","45","89","44"],
   a:0,
   why:"Pair the ends using **sin(90° − θ) = cosθ**, so **sin²θ + sin²(90° − θ) = sin²θ + cos²θ = 1**. The terms pair as (1°, 89°), (2°, 88°) and so on up to (44°, 46°) — 44 pairs worth 44 — and sin²45° = ½ is left unpaired in the middle, giving `44½`. Option D forgets that middle term and option B counts it as a whole 1. Run the same count on `cos²1° + cos²2° + … + cos²90°` and the answer is also 44½, because cos²90° = 0 adds nothing.",
   tag:"sin² sum"},

  {q:"If `A + B + C = 180°`, then `tanA + tanB + tanC` equals:",
   o:["0","1","tanA·tanB·tanC","tanA·tanB + tanB·tanC + tanC·tanA"],
   a:2,
   why:"In any triangle **tanA + tanB + tanC = tanA·tanB·tanC** — the sum of the three tangents equals their product, and it holds only because the angles add to 180°. Test it on the equilateral triangle: each tangent is √3, so the sum is 3√3 and the product is √3·√3·√3 = 3√3. Option D is the half-angle companion **tan(A/2)tan(B/2) + tan(B/2)tan(C/2) + tan(C/2)tan(A/2) = 1**, which is the identity most often put in this one's place.",
   tag:"Triangle, tan"},

  {q:"`sin120°` is equal to:",
   o:["−√3/2","1/2","−1/2","√3/2"],
   a:3,
   why:"**sin(180° − θ) = sinθ**, so sin120° = sin(180° − 60°) = `sin60° = √3/2`, and it stays positive. Only cosine and tangent change sign under this rule: **cos(180° − θ) = −cosθ**, so cos120° = −½, and **tan(180° − θ) = −tanθ**. Option A is that sign rule applied to the wrong ratio, and option C is cos120°.",
   tag:"180° − θ"},

  {q:"`tan150°` is equal to:",
   o:["−1/√3","1/√3","−√3","√3"],
   a:0,
   why:"**tan(180° − θ) = −tanθ**, so tan150° = −tan30° = `−1/√3`. Option B is the same value with the minus dropped, which is the commonest single mistake in reducing an obtuse angle. Option C is −tan60°, the value of tan120°. By the same rule cos135° = −cos45° = −1/√2, while sin135° = +1/√2.",
   tag:"180° − θ"},

  {q:"The value of `2sin15°cos15°` is:",
   o:["√3/2","1/2","1/4","(√3 − 1)/2"],
   a:1,
   why:"**sin2θ = 2sinθcosθ**, so 2sin15°cos15° = `sin30° = ½`. Multiplying the surds out gives the same thing four times slower: 2 × (√3 − 1)/(2√2) × (√3 + 1)/(2√2) = 2 × (3 − 1)/8 = ½. Option A is sin60°, which is what doubling twice gives; option C is sin15°cos15° with the 2 left off, which is ¼.",
   tag:"sin2θ"}
 ],
  note:"Every question above is answered by one row of the sheet. If a question needed the value of sin20° or of sin15° to be worked out, the identity it was testing was missed."}
]
},

/* ============================================================ 4 — Maximum and minimum of a trigonometric expression (22 questions) */
{
id:"trig-maxmin", n:"Maximum and minimum of a trigonometric expression", hy:1,
w:"The handful of expressions SSC asks for the greatest or least value of, and the one rule that decides which of them is a root and which is just the bigger coefficient.",
quick:[
 "**a·sinθ + b·cosθ runs from −√(a² + b²) to √(a² + b²)**, because it can be written as √(a² + b²)sin(θ + φ). So `3sinθ + 4cosθ` lies between `−5` and `5`.",
 "**a·sin²θ + b·cos²θ has maximum the larger of a and b, and minimum the smaller.** It is a weighted average of the two, so the square root never comes into it — that is the one confusion worth the most marks here.",
 "**sinθ·cosθ = ½sin2θ**, so its greatest value is `½`, reached at `θ = 45°`, and never `1`.",
 "**sec²θ + cosec²θ ≥ 4** and **tan²θ + cot²θ ≥ 2**; more generally **a·cosec²θ + b·sec²θ ≥ (√a + √b)²** while **a·tan²θ + b·cot²θ ≥ 2√(ab)**. The two general forms look alike and are not.",
 "**sin⁴θ + cos⁴θ = 1 − ½sin²2θ**, so it runs from `½` to `1`; **sin⁶θ + cos⁶θ = 1 − (3/4)sin²2θ**, so it runs from `¼` to `1`. Both have maximum `1`.",
 "**sinθ + cosθ** lies between `−√2` and `√2` — the case a = b = 1 of the first line.",
 "For anything of the `sin²θ + cos⁴θ` kind, put `s = sin²θ` and treat it as a quadratic in `s` on `[0, 1]`: the least value is `¾` and the greatest `1`."
],
blocks:[
 {h:"THE SHEET — every expression SSC asks the range of",
  cols:["Expression","Maximum","Minimum","How it is seen"],
  rows:[
  ["**a·sinθ + b·cosθ**","√(a² + b²)","−√(a² + b²)","It equals √(a² + b²)sin(θ + φ) for a fixed φ, and a sine runs from −1 to 1"],
  ["**3sinθ + 4cosθ**","`5`","`−5`","√(9 + 16) = 5 — the instance SSC sets most often"],
  ["**sinθ + cosθ**","`√2`","`−√2`","a = b = 1, so √(1 + 1) = √2"],
  ["**a·sinθ + b·cosθ + c**","c + √(a² + b²)","c − √(a² + b²)","A constant only shifts the whole range; it does not go under the root"],
  ["**a·sin²θ + b·cos²θ**","the larger of a and b","the smaller of a and b","b + (a − b)sin²θ, and sin²θ runs from 0 to 1 — a weighted average"],
  ["**sinθ·cosθ**","`½`","`−½`","½sin2θ, and the ½ is reached at θ = 45°"],
  ["**k·sinθcosθ**","k/2","−k/2","(k/2)sin2θ, for k positive"],
  ["**sin⁴θ + cos⁴θ**","`1`","`½`","1 − 2sin²θcos²θ = 1 − ½sin²2θ; least at 45°, greatest at 0° and 90°"],
  ["**sin⁶θ + cos⁶θ**","`1`","`¼`","1 − 3sin²θcos²θ = 1 − (3/4)sin²2θ; least at 45°"],
  ["**sin²θ + cos⁴θ**","`1`","`¾`","Put c = cos²θ: it is c² − c + 1, least at c = ½"],
  ["**sec²θ + cosec²θ**","unbounded","`4`","1/(sin²θcos²θ) = 4/sin²2θ, least when sin2θ = 1, at θ = 45°"],
  ["**tan²θ + cot²θ**","unbounded","`2`","The product of the two terms is 1, so AM-GM gives 2; tanθ + cotθ = 2/sin2θ has minimum 2 the same way"],
  ["**a·cosec²θ + b·sec²θ**","unbounded","(√a + √b)²","`9sec²θ + 4cosec²θ` gives (3 + 2)² = `25`"],
  ["**a·tan²θ + b·cot²θ**","unbounded","2√(ab)","The product is ab, so AM-GM gives 2√(ab): `9tan²θ + 4cot²θ` gives `12`"],
  ["**sinθ + cosecθ** for `0° < θ ≤ 90°`","unbounded","`2`","x + 1/x falls as x rises to 1, so the least value is at sinθ = 1; `cos²θ + sec²θ` has minimum `2` at θ = 0° for the same reason"],
  ["**(sinθ + cosecθ)² + (cosθ + secθ)²**","unbounded","`9`","It expands to 5 + sec²θ + cosec²θ, and sec²θ + cosec²θ is at least 4"],
  ["**5 + 3cosθ**","`8`","`2`","cosθ runs from −1 to 1, so the expression runs from 5 − 3 to 5 + 3"],
  ["**1/(2 + sinθ)**","`1`","`1/3`","The denominator runs from 1 to 3, and dividing turns the range over"]
 ],
  note:"\"Unbounded\" means the expression grows without limit — secθ, cosecθ, tanθ and cotθ all run off to infinity as the angle approaches an end of its range, so those expressions have a least value and no greatest one."},

 {careful:"**The maximum of sinθ·cosθ is `½`, not `1`.** Each factor reaches `1`, but not at the same angle: where sinθ = 1 the cosine is `0`. Write it as **½sin2θ** and the answer is forced — the greatest value of sin2θ is `1`, so the product is at most `½`, at θ = `45°`. The same reasoning gives `¼` for sin²θcos²θ."},

 {careful:"**√(a² + b²) belongs to a·sinθ + b·cosθ and to nothing else here.** For **a·sin²θ + b·cos²θ** the answer is simply the larger coefficient, because the expression is b + (a − b)sin²θ — a weighted average of a and b, which can never leave the gap between them. So `4sin²θ + 5cos²θ` has maximum `5`, not `√41` and not `9`."},

 {careful:"The two general minima are close enough to be swapped, and they are different: **a·cosec²θ + b·sec²θ has minimum (√a + √b)²**, while **a·tan²θ + b·cot²θ has minimum 2√(ab)**. For a = 4 and b = 9 the first gives `25` and the second `12`. The reason is that cosec²θ and sec²θ cannot both be small at once, whereas tan²θ and cot²θ have a fixed product of `1`."},

 {h:"QUESTIONS — the greatest and least values",
  mcq:[
  {q:"The maximum value of `3sinθ + 4cosθ` is:",
   o:["7","5","25","12"],
   a:1,
   why:"**The maximum of a·sinθ + b·cosθ is √(a² + b²)**, because the expression equals √(a² + b²)sin(θ + φ). Here √(3² + 4²) = √25 = `5`. Option A, `7`, is a + b — the value you would get if sinθ and cosθ could both be `1` at the same angle, which they cannot; option C is a² + b² left un-rooted.",
   tag:"a·sinθ + b·cosθ"},

  {q:"As θ varies, `a·sinθ + b·cosθ` takes every value from:",
   o:["−(a + b) to (a + b)","−(a² + b²) to (a² + b²)","−√(a² + b²) to √(a² + b²)","`0` to √(a² + b²)"],
   a:2,
   why:"**a·sinθ + b·cosθ = √(a² + b²)sin(θ + φ)**, and a sine runs over the whole of −1 to 1, so the expression runs from **−√(a² + b²)** to **√(a² + b²)**. Option D is the trap for anyone who remembers the maximum and forgets that the minimum is its negative, not zero. Option A is the sum of the coefficients, which is never the answer unless one of them is `0`.",
   tag:"The range"},

  {q:"The minimum value of `5sinθ − 12cosθ` is:",
   o:["−7","−17","−1","−13"],
   a:3,
   why:"**The minimum of a·sinθ + b·cosθ is −√(a² + b²)**, and the sign of b makes no difference because it is squared: √(5² + 12²) = √169 = 13, so the least value is `−13`. Option A, `−7`, is 5 − 12 — the coefficients subtracted rather than combined under the root — and option B is −(5 + 12).",
   tag:"Minimum"},

  {q:"The greatest value of `sinθ + cosθ` is:",
   o:["√2","2","1","½"],
   a:0,
   why:"This is **a·sinθ + b·cosθ with a = b = 1**, so the maximum is **√(1² + 1²) = √2**, reached at θ = `45°` where both ratios equal `1/√2`. Option B, `2`, is the standard wrong answer — it assumes both terms hit `1` together, but at θ = `0°` the sine is `0` and at `90°` the cosine is. The least value is `−√2`.",
   tag:"sinθ + cosθ"},

  {q:"The maximum value of `12sinθ − 5cosθ + 4` is:",
   o:["21","13","17","9"],
   a:2,
   why:"**A constant added to a·sinθ + b·cosθ shifts the range but stays outside the root: the maximum is c + √(a² + b²).** Here √(144 + 25) = 13, so the greatest value is 13 + 4 = `17`. Option B is the answer with the `+ 4` forgotten, and option A, `21`, is 12 + 5 + 4 — the coefficients added one to another instead of being combined under the root.",
   tag:"With a constant"},

  {q:"If a is greater than b, the maximum value of `a·sin²θ + b·cos²θ` is:",
   o:["a","b","a + b","√(a² + b²)"],
   a:0,
   why:"**a·sin²θ + b·cos²θ = b + (a − b)sin²θ**, and sin²θ runs from `0` to `1`, so the expression runs from b to a: the maximum is **a** and the minimum **b**. Option D is the rule for `a·sinθ + b·cosθ`, where the ratios are to the first power, and it is the commonest substitution made here. Option C would need both squares to be `1` at once, and they always add to `1`.",
   tag:"a·sin²θ + b·cos²θ"},

  {q:"The maximum value of `4sin²θ + 5cos²θ` is:",
   o:["9","4","√41","5"],
   a:3,
   why:"**For a·sin²θ + b·cos²θ the maximum is the larger coefficient**, because the expression is 4 + (5 − 4)cos²θ = 4 + cos²θ, which runs from `4` to `5`. So the greatest value is `5`, at θ = `0°`. Option C, `√41` = √(16 + 25), applies only to `4sinθ + 5cosθ`, and it is the option most often ticked; option A adds the coefficients.",
   tag:"Larger coefficient"},

  {q:"The minimum value of `7sin²θ + 3cos²θ` is:",
   o:["10","3","7","√58"],
   a:1,
   why:"**For a·sin²θ + b·cos²θ the minimum is the smaller coefficient.** Writing it as 3 + 4sin²θ shows the range at once: from `3` at θ = `0°` to `7` at θ = `90°`. Option C is the maximum, which is the answer to the other half of the question, and option D is √(49 + 9), the rule for the first-power form.",
   tag:"Smaller coefficient"},

  {q:"The maximum value of `sinθ·cosθ` is:",
   o:["1","¼","½","2"],
   a:2,
   why:"**sinθ·cosθ = ½sin2θ**, and the greatest value of sin2θ is `1`, so the product is at most **½**, reached at θ = `45°`. Option A is the trap: each factor does reach `1`, but never at the same angle. Option B, `¼`, is the maximum of `sin²θcos²θ`, which is the square of this answer.",
   tag:"sinθ·cosθ"},

  {q:"The maximum value of `6sinθcosθ` is:",
   o:["3","6","12","1"],
   a:0,
   why:"**k·sinθcosθ = (k/2)sin2θ**, so the maximum is k/2: here 6sinθcosθ = 3sin2θ, whose greatest value is `3`. Option B, `6`, is what comes of treating sinθcosθ as reaching `1`, and option C doubles instead of halving. The least value is `−3`.",
   tag:"k·sinθcosθ"},

  {q:"`sinθ` and `cosθ` each reach a maximum of `1`, yet `sinθ·cosθ` never reaches `1`. The reason is:",
   o:["`sinθ·cosθ` is at most `¼`","`sinθ·cosθ = ½sin2θ`, and sin2θ is at most `1`, so the product is at most `½`","`sinθ` and `cosθ` are never positive at the same angle","the product equals `1` only at θ = `45°`"],
   a:1,
   why:"**sinθ·cosθ = ½sin2θ**, so the product cannot pass `½`, and it reaches that at θ = `45°`, where both ratios are `1/√2`. Option A is the maximum of `sin²θcos²θ` and is the near-miss put here; option D is wrong twice over, since at `45°` the product is `½`, not `1`. Both ratios are positive together throughout `0°` to `90°`, so option C is false as well.",
   tag:"Why not `1`"},

  {q:"The minimum value of `sec²θ + cosec²θ` is:",
   o:["1","2","4","8"],
   a:2,
   why:"**sec²θ + cosec²θ = 1/cos²θ + 1/sin²θ = 1/(sin²θcos²θ) = 4/sin²2θ**, which is least when sin²2θ is largest, that is `1`: the minimum is **4**, at θ = `45°`. Option B is the minimum of `tan²θ + cot²θ`, the expression this one is most often confused with. There is no maximum — as θ nears `0°` the cosecant runs off without limit.",
   tag:"sec²θ + cosec²θ"},

  {q:"The least value of `tan²θ + cot²θ` is:",
   o:["4","2","1","0"],
   a:1,
   why:"**tan²θ·cot²θ = 1**, so by AM-GM the sum is at least 2√1 = **2**, with equality when tan²θ = cot²θ = 1, at θ = `45°`. Option A is the minimum of `sec²θ + cosec²θ`, which is exactly 2 more than this one, since sec²θ + cosec²θ = (1 + tan²θ) + (1 + cot²θ). Option D would need tanθ and cotθ both zero, which is impossible.",
   tag:"tan²θ + cot²θ"},

  {q:"The minimum value of `9sec²θ + 4cosec²θ` is:",
   o:["25","13","12","36"],
   a:0,
   why:"**a·cosec²θ + b·sec²θ has minimum (√a + √b)²**, so with a = 4 and b = 9 the least value is (√4 + √9)² = (2 + 3)² = `25`. Option B, `13`, is 9 + 4, the two coefficients simply added; option C, `12`, is 2√(ab), which is the rule for `9tan²θ + 4cot²θ` and not for this form. The minimum falls at sin²θ = `2/5`.",
   tag:"(√a + √b)²"},

  {q:"The minimum value of `9tan²θ + 4cot²θ` is:",
   o:["25","13","6","12"],
   a:3,
   why:"**a·tan²θ + b·cot²θ has minimum 2√(ab)**, because tan²θ·cot²θ = 1 makes the product of the two terms the constant ab: here 2√(9 × 4) = 2 × 6 = `12`, at tan²θ = `2/3`. Option A, `25`, is (√9 + √4)² — the rule for `9sec²θ + 4cosec²θ` — and it is the option most often ticked here. Option B adds the coefficients.",
   tag:"2√(ab)"},

  {q:"For `0° < θ ≤ 90°`, the least value of `sinθ + cosecθ` is:",
   o:["1","√2","4","2"],
   a:3,
   why:"**With x = sinθ the expression is x + 1/x, which falls as x rises towards `1`**, so the least value is at sinθ = 1, giving 1 + 1 = `2` at θ = `90°`. Option B, `√2`, is the value at `45°` of a different expression, `sinθ + cosθ`; option A ignores the second term entirely. The same argument gives `2` for `cos²θ + sec²θ`, there at θ = `0°`.",
   tag:"sinθ + cosecθ"},

  {q:"The minimum value of `(sinθ + cosecθ)² + (cosθ + secθ)²` is:",
   o:["5","4","9","13"],
   a:2,
   why:"Expanding, **(sinθ + cosecθ)² + (cosθ + secθ)² = (sin²θ + cos²θ) + 4 + (cosec²θ + sec²θ) = 5 + (sec²θ + cosec²θ)**, since each bracket contributes a cross term of `2`. As **sec²θ + cosec²θ is at least 4**, the least value is 5 + 4 = `9`, at θ = `45°`. Option A is the constant part alone, with the two squared reciprocals forgotten, and option B is the minimum of the reciprocal part alone.",
   tag:"Minimum `9`"},

  {q:"For every θ, `sin⁴θ + cos⁴θ` lies between:",
   o:["`0` and `1`","`½` and `1`","`¼` and `1`","`½` and `2`"],
   a:1,
   why:"**sin⁴θ + cos⁴θ = (sin²θ + cos²θ)² − 2sin²θcos²θ = 1 − ½sin²2θ.** Since sin²2θ runs from `0` to `1`, the expression runs from **½** (at θ = `45°`) to **1** (at `0°` and `90°`). Option C is the range of `sin⁶θ + cos⁶θ`, whose minimum is `¼` — the two are constantly swapped.",
   tag:"sin⁴θ + cos⁴θ"},

  {q:"The minimum value of `sin⁶θ + cos⁶θ` is:",
   o:["½","1/8","0","¼"],
   a:3,
   why:"**sin⁶θ + cos⁶θ = 1 − 3sin²θcos²θ = 1 − (3/4)sin²2θ**, which is least when sin2θ = 1: 1 − 3/4 = `¼`, at θ = `45°`. Option A is the minimum of `sin⁴θ + cos⁴θ` and is the standard confusion; option B, `1/8`, is only one of the two terms at `45°`, since (1/√2)⁶ = 1/8 and there are two of them. The maximum is `1`.",
   tag:"sin⁶θ + cos⁶θ"},

  {q:"The least value of `sin²θ + cos⁴θ` is:",
   o:["¾","½","¼","1"],
   a:0,
   why:"**Put c = cos²θ: the expression becomes (1 − c) + c² = c² − c + 1, a quadratic least at c = ½**, where it is ¼ − ½ + 1 = `¾`. So the minimum is `¾` at θ = `45°`, and the maximum is `1`, at both `0°` and `90°`. Option B, `½`, is the minimum of `sin⁴θ + cos⁴θ`, which is the question one letter away from this one.",
   tag:"sin²θ + cos⁴θ"},

  {q:"As θ varies, `5 + 3cosθ` takes every value from:",
   o:["`−3` to `3`","`5` to `8`","`2` to `8`","`0` to `8`"],
   a:2,
   why:"**cosθ runs from −1 to 1, so 5 + 3cosθ runs from 5 − 3 to 5 + 3**, that is from `2` to `8`. Option B is the trap for anyone who takes the cosine to run only from `0` to `1`; option A is the range of `3cosθ` alone, with the `5` left off. The same reading gives `−√(a² + b²) + c` as the general least value.",
   tag:"Range of 5 + 3cosθ"},

  {q:"As θ varies, `1/(2 + sinθ)` takes every value from:",
   o:["`1/2` to `1`","`1` to `3`","`1/3` to `1/2`","`1/3` to `1`"],
   a:3,
   why:"**The denominator 2 + sinθ runs from 1 to 3, and taking the reciprocal turns the range over**, so the expression runs from `1/3` (where the denominator is largest) to `1` (where it is smallest). Option B is the denominator's own range, left un-inverted — the commonest slip. The greatest value of the fraction goes with the least value of the bottom, which is the point of the question.",
   tag:"1/(2 + sinθ)"}
 ],
  note:"Three rules answer almost every question above: the root √(a² + b²) for the first-power form, the larger or smaller coefficient for the squared form, and the double angle 2θ wherever sinθ and cosθ are multiplied together."}
]
},

/* ============================================================ 5 — Height and distance: the three standard triangles (22 questions) */
{
id:"trig-hd-basics", n:"Height and distance: the three standard triangles", hy:1,
w:"One relation, h = d·tanθ, and the three triangles it makes at 30°, 45° and 60° — with the shadow, the ladder, the kite, the broken pole and the observer who forgets his own height.",
quick:[
 "**h = d·tanθ**, so **d = h·cotθ**. Every question in the topic is this one line, read in one direction or the other, where `h` is the vertical height and `d` the distance along the ground from the foot.",
 "The three triangles, as ground distance against height: **30° ⇒ d = h√3**, **45° ⇒ d = h**, **60° ⇒ d = h/√3**. At the low angle the ground distance is the larger of the two.",
 "**The angle of depression from the top of a tower to a point equals the angle of elevation from that point to the top** — the horizontal at the top and the ground are parallel, so the line of sight cuts them as alternate angles. Both are measured from the **horizontal**, never from the tower.",
 "**Shadow = h·cotθ**, with θ the sun's angle of elevation: the shadow equals the height at `45°`, is `h√3` at `30°` and `h/√3` at `60°`. Given the pole and its shadow, **tanθ = height/shadow**.",
 "A ladder, a taut string, a wire and the broken part of a pole are all the **hypotenuse**: the height is **l·sinθ**, the ground distance **l·cosθ**, and so **l = h·cosecθ**. `l·tanθ` is neither of them.",
 "A pole broken by the wind so that the top touches the ground: standing part **= d·tanθ**, broken part **= d·secθ**, whole pole **= d(tanθ + secθ)**, and standing : broken = **sinθ : 1**.",
 "An observer of his own height `h₀`: the object stands **h₀ + d·tanθ**, because the elevation is taken from his eye. Leaving `h₀` out is the trap the question is built on."
],
blocks:[
 {h:"THE SHEET — the one relation, and the three triangles",
  cols:["Asked as","The relation","What it comes to"],
  rows:[
  ["**Angle of elevation**","The angle between the line of sight and the **horizontal** through the eye, looking up","Never measured from the tower: an angle of θ at the top of the tower means an elevation of 90° − θ at the ground"],
  ["**Angle of depression**","The angle between the line of sight and the **horizontal** through the eye, looking down","Equal to the angle of elevation from that point back up to the eye — alternate angles between two parallel horizontals"],
  ["**Height from the distance**","h = d·tanθ","`d` runs along the ground from the foot of the tower to the point of observation"],
  ["**Distance from the height**","d = h·cotθ = h/tanθ","The same relation read the other way; cot where the careless write tan"],
  ["**Length of the line of sight**","h·cosecθ, or d·secθ","The slant distance eye-to-top. Asked for rarely and offered as an option constantly"],
  ["**The three tangents**","tan30° = 1/√3, tan45° = 1, tan60° = √3","And cot30° = √3, cot45° = 1, cot60° = 1/√3"],
  ["**θ = 30°**","d = h√3, so h = d/√3","The ground distance is √3 times the height"],
  ["**θ = 45°**","d = h","Distance and height are equal, and the triangle is isosceles"],
  ["**θ = 60°**","d = h/√3, so h = d√3","The height is √3 times the ground distance"]
 ]},

 {h:"THE SHEET — the standard set-ups",
  cols:["The set-up","The relation","What to watch"],
  rows:[
  ["**Length of a shadow**","shadow = h·cotθ, θ the sun's elevation","Shadow = `h` at 45°, `h√3` at 30°, `h/√3` at 60°. A long shadow means a low sun"],
  ["**The sun's elevation**","tanθ = height/shadow","Shadow = h ⇒ 45°; shadow = h√3 ⇒ 30°; shadow = h/√3 ⇒ 60°"],
  ["**Height of a pole from its shadow**","h = (shadow)·tanθ","The shadow is the side on the ground, so it is multiplied by tanθ, not divided"],
  ["**Ladder against a wall**","height reached = l·sinθ, foot from the wall = l·cosθ","The ladder is the hypotenuse, so `l·tanθ` is neither of the two"],
  ["**Length of a ladder, wire or string**","l = h·cosecθ = (ground distance)·secθ","A stay wire from the top of a `9` m pole at 30° is `18` m long, because cosec30° = 2"],
  ["**The three sines**","sin30° = ½, sin45° = 1/√2, sin60° = √3/2","Needed whenever the length given is the hypotenuse — a ladder, a string, a wire"],
  ["**Kite or balloon on a taut string**","height = l·sinθ, horizontal distance = l·cosθ","Add the height of the hand holding the string only if the question gives it"],
  ["**Pole broken by the wind**","standing = d·tanθ, broken = d·secθ, whole = d(tanθ + secθ)","`d` is from the foot of the pole to where the top touches the ground; the broken part is the hypotenuse"],
  ["**Broken pole — the ratio**","standing : broken = sinθ : 1","At 30° that is `1 : 2`; at 45° it is `1 : √2`"],
  ["**An observer of his own height h₀**","H = h₀ + d·tanθ","The triangle sits on top of the eye, not on the ground"],
  ["**As the elevation grows from 0° to 90°**","tanθ and sinθ increase; cotθ and cosθ decrease","So the shadow shortens as the sun rises, and a tilted-up ladder reaches higher with its foot closer in"]
 ]},

 {careful:"**At `30°` the ground distance is h√3; at `60°` it is h/√3.** Swapping these two is the single commonest error in the topic, because `30°` feels like the small answer. It is not: the lower the angle, the further away the observer must be. Check it against `45°`, where the distance and the height are equal — at `30°` the distance has to come out *larger* than the height, and at `60°` *smaller*."},

 {careful:"**The angle of depression is measured from the horizontal, not from the tower.** A depression of `30°` from the top means the line of sight is 30° below the horizontal, so the angle at the object on the ground is also `30°` and the distance is `h√3`. Taking the 30° as the angle inside the tower uses the complement, `60°`, and gives `h/√3` — the wrong one of the two standard answers."},

 {careful:"**A ladder, a taut string, a wire and the broken part of a pole are the hypotenuse.** For every one of them the height is **l·sinθ** and the ground distance **l·cosθ**. Using `l·tanθ` treats the given length as the side along the ground, and it is offered as an option in each of these questions."},

 {h:"QUESTIONS — the relation, the three angles and the standard set-ups",
  mcq:[
  {q:"The angle of depression of an object from the top of a tower is the angle between the line of sight and:",
   o:["the tower","the horizontal through the top of the tower","the vertical through the object","the ground at the foot of the tower"],
   a:1,
   why:"**The angle of depression is the angle between the line of sight and the horizontal through the eye, looking down.** Option A measures it from the tower instead, which gives the complement `90° − θ` and so turns a depression of 30° into one of 60° — the standard error. The ground in option D is a different line from the horizontal at the top, even though the two are parallel.",
   tag:"Depression"},

  {q:"If the angle of elevation of the top of a tower from a point on the ground is θ and the horizontal distance of the point from the foot is `d`, the height of the tower is:",
   o:["d·tanθ","d·cotθ","d·sinθ","d·cosecθ"],
   a:0,
   why:"In the right triangle the height is opposite θ and `d` is adjacent to it, so **tanθ = h/d and h = d·tanθ**. Option B is the same relation inverted, **d = h·cotθ**, which finds the distance from the height — it is the commonest wrong tick here. Options C and D would be right only if `d` were the hypotenuse, the line of sight.",
   tag:"h = d·tanθ"},

  {q:"In the figure, the angle of elevation `θ` is `30°` and the horizontal distance `d` is `60` m. The height `h` of the tower is:",
   o:["60√3 m","20√3 m","30 m","20 m"],
   a:1,
   why:"**h = d·tanθ**, and tan30° = 1/√3, so h = 60/√3 = `20√3` m, about 34.6 m. Option A is 60·tan60° = 60√3 — multiplying by √3 where you should divide, which is the 30°–60° swap. Option C is 60·sin30°, correct only if the 60 m were the line of sight rather than the ground distance.",
   d:"h-elevation",
   tag:"30°"},

  {q:"A tower is `30` m high and the angle of elevation of its top from a point on the ground is `60°`. The distance of the point from the foot of the tower is:",
   o:["30√3 m","15 m","10√3 m","20√3 m"],
   a:2,
   why:"**d = h·cotθ**, and cot60° = 1/√3, so d = 30/√3 = `10√3` m. Option A, 30√3, is 30·tan60° — the relation used upside down, and the answer that belongs to an elevation of 30°. Option D is 30·cosec60° = 20√3, the length of the line of sight, which the question did not ask for.",
   tag:"60°"},

  {q:"In the figure the shadow of the pole is exactly as long as the pole is high. The sun's angle of elevation is:",
   o:["30°","45°","60°","75°"],
   a:1,
   why:"**Shadow = h·cotθ**, so a shadow equal to the height means cotθ = 1 and θ = `45°`. At 30° the shadow would be h√3, longer than the pole, and at 60° it would be h/√3, shorter — comparing the shadow with the pole rules both out before any arithmetic.",
   d:"h-shadow",
   tag:"45°"},

  {q:"The shadow of a vertical pole is `√3` times the height of the pole. The sun's angle of elevation is:",
   o:["60°","45°","30°","15°"],
   a:2,
   why:"**tanθ = height/shadow** = h/(h√3) = 1/√3, so θ = `30°`. Option A, 60°, is what tanθ = √3 gives — the ratio taken shadow-to-height instead of height-to-shadow, and it is the usual slip. A long shadow means a low sun, so the answer must be the smaller angle.",
   tag:"Shadow"},

  {q:"The shadow of a vertical pole is `20` m long when the sun's angle of elevation is `60°`. The height of the pole is:",
   o:["(20√3)/3 m","10√3 m","40 m","20√3 m"],
   a:3,
   why:"The shadow is the side along the ground, so **h = (shadow)·tanθ** = 20·tan60° = `20√3` m. Option A is 20·cot60° = 20/√3, dividing by √3 where you should multiply. Option C, `40` m, is 20·sec60°, the length of the sunbeam from the top of the pole to the tip of the shadow.",
   tag:"Shadow"},

  {q:"When the sun's angle of elevation is `60°`, the length of the shadow of a pole `12` m high is:",
   o:["12√3 m","6√3 m","4√3 m","6 m"],
   a:2,
   why:"**Shadow = h·cotθ** = 12·cot60° = 12/√3 = `4√3` m, about 6.9 m — shorter than the pole, as a high sun requires. Option A is 12·tan60°, the relation inverted. Option B is 12·sin60° and option D is 12·cos60°, both of which treat the pole as the hypotenuse when it is the vertical side.",
   tag:"Shadow"},

  {q:"In the figure a ladder `10` m long leans against a wall and makes an angle of `60°` with the ground. The height it reaches up the wall is:",
   o:["5 m","10√3 m","(10√3)/3 m","5√3 m"],
   a:3,
   why:"The ladder is the **hypotenuse**, so the height reached is **l·sinθ** = 10·sin60° = `5√3` m and the foot stands **l·cosθ** = 10·cos60° = 5 m from the wall. Option A is that foot distance — the quantity not asked for. Option B is 10·tan60°, which treats the ladder as the distance along the ground, and it is the option this question exists to catch.",
   d:"h-ladder",
   tag:"Ladder"},

  {q:"A ladder makes an angle of `30°` with the ground and its foot is `6√3` m from the wall. The length of the ladder is:",
   o:["12 m","6 m","12√3 m","18 m"],
   a:0,
   why:"The foot distance is **l·cosθ**, so l = 6√3 ÷ cos30° = 6√3 ÷ (√3/2) = `12` m. Option B, `6` m, is 6√3·tan30°, the height the ladder reaches — right working, wrong question. Option C divides by sin30° instead of cos30°, which is the error of treating the foot distance as the vertical side.",
   tag:"Ladder"},

  {q:"A ladder of fixed length leans against a wall and the angle it makes with the ground is increased from `30°` to `60°`. Then:",
   o:["it reaches lower and its foot comes closer to the wall","it reaches higher and its foot comes closer to the wall","it reaches higher and its foot moves further from the wall","the height it reaches does not change, only the foot moves"],
   a:1,
   why:"The height reached is **l·sinθ** and the foot distance is **l·cosθ**; as θ grows from 30° to 60°, sinθ rises from `½` to `√3/2` while cosθ falls from `√3/2` to `½`. So a 10 m ladder goes from reaching 5 m to reaching 5√3 m while its foot comes in from 5√3 m to 5 m. Option C is the picture of a ladder sliding outwards, which is what happens when the angle *decreases*.",
   tag:"Ladder"},

  {q:"A kite is flying on a taut string `120` m long which makes an angle of `30°` with the horizontal. The height of the kite above the ground is:",
   o:["60 m","40√3 m","60√3 m","120√3 m"],
   a:0,
   why:"The taut string is the **hypotenuse**, so the height is **l·sinθ** = 120·sin30° = `60` m. Option C is 120·cos30° = 60√3 m, the horizontal distance out to the point below the kite. Option B is 120·tan30° = 40√3, which would be the height only if the 120 m were measured along the ground — the standard confusion in every string-and-kite question.",
   tag:"Kite"},

  {q:"A stay wire runs from the top of a vertical pole `9` m high to a peg on the ground and makes an angle of `30°` with the ground. The length of the wire is:",
   o:["9√3 m","6√3 m","18 m","36 m"],
   a:2,
   why:"The pole is opposite the `30°` and the wire is the hypotenuse, so **l = h·cosecθ** = 9 × cosec30° = 9 × 2 = `18` m. Option A is 9·cot30° = 9√3 m, the distance from the foot of the pole to the peg. Option B is 9·cosec60° = 6√3, the answer with the two standard angles exchanged.",
   tag:"Wire"},

  {q:"In the figure the angle of depression of the object on the ground from the top of the tower is `45°`. The angle of elevation of the top of the tower from that object is:",
   o:["90°","it cannot be found without the height of the tower","45°","135°"],
   a:2,
   why:"**The angle of depression from the top to a point equals the angle of elevation from that point to the top**, because the horizontal at the top and the ground are parallel and the line of sight cuts them as alternate angles. So the elevation is `45°`. Option B is tempting because no length is given, but no length is needed — the equality holds for every height and every distance.",
   d:"h-depression",
   tag:"Depression"},

  {q:"From the top of a tower `75` m high the angle of depression of a point on the ground is `30°`. The distance of the point from the foot of the tower is:",
   o:["25√3 m","150 m","75 m","75√3 m"],
   a:3,
   why:"The depression of 30° means the angle of elevation at the point is also 30°, so **d = h·cotθ** = 75·cot30° = `75√3` m. Option A is 75·tan30° = 25√3, cot and tan exchanged. Option B, `150` m, is 75·cosec30°, the length of the line of sight from the top down to the point, not the distance along the ground.",
   tag:"Depression"},

  {q:"From the top of a tower of height `h` the angle of depression of a point on the ground is θ. The length of the line of sight from the top of the tower to that point is:",
   o:["h·cotθ","h·tanθ","h·secθ","h·cosecθ"],
   a:3,
   why:"The height is the side opposite θ and the line of sight is the hypotenuse, so **sinθ = h/(line of sight)** and the line of sight = **h·cosecθ**. Option A, `h·cotθ`, is the horizontal distance along the ground and is the usual wrong tick, because it is the quantity these questions normally ask for. `h·secθ` would be right only if `h` were the horizontal side.",
   tag:"Line of sight"},

  {q:"A man `2` m tall stands `30` m from the foot of a tower and the angle of elevation of the top of the tower from his eyes is `45°`. The height of the tower is:",
   o:["30 m","34 m","32 m","28 m"],
   a:2,
   why:"The elevation is taken from the eye, so the right triangle sits on top of the man: **H = h₀ + d·tanθ** = 2 + 30·tan45° = 2 + 30 = `32` m. Option A, `30` m, leaves the observer's height out altogether, and that omission is the only thing this question tests. Option D subtracts the 2 m instead of adding it.",
   tag:"Observer"},

  {q:"A tree is broken by the wind so that its top touches the ground `10` m from the foot and the broken part makes an angle of `30°` with the ground. The height of the tree was:",
   o:["(10√3)/3 m","10√3 m","(20√3)/3 m","(10√3 + 20) m"],
   a:1,
   why:"The broken part is the **hypotenuse**, so the standing part is **d·tanθ** = 10·tan30° = (10√3)/3 m and the broken part is **d·secθ** = 10·sec30° = (20√3)/3 m; the tree was the sum, **d(tanθ + secθ)** = 30/√3 = `10√3` m. Options A and C are those two pieces on their own, and the second of them is the commoner slip. Option D puts the 30° at the top instead of at the ground.",
   tag:"Broken pole"},

  {q:"A pole is broken by the wind so that its top touches the ground and the broken part makes an angle of `30°` with the ground. The ratio of the standing part to the broken part is:",
   o:["1 : √3","1 : 2","√3 : 2","2 : √3"],
   a:1,
   why:"Standing part = **d·tanθ** and broken part = **d·secθ**, so the ratio is tanθ : secθ = **sinθ : 1** = sin30° : 1 = `1 : 2`. Option A is tan30°, the ratio of the standing part to the distance along the ground. Option C is cos30°, the ratio of that ground distance to the broken part — both are real ratios in the figure, but neither is the one asked for.",
   tag:"Broken pole"},

  {q:"The angle of elevation of the top of a tower from a point on the ground is `60°`. The ratio of the distance of the point from the foot to the height of the tower is:",
   o:["1 : √3","√3 : 1","1 : 2","2 : √3"],
   a:0,
   why:"**d = h·cotθ**, so d : h = cotθ : 1 = cot60° : 1 = `1 : √3`. Option B, √3 : 1, is the same ratio at an elevation of 30°, where the ground distance is the larger of the two — exchanging the two angles is the commonest slip in the topic. Option D is 2 : √3, which is cosec60°, the line of sight against the height.",
   tag:"60°"},

  {q:"A tower stands vertically on level ground. From a point on the ground the line of sight to the top of the tower makes an angle of `60°` with the tower itself. The angle of elevation of the top from that point is:",
   o:["60°","45°","120°","30°"],
   a:3,
   why:"**The angle of elevation is measured from the horizontal, never from the tower.** The tower is vertical, so the two acute angles of the right triangle add to 90°, and an angle of 60° at the top leaves `30°` at the point on the ground. Option A takes the given 60° straight as the elevation, which is exactly the misreading the question is built on.",
   tag:"Elevation"},

  {q:"The angle of elevation of the top of a tower of height `h` from a point on the ground is `30°`. The distance of the point from the foot of the tower is:",
   o:["h√3","h/√3","h","2h"],
   a:0,
   why:"**d = h·cotθ** and cot30° = √3, so the distance is **h√3** — at a low elevation the observer stands far back. Option B, h/√3, is the answer at 60°, since cot60° = 1/√3; option C is the answer at 45°, where distance and height are equal. `2h` is h·cosec30°, the line of sight rather than the ground distance.",
   tag:"30°"}
 ],
  note:"Every question above comes from one row of the sheet. If the working took more than a line, it was almost certainly d = h·cotθ used as h·tanθ, or a hypotenuse treated as a side."}
]
},

/* ============================================================ 6 — Height and distance: two angles, two observers (22 questions) */
{
id:"trig-hd-two", n:"Height and distance: two angles, two observers", hy:1,
w:"Two angles instead of one: the x/(cotα − cotβ) family, the flagstaff on the tower, two towers across a road, the river, the aeroplane, the boat below the cliff, and the walking-time results.",
quick:[
 "**Two points on the same side of the foot, `x` apart: h = x/(cotα − cotβ)**, where α is the angle at the *farther* point. The two distances from the foot are `h·cotα` and `h·cotβ`, and `x` is their difference.",
 "**Two points on opposite sides, `x` apart in all: h = x/(cotα + cotβ).** Same line, plus instead of minus — because now the two distances add to `x` instead of subtracting.",
 "With `30°` and `60°`: same side gives **h = x√3/2**, opposite sides gives **h = x√3/4**. The two differ by a factor of `2`, and picking the wrong one is the commonest loss in this topic.",
 "**Flagstaff `f` on a tower `h`, both tops seen from one point at distance `d`: h = d·tanα and h + f = d·tanβ, so f = d(tanβ − tanα).** One distance, two equations — the only question is which to subtract.",
 "**An aeroplane level at height `h`, or a boat below a cliff of height `h`, moves `h(cotα − cotβ)` between the two sightings.** Divide by the time for the speed.",
 "**Walking towards a tower, if the elevation goes from `30°` to `60°` in `t` minutes, the foot is a further `t/2` minutes away.** From `45°` to `60°`, and also from `30°` to `45°`, it is `t(√3 + 1)/2`.",
 "`cot30° = √3`, `cot45° = 1`, `cot60° = 1/√3`. Every number in this topic is built out of those three."
],
blocks:[
 {h:"THE SHEET — every two-angle configuration SSC sets",
  cols:["The configuration","The relation","Where it comes from"],
  rows:[
  ["**Two points, same side of the foot, `x` apart**","h = x/(cotα − cotβ)","Distances are h·cotα and h·cotβ; x is the difference, so α is the angle at the farther point"],
  ["**Same side, `30°` and `60°`**","h = x√3/2","cot30° − cot60° = √3 − 1/√3 = 2/√3"],
  ["**Same side, `30°` and `45°`**","h = x(√3 + 1)/2","cot30° − cot45° = √3 − 1, and x/(√3 − 1) = x(√3 + 1)/2"],
  ["**Same side, `45°` and `60°`**","h = x(3 + √3)/2","cot45° − cot60° = 1 − 1/√3 = (√3 − 1)/√3, so h = x√3/(√3 − 1)"],
  ["**Two points, opposite sides, `x` apart in all**","h = x/(cotα + cotβ)","The two distances now add to x instead of subtracting"],
  ["**Opposite sides, `30°` and `60°`**","h = x√3/4","cot30° + cot60° = √3 + 1/√3 = 4/√3"],
  ["**Flagstaff `f` on a tower `h`, both tops from one point**","f = d(tanβ − tanα), where d is the distance to the foot","h = d·tanα for the tower top and h + f = d·tanβ for the flagstaff top"],
  ["**The tower, when the flagstaff `f` is the known one**","h = f·tanα/(tanβ − tanα)","Eliminate d between h = d·tanα and h + f = d·tanβ"],
  ["**Two towers across a road of width `w`**","Each height = w × tan(the angle taken at the other tower's foot)","So the heights are in the ratio of those two tangents, and w is the common distance"],
  ["**River width, from a tree on the far bank**","h = x/(cotα − cotβ), then width = h·cotβ","β is the angle from the point on the near bank opposite the tree, α from the point x further back"],
  ["**Aeroplane level at height `h`, elevations α and β**","distance covered = h(cotα − cotβ); speed = h(cotα − cotβ)/t","The same subtraction as the two-point tower, read the other way round"],
  ["**Boat below a cliff of height `h`, depressions α and β**","distance covered = h(cotα − cotβ)","A depression from the top equals the elevation from the water, so the triangles are the same ones"],
  ["**Walking towards a tower, `30°` to `60°` in `t`**","a further `t/2`","Walked 2h/√3, and h/√3 is left — half as far at the same speed, so half the time"],
  ["**Walking towards a tower, `45°` to `60°` in `t`**","a further `t(√3 + 1)/2`","Walked h(√3 − 1)/√3, and h/√3 is left; the ratio is 1/(√3 − 1)"],
  ["**Walking towards a tower, `30°` to `45°` in `t`**","a further `t(√3 + 1)/2`","Walked h(√3 − 1), and h is left — the same ratio 1/(√3 − 1) as the line above"],
  ["**Two poles of equal height, road of width `w`, point between them**","h = w/(cotα + cotβ)","It is the opposite-sides formula, with the poles standing where the two observers stood"],
  ["**Where that point between the poles stands**","It divides the road as cotα : cotβ","Its distance to each pole is h·cot(that pole's angle)"],
  ["**The three cotangents**","cot30° = √3, cot45° = 1, cot60° = 1/√3","The whole topic is these three numbers put into one of the lines above"]
 ]},

 {careful:"**Same side subtracts, opposite sides adds.** With `30°` and `60°` and the points `x` apart, the same-side height is **x√3/2** and the opposite-side height is **x√3/4** — exactly half of it. Read the question for the words *on the same side* or *on either side* before touching the formula, because both answers are always among the options."},

 {careful:"In **h = x/(cotα − cotβ)** the `x` is **divided by** the bracket, not multiplied by it. The bracket is a difference of cotangents — a number like `2/√3` — and with `x = 40 m` and the angles `30°` and `60°`, `h = x(cotα − cotβ)` turns the true `20√3 m` (about `34.6`) into `80/√3 m` (about `46.2`). Also keep the order: α is the angle at the **farther** point, so `cotα` is the larger of the two and the bracket stays positive."},

 {careful:"A man walking towards a tower whose elevation changes from `30°` to `60°` in `t` minutes needs a further **`t/2`**, not `t`. The distance from the foot falls from `h√3` to `h/√3`, so he has walked `2h/√3` and only `h/√3` remains — half of what he has already done. The angle doubling says nothing about the distance; the cotangents do."},

 {h:"QUESTIONS — the two-angle configurations",
  mcq:[
  {q:"The angles of elevation of the top of a tower from two points on the same side of its foot and in line with it, `x` apart, are α and β. The height of the tower is:",
   o:["x/(cotα − cotβ)","x/(cotα + cotβ)","x(cotα − cotβ)","x/(tanβ − tanα)"],
   a:0,
   why:"**h = x/(cotα − cotβ).** The distances from the foot are `h·cotα` and `h·cotβ`, and because both points are on the same side their difference is `x`, so x = h(cotα − cotβ). Option B is the opposite-sides version, where the two distances add instead. Option C is the same bracket multiplied rather than divided — the commonest slip here, and it is wrong by a factor of the bracket squared. Option D uses tangents, which give a height from a fixed distance; it is cotangents that give a distance from a fixed height, and only distances subtract to `x`.",
   tag:"Same side"},

  {q:"The angles of elevation of the top of a tower from two points on the same side of its foot and in line with it, `40 m` apart, are `30°` and `60°`. The height of the tower is:",
   o:["40√3 m","10√3 m","20√3 m","20 m"],
   a:2,
   why:"**h = x/(cot30° − cot60°) = x/(√3 − 1/√3) = x/(2/√3) = x√3/2.** Here that is 40√3/2 = `20√3 m`. Option A is `x√3`, the answer with the `2` forgotten; option B is `x√3/4`, which is the height if the two points were on **opposite** sides of the tower — the trap this question is built around.",
   tag:"30° and 60°",
   d:"h-two-angles"},

  {q:"Two observers stand on opposite sides of a tower, in line with its foot and `x` apart in all. The angles of elevation of the top are α and β. The height of the tower is:",
   o:["x/(cotα − cotβ)","x/(cotα + cotβ)","x(cotα + cotβ)","(x/2)(cotα + cotβ)"],
   a:1,
   why:"**h = x/(cotα + cotβ).** The foot lies between the two observers, so the distances `h·cotα` and `h·cotβ` add up to `x` rather than subtracting: x = h(cotα + cotβ). Option A is the same-side formula and is the one most often ticked by mistake; option C again multiplies by the bracket instead of dividing by it.",
   tag:"Opposite sides"},

  {q:"Two men on opposite sides of a tower, in line with its foot and `120 m` apart, see its top at elevations of `30°` and `60°`. The height of the tower is:",
   o:["60√3 m","20√3 m","30 m","30√3 m"],
   a:3,
   why:"**h = x/(cot30° + cot60°) = x/(√3 + 1/√3) = x/(4/√3) = x√3/4**, so h = 120√3/4 = `30√3 m`. Option A is `x√3/2`, the same-side answer, and is exactly twice too big. Option B comes from taking `cot60°` as `√3` as well, giving 120/(2√3) = 20√3; option C drops the `√3` and leaves 120/4.",
   tag:"Opposite sides"},

  {q:"A tower subtends an angle of `30°` at one point on level ground and `60°` at a point `x` nearer the foot, both in line with it. Its height is:",
   o:["x√3/2","2x/√3","x√3/4","x/(2√3)"],
   a:0,
   why:"**h = x/(cot30° − cot60°)**, and cot30° − cot60° = √3 − 1/√3 = 2/√3, so **h = x√3/2**. Option B is `2x/√3`, the bracket `2/√3` used as a multiplier instead of a divisor — the same slip in reverse, and it is the one to watch for because `2/√3` looks like something to multiply by. Option C, `x√3/4`, is the opposite-sides result.",
   tag:"h = x√3/2"},

  {q:"The angles of elevation of the top of a tower from two points on the same side of its foot, `x` apart and in line with it, are `30°` and `45°`. The height of the tower is:",
   o:["x(√3 − 1)/2","x√3/2","x(√3 + 1)/2","x(√3 + 1)"],
   a:2,
   why:"**h = x/(cot30° − cot45°) = x/(√3 − 1)**, and rationalising gives **x(√3 + 1)/2**. Option B, `x√3/2`, is the `30°`-and-`60°` answer carried over to the wrong pair of angles — the trap. Option A has the sign flipped after rationalising: 1/(√3 − 1) multiplied top and bottom by (√3 + 1) gives (√3 + 1)/2, so the sign must come out **plus**.",
   tag:"30° and 45°"},

  {q:"A flagstaff stands on the top of a tower `20 m` high. From a point on level ground the top of the tower is at an elevation of `45°` and the top of the flagstaff at `60°`. The height of the flagstaff is:",
   o:["20√3 m","20(√3 − 1) m","20(√3 + 1) m","20/√3 m"],
   a:1,
   why:"**h = d·tanα gives d = 20·cot45° = 20 m, and h + f = d·tanβ gives 20 + f = 20·tan60° = 20√3.** So f = 20√3 − 20 = `20(√3 − 1) m`. Option A, `20√3`, is the height of the flagstaff's **top above the ground** — the result one step before the end, and the one most often ticked. Both sightings use the same distance `d`, which is what makes the subtraction legal.",
   tag:"Flagstaff",
   d:"h-flagstaff"},

  {q:"A flagstaff of height `f` stands on a tower of height `h`. From a point on the ground at distance `d` from the foot, the top of the tower is at elevation α and the top of the flagstaff at β. Then `f` equals:",
   o:["d(tanα − tanβ)","d(cotα − cotβ)","(tanβ − tanα)/d","d(tanβ − tanα)"],
   a:3,
   why:"**h = d·tanα and h + f = d·tanβ**, and subtracting the first from the second gives **f = d(tanβ − tanα)**. Option A reverses the subtraction, which is the order slip to guard against, since β is the larger angle. Option B uses cotangents, which belong to the two-point formula where the **distances** are what differ — here the distance is the same for both sightings and it is the heights that differ, so tangents are the right ratio.",
   tag:"Flagstaff"},

  {q:"A vertical flagstaff `10 m` tall stands on the top of a tower. From a point on level ground the top of the flagstaff is at an elevation of `60°` and its foot at `45°`. The height of the tower is:",
   o:["5(√3 + 1) m","10(√3 − 1) m","5(√3 − 1) m","10(√3 + 1) m"],
   a:0,
   why:"**h = d·tan45° = d and h + 10 = d·tan60° = d√3**, so h + 10 = h√3, giving h(√3 − 1) = 10 and **h = 10/(√3 − 1) = 5(√3 + 1) m**. Option B is the same number with the rationalisation done backwards — multiplying by (√3 − 1) instead of dividing — and it is the standard slip. Option D doubles the correct value by forgetting that (√3 − 1)(√3 + 1) = 2.",
   tag:"Tower under flag"},

  {q:"Two towers stand facing each other across a road. From the foot of the second, the top of the first is at an elevation of `30°`; from the foot of the first, the top of the second is at `60°`. The first tower is `60 m` high. The height of the second is:",
   o:["120 m","60√3 m","180 m","20√3 m"],
   a:2,
   why:"**Each height = w × tan(the angle taken at the other tower's foot)**, with `w` the width of the road. From 60 = w·tan30° comes w = 60·cot30° = 60√3 m, and then the second tower is w·tan60° = 60√3 × √3 = `180 m`. Option B is the road width itself, the step before the end. Option D is 60·tan30°, which uses the tangent where the cotangent was needed.",
   tag:"Two towers",
   d:"h-two-towers"},

  {q:"Two towers stand on either side of a road. The angle of elevation of the top of the first, taken at the foot of the second, is `30°`; the angle of elevation of the top of the second, taken at the foot of the first, is `60°`. The ratio of the height of the first tower to that of the second is:",
   o:["3 : 1","1 : 3","1 : √3","1 : 9"],
   a:1,
   why:"With `w` the width of the road, the first tower is `w·tan30°` and the second is `w·tan60°`, so the heights are in the ratio **tan30° : tan60° = (1/√3) : √3 = `1 : 3`**. The road width cancels, which is why no distance is given. Option C, `1 : √3`, is (1/√3) : √3 cancelled only once instead of twice — the `√3` has to be divided out of the second term as well, and that single step is the whole trap. Option A has the two towers the wrong way round.",
   tag:"Ratio of heights"},

  {q:"A tree stands on the far bank of a river. The angles of elevation of its top, taken from two points on the near bank in line with the tree and `40 m` apart, are `60°` and `30°`. The width of the river is:",
   o:["20√3 m","60 m","40√3 m","20 m"],
   a:3,
   why:"**h = x/(cot30° − cot60°) = 40/(2/√3) = 20√3 m**, and then the **width = h·cot60° = 20√3/√3 = `20 m`**, since the `60°` sighting is the one taken from the bank opposite the tree. Option A is the tree's height, which is the step before the end and the commonest answer ticked. Option B, `60 m`, is `h·cot30°` — the distance of the farther point from the tree's foot, which is the width plus the `40 m`.",
   tag:"River width",
   d:"h-river"},

  {q:"A tree stands on the far bank of a river. From a point on the near bank directly opposite it the elevation of the top is β, and from a point `x` further back in the same line it is α. The width of the river is:",
   o:["x·cotβ/(cotα − cotβ)","x/(cotα − cotβ)","x·cotα/(cotα − cotβ)","x(cotα − cotβ)"],
   a:0,
   why:"The two distances from the tree's foot are `h·cotβ` (the width) and `h·cotα` (the width plus x), so **h = x/(cotα − cotβ)** and the **width = h·cotβ = x·cotβ/(cotα − cotβ)**. Option B is that height `h`, not the width — the step before the end. Option C is `h·cotα`, which is the width plus `x`, and so is the other distance the figure contains.",
   tag:"River width"},

  {q:"An aeroplane flying horizontally at a height of `1500√3 m` is seen at an angle of elevation of `60°`, and `15` seconds later at `30°`. Its speed is:",
   o:["200 km/h","360 km/h","720 km/h","1080 km/h"],
   a:2,
   why:"**Distance covered = h(cot30° − cot60°) = 1500√3 × 2/√3 = 3000 m**, so the speed is 3000/15 = 200 m/s, and 200 × 18/5 = `720 km/h`. Option A is that `200` left in metres per second and relabelled — the commonest error on this question. Options B and D use one distance instead of the difference: `h·cot60°/15` gives 100 m/s = 360 km/h and `h·cot30°/15` gives 300 m/s = 1080 km/h.",
   tag:"Aeroplane speed",
   d:"h-plane"},

  {q:"An aeroplane flies level at a height `h`. Between two sightings from a fixed point on the ground its angle of elevation falls from β to α. The horizontal distance it has covered is:",
   o:["h(cotβ − cotα)","h(cotα − cotβ)","h(tanα − tanβ)","h/(cotα − cotβ)"],
   a:1,
   why:"**The horizontal distance of the plane from the observer is h·cotθ at elevation θ**, so between the two sightings it covers `h·cotα − h·cotβ` = **h(cotα − cotβ)**. Since the elevation has fallen, α is the smaller angle and `cotα` the larger cotangent, so this bracket is positive — option A has the subtraction the wrong way round. Option D divides by the bracket instead of multiplying, which is the shape of the tower formula **h = x/(cotα − cotβ)** and answers the reverse question: there a distance is given and a height wanted, here a height is given and a distance wanted.",
   tag:"Aeroplane"},

  {q:"From the top of a cliff `150 m` high the angles of depression of a boat at two instants are `30°` and `60°`. The distance the boat has travelled between the two instants is:",
   o:["150√3 m","50√3 m","300 m","100√3 m"],
   a:3,
   why:"**A depression from the top equals the elevation from the water, so the distance from the foot of the cliff is h·cotθ**, giving `150·cot30° = 150√3 m` and `150·cot60° = 50√3 m`. The boat has covered **h(cot30° − cot60°) = 150 × 2/√3 = `100√3 m`**. Option A is only the farther of the two distances — the step before the subtraction, and the most-ticked wrong answer; option B is the nearer one.",
   tag:"Boat and cliff",
   d:"h-cliff-boat"},

  {q:"A man walking at a steady speed towards a tower on level ground finds the angle of elevation of its top changing from `30°` to `60°` in `12` minutes. He will reach the foot of the tower after a further:",
   o:["6 minutes","4 minutes","24 minutes","12 minutes"],
   a:0,
   why:"**The distance from the foot is h·cotθ**, so it falls from `h√3` to `h/√3`: he has walked `h√3 − h/√3 = 2h/√3` and `h/√3` remains — exactly half of what he has already walked, so a further **`t/2` = 6 minutes**. Option D assumes the remaining stretch takes the same `12` minutes, which is the standard wrong reading of the doubled angle, and option C doubles the time instead of halving it.",
   tag:"30° to 60°"},

  {q:"The angle of elevation of the top of a tower changes from `45°` to `60°` in `t` minutes as a man walks towards it at a steady speed. The remaining walk to the foot takes:",
   o:["t/2","t(√3 − 1)/2","t(√3 + 1)/2","t(√3 + 1)"],
   a:2,
   why:"**The distance from the foot is h·cotθ**, so it falls from `h` to `h/√3`: the walk of `t` minutes covered h(√3 − 1)/√3 and `h/√3` remains, a ratio of **1/(√3 − 1) = (√3 + 1)/2**, so the remaining time is **t(√3 + 1)/2** — longer than `t`, not shorter. Option A is the `30°`-to-`60°` result applied to the wrong pair of angles, and it is the trap; option B has the sign flipped, and option D forgets the `2` from (√3 − 1)(√3 + 1). Both the walked stretch and the stretch left are worth writing down: `h(√3 − 1)/√3` is about `0.42h` and `h/√3` is about `0.58h`, so the answer has to exceed `t`, which rules out options A and B at a glance.",
   tag:"45° to 60°"},

  {q:"Two poles of equal height stand on either side of a straight road `100 m` wide. From a point on the road between them the angles of elevation of their tops are `30°` and `60°`. The height of each pole is:",
   o:["50√3 m","25√3 m","25 m","75 m"],
   a:1,
   why:"The point lies between the poles, so the two distances add to the road's width: **h = w/(cot30° + cot60°) = 100/(√3 + 1/√3) = 100/(4/√3) = `25√3 m`**. Option A is `w√3/2`, the same-side formula used where the opposite-sides one belongs, and it is twice too big. Option D, `75 m`, is one of the two distances along the road, `h·cot30°`, not a height at all.",
   tag:"Two equal poles"},

  {q:"Two poles of equal height stand on either side of a road. From a point on the road between them the angles of elevation of their tops are α and β. That point divides the road in the ratio:",
   o:["tanα : tanβ","1 : 1","cot²α : cot²β","cotα : cotβ"],
   a:3,
   why:"**The distance from the point to a pole whose top it sees at θ is h·cotθ**, so the two parts of the road are `h·cotα` and `h·cotβ` and their ratio is **cotα : cotβ**, the common height cancelling. Option A takes tangents instead of cotangents, and `tanα : tanβ` is the exact **inverse** of the right answer — that is the trap. Option B assumes that equal heights put the point at the middle of the road, which is true only when α = β.",
   tag:"Dividing the road"},

  {q:"The angle of elevation of the top of a tower from a point on level ground is `45°`, and from a point `20 m` nearer the foot, in the same straight line, it is `60°`. The height of the tower is:",
   o:["10(3 + √3) m","10(3 − √3) m","10√3 m","20(3 + √3) m"],
   a:0,
   why:"**h = x/(cot45° − cot60°)** and cot45° − cot60° = 1 − 1/√3 = (√3 − 1)/√3, so h = 20√3/(√3 − 1) = 20√3(√3 + 1)/2 = **10(3 + √3) m**. Option C, `10√3`, is the `30°`-and-`60°` answer `x√3/2` applied to the wrong pair of angles — the trap. Option B rationalises with the wrong sign, and option D forgets to divide by (√3 − 1)(√3 + 1) = 2.",
   tag:"45° and 60°"},

  {q:"A man walking at a steady speed towards a tower sees the angle of elevation of its top rise from `30°` to `45°` in `10` minutes. He reaches the foot of the tower after a further:",
   o:["5(√3 − 1) minutes","5(√3 + 1) minutes","5 minutes","10(√3 + 1) minutes"],
   a:1,
   why:"**The distance from the foot is h·cotθ**, falling from `h√3` to `h`: the `10` minutes covered h(√3 − 1) and `h` remains, so the remaining time is 10/(√3 − 1) = **5(√3 + 1) minutes**, about `13.7`. Option C halves the time, which is the `30°`-to-`60°` rule used on the wrong pair; option A multiplies by (√3 − 1) instead of dividing by it. Note that `30°` to `45°` and `45°` to `60°` give the same factor, `(√3 + 1)/2`.",
   tag:"30° to 45°"}
 ],
  note:"Every question above is one line from the sheet with cot30° = √3, cot45° = 1 or cot60° = 1/√3 put into it. If a question took more than a minute, the line to go back to is the one naming its configuration."}
]
},

/* ============================================================ 7 — Height and distance: the standard results (21 questions) */
{
id:"trig-hd-results", n:"Height and distance: the standard results", hy:1,
w:"The short list of height-and-distance results that turn a two-minute question into a ten-second one — the geometric mean, the lengthening shadow, the cloud in the lake, the road between two pillars.",
quick:[
 "**h = √(xy).** A tower seen from two points `x` and `y` from its foot at complementary angles — on the same side or on opposite sides — has height the geometric mean of the two distances.",
 "**The shadow is h·cotθ, so it lengthens by 2h/√3 as the sun falls from `60°` to `30°`**, and by h(√3 − 1) as it falls from `45°` to `30°`. Given the increase `x`, the second case gives h = x/(√3 − 1).",
 "**The cloud and its reflection: H = h(tanβ + tanα)/(tanβ − tanα)**, with `α` the elevation of the cloud, `β` the depression of its reflection and `h` the height of the eye above the lake. The answer is the cloud's height above the lake surface.",
 "**Two equal pillars across a road of width `w`, elevations `α` and `β` from a point between them: h = w/(cotα + cotβ)**, and that point divides the road in the ratio cotα : cotβ.",
 "**Two objects on the ground seen from a tower top at depressions `α` and `β` are h(cotα − cotβ) apart**, taking `α` as the smaller angle. On opposite sides of the tower it is h(cotα + cotβ).",
 "**Two towers, each top seen from the other's foot at `α` and `β`: the heights are in the ratio tanα : tanβ**, because both triangles stand on the same horizontal distance.",
 "**Equal angles of elevation mean equal distances from the foot** — and the angle at the midpoint of two points is *not* the average of their two angles."
],
blocks:[
 {h:"THE SHEET — every standard result, with the line it comes from",
  cols:["Asked as","The result","Where it comes from"],
  rows:[
  ["Two points at `x` and `y` on **opposite** sides, elevations `θ` and `90° − θ`","h = √(xy)","h = x·tanθ and h = y·cotθ; multiply the two"],
  ["The same two points on the **same** side","h = √(xy) still, and the points are `|x − y|` apart","Direction never enters either equation"],
  ["Shadow of a pole of height `h` at elevation `θ`","h·cotθ — so h√3 at `30°`, h at `45°`, h/√3 at `60°`","The shadow is the base of the right triangle"],
  ["Increase in the shadow as the sun falls from `60°` to `30°`","h√3 − h/√3 = 2h/√3, so an increase `x` gives h = (x√3)/2","The difference of the two shadows"],
  ["Increase in the shadow as the sun falls from `45°` to `30°`","h(√3 − 1) = x, so h = x/(√3 − 1) = x(√3 + 1)/2","The shadow goes from h to h√3"],
  ["Shadow at `30°` against shadow at `60°`","`3 : 1`","cot30° : cot60° = √3 : (1/√3)"],
  ["Two points giving **equal** angles of elevation","They are equidistant from the foot","d = h·cotθ is fixed once h and θ are fixed"],
  ["Cloud at elevation `α`, its reflection at depression `β`, eye `h` above the lake","H = h(tanβ + tanα)/(tanβ − tanα), measured from the surface","tanα = (H − h)/d and tanβ = (H + h)/d"],
  ["Two equal pillars across a road of width `w`, angles `α` and `β` from a point between them","h = w/(cotα + cotβ)","h·cotα + h·cotβ = w"],
  ["Where that point stands on the road","It divides the road as cotα : cotβ","The two distances are h·cotα and h·cotβ"],
  ["Two towers, each top seen from the other's foot at `α` and `β`","h₁ : h₂ = tanα : tanβ","Both heights stand over the same distance d"],
  ["Two objects from a tower top at depressions `α` and `β`, with `α` the smaller","Same side: h(cotα − cotβ). Opposite sides: h(cotα + cotβ)","Each object is h·cotθ from the foot"],
  ["The elevation at the midpoint of two points of elevation `30°` and `60°`","tanθ = √3/2 — **not** tan45°","The midpoint is 2h/√3 from the foot, and angles do not average"]
 ]},

 {careful:"**The angle of elevation at the midpoint is not the average of the two angles.** From two points of elevation `30°` and `60°` the foot distances are h√3 and h/√3, so the midpoint stands 2h/√3 from the foot and its elevation has tangent `√3/2` — an angle under `45°`, not `45°` itself. Averaging angles is never valid here, because the height varies as the *tangent* of the angle and not as the angle."},

 {careful:"**h = √(xy) holds only when the two angles are complementary.** The result needs tanθ at one point and cotθ at the other, and that is what makes the product `xy` collapse to h². Given `30°` and `45°` from two points the formula is simply wrong. Nor is the height the arithmetic mean: it is the *geometric* mean √(xy), never (x + y)/2."},

 {careful:"**In the cloud-and-lake formula the sum goes on top**: H = h(tanβ + tanα)/(tanβ − tanα), where `α` is the elevation of the cloud and `β` the depression of its reflection. The reflection is always the steeper of the two, so tanβ is the larger and the denominator stays positive. What the formula gives is the height above the *surface* of the lake, so the observer's `h` is not added on again."},

 {h:"QUESTIONS — the standard results, one at a time",
  mcq:[
  {q:"A tower stands on level ground. The angles of elevation of its top from two points on opposite sides of the foot, at distances `x` and `y` from it, are complementary. The height of the tower is:",
   o:["√(xy)","(x + y)/2","(x − y)/2","2xy/(x + y)"],
   a:0,
   why:"**If the two elevations are θ and 90° − θ, then h = x·tanθ at one point and h = y·tan(90° − θ) = y·cotθ at the other; multiplying the two gives h² = xy, so h = √(xy).** The height is the *geometric* mean of the two distances. Option B is the arithmetic mean, the one most often ticked, and it is larger than √(xy) unless `x = y`; option D is the harmonic mean and option C is not even a length when `y` exceeds `x`.",
   d:"h-complementary",
   tag:"h = √(xy)"},

  {q:"The angles of elevation of the top of a tower from two points `4` m and `9` m from its foot, on opposite sides, are complementary. The height of the tower is:",
   o:["`6.5` m","`6` m","`5` m","`13` m"],
   a:1,
   why:"**h = √(xy)** whenever the two elevations are complementary, so h = √(4 × 9) = `6` m. Option A is the arithmetic mean `6.5` m, which is what this formula is most often confused with; option D is the whole distance `4 + 9 = 13` m between the two points, and option C is `9 − 4`, the gap they would be apart if they stood on the same side.",
   tag:"h = √(xy)"},

  {q:"The result **h = √(xy)** for a tower seen from two points at distances `x` and `y` from its foot holds only when the two angles of elevation are:",
   o:["equal","supplementary","in the ratio `1 : 2`","complementary"],
   a:3,
   why:"**h = √(xy) comes from the pair h = x·tanθ and h = y·cotθ, and the second equation only exists if the other angle is 90° − θ** — that is, complementary. Option A says something quite different: equal angles force `x = y`, so the two points are the same distance from the foot. Applied to `30°` and `45°`, which are not complementary, the formula is wrong, and that misuse is the standard trap.",
   tag:"Complementary"},

  {q:"The height of a tower is `4√3` m. From a point on the ground its top is seen at `60°`, and from a second point on the opposite side at `30°`. The distance between the two points is:",
   o:["`8` m","`12` m","`16` m","`4√3` m"],
   a:2,
   why:"**The foot distance is h·cotθ, so it is h/√3 at `60°` and h√3 at `30°`:** here 4√3 ÷ √3 = `4` m and 4√3 × √3 = `12` m. The two points lie on opposite sides, so the distance between them is the sum, `16` m. Option B quotes the far leg alone and option A is the difference `12 − 4`, which is the gap they would be apart on the same side. As a check, √(4 × 12) = `4√3`, the height, because `30°` and `60°` are complementary.",
   d:"h-complementary",
   tag:"Opposite sides"},

  {q:"The angles of elevation of the top of a tower from two points `3` m and `12` m from its foot, both on the same side, are complementary. The height of the tower and the distance between the two points are:",
   o:["`6` m and `9` m","`6` m and `15` m","`7.5` m and `9` m","`36` m and `9` m"],
   a:0,
   why:"**h = √(xy) holds whichever side the points are on, because neither h = x·tanθ nor h = y·cotθ mentions direction.** So h = √(3 × 12) = `6` m, and on the same side the gap is `12 − 3 = 9` m. Option B adds the two distances instead, which is right only for points on opposite sides; option D leaves `xy` un-rooted and option C uses the arithmetic mean `7.5` m.",
   tag:"Same side"},

  {q:"When the sun's angle of elevation falls from `60°` to `30°`, the shadow of a vertical pole of height `h` lengthens by:",
   o:["`h/√3`","`2h/√3`","`h√3`","`h(√3 − 1)`"],
   a:1,
   why:"**The shadow is h·cotθ, so it is h/√3 at `60°` and h√3 at `30°`, and the increase is h√3 − h/√3 = h(3 − 1)/√3 = 2h/√3.** Option C is the whole `30°` shadow rather than the increase, and option A the whole `60°` shadow — quoting a shadow instead of the difference is the usual slip. Option D is the increase for a fall from `45°` to `30°`, where the shadow runs from h to h√3.",
   d:"h-shadow",
   tag:"60° to 30°"},

  {q:"The shadow of a tower lengthens by `20` m when the sun's angle of elevation falls from `60°` to `30°`. The height of the tower is:",
   o:["`20√3` m","`10` m","`20/√3` m","`10√3` m"],
   a:3,
   why:"**The increase is h√3 − h/√3 = 2h/√3**, so 2h/√3 = 20 and h = `10√3` m. Option A is what setting h/√3 = 20 gives and option C what setting h√3 = 20 gives — both treat the increase as one of the two shadows instead of their difference. Option B drops the √3 altogether.",
   tag:"60° to 30°"},

  {q:"A vertical tower casts a shadow `x` metres longer when the sun's angle of elevation changes from `45°` to `30°`. Its height is:",
   o:["x/(√3 + 1)","x(√3 − 1)","x/(√3 − 1)","x√3/2"],
   a:2,
   why:"**The shadow is h·cot45° = h at `45°` and h·cot30° = h√3 at `30°`, so h√3 − h = x and h = x/(√3 − 1), which rationalises to x(√3 + 1)/2.** Option B inverts the relation — x times the difference instead of x divided by it — and is the commonest slip. Option A is what rationalising with the wrong conjugate gives, and option D is the answer to the same question with `60°` and `30°`, where the increase is 2h/√3.",
   tag:"45° to 30°"},

  {q:"The shadow of a tower is `20` m longer when the sun's angle of elevation drops from `45°` to `30°`. The height of the tower is:",
   o:["`10(√3 + 1)` m","`10(√3 − 1)` m","`20(√3 + 1)` m","`10√3` m"],
   a:0,
   why:"**h = x/(√3 − 1)**, so h = 20/(√3 − 1) = 20(√3 + 1)/((√3)² − 1²) = 20(√3 + 1)/2 = `10(√3 + 1)` m. Option B is 20/(√3 + 1), which is what rationalising with the wrong conjugate gives; option C forgets to divide by the `2`. Option D is the height when the change is from `60°` to `30°` instead, where h = (x√3)/2 = `10√3` m.",
   tag:"45° to 30°"},

  {q:"The ratio of the length of the shadow of a vertical pole when the sun's angle of elevation is `30°` to its length when the elevation is `60°` is:",
   o:["`1 : 3`","`√3 : 1`","`1 : √3`","`3 : 1`"],
   a:3,
   why:"**The shadow is h·cotθ**, so the two shadows are h·cot30° = h√3 and h·cot60° = h/√3, and the ratio is √3 ÷ (1/√3) = `3 : 1`. Option A reverses it, and the reversal is the whole mistake: the lower the sun, the longer the shadow, so the `30°` shadow has to be the bigger of the two. Option B comes from reading cot60° as `1`, which is the `45°` shadow and not the `60°` one.",
   tag:"Shadow ratio"},

  {q:"The angles of elevation of the top of a tower from two different points on level ground are equal. It follows that:",
   o:["the two points are on opposite sides of the tower","the two points are equidistant from the foot of the tower","the height of the tower equals the distance between the two points","one point is twice as far from the foot as the other"],
   a:1,
   why:"**The foot distance is d = h·cotθ, which is fixed once h and θ are fixed**, so equal angles force equal distances — the two points lie on one circle centred on the foot of the tower. Option A need not hold: the points may sit anywhere on that circle, on the same side or on opposite sides. Option C is true only at `45°`, where cot45° = 1 and d = h.",
   tag:"Equal angles"},

  {q:"The angle of elevation of a cloud from a point `h` metres above the surface of a lake is `α`, and the angle of depression of its reflection in the lake is `β`. The height of the cloud above the surface of the lake is:",
   o:["h(tanβ − tanα)/(tanβ + tanα)","h(cotβ + cotα)/(cotβ − cotα)","h(tanβ + tanα)/(tanβ − tanα)","2h·tanα/(tanβ − tanα)"],
   a:2,
   why:"**The reflection lies as far below the surface as the cloud is above it, so with the cloud H above the lake and the eye h above it, tanα = (H − h)/d and tanβ = (H + h)/d.** Eliminating d gives (H − h)tanβ = (H + h)tanα, and hence **H = h(tanβ + tanα)/(tanβ − tanα)**. Option A is that fraction inverted, the commonest slip — the sum has to sit on top, because the reflection is seen at the steeper angle and tanβ is the larger. Option D is the cloud's height above the *eye*, H − h, which is one addition short of the answer.",
   tag:"Cloud and lake"},

  {q:"From a point `60` m above the surface of a lake the angle of elevation of a cloud is `30°` and the angle of depression of its reflection is `60°`. The height of the cloud above the lake is:",
   o:["`60` m","`120` m","`180` m","`30` m"],
   a:1,
   why:"**H = h(tanβ + tanα)/(tanβ − tanα)** with h = `60`, α = `30°` and β = `60°`: tanβ + tanα = √3 + 1/√3 = 4/√3 and tanβ − tanα = √3 − 1/√3 = 2/√3, so H = 60 × (4/√3) ÷ (2/√3) = `120` m. Option A is the cloud's height above the eye, `120 − 60`, which is the trap; option C adds the observer's `60` m on again although the formula already measures from the surface, and option D is the fraction turned upside down.",
   tag:"Cloud and lake"},

  {q:"Two pillars of equal height stand on either side of a road `w` metres wide. From a point between them on the road the angles of elevation of the two tops are `α` and `β`. The height of each pillar is:",
   o:["w/(cotα − cotβ)","w(cotα + cotβ)","w/(tanα + tanβ)","w/(cotα + cotβ)"],
   a:3,
   why:"**The point stands h·cotα from one foot and h·cotβ from the other, and those two distances make up the whole road: h·cotα + h·cotβ = w, so h = w/(cotα + cotβ).** Option A, with a minus, is the formula for two points on the *same* side of one tower, h = x/(cotα − cotβ), and that swap of plus for minus is the trap here. Option B multiplies where it should divide, and option C replaces each cotangent by a tangent, which measures the wrong side of each triangle.",
   tag:"Road, two pillars"},

  {q:"Two pillars of equal height stand on either side of a road `100` m wide. From a point between them the angles of elevation of the two tops are `30°` and `60°`. The height of each pillar is:",
   o:["`50√3` m","`25` m","`25√3` m","`75` m"],
   a:2,
   why:"**h = w/(cotα + cotβ)** = 100 ÷ (cot30° + cot60°) = 100 ÷ (√3 + 1/√3) = 100 ÷ (4/√3) = `25√3` m. Options B and D are the two distances along the road from that point to each foot, `25` m and `75` m, and quoting a distance instead of the height is the usual slip. Option A is what the minus version h = x/(cotα − cotβ) gives, `50√3` m, which answers the two-points-on-one-side question instead.",
   tag:"Road, two pillars"},

  {q:"Two pillars of equal height stand on either side of a road. From a point on the road between them the angles of elevation of their tops are `30°` and `60°`. That point divides the road in the ratio:",
   o:["`1 : 3`","`3 : 1`","`√3 : 1`","`1 : 2`"],
   a:1,
   why:"**The two distances are h·cotα and h·cotβ, so the point divides the road in the ratio cotα : cotβ** = cot30° : cot60° = √3 : (1/√3) = `3 : 1`. The point is far from the pillar it sees at `30°` and near the one it sees at `60°`, so taken in the order the angles are given the first term must be the larger. Option A reverses it, which is the whole mistake — the smaller angle always belongs to the longer distance. Option C comes from reading cot60° as `1` rather than `1/√3`.",
   tag:"Road, two pillars"},

  {q:"Two towers stand on level ground. The angle of elevation of the top of the first tower from the foot of the second is `α`, and that of the top of the second from the foot of the first is `β`. The ratio of the height of the first tower to that of the second is:",
   o:["tanα : tanβ","cotα : cotβ","tan²α : tan²β","sinα : sinβ"],
   a:0,
   why:"**Both angles are taken across the same horizontal distance d, so h₁ = d·tanα and h₂ = d·tanβ, and the ratio is tanα : tanβ.** The distance cancels, which is why the question needs no distance at all. Option B is that ratio inverted, since cotα : cotβ is the same as tanβ : tanα, and it is the standard slip. Option D uses the sines, which belong to the slant lines and not to the heights over a common base.",
   d:"h-two-towers",
   tag:"Two towers"},

  {q:"Two towers stand facing each other across a road. From the foot of the first tower the top of the second is seen at `60°`, and from the foot of the second the top of the first is seen at `30°`. The ratio of the height of the first tower to that of the second is:",
   o:["`3 : 1`","`1 : √3`","`√3 : 1`","`1 : 3`"],
   a:3,
   why:"**h₁ = d·tanα and h₂ = d·tanβ, where each angle is the one measured at the other tower's foot**, so the first tower's height carries `30°` and the second's carries `60°`: the ratio is tan30° : tan60° = (1/√3) : √3 = `1 : 3`. Option A is the same ratio read the wrong way round, which happens whenever an angle is attached to the tower it was measured *from* instead of the one it points at. Option B is sin30° : sin60° = `1 : √3`, the right idea with the wrong ratio.",
   tag:"Two towers"},

  {q:"A man on the top of a tower of height `h` sees two objects on the ground on the same side of the tower at angles of depression `α` and `β`, with `α` the smaller of the two. The distance between the two objects is:",
   o:["h(cotα + cotβ)","h(tanα − tanβ)","h(cotα − cotβ)","h(cotβ − cotα)"],
   a:2,
   why:"**An object at a depression of θ stands h·cotθ from the foot of the tower**, so the two objects are h·cotα and h·cotβ out and the gap between them is h(cotα − cotβ). Because α is the smaller angle, cotα is the larger and the difference comes out positive — option D has the subtraction the wrong way round and returns a negative length. Option A is the formula for two objects on *opposite* sides of the tower, and option B uses tangents, which belong to heights rather than distances.",
   tag:"Two objects"},

  {q:"From the top of a tower `150` m high the angles of depression of two cars standing on the same straight road on one side of the tower are `30°` and `60°`. The distance between the two cars is:",
   o:["`100√3` m","`150√3` m","`200√3` m","`50√3` m"],
   a:0,
   why:"**The distance between them is h(cotα − cotβ)** = 150(cot30° − cot60°) = 150(√3 − 1/√3) = 150 × (2/√3) = `100√3` m. The cars themselves stand `150√3` m and `50√3` m from the foot, so options B and D are those two distances — quoting one of them instead of their difference is the usual slip. Option C is 150(cot30° + cot60°) = `200√3` m, which answers the version with the cars on opposite sides of the tower.",
   tag:"Two objects"},

  {q:"The angles of elevation of the top of a tower from two points on the same straight line through its foot are `30°` and `60°`. The tangent of the angle of elevation of the top from the midpoint of the line joining those two points is:",
   o:["`1`","`2/√3`","`√3/4`","`√3/2`"],
   a:3,
   why:"**The two foot distances are h·cot30° = h√3 and h·cot60° = h/√3, so the midpoint stands (h√3 + h/√3)/2 = (4h/√3)/2 = 2h/√3 from the foot, and tanθ = h ÷ (2h/√3) = √3/2.** Option A is tan45°, which is what averaging the two *angles* gives — the height varies as the tangent, so the mean angle is not the angle at the mean point. Option C is what forgetting to halve the sum of the two distances gives, and option B is the reciprocal `2/√3`, which is cotθ rather than tanθ.",
   tag:"Midpoint trap"}
 ],
  note:"Every question above is one line from the sheet. The three results worth knowing cold are h = √(xy) for complementary angles, the shadow as h·cotθ, and h(cotα − cotβ) for two points seen from one height."}
]
}

]});
