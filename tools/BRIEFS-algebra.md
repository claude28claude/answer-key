# Algebra — the brief for each topic

Nine topics. `algebra-identities` is already written and is your worked
example: read it before you start. Cover what your own brief lists and leave
what the other briefs list to them — a formula that appears in two topics is a
formula the reader revises twice and trusts neither time.

---

## algebra-abc-zero — "The a + b + c = 0 family"

The single most productive line in SSC algebra. Cover:

- `a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca)`, and
  therefore **a + b + c = 0 ⇒ a³ + b³ + c³ = 3abc**.
- The other root of the same identity: **a = b = c also gives a³ + b³ + c³ =
  3abc**, so a question that wants `a + b + c = 0` must say the three are not
  all equal.
- If a + b + c = 0: `a² + b² + c² = −2(ab + bc + ca)`.
- If a + b + c = 0: `a⁴ + b⁴ + c⁴ = ½(a² + b² + c²)² = 2(ab + bc + ca)²`, so
  `(a² + b² + c²)² = 2(a⁴ + b⁴ + c⁴)`.
- If a + b + c = 0: `a²/(bc) + b²/(ca) + c²/(ab) = 3`, because the sum is
  (a³ + b³ + c³)/abc.
- If a + b + c = 0: `(a + b)(b + c)(c + a) = −abc`, and
  `(a + b)³ + (b + c)³ + (c + a)³ = −3abc`.
- The substitution that makes the identity usable: with x = a − b, y = b − c,
  z = c − a the sum x + y + z = 0, hence
  **(a − b)³ + (b − c)³ + (c − a)³ = 3(a − b)(b − c)(c − a)**. Same trick for
  `(a² − b²)³ + …` and for the numeric case `17³ − 12³ − 5³`.
- `1/a + 1/b + 1/c = 0 ⇒ ab + bc + ca = 0`, and what that does to the cubes.
- At least three questions with numbers rather than letters, because that is
  how it is usually set.

Leave x + 1/x to `algebra-recip` and surds to `algebra-surds`.

## algebra-recip — "The x + 1/x family"

- With `x + 1/x = k`: **x² + 1/x² = k² − 2**, **x³ + 1/x³ = k³ − 3k**,
  **x⁴ + 1/x⁴ = (k² − 2)² − 2**, **x⁶ + 1/x⁶ = (k³ − 3k)² − 2**.
- With `x − 1/x = m`: **x² + 1/x² = m² + 2**, **x³ − 1/x³ = m³ + 3m**.
- `(x + 1/x)² − (x − 1/x)² = 4` — the bridge between the two.
- How a question hands it to you: `x² − 3x + 1 = 0` divided through by x gives
  x + 1/x = 3. Teach that step explicitly; it is the whole question.
- `x + 1/x = 2 ⇒ x = 1` and every power is 2; `x + 1/x = −2 ⇒ x = −1`.
- `x + 1/x = √3 ⇒ x³ + 1/x³ = 0`, and `x + 1/x = 1 ⇒ x³ + 1/x³ = −2` (and
  x³ = −1). Both are asked.
- `x² + 1/x² = k ⇒ x + 1/x = √(k + 2)` — and why the positive root is taken.
- For `x > 0` the minimum of x + 1/x is **2**; for x < 0 the maximum is −2.
  One question only; the general maximum-and-minimum work belongs to
  `algebra-maxmin`.
- One question where the given value is a surd, e.g. `x = 2 + √3 ⇒ 1/x = 2 −
  √3 ⇒ x + 1/x = 4`.

## algebra-surds — "Surds, indices and rationalisation"

- The laws of indices: `aᵐ × aⁿ = aᵐ⁺ⁿ`, `aᵐ ÷ aⁿ`, `(aᵐ)ⁿ`, `a⁰ = 1`,
  `a⁻ⁿ = 1/aⁿ`, `a^(m/n) = ⁿ√(aᵐ)`.
- `√a × √b = √(ab)`, `√(a/b) = √a/√b`, and why `√a + √b ≠ √(a + b)`.
- Rationalising: `1/(√a + √b) = (√a − √b)/(a − b)`; conjugates; `1/(2 + √3) =
  2 − √3`.
- `(√a + √b)² = a + b + 2√(ab)` and the un-nesting it allows:
  **√(7 + 4√3) = 2 + √3**, because 7 + 4√3 = (2 + √3)². Show the method.
- Comparing surds of different orders by putting them over a common index —
  ∜3 against ∛2 against √1.5.
- The telescoping sum `1/(√1 + √2) + 1/(√2 + √3) + … = √n − 1`.
- Simplifying `√50 + √18 − √8`.
- The index equations SSC actually sets: `xᵃ = yᵇ = zᶜ` with `xyz = 1 ⇒
  1/a + 1/b + 1/c = 0`; `2ˣ = 3ʸ = 6ᶻ ⇒ 1/x + 1/y = 1/z`; `aˣ = b, bʸ = c,
  cᶻ = a ⇒ xyz = 1`.
- Solving simple exponential equations such as `2^(x+1) = 8` and `4ˣ = 8^(x−1)`.

No logarithms — they are outside the SSC advanced-maths syllabus.

## algebra-quadratic — "Quadratic equations and their roots"

- `ax² + bx + c = 0`, the formula **x = [−b ± √(b² − 4ac)]/2a**.
- **Sum of roots = −b/a, product = c/a.** Forming the equation from its roots:
  `x² − (sum)x + (product) = 0`.
- The discriminant `D = b² − 4ac`: `D > 0` real and distinct, `D = 0` real and
  equal, `D < 0` no real roots, and `D` a perfect square ⇒ rational roots.
  Include the "find k so the roots are equal" question.
- Expressions in the roots: `α² + β² = (α + β)² − 2αβ`,
  `α³ + β³`, `1/α + 1/β = (α + β)/αβ`, `(α − β)² = (α + β)² − 4αβ`,
  `α/β + β/α`.
- Equations whose roots are the reciprocals, the negatives, or the squares of
  another equation's roots.
- Roots equal in magnitude and opposite in sign ⇒ `b = 0`; reciprocal roots ⇒
  `a = c`; one root zero ⇒ `c = 0`.
- The condition for both roots to be common: `a₁/a₂ = b₁/b₂ = c₁/c₂`.
- If one root is `p + √q`, the other is `p − √q` when the coefficients are
  rational.
- Two or three straightforward factorisation-and-solve questions.

The vertex and the maximum of a quadratic belong to `algebra-maxmin`.

## algebra-polynomial — "Polynomials, remainder and factor theorem"

- **Remainder theorem:** the remainder when f(x) is divided by `(x − a)` is
  `f(a)`; by `(ax + b)` it is `f(−b/a)`.
- **Factor theorem:** `(x − a)` is a factor exactly when `f(a) = 0` — and the
  "find k" questions built on it.
- `f(1)` is the sum of the coefficients; `f(0)` is the constant term.
- The division algorithm `f(x) = q(x)d(x) + r(x)` with the degree of r below
  the degree of d, and what that means for a remainder when the divisor is
  quadratic: the remainder has the form `ax + b`.
- Degrees: the degree of a product is the sum of the degrees.
- `HCF × LCM = the product of the two polynomials`.
- Divisibility facts: `xⁿ − 1` is always divisible by `x − 1`; `xⁿ + 1` is
  divisible by `x + 1` only when n is odd; `x³ − y³` by `x − y`.
- Factorising a cubic by grouping, and by spotting a root among ±1, ±2.
- For a cubic `x³ + px² + qx + r`: the sum of the roots is `−p`, the sum of
  the products in pairs is `q`, the product is `−r`. Two questions at most.

## algebra-ratio-prop — "Ratio, proportion and componendo–dividendo"

- `a : b = c : d ⇒ ad = bc`. The fourth proportional, the **mean
  proportional √(ab)**, and the third proportional `b²/a`.
- Continued proportion: `a : b = b : c ⇒ b² = ac`.
- **Componendo** `(a + b)/b = (c + d)/d`, **dividendo** `(a − b)/b = (c −
  d)/d`, and **componendo–dividendo (a + b)/(a − b) = (c + d)/(c − d)** —
  which is the one the questions use, and the one to show being used.
- If `a/b = c/d = e/f = k` then `(a + c + e)/(b + d + f) = k`, and the same
  for any weighted sum.
- Duplicate ratio `a² : b²`, sub-duplicate `√a : √b`, triplicate, and
  sub-triplicate; compounded ratio.
- Dividing a quantity in a given ratio; the ratio after each part is changed.
- Recovering `a : b : c` from `(a + b) : (b + c) : (c + a)`.
- The standard identity question: `x/(y + z) = y/(z + x) = z/(x + y)` ⇒ each
  ratio is `½` when x + y + z ≠ 0.

Alligation is not here — it is in the Profit and Mixture subject.

## algebra-maxmin — "Maximum and minimum values"

- `ax² + bx + c` with `a > 0`: minimum **(4ac − b²)/4a at x = −b/2a**; with
  a < 0 that value is the maximum. Teach completing the square as the method.
- `x + 1/x ≥ 2` for x > 0 and `≤ −2` for x < 0.
- **AM ≥ GM**: `(a + b)/2 ≥ √(ab)`, with equality only when a = b — and the
  consequence that a product with a fixed sum is largest when the parts are
  equal (the maximum of `x(10 − x)` is `25`).
- The minimum of `x² + 1/x²` and of `bx + a/x` for x > 0, which is `2√(ab)`.
- `(x − 1)(x − 2)(x − 3)(x − 4)`: substitute `t = x² − 5x + 5` to get `t² − 1`,
  minimum `−1`. This exact question is asked.
- `|x − a| + |x − b|` has minimum `|a − b|`.
- The maximum of `7 − (x − 3)²` and that family.

Trigonometric maxima and minima belong to the Trigonometry subject.

## algebra-lineareq — "Linear equations and their graphs"

The syllabus names "graphs of linear equations", so this topic is about when a
pair of equations has one solution, none, or infinitely many, and what that
looks like as a picture.

- For `a₁x + b₁y + c₁ = 0` and `a₂x + b₂y + c₂ = 0`:
  **a₁/a₂ ≠ b₁/b₂** one solution, lines intersect;
  **a₁/a₂ = b₁/b₂ = c₁/c₂** infinitely many, lines coincide;
  **a₁/a₂ = b₁/b₂ ≠ c₁/c₂** none, lines are parallel.
  Consistent and inconsistent, and the "find k" questions for each case.
- Solving a pair by elimination and by substitution, with clean numbers.
- The graph of `ax + by = c`: the x-intercept `c/a`, the y-intercept `c/b`;
  `x = k` is vertical, `y = k` is horizontal, `c = 0` passes through the
  origin.
- The area of the triangle a line makes with the two axes: **½ × |x-intercept
  × y-intercept|**.
- `y = mx + c` read as slope and intercept, and what a negative slope looks
  like. One or two questions only — the distance, section and area formulas
  belong to `geo-coord`.
- Three equations in three unknowns where adding all three is the whole
  method.
- Two word problems at most, turned into equations.
