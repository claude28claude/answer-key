/* The five maths subjects: the header each data file carries, and the order
 * its topics are read in. One fragment file per topic, in tools/frag.
 */
module.exports = [

{
  file: 'data-algebra.js',
  header:
`/* THE ANSWER KEY — data-algebra.js
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
   formula looked up while the options were on screen has not been tested. */`,
  id: 'algebra', n: 'Algebra', tab: 'Algebra', sub: 'Identities to graphs',
  part: 'Maths — every formula as a question',
  w: 'The identities, the surds, the quadratics and the two families of question SSC builds out of them — all of it as questions, with the formula in the answer.',
  intro: 'Nine topics, in the order the chapter is usually taught: the identities first, because everything else leans on them, then the two families SSC asks over and over — a + b + c = 0 and x + 1/x — then surds, quadratics, polynomials, ratio, maxima and minima, and the graph of a line.',
  topics: ['algebra-identities','algebra-abc-zero','algebra-recip','algebra-surds','algebra-quadratic','algebra-polynomial','algebra-ratio-prop','algebra-maxmin','algebra-lineareq']
},

{
  file: 'data-geometry.js',
  header:
`/* THE ANSWER KEY — data-geometry.js
   Geometry, as questions, with figures.

   WHAT SSC ACTUALLY ASKS. The syllabus names four things: the triangle and
   its centres, congruence and similarity, the circle with its chords,
   tangents and the angles chords subtend, and the common tangents to two or
   more circles. Four of the twelve topics here are therefore circle topics,
   because four fifths of the geometry in a paper is the circle.

   THE FIGURES are hand-drawn SVG in diagrams.js, one drawing per
   configuration, reused by every question that needs it. They take their
   colours from the stylesheet, so a figure cannot drift out of step with the
   page, and they carry an aria-label so the figure is readable aloud. */`,
  id: 'geometry', n: 'Geometry', tab: 'Geometry', sub: 'Triangles and circles',
  part: 'Maths — every formula as a question',
  w: 'Lines and angles, the triangle and its four centres, similarity, the quadrilaterals, and then the circle in four topics — chords, tangents, segments and two-circle configurations — with the figures drawn.',
  intro: 'Twelve topics. The plane results first, then the triangle in four topics, then the circle in four, which is where the marks are. Every question that needs a figure carries one.',
  topics: ['geo-lines-angles','geo-triangle-basics','geo-centres','geo-cevians','geo-similar','geo-right-triangle','geo-quad-poly','geo-circle-chord','geo-circle-tangent','geo-circle-segment','geo-circle-two','geo-coord']
},

{
  file: 'data-mensuration.js',
  header:
`/* THE ANSWER KEY — data-mensuration.js
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
   exactly that, and the Careful boxes name each confusion. */`,
  id: 'mensuration', n: 'Mensuration', tab: 'Mensuration', sub: 'Areas and volumes',
  part: 'Maths — every formula as a question',
  w: 'Every area formula in two dimensions and every surface and volume formula in three, plus the melting, recasting and scaling questions that are built on top of them.',
  intro: 'Four topics in two dimensions and four in three. The 2D half ends with the paths, borders and shaded regions that look like reasoning questions and are really one subtraction; the 3D half ends with melting and scaling, where the whole question is which power the ratio is raised to.',
  topics: ['men-2d-triangle','men-2d-quad','men-2d-circle','men-2d-paths','men-3d-cuboid','men-3d-cylinder','men-3d-sphere','men-3d-melt']
},

{
  file: 'data-trig.js',
  header:
`/* THE ANSWER KEY — data-trig.js
   Trigonometry and the whole of height and distance, as questions.

   THE SYLLABUS SAYS "simple problems only" for height and distance, and
   means it: every question in a paper reduces to one of a small set of
   right triangles with 30°, 45° or 60° in them. So the three height-and-
   distance topics here are arranged as that set — the single triangle, then
   two angles or two observers, then the standard results worth carrying in
   your head, such as h = √(xy) for two complementary angles.

   ANGLES OUTSIDE THE STANDARD SET are only ever asked in order to be
   reduced to it, so that is how they are taught here. */`,
  id: 'trig', n: 'Trigonometry and Height–Distance', tab: 'Trigonometry', sub: 'Ratios, identities, heights',
  part: 'Maths — every formula as a question',
  w: 'The ratios and the table, the standard identities and the manipulations SSC builds on them, maximum and minimum values, and height and distance from the single triangle to the standard results.',
  intro: 'Four topics of trigonometry, then three of height and distance. The table of standard values is the first thing and the last thing: no question in the chapter can be done without it, and almost every question can be done with it.',
  topics: ['trig-ratios','trig-identities','trig-conditional','trig-maxmin','trig-hd-basics','trig-hd-two','trig-hd-results']
},

{
  file: 'data-profit.js',
  header:
`/* THE ANSWER KEY — data-profit.js
   Profit, loss, discount and mixture — kept as its own subject.

   WHY IT IS SEPARATE. It was asked for separately, and it belongs
   separately: it is arithmetic rather than advanced maths, it is asked in
   every tier including the ones that have no advanced-maths section at all,
   and its formulas are the ones most often mis-stated — profit percentage is
   on the COST price unless the question says otherwise, and the gain of a
   shopkeeper using a false weight is error/(true weight − error), not
   error/true weight.

   ALLIGATION IS IN HERE because it is the tool the mixture questions are
   built for, and because it answers far more than mixture questions: any
   two-rate average, including speeds, interest rates and profit rates. */`,
  id: 'profit', n: 'Profit, Loss and Mixture', tab: 'Profit & Mixture', sub: 'Profit, discount, alligation',
  part: 'Maths — every formula as a question',
  w: 'Cost price and selling price, marked price and successive discounts, false weights, and then mixture and alligation — including the replacement formula and the use of alligation outside mixtures.',
  intro: 'Three topics on profit and discount, then two on mixture. The percentages are the part that is mis-stated most often, so each formula here says what it is a percentage *of*.',
  topics: ['profit-basics','profit-discount','profit-dishonest','mix-allig','mix-replace']
}

];
