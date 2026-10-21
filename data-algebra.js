/* THE ANSWER KEY — data-algebra.js
   Algebra, as questions.

   WHY THIS SUBJECT IS THE LONGEST. It was asked for by name as the weak one,
   and algebra is also the part of the paper where a single missing line —
   the middle term of (a + b)², the sign inside the factor of a³ − b³ — costs
   marks in every question built on it. So the subject is nine topics rather
   than the four the syllabus implies, and every identity gets asked rather
   than listed.

   HOW TO USE IT. Read the quick box and the sheet, then answer. A question
   you get wrong names the identity you do not have, and the explanation
   gives that identity in full. Answering locks the question, because a
   formula looked up while the options were on screen has not been tested. */

(window.SUBJECTS = window.SUBJECTS || []).push({

id:"algebra", n:"Algebra", tab:"Algebra", sub:"Identities to graphs",
part:"Maths — every formula as a question",
w:"The identities, the surds, the quadratics and the two families of question SSC builds out of them — all of it as questions, with the formula in the answer.",
intro:"Nine topics, in the order the chapter is usually taught: the identities first, because everything else leans on them, then the two families SSC asks over and over — a + b + c = 0 and x + 1/x — then surds, quadratics, polynomials, ratio, maxima and minima, and the graph of a line.",

topics:[

/* ============================================================ 1 — Identities and expansions (24 questions) */
{
id:"identities", n:"Identities and expansions", hy:1,
w:"The eleven identities the whole of SSC algebra is built on, and the rearrangement of each one that the question actually uses.",
quick:[
 "**(a + b)² = a² + 2ab + b²** and **(a − b)² = a² − 2ab + b²**. The middle term is the identity; dropping it is the single commonest mistake in the paper.",
 "**(a + b)² − (a − b)² = 4ab** and **(a + b)² + (a − b)² = 2(a² + b²)**. One is the difference, the other the sum — keep them apart.",
 "**a² − b² = (a + b)(a − b)**. Read backwards it is also the arithmetic shortcut: 101 × 99 = 100² − 1² = `9999`.",
 "**a³ + b³ = (a + b)(a² − ab + b²)** and **a³ − b³ = (a − b)(a² + ab + b²)**. The sign outside and the middle sign inside are always *opposite*.",
 "**(a + b)³ = a³ + b³ + 3ab(a + b)**, so **a³ + b³ = (a + b)³ − 3ab(a + b)**. That rearrangement is what most questions want.",
 "**(a + b + c)² = a² + b² + c² + 2(ab + bc + ca)** — the bridge between the three sums, and worth more marks than any other line here.",
 "**a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca)**. Every `a + b + c = 0` question in the paper comes out of this one line."
],
blocks:[
 {h:"THE SHEET — every identity, with the form the question uses",
  cols:["Asked as","The identity","The rearrangement that gets used"],
  rows:[
  ["**(a + b)²**","a² + 2ab + b²","a² + b² = (a + b)² − 2ab"],
  ["**(a − b)²**","a² − 2ab + b²","a² + b² = (a − b)² + 2ab, and (a − b)² = (a + b)² − 4ab"],
  ["**(a + b)² − (a − b)²**","4ab","ab = [(a + b)² − (a − b)²]/4"],
  ["**(a + b)² + (a − b)²**","2(a² + b²)","a² + b² = [(a + b)² + (a − b)²]/2"],
  ["**a² − b²**","(a + b)(a − b)","Also the shortcut for 101 × 99, 53² − 47², and every difference of squares"],
  ["**(a + b)³**","a³ + 3a²b + 3ab² + b³ = a³ + b³ + 3ab(a + b)","a³ + b³ = (a + b)³ − 3ab(a + b)"],
  ["**(a − b)³**","a³ − 3a²b + 3ab² − b³ = a³ − b³ − 3ab(a − b)","a³ − b³ = (a − b)³ + 3ab(a − b)"],
  ["**a³ + b³**","(a + b)(a² − ab + b²)","Minus outside, plus inside"],
  ["**a³ − b³**","(a − b)(a² + ab + b²)","Plus outside, minus inside"],
  ["**(a + b + c)²**","a² + b² + c² + 2(ab + bc + ca)","a² + b² + c² = (a + b + c)² − 2(ab + bc + ca)"],
  ["**a³ + b³ + c³ − 3abc**","(a + b + c)(a² + b² + c² − ab − bc − ca)","If a + b + c = 0 then a³ + b³ + c³ = 3abc"],
  ["**a² + b² + c² − ab − bc − ca**","½[(a − b)² + (b − c)² + (c − a)²]","Never negative, and zero only when a = b = c"],
  ["**(a + b + c)³ − a³ − b³ − c³**","3(a + b)(b + c)(c + a)","Asked in exactly this form"],
  ["**a⁴ + b⁴**","(a² + b²)² − 2a²b²","The route from a + b and ab to a⁴ + b⁴ goes through a² + b²"],
  ["**a⁴ + a²b² + b⁴**","(a² + ab + b²)(a² − ab + b²)","The one that looks unfactorisable and is not"],
  ["**x² + (p + q)x + pq**","(x + p)(x + q)","Factorising any quadratic: find the pair that multiplies to the last term and adds to the middle one"],
  ["**a² + b² + c² ≥ ab + bc + ca**","Always true","Equality only when a = b = c"],
  ["**(a + b)(a − b)(a² + b²)**","a⁴ − b⁴","Difference of squares applied twice"]
 ]},

 {careful:"**(a + b)² is not a² + b².** The whole identity is the middle term `2ab`, and more algebra marks are lost here than anywhere else on the paper. The same goes for roots: **√(a² + b²) is not a + b**, and **(a + b)³ is not a³ + b³**."},

 {careful:"In **a³ − b³ = (a − b)(a² + ab + b²)** the sign *inside* the bracket is the opposite of the sign *outside* it. Minus outside, plus inside. Writing `(a − b)(a² − ab + b²)` is the commonest single slip in the whole chapter, and it is always offered as an option."},

 {careful:"The factor of **a³ + b³ + c³ − 3abc** is `(a² + b² + c² − ab − bc − ca)` — all three product terms carry a **minus**. The version with plus signs factorises nothing, and it is the option put there for anyone who half-remembers the line."},

 {h:"QUESTIONS — the identities, one at a time",
  mcq:[
  {q:"`(a + b)² − (a − b)²` is equal to:",
   o:["4ab","2(a² + b²)","2ab","a² − b²"],
   a:0,
   why:"**(a + b)² − (a − b)² = 4ab.** The two squares cancel and the two middle terms add. Option B is its companion, **(a + b)² + (a − b)² = 2(a² + b²)** — one identity is the *difference* of the two squares and the other the *sum*, and swapping them is the standard trap.",
   tag:"(a+b)²"},

  {q:"If `a + b = 7` and `ab = 10`, then `a² + b²` is:",
   o:["69","29","39","19"],
   a:1,
   why:"**a² + b² = (a + b)² − 2ab** = 7² − 2(10) = 49 − 20 = `29`. Option A, `69`, is what adding 2ab instead of subtracting gives — and that form, **(a − b)² = (a + b)² − 4ab**, would give `9`, not `69`.",
   tag:"a²+b²"},

  {q:"`a³ − b³` factorises as:",
   o:["(a − b)(a² − ab + b²)","(a − b)(a² + ab + b²)","(a + b)(a² − ab + b²)","(a − b)(a² + 2ab + b²)"],
   a:1,
   why:"**a³ − b³ = (a − b)(a² + ab + b²).** The sign outside the bracket is minus, so the middle sign inside is plus — they are always opposite. Option A keeps both minus and is the commonest written slip; option C is the factorisation of **a³ + b³**; option D is just (a − b)(a + b)².",
   tag:"a³−b³"},

  {q:"If `a + b + c = 0`, then `a³ + b³ + c³` equals:",
   o:["0","abc","−3abc","3abc"],
   a:3,
   why:"From **a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca)**, putting `a + b + c = 0` kills the right-hand side, so **a³ + b³ + c³ = 3abc**. Option A is the answer to a different question — `a³ + b³ + c³ − 3abc` is what becomes zero, not the cubes themselves.",
   tag:"a+b+c=0"},

  {q:"`(a + b + c)²` expands to:",
   o:["a² + b² + c² + ab + bc + ca","a² + b² + c² + 2abc","a² + b² + c² − 2(ab + bc + ca)","a² + b² + c² + 2(ab + bc + ca)"],
   a:3,
   why:"**(a + b + c)² = a² + b² + c² + 2(ab + bc + ca).** Each of the three cross terms appears twice, which is where the 2 comes from. Option A drops that 2 and option B replaces the three cross terms with `2abc`, which is not a term in the expansion at all.",
   tag:"(a+b+c)²"},

  {q:"If `a² + b² + c² = 50` and `ab + bc + ca = 47`, and a, b and c are positive, then `a + b + c` is:",
   o:["97","12","144","±6"],
   a:1,
   why:"**(a + b + c)² = a² + b² + c² + 2(ab + bc + ca)** = 50 + 2(47) = 144, so `a + b + c = 12`. Option C is the square, left un-rooted — the commonest slip here — and option A is the two sums simply added, without the factor of 2.",
   tag:"(a+b+c)²"},

  {q:"`101 × 99` is, by identity:",
   o:["9989","10099","9909","9999"],
   a:3,
   why:"**a² − b² = (a + b)(a − b)**, read backwards: 101 × 99 = (100 + 1)(100 − 1) = 100² − 1² = 10000 − 1 = `9999`. The same shortcut turns 53² − 47² into (53 + 47)(53 − 47) = 100 × 6 = `600` without squaring anything.",
   tag:"a²−b²"},

  {q:"If `a − b = 4` and `ab = 21`, then `a³ − b³` is:",
   o:["148","64","316","352"],
   a:2,
   why:"**a³ − b³ = (a − b)³ + 3ab(a − b)** = 4³ + 3(21)(4) = 64 + 252 = `316`. Option B is the cube of the difference alone, which is what forgetting the `3ab(a − b)` term leaves. Note the plus: for **a³ + b³** the same term is *subtracted*, because a³ + b³ = (a + b)³ − 3ab(a + b).",
   tag:"a³−b³"},

  {q:"`a⁴ + a²b² + b⁴` factorises as:",
   o:["(a² + b²)(a² − b²)","(a² + b²)²","(a² + ab + b²)(a² − ab + b²)","(a + b)²(a − b)²"],
   a:2,
   why:"**a⁴ + a²b² + b⁴ = (a² + ab + b²)(a² − ab + b²).** Add and subtract a²b²: a⁴ + 2a²b² + b⁴ − a²b² = (a² + b²)² − (ab)², a difference of squares. Option B is (a² + b²)² itself, which is a⁴ + 2a²b² + b⁴ — one a²b² too many.",
   tag:"a⁴+a²b²+b⁴"},

  {q:"`(a + b)³ − (a − b)³` equals:",
   o:["2b(3a² + b²)","2a(a² + 3b²)","6a²b","2b³"],
   a:0,
   why:"The two cubes expand to a³ + 3a²b + 3ab² + b³ and a³ − 3a²b + 3ab² − b³; subtracting leaves 6a²b + 2b³ = **2b(3a² + b²)**. Option B is the *sum* of the same two cubes, **(a + b)³ + (a − b)³ = 2a(a² + 3b²)**, and options C and D are each only half of the answer.",
   tag:"(a+b)³"},

  {q:"If `x + y = 12` and `xy = 27`, then `x³ + y³` is:",
   o:["972","2700","756","1728"],
   a:2,
   why:"**x³ + y³ = (x + y)³ − 3xy(x + y)** = 12³ − 3(27)(12) = 1728 − 972 = `756`. Option D is the cube alone, with the correction term forgotten; option A is the correction term by itself.",
   tag:"x³+y³"},

  {q:"`a² + b² + c² − ab − bc − ca` is equal to:",
   o:["(a + b + c)²","2[(a − b)² + (b − c)²]","(a − b)(b − c)(c − a)","½[(a − b)² + (b − c)² + (c − a)²]"],
   a:3,
   why:"**a² + b² + c² − ab − bc − ca = ½[(a − b)² + (b − c)² + (c − a)²].** Because it is half a sum of squares it can never be negative, and it is zero only when `a = b = c`. That is the reason `a³ + b³ + c³ = 3abc` holds both when a + b + c = 0 *and* when a = b = c.",
   tag:"Sum of squares"},

  {q:"`x² − 7x + 12` factorises as:",
   o:["(x − 3)(x − 4)","(x + 3)(x + 4)","(x − 2)(x − 6)","(x − 1)(x − 12)"],
   a:0,
   why:"**x² + (p + q)x + pq = (x + p)(x + q)**, so the pair must multiply to `12` and add to `−7`: that is `−3` and `−4`. Options C and D also multiply to 12 but add to −8 and −13, which is exactly the check to run before ticking.",
   tag:"Factorising"},

  {q:"If `a/b + b/a = 1`, then `a³ + b³` is:",
   o:["1","a²b²","0","ab"],
   a:2,
   why:"`a/b + b/a = 1` means **a² + b² = ab**. Then **a³ + b³ = (a + b)(a² − ab + b²) = (a + b)(ab − ab) = 0.** The bracket is the whole question: once a² + b² = ab, the second factor collapses, so the answer is `0` whatever a and b are.",
   tag:"a³+b³"},

  {q:"`(a + b + c)³ − a³ − b³ − c³` equals:",
   o:["3(a + b)(b + c)(c + a)","3abc","(a + b + c)(ab + bc + ca)","3(a + b + c)(ab + bc + ca)"],
   a:0,
   why:"**(a + b + c)³ = a³ + b³ + c³ + 3(a + b)(b + c)(c + a)**, so the difference is **3(a + b)(b + c)(c + a)**. SSC asks it in exactly this shape. Option B, `3abc`, belongs to the other famous line — a³ + b³ + c³ − 3abc — and is the trap here.",
   tag:"(a+b+c)³"},

  {q:"If `x² + y² = 25` and `xy = 12`, then `x + y` (both positive) is:",
   o:["5","13","49","7"],
   a:3,
   why:"**(x + y)² = x² + y² + 2xy** = 25 + 24 = 49, so `x + y = 7`. Option D is the square itself; option A is √25, which answers nothing. The companion is **(x − y)² = 25 − 24 = 1**, so x − y = 1 and the numbers are 4 and 3.",
   tag:"(a+b)²"},

  {q:"`a⁴ + b⁴` written in terms of `a² + b²` and `ab` is:",
   o:["(a² + b²)² − 2a²b²","(a² + b²)² + 2a²b²","(a² − b²)²","(a² + b²)(a² − b²)"],
   a:0,
   why:"**a⁴ + b⁴ = (a² + b²)² − 2a²b²** — the same shape as a² + b² = (a + b)² − 2ab, one level up. Option D is a⁴ − b⁴, and option C is a⁴ − 2a²b² + b⁴. The route from `a + b` and `ab` to a⁴ + b⁴ always runs through a² + b² first.",
   tag:"a⁴+b⁴"},

  {q:"If `a + b = 5` and `a − b = 3`, then `ab` is:",
   o:["15","4","8","16"],
   a:1,
   why:"**(a + b)² − (a − b)² = 4ab**, so 25 − 9 = 4ab and `ab = 4`. Option D, `16`, is 4ab left undivided — the standard slip. Option A multiplies the two given numbers, which is not what ab means.",
   tag:"4ab"},

  {q:"If `x³ + y³ + z³ = 3xyz` and x, y and z are **not** all equal, then:",
   o:["x = y = z","x + y + z = 0","xyz = 0","x + y + z = 3"],
   a:1,
   why:"**x³ + y³ + z³ − 3xyz = (x + y + z)(x² + y² + z² − xy − yz − zx)**, so one of the two factors is zero: either `x + y + z = 0` or the second bracket is zero, and the second bracket is zero only when x = y = z. The question rules that out, so **x + y + z = 0**. Option A is the other half of the same identity and is the trap.",
   tag:"a+b+c=0"},

  {q:"If `(a + b)² = 9` and `(a − b)² = 1`, then `a² + b²` is:",
   o:["4","10","5","8"],
   a:2,
   why:"**(a + b)² + (a − b)² = 2(a² + b²)**, so 9 + 1 = 2(a² + b²) and `a² + b² = 5`. Option B is the sum left undivided. The other identity, **(a + b)² − (a − b)² = 4ab**, gives 9 − 1 = 4ab, so ab = 2 — and the numbers are 2 and 1.",
   tag:"2(a²+b²)"},

  {q:"Which of these is **not** a correct identity?",
   o:["(a − b)² = a² − 2ab + b²","a² − b² = (a + b)(a − b)","(a + b)³ = a³ + 3a²b + 3ab² + b³","(a + b)² = a² + b²"],
   a:3,
   why:"**(a + b)² = a² + 2ab + b²**, never `a² + b²`. The missing `2ab` is the identity, and this one line costs more marks across an algebra paper than any other. The other three are all correct as written.",
   tag:"The big slip"},

  {q:"If `x + y + z = 6` and `x² + y² + z² = 14`, then `xy + yz + zx` is:",
   o:["11","22","8","20"],
   a:0,
   why:"**(x + y + z)² = x² + y² + z² + 2(xy + yz + zx)**, so 36 = 14 + 2(xy + yz + zx) and the sum of products is `11`. Option B is that answer left undivided by 2; option C, `8`, is simply 14 − 6 and tests nothing but haste.",
   tag:"(a+b+c)²"},

  {q:"If `a³ + b³ = 152` and `a + b = 8`, then `ab` is:",
   o:["19","15","45","8"],
   a:1,
   why:"**(a + b)³ = a³ + b³ + 3ab(a + b)**, so 512 = 152 + 3ab(8) = 152 + 24ab, giving 24ab = 360 and `ab = 15`. Option A is 152 ÷ 8, which answers nothing; option C is the value of 3ab.",
   tag:"a³+b³"},

  {q:"If `a² + b² + c² = ab + bc + ca`, then:",
   o:["a + b + c = 0","abc = 1","a = b = c","a, b and c are in arithmetic progression"],
   a:2,
   why:"The condition rearranges to `a² + b² + c² − ab − bc − ca = 0`, and that expression equals **½[(a − b)² + (b − c)² + (c − a)²]**. A sum of squares is zero only when every square is zero, so **a = b = c**. Option A is the other condition that makes a³ + b³ + c³ = 3abc, and it is the trap put here for it.",
   tag:"a = b = c"}
 ],
  note:"Every question above is answered by one line from the sheet. If a question took you more than about thirty seconds of writing, the identity it uses is the one to go back to."}
]
},

/* ============================================================ 2 — The a + b + c = 0 family (26 questions) */
{
id:"abc-zero", n:"The a + b + c = 0 family", hy:1,
w:"One identity, and the dozen results SSC builds out of it — the cubes, the fourth powers, the product of the pair-sums, and the substitution that turns three differences into one product.",
quick:[
 "**a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca)**, so **a + b + c = 0 ⇒ a³ + b³ + c³ = 3abc**. Every question in this topic is this line.",
 "The identity has a *second* root: **a = b = c also gives a³ + b³ + c³ = 3abc**. So a question that wants `a + b + c = 0` has to say the three are not all equal.",
 "If a + b + c = 0: **a² + b² + c² = −2(ab + bc + ca)**. Square the sum, set it to zero, move the cross term across.",
 "If a + b + c = 0: **a⁴ + b⁴ + c⁴ = ½(a² + b² + c²)² = 2(ab + bc + ca)²**, and therefore **(a² + b² + c²)² = 2(a⁴ + b⁴ + c⁴)**.",
 "If a + b + c = 0: **(a + b)(b + c)(c + a) = −abc**, **(a + b)³ + (b + c)³ + (c + a)³ = −3abc**, and **a²/(bc) + b²/(ca) + c²/(ab) = 3**.",
 "The substitution that makes it usable: the brackets of **(a − b) + (b − c) + (c − a)** add to zero, so **(a − b)³ + (b − c)³ + (c − a)³ = 3(a − b)(b − c)(c − a)**. Any three brackets that cancel work the same way.",
 "**1/a + 1/b + 1/c = 0 ⇒ ab + bc + ca = 0**, which makes `(a + b + c)² = a² + b² + c²`, and the reciprocals themselves give `1/a³ + 1/b³ + 1/c³ = 3/(abc)`."
],
blocks:[
 {h:"THE SHEET — the identity, and everything the paper gets out of it",
  cols:["Given","What it gives","Why, in one line"],
  rows:[
  ["**a³ + b³ + c³ − 3abc**, for any a, b, c","(a + b + c)(a² + b² + c² − ab − bc − ca)","All three product terms inside carry a **minus**. The plus version factorises nothing."],
  ["**a³ + b³ + c³ = 3abc**","a + b + c = 0 **or** a = b = c","A product is zero when either factor is, and the second factor is zero only when a = b = c."],
  ["a + b + c = 0 ⇒ **a³ + b³ + c³**","3abc","The first factor vanishes, so the whole left side of the identity does."],
  ["a + b + c = 0 ⇒ **a² + b² + c²**","−2(ab + bc + ca)","(a + b + c)² = a² + b² + c² + 2(ab + bc + ca) = 0."],
  ["a + b + c = 0 ⇒ **a⁴ + b⁴ + c⁴**","½(a² + b² + c²)², and also 2(ab + bc + ca)²","Read backwards: **(a² + b² + c²)² = 2(a⁴ + b⁴ + c⁴)**."],
  ["a + b + c = 0 ⇒ **a²/(bc) + b²/(ca) + c²/(ab)**","3","Over the common denominator abc the sum is (a³ + b³ + c³)/abc = 3abc/abc."],
  ["a + b + c = 0 ⇒ **(a + b)(b + c)(c + a)**","−abc","a + b = −c, b + c = −a, c + a = −b, and the three minus signs multiply to a single minus."],
  ["a + b + c = 0 ⇒ **(a + b)³ + (b + c)³ + (c + a)³**","−3abc","The same three substitutions give −(a³ + b³ + c³)."],
  ["**(a − b)³ + (b − c)³ + (c − a)³**","3(a − b)(b − c)(c − a)","The three brackets add to zero, so the three-cube rule applies to them."],
  ["**(a² − b²)³ + (b² − c²)³ + (c² − a²)³**","3(a² − b²)(b² − c²)(c² − a²)","The same trick one level up — the squares cancel just as the letters did."],
  ["**(px − qy)³ + (qy − rz)³ + (rz − px)³**","3(px − qy)(qy − rz)(rz − px)","Any three brackets that cancel, however dressed up, obey the rule."],
  ["**17³ − 12³ − 5³**","3 × 17 × (−12) × (−5) = `3060`","Read it as 17³ + (−12)³ + (−5)³: the three bases add to zero."],
  ["**(a − b)³ + (b − c)³ + (c − a)³ = 0**","At least two of a, b, c are equal","The product form 3(a − b)(b − c)(c − a) needs one factor to be zero."],
  ["**1/a + 1/b + 1/c = 0**","ab + bc + ca = 0","Over abc the numerator is bc + ca + ab, and abc is not zero."],
  ["1/a + 1/b + 1/c = 0 ⇒ **(a + b + c)²**","a² + b² + c²","The cross term 2(ab + bc + ca) is zero."],
  ["1/a + 1/b + 1/c = 0 ⇒ **1/a³ + 1/b³ + 1/c³**","3/(abc)","The three reciprocals are themselves three numbers adding to zero."],
  ["a + b + c = s and ab + bc + ca = p ⇒ **a³ + b³ + c³ − 3abc**","s(s² − 3p)","Because a² + b² + c² − ab − bc − ca = (s² − 2p) − p."]
 ],
  note:"Seventeen lines, all from the first one. If you can write row 1 from memory with the minus signs in the right places, the rest of the topic is substitution."},

 {careful:"**a³ + b³ + c³ = 3abc has two roots, not one.** It holds when `a + b + c = 0` and it holds when `a = b = c`. So a question that gives you the cubes and asks for the sum cannot be answered `0` unless it also tells you the three are **not all equal** — and the option `a = b = c` is always on the paper for anyone who forgot the second root."},

 {careful:"Before using **x³ + y³ + z³ = 3xyz** on three brackets, add the brackets up and check that they really come to **zero**. `(a − b) + (b − c) + (c − a)` does. `(a − b) + (b − c) + (a − c)` does not — it comes to `2(a − c)` — and the shortcut then gives a wrong answer with no warning."},

 {careful:"Two results sit next to each other and are constantly swapped. With a + b + c = 0, the **product** `(a + b)(b + c)(c + a) = −abc`, but the **sum of their cubes** `(a + b)³ + (b + c)³ + (c + a)³ = −3abc`. One has the 3, the other does not. The same slip loses the factor of 3 in every numeric question: `17³ − 12³ − 5³` is `3abc`, not `abc`."},

 {h:"QUESTIONS — the identity, then the results, then the numbers",
  mcq:[
  {q:"`a³ + b³ + c³ − 3abc` factorises as:",
   o:["(a + b + c)(a² + b² + c² + ab + bc + ca)","(a + b + c)(a² + b² + c² − ab − bc − ca)","(a + b + c)(a² + b² + c² − ab − bc + ca)","3(a + b)(b + c)(c + a)"],
   a:1,
   why:"**a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca).** All three product terms inside the bracket carry a **minus**. Option A is the plus-sign version, which factorises nothing — multiplied out it gives a³ + b³ + c³ + 3abc together with six more terms, not the expression asked for. Option C has two of the three signs right, which is how the line is usually half-remembered. Option D belongs to the neighbouring identity **(a + b + c)³ − a³ − b³ − c³ = 3(a + b)(b + c)(c + a)**.",
   tag:"The identity"},

  {q:"If `p + q + r = 0`, then `p³ + q³ + r³` is equal to:",
   o:["3pqr","0","pqr","−3pqr"],
   a:0,
   why:"From **p³ + q³ + r³ − 3pqr = (p + q + r)(p² + q² + r² − pq − qr − rp)**, putting `p + q + r = 0` makes the right-hand side zero, so **p³ + q³ + r³ = 3pqr**. Option B is the answer to a different question — it is `p³ + q³ + r³ − 3pqr` that becomes zero, not the cubes on their own.",
   tag:"a+b+c=0"},

  {q:"The equation `a³ + b³ + c³ = 3abc` is satisfied when:",
   o:["a + b + c = 0 only","a = b = c only","either a + b + c = 0 or a = b = c","abc = 0"],
   a:2,
   why:"The identity puts the condition as **(a + b + c)(a² + b² + c² − ab − bc − ca) = 0**, so one of the two factors must vanish: either `a + b + c = 0`, or the second bracket is zero, which happens only when `a = b = c`. Both roots count, which is why a question wanting the first one must rule out the second.",
   tag:"Two roots"},

  {q:"If `a + b + c = 0`, the sum `a² + b² + c²` is equal to:",
   o:["2(ab + bc + ca)","−2(ab + bc + ca)","−(ab + bc + ca)","ab + bc + ca"],
   a:1,
   why:"**(a + b + c)² = a² + b² + c² + 2(ab + bc + ca)**, and the left side is zero, so **a² + b² + c² = −2(ab + bc + ca)**. Option A is the same line with the sign of the move forgotten — and since a² + b² + c² cannot be negative, this result also says that `ab + bc + ca` is never positive when the three sum to zero.",
   tag:"a²+b²+c²"},

  {q:"If `a + b + c = 0` and `ab + bc + ca = −7`, then `a² + b² + c²` is:",
   o:["−14","7","14","0"],
   a:2,
   why:"**a² + b² + c² = −2(ab + bc + ca)** = −2(−7) = `14`. Option A keeps the minus sign that the given value has already supplied — two negatives multiply to a positive, and a sum of three squares could not be `−14` in any case. Option B drops the factor of 2, and option D is the belief that three numbers adding to zero must have squares adding to zero, which happens only when all three are `0`.",
   tag:"a²+b²+c²"},

  {q:"If `a + b + c = 0` and `a² + b² + c² = 12`, then `a⁴ + b⁴ + c⁴` is:",
   o:["144","72","288","36"],
   a:1,
   why:"**a⁴ + b⁴ + c⁴ = ½(a² + b² + c²)²** when a + b + c = 0, so the value is ½ × 12² = ½ × 144 = `72`. Option A is the square left unhalved and option C is it doubled instead of halved — the half is the whole of the formula. Option D comes from the companion form **a⁴ + b⁴ + c⁴ = 2(ab + bc + ca)²**: here ab + bc + ca = `−6`, and `36` is that squared with the factor of 2 lost.",
   tag:"a⁴+b⁴+c⁴"},

  {q:"If `a + b + c = 0`, the value of `(a² + b² + c²)²` is:",
   o:["2(a⁴ + b⁴ + c⁴)","a⁴ + b⁴ + c⁴","4(a⁴ + b⁴ + c⁴)","½(a⁴ + b⁴ + c⁴)"],
   a:0,
   why:"**a⁴ + b⁴ + c⁴ = ½(a² + b² + c²)²**, and turning that over gives **(a² + b² + c²)² = 2(a⁴ + b⁴ + c⁴)**. Option D is the same formula the wrong way round — the half belongs to the fourth powers, not to the square of the squares — and that inversion is what the question is testing.",
   tag:"a⁴+b⁴+c⁴"},

  {q:"If `a + b + c = 0`, then `a⁴ + b⁴ + c⁴` written in terms of `ab + bc + ca` is:",
   o:["(ab + bc + ca)²","½(ab + bc + ca)²","−2(ab + bc + ca)²","2(ab + bc + ca)²"],
   a:3,
   why:"Since **a² + b² + c² = −2(ab + bc + ca)**, squaring gives 4(ab + bc + ca)², and **a⁴ + b⁴ + c⁴ = ½(a² + b² + c²)² = 2(ab + bc + ca)²**. Option C carries the minus sign through the squaring, which a square destroys — a sum of fourth powers is never negative.",
   tag:"a⁴+b⁴+c⁴"},

  {q:"If `a + b + c = 0`, the value of `a²/(bc) + b²/(ca) + c²/(ab)` is:",
   o:["0","1","3","−3"],
   a:2,
   why:"Put the three terms over the common denominator abc: the sum becomes **(a³ + b³ + c³)/abc**, and since a + b + c = 0 the numerator is 3abc, so the value is `3`. Option A is what the sum of the three *numerators* would suggest to anyone who cancels too early; the result is a fixed number, independent of a, b and c.",
   tag:"a²/bc sum"},

  {q:"If `a + b + c = 0`, then `(a + b)(b + c)(c + a)` equals:",
   o:["abc","−abc","3abc","−3abc"],
   a:1,
   why:"a + b + c = 0 gives a + b = −c, b + c = −a and c + a = −b, so the product is (−c)(−a)(−b) = **−abc**. Option D is the neighbouring result — the *sum of the cubes* of those same three brackets is **−3abc** — and the stray 3 is the standard confusion between the two.",
   tag:"(a+b)(b+c)(c+a)"},

  {q:"If `a + b + c = 0`, the sum of the cubes `(a + b)³ + (b + c)³ + (c + a)³` is:",
   o:["3abc","−abc","0","−3abc"],
   a:3,
   why:"The three brackets are −c, −a and −b, so the sum of their cubes is −(a³ + b³ + c³) = **−3abc**. Option B is the *product* of the same three brackets, which is −abc, and option A drops the minus. Note that the three brackets also add to zero, so the three-cube rule applies to them directly: 3(−c)(−a)(−b) = −3abc.",
   tag:"Sum of cubes"},

  {q:"`(a − b)³ + (b − c)³ + (c − a)³` equals:",
   o:["0","3(a − b)(b − c)(c − a)","(a − b)(b − c)(c − a)","3abc"],
   a:1,
   why:"The three brackets add to zero — (a − b) + (b − c) + (c − a) = 0 — so by **x + y + z = 0 ⇒ x³ + y³ + z³ = 3xyz** the sum is **3(a − b)(b − c)(c − a)**. Option C is that product with the 3 lost, the commonest slip; option A is true only when two of the three letters are equal.",
   tag:"Three differences"},

  {q:"If `x = 9`, `y = 5` and `z = 2`, then `(x − y)³ + (y − z)³ + (z − x)³` is:",
   o:["−84","252","−252","0"],
   a:2,
   why:"**x + y + z = 0 ⇒ x³ + y³ + z³ = 3xyz**, and the three brackets here are `4`, `3` and `−7`, which add to zero. So the sum is **3(x − y)(y − z)(z − x)** = 3 × 4 × 3 × (−7) = `−252`. Option A is the product 4 × 3 × (−7) = −84 with the factor of 3 forgotten; option B is the right size with the sign lost, because the third bracket is (z − x) = `−7`, not (x − z) = `7`.",
   tag:"Three differences"},

  {q:"`(2x − 3y)³ + (3y − 5z)³ + (5z − 2x)³` equals:",
   o:["0","(2x − 3y)(3y − 5z)(5z − 2x)","3(2x − 3y)(3y − 5z)(5z − 2x)","30xyz"],
   a:2,
   why:"Add the three brackets: 2x − 3y + 3y − 5z + 5z − 2x = 0, so **x³ + y³ + z³ = 3xyz** applies to them and the answer is **3(2x − 3y)(3y − 5z)(5z − 2x)**. Option B loses the factor of 3; option D is what comes of multiplying the coefficients and the letters separately, which the identity never does.",
   tag:"Three brackets"},

  {q:"`17³ − 12³ − 5³` is:",
   o:["1020","−3060","0","3060"],
   a:3,
   why:"Read it as 17³ + (−12)³ + (−5)³. The bases add to 17 − 12 − 5 = 0, so **a³ + b³ + c³ = 3abc** = 3 × 17 × (−12) × (−5) = `3060`. Option A is abc without the 3 — the single commonest mistake in this family — and option C is what comes of assuming that because the bases cancel the cubes must too.",
   tag:"Numeric"},

  {q:"For which of these can the value be found from `a³ + b³ + c³ = 3abc`, with no cube worked out?",
   o:["19³ − 11³ − 8³","19³ − 12³ − 8³","19³ + 11³ + 8³","19³ − 11³ + 8³"],
   a:0,
   why:"**a³ + b³ + c³ = 3abc holds only when the three bases add to zero.** In option A they do — 19 − 11 − 8 = 0 — so its value is 3 × 19 × (−11) × (−8) = `5016` without cubing anything. The other three bases come to `−1`, `38` and `16`, and the shortcut applied to any of them gives a wrong answer with no warning: adding the bases up first is the whole of this question.",
   tag:"Numeric"},

  {q:"`(a − b)³ + (b − c)³ + (a − c)³` is **not** equal to `3(a − b)(b − c)(a − c)`. The reason is:",
   o:["the three brackets add to `2(a − c)`, not to zero","the rule works on numbers only, not on brackets","the rule needs `a + b + c = 0` as well","the rule needs the three brackets to be equal"],
   a:0,
   why:"**x³ + y³ + z³ = 3xyz holds only when x + y + z = 0.** Here (a − b) + (b − c) + (a − c) = `2(a − c)`, which is not zero, so the shortcut does not apply — the third bracket has been written as (a − c) in place of (c − a). Put (c − a) back and the three do add to zero, giving **3(a − b)(b − c)(c − a)**. Adding the brackets up before using the rule is the only guard, because the wrong answer arrives with no warning.",
   tag:"Check the sum"},

  {q:"If `1/x + 1/y + 1/z = 0` and `xyz = 6`, then `1/x³ + 1/y³ + 1/z³` is:",
   o:["18","2","3","½"],
   a:3,
   why:"The three reciprocals are themselves three numbers adding to zero, so **p + q + r = 0 ⇒ p³ + q³ + r³ = 3pqr** applies to them and **1/x³ + 1/y³ + 1/z³ = 3/(xyz)** = 3/6 = `½`. Option A is `3xyz` = 18, the product put in the numerator instead of the denominator; option B is `xyz/3` = 2, the fraction upside down; option C is the fixed value `3` that `a²/(bc) + b²/(ca) + c²/(ab)` takes, quoted here without dividing by xyz.",
   tag:"1/a+1/b+1/c"},

  {q:"With a, b and c all different, `[(a² − b²)³ + (b² − c²)³ + (c² − a²)³] ÷ [(a − b)³ + (b − c)³ + (c − a)³]` is:",
   o:["(a + b)(b + c)(c + a)","3(a + b)(b + c)(c + a)","(a − b)(b − c)(c − a)","abc"],
   a:0,
   why:"Both sets of brackets add to zero, so the top is **3(a² − b²)(b² − c²)(c² − a²)** and the bottom is **3(a − b)(b − c)(c − a)**. The threes cancel, and each squared factor splits as (a − b)(a + b), leaving **(a + b)(b + c)(c + a)**. Option B keeps a 3 that has already cancelled — the trap is applying the rule to the numerator and forgetting it applies to the denominator too.",
   tag:"Squares version"},

  {q:"If `1/a + 1/b + 1/c = 0`, then:",
   o:["a + b + c = 0","ab + bc + ca = abc","a + b + c = abc","ab + bc + ca = 0"],
   a:3,
   why:"Over the common denominator the condition is **(bc + ca + ab)/abc = 0**, and abc cannot be zero or the fractions would not exist, so the numerator alone must vanish: **ab + bc + ca = 0**. Options B and C set the numerator equal to the denominator or to the sum, which clearing a fraction never does. Option A is the condition for the other half of this topic and does not follow — take a = b = 1 and c = −½, where the reciprocals add to zero but a + b + c = `1½`.",
   tag:"1/a+1/b+1/c"},

  {q:"If `1/x + 1/y + 1/z = 0`, then `1/x³ + 1/y³ + 1/z³` equals:",
   o:["3xyz","0","3/(xyz)","1/(3xyz)"],
   a:2,
   why:"The three reciprocals are themselves three numbers adding to zero, so **p + q + r = 0 ⇒ p³ + q³ + r³ = 3pqr** applies with p = 1/x, q = 1/y, r = 1/z, giving 3 × (1/x) × (1/y) × (1/z) = **3/(xyz)**. Option A has the product in the numerator instead of the denominator, which is the slip to watch; option D keeps the 3 inside the denominator; option B forgets that it is the cubes *minus* 3pqr that vanish, not the cubes themselves.",
   tag:"1/a+1/b+1/c"},

  {q:"If `1/a + 1/b + 1/c = 0`, then `(a + b + c)²` equals:",
   o:["0","a² + b² + c² + 2abc","2(a² + b² + c²)","a² + b² + c²"],
   a:3,
   why:"The condition gives **ab + bc + ca = 0**, and **(a + b + c)² = a² + b² + c² + 2(ab + bc + ca)**, so the cross term disappears and **(a + b + c)² = a² + b² + c²**. Option B is the expansion with the cross term written as `2abc`, which is not a term in it at all. Option A assumes that reciprocals adding to zero force the numbers themselves to add to zero, which it does not — that is the trap in this whole half of the topic.",
   tag:"1/a+1/b+1/c"},

  {q:"If `a + b + c = 9` and `ab + bc + ca = 23`, then `a³ + b³ + c³ − 3abc` is:",
   o:["108","522","315","12"],
   a:0,
   why:"**a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca)**. Here a² + b² + c² = 9² − 2(23) = 35, so the bracket is 35 − 23 = 12 and the value is 9 × 12 = `108`. Option B, `522`, is 9 × (35 + 23) — the plus-sign version of the bracket, and the reason the minus signs in the sheet are worth memorising.",
   tag:"Sum not zero"},

  {q:"A question states that `a³ + b³ + c³ = 3abc` and asks for the value of `a + b + c`. The answer `0` is safe only if the question also says:",
   o:["abc ≠ 0","a, b and c are not all equal","a, b and c are positive","a² + b² + c² = ab + bc + ca"],
   a:1,
   why:"**a³ + b³ + c³ = 3abc holds both when a + b + c = 0 and when a = b = c**, because the factorised condition is (a + b + c)(a² + b² + c² − ab − bc − ca) = 0 and the second bracket vanishes exactly when the three are equal. Ruling out `a = b = c` is what leaves `a + b + c = 0` as the only answer. Option A rules out nothing relevant, since a = b = c = 2 satisfies it. Option D is the opposite of what is wanted: `a² + b² + c² = ab + bc + ca` is itself the statement that a = b = c, so it forces the second root rather than excluding it.",
   tag:"Two roots"},

  {q:"`(a − b)³ + (b − c)³ + (c − a)³ = 0` holds exactly when:",
   o:["a + b + c = 0","a = b = c","at least two of a, b and c are equal","a, b and c are in arithmetic progression"],
   a:2,
   why:"The sum equals **3(a − b)(b − c)(c − a)**, and a product is zero only when one of its factors is — that is, when two of the three letters are equal. Option B is a special case of the right answer rather than the whole of it, and it is the one usually ticked. Option A is irrelevant here: the brackets already add to zero whatever a, b and c are.",
   tag:"When it is zero"},

  {q:"If `x + y + z = 0`, then `(y + z)(z + x)(x + y) + xyz` is:",
   o:["0","−2xyz","2xyz","3xyz"],
   a:0,
   why:"With x + y + z = 0, **(x + y)(y + z)(z + x) = −xyz**: the substitutions y + z = −x, z + x = −y and x + y = −z make the product (−x)(−y)(−z), and three minus signs multiply to one minus. Adding xyz then leaves `0`. Option C, `2xyz`, is what comes of taking the product as +xyz and adding, and option B of taking it as −xyz and then subtracting instead of adding — the single minus sign is the whole question.",
   tag:"(a+b)(b+c)(c+a)"}
 ],
  note:"Twenty-six questions, every one of them a substitution into a line of the sheet above. If a question here took real working rather than a substitution, go back and write that row out — the rest is arithmetic."}
]
},

/* ============================================================ 3 — The x + 1/x family (25 questions) */
{
id:"algebra-recip", n:"The x + 1/x family", hy:1,
w:"Everything that follows from one value of x + 1/x or x − 1/x — the squares, the cubes, the fourth and sixth powers, and the dividing-through step that hands you the value in the first place.",
quick:[
 "**x + 1/x = k ⇒ x² + 1/x² = k² − 2** and **x³ + 1/x³ = k³ − 3k**. Those two lines answer most of the questions in this family.",
 "**x − 1/x = m ⇒ x² + 1/x² = m² + 2** and **x³ − 1/x³ = m³ + 3m**. A *plus* given means the correction is subtracted; a *minus* given means it is added.",
 "**x⁴ + 1/x⁴ = (k² − 2)² − 2** and **x⁶ + 1/x⁶ = (k³ − 3k)² − 2**. Every squaring costs its own `2`, so build the powers up one step at a time.",
 "**(x + 1/x)² − (x − 1/x)² = 4.** Given either one of them, the other's square is `4` away.",
 "**ax² + bx + a = 0 divided through by ax gives x + b/a + 1/x = 0, so x + 1/x = −b/a.** So `x² − 3x + 1 = 0` means x + 1/x = `3` — recognising that step is the whole question.",
 "**x + 1/x = 2 ⇒ x = 1**, so every xⁿ + 1/xⁿ is `2`; **x + 1/x = −2 ⇒ x = −1**. Also **x + 1/x = √3 ⇒ x³ + 1/x³ = 0** and **x + 1/x = 1 ⇒ x³ + 1/x³ = −2**.",
 "**1/(2 + √3) = 2 − √3** and **1/(3 + 2√2) = 3 − 2√2** — whenever a² − b = 1 the reciprocal of a + √b is just a − √b, and x + 1/x comes out a whole number."
],
blocks:[
 {h:"THE SHEET — every formula this topic tests",
  cols:["Asked for","The formula","What it is for"],
  rows:[
  ["**x² + 1/x²** from x + 1/x = k","k² − 2","Square the given and take `2` off, because (x + 1/x)² = x² + 2 + 1/x²"],
  ["**x³ + 1/x³** from k","k³ − 3k","From (x + 1/x)³ = x³ + 1/x³ + 3(x + 1/x)"],
  ["**x⁴ + 1/x⁴** from k","(k² − 2)² − 2","Two steps: reach x² + 1/x² first, then square that and take `2` off"],
  ["**x⁶ + 1/x⁶** from k","(k³ − 3k)² − 2","Square x³ + 1/x³, because (x³ + 1/x³)² = x⁶ + 2 + 1/x⁶. Squaring x² + 1/x² instead gives the fourth power, not the sixth"],
  ["**x² + 1/x²** from x − 1/x = m","m² + 2","Still a plus on the left; only the sign of the correction changes"],
  ["**x³ − 1/x³** from m","m³ + 3m","A difference of cubes on the left, and the 3m is added, not subtracted"],
  ["**(x + 1/x)² − (x − 1/x)²**","4","The bridge: x + 1/x = √(m² + 4) from x − 1/x = m, and x − 1/x = √(k² − 4) from x + 1/x = k"],
  ["**x + 1/x** from x² + 1/x² = p","√(p + 2)","From the same given, **x − 1/x = √(p − 2)**. The positive root is the one taken when x > 0. The letter is `p` and not `k` here because the given is the square sum, not x + 1/x"],
  ["**x + 1/x** from ax² + bx + a = 0","−b/a","Divide through by `ax`: x + b/a + 1/x = 0. This is how almost every question hands the value over"],
  ["**x + 1/x = 2**","x = 1, and xⁿ + 1/xⁿ = `2` for every n","The one case where no formula is needed at all"],
  ["**x + 1/x = −2**","x = −1","Odd powers then give `−2` and even powers give `2`"],
  ["**x + 1/x = 1**","x³ + 1/x³ = −2, and x³ = −1","Because x² − x + 1 = 0 multiplied by (x + 1) gives x³ + 1 = 0"],
  ["**x + 1/x = √3**","x³ + 1/x³ = 0","And x⁶ + 1/x⁶ = −2, because squaring `0` still costs 2"],
  ["**Least value of x + 1/x** for x > 0","2","From AM ≥ GM, with equality only at x = 1. For x < 0 the greatest value is `−2`"],
  ["**1/(a + √b)** when a² − b = 1","a − √b","1/(2 + √3) = 2 − √3 and 1/(3 + 2√2) = 3 − 2√2"]
 ],
  note:"Read the first column as the question and the second as the answer. Nothing in the question bank below needs a formula that is not on this sheet."},

 {careful:"With **x + 1/x** given, the correction is **subtracted**: `k² − 2`, `k³ − 3k`. With **x − 1/x** given it is **added**: `m² + 2`, `m³ + 3m`. That one sign is the whole difference between the two halves of this topic, and the wrong-sign value is offered as an option in almost every question."},

 {careful:"**x⁴ + 1/x⁴ is not k⁴ − 2.** Each squaring costs its own `2`, so the route runs x + 1/x → x² + 1/x² = k² − 2 → x⁴ + 1/x⁴ = (k² − 2)² − 2. For k = 3 the true value is `47`; the short cut gives `79`, and `79` is always on the option list."},

 {careful:"**x + 1/x = 2 means x = 1**, and then every xⁿ + 1/xⁿ is `2` — not 2ⁿ. In the same way **x + 1/x = −2 means x = −1**. Spotting these two before reaching for any formula saves the whole question."},

 {h:"QUESTIONS — one value given, every power asked",
  mcq:[
  {q:"If `x + 1/x = k`, then `x² + 1/x²` is equal to:",
   o:["k² + 2","k² − 2","k² − 4","2k² − 2"],
   a:1,
   why:"**x² + 1/x² = (x + 1/x)² − 2 = k² − 2**, because (x + 1/x)² = x² + 2 + 1/x² and the middle term is exactly `2`. Option A, `k² + 2`, is the formula that belongs to the *other* given: **x − 1/x = m ⇒ x² + 1/x² = m² + 2**. One sign apart, and it is the commonest slip in the whole family. Option C is (x − 1/x)² written in terms of k.",
   tag:"x²+1/x²"},

  {q:"If `x + 1/x = 5`, then `x² + 1/x²` is:",
   o:["23","27","25","21"],
   a:0,
   why:"**x² + 1/x² = k² − 2** = 5² − 2 = `23`. Option B, `27`, adds the 2 instead of subtracting it, which is the x − 1/x formula m² + 2 used on an x + 1/x value. Option C is 5² left untouched, and option D is 25 − 4, which is (x − 1/x)² and not x² + 1/x² at all.",
   tag:"x²+1/x²"},

  {q:"`x³ + 1/x³` in terms of `k`, where `x + 1/x = k`, is:",
   o:["k³ + 3k","k³ − 3","k³ − 3k","(k − 3)³"],
   a:2,
   why:"**(x + 1/x)³ = x³ + 1/x³ + 3(x + 1/x)**, so **x³ + 1/x³ = k³ − 3k**. Option A is the companion line for the other given, **x³ − 1/x³ = m³ + 3m**, and it is the one most often ticked because the two differ only in that sign. Option B subtracts a bare `3` rather than `3k`, which is what a half-remembered formula produces.",
   tag:"x³+1/x³"},

  {q:"If `x + 1/x = 4`, then `x³ + 1/x³` is:",
   o:["64","76","61","52"],
   a:3,
   why:"**x³ + 1/x³ = k³ − 3k** = 4³ − 3(4) = 64 − 12 = `52`. Option B, `76`, is 64 + 12 — the x − 1/x formula m³ + 3m applied to an x + 1/x value, and it is the trap here. Option A is the cube with the correction forgotten altogether; option C subtracts `3` instead of `3k`.",
   tag:"x³+1/x³"},

  {q:"If `x − 1/x = m`, then `x² + 1/x²` is equal to:",
   o:["m² − 2","m² + 2","m² + 4","m² − 4"],
   a:1,
   why:"**(x − 1/x)² = x² − 2 + 1/x²**, so **x² + 1/x² = m² + 2**. The left side stays a *plus* whichever of the two values is given — only the correction's sign turns over. Option A is the x + 1/x formula k² − 2 and is the trap; option C, `m² + 4`, is (x + 1/x)², which is one step further on.",
   tag:"x−1/x"},

  {q:"If `x − 1/x = 3`, then `x³ − 1/x³` is:",
   o:["18","27","30","36"],
   a:3,
   why:"**x³ − 1/x³ = (x − 1/x)³ + 3(x − 1/x) = m³ + 3m** = 27 + 9 = `36`. Option A, `18`, is 27 − 9: the correction is *added* here and *subtracted* in the x + 1/x version, and swapping the two is the standard error. Option B is the cube alone and option C adds a bare `3`.",
   tag:"x³−1/x³"},

  {q:"`x³ − 1/x³` in terms of `m`, where `x − 1/x = m`, is:",
   o:["m³ + 3m","m³ − 3m","m³ + 3","m³ − 3"],
   a:0,
   why:"**x³ − 1/x³ = m³ + 3m.** Expanding (x − 1/x)³ gives x³ − 1/x³ − 3(x − 1/x), and moving that term across turns it into a plus. Option B is the x + 1/x result **k³ − 3k**, which is the one to guard against. Note the left side too: a *minus* given produces a difference of cubes, never a sum.",
   tag:"x³−1/x³"},

  {q:"`(x + 1/x)² − (x − 1/x)²` is equal to:",
   o:["2","4","−4","2(x² + 1/x²)"],
   a:1,
   why:"By **(a + b)² − (a − b)² = 4ab** with a = x and b = 1/x, the answer is 4 × x × (1/x) = `4`. Option C is the same difference taken the other way round, **(x − 1/x)² − (x + 1/x)² = −4**, and the order of the two brackets is what decides the sign. Option A is `2ab` instead of 4ab, and option D is the companion identity, **(x + 1/x)² + (x − 1/x)² = 2(x² + 1/x²)** — the *sum* of the two squares rather than the difference. This single line is the bridge between the two halves of the topic: either value's square is `4` from the other's.",
   tag:"The bridge"},

  {q:"If `x² − 3x + 1 = 0` and x ≠ 0, then `x + 1/x` is:",
   o:["3","−3","1/3","9"],
   a:0,
   why:"Divide every term by x: x − 3 + 1/x = 0, so **x + 1/x = 3**. The step worth memorising is that any equation whose first and last coefficients are equal is really a statement about x + 1/x: **ax² + bx + a = 0 ⇒ x + 1/x = −b/a**. Option B takes that sign the wrong way round, which is the only real mistake available here.",
   tag:"Divide by x"},

  {q:"If `x² − 5x + 1 = 0` and x ≠ 0, then `x³ + 1/x³` is:",
   o:["125","110","140","122"],
   a:1,
   why:"Dividing through by x gives x + 1/x = `5`, and then **x³ + 1/x³ = k³ − 3k** = 125 − 15 = `110`. Option C, `140`, is 125 + 15 — the x − 1/x sign used on an x + 1/x value. Option A stops at 5³ and option D subtracts a bare `3` instead of `3k`.",
   tag:"Divide by x"},

  {q:"If `x² + 1 = 8x` and x ≠ 0, then `x² + 1/x²` is:",
   o:["64","66","62","60"],
   a:2,
   why:"Divide by x: x + 1/x = `8`. Then **x² + 1/x² = k² − 2** = 64 − 2 = `62`. Option B, `66`, is 64 + 2, which is the m² + 2 formula misapplied and the option most often chosen. Option A is 8² with the subtraction forgotten; option D is 64 − 4, which is (x − 1/x)².",
   tag:"Divide by x"},

  {q:"If `x² + 1/x² = 34` and x > 0, then `x + 1/x` is:",
   o:["6","4√2","√34","32"],
   a:0,
   why:"Running the formula backwards, **x² + 1/x² = p ⇒ x + 1/x = √(p + 2)** = √(34 + 2) = √36 = `6`. The `+ 2` appears because (x + 1/x)² = x² + 1/x² + 2. Only the positive root is taken: for x > 0 both x and 1/x are positive, so x + 1/x cannot be `−6`. Option B is √32 = 4√2, which is the companion **x − 1/x = √(p − 2)** — the same given, the other answer. Option D is `32` itself, the square left un-rooted.",
   tag:"Backwards"},

  {q:"If `x + 1/x = 2`, then `x¹⁰ + 1/x¹⁰` is:",
   o:["1024","2","1","1022"],
   a:1,
   why:"**x + 1/x = 2 forces x = 1**, since x² − 2x + 1 = (x − 1)² = 0. So every power of x is 1 and **xⁿ + 1/xⁿ = 2** for every n — not 2ⁿ. Option A, `1024`, is 2¹⁰, which is the given value raised to the power asked, and option D is 2¹⁰ − 2, the same slip with the `kⁿ − 2` short cut bolted on. Option C, `1`, is x¹⁰ on its own, with the reciprocal never added.",
   tag:"x+1/x = 2"},

  {q:"If `x + 1/x` equals `−2`, then `x³ + 1/x³` is:",
   o:["2","−8","−14","−2"],
   a:3,
   why:"**x + 1/x = −2 forces x = −1**, because x² + 2x + 1 = (x + 1)² = 0, so x³ + 1/x³ = −1 − 1 = `−2`. The formula agrees: **k³ − 3k** = (−2)³ − 3(−2) = −8 + 6 = `−2`. Option A is the value for x + 1/x = 2 and simply ignores the sign; option C, `−14`, is k³ + 3k, the x − 1/x formula used by mistake.",
   tag:"x+1/x = −2"},

  {q:"If `x + 1/x = √3`, then `x³ + 1/x³` is:",
   o:["0","3√3","−3√3","1"],
   a:0,
   why:"**x³ + 1/x³ = k³ − 3k** = (√3)³ − 3√3 = 3√3 − 3√3 = `0`. SSC sets this exact value because the two terms cancel, and nothing else in the family does that. Option B is (√3)³ = 3√3 with the −3k forgotten; option C is the correction term standing alone; option D is x² + 1/x², which here is 3 − 2 = `1`.",
   tag:"Surd case"},

  {q:"If `x + 1/x = √3`, then the sixth powers `x⁶ + 1/x⁶` come to:",
   o:["0","2","−2","1"],
   a:2,
   why:"**x⁶ + 1/x⁶ = (x³ + 1/x³)² − 2 = (k³ − 3k)² − 2.** Here k³ − 3k = 3√3 − 3√3 = 0, so the answer is 0² − 2 = `−2`. Option A is x³ + 1/x³ itself — the step before the last, and the commonest thing ticked. Squaring always *costs* a 2 and never gains one, which rules out option B. Option D is x² + 1/x² = 3 − 2.",
   tag:"x⁶+1/x⁶"},

  {q:"With `x + 1/x = k`, the sixth-power sum `x⁶ + 1/x⁶` works out to:",
   o:["k⁶ − 2","(k² − 2)³ − 2","(k³ − 3k)² + 2","(k³ − 3k)² − 2"],
   a:3,
   why:"**x⁶ + 1/x⁶ = (x³ + 1/x³)² − 2**, and x³ + 1/x³ = k³ − 3k, so the value is **(k³ − 3k)² − 2**. Squaring any xⁿ + 1/xⁿ costs `2`, which is why the `+ 2` of option C is wrong. Option B tries to cube x² + 1/x², and cubing does not behave that way: (x² + 1/x²)³ = x⁶ + 1/x⁶ + 3(x² + 1/x²). Option A is the short cut that skips both steps.",
   tag:"x⁶+1/x⁶"},

  {q:"If `x + 1/x = 3`, then the fourth powers `x⁴ + 1/x⁴` come to:",
   o:["79","47","51","49"],
   a:1,
   why:"Two steps, in order. **x² + 1/x² = k² − 2** = 9 − 2 = 7, then **x⁴ + 1/x⁴ = (x² + 1/x²)² − 2** = 49 − 2 = `47`. Option A, `79`, is 3⁴ − 2, which is what jumping straight to k⁴ − 2 gives — the route has to pass through x² + 1/x². Option D stops at 7², and option C adds the final 2 instead of subtracting it.",
   tag:"x⁴+1/x⁴"},

  {q:"If `x + 1/x = 1`, then `x³ + 1/x³` is:",
   o:["2","1","−2","−1"],
   a:2,
   why:"**x³ + 1/x³ = k³ − 3k** = 1 − 3 = `−2`. The same given also means x² − x + 1 = 0, and multiplying that by (x + 1) gives x³ + 1 = 0, so **x³ = −1** — which is the other way the same question is asked. Option A, `2`, is the answer for x + 1/x = 2 and is what guessing a positive value produces; option D is x³ alone, with the reciprocal not added.",
   tag:"x+1/x = 1"},

  {q:"The smallest value `x + 1/x` can take while x stays positive is:",
   o:["2","1","0","−2"],
   a:0,
   why:"By **AM ≥ GM**, (x + 1/x)/2 ≥ √(x × 1/x) = 1, so **x + 1/x ≥ 2**, with equality only at x = 1. Option D is the matching result for the other sign: for x < 0 the *greatest* value of x + 1/x is `−2`, reached at x = −1. Option B is the geometric mean itself rather than the sum, and option C is a value x + 1/x never takes for any real x.",
   tag:"Minimum"},

  {q:"If `x = 2 + √3`, then `x² + 1/x²` is:",
   o:["16","18","12","14"],
   a:3,
   why:"Rationalise first: **1/(2 + √3) = 2 − √3**, because (2 + √3)(2 − √3) = 4 − 3 = 1. So x + 1/x = `4`, and **x² + 1/x² = k² − 2** = 16 − 2 = `14`. Option A is 4² with the subtraction forgotten; option B, `18`, adds the 2 instead. Note that x − 1/x is `2√3` here, not 4 — it is the *sum* that comes out whole.",
   tag:"Conjugate"},

  {q:"If `x = 3 + 2√2`, then `x³ + 1/x³` is:",
   o:["216","234","198","213"],
   a:2,
   why:"**1/(3 + 2√2) = 3 − 2√2**, since (3 + 2√2)(3 − 2√2) = 9 − 8 = 1 — whenever a² − b = 1, the reciprocal of a + √b is simply a − √b. So x + 1/x = `6`, and **x³ + 1/x³ = k³ − 3k** = 216 − 18 = `198`. Option B, `234`, is 216 + 18, the x − 1/x sign used by mistake; option A forgets the correction entirely.",
   tag:"Conjugate"},

  {q:"If `x − 1/x = √5` and x > 0, then `x + 1/x` is:",
   o:["√7","3","√5 + 2","5"],
   a:1,
   why:"**(x + 1/x)² − (x − 1/x)² = 4**, so (x + 1/x)² = 5 + 4 = 9 and `x + 1/x = 3`. The positive root is taken because x + 1/x ≥ 2 for every positive x. Option A is √(5 + 2), which uses the wrong constant — the gap between the two squares is `4`, not 2. Option C adds the 2 to the surd itself, which no identity allows, and option D, `5`, is (x − 1/x)² — the given squared, with the `+ 4` and the square root both left out.",
   tag:"The bridge"},

  {q:"Which of these is correct?",
   o:["x² + 1/x² = (x − 1/x)² − 2","x³ + 1/x³ = (x + 1/x)³ + 3(x + 1/x)","x³ − 1/x³ = (x − 1/x)³ − 3(x − 1/x)","x² + 1/x² = (x + 1/x)² − 2"],
   a:3,
   why:"**x² + 1/x² = (x + 1/x)² − 2** is the only one written correctly. The other three each have exactly one sign wrong: the true forms are **x² + 1/x² = (x − 1/x)² + 2**, **x³ + 1/x³ = (x + 1/x)³ − 3(x + 1/x)** and **x³ − 1/x³ = (x − 1/x)³ + 3(x − 1/x)**. One rule settles all four — with a *plus* given the correction is subtracted, with a *minus* given it is added.",
   tag:"Sign trap"},

  {q:"With `x + 1/x = k`, the fourth-power sum `x⁴ + 1/x⁴` works out to:",
   o:["k⁴ − 2","(k² − 2)² + 2","(k² − 2)² − 2","(k² + 2)² − 2"],
   a:2,
   why:"Square x² + 1/x²: **x⁴ + 1/x⁴ = (x² + 1/x²)² − 2 = (k² − 2)² − 2.** Option A, `k⁴ − 2`, is the trap, because it skips the middle step — for k = 3 it gives `79` where the true value is `47`. Each squaring costs its own 2, so two squarings mean two separate subtractions, which is also why option B's `+ 2` is wrong.",
   tag:"x⁴+1/x⁴"}
 ],
  note:"Every question above is answered by one line from the sheet. If a question needed more than one rearrangement of your own, the formula it uses is the one to go back to."}
]
},

/* ============================================================ 4 — Surds, indices and rationalisation (28 questions) */
{
id:"algebra-surds", n:"Surds, indices and rationalisation",
w:"The laws of indices, the four surd operations, rationalising by the conjugate, un-nesting a nested surd, and the index equations SSC builds on them.",
quick:[
 "**aᵐ × aⁿ = aᵐ⁺ⁿ**, **aᵐ ÷ aⁿ = aᵐ⁻ⁿ**, **(aᵐ)ⁿ = aᵐⁿ**. Multiplying adds the indices, dividing subtracts them, a power of a power multiplies them — and those last two are the pair that get swapped.",
 "**a⁰ = 1** for every a other than 0, and **a⁻ⁿ = 1/aⁿ**. A negative index inverts the number; it never makes it negative, so 2⁻³ = `1/8`.",
 "**a to the power m/n = ⁿ√(aᵐ) = (ⁿ√a)ᵐ** — the bottom number is the root and the top one is the power. So 16 to the power 3/4 is (⁴√16)³ = `8`.",
 "**√a × √b = √(ab)** and **√(a/b) = √a/√b**, but **√a + √b is never √(a + b)**: √9 + √16 = `7` while √25 = `5`.",
 "Rationalise with the conjugate: **1/(√a + √b) = (√a − √b)/(a − b)** and **1/(a + √b) = (a − √b)/(a² − b)**, so `1/(2 + √3) = 2 − √3` because 4 − 3 = 1.",
 "**(√a + √b)² = a + b + 2√(ab)**, and read backwards that un-nests a surd: **√(7 + 4√3) = 2 + √3**, because 7 + 4√3 = (2 + √3)².",
 "If the bases can be made the same the indices are equal: **aᵐ = aⁿ ⇒ m = n**. That one line solves every `2ˣ⁺¹ = 8` and `4ˣ = 8ˣ⁻¹` in the paper."
],
blocks:[
 {h:"THE SHEET — the laws of indices",
  cols:["Asked as","The law","What it is for"],
  rows:[
  ["**aᵐ × aⁿ**","aᵐ⁺ⁿ","Same base multiplied, indices added: 3⁴ × 3⁻² = 3²"],
  ["**aᵐ ÷ aⁿ**","aᵐ⁻ⁿ","Same base divided, indices subtracted"],
  ["**(aᵐ)ⁿ**","aᵐⁿ","A power of a power multiplies the indices — it never adds them, and (aᵐ)ⁿ = (aⁿ)ᵐ"],
  ["**(ab)ᵐ and (a/b)ᵐ**","aᵐbᵐ and aᵐ/bᵐ","The index goes on to each factor separately"],
  ["**a⁰**","1","For every a except 0. A zero index gives `1`, not `0`"],
  ["**a⁻ⁿ**","1/aⁿ","Invert, do not negate: 2⁻³ = `1/8`, not `−8`"],
  ["**a to the power m/n**","ⁿ√(aᵐ) = (ⁿ√a)ᵐ","Bottom number is the root, top number is the power: 8 to the power 2/3 = (∛8)² = `4`"],
  ["**a to the power −m/n**","1/ⁿ√(aᵐ)","Invert first, then root and power: (8/27) to the power −2/3 = (27/8) to the power 2/3 = `9/4`"],
  ["**aᵐ = aⁿ**","m = n","Make the bases the same and read the indices off. This is the whole method for the exponential equations"]
 ],
  note:"Every law here is stated for the same base. Two different bases can only be compared after one of them has been rewritten as a power of the other."},

 {h:"THE SHEET — surds, rationalising and the index equations",
  cols:["Asked as","The result","The use"],
  rows:[
  ["**√a × √b**","√(ab)","√12 × √3 = √36 = `6`"],
  ["**√(a/b)**","√a/√b","√(32/50) = (4√2)/(5√2) = `4/5`"],
  ["**√(a²b)**","a√b","Taking the square out: √50 = 5√2, √18 = 3√2, √8 = 2√2"],
  ["**√a + √b**","not √(a + b)","It is the larger of the two: squared, it exceeds a + b by exactly the 2√(ab) in (√a + √b)²"],
  ["**(√a + √b)(√a − √b)**","a − b","The surds vanish — this is what makes the conjugate work"],
  ["**(√a ± √b)²**","a + b ± 2√(ab)","Both the expansion and, read backwards, the un-nesting"],
  ["**Rationalising factor of √a − √b**","√a + √b","The *conjugate*: the same two terms with the middle sign reversed"],
  ["**Rationalising factor of ∛a**","∛(a²)","Because ∛a × ∛(a²) = ∛(a³) = a. A cube root is not finished by multiplying it by itself"],
  ["**1/(√a + √b)**","(√a − √b)/(a − b)","The denominator becomes the *difference*, never the sum"],
  ["**1/(a + √b)**","(a − √b)/(a² − b)","`1/(2 + √3) = (2 − √3)/1 = 2 − √3`"],
  ["**√(a + b + 2√(ab))**","√a + √b","Un-nesting: find the two parts that add to the whole number and multiply to the square of half the surd term"],
  ["**1/(√1 + √2) + 1/(√2 + √3) + … + 1/(√(n−1) + √n)**","√n − 1","Each term rationalises to √(k + 1) − √k and everything cancels but the ends"],
  ["**Comparing surds of different orders**","Put them over the LCM of the orders","√2, ∛3 and ⁶√6 become ⁶√8, ⁶√9 and ⁶√6"],
  ["**xᵃ = yᵇ = zᶜ with xyz = 1**","1/a + 1/b + 1/c = 0","Write x, y and z as powers of the common value, then multiply"],
  ["**2ˣ = 3ʸ = 6ᶻ**","1/x + 1/y = 1/z","Because 2 × 3 = 6. For 2ˣ = 3ʸ = 12ᶻ it becomes 2/x + 1/y = 1/z, because 12 = 2² × 3"],
  ["**aˣ = b, bʸ = c, cᶻ = a**","xyz = 1","Substituting forward gives a to the power xyz = a, so the indices multiply to 1"]
 ]},

 {careful:"**√a + √b is not √(a + b).** Squaring the left side gives a + b + 2√(ab), and that extra `2√(ab)` is the entire difference: √9 + √16 = `7`, while √25 = `5`. The same warning covers **√(a² + b²) ≠ a + b**. Addition never passes through a root — only multiplication and division do."},

 {careful:"When a surd is rationalised the denominator becomes the **difference** of the two squares, not the sum. In `1/(2 + √3)` it is 2² − (√3)² = 4 − 3 = `1`, so the answer is simply `2 − √3`. Dividing by `7` instead is the standard slip, and `(2 − √3)/7` is offered as an option every time."},

 {careful:"**a⁰ = 1**, not `0`. And **a⁻ⁿ = 1/aⁿ** inverts the number rather than making it negative, so 2⁻³ = `1/8` and not `−8`. In a fractional index the *bottom* number is the root: 16 to the power 3/4 is `8`, while 16 × 3/4 would be `12` — and `12` is always on the option list."},

 {h:"QUESTIONS — the laws, the surds and the index equations",
  mcq:[
  {q:"`aᵐ × aⁿ` is equal to:",
   o:["aᵐⁿ","aᵐ⁺ⁿ","aᵐ⁻ⁿ","(a²)ᵐ⁺ⁿ"],
   a:1,
   why:"**aᵐ × aⁿ = aᵐ⁺ⁿ** — the same base multiplied means the indices are added. Option A, `aᵐⁿ`, is **(aᵐ)ⁿ**, which is what a power *of* a power gives, and those two laws are the pair that get swapped. Option C is the division law, **aᵐ ÷ aⁿ = aᵐ⁻ⁿ**. Option D multiplies the bases as well as adding the indices — the slip that turns 3² × 3³ = `3⁵` into 9⁵.",
   tag:"Index laws"},

  {q:"`(aᵐ)ⁿ` is equal to:",
   o:["aᵐ⁺ⁿ","aᵐ⁻ⁿ","aᵐⁿ","ⁿ√(aᵐ)"],
   a:2,
   why:"**(aᵐ)ⁿ = aᵐⁿ** — a power of a power multiplies the indices. Option A is the law for aᵐ × aⁿ and is the one ticked by mistake: `(2³)² = 2⁶ = 64`, whereas 2³⁺² would be only `32`. Option D is the fractional index, **a to the power m/n = ⁿ√(aᵐ)**, a different law again. The order makes no difference, so (aᵐ)ⁿ = (aⁿ)ᵐ.",
   tag:"Index laws"},

  {q:"`(2a²b)³` is:",
   o:["6a⁶b³","2a⁶b³","8a⁵b³","8a⁶b³"],
   a:3,
   why:"**(ab)ᵐ = aᵐbᵐ** — the index goes on to each factor separately, and the number in front is a factor like any other, so (2a²b)³ = 2³(a²)³b³ = `8a⁶b³`. Option A multiplies the 2 by 3 instead of cubing it and option B leaves it alone altogether. Option C adds the indices, 2 + 3, where **(aᵐ)ⁿ = aᵐⁿ** multiplies them.",
   tag:"(ab)ᵐ"},

  {q:"`a⁻ⁿ` is equal to:",
   o:["−aⁿ","ⁿ√a","−1/aⁿ","1/aⁿ"],
   a:3,
   why:"**a⁻ⁿ = 1/aⁿ.** A negative index *inverts* the number; it does not make it negative. So 2⁻³ = `1/8`, while option A would read it as `−8` — that sign error is the commonest one in the chapter. Option B is a to the power 1/n, which is the fractional index, a different law altogether.",
   tag:"Negative index"},

  {q:"`a` to the power `m/n` is equal to:",
   o:["ᵐ√(aⁿ)","ⁿ√(aᵐ)","(m/n)a","aᵐ⁻ⁿ"],
   a:1,
   why:"**a to the power m/n = ⁿ√(aᵐ) = (ⁿ√a)ᵐ** — the *bottom* number of the fraction is the root and the *top* one is the power. Option A turns it upside down, which is a to the power n/m; option C treats the index as a multiplier, the slip that turns 16 to the power 3/4 into 16 × 3/4 = `12`; option D is the division law. The numbers settle it: 8 to the power 2/3 is (∛8)² = `4`, not (√8)³, which is 8 to the power 3/2.",
   tag:"Fractional index"},

  {q:"`(3⁴ × 3⁻²) ÷ 3²` is:",
   o:["1","81","9","0"],
   a:0,
   why:"Collect the indices with **aᵐ × aⁿ = aᵐ⁺ⁿ** and **aᵐ ÷ aⁿ = aᵐ⁻ⁿ**: the index is 4 + (−2) − 2 = 0, and **a⁰ = 1**, so the value is `1`. Option D is the trap for anyone who reads a zero index as a zero value — 3⁰ is `1`, never `0`. Option B, `81`, is 3⁴, the negative index added as though it were positive; option C, `9`, is 3² with the division left out.",
   tag:"a⁰ = 1"},

  {q:"`16` to the power `3/4` is:",
   o:["12","64","2","8"],
   a:3,
   why:"**a to the power m/n = (ⁿ√a)ᵐ**, so 16 to the power 3/4 = (⁴√16)³ = 2³ = `8`. Option A, `12`, is 16 × 3/4 and treats the index as a multiplier. Option B is (√16)³ = 4³, the square root taken in place of the fourth root, and option C is the root with the cube forgotten.",
   tag:"Fractional index"},

  {q:"`(8/27)` to the power `−2/3` is:",
   o:["9/4","4/9","−9/4","3/2"],
   a:0,
   why:"**A negative index inverts the fraction first, and the bottom of the index is the root: (8/27) to the power −2/3 = (27/8) to the power 2/3.** That is (27/8) to the power 2/3 = (∛(27/8))² = (3/2)² = `9/4`. Option B, `4/9`, is the answer with the minus sign ignored and is the one most often ticked; option D is (27/8) to the power 1/3, the cube root with the squaring left out.",
   tag:"Negative index"},

  {q:"If `2ˣ⁺¹ = 8`, then x is:",
   o:["3","2","4","1"],
   a:1,
   why:"Make the bases the same: 8 = 2³, and **aᵐ = aⁿ ⇒ m = n**, so x + 1 = 3 and `x = 2`. Option A, `3`, is the index on the right-hand side read off as the answer without subtracting the 1 — and that subtraction is the whole question.",
   tag:"Exponential"},

  {q:"If `4ˣ = 8ˣ⁻¹`, then x is:",
   o:["2","6","3","1"],
   a:2,
   why:"Write both sides over base 2: 4ˣ = 2²ˣ and 8ˣ⁻¹ = 2³ˣ⁻³. Then **aᵐ = aⁿ ⇒ m = n** gives 2x = 3x − 3, so `x = 3`. Option D, `1`, is the trap: writing 2x = 3x − 1 loses the 3 on the bracket, and carrying the index 3 across the whole of x − 1 is the step the question is built on.",
   tag:"Exponential"},

  {q:"For a ≥ 0 and b ≥ 0, `√a × √b` is:",
   o:["√(a + b)","√(ab)","ab","2√(ab)"],
   a:1,
   why:"**√a × √b = √(ab)** — multiplication passes straight through a square root, so √12 × √3 = √36 = `6`. Option A is the law that does not exist: addition never passes through a root, and **√a + √b ≠ √(a + b)**. Option D, `2√(ab)`, is the cross term of (√a + √b)², not the product.",
   tag:"Surd product"},

  {q:"`√(32/50)` is:",
   o:["5/4","16/25","2√2/25","4/5"],
   a:3,
   why:"**√(a/b) = √a/√b**, so √(32/50) = √32/√50 = (4√2)/(5√2) = `4/5`. Option B, `16/25`, is the fraction cancelled with the square root never taken — 32/50 does reduce to 16/25, and `4/5` is its root. Option C roots the numerator only, 4√2 over 50; option A is the whole fraction inverted.",
   tag:"Surd quotient"},

  {q:"For positive a and b, which of these is true?",
   o:["√a + √b = √(a + b)","√a + √b < √(a + b)","√a + √b > √(a + b)","√a + √b = √(ab)"],
   a:2,
   why:"Square the left side: **(√a + √b)² = a + b + 2√(ab)**, which exceeds a + b by the positive amount `2√(ab)`. So **√a + √b > √(a + b)**. The numbers make it plain — √9 + √16 = `7` while √25 = `5`. Option A is the false law that costs more marks in this chapter than any other.",
   tag:"√a + √b"},

  {q:"`√50 + √18 − √8` is:",
   o:["6√2","10√2","4√2","√60"],
   a:0,
   why:"Take the squares out first — **√(a²b) = a√b** — so √50 = 5√2, √18 = 3√2 and √8 = 2√2, giving (5 + 3 − 2)√2 = `6√2`. Option D is the real trap: it adds the numbers under one root, and **√a + √b is never √(a + b)**. Option B reads the minus as a plus, 5 + 3 + 2, and option C subtracts the wrong term, 5 − 3 + 2.",
   tag:"Simplifying"},

  {q:"The rationalising factor of `√7 − √3` is:",
   o:["√3 − √7","√7 + √3","√(7 − 3)","√7 × √3"],
   a:1,
   why:"The rationalising factor is the **conjugate** — the same two terms with the middle sign reversed — because **(√a − √b)(√a + √b) = a − b**, here 7 − 3 = `4`, which is rational. Option A reverses the order instead of the sign: multiplying by it gives −(√7 − √3)² = −10 + 2√21, still irrational.",
   tag:"Conjugate"},

  {q:"The rationalising factor of `∛5` is:",
   o:["∛5","√5","∛25","∛125"],
   a:2,
   why:"A cube root needs the factor that completes the cube: **∛a × ∛(a²) = ∛(a³) = a**, so the factor is `∛25` and the product is ∛125 = 5. Option A, ∛5 again, only reaches ∛25, which is still irrational — the slip is treating a cube root like a square root, where multiplying by itself is enough. Option D is that finished product, not the factor asked for, and option B mismatches the orders: ∛5 × √5 is 5 to the power 5/6.",
   tag:"Cube root"},

  {q:"`1/(2 + √3)` is:",
   o:["(2 − √3)/7","2 + √3","(2 − √3)/5","2 − √3"],
   a:3,
   why:"Multiply above and below by the conjugate: **1/(a + √b) = (a − √b)/(a² − b)**, and here a² − b = 4 − 3 = 1, so the value is simply `2 − √3`. Option A is the standard slip — the denominator is the **difference** 4 − 3, not the sum 4 + 3 = 7.",
   tag:"Rationalising"},

  {q:"`1/(√5 + √3)` is:",
   o:["(√5 − √3)/2","(√5 − √3)/8","√5 − √3","(√5 + √3)/2"],
   a:0,
   why:"**1/(√a + √b) = (√a − √b)/(a − b)**, so the denominator is 5 − 3 = 2 and the value is `(√5 − √3)/2`. Option B divides by 5 + 3 = 8, the same sign error as before; option C drops the denominator altogether, which would only be right if a − b happened to come to 1.",
   tag:"Rationalising"},

  {q:"`1/(√3 − √2) + 1/(√3 + √2)` is:",
   o:["2√2","0","2√3","2√3/5"],
   a:2,
   why:"Each term rationalises over a denominator of 3 − 2 = 1: **1/(√3 − √2) = √3 + √2** and **1/(√3 + √2) = √3 − √2**. Adding them cancels the √2 and leaves `2√3`. Option B is the trap for anyone who treats the two brackets as opposites that must cancel to nothing — it is the √2 terms that cancel, not the √3 ones. Option D takes the denominator as the sum 3 + 2 instead of the difference 3 − 2.",
   tag:"Rationalising"},

  {q:"`(√7 + √5)/(√7 − √5)` is:",
   o:["12 + 2√35","6 + √35","6 − √35","(6 + √35)/2"],
   a:1,
   why:"Multiply above and below by √7 + √5. The numerator becomes **(√a + √b)² = a + b + 2√(ab)** = 12 + 2√35 and the denominator becomes 7 − 5 = 2, so the value is `6 + √35`. Option A is that numerator left undivided, which is the commonest slip here; option C is the same working done upside down, which answers (√7 − √5)/(√7 + √5) instead.",
   tag:"Rationalising"},

  {q:"`(√a + √b)²` is:",
   o:["a + b + 2√(ab)","a + b","a + b + √(ab)","a + b + 2ab"],
   a:0,
   why:"**(√a + √b)² = a + b + 2√(ab)** — the two surds square to a and b, and the cross term is 2 × √a × √b = 2√(ab). Option B makes the same mistake as writing (a + b)² = a² + b²: the middle term *is* the identity. Option D writes the cross term as `2ab`, which is twice the product of the squares rather than of the surds.",
   tag:"(√a + √b)²"},

  {q:"`(√7 + √3)²` is:",
   o:["10","10 + √21","10 + 2√21","10 + 2√10"],
   a:2,
   why:"**(√a + √b)² = a + b + 2√(ab)** = 7 + 3 + 2√21 = `10 + 2√21`. Option A drops the middle term, option B halves it, and option D puts 7 + 3 under the root instead of 7 × 3 — √(ab) is always the *product* of the two numbers, never their sum.",
   tag:"(√a + √b)²"},

  {q:"`√(7 + 4√3)` is:",
   o:["1 + √3","2 + 2√3","2 − √3","2 + √3"],
   a:3,
   why:"Un-nest with **(√a + √b)² = a + b + 2√(ab)**: matching gives a + b = 7 and 2√(ab) = 4√3, so √(ab) = 2√3 and ab = 12. The pair adding to 7 and multiplying to 12 is 4 and 3, so √(7 + 4√3) = √4 + √3 = `2 + √3`. Option C squares back to 7 − 4√3, the conjugate — the sign inside the root is the sign between the two parts. Option A squares to 4 + 2√3 and option B to 16 + 8√3; squaring the options is the fastest check there is.",
   tag:"Un-nesting"},

  {q:"`1/(√1 + √2) + 1/(√2 + √3) + … + 1/(√8 + √9)` is:",
   o:["3","1","4","2"],
   a:3,
   why:"Each term rationalises to a difference, because its denominator becomes (k + 1) − k = 1: **1/(√k + √(k + 1)) = √(k + 1) − √k**. Everything between cancels and the sum telescopes to **√9 − √1** = 3 − 1 = `2`. Option A is √9 with the −1 forgotten, the standard slip; in general the sum as far as 1/(√(n−1) + √n) is **√n − 1**.",
   tag:"Telescoping"},

  {q:"Which is the greatest of `√2`, `∛3` and `⁶√6`?",
   o:["√2","∛3","⁶√6","they are all equal"],
   a:1,
   why:"Put them over a common index — the LCM of 2, 3 and 6 is `6`: √2 = ⁶√(2³) = ⁶√8, ∛3 = ⁶√(3²) = ⁶√9, and ⁶√6 is already there. Comparing 8, 9 and 6 under the same root, **∛3 is the greatest**. Option A is what guessing by the lowest order suggests, and that guess is wrong — the order of the root settles nothing until the indices match.",
   tag:"Comparing surds"},

  {q:"If `2ˣ = 3ʸ = 6ᶻ`, then:",
   o:["1/x + 1/y = 1/z","1/x + 1/y + 1/z = 0","x + y = z","1/z + 1/y = 1/x"],
   a:0,
   why:"Call the common value k. Then 2 is k to the power 1/x, 3 is k to the power 1/y and 6 is k to the power 1/z. Since 2 × 3 = 6, the indices add: **1/x + 1/y = 1/z**. Option C is the trap — the indices themselves do not add, their reciprocals do. For 2ˣ = 3ʸ = 12ᶻ the same method gives 2/x + 1/y = 1/z, because 12 = 2² × 3.",
   tag:"2ˣ = 3ʸ = 6ᶻ"},

  {q:"If `xᵃ = yᵇ = zᶜ = k` with `k ≠ 1`, and `xyz = 1`, then:",
   o:["abc = 1","a + b + c = 0","1/a + 1/b + 1/c = 0","1/a + 1/b + 1/c = 1"],
   a:2,
   why:"x is k to the power 1/a, y is k to the power 1/b and z is k to the power 1/c. Then xyz is k to the power (1/a + 1/b + 1/c), and for a base other than 1 that equals 1 only when the index is zero, so **1/a + 1/b + 1/c = 0** — which is why k = 1 has to be ruled out. Option B is the same line with the reciprocals forgotten, and it is the standard distractor: the condition falls on 1/a, 1/b and 1/c, not on a, b and c.",
   tag:"xᵃ = yᵇ = zᶜ"},

  {q:"If `aˣ = b`, `bʸ = c` and `cᶻ = a`, then:",
   o:["xyz = 1","xyz = 0","x + y + z = 1","xyz = abc"],
   a:0,
   why:"Substitute forwards: c = bʸ = (aˣ)ʸ = aˣʸ, and then a = cᶻ = aˣʸᶻ. Comparing indices on the same base — **aᵐ = aⁿ ⇒ m = n** — gives **xyz = 1**. Option C is the additive version of the trap that catches people in 2ˣ = 3ʸ = 6ᶻ: here each substitution is a power of a power, so the indices multiply.",
   tag:"aˣ = b"}
 ],
  note:"Every question above is answered by one line from the two sheets. Two habits cover most of the chapter: before comparing indices, make the bases the same; before adding surds, take the squares out."}
]
},

/* ============================================================ 5 — Quadratic equations and their roots (28 questions) */
{
id:"quadratic", n:"Quadratic equations and their roots", hy:1,
w:"The formula, the two relations between the roots and the coefficients, the discriminant and its four cases, and every expression in α and β that SSC builds out of the sum and the product.",
quick:[
 "**x = [−b ± √(b² − 4ac)]/2a** solves `ax² + bx + c = 0` whenever a ≠ 0. The whole numerator sits over `2a` — not just the root.",
 "**Sum of the roots α + β = −b/a. Product of the roots αβ = c/a.** The sum carries a minus, the product does not. Most of the chapter is these two lines in disguise.",
 "**x² − (α + β)x + αβ = 0** rebuilds the equation from its roots — minus on the sum, plus on the product.",
 "**D = b² − 4ac.** `D > 0` real and distinct, `D = 0` real and equal, `D < 0` not real; and with a, b, c rational, a positive perfect-square D means the roots are rational.",
 "**α² + β² = (α + β)² − 2αβ** but **(α − β)² = (α + β)² − 4αβ**. Two for the sum of squares, four for the square of the difference.",
 "**α³ + β³ = (α + β)³ − 3αβ(α + β)**, **1/α + 1/β = (α + β)/αβ**, **α/β + β/α = [(α + β)² − 2αβ]/αβ**.",
 "Sum zero ⇒ **b = 0**; product one ⇒ **a = c**; one root zero ⇒ **c = 0**. Reversing the coefficients to **cx² + bx + a = 0** turns the roots into their reciprocals."
],
blocks:[
 {h:"THE SHEET — the roots, the discriminant, and every expression built on them",
  cols:["Asked as","The formula","Where the question uses it"],
  rows:[
  ["**The roots**","x = [−b ± √(b² − 4ac)]/2a","For ax² + bx + c = 0 with a ≠ 0. If a = 0 it is not a quadratic at all"],
  ["**Sum of the roots α + β**","−b/a","3x² − 7x + 2 = 0 gives 7/3 — the sign of b flips"],
  ["**Product of the roots αβ**","c/a","2x² + 5x − 3 = 0 gives −3/2 — the sign of c does not flip"],
  ["**The equation from its roots**","x² − (α + β)x + αβ = 0","Any multiple a[x² − (sum)x + product] = 0 has the same roots"],
  ["**Discriminant**","D = b² − 4ac","2x² − 3x + 5 = 0 has D = 9 − 40 = −31"],
  ["**Real and distinct roots**","D > 0, that is b² > 4ac","And if a, b, c are rational and D is a positive perfect square, the roots are rational"],
  ["**Real and equal roots**","D = 0, that is b² = 4ac","Every *find k so the roots are equal* question is this one line"],
  ["**No real roots**","D < 0, that is b² < 4ac","The roots are a conjugate pair and neither is a real number"],
  ["**α² + β²**","(α + β)² − 2αβ","x² − 5x + 6 = 0 gives 25 − 12 = 13"],
  ["**(α − β)²**","(α + β)² − 4αβ","x² − 7x + 12 = 0 gives 49 − 48 = 1, so α − β = ±1"],
  ["**α³ + β³**","(α + β)³ − 3αβ(α + β)","x² − 5x + 3 = 0 gives 125 − 45 = 80"],
  ["**1/α + 1/β**","(α + β)/αβ","Sum over product, never the other way round"],
  ["**α/β + β/α**","[(α + β)² − 2αβ]/αβ","It is (α² + β²)/αβ written out"],
  ["**α²β + αβ²**","αβ(α + β)","Take out the common αβ and the two known values finish it"],
  ["**Roots reciprocated**","cx² + bx + a = 0","Reverse the three coefficients"],
  ["**Roots negated**","ax² − bx + c = 0","Replace x by −x: only the middle sign changes"],
  ["**Roots squared**","x² − (α² + β²)x + (αβ)² = 0","Build it from the new sum and the new product"],
  ["**Roots equal in magnitude, opposite in sign**","b = 0","Because the sum −b/a has to be zero"],
  ["**Roots reciprocal of each other**","a = c","Because the product c/a has to be 1"],
  ["**One root zero**","c = 0","Because the product c/a has to be zero"],
  ["**Both roots common to two equations**","a₁/a₂ = b₁/b₂ = c₁/c₂","The two equations are the same equation scaled"],
  ["**One root is p + √q**","The other is p − √q","Only when a, b and c are rational — irrational roots come in conjugate pairs"],
  ["**Solving by splitting the middle term**","Split b into two numbers with product ac and sum b","2x² − 5x − 3: −6 and 1 multiply to −6 and add to −5"]
 ]},

 {careful:"**The sum of the roots is −b/a, not b/a.** For `3x² − 7x + 2 = 0` the sum is `7/3`, because −(−7)/3 is positive. The product, **c/a**, takes the sign of c as it stands. Getting the sum's sign wrong turns every expression built on it wrong as well, and the sign-flipped value is always one of the four options."},

 {careful:"**α² + β² = (α + β)² − 2αβ** but **(α − β)² = (α + β)² − 4αβ.** Two for the sum of the squares, four for the square of the difference. Using 2αβ where 4αβ belongs is the single most common slip in this topic, and every such question offers that value as an option."},

 {careful:"*Equal roots* means **D = 0**, that is **b² = 4ac** — not *D is a perfect square*. A positive perfect-square D with rational coefficients gives roots that are rational and **distinct**. The two conditions are asked in almost the same words and answer different questions."},

 {h:"QUESTIONS — the formula, the roots and the discriminant",
  mcq:[
  {q:"The roots of `ax² + bx + c = 0`, with a ≠ 0, are given by:",
   o:["[−b ± √(b² − 4ac)]/2a","[−b ± √(b² + 4ac)]/2a","[b ± √(b² − 4ac)]/2a","[−b ± √(b² − 4ac)]/2"],
   a:0,
   why:"**x = [−b ± √(b² − 4ac)]/2a.** The whole numerator, the `−b` included, is divided by `2a`. Option D divides only by 2 and is the commonest written slip; option C loses the minus on b, and option B adds 4ac where the discriminant subtracts it.",
   tag:"The formula"},

  {q:"For `3x² − 7x + 2 = 0`, the sum of the roots is:",
   o:["2/3","7/3","−7/3","−2/3"],
   a:1,
   why:"**Sum of the roots = −b/a** = −(−7)/3 = `7/3`. Option C is the sign left unflipped, which is the trap here. Option A, `2/3`, is `c/a` — the **product**, not the sum — and option D is that product with the sum's minus wrongly carried across to it. The roots are in fact `2` and `1/3`, and 2 + 1/3 = 7/3.",
   tag:"Sum of roots"},

  {q:"For `2x² + 5x − 3 = 0`, the product of the roots is:",
   o:["5/2","−5/2","−3/2","3/2"],
   a:2,
   why:"**Product of the roots = c/a** = −3/2. Unlike the sum, the product does not flip the sign, so option D is the trap. Options A and B are `±b/a`, which belongs to the sum. The roots are `1/2` and `−3`, and their product is −3/2.",
   tag:"Product of roots"},

  {q:"The quadratic equation whose roots are `3` and `−5` is:",
   o:["x² − 2x − 15 = 0","x² + 2x + 15 = 0","x² − 2x + 15 = 0","x² + 2x − 15 = 0"],
   a:3,
   why:"**x² − (α + β)x + αβ = 0.** Here the sum is 3 + (−5) = −2 and the product is −15, so the equation is x² − (−2)x + (−15) = **x² + 2x − 15 = 0**. Option A puts the sum in with its own sign instead of the opposite sign — the standard slip, because the minus in the formula is easy to drop.",
   tag:"Forming the equation"},

  {q:"The roots of `ax² + bx + c = 0` are real and equal when:",
   o:["b² = 4ac","b² > 4ac","b² < 4ac","b² + 4ac = 0"],
   a:0,
   why:"Equal roots mean the discriminant vanishes: **D = b² − 4ac = 0**, that is **b² = 4ac**. Option B is the condition for roots that are real and *distinct*, and option C for no real roots at all. Every *find k so the roots are equal* question is this single line.",
   tag:"D = 0"},

  {q:"If the roots of `x² − kx + 9 = 0` are equal, then k is:",
   o:["6 only","±3","±6","±9"],
   a:2,
   why:"**Equal roots ⇒ b² = 4ac**, so k² = 4(1)(9) = 36 and k = `±6`. Option A is the trap: both `6` and `−6` give equal roots, since only k² appears. Option B, `±3`, comes from reading `4ac` as `ac` and solving k² = 9 — the factor of `4` is what gets dropped; option D is `±c` copied out unchanged.",
   tag:"Find k"},

  {q:"If `2x² + 5x + k = 0` has equal roots, then k is:",
   o:["8/25","25/8","25/4","−25/8"],
   a:1,
   why:"**b² = 4ac** gives 25 = 4(2)k = 8k, so k = `25/8`. Option C divides by 4 instead of by 4a = 8, which is the slip to watch; option A inverts the fraction. A positive k here is correct — multiplying through by 8 gives 16x² + 40x + 25 = 0, which is (4x + 5)², a perfect square.",
   tag:"Find k"},

  {q:"If `b² − 4ac < 0` for `ax² + bx + c = 0`, the roots are:",
   o:["real and equal","real and distinct","rational and distinct","not real"],
   a:3,
   why:"**D < 0 means there are no real roots** — the square root of a negative number is not a real number, so the two roots form a conjugate pair outside the real line. Option A belongs to `D = 0` and option B to `D > 0`. The phrase *no real roots* is what SSC prints.",
   tag:"D < 0"},

  {q:"If a, b and c are rational and `b² − 4ac` is a positive perfect square, the roots of `ax² + bx + c = 0` are:",
   o:["rational and distinct","irrational and distinct","rational and equal","not real"],
   a:0,
   why:"**D > 0 makes the roots distinct, and a perfect-square D makes √D rational**, so [−b ± √D]/2a is rational throughout. The roots are therefore rational and distinct. Option C is the trap, because *perfect square* is easily read as *equal roots* — equal roots need `D = 0`, which is not positive.",
   tag:"Perfect-square D"},

  {q:"If α and β are the roots of `x² − 5x + 6 = 0`, then `α² + β²` is:",
   o:["37","13","25","1"],
   a:1,
   why:"**α² + β² = (α + β)² − 2αβ** = 5² − 2(6) = 25 − 12 = `13`. Option A, `37`, is what adding 2αβ gives instead of subtracting it. Option D, `1`, is **(α − β)² = (α + β)² − 4αβ** = 25 − 24, a different question. The roots are `2` and `3`, and 4 + 9 = 13.",
   tag:"α² + β²"},

  {q:"If α and β are the roots of `x² − 7x + 12 = 0`, then `(α − β)²` is:",
   o:["97","25","1","49"],
   a:2,
   why:"**(α − β)² = (α + β)² − 4αβ** = 49 − 4(12) = 49 − 48 = `1`. Option B is the same line with 2αβ instead of 4αβ — the slip this topic punishes most — and option A adds instead of subtracting. The roots are `3` and `4`, so the difference really is ±1.",
   tag:"(α − β)²"},

  {q:"If α and β are the roots of `3x² − 5x + 2 = 0`, then `1/α + 1/β` is:",
   o:["2/5","3/5","5/3","5/2"],
   a:3,
   why:"**1/α + 1/β = (α + β)/αβ** = (5/3) ÷ (2/3) = `5/2`. Option A is the fraction inverted, product over sum, which is the trap; option C is the sum alone and option B is `1/(α + β)`, which is not the sum of the reciprocals. The roots are `1` and `2/3`, and 1 + 3/2 = 5/2.",
   tag:"1/α + 1/β"},

  {q:"If α and β are the roots of `x² − 5x + 3 = 0`, then `α³ + β³` is:",
   o:["80","170","125","110"],
   a:0,
   why:"**α³ + β³ = (α + β)³ − 3αβ(α + β)** = 125 − 3(3)(5) = 125 − 45 = `80`. Option C is the cube of the sum with the correction term forgotten, option B adds the correction instead of subtracting it, and option D drops the `3` and takes away only αβ(α + β) = 15. For **α³ − β³** the same term is added, because α³ − β³ = (α − β)³ + 3αβ(α − β).",
   tag:"α³ + β³"},

  {q:"If α and β are the roots of `x² − 6x + 4 = 0`, then `α/β + β/α` is:",
   o:["9","7","5","28"],
   a:1,
   why:"**α/β + β/α = (α² + β²)/αβ = [(α + β)² − 2αβ]/αβ** = (36 − 8)/4 = 28/4 = `7`. Option A is 36/4, the sum squared over the product with the `−2αβ` dropped; option C is what subtracting 4αβ instead of 2αβ gives, (36 − 16)/4 — that belongs to `(α − β)²`, not to this. Option D is the numerator left undivided.",
   tag:"α/β + β/α"},

  {q:"If α and β are the roots of `2x² + 3x − 5 = 0`, then `α²β + αβ²` is:",
   o:["−15/4","15/2","15/4","−15/2"],
   a:2,
   why:"Take out the common factor: **α²β + αβ² = αβ(α + β)** = (−5/2) × (−3/2) = `15/4`. Two minus signs make a plus, so option A is the trap for anyone who flips only one of them. Option B forgets to multiply the two denominators.",
   tag:"α²β + αβ²"},

  {q:"The equation whose roots are the reciprocals of the roots of `ax² + bx + c = 0` is:",
   o:["ax² + cx + b = 0","cx² − bx + a = 0","cx² + bx + a = 0","ax² − bx + c = 0"],
   a:2,
   why:"Put `1/x` for x and multiply through by x²: a + bx + cx² = 0, that is **cx² + bx + a = 0** — the three coefficients simply reversed. Option A swaps the wrong pair. Option D is the equation whose roots are the **negatives** of the original roots, which is the neighbouring result.",
   tag:"Reciprocal roots"},

  {q:"The equation whose roots are the negatives of the roots of `2x² + 5x + 3 = 0` is:",
   o:["2x² + 5x − 3 = 0","3x² + 5x + 2 = 0","2x² − 5x − 3 = 0","2x² − 5x + 3 = 0"],
   a:3,
   why:"Replace x by `−x`: **ax² + bx + c = 0 becomes ax² − bx + c = 0**, so only the middle sign changes. Option B is the reciprocal-root equation, `cx² + bx + a = 0`, and is the trap. Check it: the roots of the original are `−1` and `−3/2`, and 2x² − 5x + 3 = 0 has roots `1` and `3/2`.",
   tag:"Negated roots"},

  {q:"If α and β are the roots of `x² − 5x + 6 = 0`, the equation whose roots are `α²` and `β²` is:",
   o:["x² − 13x + 36 = 0","x² − 25x + 36 = 0","x² − 13x + 6 = 0","x² − 10x + 36 = 0"],
   a:0,
   why:"The new sum is **α² + β² = (α + β)² − 2αβ** = 25 − 12 = 13 and the new product is **(αβ)² = 36**, so the equation is **x² − 13x + 36 = 0**. Option B uses `(α + β)²` as the new sum, forgetting the `−2αβ`; option D is the sum of the roots doubled. The roots are `2` and `3`, and 4 and 9 do give 13 and 36.",
   tag:"Squared roots"},

  {q:"The roots of `ax² + bx + c = 0` are equal in magnitude and opposite in sign when:",
   o:["a = 0","b = 0","c = 0","a = c"],
   a:1,
   why:"Equal in magnitude and opposite in sign means α + β = 0, and **the sum of the roots is −b/a**, so **b = 0**. Option C, c = 0, makes one root zero instead; option D, a = c, makes the roots reciprocals of each other. All three conditions are asked, and they are easy to interchange.",
   tag:"b = 0"},

  {q:"The roots of `ax² + bx + c = 0` are reciprocals of each other when:",
   o:["b = 0","a = b","a = c","b = c"],
   a:2,
   why:"Reciprocal roots mean αβ = 1, and **the product of the roots is c/a**, so c/a = 1 and **a = c**. Option A, b = 0, is the condition for roots equal in magnitude and opposite in sign — the neighbouring result and the usual trap. Reversing the coefficients of such an equation returns the same equation, which is the other way to see it.",
   tag:"a = c"},

  {q:"If one root of `2x² − 7x + k = 0` is zero, then k is:",
   o:["7/2","−7/2","49/8","0"],
   a:3,
   why:"If one root is zero the product of the roots is zero, and **the product is c/a = k/2**, so k = `0`. Option A is the sum of the roots, `−b/a = 7/2`, which is the other root once k = 0 — that is the tempting answer, because the question is really asking about c and the sum is the figure that comes to mind first. Option C is **b² = 4ac** solved for k, 49 = 8k, which is the condition for *equal* roots and answers a different question.",
   tag:"c = 0"},

  {q:"The equations `a₁x² + b₁x + c₁ = 0` and `a₂x² + b₂x + c₂ = 0` have both roots common when:",
   o:["a₁/a₂ = b₁/b₂ = c₁/c₂","a₁/a₂ = b₁/b₂ ≠ c₁/c₂","a₁a₂ = b₁b₂ = c₁c₂","a₁/c₂ = b₁/b₂ = c₁/a₂"],
   a:0,
   why:"**Both roots are common exactly when a₁/a₂ = b₁/b₂ = c₁/c₂** — the second equation is the first one multiplied by a constant, so it is the same equation. Option B is the condition for a pair of *linear* equations to have no solution, and it is the one most often ticked by mistake here because the shape of the ratios looks familiar.",
   tag:"Common roots"},

  {q:"One root of `x² − 6x + c = 0` is `3 + √5`, and the coefficients are rational. Then c is:",
   o:["14","4","−4","6"],
   a:1,
   why:"**With rational coefficients, irrational roots come in conjugate pairs**, so the other root is `3 − √5`. Then **c/a = αβ** = (3 + √5)(3 − √5) = 9 − 5 = `4`. Option A is 9 + 5, which is what multiplying without the difference-of-squares sign gives; option D is the sum of the roots, not the product.",
   tag:"Conjugate root"},

  {q:"The roots of `2x² − 5x − 3 = 0` are:",
   o:["−3 and 1/2","3 and 1/2","3 and −1/2","−3 and −1/2"],
   a:2,
   why:"Split the middle term into two numbers with product `ac = −6` and sum `−5`: those are −6 and 1, giving 2x² − 6x + x − 3 = (x − 3)(2x + 1) = 0, so x = `3` or `−1/2`. Check it against the sheet: **the sum of the roots is −b/a and the product is c/a**, so the sum must be 5/2 — and 3 − 1/2 = 5/2 — while the product must be −3/2, and 3 × (−1/2) = −3/2. Option A has both signs swapped, which satisfies the product but not the sum.",
   tag:"Factorise"},

  {q:"The roots of `6x² − 5x + 1 = 0` are:",
   o:["2 and 3","1/2 and −1/3","−1/2 and −1/3","1/2 and 1/3"],
   a:3,
   why:"**D = b² − 4ac** = 25 − 24 = 1, so **x = [5 ± 1]/12**, giving `1/2` and `1/3`. Option A is the trap: `2` and `3` are their reciprocals, and they solve x² − 5x + 6 = 0, not this equation. Check with the sheet — the product must be c/a = 1/6, and (1/2)(1/3) = 1/6.",
   tag:"Factorise"},

  {q:"The roots of `x² − 6x + 7 = 0` are:",
   o:["3 ± √2","3 ± 2√2","6 ± √2","3 ± √7"],
   a:0,
   why:"**x = [−b ± √(b² − 4ac)]/2a** = [6 ± √(36 − 28)]/2 = [6 ± 2√2]/2 = `3 ± √2`. Option B divides the `6` by 2a but leaves the surd undivided — the commonest place to stop. Option C is the other half of that mistake: the surd divided and the `6` left as it stands. Option D comes from completing the square as (x − 3)² = 7, with the `9` the square introduces never balanced against the `7`.",
   tag:"The formula"},

  {q:"The value of the discriminant of `2x² − 3x + 5 = 0` is:",
   o:["31","−31","49","9"],
   a:1,
   why:"**D = b² − 4ac** = (−3)² − 4(2)(5) = 9 − 40 = `−31`, so the equation has no real roots. Option C, `49`, is 9 + 40, the sign of the `−4ac` term lost; option D is `b²` with the second term never subtracted. Option A is the right size with the wrong sign, and that hides the whole point — the sign of D is the answer to *are the roots real*.",
   tag:"Discriminant"},

  {q:"The quadratic equation whose roots are `2 + √3` and `2 − √3` is:",
   o:["x² + 4x + 1 = 0","x² − 4x − 1 = 0","x² − 4x + 7 = 0","x² − 4x + 1 = 0"],
   a:3,
   why:"The sum is `4` and the product is (2 + √3)(2 − √3) = 4 − 3 = `1`, so **x² − (α + β)x + αβ = 0** gives **x² − 4x + 1 = 0**. Option C uses 4 + 3 for the product, which is the slip of adding where the difference of squares subtracts. Option A puts the sum in with its own sign instead of the opposite one.",
   tag:"Forming the equation"}
 ],
  note:"Every question above is answered from the sum and the product of the roots, or from the discriminant. If you found yourself solving for α and β separately, the line from the sheet you want is one of the first three."}
]
},

/* ============================================================ 6 — Polynomials, remainder and factor theorem (27 questions) */
{
id:"algebra-polynomial", n:"Polynomials, remainder and factor theorem", hy:1,
w:"The two theorems that turn a long division into a single substitution, the division algorithm that fixes the shape of a remainder, and the divisibility rules SSC sets on xⁿ ± 1.",
quick:[
 "**Remainder theorem: the remainder when f(x) is divided by (x − a) is f(a).** Substitute the value that makes the divisor zero — so for `(x + a)` it is **f(−a)**, and for `(ax + b)` it is **f(−b/a)**.",
 "**Factor theorem: (x − a) is a factor of f(x) exactly when f(a) = 0.** Every *find k* question in the chapter is this one line with k left in.",
 "**f(1) is the sum of all the coefficients; f(0) is the constant term.** So `(x − 1)` is a factor exactly when the coefficients add to `0`, and the remainder on division by `x` is the constant term.",
 "**Division algorithm: f(x) = q(x)d(x) + r(x)**, with the degree of r(x) below the degree of d(x). A linear divisor leaves a constant; **a quadratic divisor leaves ax + b**.",
 "**The degree of a product is the sum of the degrees**, so the degree of the quotient is the degree of f(x) minus the degree of d(x). And **HCF × LCM = the product of the two polynomials**.",
 "**xⁿ − 1 is divisible by (x − 1) for every n**, and by `(x + 1)` only when n is even. **xⁿ + 1 is divisible by (x + 1) only when n is odd**, and by `(x − 1)` never.",
 "For the cubic `x³ + px² + qx + r = 0`: **sum of the roots = −p, sum of the products in pairs = q, product of the roots = −r.** The signs alternate."
],
blocks:[
 {h:"THE SHEET — every rule, with the substitution it reduces to",
  cols:["Asked as","The rule","What the question does with it"],
  rows:[
  ["**Remainder, divisor (x − a)**","f(a)","The divisor is zero at x = a, so substitute a. No division is ever carried out"],
  ["**Remainder, divisor (x + a)**","f(−a)","x + a is zero at x = −a. This sign is where the chapter is lost"],
  ["**Remainder, divisor (ax + b)**","f(−b/a)","For `(2x − 1)` substitute x = ½; for `(3x + 2)` substitute x = −2/3"],
  ["**Remainder, divisor x**","f(0), the constant term","Dividing by x is dividing by (x − 0)"],
  ["**Factor theorem**","(x − a) is a factor exactly when f(a) = 0","A factor is a divisor with remainder zero, and the remainder is f(a)"],
  ["**(x + a) a factor**","f(−a) = 0","The *find k* question: set f(−a) = 0 and solve for k"],
  ["**f(1)**","The sum of all the coefficients","Also the test for `(x − 1)`: the coefficients must add to zero"],
  ["**Division algorithm**","f(x) = q(x)d(x) + r(x)","The degree of r(x) stays below the degree of d(x), or another step of division is still possible"],
  ["**Remainder, quadratic divisor**","ax + b","Two conditions fix a and b — one value of f is never enough"],
  ["**Degree of a product**","Degree of f + degree of g","The degree of a *sum* is at most the larger of the two degrees — lower only if the leading terms cancel"],
  ["**Degree of the quotient**","Degree of f − degree of d","Degree 5 divided by degree 2 gives a quotient of degree `3`"],
  ["**HCF × LCM**","p(x)q(x)","So any one of the four is found by dividing the other three appropriately"],
  ["**xⁿ − 1 and (x − 1)**","Always divisible","f(1) = 1ⁿ − 1 = 0 whatever n is"],
  ["**xⁿ − 1 and (x + 1)**","Only when n is even","f(−1) = (−1)ⁿ − 1, which is zero only for even n"],
  ["**xⁿ + 1 and (x + 1)**","Only when n is odd","f(−1) = (−1)ⁿ + 1, which is zero only for odd n"],
  ["**xⁿ + 1 and (x − 1)**","Never divisible","f(1) = 1 + 1 = `2`, never zero"],
  ["**x³ − y³**","(x − y)(x² + xy + y²)","Divisible by `(x − y)`, and (x + y) is not a factor of it"],
  ["**x³ + y³**","(x + y)(x² − xy + y²)","The neighbouring factorisation, offered as the wrong option every time"],
  ["**Factorising a cubic**","Test x = ±1, ±2 among the divisors of the constant term","One root found, divide it out and factorise the quadratic that is left"],
  ["**Factorising by grouping**","x³ + 2x² − x − 2 = x²(x + 2) − (x + 2) = (x + 2)(x² − 1)","Then take the difference of squares apart as well"],
  ["**Cubic x³ + px² + qx + r = 0**","Sum of roots −p, sum in pairs q, product −r","The constant term and the product of the roots differ by a sign"]
 ],
  note:"Nothing on this sheet needs long division. Every line is a substitution or a degree count."},

 {careful:"**The divisor's zero is what you substitute, and its sign is the opposite of the sign you see.** For `(x − 3)` substitute `3`; for `(x + 3)` substitute `−3`. Reading `(x + 3)` and working out f(3) is the single commonest error in this chapter, and the value f(3) is always offered as an option."},

 {careful:"**A factor is a divisor whose remainder is zero — so the factor question and the remainder question are the same sum.** *Find k so that (x − 2) is a factor* sets f(2) = 0; *find k so that the remainder is 5* sets f(2) = 5. Same substitution, different right-hand side."},

 {careful:"When the divisor is quadratic the remainder is **ax + b**, not a constant, and **one condition never fixes it**. Both f(1) and f(2) have to be used for a divisor `(x − 1)(x − 2)` — an option that matches only the first value is always there, and it looks right until the second value is checked."},

 {h:"QUESTIONS — the two theorems, degrees, and divisibility",
  mcq:[
  {q:"When a polynomial f(x) is divided by `(x − a)`, the remainder is:",
   o:["f(0)","f(−a)","f(a) − f(0)","f(a)"],
   a:3,
   why:"**The remainder when f(x) is divided by (x − a) is f(a)** — substitute the value that makes the divisor zero. Option B, `f(−a)`, is the remainder on division by **(x + a)**, and swapping those two signs is the commonest slip in the chapter. Option A, f(0), is only the constant term, which is the remainder on division by x.",
   tag:"Remainder theorem"},

  {q:"The remainder when `x³ + 3x² − 5x + 7` is divided by `(x + 2)` is:",
   o:["`17`","`37`","`21`","`7`"],
   a:2,
   why:"**The remainder on division by (x + a) is f(−a)**, so substitute x = −2: (−8) + 3(4) − 5(−2) + 7 = −8 + 12 + 10 + 7 = `21`. Option A is f(2) = 8 + 12 − 10 + 7 = `17`, which is the remainder for `(x − 2)` — the sign trap. Option B, `37`, is what forgetting the minus on the cube alone gives, and option D is the constant term.",
   tag:"Remainder theorem"},

  {q:"When f(x) is divided by `(ax + b)`, the remainder is:",
   o:["f(b/a)","f(−a/b)","f(−b/a)","f(a/b)"],
   a:2,
   why:"**ax + b is zero at x = −b/a, so the remainder is f(−b/a).** For `(2x − 3)` that value is x = 3/2, and for `(3x + 2)` it is x = −2/3. Option A drops the minus sign; option B turns the fraction upside down as well, which is what happens when the rule is remembered as a shape rather than derived from *set the divisor to zero*.",
   tag:"Divisor ax + b"},

  {q:"The remainder when `8x³ − 4x² + 6x − 1` is divided by `(2x − 1)` is:",
   o:["`−6`","`9`","`−1`","`2`"],
   a:3,
   why:"**The remainder is f(−b/a)**, and 2x − 1 is zero at x = ½, so f(½) = 8(1/8) − 4(1/4) + 6(1/2) − 1 = 1 − 1 + 3 − 1 = `2`. Option A is f(−½) = −1 − 1 − 3 − 1 = `−6`, the remainder for `(2x + 1)`. Option B is f(1) = 8 − 4 + 6 − 1 = `9`, the sum of the coefficients, and option C is the constant term f(0).",
   tag:"Divisor ax + b"},

  {q:"`(x − a)` is a factor of f(x) exactly when:",
   o:["f(a) = 0","f(0) = a","f(a) = a","f(−a) = 0"],
   a:0,
   why:"**Factor theorem: (x − a) is a factor of f(x) if and only if f(a) = 0.** A factor is a divisor that leaves no remainder, and the remainder theorem says that remainder is f(a) — so the two theorems are one statement. Option D is the condition for **(x + a)** to be a factor, and it is the option that catches anyone who reads the sign off the bracket instead of solving for the zero.",
   tag:"Factor theorem"},

  {q:"If `(x − 2)` is a factor of `x³ − 3x² + kx − 4`, then k is:",
   o:["`4`","`8`","`−4`","`−12`"],
   a:0,
   why:"**(x − 2) is a factor exactly when f(2) = 0.** Here f(2) = 8 − 12 + 2k − 4 = 2k − 8, so 2k = 8 and k = `4`. Option B is the value of 2k left undivided — the standard slip. Option D, `−12`, is what setting f(−2) = 0 gives, which is the condition for **(x + 2)**, not for (x − 2).",
   tag:"Find k"},

  {q:"If `(x + 1)` is a factor of `x³ + 2x² − 5x + k`, then k is:",
   o:["`6`","`−6`","`2`","`−2`"],
   a:1,
   why:"**(x + 1) is a factor exactly when f(−1) = 0.** Here f(−1) = −1 + 2 + 5 + k = 6 + k, so k = `−6`. Option A is the same arithmetic with the sign of k dropped. Option C, `2`, is what f(1) = 0 gives — that is the condition for **(x − 1)** to be a factor, and substituting the sign you can see rather than the zero of the bracket is exactly how this question is got wrong.",
   tag:"Find k"},

  {q:"For any polynomial f(x), `f(1)` is equal to:",
   o:["the constant term","the sum of all its coefficients","the product of its coefficients","its degree"],
   a:1,
   why:"Putting x = 1 turns every power of x into 1, so **f(1) is the sum of all the coefficients**, the constant term included: for `3x³ − 2x² + 5x − 1` it is 3 − 2 + 5 − 1 = `5`. Option A is **f(0)**, the constant term, and the two are confused more often than anything else here. The useful consequence: `(x − 1)` is a factor exactly when the coefficients add to zero.",
   tag:"f(1) and f(0)"},

  {q:"The remainder when `x⁴ + 2x³ − 5x + 8` is divided by `x` is:",
   o:["`8`","`6`","`−5`","`0`"],
   a:0,
   why:"Dividing by x is dividing by **(x − 0)**, so the remainder is **f(0), which is simply the constant term** `8`. Option B is f(1) = 1 + 2 − 5 + 8 = `6`, the sum of the coefficients — that is the remainder for `(x − 1)`, not for x. Option C is the coefficient of x, which the constant term is never.",
   tag:"f(1) and f(0)"},

  {q:"In the division algorithm `f(x) = q(x)d(x) + r(x)`, the degree of the remainder r(x) must be:",
   o:["equal to the degree of d(x)","lower than the degree of d(x)","lower than the degree of q(x)","lower than the degree of f(x)"],
   a:1,
   why:"**f(x) = q(x)d(x) + r(x), with the degree of r(x) lower than the degree of d(x)** — if it were not, another step of the division would still be possible and r(x) would not be the remainder. Option D sounds safe but is false in general: dividing `5` by `(x − 1)` gives quotient 0 and remainder 5, whose degree equals that of f. The divisor sets the ceiling, never the dividend.",
   tag:"Division algorithm"},

  {q:"When f(x) is divided by a quadratic polynomial, the remainder has the form:",
   o:["a constant","ax² + bx + c","ax + b","zero"],
   a:2,
   why:"**The degree of the remainder stays below the degree of the divisor**, and a quadratic has degree 2, so the remainder is of degree 1 at most: **ax + b**. Option A is the form for a *linear* divisor, which is where the habit comes from and is the tempting answer. Option B has the same degree as the divisor, which the division algorithm forbids.",
   tag:"Quadratic divisor"},

  {q:"A polynomial f(x) leaves remainder `3` on division by `(x − 1)` and remainder `5` on division by `(x − 2)`. Its remainder on division by `(x − 1)(x − 2)` is:",
   o:["`2x + 1`","`x + 2`","`2x − 1`","`8`"],
   a:0,
   why:"**The remainder for a quadratic divisor has the form ax + b**, and since the divisor vanishes at x = 1 and x = 2, r(1) = f(1) = 3 and r(2) = f(2) = 5. So a + b = 3 and 2a + b = 5, giving a = `2`, b = `1`, and the remainder `2x + 1`. Option B meets the first condition and fails the second — it gives 4 at x = 2 — and that is the one picked by anyone who stops after one substitution. Option D adds the two remainders, which the algorithm never permits.",
   tag:"Quadratic divisor"},

  {q:"If f(x) has degree `3` and g(x) has degree `4`, the degree of `f(x)g(x)` is:",
   o:["`12`","`4`","`7`","`1`"],
   a:2,
   why:"**The degree of a product is the sum of the degrees**, so 3 + 4 = `7`. Option A multiplies the degrees, which is the standard slip. Option B, `4`, is the degree of the **sum** f(x) + g(x) — for a sum the degree is the larger of the two, not the total — and option D is their difference.",
   tag:"Degrees"},

  {q:"When a polynomial of degree `5` is divided by a polynomial of degree `2`, the degree of the quotient is:",
   o:["`2`","`5`","`3`","`7`"],
   a:2,
   why:"In **f(x) = q(x)d(x) + r(x)** the product q(x)d(x) must reach degree 5, and **the degree of a product is the sum of the degrees**, so the degree of the quotient is 5 − 2 = `3`. Option D adds the degrees instead of subtracting, which gives the degree of f(x)d(x). The remainder here is of degree 1 at most, that is `ax + b`.",
   tag:"Degrees"},

  {q:"For two polynomials p(x) and q(x), the product of their HCF and their LCM is:",
   o:["p(x) + q(x)","the HCF of p(x)q(x)","p(x)q(x)","the LCM of p(x)q(x)"],
   a:2,
   why:"**HCF × LCM = p(x)q(x)**, exactly as it is for two numbers. So whenever three of the four are given, the fourth follows by dividing — for instance one polynomial = (HCF × LCM) ÷ the other polynomial. Option A is the sum rather than the product, and the sum has no such rule at all.",
   tag:"HCF and LCM"},

  {q:"The HCF of two polynomials is `(x − 2)` and their LCM is `(x − 2)(x + 3)(x − 1)`. If one of them is `(x − 2)(x + 3)`, the other is:",
   o:["`(x − 2)(x − 1)`","`(x − 1)`","`(x − 2)²(x − 1)`","`(x − 2)(x + 3)(x − 1)`"],
   a:0,
   why:"**HCF × LCM = the product of the two polynomials**, so the other one is (HCF × LCM) ÷ the first = [(x − 2)(x − 2)(x + 3)(x − 1)] ÷ [(x − 2)(x + 3)] = `(x − 2)(x − 1)`. Option B is the LCM divided by the first polynomial with the HCF left out of the product — and it fails the obvious check, since the HCF `(x − 2)` must divide both polynomials and does not divide (x − 1).",
   tag:"HCF and LCM"},

  {q:"`xⁿ − 1` is divisible by `(x − 1)` for:",
   o:["even n only","odd n only","every positive integer n","no value of n"],
   a:2,
   why:"Put x = 1: **f(1) = 1ⁿ − 1 = 0 whatever n is, so (x − 1) is a factor of xⁿ − 1 for every positive integer n.** Option A is a different rule carried into the wrong question: **xⁿ − 1 is divisible by (x + 1) only when n is even**, because f(−1) = (−1)ⁿ − 1 is zero only then. One divisor, `(x − 1)`, always works; the other, `(x + 1)`, has a condition.",
   tag:"xⁿ − 1"},

  {q:"`xⁿ + 1` is divisible by `(x + 1)` when:",
   o:["n is even","n is odd","n is any positive integer","n is a multiple of 3"],
   a:1,
   why:"**f(−1) = (−1)ⁿ + 1, which is 0 when n is odd and 2 when n is even, so (x + 1) divides xⁿ + 1 only for odd n** — x³ + 1 and x⁵ + 1 yes, x² + 1 and x⁴ + 1 no. Option A is the rule for the *other* pair: it is `xⁿ − 1` that needs n even for (x + 1). And `(x − 1)` never divides xⁿ + 1 at all, because f(1) = 1 + 1 = `2`.",
   tag:"xⁿ + 1"},

  {q:"Which of these is **not** divisible by `(x + 1)`?",
   o:["x³ + 1","x⁴ − 1","x⁵ + 1","x⁴ + 1"],
   a:3,
   why:"**(x + 1) divides f(x) only when f(−1) = 0.** For `x⁴ + 1`, f(−1) = 1 + 1 = `2`, so it is not divisible. The other three follow the two standard rules: **xⁿ + 1 is divisible by (x + 1) for odd n** (x³ + 1, x⁵ + 1) and **xⁿ − 1 is divisible by (x + 1) for even n** (x⁴ − 1). Option C is the one most often ticked by mistake, because an odd power does work here, whereas for x⁴ + 1 the even power kills it.",
   tag:"Divisibility"},

  {q:"`x³ − y³` is divisible by:",
   o:["x + y","x² + y²","x − y","x² − xy + y²"],
   a:2,
   why:"**x³ − y³ = (x − y)(x² + xy + y²)**, so `(x − y)` is a factor — and more generally xⁿ − yⁿ is divisible by (x − y) for every n, which is the same fact as xⁿ − 1 being divisible by (x − 1). Option A and option D are both pieces of the neighbouring identity **x³ + y³ = (x + y)(x² − xy + y²)**, and option D is the tempting one because the bracket looks almost right: the middle sign there is a minus, but it belongs to the *sum* of cubes.",
   tag:"x³ − y³"},

  {q:"`x³ − 6x² + 11x − 6` factorises as:",
   o:["(x − 1)(x − 2)(x − 3)","(x + 1)(x + 2)(x + 3)","(x − 1)(x + 2)(x − 3)","(x − 6)(x − 1)(x + 1)"],
   a:0,
   why:"Test the divisors of the constant term: **f(1) = 1 − 6 + 11 − 6 = 0, so by the factor theorem (x − 1) is a factor.** Dividing it out leaves x² − 5x + 6 = (x − 2)(x − 3), giving `(x − 1)(x − 2)(x − 3)`. Option B is every sign flipped and expands to x³ + 6x² + 11x + 6. Option D is the trap: its x² coefficient is also −6, but it expands to x³ − 6x² − x + 6, so the middle term gives it away.",
   tag:"Factorising a cubic"},

  {q:"Written as a product of three linear factors, `x³ + 2x² − x − 2` is:",
   o:["(x + 2)(x² − 1)","(x − 2)(x − 1)(x + 1)","(x + 2)(x + 1)²","(x + 2)(x − 1)(x + 1)"],
   a:3,
   why:"Group in pairs: x²(x + 2) − 1(x + 2) = **(x + 2)(x² − 1)**, and then **x² − 1 = (x − 1)(x + 1)**, so the full factorisation is `(x + 2)(x − 1)(x + 1)`. Option A is the same work stopped one step early — correct as far as it goes, but not three linear factors, and it is the option that catches a reader who forgets the difference of squares. Option B has the sign of the first bracket wrong, and f(2) = 8 + 8 − 2 − 2 = `12`, not 0, so (x − 2) is no factor.",
   tag:"Grouping"},

  {q:"If `(x − 1)` and `(x + 2)` are both factors of `x³ + ax² + bx − 6`, then:",
   o:["a = 4, b = 1","a = 1, b = 4","a = −1, b = 6","a = 2, b = 3"],
   a:0,
   why:"**Two factors give two equations, f(1) = 0 and f(−2) = 0.** f(1) = 1 + a + b − 6 = 0 gives a + b = 5; f(−2) = −8 + 4a − 2b − 6 = 0 gives 2a − b = 7. Adding, 3a = 12, so `a = 4` and `b = 1` — and the cubic is (x − 1)(x + 2)(x + 3). All three wrong options satisfy a + b = 5, which is the point: using only the first factor leaves four answers standing, and the second condition is what decides.",
   tag:"Two factors"},

  {q:"For the cubic `x³ + px² + qx + r = 0` with roots α, β and γ, the sum `α + β + γ` is:",
   o:["p","−p","−r","q"],
   a:1,
   why:"**For x³ + px² + qx + r = 0: α + β + γ = −p, αβ + βγ + γα = q, and αβγ = −r.** The signs alternate as you go down the coefficients. Option A drops that minus — for `x³ − 6x² + 11x − 6 = 0` it would give −6 instead of the correct sum `6`. Option C is the product of the roots and option D the sum of the products in pairs.",
   tag:"Roots of a cubic"},

  {q:"If α, β and γ are the roots of `x³ − 7x² + 14x − 8 = 0`, then `αβγ` is:",
   o:["`−8`","`7`","`14`","`8`"],
   a:3,
   why:"**The product of the roots of x³ + px² + qx + r = 0 is −r.** Here r = −8, so αβγ = `8`. Option A is the constant term copied across without the change of sign, which is the standard slip. Option B is the sum of the roots, −p = `7`, and option C the sum of the products in pairs, q = `14`. The roots are in fact 1, 2 and 4, and they check against all three figures.",
   tag:"Roots of a cubic"},

  {q:"If `f(2) = 0` for a polynomial f(x), which of these is certain?",
   o:["f(x) is divisible by (x + 2)","the remainder on dividing f(x) by x is 2","f(x) has degree 2","(x − 2) is a factor of f(x)"],
   a:3,
   why:"**f(a) = 0 means precisely that (x − a) is a factor**, so f(2) = 0 makes `(x − 2)` a factor of f(x). Option A is the tempting one and needs f(−2) = 0 instead, because x + 2 vanishes at x = −2 and not at 2. Option B describes **f(0)**, the constant term, which the question says nothing about, and the degree of f(x) is not fixed by one root.",
   tag:"Factor theorem"},

  {q:"Which of these polynomials is divisible by `(x − 1)`?",
   o:["x³ + 2x² + 3x + 4","x³ − 2x² + 5x − 4","x³ + x² + x + 1","2x³ − x² + 3x − 1"],
   a:1,
   why:"**(x − 1) is a factor exactly when f(1) = 0, and f(1) is just the sum of the coefficients.** Adding up: option A gives `10`, option B gives 1 − 2 + 5 − 4 = `0`, option C gives `4`, option D gives `3`. So option B is the one. Option C is the near miss worth knowing: its coefficients sum to 4, but f(−1) = −1 + 1 − 1 + 1 = 0, so it is divisible by **(x + 1)** instead.",
   tag:"Sum of coefficients"}
 ],
  note:"Every question above is one substitution or one degree count. If you found yourself carrying out a long division, the line from the sheet that would have replaced it is the one to go back to."}
]
},

/* ============================================================ 7 — Ratio, proportion and componendo–dividendo (27 questions) */
{
id:"ratio-prop", n:"Ratio, proportion and componendo–dividendo", hy:1,
w:"The four proportionals, the four operations on a ratio equation, and the one rule — equal ratios may have their numerators and denominators added — that half of SSC's ratio questions turn on.",
quick:[
 "**a : b = c : d ⇒ ad = bc.** The product of the extremes equals the product of the means, and every proportion question reduces to this one line.",
 "**Mean proportional between a and b is √(ab)**; the **third proportional to a and b is b²/a**; the **fourth proportional to a, b and c is bc/a**. Three different formulas with three similar names.",
 "**Componendo–dividendo: a/b = c/d ⇒ (a + b)/(a − b) = (c + d)/(c − d)** — and it runs backwards just as well, which is how the questions are set.",
 "**If a/b = c/d = e/f = k then (a + c + e)/(b + d + f) = k**, and with any weights, (pa + qc + re)/(pb + qd + rf) = k.",
 "**Duplicate ratio a² : b², sub-duplicate √a : √b, triplicate a³ : b³, sub-triplicate ∛a : ∛b.** Compounded ratio of a : b and c : d is **ac : bd**.",
 "**a, b, c in continued proportion ⇒ b² = ac**, and then a : c = a² : b².",
 "**x/(y + z) = y/(z + x) = z/(x + y) ⇒ each ratio is ½**, provided x + y + z ≠ 0. The denominators add to twice what the numerators add to."
],
blocks:[
 {h:"THE SHEET — proportion, and the four operations on a ratio equation",
  cols:["Asked as","The formula","How the question uses it"],
  rows:[
  ["**a : b = c : d**","ad = bc","a and d are the *extremes*, b and c the *means*; four numbers are in proportion exactly when these two products agree"],
  ["**Fourth proportional** to a, b, c","bc/a","From a : b = c : x. Three numbers given, the fourth asked for"],
  ["**Third proportional** to a, b","b²/a","From a : b = b : x. Only two numbers given"],
  ["**Mean proportional** between a, b","√(ab)","From a : x = x : b. Geometric, never the average"],
  ["**Continued proportion** a, b, c","b² = ac","b is the mean proportional between a and c"],
  ["**a : c** when a, b, c are in continued proportion","a² : b²","Because a/c = (a/b)(b/c) = (a/b)²"],
  ["**Invertendo**","a/b = c/d ⇒ b/a = d/c","Turn both ratios upside down. The inverse ratio of a : b is b : a"],
  ["**Alternendo**","a/b = c/d ⇒ a/c = b/d","Exchange the means"],
  ["**Componendo**","a/b = c/d ⇒ (a + b)/b = (c + d)/d","Add 1 to each side"],
  ["**Dividendo**","a/b = c/d ⇒ (a − b)/b = (c − d)/d","Subtract 1 from each side"],
  ["**Componendo–dividendo**","a/b = c/d ⇒ (a + b)/(a − b) = (c + d)/(c − d)","Componendo divided by dividendo. Works in reverse: given (a + b)/(a − b) = c/d, then a/b = (c + d)/(c − d)"],
  ["**Equal ratios**","a/b = c/d = e/f = k ⇒ (a + c + e)/(b + d + f) = k","Add the tops, add the bottoms, and the value does not move"],
  ["**Equal ratios, weighted**","(pa + qc + re)/(pb + qd + rf) = k","Any weights at all, as long as each one multiplies a top and its own bottom"],
  ["**x/(y + z) = y/(z + x) = z/(x + y)**","each = ½ when x + y + z ≠ 0","Sum of tops is x + y + z, sum of bottoms is 2(x + y + z)"],
  ["**Making four numbers proportional**","solve (a − x)(d − x) = (b − x)(c − x)","\"What must be subtracted from each…\" The x² terms always cancel, leaving a linear equation"]
 ]},

 {h:"THE SHEET — naming a ratio, joining ratios, and splitting a quantity",
  cols:["Asked as","The formula","How the question uses it"],
  rows:[
  ["**Duplicate ratio** of a : b","a² : b²","Duplicate of 3 : 4 is 9 : 16 — not 6 : 8"],
  ["**Sub-duplicate ratio** of a : b","√a : √b","Sub-duplicate of 9 : 25 is 3 : 5"],
  ["**Triplicate ratio** of a : b","a³ : b³","Triplicate of 2 : 3 is 8 : 27"],
  ["**Sub-triplicate ratio** of a : b","∛a : ∛b","Sub-triplicate of 8 : 27 is 2 : 3"],
  ["**Compounded ratio** of a : b and c : d","ac : bd","Multiply across. Any number of ratios compound the same way"],
  ["**Joining a : b = p : q to b : c = r : s**","a : b : c = pr : qr : qs","Make b agree in both: multiply the first pair by r and the second by q"],
  ["**A/p = B/q = C/r**","A : B : C = p : q : r","Set each equal to k, so A = pk, B = qk, C = rk"],
  ["**pA = qB = rC**","A : B : C = 1/p : 1/q : 1/r","Set each equal to the LCM of p, q, r. The bigger the coefficient, the smaller the quantity"],
  ["**Splitting N in the ratio a : b : c**","first share = N × a/(a + b + c)","a + b + c is the number of parts; N ÷ (a + b + c) is one part"],
  ["**The ratio after each part is changed**","(ax + m)/(bx + m) = the new ratio","Write the two quantities as ax and bx — never as a and b — then solve for x"],
  ["**(a + b) : (b + c) : (c + a) given**","the three parts add to 2(a + b + c)","Halve that total, then a = total − (b + c), and so on"]
 ],
  note:"Every formula on both sheets is tested by at least one question below."},

 {careful:"**The duplicate ratio of 3 : 4 is 9 : 16, not 6 : 8.** \"Duplicate\" means squared, not doubled — and doubling both terms would leave the ratio unchanged anyway, because 6 : 8 *is* 3 : 4. The same word trap runs the other way: **sub-duplicate** is the square root, **triplicate** the cube, **sub-triplicate** the cube root, and the four are offered against each other in nearly every question that uses the names."},

 {careful:"Adding the tops to the tops and the bottoms to the bottoms is allowed **only when the ratios are already equal.** If a/b = c/d = k then (a + c)/(b + d) = k. If a/b and c/d are different, (a + c)/(b + d) is not either of them — 1/2 and 3/4 give 4/6, which is neither. This is the rule the topic lives on and the rule most often used where it does not apply."},

 {careful:"Componendo–dividendo answers in terms of **whatever actually sits above and below the line.** Given (3x + 2y)/(3x − 2y) = 11/7, the rule returns `3x/2y`, not x/y — the coefficients still have to be divided out afterwards. The option showing `9 : 2` instead of `3 : 1` is the answer one step early, and it is always on the paper. Separately: the **mean** in \"mean proportional\" is √(ab), the geometric mean, never the average (a + b)/2."},

 {h:"QUESTIONS — proportion and the four proportionals",
  mcq:[
  {q:"If `a : b = c : d`, then:",
   o:["a + d = b + c","ad = bc","ac = bd","ab = cd"],
   a:1,
   why:"**In a : b = c : d the product of the extremes equals the product of the means: ad = bc.** a and d are the extremes, b and c the means, and this single line is what every proportion question is solved with. Option C pairs the two first terms against the two second terms, which is what **alternendo** gives as a *ratio*, a/c = b/d, but never as a product.",
   tag:"Proportion"},

  {q:"The fourth proportional to `a`, `b` and `c` is:",
   o:["√(ab)","b²/a","bc/a","ac/b"],
   a:2,
   why:"**The fourth proportional comes from a : b = c : x, so ax = bc and x = bc/a.** Option B, `b²/a`, is the **third proportional to a and b**, which uses only two of the three numbers given; option A is the **mean proportional** √(ab). Option D has a and b the wrong way round — it is what b : a = c : x would give.",
   tag:"Fourth prop."},

  {q:"The mean proportional between `4` and `25` is:",
   o:["10","14.5","100","29"],
   a:0,
   why:"**The mean proportional between a and b is √(ab)**, from a : x = x : b, so here √(4 × 25) = √100 = `10`. Option B is the arithmetic mean (4 + 25)/2 = 14.5, and it is the standard trap, because the word \"mean\" is read as average — the mean proportional is the *geometric* mean. Option C is the product left un-rooted and option D is the sum.",
   tag:"Mean prop."},

  {q:"The third proportional to `4` and `8` is:",
   o:["2","12","32","16"],
   a:3,
   why:"**The third proportional to a and b is b²/a**, from a : b = b : x, so here 8²/4 = `16` and 4 : 8 = 8 : 16. Option A is a²/b, the same formula with a and b swapped. Option B continues 4, 8 as an arithmetic progression — but a continued proportion is geometric, not arithmetic — and option C is simply the product ab.",
   tag:"Third prop."},

  {q:"If `4`, `x` and `9` are in continued proportion, then x is:",
   o:["6.5","6","36","13"],
   a:1,
   why:"**Three quantities are in continued proportion when the middle term satisfies b² = ac**, so x² = 4 × 9 = 36 and `x = 6`. The middle term of a continued proportion is exactly the mean proportional between the outer two. Option A is the average of 4 and 9, which is what \"middle term\" suggests and is wrong; option C is x² left un-rooted.",
   tag:"Continued prop."},

  {q:"If `a`, `b` and `c` are in continued proportion, then `a : c` equals:",
   o:["a : b","a² : c²","b² : a²","a² : b²"],
   a:3,
   why:"**a : b = b : c means a/c = (a/b) × (b/c) = (a/b)², so a : c = a² : b².** Take 4, 6, 9, which is a continued proportion because 6² = 4 × 9: then a : c = 4 : 9 and a² : b² = 16 : 36, and those are the same ratio. Option C inverts the answer; option B squares the two terms that were asked for, which gives the square of the answer rather than the answer.",
   tag:"a : c"},

  {q:"What must be subtracted from each of `10`, `12`, `19` and `24` so that the four numbers are in proportion?",
   o:["2","3","4","6"],
   a:2,
   why:"**Four numbers are in proportion when the product of the extremes equals the product of the means**, so (10 − x)(24 − x) = (12 − x)(19 − x). The x² terms cancel — they always do — leaving 240 − 34x = 228 − 31x, so 3x = 12 and `x = 4`. The numbers become 6, 8, 15, 20, and 6 : 8 = 15 : 20 = 3 : 4. Option D gives 4, 6, 13, 18, where 4 : 6 is 2 : 3 but 13 : 18 is not.",
   tag:"Make proportional"}
 ]},

 {h:"QUESTIONS — the four operations, and equal ratios",
  mcq:[
  {q:"If `a/b = c/d`, then by componendo–dividendo:",
   o:["(a + b)/(a − b) = (c + d)/(c − d)","(a + b)/b = (c + d)/d","(a − b)/(a + b) = (c + d)/(c − d)","(a + b)/(a − b) = (c − d)/(c + d)"],
   a:0,
   why:"**Componendo–dividendo: a/b = c/d ⇒ (a + b)/(a − b) = (c + d)/(c − d)** — componendo divided by dividendo. Option B is **componendo** on its own, which stops at (a + b)/b = (c + d)/d; it is the step before the end and the commonest wrong tick. Options C and D turn one side upside down and leave the other alone, which breaks the equality.",
   tag:"Componendo–div."},

  {q:"The step from `a/b = c/d` to `(a − b)/b = (c − d)/d` is called:",
   o:["componendo","invertendo","dividendo","componendo–dividendo"],
   a:2,
   why:"**Dividendo subtracts 1 from each side: a/b − 1 = c/d − 1, which is (a − b)/b = (c − d)/d.** **Componendo** adds 1 instead and gives (a + b)/b = (c + d)/d — that is option A, and the two names are routinely swapped. Doing both and dividing the first result by the second gives **componendo–dividendo, (a + b)/(a − b) = (c + d)/(c − d)**.",
   tag:"Dividendo"},

  {q:"The step from `a/b = c/d` to `a/c = b/d` is called:",
   o:["invertendo","alternendo","componendo","dividendo"],
   a:1,
   why:"**Alternendo exchanges the means: a/b = c/d ⇒ a/c = b/d.** **Invertendo** turns each ratio upside down instead, giving b/a = d/c — that is option A, and it is also what \"the inverse ratio of a : b is b : a\" means. Both follow immediately from `ad = bc`, which is why neither ever needs memorising as a separate fact.",
   tag:"Alternendo"},

  {q:"If `(x + y)/(x − y) = 5/3`, then `x : y` is:",
   o:["5 : 3","1 : 4","4 : 1","3 : 5"],
   a:2,
   why:"**Componendo–dividendo runs backwards too: (x + y)/(x − y) = 5/3 ⇒ x/y = (5 + 3)/(5 − 3) = 8/2**, so `x : y = 4 : 1`. Check it: x = 4, y = 1 gives (4 + 1)/(4 − 1) = 5/3. Option B is the same operation with the sum and the difference the wrong way round, (5 − 3)/(5 + 3), and option A simply ticks the ratio that was handed to you.",
   tag:"Componendo–div."},

  {q:"If `(3x + 2y)/(3x − 2y) = 11/7`, then `x : y` is:",
   o:["3 : 1","9 : 2","2 : 9","11 : 7"],
   a:0,
   why:"**Componendo–dividendo returns whatever sits above and below the line: 3x/2y = (11 + 7)/(11 − 7) = 18/4 = 9/2.** That is 3x : 2y, so x/y = (9/2) × (2/3) = 3 and `x : y = 3 : 1`. Check: x = 3, y = 1 gives (9 + 2)/(9 − 2) = 11/7. Option B is the answer one step early — the stage 3x : 2y, with the coefficients never divided out — and it is the option most often ticked.",
   tag:"Componendo–div."},

  {q:"If `a/b = c/d = e/f = 3/4`, then `(a + c + e)/(b + d + f)` is:",
   o:["9/4","1/4","4/3","3/4"],
   a:3,
   why:"**If a/b = c/d = e/f = k then (a + c + e)/(b + d + f) = k.** Writing a = 3t, c = 3u, e = 3v and b = 4t, d = 4u, f = 4v makes the top 3(t + u + v) and the bottom 4(t + u + v), so the value is `3/4` again. Option A adds the three numerators of the ratio, 3 + 3 + 3, while keeping a single denominator, which is the standard slip; option C is the answer inverted.",
   tag:"Equal ratios"},

  {q:"If `a/b = c/d = e/f = 2/5`, then `(3a + 4c + 5e)/(3b + 4d + 5f)` is:",
   o:["2/5","12/5","5/2","2/15"],
   a:0,
   why:"**The rule survives any weights: a/b = c/d = e/f = k ⇒ (pa + qc + re)/(pb + qd + rf) = k**, because each weight multiplies a numerator and its own denominator alike and then cancels. The value is `2/5`. Option B carries the weights 3 + 4 + 5 = 12 into the top of the answer, which is precisely what the rule says cannot happen.",
   tag:"Weighted sum"},

  {q:"If `A/3 = B/4 = C/7`, then `(A + B + C) : C` is:",
   o:["7 : 14","3 : 7","2 : 1","14 : 3"],
   a:2,
   why:"**Set A/3 = B/4 = C/7 = k, so A = 3k, B = 4k and C = 7k** — this is the step that makes every such question one line. Then A + B + C = 14k against C = 7k, so the ratio is 14k : 7k = `2 : 1`. Option A is that same pair the wrong way round, and option D keeps the 14 against the first denominator, 3, instead of against C.",
   tag:"A/p = B/q"},

  {q:"If `x/(y + z) = y/(z + x) = z/(x + y)` and `x + y + z ≠ 0`, then each ratio equals:",
   o:["1","½","2","⅓"],
   a:1,
   why:"**When several ratios are equal, the sum of the numerators over the sum of the denominators has the same value.** The numerators add to x + y + z; each of x, y and z appears in two of the three denominators, so the denominators add to 2(x + y + z). The value is therefore `½`. Option D is the trap — there are three ratios, but the total below is twice the total above, not three times it.",
   tag:"Each = ½"},

  {q:"If `a/b = c/d`, which of these is **not** generally true?",
   o:["(a + c)/(b + d) = a/b","(a + b)/(a − b) = (c + d)/(c − d)","(a + b)/(c + d) = a/c","(a + c)/(b + d) = (a + b)/(c + d)"],
   a:3,
   why:"Put a/b = c/d = k, so a = kb and c = kd. Then **(a + c)/(b + d) = k**, which is option A and the rule this whole topic rests on; option B is componendo–dividendo; and option C works out to b/d on both sides. Option D sets `k` against `b/d`, and those agree only by accident — **numerator sums may be set against denominator sums, but never against a sum of a different kind.**",
   tag:"The one that fails"}
 ]},

 {h:"QUESTIONS — naming ratios, joining them, and splitting a quantity",
  mcq:[
  {q:"The duplicate ratio of `3 : 4` is:",
   o:["6 : 8","√3 : 2","9 : 16","27 : 64"],
   a:2,
   why:"**The duplicate ratio of a : b is a² : b²**, so the duplicate ratio of 3 : 4 is `9 : 16`. Option A doubles each term, which is how the word \"duplicate\" is usually misread — and doubling changes nothing, since 6 : 8 is 3 : 4 again. Option B is the **sub-duplicate** ratio √3 : √4 and option D is the **triplicate** ratio 3³ : 4³.",
   tag:"Duplicate"},

  {q:"The sub-duplicate ratio of `9 : 25` is:",
   o:["81 : 625","5 : 3","4.5 : 12.5","3 : 5"],
   a:3,
   why:"**The sub-duplicate ratio of a : b is √a : √b**, so for 9 : 25 it is `3 : 5`. Option A is the **duplicate** ratio a² : b², 81 : 625, and swapping those two names is the whole point of the question. Option C halves both terms, which leaves the ratio exactly where it was at 9 : 25.",
   tag:"Sub-duplicate"},

  {q:"The sub-triplicate ratio of `8 : 27` is:",
   o:["2 : 3","4 : 9","3 : 2","512 : 19683"],
   a:0,
   why:"**The sub-triplicate ratio of a : b is ∛a : ∛b**, so for 8 : 27 it is `2 : 3`. Option D is the **triplicate** ratio a³ : b³. Option B is 2² : 3², the duplicate of the correct answer — what comes out if the cube root is taken and the terms are then squared as well.",
   tag:"Sub-triplicate"},

  {q:"The ratio compounded of `2 : 3` and `4 : 5` is:",
   o:["6 : 8","8 : 15","15 : 8","2 : 15"],
   a:1,
   why:"**The compounded ratio of a : b and c : d is ac : bd**, so 2 : 3 compounded with 4 : 5 is `8 : 15`. Option A adds term by term, which is not a ratio operation at all; option C inverts the answer. Any number of ratios compound the same way — 2 : 3, 4 : 5 and 5 : 6 compound to 40 : 90, which is 4 : 9.",
   tag:"Compounded"},

  {q:"If `a : b = 2 : 3` and `b : c = 4 : 5`, then `a : b : c` is:",
   o:["2 : 3 : 5","8 : 12 : 15","8 : 12 : 20","2 : 4 : 5"],
   a:1,
   why:"**To join a : b = p : q to b : c = r : s, make b agree in both: a : b : c = pr : qr : qs.** Multiply the first pair by 4 and the second by 3, giving a : b = 8 : 12 and b : c = 12 : 15, so a : b : c = `8 : 12 : 15`. Option A strings the given numbers together, which is only right when the two values of b already match. Option C scales b : c by 4 instead of 3 and then reads c off the mis-scaled pair.",
   tag:"Joining ratios"},

  {q:"If `a : b = 3 : 4` and `b : c = 8 : 9`, then `a : c` is:",
   o:["27 : 32","2 : 3","3 : 4","8 : 9"],
   a:1,
   why:"**a/c = (a/b) × (b/c) = (3/4) × (8/9) = 24/36**, so a : c = `2 : 3`. Joined in full, a : b : c = 6 : 8 : 9, which gives the same thing. Option A multiplies across the wrong diagonals, 3 × 9 against 4 × 8, and is the standard slip; options C and D just tick one of the two ratios that were given.",
   tag:"a : c"},

  {q:"If `2A = 3B = 4C`, then `A : B : C` is:",
   o:["2 : 3 : 4","4 : 3 : 2","3 : 4 : 6","6 : 4 : 3"],
   a:3,
   why:"**When pA = qB = rC, set each product equal to the LCM of p, q and r** — here 12, giving A = 6, B = 4, C = 3, so A : B : C = `6 : 4 : 3`. Equivalently A : B : C = 1/2 : 1/3 : 1/4. Option A ticks the coefficients themselves and is the commonest error in the whole chapter: the larger the coefficient, the *smaller* the quantity it multiplies.",
   tag:"pA = qB = rC"},

  {q:"A sum is divided among three people in the ratio `3 : 5 : 7` and the largest share is `₹1,400`. The total sum is:",
   o:["₹4,200","₹1,600","₹7,000","₹3,000"],
   a:3,
   why:"**A quantity N split in the ratio a : b : c gives the shares N × a/(a + b + c) and so on, so one part is N ÷ (a + b + c).** Run backwards: 7 parts = ₹1,400 makes one part ₹200, and the total is 15 parts = `₹3,000`. Option B is the other two shares added, ₹600 + ₹1,000 — the answer one step early. Option A divides ₹1,400 by 5 and is the trap for reading the middle term as the largest.",
   tag:"Splitting a sum"},

  {q:"Two numbers are in the ratio `3 : 5`. If `9` is added to each, the ratio becomes `2 : 3`. The smaller number is:",
   o:["45","18","27","9"],
   a:2,
   why:"**Write the two numbers as 3x and 5x — never as 3 and 5 — and put the new ratio into an equation: (3x + 9)/(5x + 9) = 2/3.** Cross-multiplying gives 9x + 27 = 10x + 18, so x = 9 and the numbers are `27` and 45. Option A is the larger number, which answers the other half of the question; option D is x itself, left as the answer.",
   tag:"Ratio changed"},

  {q:"If `(a + b) : (b + c) : (c + a) = 3 : 5 : 4`, then `a : b : c` is:",
   o:["1 : 2 : 3","3 : 5 : 4","3 : 2 : 1","2 : 3 : 1"],
   a:0,
   why:"**The three given sums between them count every letter twice: (a + b) + (b + c) + (c + a) = 2(a + b + c).** The parts total 3 + 5 + 4 = 12, so a + b + c = 6; then a = 6 − (b + c) = 6 − 5 = 1, b = 6 − 4 = 2 and c = 6 − 3 = 3, giving `1 : 2 : 3`. Option C is that answer reversed, which is what subtracting the parts in the order given produces instead of matching each letter to the pair that leaves it out.",
   tag:"(a+b):(b+c):(c+a)"}
 ],
  note:"Every question here is answered by one line from the two sheets above. If a question needed more than about thirty seconds of writing, the line it uses is the line to go back to."}
]
},

/* ============================================================ 8 — Maximum and minimum values (26 questions) */
{
id:"algebra-maxmin", n:"Maximum and minimum values",
w:"The greatest and least value of a quadratic, of x + 1/x, of bx + a/x and of a sum of moduli — and the one line of AM ≥ GM that produces most of them.",
quick:[
 "**For ax² + bx + c the turning point is at x = −b/2a and the value there is (4ac − b²)/4a.** It is the least value when a is positive and the greatest value when a is negative — the formula does not change, only the word does.",
 "**a(x − h)² + k has least value k when a is positive and greatest value k when a is negative, both at x = h.** Completing the square is how every quadratic is put into that shape.",
 "**x + 1/x ≥ 2 for x > 0**, and **x + 1/x ≤ −2 for x < 0**. Equality at x = 1 and x = −1. Over all real x there is no least value at all.",
 "**AM ≥ GM: (a + b)/2 ≥ √(ab)** for positive a and b, with equality only when a = b. So a **fixed sum** s gives the largest product when the parts are equal, and that product is **(s/2)²**; a **fixed product** p gives the smallest sum when the parts are equal, and that sum is **2√p**.",
 "**bx + a/x ≥ 2√(ab) for x > 0**, reached at x = √(a/b), where the two terms are equal. With a = b = 1 this is x + 1/x ≥ 2.",
 "**|x − a| + |x − b| has least value |a − b|**, and reaches it at every x between a and b — not at one point.",
 "Put **t = x² − 5x + 5** and **(x − 1)(x − 2)(x − 3)(x − 4) becomes t² − 1**, whose least value is `−1`, reached because x² − 5x + 5 = 0 has real roots."
],
blocks:[
 {h:"THE SHEET — every greatest and least value SSC asks for",
  cols:["Asked as","The greatest or least value","Where it happens, and the catch"],
  rows:[
  ["**ax² + bx + c, a > 0**","Least value **(4ac − b²)/4a**","At x = −b/2a. There is no greatest value — the curve opens upward and grows without limit"],
  ["**ax² + bx + c, a < 0**","Greatest value **(4ac − b²)/4a**","Same formula, same place x = −b/2a. Now there is no least value"],
  ["**The same, using D = b² − 4ac**","**−D/4a**","(4ac − b²)/4a and −D/4a are the same number. Writing D/4a instead gets the sign wrong"],
  ["**Completing the square**","x² + px + q = **(x + p/2)² + (q − p²/4)**","Half the coefficient of x goes inside the bracket; the square of that half is taken back out"],
  ["**a(x − h)² + k**","k, least if a > 0 and greatest if a < 0","At x = h, because (x − h)² is never negative and is zero only there"],
  ["**1/f(x) with f(x) > 0**","Greatest when f(x) is least","So minimise the denominator first, then take the reciprocal — the reciprocal is the answer, not the minimum"],
  ["**(x − a)² + (x − b)²**","Least value **(a − b)²/2**","At x = (a + b)/2, the midpoint. Not zero — the two squares cannot vanish at the same x"],
  ["**x + 1/x, x > 0**","Least value **2**","At x = 1, by AM ≥ GM on x and 1/x"],
  ["**x + 1/x, x < 0**","Greatest value **−2**","At x = −1. Put x = −y with y > 0 and the first line gives it"],
  ["**x² + 1/x²**","Least value **2**","At x = 1 and at x = −1 — both signs work here, unlike x + 1/x"],
  ["**bx + a/x, x > 0**","Least value **2√(ab)**","At x = √(a/b), where bx and a/x are equal. Their product is ab for every x, which is why AM ≥ GM applies"],
  ["**(a + b)/2 and √(ab)**","**(a + b)/2 ≥ √(ab)**","Equality only when a = b, because (a + b)/2 − √(ab) = (√a − √b)²/2"],
  ["**Product, with the sum fixed at s**","Greatest value **(s/2)²**","Both parts equal to s/2. Sum `20` gives product at most `100`"],
  ["**Sum, with the product fixed at p**","Least value **2√p**","Both parts equal to √p. Product `36` gives sum at least `12`"],
  ["**(x − 1)(x − 2)(x − 3)(x − 4)**","Least value **−1**","Pair outer with outer and inner with inner, put t = x² − 5x + 5, and it becomes t² − 1"],
  ["**|x − a| + |x − b|**","Least value **|a − b|**","At every x between a and b. Outside that stretch the sum is |a − b| plus twice the overshoot"]
 ],
  note:"Every question below is answered by one line of this table."},

 {careful:"**(4ac − b²)/4a is the value; −b/2a is the place.** A question that asks for the minimum *value* and a question that asks for the *value of x* at which it occurs have different answers, and both answers are always among the four options. Read which one is being asked before working anything out. The same pair is offered as a trap for `bx + a/x`, where the least value is `2√(ab)` but the place is `x = √(a/b)`."},

 {careful:"**x + 1/x ≥ 2 holds only for x > 0.** AM ≥ GM needs both terms positive, and for x < 0 the expression is at most `−2` instead. So over all real x the expression has neither a greatest nor a least value — a question that says only *x is real* has a different answer from one that says *x is positive*."},

 {careful:"**A sum of two squares is not least when either square is zero.** `(x − 1)² + (x − 5)²` cannot have both brackets zero at once, and its least value is `(5 − 1)²/2 = 8` at the midpoint x = 3, not `0`. A sum of two *moduli* behaves differently: `|x − 1| + |x − 5|` does reach `|5 − 1| = 4`, and reaches it at every x from 1 to 5."},

 {h:"QUESTIONS — quadratics first, then AM ≥ GM, then the standard shapes",
  mcq:[
  {q:"For `a > 0`, the minimum value of `ax² + bx + c` is:",
   o:["−b/2a","(4ac − b²)/4a","(b² − 4ac)/4a","(4ac − b²)/2a"],
   a:1,
   why:"**The minimum of ax² + bx + c with a > 0 is (4ac − b²)/4a, and it occurs at x = −b/2a.** Option A is that place, not the value — the commonest mis-tick in the whole topic. Option C is `D/4a` with the sign the wrong way round: the minimum is `−D/4a`, where D = b² − 4ac. Option D halves the denominator instead of taking a quarter.",
   tag:"Quadratic min"},

  {q:"The turning point of `y = ax² + bx + c` is at:",
   o:["(−b/2a, (4ac − b²)/4a)","(−b/2a, (b² − 4ac)/4a)","(b/2a, (4ac − b²)/4a)","(−b/2a, c)"],
   a:0,
   why:"Completing the square gives **y = a(x + b/2a)² + (4ac − b²)/4a**, so the turning point is **(−b/2a, (4ac − b²)/4a)**. Option B flips the sign of the second coordinate, which is the single most offered wrong answer. Option D puts `c` there, which is only the value at x = 0, not at the turning point.",
   tag:"Turning point"},

  {q:"Completing the square writes `x² − 6x + 11` as:",
   o:["(x − 6)² − 25","(x − 3)² − 2","(x − 3)² + 2","(x + 3)² + 2"],
   a:2,
   why:"**x² + px + q = (x + p/2)² + (q − p²/4)**, so half of `−6` is `−3` and (x − 3)² = x² − 6x + 9 — two short of 11, so `+2` is added back: **(x − 3)² + 2**, giving a least value of `2` at x = 3. Option B subtracts the leftover instead of adding it; option A uses the whole coefficient instead of half of it.",
   tag:"Completing square"},

  {q:"The minimum value of `x² + 8x + 20` is:",
   o:["−4","20","16","4"],
   a:3,
   why:"**(4ac − b²)/4a** = (4 × 1 × 20 − 8²)/4 = (80 − 64)/4 = `4`, or by completing the square (x + 4)² + 4. Option A, `−4`, is the value of x at which it happens; option B is the constant term, which is only the value at x = 0; option C is the `16` that is taken out and never put back.",
   tag:"Quadratic min"},

  {q:"The expression `2x² − 12x + 7` is least when x equals:",
   o:["−3","3","6","−11"],
   a:1,
   why:"**The turning point is at x = −b/2a** = 12/4 = `3`. Option D, `−11`, is the least *value* — put x = 3 and 18 − 36 + 7 = −11 — and it is the trap for anyone who reads past the words *when x equals*. Option C is −b/a, with the 2 left out of the denominator.",
   tag:"Where the min is"},

  {q:"The greatest value of `3 + 2x − x²` is:",
   o:["1","3","4","−4"],
   a:2,
   why:"Here a = −1, which is negative, so **(4ac − b²)/4a is the maximum**: (4 × (−1) × 3 − 2²)/(4 × (−1)) = (−16)/(−4) = `4`, at x = −b/2a = −2/(−2) = 1. Option A is that place; option B is the constant term. Option D is the same magnitude with the sign of the division mishandled.",
   tag:"Quadratic max"},

  {q:"The greatest value of `7 − (x − 3)²` is:",
   o:["7","3","4","0"],
   a:0,
   why:"**a(x − h)² + k has greatest value k at x = h when a is negative.** Here (x − 3)² is never negative, so subtracting it can only pull 7 down; it is zero at x = 3, leaving `7`. Option B is the place x = 3, and option D is the least value of the square itself rather than of the whole expression.",
   tag:"a(x−h)²+k"},

  {q:"The least value of `4x² − 4x + 5` is:",
   o:["1/2","5","−4","4"],
   a:3,
   why:"**(4ac − b²)/4a** = (4 × 4 × 5 − 16)/16 = 64/16 = `4`, at x = −b/2a = 4/8 = 1/2, where 4(¼) − 4(½) + 5 = 4. Option A is that place; option B is the value at x = 0, which is where a reader who does not use the formula tends to look.",
   tag:"Quadratic min"},

  {q:"The expression `2x² + 4x + 5` has:",
   o:["a greatest value of `3` and no least value","neither a greatest nor a least value","a least value of `3` and no greatest value","both a least and a greatest value"],
   a:2,
   why:"a = 2 is positive, so the curve opens upward: it has a **least value (4ac − b²)/4a** = (40 − 16)/8 = `3` at x = −1, and it grows without limit, so there is no greatest value. Option A states the correct number with the two words swapped, which is the whole point of the question.",
   tag:"Which one exists"},

  {q:"`ax² + bx + c` has a greatest value and no least value when:",
   o:["a < 0","a > 0","b < 0","c < 0"],
   a:0,
   why:"The sign of **a** alone decides it: with a negative the curve opens downward, so **(4ac − b²)/4a at x = −b/2a is the maximum** and the expression falls away without limit on both sides. Option B is the opposite case and gives a minimum. The signs of b and c move the turning point but never decide which kind it is.",
   tag:"Sign of a"},

  {q:"The maximum value of `1/(x² − 4x + 7)` for real x is:",
   o:["3","1/7","1/4","1/3"],
   a:3,
   why:"A fraction with a positive denominator is largest when that denominator is least. **The least value of x² − 4x + 7 is (4 × 7 − 16)/4 = 3**, at x = 2, so the maximum of the fraction is `1/3`. Option A is the denominator's minimum left un-reciprocated — the standard slip here. Option B is the value at x = 0.",
   tag:"Reciprocal"},

  {q:"The least value of `(x − 1)² + (x − 5)²` is:",
   o:["16","8","0","4"],
   a:1,
   why:"**(x − a)² + (x − b)² is least at the midpoint x = (a + b)/2, and its least value is (a − b)²/2.** Here x = 3 gives 2² + (−2)² = `8`. Option C is the trap — each square can be made zero, but not by the same x. Option A is the gap squared without the halving, and option D is the gap itself.",
   tag:"Sum of squares"},

  {q:"The least value of `x + 1/x` when x is positive, and its greatest value when x is negative, are respectively:",
   o:["`−2` and `2`","`2` and `0`","`2` and `−2`","`0` and `−2`"],
   a:2,
   why:"**x + 1/x ≥ 2 for x > 0**, from AM ≥ GM on x and 1/x whose product is 1, with equality at x = 1; and **x + 1/x ≤ −2 for x < 0**, with equality at x = −1, which follows by putting x = −y so that x + 1/x = −(y + 1/y). Option A has the two the wrong way round, which is the standard mis-tick. Nothing between −2 and 2 is ever reached, so the `0` in options B and D is a value the expression never takes.",
   tag:"x + 1/x"},

  {q:"`(x − a)² + (x − b)²` takes its least value at x equal to:",
   o:["(a + b)/2","√(ab)","a − b","(a − b)/2"],
   a:0,
   why:"Expanded it is 2x² − 2(a + b)x + (a² + b²), and the turning point of a quadratic sits at minus the x-coefficient over twice the x² coefficient — here 2(a + b)/4, so **x = (a + b)/2**, the midpoint of a and b. The least value there is **(a − b)²/2**. Option D is half the gap rather than the midpoint, and option B is the geometric mean, which belongs to AM ≥ GM and not to this shape at all.",
   tag:"Sum of squares"},

  {q:"`x + 1/x ≥ 2` is true only when:",
   o:["x is real","x ≠ 0","x ≥ 1","x > 0"],
   a:3,
   why:"**AM ≥ GM needs both terms non-negative, so x + 1/x ≥ 2 holds only for x > 0**; for x < 0 the expression is at most `−2`. Option B is the tempting one — x ≠ 0 only keeps the expression defined, and x = −1 satisfies it while giving −2. Option C is far stronger than needed, since x = ½ already gives 2½.",
   tag:"The condition"},

  {q:"For a non-zero real number x, the smallest value that `x² + 1/x²` can take is:",
   o:["1","2","4","0"],
   a:1,
   why:"**x² + 1/x² ≥ 2**, by AM ≥ GM on x² and 1/x² whose product is 1; equality at x = 1 and at x = −1, so both signs work here, unlike x + 1/x. Option C is what a reader gets from **x² + 1/x² = (x + 1/x)² − 2** when the `− 2` is forgotten, and it is the option most often ticked.",
   tag:"x² + 1/x²"},

  {q:"For `x > 0`, the least value of `bx + a/x` is:",
   o:["2√(ab)","√(ab)","2ab","a + b"],
   a:0,
   why:"The product of the two terms is `bx × a/x = ab` for every x, so AM ≥ GM gives (bx + a/x)/2 ≥ √(ab), that is **bx + a/x ≥ 2√(ab)**, reached at x = √(a/b). Option B is the geometric mean itself, with the doubling forgotten — the commonest slip. Option C squares where the formula roots.",
   tag:"bx + a/x"},

  {q:"In **(a + b)/2 ≥ √(ab)** for positive a and b, equality holds only when:",
   o:["ab = 1","a + b = 2","a = b","a = b = 1"],
   a:2,
   why:"**(a + b)/2 − √(ab) = (√a − √b)²/2**, which is a square and so is zero only when √a = √b, that is when **a = b** — whatever the two numbers are. This is the arithmetic mean and geometric mean inequality, **AM ≥ GM**. Option D is the trap: it is one case of a = b, not the condition, and a = b = 7 gives equality just as well. Option A only forces the product to 1, and a = 4 with b = ¼ then gives AM 2⅛ against GM 1.",
   tag:"AM ≥ GM"},

  {q:"Two positive numbers add up to `20`. Their product can be at most:",
   o:["20","40","400","100"],
   a:3,
   why:"**AM ≥ GM gives √(ab) ≤ (a + b)/2 = 10, so ab ≤ 100** — a product with a fixed sum s is largest when the parts are equal, and the largest product is **(s/2)²**. Here that is 10 × 10 = `100`. Option C is the sum squared, `20²`, which is four times too big; option B is the sum doubled.",
   tag:"Fixed sum"},

  {q:"The product of two positive numbers is `36`. Their sum is at least:",
   o:["6","12","18","36"],
   a:1,
   why:"**(a + b)/2 ≥ √(ab) = √36 = 6, so a + b ≥ 12** — a sum with a fixed product p is smallest when the parts are equal, and the smallest sum is **2√p**. Here that is 6 + 6 = `12`. Option A is the geometric mean itself, left undoubled, and it is the one most often ticked.",
   tag:"Fixed product"},

  {q:"The greatest value of `x(10 − x)` is:",
   o:["5","10","25","100"],
   a:2,
   why:"The two factors always add to `10`, so by **AM ≥ GM the product is largest when they are equal**: 5 × 5 = `25`. By the other route, 10x − x² has a = −1 and **(4ac − b²)/4a** = (0 − 100)/(−4) = 25. Option A is the value of x at which it happens; option D is 10², the square of the fixed sum.",
   tag:"Fixed sum"},

  {q:"For `x > 0`, the least value of `9x + 4/x` is:",
   o:["12","6","36","13"],
   a:0,
   why:"**bx + a/x ≥ 2√(ab)** with b = 9 and a = 4: 2√(9 × 4) = 2 × 6 = `12`, reached at x = √(4/9) = 2/3, where both terms equal 6. Option B is √(ab) without the 2; option C is `ab` itself, un-rooted; option D is simply 9 + 4, which the formula never asks for.",
   tag:"bx + a/x"},

  {q:"For `x > 0`, the expression `bx + a/x` takes its least value at x equal to:",
   o:["√(ab)","√(a/b)","√(b/a)","2√(ab)"],
   a:1,
   why:"At the minimum the two terms are equal: bx = a/x gives x² = a/b, so **x = √(a/b)**, and the value there is **2√(ab)**. Option D is that value, not the place, and it is the trap built into every question of this kind. Option C inverts the fraction, which is where the minimum of a/x + bx·(reversed roles) would sit.",
   tag:"Where the min is"},

  {q:"The least value of `(x − 1)(x − 2)(x − 3)(x − 4)` is:",
   o:["0","24","1","−1"],
   a:3,
   why:"Pair the outer brackets and the inner brackets: (x − 1)(x − 4) = x² − 5x + 4 and (x − 2)(x − 3) = x² − 5x + 6. With **t = x² − 5x + 5** the product becomes **(t − 1)(t + 1) = t² − 1**, whose least value is `−1` at t = 0 — and x² − 5x + 5 = 0 has the real roots (5 ± √5)/2, so the value is actually reached. Option A is the trap: the expression is zero at x = 1, 2, 3 and 4, which makes `0` look like the floor, but between 1 and 2 it dips to −1.",
   tag:"t² − 1"},

  {q:"The least value of `|x − 3| + |x − 8|` is:",
   o:["0","3","5","11"],
   a:2,
   why:"**|x − a| + |x − b| has least value |a − b|**, because for any x between a and b the two distances add to exactly the gap between them. Here |8 − 3| = `5`. Option A is the trap — each modulus can be made zero, but not by the same x. Option D adds 3 and 8 instead of subtracting them.",
   tag:"Sum of moduli"},

  {q:"`|x − 3| + |x − 8|` takes its least value at:",
   o:["x = 3 only","x = 11/2 only","x = 8 only","every x from `3` to `8`"],
   a:3,
   why:"**|x − a| + |x − b| equals |a − b| for every x between a and b**, so the least value `5` is reached on a whole stretch, not at one point; outside that stretch the sum is 5 plus twice the overshoot. Option B names the midpoint, which is the answer for a sum of **squares** — `(x − 3)² + (x − 8)²` is least at x = 11/2 and nowhere else. A sum of moduli has an interval of minimising points, a sum of squares has one.",
   tag:"Sum of moduli"}
 ],
  note:"If a question gave you the right number against the wrong word — the place instead of the value, or the maximum instead of the minimum — the fix is the first Careful box, not more practice."}
]
},

/* ============================================================ 9 — Linear equations and their graphs (26 questions) */
{
id:"lineareq", n:"Linear equations and their graphs",
w:"When a pair of equations has one solution, none, or infinitely many — and the picture each case makes on the axes, with intercepts, slope and the triangle a line cuts off.",
quick:[
 "For `a₁x + b₁y + c₁ = 0` and `a₂x + b₂y + c₂ = 0`: **a₁/a₂ ≠ b₁/b₂** is one solution, the lines cross. Consistent and independent.",
 "**a₁/a₂ = b₁/b₂ ≠ c₁/c₂** is no solution, the lines are parallel — *inconsistent*. **a₁/a₂ = b₁/b₂ = c₁/c₂** is infinitely many, the lines coincide — *consistent and dependent*. The third ratio is the only thing separating the two.",
 "For `ax + by = c`: the **x-intercept is c/a** and the **y-intercept is c/b**. Put y = 0 for one and x = 0 for the other.",
 "**Area of the triangle a line cuts off with the two axes = ½ × |x-intercept × y-intercept| = ½|c²/(ab)|.**",
 "**Slope of ax + by = c is −a/b**, and in **y = mx + c** the `m` is the slope and the `c` is the y-intercept. Equal slopes with unequal intercepts means parallel.",
 "`x = k` is vertical (parallel to the y-axis), `y = k` is horizontal (parallel to the x-axis), and `ax + by = 0` — the case c = 0 — passes through the origin.",
 "Given `x + y`, `y + z` and `z + x`, adding all three gives **2(x + y + z)**. That one line is the whole method for three equations in three unknowns of that shape."
],
blocks:[
 {h:"THE SHEET — every condition and every formula the topic tests",
  cols:["Asked as","The condition or formula","What it means on the graph"],
  rows:[
  ["**One solution**","a₁/a₂ ≠ b₁/b₂","The lines cross at one point. Called *consistent and independent*"],
  ["**No solution**","a₁/a₂ = b₁/b₂ ≠ c₁/c₂","The lines are parallel and never meet. Called *inconsistent*"],
  ["**Infinitely many solutions**","a₁/a₂ = b₁/b₂ = c₁/c₂","One line drawn twice. Called *consistent and dependent*"],
  ["**a₁/a₂ = b₁/b₂ cross-multiplied**","a₁b₂ = a₂b₁","The test for *not* having a unique solution — it does not say which of the other two cases holds"],
  ["**x-intercept of ax + by = c**","c/a, at the point (c/a, 0)","Where the line crosses the x-axis. Set y = 0"],
  ["**y-intercept of ax + by = c**","c/b, at the point (0, c/b)","Where the line crosses the y-axis. Set x = 0"],
  ["**Intercept form**","x/a + y/b = 1","Here `a` is the x-intercept and `b` the y-intercept, read straight off"],
  ["**Area cut off with the axes**","½ × |x-intercept × y-intercept| = ½|c²/(ab)|","A right-angled triangle with the origin as its right angle. The modulus matters"],
  ["**Slope of ax + by = c**","−a/b","Negative slope falls from left to right, positive slope rises"],
  ["**y = mx + c**","`m` is the slope, `c` is the y-intercept","The form to rearrange into whenever a slope is wanted"],
  ["**Parallel lines**","m₁ = m₂ with c₁ ≠ c₂","Same slope, different y-intercept — the graph picture of *no solution*"],
  ["**x = k and y = k**","x = k is vertical, y = k is horizontal","The axes themselves are the lines x = 0 and y = 0"],
  ["**Line through the origin**","c = 0 in ax + by = c","(0, 0) satisfies the equation, so both intercepts are zero"],
  ["**Elimination**","Add or subtract the two equations to kill one unknown","Multiply one equation first if the coefficients do not match"],
  ["**Substitution**","Write one unknown in terms of the other and put it in","Quickest when one equation already reads x = … or y = …"],
  ["**x + y, y + z, z + x given**","Their sum is 2(x + y + z)","Each unknown is then the total minus the pair that leaves it out"],
  ["**A two-digit number**","10t + u; reversed it is 10u + t","Their difference is 9(t − u) and their sum is 11(t + u)"]
 ]},

 {careful:"Both the parallel case and the coincident case have **a₁/a₂ = b₁/b₂**. The only thing that tells them apart is the third ratio: **c₁/c₂ equal as well means one line (infinitely many solutions), c₁/c₂ different means parallel (no solution).** Before taking any ratio, put both equations in the same form — all terms on the left, or all constants on the right — because a constant left on the wrong side flips the sign of c and the ratio with it."},

 {careful:"The x-intercept of `ax + by = c` is **c/a**, not c/b, and it is the point `(c/a, 0)` — the number goes on the x-axis. Writing the right number against the wrong axis is the commonest intercept mistake, and both wrong forms are always offered as options."},

 {careful:"The triangle a line makes with the axes has area **½ × |x-intercept × y-intercept|**. Two things go wrong: the half is forgotten, which doubles the answer, and the modulus is forgotten, so a negative intercept is allowed to produce a negative area. An area is never negative."},

 {h:"QUESTIONS — the conditions, the graph, and solving a pair",
  mcq:[
  {q:"The pair `a₁x + b₁y + c₁ = 0` and `a₂x + b₂y + c₂ = 0` has exactly one solution when:",
   o:["a₁/a₂ = b₁/b₂ = c₁/c₂","a₁/a₂ = b₁/b₂ ≠ c₁/c₂","a₁/a₂ ≠ b₁/b₂","a₁b₂ = a₂b₁"],
   a:2,
   why:"**One solution ⇔ a₁/a₂ ≠ b₁/b₂**, and the constants play no part — the lines simply have different slopes, so they cross. Option D, `a₁b₂ = a₂b₁`, is the same statement as a₁/a₂ = b₁/b₂ cross-multiplied, so it is the condition for *not* having a unique solution — the exact opposite of what is asked, and the trap here.",
   tag:"One solution"},

  {q:"A pair of linear equations in two unknowns has **no** solution when:",
   o:["a₁/a₂ = b₁/b₂ ≠ c₁/c₂","a₁/a₂ ≠ b₁/b₂","a₁/a₂ = b₁/b₂ = c₁/c₂","a₁/a₂ ≠ b₁/b₂ ≠ c₁/c₂"],
   a:0,
   why:"**No solution ⇔ a₁/a₂ = b₁/b₂ ≠ c₁/c₂**: the two lines have the same slope but different intercepts, so they are parallel and never meet. Option C is the coincident case, which has *infinitely many* solutions rather than none — the two share the first two ratios and are told apart only by c₁/c₂.",
   tag:"No solution"},

  {q:"A pair of linear equations has infinitely many solutions when:",
   o:["a₁/a₂ ≠ b₁/b₂","a₁/a₂ = b₁/b₂ ≠ c₁/c₂","a₁ = a₂ and b₁ = b₂","a₁/a₂ = b₁/b₂ = c₁/c₂"],
   a:3,
   why:"**Infinitely many solutions ⇔ a₁/a₂ = b₁/b₂ = c₁/c₂** — all three ratios equal, so one equation is a multiple of the other and the graphs are the same line. Option C is the tempting one, and it fails in both directions: equal coefficients are not enough, since `2x + 3y = 5` and `2x + 3y = 7` have the same coefficients and no solution at all, and they are not needed either, since `2x + 3y = 5` and `4x + 6y = 10` have infinitely many solutions with no coefficient in common. Proportional, not equal, is the test.",
   tag:"Infinite solutions"},

  {q:"The pair `3x + 2y = 8` and `6x + ky = 16` has infinitely many solutions when k is:",
   o:["4","1","6","16"],
   a:0,
   why:"**Infinitely many needs a₁/a₂ = b₁/b₂ = c₁/c₂.** Here 3/6 = ½ and 8/16 = ½, so 2/k = ½ and `k = 4`. Option B, `1`, is what inverting that middle ratio gives — writing k/2 = ½ instead of 2/k = ½ — and it is the standard slip. Options C and D are the second equation's own coefficients copied across.",
   tag:"Find k"},

  {q:"The lines `3x − y = 4` and `6x − ky = 7` never meet when k is:",
   o:["−2","2","½","6"],
   a:1,
   why:"Never meeting means parallel, so **a₁/a₂ = b₁/b₂ ≠ c₁/c₂**. Here 3/6 = ½ and b₁/b₂ = (−1)/(−k) = 1/k, so 1/k = ½ and `k = 2`; the constants give 4/7, which is not ½, so the lines really are parallel. Option A, `−2`, comes from carrying only one of the two minus signs into the ratio.",
   tag:"Find k"},

  {q:"The pair `3x + 4y = 7` and `9x + 12y = k` has no solution for:",
   o:["k = 21","every value of k except 21","every value of k except 7","no value of k"],
   a:1,
   why:"**No solution needs a₁/a₂ = b₁/b₂ ≠ c₁/c₂.** The first two ratios are already fixed: 3/9 = 4/12 = 1/3. So the lines are parallel whenever 7/k is *not* 1/3 — that is, for every k except `21`. Option A is the trap: at k = 21 all three ratios equal 1/3 and the lines coincide, which gives infinitely many solutions, not none. Option C bars the wrong number: k = 7 gives 9x + 12y = 7, which is parallel to the first line and so has no solution, while k = 21 is the one value that must be barred.",
   tag:"No solution"},

  {q:"The equations `2x + 3y = 7` and `4x + 6y = 14` represent:",
   o:["two parallel lines","two lines crossing at one point","the same line drawn twice","two perpendicular lines"],
   a:2,
   why:"2/4 = 3/6 = 7/14 = ½, so **all three ratios are equal and the lines coincide** — the second equation is just the first doubled. Option A is the trap: the first two ratios being equal only says the slopes match, and the equal third ratio is what turns parallel into identical. Such a pair has infinitely many solutions.",
   tag:"Coincident"},

  {q:"The pair `x + 2y = 4` and `2x + 4y = 12` has:",
   o:["infinitely many solutions","exactly two solutions","no solution","exactly one solution"],
   a:2,
   why:"1/2 = 2/4 = ½ but 4/12 = 1/3, so **a₁/a₂ = b₁/b₂ ≠ c₁/c₂ and there is no solution** — the lines are parallel. Option A is the tempting one, because the first two ratios match; dividing the second equation by 2 gives x + 2y = 6, which cannot hold at the same time as x + 2y = 4. A pair of straight lines can never meet in exactly two points, so option B is impossible for any pair.",
   tag:"No solution"},

  {q:"A pair of linear equations that has no solution is described as:",
   o:["consistent and dependent","consistent and independent","indeterminate","inconsistent"],
   a:3,
   why:"A pair with no solution is **inconsistent**. The other two names go with the cases that do have solutions: one solution is **consistent and independent**, infinitely many is **consistent and dependent**. Option A is the trap, because *dependent* sounds like the failure case when it is in fact the coincident-lines case with infinitely many solutions.",
   tag:"Naming"},

  {q:"If `3x + 2y = 11` and `2x + 3y = 9`, then `x + y` is:",
   o:["20","4","5","2"],
   a:1,
   why:"**Elimination by adding:** the two equations sum to 5x + 5y = 20, so `x + y = 4`. Option A is that sum left undivided by 5 — the commonest slip. Option D is x − y, which comes from *subtracting* the equations: x − y = 2, so x = 3 and y = 1.",
   tag:"Elimination"},

  {q:"If `2x + y = 13` and `x = y + 2`, then y is:",
   o:["5","4","3","13"],
   a:2,
   why:"**Substitution:** the second equation already gives x, so put it in the first — 2(y + 2) + y = 13, giving 3y + 4 = 13 and `y = 3`. Option A, `5`, is the value of x, and it is the answer most often ticked because x is the letter solved for first. Check: 2(5) + 3 = 13.",
   tag:"Substitution"},

  {q:"If `x + y = 7`, `y + z = 9` and `z + x = 10`, then `x + y + z` is:",
   o:["12","26","8","13"],
   a:3,
   why:"**Adding all three equations gives 2(x + y + z) = 26, so x + y + z = 13.** Each unknown is then the total minus the pair that leaves it out: z = 13 − 7 = 6, x = 13 − 9 = 4, y = 13 − 10 = 3. Option B is the sum left undivided by 2, which is the whole of the mistake here.",
   tag:"Three unknowns"},

  {q:"If `a + b = 12`, `b + c = 17` and `c + a = 21`, then c is:",
   o:["13","25","8","4"],
   a:0,
   why:"**Adding all three gives 2(a + b + c) = 50, so a + b + c = 25**, and c is the total minus the pair that leaves c out: c = 25 − 12 = `13`. Option B is the total itself, stopped one step early — the most tempting answer on the page. For the record a = 8 and b = 4, which are options C and D.",
   tag:"Three unknowns"},

  {q:"The line `3x + 4y = 12` meets the x-axis at:",
   o:["(0, 4)","(4, 0)","(3, 0)","(0, 3)"],
   a:1,
   why:"**The x-intercept of ax + by = c is c/a**, found by setting y = 0: here 12/3 = 4, so the point is `(4, 0)`. Option A has the right number on the wrong axis, which is the standard trap. Option D is the genuine y-intercept, c/b = 12/4 = 3, at (0, 3).",
   tag:"x-intercept"},

  {q:"The y-intercept of the line `2x − 5y = 10` is:",
   o:["−2","2","−5","5"],
   a:0,
   why:"**The y-intercept of ax + by = c is c/b**, found by setting x = 0: here −5y = 10, so the intercept is 10/(−5) = `−2`. Option B is the same answer with the minus sign dropped, which is what happens when the ratio is taken as 10/5 without looking at the sign of the coefficient of y.",
   tag:"y-intercept"},

  {q:"The equation `x/a + y/b = 1` is a line with:",
   o:["slope `a` and y-intercept `b`","x-intercept `a` and y-intercept `b`","x-intercept `b` and y-intercept `a`","slope `−a/b`"],
   a:1,
   why:"**x/a + y/b = 1 is the intercept form: a is the x-intercept and b the y-intercept.** Setting y = 0 gives x/a = 1, so x = a; setting x = 0 gives y = b. Option C has the two swapped, which is the whole trap. The slope of this line is −b/a, so option D has even that the wrong way up.",
   tag:"Intercept form"},

  {q:"A line whose x-intercept is `a` and y-intercept is `b` makes with the two axes a triangle of area:",
   o:["|ab|","½|a + b|","½|ab|","2|ab|"],
   a:2,
   why:"**Area = ½ × |x-intercept × y-intercept| = ½|ab|.** The triangle is right-angled at the origin, with the two intercepts as the perpendicular sides, so the ordinary ½ × base × height applies. Option A is that product with the half forgotten — the single commonest error in this question type — and the modulus is there because an intercept may be negative while an area may not.",
   tag:"Area with axes"},

  {q:"The area of the triangle formed by the line `3x + 4y = 12` and the two coordinate axes is:",
   o:["12","7","6","24"],
   a:2,
   why:"The intercepts are 12/3 = 4 and 12/4 = 3, and **Area = ½ × |x-intercept × y-intercept|** = ½ × 4 × 3 = `6` square units. Option A, `12`, is the product of the intercepts with the half forgotten; option D doubles it instead of halving it. The same figure comes from ½|c²/(ab)| = ½ × 144/12 = 6.",
   tag:"Area with axes"},

  {q:"The line `4x − 3y = 24` cuts off from the axes a triangle of area:",
   o:["24","−24","48","12"],
   a:0,
   why:"The intercepts are 24/4 = 6 and 24/(−3) = −8, and **Area = ½ × |x-intercept × y-intercept|** = ½ × |6 × (−8)| = ½ × 48 = `24` square units. Option B is what dropping the modulus gives, and an area is never negative; option C is the product with the half forgotten.",
   tag:"Area with axes"},

  {q:"The graph of `y = −3` is:",
   o:["a line parallel to the y-axis, 3 units to its left","a line parallel to the x-axis, 3 units below it","a line through the origin of slope −3","the x-axis itself"],
   a:1,
   why:"**y = k is horizontal — parallel to the x-axis — and x = k is vertical, parallel to the y-axis.** So y = −3 runs across the page 3 units below the x-axis. Option A is the picture of `x = −3` and is the standard swap. Option C is the graph of y = −3x, which is a different equation entirely; the x-axis itself is y = 0.",
   tag:"x = k, y = k"},

  {q:"Which of these lines passes through the origin?",
   o:["2x + 3y = 6","x = 3","y = 2x + 1","y = 2x"],
   a:3,
   why:"**ax + by = c passes through the origin exactly when c = 0**, because (0, 0) must satisfy the equation. Written as 2x − y = 0, option D has c = 0 and qualifies. Option C is the trap: it has the same slope and looks almost identical, but its constant 1 lifts it off the origin — putting x = 0 gives y = 1, not 0.",
   tag:"Through the origin"},

  {q:"In the equation `y = mx + c`, the number `c` is:",
   o:["the slope","the y-intercept","the x-intercept","the angle the line makes with the x-axis"],
   a:1,
   why:"**In y = mx + c the m is the slope and the c is the y-intercept**, since putting x = 0 leaves y = c. Option C is the trap: the x-intercept of this line is `−c/m`, not c. The slope m is the *tangent* of the angle with the x-axis, not the angle itself, which rules out option D.",
   tag:"y = mx + c"},

  {q:"The slope of the line `2x + 3y = 6` is:",
   o:["2/3","−2/3","−3/2","3/2"],
   a:1,
   why:"**The slope of ax + by = c is −a/b**, so here it is `−2/3`. Rearranging gives y = −(2/3)x + 2, which also shows the y-intercept is 2. Option A is the same fraction with the minus sign dropped — the commonest slip, since nothing in the printed equation looks negative. Option C inverts the fraction as well.",
   tag:"Slope"},

  {q:"The lines `y = 2x + 3` and `y = 2x − 5` are:",
   o:["parallel","coincident","meeting at one point","perpendicular"],
   a:0,
   why:"**Two lines are parallel when m₁ = m₂ and c₁ ≠ c₂.** Both slopes are 2 and the intercepts 3 and −5 differ, so the lines are parallel and the pair has no solution. Option B is the trap: coincident lines need the intercepts to be equal as well. Perpendicular would need the product of the slopes to be −1, and 2 × 2 = 4.",
   tag:"Parallel"},

  {q:"Two pens and three notebooks cost ₹86, and three pens and two notebooks cost ₹74. One notebook costs:",
   o:["₹10","₹12","₹22","₹32"],
   a:2,
   why:"With p and b for the two prices, 2p + 3b = 86 and 3p + 2b = 74. **Adding gives 5(p + b) = 160, so p + b = 32; subtracting gives b − p = 12.** Hence b = `₹22` and p = ₹10. Option A is the pen, option D is p + b and option B is b − p — every one of them a real step in the working, which is what makes them tempting.",
   tag:"Word problem"},

  {q:"The digits of a two-digit number add up to 9, and the number is 27 more than the number formed by reversing its digits. The number is:",
   o:["36","45","72","63"],
   a:3,
   why:"**A two-digit number is 10t + u and its reverse is 10u + t, so their difference is 9(t − u).** Here 9(t − u) = 27 gives t − u = 3, and with t + u = 9 that makes t = 6 and u = 3, so the number is `63` — and 63 − 36 = 27. Options B and C also have digits adding to 9, which is the trap: that condition alone fixes nothing, and option A is the reversed number itself.",
   tag:"Word problem"}
 ],
  note:"Every question above is answered by one line of the sheet. If a pair of equations ever looks like more than a ratio test, write both in the form ax + by = c first — the three ratios then read straight off."}
]
}

]});
