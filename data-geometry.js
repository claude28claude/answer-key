/* THE ANSWER KEY — data-geometry.js
   Geometry, as questions, with figures.

   WHAT SSC ACTUALLY ASKS. The syllabus names four things: the triangle and
   its centres, congruence and similarity, the circle with its chords,
   tangents and the angles chords subtend, and the common tangents to two or
   more circles. Four of the twelve topics here are therefore circle topics,
   because four fifths of the geometry in a paper is the circle.

   THE FIGURES are hand-drawn SVG in diagrams.js, one drawing per
   configuration, reused by every question that needs it. They take their
   colours from the stylesheet, so a figure cannot drift out of step with the
   page, and they carry an aria-label so the figure is readable aloud. */

(window.SUBJECTS = window.SUBJECTS || []).push({

id:"geometry", n:"Geometry", tab:"Geometry", sub:"Triangles and circles",
part:"Maths — every formula as a question",
w:"Lines and angles, the triangle and its four centres, similarity, the quadrilaterals, and then the circle in four topics — chords, tangents, segments and two-circle configurations — with the figures drawn.",
intro:"Twelve topics. The plane results first, then the triangle in four topics, then the circle in four, which is where the marks are. Every question that needs a figure carries one.",

topics:[

/* ============================================================ 1 — Lines, angles and the parallel-line results (22 questions) */
{
id:"geo-lines-angles", n:"Lines, angles and the parallel-line results", hy:1,
w:"Complementary and supplementary pairs, the four angles at a crossing, everything a transversal does to two parallel lines, the bisector results, and the clock.",
quick:[
 "**Complement = 90° − θ. Supplement = 180° − θ.** Two angles are complementary when they add to `90°` and supplementary when they add to `180°` — and this one line is where most of the marks in the topic are lost.",
 "At a crossing: **vertically opposite angles are equal**, a **linear pair adds to 180°**, and the angles round a point add to **360°**.",
 "A transversal across two parallel lines: **corresponding angles equal, alternate interior angles equal, co-interior (allied) angles supplementary.** Only eight angles are made, four of one size and four of its supplement.",
 "Each of those three results runs backwards as a **converse**, and the converse is what proves two lines parallel. Two lines perpendicular to the same line are therefore parallel.",
 "**The bisectors of a pair of co-interior angles meet at 90°**; the bisectors of a linear pair are **perpendicular**; the bisectors of two vertically opposite angles lie **in the same straight line**.",
 "Two angles with their arms **respectively parallel**, or **respectively perpendicular**, are either equal or supplementary — never one or the other for certain.",
 "The clock: the angle between the hands is **|30H − 5½M|** degrees, the hands coincide every `65 5/11` minutes, and they are at right angles **44** times a day."
],
blocks:[
 {h:"THE SHEET — every result the topic tests",
  cols:["Asked as","The result","What it is used for"],
  rows:[
  ["**Complementary angles**","Sum `90°`; the complement of θ is `90° − θ`","An angle equal to its own complement is `45°`"],
  ["**Supplementary angles**","Sum `180°`; the supplement of θ is `180° − θ`","An angle equal to its own supplement is `90°`"],
  ["**Linear pair**","Two adjacent angles whose non-common arms are opposite rays; they add to `180°`","Every pair of adjacent angles on a straight line"],
  ["**Vertically opposite angles**","Equal","Two intersecting lines make two such pairs, and the four angles add to `360°`"],
  ["**Angles round a point**","Sum `360°`","The ratio question that divides `360°` instead of `180°`"],
  ["**Adjacent angles**","Common vertex, one common arm, and the non-common arms on **opposite sides** of it","Adjacent does not mean supplementary — only a linear pair does"],
  ["**Corresponding angles**","Equal, when the two lines are parallel","The F shape; the commonest numeric question in the topic"],
  ["**Alternate interior angles**","Equal, when the two lines are parallel","The Z shape"],
  ["**Co-interior (allied) angles**","**Supplementary**, when the two lines are parallel","The C or U shape — the one pair that adds rather than matches"],
  ["**The eight angles**","Four equal to one value and four equal to its supplement","If one of the eight is a right angle, all eight are"],
  ["**The three converses**","Corresponding equal, or alternate interior equal, or co-interior supplementary ⇒ **the lines are parallel**","This is the only way a question can let you conclude `AB ∥ CD`"],
  ["**Two lines ⊥ to the same line**","Parallel to each other","Because the co-interior angles are `90° + 90° = 180°`"],
  ["**Bisectors of a co-interior pair**","Meet at **90°**","The two halves add to `90°`, so the third angle of their triangle is `90°` — whatever the original angles were"],
  ["**Bisectors of a linear pair**","**Perpendicular**","Half of `180°` is `90°`"],
  ["**Bisectors of two vertically opposite angles**","**Opposite rays** — in the same straight line, so the angle between them is `180°`","Not `90°`, which is the linear-pair result"],
  ["**Arms respectively parallel**","The angles are **equal or supplementary**","Equal when both pairs of arms run the same way, supplementary when one pair is reversed"],
  ["**Arms respectively perpendicular**","The angles are **equal or supplementary**","So `70°` pairs with either `70°` or `110°`"],
  ["**Angle between the clock hands**","**|30H − 5½M|** degrees","H is the hour, M the minutes past it"],
  ["**The hands coincide**","Every `65 5/11` minutes — `22` times in `24` hours","1440 ÷ 22 = 720/11 = `65 5/11`"],
  ["**The hands at right angles**","**44** times in `24` hours","Twice in each of the 22 coincidence cycles"],
  ["**Angles in a given ratio**","Divide `90°`, `180°` or `360°` in those parts","Read which total the question is giving you before dividing"]
 ]},

 {careful:"**The complement is 90° − θ and the supplement is 180° − θ.** More marks go on taking the wrong one than on anything else here. When the question says *supplementary* and the options contain both `53°` and `143°` for the same angle, one of those two is only there because the words were skimmed."},

 {careful:"Across two parallel lines, **corresponding** and **alternate interior** angles are *equal*, but **co-interior (allied)** angles are *supplementary*. Setting two co-interior expressions equal to each other, or setting two corresponding expressions to add to `180°`, is the standard way this question is got wrong — and both wrong values are always offered."},

 {careful:"In **|30H − 5½M|** the `5½M` is there because the **hour hand moves too**: it travels `½°` for every minute. Dropping that term turns 3:40 into `150°` instead of `130°`, and `150°` is on the option list every time."},

 {h:"QUESTIONS — lines, angles and the transversal",
  mcq:[
  {q:"The complement of `37°` is:",
   o:["143°","53°","63°","37°"],
   a:1,
   why:"**The complement of θ is 90° − θ**, so 90° − 37° = `53°`. Option A, `143°`, is the **supplement**, `180° − 37°` — the one pair of words the paper relies on being skimmed. Two angles are complementary when they add to `90°` and supplementary when they add to `180°`.",
   tag:"Complement"},

  {q:"Two supplementary angles are in the ratio `7 : 2`. The larger angle is:",
   o:["40°","70°","140°","160°"],
   a:2,
   why:"**Supplementary angles add to 180°**, so the nine parts share `180°` and one part is `20°`: the angles are `140°` and `40°`. Option B, `70°`, is what dividing `90°` in the ratio `7 : 2` gives — the complementary total used by mistake — and option A is the smaller angle, which was not what was asked.",
   tag:"Ratio"},

  {q:"The supplement of an angle is four times its complement. The angle is:",
   o:["30°","45°","72°","60°"],
   a:3,
   why:"**Supplement = 180° − θ and complement = 90° − θ.** So 180° − θ = 4(90° − θ), giving 180° − θ = 360° − 4θ, then 3θ = 180° and θ = `60°`. Check it: the supplement is `120°`, the complement is `30°`, and 120 = 4 × 30. Option B, `45°`, is the angle equal to its own complement, which is a different question.",
   tag:"Complement"},

  {q:"Three angles round a point are in the ratio `2 : 3 : 4`. The largest of them is:",
   o:["160°","80°","120°","90°"],
   a:0,
   why:"**The angles round a point add to 360°.** Nine parts share `360°`, so one part is `40°` and the angles are `80°`, `120°` and `160°`. Option B, `80°`, is both the smallest angle and the answer you get from dividing `180°` instead of `360°` — which is why it is the tempting one. Only a linear pair totals `180°`; a full turn totals `360°`.",
   tag:"Round a point"},

  {q:"Two angles form a linear pair and one of them is `24°` less than the other. The smaller angle is:",
   o:["102°","78°","57°","33°"],
   a:1,
   why:"**The two angles of a linear pair add to 180°.** So θ + (θ − 24°) = 180°, giving θ = `102°` and the smaller angle `78°`. Options C and D, `57°` and `33°`, are the same working done on a total of `90°` — the complementary pair — and option A is the larger angle rather than the smaller.",
   tag:"Linear pair"},

  {q:"Two straight lines cut at O. If ∠AOC = `3x + 10` degrees and the vertically opposite ∠BOD = `5x − 30` degrees, then ∠AOC is:",
   o:["110°","20°","70°","50°"],
   a:2,
   why:"**Vertically opposite angles are equal**, so 3x + 10 = 5x − 30, giving x = `20` and ∠AOC = 3(20) + 10 = `70°`. Option B is the value of x itself, left unsubstituted, and option A, `110°`, is the *adjacent* angle — what you would get by setting the two expressions to add to `180°`, which is the linear-pair rule applied to the wrong pair.",
   tag:"Vertically opposite"},

  {q:"Two angles are adjacent angles when they have a common vertex, a common arm, and:",
   o:["their sum is 180°","their sum is 90°","they are vertically opposite","their non-common arms lie on opposite sides of the common arm"],
   a:3,
   why:"**Adjacent angles share a vertex and an arm, and their non-common arms lie on opposite sides of that common arm** — so they do not overlap. Option A is the extra condition that makes an adjacent pair a **linear pair**; adjacent angles need not add to anything in particular. Vertically opposite angles share only the vertex, not an arm, so they are never adjacent.",
   tag:"Adjacent"},

  {q:"A transversal cuts two parallel lines. Which pair of angles is supplementary rather than equal?",
   o:["Corresponding angles","Co-interior (allied) angles","Alternate interior angles","Vertically opposite angles"],
   a:1,
   why:"**Co-interior (allied) angles are supplementary — they add to 180°.** Corresponding angles and alternate interior angles are **equal**, and vertically opposite angles are equal whether or not the lines are parallel. Co-interior angles are the one pair in the whole configuration that adds instead of matching, and the three names are interchanged more often than any other fact here.",
   tag:"Allied angles"},

  {q:"A transversal cuts two parallel lines, and one of the eight angles formed is `115°`. How many of the eight angles measure `115°`?",
   o:["2","3","4","6"],
   a:2,
   why:"**A transversal across two parallel lines makes only two distinct sizes: four equal to one value and four equal to its supplement.** So `4` angles are `115°` and the other four are `180° − 115° = 65°`. Option A counts only the vertically opposite pair at the one crossing and forgets that the corresponding angles at the second crossing are equal too.",
   tag:"The eight angles"},

  {q:"Two lines cut by a transversal are parallel if:",
   o:["a pair of co-interior angles are equal","a pair of corresponding angles are supplementary","the transversal meets both lines at 45°","a pair of alternate interior angles are equal"],
   a:3,
   why:"**The converse of the alternate-interior-angle result: if a pair of alternate interior angles are equal, the lines are parallel.** The other two valid converses are corresponding angles *equal* and co-interior angles *supplementary*. Options A and B are those same two statements with the conditions swapped round, and that swap is the whole trap — equal co-interior angles mean each is `90°`, which is a special case, not the test.",
   tag:"Converse"},

  {q:"A transversal cuts two parallel lines so that a pair of corresponding angles are `3x + 20` degrees and `5x − 40` degrees. The value of x is:",
   o:["30","25","20","15"],
   a:0,
   why:"**Corresponding angles between parallel lines are equal**, so 3x + 20 = 5x − 40, giving 2x = 60 and x = `30` — the two angles are each `110°`. Option B, `25`, comes from treating the pair as supplementary: 8x − 20 = 180 gives x = 25, which is the **co-interior** rule applied to a corresponding pair.",
   tag:"Corresponding"},

  {q:"In a plane, two lines are each perpendicular to a third line. The two lines are:",
   o:["perpendicular to each other","parallel","inclined at 45°","coincident"],
   a:1,
   why:"The third line is a transversal, and the two co-interior angles it makes are `90°` and `90°`, which add to `180°`. **By the converse of the co-interior-angle result, supplementary co-interior angles mean the lines are parallel.** Option A repeats the condition instead of drawing the conclusion; coincident is wrong because the two lines may meet the third at different points.",
   tag:"Converse"},

  {q:"AB ∥ CD and a transversal cuts them, one of the co-interior angles being `110°`. The bisectors of the two co-interior angles meet at an angle of:",
   o:["55°","125°","90°","35°"],
   a:2,
   why:"**The bisectors of a pair of co-interior angles meet at 90°.** The two angles are `110°` and `70°`, their halves are `55°` and `35°`, and those halves add to `90°`, so the third angle of the triangle the bisectors form is `180° − 90° = 90°`. The `110°` is a distractor — the answer is `90°` whatever the angles are. Options A and D are the two halves, offered to anyone who stops one step early.",
   tag:"Bisectors"},

  {q:"The bisectors of two adjacent angles that form a linear pair are:",
   o:["in the same straight line","parallel","inclined at 45°","perpendicular to each other"],
   a:3,
   why:"**The bisectors of a linear pair are perpendicular.** The two angles add to `180°`, so their halves add to `90°`, and that sum is the angle between the bisectors. Option A is the result for the **bisectors of two vertically opposite angles**, which are opposite rays and so lie in one straight line — the two bisector results are routinely swapped.",
   tag:"Bisectors"},

  {q:"The angle between the bisectors of two vertically opposite angles is:",
   o:["180°","90°","45°","equal to the angle bisected"],
   a:0,
   why:"**The bisectors of two vertically opposite angles are opposite rays**, so together they form a straight line and the angle between them is `180°`. Take lines AB and CD through O: the bisector of ∠AOC and the bisector of ∠BOD point in exactly opposite directions. Option B, `90°`, is the **linear-pair** bisector result put here for the reader who remembers that bisectors give a right angle without remembering which pair.",
   tag:"Bisectors"},

  {q:"Two angles have their arms respectively parallel. The two angles are:",
   o:["always equal","either equal or supplementary","always supplementary","always 90°"],
   a:1,
   why:"**Two angles whose arms are respectively parallel are either equal or supplementary**: equal when both pairs of arms run in the same sense, supplementary when one pair is reversed. The same statement holds for two angles whose arms are respectively **perpendicular**. Option A is the half-remembered version, and it is wrong exactly in the reversed case — which is the case the question is usually built on.",
   tag:"Parallel arms"},

  {q:"∠A and ∠B have their arms respectively perpendicular, and ∠A = `70°`. Then ∠B is:",
   o:["20° or 160°","110° only","70° or 110°","70° only"],
   a:2,
   why:"**Two angles with their arms respectively perpendicular are equal or supplementary**, so ∠B is `70°` or `180° − 70° = 110°`. Option A takes *perpendicular arms* to mean the angles themselves differ by `90°`, which gives `20°` and is the standard misreading — the arms are perpendicular, not the angles. Options B and D each keep only one of the two valid values.",
   tag:"Perpendicular arms"},

  {q:"The angle between the hands of a clock at 3:40 is:",
   o:["150°","120°","140°","130°"],
   a:3,
   why:"**The angle between the hands is |30H − 5½M| degrees.** Here |30(3) − 5½(40)| = |90 − 220| = `130°`. Option A, `150°`, is what you get by leaving the hour hand at the 3: the minute hand is at `240°` and 240 − 90 = 150. The `5½M` term exists because **the hour hand moves ½° per minute**, so by 3:40 it has crept `20°` past the 3.",
   tag:"Clock angle"},

  {q:"The hands of a clock coincide:",
   o:["every 65 5/11 minutes","every 60 minutes","every 64 minutes","every 66 minutes"],
   a:0,
   why:"**The hands coincide 22 times in 24 hours**, so the gap between coincidences is 1440 ÷ 22 = 720/11 = `65 5/11` minutes. Option B assumes one coincidence an hour, which would give 24 in a day — but between 11 and 12 there is no separate coincidence, since the overlap at 12 serves both hours. The same reasoning gives `11` coincidences in `12` hours.",
   tag:"Clock"},

  {q:"In a period of 24 hours the hands of a clock are at right angles:",
   o:["24 times","44 times","48 times","22 times"],
   a:1,
   why:"The hands are at right angles **44 times in 24 hours** — twice in each of the `22` cycles between successive coincidences. Option C, `48`, is the naive count of twice an hour, and it fails for exactly the same reason the coincidence count is `22` and not `24`. In `12` hours the count is `22`.",
   tag:"Clock"},

  {q:"An angle that is equal to its own complement measures:",
   o:["90°","30°","45°","60°"],
   a:2,
   why:"**Complementary angles add to 90°** (the common mistake is to use 180°, which is the supplement total), so θ = 90° − θ gives 2θ = 90° and θ = `45°`. Option A, `90°`, is the angle equal to its own **supplement**, since 180° − 90° = 90°. Keeping those two apart — `45°` for the complement, `90°` for the supplement — is the whole of this question.",
   tag:"Complement"},

  {q:"A transversal cuts two parallel lines and one of the eight angles formed is a right angle. Then:",
   o:["only the vertically opposite angle is a right angle","four are right angles and four are not","the transversal is parallel to both lines","all eight angles are right angles"],
   a:3,
   why:"The eight angles take only two sizes, one being the supplement of the other. **If one angle is 90°, its supplement is also 90°**, so both sizes are `90°` and all eight angles are right angles — the transversal is perpendicular to both lines. Option B is the usual four-and-four picture, which holds for every value except `90°`, and that exception is what the question is testing.",
   tag:"The eight angles"}
 ],
  note:"Every question above is answered by one line from the sheet. Before dividing a ratio, read which total the question gives you — `90°`, `180°` or `360°` — because all three appear in the options."}
]
},

/* ============================================================ 2 — The triangle: sides, angles and inequalities (22 questions) */
{
id:"geo-triangle-basics", n:"The triangle: sides, angles and inequalities", hy:1,
w:"The angle sum and the exterior angle, the triangle inequality in both directions, the order of the sides against the order of the angles, and the test by squares that separates a right triangle from an obtuse one.",
quick:[
 "**The three angles of a triangle add to 180°.** So the two angles of a right triangle other than the right angle are complementary, and a triangle has **at most one** angle of 90° or more — and therefore at least two acute angles.",
 "**An exterior angle of a triangle equals the sum of the two interior opposite angles**, and is therefore greater than either of them. The angle next to it, inside the triangle, is its supplement.",
 "**The exterior angles of any convex polygon, one at each vertex, add to 360°** — whatever the number of sides.",
 "**The sum of any two sides of a triangle is greater than the third**, so the third side lies in **|a − b| < c < a + b**. Both bounds are strict: equality puts the three points on one straight line.",
 "**The greater side faces the greater angle, and the greater angle faces the greater side.** The order of the three sides fixes the order of the three angles by itself.",
 "With `a` the longest side: **a² = b² + c²** right-angled, **a² > b² + c²** obtuse, **b² + c² > a²** acute.",
 "**The base angles of an isosceles triangle are equal**, each `(180° − vertical angle)/2`, and the altitude from the apex bisects the base and the vertical angle. **AB + AC > 2AD** where AD is the median to BC, and the three medians add to less than the perimeter."
],
blocks:[
 {h:"THE SHEET — every result this topic tests",
  cols:["Asked as","The result","What it is used for"],
  rows:[
  ["**Angle sum of a triangle**","∠A + ∠B + ∠C = 180°","Two right angles. In a right triangle the other two angles add to 90°, so they are complementary"],
  ["**Exterior angle**","Exterior angle = the sum of the two interior opposite angles","So it exceeds either of them. The interior angle beside it is its supplement, not its equal"],
  ["**Exterior angles of a polygon**","They add to 360°, one taken at each vertex","True for every n. Each exterior angle of a regular polygon is 360/n"],
  ["**Triangle inequality**","a + b > c, for every one of the three pairs","In practice test the two shorter sides against the longest — if that pair closes, all three do"],
  ["**Range of the third side**","|a − b| < c < a + b","Strict at both ends. Counting the whole numbers available is the usual form of the question"],
  ["**Sides against angles**","The greater side faces the greater angle, and the converse","The longest side faces the largest angle. Pair an angle with the side it does not touch"],
  ["**The test by squares**","a² = b² + c² right, a² > b² + c² obtuse, b² + c² > a² acute","a must be the longest side before the test means anything. The non-acute angle faces the longest side"],
  ["**How many non-acute angles**","At most one right or obtuse angle; at least two acute angles","Two angles of 90° or more would already use up 180°"],
  ["**Angles in a given ratio**","Divide 180° by the sum of the parts","`2 : 3 : 4` gives 40°, 60°, 80°. `1 : 2 : 3` gives 30°, 60°, 90°, a right triangle"],
  ["**Classification**","By sides: scalene, isosceles, equilateral. By angles: acute, right, obtuse","Every equilateral triangle is isosceles as well; a right triangle may also be isosceles"],
  ["**Isosceles triangle**","The two base angles are equal, each (180° − vertical angle)/2","And equal angles face equal sides, which is the converse and is asked just as often"],
  ["**Equilateral triangle**","Every angle 60°; equiangular means equilateral","An isosceles triangle whose vertical angle is 60° is equilateral"],
  ["**Altitude of an isosceles triangle**","The altitude to the base bisects the base and the vertical angle","Each half is a right triangle standing on half the base"],
  ["**Median inequality**","AB + AC > 2AD, where AD is the median to BC","Produce AD its own length: the figure becomes a parallelogram and the inequality is the triangle inequality"],
  ["**Medians against the perimeter**","m₁ + m₂ + m₃ < a + b + c, and more than ¾(a + b + c)","Add the median inequality at all three vertices"]
 ]},

 {careful:"**An exterior angle equals the sum of the two interior opposite angles — not the angle next to it.** The angle next to it, inside the triangle, is its *supplement*. So an exterior angle of 110° with one interior opposite angle of 45° leaves `65°` for the other interior opposite angle, while `70°` is the third angle of the triangle, the one adjacent to the exterior angle. Both numbers are on the page and only one of them was asked for."},

 {careful:"**The triangle inequality is strict.** `7, 7, 14` is not a triangle — the two shorter sides add to exactly the longest, and the three points fall on one straight line with nothing enclosed. `7, 7, 13` is a triangle, however thin it looks. And for the third-side range, both ends are excluded: with sides 8 and 15 the third side satisfies `7 cm < x < 23 cm`, so the whole numbers available run from 8 to 22, not from 7 to 23."},

 {careful:"**In the test by squares the longest side must be the one on its own.** Square the wrong side and the inequality reverses, so an acute triangle reads as obtuse. For `6, 8, 9` the longest side is 9: 6² + 8² = 100 against 9² = 81, so the triangle is acute, even though it looks like the 6-8-10 right triangle with one side trimmed. Trimming the longest side of a right triangle always makes it acute, and lengthening it makes it obtuse."},

 {h:"QUESTIONS — the angles, the sides and the inequalities",
  mcq:[
  {q:"An exterior angle of a triangle is equal to:",
   o:["the sum of the two interior opposite angles","the sum of the three interior angles","the interior angle adjacent to it","the difference of the two interior opposite angles"],
   a:0,
   why:"**An exterior angle of a triangle equals the sum of the two interior opposite angles.** It follows from the angle sum: the exterior angle and the interior angle beside it add to 180°, and so do the three interior angles, so the exterior angle stands in place of the other two. Option C is the trap — the adjacent interior angle is the exterior angle's *supplement*, not its equal. One consequence is worth keeping: an exterior angle is always greater than either of the two interior opposite angles.",
   tag:"Exterior angle"},

  {q:"In the figure, the side BC of △ABC has been produced to D. If ∠BAC = 72° and ∠ABC = 48°, then the exterior angle ∠ACD is:",
   o:["48°","60°","108°","120°"],
   a:3,
   why:"**An exterior angle equals the sum of the two interior opposite angles**, so ∠ACD = ∠BAC + ∠ABC = 72° + 48° = `120°`. Option B, `60°`, is ∠ACB — the interior angle beside the exterior one, and so its supplement; it is the commonest tick because it is the angle the eye lands on at C. Option C is 180° − 72°, which supplements the wrong angle altogether.",
   d:"t-exterior",
   tag:"Exterior angle"},

  {q:"The sum of the exterior angles of a convex polygon, one taken at each vertex, is:",
   o:["(n − 2)180°","360°","180°","360/n degrees"],
   a:1,
   why:"**The exterior angles of any convex polygon, one at each vertex, add to 360°** — the number of sides makes no difference, because going once round the figure turns you through one full revolution. Option A is the *interior* angle sum `(n − 2)180°`, which does grow with n, and option D is each exterior angle of a *regular* polygon. For a triangle the three exterior angles add to `360°` while the interior angles add to `180°`.",
   tag:"Polygon 360°"},

  {q:"Three given lengths can be the sides of a triangle only if:",
   o:["the sum of any two of them is greater than the third","the sum of any two of them is at least as large as the third","the largest of them exceeds the sum of the other two","the difference of any two of them is greater than the third"],
   a:0,
   why:"**The triangle inequality: the sum of any two sides of a triangle is greater than the third**, and it has to hold for all three pairs — in practice it is enough to test the two shorter sides against the longest. Option B allows equality, and when a + b = c the three points lie on one straight line with no triangle enclosed. Option C is the inequality reversed, which nothing can satisfy, and option D confuses the inequality with the lower bound `|a − b| < c`.",
   tag:"Triangle inequality"},

  {q:"Which of these sets of lengths cannot be the sides of a triangle?",
   o:["5 cm, 6 cm, 10 cm","4 cm, 6 cm, 11 cm","7 cm, 7 cm, 13 cm","3 cm, 4 cm, 5 cm"],
   a:1,
   why:"**The two shorter sides must add to more than the longest.** For `4, 6, 11` they give 4 + 6 = 10, which falls short of 11, so the sides will not close. Option C is the tempting one: 7 + 7 = 14 against 13 is a near miss, but 14 is greater than 13 and the triangle exists — a triangle may be as thin as you please so long as the sum strictly exceeds. Options A and D close comfortably, 11 against 10 and 7 against 5.",
   tag:"Triangle inequality"},

  {q:"Two sides of a triangle are 8 cm and 15 cm. The third side `x` must satisfy:",
   o:["8 cm < x < 15 cm","7 cm ≤ x ≤ 23 cm","7 cm < x < 23 cm","x > 7 cm"],
   a:2,
   why:"**|a − b| < c < a + b** — the third side is longer than the difference of the other two and shorter than their sum. Here 15 − 8 = 7 and 15 + 8 = 23, so `7 cm < x < 23 cm`. Option B makes both ends available, and at x = 7 or x = 23 the three points fall on one straight line, so both bounds are strict. Option D keeps the lower bound and drops the upper one, and option A is a belief with nothing behind it — the third side of a triangle with sides 8 and 15 may perfectly well be 20.",
   tag:"Third side"},

  {q:"Two sides of a triangle are 10 cm and 4 cm. The number of whole-number values the third side can take is:",
   o:["6","7","8","9"],
   a:1,
   why:"**|a − b| < c < a + b** gives 10 − 4 = 6 and 10 + 4 = 14, so 6 < c < 14 and the whole numbers available are 7, 8, 9, 10, 11, 12 and 13 — `7` of them. Option D counts 6 and 14 as well, which is the standard slip: both ends are excluded, because equality flattens the triangle into a straight line. Option C counts one end only.",
   tag:"Third side"},

  {q:"In △ABC, ∠A = 50° and ∠B = 60°. The three sides in increasing order of length are:",
   o:["BC, CA, AB","AB, CA, BC","CA, BC, AB","BC, AB, CA"],
   a:0,
   why:"**The greater side faces the greater angle.** ∠C = 180° − 50° − 60° = 70°, so the angles in increasing order are ∠A, ∠B, ∠C, and the sides facing them are BC, CA and AB in the same order. Option B is that order reversed — the decreasing order — and is the commonest tick. The habit to break is pairing an angle with the side that carries its own letter: ∠A goes with BC, the one side it does not touch.",
   tag:"Side and angle"},

  {q:"In △PQR, PQ = 7 cm, QR = 5 cm and PR = 9 cm. The smallest angle of the triangle is:",
   o:["∠Q","∠R","∠P","it cannot be decided from the sides alone"],
   a:2,
   why:"**The converse holds as well: the smaller side faces the smaller angle.** The shortest side is QR = 5 cm and the vertex opposite QR is P, so `∠P` is the smallest angle. Option A, ∠Q, faces the longest side PR = 9 cm and is therefore the *largest* angle — picking it is the exact reversal the question is built on. Option D is the trap for anyone who thinks the angles must be computed first: the order of the three sides settles the order of the three angles by itself.",
   tag:"Side and angle"},

  {q:"The angles of a triangle are in the ratio `2 : 3 : 4`. The largest angle is:",
   o:["40°","60°","90°","80°"],
   a:3,
   why:"**The three angles of a triangle add to 180°**, so one part is 180° ÷ (2 + 3 + 4) = 20° and the angles are 40°, 60° and `80°`. Option A is the smallest angle — the wrong end of the ratio. Option C, `90°`, comes of adding the parts to 8 instead of 9, and a ratio question is decided entirely by the total of the parts, so that total is the one line to check twice.",
   tag:"Angles in ratio"},

  {q:"A triangle has sides 7 cm, 9 cm and 12 cm. The triangle is:",
   o:["acute-angled","right-angled","obtuse-angled","not a triangle at all"],
   a:2,
   why:"**With a the longest side: a² = b² + c² right-angled, a² > b² + c² obtuse, b² + c² > a² acute.** The longest side is 12, and 12² = 144 against 7² + 9² = 130, so the square on the longest side is the greater and the triangle is **obtuse-angled** — the obtuse angle facing the 12 cm side. Option A reads the inequality the wrong way round, which is the whole of the question. The sides pass the triangle inequality (7 + 9 = 16, more than 12), so option D is empty.",
   tag:"Test by squares"},

  {q:"Which of these triangles is right-angled?",
   o:["6 cm, 8 cm, 9 cm","5 cm, 12 cm, 13 cm","4 cm, 5 cm, 6 cm","7 cm, 8 cm, 12 cm"],
   a:1,
   why:"**The test by squares: a triangle is right-angled exactly when the square on the longest side equals the sum of the squares on the other two** — the converse of Pythagoras' theorem. For `5, 12, 13`: 25 + 144 = 169 = 13². Option A is the trap, because `6, 8, 9` looks like the 6-8-10 triple with its longest side trimmed, and trimming the longest side makes a right triangle acute (36 + 64 = 100, more than 81). In option D, 7² + 8² = 113 against 12² = 144, so that one is obtuse.",
   tag:"Test by squares"},

  {q:"Which of these statements about the angles of a triangle is true?",
   o:["a triangle has at most one angle of 90° or more","a triangle has exactly one obtuse angle","a triangle can have two right angles","a triangle has at most one acute angle"],
   a:0,
   why:"**The three angles add to 180°**, so two angles of 90° or more would use up the whole 180° and leave nothing for the third: a triangle has **at most one** right or obtuse angle, and therefore **at least two** acute angles. Option B says every triangle has an obtuse angle, which is false of every acute and every right triangle. Option D is the true statement turned over — it is the non-acute angles that are limited to one, never the acute ones.",
   tag:"One obtuse angle"},

  {q:"The vertical angle of an isosceles triangle is 80°. Each base angle is:",
   o:["40°","100°","80°","50°"],
   a:3,
   why:"**The base angles of an isosceles triangle are equal** — they are the angles facing the two equal sides. With the vertical angle 80°, the two of them share 180° − 80° = 100°, so each is `50°`. Option B is that 100° left unhalved, the commonest slip here. Option A halves the vertical angle instead of halving what is left of 180° once the vertical angle is taken away.",
   tag:"Isosceles"},

  {q:"One base angle of an isosceles triangle is 35°. The vertical angle is:",
   o:["70°","35°","110°","145°"],
   a:2,
   why:"**The base angles of an isosceles triangle are equal**, so both of them are 35° and the vertical angle is 180° − 2(35°) = `110°`. Option D, `145°`, takes off one 35° only — there are two base angles and both must come off, and this is the standard mistake running in the opposite direction to the last question. Option A, `70°`, is the sum of the two base angles rather than what is left after them.",
   tag:"Isosceles"},

  {q:"If the three angles of a triangle are equal, the triangle is:",
   o:["isosceles but not equilateral","scalene","right-angled","equilateral, with every angle 60°"],
   a:3,
   why:"**Equal angles face equal sides**, so three equal angles force three equal sides: the triangle is **equilateral** and each angle is 180° ÷ 3 = `60°`. For a triangle, equiangular and equilateral mean the same thing — the one result read in either direction. Option A is the converse half-remembered: every equilateral triangle is isosceles too, but an isosceles triangle with only two equal angles is not equilateral.",
   tag:"Equilateral"},

  {q:"In the figure, AB = AC = 13 cm and AD, the altitude to the base BC, is 12 cm. BC is:",
   o:["5 cm","10 cm","12 cm","26 cm"],
   a:1,
   why:"**The altitude from the apex of an isosceles triangle bisects the base, and bisects the vertical angle as well**, so BD = DC. In the right triangle ABD, BD = √(13² − 12²) = √25 = 5 cm, and BC = 2 × 5 = `10 cm`. Option A stops at BD, which is only half the base, and is the tick most often made. Option D doubles the equal side instead of doubling the half-base.",
   d:"t-isosceles",
   tag:"Isosceles altitude"},

  {q:"In △ABC the median AD is drawn to the side BC. The sum AB + AC is:",
   o:["equal to 2AD","greater than 2AD","less than 2AD","equal to 2AD when AB = AC"],
   a:1,
   why:"**The sum of any two sides of a triangle is greater than twice the median to the third side: AB + AC > 2AD.** Produce AD its own length to E, so that in ABEC the diagonals AE and BC bisect each other at D; ABEC is then a parallelogram with BE = AC, and the triangle inequality in △ABE gives AB + BE > AE, which is AB + AC > 2AD. Option A is what the construction tempts, because AE really is exactly 2AD — but AB + AC is the sum of the other two sides of △ABE and must *exceed* it. Option D fails too: when AB = AC the median is also the altitude, so AB is the hypotenuse of △ABD and is longer than AD, and the strict inequality still holds.",
   tag:"Median inequality"},

  {q:"The sum of the three medians of a triangle is:",
   o:["equal to the perimeter","greater than the perimeter","less than the perimeter","less than half the perimeter"],
   a:2,
   why:"**The three medians together are less than the perimeter.** Add the median inequality at each vertex — AB + AC > 2AD, BA + BC > 2BE, CA + CB > 2CF — and the left-hand sides give 2(a + b + c) while the right-hand sides give twice the sum of the medians, so the medians add to less than a + b + c. They also add to more than ¾ of the perimeter, which rules out option D: the sum of the medians always lies between ¾(a + b + c) and a + b + c.",
   tag:"Medians"},

  {q:"In a right-angled triangle, the two angles other than the right angle are:",
   o:["supplementary","both obtuse","each 45°","complementary"],
   a:3,
   why:"**The three angles of a triangle add to 180°**, so once one of them is 90° the other two have `90°` to share: they are **complementary**, and each of them is acute. Option A is the trap — supplementary means adding to 180°, which is the whole triangle and not what is left after the right angle is taken out. Option C holds only for the 45°-45°-90° triangle, not for every right triangle.",
   tag:"Angle sum"},

  {q:"An exterior angle of a triangle is 110°, and one of its interior opposite angles is 45°. The other interior opposite angle is:",
   o:["65°","25°","70°","135°"],
   a:0,
   why:"**An exterior angle equals the sum of the two interior opposite angles**, so the other one is 110° − 45° = `65°`. Option C, `70°`, is 180° − 110° — that is the third angle of the triangle, the one adjacent to the exterior angle, and not the interior opposite angle asked for. The check is the angle sum: 45° + 65° + 70° = 180°.",
   tag:"Exterior angle"},

  {q:"The angles of a triangle are in the ratio `1 : 2 : 3`. The triangle is:",
   o:["acute-angled","obtuse-angled","right-angled","no such triangle exists, since 1 + 2 = 3"],
   a:2,
   why:"**The three angles add to 180°**, so one part is 180° ÷ (1 + 2 + 3) = 30° and the angles are 30°, 60° and 90°: the triangle is **right-angled**, and its sides are then in the ratio 1 : √3 : 2. Option D is the trap, and a good one — read `1 : 2 : 3` as a ratio of *sides* and the triangle inequality kills it, since 1 + 2 = 3. The ratio in the question is of the angles, where no such restriction applies. Option A would need all three angles below 90°, which the 90° rules out.",
   tag:"Angles in ratio"}
 ],
  note:"Every question above comes out of one line of the sheet. Two of them turn on the same pair of numbers read the wrong way round — the exterior angle against the interior angle beside it, and the base angle of an isosceles triangle against the vertical angle — and those two pairs are where most of the marks in this topic are lost."}
]
},

/* ============================================================ 3 — The four centres of a triangle (22 questions) */
{
id:"geo-centres", n:"The four centres of a triangle", hy:1,
w:"The four centres, the three angle formulas that are constantly swapped for one another, and where each centre sits in an acute, a right-angled and an obtuse triangle.",
quick:[
 "**Centroid G — the three medians meet there, and it divides each median `2 : 1` from the vertex.** So `AG = (2/3)AD` and `GD = (1/3)AD`. It is always inside the triangle.",
 "**Incentre I — the three angle bisectors meet there, and ∠BIC = 90° + A/2.** It is equidistant from the three **sides**, at distance `r = Δ/s`. Always inside.",
 "**Circumcentre O — the three perpendicular bisectors of the sides meet there, and ∠BOC = 2A.** It is equidistant from the three **vertices**, at distance `R = abc/4Δ`.",
 "**Orthocentre H — the three altitudes meet there, and ∠BHC = 180° − A.**",
 "In a **right** triangle the circumcentre is at the **midpoint of the hypotenuse**, so `R = c/2`, and the orthocentre is at the **right-angle vertex**; the inradius is `r = (a + b − c)/2`.",
 "In an **equilateral** triangle all four centres fall on one point, `R = a/√3`, `r = a/(2√3)`, and therefore **R = 2r**.",
 "**The Euler line**: O, G and H are always collinear, with `OG : GH = 1 : 2`. The incentre and the centroid are always inside; the circumcentre and the orthocentre both fall outside an obtuse triangle."
],
blocks:[
 {h:"THE SHEET — the four centres, line by line",
  cols:["Centre","The three lines that meet there","The angle at it","Where it lies"],
  rows:[
  ["**Centroid G**","the three **medians**","—","always inside; divides each median `2 : 1` from the vertex"],
  ["**Incentre I**","the three **angle bisectors**","**∠BIC = 90° + A/2**","always inside; equidistant from the three **sides**"],
  ["**Circumcentre O**","the three **perpendicular bisectors** of the sides","**∠BOC = 2A**","inside an acute triangle, at the **midpoint of the hypotenuse** of a right one, **outside** an obtuse one; equidistant from the three **vertices**"],
  ["**Orthocentre H**","the three **altitudes**","**∠BHC = 180° − A**","inside an acute triangle, at the **right-angle vertex** of a right one, **outside** an obtuse one"]
 ],
  note:"In every one of the three angle formulas, A is the angle of the triangle at the vertex opposite BC. Only the incentre's formula uses half of it."},

 {h:"THE SHEET — the lengths",
  cols:["Asked for","The formula","The note that makes it usable"],
  rows:[
  ["**Inradius, any triangle**","`r = Δ/s`","Δ is the area, s = (a + b + c)/2 — the **semi**-perimeter, never the perimeter"],
  ["**Circumradius, any triangle**","`R = abc/4Δ`","the product of all three sides over four times the area"],
  ["**Circumradius, right triangle**","`R = c/2`","half the hypotenuse, because the circumcentre is its midpoint"],
  ["**Inradius, right triangle**","`r = (a + b − c)/2`","c is the hypotenuse; the two legs minus the hypotenuse, halved"],
  ["**Circumradius, equilateral**","`R = a/√3`","two thirds of the median, which is `(√3/2)a`"],
  ["**Inradius, equilateral**","`r = a/(2√3)`","one third of the same median"],
  ["**R and r, equilateral**","**R = 2r**","straight from the centroid dividing the median `2 : 1`"],
  ["**Tangent lengths to the incircle**","`s − a`, `s − b`, `s − c`","from A, B and C — the one from A uses a, the side **opposite** A"],
  ["**The Euler line**","O, G, H collinear with `OG : GH = 1 : 2`","G lies one third of the way along from O to H"],
  ["**Centroid on a median**","`AG = (2/3)AD`, `GD = (1/3)AD`","so AG : GD = `2 : 1` but AG : AD = `2 : 3`"],
  ["**Equidistant from the three vertices**","the **circumcentre**","OA = OB = OC = R"],
  ["**Equidistant from the three sides**","the **incentre**","the incircle touches all three sides, so each distance is r"],
  ["**All four centres at one point**","only in an **equilateral** triangle","every median is also a bisector, an altitude and a perpendicular bisector"]
 ]},

 {careful:"Three formulas, one picture, and they are swapped more often than anything else in geometry: **∠BIC = 90° + A/2** at the incentre, **∠BOC = 2A** at the circumcentre, **∠BHC = 180° − A** at the orthocentre. Only the incentre's uses **half** of ∠A. With ∠A = 70° they give `125°`, `140°` and `110°` — three different numbers, and all three are always on the option list."},

 {careful:"**The circumcentre is equidistant from the three vertices; the incentre is equidistant from the three sides.** *Circum* goes round the outside through the corners, *in* sits inside touching the sides. The question is asked in exactly these words every year, and the two answers are each other's trap."},

 {careful:"In a right-angled triangle the two centres sit at opposite ends of the figure: the **circumcentre at the midpoint of the hypotenuse**, the **orthocentre at the right-angle vertex**. Swapping them is the standard slip. The reason for the first is that the angle in a semicircle is `90°`, so the hypotenuse is a diameter."},

 {h:"QUESTIONS — the four centres",
  mcq:[
  {q:"The centroid of a triangle divides each median, measured from the vertex, in the ratio:",
   o:["1 : 2","2 : 1","2 : 3","3 : 1"],
   a:1,
   why:"**The three medians meet at the centroid G, which divides each median in the ratio `2 : 1` measured from the vertex** — so AG : GD = 2 : 1 where D is the midpoint of BC. Option A is the same ratio read the other way, from the midpoint, and is the commonest tick. Option C is a true ratio but a different one: AG : AD = `2 : 3`, the part against the whole median.",
   tag:"Centroid"},

  {q:"The point inside a triangle that is equidistant from its three sides is the:",
   o:["centroid","circumcentre","incentre","orthocentre"],
   a:2,
   why:"**The incentre is where the three angle bisectors meet, and it is equidistant from the three sides** — that common distance is the inradius `r = Δ/s`, and the circle of that radius touches all three sides. The trap is the circumcentre, which is equidistant from the three **vertices**, not the sides. *In* sits inside touching the sides; *circum* goes round through the corners.",
   tag:"Incentre"},

  {q:"The three perpendicular bisectors of the sides of a triangle meet at:",
   o:["the circumcentre","the incentre","the centroid","the orthocentre"],
   a:0,
   why:"**The perpendicular bisectors of the sides are concurrent at the circumcentre O, and OA = OB = OC = R**, so O is equidistant from the three vertices and is the centre of the circle through them. Option B is the meeting point of the **angle bisectors** — bisecting an angle and bisecting a side perpendicularly are two different constructions, and that is the whole confusion here.",
   tag:"Circumcentre"},

  {q:"The three altitudes of a triangle are concurrent at:",
   o:["the incentre","the centroid","the circumcentre","the orthocentre"],
   a:3,
   why:"**The three altitudes meet at the orthocentre H, and ∠BHC = 180° − A.** An altitude runs from a vertex perpendicular to the opposite side; a median runs from a vertex to the **midpoint** of the opposite side, and those meet at the centroid instead. Option B is the trap for anyone who takes the two words as the same thing — they coincide only in an equilateral triangle.",
   tag:"Orthocentre"},

  {q:"In the figure, `AD` is a median of △ABC and `G` is the centroid. If `GD = 4 cm`, then `AD` is:",
   o:["8 cm","12 cm","6 cm","16 cm"],
   a:1,
   why:"**The centroid divides the median `2 : 1` from the vertex, so `GD = (1/3)AD`** and AD = 3 × 4 = `12 cm`. Option A is `AG = 8 cm`, the other piece of the same median — it is the right calculation answering the wrong question, and it is the commonest tick. Option C comes from treating GD as half of AD rather than a third.",
   tag:"Centroid",
   d:"t-centroid"},

  {q:"In the figure, `I` is the incentre of △ABC and `∠A = 70°`. Then `∠BIC` is:",
   o:["110°","140°","125°","55°"],
   a:2,
   why:"**∠BIC = 90° + A/2** = 90° + 35° = `125°`. Option A is `180° − A`, which is the **orthocentre's** angle ∠BHC, and option B is `2A`, which is the **circumcentre's** angle ∠BOC — the three formulas sit on one picture and are swapped constantly. Option D, `55°`, is where the work stops halfway: ∠IBC + ∠ICB = (B + C)/2 = 55°, and ∠BIC is 180° − 55°.",
   tag:"∠BIC",
   d:"t-incentre"},

  {q:"In the figure, `O` is the circumcentre of △ABC and `∠BAC = 40°`. Then `∠BOC` is:",
   o:["80°","110°","140°","20°"],
   a:0,
   why:"**∠BOC = 2A** = `80°`, because the angle at the centre is twice the angle at the circumference standing on the same arc BC. Option B is `90° + A/2`, the **incentre's** angle, and option C is `180° − A`, the **orthocentre's** — those two are the only wrong answers worth offering here. Option D halves ∠A instead of doubling it.",
   tag:"∠BOC",
   d:"t-circumcentre"},

  {q:"In the figure, `H` is the orthocentre of △ABC and `∠A = 50°`. Then `∠BHC` is:",
   o:["100°","115°","50°","130°"],
   a:3,
   why:"**∠BHC = 180° − A** = `130°`. Option A is `2A`, the **circumcentre's** angle, and option B is `90° + A/2`, the **incentre's**. Note what the formula says about shape: ∠BHC is obtuse whenever ∠A is acute, and it equals ∠A only when ∠A = `90°`, where H sits on the vertex itself.",
   tag:"∠BHC",
   d:"t-orthocentre"},

  {q:"`I` is the incentre of △ABC and `∠BIC = 115°`. Then `∠A` is:",
   o:["25°","50°","65°","130°"],
   a:1,
   why:"**∠BIC = 90° + A/2**, so 115° = 90° + A/2, giving A/2 = 25° and `∠A = 50°`. Option A, `25°`, is A/2 left undoubled — the single commonest slip when this formula is run backwards. Option C, `65°`, comes from using the orthocentre's `180° − A` instead.",
   tag:"∠BIC reversed"},

  {q:"The circumcentre O, the centroid G and the orthocentre H of a triangle are always collinear. On that line, `OG : GH` is:",
   o:["1 : 2","2 : 1","1 : 3","1 : 1"],
   a:0,
   why:"**The three points lie on the Euler line, with `OG : GH = 1 : 2`** — the centroid is one third of the way along from the circumcentre to the orthocentre. Option B is the same ratio reversed, and it is tempting because `2 : 1` is the centroid's own ratio on a median; here the 2 belongs to the far side, GH. In an equilateral triangle all three points collapse together and the line vanishes.",
   tag:"Euler line"},

  {q:"The circumcentre of a right-angled triangle lies:",
   o:["at the vertex containing the right angle","outside the triangle","at the midpoint of the hypotenuse","at the midpoint of the longest leg"],
   a:2,
   why:"**In a right-angled triangle the circumcentre is the midpoint of the hypotenuse, so `R = c/2`.** The reason is that the angle in a semicircle is `90°`: the hypotenuse must be a diameter of the circumcircle. Option A is the **orthocentre's** position in a right triangle, and swapping the two is the standard mistake; option B is what happens in an **obtuse** triangle.",
   tag:"Right triangle"},

  {q:"In a right-angled triangle, the orthocentre lies:",
   o:["at the midpoint of the hypotenuse","at the centroid","outside the triangle","at the vertex containing the right angle"],
   a:3,
   why:"**The orthocentre is where the altitudes meet, and in a right triangle the two legs are themselves altitudes** — so they meet at the right-angle vertex, which is therefore H. Option A is the **circumcentre's** position in the same triangle; the two centres sit at opposite ends of the hypotenuse's altitude and are the classic swap. Option C is true only for an obtuse triangle.",
   tag:"Right triangle"},

  {q:"In an obtuse-angled triangle, which two centres lie outside the triangle?",
   o:["the incentre and the centroid","the circumcentre and the orthocentre","the centroid and the orthocentre","the incentre and the circumcentre"],
   a:1,
   why:"**The circumcentre and the orthocentre both fall outside an obtuse triangle; the incentre and the centroid are inside whatever the shape.** The centroid is an average of the three vertices, so it cannot escape, and the incentre is the centre of a circle that fits inside. The perpendicular bisectors and the altitudes, by contrast, have to be produced beyond the sides to meet at all.",
   tag:"Where they lie"},

  {q:"For a triangle with sides `a`, `b`, `c` and area Δ, the circumradius R is:",
   o:["abc/4Δ","Δ/s","abc/2Δ","4Δ/abc"],
   a:0,
   why:"**R = abc/4Δ** — the product of the three sides over four times the area. Option B is `Δ/s`, which is the **inradius**, and those two are the pair that gets swapped; option D is the same formula turned upside down. A check on 5, 12, 13: Δ = 30, so R = (5)(12)(13)/120 = `6.5`, which is half the hypotenuse, as it must be.",
   tag:"R = abc/4Δ"},

  {q:"For a triangle of area Δ with sides a, b, c, the inradius r is:",
   o:["Δ/(a + b + c)","abc/4Δ","Δ/s","2Δ/s"],
   a:2,
   why:"**r = Δ/s, where s = (a + b + c)/2 is the semi-perimeter.** It follows from splitting the triangle into three pieces with the incentre as apex: each has the inradius as its height, so Δ = ½ar + ½br + ½cr = rs. Option A uses the whole perimeter instead of the semi-perimeter and so gives exactly half the right answer — it is the trap on every numeric version of this question.",
   tag:"r = Δ/s"},

  {q:"A triangle has area `84 cm²` and perimeter `42 cm`. Its inradius is:",
   o:["2 cm","8 cm","21 cm","4 cm"],
   a:3,
   why:"**r = Δ/s** with s = 42/2 = 21, so r = 84/21 = `4 cm`. Option A, `2 cm`, is 84 ÷ 42 — the perimeter used where the **semi**-perimeter belongs, which halves the answer and is the one wrong option most often ticked. Option C is the semi-perimeter itself.",
   tag:"r = Δ/s"},

  {q:"A right-angled triangle has legs `6 cm` and `8 cm` and hypotenuse `10 cm`. Its inradius is:",
   o:["2 cm","2.4 cm","4 cm","5 cm"],
   a:0,
   why:"**For a right triangle, `r = (a + b − c)/2`** = (6 + 8 − 10)/2 = `2 cm`, and `r = Δ/s` agrees: 24/12 = 2. Option C is `a + b − c` with the halving forgotten. Option D, `5 cm`, is the **circumradius** `c/2`, and option B is the altitude to the hypotenuse, `ab/c` — three plausible lengths in the same figure, only one of which is the inradius.",
   tag:"Right triangle r"},

  {q:"The circumradius of a triangle whose sides are `5 cm`, `12 cm` and `13 cm` is:",
   o:["13 cm","2 cm","6.5 cm","6 cm"],
   a:2,
   why:"Since 5² + 12² = 13², the triangle is right-angled, so **the circumcentre is the midpoint of the hypotenuse and `R = c/2`** = `6.5 cm`. The general formula agrees: **R = abc/4Δ** = 780/120 = 6.5. Option B, `2 cm`, is the **inradius** (5 + 12 − 13)/2, and option A is the hypotenuse left unhalved.",
   tag:"R = c/2"},

  {q:"In an equilateral triangle, the circumradius R and the inradius r are related by:",
   o:["R = 3r","R = 2r","R = r√3","R = r√2"],
   a:1,
   why:"**`R = a/√3` and `r = a/(2√3)`, so R = 2r.** It is the centroid's `2 : 1` ratio in another dress: all four centres coincide, and the median is also the altitude, so R is two thirds of it and r is one third. Option A is that `2 : 1` misread as the whole against the part, which would make AG : GD equal 3 : 1.",
   tag:"R = 2r"},

  {q:"In the figure, all four centres of an equilateral triangle coincide at a single point. If the side of the triangle is `6√3 cm`, the distance from that point to each vertex is:",
   o:["6 cm","3 cm","9 cm","6√3 cm"],
   a:0,
   why:"The distance to a vertex is the circumradius: **`R = a/√3`** = 6√3/√3 = `6 cm`. Option B is the **inradius** `r = a/(2√3)` = `3 cm`, which is the distance to each **side**, not each vertex — and R = 2r, as it must be. Option C, `9 cm`, is the whole median `(√3/2)a`, of which R is two thirds.",
   tag:"Equilateral",
   d:"t-centres-equi"},

  {q:"In the figure, the incircle of △ABC touches all three sides, cutting each side into the two tangent lengths marked. If `BC = 9 cm`, `CA = 10 cm` and `AB = 11 cm`, the tangent length from `A` is:",
   o:["5 cm","4 cm","15 cm","6 cm"],
   a:3,
   why:"**The tangent lengths from A, B and C to the incircle are `s − a`, `s − b` and `s − c`**, because the two tangents from an external point are equal. Here s = 30/2 = 15, and the length from A is s − a = 15 − 9 = `6 cm`, using a = BC, the side **opposite** A. Option A is `s − b` = 5 and option B is `s − c` = 4 — taking the side next to the vertex instead of the one opposite it is the whole trap.",
   tag:"s − a",
   d:"c-tangent-lengths"},

  {q:"The centroid, the incentre, the circumcentre and the orthocentre of a triangle all fall on the same point in:",
   o:["any isosceles triangle","any right-angled triangle","an equilateral triangle only","any acute-angled triangle"],
   a:2,
   why:"**All four centres coincide only in an equilateral triangle**, because there every median is at the same time an angle bisector, an altitude and a perpendicular bisector of a side, so the four sets of lines are one set. Option A is the near miss worth knowing: in an isosceles triangle all four centres lie on the **axis of symmetry** — collinear, but not the same point. In a right triangle two of them sit at opposite ends of the figure, O at the midpoint of the hypotenuse and H at the right angle.",
   tag:"All four coincide"}
 ],
  note:"Every question above is answered by one line of the sheet. If the three angle formulas are the ones that go wrong, learn them as a set of three with ∠A = 70°: `125°` at the incentre, `140°` at the circumcentre, `110°` at the orthocentre."}
]
},

/* ============================================================ 4 — Medians, bisectors, altitudes and Apollonius (20 questions) */
{
id:"geo-cevians", n:"Medians, bisectors, altitudes and Apollonius", hy:1,
w:"The three cevians, the two length formulas that are asked by name, and the area facts that follow from them.",
quick:[
 "**Apollonius' theorem: AB² + AC² = 2(AD² + BD²)**, where `AD` is the median to `BC` and `BD` is half of `BC`. Asked by name, and asked numerically.",
 "**The median's own length: 4AD² = 2AB² + 2AC² − BC²** — the same theorem rearranged, which is the form worth carrying.",
 "**The sum of the squares of the three medians is ¾(a² + b² + c²).**",
 "**The angle bisector theorem: BD/DC = AB/AC.** The bisector from A cuts the opposite side in the ratio of the two sides *containing* the angle.",
 "**The length of the internal bisector: AD² = AB·AC − BD·DC.**",
 "**An altitude is `2Δ/a`**, so the three altitudes are **inversely** proportional to the three sides.",
 "**The median to the hypotenuse of a right triangle is half the hypotenuse** — the same length as the circumradius, because the circumcentre sits at that midpoint."
],
blocks:[

 {h:"THE SHEET — every result this topic tests",
  cols:["Asked as","The result","The point it turns on"],
  rows:[
   ["**Apollonius' theorem**","AB² + AC² = 2(AD² + BD²), with AD the median to BC","`BD` is **half** of BC, not BC. Putting the whole base in is the standard slip"],
   ["**The length of a median**","4AD² = 2AB² + 2AC² − BC²","Apollonius with BD = BC/2 substituted. The minus sign goes with the side the median is drawn **to**"],
   ["**The sum of the squares of the medians**","¾(a² + b² + c²)","Three quarters, not three halves"],
   ["**The angle bisector theorem**","BD/DC = AB/AC","The ratio of the two sides **containing** the bisected angle, not the two sides touching the base"],
   ["**The length of the internal bisector**","AD² = AB·AC − BD·DC","Product of the two sides, **minus** the product of the two pieces of the base"],
   ["**The external bisector**","BD/DC = AB/AC, with D outside the segment BC","Same ratio, point taken on BC produced"],
   ["**An altitude**","h = 2Δ/a","So `a·h` is the same for all three sides, and the altitudes are inversely proportional to the sides"],
   ["**The altitude of an equilateral triangle**","(√3/2)a","Half the side times √3"],
   ["**The median to the hypotenuse**","Half the hypotenuse","It is also the circumradius, since the circumcentre is that midpoint"],
   ["**A median and area**","A median divides a triangle into two of **equal area**","Equal area, not equal perimeter — the two halves share the median and the equal base"],
   ["**The three medians and area**","They cut the triangle into **six** triangles of equal area","Each is Δ/6; any two adjacent ones make Δ/3"],
   ["**The triangle built on the three medians**","Its area is `¾` of the original","Asked as a fraction, so the answer is 3/4 of Δ"],
   ["**A cevian from A meeting BC at D**","area ABD : area ACD = BD : DC","The two triangles have the same height from A, so the areas go as the bases"],
   ["**The altitude to the hypotenuse, p**","p = ab/c, and 1/p² = 1/a² + 1/b²","Two forms of one fact; the reciprocal form is the one usually asked"],
   ["**The two pieces of the hypotenuse**","p² = BD·DC, and a² = c·BD","The altitude is the geometric mean of the two pieces"]
  ]},

 {careful:"**In Apollonius' theorem the `BD` is half the base.** `AB² + AC² = 2(AD² + BD²)` with `BD = BC/2`. Substituting the whole of BC gives an answer that is always too large, and it is the option the question offers."},

 {careful:"**The angle bisector from A divides BC in the ratio AB : AC** — the two sides that *make* the angle being bisected. Reading it as the ratio of the two sides that *touch* BC gives AC : AB, the ratio upside down, which is the commonest wrong answer in the topic."},

 {careful:"**A median divides a triangle into two parts of equal area, not equal perimeter.** The two halves have the same base and the same height, so the areas must match; the third sides are different, so the perimeters generally do not."},

 {h:"THE FIGURES",
  dia:"t-median-apollonius",
  cap:"The median `AD` to `BC`. Apollonius' theorem relates `AB² + AC²` to `AD²` and `BD²`, where `BD` is half of `BC`."},

 {dia:"t-angle-bisector",
  cap:"`AD` bisects ∠A, so `BD : DC = AB : AC` — the ratio of the two sides that contain the bisected angle."},

 {h:"QUESTIONS — the three cevians",
  mcq:[

  {q:"**Apollonius' theorem** states that, if `AD` is the median to `BC` in △ABC:",
   o:["AB² + AC² = 2(AD² + BD²)","AB² + AC² = AD² + BD²","AB² + AC² = 2AD² + BC²","AB² − AC² = 2(AD² − BD²)"],
   a:0,
   why:"**AB² + AC² = 2(AD² + BD²)**, where `BD` is **half** of `BC`. Option C is the same statement with the whole base put in instead of half of it, which is the standard slip and always too large — in the correct form the base enters as `2BD² = BC²/2`.",
   tag:"Apollonius",
   d:"t-median-apollonius"},

  {q:"In △ABC, `AB = 5 cm`, `AC = 7 cm` and `BC = 6 cm`. The length of the median `AD` to `BC` is:",
   o:["√37 cm","√19 cm","4 cm","2√7 cm"],
   a:3,
   why:"**AB² + AC² = 2(AD² + BD²)** with `BD = 3`: 25 + 49 = 2(AD² + 9), so 74 = 2AD² + 18, AD² = 28 and `AD = 2√7 cm`. Option A (√37) is what you get by dropping the `a²` term entirely — `m² = (b² + c²)/2 = 37` — and option C (4 cm) is a round-number trap that is neither the half-base (3) nor the median.",
   tag:"Apollonius",
   d:"t-median-apollonius"},

  {q:"The length of the median to side `a` is given by:",
   o:["4m² = 2b² + 2c² + a²","2m² = b² + c² − a²","m² = (b² + c²)/2","4m² = 2b² + 2c² − a²"],
   a:3,
   why:"**4m² = 2b² + 2c² − a².** The side the median is drawn *to* is the one that is subtracted, and it is the only one of the three that is. Option A adds it instead, and option C is the same expression with the `a²` term simply dropped.",
   tag:"Median length"},

  {q:"If the sum of the squares of the sides of a triangle is `120 cm²`, the sum of the squares of its three medians is:",
   o:["90 cm²","160 cm²","60 cm²","40 cm²"],
   a:0,
   why:"**The sum of the squares of the medians is ¾(a² + b² + c²)** = ¾ × 120 = `90 cm²`. Option B is the ratio taken the other way up, `4/3` of 120, and option D is a third of the total — the answer for one median only, which the formula does not give.",
   tag:"Medians"},

  {q:"In △ABC, `AD` bisects ∠A and meets `BC` at D. Then:",
   o:["BD/DC = AC/AB","BD/DC = AB/BC","BD/DC = AB/AC","BD = DC"],
   a:2,
   why:"**The angle bisector theorem: BD/DC = AB/AC** — the ratio of the two sides that *contain* the bisected angle. Option A is that ratio upside down and is the commonest wrong answer; option D would make AD a median, which a bisector is only when the triangle is isosceles.",
   tag:"Angle bisector",
   d:"t-angle-bisector"},

  {q:"In △ABC, `AB = 6 cm`, `AC = 8 cm` and `BC = 7 cm`. If `AD` bisects ∠A, then `BD` is:",
   o:["4 cm","3.5 cm","3 cm","2 cm"],
   a:2,
   why:"**BD/DC = AB/AC** = 6/8 = 3/4, so BD and DC divide `7 cm` in the ratio `3 : 4`, giving `BD = 3 cm` and DC = 4 cm. Option A is `DC`, the other piece — it is what the ratio taken upside down produces; option B is half the base, which would be the median.",
   tag:"Angle bisector",
   d:"t-angle-bisector"},

  {q:"With `AB = 6 cm`, `AC = 8 cm`, `BD = 3 cm` and `DC = 4 cm`, the length of the bisector `AD` is:",
   o:["6 cm","√60 cm","5 cm","7 cm"],
   a:0,
   why:"**AD² = AB·AC − BD·DC** = 6 × 8 − 3 × 4 = 48 − 12 = 36, so `AD = 6 cm`. Option B is what adding the two products instead of subtracting gives, and the subtraction is the whole content of the formula.",
   tag:"Bisector length"},

  {q:"The area of a triangle is `24 cm²` and one side is `8 cm`. The altitude to that side is:",
   o:["3 cm","12 cm","6 cm","4 cm"],
   a:2,
   why:"**h = 2Δ/a** = (2 × 24)/8 = `6 cm`. Option A is `Δ/a`, the area divided by the side with the 2 forgotten, and it is the standard slip — the area is `½ × base × height`, so undoing it needs the 2 put back.",
   tag:"Altitude"},

  {q:"The sides of a triangle are in the ratio `3 : 4 : 6`. Its altitudes are in the ratio:",
   o:["3 : 4 : 6","6 : 4 : 3","2 : 3 : 4","4 : 3 : 2"],
   a:3,
   why:"**Each altitude is `2Δ/a`, so the altitudes are inversely proportional to the sides**: the ratio is 1/3 : 1/4 : 1/6, which multiplied through by 12 is `4 : 3 : 2`. Option A has them directly proportional, which is the trap; option B reverses the correct answer by pairing the ratios in the wrong order.",
   tag:"Altitudes"},

  {q:"The hypotenuse of a right-angled triangle is `26 cm`. The median drawn to it is:",
   o:["13 cm","26 cm","6.5 cm","√26 cm"],
   a:0,
   why:"**The median to the hypotenuse is half the hypotenuse**, so it is `13 cm`. It equals the circumradius, because the circumcentre of a right triangle sits at the midpoint of the hypotenuse. Option C halves it twice.",
   tag:"Right triangle"},

  {q:"The three medians of a triangle of area `Δ` divide it into:",
   o:["three triangles of area Δ/3","six triangles of equal area Δ/6","four triangles of area Δ/4","six triangles of unequal area"],
   a:1,
   why:"**The three medians cut a triangle into six triangles of equal area, each `Δ/6`.** Option A is what the three *cevians to the centroid taken in pairs* give — the three quadrilateral-free regions around the centroid are Δ/3 each, which is two of the six, so it is a true statement about a different division.",
   tag:"Medians and area"},

  {q:"A median of a triangle divides it into two triangles that are necessarily equal in:",
   o:["perimeter","both area and perimeter","neither","area"],
   a:3,
   why:"**A median divides a triangle into two parts of equal area**: the two halves stand on equal bases (`BD = DC`) and share the same apex, so they have the same height. Their third sides `AB` and `AC` are generally different, so the perimeters are not equal — option B is the trap.",
   tag:"Medians and area"},

  {q:"A triangle is constructed whose sides are equal in length to the three medians of a triangle of area `Δ`. Its area is:",
   o:["Δ/2","(4/3)Δ","(2/3)Δ","(3/4)Δ"],
   a:3,
   why:"**The triangle built on the three medians has `3/4` of the original area.** Option B is that fraction inverted, which is the area of the original in terms of the median triangle rather than the other way round, and it is the standard confusion.",
   tag:"Medians and area"},

  {q:"`D` lies on `BC` of △ABC with `BD : DC = 2 : 3`. The ratio of the areas of △ABD and △ACD is:",
   o:["4 : 9","2 : 3","3 : 2","1 : 1"],
   a:1,
   why:"**Both triangles have the same height from A, so their areas are in the ratio of their bases**, `2 : 3`. Option A squares the ratio, which is right for *similar* triangles and wrong here — these two share a vertex but are not similar.",
   tag:"Cevian and area"},

  {q:"The altitude of an equilateral triangle of side `10 cm` is:",
   o:["10√3 cm","5 cm","5√3 cm","25√3 cm"],
   a:2,
   why:"**The altitude of an equilateral triangle is `(√3/2)a`** = (√3/2) × 10 = `5√3 cm`, because the altitude bisects the base and leaves a 30-60-90 triangle with legs 5 and 5√3. Option D is the area, `(√3/4)a²`, offered where a length was asked.",
   tag:"Equilateral"},

  {q:"In a right triangle the legs are `a` and `b` and the hypotenuse is `c`. The altitude `p` to the hypotenuse is:",
   o:["(a + b)/c","ab/c","c/2","ab/2"],
   a:1,
   why:"**p = ab/c.** The area can be written two ways — `½ab` using the legs and `½cp` using the hypotenuse — so `ab = cp`. Option C is the median to the hypotenuse, a different cevian to the same side, and that is the confusion the question is built on.",
   tag:"Right triangle",
   d:"t-right-altitude"},

  {q:"For the same right triangle, `1/p²` equals:",
   o:["1/a² + 1/b²","1/a² − 1/b²","1/c²","(1/a + 1/b)²"],
   a:0,
   why:"**1/p² = 1/a² + 1/b².** It follows from `p = ab/c` and `c² = a² + b²`: 1/p² = c²/(a²b²) = (a² + b²)/(a²b²). Option D is the same two reciprocals added *before* squaring rather than after, which is a different number.",
   tag:"Right triangle",
   d:"t-right-altitude"},

  {q:"The altitude to the hypotenuse divides it into pieces of `4 cm` and `9 cm`. The altitude is:",
   o:["13 cm","6.5 cm","6 cm","36 cm"],
   a:2,
   why:"**The altitude is the geometric mean of the two pieces: p² = BD·DC** = 4 × 9 = 36, so `p = 6 cm`. Option A adds the pieces, giving the hypotenuse itself, and option D is `p²` left un-rooted.",
   tag:"Right triangle",
   d:"t-right-altitude"},

  {q:"The **external** bisector of ∠A meets `BC` produced at D. Then `BD : DC` equals:",
   o:["AC : AB","AB : AC","AB : BC","1 : 1"],
   a:1,
   why:"**The external bisector divides the opposite side externally in the same ratio `AB : AC`** as the internal one divides it internally — the ratio is unchanged, only the point moves outside the segment. Option A is that ratio inverted.",
   tag:"External bisector"},

  {q:"Which of these is true of **every** triangle?",
   o:["a median is perpendicular to the side it meets","the three medians meet at one point","a median bisects the angle it is drawn from","an altitude always falls inside the triangle"],
   a:1,
   why:"**The three medians of any triangle are concurrent, at the centroid.** A median is perpendicular to its side, or bisects its angle, only in an isosceles triangle taken from the apex; and in an obtuse triangle two of the three altitudes fall **outside**, which is what makes option D false.",
   tag:"What is always true"}

  ],
  note:"Every question above comes from one row of the sheet. The two that are asked by name — Apollonius' theorem and the angle bisector theorem — are worth knowing by name as well as by formula, because the question sometimes gives you only the name."}

]
},

/* ============================================================ 5 — Congruence, similarity and the proportionality theorem (22 questions) */
{
id:"geo-similar", n:"Congruence, similarity and the proportionality theorem", hy:1,
w:"The five congruence criteria and the one that is not a criterion, the three similarity criteria, and every proportion that follows from a line drawn parallel to a side.",
quick:[
 "Congruence: **SSS, SAS, ASA, AAS, RHS**. **SSA is not a criterion** — and RHS is the one case of it that works, because the angle is a right angle.",
 "Similarity: **AA (or AAA), SSS, SAS**. Congruent triangles are similar with ratio `1 : 1`; similar triangles need not be congruent.",
 "**In similar triangles the ratio of the areas is the square of the ratio of the corresponding sides.** Every *length* — median, altitude, bisector, perimeter, inradius, circumradius — keeps the plain ratio.",
 "**The basic proportionality (Thales) theorem: DE ∥ BC ⇒ AD/DB = AE/EC**, and the converse proves DE ∥ BC. The corollary uses the whole sides: `AD/AB = AE/AC = DE/BC`.",
 "**The midpoint theorem: DE ∥ BC and DE = ½BC** when D and E are the midpoints of AB and AC. The converse: a line through one midpoint parallel to a second side bisects the third.",
 "Triangles of the **same height** have areas in the ratio of their **bases**; triangles on the **same base and between the same parallels** are **equal in area**.",
 "In a trapezium with AB ∥ DC the diagonals cut at O with **AO : OC = BO : OD = AB : DC**, and **△AOD and △BOC are equal in area**."
],
blocks:[
 {h:"THE SHEET — every criterion and every proportion",
  cols:["Asked as","What it says","The form the question uses"],
  rows:[
  ["**SSS, SAS, ASA, AAS, RHS**","The five criteria for congruence","Three sides; two sides and the *included* angle; two angles and the included side; two angles and a non-included side; the hypotenuse and one side of a right triangle"],
  ["**SSA**","Not a criterion","Two sides and a non-included angle leave two different triangles possible. RHS is the single case that works, because there the angle is `90°`"],
  ["**AAA**","Proves similarity, never congruence","Equal angles fix the shape and say nothing about the size"],
  ["**AA (AAA) similarity**","Two angles equal ⇒ the triangles are similar","The third pair follows from the `180°` angle sum, so two pairs are enough"],
  ["**SSS similarity**","All three pairs of sides proportional ⇒ similar","4, 6, 8 and 6, 9, 12 are similar in the ratio `2 : 3`"],
  ["**SAS similarity**","Two pairs of sides proportional with the included angles equal ⇒ similar","∠A = ∠P and AB/PQ = AC/PR"],
  ["**Congruent ⇒ similar**","Congruence is similarity with ratio `1 : 1`","The converse is false — similar triangles need not be congruent"],
  ["**Ratio of areas of similar triangles**","The square of the ratio of corresponding sides","Sides `3 : 4` give areas `9 : 16`; areas `49 : 81` give sides `7 : 9`"],
  ["**Ratio of any corresponding length**","Equal to the ratio of the sides","Medians, altitudes, angle bisectors, perimeters, inradii and circumradii all scale with the plain ratio; only the areas take the square"],
  ["**Basic proportionality (Thales) theorem**","DE ∥ BC ⇒ `AD/DB = AE/EC`","The two *parts* of one side against the two parts of the other — not the whole sides"],
  ["**Converse of the basic proportionality theorem**","`AD/DB = AE/EC` ⇒ DE ∥ BC","The test for a line being parallel to the third side"],
  ["**The corollary of the proportionality theorem**","`AD/AB = AE/AC = DE/BC`","The only route from AD to DE, and it uses the whole side AB"],
  ["**The midpoint theorem**","The segment joining the midpoints of two sides is parallel to the third and half of it","DE ∥ BC and `DE = ½BC`; the medial triangle has `¼` of the area"],
  ["**Converse of the midpoint theorem**","A line through the midpoint of one side, parallel to a second side, bisects the third","The special case of the converse of the proportionality theorem with `AD/DB = 1`"],
  ["**Triangles of the same height**","Areas in the ratio of their bases","Bases `5 : 8` give areas `5 : 8`, not `25 : 64` — squaring belongs to similar triangles only"],
  ["**Same base, between the same parallels**","Equal in area","Equal area does not make them congruent or similar"],
  ["**The diagonals of a trapezium**","AB ∥ DC ⇒ `AO : OC = BO : OD = AB : DC`","△AOB ∼ △COD by AA, so their areas are in the ratio AB² : DC²"],
  ["**The slant-side triangles of a trapezium**","△AOD and △BOC are equal in area","△ABD and △ABC are equal on the base AB, and the common △AOB subtracts from each"],
  ["**The altitude to the hypotenuse**","△ACD ∼ △CBD ∼ △ABC","Three mutually similar triangles; the length relations that follow belong to the right-triangle topic"]
 ]},

 {h:"TWO SIMILAR TRIANGLES", dia:"t-similar",
  cap:"Corresponding sides in the ratio `k : 1` put every corresponding length — median, altitude, bisector, perimeter, inradius, circumradius — in the ratio `k : 1`, and the areas in the ratio `k² : 1`."},

 {careful:"**The square belongs to the areas and to nothing else.** Corresponding sides in the ratio `2 : 3` give medians, altitudes, angle bisectors, perimeters, inradii and circumradii in the ratio `2 : 3`, and areas in the ratio `4 : 9`. Using `4 : 9` for a median, or `2 : 3` for an area, is the commonest loss of marks in the topic — and both wrong numbers are always among the options."},

 {careful:"**The proportionality theorem compares the parts of the two sides with each other, never with BC.** `AD/DB = AE/EC` is the theorem; `AD/AB = AE/AC = DE/BC` is the corollary, and it uses the **whole** side AB. Writing `AD/DB = DE/BC` is false, and it is the option put there for it."},

 {careful:"**SSA is not a congruence criterion, but RHS is.** Two sides and a non-included angle leave two triangles possible; the right angle in RHS removes that second possibility. And **AAA proves similarity only** — the one criterion that never gives congruence, because it fixes no length at all."},

 {h:"QUESTIONS — congruence, similarity and proportion",
  mcq:[
  {q:"Which of the following is **not** a criterion for the congruence of two triangles?",
   o:["SAS","ASA","SSA","RHS"],
   a:2,
   why:"The criteria are **SSS, SAS, ASA, AAS and RHS**. **SSA — two sides and a non-included angle — is not one**, because that data leaves two different triangles possible. Option D is the trap, since it looks like the same arrangement and is a genuine criterion: in **RHS** the angle is the right angle, which removes the second possibility, and that is exactly why RHS is allowed where SSA is not.",
   tag:"SSA"},

  {q:"In △ABC and △PQR, ∠A = ∠P = 50° and ∠B = ∠Q = 60°. The two triangles are:",
   o:["congruent by ASA","similar by the AA criterion","congruent by AAA","neither congruent nor similar"],
   a:1,
   why:"**AA (AAA) similarity: if two angles of one triangle equal two angles of another, the triangles are similar** — the third pair is forced by the `180°` angle sum, so both third angles are `70°`. Nothing here fixes a length, so the triangles need not be congruent. Option C is the trap: **AAA proves similarity and never congruence**, and the ASA of option A needs the included side to be equal as well.",
   tag:"AA similarity"},

  {q:"The corresponding sides of two similar triangles are in the ratio `3 : 4`. The ratio of their areas is:",
   o:["9 : 16","3 : 4","27 : 64","√3 : 2"],
   a:0,
   why:"**In similar triangles the ratio of the areas is the square of the ratio of the corresponding sides.** So `3 : 4` gives 3² : 4² = `9 : 16`. Option B hands back the side ratio unchanged, which is the commonest error in the topic; option C cubes it, which is the ratio of volumes of similar solids and not of areas.",
   tag:"Area ratio"},

  {q:"The areas of two similar triangles are in the ratio `49 : 81`. The ratio of their corresponding medians is:",
   o:["49 : 81","7 : 9","√7 : 3","2401 : 6561"],
   a:1,
   why:"**Every corresponding length in similar triangles — median, altitude, angle bisector, perimeter, inradius, circumradius — is in the ratio of the sides, and only the areas take the square.** So the sides, and with them the medians, are in the ratio √49 : √81 = `7 : 9`. Option A gives back the area ratio where a length was asked for, and option D squares it a second time.",
   tag:"Area ratio"},

  {q:"The perimeters of two similar triangles are `30 cm` and `20 cm`. If one side of the first is `12 cm`, the corresponding side of the second is:",
   o:["18 cm","6 cm","9 cm","8 cm"],
   a:3,
   why:"**The ratio of the perimeters of two similar triangles equals the ratio of their corresponding sides**, here `30 : 20 = 3 : 2`. So the side asked for is 12 × 2/3 = `8 cm`. Option A, `18 cm`, is 12 × 3/2 — the ratio applied the wrong way round, which is the slip to watch for whenever the larger triangle is named first.",
   tag:"Perimeters"},

  {q:"In the figure, D lies on AB and E on AC of △ABC with DE ∥ BC. The basic proportionality theorem states that:",
   o:["AD/DB = EC/AE","AD/AB = DB/EC","AD/DB = AE/EC","AD/DE = AB/BC"],
   a:2,
   why:"**The basic proportionality theorem (Thales): if a line is drawn parallel to one side of a triangle, it divides the other two sides in the same ratio — DE ∥ BC ⇒ AD/DB = AE/EC.** The two *parts* of AB are in the same ratio as the two parts of AC. Option A is the same statement with one side inverted, and option D mixes a part of a side with the parallel segments, which is the corollary's work: `AD/AB = AE/AC = DE/BC`.",
   tag:"BPT",
   d:"t-bpt"},

  {q:"In △ABC, DE ∥ BC with D on AB and E on AC. If AD = 3 cm, DB = 6 cm and AE = 4 cm, then EC is:",
   o:["8 cm","2 cm","12 cm","6 cm"],
   a:0,
   why:"By the **basic proportionality theorem**, `AD/DB = AE/EC`, so 3/6 = 4/EC and `EC = 8 cm`. Option B, `2 cm`, is what writing the proportion upside down as AE/EC = DB/AD gives. AC is then `12 cm`, which is option C — the whole side, not the part that was asked for.",
   tag:"BPT"},

  {q:"In △ABC, DE ∥ BC with D on AB and E on AC. If AD = 2 cm, AB = 6 cm and BC = 9 cm, then DE is:",
   o:["6 cm","3 cm","4.5 cm","1.5 cm"],
   a:1,
   why:"The corollary of the **basic proportionality theorem** is `AD/AB = AE/AC = DE/BC`, and it uses the *whole* side AB, not the part DB. So 2/6 = DE/9 and `DE = 3 cm`. Option C, `4.5 cm`, is what the false proportion AD/DB = DE/BC gives, since DB = 4 cm — and that is the one slip this question exists to catch.",
   tag:"BPT corollary"},

  {q:"In △ABC, D lies on AB and E on AC with AD = 2 cm, DB = 3 cm, AE = 4 cm and EC = 6 cm. It follows that:",
   o:["DE ⊥ BC","DE = ½BC","D and E are the midpoints of AB and AC","DE ∥ BC"],
   a:3,
   why:"`AD/DB = 2/3` and `AE/EC = 4/6 = 2/3` are equal, so by the **converse of the basic proportionality theorem DE ∥ BC**. Option B is the trap: DE is parallel to BC but it is not half of it — `AD/AB = 2/5`, so DE = (2/5)BC by the corollary. Half would need D and E to be the midpoints, which is option C and is false here.",
   tag:"Converse of BPT"},

  {q:"In the figure, D and E are the midpoints of AB and AC of △ABC. If BC = 14 cm, then DE is:",
   o:["7 cm and parallel to BC","7 cm and perpendicular to BC","14 cm and parallel to BC","3.5 cm and parallel to BC"],
   a:0,
   why:"**The midpoint theorem: the segment joining the midpoints of two sides of a triangle is parallel to the third side and equal to half of it.** So DE = ½ × 14 = `7 cm` and DE ∥ BC. The theorem has two halves and both are asked here, which is why option B is offered — the length right and the relation wrong. Nothing in the theorem makes DE perpendicular to anything.",
   tag:"Midpoint theorem",
   d:"t-midpoint"},

  {q:"The midpoints of the three sides of △ABC are joined. The ratio of the area of the triangle so formed to the area of △ABC is:",
   o:["1 : 2","1 : 4","1 : 3","1 : 8"],
   a:1,
   why:"Each side of the inner triangle is half the corresponding side of △ABC by the **midpoint theorem**, so the two triangles are similar in the ratio `1 : 2`, and **the ratio of the areas is the square of that**, `1 : 4`. Seen directly, the three joining segments cut △ABC into four congruent triangles. Option A is the side ratio, offered because it is the number the midpoint theorem puts in front of you.",
   tag:"Medial triangle"},

  {q:"In △ABC, D is the midpoint of AB and the line through D parallel to BC meets AC at E. Then E is:",
   o:["the midpoint of AC","a point with AE : EC = 1 : 2","a point with AE : EC = 2 : 1","the foot of the altitude from A"],
   a:0,
   why:"**The converse of the midpoint theorem: a line drawn through the midpoint of one side of a triangle, parallel to a second side, bisects the third side.** So E is the midpoint of AC. It is the special case of the **converse of the basic proportionality theorem** with `AD/DB = 1`: the ratio on AC must copy the ratio on AB, and that ratio is `1 : 1`, which is why the `1 : 2` and `2 : 1` of options B and C are both wrong.",
   tag:"Converse midpoint"},

  {q:"Two triangles have the same height, and their bases are `5 cm` and `8 cm`. The ratio of their areas is:",
   o:["25 : 64","5 : 8","8 : 5","√5 : √8"],
   a:1,
   why:"**Two triangles of the same height have areas in the ratio of their bases**, so the ratio is `5 : 8`. Option A squares the ratio, and squaring is correct only for *similar* triangles — equal height says nothing at all about shape, so there is no similarity to square. Option C is the same ratio reversed.",
   tag:"Same height"},

  {q:"Two triangles standing on the same base and between the same pair of parallel lines are always:",
   o:["congruent","similar","equal in perimeter","equal in area"],
   a:3,
   why:"**Triangles on the same base and between the same parallels are equal in area**, because they share the base and the parallels fix the height. They need not be congruent or similar — the apex may sit anywhere along the parallel line — so options A and B are both wrong, and option C fails for the same reason: the slant sides change while the area does not.",
   tag:"Same base"},

  {q:"In the figure, ABCD is a trapezium with AB ∥ DC, AB = 9 cm and DC = 6 cm, and the diagonals meet at O. Then AO : OC is:",
   o:["2 : 3","3 : 2","9 : 4","1 : 1"],
   a:1,
   why:"△AOB ∼ △COD by **AA similarity** — AB ∥ DC makes ∠OAB = ∠OCD and ∠OBA = ∠ODC alternate angles — so **AO : OC = BO : OD = AB : DC** = 9 : 6 = `3 : 2`. Option C, `9 : 4`, is the ratio of the *areas* of those two triangles, which is the square of the side ratio; option A is the ratio taken from the wrong end.",
   tag:"Trapezium diagonals",
   d:"q-trapezium-diag"},

  {q:"ABCD is a trapezium in which AB ∥ DC and AB = 2 DC, and the diagonals cut at O. The ratio of the area of △AOB to the area of △COD is:",
   o:["1 : 2","2 : 1","4 : 1","1 : 4"],
   a:2,
   why:"△AOB ∼ △COD, so **the ratio of their areas is the square of the ratio of AB to DC**: (2 : 1)² = `4 : 1`. Option B is the side ratio left unsquared, which is the standard slip here. The two triangles on the slant sides, △AOD and △BOC, are **equal in area** whatever AB and DC may be.",
   tag:"Trapezium areas"},

  {q:"In the figure, ABCD is a trapezium with AB ∥ DC and its diagonals meet at O. Which two triangles are equal in area?",
   o:["△AOB and △COD","△AOD and △BOC","△AOB and △AOD","△BOC and △COD"],
   a:1,
   why:"△ABD and △ABC stand on the same base AB and between the same parallels AB and DC, so they are **equal in area**; taking the common △AOB away from each leaves **△AOD and △BOC equal in area**. Option A is the trap: △AOB and △COD are *similar*, but equal only if AB = DC, which would make the figure a parallelogram and not a trapezium.",
   tag:"Trapezium",
   d:"q-trapezium-diag"},

  {q:"In a right-angled triangle ABC with the right angle at C, the altitude CD is drawn to the hypotenuse AB. This produces:",
   o:["two triangles congruent to each other","two triangles similar to each other but not to △ABC","two equilateral triangles","three mutually similar triangles"],
   a:3,
   why:"**The altitude from the right angle to the hypotenuse gives △ACD ∼ △CBD ∼ △ABC** — three mutually similar triangles, since each has a right angle and shares one acute angle with △ABC. Option B is the trap: the two small triangles are similar to the original as well, and that is the whole point of the result. Option A holds only when △ABC is isosceles. The length relations that follow from this similarity belong to the right-triangle topic.",
   tag:"Right triangle"},

  {q:"Two congruent triangles are:",
   o:["similar with ratio of sides 1 : 1","similar with ratio of areas 1 : 2","not necessarily similar","similar only if they are equilateral"],
   a:0,
   why:"**Congruence is similarity with the ratio of corresponding sides equal to `1 : 1`**, so congruent triangles are always similar, and their areas are in the ratio 1² : 1² = `1 : 1`. The converse fails: similar triangles need not be congruent, because the ratio may be anything. Option B is the trap for anyone who remembers that areas take the square and then squares the wrong way — the square of `1 : 1` is still `1 : 1`.",
   tag:"Congruent ⇒ similar"},

  {q:"In △ABC and △PQR, ∠A = ∠P and AB/PQ = AC/PR. The triangles are similar by:",
   o:["AA similarity","SSS similarity","SAS similarity","RHS congruence"],
   a:2,
   why:"**SAS similarity: if one angle of a triangle equals one angle of another and the sides containing those angles are proportional, the triangles are similar.** Here ∠A = ∠P is the included angle for the two proportional pairs, which is exactly the criterion. Option D is the trap for anyone reading SAS as a congruence test — **RHS** and **SAS congruence** both need the sides *equal*, while proportional sides can only give similarity.",
   tag:"SAS similarity"},

  {q:"The sides of one triangle are 4 cm, 6 cm and 8 cm, and of another 6 cm, 9 cm and 12 cm. The two triangles are:",
   o:["congruent by SSS","not similar","similar, with areas in the ratio 2 : 3","similar, with areas in the ratio 4 : 9"],
   a:3,
   why:"The three ratios 4/6, 6/9 and 8/12 are all `2 : 3`, so the triangles are similar by **SSS similarity**, and **the ratio of the areas is the square of the ratio of the sides**, `4 : 9`. Option C keeps the side ratio for the areas, which is the standard error; option A is the trap for anyone who sees SSS and stops — equal ratios give similarity, equal sides give congruence.",
   tag:"SSS similarity"},

  {q:"Two similar triangles have their corresponding sides in the ratio `5 : 3`. The ratio of their inradii is:",
   o:["25 : 9","√5 : √3","5 : 3","3 : 5"],
   a:2,
   why:"**Every corresponding length in two similar triangles is in the ratio of the sides** — medians, altitudes, angle bisectors, perimeters, inradii and circumradii alike — so the inradii are in the ratio `5 : 3`. Only the areas take the square, and option A, `25 : 9`, is that square put where a length was asked for. Option D is the same ratio reversed.",
   tag:"Inradius ratio"}
 ],
  note:"Two lines decide most of these questions: the ratio of areas is the square of the ratio of sides, and a line parallel to a side divides the other two sides in the same ratio. If a question took longer than that, the line it uses is the one to go back to."}
]
},

/* ============================================================ 6 — The right triangle: Pythagoras and the standard sets (22 questions) */
{
id:"geo-right-triangle", n:"The right triangle: Pythagoras and the standard sets", hy:1,
w:"Pythagoras both ways, the six triples worth knowing by sight, the two standard angle sets, the four relations the altitude to the hypotenuse satisfies, and the ladder, pole and wire questions that are right triangles in disguise.",
quick:[
 "**In a right-angled triangle the square on the hypotenuse equals the sum of the squares on the other two sides.** Find the hypotenuse first — it is the side facing the right angle — because every slip in this topic begins with adding where the question needed subtracting.",
 "**The triples worth knowing by sight: `3-4-5`, `5-12-13`, `8-15-17`, `7-24-25`, `9-40-41`, `20-21-29`** — and every multiple of each. `15-20-25` is the first scaled by 5, `15-36-39` the second scaled by 3.",
 "**`30°-60°-90°` has sides `1 : √3 : 2`** opposite those angles, and **`45°-45°-90°` has `1 : 1 : √2`**. The first is half an equilateral triangle, the second half a square.",
 "**The altitude to the hypotenuse is `p = ab/c`, and `1/p² = 1/a² + 1/b²`.** It also satisfies `p² = AD·DB` and `a² = c·BD` — the altitude is the geometric mean of the two segments it cuts.",
 "**The median from the right angle to the hypotenuse and the circumradius are both `c/2`**, because the circumcentre is the midpoint of the hypotenuse. The inradius is `r = (a + b − c)/2`.",
 "**Diagonals: a rectangle `√(l² + b²)`, a square `a√2`, a cuboid `√(l² + b² + h²)`, a cube `a√3`.** All four are Pythagoras applied once or twice.",
 "**The British flag theorem:** for any point `P` and a rectangle `ABCD`, `PA² + PC² = PB² + PD²` — the two pairs of opposite corners give the same total."
],
blocks:[
 {h:"THE SHEET — Pythagoras, the triples, the standard sets and the altitude",
  cols:["Asked as","The relation","What to watch"],
  rows:[
  ["**Pythagoras' theorem**","In `△ABC` with `∠B = 90°`, `AC² = AB² + BC²`","The hypotenuse faces the right angle and is always the longest side"],
  ["**The converse of Pythagoras**","If `a² = b² + c²`, the angle facing `a` is `90°`","Proves a triangle right-angled from its three sides alone"],
  ["**The triples**","`3-4-5`, `5-12-13`, `8-15-17`, `7-24-25`, `9-40-41`, `20-21-29`","Every multiple is a triple too: `6-8-10`, `15-20-25`, `15-36-39`"],
  ["**`30°-60°-90°`**","The sides opposite the angles are `1 : √3 : 2`","The side opposite `30°` is half the hypotenuse, not `1/√3` of it"],
  ["**`45°-45°-90°`**","The sides are `1 : 1 : √2`","The hypotenuse is a side times `√2`, not twice a side"],
  ["**Altitude to the hypotenuse**","`p = ab/c`","The legs multiplied, divided by the hypotenuse"],
  ["**The same altitude from the legs alone**","`1/p² = 1/a² + 1/b²`","The relation is between the squares, never between the lengths"],
  ["**Altitude and the two segments**","`p² = AD·DB`","The altitude is the geometric mean of the segments it cuts"],
  ["**A leg and the segment beside it**","`a² = c·BD`, and `b² = c·AD`","The near segment, never the far one"],
  ["**Median to the hypotenuse**","`= c/2`","Half the hypotenuse, whatever the legs are"],
  ["**Circumradius**","`R = c/2`","The circumcentre is the midpoint of the hypotenuse"],
  ["**Inradius**","`r = (a + b − c)/2`","Legs added, hypotenuse taken off, result halved"],
  ["**Diagonal of a rectangle**","`√(l² + b²)`","Pythagoras on one length and one breadth"],
  ["**Diagonal of a square**","`a√2`, so a side is `d/√2`","The diagonal cuts the square into two `45°-45°-90°` triangles"],
  ["**Diagonal of a cuboid**","`√(l² + b² + h²)`; for a cube, `a√3`","Pythagoras twice — across the base, then up"],
  ["**The British flag theorem**","For a point `P` and a rectangle `ABCD`, `PA² + PC² = PB² + PD²`","The two pairs of opposite corners give the same total"]
 ]},

 {h:"THE THREE WORD SHAPES — each one is a right triangle in disguise",
  cols:["The question","The equation to write","Where it goes wrong"],
  rows:[
  ["**The ladder against a wall**","`(height up the wall)² + (foot distance)² = (ladder)²`","The ladder's length does not change when it slips, so one equation serves both positions"],
  ["**The pole broken by the wind**","`(h − x)² = x² + d²`","`h` is the pole, `x` the height of the break, `d` where the top lands — the broken part is the hypotenuse, not a leg"],
  ["**Two poles and a wire**","`wire² = gap² + (h₁ − h₂)²`","The *difference* of the heights, never the sum: the triangle sits between the two tops"]
 ],
  note:"All three are set with numbers that come out of a standard triple. If the arithmetic is not clean, the triangle has been drawn wrongly."},

 {h:"PYTHAGORAS, DRAWN", dia:"t-pythagoras",
  cap:"The three squares on the sides of a right triangle: the one on the hypotenuse matches the other two put together."},

 {h:"THE `30°-60°-90°` SET", dia:"t-30-60-90",
  cap:"Sides `1 : √3 : 2` opposite `30°`, `60°` and `90°`. This is half an equilateral triangle, cut by an altitude."},

 {h:"THE `45°-45°-90°` SET", dia:"t-45-45-90",
  cap:"Sides `1 : 1 : √2`. This is half a square, cut by a diagonal."},

 {careful:"**The hypotenuse faces the right angle and is always the longest side.** When both legs are given you *add* their squares; when the hypotenuse is given you *subtract*. Most of the marks lost in this topic are a subtraction done as an addition, and the answer that mistake produces is always sitting on the option list."},

 {careful:"From the right angle, two different lines reach the hypotenuse. The **median** is `c/2`, half the hypotenuse — the arithmetic mean of the two segments. The **altitude** is `p = ab/c`, with `p² = AD·DB` — the geometric mean of the same two segments. The altitude is therefore always the shorter of the two, and these are the pair most often swapped."},

 {careful:"**`1 : √3 : 2` is the `30°-60°-90°` set; `1 : 1 : √2` is the `45°-45°-90°` set.** In the first, the side opposite `30°` is half the hypotenuse and the side opposite `60°` is `√3` times that. The commonest error is taking the hypotenuse of a `45°-45°-90°` triangle as twice a side, when it is only `√2` times as long."},

 {h:"QUESTIONS — the theorem, the sets and the altitude",
  mcq:[
  {q:"In `△ABC`, `∠B = 90°`. Pythagoras' theorem states that:",
   o:["AB² = AC² + BC²","AC² = AB² + BC²","BC² = AB² + AC²","AC² = AB² − BC²"],
   a:1,
   why:"**Pythagoras' theorem: the square on the hypotenuse equals the sum of the squares on the other two sides.** With `∠B = 90°` the hypotenuse is `AC`, the side facing the right angle, so `AC² = AB² + BC²`. Options A and C put a leg on the left-hand side, which is what happens when the right angle is read off the wrong vertex — the commonest error in the whole topic. Option D is the rearrangement used when the hypotenuse is known, not the statement of the theorem.",
   tag:"Pythagoras"},

  {q:"Which of these sets of lengths does **not** form a right-angled triangle?",
   o:["9, 40, 41","20, 21, 29","8, 15, 19","7, 24, 25"],
   a:2,
   why:"**The converse of Pythagoras: if the square on the longest side equals the sum of the squares on the other two, the angle facing it is `90°`.** Here `8² + 15² = 64 + 225 = 289`, and `289 = 17²`, not `19²` — so `8, 15, 19` fails. The standard triple is `8-15-17`, and shifting the last number by two is exactly how this question is set. The other three hold: `81 + 1600 = 1681 = 41²`, `400 + 441 = 841 = 29²`, and `49 + 576 = 625 = 25²`.",
   tag:"Converse"},

  {q:"The hypotenuse of a right-angled triangle is `25 cm` and one leg is `15 cm`. The other leg is:",
   o:["20 cm","10 cm","12.5 cm","15√2 cm"],
   a:0,
   why:"**Pythagoras rearranged: a leg is `√(c² − b²)`, so when the hypotenuse is given you subtract the squares.** `625 − 225 = 400`, so the leg is `20 cm` — the triangle is `15-20-25`, the `3-4-5` triple scaled by 5. Option B subtracts the lengths instead of their squares, which is the standard slip. Option C is `c/2`, the circumradius, and option D treats the triangle as `45°-45°-90°`, which it is not.",
   tag:"Leg from hypotenuse"},

  {q:"The sides of a right-angled triangle are in the ratio `5 : 12 : 13` and its perimeter is `90 cm`. The hypotenuse is:",
   o:["36 cm","39 cm","13 cm","45 cm"],
   a:1,
   why:"**The sides are `5k`, `12k` and `13k`, so the perimeter is `30k`.** Then `30k = 90` gives `k = 3`, and the hypotenuse `13k = 39 cm`. Option A is `12k`, the middle side, and it is the one ticked when the largest ratio number is misread. Option C uses `k = 1`, and option D is half the perimeter — the semiperimeter, which is not a side at all.",
   tag:"5-12-13"},

  {q:"In a `30°-60°-90°` triangle the sides opposite the three angles are in the ratio:",
   o:["1 : √3 : 2","1 : 2 : √3","√3 : 1 : 2","1 : 1 : √2"],
   a:0,
   why:"**In a `30°-60°-90°` triangle the sides opposite `30°`, `60°` and `90°` are in the ratio `1 : √3 : 2`.** The smallest side faces the smallest angle, so the side opposite `30°` is exactly half the hypotenuse. Option B swaps `√3` and `2`, putting the longest side opposite `60°`, which is impossible when the right angle is the largest angle. Option C puts `√3` opposite `30°`, and option D is the `45°-45°-90°` ratio.",
   tag:"1 : √3 : 2"},

  {q:"One acute angle of a right-angled triangle is `30°` and the hypotenuse is `12 cm`. The side opposite the `30°` angle is:",
   o:["6√3 cm","4√3 cm","12√3 cm","6 cm"],
   a:3,
   why:"**From the ratio `1 : √3 : 2`, the side opposite `30°` is half the hypotenuse.** Half of `12 cm` is `6 cm`. Option A, `6√3 cm`, is the side opposite `60°` — the whole question is which of the two legs was asked for, and that option is there for reading it the wrong way round. Option B is `12/√3`, which is no side of this triangle, and option C multiplies the hypotenuse by `√3` instead of dividing the pieces out of it.",
   tag:"30°-60°-90°"},

  {q:"The hypotenuse of a right-angled isosceles triangle is `16 cm`. Each of the equal sides is:",
   o:["8 cm","16√2 cm","8√2 cm","4√2 cm"],
   a:2,
   why:"**A right-angled isosceles triangle is `45°-45°-90°`, with sides `1 : 1 : √2`, so the hypotenuse is `√2` times each equal side.** Each side is therefore `16/√2 = 16√2/2 = 8√2 cm`. Option A halves the hypotenuse, which is the `30°-60°-90°` rule applied to the wrong triangle and is the usual mistake here. Option B multiplies by `√2` instead of dividing.",
   tag:"45°-45°-90°"},

  {q:"The altitude of an equilateral triangle divides it into two triangles whose angles are:",
   o:["45°, 45°, 90°","30°, 60°, 90°","30°, 30°, 120°","60°, 60°, 60°"],
   a:1,
   why:"**The altitude of an equilateral triangle bisects both the `60°` vertex angle and the base, so each half has angles `30°`, `60°` and `90°`.** That is where the `1 : √3 : 2` set comes from: the hypotenuse is the full side and the short leg is half the side. Option A is the set produced by the diagonal of a square instead — the two standard triangles come from exactly these two constructions, and swapping them is the usual confusion. Option C is the triangle made by joining the centre to two vertices, not by an altitude.",
   tag:"Where it comes from"},

  {q:"In the figure, `CD` is the altitude from the right angle `C` to the hypotenuse `AB`. If the legs are `a = 6 cm` and `b = 8 cm`, the altitude `p` is:",
   o:["5 cm","7 cm","2.4 cm","4.8 cm"],
   a:3,
   d:"t-right-altitude",
   why:"**The altitude to the hypotenuse is `p = ab/c` — the legs multiplied, divided by the hypotenuse.** Here `c = √(36 + 64) = 10 cm`, so `p = (6 × 8)/10 = 4.8 cm`. Option A, `5 cm`, is `c/2`, which is the **median** from `C` to the hypotenuse, not the altitude: both are drawn from the same vertex to the same line, and telling them apart is the point of this question. Option B is the average of the legs and option C is half the true altitude.",
   tag:"p = ab/c"},

  {q:"If `p` is the altitude from the right angle to the hypotenuse of a right-angled triangle whose legs are `a` and `b`, then:",
   o:["1/p² = 1/a² + 1/b²","1/p = 1/a + 1/b","p² = a² + b²","p = (a + b)/2"],
   a:0,
   why:"**`1/p² = 1/a² + 1/b²`.** It follows from `p = ab/c` and `c² = a² + b²`: `1/p² = c²/(a²b²) = (a² + b²)/(a²b²) = 1/a² + 1/b²`. Option B is the same shape without the squares and is the standard wrong answer — the relation holds between the *squares* of the lengths, not the lengths. Option C is Pythagoras with `p` written where `c` belongs, and option D would make the altitude the average of the legs, which it never is.",
   tag:"1/p²"},

  {q:"In the figure, the altitude `CD` from the right angle meets the hypotenuse `AB` at `D`. If `AD = 4 cm` and `DB = 9 cm`, then `CD` is:",
   o:["6.5 cm","13 cm","6 cm","36 cm"],
   a:2,
   d:"t-right-altitude",
   why:"**The altitude to the hypotenuse is the geometric mean of the two segments it cuts: `p² = AD·DB`.** So `CD² = 4 × 9 = 36` and `CD = 6 cm`. Option A, `6.5 cm`, is the *arithmetic* mean `(4 + 9)/2`, which is the median to the hypotenuse — the geometric mean is always the smaller of the two, and confusing them is the trap. Option B is the whole hypotenuse `AD + DB`, and option D is `36` left un-rooted.",
   tag:"p² = AD·DB"},

  {q:"In the figure, `CD ⊥ AB` and `∠ACB = 90°`. If `AB = 25 cm` and `BD = 9 cm`, then `BC` is:",
   o:["20 cm","15 cm","12 cm","16 cm"],
   a:1,
   d:"t-right-altitude",
   why:"**A leg squared is the hypotenuse times the segment of it beside that leg: `a² = c·BD`.** Here `BC² = 25 × 9 = 225`, so `BC = 15 cm`. Option A, `20 cm`, is `AC`, which comes from `AC² = 25 × 16 = 400` — using the far segment instead of the near one is the whole trap. Option C, `12 cm`, is the altitude `CD = √(9 × 16)`, and option D is the other segment `AD` itself.",
   tag:"a² = c·BD"},

  {q:"The median drawn from the right angle to the hypotenuse of a right-angled triangle is:",
   o:["half the sum of the two legs","the geometric mean of the two segments of the hypotenuse","equal to the shorter leg","half the hypotenuse"],
   a:3,
   why:"**The median from the right angle to the hypotenuse is half the hypotenuse**, because the midpoint of the hypotenuse is the circumcentre and is therefore equidistant from all three vertices. Option B, the geometric mean of the two segments, is the **altitude** from the same vertex, `p² = AD·DB`. The median and the altitude both run from the right angle to the hypotenuse and are the pair most often swapped — the median is always the longer.",
   tag:"Median = c/2"},

  {q:"The circumradius of a right-angled triangle whose legs are `5 cm` and `12 cm` is:",
   o:["6.5 cm","13 cm","2 cm","8.5 cm"],
   a:0,
   why:"**In a right-angled triangle the circumcentre is the midpoint of the hypotenuse, so `R = c/2`.** With legs `5 cm` and `12 cm` the hypotenuse is `13 cm`, giving `R = 6.5 cm`. Option C, `2 cm`, is the **inradius** `r = (a + b − c)/2 = (5 + 12 − 13)/2`, and separating the two radii is what this question is for. Option B is the hypotenuse left unhalved and option D is the average of the two legs.",
   tag:"R = c/2"},

  {q:"The radius of the circle inscribed in a right-angled triangle whose sides are `8 cm`, `15 cm` and `17 cm` is:",
   o:["6 cm","8.5 cm","3 cm","5 cm"],
   a:2,
   why:"**The inradius of a right-angled triangle is `r = (a + b − c)/2`** — the two legs added, the hypotenuse taken off, the result halved. Here `(8 + 15 − 17)/2 = 6/2 = 3 cm`. Option A is `6`, the bracket left unhalved, which is the commonest slip; option B is `8.5`, the circumradius `c/2`. Option D is `(8 + 17 − 15)/2`, which comes from treating `15` as the hypotenuse — the formula only works once the longest side has been identified.",
   tag:"r = (a+b−c)/2"},

  {q:"A rectangle measures `24 cm` by `7 cm`. Its diagonal is:",
   o:["31 cm","25 cm","17 cm","√31 cm"],
   a:1,
   why:"**The diagonal of a rectangle is `√(l² + b²)`**, because the diagonal is the hypotenuse of the triangle made by one length and one breadth. `√(576 + 49) = √625 = 25 cm`, and `7-24-25` is a standard triple. Option A adds the sides instead of their squares, option D roots that same sum, and option C subtracts — three different ways of skipping the squaring.",
   tag:"√(l² + b²)"},

  {q:"The diagonal of a square is `12 cm`. Its side is:",
   o:["6 cm","12√2 cm","4√3 cm","6√2 cm"],
   a:3,
   why:"**The diagonal of a square is `a√2`, so the side is `d/√2`.** Here `12/√2 = 12√2/2 = 6√2 cm`. Option A halves the diagonal, which is the `30°-60°-90°` rule misapplied: the diagonal cuts a square into two `45°-45°-90°` triangles, where the hypotenuse is `√2` times a side and not twice it. Option B multiplies by `√2` instead of dividing, and option C is `12/√3`, the edge of a *cube* whose body diagonal is `12 cm`.",
   tag:"d = a√2"},

  {q:"A closed box measures `3 cm` by `4 cm` by `12 cm`. The longest straight rod that fits inside it is:",
   o:["13 cm","19 cm","5 cm","12 cm"],
   a:0,
   why:"**The diagonal of a cuboid is `√(l² + b² + h²)`** — Pythagoras used twice, first across the base and then up to the opposite corner. `√(9 + 16 + 144) = √169 = 13 cm`. Option C, `5 cm`, is the face diagonal `√(9 + 16)` with the height left out, and that missing third term is the error the question is set for. Option B adds the three edges and option D is simply the longest edge. For a cube the same formula collapses to `a√3`.",
   tag:"√(l²+b²+h²)"},

  {q:"A ladder `13 m` long rests against a vertical wall and reaches a point `12 m` above the ground. Its foot slips until the top is only `5 m` above the ground. How far does the foot move?",
   o:["5 m","12 m","7 m","1 m"],
   a:2,
   why:"**The wall, the ground and the ladder make a right triangle in which the ladder is the hypotenuse, and the ladder's length does not change when it slips.** At first the foot is `√(169 − 144) = 5 m` from the wall; afterwards it is `√(169 − 25) = 12 m`. The foot therefore moves `12 − 5 = 7 m`. Option B is the new distance and option A the old one — the question asks for the change, and reading off one of the two positions instead is the trap. Option D is the difference of the two heights.",
   tag:"The ladder"},

  {q:"A vertical pole `18 m` high is broken by the wind so that its top touches the ground `6 m` from the foot of the pole, the broken part still being attached. The pole is broken at a height of:",
   o:["8 m","10 m","12 m","6 m"],
   a:0,
   why:"**The standing stump, the ground and the broken part make a right triangle whose hypotenuse is the broken part: `(h − x)² = x² + d²`.** With `h = 18` and `d = 6`, `(18 − x)² = x² + 36` gives `324 − 36x = 36`, so `x = 8 m`. Option B, `10 m`, is the length of the broken part `18 − 8` — the question asks where the break is, not how long the fallen piece is, and that is the standard misread. Check it: `6² + 8² = 100 = 10²`.",
   tag:"The broken pole"},

  {q:"Two vertical poles `9 m` and `14 m` high stand `12 m` apart on level ground. The length of the wire joining their tops is:",
   o:["15 m","23 m","5 m","13 m"],
   a:3,
   why:"**The wire is the hypotenuse of a right triangle whose legs are the horizontal gap and the difference of the two heights.** The difference is `14 − 9 = 5 m` and the gap is `12 m`, so the wire is `√(144 + 25) = √169 = 13 m`. Option A, `15 m`, uses the full height `9 m` instead of the difference — `√(144 + 81) = 15` — and it catches anyone who draws the triangle from the foot of a pole rather than from its top. Option B adds the heights and option C is the difference alone.",
   tag:"Two poles"},

  {q:"`P` is any point inside a rectangle `ABCD`. Then `PA² + PC²` is equal to:",
   o:["PB·PD","PB² + PD²","½(PB² + PD²)","AB² + AD²"],
   a:1,
   why:"**The British flag theorem: for any point `P` and a rectangle `ABCD`, `PA² + PC² = PB² + PD²`** — the two pairs of opposite corners give the same total. Dropping perpendiculars from `P` to all four sides and applying Pythagoras to each of the four small triangles turns both sums into the same four squares. Option D, `AB² + AD²`, is the square on the diagonal, which the two sums equal only when `P` happens to sit at a corner. SSC asks this occasionally and always in this exact form.",
   tag:"British flag"}
 ],
  note:"Every question above is answered by one line from the sheet. Where the numbers were not clean, the hypotenuse was identified wrongly — go back and name it before writing anything down."}
]
},

/* ============================================================ 7 — Quadrilaterals and polygons (20 questions) */
{
id:"geo-quad-poly", n:"Quadrilaterals and polygons", hy:1,
w:"Which quadrilateral has which diagonals, the two trapezium segments, and the four polygon counts that are asked straight and backwards.",
quick:[
 "**The angles of a quadrilateral add to `360°`; the interior angles of an n-sided polygon add to `(n − 2) × 180°`.**",
 "**The exterior angles of any convex polygon add to `360°`**, however many sides it has — so each exterior angle of a *regular* polygon is `360/n`, and each interior angle is `180 − 360/n`.",
 "**Number of diagonals = n(n − 3)/2.** Asked straight (a decagon has `35`) and backwards (a polygon with `20` diagonals has `8` sides).",
 "**In a parallelogram the diagonals bisect each other; in a rectangle they are also equal; in a rhombus they are also perpendicular; in a square they are equal and perpendicular.** That ladder answers most of the questions in this topic.",
 "**The sum of the squares of the diagonals of a parallelogram equals the sum of the squares of its four sides.**",
 "**In a trapezium the segment joining the midpoints of the slant sides is `½(a + b)`, and the segment joining the midpoints of the diagonals is `½(a − b)`.** Two different segments, two different formulas.",
 "**Joining the midpoints of any quadrilateral gives a parallelogram** (Varignon), with half the area."
],
blocks:[

 {h:"THE SHEET — the diagonals, the segments and the counts",
  cols:["Shape or quantity","The result","The point it turns on"],
  rows:[
   ["**Any quadrilateral**","Angles add to 360°","Two triangles, 180° each"],
   ["**Parallelogram**","Opposite sides and opposite angles equal; consecutive angles supplementary; diagonals **bisect each other**","The diagonals are **not** equal and **not** perpendicular unless it is a rectangle or a rhombus"],
   ["**Parallelogram, diagonals**","d₁² + d₂² = 2(a² + b²), the sum of the squares of all four sides","Both diagonals together, not one of them"],
   ["**Rectangle**","Diagonals bisect **and are equal**","Equal, but not perpendicular"],
   ["**Rhombus**","Diagonals bisect **at right angles** and bisect the angles; side = ½√(d₁² + d₂²)","Perpendicular, but not equal"],
   ["**Square**","Diagonals equal, perpendicular, and bisect the angles; d = a√2","The only quadrilateral with all of them"],
   ["**Kite**","One diagonal bisects the other at right angles, and bisects the two angles it joins","Only **one** of the two diagonals is bisected"],
   ["**Trapezium — the midline**","The segment joining the midpoints of the slant sides is ½(a + b)","The **sum** of the parallel sides, halved"],
   ["**Trapezium — the diagonals**","The segment joining the midpoints of the two diagonals is ½(a − b)","The **difference**, halved. A different segment from the midline"],
   ["**Varignon**","Joining the midpoints of any quadrilateral gives a parallelogram, of half the area","True for *any* quadrilateral, however irregular"],
   ["**Interior angle sum**","(n − 2) × 180°","Asked backwards as often as forwards"],
   ["**Each interior angle of a regular polygon**","(n − 2) × 180/n, which is 180 − 360/n","Easier through the exterior angle"],
   ["**Each exterior angle of a regular polygon**","360/n","The exterior angles always add to 360°, whatever n is"],
   ["**Number of diagonals**","n(n − 3)/2","Each vertex joins to n − 3 others, and every diagonal is counted twice"],
   ["**Regular hexagon**","Six equilateral triangles; interior angle 120°; longest diagonal 2a","The longest diagonal is twice the side, not a√3 — that is the shorter one"],
   ["**Which quadrilaterals are cyclic**","An isosceles trapezium always; a parallelogram only if it is a rectangle; a rhombus only if it is a square","Opposite angles must be supplementary"]
  ]},

 {careful:"**The diagonals of a parallelogram bisect each other, but they are not equal.** Equal diagonals make it a rectangle; perpendicular diagonals make it a rhombus; both make it a square. Nearly every wrong answer in this topic comes from promoting a parallelogram to one of those without being told."},

 {careful:"**A trapezium has two different segments with two different formulas.** The one joining the midpoints of the **slant sides** is `½(a + b)`; the one joining the midpoints of the **diagonals** is `½(a − b)`. The question always says which, and the other is always offered."},

 {h:"THE FIGURES",
  dia:"q-parallelogram",
  cap:"A parallelogram with both diagonals. They bisect each other at the point where they cross — but they are equal only in a rectangle."},

 {dia:"q-trapezium",
  cap:"A trapezium with parallel sides `a` and `b`. The segment joining the midpoints of the slant sides is `½(a + b)`."},

 {h:"QUESTIONS — the quadrilaterals, then the polygons",
  mcq:[

  {q:"The four angles of a quadrilateral add up to:",
   o:["360°","180°","540°","720°"],
   a:0,
   why:"**The interior angles of an n-sided polygon add to `(n − 2) × 180°`**, and with n = 4 that is `360°` — a quadrilateral splits into two triangles along a diagonal. Option C is the pentagon's sum and option D the hexagon's, which is what using the wrong `n` produces.",
   tag:"Angle sum"},

  {q:"In a parallelogram, two consecutive angles are:",
   o:["equal","complementary","supplementary","in the ratio 2 : 1"],
   a:2,
   why:"**Consecutive angles of a parallelogram are supplementary — they add to `180°`** — because the two parallel sides are cut by a transversal and the angles are co-interior. Option A is true of *opposite* angles, not consecutive ones, and that swap is the trap.",
   tag:"Parallelogram"},

  {q:"The sides of a parallelogram are `5 cm` and `7 cm`. The sum of the squares of its two diagonals is:",
   o:["74 cm²","148 cm²","144 cm²","24 cm²"],
   a:1,
   why:"**d₁² + d₂² = 2(a² + b²)** = 2(25 + 49) = `148 cm²`. Option A leaves out the 2, which halves the answer — the formula counts all **four** sides, and a parallelogram has two of each length.",
   tag:"Parallelogram",
   d:"q-parallelogram"},

  {q:"The diagonals of a rhombus are `16 cm` and `12 cm`. Its side is:",
   o:["14 cm","20 cm","28 cm","10 cm"],
   a:3,
   why:"**The diagonals of a rhombus bisect each other at right angles, so the side is `½√(d₁² + d₂²)`** = ½√(256 + 144) = ½ × 20 = `10 cm` — the hypotenuse of a right triangle with legs 8 and 6. Option B is the whole √(d₁² + d₂²) with the halving forgotten, and option A is the two diagonals averaged.",
   tag:"Rhombus",
   d:"q-rhombus"},

  {q:"The perimeter of that same rhombus is:",
   o:["40 cm","80 cm","56 cm","48 cm"],
   a:0,
   why:"**All four sides of a rhombus are equal**, so the perimeter is `4 × 10 = 40 cm`. Option B (80) doubles it, which is what using the un-halved `√(d₁² + d₂²)` as the side gives, and option C (56) is `2(16 + 12)` — adding the two diagonals twice instead of finding the side.",
   tag:"Rhombus"},

  {q:"The diagonal of a square of side `8 cm` is:",
   o:["16 cm","8√2 cm","4√2 cm","8√3 cm"],
   a:1,
   why:"**The diagonal of a square is `a√2`**, from Pythagoras on two equal sides: √(64 + 64) = 8√2 cm. Option D is `a√3`, which is the **body diagonal of a cube**, not the diagonal of a square — the commonest confusion between the flat figure and the solid.",
   tag:"Square",
   d:"q-square-diag"},

  {q:"In a trapezium the parallel sides are `12 cm` and `18 cm`. The segment joining the midpoints of the two slant sides is:",
   o:["6 cm","30 cm","15 cm","3 cm"],
   a:2,
   why:"**The midline of a trapezium is `½(a + b)`** = ½(12 + 18) = `15 cm`. Option D, `3 cm`, is `½(a − b)` — the segment joining the midpoints of the **diagonals**, which is the other segment in the same figure and is always offered beside this one.",
   tag:"Trapezium",
   d:"q-trapezium"},

  {q:"In the same trapezium, the segment joining the midpoints of the two **diagonals** is:",
   o:["3 cm","15 cm","6 cm","30 cm"],
   a:0,
   why:"**That segment is `½(a − b)`** = ½(18 − 12) = `3 cm`. Option B is the midline `½(a + b)`, the other segment in the same figure. Note the order: the difference is taken larger minus smaller, so the answer is never negative.",
   tag:"Trapezium",
   d:"q-trapezium"},

  {q:"The midpoints of the four sides of **any** quadrilateral are joined in order. The figure formed is always:",
   o:["a parallelogram","a rectangle","a rhombus","a square"],
   a:0,
   why:"**Varignon's result: joining the midpoints of any quadrilateral gives a parallelogram**, because each new side is parallel to a diagonal by the midpoint theorem. It is a rectangle only when the diagonals are perpendicular, and a rhombus only when they are equal — so options B, C and D each need an extra condition the question has not given.",
   tag:"Varignon"},

  {q:"That midpoint figure has, compared with the original quadrilateral:",
   o:["a quarter of the area","half the area","the same area","three quarters of the area"],
   a:1,
   why:"**The Varignon parallelogram has half the area of the quadrilateral.** The four corner triangles cut off are together the other half. Option A is the ratio for the midpoint triangle inside a *triangle*, which is `¼`, and importing that result is the trap here.",
   tag:"Varignon"},

  {q:"The interior angles of a polygon with `n` sides add up to:",
   o:["360°","n × 180°","(n − 2) × 180°","(n − 2) × 360°"],
   a:2,
   why:"**(n − 2) × 180°** — the polygon splits into `n − 2` triangles from one vertex. Option A is the sum of the **exterior** angles, which is 360° for every convex polygon however many sides it has, and mixing the two is the standard error.",
   tag:"Polygon"},

  {q:"The interior angles of a polygon add up to `1440°`. The number of sides is:",
   o:["12","9","6","10"],
   a:3,
   why:"**(n − 2) × 180 = 1440**, so n − 2 = 8 and `n = 10`. Option A (12) is `1440 ÷ 120` — treating 1440 as `n` times the hexagon's interior angle — and option B (9) is what adding 1 instead of 2 to the quotient gives.",
   tag:"Polygon"},

  {q:"Each exterior angle of a regular polygon with `12` sides is:",
   o:["30°","150°","60°","12°"],
   a:0,
   why:"**Each exterior angle of a regular polygon is `360/n`** = 360/12 = `30°`. Option B is the matching **interior** angle, 180 − 30 = 150°, and offering the interior angle where the exterior was asked is the whole trap of this question.",
   tag:"Polygon"},

  {q:"Each interior angle of a regular hexagon is:",
   o:["60°","120°","135°","108°"],
   a:1,
   why:"**Interior angle = 180 − 360/n** = 180 − 60 = `120°`. Option A is the hexagon's **exterior** angle; option D is the regular pentagon's interior angle and option C the regular octagon's, so all three wrong options are real angles from the neighbouring polygons.",
   tag:"Hexagon",
   d:"q-hexagon"},

  {q:"The number of diagonals of a decagon is:",
   o:["45","20","35","70"],
   a:2,
   why:"**Diagonals = n(n − 3)/2** = 10 × 7/2 = `35`. Option D, `70`, is the same count with the halving left out — every diagonal joins two vertices and would otherwise be counted twice — and option A, `45`, counts all the joining lines including the ten sides.",
   tag:"Polygon",
   d:"q-polygon-diag"},

  {q:"A polygon has `20` diagonals. The number of its sides is:",
   o:["10","12","6","8"],
   a:3,
   why:"**n(n − 3)/2 = 20** gives n² − 3n − 40 = 0, which factorises as (n − 8)(n + 5) = 0, so `n = 8`. Option A is the decagon, whose diagonal count is 35, and it is what guessing from the forward formula without solving produces.",
   tag:"Polygon",
   d:"q-polygon-diag"},

  {q:"In a regular hexagon of side `a`, the longest diagonal is:",
   o:["a√3","2a","a√2","3a"],
   a:1,
   why:"**The longest diagonal of a regular hexagon is `2a`** — it passes through the centre and is made of two sides of the equilateral triangles the hexagon splits into. Option A, `a√3`, is the **shorter** diagonal, the one joining two vertices with one between them, and the question is built on that pair.",
   tag:"Hexagon",
   d:"q-hexagon"},

  {q:"The exterior angles of a convex polygon with `n` sides add up to:",
   o:["360°","(n − 2) × 180°","n × 360°","180°"],
   a:0,
   why:"**The exterior angles of any convex polygon add to `360°`, whatever `n` is** — walking once round the shape turns you through one full circle. Option B is the interior sum, and the fact that the exterior sum does **not** depend on n is exactly what the question is testing.",
   tag:"Polygon"},

  {q:"A parallelogram whose diagonals are **equal** must be a:",
   o:["rhombus","kite","trapezium","rectangle"],
   a:3,
   why:"**Equal diagonals in a parallelogram force all four angles to be right angles, so it is a rectangle.** Option A is what **perpendicular** diagonals give — a rhombus — and swapping those two conditions is the single commonest error in this topic. Both conditions together give a square.",
   tag:"Parallelogram"},

  {q:"In a kite, which statement is true?",
   o:["both diagonals are bisected","the diagonals are equal","one diagonal bisects the other at right angles","the diagonals bisect all four angles"],
   a:2,
   why:"**In a kite one diagonal — the axis of symmetry — bisects the other at right angles**, and bisects the two angles it joins. Option A is true of a parallelogram, where **both** diagonals are bisected, and promoting the kite to that is the trap; a kite's axis is itself bisected only when the kite is a rhombus.",
   tag:"Kite",
   d:"q-kite"}

  ],
  note:"The four polygon counts — the interior sum, the exterior sum, each regular angle and the number of diagonals — are asked backwards as often as forwards. If you can run each of them in both directions, most of this topic is finished."}

]
},

/* ============================================================ 8 — The circle: chords, arcs and angles (23 questions) */
{
id:"geo-circle-chord", n:"The circle: chords, arcs and angles", hy:1,
w:"The chord and its distance from the centre, equal chords, parallel chords, the angle at the centre against the angle at the circumference, and the two product rules.",
quick:[
 "**chord = 2√(r² − d²)**, where `r` is the radius and `d` is the perpendicular distance of the chord from the centre. The same right triangle read the other two ways gives **d = √(r² − (chord/2)²)** and **r = √(d² + (chord/2)²)**.",
 "**The perpendicular from the centre to a chord bisects it**, and the converse: the line from the centre to the midpoint of a chord is perpendicular to the chord. So the perpendicular bisector of any chord passes through the centre.",
 "**Equal chords are equidistant from the centre, subtend equal angles at the centre and cut off equal arcs** — and each converse holds. Of two unequal chords the longer one is the nearer to the centre, and the diameter `2r` is the longest chord of all.",
 "Two parallel chords at distances `d₁` and `d₂` from the centre: the distance between them is **|d₁ − d₂|** when they are on the same side of the centre and **d₁ + d₂** when they are on opposite sides.",
 "**The angle at the centre is twice the angle at the circumference standing on the same arc: ∠AOB = 2∠ACB.**",
 "**Angles in the same segment are equal**, and **the angle in a semicircle is 90°** — with the converse, that a chord subtending `90°` at a point of the circle is a diameter.",
 "Two chords crossing inside the circle at P: **PA·PB = PC·PD**. Two secants from an external point P: the same product rule, **PA·PB = PC·PD**."
],
blocks:[
 {h:"THE PARTS OF A CIRCLE", dia:"c-parts",
  cap:"The centre O, a radius, a diameter, a chord, an arc and a tangent. A chord is a segment with both ends on the circle; the line it lies on, extended, is a secant."},

 {h:"THE PARTS, NAMED",
  list:[
  "**Radius** — a segment from the centre to the circle. **Diameter** — a chord through the centre, length `2r`, and the longest chord of all.",
  "**Chord** — a segment with both its ends on the circle. **Secant** — the whole straight line through those two points; the chord is the part of it inside the circle.",
  "**Tangent** — a straight line meeting the circle at exactly one point, and perpendicular there to the radius.",
  "**Arc** — a piece of the circle itself: the shorter is the minor arc, the longer the major arc.",
  "**Sector** — the region bounded by two radii and the arc between them. **Segment** — the region bounded by a chord and its arc."
 ]},

 {h:"THE SHEET — the chord",
  cols:["Asked as","The result","What the question does with it"],
  rows:[
  ["**Length of a chord at distance d from the centre**","chord = 2√(r² − d²)","Half the chord is √(r² − d²); the whole chord is twice that"],
  ["**Distance of a chord from the centre**","d = √(r² − (chord/2)²)","The same right triangle read the other way round"],
  ["**Radius, from a chord and its distance**","r = √(d² + (chord/2)²)","The same right triangle read the third way — `d` and chord/2 are the legs, `r` the hypotenuse"],
  ["**The perpendicular from the centre to a chord**","Bisects the chord","Gives the right triangle with sides `d`, chord/2 and `r`"],
  ["**The line from the centre to the midpoint of a chord**","Is perpendicular to the chord","The converse — it is what proves an angle is 90° in a figure"],
  ["**The perpendicular bisector of a chord**","Passes through the centre","Two such bisectors locate the centre of a circle through three points"],
  ["**Equal chords**","Equidistant from the centre; equal angles at the centre; equal arcs","Every one of the three works as a converse as well"],
  ["**The longer of two unequal chords**","Is the nearer to the centre","Because 2√(r² − d²) falls as `d` grows"],
  ["**The longest chord**","The diameter, `2r`","It is the chord with d = 0"],
  ["**Two parallel chords, same side of the centre**","Distance = |d₁ − d₂|","Both feet of the perpendiculars lie on one radius"],
  ["**Two parallel chords, opposite sides of the centre**","Distance = d₁ + d₂","The centre lies between them, so the two distances add"]
 ]},

 {h:"THE SHEET — the angles and the two product rules",
  cols:["Asked as","The result","What the question does with it"],
  rows:[
  ["**Angle at the centre against angle at the circumference**","∠AOB = 2∠ACB on the same arc","Halve going inwards, double going outwards"],
  ["**Angles in the same segment**","Equal","Any number of points on the same arc give the same angle on AB"],
  ["**The angle in a semicircle**","90°","AB a diameter and C on the circle gives ∠ACB = 90°"],
  ["**The converse of the semicircle angle**","∠ACB = 90° ⇒ AB is a diameter","The standard way a question hands you a diameter without saying so"],
  ["**Two chords crossing inside at P**","PA·PB = PC·PD","Pair each chord's own two pieces — never one piece of each"],
  ["**Two secants from an external point P**","PA·PB = PC·PD","Measured from P: the near point times the far point, on each secant"]
 ],
  note:"Angles in the major and the minor segment, cyclic quadrilaterals and Ptolemy's theorem are in *Segments, sectors and cyclic quadrilaterals*. Tangents are in *Tangents, secants and the alternate segment*. The area of a sector or a segment belongs to Mensuration and is not tested here."},

 {careful:"In **chord = 2√(r² − d²)**, `d` is the distance from the **centre to the chord** — the perpendicular distance — not the radius and not the distance to an end of the chord. Two slips follow from forgetting the 2: √(r² − d²) is only **half** the chord, and it is always offered as an option."},

 {careful:"**∠AOB = 2∠ACB** needs C on the **major** arc when `∠AOB` is the angle standing on the minor arc AB — that is, on the far side of the chord AB from the arc the central angle cuts off. Move C onto the minor arc and the angle becomes `180°` minus the halved one instead: a central angle of `80°` gives `40°` from the major arc and `140°` from the minor arc. The halving also runs one way only — `40°` from `80°`, never `160°`."},

 {careful:"For two parallel chords the distance between them is **|d₁ − d₂|** on the same side of the centre and **d₁ + d₂** on opposite sides, where each distance comes from **d = √(r² − (chord/2)²)**. Both numbers are worth writing down, because whichever case the question names, the other case's answer is sitting in the options as the trap."},

 {h:"QUESTIONS — chords, distances and the angles they make",
  mcq:[
  {q:"A straight line that cuts a circle at two distinct points is called:",
   o:["a secant","a chord","a tangent","a diameter"],
   a:0,
   why:"**A secant is the whole straight line meeting the circle at two points; the chord is only the part of that line lying inside the circle.** Option B is the real confusion — the chord is a segment, the secant the unbounded line it lies on. A tangent meets the circle at exactly one point, and a diameter is the particular chord that passes through the centre.",
   tag:"The parts"},

  {q:"The region of a circle bounded by a chord and one of the two arcs that chord cuts off is called:",
   o:["a sector","a segment","a quadrant","an annulus"],
   a:1,
   why:"**A segment is the region bounded by a chord and its arc; a sector is the region bounded by two radii and the arc between them.** The chord gives the segment, the two radii give the sector — that is the whole distinction, and option A is the one ticked when it is forgotten. A quadrant is a sector of `90°`, so it too is bounded by radii; an annulus is the ring between two concentric circles.",
   tag:"The parts"},

  {q:"A chord of a circle of radius `r` lies at a perpendicular distance `d` from the centre. Its length is:",
   o:["√(r² − d²)","2√(r² + d²)","2√(d² − r²)","2√(r² − d²)"],
   a:3,
   why:"The perpendicular from the centre bisects the chord, so half the chord, `d` and `r` form a right triangle: **chord = 2√(r² − d²)**. Option A is that half-chord, √(r² − d²), which is the answer one step before the end and the commonest tick. Option B adds instead of subtracting, which would make the chord longer than the diameter.",
   tag:"2√(r²−d²)"},

  {q:"A chord of length `16 cm` is drawn in a circle of radius `10 cm`. Its distance from the centre is:",
   o:["6 cm","8 cm","10 cm","2 cm"],
   a:0,
   why:"**d = √(r² − (chord/2)²)** = √(10² − 8²) = √(100 − 64) = `6 cm`. Option B is half the chord, which is the other leg of the right triangle and not the one asked for. Option C is the radius itself, and option D is the radius minus the half-chord, `10 − 8` — the subtraction done on the lengths instead of on their squares.",
   tag:"Distance d"},

  {q:"A chord of length `24 cm` lies at a perpendicular distance of `5 cm` from the centre of a circle. The radius is:",
   o:["12 cm","26 cm","17 cm","13 cm"],
   a:3,
   why:"The same right triangle read the third way: **r = √(d² + (chord/2)²)** = √(5² + 12²) = √169 = `13 cm`, with `d` and half the chord as the legs and `r` as the hypotenuse. Option A is half the chord itself, the leg rather than the hypotenuse; option C is `12 + 5`, the addition done on the lengths instead of on their squares, and option B is the diameter `2r`.",
   tag:"Radius r"},

  {q:"In a circle with centre O, M is the midpoint of a chord AB which is not a diameter. Which of these must be true?",
   o:["OM = ½AB","OM = OA","OM ∥ the tangent at A","OM ⊥ AB"],
   a:3,
   why:"This is the **converse of the perpendicular-from-the-centre theorem: the line joining the centre to the midpoint of a chord is perpendicular to that chord**, so **OM ⊥ AB**. It is how a figure hands over a right angle without marking one. Option A holds only for the one chord with d = chord/2; option B is true only of a radius drawn to a point *on* the circle, and M lies inside it, so OM is shorter than OA. Option C would need the tangent at A, which is perpendicular to OA, to be parallel to OM, which is perpendicular to AB — that forces OA ∥ AB, and a radius cannot be parallel to a chord through its own endpoint.",
   tag:"Converse"},

  {q:"The perpendicular bisector of any chord of a circle:",
   o:["is a tangent to the circle","passes through the centre","passes through the centre only if the chord is a diameter","is parallel to the tangent at an end of the chord"],
   a:1,
   why:"**The perpendicular bisector of a chord passes through the centre**, because the centre is equidistant from the chord's two ends. Two chords therefore locate the centre: their perpendicular bisectors meet at it, which is exactly how a circle is drawn through three given points. Option C is the hedged version and the usual tick — it holds for *every* chord, not only for a diameter. Option D confuses this line with the tangent at the midpoint of the arc, which is the line parallel to the chord.",
   tag:"Perpendicular bisector"},

  {q:"AB and CD are equal chords of a circle with centre O. If `∠AOB = 70°`, then `∠COD` is:",
   o:["35°","70°","110°","140°"],
   a:1,
   why:"**Equal chords subtend equal angles at the centre**, so ∠COD = ∠AOB = `70°`. The triangles OAB and OCD are congruent by three sides, which is the whole proof. Option C is `180° − 70°`, the supplement — the result for the angles in the two opposite segments of one chord, not for two equal chords. Option A halves the angle, as though 70° were an angle at the circumference, and option D doubles it.",
   tag:"Equal chords"},

  {q:"Of two unequal chords of the same circle, the longer one is:",
   o:["nearer the centre","farther from the centre","the one subtending the smaller angle at the centre","the one the perpendicular from the centre does not bisect"],
   a:0,
   why:"**chord = 2√(r² − d²)** falls as `d` grows, so the **longer chord is the nearer to the centre** — and the chord with d = 0, the diameter, is the longest of all. Option B is the same fact read backwards and is the usual tick. Option C has the angle the wrong way round, since the longer chord subtends the **larger** angle at the centre; option D is false of every chord, because the perpendicular from the centre bisects them all.",
   tag:"Longer chord"},

  {q:"AB and CD are equal chords of a circle with centre O. Which of these need **not** be true?",
   o:["arc AB = arc CD","∠AOB = ∠COD","AB ∥ CD","AB and CD are equidistant from O"],
   a:2,
   why:"Equal chords give **equal arcs, equal angles at the centre and equal distances from the centre** — three results, each with a converse. Nothing fixes their direction, so **AB ∥ CD need not hold**: two equal chords can be turned to any angle. Option D is the result most often doubted and is in fact always true.",
   tag:"Equal chords"},

  {q:"In the figure, OM is perpendicular to the chord AB, with OM = `8 cm` and the radius OA = `17 cm`. The length of AB is:",
   o:["15 cm","34 cm","30 cm","25 cm"],
   a:2,
   why:"**The perpendicular from the centre bisects the chord, and chord = 2√(r² − d²)** = 2√(17² − 8²) = 2√225 = 2 × 15 = `30 cm`. Option A is AM, half the chord — the answer one step early, and the single commonest mistake here. Option B is the diameter 2r and option D is simply 17 + 8.",
   tag:"2√(r²−d²)",
   d:"c-chord-perp"},

  {q:"AB and CD are two chords of a circle with centre O lying at equal perpendicular distances from O. It must follow that:",
   o:["AB ∥ CD","AB and CD are both diameters","AB = CD","AB = 2CD"],
   a:2,
   why:"This is the **converse of the equal-chord theorem: chords equidistant from the centre are equal**, so **AB = CD**. It follows from chord = 2√(r² − d²), which fixes the length once `r` and `d` are fixed. Option A is the standard over-claim — equal chords may be turned to any angle to each other; option B would need both distances to be zero, which is not given.",
   tag:"Equal chords"},

  {q:"Two parallel chords of lengths `6 cm` and `8 cm` are drawn in a circle of radius `5 cm`, on the same side of the centre. The distance between them is:",
   o:["7 cm","4 cm","1 cm","3 cm"],
   a:2,
   why:"Using **d = √(r² − (chord/2)²)**, the 6 cm chord is √(25 − 9) = 4 cm from the centre and the 8 cm chord is √(25 − 16) = 3 cm from it. On the **same side** the distance between them is the difference, 4 − 3 = `1 cm`. Option A, `7 cm`, is the opposite-sides answer d₁ + d₂, and it is the trap whenever the question names a side; options B and D are the two distances themselves, which is where the working stops one step early.",
   tag:"Parallel chords"},

  {q:"Two parallel chords of a circle of radius `17 cm` have lengths `30 cm` and `16 cm` and lie on opposite sides of the centre. The distance between them is:",
   o:["7 cm","15 cm","8 cm","23 cm"],
   a:3,
   why:"**d = √(r² − (chord/2)²)** gives √(289 − 225) = 8 cm for the 30 cm chord and √(289 − 64) = 15 cm for the 16 cm chord. On **opposite sides** the centre lies between them, so the distance is the sum, 8 + 15 = `23 cm`. Option A, `7 cm`, is the same-side answer d₁ − d₂; options B and C are the two distances themselves.",
   tag:"Parallel chords"},

  {q:"An arc AB of a circle subtends `∠AOB` at the centre O and `∠ACB` at a point C on the remaining part of the circle. Then `∠AOB` is:",
   o:["equal to ∠ACB","half of ∠ACB","twice ∠ACB","the supplement of ∠ACB"],
   a:2,
   why:"**The angle at the centre is twice the angle at the circumference standing on the same arc: ∠AOB = 2∠ACB.** Option B is the identical theorem stated the wrong way round, and it is the commonest error in the whole circle chapter. Option D belongs to a different result — the angles in the two opposite segments of a chord are supplementary.",
   tag:"∠AOB = 2∠ACB"},

  {q:"In the figure, O is the centre of the circle and C lies on the major arc AB. If `∠AOB = 80°`, then `∠ACB` is:",
   o:["160°","40°","140°","20°"],
   a:1,
   why:"**∠AOB = 2∠ACB** on the same arc, so ∠ACB = 80 ÷ 2 = `40°`. Option A doubles the central angle instead of halving it, and option D halves it twice. Option C, `140°`, is the angle in the *minor* segment, 180° − 40° — correct for a point on the other arc, which is why the question says C is on the major arc.",
   tag:"∠AOB = 2∠ACB",
   d:"c-central-inscribed"},

  {q:"In the figure, C and D lie on the same arc of a circle, on the same side of the chord AB. If `∠ACB = 48°`, then `∠ADB` is:",
   o:["96°","42°","132°","48°"],
   a:3,
   why:"**Angles in the same segment are equal**, so ∠ADB = ∠ACB = `48°` — the position of D on that arc makes no difference at all. Option A is the angle at the centre, 2 × 48°; option C is 180° − 48°, the angle in the opposite segment, which applies only if D were on the other side of AB.",
   tag:"Same segment",
   d:"c-same-arc"},

  {q:"In the figure, AB is a diameter of the circle and C is a point on the circle with `∠BAC = 35°`. Then `∠ABC` is:",
   o:["35°","45°","55°","70°"],
   a:2,
   why:"**The angle in a semicircle is 90°**, so ∠ACB = 90° and the triangle's angles give ∠ABC = 180° − 90° − 35° = `55°`. Option D, `70°`, comes from doubling 35° as though 35° were an angle at the circumference and ∠ABC the angle at the centre. Option A simply repeats ∠BAC, as though the triangle were isosceles, which it is not; option B is half of the right angle, as though CA and CB split it equally.",
   tag:"Semicircle",
   d:"c-semicircle"},

  {q:"A, B and C are three points on a circle of radius `r` and `∠ACB = 90°`. Then AB must be:",
   o:["a diameter of the circle","equal to the radius","equal to `r√2`","perpendicular to the radius through C"],
   a:0,
   why:"By the **converse of the angle in a semicircle, a chord subtending 90° at a point of the circle is a diameter** — the central angle is 2 × 90° = 180°. Option C is the trap: `r√2` is the chord that subtends `90°` **at the centre**, not at the circumference. This converse is how a question hands over a diameter without ever using the word.",
   tag:"Converse"},

  {q:"In a circle of radius `10 cm`, the greatest possible length of a chord is:",
   o:["10 cm","20 cm","10√2 cm","40 cm"],
   a:1,
   why:"**chord = 2√(r² − d²)** is largest when d = 0, which is the chord through the centre, so **the diameter `2r` is the longest chord** — here `20 cm`. Option A is the radius, which is half of it and the usual slip. Option C, `10√2 cm`, is the chord that subtends `90°` at the centre — long, but not the longest; option D is `4r`, which no chord can reach.",
   tag:"Longest chord"},

  {q:"Two chords AB and CD of a circle cross at a point P inside the circle. Then:",
   o:["PA·PB = PC·PD","PA·PC = PB·PD","PA·PD = PB·PC","PA·PB = PC·PD only if AB ⊥ CD"],
   a:0,
   why:"**Two chords crossing inside a circle satisfy PA·PB = PC·PD** — on each chord, the two pieces made by P are multiplied together. Options B and C pair one piece of AB with one piece of CD, which is the standard mis-pairing and the reason the theorem is worth writing out in letters before putting numbers in. Option D is the hedged version: the result holds for *any* two chords through P, and nothing in the proof — the similar triangles APC and DPB — needs a right angle.",
   tag:"PA·PB = PC·PD"},

  {q:"In the figure, the chords AB and CD cross at P inside the circle, with PA = `6 cm`, PB = `4 cm` and PC = `8 cm`. The length of PD is:",
   o:["12 cm","2 cm","3 cm","24 cm"],
   a:2,
   why:"**PA·PB = PC·PD**, so 6 × 4 = 8 × PD, giving PD = 24 ÷ 8 = `3 cm`. Option A, `12 cm`, is what the mis-pairing PA·PC = PB·PD gives — 48 ÷ 4 — and it is the commonest wrong answer. Option B, `2 cm`, is what a sum rule PA + PB = PC + PD would give, and the theorem is about products only; option D is the product 24 left undivided.",
   tag:"PA·PB = PC·PD",
   d:"c-two-chords"},

  {q:"In the figure, two secants from the external point P cut the circle at A and B and at C and D, with PA = `4 cm`, PB = `9 cm` and PC = `3 cm`. The length of PD is:",
   o:["12 cm","6 cm","27 cm","36 cm"],
   a:0,
   why:"For two secants from an external point the same product rule holds, **PA·PB = PC·PD**, with each distance measured from P: 4 × 9 = 3 × PD, so PD = 36 ÷ 3 = `12 cm`. Option B, `6 cm`, is √36 — the length of the *tangent* from P, by PT² = PA·PB, which is a different question. Option D is the product 36 itself.",
   tag:"Two secants",
   d:"c-chords-ext"}
 ],
  note:"Every question above comes out of one line of the sheet. If a chord question takes more than a line of working, the triangle with sides `d`, chord/2 and `r` is the thing to draw first."}
]
},

/* ============================================================ 9 — Tangents, secants and the alternate segment (22 questions) */
{
id:"geo-circle-tangent", n:"Tangents, secants and the alternate segment", hy:1,
w:"The one right angle the whole topic rests on, the two tangents from an outside point, PT² = PA·PB, the alternate segment theorem, and the tangent lengths that give Pitot's rule.",
quick:[
 "**The tangent at any point of a circle is perpendicular to the radius through the point of contact.** So △OAP is right-angled at A with OP the hypotenuse: **PA = √(OP² − r²)**, and backwards **OP = √(r² + PA²)**.",
 "From an external point P the two tangents are equal, `PA = PB`, and **∠APB + ∠AOB = 180°** — supplementary, not double. OP bisects both ∠APB and ∠AOB and is the perpendicular bisector of the chord of contact AB.",
 "**The tangent–secant relation: PT² = PA·PB**, where PB runs from P to the *far* point of the circle — the whole secant, never the chord AB.",
 "**The alternate segment theorem**: the angle between a tangent and a chord at the point of contact equals the angle in the alternate segment — and therefore **half the angle the chord subtends at the centre**.",
 "The incircle of △ABC touches the sides at `s − a` from A, `s − b` from B and `s − c` from C, where a is the side *opposite* A. In a right triangle **r = (a + b − c)/2**.",
 "A quadrilateral circumscribing a circle satisfies **AB + CD = BC + AD** — the two pairs of *opposite* sides have equal sums. This is Pitot's rule, and it follows from the equal tangent lengths at each vertex.",
 "Tangents from a point inside, on, and outside a circle: **0, 1 and 2**."
],
blocks:[
 {h:"THE SHEET — every tangent result, with the form the question uses",
  cols:["Asked as","The result","What the question does with it"],
  rows:[
  ["**The tangent at a point**","Perpendicular to the radius through the point of contact","∠OAP = 90°, so △OAP is right-angled at A — the start of every length here"],
  ["**Length of the tangent from P**","PA = √(OP² − r²), and backwards OP = √(r² + PA²)","OP is the hypotenuse, so the radius comes **off** it. √(OP² + r²) is the option put there for adding"],
  ["**The two tangents from P**","PA = PB","△PAB is isosceles, so each of its base angles is (180° − ∠APB)/2"],
  ["**∠APB and ∠AOB**","∠APB + ∠AOB = 180°","Supplementary. ∠APB = 70° gives ∠AOB = 110°, not 140°"],
  ["**OP, the join to the centre**","Bisects ∠APB and ∠AOB, and is the perpendicular bisector of the chord of contact AB","∠AOP = ½∠AOB, which is how PA drops out of a 30–60–90 triangle"],
  ["**Tangent and secant from P**","PT² = PA·PB","PA is the near intersection, PB the far one, both measured from P"],
  ["**The alternate segment theorem**","Tangent–chord angle = the angle in the alternate segment","∠BAT = ∠ACB, with C on the other side of the chord AB"],
  ["**Tangent–chord angle and the centre**","Tangent–chord angle = ½∠AOB","∠BAT = 40° gives ∠AOB = 80°; a chord equal to `r` gives 30°, one of `r√2` gives 45°"],
  ["**Tangent and a diameter**","The angle between them is 90°","Because the angle in the alternate segment is the angle in a semicircle — and the tangents at the two ends of a diameter are therefore parallel"],
  ["**The other tangent–chord angle**","180° − the first one","It equals the angle in the *other* segment, and the two segments' angles are supplementary"],
  ["**Tangent lengths to the incircle**","s − a from A, s − b from B, s − c from C","The check is (s − a) + (s − b) = 2s − a − b = c"],
  ["**Inradius of a right triangle**","r = (a + b − c)/2","Legs 3 and 4 give r = `1`, while the circumradius is c/2 = `2.5`"],
  ["**Quadrilateral round a circle**","AB + CD = BC + AD (Pitot)","The *opposite* sides pair up, so any three of the four sides fix the fourth"],
  ["**Tangents from a point inside / on / outside**","0 / 1 / 2","Asked straight, in exactly that order"]
 ],
  note:"Every question below is answered by one line of this sheet. Two lines carry most of the marks: the right angle at the point of contact, and the alternate segment theorem."},

 {h:"THE ONE RIGHT ANGLE EVERYTHING COMES FROM", dia:"c-tangent-radius",
  cap:"The tangent at P with the radius OP. Each length and angle in this topic is read off a right-angled triangle built on that 90°."},

 {h:"THE ALTERNATE SEGMENT THEOREM", dia:"c-alternate-seg",
  cap:"The tangent at A and the chord AB. The tangent–chord angle equals ∠ACB in the segment on the far side of AB — the alternate segment — and so equals half ∠AOB."},

 {careful:"**∠APB + ∠AOB = 180°** — the two angles are *supplementary*, not one double the other. The doubling rule belongs to the angle at the centre and an angle on the circumference. Here ∠OAP and ∠OBP are both 90°, and the four angles of the quadrilateral OAPB add to 360°, which leaves ∠APB + ∠AOB = 180°. So ∠APB = 70° gives `110°`, and `140°` is the wrong answer waiting on every paper."},

 {careful:"In **PT² = PA·PB** the second length runs from P to the *far* intersection — the whole secant — not the chord. With PA = 2 and AB = 6 the product is 2 × 8 = `16`, never 2 × 6 = 12. The same slip ruins PA·PB when two chords cross inside the circle."},

 {careful:"The tangent length from the vertex **A** is `s − a`, where a is the side **opposite** A. Pairing A with b or with c is the standard slip, and the check is immediate: (s − a) + (s − b) must give back AB = c. The same equal-tangent-lengths argument, applied to four vertices instead of three, is what proves **AB + CD = BC + AD** for a quadrilateral drawn round a circle — and there the pairing is *opposite* sides, not adjacent ones."},

 {h:"THE TANGENT LENGTHS TO THE INCIRCLE", dia:"c-tangent-lengths",
  cap:"The three pairs of equal tangent lengths. Each vertex carries s minus the side *opposite* it, and the two at the ends of a side add back to that side."},

 {h:"QUESTIONS — the tangent, the secant and the alternate segment",
  mcq:[
  {q:"A tangent to a circle at a point A is:",
   o:["Parallel to the radius at the point of contact","Perpendicular to the radius at the point of contact","Perpendicular to the tangent at the other end of the diameter through A","Perpendicular to every chord through the point of contact"],
   a:1,
   why:"**The tangent at any point of a circle is perpendicular to the radius drawn to that point of contact.** Every other result in the topic uses that right angle — with an external point P it makes △OAP right-angled at A, which is where **PA² = OP² − r²** comes from. Option C is the reverse of the truth: both of those tangents are perpendicular to the same diameter, so the tangents at the two ends of a diameter are **parallel**. Option D is true only of the diameter through A — an ordinary chord through A meets the tangent at the tangent–chord angle, which the **alternate segment theorem** measures, and that is not a right angle.",
   tag:"Tangent ⊥ radius"},

  {q:"The radius of a circle is `5 cm` and an external point P is `13 cm` from the centre. The length of the tangent from P to the circle is:",
   o:["8 cm","12 cm","18 cm","√194 cm"],
   a:1,
   why:"The tangent is perpendicular to the radius at the point of contact, so △OAP is right-angled at A and **PA = √(OP² − r²)** = √(169 − 25) = √144 = `12 cm`. Option D is √(169 + 25), which is what adding gives — OP is the hypotenuse, so the radius comes off it, never onto it. Options A and C are 13 − 5 and 13 + 5, the two ways of forgetting that the lengths square first.",
   tag:"Tangent length"},

  {q:"In the figure, PA and PB are tangents from P to a circle with centre O. If ∠APB = `50°`, then ∠AOB is:",
   o:["25°","100°","130°","65°"],
   a:2,
   d:"c-tangent-angle",
   why:"**For two tangents from an external point, ∠APB + ∠AOB = 180°.** The reason is that ∠OAP = ∠OBP = 90° by the tangent–radius theorem, and the quadrilateral OAPB has angle sum 360°, so 50° + ∠AOB = 180° and ∠AOB = `130°`. Option B is 2 × 50° = `100°`: the doubling rule belongs to the angle at the centre and an angle on the circumference, not to the angle between two tangents, and it is the option most often ticked. Option D, `65°`, is ∠AOP, the half that OP cuts off, and option A is ∠APO.",
   tag:"∠APB + ∠AOB"},

  {q:"The angle between a tangent and a chord drawn from the point of contact is equal to:",
   o:["The angle in the alternate segment","The angle the chord subtends at the centre","Half the angle in the alternate segment","The supplement of the angle in the alternate segment"],
   a:0,
   why:"This is **the alternate segment theorem**: the angle between a tangent and a chord through the point of contact equals the angle the chord subtends in the alternate segment — the segment on the other side of that chord. Option B is twice too large, because the angle at the centre is itself twice the angle in the alternate segment, so the tangent–chord angle is **half ∠AOB**. Option C halves the wrong angle — the halving belongs to the angle at the *centre*, while the angle in the alternate segment is equal to the tangent–chord angle, not twice it. Option D is the angle in the *other* segment — the two segment angles are supplementary, and that one is matched by the tangent–chord angle on the other side of the chord.",
   tag:"Alternate segment"},

  {q:"AT is a tangent at A to a circle, AB is a chord, and C lies in the alternate segment. If ∠BAT = `58°`, then ∠ACB is:",
   o:["32°","58°","116°","122°"],
   a:1,
   why:"By **the alternate segment theorem** the tangent–chord angle equals the angle in the alternate segment, so ∠ACB = ∠BAT = `58°`. Option C, `116°`, is 2 × 58°, which is ∠AOB at the centre and not the angle at C. Option A is 90° − 58°, correct only if the angle had been measured from the radius OA instead of from the tangent, and option D, `122°`, is 180° − 58°, which is the angle in the *other* segment and not in the alternate one.",
   tag:"∠BAT = ∠ACB"},

  {q:"PT is a tangent to a circle at T and PAB is a secant through the same external point P. Then PT² equals:",
   o:["PA + PB","PA·AB","PA·PB","PB·AB"],
   a:2,
   why:"**The tangent–secant relation: PT² = PA·PB**, where PA is the near intersection and PB the far one, both measured from P. Options B and D each put the chord AB in place of one of the two secant lengths, and B is the commonest error in the topic. Option A adds where the relation multiplies. The relation is the limiting case of **PA·PB = PC·PD** for two secants from P, with the two points of the second secant running together at T.",
   tag:"PT² = PA·PB"},

  {q:"In the figure, PT is a tangent and PAB a secant from P. If PA = `4 cm` and AB = `5 cm`, then PT is:",
   o:["6 cm","√20 cm","20 cm","9 cm"],
   a:0,
   d:"c-tangent-secant",
   why:"**PT² = PA·PB**, and PB = PA + AB = 4 + 5 = 9, so PT² = 4 × 9 = 36 and PT = `6 cm`. Option B is √(4 × 5), the result of putting the chord AB where the whole secant PB belongs — that is the trap the question is built on. Option D, `9 cm`, is PB itself, and option C is the unrooted 20.",
   tag:"PT² = PA·PB"},

  {q:"A tangent PT of length `12 cm` and a secant PAB are drawn from an external point P. If PA = `8 cm`, then AB is:",
   o:["18 cm","6 cm","4 cm","10 cm"],
   a:3,
   why:"**PT² = PA·PB**, so 144 = 8 × PB, giving PB = 18 cm, and the chord is AB = PB − PA = 18 − 8 = `10 cm`. Option A is PB itself, left unreduced — the question asks for the chord, not the whole secant, and that last subtraction is where the mark goes. Option B, `6 cm`, subtracts the tangent instead of PA, 18 − 12, and option C, `4 cm`, is simply 12 − 8, which uses no relation at all.",
   tag:"PT² = PA·PB"},

  {q:"A circle touches all four sides of a quadrilateral ABCD. If AB = `7 cm`, BC = `9 cm` and CD = `5 cm`, then AD is:",
   o:["11 cm","9 cm","3 cm","7 cm"],
   a:2,
   why:"For a quadrilateral circumscribing a circle, **AB + CD = BC + AD** — Pitot's rule, which follows from the two tangent lengths at each vertex being equal. So 7 + 5 = 9 + AD and AD = `3 cm`. Option A, `11 cm`, comes from pairing the sides in the order given, 7 + 9 = 5 + AD, and option D, `7 cm`, from the other adjacent pairing, 7 + AD = 9 + 5; the theorem pairs the sides that are *opposite*, and that pairing is its whole content. Option B, `9 cm`, takes AD = BC, which holds for a parallelogram and not for a quadrilateral drawn round a circle.",
   tag:"AB + CD = BC + AD"},

  {q:"Which of these can always have a circle drawn inside it touching all four of its sides?",
   o:["A rectangle","A parallelogram","A trapezium","A rhombus"],
   a:3,
   why:"The test is **AB + CD = BC + AD**: the two pairs of opposite sides must have equal sums. A rhombus has all four sides equal, so the two sums match whatever its shape. A rectangle gives l + l = b + b, which holds only when l = b — that is, only for a square — and the same objection rules out the general parallelogram and the general trapezium.",
   tag:"Pitot's rule"},

  {q:"The numbers of tangents that can be drawn to a circle from a point inside it, from a point on it, and from a point outside it are, in that order:",
   o:["0, 1, 2","1, 1, 2","2, 1, 0","0, 2, 2"],
   a:0,
   why:"From a point inside the circle **no** tangent can be drawn, from a point on the circle exactly **one** — the tangent at that point — and from a point outside exactly **two**: `0`, `1` and `2`. Option C reverses the three cases. Option B gives a point inside one tangent, which no interior point has, because every line through it cuts the circle twice. Option D counts the single tangent at a point on the circle twice, once in each direction along it — it is one line, so one tangent. The two tangents from an outside point are equal in length, and that equality is why the outside case is the one that gets asked.",
   tag:"0, 1, 2"},

  {q:"The incircle of △ABC touches AB at F, where BC = a, CA = b, AB = c and s is the semi-perimeter. The length AF is:",
   o:["s − b","s − c","c/2","s − a"],
   a:3,
   why:"**The tangent lengths from the vertices of a triangle to its incircle are `s − a` from A, `s − b` from B and `s − c` from C**, where a is the side *opposite* A. So AF = AE = s − a. The check is that AF and FB must rebuild AB: (s − a) + (s − b) = 2s − a − b = c. Options A and B pair the vertex with a side next to it instead of the side opposite it, which is the standard slip, and option C assumes F is the midpoint of AB — true only when CA = CB.",
   tag:"s − a, s − b, s − c"},

  {q:"The incircle of △ABC touches BC at D, with BD = `4 cm` and DC = `6 cm`, and AB = `9 cm`. The length AC is:",
   o:["7 cm","11 cm","10 cm","15 cm"],
   a:1,
   why:"**The tangent lengths are `s − a` from A, `s − b` from B and `s − c` from C**, so BD = s − b = 4 and DC = s − c = 6. From s − c = 6 with c = AB = 9 comes s = `15`, and then AC = b = s − 4 = `11 cm` — in one line, AC = AB + DC − BD = 9 + 6 − 4. Option A, `7 cm`, swaps the two tangent lengths and takes 9 + 4 − 6; option C is BC = BD + DC = `10 cm`, the side already found and not the one asked for; option D is the semi-perimeter s itself.",
   tag:"s − b, s − c"},

  {q:"A right triangle has its right angle at C, with CB = `9 cm` and CA = `12 cm`. Its incircle touches CA at E. The length CE is:",
   o:["3 cm","6 cm","9 cm","7.5 cm"],
   a:0,
   why:"The hypotenuse is AB = √(81 + 144) = `15 cm`, so s = (9 + 12 + 15)/2 = 18 and the tangent length from C is **s − c** = 18 − 15 = `3 cm`. Because the two tangents from C run along the legs and each radius meets its leg at 90°, that same length is the inradius: **r = s − c = (a + b − c)/2** = (9 + 12 − 15)/2 = `3 cm`. Option C is s − a = `9 cm`, the tangent length from A, option B is s − b = `6 cm`, the one from B, and option D is the *circum*radius c/2 = `7.5 cm`.",
   tag:"r = (a + b − c)/2"},

  {q:"Two tangents are drawn from an external point P to a circle, touching it at A and B. If ∠APB = `60°`, then △PAB is:",
   o:["Right-angled isosceles","Isosceles but not equilateral","Equilateral","Scalene"],
   a:2,
   why:"**The two tangents from an external point are equal**, so PA = PB and △PAB is isosceles with apex ∠APB = 60°. The base angles are then (180° − 60°)/2 = 60° each, so every angle is 60° and the triangle is **equilateral**. Option B is the right answer for every other apex angle, which is exactly why 60° is the case SSC asks about.",
   tag:"PA = PB"},

  {q:"A tangent from an external point P touches a circle of centre O and radius `8 cm` at A, and PA = `15 cm`. The distance OP is:",
   o:["√161 cm","23 cm","7 cm","17 cm"],
   a:3,
   why:"**The tangent is perpendicular to the radius at the point of contact**, so △OAP is right-angled at A and OP is the hypotenuse: **OP = √(r² + PA²)** = √(64 + 225) = √289 = `17 cm`. Option A is √(PA² − r²), which is **PA = √(OP² − r²)** run in the wrong direction — the radius comes off OP, never off the tangent. Options B and C are 8 + 15 and 15 − 8, both taken before the squaring.",
   tag:"OP from PA"},

  {q:"In the figure, PA and PB are tangents from an external point P to a circle with centre O. Which of these is **not** always true?",
   o:["PA = PB","OP bisects ∠APB","OP is the perpendicular bisector of AB","OP = AB"],
   a:3,
   d:"c-two-tangents",
   why:"The two tangents from an external point are equal, and △OAP ≅ △OBP by **RHS**, so OP bisects both ∠APB and ∠AOB and is the perpendicular bisector of the chord of contact AB. Nothing makes OP equal to AB: with r = 5 and OP = 13 the tangents are 12 and AB works out as 120/13, not 13. Option C is the statement most often doubted, and it is in fact always true — OP ⊥ AB and OP bisects AB.",
   tag:"Two tangents"},

  {q:"AT is a tangent at A to a circle and AB is a chord through A. The angle ∠BAT is `90°` exactly when AB is:",
   o:["A chord equal to the radius","A chord subtending 120° at the centre","A diameter","A chord equal to r√2"],
   a:2,
   why:"By **the alternate segment theorem** the tangent–chord angle equals the angle in the alternate segment, and that angle is 90° only when the segment is a semicircle — so AB is a **diameter**. The same follows from the tangent being perpendicular to the radius at A, and therefore to the diameter through A. The other three options are the standard chains worth knowing: a chord equal to `r` subtends 60° at the centre and gives a tangent–chord angle of `30°`, a chord of `r√2` gives `45°`, and a chord subtending 120° gives `60°`.",
   tag:"Tangent and diameter"},

  {q:"AB is a chord of a circle with centre O and AT is the tangent at A. If ∠BAT = `65°`, then ∠AOB is:",
   o:["130°","65°","115°","32.5°"],
   a:0,
   why:"By **the alternate segment theorem** ∠BAT equals the angle the chord subtends in the alternate segment, and the angle at the centre is twice any angle on the circumference — so the tangent–chord angle is **half ∠AOB** and ∠AOB = 2 × 65° = `130°`. Option B repeats the given angle, which sits at the circumference and not at the centre. Option C, `115°`, is 180° − 65°, the angle in the *other* segment.",
   tag:"½∠AOB"},

  {q:"In the figure, PA and PB are tangents to a circle with centre O and OA = `6 cm`. If ∠AOB = `120°`, then PA is:",
   o:["6√2 cm","6√3 cm","12 cm","3√3 cm"],
   a:1,
   d:"c-tangent-angle",
   why:"OP bisects ∠AOB, so ∠AOP = 60°, and **the tangent is perpendicular to the radius at A**, so △OAP is a 30–60–90 triangle with OA : PA : OP in the ratio **1 : √3 : 2**. With OA = 6 that gives PA = `6√3 cm` and OP = 12 cm. Option C, `12 cm`, is OP — the distance to the centre, not the tangent length — and it is the one most often taken. Options A and D attach the wrong multiplier to OA: the side opposite 60° carries √3, and nothing here carries √2.",
   tag:"30–60–90"},

  {q:"AT is a tangent at A to a circle and AB is a chord with ∠BAT = `55°`. If C lies in the alternate segment and D lies in the other segment, then ∠ADB is:",
   o:["55°","35°","110°","125°"],
   a:3,
   why:"**The alternate segment theorem** gives ∠ACB = ∠BAT = 55°. C and D lie on opposite arcs of the chord AB, so ∠ACB and ∠ADB are opposite angles of the cyclic quadrilateral ACBD and are **supplementary**: ∠ADB = 180° − 55° = `125°`. Option A is the angle at C, which the tangent–chord angle equals directly, and it is the trap. Equivalently, the tangent–chord angle on the other side of AB is 180° − 55° = 125°, and that one equals the angle in its own alternate segment.",
   tag:"The other segment"},

  {q:"PA and PB are tangents from P to a circle with centre O. If ∠AOB = `100°`, then ∠PAB is:",
   o:["50°","40°","80°","100°"],
   a:0,
   why:"△OAB is isosceles with OA = OB = r and apex 100°, so ∠OAB = (180° − 100°)/2 = 40°; and **the tangent is perpendicular to the radius at A**, so ∠PAB = 90° − 40° = `50°`. The same answer comes straight out of **the alternate segment theorem**, by which the tangent–chord angle ∠PAB is half the central angle, 100°/2 = 50°. Option B is ∠OAB, the angle inside the triangle of radii, and option C is ∠APB = 180° − 100° = 80°.",
   tag:"Tangent–chord angle"}
 ],
  note:"Two lines answer most of these: ∠OAP = 90° at the point of contact, and the tangent–chord angle equals the angle in the alternate segment, which is half the angle at the centre."}
]
},

/* ============================================================ 10 — Segments, sectors and cyclic quadrilaterals (23 questions) */
{
id:"geo-circle-segment", n:"Segments, sectors and cyclic quadrilaterals", hy:1,
w:"Which region is the segment and which the sector, the three chord chains that fix every segment angle, and the whole of the cyclic quadrilateral including Ptolemy.",
quick:[
 "A **chord** and an arc bound a **segment**. Two **radii** and an arc bound a **sector**. The chord cuts off a minor and a major segment; the radii cut off a minor and a major sector. The chord belongs to both of its segments, and the two radii belong to both sectors.",
 "The angle in the **major** segment is **acute**, the angle in the **minor** segment is **obtuse**, and the two are **supplementary**. **Angles in the same segment are equal**, and each is half the angle the same chord makes at the centre.",
 "**Chord `= 2r sin(θ/2)`** for a central angle θ. Chord `= r` ⇒ `60°` at the centre, `30°` in the major segment, `150°` in the minor. Chord `= r√2` ⇒ `90°`, `45°`, `135°`. Chord `= r√3` ⇒ `120°`, `60°`, `120°`.",
 "**In a cyclic quadrilateral the opposite angles are supplementary**: ∠A + ∠C = `180°` and ∠B + ∠D = `180°`. The converse is what proves four points concyclic.",
 "**The exterior angle of a cyclic quadrilateral equals the interior opposite angle** — the angle at the far vertex, not its supplement.",
 "**Ptolemy's theorem**: for a cyclic quadrilateral ABCD, `AC · BD = AB·CD + BC·AD`. The product of the diagonals equals the sum of the products of the two pairs of **opposite** sides.",
 "A cyclic parallelogram is a **rectangle**; an isosceles trapezium is always cyclic; a rhombus is cyclic only when it is a **square**. Equal arcs subtend equal angles, and the angle is proportional to its arc."
],
blocks:[
 {h:"THE SHEET — the regions, the angles and the cyclic quadrilateral",
  cols:["Asked as","The result","What the question does with it"],
  rows:[
  ["**Segment**","The region bounded by a **chord** and an arc","Minor segment on the side of the minor arc, major segment on the other. The chord belongs to both."],
  ["**Sector**","The region bounded by **two radii** and an arc","Minor and major sector. Two radii, never a chord — this is the pair most often swapped."],
  ["**Angle in the major segment**","Half the angle the chord makes at the centre, and always **acute**","Every point on the major arc gives the same angle, so the question never has to say which point. A diameter cuts off no major segment: it gives two semicircles and the angle `90°`."],
  ["**Angle in the minor segment**","`180°` − the angle in the major segment, and always **obtuse**","The two segment angles are supplementary, because the four points form a cyclic quadrilateral."],
  ["**Angles in the same segment**","Equal","The converse of this is the concyclic test."],
  ["**Chord from the central angle**","`2r sin(θ/2)` for a central angle θ","Gives `r` at `60°`, `r√2` at `90°`, `r√3` at `120°` and `2r` at `180°` — the diameter."],
  ["**Chord `= r`**","Central `60°`, major segment `30°`, minor segment `150°`","△OAB has two radii and a chord all equal, so it is equilateral."],
  ["**Chord `= r√2`**","Central `90°`, major `45°`, minor `135°`","△OAB is right-angled and isosceles; the chord is the side of the inscribed square."],
  ["**Chord `= r√3`**","Central `120°`, major `60°`, minor `120°`","The side of the inscribed equilateral triangle. The central angle and the minor-segment angle are both `120°` — that is not a misprint."],
  ["**Cyclic quadrilateral**","∠A + ∠C = `180°`, ∠B + ∠D = `180°`","All four angles add to `360°` anyway, so the two statements are one statement."],
  ["**Exterior angle**","Equals the interior **opposite** angle","Produce one side: the angle outside equals the angle at the far vertex. It equals the *adjacent* interior angle's supplement, which is the same number read the wrong way round."],
  ["**Concyclic test**","Equal angles on the same side of a segment","If ∠ACB = ∠ADB with C and D on the same side of AB, then A, B, C and D lie on one circle."],
  ["**Ptolemy's theorem**","`AC · BD = AB·CD + BC·AD`","Diagonals multiplied together; opposite sides paired. With an equilateral △ABC and P on arc BC it gives `PA = PB + PC`."],
  ["**Cyclic parallelogram**","A **rectangle**","Opposite angles equal and supplementary forces each to be `90°`."],
  ["**Which quadrilaterals are cyclic**","An isosceles trapezium always; a rhombus only if it is a square","A kite is cyclic only when the two equal opposite angles are right angles."],
  ["**Arc and angle**","Equal arcs subtend equal angles, and the angle is proportional to the arc","An arc that is `1/n` of the circle subtends `360/n` at the centre and `180/n` at the circumference."]
 ],
  note:"The **areas** of a segment and a sector belong to the Mensuration subject, not here. Nothing on this page asks for an area."},

 {h:"THE TWO REGIONS", dia:"c-segment",
  cap:"The chord cuts the circle into the shaded **minor segment** and the **major segment** on the other side of it. Two radii drawn to the ends of the chord would bound the minor and major **sectors** instead — the same two arcs, with the chord replaced by the radii."},

 {careful:"**A segment is cut off by a chord; a sector is cut off by two radii.** The **minor** segment is what is left when the triangle OAB is taken out of the **minor** sector, so of that pair the sector is the larger; for the major pair it runs the other way, the major segment being the major sector with the triangle OAB added on. A question that gives a central angle and asks about *the segment* is not answered by anything to do with the sector, and the option that answers the sector question is always on the paper."},

 {careful:"\"The angle subtended by the chord\" has **three** different answers — at the centre, at a point on the major arc, and at a point on the minor arc — and they go `2x`, `x`, `180° − x`. For a chord equal to the radius they are `60°`, `30°` and `150°`. Read which one the question wants before choosing."},

 {careful:"**The exterior angle of a cyclic quadrilateral equals the interior opposite angle**, not its supplement. If AB is produced and the exterior angle at B is `110°`, then ∠ADC = `110°` and ∠ABC = `70°`. Ticking the supplement is the standard slip, because the opposite-angles rule is the one that comes to mind first."},

 {h:"QUESTIONS — the regions, the three chord chains, the cyclic quadrilateral",
  mcq:[
  {q:"A chord of a circle, together with the minor arc it cuts off, bounds:",
   o:["the minor sector","the minor segment","the major segment","a quadrant"],
   a:1,
   why:"**A chord and an arc bound a segment; two radii and an arc bound a sector.** The segment lying on the side of the minor arc is the minor segment. Option A is the minor *sector*, bounded by the two radii and that same minor arc — a larger region, and the one most often ticked, because the two words are learnt together and then swapped. A quadrant is the special sector whose central angle is `90°`.",
   tag:"Segment"},

  {q:"The **major sector** of a circle is bounded by:",
   o:["a chord and the major arc","two radii and the minor arc","a chord and the minor arc","two radii and the major arc"],
   a:3,
   why:"**A sector is bounded by two radii and an arc; a chord and an arc bound a segment.** The major sector is the one taking the major arc, so its boundary is the two radii and that arc. Option A is the major **segment** — the same arc with a chord in place of the radii, which is the swap this whole topic turns on. Options B and C name the two minor regions, which sit on the other side of the chord.",
   tag:"Sector"},

  {q:"A chord that is not a diameter divides a circle into two segments. Which statement is correct?",
   o:["The angle in each segment is `90°`","The angle in the minor segment is acute and the angle in the major segment is obtuse","The angles in the two segments are equal","The angle in the major segment is acute and the angle in the minor segment is obtuse"],
   a:3,
   why:"**The angle in the major segment is acute, the angle in the minor segment is obtuse, and the two are supplementary.** The four points form a cyclic quadrilateral, so the two angles add to `180°` and only one of them can be obtuse. Option B has the pair the wrong way round, which is the whole trap; option A is true only for a diameter, where both segments are semicircles.",
   tag:"Which is acute"},

  {q:"In the figure, the chord AB divides the circle into two segments, and the angle in the major segment is `35°`. The angle in the minor segment is:",
   o:["55°","145°","70°","110°"],
   a:1,
   why:"**The angles in the two segments of a chord are supplementary**, so the angle in the minor segment is 180° − 35° = `145°`. Option C is `70°`, the angle AB makes at the **centre** — twice the major-segment angle — and option D, `110°`, is that central angle taken away from `180°`, which is the commonest wrong route: doubling to the centre and then subtracting, instead of subtracting from `180°` straight away. Option A is the *complement*, `55°`, which belongs to no circle theorem.",
   d:"c-segment-angles",
   tag:"Supplementary"},

  {q:"A chord of a circle is equal in length to the radius. The angle the chord subtends at a point on the **major** arc is:",
   o:["60°","30°","150°","45°"],
   a:1,
   why:"The two radii and the chord are all equal, so △OAB is equilateral and the chord subtends `60°` at the centre. **The angle at the circumference is half the angle at the centre**, so the angle in the major segment is `30°`. Option A is that central angle, left unhalved; option C, `150°`, is the angle in the *minor* segment; option D, `45°`, is the major-segment angle of the chord `r√2` — the next chain along.",
   tag:"Chord = r"},

  {q:"A chord of a circle equals its radius. The angle the chord subtends at a point on the **minor** arc is:",
   o:["30°","120°","150°","60°"],
   a:2,
   why:"The central angle is `60°` because △OAB is equilateral, so the angle in the major segment is `30°` and **the angle in the minor segment is its supplement**, 180° − 30° = `150°`. Option A is the major-segment angle and option D the central angle — the three numbers of this chain are `60°`, `30°` and `150°`, and the question's job is to make you read which point the angle sits at. Option B, `120°`, belongs to the chord `r√3`.",
   tag:"Chord = r"},

  {q:"The length of a chord of a circle of radius `r` is `r√2`. The angle subtended by the chord in the minor segment is:",
   o:["135°","45°","90°","120°"],
   a:0,
   why:"With OA = OB = r and AB = r√2 the triangle satisfies `OA² + OB² = AB²`, so the central angle is `90°`. The major-segment angle is half of that, `45°`, and **the minor-segment angle is the supplement**, 180° − 45° = `135°`. Option B is the major-segment angle and option C the central one; option D, `120°`, belongs to the chord `r√3`.",
   tag:"Chord = r√2"},

  {q:"The length of a chord of a circle of radius `r` is `r√3`. The angle subtended by the chord in the major segment is:",
   o:["120°","30°","90°","60°"],
   a:3,
   why:"**Chord = 2r sin(θ/2)**, so 2r sin(θ/2) = r√3 gives sin(θ/2) = √3/2, θ/2 = 60° and a central angle of `120°`; **the angle in the major segment is half the central angle**, so it is `60°`. Option A is that central angle — and it is also the minor-segment angle, since 180° − 60° = 120°, which is exactly what makes this chain easy to mis-key. Options B and C are numbers off the other two chains — `30°` is the major-segment angle of the chord `r` and `90°` the central angle of the chord `r√2`. A chord of `r√3` is the side of the inscribed equilateral triangle.",
   tag:"Chord = r√3"},

  {q:"A chord AB of a circle of radius `r` subtends `∠AOB = 60°` at the centre O. The length of AB is:",
   o:["r√3","2r","r","r√2"],
   a:2,
   why:"**Chord = 2r sin(θ/2)**, so at θ = 60° the chord is 2r sin30° = `r`. The same thing read geometrically: OA = OB = r with a `60°` apex makes △OAB equilateral. Option A, `r√3`, is the chord for a central angle of `120°`, option D, `r√2`, the chord for `90°`, and option B, `2r`, the chord for `180°` — the diameter. All four are stock chords, so the angle is the only thing that separates them.",
   tag:"Chord from θ"},

  {q:"AB is a chord of a circle. P and Q lie on the major arc and R on the minor arc. If `∠APB = 42°`, then:",
   o:["∠AQB = 42° and ∠ARB = 138°","∠AQB = 42° and ∠ARB = 42°","∠AQB = 138° and ∠ARB = 42°","∠AQB = 21° and ∠ARB = 138°"],
   a:0,
   why:"**Angles in the same segment are equal**, so ∠AQB = ∠APB = `42°` wherever Q sits on the major arc; **the angle in the other segment is the supplement**, so ∠ARB = 180° − 42° = `138°`. Option B leaves R's angle equal as well, which is the slip the question is built on — moving along one arc never changes the angle, and crossing the chord always does. Option D halves `42°` as though it had been an angle at the centre.",
   tag:"Same segment"},

  {q:"In a cyclic quadrilateral ABCD, `∠A : ∠C = 4 : 5`. Then `∠C` is:",
   o:["100°","80°","90°","160°"],
   a:0,
   why:"**The opposite angles of a cyclic quadrilateral are supplementary**, and ∠A and ∠C are opposite, so 4x + 5x = 180° gives x = 20° and ∠C = `100°`. Option B, `80°`, is ∠A — the question asked for the larger of the pair. Option D, `160°`, is 4/9 of `360°`: the ratio applied to the angle sum of the whole quadrilateral instead of to the one opposite pair.",
   tag:"Opposite angles"},

  {q:"In a cyclic quadrilateral ABCD, `∠A = 65°` and `∠B = 70°`. Then `∠C` and `∠D` are respectively:",
   o:["115° and 110°","110° and 115°","115° and 115°","65° and 70°"],
   a:0,
   why:"**The opposite angles of a cyclic quadrilateral are supplementary**: ∠A + ∠C = `180°` and ∠B + ∠D = `180°`. So ∠C = 180° − 65° = `115°` and ∠D = 180° − 70° = `110°`, and the four angles add to `360°` as they must. Option B pairs each angle with its **neighbour** instead, giving 180° − 70° to ∠C and 180° − 65° to ∠D — that swap is the whole question. Option D treats ABCD as a parallelogram, whose opposite angles are equal rather than supplementary.",
   tag:"Opposite angles"},

  {q:"In a cyclic quadrilateral ABCD, the side AB is produced to E. If `∠CBE = 72°`, then `∠ADC` is:",
   o:["108°","72°","36°","144°"],
   a:1,
   why:"**The exterior angle of a cyclic quadrilateral equals the interior opposite angle**, so ∠ADC = `72°` directly. Option A, `108°`, is the interior angle ∠ABC — the supplement — and it is the commonest answer here, because the opposite-angles rule comes to mind before the exterior-angle rule. The two rules agree: ∠ABC = 108° and 180° − 108° = 72° = ∠ADC. Option D, `144°`, is `72°` doubled — the angle-at-the-centre rule dragged in where no central angle appears — and option C, `36°`, is that same rule used backwards.",
   tag:"Exterior angle"},

  {q:"A parallelogram inscribed in a circle must be:",
   o:["a rhombus","a trapezium","a rectangle","a square"],
   a:2,
   why:"A parallelogram has **equal** opposite angles and a cyclic quadrilateral has **supplementary** opposite angles, so each pair must be `90°` and the figure is a **rectangle**. Option D, a square, is the trap: a square is certainly cyclic, but nothing in the conditions forces the sides to be equal, so it is too strong an answer. A rhombus is cyclic only in the one case where it is a square.",
   tag:"Cyclic parallelogram"},

  {q:"Which of these quadrilaterals is **always** cyclic?",
   o:["A parallelogram","A rhombus","An isosceles trapezium","A kite"],
   a:2,
   why:"In an isosceles trapezium the two angles on each parallel side are equal, and the two angles on a slant side are co-interior and so supplementary — put together, each pair of **opposite** angles is supplementary, so it is **always cyclic**. A parallelogram is cyclic only when it is a rectangle and a rhombus only when it is a square, which is why options A and B fail. A kite is cyclic only when its two equal opposite angles are right angles.",
   tag:"Always cyclic"},

  {q:"A rhombus ABCD is inscribed in a circle. Then `∠A` is:",
   o:["90°","60°","45°","120°"],
   a:0,
   why:"A rhombus is a parallelogram, so ∠A = ∠C; being cyclic, **∠A + ∠C = 180°**. Therefore each is `90°` and the rhombus is a **square** — a rhombus is cyclic in no other case. Options B and D are the angles of an ordinary rhombus, which is exactly the figure that cannot be inscribed in a circle.",
   tag:"Cyclic rhombus"},

  {q:"**Ptolemy's theorem** for a cyclic quadrilateral ABCD states that:",
   o:["AB·BC + CD·DA = AC·BD","AB + CD = BC + AD","AB·AD + BC·CD = AC·BD","AB·CD + BC·AD = AC·BD"],
   a:3,
   why:"**Ptolemy's theorem**: `AC · BD = AB·CD + BC·AD` — the product of the diagonals equals the sum of the products of the two pairs of **opposite** sides. Option A pairs the sides meeting at B with those meeting at D, and option C the sides meeting at A with those meeting at C: both pair **adjacent** sides, which is the one slip the theorem invites. Option B is Pitot's result for a quadrilateral drawn **round** a circle, where the two pairs of opposite sides have equal sums, and it belongs to tangents, not to cyclic figures.",
   tag:"Ptolemy"},

  {q:"In the figure, ABCD is a cyclic quadrilateral whose diagonal AC is a diameter of length `25` cm, with AB = 7 cm, BC = 24 cm, AD = 15 cm and DC = 20 cm. The other diagonal BD is:",
   o:["25 cm","20 cm","24 cm","15 cm"],
   a:1,
   why:"**Ptolemy's theorem** gives AC · BD = AB·CD + BC·AD = 7(20) + 24(15) = 140 + 360 = 500, so BD = 500 ÷ 25 = `20` cm. Pairing the **adjacent** sides instead gives 7(24) + 15(20) = 468 and BD = 18.72 — a number no SSC paper would print, which is itself the signal that the sides were paired wrongly. Option A, `25` cm, assumes BD is also a diameter, and only one diagonal was said to be.",
   d:"c-ptolemy",
   tag:"Ptolemy"},

  {q:"ABC is an equilateral triangle inscribed in a circle and P is a point on the minor arc BC. Then PA is equal to:",
   o:["PB · PC","½(PB + PC)","PB + PC","√(PB² + PC²)"],
   a:2,
   why:"Apply **Ptolemy's theorem** to the cyclic quadrilateral ABPC: AP·BC = AB·PC + BP·AC. Every side of the triangle is the same length a, so AP·a = a·PC + BP·a and **PA = PB + PC**. Option B halves it, which is the answer to no question here, and option D is the Pythagoras form — there is no right angle at P, so it does not apply.",
   tag:"Ptolemy"},

  {q:"C and D lie on the same side of the segment AB, and `∠ACB = ∠ADB = 40°`. It follows that:",
   o:["A, B, C and D are concyclic","AB is a diameter","CD ∥ AB","△ACB ≅ △ADB"],
   a:0,
   why:"This is the **converse of the equal angles in the same segment**: if a segment AB subtends equal angles at two points on the **same** side of it, those two points and A and B lie on one circle. Option B would need the angles to be `90°`, which they are not. Option D is the trap for anyone reading equal angles as congruence: the two triangles share AB and have one pair of equal angles, which is one condition short of every congruence test — AC and AD need not be equal at all. Option C holds only when C and D happen to sit symmetrically about the perpendicular bisector of AB, so it does not follow either.",
   tag:"Concyclic test"},

  {q:"The minor arcs AB and CD of a circle are equal. P is a point on the major arc AB and Q a point on the major arc CD. Then `∠APB` is:",
   o:["twice `∠CQD`","half `∠CQD`","equal to `∠CQD`","supplementary to `∠CQD`"],
   a:2,
   why:"**Equal arcs subtend equal angles at the centre, and therefore equal angles at the circumference.** Arc AB = arc CD gives ∠AOB = ∠COD, and each inscribed angle is half its own central angle, so ∠APB = ∠CQD. Option A is the central angle ∠COD put in place of the inscribed one, and option D is the angle in the **minor** segment of CD, which is the supplement of ∠CQD rather than ∠CQD itself. Where P and Q sit on their major arcs makes no difference, because angles in the same segment are equal.",
   tag:"Equal arcs"},

  {q:"Three points A, B and C on a circle divide it into arcs AB, BC and CA in the ratio `3 : 4 : 5`. Then `∠ACB` is:",
   o:["90°","60°","75°","45°"],
   a:3,
   why:"**The central angle is proportional to its arc, and the angle at the circumference is half the angle at the centre.** The arcs take (3/12), (4/12) and (5/12) of `360°`, so they subtend `90°`, `120°` and `150°` at the centre. ∠ACB stands on arc AB, so ∠ACB = 90° ÷ 2 = `45°`. Option A is that central angle ∠AOB, left unhalved; option B, `60°`, is the angle standing on arc BC and option C, `75°`, the angle standing on arc CA — the arc has to be matched to the vertex it is seen from.",
   tag:"Arc ratio"},

  {q:"A chord subtends an angle of `110°` in the minor segment of a circle. The non-reflex angle the same chord subtends at the centre is:",
   o:["110°","140°","220°","70°"],
   a:1,
   why:"**The two segment angles are supplementary**, so the angle in the major segment is 180° − 110° = `70°`, and **the angle at the centre is twice the angle at the circumference**, giving 2 × 70° = `140°`. Option C, `220°`, is 2 × 110° — the **reflex** angle at the centre, which stands on the major arc and is the one this question excluded. Option D stops at the major-segment angle without doubling it.",
   tag:"Centre from segment"}
 ],
  note:"Every question above tests one line of the sheet at the top of this topic."}
]
},

/* ============================================================ 11 — Two circles: touching, cutting and common tangents (22 questions) */
{
id:"geo-circle-two", n:"Two circles: touching, cutting and common tangents", hy:1,
w:"The five positions of two circles read off the distance between their centres, the number of common tangents in each, the two tangent-length formulas, the common chord, and the circles that sit inside a square or an equilateral triangle.",
quick:[
 "Everything here is decided by **d**, the distance between the centres, against `r₁ + r₂` and `r₁ − r₂`: apart `d > r₁ + r₂`, touching externally `d = r₁ + r₂`, cutting `|r₁ − r₂| < d < r₁ + r₂`, touching internally `d = r₁ − r₂`, one inside the other `d < r₁ − r₂`.",
 "**The number of common tangents in those five cases is 4, 3, 2, 1, 0** — in that order. Asked straight, almost every year.",
 "**Direct common tangent = √(d² − (r₁ − r₂)²)**; **transverse common tangent = √(d² − (r₁ + r₂)²)**. The *difference* of the radii for the direct one, the *sum* for the transverse one — and the transverse is always the shorter.",
 "The transverse common tangent exists only while the circles do not overlap, that is while `d ≥ r₁ + r₂`. For circles that cut each other the formula gives the square root of a negative number, which is the algebra saying there is no such tangent.",
 "Two circles touching externally: the **direct common tangent between the two points of contact is 2√(r₁r₂)**, and the tangent drawn at the point of contact bisects it, so each half is `√(r₁r₂)`.",
 "Two circles cutting: **the line of centres is the perpendicular bisector of the common chord.** The distance from O₁ to that chord is `(d² + r₁² − r₂²)/(2d)`, and the chord is twice `√(r₁² − x²)` with x that distance. For two equal circles of radius r the chord is **2√(r² − d²/4)**.",
 "The standard enclosures: a circle inscribed in a square of side a has **r = a/2** and one circumscribing it has **R = a/√2**; for an equilateral triangle of side a, **R = a/√3** and **r = a/(2√3)**, so `R = 2r`."
],
blocks:[
 {h:"THE SHEET — the five positions, the tangents, the chord and the enclosures",
  cols:["Asked as","The result","What the question does with it"],
  rows:[
  ["**Apart, one outside the other**","d > r₁ + r₂","**4** common tangents — two direct and two transverse"],
  ["**Touching externally**","d = r₁ + r₂","**3** common tangents — two direct, and the tangent at the point of contact"],
  ["**Cutting at two points**","|r₁ − r₂| < d < r₁ + r₂","**2** common tangents, both direct; this is the only case with a common chord"],
  ["**Touching internally**","d = r₁ − r₂","**1** common tangent, drawn at the point of contact"],
  ["**One wholly inside the other**","d < r₁ − r₂, and d = 0 for concentric circles","**0** common tangents"],
  ["**Direct common tangent**","√(d² − (r₁ − r₂)²)","The *difference* of the radii. It exists in the first three cases above"],
  ["**Transverse common tangent**","√(d² − (r₁ + r₂)²)","The *sum* of the radii. Only while d ≥ r₁ + r₂, and always shorter than the direct tangent"],
  ["**Direct common tangent of two circles touching externally**","2√(r₁r₂)","Row 6 with d = r₁ + r₂: √((r₁ + r₂)² − (r₁ − r₂)²) = √(4r₁r₂)"],
  ["**The tangent at the point of contact**","Bisects the direct common tangent; each half is √(r₁r₂)","The two tangents from the crossing point are equal, which is why it is a bisector"],
  ["**The common chord**","The line of centres is its perpendicular bisector","So O₁O₂ cuts the chord in half and at right angles — and the two circles are symmetrical about O₁O₂"],
  ["**Distance x from O₁ to the common chord**","x = (d² + r₁² − r₂²)/(2d)","Then the chord is 2√(r₁² − x²). Measured from O₂ the distance is d − x"],
  ["**Common chord of two equal circles**","2√(r² − d²/4)","Each circle through the other's centre gives d = r and a chord of r√3"],
  ["**Three circles touching one another externally**","The triangle of centres has sides r₁ + r₂, r₂ + r₃, r₃ + r₁","Three *equal* circles give an equilateral triangle of side 2r"],
  ["**Circle inscribed in a square of side a**","r = a/2","The diameter is the side of the square"],
  ["**Circle circumscribing a square of side a**","R = a/√2, diameter a√2","The diagonal of the square is the diameter"],
  ["**Circle circumscribing an equilateral triangle of side a**","R = a/√3","Backwards, a = R√3 — the form the question usually needs"],
  ["**Circle inscribed in an equilateral triangle of side a**","r = a/(2√3)","Half the circumradius, so R = 2r"],
  ["**Touching internally, the smaller through the centre of the larger**","R = 2r","Because d = R − r and that distance is itself r"]
 ],
  note:"Every question below is answered by one line of this sheet. Two lines carry most of the marks: the tangent counts 4, 3, 2, 1, 0, and the difference-against-sum in the two tangent-length formulas."},

 {h:"THE FIVE POSITIONS AND THE TANGENT COUNT", dia:"c-tangents-count",
  cap:"Apart, touching externally, cutting, touching internally: 4, 3, 2, 1. One circle wholly inside the other, the fifth case, has none."},

 {h:"TOUCHING EXTERNALLY", dia:"c-ext-touch",
  cap:"d = r₁ + r₂, so the point of contact lies on the line of centres. The direct common tangent between the two points of contact is 2√(r₁r₂)."},

 {h:"THREE EQUAL CIRCLES, EACH TOUCHING THE OTHER TWO", dia:"c-three-touch",
  cap:"Every pair touches externally, so every side of the triangle of centres is r + r = 2r, and the triangle is equilateral."},

 {h:"AN EQUILATERAL TRIANGLE IN A CIRCLE", dia:"c-equi-in-circle",
  cap:"R = a/√3 for the circle through the vertices and r = a/(2√3) for the circle touching the sides, so R = 2r."},

 {careful:"**The direct common tangent takes the difference of the radii, √(d² − (r₁ − r₂)²); the transverse takes the sum, √(d² − (r₁ + r₂)²).** Swapping them is the single commonest error in this topic, and both wrong values are always on the option list. A check that costs nothing: the transverse tangent must come out *smaller*, because it is subtracting more."},

 {careful:"**Touching internally means d = r₁ − r₂, not r₁ + r₂**, and it gives **one** common tangent, not two. Radii `10 cm` and `4 cm` with centres `6 cm` apart touch internally; the same radii with centres `14 cm` apart touch externally. And if the centres are closer than `6 cm` the small circle is wholly inside, with no common tangent at all."},

 {careful:"For a square of side a the circle **inscribed** in it has `r = a/2` while the circle **round** it has `R = a/√2` — the second is the half-diagonal, not the half-side. The same pair of answers sits behind the equilateral triangle: `a/√3` for the circle through the vertices against `a/(2√3)` for the circle touching the sides."},

 {h:"QUESTIONS — positions, tangents, chords and enclosures",
  mcq:[
  {q:"Two circles touch each other externally. The number of common tangents that can be drawn to them is:",
   o:["1","2","3","4"],
   a:2,
   why:"**Apart, touching externally, cutting, touching internally and one inside the other give 4, 3, 2, 1 and 0 common tangents.** Touching externally is the second case, so the answer is `3`: the two direct tangents, plus the tangent drawn at the point of contact. Option D, `4`, is the count for circles lying wholly apart and is the one most often ticked, because the two transverse tangents of that case have collapsed into one here.",
   tag:"Tangent count"},

  {q:"Two circles of radii `5 cm` and `3 cm` have their centres `8 cm` apart. The circles:",
   o:["cut each other at two points","touch each other externally","touch each other internally","lie wholly apart"],
   a:1,
   why:"**Two circles touch externally exactly when d = r₁ + r₂.** Here `5 + 3 = 8`, which is d, so they touch externally. Option A would need `|r₁ − r₂| < d < r₁ + r₂`, that is `2 < d < 8`, and option C would need `d = r₁ − r₂ = 2 cm` — option A is the trap, because d falls on the boundary of that range rather than inside it.",
   tag:"Position by d"},

  {q:"Two circles of radii r₁ and r₂ have their centres d apart. The length of a direct common tangent is:",
   o:["√(d² − (r₁ + r₂)²)","√(d² + (r₁ − r₂)²)","2√(r₁r₂)","√(d² − (r₁ − r₂)²)"],
   a:3,
   why:"**Direct common tangent = √(d² − (r₁ − r₂)²)** — the *difference* of the radii is subtracted. Option A is the transverse common tangent, which uses the sum, and it is the standard confusion here. Option C is only the special case of two circles touching externally, and option B adds where the formula subtracts.",
   tag:"Direct tangent"},

  {q:"In the figure, two circles of radii `8 cm` and `3 cm` have their centres `13 cm` apart. The length of a direct common tangent is:",
   o:["4√3 cm","12 cm","5 cm","8 cm"],
   a:1,
   why:"**Direct common tangent = √(d² − (r₁ − r₂)²)** = √(13² − 5²) = √(169 − 25) = √144 = `12 cm`. Option A is the transverse tangent of the same pair, √(169 − 121) = `4√3 cm`, and option C is `r₁ − r₂`, the quantity that belongs inside the root. Option D is `13 − 5`, which is subtracting the lengths instead of using Pythagoras.",
   tag:"Direct tangent",
   d:"c-dct"},

  {q:"For two circles of radii r₁ and r₂ with centres d apart, the length of a transverse common tangent is:",
   o:["√(d² − (r₁ + r₂)²)","√(d² − (r₁ − r₂)²)","√((r₁ + r₂)² − d²)","2√(r₁r₂)"],
   a:0,
   why:"**Transverse common tangent = √(d² − (r₁ + r₂)²)** — the *sum* of the radii is subtracted, because a transverse tangent crosses the line of centres between the circles. Option B is the direct common tangent and is the commonest wrong tick. Option C has the subtraction the wrong way round, which would make the tangent real only when the circles overlap — the exact opposite of the truth.",
   tag:"Transverse tangent"},

  {q:"In the figure, two circles of radii `5 cm` and `3 cm` have their centres `17 cm` apart. The length of a transverse common tangent is:",
   o:["17 cm","9 cm","15 cm","8 cm"],
   a:2,
   why:"**Transverse common tangent = √(d² − (r₁ + r₂)²)** = √(17² − 8²) = √(289 − 64) = √225 = `15 cm`. Option B is `17 − 8`, the lengths subtracted directly instead of through Pythagoras, and option D is `r₁ + r₂` itself. Using the difference of the radii by mistake would give the direct common tangent, √(289 − 4), which is longer — the transverse one is always the shorter of the two.",
   tag:"Transverse tangent",
   d:"c-tct"},

  {q:"Two circles of radii `25 cm` and `4 cm` touch each other externally. The length of their direct common tangent is:",
   o:["20 cm","10 cm","29 cm","21 cm"],
   a:0,
   why:"**For two circles touching externally the direct common tangent is 2√(r₁r₂)** = 2√(25 × 4) = 2 × 10 = `20 cm`. It comes straight from √(d² − (r₁ − r₂)²) with `d = 29`: √(841 − 441) = √400 = 20. Option B, `10 cm`, is `√(r₁r₂)` — half the tangent, and the commonest slip here; option C is the distance between the centres and option D the difference of the radii.",
   tag:"2√(r₁r₂)"},

  {q:"Two circles of radii r₁ and r₂ touch externally. The tangent drawn at the point of contact cuts a direct common tangent into two parts, each of length:",
   o:["2√(r₁r₂)","(r₁ + r₂)/2","√(r₁r₂)","√(r₁ + r₂)"],
   a:2,
   why:"**The whole direct common tangent is 2√(r₁r₂), and the tangent at the point of contact bisects it**, so each part is `√(r₁r₂)`. The bisection follows from equal tangents: from the crossing point, the tangent to the first circle and the tangent to the point of contact are equal, and so are the pair on the other side. Option A is the whole tangent rather than half of it, which is the trap.",
   tag:"2√(r₁r₂)"},

  {q:"In the figure, two circles of radii `13 cm` and `15 cm` cut each other at A and B, and their centres are `14 cm` apart. The length of the common chord AB is:",
   o:["12 cm","24 cm","26 cm","14 cm"],
   a:1,
   why:"**The line of centres is the perpendicular bisector of the common chord, and the distance from O₁ to the chord is x = (d² + r₁² − r₂²)/(2d)**, so x = (196 + 169 − 225)/28 = 140/28 = `5 cm`. Then half the chord is √(13² − 5²) = 12, and **AB = 2√(r₁² − x²)** = `24 cm`. Option A is that half-chord, left undoubled — the standard mistake — and option C is the first circle's diameter.",
   tag:"Common chord",
   d:"c-intersect"},

  {q:"Two circles of radius `8 cm` each pass through the centre of the other. The length of their common chord is:",
   o:["8√3 cm","4√3 cm","8√2 cm","16 cm"],
   a:0,
   why:"If each circle passes through the other's centre then `d = r = 8 cm`, and for two equal circles **the common chord is 2√(r² − d²/4)** = 2√(64 − 16) = 2√48 = `8√3 cm`. Option B is half of that, the distance from the chord to a centre being `4 cm`; option D is the diameter, which is the longest chord of one circle but not the common chord.",
   tag:"Equal circles"},

  {q:"The line joining the centres of two intersecting circles is:",
   o:["parallel to the common chord","equal in length to the common chord","the perpendicular bisector of the common chord","a tangent to both circles"],
   a:2,
   why:"**The line of centres is the perpendicular bisector of the common chord.** Both centres are equidistant from the two points of intersection, and the locus of such points is the perpendicular bisector of the segment joining them. Option A is the tempting one because the figure is symmetrical, but the line of centres in fact crosses the chord at right angles, never runs alongside it.",
   tag:"Common chord"},

  {q:"Three circles of radius `5 cm` each touch the other two. The triangle formed by joining their centres is:",
   o:["equilateral, of side 5 cm","right-angled, with two legs of 10 cm","isosceles, with base 10 cm","equilateral, of side 10 cm"],
   a:3,
   why:"**Two circles touching externally have d = r₁ + r₂**, so each side of the triangle of centres is `5 + 5 = 10 cm` and the triangle is **equilateral of side 2r = 10 cm**. Option A is the radius mistaken for the side — the commonest tick — because the picture makes each centre look one radius from its neighbour rather than two.",
   tag:"Three circles"},

  {q:"Three circles of radii `2 cm`, `3 cm` and `4 cm` touch one another externally. The perimeter of the triangle formed by joining their centres is:",
   o:["9 cm","18 cm","27 cm","12 cm"],
   a:1,
   why:"**The triangle of centres has sides r₁ + r₂, r₂ + r₃ and r₃ + r₁**, here `5 cm`, `7 cm` and `6 cm`, so the perimeter is `18 cm` — which is simply 2(r₁ + r₂ + r₃). Option A is `r₁ + r₂ + r₃` itself, the perimeter halved, and it is the trap for anyone who adds the radii once instead of twice.",
   tag:"Three circles"},

  {q:"A circle is inscribed in a square of side `14 cm`. Its radius is:",
   o:["7 cm","7√2 cm","14 cm","14√2 cm"],
   a:0,
   why:"**A circle inscribed in a square of side a has r = a/2**, because the diameter stretches straight across from one side to the opposite side. So r = 14/2 = `7 cm`. Option B is `a/√2 = 7√2 cm`, the radius of the circle that passes through the four *vertices* — the half-diagonal rather than the half-side, and the standard confusion between the two circles of a square.",
   tag:"Circle in a square"},

  {q:"A circle passes through all four vertices of a square of side `8 cm`. The radius of the circle is:",
   o:["8√2 cm","4√2 cm","4 cm","8 cm"],
   a:1,
   why:"**The diagonal of the square is the diameter, so d = a√2 and R = a/√2.** Here the diagonal is `8√2 cm` and the radius is half of it, `4√2 cm`. Option A is that diagonal left unhalved, the commonest slip, and option C is `a/2`, the radius of the circle inscribed *in* the square instead of drawn round it.",
   tag:"Circle round a square"},

  {q:"An equilateral triangle is inscribed in a circle of radius `6 cm`. The side of the triangle is:",
   o:["6√2 cm","3√3 cm","12 cm","6√3 cm"],
   a:3,
   why:"**For an equilateral triangle of side a the circumradius is R = a/√3**, so a = R√3 = 6√3 = `6√3 cm`. Option C, `12 cm`, is the diameter — a chord of the circle, but not a side of the triangle; option A, `6√2 cm`, is the side of the inscribed *square*. Running the formula backwards is what this question tests.",
   tag:"R = a/√3"},

  {q:"A circle is inscribed in an equilateral triangle of side `12 cm`. The radius of the circle is:",
   o:["4√3 cm","2√3 cm","6√3 cm","√3 cm"],
   a:1,
   why:"**The inradius of an equilateral triangle of side a is r = a/(2√3)** = 12/(2√3) = 6/√3 = `2√3 cm`. Option A is `a/√3 = 4√3 cm`, the **circumradius** — twice the right answer, since R = 2r, and it is the option that catches anyone who recalls only one of the two formulas.",
   tag:"r = a/(2√3)"},

  {q:"Two circles touch internally and the smaller passes through the centre of the larger. The ratio of the radius of the smaller to the radius of the larger is:",
   o:["1 : 2","1 : 4","2 : 3","1 : 3"],
   a:0,
   why:"**Touching internally means d = R − r.** If the smaller circle passes through the larger circle's centre, then that centre lies on the smaller circle, so d = r as well; hence `R − r = r` and **R = 2r**, a ratio of `1 : 2`. Option B, `1 : 4`, is the ratio of the *areas* that follows from it, and is the trap for reading the question too quickly.",
   tag:"Internal touch"},

  {q:"Two circles of radii `10 cm` and `4 cm` have their centres `5 cm` apart. The number of common tangents is:",
   o:["1","2","4","0"],
   a:3,
   why:"**One circle lies wholly inside the other when d < r₁ − r₂, and then there is no common tangent at all.** Here `r₁ − r₂ = 6 cm` and d is only `5 cm`, so the small circle is inside the large one and the answer is `0`. Option A is the count for circles that *touch* internally, which would need d to be exactly `6 cm` — that one-centimetre difference is the whole question.",
   tag:"Tangent count"},

  {q:"Two circles of radii `7 cm` and `4 cm` cut each other at two points. The distance d between their centres satisfies:",
   o:["0 < d < 11","4 < d < 7","3 < d < 11","3 ≤ d ≤ 11"],
   a:2,
   why:"**Two circles cut at two points exactly when |r₁ − r₂| < d < r₁ + r₂**, here `3 < d < 11`. Option D is the same range with the ends included, and that is the trap: at `d = 3` the circles touch internally and at `d = 11` they touch externally, so each end gives one point of contact, not two. Option A forgets the lower limit, below which the small circle is inside the large one.",
   tag:"Cutting range"},

  {q:"Two circles that lie wholly apart, touch externally, cut at two points, and touch internally have, in that order, numbers of common tangents:",
   o:["2, 3, 4, 1","1, 2, 3, 4","3, 4, 2, 1","4, 3, 2, 1"],
   a:3,
   why:"**The counts run 4, 3, 2, 1, 0** as the circles move together: apart `4`, touching externally `3`, cutting `2`, touching internally `1`, one inside the other `0`. Option B is that sequence reversed, which is the tempting answer because the circles are listed in the order of *decreasing* distance while the tangents decrease with them, not against them.",
   tag:"Tangent count"},

  {q:"A transverse common tangent can be drawn to two circles only when:",
   o:["the circles cut each other at two points","the circles do not overlap, that is d ≥ r₁ + r₂","d ≥ r₁ − r₂","one circle lies inside the other"],
   a:1,
   why:"**The transverse common tangent is √(d² − (r₁ + r₂)²)**, which is a real length only while `d ≥ r₁ + r₂` — so the circles must not overlap. Option A is the trap: two circles that cut each other still have two common tangents, but both are *direct*, and the transverse formula there would ask for the square root of a negative number. At `d = r₁ + r₂` the two transverse tangents have merged into the single tangent at the point of contact.",
   tag:"Transverse tangent"}
 ],
  note:"If a question here took more than about half a minute, the line to go back to is the one comparing d with r₁ + r₂ and r₁ − r₂. Every result in this topic is read off that comparison."}
]
},

/* ============================================================ 12 — Coordinate geometry and the graph of a line (22 questions) */
{
id:"geo-coord", n:"Coordinate geometry and the graph of a line", hy:1,
w:"Distance, midpoint, section, centroid and area from the coordinates alone, then slope and every form of a straight line — including the two distance formulas that are always confused.",
quick:[
 "**Distance = √((x₂ − x₁)² + (y₂ − y₁)²)**, and from the origin **√(x² + y²)**. Subtract first, square second, root last — never root the differences separately.",
 "**Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2)**; for the internal ratio `m : n`, **((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n))** — `m` always multiplies the *far* point.",
 "**Centroid = ((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3)**. Divide by `3`, not by `2`.",
 "**Area of a triangle = ½|x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|**, and the three points are **collinear exactly when that comes out zero**.",
 "**Slope m = (y₂ − y₁)/(x₂ − x₁)**. Parallel lines have **m₁ = m₂**; perpendicular lines have **m₁m₂ = −1**, so the slope flips over as well as changing sign.",
 "From **ax + by + c = 0** the slope is **−a/b**, the x-intercept is **−c/a** and the y-intercept is **−c/b**. The intercept form is **x/a + y/b = 1**.",
 "**Distance of (x₁, y₁) from ax + by + c = 0 is |ax₁ + by₁ + c|/√(a² + b²)**, and between two parallel lines **|c₁ − c₂|/√(a² + b²)**. The denominator is the square *root*."
],
blocks:[
 {h:"THE SHEET — every formula the topic tests",
  cols:["Asked as","The formula","The form the question uses"],
  rows:[
  ["**Distance between two points**","√((x₂ − x₁)² + (y₂ − y₁)²)","From the origin it is √(x² + y²). Recognise 3-4-5, 5-12-13 and their multiples in the differences"],
  ["**Midpoint**","((x₁ + x₂)/2, (y₁ + y₂)/2)","Given one end and the midpoint, the other end is x₂ = 2x − x₁ and y₂ = 2y − y₁"],
  ["**Section formula, internal m : n**","((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n))","External division: both plus signs become minus and m + n becomes m − n"],
  ["**Ratio in which an axis cuts a segment**","The x-axis cuts it in −y₁ : y₂; the y-axis in −x₁ : x₂","Put the axis's own equation, y = 0 or x = 0, into the section formula"],
  ["**Centroid of a triangle**","((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3)","Given two vertices and the centroid, the third vertex is x₃ = 3x − x₁ − x₂"],
  ["**Area of a triangle**","½|x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|","The modulus is there because area is never negative; the ½ is the step most often dropped"],
  ["**Three points collinear**","x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂) = 0","The same expression set to zero — or, equally, two of the three slopes equal"],
  ["**Slope from two points**","m = (y₂ − y₁)/(x₂ − x₁)","Subtract in the *same* order top and bottom, or the sign comes out reversed"],
  ["**Parallel and perpendicular**","m₁ = m₂, and m₁m₂ = −1","Perpendicular means the negative *reciprocal*: a slope of 2 pairs with −½, not with −2"],
  ["**Horizontal and vertical lines**","y = k has slope 0; x = k has slope undefined","A line parallel to the x-axis has slope 0; one parallel to the y-axis has none at all"],
  ["**The forms of a line**","y = mx + c; y − y₁ = m(x − x₁); (y − y₁)/(x − x₁) = (y₂ − y₁)/(x₂ − x₁)","Slope-intercept, point-slope, two-point — all three come out to the same line"],
  ["**Intercept form**","x/a + y/b = 1","`a` is the x-intercept and `b` the y-intercept, each with its own sign"],
  ["**Reading ax + by + c = 0**","slope −a/b, x-intercept −c/a, y-intercept −c/b","Move everything to the left of the equals sign *before* reading c, or every sign is wrong"],
  ["**Distance of a point from a line**","|ax₁ + by₁ + c|/√(a² + b²)","Put the point into the left side, take the modulus, divide by the root of a² + b²"],
  ["**Distance between two parallel lines**","|c₁ − c₂|/√(a² + b²)","Make the x and y coefficients identical in both lines first, otherwise c₁ − c₂ means nothing"],
  ["**Triangle a line makes with the axes**","½|ab| for x/a + y/b = 1","Find the two intercepts, then half their product — the coefficients are not the intercepts"],
  ["**Reflections**","x-axis (x, −y); y-axis (−x, y); origin (−x, −y); the line y = x (y, x)","Reflecting in the x-axis changes the sign of y — the coordinate that is *not* named"],
  ["**The quadrants**","I (+, +), II (−, +), III (−, −), IV (+, −)","Anticlockwise from the top right. On an axis a point is in no quadrant"]
 ]},

 {careful:"**Perpendicular means m₁m₂ = −1, which is the negative reciprocal.** A line of slope `2` is perpendicular to one of slope `−½`, not to one of slope `−2`. Half the perpendicular questions in the paper offer the plain negative as an option, and it is the commonest wrong tick in the whole topic."},

 {careful:"Before reading anything off **ax + by + c = 0**, put the line into exactly that form with everything on the left. For `3x − 4y = 12` the constant is `c = −12`, so the x-intercept is −c/a = `4` and the y-intercept is −c/b = `−3`. Reading `c = 12` straight off the right-hand side reverses both signs."},

 {careful:"The two line-distance formulas share a denominator of **√(a² + b²)** — the square *root* of the sum of the squares of the coefficients, never `a² + b²` itself and never `a + b`. And the distance between two parallel lines only means something once both lines carry the *same* x and y coefficients: `3x + 4y = 9` and `6x + 8y = 8` must first be rewritten as `3x + 4y = 4`."},

 {h:"QUESTIONS — points, ratios and areas",
  mcq:[
  {q:"The distance between the points `(x₁, y₁)` and `(x₂, y₂)` is:",
   o:["(x₂ − x₁)² + (y₂ − y₁)²","√((x₂ + x₁)² + (y₂ + y₁)²)","|x₂ − x₁| + |y₂ − y₁|","√((x₂ − x₁)² + (y₂ − y₁)²)"],
   a:3,
   why:"**Distance = √((x₂ − x₁)² + (y₂ − y₁)²)** — the differences are squared, added, and only then rooted. Option A is the square left un-rooted, which is the slip that turns an answer of `10` into `100`. Option B adds the coordinates instead of subtracting them, and option C walks along the two axes separately, which is the longer way round the right-angled triangle, not the hypotenuse.",
   tag:"Distance"},

  {q:"The distance between `(−2, 3)` and `(4, 11)` is:",
   o:["14","10","100","√28"],
   a:1,
   why:"**Distance = √((x₂ − x₁)² + (y₂ − y₁)²)** = √((4 + 2)² + (11 − 3)²) = √(36 + 64) = √100 = `10`. The differences `6` and `8` are the 3-4-5 triple doubled, and that recognition is what the question is really testing. Option C is the square left un-rooted; option A, `14`, simply adds the two differences — the hypotenuse is never the sum of the legs.",
   tag:"Distance"},

  {q:"If `(3, 4)` is the midpoint of the segment joining `(1, 2)` and `(a, b)`, then `(a, b)` is:",
   o:["(2, 2)","(4, 6)","(5, 6)","(7, 10)"],
   a:2,
   why:"**Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2)**, so (1 + a)/2 = 3 gives a = 2(3) − 1 = `5`, and (2 + b)/2 = 4 gives b = 2(4) − 2 = `6`. Option D doubles the midpoint to `(6, 8)` and then forgets to subtract the known end — the standard slip here. Option B is the two points' coordinates simply added, and option A is the step from `(1, 2)` to `(3, 4)`, which is only half the way across.",
   tag:"Midpoint"},

  {q:"The point dividing the join of `(x₁, y₁)` and `(x₂, y₂)` internally in the ratio `m : n` is:",
   o:["((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n))","((mx₁ + nx₂)/(m + n), (my₁ + ny₂)/(m + n))","((mx₂ − nx₁)/(m − n), (my₂ − ny₁)/(m − n))","((x₁ + x₂)/(m + n), (y₁ + y₂)/(m + n))"],
   a:0,
   why:"**The section formula for internal division is ((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n))** — `m` is the part next to the first point, so it multiplies the *far* coordinates x₂ and y₂. Option B has the subscripts crossed, which is the single commonest error in this formula, and it quietly answers the question for the ratio `n : m` instead. Option C is the **external division** formula, where both signs turn to minus and the denominator becomes m − n.",
   tag:"Section formula"},

  {q:"The point dividing the join of `(1, −3)` and `(4, 6)` internally in the ratio `2 : 1` is:",
   o:["(2, 0)","(3, 3)","(7, 15)","(9, 9)"],
   a:1,
   why:"By **the section formula ((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n))**, x = (2 × 4 + 1 × 1)/3 = 3 and y = (2 × 6 + 1 × (−3))/3 = 9/3 = 3, giving `(3, 3)`. Option A, `(2, 0)`, is the answer for the reversed ratio `1 : 2` — the one trap worth guarding against, because it looks just as plausible. Option D leaves the numerators undivided and option C is the **external** division in `2 : 1`, which uses m − n = 1 as the denominator.",
   tag:"Section formula"},

  {q:"The x-axis divides the join of `(2, −3)` and `(5, 6)` in the ratio:",
   o:["1 : 2","2 : 1","2 : 3","3 : 2"],
   a:0,
   why:"On the x-axis `y = 0`, so **the section formula's y-coordinate (my₂ + ny₁)/(m + n) = 0** gives 6m − 3n = 0 and m : n = `1 : 2`. The short form worth remembering is that **the x-axis cuts a segment in the ratio −y₁ : y₂**, here 3 : 6 = 1 : 2. Option B is the same ratio read backwards, which is what using y₂ : y₁ without the sign gives; option D would be the answer if the x-coordinates had been used, and the x-axis has nothing to do with them.",
   tag:"Axis ratio"},

  {q:"The centroid of the triangle with vertices `(−1, 3)`, `(4, −2)` and `(3, 5)` is:",
   o:["(6, 6)","(2, 2)","(2, 6)","(3, 3)"],
   a:1,
   why:"**Centroid = ((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3)** = ((−1 + 4 + 3)/3, (3 − 2 + 5)/3) = (6/3, 6/3) = `(2, 2)`. Option D is the same sums divided by `2` instead of `3` — the midpoint habit carried over to three points, and the trap set here. Option A leaves both sums undivided, and option C divides the x's but not the y's.",
   tag:"Centroid"},

  {q:"Two vertices of a triangle are `(1, 2)` and `(3, 6)`, and its centroid is the origin. The third vertex is:",
   o:["(4, 8)","(2, 4)","(−2, −4)","(−4, −8)"],
   a:3,
   why:"**Centroid = ((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3)**, so (1 + 3 + x₃)/3 = 0 gives x₃ = `−4` and (2 + 6 + y₃)/3 = 0 gives y₃ = `−8`. Option A is the sum of the two known vertices with the minus sign lost, which is the usual slip when the centroid is the origin. Option B is the midpoint of the two known vertices, and option C is that midpoint negated — the centroid is not the midpoint of anything.",
   tag:"Centroid"},

  {q:"The area of the triangle with vertices `(1, 1)`, `(4, 5)` and `(−2, 3)` is:",
   o:["4½ square units","12 square units","9 square units","18 square units"],
   a:2,
   why:"**Area = ½|x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|** = ½|1(5 − 3) + 4(3 − 1) + (−2)(1 − 5)| = ½|2 + 8 + 8| = ½(18) = `9`. Option D is the bracket left un-halved, and it is the answer most often ticked. Option A halves it twice. The modulus matters: taking the vertices in the other order gives −18 inside, and area is never negative.",
   tag:"Area"},

  {q:"The points `(2, 1)`, `(5, 7)` and `(k, 11)` are collinear when `k` is:",
   o:["6","7","8","9"],
   a:1,
   why:"**Three points are collinear exactly when the area of the triangle they form is zero**, that is x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂) = 0. Here 2(7 − 11) + 5(11 − 1) + k(1 − 7) = −8 + 50 − 6k = 0, so k = `7`. Equal slopes give the same answer: (7 − 1)/(5 − 2) = 2 must equal (11 − 7)/(k − 5). Option C, `8`, continues the pattern 2, 5, 8 in the x-coordinates and ignores the y-coordinates completely, which is what makes it the tempting one.",
   tag:"Collinearity"}
 ]},

 {h:"QUESTIONS — slope and the equation of a line",
  mcq:[
  {q:"The slope of the line through `(4, 1)` and `(−2, 10)` is:",
   o:["−3/2","3/2","−2/3","2/3"],
   a:0,
   why:"**Slope m = (y₂ − y₁)/(x₂ − x₁)** = (10 − 1)/(−2 − 4) = 9/(−6) = `−3/2`. Option B is what subtracting in opposite orders top and bottom gives — 9/6 — and losing the minus sign is the commonest slip in the whole formula. Option C is the reciprocal, (x₂ − x₁)/(y₂ − y₁), which measures the run over the rise instead of the rise over the run.",
   tag:"Slope"},

  {q:"A line perpendicular to the line joining `(1, 2)` and `(5, 10)` has slope:",
   o:["2","−2","−½","½"],
   a:2,
   why:"The given line has slope (10 − 2)/(5 − 1) = `2`, and **perpendicular lines satisfy m₁m₂ = −1**, so the other slope is −1/2 = `−½`. Option B is the negative of the slope with the reciprocal forgotten — the trap the examiner is counting on, because −2 looks like the obvious opposite. Option A is the slope of a **parallel** line, where instead m₁ = m₂.",
   tag:"Perpendicular"},

  {q:"The lines `2x + 3y = 7` and `kx − 6y + 5 = 0` are perpendicular when `k` is:",
   o:["−9","4","−4","9"],
   a:3,
   why:"From **ax + by + c = 0 the slope is −a/b**, so the slopes are −2/3 and −k/(−6) = k/6. **Perpendicular means m₁m₂ = −1**: (−2/3)(k/6) = −1 gives −k/9 = −1 and k = `9`. Option C, `−4`, is the value that makes the lines **parallel** (−2/3 = k/6), and mixing the two conditions is exactly how this question is lost. Option A is the right size with the sign reversed.",
   tag:"Perpendicular"},

  {q:"The slope of a line parallel to the y-axis is:",
   o:["0","1","undefined","−1"],
   a:2,
   why:"A line parallel to the y-axis is `x = k`, so every point on it has the same x and **m = (y₂ − y₁)/(x₂ − x₁)** has zero in its denominator — the slope is **undefined**, not zero. Option A is the answer for a line parallel to the **x-axis**, which is `y = k` and has slope `0`, and swapping these two is the whole point of the question.",
   tag:"Vertical line"},

  {q:"The equation of the line making an intercept `a` on the x-axis and `b` on the y-axis is:",
   o:["x/a + y/b = 1","x/b + y/a = 1","ax + by = 1","x/a − y/b = 1"],
   a:0,
   why:"**The intercept form is x/a + y/b = 1**, with `a` the x-intercept and `b` the y-intercept. Putting y = 0 returns x = a, which is the check that settles it in one line. Option B has the two intercepts swapped and is the usual mis-tick; option C is what happens when the intercepts are read as coefficients instead of denominators, and it actually has intercepts `1/a` and `1/b`.",
   tag:"Intercept form"},

  {q:"The x-intercept of the line `3x − 4y = 12` is:",
   o:["−3","3","−4","4"],
   a:3,
   why:"Putting `y = 0` gives 3x = 12, so the x-intercept is `4`. By formula, write the line as 3x − 4y − 12 = 0; then **the intercepts of ax + by + c = 0 are −c/a and −c/b**, giving −(−12)/3 = `4` and −(−12)/(−4) = `−3`. Option A is that y-intercept, offered to anyone who reads the wrong one, and option C comes from taking `c = 12` straight off the right-hand side without moving it across.",
   tag:"Intercepts"},

  {q:"The equation of the line of slope `−2` passing through `(3, 1)` is:",
   o:["2x − y = 5","2x + y = 7","x + 2y = 5","2x + y = 5"],
   a:1,
   why:"**Point-slope form: y − y₁ = m(x − x₁)**, so y − 1 = −2(x − 3) = −2x + 6, giving **2x + y = 7**. In slope-intercept form that is y = −2x + 7. Every wrong option here passes through `(3, 1)` or has the right-looking numbers, so checking the slope is the only way through: option A has slope `+2`, option C has slope `−½` — the reciprocal slip — and option D comes from writing y + 1 = −2(x − 3) with the point's sign reversed.",
   tag:"Point-slope"},

  {q:"The distance of the point `(2, 3)` from the line `3x + 4y − 5 = 0` is:",
   o:["13","13/25","13/5","5/13"],
   a:2,
   why:"**Distance = |ax₁ + by₁ + c|/√(a² + b²)** = |3(2) + 4(3) − 5|/√(3² + 4²) = 13/5. Option B divides by `a² + b² = 25` instead of its square root — the one mistake this formula invites — and option A skips the denominator altogether. Option D inverts the fraction, which is worth checking against sense: the point is more than two units off the line, so the answer cannot be less than one.",
   tag:"Point to line"},

  {q:"The distance between the parallel lines `3x + 4y = 9` and `3x + 4y = 4` is:",
   o:["1","5","5/7","1/5"],
   a:0,
   why:"**For ax + by + c₁ = 0 and ax + by + c₂ = 0 the distance is |c₁ − c₂|/√(a² + b²)** = |9 − 4|/√(3² + 4²) = 5/5 = `1`. The coefficients of x and y are already identical in both lines, which is the condition that has to hold before the formula may be used at all. Option B is the numerator alone; option C divides by a + b = 7 and option D by a² + b² = 25, and both of those are the same denominator error.",
   tag:"Parallel lines"},

  {q:"The line `2x + 3y = 12` meets the axes at A and B. The area of △AOB, where O is the origin, is:",
   o:["24 square units","3 square units","6 square units","12 square units"],
   a:3,
   why:"The intercepts are `6` and `4`, so in **intercept form x/a + y/b = 1** the line is x/6 + y/4 = 1, and **the triangle it cuts off with the axes has area ½|ab|** = ½(6)(4) = `12`. Option A leaves the product un-halved. Option B uses the coefficients `2` and `3` as though they were the intercepts, which is the mistake this question exists to catch — the coefficients are never the intercepts.",
   tag:"Axes triangle"},

  {q:"The reflection of the point `(−3, 5)` in the x-axis is:",
   o:["(3, 5)","(−3, −5)","(3, −5)","(5, −3)"],
   a:1,
   why:"**Reflection in the x-axis sends (x, y) to (x, −y)** — the sign that changes belongs to the coordinate that is *not* named, because the x-axis is the mirror and distances along it are unchanged. So `(−3, 5)` becomes `(−3, −5)`. Option A is the reflection in the **y-axis**, (−x, y), and swapping those two is the standard confusion. Option C is the reflection in the **origin**, (−x, −y), and option D is the reflection in the line y = x, which swaps the coordinates.",
   tag:"Reflection"},

  {q:"The reflection of the point `(−4, 7)` in the origin lies in:",
   o:["the first quadrant","the second quadrant","the third quadrant","the fourth quadrant"],
   a:3,
   why:"**Reflection in the origin sends (x, y) to (−x, −y)**, so `(−4, 7)` becomes `(4, −7)`, with x positive and y negative — and the **fourth quadrant** is the (+, −) one, counting anticlockwise from the top right. Option B is where the original point sits, which is what ticking before reflecting gives. Option C is where the reflection in the **x-axis**, `(−4, −7)`, would land, so it catches anyone who changes only the sign of y.",
   tag:"Reflection"}
 ],
  note:"Every question above comes out of one line of the sheet. Where a question gives three options that all survive a quick glance — the line-equation ones especially — the way through is to test the slope and then test one point, in that order."}
]
}

]});
