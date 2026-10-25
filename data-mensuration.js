/* THE ANSWER KEY — data-mensuration.js
   Mensuration in two and three dimensions, as questions.

   THE SYLLABUS NAMES THE SOLIDS, so the topics follow it: triangle,
   quadrilaterals, regular polygons and circle in two dimensions; right
   prism, right circular cone, right circular cylinder, sphere, hemisphere,
   rectangular parallelepiped and the regular right pyramid on a triangular
   or square base in three.

   THE ONE THING WORTH SAYING TWICE. Almost every wrong answer in this
   chapter is the right formula for the wrong quantity — a curved surface
   where a total surface was asked, a sector where a segment was asked, a
   diameter put in where a radius belongs. The questions are built to catch
   exactly that, and the Careful boxes name each confusion. */

(window.SUBJECTS = window.SUBJECTS || []).push({

id:"mensuration", n:"Mensuration", tab:"Mensuration", sub:"Areas and volumes",
part:"Maths — every formula as a question",
w:"Every area formula in two dimensions and every surface and volume formula in three, plus the melting, recasting and scaling questions that are built on top of them.",
intro:"Four topics in two dimensions and four in three. The 2D half ends with the paths, borders and shaded regions that look like reasoning questions and are really one subtraction; the 3D half ends with melting and scaling, where the whole question is which power the ratio is raised to.",

topics:[

/* ============================================================ 1 — 2D: the triangle (28 questions) */
{
id:"men-2d-triangle", n:"2D: the triangle", hy:1,
w:"Area from the base and the height, from the three sides by Heron, and from two sides and the angle between them; the equilateral, isosceles and right triangles; the inradius and the circumradius; and the ratio facts — similar areas, the midpoint triangle and the six equal areas of the medians.",
quick:[
 "**Area = ½ × base × height.** In a right triangle the two legs are base and height, so **area = ½ × the two legs**, and the altitude to the hypotenuse is **ab/c**.",
 "**Heron: Δ = √(s(s − a)(s − b)(s − c))** with **s = (a + b + c)/2**. It needs only the three sides, the square root is the last step, and the formula already contains the half.",
 "**Δ = ½ab·sinC** — two sides and the angle *between* them. At `C = 90°` the sine is 1 and it collapses to ½ab; at `C = 30°` the sine is `½`, so the area is `¼ab`.",
 "**Equilateral of side `a`: area (√3/4)a², height (√3/2)a, r = a/(2√3), R = a/√3.** So **R = 2r**, and doubling the side makes the area **four** times as big.",
 "**Isosceles with equal sides `a` and base `b`: area = (b/4)√(4a² − b²)** — a quarter, not a half.",
 "**Δ = rs** gives the inradius `r = Δ/s`; **Δ = abc/4R** gives the circumradius `R = abc/4Δ`. One uses the sum of the sides, the other their product.",
 "Areas of similar triangles go as the **square** of the sides. Joining the midpoints of the three sides leaves **¼** of the area; the three medians cut the triangle into **six** equal areas; triangles on the same base and between the same parallels are **equal in area**."
],
blocks:[
 {h:"THE SHEET — every formula this topic tests",
  cols:["Asked for","The formula","Where it goes wrong"],
  rows:[
  ["**Area from base and height**","½ × base × height","The height must be perpendicular to *that* base; a slant side is never a height"],
  ["**Area of a right triangle**","½ × the two legs","The hypotenuse is never one of the two perpendicular sides"],
  ["**Altitude to the hypotenuse**","p = ab/c, because ½ab = ½cp","Half the hypotenuse, `c/2`, is the median from the right angle, not the altitude"],
  ["**Heron's formula**","√(s(s − a)(s − b)(s − c)), with s = (a + b + c)/2","The root is the last step, and the formula already contains the half of ½ × base × height"],
  ["**Area from two sides and the included angle**","½ab·sinC","The angle must lie *between* the two sides; with cosC the area would come out as zero at `90°`"],
  ["**Inradius**","r = Δ/s, because Δ = rs","Divide by the semi-perimeter, not by the whole perimeter"],
  ["**Circumradius**","R = abc/4Δ, because Δ = abc/4R","The *product* of the sides — the sum of the sides belongs to Δ = rs"],
  ["**Equilateral, area**","(√3/4)a²","(√3/2)a² is the height's factor put in the area's place"],
  ["**Equilateral, height**","(√3/2)a","A length, so it carries cm and not cm²"],
  ["**Equilateral, inradius**","r = a/(2√3) = (√3/6)a","One third of the height, because the centroid cuts the height `2 : 1`"],
  ["**Equilateral, circumradius**","R = a/√3 = (√3/3)a","Two thirds of the height, so R = 2r and the two circles' areas are `1 : 4`"],
  ["**Isosceles**, equal sides `a`, base `b`","(b/4)√(4a² − b²)","A quarter, not a half: the 4 comes out of the root as a 2 and halves the ½"],
  ["**Side of an equilateral doubled**","the area becomes 4 times as big","The height and the perimeter double; the area goes as the square"],
  ["**Similar triangles**","area ratio = (ratio of the sides)²","The side ratio is the *square root* of the area ratio, never the area ratio itself"],
  ["**Triangle of the midpoints**","¼ of the original area","The three corner triangles together make the other ¾"],
  ["**The three medians**","six triangles of equal area","One median alone gives two halves; the centroid joined to the vertices gives three thirds"],
  ["**Same base, between the same parallels**","equal areas","Equal in area, not congruent — the other two sides and the perimeters still differ"],
  ["**Sides in a given ratio, perimeter given**","scale = perimeter ÷ sum of the ratio terms, then Heron or ½ × base × height","A `3 : 4 : 5` triangle is right-angled, so ½ × the two legs is quicker than Heron"],
  ["**Base changed by x%, height by y%**","the area changes by (x + y + xy/100)%","`+20%` and `−20%` do not cancel: 1.2 × 0.8 = 0.96, a fall of `4%`"]
 ]},

 {careful:"**The height must be perpendicular to the base you used.** A slant side is not a height, so `½ × 13 × 10` is not the area of a triangle with sides 13 cm, 13 cm and 10 cm — the altitude has to be found first, `√(13² − 5²) = 12 cm`, giving `60 cm²`. Where only the three sides are known, use Heron's formula and do not look for a height at all."},

 {careful:"**Heron's formula already contains the half, and the square root is the last step.** `√(s(s − a)(s − b)(s − c))` is the finished area: nothing further is halved and nothing further is doubled. The two options always offered against it are the product taken before the root — a number in the thousands where tens were expected — and that same answer halved once too often."},

 {careful:"**Areas go as the square of the sides, never as the sides themselves.** Two similar triangles with sides in the ratio `3 : 4` have areas in the ratio `9 : 16`, and joining the midpoints of a triangle's sides halves every side, so it leaves **¼** of the area and not ½. Watch the unit as well: an answer in `cm` offered where `cm²` was asked is the other half of the trap in this chapter."},

 {h:"QUESTIONS — area, the three special triangles, and the ratio facts",
  mcq:[
  {q:"The area of a triangle whose three sides are `a`, `b` and `c`, with `s = (a + b + c)/2`, is:",
   o:["√(s(s − a)(s − b)(s − c))","s(s − a)(s − b)(s − c)","√(s(a − b)(b − c)(c − a))","½√(s(s − a)(s − b)(s − c))"],
   a:0,
   why:"**Heron's formula: Δ = √(s(s − a)(s − b)(s − c))**, where `s = (a + b + c)/2` is the semi-perimeter. Option B is the same product with the square root left off, which is the commonest slip — and it gives a number so large that its size alone should give it away. Option D halves the answer again: Heron's formula already contains the half of ½ × base × height, so nothing further is halved.",
   tag:"Heron"},

  {q:"A triangle has sides `5 cm`, `12 cm` and `13 cm`. Its area is:",
   o:["32.5 cm²","78 cm²","60 cm²","30 cm²"],
   a:3,
   why:"`5² + 12² = 25 + 144 = 169 = 13²`, so the triangle is right-angled and **area = ½ × the two legs = ½ × 5 × 12 = `30 cm²`**. Heron agrees: `s = 15` and √(15 × 10 × 3 × 2) = √900 = 30. Option B, `78 cm²`, is ½ × 12 × 13, which treats the hypotenuse as a height — the hypotenuse is never one of the two perpendicular sides. Option C is the product of the legs with the half forgotten.",
   tag:"Right triangle"},

  {q:"In the figure, the sides of the triangle are `a = 7 cm`, `b = 15 cm` and `c = 20 cm`. Its area is:",
   o:["42 cm²","1764 cm²","21 cm²","84 cm²"],
   a:0,
   d:"t-heron",
   dcap:"Only the three sides are known, so Heron's formula is the one route.",
   why:"**Δ = √(s(s − a)(s − b)(s − c))** with `s = (7 + 15 + 20)/2 = 21`. Then `s − a`, `s − b` and `s − c` are 14, 6 and 1, and 21 × 14 × 6 × 1 = 1764, so **Δ = √1764 = `42 cm²`**. Option B is that product before the square root, the standard slip; option C is `s` itself; option D is twice the answer, as though the half of ½ × base × height still had to be removed.",
   tag:"Heron"},

  {q:"The area of an equilateral triangle of side `a` is:",
   o:["(√3/2)a²","(√3/4)a²","(√3/3)a²","½a²"],
   a:1,
   why:"**Area of an equilateral triangle = (√3/4)a².** It comes from ½ × a × height with **height = (√3/2)a**, and the two halves multiply into the quarter. Option A is that height's own factor used in the area — the single commonest confusion in this topic, and it doubles every answer. Option D would be right only if the height equalled the side.",
   tag:"Equilateral"},

  {q:"The perimeter of an equilateral triangle is `36 cm`. Its height and its area are:",
   o:["18√3 cm and 324√3 cm²","12√3 cm and 144√3 cm²","6√3 cm and 36√3 cm²","6√3 cm and 72√3 cm²"],
   a:2,
   why:"A perimeter of `36 cm` gives side `a = 12 cm`. Then **height = (√3/2)a = 6√3 cm** and **area = (√3/4)a² = (√3/4) × 144 = `36√3 cm²`**. Option A uses the perimeter itself as the side; option B drops the 4 from the area's denominator and uses `√3 a` for the height; option D has the right height but uses (√3/2)a² for the area, which is the height's factor in the area's place.",
   tag:"Equilateral"},

  {q:"If the side of an equilateral triangle is doubled, its area becomes:",
   o:["twice as large","√2 times as large","eight times as large","four times as large"],
   a:3,
   why:"**Area = (√3/4)a²**, so the area goes as the square of the side: putting `2a` for `a` gives (√3/4)(2a)² = 4 × (√3/4)a², **four times** the original. Option A is the answer for a *length* — the height and the perimeter do double — and option C is the cube factor, which belongs to volumes and not to areas.",
   tag:"Scaling"},

  {q:"The area of an equilateral triangle is `25√3 cm²`. Its side is:",
   o:["5 cm","10 cm","25 cm","5√3 cm"],
   a:1,
   why:"**Area = (√3/4)a²**, so (√3/4)a² = 25√3 gives a² = 100 and `a = 10 cm`. Option A, `5 cm`, is what dropping the 4 from the denominator leaves — it makes a² = 25 — and it is the commonest slip when the formula is run backwards. Option D, `5√3 cm`, is the *height* of that same triangle, `(√3/2) × 10`, which is the answer one step past the one asked for.",
   tag:"Equilateral"},

  {q:"In the figure, the equilateral triangle has side `a = 12 cm`. The radii of its inscribed and circumscribed circles are:",
   o:["2√3 cm and 4√3 cm","4√3 cm and 2√3 cm","6 cm and 12 cm","2√3 cm and 6√3 cm"],
   a:0,
   d:"t-equilateral",
   dcap:"The centroid divides each height in the ratio `2 : 1`, so the shorter part is `r` and the longer part is `R`.",
   why:"**r = a/(2√3) and R = a/√3**, so `r = 12/(2√3) = 2√3 cm` and `R = 12/√3 = 4√3 cm`. Option B swaps them, which is the trap — the circumradius reaches the vertices and so must be the larger of the two. Option D offers the height, `6√3 cm`, in place of the circumradius: the height is `3r`, while the circumradius is only `2r`.",
   tag:"Equilateral r, R"},

  {q:"An isosceles triangle has each of its equal sides `a` and its base `b`. Its area is:",
   o:["(b/2)√(4a² − b²)","(a/4)√(4b² − a²)","(b/4)√(4a² − b²)","(b/4)√(a² − 4b²)"],
   a:2,
   why:"**Area of an isosceles triangle = (b/4)√(4a² − b²).** It is ½ × b × height with **height = √(a² − b²/4)**, and taking the 4 out of the root as a 2 turns the half into a quarter. Option A keeps the half and so doubles every answer — that is the slip the formula exists to prevent. Option D puts the 4 on the wrong term inside the root, which for most triangles makes the bracket negative.",
   tag:"Isosceles"},

  {q:"In the figure, the two equal sides of the isosceles triangle are `13 cm` each and the base is `10 cm`. Its area is:",
   o:["65 cm²","60 cm²","120 cm²","12 cm²"],
   a:1,
   d:"t-isosceles",
   dcap:"The altitude to the base bisects it, so each half of the base is `5 cm`.",
   why:"**Area = (b/4)√(4a² − b²)** = (10/4)√(4 × 169 − 100) = 2.5 × √576 = 2.5 × 24 = `60 cm²`. The same thing the long way: the altitude to the base is √(13² − 5²) = 12 cm, and ½ × 10 × 12 = 60 cm². Option A, `65 cm²`, is ½ × 13 × 10, which treats a slant side as the height; option D stops at the altitude, `12`, one step before the end.",
   tag:"Isosceles"},

  {q:"A right-angled triangle has legs `15 cm` and `20 cm`. The altitude from the right angle to the hypotenuse is:",
   o:["25 cm","12.5 cm","12 cm","150 cm"],
   a:2,
   why:"**Area = ½ × the two legs = ½ × 15 × 20 = 150 cm²**, and the same area is **½ × hypotenuse × altitude**. The hypotenuse is √(15² + 20²) = √625 = 25 cm, so **altitude = ab/c = (15 × 20)/25 = `12 cm`**. Option D is the area's number given a length's unit, which is the standing trap of this chapter. Option B, `12.5 cm`, is half the hypotenuse — that is the *median* from the right angle, not the altitude, and the two agree only in an isosceles right triangle.",
   tag:"Altitude ab/c"},

  {q:"The radius of the circle inscribed in a triangle of area Δ and semi-perimeter `s` is:",
   o:["Δs","Δ/s","s/Δ","Δ/2s"],
   a:1,
   why:"**Δ = rs**, so **r = Δ/s**, with `s = (a + b + c)/2`. Joining the incentre to the three vertices cuts the triangle into three triangles of height `r` standing on `a`, `b` and `c`, and ½r(a + b + c) = rs. Option D is what comes of dividing by the whole perimeter instead of the semi-perimeter, and option A multiplies where it should divide.",
   tag:"Δ = rs"},

  {q:"A triangle has sides `10 cm`, `24 cm` and `26 cm`. The radius of its inscribed circle is:",
   o:["30 cm","8 cm","13 cm","4 cm"],
   a:3,
   why:"`10² + 24² = 100 + 576 = 676 = 26²`, so the triangle is right-angled with **Δ = ½ × 10 × 24 = 120 cm²** and `s = (10 + 24 + 26)/2 = 30`. Then **r = Δ/s = 120/30 = `4 cm`**. Option A is `s` itself; option B, `8 cm`, is `(a + b − c)` with the halving forgotten, since the right-triangle shortcut is **r = (a + b − c)/2**. Option C, `13 cm`, is the *circumradius*, which in a right triangle is half the hypotenuse.",
   tag:"Inradius"},

  {q:"The radius of the circle passing through all three vertices of a triangle with sides `a`, `b`, `c` and area Δ is:",
   o:["4Δ/abc","abc/2Δ","abc/4Δ","Δ/4abc"],
   a:2,
   why:"**Δ = abc/4R**, so **R = abc/4Δ**. Option A is that relation turned upside down, which gives `1/R` and not `R`; option B loses the factor of 2 out of the 4. Keep it apart from **Δ = rs**, which gives the inradius: the circumradius is built from the *product* of the three sides, the inradius from their *sum*.",
   tag:"Δ = abc/4R"},

  {q:"If two sides of a triangle are `a` and `b` and the angle between them is `C`, the area is:",
   o:["½ab·sinC","ab·sinC","½ab·cosC","½ab·tanC"],
   a:0,
   why:"**Δ = ½ab·sinC**, where `C` is the angle *between* the two sides named. At `C = 90°` the sine is 1 and the formula reduces to ½ab, the right triangle's own rule. Option B forgets the half; option C uses the cosine, which would make the area zero at `C = 90°` — an impossibility worth testing any answer against.",
   tag:"½ab·sinC"},

  {q:"Two sides of a triangle are `8 cm` and `10 cm` and the angle between them is `30°`. Its area is:",
   o:["40 cm²","20 cm²","80 cm²","20√3 cm²"],
   a:1,
   why:"**Δ = ½ab·sinC** = ½ × 8 × 10 × sin30° = ½ × 80 × ½ = `20 cm²`, because `sin30° = ½`. Option A, `40 cm²`, is ½ab with the sine taken as 1 — that is the area only when the included angle is `90°`, and it is the commonest tick here. Option D is what `sin60° = √3/2` would give, and option C is the bare product of the two sides.",
   tag:"½ab·sinC"},

  {q:"The midpoints of the sides of a triangle of area `64 cm²` are joined to form a smaller triangle. The area of the smaller triangle is:",
   o:["32 cm²","16 cm²","48 cm²","8 cm²"],
   a:1,
   why:"Joining the midpoints gives a triangle whose three sides are each **half** the original, and **areas of similar triangles go as the square of the sides**, so the middle triangle is **¼** of the whole: 64 ÷ 4 = `16 cm²`. Option C, `48 cm²`, is the three corner triangles taken together — the quantity the question did not ask for. Option A halves instead of quartering, and option D cubes the ratio, which is a volume rule and not an area one.",
   tag:"Midpoint triangle"},

  {q:"The three medians of a triangle of area `54 cm²` divide it into six triangles. The area of each is:",
   o:["27 cm²","18 cm²","6 cm²","9 cm²"],
   a:3,
   why:"**The three medians divide a triangle into six triangles of equal area**, so each is 54 ÷ 6 = `9 cm²`. Option A, `27 cm²`, is what one median alone gives, since a single median splits the triangle into two equal halves. Option B, `18 cm²`, is a third of the whole — that is the area of each of the three triangles formed by joining the centroid to the vertices, and it is the tempting miscount.",
   tag:"Medians"},

  {q:"The areas of two similar triangles are `81 cm²` and `49 cm²`. The ratio of their corresponding sides is:",
   o:["81 : 49","6561 : 2401","9 : 7","3 : √7"],
   a:2,
   why:"**For similar triangles, the ratio of the areas is the square of the ratio of the sides**, so the side ratio is the square root of the area ratio: √81 : √49 = `9 : 7`. Option A offers the area ratio itself, which is the standard slip. Option B squares once more, giving the ratio of the squares of the areas; option D takes the roots of 9 and 7 instead of the roots of 81 and 49.",
   tag:"Similar areas"},

  {q:"The sides of a triangle are in the ratio `3 : 4 : 5` and its perimeter is `36 cm`. Its area is:",
   o:["54 cm²","108 cm²","2916 cm²","90 cm²"],
   a:0,
   why:"The ratio terms add to 12, so the scale is 36 ÷ 12 = 3 and the sides are `9 cm`, `12 cm` and `15 cm` — right-angled, since 9² + 12² = 15². **Area = ½ × the two legs = ½ × 9 × 12 = `54 cm²`**, and Heron agrees: `s = 18` and √(18 × 9 × 6 × 3) = √2916 = 54. Option C is that product before the square root; option B forgets the half; option D, `90 cm²`, is ½ × 12 × 15, using the hypotenuse as a height.",
   tag:"Ratio and perimeter"},

  {q:"The base of a triangle is increased by `20%` and its height is decreased by `20%`. Its area:",
   o:["is unchanged","increases by 4%","decreases by 40%","decreases by 4%"],
   a:3,
   why:"**Area = ½ × base × height**, so a base of 1.2 times and a height of 0.8 times give an area of 1.2 × 0.8 = `0.96` times the original — a fall of **4%**. The general rule is a change of **(x + y + xy/100)%**, here 20 − 20 + (20 × −20)/100 = −4. Option A is the tempting one: the two percentages look as though they cancel, and they do not, because the two factors do not multiply to 1.",
   tag:"Percentage change"},

  {q:"△ABC and △DBC stand on the same base `BC`, and `A` and `D` lie on one straight line parallel to `BC`. Which of these is certainly true?",
   o:["The two triangles are congruent","The two triangles have equal perimeters","The two triangles have equal areas","The area of △ABC is twice the area of △DBC"],
   a:2,
   why:"**Triangles on the same base and between the same parallels are equal in area**, because the base is shared and each height is the distance between the two parallel lines. Equal area is all that follows: `AB` and `DB` may be quite different lengths, so the perimeters generally differ and the triangles are generally not congruent. Option A is the tempting one, and it holds only in the special case where `A` and `D` are the same point.",
   tag:"Same base"},

  {q:"A triangle has sides `8 cm`, `15 cm` and `17 cm`. Its area is:",
   o:["120 cm²","60 cm²","68 cm²","136 cm²"],
   a:1,
   why:"**8² + 15² = 64 + 225 = 289 = 17², so it is a right triangle with legs 8 and 15.** Area = ½ × 8 × 15 = `60 cm²`. Option A (120) is 8 × 15 without the ½ — the standard slip. Heron's formula also works: s = 20, Δ = √(20 × 12 × 5 × 3) = √3600 = 60.",
   tag:"Right triangle area"},

  {q:"The altitude of an equilateral triangle of side `14 cm` is:",
   o:["14√3 cm","7 cm","14 cm","7√3 cm"],
   a:3,
   why:"**Height of equilateral triangle = (√3/2) × side = (√3/2) × 14 = `7√3 cm`**. Option A (14√3) is √3 × side, forgetting to halve; option B (7) is half the side with the √3 left out entirely.",
   tag:"Equilateral height"},

  {q:"The circumradius of a triangle with sides `a`, `b`, `c` and area `Δ` is:",
   o:["abc/Δ","abc/(4Δ)","4Δ/(abc)","Δ/s"],
   a:1,
   why:"**Circumradius R = abc/(4Δ)**. Option A (abc/Δ) omits the 4 in the denominator, giving a value four times too large; option D (Δ/s) is the **inradius**, not the circumradius — swapping the two is the classic confusion.",
   tag:"Circumradius"},

  {q:"Two sides of a triangle are `12 cm` and `5 cm` and the included angle is `90°`. Its area is:",
   o:["60 cm²","17 cm²","30 cm²","120 cm²"],
   a:2,
   why:"**Area = ½ × a × b × sin C = ½ × 12 × 5 × sin 90° = ½ × 60 = `30 cm²`**. Since sin 90° = 1, this is simply the right-triangle formula ½ × base × height. Option A (60) omits the ½.",
   tag:"SAS area"},

  {q:"A triangle has sides `6 cm`, `8 cm` and `10 cm`. The radius of the circle inscribed in it is:",
   o:["4 cm","2 cm","5 cm","3 cm"],
   a:1,
   why:"**Inradius r = Δ/s.** This is a 6-8-10 right triangle: Δ = ½ × 6 × 8 = 24 cm², s = (6 + 8 + 10)/2 = 12. So r = 24/12 = `2 cm`. Option A (4) is 24/6, dividing by the shortest side rather than the semi-perimeter.",
   tag:"Inradius"},

  {q:"The sides of two similar triangles are in the ratio `2 : 5`. The ratio of their areas is:",
   o:["2 : 5","4 : 10","25 : 4","4 : 25"],
   a:3,
   why:"**The areas of similar triangles are in the ratio of the squares of their corresponding sides**: 2² : 5² = `4 : 25`. Option A (2 : 5) takes the areas directly proportional to the sides — the same error as with circles — and option C (25 : 4) reverses the ratio.",
   tag:"Similar triangle areas"}
],
  note:"Nothing in this topic needs π: every formula here is algebraic, and the incircle and the circumcircle enter only as the lengths `r = Δ/s` and `R = abc/4Δ`. Every numeric answer above carries its unit, because an area offered in `cm`, or a length offered in `cm²`, is the commonest careless tick in mensuration."}
]
},

/* ============================================================ 2 — 2D: quadrilaterals and polygons (28 questions) */
{
id:"men-2d-quad", n:"2D: quadrilaterals and polygons", hy:1,
w:"The square, rectangle, parallelogram, rhombus, kite and trapezium; the general quadrilateral from one diagonal; Brahmagupta's formula; the regular polygon and the regular hexagon; and what a percentage change in a side does to the area.",
quick:[
 "**Square: area a², diagonal a√2, and area from the diagonal d²/2.** A square of diagonal `14 cm` has area `98 cm²`, not `196 cm²` — `d²` is the square built on the diagonal, which is twice the square itself.",
 "**Rectangle: area lb, perimeter 2(l + b), diagonal √(l² + b²).** With the perimeter given, `l + b` is half of it. Of all rectangles of one perimeter the square has the largest area.",
 "**Parallelogram: area = base × height**, the height taken perpendicular to *that* base. Two bases, two heights, one area: **b₁h₁ = b₂h₂**, so the shorter base carries the longer height.",
 "**Rhombus: area ½d₁d₂, side ½√(d₁² + d₂²), perimeter 4a.** The diagonals bisect each other at right angles, and both formulas come out of that. **A kite is ½d₁d₂ as well**, for the same reason.",
 "**Trapezium: area ½(a + b)h**, with `a` and `b` the parallel sides and `h` the distance between them. Any quadrilateral from one diagonal `d` is **½ × d × (sum of the two perpendiculars onto it)**.",
 "**Cyclic quadrilateral — Brahmagupta: area = √((s − a)(s − b)(s − c)(s − d))** with `s = (a + b + c + d)/2`. Four sides, four brackets, and no `s` on its own — that fifth factor belongs to Heron's formula.",
 "**Regular polygon: area = ½ × perimeter × apothem. Regular hexagon of side a: (3√3/2)a²**, six equilateral triangles. When one dimension changes by `x%` and another by `y%` the area changes by **(x + y + xy/100)%**."
],
blocks:[
 {h:"THE SHEET — every formula this topic tests",
  cols:["Asked for","The formula","Where it goes wrong"],
  rows:[
  ["**Square — area**","a² = d²/2","From the diagonal, halve its square. `d²` is the square built on the diagonal, which is twice the square itself"],
  ["**Square — diagonal**","d = a√2","So the side from the diagonal is d/√2, never d√2"],
  ["**Square — perimeter**","4a","A square of perimeter `48 cm` has side 12 cm and diagonal 12√2 cm"],
  ["**Rectangle — area**","lb","With the perimeter given, l + b is half of it and not all of it"],
  ["**Rectangle — perimeter**","2(l + b)","Of all rectangles of one perimeter the square encloses the most area"],
  ["**Rectangle — diagonal**","√(l² + b²)","Longer than either side and shorter than their sum — a check worth running on the options"],
  ["**Parallelogram — area**","base × height","Two bases, two heights, one area: b₁h₁ = b₂h₂, so the shorter base carries the longer height"],
  ["**Rhombus — area**","½d₁d₂","d₁d₂ is the rectangle the two diagonals span, and the rhombus is half of it"],
  ["**Rhombus — side**","½√(d₁² + d₂²)","Halve each diagonal first — the halving is what gets dropped"],
  ["**Rhombus — perimeter**","4a","A rhombus is a parallelogram, so base × height also works when a height is given instead of the diagonals"],
  ["**Kite — area**","½d₁d₂","The same formula as the rhombus, because here too the diagonals cross at right angles"],
  ["**Trapezium — area**","½(a + b)h","`a` and `b` are the **parallel** sides and `h` the perpendicular distance between them — equally, the area is (the line joining the midpoints of the slant sides) × h, because that line is ½(a + b)"],
  ["**Any quadrilateral, from one diagonal**","½ × d × (p₁ + p₂)","The two perpendiculars onto that diagonal are **added**, not averaged"],
  ["**Cyclic quadrilateral — Brahmagupta**","√((s − a)(s − b)(s − c)(s − d)), with s = (a + b + c + d)/2","Four sides, four brackets, no `s` on its own — and it holds only when the quadrilateral is cyclic"],
  ["**Regular polygon — area**","½ × perimeter × apothem","The apothem is the perpendicular from the centre to a side. The circle is the same line: ½ × 2πr × r = πr²"],
  ["**Regular hexagon of side a**","(3√3/2)a², with apothem (√3/2)a","Six equilateral triangles of (√3/4)a² each — one triangle, or three, is the usual wrong tick"],
  ["**One dimension changed by x%, the other by y%**","area changes by (x + y + xy/100)%","For a square both change together, so it becomes (2x + x²/100)%"],
  ["**Two squares with sides in the ratio k**","areas in the ratio k²","Sides, diagonals and perimeters share one ratio; the areas take its square and never its cube"]
 ]},

 {careful:"Almost every wrong answer in this chapter is **the right formula for the wrong quantity**. For quadrilaterals the pair to keep apart is **½d₁d₂** and **base × height**: the first needs the two diagonals to cross at right angles — a rhombus, a kite or a square — and the second needs a height measured perpendicular to the base. Using ½d₁d₂ on a parallelogram, whose diagonals are not perpendicular, is the standard loss here."},

 {careful:"In **½(a + b)h** the two lengths added are the **parallel** sides, and `h` is the perpendicular distance between them — never a slant side. A trapezium whose parallel sides are `18 cm` and `14 cm` and whose slant side is `9 cm` has an area you cannot work out at all until you have the height."},

 {careful:"A side rising by `10%` does **not** raise the area by 10%, and it does not raise it by 20% either. The area rises by **(2x + x²/100)% = 21%**, while the new area is **121%** of the old. Those are two answers to two different questions, and both are always on the option list."},

 {h:"QUESTIONS — the six quadrilaterals, the polygon, and the percentage change",
  mcq:[
  {q:"The diagonals of a rhombus are `30 cm` and `16 cm`. Its area is:",
   o:["480 cm²","240 cm²","120 cm²","289 cm²"],
   a:1,
   why:"**Area of a rhombus = ½d₁d₂**, because the diagonals cross at right angles and cut it into four right triangles. Here ½ × 30 × 16 = `240 cm²`. Option A is `d₁d₂`, the rectangle the two diagonals span — the rhombus is exactly half of it, and dropping that half is the standard slip. Option D is the square of the side: the side is ½√(30² + 16²) = 17 cm, so `289 cm²` is the area of a *square* of that side, not of this rhombus.",
   tag:"Rhombus"},

  {q:"The diagonals of a rhombus are `16 cm` and `12 cm`. The length of each side is:",
   o:["14 cm","20 cm","10 cm","28 cm"],
   a:2,
   why:"**Side of a rhombus = ½√(d₁² + d₂²)** — halve each diagonal, then Pythagoras on the right triangle those halves make: √(8² + 6²) = `10 cm`. Option B is √(16² + 12²) = 20 cm with the halving forgotten, and it is longer than the longer diagonal, which no side of a rhombus can be. Option A is the average of the two diagonals and option D their sum, neither of which is a length in the figure.",
   tag:"Rhombus side"},

  {q:"The area of a square whose diagonal is `d` is:",
   o:["d²/2","d²","d²/4","2d²"],
   a:0,
   why:"**Area of a square = d²/2**, because `d = a√2` gives a² = d²/2. A diagonal of 14 cm therefore gives 196/2 = `98 cm²`. Option B, `d²`, is the area of the square built *on* the diagonal, which is twice the square itself — that confusion is the whole of this question. Option D comes from writing `a = d√2` instead of `d = a√2`, the relation the wrong way round.",
   tag:"Square from d",
   d:"q-square-diag"},

  {q:"The perimeter of a square is `48 cm`. Its diagonal is:",
   o:["12 cm","24√2 cm","6√2 cm","12√2 cm"],
   a:3,
   why:"**Perimeter = 4a**, so the side is 48/4 = 12 cm, and **the diagonal = a√2** = `12√2 cm`, about 16.97 cm. Option A is the side itself, the step before the end and the commonest tick. Option B halves the perimeter instead of quartering it, and option C is half the correct diagonal.",
   tag:"Square diagonal"},

  {q:"A rectangle is `24 m` long and `10 m` wide. Its diagonal is:",
   o:["34 m","26 m","68 m","17 m"],
   a:1,
   why:"**Diagonal of a rectangle = √(l² + b²)** = √(576 + 100) = √676 = `26 m`. Option A adds the sides instead of their squares; option C is the perimeter `2(l + b)` = 68 m, the quantity the question did not ask for; option D is half the sum of the sides. A diagonal is always longer than either side and shorter than their sum, which here leaves only `26 m`.",
   tag:"Rectangle diagonal"},

  {q:"The perimeter of a rectangle is `56 cm` and its length is `4 cm` more than its breadth. Its area is:",
   o:["196 cm²","780 cm²","192 cm²","168 cm²"],
   a:2,
   why:"**Perimeter = 2(l + b)**, so l + b = 28, and with l − b = 4 the sides are 16 cm and 12 cm; **area = lb** = `192 cm²`. Option B, `780 cm²`, comes from reading 56 as l + b rather than 2(l + b), which gives 30 and 26 — the commonest slip here. Option A is 14², the area of the square of the same perimeter and so the largest area any rectangle of perimeter 56 cm can have, and option D pairs the half-perimeter 14 with the correct breadth 12.",
   tag:"Rectangle"},

  {q:"The sides of a parallelogram are `12 cm` and `9 cm`, and the height on the `12 cm` side is `6 cm`. The height on the `9 cm` side is:",
   o:["8 cm","4.5 cm","6 cm","9 cm"],
   a:0,
   why:"**Area of a parallelogram = base × height**, and the same area comes from either base, so **b₁h₁ = b₂h₂**. The area is 12 × 6 = 72 cm², so the height on the 9 cm side is 72/9 = `8 cm`. Option B is 6 × 9/12 = 4.5 cm, the ratio applied the wrong way round — the shorter base must carry the *longer* height. Option C assumes one height serves both bases, which is the confusion the question is built on.",
   tag:"Two heights"},

  {q:"The area of a parallelogram is:",
   o:["½ × base × height","base × height","½ × product of the diagonals","½ × base × (sum of the two heights)"],
   a:1,
   why:"**Area of a parallelogram = base × height**, with the height measured perpendicular to that base. Option A is the triangle: either diagonal cuts the parallelogram into two equal triangles of ½ × base × height each, which is where that half belongs and why it is the tempting answer. Option C, **½d₁d₂**, is correct only when the diagonals meet at right angles — the rhombus, the square and the kite — and a general parallelogram's do not.",
   tag:"Parallelogram",
   d:"q-parallelogram"},

  {q:"The area of a trapezium whose parallel sides are `a` and `b` and whose height is `h` is:",
   o:["(a + b)h","½(a − b)h","½abh","½(a + b)h"],
   a:3,
   why:"**Area of a trapezium = ½(a + b)h**, where `a` and `b` are the two parallel sides and `h` the perpendicular distance between them. The same result another way: the line joining the midpoints of the two slant sides is ½(a + b), and the area is that line times `h`. Option A forgets the half, which is the commonest slip on the whole topic; option B uses the *difference* of the parallel sides, which measures the overhang and is no part of the area.",
   tag:"Trapezium",
   d:"q-trapezium"},

  {q:"The parallel sides of a trapezium are `18 cm` and `14 cm` and the distance between them is `9 cm`. Its area is:",
   o:["144 cm²","288 cm²","126 cm²","162 cm²"],
   a:0,
   why:"**Area = ½(a + b)h** = ½(18 + 14) × 9 = ½ × 32 × 9 = `144 cm²`. Option B is that same product with the half dropped. Options C and D are 14 × 9 and 18 × 9 — one parallel side used as a base with `h` as its height, which is the area of a parallelogram and not of this trapezium.",
   tag:"Trapezium"},

  {q:"A trapezium of area `180 cm²` has parallel sides `16 cm` and `20 cm`. The distance between the parallel sides is:",
   o:["5 cm","20 cm","10 cm","9 cm"],
   a:2,
   why:"**Area = ½(a + b)h**, so 180 = ½(16 + 20)h = 18h and `h = 10 cm`. Option A is 180/36 = 5 cm, the half left in place when it should have been cleared, and the standard slip here. Option B doubles where it should halve, and option D is 180/20, one parallel side used alone as a base.",
   tag:"Trapezium height"},

  {q:"The formula **½d₁d₂** gives the area of:",
   o:["any parallelogram","a rhombus and a kite","any trapezium","any quadrilateral"],
   a:1,
   why:"**½d₁d₂ is the area of a quadrilateral whose diagonals cross at right angles** — the rhombus, the kite and the square, and nothing else in general. A parallelogram's diagonals are not perpendicular, so its area is `base × height`, and a trapezium's is `½(a + b)h`. For a quadrilateral with no special diagonals the area comes from one diagonal instead: **½ × d × (sum of the two perpendiculars onto it)**.",
   tag:"Diagonals at 90°",
   d:"q-kite"},

  {q:"One diagonal of a quadrilateral is `20 cm`, and the perpendiculars onto it from the two opposite vertices are `6 cm` and `9 cm`. Its area is:",
   o:["300 cm²","75 cm²","150 cm²","180 cm²"],
   a:2,
   why:"**Area of a quadrilateral from one diagonal = ½ × d × (p₁ + p₂)**, because that diagonal splits it into two triangles of ½dp₁ and ½dp₂. Here ½ × 20 × (6 + 9) = `150 cm²`. Option A drops the half; option B averages the two perpendiculars instead of adding them, ½ × 20 × 7.5 = 75 cm², which is exactly half the right answer and the trap worth naming. Option D, 20 × 9, is the larger of the two triangles doubled.",
   tag:"From one diagonal"},

  {q:"The area of a cyclic quadrilateral with sides `a`, `b`, `c`, `d` and `s = (a + b + c + d)/2` is:",
   o:["√(s(s − a)(s − b)(s − c)(s − d))","½(a + c)(b + d)","√(s(s − a)(s − b)(s − c))","√((s − a)(s − b)(s − c)(s − d))"],
   a:3,
   why:"**Brahmagupta's formula: area = √((s − a)(s − b)(s − c)(s − d))**, with `s` the half of the whole perimeter. Four sides give four brackets and nothing else. Option C is **Heron's formula, √(s(s − a)(s − b)(s − c))**, which carries `s` itself as a factor because a triangle has only three brackets — and option A is that pattern stretched to four sides, which is the option most often ticked. The formula holds only when the quadrilateral is cyclic; four sides on their own do not fix an area.",
   tag:"Brahmagupta",
   d:"q-cyclic-brahma"},

  {q:"The sides of a cyclic quadrilateral are `4 cm`, `5 cm`, `7 cm` and `10 cm`. Its area is:",
   o:["36 cm²","1296 cm²","36√13 cm²","13 cm²"],
   a:0,
   why:"`s = (4 + 5 + 7 + 10)/2 = 13`, and **area = √((s − a)(s − b)(s − c)(s − d))** = √(9 × 8 × 6 × 3) = √1296 = `36 cm²`. Option B is that product with the square root forgotten — the last step, and the one most often dropped. Option C is what Heron's extra factor of `s` would give, √(13 × 1296) = 36√13 cm², and option D is `s` itself, the step before the end.",
   tag:"Brahmagupta"},

  {q:"A regular polygon has perimeter `P` and apothem `r`, the perpendicular from the centre to a side. Its area is:",
   o:["Pr","½Pr","¼Pr","P²/4π"],
   a:1,
   why:"**Area of a regular polygon = ½ × perimeter × apothem = ½Pr.** Joining the centre to every vertex cuts it into `n` triangles, each with a side as base and the apothem as height, so the total is ½ × (all the bases) × apothem. The circle is the same line taken to the limit: ½ × 2πr × r = πr². Option A drops the half — the same half that is dropped in ½ × base × height — and option D is the area of the *circle* of that same perimeter, which is larger than any polygon of it.",
   tag:"Apothem"},

  {q:"The area of a regular hexagon of side `a` is:",
   o:["(√3/4)a²","6a²","(3√3/4)a²","(3√3/2)a²"],
   a:3,
   why:"**Area of a regular hexagon = (3√3/2)a².** The hexagon is six equilateral triangles of side `a`, each of area (√3/4)a², and 6 × (√3/4) = 3√3/2. Option A is one of those six triangles; option C is three of them, which is half the hexagon and the commonest wrong tick. The check: the apothem is (√3/2)a, so ½ × 6a × (√3/2)a gives (3√3/2)a² again.",
   tag:"Hexagon",
   d:"q-hexagon"},

  {q:"A regular hexagon has side `6 cm`. Its area is:",
   o:["9√3 cm²","27√3 cm²","54√3 cm²","108√3 cm²"],
   a:2,
   why:"**Area = (3√3/2)a²** = (3√3/2) × 36 = `54√3 cm²`, about 93.5 cm². Option A is one of the six equilateral triangles, (√3/4) × 36 = 9√3 cm²; option B is three of them, half the hexagon; option D uses 3√3 in place of 3√3/2 and so doubles the answer. The perimeter is 36 cm and the apothem 3√3 cm, and ½ × 36 × 3√3 = 54√3 cm² confirms it.",
   tag:"Hexagon"},

  {q:"Each side of a square is increased by `10%`. Its area increases by:",
   o:["20%","10%","121%","21%"],
   a:3,
   why:"Area goes as the square of the side, so a side multiplied by 1.1 gives an area multiplied by 1.21 — a rise of `21%`. By formula, **(x + y + xy/100)% with x = y = 10**, which for a square is **(2x + x²/100)%** = 20 + 1 = 21. Option C, `121%`, is the new area as a percentage of the old and not the increase — the step before the end. Option A is the bare 2x with the x²/100 term dropped.",
   tag:"Percentage"},

  {q:"The length of a rectangle is increased by `20%` and its breadth is decreased by `10%`. The area:",
   o:["increases by 10%","increases by 8%","decreases by 8%","stays the same"],
   a:1,
   why:"**A change of x% in one dimension and y% in the other changes the area by (x + y + xy/100)%.** With x = 20 and y = −10 that is 20 − 10 + (20)(−10)/100 = 10 − 2 = `8`, so the area rises by 8%. Checked directly: 1.20 × 0.90 = 1.08. Option A adds the two percentages and stops, dropping the xy/100 term — and that term is the whole question.",
   tag:"Percentage"},

  {q:"The diagonals of two squares are in the ratio `3 : 5`. The ratio of their areas is:",
   o:["3 : 5","27 : 125","9 : 25","√3 : √5"],
   a:2,
   why:"**Area of a square = d²/2**, so the areas are in the ratio of the squares of the diagonals, `9 : 25`. The sides, the diagonals and the perimeters of two squares all share one ratio, `3 : 5`, and the areas take the square of it — option A is that linear ratio, the step before the end. Option B is the cube ratio `27 : 125`, which is how *volumes* scale, and it is the standard area-for-volume trap.",
   tag:"Ratio of areas"},

  {q:"The perimeter of a rhombus is `52 cm` and one of its diagonals is `24 cm`. Its area is:",
   o:["120 cm²","240 cm²","156 cm²","60 cm²"],
   a:0,
   why:"**Perimeter = 4a**, so the side is 13 cm, and the diagonals bisect each other at right angles, so half the other diagonal is √(13² − 12²) = 5 cm and the other diagonal is 10 cm. **Area = ½d₁d₂** = ½ × 24 × 10 = `120 cm²`. Option D, `60 cm²`, is ½ × 24 × 5, the half-diagonal used in place of the whole one — the commonest slip in this question. Option B drops the half, and option C is 12 × 13, two lengths that bound nothing.",
   tag:"Rhombus",
   d:"q-rhombus"},

  {q:"The area of a square whose side is `17 cm` is:",
   o:["289 cm²","68 cm²","578 cm²","34 cm²"],
   a:0,
   why:"**Area of a square = side² = 17² = `289 cm²`**. Option C (578) doubles it, confusing area with perimeter squared divided by something; option B (68) is 4 × 17, the perimeter.",
   tag:"Square area"},

  {q:"The area of a trapezium is `100 cm²` and its parallel sides are `12 cm` and `8 cm`. The distance between the parallel sides is:",
   o:["5 cm","10 cm","20 cm","8 cm"],
   a:1,
   why:"**Area = ½(a + b)h**, so 100 = ½(12 + 8)h = 10h, giving h = `10 cm`. Option A (5) is from dividing 100 by (12 + 8) without the ½, which doubles the height — the standard slip in working the formula backwards.",
   tag:"Trapezium height"},

  {q:"The diagonals of a rhombus are `24 cm` and `10 cm`. Its perimeter is:",
   o:["68 cm","52 cm","34 cm","26 cm"],
   a:1,
   why:"**The diagonals of a rhombus bisect at right angles, so each side = √(12² + 5²) = √(144 + 25) = √169 = 13 cm.** Perimeter = 4 × 13 = `52 cm`. Option A (68) adds the diagonals twice, 2(24 + 10), confusing the perimeter of the rhombus with the perimeter of the rectangle formed by the diagonals.",
   tag:"Rhombus perimeter"},

  {q:"A parallelogram has base `15 cm` and height `8 cm`. A triangle with the same base and the same height has area:",
   o:["120 cm²","240 cm²","60 cm²","30 cm²"],
   a:2,
   why:"**Area of triangle = ½ × base × height = ½ × 15 × 8 = `60 cm²`**, which is half the parallelogram's area (120 cm²). Option A (120) is the parallelogram's own area — the trap of forgetting the ½.",
   tag:"Area comparison"},

  {q:"If the diagonal of a square is `10√2 cm`, the area of the square is:",
   o:["50 cm²","200 cm²","100 cm²","100√2 cm²"],
   a:2,
   why:"**Diagonal = a√2**, so a = 10 cm and area = a² = `100 cm²`. Alternatively, **area = d²/2 = (10√2)²/2 = 200/2 = 100 cm²**. Option B (200) is d² without the halving — a very common slip.",
   tag:"Square from diagonal"},

  {q:"A field in the shape of a quadrilateral has a diagonal `40 m` long. The perpendiculars from the other two vertices onto this diagonal are `12 m` and `8 m`. The area of the field is:",
   o:["960 m²","800 m²","480 m²","400 m²"],
   a:3,
   why:"**Area = ½ × diagonal × (sum of perpendiculars) = ½ × 40 × (12 + 8) = ½ × 40 × 20 = `400 m²`**. Option A (960) is 40 × (12 + 8) + something; option B (800) is 40 × 20, omitting the ½.",
   tag:"Quadrilateral area"}
],
  note:"Every question above is answered by one line of the sheet. If an answer came out with a stray factor of two in it, the line to go back to is the one with the ½ in front."}
]
},

/* ============================================================ 3 — 2D: circle, sector and segment (28 questions) */
{
id:"men-2d-circle", n:"2D: circle, sector and segment", hy:1,
w:"The circle, the semicircle and the quadrant; the arc, the sector and the segment; the ring; and the circle drawn inside and outside a square and an equilateral triangle.",
quick:[
 "**Circumference = 2πr = πd** and **area = πr² = πd²/4**. From the circumference alone, **area = C²/4π**.",
 "**Semicircle: area ½πr², perimeter πr + 2r.** The diameter is part of the perimeter, and leaving it out is the standard slip. **Quadrant: area ¼πr², perimeter ½πr + 2r.**",
 "**Sector: arc = (θ/360) × 2πr, area = (θ/360) × πr², and area = ½ × r × arc.** Its perimeter is **arc + 2r**. In radians, **l = rθ** and **area = ½r²θ**.",
 "**Segment = sector − triangle = (θ/360)πr² − ½r²sinθ.** At `60°` it is `r²(π/6 − √3/4)`, at `90°` it is `r²(π/4 − ½)`, at `120°` it is `r²(π/3 − √3/4)`.",
 "**Ring or annulus = π(R² − r²) = π(R + r)(R − r)**, width `R − r`. Note that `π(R − r)²` is a different number entirely.",
 "A circle inscribed in a square gives **circle : square = π : 4**; a square inscribed in a circle gives **circle : square = π : 2**. For an equilateral triangle the inscribed and circumscribed circles have areas in the ratio **1 : 4**.",
 "When the radius rises by `x%` the area rises by **(2x + x²/100)%**; doubling the circumference makes the area **four times** as big. Revolutions of a wheel = **distance ÷ circumference**."
],
blocks:[
 {h:"THE SHEET — every formula this topic tests",
  cols:["Asked for","The formula","Where it goes wrong"],
  rows:[
  ["**Circumference**","2πr = πd","`d` is the diameter — a diameter used where a radius belongs is the commonest error in the whole chapter"],
  ["**Area of a circle**","πr² = πd²/4","From the diameter the area is πd²/4, not πd²"],
  ["**Area from the circumference**","C²/4π","Because r = C/2π, and the 2 gets squared as well as the C"],
  ["**Radius from the area**","r = √(A/π)","With π = 22/7, an area of 154 cm² gives r = 7 cm"],
  ["**Semicircle**","area ½πr², perimeter πr + 2r = r(π + 2)","The diameter bounds the figure, so it counts in the perimeter"],
  ["**Quadrant**","area ¼πr², perimeter ½πr + 2r","Both bounding radii count, not one"],
  ["**Arc length**, θ in degrees","(θ/360) × 2πr","A length, so the answer carries cm and not cm²"],
  ["**Sector area**, θ in degrees","(θ/360) × πr²","The sector is bounded by two radii and the arc; the segment is bounded by a chord and the arc"],
  ["**Sector area from the arc**","½ × r × arc = ½rl","The circle's own ½ × base × height"],
  ["**Perimeter of a sector**","arc + 2r","Two radii, not one, and never the chord"],
  ["**Arc and sector in radians**","l = rθ and area = ½r²θ","Only when θ is in radians — and the half is the part that gets dropped"],
  ["**Minor segment**","(θ/360)πr² − ½r²sinθ","It is sector − triangle OAB; stopping at the sector is the trap"],
  ["**Segment at θ = 60°**","r²(π/6 − √3/4)","Triangle OAB is equilateral, so it is (√3/4)r²"],
  ["**Segment at θ = 90°**","r²(π/4 − ½)","Triangle OAB is right-angled with both legs `r`, so it is ½r²"],
  ["**Segment at θ = 120°**","r²(π/3 − √3/4)","½r²sin120° is again (√3/4)r², the same triangle as at 60°"],
  ["**Major segment**","πr² − minor segment","Equivalently major sector + triangle — the triangle is *added* here, not subtracted"],
  ["**Ring or annulus**","π(R² − r²) = π(R + r)(R − r)","The width is R − r, but the area is **not** π(R − r)²"],
  ["**Circle inscribed in a square** of side `a`","r = a/2, so circle : square = π : 4","About 11 : 14 — the circle covers roughly 78.5% of the square"],
  ["**Square inscribed in a circle** of radius `r`","side r√2, area 2r², so circle : square = π : 2","The square's diagonal is the circle's diameter"],
  ["**Equilateral triangle** of side `a`","incircle r = a/(2√3), circumcircle R = a/√3","R = 2r, so those two circles' areas are 1 : 4"],
  ["**Radius raised by x%**","area rises by (2x + x²/100)%","Area goes as the square of the radius, so a linear rise is never the answer"],
  ["**Revolutions of a wheel**","distance ÷ circumference","Convert km or m to cm before dividing"]
 ]},

 {careful:"**The sector is not the segment.** A sector is bounded by two radii and the arc; a segment is bounded by a chord and the arc. The segment is what is left when the triangle OAB is cut off the sector, so **segment = (θ/360)πr² − ½r²sinθ**. Stopping at the sector is the single commonest wrong tick in this topic, and the sector's value is always offered as an option."},

 {careful:"**A semicircle's perimeter is πr + 2r, not πr.** The diameter closes the figure, so it is part of the boundary. The same goes for a quadrant, `½πr + 2r`, and for a sector, `arc + 2r`. Half of a circle's *area* is `½πr²`, but half of a circle's *circumference* is not its perimeter."},

 {careful:"**π(R² − r²) is not π(R − r)².** With `R = 21 cm` and `r = 14 cm` the first is `770 cm²` and the second is `154 cm²`. Factorise instead: `π(R + r)(R − r)` turns the subtraction into one multiplication. And watch the units — an area answer offered where a length was asked, or the reverse, is the other half of the trap in this chapter."},

 {h:"THE CIRCLE AND THE EQUILATERAL TRIANGLE", dia:"c-circle-in-equi",
  cap:"For an equilateral triangle of side `a` the inscribed circle has `r = a/(2√3)` and the circumscribed circle has `R = a/√3`. So `R = 2r`, and the two circles' areas, going as the square of the radius, are in the ratio `1 : 4`."},

 {h:"QUESTIONS — circle, sector, segment and ring",
  mcq:[
  {q:"The area of a circle whose circumference is `C` is:",
   o:["C²/4π","C²/2π","C²/π","2πC"],
   a:0,
   why:"**C = 2πr, so r = C/2π and area = πr² = π × C²/4π² = C²/4π.** Option B is what comes of squaring the C but not the 2, leaving `2π²` in the denominator instead of `4π²`. Option D multiplies a length by a length and is not an area formula at all.",
   tag:"Area from C"},

  {q:"The perimeter of a semicircle of radius `r` is:",
   o:["πr","πr + 2r","2πr + 2r","½πr + 2r"],
   a:1,
   why:"**Perimeter of a semicircle = πr + 2r = r(π + 2).** The curved part is half the circumference, `πr`, and the diameter `2r` closes the figure, so it counts too. Option A is the arc alone and is the standard slip; option D is the quadrant's perimeter, `½πr + 2r`.",
   tag:"Semicircle"},

  {q:"A semicircular sheet has radius `7 cm`. Its area is:",
   o:["38.5 cm²","36 cm","77 cm²","154 cm²"],
   a:2,
   why:"**Area of a semicircle = ½πr²** = ½ × (22/7) × 49 = `77 cm²`, taking π = 22/7. Option D is the whole circle, `154 cm²`; option A is the quadrant, ¼πr² = 38.5 cm². Option B, `36 cm`, is the semicircle's **perimeter**, πr + 2r = 22 + 14 — a length offered where an area was asked.",
   tag:"Semicircle"},

  {q:"The area of a circle is `616 cm²`. Its circumference is:",
   o:["44 cm","28 cm","14 cm","88 cm"],
   a:3,
   why:"**Area = πr², so r = √(A/π)**, and with π = 22/7, r² = 616 × 7/22 = 196, giving r = 14 cm. Then **C = 2πr** = 2 × (22/7) × 14 = `88 cm`. Option A is `πr`, half the circumference; option B is the diameter `28 cm`; option C is the radius itself, which the question did not ask for.",
   tag:"Area to C"},

  {q:"In a circle of radius `35 cm`, the length of an arc that subtends `72°` at the centre is:",
   o:["44 cm","22 cm","770 cm²","110 cm"],
   a:0,
   why:"**Arc = (θ/360) × 2πr** = (72/360) × 2 × (22/7) × 35 = (1/5) × 220 = `44 cm`, with π = 22/7. Option C is the **sector's area**, (θ/360)πr² = 770 cm² — an area offered where a length was asked, and the most tempting wrong tick here. Option B uses `πr` in place of `2πr`, and option D is `πr` with the θ/360 forgotten.",
   tag:"Arc length"},

  {q:"A sector of a circle of radius `r` has a central angle of `θ` degrees. Its area is:",
   o:["(θ/360) × 2πr","(θ/360) × πr²","(θ/180) × πr²","½r²θ"],
   a:1,
   why:"**Area of a sector = (θ/360) × πr²** — the same fraction of the circle that θ is of 360°. Option A is the **arc length**, which is the same fraction of `2πr`, and swapping the two is the standard confusion. Option D, `½r²θ`, is correct only when θ is in **radians**, not degrees.",
   tag:"Sector area"},

  {q:"The arc of a sector is `22 cm` long and the radius is `14 cm`. The area of the sector is:",
   o:["77 cm²","308 cm²","154 cm²","616 cm²"],
   a:2,
   why:"**Area of a sector = ½ × r × arc**, which is the circle's own ½ × base × height. ½ × 14 × 22 = `154 cm²`. Option B is `r × arc` with the half forgotten — the commonest slip on this formula; option A uses half the radius by mistake; option D is the whole circle, πr² = 616 cm² with π = 22/7.",
   tag:"½ × r × arc"},

  {q:"In the figure, OAB is a sector of a circle of radius `21 cm` with the central angle `θ = 60°`. Its perimeter is:",
   o:["22 cm","43 cm","231 cm²","64 cm"],
   a:3,
   why:"**Perimeter of a sector = arc + 2r**, because the two bounding radii are part of the boundary. The arc is (60/360) × 2 × (22/7) × 21 = `22 cm`, so the perimeter is 22 + 42 = `64 cm`, taking π = 22/7. Option A is the arc alone; option B adds only one radius; option C is the sector's **area**, 231 cm².",
   tag:"Sector perimeter",
   d:"c-arc-sector"},

  {q:"In a circle of radius `r`, an arc subtends an angle of `θ` **radians** at the centre. The length of the arc and the area of the sector are:",
   o:["l = rθ and area = ½r²θ","l = ½rθ and area = r²θ","l = rθ and area = r²θ","l = 2rθ and area = ½r²θ"],
   a:0,
   why:"**In radians, l = rθ and area = ½r²θ.** The second follows from the first through **area = ½ × r × arc** = ½ × r × rθ. Option C drops the half, which is the usual slip. In degrees the same two results read `(θ/360) × 2πr` and `(θ/360) × πr²`, and mixing the degree form with the radian form is what the question is testing.",
   tag:"Radians"},

  {q:"A chord of a circle of radius `r` subtends an angle `θ` at the centre. The area of the minor segment it cuts off is:",
   o:["(θ/360)πr²","(θ/360)πr² − ½r²sinθ","(θ/360)πr² + ½r²sinθ","πr² − (θ/360)πr²"],
   a:1,
   why:"**Segment = sector − triangle = (θ/360)πr² − ½r²sinθ**, the triangle OAB having two sides `r` with θ between them. Option A is the sector itself — the result one step before the end, and the commonest wrong tick in this topic. Option D is the **major sector**, what is left of the circle outside the minor one.",
   tag:"Segment"},

  {q:"In the figure, the chord AB subtends a right angle at the centre O of a circle of radius `r`, and the minor segment is shaded. Its area is:",
   o:["r²(π/4 − ½)","r²(π/4 + ½)","πr²/4","r²(π/2 − 1)"],
   a:0,
   why:"**Segment = (θ/360)πr² − ½r²sinθ.** At θ = 90° the sector is πr²/4 and the triangle OAB is right-angled with both legs `r`, so it is ½r²; the segment is **r²(π/4 − ½)**. Option C is the quadrant, the sector alone with the triangle never taken off; option D is twice the answer, `r²(π/2 − 1)`. π is left standing because 22/7 would not simplify here.",
   tag:"Segment at 90°",
   d:"c-segment-area"},

  {q:"A chord subtends `60°` at the centre of a circle of radius `6 cm`. The area of the minor segment is:",
   o:["6π cm²","9√3 − 6π cm²","6π − 9√3 cm²","12π − 9√3 cm²"],
   a:2,
   why:"**Segment = (θ/360)πr² − ½r²sinθ = r²(π/6 − √3/4)** at θ = 60°, because triangle OAB is then equilateral and equals (√3/4)r². With r = 6 that is 36π/6 − 36√3/4 = `6π − 9√3 cm²`, and π is left in because 22/7 would not simplify against the √3. Option A is the sector alone; option B is the same two terms the wrong way round, which would be negative; option D is the 120° segment.",
   tag:"Segment at 60°"},

  {q:"A chord subtends `120°` at the centre of a circle of radius `r`. The area of the **major** segment is:",
   o:["r²(π/3 − √3/4)","r²(2π/3 − √3/4)","2πr²/3","r²(2π/3 + √3/4)"],
   a:3,
   why:"**Major segment = circle − minor segment**, and the minor segment at 120° is `r²(π/3 − √3/4)`. So the answer is πr² − r²(π/3 − √3/4) = **r²(2π/3 + √3/4)**. The triangle is **added**, because it was cut out of the minor part and therefore belongs to the major part — option B, with a minus, is the trap. Option A is the minor segment itself and option C is the major sector, `2πr²/3`, with the triangle left out.",
   tag:"Major segment"},

  {q:"A circular ring has outer radius `R` and inner radius `r`. Its area is:",
   o:["π(R − r)²","π(R² − r²)","2π(R − r)","π(R + r)²"],
   a:1,
   why:"**Area of a ring = π(R² − r²) = π(R + r)(R − r).** Option A is the area of a circle whose radius is the ring's **width**, and `(R − r)²` is not `R² − r²` — this is the standard slip. Option C is the difference of the two **circumferences**, `2πR − 2πr`, which is a length.",
   tag:"Annulus"},

  {q:"In the figure, the shaded ring between two concentric circles has outer radius `21 cm` and inner radius `14 cm`. Its area is:",
   o:["770 cm²","154 cm²","1386 cm²","44 cm"],
   a:0,
   why:"**Area of a ring = π(R² − r²) = π(R + r)(R − r)** = (22/7) × 35 × 7 = `770 cm²`, taking π = 22/7. Option B is `π(R − r)²` = (22/7) × 49 = 154 cm², the trap of squaring the width instead of subtracting the squares. Option C is the outer circle alone, `1386 cm²`; option D is the difference of the circumferences, `44 cm`.",
   tag:"Annulus",
   d:"c-annulus"},

  {q:"In the figure, a circle is inscribed in a square of side `a`. The ratio of the area of the circle to the area of the square is:",
   o:["π : 2","1 : 2","π : 4","2 : π"],
   a:2,
   why:"The circle's diameter is the side of the square, so `r = a/2` and the **circle is πa²/4 against the square's a², a ratio of π : 4** — about 11 : 14. Option A, `π : 2`, is the ratio for the other configuration, a square inscribed **in** a circle, and keeping the two apart is the whole question. Option D is the correct ratio inverted.",
   tag:"Circle in square",
   d:"c-in-square"},

  {q:"In the figure, a square is inscribed in a circle of radius `r`. The area of the square is:",
   o:["2r²","r²","4r²","r²√2"],
   a:0,
   why:"The square's diagonal is the circle's diameter `2r`, and the **area of a square from its diagonal is d²/2**, so the area is (2r)²/2 = `2r²`. Option C, `4r²`, is the square **circumscribing** the circle, whose side is 2r — the adjacent configuration. Since the circle is πr², the ratio here is circle : square = π : 2.",
   tag:"Square in circle",
   d:"c-circum-square"},

  {q:"An equilateral triangle has an inscribed circle and a circumscribed circle. The ratio of the area of the inscribed circle to the area of the circumscribed circle is:",
   o:["1 : 2","1 : 4","1 : 3","1 : 9"],
   a:1,
   why:"For an equilateral triangle of side `a`, **the inradius is a/(2√3) and the circumradius is a/√3**, so `R = 2r`. Areas go as the square of the radius, so the ratio is **1 : 4**. Option A, `1 : 2`, is the ratio of the radii mistaken for the ratio of the areas, and it is the answer most often ticked.",
   tag:"Equilateral circles"},

  {q:"If the radius of a circle is increased by `20%`, its area increases by:",
   o:["20%","40%","44%","21%"],
   a:2,
   why:"**When the radius rises by x%, the area rises by (2x + x²/100)%**, because area goes as the square of the radius. Here 2(20) + 400/100 = 40 + 4 = `44%`. Option B is the answer with the `x²/100` term dropped — the commonest slip; option A is the rise in the radius itself, which is also the rise in the circumference.",
   tag:"Percentage change"},

  {q:"If the circumference of a circle is doubled, its area becomes:",
   o:["double","three times","√2 times","four times"],
   a:3,
   why:"**C = 2πr**, so doubling the circumference doubles the radius, and **area = πr²** goes as the square of the radius — the area becomes **four times** as big. Option A carries the linear factor straight into the area, which is the trap. Read the other way, a circle of four times the area has twice the radius and twice the circumference.",
   tag:"Scaling"},

  {q:"A wheel of diameter `70 cm` covers a distance of `1.1 km`. The number of revolutions it makes is:",
   o:["500","250","1000","50"],
   a:0,
   why:"**Revolutions = distance ÷ circumference**, and the circumference is πd = (22/7) × 70 = `220 cm` with π = 22/7. The distance 1.1 km is 110000 cm, so the count is 110000 ÷ 220 = `500`. Option B treats the 70 cm as the **radius**, giving a circumference of 440 cm — the diameter-for-radius slip. Option C uses `πr` = 110 cm, and option D comes of converting 1.1 km to 11000 cm.",
   tag:"Revolutions"},

  {q:"In the figure, a quadrant of a circle of radius `14 cm` is drawn with its two bounding radii. Its perimeter is:",
   o:["22 cm","36 cm","50 cm","154 cm²"],
   a:2,
   why:"**Perimeter of a quadrant = ¼ of the circumference + the two radii = ½πr + 2r.** The arc is ½ × (22/7) × 14 = 22 cm, so the perimeter is 22 + 28 = `50 cm`, taking π = 22/7. Option A is the arc alone; option B adds only one radius; option D is the quadrant's **area**, ¼πr² = 154 cm² — an area where a length was asked.",
   tag:"Quadrant",
   d:"c-quadrant"},

  {q:"The area of a sector of a circle of radius `14 cm` with a central angle of `90°` is:",
   o:["616 cm²","44 cm²","308 cm²","154 cm²"],
   a:3,
   why:"**Area of sector = (θ/360) × πr²** = (90/360) × (22/7) × 14² = ¼ × 616 = `154 cm²`. Option A (616) is the full circle's area — using the whole 360° instead of the given 90° — and option C (308) is the semicircle's area.",
   tag:"Sector area"},

  {q:"The perimeter of a sector of a circle of radius `21 cm` with a central angle of `60°` is:",
   o:["22 cm","42 cm","44 cm","64 cm"],
   a:3,
   why:"**Perimeter of a sector = 2r + arc length = 2r + (θ/360) × 2πr** = 42 + (60/360) × 2 × (22/7) × 21 = 42 + 22 = `64 cm`. Option A (22) is the arc length alone, forgetting the two radii that close the sector.",
   tag:"Sector perimeter"},

  {q:"The area of a circle whose diameter is `28 cm` is:",
   o:["2464 cm²","616 cm²","176 cm²","88 cm²"],
   a:1,
   why:"**Area = πr²** = (22/7) × 14² = (22/7) × 196 = `616 cm²`. Option A (2464) is what using the diameter (28) instead of the radius (14) gives — four times the correct area — and that is the standard slip.",
   tag:"Area from diameter"},

  {q:"Two concentric circles have radii `14 cm` and `7 cm`. The area of the ring between them is:",
   o:["154 cm²","462 cm²","308 cm²","616 cm²"],
   a:1,
   why:"**Area of ring = π(R² − r²)** = (22/7)(196 − 49) = (22/7) × 147 = `462 cm²`. Option D (616) is the area of the outer circle alone, ignoring the inner hole; option A (154) is the area of the inner circle.",
   tag:"Annulus"},

  {q:"A wire is bent into a circle of radius `7 cm`. If the same wire is bent into a square, the side of the square is:",
   o:["7 cm","14 cm","11 cm","22 cm"],
   a:2,
   why:"**The perimeter stays the same.** Circumference = 2πr = 2 × (22/7) × 7 = 44 cm. Side of square = 44/4 = `11 cm`. Option A (7) is the radius itself; option D (22) is half the perimeter.",
   tag:"Wire reshaping"},

  {q:"The ratio of the areas of two circles whose radii are in the ratio `3 : 5` is:",
   o:["3 : 5","6 : 10","9 : 25","27 : 125"],
   a:2,
   why:"**Areas of circles are in the ratio of the squares of their radii**: 3² : 5² = `9 : 25`. Option A takes the areas to be directly proportional to the radii, which is the standard mistake — the area depends on the **square** of the radius.",
   tag:"Ratio of areas"}
],
  note:"Two checks will catch most of the marks lost in this topic. First, read the unit on your answer: a length must come out in cm and an area in cm². Second, ask whether the question wanted the sector or the segment, the arc or the perimeter, the radius or the diameter."}
]
},

/* ============================================================ 4 — 2D: paths, borders and shaded regions (28 questions) */
{
id:"men-2d-paths", n:"2D: paths, borders and shaded regions", hy:1,
w:"Paths round a field, roads crossing it, grazing at a corner, and the shaded part of a figure — every one of them a single subtraction, with the two shapes to subtract named for you.",
quick:[
 "Every question in this chapter is one subtraction: **the shaded area = the area of the whole figure − the area of what has been taken out of it.** Name the two shapes first, then subtract. Nothing else is being tested.",
 "A path of width `w` **outside** a field `l × b`: **area = (l + 2w)(b + 2w) − lb = 2w(l + b) + 4w²**. **Inside** the field: **lb − (l − 2w)(b − 2w) = 2w(l + b) − 4w²**. The width is added at both ends, which is where every `2w` comes from.",
 "Two roads of width `w` crossing a field `l × b` at right angles: **area = lw + bw − w²**. The little `w²` square where they cross belongs to both roads, so adding the two strips counts it twice and it comes off once.",
 "A path of width `w` round a circular field of radius `r`: **area = π(R² − r²) with R = r + w**, and writing `R² − r² = (R + r)(R − r)` saves the squaring.",
 "**Grazing: `¼πr²` at the corner of a square field, `½πr²` against a long straight wall, and `(60/360)πr² = πr²/6` at the corner of an equilateral triangular field.** The fraction is always the interior angle at the peg divided by `360°`.",
 "**Fencing is bought by the metre and goes with the perimeter; paving is bought by the square metre and goes with the area.** For tiles or slabs it is the area of the floor divided by the area of one tile, and any fraction rounds **up**.",
 "For one fixed perimeter the **circle** encloses the most, the square next, the **equilateral triangle** the least. A wire `88` cm long gives a circle of `616` cm² against a square of `484` cm²."
],
blocks:[
 {h:"THE SHEET — the whole figure, what comes out of it, and the slip",
  cols:["Asked as","The formula","What it is confused with"],
  rows:[
  ["**Path of width `w` outside a field `l × b`**","(l + 2w)(b + 2w) − lb = 2w(l + b) + 4w²","Stopping at 2w(l + b) leaves out the four corner squares"],
  ["**Path of width `w` inside the same field**","lb − (l − 2w)(b − 2w) = 2w(l + b) − 4w²","The inside path is the *smaller* of the two, by 8w²"],
  ["**Two roads of width `w` crossing at right angles**","lw + bw − w²","lw + bw counts the crossing square twice; and what is left for the crop is lb − (lw + bw − w²)"],
  ["**Path of width `w` round a circular field**","π(R² − r²) with R = r + w","πw² is not it, and 2πrw is only the straightened-out strip"],
  ["**Width `w` of an outside path from its area `A`**","Solve 4w² + 2w(l + b) = A","Dividing A by 2(l + b) drops the corner term"],
  ["**Fencing a field**","Cost = perimeter × rate per metre","Paving the same field = area × rate per square metre"],
  ["**Number of square tiles or slabs**","(area of the floor) ÷ (area of one tile), rounded **up**","Dividing by the tile's *side* instead of by its area"],
  ["**Grazing at a corner of a square field**","¼πr²","½πr² is the wall case and πr² the open field"],
  ["**Grazing against a long straight wall**","½πr²","The peg stands on the wall, so exactly half the circle is lost"],
  ["**Grazing at a corner of an equilateral triangular field**","(60/360)πr² = πr²/6","Taking a quarter, as though the corner were a square's"],
  ["**Largest circle cut from a rectangle `l × b`**","r = (the shorter side)/2; left over = lb − πr²","Half the longer side gives a circle too wide to fit"],
  ["**Largest square inside a circle of radius `r`**","Its diagonal is 2r, so area = (2r)²/2 = 2r²","4r² treats the diameter as the side"],
  ["**Four quadrants of radius `a/2` at the corners of a square of side `a`**","Together they make one circle, so the part left bare is a² − πa²/4","Four whole circles, or four quadrants of radius a"],
  ["**Two quadrants of radius `a` from opposite corners of a square of side `a`**","They cover the square exactly, so the leaf they share is a²(π/2 − 1)","One quadrant minus half the square, which is only half the leaf"],
  ["**Semicircle on a side of length `s`**","πs²/8, because r = s/2","Four semicircles on a square of side a come to πa²/2, not πa²/4"],
  ["**Semicircles on the three sides of a right triangle**","The one on the hypotenuse equals the other two together","Each area is πs²/8, and a² + b² = c² does the rest"],
  ["**One wire of length `P` bent into three shapes**","Circle P²/4π, square P²/16, equilateral triangle P²/(12√3)","Circle the largest, equilateral triangle the smallest — never the other way round"]
 ]},

 {careful:"A path **outside** a field and a path **inside** it, of the same width, are not the same path. Outside comes to `2w(l + b) + 4w²` and inside to `2w(l + b) − 4w²`, so the outside path is larger by `8w²`. Read the question for the word *outside* or *inside* before writing a single number down."},

 {careful:"In the crossroads formula **lw + bw − w²** the `w²` is the small square where the two roads cross. It belongs to both strips, so `lw + bw` has counted it twice and it must be taken off **once**, not twice. And the roads are not the field: if the question asks what is left for the crop, it is `lb − (lw + bw − w²)`."},

 {careful:"A tethered animal does not graze a circle. At the **corner of a square field** the two fences cut the circle to a quarter, `¼πr²`; against **one straight wall** to a half, `½πr²`; at the **corner of an equilateral triangular field** to `1/6` of it, because the interior angle there is `60°`. The whole `πr²` is the option put there for anyone who did not look at the corner."},

 {h:"QUESTIONS — one subtraction at a time",
  mcq:[
  {q:"A path of uniform width `w` is laid all round the outside of a rectangular field `l` by `b`. The area of the path is:",
   o:["(l + 2w)(b + 2w) − lb","lb − (l − 2w)(b − 2w)","2w(l + b)","(l + w)(b + w) − lb"],
   a:0,
   why:"**Area of an outside path = (l + 2w)(b + 2w) − lb**, which multiplies out to **2w(l + b) + 4w²**. Option B is the *inside* path, the same expression with `4w²` subtracted instead of added. Option C is that expression with the four corner squares forgotten, and option D adds the width at one end of each side only instead of both.",
   tag:"Outside path"},

  {q:"A rectangular field is `50` m long and `30` m wide. A path `2` m wide is laid all round it on the outside. The area of the path is:",
   o:["304 m²","336 m²","320 m²","164 m²"],
   a:1,
   why:"**Area = (l + 2w)(b + 2w) − lb** = 54 × 34 − 50 × 30 = 1836 − 1500 = `336 m²`. Option A, `304 m²`, is the path laid on the *inside* instead; option C, `320 m²`, is `2w(l + b) = 4 × 80` with the four corner squares `4w² = 16 m²` left out. Option D adds the `2` m once rather than at both ends.",
   tag:"Outside path",
   d:"f-path-out", dcap:"The path lies outside the field, so every side grows by `w` at each end."},

  {q:"A rectangular park `60` m by `40` m has a path `3` m wide running all round it on the inside, along its border. The area of the path is:",
   o:["636 m²","600 m²","564 m²","291 m²"],
   a:2,
   why:"**Area of an inside path = lb − (l − 2w)(b − 2w)** = 2400 − 54 × 34 = 2400 − 1836 = `564 m²`. Option A is the same path taken on the outside, `66 × 46 − 2400 = 636 m²`; option B is `2w(l + b) = 600 m²` without subtracting the corner term `4w² = 36 m²`. Option D shrinks each side by `3` m instead of by `3` m at both ends.",
   tag:"Inside path",
   d:"f-path-in", dcap:"The path lies inside the field, so the clear rectangle is `l − 2w` by `b − 2w`."},

  {q:"Two roads, each of width `w`, cross a rectangular field `l` by `b` at right angles, one along the length and one along the breadth. The area of the roads is:",
   o:["lw + bw","w(l + b + w)","lw + bw − 2w²","lw + bw − w²"],
   a:3,
   why:"**Area of the two roads = lw + bw − w².** Each road is a rectangle, `l × w` and `b × w`, but the `w × w` square where they cross lies in both, so it is counted twice by the sum and must come off once. Option A is that sum with the double-counted square left in — the commonest answer on the paper — and option C takes it off twice.",
   tag:"Crossroads"},

  {q:"Two roads, each `4` m wide, run through a rectangular field `80` m by `60` m, one parallel to its length and the other parallel to its breadth. The area covered by the roads is:",
   o:["544 m²","560 m²","528 m²","4,256 m²"],
   a:0,
   why:"**Area = lw + bw − w²** = 80 × 4 + 60 × 4 − 4² = 320 + 240 − 16 = `544 m²`. Option B, `560 m²`, is the crossing square counted twice; option C takes it off twice. Option D, `4,256 m²`, is the field *less* the roads — the right subtraction done for the wrong quantity, and it is the trap for anyone who reads the question too fast.",
   tag:"Crossroads",
   d:"f-crossroads", dcap:"The shaded square in the middle belongs to both roads."},

  {q:"A circular field of radius `21` m has a path `7` m wide round it on the outside. Taking π = 22/7, the area of the path is:",
   o:["924 m²","1,078 m²","154 m²","2,464 m²"],
   a:1,
   why:"**Area = π(R² − r²) with R = r + w** = (22/7)(28² − 21²) = (22/7)(784 − 441) = (22/7)(343) = `1,078 m²`. Option A, `924 m²`, is `2πrw` — the path straightened out into a strip, which under-counts because the outer edge is longer than the inner one. Option C is `πw²` and option D is `πR²`, the whole field with its path.",
   tag:"Circular path"},

  {q:"An animal is tethered by a rope of length `r` at one corner of a square field whose side is longer than the rope. The area it can graze is:",
   o:["πr²","½πr²","¼πr²","(1/3)πr²"],
   a:2,
   why:"At a corner of a square the interior angle is `90°`, so the animal sweeps `90/360 = ¼` of a circle: **grazed area = ¼πr².** Option A is the whole circle, which is what it would graze in the open; option B, `½πr²`, is the half circle it would graze against one straight wall. The fraction is always the angle at the peg divided by `360°`.",
   tag:"Grazing",
   d:"f-grazing", dcap:"Two fences meet at the peg, so three quarters of the circle is cut away."},

  {q:"A goat is tethered by a `14` m rope at one corner of a square field of side `25` m. Taking π = 22/7, the area it can graze is:",
   o:["616 m²","308 m²","196 m²","154 m²"],
   a:3,
   why:"**Grazed area at a corner = ¼πr²** = ¼ × (22/7) × 14² = ¼ × (22/7) × 196 = `154 m²`. Option A, `616 m²`, is the whole circle `πr²` and option B, `308 m²`, the half circle — the wall case, not the corner case. Option C is simply `r²`, the square on the rope, which is an area but not this one.",
   tag:"Grazing"},

  {q:"A cow is tied by a `7` m rope to a peg in the middle of a long straight wall. Taking π = 22/7, the area it can graze is:",
   o:["77 m²","154 m²","38.5 m²","49 m²"],
   a:0,
   why:"The wall takes away exactly half the circle, so **grazed area = ½πr²** = ½ × (22/7) × 49 = `77 m²`. Option B is the full circle `πr² = 154 m²`, which would be right only with no wall at all; option C is the quarter circle `¼πr²`, which is the *corner* case and the tempting answer here. Option D is `r²`.",
   tag:"Grazing"},

  {q:"A cow is tied by a `6` m rope at one corner of an equilateral triangular field of side `20` m. The area it can graze is:",
   o:["9π m²","6π m²","18π m²","36π m²"],
   a:1,
   why:"The interior angle of an equilateral triangle is `60°`, so the animal sweeps `60/360 = 1/6` of a circle: **area = (60/360)πr² = πr²/6** = π × 36/6 = `6π m²`. Option A, `9π m²`, is a quarter circle — the square-field answer applied to a triangular field, and the standard slip here. Option C is a half and option D the whole circle. π is left in because `6` is not chosen to suit 22/7.",
   tag:"Grazing"},

  {q:"The largest possible circle is cut out of a rectangular sheet `21` cm by `14` cm. Taking π = 22/7, the area of the sheet left over is:",
   o:["154 cm²","294 cm²","140 cm²","44 cm²"],
   a:2,
   why:"The circle's diameter is the **shorter** side, so `r = 7` cm and **area of the circle = πr²** = (22/7)(49) = 154 cm². The sheet is 21 × 14 = 294 cm², so the four corner pieces come to 294 − 154 = `140 cm²`. Option A is the circle itself — the quantity the question did not ask for — and option D is the circumference `2πr = 44` cm, a length dressed up with an area's unit.",
   tag:"Largest circle",
   d:"f-circle-in-rect", dcap:"The circle touches the two long sides, so its diameter is the shorter side."},

  {q:"The largest square that can be drawn inside a circle of radius `7` cm has area:",
   o:["196 cm²","154 cm²","49 cm²","98 cm²"],
   a:3,
   why:"The square's **diagonal** is the diameter, so d = 14 cm, and **area of a square from its diagonal = d²/2** = 196/2 = `98 cm²`. Option A, `196 cm²`, is `d²` — the diameter taken as the *side* instead of the diagonal, which is the commonest error in this question. Option B is the circle's own area and option C is `r²`.",
   tag:"Square in circle"},

  {q:"A quadrant of radius `7` cm is drawn at each of the four corners of a square of side `14` cm. Taking π = 22/7, the area of the square left uncovered is:",
   o:["42 cm²","154 cm²","196 cm²","10.5 cm²"],
   a:0,
   why:"Four quadrants of the same radius make exactly **one circle**, so they cover `πr² = (22/7)(49) = 154 cm²` and the square is 14² = 196 cm²; **uncovered = a² − πa²/4** = 196 − 154 = `42 cm²`. Option B is the covered part, not the uncovered part, and option C is the whole square. Option D is `42 ÷ 4`, one of the four leftover corner pieces.",
   tag:"Four quadrants"},

  {q:"Two quadrants of radius `14` cm are drawn inside a square of side `14` cm, one centred at each end of a diagonal. Taking π = 22/7, the area common to the two quadrants is:",
   o:["56 cm²","112 cm²","154 cm²","98 cm²"],
   a:1,
   why:"Each quadrant is `¼πa² = 154 cm²`, and two of them cover the square exactly, so the overlap is their total less the square: **a²(π/2 − 1)** = 2(154) − 196 = 196(11/7 − 1) = `112 cm²`. Option C, `154 cm²`, is one quadrant alone — the step before the subtraction. Option A, `56 cm²`, is one quadrant minus half the square, which is only half of the overlap, and option D is half the square.",
   tag:"Common leaf"},

  {q:"A semicircle is drawn outwards on each of the four sides of a square of side `14` cm. Taking π = 22/7, the total area of the whole figure is:",
   o:["308 cm²","350 cm²","504 cm²","812 cm²"],
   a:2,
   why:"Each semicircle has `r = 7` cm, so **area of one semicircle = ½πr²** = ½ × (22/7) × 49 = 77 cm², and four of them come to 308 cm². With the square, **total = a² + 4(½πr²)** = 196 + 308 = `504 cm²`. Option A leaves the square out; option B, `350 cm²`, counts the four semicircles as one circle (`154 cm²`) instead of two; option D uses whole circles.",
   tag:"Four semicircles"},

  {q:"Semicircles are drawn outwards on all three sides of a right triangle whose legs are `6` cm and `8` cm. The area of the semicircle on the hypotenuse is:",
   o:["equal to the sum of the areas of the other two","twice the sum of the areas of the other two","half the sum of the areas of the other two","smaller than the sum of the areas of the other two, because `10` is less than `6 + 8`"],
   a:0,
   why:"**A semicircle on a side of length `s` has r = s/2, so its area is ½π(s/2)² = πs²/8** — which goes as the **square** of the side, not as the side. The legs give π(36 + 64)/8 = `12.5π` cm² and the hypotenuse, `10` cm, gives π(100)/8 = `12.5π` cm², so the two are equal, straight out of `a² + b² = c²`. Option D is the trap: comparing the lengths `10` and `6 + 8` instead of their squares, which is the same mistake as thinking areas scale with a linear dimension.",
   tag:"Semicircles on sides"},

  {q:"A wire `88` cm long is bent into a square, and then the same wire is bent into a circle. Taking π = 22/7, the circle encloses more area than the square by:",
   o:["484 cm²","616 cm²","1,100 cm²","132 cm²"],
   a:3,
   why:"As a circle, `2πr = 88` gives r = 14 cm and **area = πr² = 616 cm²**; as a square, the side is 88/4 = 22 cm and **area = a² = 484 cm²**. The difference is `132 cm²`. Options A and B are the two areas themselves — the step before the last one — and option C adds them instead of subtracting. For one fixed perimeter the circle always wins.",
   tag:"Fixed perimeter"},

  {q:"A square, a circle and an equilateral triangle are each made from one wire of the same length. The least area is enclosed by:",
   o:["the circle","the square","the equilateral triangle","all three enclose the same area"],
   a:2,
   why:"For a perimeter `P` the three areas are **circle P²/4π ≈ 0.0796P², square P²/16 = 0.0625P², equilateral triangle P²/(12√3) ≈ 0.0481P²**, so the **equilateral triangle** encloses the least and the circle the most. The fewer the sides, the worse the shape does; option A is the trap for anyone who remembers that the question is about the circle but not which way round it goes.",
   tag:"Fixed perimeter"},

  {q:"A rectangular field is `45` m by `35` m. Fencing it costs ₹12 per metre. The total cost of the fencing is:",
   o:["₹960","₹1,920","₹18,900","₹3,840"],
   a:1,
   why:"Fencing is bought by the metre, so it goes with the **perimeter = 2(l + b)** = 2(45 + 35) = 160 m, and the cost is 160 × 12 = `₹1,920`. Option C, `₹18,900`, uses the **area** `45 × 35 = 1575 m²` instead — the single commonest mistake in cost questions, because the rate reads the same whether it is per metre or per square metre. Option A is `(l + b) × 12`, the perimeter halved, and option D is the perimeter doubled.",
   tag:"Fencing cost"},

  {q:"A courtyard `5` m by `4` m is to be paved with square slabs of side `30` cm. The number of slabs that must be bought is:",
   o:["222","200","67","223"],
   a:3,
   why:"**Number of slabs = (area of the floor) ÷ (area of one slab)** = 20 m² ÷ (0.3 × 0.3) m² = 20/0.09 = 222.2, and a fraction of a slab cannot be laid, so `223` must be bought. Option A is that figure rounded **down**, which leaves a bare patch. Option C, `67`, divides by the slab's *side* instead of its area, and option B treats one slab as 0.1 m².",
   tag:"Tiles and slabs"},

  {q:"A rectangular garden `50` m by `40` m has a path `5` m wide inside it along the border. Paving the path at ₹60 per square metre costs:",
   o:["₹48,000","₹60,000","₹54,000","₹72,000"],
   a:0,
   why:"**Inside path = lb − (l − 2w)(b − 2w)** = 2000 − 40 × 30 = 2000 − 1200 = 800 m², and 800 × 60 = `₹48,000`. Option B, `₹60,000`, prices the path as though it ran *outside* (`60 × 50 − 2000 = 1000 m²`); option C uses `2w(l + b) = 900 m²`, with the corner term forgotten. Option D, `₹72,000`, prices the clear middle `1200 m²` — the part of the garden that is not being paved.",
   tag:"Paving cost"},

  {q:"A square lawn of side `60` m is surrounded by a path of uniform width on the outside. The area of the path is `756` m². Its width is:",
   o:["1.5 m","6 m","3 m","3.15 m"],
   a:2,
   why:"**(60 + 2w)² − 60² = 756**, so (60 + 2w)² = 3600 + 756 = 4356 = 66², giving 60 + 2w = 66 and `w = 3 m`. Written out, the equation is **4w² + 240w − 756 = 0**. Option D, `3.15 m`, is 756 ÷ 240 — the answer when the corner term `4w²` is dropped, and the one that looks nearly right.",
   tag:"Width from area"},

  {q:"A square garden of side `40 m` has a path `5 m` wide all round it on the outside. The area of the path is:",
   o:["400 m²","800 m²","900 m²","500 m²"],
   a:2,
   why:"**Outer side = 40 + 2×5 = 50 m. Area of path = 50² − 40² = 2500 − 1600 = `900 m²`.** Option B (800) is 4 × side × width = 4 × 40 × 5, which misses the four corner squares — the standard slip with paths around a square.",
   tag:"Square outer path"},

  {q:"A circular pond of radius `14 m` has a path `3.5 m` wide inside it along its edge. Taking π = 22/7, the area of the path is:",
   o:["269.5 m²","616 m²","577.5 m²","346.5 m²"],
   a:0,
   why:"**Inner radius = 14 − 3.5 = 10.5 m. Area of path = π(R² − r²) = (22/7)(196 − 110.25) = (22/7) × 85.75 = `269.5 m²`.** Option D (346.5) is π × 10.5² — the area of the inner circle, not the annular path. Option B (616) is the full circle area.",
   tag:"Circular inner path"},

  {q:"A horse is tethered to a corner of a rectangular field by a rope `21 m` long. The field is larger than the rope. Taking π = 22/7, the area the horse can graze is:",
   o:["1386 m²","346.5 m²","693 m²","462 m²"],
   a:1,
   why:"**At a corner of a rectangle the rope sweeps a quarter-circle**: (1/4)πr² = (1/4) × (22/7) × 441 = `346.5 m²`. Option A (1386) is the full circle — the mistake of not seeing that three-quarters of the turn is blocked by the walls.",
   tag:"Corner tether"},

  {q:"Four equal circles of radius `7 cm` are drawn inside a square of side `28 cm`, each touching two sides and two other circles. Taking π = 22/7, the area inside the square but outside the four circles is:",
   o:["784 cm²","616 cm²","392 cm²","168 cm²"],
   a:3,
   why:"**Area of square − 4 × πr² = 28² − 4 × (22/7) × 49 = 784 − 616 = `168 cm²`.** Option B (616) is the total area of the four circles, which is the part being subtracted, not the leftover.",
   tag:"Circles in square"},

  {q:"A rectangular sheet `22 cm` by `14 cm` has the largest possible circle cut from it. Taking π = 22/7, the area of the remaining sheet is:",
   o:["308 cm²","154 cm²","462 cm²","132 cm²"],
   a:1,
   why:"**The largest circle has diameter = shorter side = 14 cm, so r = 7 cm.** Remaining area = 22 × 14 − (22/7) × 49 = 308 − 154 = `154 cm²`. Option A (308) is the rectangle's own area with nothing removed.",
   tag:"Circle from rectangle"},

  {q:"A rope `44 m` long is bent into a circle. Taking π = 22/7, the area enclosed is:",
   o:["616 m²","1386 m²","154 m²","44 m²"],
   a:2,
   why:"**Circumference = 2πr = 44**, so r = 44 × 7/44 = `7 m`. Area = (22/7) × 49 = `154 m²`. Option A (616) uses r = 14, which is what treating the circumference as the diameter gives — the standard confusion between perimeter and diameter.",
   tag:"Rope to circle"}
],
  note:"Every question above is the same instruction: write down the area of the whole figure, write down the area of what has been removed, subtract. If a question felt long, it was the second of those two areas that was not identified."}
]
},

/* ============================================================ 5 — 3D: cube, cuboid and prism (28 questions) */
{
id:"men-3d-cuboid", n:"3D: cube, cuboid and prism", hy:1,
w:"The flat-faced solids — cuboid, cube and right prism — with the four walls against the whole room, the face diagonal against the body diagonal, and the painted cube cut into unit cubes.",
quick:[
 "Cuboid: **V = lbh**, **TSA = 2(lb + bh + hl)**, **LSA = 2h(l + b)** — the four walls — and **diagonal = √(l² + b² + h²)**. A box or tank with no lid is `lb + 2h(l + b)`.",
 "Cube: **V = a³**, **TSA = 6a²**, lateral surface `4a²`, **body diagonal a√3**, face diagonal `a√2`. From the diagonal, `a = d/√3`; from the surface, `a = √(TSA/6)`.",
 "A painted cube cut into n³ small cubes: **`8` with three painted faces, `12(n − 2)` with two, `6(n − 2)²` with one, `(n − 2)³` with none** — and the four counts add to n³, which is the check.",
 "Right prism: **V = base area × height**, **LSA = perimeter of base × height**, **TSA = LSA + 2 × base area**. There is no third anywhere — the third belongs to the pyramid.",
 "Equilateral base of side a: area **(√3/4)a²**. Regular hexagonal base of side a: area **(3√3/2)a²**, because the hexagon is six equilateral triangles of side a.",
 "Every edge multiplied by k: lengths go as k, areas as **k²**, volumes as **k³**. Each edge up 10% puts the surface up `21%` and the volume up `33.1%`.",
 "The largest cube cut from a cuboid has its edge equal to the **smallest** dimension. Bricks in a wall is the wall's volume divided by one brick's, with every length converted to the same unit first."
],
blocks:[
 {h:"THE SHEET — every formula this topic tests",
  cols:["Asked for","The formula","Where it goes wrong"],
  rows:[
  ["**Cuboid — volume**","lbh","No fraction in front. Convert all three lengths to the same unit before multiplying"],
  ["**Cuboid — total surface**","2(lb + bh + hl)","Three different pairs of faces, each pair counted twice. Half of it, `lb + bh + hl`, is always offered as an option"],
  ["**Cuboid — lateral surface, the four walls**","2h(l + b)","The floor and ceiling are the missing `2lb`. Dropping the leading 2 gives h(l + b), the standard slip"],
  ["**Cuboid — diagonal**","√(l² + b² + h²)","The longest rod that fits inside. Not `l + b + h`, and not a face diagonal `√(l² + b²)`"],
  ["**Box or tank with no lid**","lb + 2h(l + b)","One base and four walls. The closed figure 2(lb + bh + hl) counts a lid that is not there"],
  ["**Cube — volume**","a³","From the surface, a = √(TSA/6); from the body diagonal, a = d/√3"],
  ["**Cube — total surface**","6a²","Six faces. The four vertical faces alone are `4a²`, and the twelve edges total `12a` — three different quantities"],
  ["**Cube — face diagonal**","a√2","The diagonal across one square face, from √(a² + a²)"],
  ["**Cube — body diagonal**","a√3","The longest line inside, from √(a² + a² + a²). Half of it, (a√3)/2, is the radius of the sphere that just contains the cube"],
  ["**Cube — surface from the volume**","a = ∛V, then 6a²","V = 512 cm³ gives a = 8 cm and 384 cm². Multiplying the volume by 6 is the slip"],
  ["**Painted cube cut into n³ small cubes**","three faces `8`, two faces `12(n − 2)`, one face `6(n − 2)²`, none `(n − 2)³`","The corner count is always 8, whatever n is. The four counts must add to n³"],
  ["**Largest cube cut from a cuboid**","edge = the smallest dimension","10 × 8 × 6 gives a 6 cm cube of volume 216 cm³, not the middle dimension and not the whole cuboid"],
  ["**Small boxes packed into a big one**","divide edge by edge: (l/l′) × (b/b′) × (h/h′)","The volume ratio over-counts unless every dimension divides exactly"],
  ["**Bricks in a wall, earth out of a pit**","number = volume of the wall ÷ volume of one brick","Convert the metres to centimetres before multiplying, not after"],
  ["**Right prism — volume**","base area × height","Whatever the base. No third in front — the third belongs to the pyramid"],
  ["**Right prism — surfaces**","LSA = perimeter of base × height; TSA = LSA + 2 × base area","The two flat ends are the `2 × base area`, and leaving them out turns a total into a lateral"],
  ["**Prism on an equilateral triangle of side a**","base area (√3/4)a², LSA 3aH","`(√3/2)a` is the triangle's **height**, not its area — the two are confused constantly"],
  ["**Prism on a regular hexagon of side a**","base area (3√3/2)a², LSA 6aH","Six equilateral triangles of side a: 6 × (√3/4)a² = (3√3/2)a²"],
  ["**Every edge multiplied by k**","lengths k, areas k², volumes k³","Each edge up x%: surface up (2x + x²/100)%, volume up more. Doubling an edge multiplies the surface by 4 and the volume by 8"]
 ]},

 {h:"THE THREE LENGTHS IN A BOX", dia:"s-cuboid",
  cap:"An edge, a face diagonal and the body diagonal are three different lengths. The body diagonal `√(l² + b² + h²)` is the longest line that fits inside, and for a cube it is `a√3` while the face diagonal is only `a√2`.",
  note:"The same picture answers the four-walls question: the four upright faces come to `2h(l + b)`, and the floor and ceiling are the `2lb` that the lateral surface leaves out."},

 {careful:"**An area is never an answer to a volume question.** Read the unit before the number: a volume is `cm³` or `m³`, a surface is `cm²` or `m²`, a diagonal is `cm`. Half the wrong ticks in this chapter are the right arithmetic on the wrong quantity — `216 cm²` offered where `216 cm³` was asked, or the four walls `2h(l + b)` offered where the whole surface `2(lb + bh + hl)` was wanted. No question in this topic needs π: a cube, a cuboid and a prism are built from flat faces, and the moment a π appears the solid has become a cylinder, a cone or a sphere."},

 {careful:"**The face diagonal is `a√2`, the body diagonal is `a√3`.** The face diagonal lies in one square face and comes from √(a² + a²); the body diagonal runs corner to opposite corner through the middle and comes from √(a² + a² + a²). Both are called \"the diagonal of a cube\" in careless wording, and whichever one the question wants, the other is always one of the four options. In a cuboid the same distinction is `√(l² + b²)` against `√(l² + b² + h²)`."},

 {careful:"**A prism has no third in front of it.** `V = base area × height` for a prism; `V = (1/3) × base area × height` for a pyramid. The lateral surface of a prism is `perimeter of base × height` — the flat sides laid out side by side as one rectangle — and the total surface adds the two ends, `2 × base area`. A question that names a *right prism* and offers an answer with a third in it is offering the pyramid's formula."},

 {h:"QUESTIONS — cuboid, cube, painted cubes, prism",
  mcq:[
  {q:"The total surface area of a cuboid of length `l`, breadth `b` and height `h` is:",
   o:["lbh","2h(l + b)","lb + bh + hl","2(lb + bh + hl)"],
   a:3,
   why:"**TSA = 2(lb + bh + hl)** — there are three different pairs of congruent faces and each pair is counted twice. Option C is exactly half of that, one face out of each pair, and it is the commonest wrong tick. Option B is the lateral surface `2h(l + b)`, the four upright faces only, and `lbh` is the volume offered where an area was asked.",
   tag:"Cuboid TSA"},

  {q:"A room is 8 m long, 6 m broad and 5 m high. The area of its four walls is:",
   o:["188 m²","140 m²","70 m²","236 m²"],
   a:1,
   why:"**The four walls are the lateral surface, LSA = 2h(l + b)** = 2 × 5 × (8 + 6) = `140 m²`. Option A adds the ceiling, 140 + 48 = 188 m², which is what \"walls and ceiling\" would ask for. Option C drops the leading 2 and option D is the whole closed surface 2(lb + bh + hl) = 2(48 + 30 + 40) = 236 m².",
   tag:"Four walls"},

  {q:"The longest rod that can be placed inside a box 12 cm long, 4 cm broad and 3 cm high is:",
   o:["19 cm","12 cm","5 cm","13 cm"],
   a:3,
   why:"**The longest rod is the body diagonal, √(l² + b² + h²)** = √(144 + 16 + 9) = √169 = `13 cm`. Option A is `l + b + h`, which is longer than anything that fits. Option C, `5 cm`, is the diagonal of the 4 cm × 3 cm face — a **face** diagonal, √(b² + h²), and the standard confusion here — and option B is only the longest edge.",
   tag:"Cuboid diagonal"},

  {q:"A rectangular pit 10 m long, 6 m broad and 3 m deep is dug. The volume of earth taken out is:",
   o:["96 m²","180 m³","216 m²","180 m²"],
   a:1,
   why:"**V = lbh** = 10 × 6 × 3 = `180 m³`. The unit settles it: earth is a volume, so the answer must be in m³, which rules out option D with the same number. Option A is the area of the four sides, 2h(l + b) = 96 m², and option C the whole surface 2(60 + 18 + 30) = 216 m² — both areas offered where a volume was asked.",
   tag:"Cuboid volume"},

  {q:"An open rectangular tank 5 m long, 4 m broad and 2 m deep is to be lined on the inside. The area to be lined is:",
   o:["76 m²","36 m²","56 m²","40 m³"],
   a:2,
   why:"**With no lid the surface is one base plus four walls: lb + 2h(l + b)** = 20 + 2 × 2 × (5 + 4) = 20 + 36 = `56 m²`. Option A is the closed cuboid's 2(lb + bh + hl) = 2(20 + 8 + 10) = 76 m², which counts a lid that is not there — the standard slip on every tank, cistern and open box. Option B is the walls with the base forgotten, and option D is the capacity, 40 m³.",
   tag:"Tank, no lid"},

  {q:"The total surface area of a cube of edge `a` is:",
   o:["4a²","a³","12a","6a²"],
   a:3,
   why:"**TSA = 6a²** — six congruent square faces, each of area a². Option A is the lateral surface `4a²`, the four upright faces, which is what the four walls of a cubical room come to. Option C, `12a`, is the total length of the twelve edges, and `a³` is the volume. Three quantities, three different powers of a.",
   tag:"Cube TSA"},

  {q:"The volume of a cube is 216 cm³. The length of its diagonal is:",
   o:["6√3 cm","6√2 cm","6 cm","18 cm"],
   a:0,
   why:"**V = a³**, so a = ∛216 = 6 cm, and the **body diagonal = a√3** = `6√3 cm`. Option B is the face diagonal `a√2` = 6√2 cm — the diagonal across one face, not through the solid, and the question's real trap. Option C is the edge itself and option D is `3a`, which is what writing the diagonal as 3a rather than a√3 gives.",
   tag:"Cube diagonal"},

  {q:"The volume of a cube is 512 cm³. Its total surface area is:",
   o:["256 cm²","384 cm²","3072 cm²","64 cm²"],
   a:1,
   why:"**a = ∛V** = ∛512 = 8 cm, then **TSA = 6a²** = 6 × 64 = `384 cm²`. Option C is 6 × 512, the volume put where a² belongs — the commonest slip on this question. Option A is `4a²` = 256 cm², the four upright faces, and option D is a², one face alone.",
   tag:"Surface from V"},

  {q:"The total surface area of a cube is 150 cm². Its volume is:",
   o:["125 cm³","15625 cm³","25 cm³","150 cm³"],
   a:0,
   why:"**TSA = 6a²**, so a² = 150/6 = 25 and a = 5 cm; then **V = a³** = `125 cm³`. Option B takes 25 as the edge instead of as the edge **squared** and cubes it, 25³ = 15625 — the trap built into the numbers. Option C is a², an area labelled as a volume, and option D is the given surface with only the unit changed.",
   tag:"V from surface"},

  {q:"The diagonal of one face of a cube is 4√2 cm. The volume of the cube is:",
   o:["128√2 cm³","64 cm³","96 cm²","16 cm²"],
   a:1,
   why:"**The diagonal of a face is a√2**, so a√2 = 4√2 and a = 4 cm; **V = a³** = `64 cm³`. Option A cubes the face diagonal itself, (4√2)³ = 128√2. Option C is the total surface 6a² = 96 cm² and option D one face, 16 cm² — areas where a volume was asked. The **body** diagonal of this cube would be a√3 = 4√3 cm, which is the length the wording is inviting you to use.",
   tag:"Face diagonal"},

  {q:"A cube painted on all its faces is cut into 125 equal small cubes. How many of the small cubes have exactly three painted faces?",
   o:["36","54","27","8"],
   a:3,
   why:"**The small cubes with three painted faces are the corner cubes, and there are always `8` of them whatever n is.** Here 125 = 5³, so n = 5, and the other three counts are two faces `12(n − 2)` = 36, one face `6(n − 2)²` = 54 and none `(n − 2)³` = 27 — options A, B and C. The four add to 8 + 36 + 54 + 27 = 125, which is how to check the set before ticking.",
   tag:"Painted: 3 faces"},

  {q:"A cube of edge 6 cm, painted on every face, is cut into unit cubes of edge 1 cm. The number of unit cubes with exactly two painted faces is:",
   o:["8","96","48","64"],
   a:2,
   why:"**The cubes with exactly two painted faces lie along the twelve edges but not at the corners: 12(n − 2).** With n = 6 that is 12 × 4 = `48`. Option B is `6(n − 2)²` = 96, the one-face count from the six face centres; option D is `(n − 2)³` = 64, the unpainted core; option A is the 8 corners with three faces. The check: 8 + 48 + 96 + 64 = 216 = 6³.",
   tag:"Painted: 2 faces"},

  {q:"A painted cube is cut into 27 equal smaller cubes. The number of smaller cubes with no painted face is:",
   o:["1","0","6","8"],
   a:0,
   why:"**The unpainted cubes form the inner cube of edge n − 2, so there are `(n − 2)³` of them.** Here 27 = 3³, so n = 3 and the count is 1³ = `1` — the single cube at the very centre. Option B assumes none survive, which is only true for n = 2; option C is `6(n − 2)²` = 6, the cubes with exactly one painted face; option D is the 8 corners. They add to 8 + 12 + 6 + 1 = 27.",
   tag:"Painted: none"},

  {q:"The volume of the largest cube that can be cut from a cuboid 10 cm × 8 cm × 6 cm is:",
   o:["512 cm³","480 cm³","216 cm³","216 cm²"],
   a:2,
   why:"**The largest cube that fits has its edge equal to the smallest dimension**, here 6 cm, so **V = a³** = `216 cm³`. Option A takes the middle dimension, 8³ = 512 cm³, which will not go in. Option B is the whole cuboid, 10 × 8 × 6 = 480 cm³, and option D is the cube's own surface 6a² = 216 cm² — the same number carrying the wrong unit, which is the trap worth seeing.",
   tag:"Largest cube"},

  {q:"How many rectangular boxes 8 cm × 6 cm × 5 cm can be packed into a crate 48 cm × 36 cm × 20 cm?",
   o:["96","144","216","120"],
   a:1,
   why:"**Divide edge against edge, not volume against volume: 48/8 = 6, 36/6 = 6, 20/5 = 4, so 6 × 6 × 4 = `144` boxes.** Here the volume ratio agrees, 34560 ÷ 240 = 144, because every dimension divides exactly. Option C assumes 6 along each of the three edges; options A and D mis-pair which box edge lies along which crate edge. When the dimensions do not divide exactly the volume ratio is an over-count and only the edge-by-edge division is safe.",
   tag:"Packing"},

  {q:"A wall 8 m long, 6 m high and 22.5 cm thick is built of bricks 25 cm × 11.25 cm × 6 cm. The number of bricks needed is:",
   o:["640","3200","6400","12800"],
   a:2,
   why:"**Number of bricks = volume of the wall ÷ volume of one brick**, with every length in one unit. The wall is 800 × 600 × 22.5 = 10800000 cm³ and one brick is 25 × 11.25 × 6 = 1687.5 cm³, so 10800000 ÷ 1687.5 = `6400`. Option A is what losing one power of ten in the metres-to-centimetres conversion gives; options B and D are the answer halved and doubled. Converting **before** multiplying is the whole of the question.",
   tag:"Bricks"},

  {q:"The volume of a right prism is:",
   o:["½ × base area × height","(1/3) × base area × height","perimeter of base × height","base area × height"],
   a:3,
   why:"**V = base area × height** for any right prism, whatever shape the base is. Option B is the **pyramid's** formula, (1/3) × base area × height — the third belongs to the solid that tapers to a point and never to a prism, and it is the option put here for it. Option C is the prism's lateral surface area, which is an area and cannot be a volume.",
   tag:"Prism volume"},

  {q:"In the figure, the right prism stands on an equilateral triangle of side 6 cm and is 10 cm tall. Its lateral surface area is:",
   o:["(180 + 18√3) cm²","180 cm²","90√3 cm³","18√3 cm²"],
   a:1,
   why:"**LSA = perimeter of the base × height** = (3 × 6) × 10 = `180 cm²` — the three rectangular sides, each 6 cm by 10 cm. Option A adds the two triangular ends, 2 × (√3/4) × 6² = 18√3 cm², giving the **total** surface (180 + 18√3) cm², and lateral-against-total is this chapter's standing trap. Option C is the volume, base area × height = 9√3 × 10 = 90√3 cm³, and option D the two ends by themselves.",
   tag:"Prism LSA",
   d:"s-prism-tri",
   dcap:"A right prism on a triangular base: three rectangles round the sides, one triangle at each end."},

  {q:"A right prism 10 cm high stands on a regular hexagon of side 4 cm. Its volume is:",
   o:["480√3 cm³","240 cm²","240√3 cm³","240 cm³"],
   a:2,
   why:"**V = base area × height**, and a regular hexagon of side a has area **(3√3/2)a²** — it is six equilateral triangles of side a, 6 × (√3/4)a² — so the base is (3√3/2) × 16 = 24√3 cm² and V = 24√3 × 10 = `240√3 cm³`. Option A drops the ½ and uses 3√3a². Option B is the lateral surface, perimeter × height = 24 × 10 = 240 cm², an area offered for a volume, and option D loses the √3 altogether.",
   tag:"Hexagonal prism"},

  {q:"In the figure, the cube has edge 4 cm. The ratio of the face diagonal drawn to the body diagonal drawn is:",
   o:["√2 : √3","2 : 3","1 : √3","√3 : √2"],
   a:0,
   why:"**Face diagonal = a√2 and body diagonal = a√3**, so the ratio is a√2 : a√3 = `√2 : √3` — the edge cancels, and the 4 cm never enters the answer. Option B squares both and gives the ratio of the **squares** rather than of the lengths; option C is edge to body diagonal, `a : a√3`; option D is the correct ratio written the wrong way round.",
   tag:"a√2 and a√3",
   d:"s-cube",
   dcap:"The edge `a`, the face diagonal `a√2` across one face, and the body diagonal `a√3` through the solid."},

  {q:"If every edge of a cube is increased by 10%, its total surface area increases by:",
   o:["20%","33.1%","10%","21%"],
   a:3,
   why:"**Area goes as the square of the linear factor, so the rise is (2x + x²/100)%** = 20 + 1 = `21%`; equivalently 6a² is multiplied by k² = 1.1² = 1.21. Option A is the 2x term alone with the x²/100 forgotten, which is the standard slip. Option B, `33.1%`, is the rise in **volume**, which goes as k³ = 1.331, and option C simply repeats the edge's own 10%.",
   tag:"Edge up 10%"},

  {q:"If each edge of a cube is doubled, its volume becomes:",
   o:["4 times","6 times","8 times","2 times"],
   a:2,
   why:"**Volume goes as the cube of the linear factor: k = 2 gives k³ = `8` times.** Option A is k² = 4, which is what the **surface area** becomes — the surface quadruples while the volume becomes eight times, and swapping the two is the standard confusion. Option B, `6`, is only the number of faces, and option D is the linear factor left un-powered.",
   tag:"Edge doubled"},

  {q:"The lateral surface area of a cuboid of length `l`, breadth `b` and height `h` is:",
   o:["2(lb + bh + hl)","lbh","2(l + b + h)","2h(l + b)"],
   a:3,
   why:"**Lateral (four walls) = 2h(l + b)** — the perimeter of the base times the height. Option A is the **total** surface area (all six faces), which adds the top and bottom; confusing lateral with total is the standard slip.",
   tag:"Cuboid lateral SA"},

  {q:"The total surface area of a cube is `294 cm²`. Its edge is:",
   o:["7 cm","49 cm","6 cm","√49 cm"],
   a:0,
   why:"**TSA = 6a²**, so a² = 294/6 = 49 and a = `7 cm`. Option B (49) is a² itself, stopping one step early; option C (6) divides 294 by 49 instead of the other way round.",
   tag:"Cube edge from TSA"},

  {q:"A cube has edge `5 cm`. Its body diagonal is:",
   o:["5√2 cm","10 cm","5√3 cm","25 cm"],
   a:2,
   why:"**Body diagonal of a cube = a√3 = 5√3 cm**. Option A (5√2) is the **face** diagonal, not the body diagonal — the face diagonal lies in one face, while the body diagonal passes through the interior.",
   tag:"Body diagonal"},

  {q:"A painted cube of edge `4 cm` is cut into unit cubes of edge `1 cm`. The number of unit cubes with exactly two painted faces is:",
   o:["8","32","16","24"],
   a:3,
   why:"**Two-face cubes sit along the edges, excluding corners.** Each edge has 4 − 2 = 2 such cubes, and a cube has 12 edges: 12 × 2 = `24`. Option A (8) is the count of corner cubes (three painted faces), the most common swap.",
   tag:"Painted cube edges"},

  {q:"A closed rectangular box 12 cm long, 8 cm wide and 5 cm high is made of metal sheet. The area of sheet used is:",
   o:["480 cm²","320 cm²","392 cm²","96 cm²"],
   a:2,
   why:"**TSA = 2(lb + bh + hl) = 2(96 + 40 + 60) = 2 × 196 = `392 cm²`**. Option A (480) is the volume (12 × 8 × 5), not the surface area — confusing the two is the trap.",
   tag:"Cuboid TSA"},

  {q:"How many cubes of edge `2 cm` can be cut from a block `8 cm` × `6 cm` × `4 cm`?",
   o:["48","12","96","24"],
   a:3,
   why:"**Count along each dimension: 8/2 = 4, 6/2 = 3, 4/2 = 2. Total = 4 × 3 × 2 = `24`.** Option A (48) divides the volume of the block (192) by the edge (2) instead of by the volume of each small cube (8) — the standard error.",
   tag:"Cubes from block"}
],
  note:"Every question above is answered by one line of the sheet. Before ticking, read the unit on the option: the commonest loss in this chapter is correct arithmetic attached to the quantity the question did not ask for."}
]
},

/* ============================================================ 6 — 3D: cylinder, cone and frustum (28 questions) */
{
id:"men-3d-cylinder", n:"3D: cylinder, cone and frustum", hy:1,
w:"The cylinder, the pipe, the cone and the frustum — and the four places where a curved surface is offered for a total one, or a slant height for a vertical one.",
quick:[
 "Cylinder: **V = πr²h**, **CSA = 2πrh**, **TSA = 2πr(r + h)**. Open at the top it is `πr(r + 2h)`; a tube open at **both** ends has no base at all, so its whole surface is `2πrh`.",
 "Cone: **V = (1/3)πr²h**, **CSA = πrl**, **TSA = πr(r + l)**, and **l = √(r² + h²)**. The slant height belongs to the surfaces and never to the volume.",
 "A cylinder and a cone on the same base and of the same height are in the ratio **3 : 1** by volume — three cones fill the cylinder.",
 "Frustum: **V = (1/3)πh(R² + Rr + r²)**, **CSA = πl(R + r)**, **l = √(h² + (R − r)²)**. The `Rr` term and the **difference** of the radii inside the root are the two things that get dropped.",
 "Pipe, or hollow cylinder: **V = πh(R² − r²)**, and **CSA = 2πh(R + r)** counting the outer and the inner curved surfaces together.",
 "A cone made from a sector: the sector's **radius becomes the slant height** and its **arc becomes the base circumference**, so **2πr = (θ/360) × 2πl**.",
 "A cone cut by a plane parallel to the base leaves a **similar** small cone: lengths in the ratio `k`, surfaces `k²`, volumes `k³`. Cut at half the height, small cone : frustum = `1 : 7`."
],
blocks:[
 {h:"THE SHEET — every formula this topic tests",
  cols:["Asked for","The formula","Where it goes wrong"],
  rows:[
  ["**Cylinder — volume**","πr²h","The only one of the three solids with no fraction in front. The cone's carries a third"],
  ["**Cylinder — curved surface**","2πrh","The curved surface unrolls into a rectangle of width `2πr` and height `h`"],
  ["**Cylinder — total surface**","2πr(r + h) = 2πrh + 2πr²","Both flat ends. Open at the top it is `πr(r + 2h)`; open at both ends, `2πrh` alone"],
  ["**Two cylinders compared**","volume as r²h, curved surface as rh","Volumes go as the **square** of the radius, surfaces only as the first power"],
  ["**Pipe — volume of metal**","πh(R² − r²)","Not `πh(R − r)²` — each radius is squared before they are subtracted"],
  ["**Pipe — curved surface**","2πh(R + r)","Outer and inner together. The total surface adds the two flat rings, `2π(R² − r²)`"],
  ["**Cone — slant height**","l = √(r² + h²)","Plus inside the root. Going the other way, h = √(l² − r²)"],
  ["**Cone — volume**","(1/3)πr²h","The **vertical** height. Putting `l` here always overstates the volume, because l is longer than h"],
  ["**Cone — curved surface**","πrl","The **slant** height. Putting `h` here always understates it"],
  ["**Cone — total surface**","πr(r + l) = πrl + πr²","The one circular base. Curved offered for total is the commonest wrong tick in the chapter"],
  ["**Cylinder : cone**, same base and height","3 : 1","Written the other way round it is the standard slip"],
  ["**Cone from a sector**, radius l, angle θ","2πr = (θ/360) × 2πl, so r = (θ/360)l","The sector's radius is the cone's slant height, not its base radius"],
  ["**Sheet p × q rolled into a cylinder**","2πr = p, h = q, so V = p²q/(4π)","The circumference enters squared, so the **longer** side as the circumference gives the larger volume"],
  ["**Frustum — volume**","(1/3)πh(R² + Rr + r²)","The `Rr` term. Put `r = 0` and the formula must collapse to the cone — that is the check"],
  ["**Frustum — slant height**","l = √(h² + (R − r)²)","The **difference** of the radii, because the slant lies across the ring between the two circles"],
  ["**Frustum — curved surface**","πl(R + r)","The **sum** of the radii here, the difference inside the root"],
  ["**Frustum — total surface**","πl(R + r) + πR² + πr²","A bucket or a glass is open at the top, so it carries only one of the two circles"],
  ["**Cone cut parallel to the base**","lengths k, areas k², volumes k³","Cut at half the height: small cone : whole = `1 : 8`, small cone : frustum = `1 : 7`"]
 ]},

 {h:"THE CURVED SURFACE, UNROLLED", dia:"s-cylinder",
  cap:"Cut a cylinder down one side and flatten it: the curved surface is a rectangle `2πr` wide and `h` tall, which is the whole of why CSA = 2πrh.",
  note:"The same cut on a cone gives a sector, not a rectangle, because the slant lines all meet at the vertex."},

 {careful:"**Curved against total is this chapter's whole trap.** Cylinder: curved `2πrh`, total `2πr(r + h)`. Cone: curved `πrl`, total `πr(r + l)`. Frustum: curved `πl(R + r)`, total `πl(R + r) + πR² + πr²`. Read the solid as well as the word — a vessel open at the top keeps one circle, a tube open at both ends keeps none, and a painted pillar standing on the ground has neither end exposed."},

 {careful:"**The slant height `l` goes into every surface and into no volume.** `CSA = πrl` but `V = (1/3)πr²h`, and since `l = √(r² + h²)` is always longer than `h`, using it in the volume always gives too much. Going the other way, the height from the slant height is `h = √(l² − r²)` — a **minus** inside the root, where the slant height itself took a plus."},

 {careful:"In a frustum the two radii appear **differently in the two places**: `l = √(h² + (R − r)²)` takes the difference, `CSA = πl(R + r)` takes the sum. And the volume `(1/3)πh(R² + Rr + r²)` carries the middle term `Rr` — a frustum is not the difference of two neat squares, and the version without `Rr` is always one of the four options."},

 {h:"QUESTIONS — cylinder, pipe, cone, frustum",
  mcq:[
  {q:"The curved surface area of a right circular cylinder of radius `r` and height `h` is:",
   o:["πr²h","2πr(r + h)","2πr²","2πrh"],
   a:3,
   why:"**CSA = 2πrh** — cut the cylinder down one side and the curved surface flattens into a rectangle `2πr` wide and `h` tall. Option B is the **total** surface area `2πr(r + h)`, which adds both circular ends, and it is the one most often ticked by mistake. `πr²h` is the volume and `2πr²` is only the two ends.",
   tag:"Cylinder CSA"},

  {q:"The volume of a right circular cylinder of diameter 14 cm and height 10 cm, taking π = 22/7, is:",
   o:["440 cm²","6160 cm³","1540 cm³","748 cm²"],
   a:2,
   why:"**V = πr²h**, and the diameter is 14 cm so `r = 7 cm`: (22/7) × 7² × 10 = `1540 cm³` with π = 22/7. Option B, `6160 cm³`, is the diameter used as the radius — four times too much, and the standard slip. Option A is the curved surface `2πrh = 440 cm²` and option D the total surface `2πr(r + h) = 748 cm²`, both areas offered where a volume was asked.",
   tag:"Cylinder volume"},

  {q:"A cylindrical vessel of radius `r` and height `h` is open at the top. Its total surface area is:",
   o:["2πr(r + h)","πr(r + 2h)","2πrh","πr(2r + h)"],
   a:1,
   why:"One circular end only, so the surface is **2πrh + πr² = πr(r + 2h)**. Option A is the closed cylinder, `2πr(r + h)`, with both ends counted. Option D has the two terms swapped — it is `2πr² + πrh`, two bases and half the curved surface. Option C, `2πrh`, is the right answer for a different solid: a tube open at **both** ends, which has no base at all.",
   tag:"Open at the top"},

  {q:"A solid cylinder has radius 7 cm and height 3 cm. Taking π = 22/7, its total surface area is:",
   o:["440 cm²","132 cm²","286 cm²","462 cm³"],
   a:0,
   why:"**TSA = 2πrh + 2πr² = 2πr(r + h)** = 2 × (22/7) × 7 × (7 + 3) = `440 cm²` with π = 22/7. Option B is the curved surface alone, `2πrh = 132 cm²`; option C adds just one end, 132 + 154 = `286 cm²`, which answers the open-topped vessel instead. Option D is the volume `πr²h = 462 cm³` — a cubic unit where a square one was asked for.",
   tag:"Cylinder TSA"},

  {q:"Two cylinders have their radii in the ratio `2 : 3` and their heights in the ratio `5 : 4`. The ratio of their volumes is:",
   o:["5 : 6","4 : 9","5 : 9","2 : 3"],
   a:2,
   why:"**V = πr²h**, so the volumes go as `r²h`: 2² × 5 : 3² × 4 = 20 : 36 = `5 : 9`. Option A is the ratio of the **curved surfaces**, which go as `rh` only: 2 × 5 : 3 × 4 = 5 : 6 — that is the tempting one, because the radius there is not squared. Option B squares the radii and forgets the heights altogether.",
   tag:"Ratio of volumes"},

  {q:"A cylindrical pillar is 70 cm in diameter and 5 m high. Taking π = 22/7, the cost of painting its curved surface at ₹100 per m² is:",
   o:["₹550","₹1,100","₹1,177","₹2,200"],
   a:1,
   why:"**CSA = 2πrh** with `r = 0.35 m` and `h = 5 m`: 2 × (22/7) × 0.35 × 5 = 11 m², so the cost is 11 × 100 = `₹1,100` with π = 22/7. Option C adds the two flat ends, `2πr² = 0.77 m²`, for ₹1,177 — but a pillar stands on the floor and meets the ceiling, so neither end is painted. Option D is the diameter used as the radius and option A drops the 2 from `2πrh`.",
   tag:"Painting a pillar"},

  {q:"A rectangular sheet of tin 44 cm long and 20 cm wide is rolled along its length into a cylinder. Taking π = 22/7, the volume of that cylinder is:",
   o:["880 cm²","1400 cm³","3080 cm³","12320 cm³"],
   a:2,
   why:"Rolling along the length makes the 44 cm the **circumference**, so **2πr = 44** gives `r = 7 cm` and `h = 20 cm`, and **V = πr²h** = (22/7) × 49 × 20 = `3080 cm³` with π = 22/7. Option B, `1400 cm³`, is the cylinder got by rolling the sheet the other way, with the 20 cm as the circumference. Option D takes `πr = 44` and so uses r = 14, and option A is the area of the sheet itself, which is the curved surface and not a volume.",
   tag:"Rolling a sheet"},

  {q:"A rectangular sheet is rolled into a cylinder in each of the two possible ways. The greater volume is got by taking:",
   o:["the longer side as the circumference","the shorter side as the circumference","either — the two volumes are equal","the diagonal as the circumference"],
   a:0,
   why:"With sides `p` and `q`, taking p as the circumference gives `2πr = p` and `h = q`, so **V = πr²h = p²q/(4π)**. The circumference enters **squared** and the height only once, so the longer side should be the circumference. For a 44 cm × 20 cm sheet that is `3080 cm³` against `1400 cm³`. Option C is the assumption most readers make, and it is wrong: the curved surface area is the same either way, the volume is not.",
   tag:"Which roll is bigger"},

  {q:"A hollow iron pipe is 14 cm long, with external radius 5 cm and internal radius 4 cm. Taking π = 22/7, the volume of iron in it is:",
   o:["44 cm³","704 cm³","1100 cm³","396 cm³"],
   a:3,
   why:"**V = πh(R² − r²)** = (22/7) × 14 × (25 − 16) = 44 × 9 = `396 cm³` with π = 22/7. Option A is `πh(R − r)²` = 44 cm³ — each radius must be squared **before** they are subtracted, and this is the single commonest error on a pipe. Option C is the solid cylinder of radius 5 cm and option B the hole of radius 4 cm; the metal is the difference between them.",
   tag:"Metal in a pipe",
   d:"s-hollow-cylinder"},

  {q:"The curved surface area of a hollow cylinder of length `h`, outer radius `R` and inner radius `r`, counting both curved surfaces, is:",
   o:["2πh(R − r)","πh(R² − r²)","2πh(R + r)","2π(R² − r²)"],
   a:2,
   why:"The outer surface is `2πRh` and the inner is `2πrh`, so together **CSA = 2πh(R + r)**. Option B is the **volume** of the metal, `πh(R² − r²)`, and substituting it here is the standard confusion, because both expressions pair the two radii. Option D is the two flat rings, `2π(R² − r²)`; adding those to the answer gives the total surface, `2πh(R + r) + 2π(R² − r²)`.",
   tag:"Pipe CSA"},

  {q:"The volume of a right circular cone of base radius `r` and height `h` is:",
   o:["πr²h","(1/3)πr²h","(1/3)πr²l","(1/3)πrh²"],
   a:1,
   why:"**V = (1/3)πr²h** — three cones on the same base and of the same height fill one cylinder. Option A is that whole cylinder, `πr²h`, and forgetting the third is the commonest slip in the chapter. Option C puts the **slant** height where the vertical height belongs, which always overstates the volume because `l` is longer than `h`; option D swaps the radius and the height.",
   tag:"Cone volume"},

  {q:"A cone has base radius 5 cm and height 12 cm. Its curved surface area is:",
   o:["90π cm²","60π cm²","65π cm²","130π cm²"],
   a:2,
   why:"**l = √(r² + h²)** = √(25 + 144) = `13 cm`, and **CSA = πrl** = π × 5 × 13 = `65π cm²`. The numbers do not suit 22/7, so π is left in the answer. Option A is the **total** surface `πr(r + l) = 90π cm²`; option B uses the vertical height in place of the slant height, giving `πrh`; option D is `2πrl`, the cylinder's curved surface with the cone's numbers.",
   tag:"Cone CSA"},

  {q:"A cone has base radius 7 cm and slant height 10 cm. Taking π = 22/7, its total surface area is:",
   o:["154 cm²","220 cm²","440 cm²","374 cm²"],
   a:3,
   why:"**TSA = πrl + πr² = πr(r + l)** = (22/7) × 7 × (7 + 10) = `374 cm²` with π = 22/7. Option B is the curved surface alone, `πrl = 220 cm²` — the result one step before the end, and the tempting answer. Option A is the base circle `πr² = 154 cm²` and option C is `2πrl`, which is a cylinder's formula wearing a cone's numbers.",
   tag:"Cone TSA"},

  {q:"The volume of a cone of base radius 7 cm is 1232 cm³. Taking π = 22/7, its height is:",
   o:["8 cm","24 cm","25 cm","72 cm"],
   a:1,
   why:"**V = (1/3)πr²h**, so (1/3) × (22/7) × 49 × h = 1232 gives 154h = 3696 and `h = 24 cm` with π = 22/7. Option A, `8 cm`, is what dropping the third gives — it solves `πr²h = 1232` instead. Option C, `25 cm`, is the **slant** height √(7² + 24²), which the question did not ask for, and option D multiplies by 3 where it should divide.",
   tag:"Height from volume"},

  {q:"A cylinder and a cone stand on the same base and have the same height. The ratio of the volume of the cylinder to the volume of the cone is:",
   o:["3 : 1","1 : 3","1 : 1","9 : 1"],
   a:0,
   why:"**πr²h : (1/3)πr²h = 3 : 1** — three cones of that base and height fill the cylinder, which is where the third in the cone's formula comes from. Option B is the same ratio written the wrong way round, and reading the order of the two solids in the question is half the mark. Option D would need the volumes to go as a square, which nothing in this comparison does.",
   tag:"Cylinder : cone"},

  {q:"A sector of a circle of radius 21 cm and angle 120° is rolled up into a cone. The base radius of that cone is:",
   o:["7 cm","10.5 cm","14 cm","21 cm"],
   a:0,
   why:"The sector's arc becomes the base circle, so **2πr = (θ/360) × 2πl**, which reduces to `r = (θ/360)l` = (1/3) × 21 = `7 cm`. Option D is the sector's own radius, which becomes the cone's **slant height** and not its base radius — that is the whole trap. Option C is the diameter. The height follows as √(21² − 7²) = `14√2 cm`.",
   tag:"Sector into a cone",
   d:"s-cone-open"},

  {q:"When the curved surface of a cone is cut open and laid flat it forms a sector. The radius of that sector is the cone's:",
   o:["base radius","height","base diameter","slant height"],
   a:3,
   why:"**The sector's radius is the slant height `l`, and the sector's arc is the base circumference `2πr`** — which is why a cone rolled from a sector satisfies `2πr = (θ/360) × 2πl`. The sector's area is the cone's curved surface, `πrl`. Option B is the tempting one: the vertical height is the single length that does **not** appear anywhere in the flattened sector.",
   tag:"Cone opened out",
   d:"s-cone-open"},

  {q:"The volume of a frustum of height `h` whose two circular ends have radii `R` and `r` is:",
   o:["(1/3)πh(R² + r²)","πh(R² + Rr + r²)","(1/3)πh(R² + Rr + r²)","(1/3)πh(R − r)²"],
   a:2,
   why:"**V = (1/3)πh(R² + Rr + r²).** The middle term `Rr` is the whole of the formula — a frustum is not the difference of two tidy squares. Option A drops that term and is the commonest wrong answer; option B forgets the third instead. The check to run on any version half-remembered: put `r = 0` and it must collapse to `(1/3)πR²h`, the cone, which only option C does.",
   tag:"Frustum volume",
   d:"s-frustum"},

  {q:"A frustum has end radii 15 cm and 10 cm and a height of 12 cm. Its slant height is:",
   o:["12 cm","13 cm","√125 cm","√769 cm"],
   a:1,
   why:"**l = √(h² + (R − r)²)** = √(12² + 5²) = √169 = `13 cm`. The horizontal leg is the **difference** of the radii, because the slant lies across the ring between the two circles. Option D uses `R + r` and gives √769 cm; option A takes the vertical height for the slant height, which is only true when R = r — that is, for a cylinder.",
   tag:"Frustum slant height"},

  {q:"A frustum has end radii 8 cm and 4 cm and a height of 3 cm. Its curved surface area is:",
   o:["60π cm²","20π cm²","120π cm²","140π cm²"],
   a:0,
   why:"First **l = √(h² + (R − r)²)** = √(9 + 16) = `5 cm`, then **CSA = πl(R + r)** = π × 5 × 12 = `60π cm²`. The numbers do not suit 22/7, so π stays in the answer. Option D is the **total** surface, 60π + π × 8² + π × 4² = `140π cm²`, and it is the tempting one; option C doubles the curved surface on the pattern of the cylinder's `2πrh`; option B uses the difference of the radii where the sum belongs.",
   tag:"Frustum CSA"},

  {q:"The total surface area of a closed frustum with end radii `R` and `r` and slant height `l` is:",
   o:["πl(R + r)","πl(R + r) + πR²","2πl(R + r) + π(R² + r²)","πl(R + r) + πR² + πr²"],
   a:3,
   why:"**TSA = CSA + both circular ends = πl(R + r) + πR² + πr².** Option A is the curved surface only — the result one step before the end. Option B adds the larger circle alone, which is the right answer for a **bucket or a drinking glass**, open at the top, and is why the question has to say whether the solid is closed. Option C doubles the curved surface, which no frustum formula does.",
   tag:"Frustum TSA"},

  {q:"A cone is cut by a plane parallel to its base through the mid-point of its height. The ratio of the volume of the small cone to the volume of the frustum below it is:",
   o:["1 : 2","1 : 4","1 : 7","1 : 8"],
   a:2,
   why:"The small cone is **similar** to the whole cone, so halving the height halves the radius, and volumes go as the **cube** of the ratio: small : whole = `1 : 8`. The frustum is everything else, 8 − 1 = 7 parts, so small cone : frustum = **1 : 7**. Option D is small to **whole**, the answer one step early and the commonest tick; option A is the ratio of the heights and option B the ratio of the curved surfaces, which go as `k²`.",
   tag:"Cone cut in half",
   d:"s-cone-cut"},

  {q:"A solid cylinder of radius `7 cm` and height `10 cm` is melted and recast into a cone of the same radius. The height of the cone is:",
   o:["10 cm","20 cm","30 cm","15 cm"],
   a:2,
   why:"**Volume of cylinder = πr²h = volume of cone = (1/3)πr²H.** Since the radii are the same, H = 3h = 3 × 10 = `30 cm`. The cone must be three times as tall to hold the same volume, because its volume is one-third of a cylinder of the same base and height.",
   tag:"Cylinder to cone"},

  {q:"The ratio of the total surface area to the curved surface area of a cylinder whose height equals its diameter is:",
   o:["3 : 2","2 : 1","4 : 3","3 : 1"],
   a:0,
   why:"**h = 2r.** CSA = 2πrh = 2πr(2r) = 4πr². TSA = CSA + 2πr² = 4πr² + 2πr² = 6πr². Ratio = 6πr² : 4πr² = `3 : 2`. Option B (2 : 1) is what h = r gives, not h = 2r.",
   tag:"TSA : CSA ratio"},

  {q:"A cone has base radius `3 cm` and height `4 cm`. Its slant height is:",
   o:["7 cm","5 cm","√7 cm","12 cm"],
   a:1,
   why:"**Slant height l = √(r² + h²) = √(9 + 16) = √25 = `5 cm`** — a 3-4-5 right triangle. Option A (7) adds r + h instead of using Pythagoras, the most common slip.",
   tag:"Cone slant height"},

  {q:"The volume of a cone of base radius `7 cm` and height `12 cm`, taking π = 22/7, is:",
   o:["1848 cm³","616 cm³","924 cm³","308 cm³"],
   a:1,
   why:"**Volume = (1/3)πr²h = (1/3) × (22/7) × 49 × 12 = (1/3) × 1848 = `616 cm³`**. Option A (1848) is πr²h, the cylinder's volume — the commonest error is forgetting the 1/3.",
   tag:"Cone volume"},

  {q:"A frustum has end radii `10 cm` and `6 cm` and a slant height of `5 cm`. Its curved surface area is:",
   o:["80π cm²","160π cm²","50π cm²","100π cm²"],
   a:0,
   why:"**CSA of frustum = π(R + r)l = π(10 + 6) × 5 = `80π cm²`**. Option B (160π) uses π(R + r) × 2l, doubling the formula; option D uses (R + r) × l without π.",
   tag:"Frustum CSA"},

  {q:"A cone of height `20 cm` is cut by a plane parallel to its base at a height of `15 cm` from the base. The ratio of the volume of the small cone removed to the volume of the original cone is:",
   o:["1 : 8","1 : 64","27 : 64","1 : 27"],
   a:1,
   why:"**The small cone's height = 20 − 15 = 5 cm, which is 5/20 = 1/4 of the original height.** For similar cones, volumes scale as the cube of the linear ratio: (1/4)³ = `1/64`. Option A (1 : 8) cubes 1/2 instead of 1/4 — which is the ratio for cutting at the midpoint of the height, not at 15 cm from the base.",
   tag:"Cone cut ratio"}
],
  note:"Two checks will catch most of the losses in this topic. Before ticking, ask whether the answer should carry a square unit or a cubic one; and ask whether the length you used was the height or the slant height."}
]
},

/* ============================================================ 7 — 3D: sphere, hemisphere and pyramid (28 questions) */
{
id:"men-3d-sphere", n:"3D: sphere, hemisphere and pyramid", hy:1,
w:"The sphere and its half, the spherical shell, the right pyramid on a square base, the regular tetrahedron, and the solids that sit exactly inside one another.",
quick:[
 "**Sphere: V = (4/3)πr³ and surface = 4πr².** The surface is four great circles. Doubling the radius multiplies the surface by `4` and the volume by `8`.",
 "**Hemisphere: V = (2/3)πr³, CSA = 2πr², TSA = 3πr².** The third πr² is the flat circular face — leaving it out is the standard slip in this topic.",
 "**Spherical shell: V = (4/3)π(R³ − r³).** Difference the cubes; never cube the difference.",
 "**Pyramid: V = (1/3) × base area × height; LSA = ½ × base perimeter × slant height; TSA = LSA + base area.** A pyramid has one base, not two.",
 "On a square base of side `a` with height `h` the **slant height is √(h² + a²/4)** and the **lateral edge is √(h² + a²/2)** — two different lengths, and every pyramid question trades on the difference.",
 "**Regular tetrahedron of edge `a`: surface √3a², volume a³/(6√2), height a√(2/3).**",
 "**A sphere inside a cube has r = a/2; a sphere round a cube has 2r = a√3.** A sphere inside a cylinder of height `2r` has exactly the cylinder's curved surface, `4πr²`."
],
blocks:[
 {h:"THE SHEET — every formula this topic tests",
  cols:["Asked as","The formula","What it is confused with"],
  rows:[
  ["**Sphere — volume**","(4/3)πr³","`4πr²`, the surface — a volume asked for and an area offered"],
  ["**Sphere — surface area**","4πr²","`2πr²` is only half of it, the hemisphere's dome"],
  ["**Sphere — radius from the volume**","r = ∛(3V/4π)","At V = `36π cm³` the radius is `3 cm` and the surface is also `36π cm²`"],
  ["**Sphere — scaling**","Surface × k², volume × k³","Doubling the radius: surface × 4, volume × 8, not the other way round"],
  ["**Hemisphere — volume**","(2/3)πr³","Half the sphere, so sphere : hemisphere = `2 : 1` by volume"],
  ["**Hemisphere — curved surface**","2πr²","The dome alone, with no floor — what a bowl painted outside costs"],
  ["**Hemisphere — total surface**","3πr² = 2πr² + πr²","The flat circle is the third πr²"],
  ["**Spherical shell — volume**","(4/3)π(R³ − r³)","Not `(4/3)π(R − r)³`"],
  ["**Sphere inscribed in a cube**","r = a/2","The sphere touches the six faces, so the diameter is the edge"],
  ["**Sphere circumscribing a cube**","2r = a√3","The body diagonal `a√3`, not the face diagonal `a√2`"],
  ["**Largest cone cut from a cube**","r = a/2, h = a, so V = πa³/12","The cone's base is the inscribed circle of one face"],
  ["**Sphere inside a cylinder of height 2r**","Cylinder CSA = sphere surface = 4πr²","The volumes are `2 : 3`, the surfaces `1 : 1`"],
  ["**Pyramid — volume**","(1/3) × base area × height","One third of the prism on the same base and of the same height"],
  ["**Pyramid — lateral surface**","½ × base perimeter × slant height","Uses the slant height, never the vertical height"],
  ["**Pyramid — total surface**","LSA + base area","Only one base — a pyramid has no second end"],
  ["**Square base, side a, height h — slant height**","√(h² + a²/4)","Runs to the mid-point of a base edge, `a/2` out from the centre"],
  ["**Square base — lateral edge**","√(h² + a²/2)","Runs to a corner, half a diagonal `a/√2` out from the centre"],
  ["**Regular tetrahedron — surface**","√3a² = 4 × (√3/4)a²","One face alone is `(√3/4)a²`"],
  ["**Regular tetrahedron — volume and height**","V = a³/(6√2), h = a√(2/3)","The height is not the face's median `(√3/2)a`"],
  ["**Composite solid — surface**","Add only the exposed surfaces","A joined circle is inside the solid and belongs to neither part"],
  ["**Cone standing on a hemisphere**","πrl + 2πr², with l = √(r² + h²)","No base circle anywhere — both flat faces are joined or absent"],
  ["**Tent: cylinder with a conical top**","Canvas = 2πrh + πrl","No floor in the canvas, and no circle between the cylinder and the cone"]
 ]},

 {h:"THE HEMISPHERE — the three πr²", dia:"s-hemisphere",
  cap:"A solid hemisphere: the curved dome is 2πr² and the flat circular face is a further πr², so the total surface is 3πr².",
  note:"Which of the two you want is decided by one word in the question — a dome, a bowl painted outside, or a solid."},

 {careful:"A solid hemisphere carries **three** πr² of surface, not two. **TSA = 3πr²**, because the flat circular face πr² is part of the solid; **CSA = 2πr²** is the dome by itself. A bowl painted on the outside takes 2πr²; a solid half-ball polished all over takes 3πr². The whole question is which of the two is being asked for, and the other is always offered as an option."},

 {careful:"Three different lengths run from the apex of a pyramid on a square base of side `a`: the **height h** straight down the axis, the **slant height √(h² + a²/4)** to the mid-point of a base edge, and the **lateral edge √(h² + a²/2)** to a corner. The lateral surface **½ × base perimeter × slant height** uses the middle one. Putting the height in its place is the commonest wrong answer in the whole pyramid set, and it always gives a number too small."},

 {careful:"In a composite solid the faces where the parts join are **inside** the solid and belong to neither surface. A cone standing on a hemisphere of the same radius has surface **πrl + 2πr²** — the circle between them is counted on neither part, not once and not twice. Adding it back is the trap in every composite question."},

 {h:"QUESTIONS — the sphere and its half",
  mcq:[
  {q:"The surface area of a sphere of radius `r` is:",
   o:["2πr²","4πr²","3πr²","(4/3)πr³"],
   a:1,
   why:"**Surface area of a sphere = 4πr²** — exactly four great circles, 4 × πr². Option A, `2πr²`, is the curved surface of a **hemisphere** and option C, `3πr²`, its total surface. Option D is the sphere's **volume**, offered where an area was asked for, which is the standard trap of this chapter.",
   tag:"Sphere"},

  {q:"The volume of a sphere of radius 9 cm is:",
   o:["729π cm³","486π cm³","972π cm³","324π cm²"],
   a:2,
   why:"**V = (4/3)πr³** = (4/3)π × 9³ = (4/3)π × 729 = `972π cm³`; π is left in because the numbers do not suit 22/7. Option A is πr³ with the 4/3 dropped; option B is **(2/3)πr³**, the hemisphere of the same radius, which is exactly half; option D is the surface 4πr² = 324π cm², an area where a volume was asked.",
   tag:"Sphere volume"},

  {q:"A hemispherical dome of radius 21 m is to be painted on the outside at ₹10 per m². Taking π = 22/7, the cost is:",
   o:["₹27,720","₹41,580","₹13,860","₹55,440"],
   a:0,
   why:"**Curved surface of a hemisphere = 2πr²** — the dome outside only, with no floor to paint. 2 × (22/7) × 21² = 2772 m², and 2772 × 10 = `₹27,720`. Option B uses the **total** surface 3πr² = 4158 m² and so pays for a circular floor that is not being painted; option D uses the whole sphere's 4πr², and option C only the flat circle πr².",
   tag:"Hemisphere CSA"},

  {q:"The volume of a sphere is `36π cm³`. Its surface area is:",
   o:["12π cm²","9π cm²","108π cm²","36π cm²"],
   a:3,
   why:"**V = (4/3)πr³**, so (4/3)πr³ = 36π gives r³ = 27 and r = `3 cm`. Then **S = 4πr²** = 4π × 9 = `36π cm²`. The two numbers agree at r = 3, which is why the question is set this way. Option B is the great circle πr², and option A is 4πr with one power too few; option C is 4πr³, with the square never taken.",
   tag:"Surface from volume"},

  {q:"The radius of a sphere is doubled. Its surface area and its volume become, respectively:",
   o:["2 times and 4 times","4 times and 8 times","8 times and 4 times","4 times and 16 times"],
   a:1,
   why:"**Surface = 4πr² goes as r², so it is multiplied by 2² = 4; volume = (4/3)πr³ goes as r³, so it is multiplied by 2³ = 8.** Option C has the two the wrong way round and is the trap — the area carries the square and the volume the cube, never the reverse. Option A takes one power too few in each.",
   tag:"Scaling"},

  {q:"A hollow metal sphere has outer radius 9 cm and inner radius 6 cm. The volume of metal in it is:",
   o:["36π cm³","684π cm³","2052π cm³","171π cm³"],
   a:1,
   why:"**Volume of a spherical shell = (4/3)π(R³ − r³)** = (4/3)π(729 − 216) = (4/3)π × 513 = `684π cm³`. Option A is (4/3)π(R − r)³ = (4/3)π × 27 — cubing the difference instead of differencing the cubes, which is the standard slip here. Option C drops the ÷3 and option D the ×4.",
   tag:"Spherical shell"},

  {q:"The total surface area of a solid hemisphere of radius `r` is:",
   o:["2πr²","4πr²","3πr²","πr²"],
   a:2,
   why:"**Total surface of a solid hemisphere = 2πr² + πr² = 3πr².** The curved dome is 2πr² and the flat circular face is the third πr². Option A is that dome by itself, and leaving the flat circle out is the commonest error in this topic; option B is the whole sphere and option D the flat circle alone.",
   tag:"Hemisphere TSA"},

  {q:"A solid hemisphere has radius 14 cm. Taking π = 22/7, its total surface area is:",
   o:["1232 cm²","2464 cm²","1848 cm²","616 cm²"],
   a:2,
   why:"**TSA of a solid hemisphere = 3πr²** = 3 × (22/7) × 196 = 3 × 616 = `1848 cm²`. Option A is the curved surface 2πr² = 1232 cm², which is what a reader who forgets the flat face ticks; option D is that flat face πr² = 616 cm² by itself; option B is the full sphere's 4πr².",
   tag:"Hemisphere TSA"},

  {q:"The volume of a hemisphere of radius `r` is:",
   o:["(1/3)πr³","(4/3)πr³","(3/2)πr³","(2/3)πr³"],
   a:3,
   why:"**Volume of a hemisphere = (2/3)πr³**, exactly half the sphere's **(4/3)πr³** — so a sphere and a hemisphere of the same radius stand in the ratio `2 : 1` by volume. Option B is the whole sphere, the commonest tick here. Option A belongs to no solid on this page: the cone's third goes with r²h, not with r³.",
   tag:"Hemisphere volume"},

  {q:"A sphere of radius `7 cm` has surface area (taking π = 22/7):",
   o:["154 cm²","308 cm²","616 cm²","1232 cm²"],
   a:2,
   why:"**Surface area of a sphere = 4πr²** = 4 × (22/7) × 49 = `616 cm²`. Option B (308) is half of this — it is `2πr²`, the curved surface of the hemisphere — and option A (154) is a quarter, `πr²`, just one great-circle area.",
   tag:"Sphere SA"},

  {q:"The curved surface area of a solid hemisphere of radius `r` is:",
   o:["4πr²","πr²","2πr²","3πr²"],
   a:2,
   why:"**The curved surface of a hemisphere is `2πr²`** — exactly half the full sphere's surface. Adding the flat circular base (`πr²`) gives the **total** surface area `3πr²`, which is option D; option A is the whole sphere.",
   tag:"Hemisphere CSA"},

  {q:"A solid sphere of radius `6 cm` is melted and recast into a solid cylinder of radius `6 cm`. The height of the cylinder is:",
   o:["6 cm","8 cm","12 cm","4 cm"],
   a:1,
   why:"**Volume is conserved when melting**: (4/3)πr³ = πR²h. With r = R = 6: (4/3) × 216 = 36h, so 288 = 36h and `h = 8 cm`. Option A (6) assumes h = r, and option C (12) doubles the radius instead of using the volume equation.",
   tag:"Melt and recast"},

  {q:"The volume of a regular tetrahedron of edge `a` is:",
   o:["(a³√2)/12","(a³√3)/12","a³/6","(a³√2)/6"],
   a:0,
   why:"**Volume = (a³√2)/12** — derived from V = (1/3) × base area × height with base area = (√3/4)a² and height = a√(2/3). Option B replaces √2 with √3, and option C drops the surd entirely.",
   tag:"Tetrahedron"},

  {q:"A toy is a hemisphere of radius `3.5 cm` topped with a cone of the same radius and height `3.5 cm`. The total surface area of the toy is (π = 22/7):",
   o:["214.5 cm²","115.5 cm²","77 cm²","192.5 cm²"],
   a:1,
   why:"**Total SA = hemisphere curved + cone curved** = 2πr² + πrl. Slant height l = √(3.5² + 3.5²) = 3.5√2. So SA = 2 × (22/7) × 12.25 + (22/7) × 3.5 × 3.5√2 = 77 + 38.5 = `115.5 cm²`. Option C (77) is just the hemisphere part, and option A counts the flat base that is inside the toy.",
   tag:"Combined solid"},

  {q:"A right pyramid on a square base has base edge `10 cm` and slant height `13 cm`. Its lateral surface area is:",
   o:["130 cm²","260 cm²","520 cm²","169 cm²"],
   a:1,
   why:"**Lateral SA = ½ × perimeter × slant height** = ½ × 40 × 13 = `260 cm²`. Option A (130) uses half the perimeter again — dividing by 4 instead of using the full perimeter — and option C (520) forgets the half.",
   tag:"Pyramid LSA"}
]},

 {h:"QUESTIONS — solids inside solids, the pyramid and the tetrahedron",
  mcq:[
  {q:"The largest sphere that can be cut from a cube of edge 12 cm has volume:",
   o:["288π cm³","2304π cm³","1728 cm³","144π cm²"],
   a:0,
   why:"**A sphere inscribed in a cube touches the six faces, so its diameter is the edge and r = a/2** = 6 cm. Then **V = (4/3)πr³** = (4/3)π × 216 = `288π cm³`. Option B uses the edge itself as the radius; option C is the cube's own volume a³; option D is the sphere's surface 4πr² = 144π cm², an area where a volume was asked.",
   d:"s-sphere-in-cube",
   tag:"Sphere in a cube"},

  {q:"A cube of edge 4 cm is just enclosed by a sphere. The radius of the sphere is:",
   o:["4√3 cm","2√2 cm","2√3 cm","2 cm"],
   a:2,
   why:"**A sphere circumscribing a cube has the cube's body diagonal as its diameter, so 2r = a√3** and r = 4√3/2 = `2√3 cm`. Option B is half the **face** diagonal a√2 — the standard mix-up between the face diagonal and the body diagonal. Option D is a/2, which is the radius of the **inscribed** sphere, and option A is the whole diagonal left undivided.",
   tag:"Cube in a sphere"},

  {q:"A sphere of radius `r` just fits inside a cylinder of radius `r` and height `2r`. The ratio of the curved surface of the cylinder to the surface of the sphere is:",
   o:["2 : 1","1 : 1","3 : 2","2 : 3"],
   a:1,
   why:"**Cylinder CSA = 2πrh = 2πr(2r) = 4πr², and the sphere's surface = 4πr²** — the two are equal, so the ratio is `1 : 1`, and that coincidence is the only reason the question is asked. Option D is the **volume** ratio of sphere to cylinder, (4/3)πr³ : 2πr³ = `2 : 3`, and it is the one most often ticked by mistake.",
   d:"s-cyl-in-sphere",
   tag:"Sphere in a cylinder"},

  {q:"The largest right circular cone that can be cut from a cube of edge 6 cm has volume:",
   o:["54π cm³","72π cm³","216 cm³","18π cm³"],
   a:3,
   why:"**The cone's base is the circle inscribed in one face, so r = a/2 = 3 cm, and its height is the full edge, h = 6 cm; V = (1/3)πr²h** = (1/3)π × 9 × 6 = `18π cm³`. In general the largest cone in a cube is πa³/12. Option A drops the third, option B uses the edge as the radius, and option C is the cube itself.",
   tag:"Cone in a cube"},

  {q:"The lateral surface area of a regular right pyramid is:",
   o:["½ × base perimeter × slant height","base perimeter × slant height","½ × base perimeter × height","½ × base area × slant height"],
   a:0,
   why:"**LSA = ½ × perimeter of the base × slant height**, because each lateral face is a triangle whose base is one side of the base and whose height is the slant height. **TSA = LSA + base area.** Option C puts the vertical height where the slant height belongs — the two are different lengths and the slant height is the longer — and option B loses the ½ that comes from the triangles.",
   d:"s-pyramid-square",
   tag:"Pyramid LSA"},

  {q:"A right pyramid stands on a square base of side 6 cm and has height 10 cm. Its volume is:",
   o:["360 cm³","120 cm³","180 cm³","60 cm³"],
   a:1,
   why:"**Volume of a pyramid = (1/3) × base area × height** = (1/3) × 36 × 10 = `120 cm³`. Option A is base area × height, which is the **prism** on the same base — a pyramid is one third of it, and dropping that third is the commonest slip. Option C halves instead of thirding, and option D takes the base to be a triangle of half the area.",
   tag:"Pyramid volume"},

  {q:"A right pyramid on a square base of side 16 cm has slant height 17 cm. Its total surface area is:",
   o:["544 cm²","1088 cm²","256 cm²","800 cm²"],
   a:3,
   why:"**LSA = ½ × base perimeter × slant height** = ½ × 64 × 17 = 544 cm², and **TSA = LSA + base area** = 544 + 16² = `800 cm²`. Option A is the lateral surface with the base left off, which is the trap; option B forgets the ½; option C is the base alone. The vertical height here would be √(17² − 8²) = 15 cm, and it is not what the lateral surface uses.",
   tag:"Pyramid TSA"},

  {q:"For a right pyramid on a square base of side `a` and height `h`, the slant height is:",
   o:["√(h² + a²/2)","√(h² + a²/4)","√(h² + a²)","√(h² − a²/4)"],
   a:1,
   why:"**Slant height = √(h² + (a/2)²) = √(h² + a²/4)** — the right triangle drops from the apex down the axis and out to the **mid-point of a base edge**, a distance a/2 from the centre. Option A, **√(h² + a²/2)**, is the **lateral edge**, which reaches a corner, half a diagonal or a/√2 out. The question trades on those two lengths, and they are never equal.",
   d:"s-pyramid-square",
   tag:"Slant height"},

  {q:"A right pyramid on a square base of side 6 cm has height 3 cm. The length of each lateral edge is:",
   o:["3√2 cm","6√2 cm","3√5 cm","3√3 cm"],
   a:3,
   why:"**Lateral edge = √(h² + a²/2)** = √(9 + 18) = √27 = `3√3 cm`, because the edge runs to a corner, which is half a diagonal — 3√2 cm — out from the centre of the base. Option A is the **slant height** √(h² + a²/4) = √(9 + 9) = 3√2 cm, the distance to the mid-point of a side; option B is the base's whole diagonal; option C is √(h² + a²), using the full side instead of half a diagonal.",
   tag:"Lateral edge"},

  {q:"The total surface area of a regular tetrahedron of edge `a` is:",
   o:["(√3/4)a²","4a²","√3a²","(3√3/2)a²"],
   a:2,
   why:"**A regular tetrahedron has four equilateral faces, each of area (√3/4)a², so its total surface is 4 × (√3/4)a² = √3a².** Option A is one face only, which is the trap; option B is four square faces, which a tetrahedron does not have; option D is the area of a regular hexagon of side a. There is no base to leave out here — all four faces are alike.",
   d:"s-tetrahedron",
   tag:"Tetrahedron"},

  {q:"A regular tetrahedron has edge 6 cm. Its volume and its height are:",
   o:["18√2 cm³ and 2√6 cm","18√2 cm³ and 3√3 cm","36√2 cm³ and 2√6 cm","18√3 cm³ and 2√6 cm"],
   a:0,
   why:"**V = a³/(6√2)** = 216/(6√2) = 36/√2 = `18√2 cm³`, and **h = a√(2/3)** = 6 × √2/√3 = `2√6 cm`. Option B gives the height as (√3/2)a = 3√3 cm, which is the **median of one face**, not the height of the solid — a face's median leans, so it is longer than the vertical height. Option C is a³/(3√2), twice the volume.",
   tag:"Tetrahedron"},

  {q:"A toy is a cone of radius 7 cm and height 24 cm standing on a hemisphere of the same radius. Taking π = 22/7, the total surface area of the toy is:",
   o:["1012 cm²","550 cm²","858 cm²","1166 cm²"],
   a:2,
   why:"The cone's slant height is **l = √(r² + h²)** = √(49 + 576) = 25 cm, so the exposed surface is **πrl + 2πr²** = 550 + 308 = `858 cm²`. The circle where the cone meets the hemisphere is inside the solid and belongs to neither part, so option A — which adds that πr² = 154 cm² back — is the trap. Option B is the cone's curved surface alone and option D adds both flat faces.",
   d:"s-cone-hemi",
   tag:"Cone on a hemisphere"},

  {q:"In the figure, a solid is made of a cylinder of radius 7 cm and height 10 cm with a cone of slant height 25 cm at one end and a hemisphere at the other. Taking π = 22/7, its total surface area is:",
   o:["1298 cm²","990 cm²","1452 cm²","1606 cm²"],
   a:0,
   why:"Add only the **exposed** surfaces: **2πrh + πrl + 2πr²** = 440 + 550 + 308 = `1298 cm²`. The two circles where the cone and the hemisphere join the cylinder lie inside the solid, so option C, which adds one of them (πr² = 154 cm²), and option D, which adds both, are over-counts. Option B leaves the hemisphere's dome out altogether. A tent of the same shape without the hemisphere would take **2πrh + πrl** of canvas and no floor.",
   d:"s-cyl-cone-hemi",
   tag:"Composite solid"}
 ],
  note:"Every question above is answered by one line of the sheet. If an answer came out as an area where a volume was asked, or the other way round, go back to the first two rows of the sheet before going on."}
]
},

/* ============================================================ 8 — 3D: melting, recasting and scaling (28 questions) */
{
id:"men-3d-melt", n:"3D: melting, recasting and scaling", hy:1,
w:"One principle — volume is conserved and surface area is not — plus knowing which power a ratio is raised to: melting, recasting, displacement, flow and scaling.",
quick:[
 "**Melting, recasting, drawing into a wire, dropping into water: the volume is the same before and after.** The surface area is not, and neither is any single length. Every question in this topic is that one equation.",
 "**One sphere of radius R recast into n spheres of radius r gives n = (R/r)³** — the cube of the ratio, never the square. The n small spheres together carry **∛n times** the original surface area, so 8 of them have twice the surface and 64 of them four times.",
 "**Rise in level = V/(πr²)** in a cylindrical vessel and **V/(lb)** in a rectangular one. The radius and the base are the **vessel's**, not the submerged solid's.",
 "**Volume delivered = cross-section area × speed × time = πr²vt** for a round pipe. Put the speed and the lengths in the same unit before multiplying, and remember 1 litre = 1000 cm³.",
 "**Multiply every linear dimension by k and every length goes as k, every area as k² and every volume as k³.** A 20% rise in each edge raises the surface by **44%** and the volume by **72.8%**.",
 "**Cone : hemisphere : cylinder on the same base and of the same height = 1 : 2 : 3.** A cone cut parallel to its base into two equal volumes gives heights in the ratio **1 : (∛2 − 1)**.",
 "**Hollow sphere: V = (4/3)π(R³ − r³). Hollow cylinder: V = πh(R² − r²). Weight = volume × density.** The difference of the cubes, never the cube of the difference."
],
blocks:[
 {h:"THE SHEET — one equation, and the power the ratio takes",
  cols:["Asked as","The rule","Where it bites"],
  rows:[
  ["**Melting or recasting**","Volume before = volume after","The surface area is not conserved and no length is conserved — only the volume"],
  ["**One sphere → n small spheres**","n = (R/r)³","R is the big radius. The cube of the ratio, never the square"],
  ["**One solid → n equal pieces**","Every length is divided by ∛n","A cube cut into 8 equal cubes has its edge halved, not divided by 8"],
  ["**Surface after recasting into n**","Total surface = ∛n × the original surface","8 pieces carry twice the surface, 27 pieces three times, 64 pieces four times"],
  ["**Several spheres → one sphere**","R³ = r₁³ + r₂³ + r₃³","Add the cubes of the radii. Adding the radii themselves is the standard slip"],
  ["**Sphere → wire or rod**","(4/3)πR³ = πr²L","r is the wire's radius — halve a given diameter before squaring it"],
  ["**Cone → sphere or spheres**","(1/3)πr²h = (4/3)πR³","Both constants survive. Dropping the cone's 1/3 multiplies the count by three"],
  ["**Hollow sphere (shell)**","V = (4/3)π(R³ − r³)","Difference of the cubes, never (R − r)³"],
  ["**Hollow cylinder (pipe)**","V = πh(R² − r²)","The same warning one power down: not (R − r)²"],
  ["**Rise in a cylindrical vessel**","rise = V/(πr²)","r is the vessel's radius. Dividing by the solid's own cross-section is the commonest error"],
  ["**Rise in a rectangular vessel**","rise = V/(lb)","lb is the base area, so dividing by l alone is out by the whole factor b"],
  ["**Volume of water displaced**","= the volume of the part submerged","A fully submerged solid displaces all of itself, whatever its shape"],
  ["**Flow through a pipe**","volume = πr²vt = cross-section × speed × time","Convert m/s to cm/s, or cm² to m², before multiplying"],
  ["**Area a canal can irrigate**","area = volume of water / depth of standing water","The depth is given in centimetres and the field is in metres"],
  ["**Scaling by k**","length k, area k², volume k³","Three different powers from one ratio"],
  ["**Each dimension up by x%**","Surface up by (2x + x²/100)%; the volume is multiplied by k³ with k = 1 + x/100","x = 20 gives 44% on the surface and 72.8% on the volume"],
  ["**Volumes in the ratio a³ : b³**","Lengths a : b, surfaces a² : b²","Take the cube root first, then square it"],
  ["**Cone : hemisphere : cylinder**","1 : 2 : 3, on the same base and of the same height","The hemisphere's height is its own radius, so the common height is r"],
  ["**Cone cut into two equal volumes**","Heights of small cone to frustum = 1 : (∛2 − 1)","Equal volumes, not equal heights — the small cone takes nearly four fifths of the height"],
  ["**Weight of a solid**","weight = volume × density","For a hollow solid use the volume of the metal, not the outer volume"]
 ]},

 {careful:"**Volume is conserved; surface area is not.** When one sphere is melted into `n` equal spheres the metal is the same but the skin is **∛n times** as much — 64 small spheres have four times the surface of the sphere they came from. Any option saying the surface stays the same, or that it goes up `n` times, is there for whoever assumed the wrong one."},

 {careful:"In a displacement question the rise is **V/(πr²)** with `r` the **vessel's** radius, and **V/(lb)** with `l` and `b` the **vessel's** base. Dividing the solid's volume by the solid's own cross-section is the single commonest wrong answer in this topic, and it is always offered."},

 {careful:"For a shell the metal is **(4/3)π(R³ − r³)** and for a pipe it is **πh(R² − r²)** — the *difference of the powers*, not the power of the difference. `(R − r)³` and `(R − r)²` are both offered as options and both are wrong."},

 {h:"QUESTIONS — melting and recasting",
  mcq:[
  {q:"A solid metal shape is melted down and recast into a shape of a different kind. Which quantity is the same before and after?",
   o:["Its volume","Its total surface area","Its curved surface area","Its greatest length"],
   a:0,
   why:"**Melting conserves the volume and nothing else: volume before = volume after.** The metal is the same quantity of metal, so every question in this topic is that one equation written out. Option B is the tempting one, because a surface feels as physical as a volume — but recasting one sphere into many spheres multiplies the surface by **∛n** while leaving the volume alone.",
   tag:"The principle"},

  {q:"A solid sphere of radius `R` is melted and recast into `n` identical small spheres of radius `r`. Then `n` equals:",
   o:["(R/r)²","(R/r)³","R/r","(4/3)(R/r)³"],
   a:1,
   why:"**(4/3)πR³ = n × (4/3)πr³, so n = (R/r)³.** The constant (4/3)π sits on both sides and cancels, which is why option D — the ratio with (4/3) still attached — is wrong. Option A is the ratio of the **surface areas**, and using a square where the question needs a cube is the standard slip here.",
   tag:"n = (R/r)³"},

  {q:"A solid sphere of radius 9 cm is melted and recast into solid spheres of radius 3 cm. The number of spheres formed is:",
   o:["3","9","27","81"],
   a:2,
   why:"**n = (R/r)³** = (9/3)³ = 3³ = `27`. Option A is the ratio of the radii and option B is its square, the ratio of the surface areas — both are offered because the linear and the squared ratio are what the eye reaches for first. Option D is 9³/3², a mixed power that comes from cubing one radius and squaring the other.",
   tag:"n = (R/r)³"},

  {q:"A solid sphere is melted and recast into 64 identical smaller spheres. The total surface area of those 64 spheres, compared with the surface area of the original sphere, is:",
   o:["64 times the original","16 times the original","the same as the original","4 times the original"],
   a:3,
   why:"**Recasting one sphere into n equal spheres multiplies the total surface area by ∛n.** Each small radius is R/∛64 = R/4, so the total surface is 64 × 4π(R/4)² = **4 × 4πR²**, four times the original. Option C is the trap for anyone who carries conservation across from the volume to the surface; option A applies the factor `n` itself.",
   tag:"Surface, not volume"},

  {q:"A solid metal sphere of radius 3 cm is melted and drawn into a wire of diameter 0.2 cm. The length of the wire is:",
   o:["9 m","36 m","18 m","3600 m"],
   a:1,
   why:"**Volume is conserved: (4/3)πR³ = πr²L.** The sphere is (4/3)π(3³) = 36π cm³, and the wire's radius is 0.1 cm, so 0.01πL = 36π, giving L = 3600 cm = `36 m`. Option D is that same length left in centimetres; option A comes from using the diameter 0.2 cm as the radius, which divides the length by four; option C uses (2/3)πR³, the hemisphere.",
   tag:"Sphere → wire"},

  {q:"A solid right circular cone of base radius 6 cm and height 27 cm is melted and recast into solid spheres of radius 3 cm. The number of spheres is:",
   o:["9","27","18","8"],
   a:0,
   why:"**(1/3)πr²h = n × (4/3)πR³.** The cone is (1/3)π(36)(27) = 324π cm³ and each sphere is (4/3)π(27) = 36π cm³, so n = `9`. Option B is what dropping the cone's 1/3 gives — 972π ÷ 36π = 27, exactly three times too many — and option C comes from using (2/3)πR³, the hemisphere, for each ball. Option D is (6/3)³, the ratio of the radii cubed, which has nothing to do with a cone.",
   tag:"Cone → spheres"},

  {q:"A hollow spherical shell of external radius 6 cm and internal radius 3 cm is melted and recast into a solid cylinder of radius 6 cm. The height of the cylinder is:",
   o:["8 cm","1.75 cm","7 cm","1 cm"],
   a:2,
   why:"**Metal in a shell = (4/3)π(R³ − r³)**, so the volume is (4/3)π(216 − 27) = 252π cm³; setting πr²h = 252π with r = 6 gives 36h = 252 and h = `7 cm`. Option A ignores the hollow altogether and melts the whole 288π outer sphere; option D uses (4/3)π(R − r)³ = 36π, the cube of the difference instead of the difference of the cubes; option B uses the cylinder's diameter 12 cm as its radius.",
   tag:"Shell → cylinder"},

  {q:"A solid cube of edge 12 cm is melted and recast into 8 identical solid cubes. The edge of each small cube is:",
   o:["1.5 cm","3 cm","4 cm","6 cm"],
   a:3,
   why:"**Volume is conserved, and volume goes as the cube of the edge, so dividing the volume by n divides every length by ∛n.** Here 12³ = 1728 cm³, each small cube is 216 cm³, and ∛216 = `6 cm` — the edge is halved because ∛8 = 2. Option A divides the edge by 8 instead of by ∛8, which is the commonest wrong answer; option C divides it by 3.",
   tag:"Divide by ∛n"},

  {q:"Three solid spheres of radii 3 cm, 4 cm and 5 cm are melted together and recast into one solid sphere. Its radius is:",
   o:["6 cm","12 cm","4 cm","5 cm"],
   a:0,
   why:"**Adding volumes means adding the cubes: R³ = r₁³ + r₂³ + r₃³** = 27 + 64 + 125 = 216, so R = `6 cm`. Option B adds the radii themselves, 3 + 4 + 5 = 12, which is the trap the question is built on; option C is their average and option D is simply the largest of the three. One sphere holding three must be bigger than the biggest of them and smaller than the sum of the three radii, which is the check to run before ticking.",
   tag:"Add the cubes"},

  {q:"A cone, a hemisphere and a cylinder stand on equal bases and have the same height. The ratio of their volumes is:",
   o:["2 : 1 : 3","1 : 2 : 3","1 : 3 : 2","3 : 2 : 1"],
   a:1,
   why:"**A hemisphere's height is its own radius, so the common height is r**, and the three volumes are **(1/3)πr³, (2/3)πr³ and πr³** — the ratio `1 : 2 : 3`. Option D is the same ratio read backwards, from naming the cylinder first, and option A swaps the cone and the hemisphere. The line worth keeping is that the cone is a third of the cylinder and the hemisphere two thirds of it.",
   tag:"1 : 2 : 3"},

  {q:"A solid cylinder of radius `6 cm` and height `32 cm` is melted and recast into identical spheres of radius `2 cm`. The number of spheres is:",
   o:["27","54","108","36"],
   a:2,
   why:"**Cylinder volume = πr²h = π × 36 × 32 = 1152π cm³. Sphere volume = (4/3)π(2)³ = (32/3)π cm³.** n = 1152π ÷ (32/3)π = 1152 × 3/32 = `108`. Option A (27) is what forgetting the factor of 3 in the sphere formula gives.",
   tag:"Cylinder to spheres"},

  {q:"A metallic sphere of radius `6 cm` is melted and drawn into a wire of radius `0.2 cm`. The length of the wire is:",
   o:["7200 cm","1800 cm","3600 cm","14400 cm"],
   a:0,
   why:"**Sphere volume = (4/3)π(6)³ = 288π cm³. Wire is a cylinder: πR²L = π × 0.04 × L.** So L = 288/0.04 = `7200 cm` = 72 m. Option B (1800) uses the diameter (0.4) instead of the radius in the area, giving a cross-section four times too large.",
   tag:"Sphere to wire"},

  {q:"A solid cone of base radius `3 cm` and height `4 cm` is melted and recast into solid spheres of radius `1 cm`. The number of spheres formed is:",
   o:["12","36","3","9"],
   a:3,
   why:"**Cone volume = (1/3)πr²h = (1/3)π × 9 × 4 = 12π cm³. Sphere volume = (4/3)π(1)³ = (4/3)π cm³.** n = 12π ÷ (4/3)π = 12 × 3/4 = `9`. Option A (12) divides by the sphere radius instead of its volume.",
   tag:"Cone to spheres"},

  {q:"A cube of edge `6 cm` is dropped into a rectangular tank with a base `18 cm` by `12 cm`. If the cube sinks fully, the water rises by:",
   o:["2 cm","1 cm","3 cm","0.5 cm"],
   a:1,
   why:"**Rise = volume of cube ÷ base area of tank = 6³/(18 × 12) = 216/216 = `1 cm`**. Option A (2) doubles it, perhaps from halving the base by mistake; option C (3) divides by one dimension only.",
   tag:"Displacement"},

  {q:"If the radius of a sphere is halved, its volume becomes:",
   o:["one half of the original","one quarter of the original","one eighth of the original","one sixteenth of the original"],
   a:2,
   why:"**Volume = (4/3)πr³ scales as the cube of the radius.** Halving the radius gives (1/2)³ = `1/8` of the original volume. Option B (1/4) squares the ratio instead of cubing it — the surface-area scaling, not the volume scaling.",
   tag:"Scaling volume"},

  {q:"A solid metallic hemisphere of radius `6 cm` is melted and recast into a solid right circular cone of base radius `6 cm`. The height of the cone is:",
   o:["6 cm","18 cm","12 cm","9 cm"],
   a:2,
   why:"**Hemisphere volume = (2/3)πr³ = (2/3)π × 216 = 144π cm³. Cone volume = (1/3)πr²h = (1/3)π × 36 × h = 12πh.** So 12πh = 144π, h = `12 cm`. Option A (6) is the radius itself; option B (18) uses the full sphere volume instead of the hemisphere.",
   tag:"Hemisphere to cone"}
]},

 {h:"QUESTIONS — displacement, flow and scaling",
  mcq:[
  {q:"A solid of volume `V` is dropped into a cylindrical vessel of base radius `r` holding water, and sinks completely. The water level rises by:",
   o:["V/(2πr²)","πr²/V","V/(πr²)","V/(2πr)"],
   a:2,
   why:"**The solid displaces its own volume, and that volume spreads over the vessel's base, so rise = V/(πr²).** In a rectangular vessel the same reasoning gives **V/(lb)**. Option D divides by the circumference 2πr instead of the base area, and option A halves the base area — both come from reaching for a surface-area formula when a base area is wanted.",
   tag:"Rise = V/(πr²)"},

  {q:"A solid sphere of radius 9 cm is dropped into a cylindrical vessel of radius 18 cm partly filled with water, and is fully submerged. The water level rises by:",
   o:["12 cm","9 cm","1.5 cm","3 cm"],
   a:3,
   why:"**rise = V/(πR²)** with `R` the vessel's radius. The sphere is (4/3)π(729) = 972π cm³ and the vessel's base is π(18²) = 324π cm², so the rise is 972π ÷ 324π = `3 cm`. Option A divides by the **sphere's** own cross-section π(9²) instead of the vessel's base — the standard error — and option C uses (2/3)πr³, the hemisphere, for the ball.",
   tag:"Displacement"},

  {q:"A solid cube of edge 10 cm is lowered until fully submerged into a rectangular tank whose base is 25 cm by 20 cm and which is partly filled with water. The water level rises by:",
   o:["10 cm","2 cm","4 cm","1 cm"],
   a:1,
   why:"**rise = V/(lb)**, the displaced volume over the tank's base area. The cube displaces 10³ = 1000 cm³ and the base is 25 × 20 = 500 cm², so the rise is `2 cm`. Option A divides by the cube's own face, 100 cm², instead of the tank's base — the standard error; option C uses 25 × 10, the cube's edge in place of the tank's width; option D is the rise when only half the cube is under the water, which is a different question.",
   tag:"Rise = V/(lb)"},

  {q:"Water flows through a round pipe of internal radius `r` at a speed `v`. The volume delivered in time `t` is:",
   o:["2πrvt","πr²vt","πr²v","(1/3)πr²vt"],
   a:1,
   why:"**Volume = cross-section area × speed × time = πr²vt**, because in time `t` the water moves forward a length `vt` and fills a cylinder of that length. Option A uses 2πr, the circumference, where the cross-section πr² belongs — a curved-surface formula in a volume question. Option C is the volume per unit time, the answer one step before the end, and option D borrows the cone's third for no reason.",
   tag:"Flow"},

  {q:"A pipe of internal radius 7 cm discharges water at 4 m per second. Taking π = 22/7, the volume discharged in 10 seconds is:",
   o:["154 litres","61.6 litres","616 litres","6.16 litres"],
   a:2,
   why:"**Volume = πr²vt** with everything in centimetres: π(7²) = 154 cm², the speed is 400 cm/s, so 154 × 400 × 10 = 616000 cm³, and 1 litre = 1000 cm³ gives `616 litres` with π = 22/7. Option B is one second's worth of water, with the 10 forgotten; option A takes the 7 cm as a diameter and so quarters the cross-section; option D leaves the speed as 4 cm/s.",
   tag:"Flow"},

  {q:"Water flows in a canal 6 m wide and 1.5 m deep at 10 km per hour. If 8 cm of standing water is needed, the area it can irrigate in 30 minutes is:",
   o:["562500 m²","45000 m²","56250 m²","1125000 m²"],
   a:0,
   why:"**Volume = cross-section × speed × time**, then **area = volume / depth of standing water**. In 30 minutes the water travels 5 km, so the volume is 6 × 1.5 × 5000 = 45000 m³, and 45000 ÷ 0.08 = `562500 m²`. Option B is that volume offered as the area — stopping one step before the end is the commonest slip; option C reads 8 cm as 0.8 m and option D uses a full hour's flow.",
   tag:"Irrigation"},

  {q:"If every linear dimension of a solid is multiplied by `k`, then:",
   o:["every area and every volume are multiplied by k","every area is multiplied by k³ and every volume by k²","every surface area is multiplied by k and every volume by k²","every surface area is multiplied by k² and every volume by k³"],
   a:3,
   why:"**One ratio, three powers: lengths go as k, areas as k² and volumes as k³.** That single line answers every scaling question in the chapter, forwards and backwards. Option B is the two powers swapped, which is the trap — an area is a product of two lengths and a volume a product of three, so the exponent is the number of lengths multiplied together.",
   tag:"k, k², k³"},

  {q:"Each edge of a cube is increased by 20%. Its volume increases by:",
   o:["72.8%","44%","60%","172.8%"],
   a:0,
   why:"**Volume goes as k³ with k = 1 + x/100**, so k = 1.2 and the volume becomes 1.2³ = 1.728 times, an increase of `72.8%`. Option D is that factor read as the increase — the answer one step before the end. Option B is the **surface** increase, (2x + x²/100)% = 44%, and option C is the naive 3 × 20%, which ignores the cross terms in the cube.",
   tag:"72.8%"},

  {q:"The surface area of a sphere increases by 44%. Its radius increases by:",
   o:["20%","22%","44%","72.8%"],
   a:0,
   why:"**Surface area goes as k², so k² = 1.44 and k = 1.2** — the radius increases by `20%`. Option B halves the percentage instead of taking the square root of the factor, which is only right for very small changes; option D is what the **volume** does when the radius rises 20%, since 1.2³ = 1.728. The pair worth memorising is 20% on the radius, 44% on the surface and 72.8% on the volume.",
   tag:"Backwards"},

  {q:"The volumes of two spheres are in the ratio `64 : 27`. The ratio of their surface areas is:",
   o:["4 : 3","16 : 9","64 : 27","8 : 27"],
   a:1,
   why:"**Volumes go as k³ and surfaces as k², so take the cube root of the volume ratio and then square it.** ∛64 : ∛27 = 4 : 3 is the ratio of the radii, and squaring gives `16 : 9`. Option A is the ratio of the radii, the step before the end; option C repeats the volume ratio, which is the trap for anyone who reads the two quantities as interchangeable.",
   tag:"Cube root, then square"},

  {q:"A right circular cone is cut by a plane parallel to its base into two parts of equal volume. The heights of the small cone and of the frustum are in the ratio:",
   o:["1 : ∛2","(∛2 − 1) : 1","1 : (∛2 − 1)","1 : 1"],
   a:2,
   why:"**The plane cuts off a similar cone, so a small cone of height kH has volume k³ times the whole.** Equal volumes means k³ = ½, so k = 1/∛2: the small cone's height is H/∛2 and the frustum's is H − H/∛2, and dividing both by H/∛2 leaves `1 : (∛2 − 1)`. Option D is the answer to equal *heights*, not equal volumes, and is the trap — the small cone needs nearly four fifths of the height (H/∛2 ≈ 0.79H) to hold half the volume, so the cut lies much nearer the base than the mid-point.",
   d:"s-cone-cut",
   dcap:"The plane parallel to the base cuts off a cone similar to the whole, with the frustum below it.",
   tag:"Equal volumes"},

  {q:"A hollow cylindrical pipe is 21 cm long, with outer radius 4 cm and inner radius 3 cm. The metal weighs 5 g per cm³. Taking π = 22/7, the pipe weighs:",
   o:["5.28 kg","2.97 kg","0.33 kg","2.31 kg"],
   a:3,
   why:"**Metal in a pipe = πh(R² − r²)** and **weight = volume × density**. With π = 22/7 the metal is (22/7) × 21 × (16 − 9) = 462 cm³, so the weight is 462 × 5 = 2310 g = `2.31 kg`. Option A ignores the hole and weighs the whole outer cylinder; option C uses (R − r)² = 1 in place of R² − r² = 7, the power of the difference instead of the difference of the powers; option B weighs the inner cylinder, which is the air.",
   tag:"Weight"}
 ],
  note:"Every question above is the same sentence twice: the volume before equals the volume after. If an answer came out ugly, check first whether a diameter was used where a radius belongs, and second whether the metres and the centimetres were made to agree."}
]
}

]});
