# Mensuration — the brief for each topic

Eight topics: four in two dimensions, four in three. The syllabus names the
solids, so the topics follow it — triangle, quadrilaterals, regular polygons
and circle; then right prism, right circular cone, right circular cylinder,
sphere, hemisphere, rectangular parallelepiped, and the regular right pyramid
on a triangular or square base.

**The confusion to build every topic around.** Almost every wrong answer in
this chapter is the right formula for the wrong quantity — a curved surface
where a total surface was asked, a sector where a segment was asked, a
diameter substituted where a radius belongs, a volume ratio where an area
ratio belongs. Your distractors should be exactly those, and at least one
`careful` box must name the one for your topic.

Use `π = 22/7` when the numbers are chosen to suit it and say so; otherwise
leave π in the answer. Give units on every numeric option (`cm²`, `cm³`, `m`).

---

## men-2d-triangle — "2D: the triangle"

- `Area = ½ × base × height`; **Heron's formula √(s(s − a)(s − b)(s − c))**
  with `s = (a + b + c)/2`; `Area = ½ab·sinC`.
- `Δ = rs` and `Δ = abc/4R` — the two that connect area to the incircle and
  the circumcircle.
- **Equilateral**: `area (√3/4)a²`, `height (√3/2)a`, `r = a/(2√3)`,
  `R = a/√3`. What happens to the area when the side is doubled.
- **Isosceles**: `area = (b/4)√(4a² − b²)`.
- Right triangle: `area = ½ × the two legs`, and the altitude to the
  hypotenuse `ab/c`.
- Ratio facts: similar triangles' areas go as the **square** of the sides;
  triangles on the same base and between the same parallels are equal;
  joining the midpoints gives **¼** of the area; the three medians cut the
  triangle into six equal areas.
- The area of a triangle whose sides are in a given ratio with a given
  perimeter.
- The percentage change in area when the base is increased and the height
  decreased.

Figures: `t-heron`, `t-equilateral`, `t-isosceles`.

## men-2d-quad — "2D: quadrilaterals and polygons"

- Square: `a²`, `diagonal a√2`, and **area from the diagonal `d²/2`**.
- Rectangle: `lb`, `diagonal √(l² + b²)`, perimeter `2(l + b)`.
- Parallelogram: `base × height`; the two different heights for the two bases.
- **Rhombus: `½d₁d₂`**, side `½√(d₁² + d₂²)`, perimeter `4a`.
- **Trapezium: `½(a + b)h`.** Kite: `½d₁d₂`.
- A general quadrilateral from one diagonal: `½ × d × (sum of the two
  perpendiculars to it)`.
- **Cyclic quadrilateral — Brahmagupta: √((s − a)(s − b)(s − c)(s − d))**.
- Regular polygon: `area = ½ × perimeter × apothem`; the **regular hexagon
  `(3√3/2)a²`**; the equilateral-triangle decomposition.
- The percentage change in the area of a square or rectangle when a side
  changes by a given percentage, including the `(x + y + xy/100)` form.
- The ratio of the areas of two squares from the ratio of their sides,
  diagonals or perimeters.

Figures: `q-parallelogram`, `q-rhombus`, `q-trapezium`, `q-square-diag`,
`q-kite`, `q-hexagon`, `q-cyclic-brahma`.

## men-2d-circle — "2D: circle, sector and segment"

The segment questions were asked for by name. Be thorough.

- `Circumference 2πr`, `area πr²`, and the area in terms of the
  circumference `C²/4π`.
- Semicircle: area `½πr²`, **perimeter `πr + 2r`** — the diameter is part of
  the perimeter, and forgetting it is the standard slip. Quadrant: area
  `¼πr²`, perimeter `½πr + 2r`.
- **Sector**: `arc = (θ/360) × 2πr`, `area = (θ/360) × πr²`, and
  `area = ½ × r × arc`. In radians `l = rθ` and `area = ½r²θ`.
- **Segment**: `area = sector − triangle = (θ/360)πr² − ½r²·sinθ`. Work the
  three standard cases out and test them: `θ = 60°` gives
  `r²(π/6 − √3/4)`, `θ = 90°` gives `r²(π/4 − ½)`, `θ = 120°` gives
  `r²(π/3 − √3/4)`. Include the major-segment version (circle minus the minor
  segment).
- **Ring or annulus: `π(R² − r²)`**, and the width `R − r`.
- The circle inscribed in a square and circumscribing it, and the **ratio of
  the two areas `π/4` and `π/2`**; the circle inscribed in and circumscribing
  an equilateral triangle, and the ratio of those areas `1 : 4`.
- When the radius rises by `x%` the area rises by **(2x + x²/100)%**; when the
  circumference doubles the area quadruples.
- The number of revolutions of a wheel: `distance / circumference`.

Figures: `c-arc-sector`, `c-segment-area`, `c-annulus`, `c-quadrant`,
`c-in-square`, `c-circum-square`, `c-equi-in-circle`, `c-circle-in-equi`.

## men-2d-paths — "2D: paths, borders and shaded regions"

Every question here is one subtraction dressed up as reasoning. Say that, and
then drill it.

- A path of width `w` **outside** a rectangular field:
  `area = (l + 2w)(b + 2w) − lb`.
- A path of width `w` **inside** the field: `lb − (l − 2w)(b − 2w)`.
- Two roads of width `w` crossing a field at right angles:
  **`area = lw + bw − w²`** — the square counted twice is the whole question.
- A path round a circular field: `π(R² − r²)` with `R = r + w`.
- Cost questions: fencing by the metre against paving by the square metre;
  the number of tiles or square slabs needed, and why a fractional tile count
  rounds up.
- **Grazing area**: an animal tethered at a corner of a square field grazes
  `¼πr²`; against a straight wall `½πr²`; at the corner of an equilateral
  triangular field `(60/360)πr²`.
- The largest circle cut from a rectangle, and the area left over; the largest
  square inside a circle.
- Four quadrants drawn from the corners of a square of side `a` and radius
  `a/2`: the four together make one circle, so the uncovered area is
  `a² − πa²/4`.
- A wire of fixed length bent into a square, a circle and an equilateral
  triangle: which encloses most, and by how much.
- The area of the shaded part where a semicircle sits on each side of a
  square or a right triangle.

Figures: `f-path-out`, `f-path-in`, `f-crossroads`, `f-grazing`,
`f-circle-in-rect`, `f-shaded-petals`.

## men-3d-cuboid — "3D: cube, cuboid and prism"

- Cuboid: `V = lbh`, **`TSA = 2(lb + bh + hl)`**, `LSA = 2h(l + b)`,
  **diagonal `√(l² + b² + h²)`**.
- Cube: `V = a³`, `TSA = 6a²`, `LSA = 4a²`, **diagonal `a√3`**, face diagonal
  `a√2`; the volume from the diagonal and the surface from the volume.
- The four walls of a room are `2h(l + b)`; the ceiling and floor are the
  other two terms. A box or tank **without a lid** is `lb + 2h(l + b)`.
- Cutting a cube of side `n` units into unit cubes: `n³` of them, with
  **`8` having three painted faces, `12(n − 2)` two, `6(n − 2)²` one and
  `(n − 2)³` none**. This is asked often enough to be worth three questions.
- The largest cube cut from a cuboid; the number of small boxes that fit in a
  big one.
- **Right prism**: `V = base area × height`, `LSA = perimeter of base ×
  height`, `TSA = LSA + 2 × base area`. Work the triangular prism and the
  hexagonal prism.
- If every edge of a cube is increased by `x%`, the surface rises by
  `(2x + x²/100)%` and the volume by more — give the volume factor as `k³`.
- Bricks in a wall, and the volume of earth dug out of a rectangular pit.

Figures: `s-cube`, `s-cuboid`, `s-prism-tri`.

## men-3d-cylinder — "3D: cylinder, cone and frustum"

- Cylinder: `V = πr²h`, **`CSA = 2πrh`**, `TSA = 2πr(r + h)`; a tube open at
  both ends has no base at all.
- Hollow cylinder or pipe: `V = πh(R² − r²)`, `CSA = 2πh(R + r)` counting
  both surfaces, `TSA = 2πh(R + r) + 2π(R² − r²)`.
- Cone: **`V = (1/3)πr²h`**, **`CSA = πrl`**, `TSA = πr(r + l)`, and
  **`l = √(r² + h²)`**.
- The cone made from a sector: the sector's radius becomes the **slant
  height** and its arc becomes the **base circumference**, so `2πr = (θ/360)
  × 2πl`.
- **Frustum**: `V = (1/3)πh(R² + Rr + r²)`, `CSA = πl(R + r)`,
  `l = √(h² + (R − r)²)`, `TSA = CSA + πR² + πr²`.
- A cone cut by a plane parallel to the base: the small cone is **similar**,
  so the radii, heights and slant heights share one ratio and the volumes go
  as its cube. The ratio of the small cone to the frustum.
- A cylinder and a cone on the same base with the same height are in the
  ratio `3 : 1`.
- Rolling a rectangular sheet into a cylinder two ways, and which gives the
  greater volume.
- The cost of painting a cylindrical pillar, and the metal in a pipe.

Figures: `s-cylinder`, `s-hollow-cylinder`, `s-cone`, `s-cone-open`,
`s-frustum`, `s-cone-cut`.

## men-3d-sphere — "3D: sphere, hemisphere and pyramid"

- Sphere: **`V = (4/3)πr³`**, **`surface = 4πr²`**; the surface in terms of
  the volume; what doubling the radius does to each.
- Hemisphere: `V = (2/3)πr³`, `CSA = 2πr²`, **`TSA = 3πr²`** — the flat
  circle is the third `πr²`, and leaving it out is the standard slip.
- Spherical shell: `V = (4/3)π(R³ − r³)`.
- **Pyramid**: `V = (1/3) × base area × height`;
  `LSA = ½ × base perimeter × slant height`; `TSA = LSA + base area`. For a
  square base of side `a` and height `h` the slant height is
  `√(h² + (a/2)²)` and the lateral edge is `√(h² + a²/2)` — two different
  lengths, and the question trades on it.
- The regular **tetrahedron** of edge `a`: `surface √3a²`,
  `V = a³/(6√2)`, height `a√(2/3)`.
- The sphere inscribed in a cube has `r = a/2`; the sphere circumscribing a
  cube has `2r = a√3`; the largest cone in a cube; the largest sphere in a
  cylinder.
- The cylinder of radius `r` and height `2r` has exactly the same curved
  surface as the sphere inside it, `4πr²` — which is why the question is
  asked.
- Composites: a cone on a hemisphere; a cylinder with a hemisphere at each
  end; a tent that is a cylinder with a conical top. Surface area of a
  composite never includes the joined faces.

Figures: `s-sphere`, `s-hemisphere`, `s-pyramid-square`, `s-tetrahedron`,
`s-cone-hemi`, `s-cyl-cone-hemi`, `s-cyl-in-sphere`, `s-sphere-in-cube`.

## men-3d-melt — "3D: melting, recasting and scaling"

Nothing here is a new formula. Everything is one principle — **volume is
conserved, surface area is not** — plus knowing which power a ratio is raised
to. Say that at the top.

- A sphere melted into `n` small spheres: `n = (R/r)³`; a sphere drawn into a
  wire or a cylinder: equate the volumes; a cone recast as a sphere.
- The surface area **after** recasting is not conserved: `n` small spheres
  have more surface than the one they came from, by the factor `n^(1/3)`.
- Immersion and displacement: dropping a solid into water raises the level by
  `V/(πr²)` in a cylindrical vessel or `V/(lb)` in a rectangular one; a
  floating or submerged sphere.
- Flow: **volume = cross-section area × speed × time.** A pipe filling a
  tank; water flowing through a canal; two taps filling together — keep it to
  the volume arithmetic.
- **Scaling.** If every linear dimension is multiplied by `k`, every length
  goes as `k`, every area as `k²` and every volume as `k³`. The percentage
  questions in both directions: the volume rises by 72.8% when each edge
  rises by 20%.
- The ratio of the volumes of a **cone, hemisphere and cylinder** on the same
  base and of the same height is **`1 : 2 : 3`**.
- A cone cut by a plane parallel to the base into two parts of equal volume:
  the heights are in the ratio `1 : (∛2 − 1)`.
- A hollow sphere melted into a solid cylinder; a cube melted into spheres.
- The weight of a solid from its volume and its density, including a hollow
  one.

Figures: `s-cone-cut`, `s-cylinder`, `s-sphere`.
