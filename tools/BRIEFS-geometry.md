# Geometry — the brief for each topic

Twelve topics. Four of them are circle topics, because four fifths of the
geometry in an SSC paper is the circle. Cover what your own brief lists and
leave the rest to the topic that owns it.

**Areas and volumes are not here.** They belong to the Mensuration subject. A
geometry question may use an area *ratio* (similar triangles, triangles on the
same base) but must not turn into a mensuration question.

**Figures.** Use `d:"<key>"` only with a key from `DIAGRAMS.md`. Each brief
names the keys it may use. A question that says "in the figure" must carry
one; a question that reads perfectly well in words should not.

---

## geo-lines-angles — "Lines, angles and the parallel-line results"

- Complementary and supplementary angles; a linear pair; vertically opposite
  angles; angles round a point summing to `360°`; adjacent angles.
- A transversal across two parallel lines: corresponding angles equal,
  alternate interior angles equal, co-interior (allied) angles supplementary —
  and the converses, which are what proves two lines parallel.
- The bisectors of a pair of co-interior angles meet at **90°**; the bisectors
  of two adjacent supplementary angles are perpendicular.
- The angle between the bisectors of two vertically opposite angles.
- Two angles whose arms are parallel are equal or supplementary; two angles
  whose arms are perpendicular likewise.
- The clock: the angle between the hands is **|30H − 5½M|** degrees, the hands
  coincide every `65 5/11` minutes, and they are at right angles 44 times a
  day. Three questions at most.
- Angles in ratio questions: "two supplementary angles are in the ratio 7 : 2".

Triangle angle sums belong to `geo-triangle-basics`. Figures: none needed.

## geo-triangle-basics — "The triangle: sides, angles and inequalities"

- The angle sum `180°`; the **exterior angle equals the sum of the two
  interior opposite angles**; the exterior angles of any polygon sum to 360°.
- The triangle inequality in both directions: the sum of any two sides exceeds
  the third, and `|a − b| < c < a + b`. The "how many triangles with these
  sides" and "the third side lies between" questions.
- The greater side faces the greater angle, and the converse.
- Classification by sides and by angles, and the test by squares:
  `a² = b² + c²` right-angled, `a² > b² + c²` obtuse, `a² < b² + c²` acute,
  where a is the longest side.
- The angles of a triangle in a given ratio.
- An isosceles triangle's base angles; an equilateral triangle's angles; the
  altitude of an isosceles triangle bisects the base.
- The sum of any two sides exceeds twice the median to the third.
- The perimeter comparison: the sum of the three medians is less than the
  perimeter.

Figures: `t-exterior`, `t-isosceles`.

## geo-centres — "The four centres of a triangle"

- **Centroid G** — the medians meet there and it divides each **2 : 1** from
  the vertex; it is always inside.
- **Incentre I** — the angle bisectors meet there; **∠BIC = 90° + A/2**;
  `r = Δ/s`; it is always inside and is equidistant from the three sides.
- **Circumcentre O** — the perpendicular bisectors meet there;
  **∠BOC = 2A**; `R = abc/4Δ`; inside an acute triangle, **at the midpoint of
  the hypotenuse** of a right triangle, outside an obtuse one.
- **Orthocentre H** — the altitudes meet there; **∠BHC = 180° − A**; at the
  right-angle vertex of a right triangle, outside an obtuse one.
- The **Euler line**: O, G and H are collinear with `OG : GH = 1 : 2`.
- In an equilateral triangle all four coincide, `R = a/√3`, `r = a/(2√3)`,
  and therefore **R = 2r**.
- In a right triangle: `R = hypotenuse/2` and `r = (a + b − c)/2`.
- The tangent lengths from the vertices to the incircle are `s − a`, `s − b`,
  `s − c`.
- Which centre is equidistant from the vertices and which from the sides —
  asked directly, every year.

Figures: `t-centroid`, `t-incentre`, `t-circumcentre`, `t-orthocentre`,
`t-centres-equi`, `c-incircle-tri`, `c-circum-tri`, `c-tangent-lengths`.
Apollonius and the median length belong to `geo-cevians`.

## geo-cevians — "Medians, bisectors, altitudes and Apollonius"

- **Apollonius' theorem**: `AB² + AC² = 2(AD² + BD²)` where AD is the median
  to BC. Both the statement and one numeric use.
- The length of a median: `4m² = 2b² + 2c² − a²`.
- The sum of the squares of the three medians is `¾(a² + b² + c²)`.
- **The angle bisector theorem**: `BD/DC = AB/AC`, with the numeric question
  built on it; the external bisector version.
- The length of the internal bisector: `AD² = AB·AC − BD·DC`.
- Altitudes: `h_a = 2Δ/a`, so the altitudes are inversely proportional to the
  sides; the altitude of an equilateral triangle is `(√3/2)a`.
- **The median to the hypotenuse of a right triangle is half the hypotenuse.**
- Area facts: a median halves the area; the three medians cut the triangle
  into **six** triangles of equal area; the triangle formed by the three
  medians as sides has `¾` of the area.
- Where a cevian divides the base in the ratio m : n, the areas divide in the
  same ratio.

Figures: `t-median-apollonius`, `t-angle-bisector`, `t-right-altitude`.

## geo-similar — "Congruence, similarity and the proportionality theorem"

- Congruence: **SSS, SAS, ASA, AAS, RHS** — and that **SSA is not a
  criterion**, which is the thing actually asked.
- Similarity: **AA (or AAA), SSS, SAS**. Congruent triangles are similar with
  ratio 1; similar triangles need not be congruent.
- In similar triangles the ratio of **areas is the square of the ratio** of
  corresponding sides, medians, altitudes, angle bisectors, perimeters,
  inradii and circumradii. This is the single most-asked line of the topic.
- **The basic proportionality (Thales) theorem**: `DE ∥ BC ⇒ AD/DB = AE/EC`,
  and its converse; the corollary `AD/AB = AE/AC = DE/BC`.
- **The midpoint theorem** and its converse.
- Triangles with the same height have areas in the ratio of their bases;
  triangles on the same base and between the same parallels are equal in area.
- The diagonals of a trapezium: the two triangles on the parallel sides are
  similar, so the diagonals cut each other in the ratio of the parallel sides;
  the triangles on the slant sides are equal in area.
- The right triangle's altitude to the hypotenuse creates three similar
  triangles — state the similarity here and leave the length relations to
  `geo-right-triangle`.

Figures: `t-similar`, `t-bpt`, `t-midpoint`, `q-trapezium-diag`.

## geo-right-triangle — "The right triangle: Pythagoras and the standard sets"

- **Pythagoras and its converse.**
- The triples worth recognising: `3-4-5`, `5-12-13`, `8-15-17`, `7-24-25`,
  `9-40-41`, `20-21-29`, and their multiples.
- `30°-60°-90°` sides in the ratio **1 : √3 : 2**; `45°-45°-90°` in
  **1 : 1 : √2**. Where each one turns up.
- The altitude `p` to the hypotenuse: `p = ab/c`, **1/p² = 1/a² + 1/b²**,
  `p² = BD·DC`, `a² = c·BD`.
- The median to the hypotenuse and the circumradius are both `c/2`; the
  inradius is `(a + b − c)/2`.
- The distance between the feet of two ladders, the pole broken by the wind,
  and the two-poles-and-a-wire question — stated geometrically.
- The diagonal of a rectangle `√(l² + b²)`, of a square `a√2`, and the
  three-dimensional diagonal `√(l² + b² + h²)` as a Pythagoras consequence.
- The sum of the squares of the distances from any point to two opposite
  corners of a rectangle equals that for the other two corners (British flag,
  asked occasionally).

Figures: `t-pythagoras`, `t-30-60-90`, `t-45-45-90`, `t-right-altitude`.

## geo-quad-poly — "Quadrilaterals and polygons"

- The angle sum of a quadrilateral `360°`.
- Parallelogram: opposite sides and angles equal, consecutive angles
  supplementary, diagonals bisect each other, each diagonal halves the area,
  and **the sum of the squares of the diagonals equals the sum of the squares
  of the four sides**.
- Rectangle, square, rhombus and kite: which diagonals are equal, which
  bisect at right angles, which bisect the angles. The rhombus:
  `side = ½√(d₁² + d₂²)`. The square: `d = a√2`.
- Trapezium: the line joining the midpoints of the slant sides is `½(a + b)`;
  the segment joining the midpoints of the diagonals is `½(a − b)`.
- **Varignon**: joining the midpoints of any quadrilateral gives a
  parallelogram, with half the area.
- Polygons: interior angle sum `(n − 2)180°`; each interior angle of a regular
  polygon `(n − 2)180/n`; each exterior angle `360/n`; the number of diagonals
  **n(n − 3)/2**; the "how many sides" questions run backwards from each.
- The regular hexagon is six equilateral triangles; its longest diagonal is
  `2a`; its interior angle is `120°`.
- Which quadrilaterals can be cyclic (a parallelogram only if it is a
  rectangle; an isosceles trapezium always) — one question, and leave the
  angle work to `geo-circle-segment`.

Figures: `q-parallelogram`, `q-rhombus`, `q-trapezium`, `q-square-diag`,
`q-kite`, `q-hexagon`, `q-polygon-diag`.

## geo-circle-chord — "The circle: chords, arcs and angles"

- The parts named: centre, radius, diameter, chord, arc, sector, segment,
  secant, tangent.
- **The perpendicular from the centre bisects the chord**, and its converse;
  **chord = 2√(r² − d²)** where d is the distance from the centre.
- Equal chords are equidistant from the centre, subtend equal angles at the
  centre and cut off equal arcs — and the converses.
- Two parallel chords: the distance between them when they are on the same
  side and on opposite sides of the centre. Both cases, because the question
  rarely says which.
- **The angle at the centre is twice the angle at the circumference** on the
  same arc.
- **Angles in the same segment are equal.**
- **The angle in a semicircle is 90°**, and its converse.
- Two chords cutting inside the circle: **PA·PB = PC·PD**.
- Two secants from an external point: the same product rule.
- The diameter is the longest chord; the perpendicular bisector of a chord
  passes through the centre.

Figures: `c-parts`, `c-chord-perp`, `c-chord-equal`, `c-central-inscribed`,
`c-same-arc`, `c-semicircle`, `c-two-chords`, `c-chords-ext`.

## geo-circle-tangent — "Tangents, secants and the alternate segment"

- **The tangent is perpendicular to the radius at the point of contact.**
- From an external point P: the two tangents are equal, `PA² = OP² − r²`, OP
  bisects both the angle between the tangents and the chord of contact, and
  **∠APB + ∠AOB = 180°**.
- **The tangent-secant relation: PT² = PA·PB.**
- **The alternate segment theorem**: the angle between a tangent and a chord
  equals the angle in the alternate segment.
- The tangent lengths from the vertices of a triangle to its incircle are
  `s − a`, `s − b`, `s − c`; the incircle of a right triangle has
  `r = (a + b − c)/2`.
- A quadrilateral circumscribing a circle: **AB + CD = BC + AD** (Pitot).
- The angle between a tangent and a chord drawn through the point of contact,
  where the chord is a diameter.
- How many tangents can be drawn from a point inside, on, and outside a
  circle: 0, 1 and 2.

Figures: `c-tangent-radius`, `c-two-tangents`, `c-tangent-angle`,
`c-tangent-secant`, `c-alternate-seg`, `c-tangent-lengths`.

## geo-circle-segment — "Segments, sectors and cyclic quadrilaterals"

This topic was asked for by name — be thorough, and cover every *type* of
segment question, not only the common one.

- The chord divides the circle into a **major** and a **minor segment**; the
  radii divide it into a major and minor **sector**. Say plainly which is
  which, because half the marks here go on the wrong one being used.
- The angle in the major segment is **acute**, the angle in the minor segment
  is **obtuse**, and the two are **supplementary**. Angles in the same segment
  are equal.
- A chord equal to the radius subtends `60°` at the centre, so the angle in
  its major segment is `30°` and in its minor segment `150°`. The same chain
  for a chord equal to `r√2` (90°, 45°, 135°) and `r√3` (120°, 60°, 120°).
  These three chains are exactly what gets asked.
- **Cyclic quadrilateral**: opposite angles supplementary, and the **exterior
  angle equals the interior opposite angle**; the converse proves four points
  concyclic.
- A cyclic parallelogram is a rectangle; an isosceles trapezium is cyclic; a
  rhombus is cyclic only if it is a square.
- **Ptolemy's theorem**: for a cyclic quadrilateral `AC · BD = AB·CD +
  BC·AD`.
- Concyclic points: the test by equal angles on the same side of a segment.
- The arc and the angle: equal arcs subtend equal angles; the angle is
  proportional to the arc.
- Say in one line that the *area* of a segment and a sector is in the
  Mensuration subject, and do not test the areas here.

Figures: `c-segment`, `c-segment-angles`, `c-arc-sector`, `c-cyclic-quad`,
`c-cyclic-ext`, `c-ptolemy`, `c-concyclic`.

## geo-circle-two — "Two circles: touching, cutting and common tangents"

- The five positions by the distance `d` between the centres: apart
  `d > r₁ + r₂`, touching externally `d = r₁ + r₂`, cutting
  `|r₁ − r₂| < d < r₁ + r₂`, touching internally `d = r₁ − r₂`, one inside the
  other `d < r₁ − r₂`.
- **The number of common tangents in each case: 4, 3, 2, 1, 0.** Asked
  directly.
- **The direct common tangent has length √(d² − (r₁ − r₂)²)**; the
  **transverse common tangent √(d² − (r₁ + r₂)²)**. Which is which, and that
  the transverse one exists only while the circles do not overlap.
- Two circles touching externally: the direct common tangent between the
  points of contact is `2√(r₁r₂)`.
- Two circles cutting: the line of centres is the perpendicular bisector of
  the **common chord**; the length of the common chord from d, r₁ and r₂.
- Three equal circles each touching the other two, and the triangle of
  centres.
- A circle inscribed in a square (`r = a/2`) and circumscribing it
  (`d = a√2`); a circle circumscribing an equilateral triangle
  (`R = a/√3`) and inscribed in it (`r = a/(2√3)`).
- Two circles touching internally with the smaller passing through the centre
  of the larger.

Figures: `c-ext-touch`, `c-int-touch`, `c-intersect`, `c-dct`, `c-tct`,
`c-tangents-count`, `c-three-touch`, `c-in-square`, `c-circum-square`,
`c-equi-in-circle`, `c-circle-in-equi`.

## geo-coord — "Coordinate geometry and the graph of a line"

- The **distance formula** `√((x₂ − x₁)² + (y₂ − y₁)²)`, and the distance from
  the origin.
- The **midpoint** and the **section formula** for internal division
  `((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n))`; the external division version.
- The **centroid** of a triangle `((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3)`.
- The **area of a triangle** `½|x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|`, and
  **collinearity as area zero**.
- **Slope** `m = (y₂ − y₁)/(x₂ − x₁)`; parallel lines have equal slopes;
  **perpendicular lines have m₁m₂ = −1**; a horizontal line has slope 0 and a
  vertical line's slope is undefined.
- The forms of a line: slope-intercept `y = mx + c`, point-slope, two-point,
  and the **intercept form x/a + y/b = 1**. From `ax + by + c = 0` the slope
  is `−a/b` and the intercepts are `−c/a` and `−c/b`.
- **The distance of a point from a line** `|ax₁ + by₁ + c|/√(a² + b²)`, and
  the distance between two parallel lines.
- The area of the triangle a line makes with the axes.
- Reflections in the axes and in the origin; which quadrant a point is in.

No figures — there is no coordinate grid in the catalogue. Keep it to what
SSC asks: nothing about conics, nothing in three dimensions.
