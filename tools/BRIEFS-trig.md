# Trigonometry and Height–Distance — the brief for each topic

Seven topics: four of trigonometry, three of height and distance. The
syllabus says "heights and distances — simple problems only", and means it:
every question in a paper reduces to a right triangle with `30°`, `45°` or
`60°` in it. Teach it as that small set of triangles, not as a general
technique.

Angles are always written with the degree sign — `30°`, `θ`, `A`. Use `θ` for
a single unknown angle. Write `sinθ`, `cos²θ`, `tan(90° − θ)` with no
multiplication sign anywhere.

---

## trig-ratios — "The ratios, the table and complementary angles"

- The six ratios on a right triangle: `sinθ = opposite/hypotenuse`,
  `cosθ = adjacent/hypotenuse`, `tanθ = opposite/adjacent`, and the three
  reciprocals. Which side is "opposite" depends on which angle you are at —
  say so.
- **The table for 0°, 30°, 45°, 60° and 90°** for all six ratios, including
  where `tan` and `sec` are undefined. This table is most of the subject;
  give it as the formula sheet and test it directly.
- The reciprocal relations `sinθ·cosecθ = 1`, `cosθ·secθ = 1`,
  `tanθ·cotθ = 1`; the quotient relations `tanθ = sinθ/cosθ`,
  `cotθ = cosθ/sinθ`.
- **Complementary angles**: `sin(90° − θ) = cosθ`, `tan(90° − θ) = cotθ`,
  `sec(90° − θ) = cosecθ`. The questions built on them, including
  `sin35°/cos55°` and `sin²20° + sin²70°`.
- Ranges on `0°` to `90°`: `sinθ` and `cosθ` lie in `[0, 1]`, `tanθ` runs
  from `0` to `∞`, `secθ` and `cosecθ` are at least `1`. Which ratios
  increase and which decrease as the angle grows.
- Given one ratio, find the others by drawing the triangle — the `3-4-5` and
  `5-12-13` cases.
- Degrees and radians: `π radians = 180°`, `1 radian ≈ 57°16′`,
  `θ = arc/radius`, and converting `30° = π/6`.
- Which angle satisfies a simple equation: `2sinθ = 1`, `tanθ = √3`,
  `sinθ = cosθ`.

Figures: `t-30-60-90`, `t-45-45-90`.

## trig-identities — "The standard identities and what questions do with them"

- **`sin²θ + cos²θ = 1`**, **`1 + tan²θ = sec²θ`**, **`1 + cot²θ =
  cosec²θ`**, and every rearrangement: `sin²θ = 1 − cos²θ`,
  `sec²θ − tan²θ = 1`, `cosec²θ − cot²θ = 1`.
- The factorised forms that questions live on:
  `(secθ − tanθ)(secθ + tanθ) = 1`, so **`secθ − tanθ = 1/(secθ + tanθ)`**;
  the same for `cosecθ − cotθ`.
- **`(sinθ + cosθ)² = 1 + 2sinθcosθ`**, so given `sinθ + cosθ = k` you get
  `sinθcosθ = (k² − 1)/2`; and `(sinθ − cosθ)² = 1 − 2sinθcosθ`, so
  `(sinθ + cosθ)² + (sinθ − cosθ)² = 2`.
- **`sin⁴θ + cos⁴θ = 1 − 2sin²θcos²θ`** and
  **`sin⁶θ + cos⁶θ = 1 − 3sin²θcos²θ`**.
- `tanθ + cotθ = 1/(sinθcosθ) = secθ·cosecθ`;
  `tan²θ + cot²θ = (tanθ + cotθ)² − 2`.
- If `sinθ + cosecθ = 2` then every power `sinⁿθ + cosecⁿθ = 2`; the same
  family for `tanθ + cotθ = 2`.
- Simplifying the standard expressions: `(1 + cosθ)/(1 − cosθ)` as
  `(cosecθ + cotθ)²`; `√((1 − sinθ)/(1 + sinθ)) = secθ − tanθ`.
- Writing one ratio in terms of another — `sinθ` in terms of `tanθ`.
- Eliminating `θ` from a pair such as `x = a·secθ`, `y = b·tanθ`.

No figures.

## trig-conditional — "Conditional identities and special angles"

- The compound-angle formulas: **`sin(A ± B)`**, **`cos(A ± B)`**,
  **`tan(A ± B) = (tanA ± tanB)/(1 ∓ tanA·tanB)`**.
- The values they give: **`sin15° = (√3 − 1)/(2√2)`**,
  `cos15° = (√3 + 1)/(2√2)`, `tan15° = 2 − √3`, `tan75° = 2 + √3`,
  `tan22½° = √2 − 1`.
- Double angle: **`sin2θ = 2sinθcosθ`**,
  **`cos2θ = 1 − 2sin²θ = 2cos²θ − 1 = cos²θ − sin²θ`**,
  `cos2θ = (1 − tan²θ)/(1 + tan²θ)`, `tan2θ = 2tanθ/(1 − tan²θ)`.
- Half angle the other way round: `1 − cos2θ = 2sin²θ`,
  `1 + cos2θ = 2cos²θ`.
- Triple angle: **`sin3θ = 3sinθ − 4sin³θ`**,
  **`cos3θ = 4cos³θ − 3cosθ`**, `tan3θ = (3tanθ − tan³θ)/(1 − 3tan²θ)`.
- **`tanA·tan(60° − A)·tan(60° + A) = tan3A`**, and the same family for
  `cot`.
- The products and sums SSC sets: `tan1°·tan2°·…·tan89° = 1`;
  `sin²1° + sin²2° + … + sin²89° = 44½`;
  `cos²1° + cos²2° + … + cos²90° = 44½`.
- Conditional identities in a triangle: if `A + B + C = 180°` then
  `tanA + tanB + tanC = tanA·tanB·tanC`, and
  `tan(A/2)tan(B/2) + … = 1`. Two questions at most.
- Reducing an angle above 90° to the standard set: `sin120°`, `cos135°`,
  `tan150°` — by the `(180° − θ)` rule only, which is as far as SSC goes.

No figures.

## trig-maxmin — "Maximum and minimum of a trigonometric expression"

- **`a·sinθ + b·cosθ`**: maximum `√(a² + b²)`, minimum `−√(a² + b²)` — so
  `3sinθ + 4cosθ` runs between `−5` and `5`.
- `a·sin²θ + b·cos²θ`: the maximum is the larger of `a` and `b` and the
  minimum the smaller, because it is a weighted average of the two.
- `sinθ·cosθ` has maximum `½` (at `45°`) and `sin2θ` has maximum `1`; so
  `sinθcosθ = ½sin2θ` is the clean way to see it.
- **`sec²θ + cosec²θ` has minimum `4`**; `tan²θ + cot²θ` has minimum `2`;
  `sinθ + cosecθ` has minimum `2` for an acute angle.
- `a·cosec²θ + b·sec²θ` has minimum `(√a + √b)²`.
- `sin⁴θ + cos⁴θ`: maximum `1`, minimum `½`; `sin⁶θ + cos⁶θ`: maximum `1`,
  minimum `¼`.
- `sinθ + cosθ`: maximum `√2`, minimum `−√2`; `sin²θ + cos⁴θ` and that
  family, done by substituting `s = sin²θ` and treating it as a quadratic in
  `s` on `[0, 1]`.
- The range of `1/(2 + sinθ)` and of `5 + 3cosθ`.
- Why the maximum of `sinθ·cosθ` is **not** `1` — the standard wrong answer,
  and worth a careful box.

No figures.

## trig-hd-basics — "Height and distance: the three standard triangles"

- **Angle of elevation** and **angle of depression**, both measured from the
  **horizontal**, and that the angle of depression from the top of a tower to
  a point equals the angle of elevation from that point to the top.
- The one relation everything comes from: **`h = d·tanθ`**, so
  `d = h·cotθ`.
- The three triangles, memorised as ratios of the horizontal distance to the
  height: `30° ⇒ d = h√3`; `45° ⇒ d = h`; `60° ⇒ d = h/√3`.
- Shadows: the shadow is `h·cotθ`, so at `45°` the shadow equals the height,
  at `60°` it is `h/√3` and at `30°` it is `h√3`. Given the shadow and the
  height, name the elevation.
- A pole broken by the wind so that the top touches the ground: the broken
  part is the hypotenuse, and the standard question gives the angle and the
  total height.
- A ladder against a wall: how far up it reaches, how far the foot is from
  the wall, and what happens to each when the angle changes.
- A kite or balloon on a taut string: the string is the hypotenuse, so the
  height is `l·sinθ`.
- An observer of his own height `h₀`: the object's height is
  `h₀ + d·tanθ`, and leaving out the observer's height is the trap.

Figures: `h-elevation`, `h-depression`, `h-shadow`, `h-ladder`.

## trig-hd-two — "Height and distance: two angles, two observers"

- A tower seen from two points on the same side, `x` apart:
  **`h = x/(cotα − cotβ)`**. With `30°` and `60°` that is `h = (x√3)/2`.
- Two points on **opposite** sides of the tower, `x` apart in total:
  `h = x/(cotα + cotβ)`.
- A **flagstaff of height f on a tower of height h**, with both tops seen
  from one point: two equations in the same distance, and the question is
  which to subtract.
- Two towers facing each other across a road, with the angle to each top
  taken from the foot of the other.
- The width of a river from a tree on the far bank, seen from two points on
  the near bank.
- An aeroplane flying level, seen at two instants: the distance covered is
  `h(cotα − cotβ)`, and the speed follows from the time between them.
- A boat seen from the top of a cliff at two angles of depression, and the
  distance it has travelled.
- A man walking towards a tower: **if the elevation changes from `30°` to
  `60°` in `t` minutes, the remaining walk at the same speed is `t/2`
  minutes**; from `45°` to `60°` the remaining time is `t(√3 + 1)/2`. Derive
  these rather than asserting them.
- Two poles of equal height on either side of a road with a point between
  them: the two distances and the height.

Figures: `h-two-angles`, `h-flagstaff`, `h-two-towers`, `h-river`,
`h-plane`, `h-cliff-boat`.

## trig-hd-results — "Height and distance: the standard results worth knowing"

This topic is the short list of results that turn a two-minute question into
a ten-second one. Give each as a sheet row, a one-line derivation in the
explanation, and a question.

- **Two points on opposite sides at complementary angles**: if the angles of
  elevation from two points `x` and `y` from the foot are `θ` and `90° − θ`,
  then **`h = √(xy)`**.
- Two points on the same side at complementary angles: the height is still
  the geometric mean, and the distance between them is `|x − y|`.
- If the angle of elevation of the sun falls from `60°` to `30°`, the shadow
  **lengthens by `h(√3 − 1/√3)` = `2h/√3`**; given the increase, the height
  follows.
- The height of a tower whose shadow is `x` longer when the elevation changes
  from `45°` to `30°`: `h = x/(√3 − 1)`.
- A tower subtending equal angles from two points: the two points are
  equidistant from the foot.
- **The cloud and its reflection in a lake**: the height of the cloud above
  the lake when the elevation of the cloud and the depression of its
  reflection are given.
- Two pillars of the same height on either side of a road of width `w`, with
  elevations `α` and `β` from a point between them: the height is
  `w/(cotα + cotβ)`, and the point divides the road as `cotα : cotβ`.
- The ratio of the heights of two towers from the angles at each other's
  feet.
- A man on a tower sees two objects on the same side at depressions `α` and
  `β`: the distance between them is `h(cotα − cotβ)`.
- The angle of elevation at the midpoint of the line joining two points, and
  why it is not the average of the two angles — that is the trap, and it
  deserves a careful box.

Figures: `h-complementary`, `h-two-towers`, `h-plane`, `h-shadow`.
