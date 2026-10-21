# The Answer Key — authoring contract for the maths half

You are writing **one topic** of an SSC advanced-maths practice site. Read this
whole file, then `frag/algebra-identities.js`, then write your fragment. Nothing else about the
site needs to be understood.

---

## 1. Who reads this

One person preparing for **SSC** (CGL / CHSL / CPO / MTS). They have said, in
their own words, that they are **weak in algebra**. They read the site on a
phone, often offline, and they **cannot read code** — so nothing you write may
assume any technical knowledge.

The site's reason for existing: *reading a formula again never tells you
whether you knew it.* So every formula on the maths half is written as a
**question with four options**, and the formula itself lives in the explanation
that opens only after an answer has been committed to. Answering **locks** the
question.

That gives you your test for every question you write:

> Does getting this right prove that they know a formula, and does getting it
> wrong tell them exactly which formula they do not know?

If a question can be answered by arithmetic alone, by elimination, or by
guessing from the shape of the options, it does not belong here.

---

## 2. Scope — the SSC syllabus and nothing else

The advanced-maths part of the SSC syllabus, verbatim in substance:

- **Algebra** — basic algebraic identities of school algebra, elementary surds
  (simple problems), graphs of linear equations.
- **Geometry** — the triangle and its various kinds of centres, congruence and
  similarity of triangles, the circle and its chords, tangents, angles
  subtended by chords, common tangents to two or more circles.
- **Mensuration** — triangle, quadrilaterals, regular polygons, circle, right
  prism, right circular cone, right circular cylinder, sphere, hemisphere,
  rectangular parallelepiped, regular right pyramid with a triangular or
  square base.
- **Trigonometry** — trigonometric ratios, complementary angles, standard
  identities, heights and distances (simple problems only).

**Never include** calculus, limits, vectors, matrices and determinants, complex
numbers, conic sections, inverse trigonometric functions, three-dimensional
coordinate geometry, binomial theorem, sequences beyond simple AP/GP use inside
an algebra identity, or any angle outside the standard set unless the question
is about reducing it to the standard set. If SSC does not ask it, it is noise —
and noise on a revision site costs the reader time they do not have.

Where a result is genuinely an SSC favourite but sits at the edge of the
syllabus (Ptolemy's theorem, Apollonius' theorem, the length of a common
tangent), include it — these are asked. Say so in the explanation if useful.

---

## 3. The file you write

Write exactly one file with the **Write tool** (not a shell heredoc — the text
contains Unicode and backticks, and a heredoc mangles both):

```
C:/Users/amanc/claude code/answer-key/tools/frag/<your-fragment-name>.js
```

Its entire contents are **one JavaScript object literal** — it starts with `{`
and ends with `}`, with no `var`, no `module.exports`, no surrounding brackets
and no trailing semicolon. Comments (`/* … */`) are allowed inside it.

### The object

```js
{
id:"identities",                         // short, lowercase, hyphenated, unique
n:"Identities and expansions",           // the topic's name, as a reader sees it
hy:1,                                    // 1 if SSC asks this heavily; omit otherwise
w:"One line saying what is inside.",     // shown under the name in the index
quick:[                                  // 5 to 7 lines: the formulas most worth having
  "…", "…"
],
blocks:[                                 // in this order: sheet, traps, questions
  {h:"HEADING", cols:[…], rows:[[…],[…]]},
  {careful:"…"},
  {h:"QUESTIONS — …", mcq:[ …the questions… ]}
]
}
```

### Blocks you may use

| Shape | Written as | Use it for |
| --- | --- | --- |
| Paragraph | `{h:"…", p:"…"}` or `p:["…","…"]` | one short framing paragraph, rarely |
| Table | `{h:"…", cols:["…","…"], rows:[["…","…"]]}` | **the formula sheet** |
| List | `{h:"…", list:["…","…"]}` | a sequence of steps or cases |
| Facing cards | `{h:"…", swap:[["LABEL","VALUE","note"]]}` | a short set of named constants |
| Careful | `{careful:"…"}` | the place where the confident answer is wrong |
| Figure | `{h:"…", dia:"c-sector", cap:"…"}` | a figure standing on its own |
| Questions | `{h:"…", mcq:[…]}` | the question bank |

The **first column of a table is the key you are trying to recall** — the thing
asked for — and the rest is the answer. Write it that way round.

Any block may carry `note:"…"`, which prints small and dim underneath.

### A question

```js
{q:"The curved surface area of a right circular cone of radius `r` and slant height `l` is:",
 o:["πrl","πr(r + l)","2πrl","(1/3)πr²h"],
 a:0,
 why:"**CSA = πrl**. Adding the base circle gives the **total** surface area, **πr(r + l)** — that is option B, and it is the one most often ticked by mistake. `2πrl` is the cylinder's curved surface; `(1/3)πr²h` is the cone's volume.",
 tag:"Cone"}
```

- `q` — the question. Ends with a colon for a recall question, or a question
  mark for a worded one.
- `o` — **exactly four** options, in the order A B C D.
- `a` — the index of the correct option: `0` is A, `1` is B, `2` is C, `3` is D.
- `why` — the explanation. **Required.**
- `tag` — optional two-or-three-word label shown beside the question
  (`"Cone"`, `"a³+b³+c³"`, `"Alligation"`). Use it when it helps a reader
  scanning for one formula.
- `d` — optional figure key, from `DIAGRAMS.md` **only**. Adds the drawing
  under the question. `dcap:"…"` adds a caption.

---

## 4. How to write the four options

The three wrong options are the whole value of the question. Each one must be
**a formula the reader might actually confuse with the right one**:

- the adjacent formula (total surface area for curved surface area),
- the same formula with one factor wrong (`2πrl` for `πrl`),
- the formula of the neighbouring solid (cylinder for cone),
- the right formula with the radius and diameter swapped,
- the result before the last step (the sector, when the segment was asked).

A random number or an obviously silly formula wastes an option. If a reader
who half-knows the topic can eliminate two options at a glance, the question
has tested nothing.

Rules:

1. **Exactly four options**, all different from one another.
2. No "None of these" or "All of these" — at most **one** such question in a
   topic, and only where SSC genuinely uses it.
3. Spread the right answer across all four letters. **No letter may hold more
   than 35 per cent of a topic's answers.** Vary it as you go rather than
   fixing it at the end.
4. Options stay short where they can: a formula, a ratio, a number with its
   unit.
5. Numbers must come out **exam-clean** — a whole number, a simple fraction, or
   a simple surd like `6√3`. If the numbers you chose give `47.318`, change the
   numbers, not the formula.

---

## 5. How to write the explanation

The explanation is what the reader actually studies. It must do three things,
in this order, in **two to five sentences**:

1. **State the formula in full**, in bold. Not a hint at it — the formula.
2. **Put the numbers in**, in one line, if the question had numbers.
3. **Name the trap.** Which wrong option is the tempting one, and why.

Good:

> **Volume of a cone = (1/3)πr²h, so three cones of the same base and height
> fill one cylinder.** Here (1/3) × π × 7² × 15 = 770 cm³ with π = 22/7. Option
> C is `πr²h`, the whole cylinder — the commonest slip is forgetting the third.

Bad (states nothing, teaches nothing):

> Use the cone volume formula. Option A is correct.

Where a result has a name SSC uses — Heron's formula, the basic
proportionality theorem, the alternate segment theorem, alligation — **name
it**, because the name is sometimes what the question asks for.

---

## 6. Notation — read this twice

The data files are plain text and there is no maths typesetting. Three marks
are understood and nothing else:

| You write | It renders as | Use it for |
| --- | --- | --- |
| `` `r` `` | mono, jade | a number or a symbol that **is** the answer |
| `**text**` | bold | the formula, the word the question turns on |
| `*text*` | italic | a term being quoted rather than used |

**A single `*` anywhere else breaks the page.** So:

- **Never** use `*` for multiplication. Use `×`, or write the factors
  together: `2πrh`, `3abc`, `(a + b)(a − b)`.
- Every `*` must be part of a matched `**bold**` or `*italic*` pair, and every
  backtick must be matched by another backtick in the same string.

Use these characters directly — they are Unicode and they render:

```
powers          ² ³ ⁴ ⁵ ⁶ ⁿ         a² + b², x⁴, aⁿ
subscripts      ₁ ₂ ₃ ₙ             r₁, d₂, aₙ
roots           √ ∛                 √3, √(a² + b²), ∛2
greek           π θ α β γ Δ Σ λ φ   πr², sinθ, Δ (area)
geometry        ∠ △ ⊥ ∥ ≅ ∼ ° ⌒     ∠ABC, △ABC, AB ⊥ CD, AB ∥ CD, 60°
relations       ≤ ≥ ≠ ± ⇒ ∴ ∵ ≈ ∞   x ≥ 0, a ± b, ⇒, ∴
operators       × ÷ − ⋅             12 × 5, a ÷ b, 7 − 3
money, units    ₹ cm² cm³ m² km/h   ₹1,200, 154 cm², 22/7
fractions       ½ ⅓ ¼ ¾ ⅔          ½bh    (only these five; otherwise use a slash)
```

Fractions other than those five are written with a **slash and brackets**:
`(1/3)πr²h`, `(a + b)/2`, `(100 + p)/100`, `abc/4Δ`, `Δ/s`. Never stack them.

Angles, lines and arcs: `∠A`, `∠ABC = 60°`, `AB = 5 cm`, `arc AB`, `△ABC`.
Ratios: `2 : 3`, and "in the ratio `2 : 3`".

Write out "square root of 3" as `√3`, never `sqrt(3)` or `root 3`.

---

## 7. House voice

The site is written in plain, flat, exact English. Match it:

- British spelling. No contractions in explanatory prose where the full form
  reads as well.
- No filler, no encouragement, no exclamation marks, no emoji, no "Let's", no
  "Remember that", no "As we know".
- Say the thing. *The median divides a triangle into two of equal area.* Not
  *It is interesting to note that the median divides…*
- An em dash — like this — for an aside. Not a semicolon chain.
- Numbers that are themselves the answer go in backticks.
- Never address the reader as "student", "aspirant" or "dear reader".

---

## 8. The shape of a finished topic

1. `quick` — **5 to 7 lines.** The formulas that are most of the topic's marks.
   A reader with four minutes reads only this. Every line must be a formula or
   a hard fact, not advice.
2. **A formula sheet**, as one or two tables. Every formula the topic tests is
   in it, with the first column naming the thing and the rest giving the
   formula. This is what makes the topic revisable as well as practisable.
3. **One to three `careful` boxes** — the standard confusions. Curved versus
   total surface area. The sector versus the segment. Profit on cost price
   versus on selling price. `(a + b)² ≠ a² + b²`.
4. **The question bank**: `18` to `28` questions in one `mcq` block, or split
   into two blocks with headings if the topic has two clear halves.

### The link between the sheet and the questions

- **Every formula in your formula sheet must be tested by at least one
  question.**
- **Every question must test a formula that is in your sheet or your quick
  list.** A question whose formula appears nowhere else in the topic is a
  question the reader cannot revise from.

### The mix of questions

About half **direct recall** ("the volume of a hemisphere is"), about a third
**one-step application** with clean numbers, and the rest **trap-spotting**
(two formulas that are confused, or a figure's standard misreading).

---

## 9. Figures

Use `d:"<key>"` **only** with a key listed in `DIAGRAMS.md`. The drawings are
made separately; a key that is not on the list renders as a visible gap on the
page and will be reported as an error.

Any question that says "in the figure" **must** carry a `d` key. Any question
that can be stated in words without one should not have one.

---

## 10. What the checker enforces

A validator runs over your fragment. It fails on:

- a fragment that is not a single valid object literal;
- a missing `id`, `n`, `w`, `quick` or `blocks`;
- an `mcq` entry without `q`, `o`, `a` or `why`;
- `o` not being exactly four distinct non-empty options;
- `a` not an integer in `0`–`3`;
- a `why` shorter than 60 characters;
- an unmatched `*` or backtick in any string;
- a `d` key that is not in the diagram catalogue;
- a question text that duplicates another question anywhere on the site;
- fewer than 18 or more than 28 questions in the topic;
- one letter holding more than 35 per cent of the answers;
- raw `<` or `>` used as HTML, `sqrt(`, `^` for powers, or `*` as multiply.

Run it yourself before you finish:

```
node C:/Users/amanc/claude code/answer-key/tools/checkfrag.js C:/Users/amanc/claude code/answer-key/tools/frag/<your-fragment-name>.js
```

Fix everything it reports, then run it again until it prints `OK`. **Do not
finish while it still reports an error.**

---

## 11. What to return

Return a short plain-text report, not the file's contents:

```
file: frag/algebra-identities.js
questions: 24
answer spread: A 6, B 6, C 7, D 5
formulas in the sheet: 19, all tested
figures used: none
anything you deliberately left out, and why: …
anything you are unsure about: …
```

Accuracy is the only thing that matters here. A wrong answer key on an exam
site is worse than a missing topic, because the reader will learn the wrong
formula and trust it. If you are not certain of a result, check it by working
it out from first principles before you write it down, or leave it out and say
so in your report.
