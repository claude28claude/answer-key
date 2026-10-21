# The figure catalogue

These are the only figure keys that exist. A question attaches one with
`d:"<key>"`. A key that is not on this list renders as a visible gap on the
page, so **do not invent keys**.

Each figure is drawn once and reused by every question that needs that
configuration, so a question using a figure must match the figure's own
labelling — the letters below are the letters that are drawn.

---

## Circles — chords and angles

| Key | What is drawn |
| --- | --- |
| `c-parts` | One circle with centre `O`, a radius, a diameter, a chord, an arc and a tangent, each labelled |
| `c-chord-perp` | Chord `AB`, perpendicular `OM` from the centre to it, radius `OA`; `OM = d`, `AM = MB` |
| `c-chord-equal` | Two equal chords `AB` and `CD` with equal perpendicular distances from `O` |
| `c-two-chords` | Chords `AB` and `CD` crossing **inside** at `P` |
| `c-chords-ext` | Two secants from an external point `P` cutting the circle at `A`, `B` and `C`, `D` |
| `c-tangent-secant` | Tangent `PT` and a secant `PAB` from the same external point `P` |
| `c-central-inscribed` | Arc `AB` with the central angle `∠AOB` and the inscribed angle `∠ACB` on the major arc |
| `c-same-arc` | Arc `AB` with two inscribed angles `∠ACB` and `∠ADB` on the same side |
| `c-semicircle` | Diameter `AB`, point `C` on the circle, the right angle at `C` marked |
| `c-arc-sector` | Sector `OAB` with the angle `θ` at the centre and the arc marked |
| `c-segment` | A chord cutting the circle into a shaded **minor** segment and an unshaded major segment, both named |
| `c-segment-area` | The same minor segment shaded, with the triangle `OAB` drawn inside the sector so that segment = sector − triangle is visible |
| `c-segment-angles` | A chord `AB`, one angle in the major segment and one in the minor segment, both marked |
| `c-annulus` | Two concentric circles with the ring between them shaded, radii `R` and `r` |
| `c-quadrant` | A quadrant of a circle with the two bounding radii |

## Circles — tangents

| Key | What is drawn |
| --- | --- |
| `c-tangent-radius` | Tangent at `P` with the radius `OP` and the right angle marked |
| `c-two-tangents` | Two tangents `PA` and `PB` from an external point `P`, with `OP` drawn |
| `c-tangent-angle` | Two tangents from `P` with the angle at `P` and the central angle `∠AOB` both marked |
| `c-alternate-seg` | A tangent at `A`, a chord `AB`, and the angle in the alternate segment `∠ACB` marked equal to the tangent–chord angle |
| `c-incircle-tri` | A triangle with its incircle, centre `I`, radius `r`, touching all three sides |
| `c-circum-tri` | A triangle with its circumcircle, centre `O`, radius `R` |
| `c-tangent-lengths` | A triangle with its incircle and the three pairs of equal tangent lengths marked `s−a`, `s−b`, `s−c` |

## Two circles

| Key | What is drawn |
| --- | --- |
| `c-ext-touch` | Two circles touching externally, centres `O₁` `O₂`, radii `r₁` `r₂`, distance `d = r₁ + r₂` |
| `c-int-touch` | Two circles touching internally, `d = r₁ − r₂` |
| `c-intersect` | Two circles cutting at `A` and `B`, with the common chord `AB` and the line of centres |
| `c-dct` | Two circles apart, with one **direct** common tangent drawn and `d`, `r₁`, `r₂` marked |
| `c-tct` | Two circles apart, with one **transverse** common tangent drawn, crossing the line of centres |
| `c-tangents-count` | Four small panels showing the number of common tangents: apart (4), touching externally (3), intersecting (2), touching internally (1) |
| `c-three-touch` | Three equal circles each touching the other two, with the triangle of centres |

## Circles with other shapes

| Key | What is drawn |
| --- | --- |
| `c-in-square` | A circle inscribed in a square, side `a`, radius `a/2` |
| `c-circum-square` | A square inscribed in a circle, diagonal = diameter |
| `c-equi-in-circle` | An equilateral triangle inscribed in a circle, side `a`, `R = a/√3` |
| `c-circle-in-equi` | A circle inscribed in an equilateral triangle, `r = a/(2√3)` |
| `c-cyclic-quad` | A cyclic quadrilateral `ABCD` with opposite angles marked |
| `c-cyclic-ext` | A cyclic quadrilateral with one side produced and the exterior angle marked equal to the interior opposite angle |
| `c-ptolemy` | A cyclic quadrilateral with both diagonals drawn, sides and diagonals labelled |
| `c-concyclic` | Four points on one circle with the equal angles that prove them concyclic |

## Triangles

| Key | What is drawn |
| --- | --- |
| `t-centroid` | The three medians meeting at `G`, with `AG : GD = 2 : 1` marked |
| `t-incentre` | The three angle bisectors meeting at `I`, with `∠BIC` marked |
| `t-circumcentre` | The three perpendicular bisectors meeting at `O`, with `∠BOC` marked |
| `t-orthocentre` | The three altitudes meeting at `H`, with `∠BHC` marked |
| `t-centres-equi` | An equilateral triangle in which all four centres fall on the same point |
| `t-angle-bisector` | `AD` bisecting `∠A`, with `BD : DC = AB : AC` marked |
| `t-median-apollonius` | Median `AD` to `BC`, used for `AB² + AC² = 2(AD² + BD²)` |
| `t-bpt` | `DE ∥ BC` cutting `AB` at `D` and `AC` at `E` |
| `t-midpoint` | `D` and `E` the midpoints of two sides, `DE ∥ BC` and `DE = ½BC` |
| `t-similar` | Two separate similar triangles with corresponding sides marked |
| `t-exterior` | Exterior angle of a triangle equal to the sum of the two interior opposite angles |
| `t-right-altitude` | A right triangle with the altitude `CD` to the hypotenuse, `p`, `a`, `b`, `c` marked |
| `t-pythagoras` | A right triangle with squares on all three sides |
| `t-30-60-90` | A 30–60–90 triangle with sides `1 : √3 : 2` |
| `t-45-45-90` | A 45–45–90 triangle with sides `1 : 1 : √2` |
| `t-equilateral` | An equilateral triangle with side `a`, height `(√3/2)a` and the centroid distances |
| `t-isosceles` | An isosceles triangle with the altitude to the base bisecting it |
| `t-heron` | A scalene triangle with the three sides `a`, `b`, `c` labelled for Heron's formula |

## Quadrilaterals and polygons

| Key | What is drawn |
| --- | --- |
| `q-parallelogram` | A parallelogram with base, height and both diagonals |
| `q-rhombus` | A rhombus with diagonals `d₁` and `d₂` crossing at right angles |
| `q-trapezium` | A trapezium with parallel sides `a` and `b`, height `h`, and the line joining the midpoints of the slant sides |
| `q-trapezium-diag` | A trapezium with both diagonals drawn, showing the four triangles |
| `q-square-diag` | A square with a diagonal, `d = a√2` |
| `q-kite` | A kite with its diagonals |
| `q-hexagon` | A regular hexagon split into six equilateral triangles, with the interior angle marked |
| `q-polygon-diag` | A hexagon with every diagonal drawn, for `n(n − 3)/2` |
| `q-cyclic-brahma` | A cyclic quadrilateral with the four sides labelled for Brahmagupta's formula |

## Areas, paths and fields

| Key | What is drawn |
| --- | --- |
| `f-path-out` | A rectangular field with a path of uniform width running round the **outside** |
| `f-path-in` | A rectangular field with a path of uniform width running round the **inside** |
| `f-crossroads` | A rectangular field with two roads crossing at right angles through the middle |
| `f-grazing` | A square field with an animal tied at one corner, the grazed quadrant shaded |
| `f-circle-in-rect` | The largest circle that fits in a rectangle, and the four corner pieces |
| `f-shaded-petals` | A square with four quadrants drawn from its corners, the leaf-shaped overlap shaded |

## Solids

| Key | What is drawn |
| --- | --- |
| `s-cube` | A cube with edge `a`, a face diagonal `a√2` and the body diagonal `a√3` |
| `s-cuboid` | A cuboid with `l`, `b`, `h` and the body diagonal |
| `s-cylinder` | A cylinder with radius `r` and height `h`, the curved surface opened out as a rectangle beside it |
| `s-hollow-cylinder` | A pipe in section, outer radius `R`, inner radius `r`, length `h` |
| `s-cone` | A cone with `r`, `h` and slant height `l`, with the right angle at the axis marked |
| `s-cone-open` | A cone's curved surface opened out as a sector of radius `l` |
| `s-frustum` | A frustum with radii `R` and `r`, height `h` and slant height `l` |
| `s-cone-cut` | A cone cut by a plane parallel to the base, showing the small similar cone above the frustum |
| `s-sphere` | A sphere with radius `r` and a great circle |
| `s-hemisphere` | A solid hemisphere with its flat circular face |
| `s-prism-tri` | A right prism with a triangular base |
| `s-pyramid-square` | A right pyramid on a square base, with the height and the slant height |
| `s-tetrahedron` | A regular tetrahedron with edge `a` |
| `s-cone-hemi` | A cone mounted on a hemisphere of the same radius |
| `s-cyl-cone-hemi` | A cylinder with a cone at one end and a hemisphere at the other |
| `s-cyl-in-sphere` | A sphere with the largest cylinder inscribed in it |
| `s-sphere-in-cube` | A sphere inscribed in a cube |

## Height and distance

| Key | What is drawn |
| --- | --- |
| `h-elevation` | An observer, a tower of height `h`, horizontal distance `d` and the angle of elevation `θ` |
| `h-depression` | A tower with an object on the ground and the angle of depression from the top, with the horizontal dashed |
| `h-two-angles` | A tower seen from two points on the same straight line, angles `30°` and `60°` |
| `h-complementary` | A tower seen from two points on opposite sides at complementary angles, `h = √(xy)` |
| `h-flagstaff` | A flagstaff of height `f` on a tower of height `h`, with both angles from one point |
| `h-two-towers` | Two towers facing each other across a road, with the angles from the foot of each |
| `h-shadow` | A vertical pole and its shadow, with the sun's angle of elevation |
| `h-river` | A tree on one bank and two observation points, giving the width of the river |
| `h-plane` | An aeroplane at two instants at the same height, with the two angles of elevation |
| `h-cliff-boat` | A boat seen from the top of a cliff at two angles of depression |
| `h-ladder` | A ladder against a wall with the angle at the ground |

---

## How the figures are drawn (for whoever draws them)

Each figure is one entry in `window.DIA`:

```js
DIA["c-chord-perp"] = '<svg viewBox="0 0 320 200" role="img" aria-label="…">…</svg>';
```

Rules:

- `viewBox="0 0 320 200"` for almost everything; `0 0 320 240` where a figure
  is genuinely tall; `0 0 320 120` for a wide flat one. Never set `width` or
  `height` — the stylesheet sizes it.
- **No colours, no inline styles, no `stroke=` attributes.** Use only these
  classes, which the stylesheet defines:
  - `class="l"` — the construction: the figure itself, in the text colour
  - `class="a"` — the thing being asked for, in jade
  - `class="g"` — guides and extensions, dashed and grey
  - `class="m"` — angle arcs and equal-length tick marks, solid and grey (a
    dashed arc this small is invisible, which is why it has its own class)
  - `class="f"` — a shaded region
  - `class="p"` — a point (use `<circle r="2.6" class="p">`)
  - `<text>` for labels; add `class="b"` for an important one, `class="j"` for
    one that belongs to the jade line
- Keep every label **inside** the viewBox with at least 6 units of margin, and
  never let a label sit on top of a line. Offset labels from their points by
  about 10 units.
- Mark a right angle with a small square, an equal angle with an arc, and
  equal lengths with tick marks.
- Give every figure a useful `aria-label` — one sentence, as a blind reader
  would need it.
- Keep it to one idea. A figure carrying four theorems at once is unreadable
  at phone width.
