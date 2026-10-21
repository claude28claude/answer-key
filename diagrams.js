/* THE ANSWER KEY — diagrams.js
   The figures, as hand-written SVG.

   WHY THEY ARE IN A FILE OF THEIR OWN. One drawing per configuration, reused
   by every question that needs that configuration — a question says
   `d:"c-chord-perp"` and gets the chord figure. Drawing them once means the
   lettering is the same in every question that uses it, which is the whole
   point: a reader who has learnt the figure does not have to re-read it.

   HOW THEY ARE DRAWN. No colours and no inline styles. Five classes, defined
   once in the stylesheet, carry the whole visual language:

     .l   the construction — the figure itself, in the text colour
     .a   the thing being asked for, in jade
     .g   guides and extensions — dashed and grey
     .m   angle arcs and equal-length ticks — solid and grey
     .f   a shaded region
     .p   a point

   So a figure cannot drift out of step with the palette, and it reads
   correctly in a printout as well as on the screen.

   Every figure carries an aria-label written as a sentence, because a figure
   with no text alternative is a question that cannot be answered by anyone
   using a screen reader.                                                    */

var DIA = (window.DIA = window.DIA || {});

/* ---------------------------------------------------------------- CIRCLES */

DIA['c-chord-perp'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A circle with centre O and a chord A B. The perpendicular O M from the centre to the chord bisects it, so that A M equals M B.">' +
'<circle cx="160" cy="95" r="70" class="l"/>' +
'<line x1="102.6" y1="135" x2="217.4" y2="135" class="a"/>' +
'<line x1="160" y1="95" x2="160" y2="135" class="l"/>' +
'<line x1="160" y1="95" x2="102.6" y2="135" class="l"/>' +
'<path d="M152 135 L152 127 L160 127" class="l"/>' +
'<line x1="128" y1="130" x2="132" y2="140" class="m"/>' +
'<line x1="186" y1="130" x2="190" y2="140" class="m"/>' +
'<circle cx="160" cy="95" r="2.6" class="p"/>' +
'<circle cx="102.6" cy="135" r="2.6" class="p"/>' +
'<circle cx="217.4" cy="135" r="2.6" class="p"/>' +
'<circle cx="160" cy="135" r="2.6" class="p"/>' +
'<text x="160" y="87" text-anchor="middle" class="b">O</text>' +
'<text x="92" y="150">A</text>' +
'<text x="221" y="150">B</text>' +
'<text x="160" y="152" text-anchor="middle">M</text>' +
'<text x="120" y="108">r</text>' +
'<text x="166" y="120">d</text>' +
'</svg>';

/* ----------------------------------------------------------------- SOLIDS */

DIA['s-cone'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A right circular cone standing on its base, with radius r, vertical height h and slant height l. The height meets the radius at a right angle at the centre of the base.">' +
'<ellipse cx="160" cy="155" rx="60" ry="17" class="l"/>' +
'<line x1="160" y1="22" x2="100" y2="155" class="l"/>' +
'<line x1="160" y1="22" x2="220" y2="155" class="a"/>' +
'<line x1="160" y1="22" x2="160" y2="155" class="g"/>' +
'<line x1="160" y1="155" x2="220" y2="155" class="l"/>' +
'<path d="M160 144 L171 144 L171 155" class="l"/>' +
'<circle cx="160" cy="22" r="2.6" class="p"/>' +
'<circle cx="160" cy="155" r="2.6" class="p"/>' +
'<text x="150" y="98">h</text>' +
'<text x="200" y="100" class="j">l</text>' +
'<text x="190" y="149" text-anchor="middle">r</text>' +
'</svg>';

/* ------------------------------------------------- HEIGHT AND DISTANCE */

DIA['h-two-angles'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A tower P C standing on level ground. From a point A the angle of elevation of the top is thirty degrees, and from a nearer point B on the same straight line it is sixty degrees.">' +
'<line x1="14" y1="170" x2="306" y2="170" class="l"/>' +
'<line x1="250" y1="170" x2="250" y2="45" class="a"/>' +
'<line x1="34" y1="170" x2="250" y2="45" class="l"/>' +
'<line x1="178" y1="170" x2="250" y2="45" class="l"/>' +
'<path d="M250 158 L238 158 L238 170" class="l"/>' +
'<path d="M60 170 A26 26 0 0 0 56.5 157" class="m"/>' +
'<path d="M200 170 A22 22 0 0 0 189 151" class="m"/>' +
'<circle cx="34" cy="170" r="2.6" class="p"/>' +
'<circle cx="178" cy="170" r="2.6" class="p"/>' +
'<circle cx="250" cy="45" r="2.6" class="p"/>' +
'<text x="66" y="165">30°</text>' +
'<text x="194" y="165">60°</text>' +
'<text x="28" y="186">A</text>' +
'<text x="172" y="186">B</text>' +
'<text x="246" y="186">C</text>' +
'<text x="256" y="42" class="b">P</text>' +
'<text x="258" y="110" class="j">h</text>' +
'</svg>';

/* ===== GROUPS ===== */

/* circles-chords — 8 figures */
DIA['c-parts'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="One circle with centre O showing its named parts: a radius from the centre to the circle, a diameter through the centre, a chord joining two points on the circle, a marked arc, and a tangent that touches the circle at a single point.">' +
'<circle cx="130" cy="100" r="62" class="l"/>' +
'<line x1="68" y1="100" x2="192" y2="100" class="l"/>' +
'<line x1="130" y1="100" x2="94.4" y2="49.2" class="l"/>' +
'<line x1="71.7" y1="121.2" x2="124.6" y2="161.8" class="l"/>' +
'<path d="M189.9 84 A62 62 0 0 0 151.2 41.7" class="a"/>' +
'<line x1="134.9" y1="182.7" x2="212.7" y2="105" class="l"/>' +
'<circle cx="130" cy="100" r="2.6" class="p"/>' +
'<circle cx="173.8" cy="143.8" r="2.6" class="p"/>' +
'<text x="130" y="116" text-anchor="middle" class="b">O</text>' +
'<text x="160" y="90" text-anchor="middle">diameter</text>' +
'<text x="116" y="66">radius</text>' +
'<text x="96" y="133">chord</text>' +
'<text x="186" y="48" class="j">arc</text>' +
'<text x="220" y="96">tangent</text>' +
'</svg>';

DIA['c-chord-equal'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A circle with centre O and two equal chords A B and C D. A perpendicular of length d is drawn from the centre to each chord, so the two chords are the same distance from the centre, and tick marks show that the chords are equal.">' +
'<circle cx="160" cy="100" r="70" class="l"/>' +
'<line x1="102.6" y1="60" x2="217.4" y2="60" class="a"/>' +
'<line x1="130.3" y1="163.4" x2="229.8" y2="105.9" class="a"/>' +
'<line x1="160" y1="100" x2="160" y2="60" class="l"/>' +
'<line x1="160" y1="100" x2="180" y2="134.6" class="l"/>' +
'<path d="M152 60 L152 68 L160 68" class="l"/>' +
'<path d="M186.9 130.6 L182.9 123.7 L176 127.7" class="l"/>' +
'<line x1="123" y1="55" x2="127" y2="65" class="m"/>' +
'<line x1="157.6" y1="141.8" x2="162.6" y2="150.4" class="m"/>' +
'<circle cx="160" cy="100" r="2.6" class="p"/>' +
'<circle cx="102.6" cy="60" r="2.6" class="p"/>' +
'<circle cx="217.4" cy="60" r="2.6" class="p"/>' +
'<circle cx="130.3" cy="163.4" r="2.6" class="p"/>' +
'<circle cx="229.8" cy="105.9" r="2.6" class="p"/>' +
'<text x="146" y="104" class="b">O</text>' +
'<text x="90" y="55">A</text>' +
'<text x="222" y="55">B</text>' +
'<text x="118" y="177">C</text>' +
'<text x="238" y="102">D</text>' +
'<text x="166" y="82">d</text>' +
'<text x="180" y="112">d</text>' +
'</svg>';

DIA['c-two-chords'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A circle in which the chord A B and the chord C D cross each other at a point P inside the circle, cutting each chord into two pieces.">' +
'<circle cx="160" cy="96" r="72" class="l"/>' +
'<line x1="101" y1="137.3" x2="231.5" y2="104.6" class="l"/>' +
'<line x1="147.1" y1="25.2" x2="192.1" y2="160.4" class="l"/>' +
'<circle cx="101" cy="137.3" r="2.6" class="p"/>' +
'<circle cx="231.5" cy="104.6" r="2.6" class="p"/>' +
'<circle cx="147.1" cy="25.2" r="2.6" class="p"/>' +
'<circle cx="192.1" cy="160.4" r="2.6" class="p"/>' +
'<circle cx="178" cy="118" r="2.6" class="p"/>' +
'<text x="90" y="148">A</text>' +
'<text x="239" y="100">B</text>' +
'<text x="137" y="20">C</text>' +
'<text x="198" y="172">D</text>' +
'<text x="184" y="108" class="b">P</text>' +
'</svg>';

DIA['c-chords-ext'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="From a point P outside a circle two secant lines are drawn. One cuts the circle at A and then at B, the other cuts it at C and then at D, so that A and C are the nearer points of intersection.">' +
'<circle cx="200" cy="100" r="62" class="l"/>' +
'<line x1="28" y1="100" x2="236.8" y2="50.1" class="l"/>' +
'<line x1="28" y1="100" x2="256" y2="126.7" class="l"/>' +
'<circle cx="28" cy="100" r="2.6" class="p"/>' +
'<circle cx="144.6" cy="72.1" r="2.6" class="p"/>' +
'<circle cx="236.8" cy="50.1" r="2.6" class="p"/>' +
'<circle cx="139.4" cy="113" r="2.6" class="p"/>' +
'<circle cx="256" cy="126.7" r="2.6" class="p"/>' +
'<text x="16" y="94" class="b">P</text>' +
'<text x="132" y="64">A</text>' +
'<text x="242" y="44">B</text>' +
'<text x="124" y="130">C</text>' +
'<text x="262" y="140">D</text>' +
'</svg>';

DIA['c-central-inscribed'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A circle with centre O in which the arc A B subtends the angle A O B at the centre, marked two theta, and the angle A C B at a point C on the major arc, marked theta, so the angle at the centre is twice the angle at the circle.">' +
'<circle cx="160" cy="105" r="70" class="l"/>' +
'<path d="M115 158.6 A70 70 0 0 0 205 158.6" class="a"/>' +
'<line x1="160" y1="105" x2="115" y2="158.6" class="l"/>' +
'<line x1="160" y1="105" x2="205" y2="158.6" class="l"/>' +
'<line x1="147.8" y1="36.1" x2="115" y2="158.6" class="l"/>' +
'<line x1="147.8" y1="36.1" x2="205" y2="158.6" class="l"/>' +
'<path d="M145.9 121.9 A22 22 0 0 0 174.1 121.9" class="m"/>' +
'<path d="M141.1 61.2 A26 26 0 0 0 158.8 59.6" class="m"/>' +
'<circle cx="160" cy="105" r="2.6" class="p"/>' +
'<circle cx="115" cy="158.6" r="2.6" class="p"/>' +
'<circle cx="205" cy="158.6" r="2.6" class="p"/>' +
'<circle cx="147.8" cy="36.1" r="2.6" class="p"/>' +
'<text x="160" y="97" text-anchor="middle" class="b">O</text>' +
'<text x="104" y="172">A</text>' +
'<text x="210" y="172">B</text>' +
'<text x="148" y="26" text-anchor="middle">C</text>' +
'<text x="160" y="142" text-anchor="middle">2θ</text>' +
'<text x="148" y="78">θ</text>' +
'</svg>';

DIA['c-same-arc'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A circle in which the arc A B is seen from two points C and D lying on the same side of the chord A B, so that the angle A C B and the angle A D B are equal, each marked theta.">' +
'<circle cx="160" cy="108" r="70" class="l"/>' +
'<path d="M102.7 148.2 A70 70 0 0 0 217.3 148.2" class="a"/>' +
'<line x1="125" y1="47.4" x2="102.7" y2="148.2" class="l"/>' +
'<line x1="125" y1="47.4" x2="217.3" y2="148.2" class="l"/>' +
'<line x1="200.2" y1="50.7" x2="102.7" y2="148.2" class="l"/>' +
'<line x1="200.2" y1="50.7" x2="217.3" y2="148.2" class="l"/>' +
'<path d="M119.8 70.8 A24 24 0 0 0 141.2 65.1" class="m"/>' +
'<path d="M183.2 67.6 A24 24 0 0 0 204.3 74.3" class="m"/>' +
'<circle cx="102.7" cy="148.2" r="2.6" class="p"/>' +
'<circle cx="217.3" cy="148.2" r="2.6" class="p"/>' +
'<circle cx="125" cy="47.4" r="2.6" class="p"/>' +
'<circle cx="200.2" cy="50.7" r="2.6" class="p"/>' +
'<text x="92" y="162">A</text>' +
'<text x="224" y="162">B</text>' +
'<text x="118" y="38">C</text>' +
'<text x="206" y="42">D</text>' +
'<text x="132" y="86">θ</text>' +
'<text x="188" y="90">θ</text>' +
'</svg>';

DIA['c-semicircle'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A circle with the diameter A B drawn and a point C on the circle joined to both ends, so that the angle A C B in the semicircle is a right angle, marked with a small square and labelled ninety degrees.">' +
'<circle cx="160" cy="112" r="70" class="l"/>' +
'<line x1="90" y1="112" x2="230" y2="112" class="a"/>' +
'<line x1="130.4" y1="48.6" x2="90" y2="112" class="l"/>' +
'<line x1="130.4" y1="48.6" x2="230" y2="112" class="l"/>' +
'<path d="M125.1 57 L133.5 62.4 L138.9 53.9" class="l"/>' +
'<circle cx="90" cy="112" r="2.6" class="p"/>' +
'<circle cx="230" cy="112" r="2.6" class="p"/>' +
'<circle cx="130.4" cy="48.6" r="2.6" class="p"/>' +
'<text x="78" y="127">A</text>' +
'<text x="236" y="127">B</text>' +
'<text x="118" y="40" class="b">C</text>' +
'<text x="138" y="81" text-anchor="middle">90°</text>' +
'</svg>';

DIA['c-arc-sector'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A circle with centre O in which the sector O A B is shaded. The two radii O A and O B meet at the centre at the angle theta, and the arc A B that bounds the sector is marked.">' +
'<path d="M150 115 L218.5 92.8 A72 72 0 0 0 152.5 43 Z" class="f"/>' +
'<circle cx="150" cy="115" r="72" class="l"/>' +
'<line x1="150" y1="115" x2="218.5" y2="92.8" class="l"/>' +
'<line x1="150" y1="115" x2="152.5" y2="43" class="l"/>' +
'<path d="M218.5 92.8 A72 72 0 0 0 152.5 43" class="a"/>' +
'<path d="M174.7 107 A26 26 0 0 0 150.9 89" class="m"/>' +
'<circle cx="150" cy="115" r="2.6" class="p"/>' +
'<circle cx="218.5" cy="92.8" r="2.6" class="p"/>' +
'<circle cx="152.5" cy="43" r="2.6" class="p"/>' +
'<text x="142" y="130" class="b">O</text>' +
'<text x="226" y="90">A</text>' +
'<text x="148" y="34">B</text>' +
'<text x="176" y="86">θ</text>' +
'<text x="186" y="120">r</text>' +
'<text x="202" y="44" class="j">arc</text>' +
'</svg>';

/* circles-segment — 9 figures */
/* THE ANSWER KEY — figures: circle segments, rings, quadrants, cyclic quads */

var DIA = (window.DIA = window.DIA || {});

DIA['c-segment'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A circle cut by the chord A B into two segments. The smaller piece below the chord is the shaded minor segment, and the larger piece above it is the major segment.">' +
'<path d="M106.38 140 A70 70 0 0 0 213.62 140 Z" class="f"/>' +
'<circle cx="160" cy="95" r="70" class="l"/>' +
'<line x1="106.38" y1="140" x2="213.62" y2="140" class="a"/>' +
'<line x1="160" y1="180" x2="160" y2="156" class="g"/>' +
'<circle cx="106.38" cy="140" r="2.6" class="p"/>' +
'<circle cx="213.62" cy="140" r="2.6" class="p"/>' +
'<text x="94" y="154">A</text>' +
'<text x="220" y="154">B</text>' +
'<text x="160" y="78" text-anchor="middle">major segment</text>' +
'<text x="160" y="192" text-anchor="middle" class="b">minor segment</text>' +
'</svg>';

DIA['c-segment-area'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A circle with centre O and chord A B. The triangle O A B is drawn inside the sector O A B, and the shaded minor segment below the chord is what is left when the triangle is taken away from the sector.">' +
'<path d="M106.38 145 A70 70 0 0 0 213.62 145 Z" class="f"/>' +
'<circle cx="160" cy="100" r="70" class="l"/>' +
'<line x1="160" y1="100" x2="106.38" y2="145" class="l"/>' +
'<line x1="160" y1="100" x2="213.62" y2="145" class="l"/>' +
'<line x1="106.38" y1="145" x2="213.62" y2="145" class="a"/>' +
'<path d="M144.68 112.86 A20 20 0 0 0 175.32 112.86" class="m"/>' +
'<circle cx="160" cy="100" r="2.6" class="p"/>' +
'<circle cx="106.38" cy="145" r="2.6" class="p"/>' +
'<circle cx="213.62" cy="145" r="2.6" class="p"/>' +
'<text x="160" y="92" text-anchor="middle" class="b">O</text>' +
'<text x="94" y="158">A</text>' +
'<text x="220" y="158">B</text>' +
'<text x="160" y="139" text-anchor="middle">θ</text>' +
'</svg>';

DIA['c-segment-angles'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A circle with the chord A B. The angle A C B stands in the major segment above the chord and the angle A D B stands in the minor segment below it, and both angles are marked.">' +
'<circle cx="160" cy="105" r="66" class="l"/>' +
'<line x1="95.5" y1="119" x2="224.5" y2="119" class="a"/>' +
'<line x1="160" y1="39" x2="95.5" y2="119" class="l"/>' +
'<line x1="160" y1="39" x2="224.5" y2="119" class="l"/>' +
'<line x1="160" y1="171" x2="95.5" y2="119" class="l"/>' +
'<line x1="160" y1="171" x2="224.5" y2="119" class="l"/>' +
'<path d="M144.93 57.69 A24 24 0 0 0 175.07 57.69" class="m"/>' +
'<path d="M142.87 157.19 A22 22 0 0 1 177.13 157.19" class="m"/>' +
'<circle cx="95.5" cy="119" r="2.6" class="p"/>' +
'<circle cx="224.5" cy="119" r="2.6" class="p"/>' +
'<circle cx="160" cy="39" r="2.6" class="p"/>' +
'<circle cx="160" cy="171" r="2.6" class="p"/>' +
'<text x="84" y="132">A</text>' +
'<text x="230" y="132">B</text>' +
'<text x="168" y="34" class="b">C</text>' +
'<text x="168" y="189" class="b">D</text>' +
'</svg>';

DIA['c-annulus'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="Two circles with the same centre O. The ring between them is shaded, the outer circle has radius R and the inner circle has radius r.">' +
'<path d="M85 100 A75 75 0 1 1 235 100 A75 75 0 1 1 85 100 Z M118 100 A42 42 0 1 0 202 100 A42 42 0 1 0 118 100 Z" class="f"/>' +
'<circle cx="160" cy="100" r="75" class="l"/>' +
'<circle cx="160" cy="100" r="42" class="l"/>' +
'<line x1="160" y1="100" x2="235" y2="100" class="a"/>' +
'<line x1="160" y1="100" x2="160" y2="58" class="l"/>' +
'<circle cx="160" cy="100" r="2.6" class="p"/>' +
'<text x="160" y="118" text-anchor="middle" class="b">O</text>' +
'<text x="205" y="91" text-anchor="middle" class="j">R</text>' +
'<text x="147" y="82">r</text>' +
'</svg>';

DIA['c-quadrant'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A quadrant of a circle with centre O, bounded by the radius O A along the ground and the radius O B straight up, which meet at a right angle at O, and by the quarter arc from A to B.">' +
'<path d="M90 170 L230 170 A140 140 0 0 0 90 30 Z" class="f"/>' +
'<line x1="90" y1="170" x2="230" y2="170" class="l"/>' +
'<line x1="90" y1="170" x2="90" y2="30" class="l"/>' +
'<path d="M230 170 A140 140 0 0 0 90 30" class="a"/>' +
'<path d="M90 158 L102 158 L102 170" class="l"/>' +
'<circle cx="90" cy="170" r="2.6" class="p"/>' +
'<circle cx="230" cy="170" r="2.6" class="p"/>' +
'<circle cx="90" cy="30" r="2.6" class="p"/>' +
'<text x="76" y="186" class="b">O</text>' +
'<text x="232" y="186">A</text>' +
'<text x="78" y="24">B</text>' +
'<text x="158" y="186" text-anchor="middle">r</text>' +
'<text x="72" y="102">r</text>' +
'</svg>';

DIA['c-cyclic-quad'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A quadrilateral A B C D with all four corners on one circle. The opposite angles at A and at C are each marked with an arc, and together they add up to one hundred and eighty degrees.">' +
'<circle cx="160" cy="105" r="72" class="l"/>' +
'<line x1="92.34" y1="80.37" x2="172.5" y2="34.09" class="l"/>' +
'<line x1="172.5" y1="34.09" x2="230.91" y2="92.5" class="l"/>' +
'<line x1="230.91" y1="92.5" x2="172.5" y2="175.91" class="l"/>' +
'<line x1="172.5" y1="175.91" x2="92.34" y2="80.37" class="l"/>' +
'<path d="M111.39 69.37 A22 22 0 0 1 106.48 97.22" class="m"/>' +
'<path d="M215.35 76.94 A22 22 0 0 0 218.29 110.52" class="m"/>' +
'<circle cx="92.34" cy="80.37" r="2.6" class="p"/>' +
'<circle cx="172.5" cy="34.09" r="2.6" class="p"/>' +
'<circle cx="230.91" cy="92.5" r="2.6" class="p"/>' +
'<circle cx="172.5" cy="175.91" r="2.6" class="p"/>' +
'<text x="78" y="76" class="b">A</text>' +
'<text x="179" y="25">B</text>' +
'<text x="240" y="88" class="b">C</text>' +
'<text x="178" y="192">D</text>' +
'</svg>';

DIA['c-cyclic-ext'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A quadrilateral A B C D with all four corners on one circle. The side B C is produced beyond C to E, and the exterior angle D C E is marked with the same arc as the interior opposite angle at A, because the two are equal.">' +
'<circle cx="160" cy="105" r="72" class="l"/>' +
'<line x1="92.34" y1="80.37" x2="172.5" y2="34.09" class="l"/>' +
'<line x1="172.5" y1="34.09" x2="230.91" y2="92.5" class="l"/>' +
'<line x1="230.91" y1="92.5" x2="172.5" y2="175.91" class="l"/>' +
'<line x1="172.5" y1="175.91" x2="92.34" y2="80.37" class="l"/>' +
'<line x1="230.91" y1="92.5" x2="259.19" y2="120.78" class="g"/>' +
'<path d="M111.39 69.37 A22 22 0 0 1 106.48 97.22" class="m"/>' +
'<path d="M246.47 108.06 A22 22 0 0 1 218.29 110.52" class="m"/>' +
'<circle cx="92.34" cy="80.37" r="2.6" class="p"/>' +
'<circle cx="172.5" cy="34.09" r="2.6" class="p"/>' +
'<circle cx="230.91" cy="92.5" r="2.6" class="p"/>' +
'<circle cx="172.5" cy="175.91" r="2.6" class="p"/>' +
'<circle cx="259.19" cy="120.78" r="2.6" class="p"/>' +
'<text x="78" y="76" class="b">A</text>' +
'<text x="179" y="25">B</text>' +
'<text x="242" y="84">C</text>' +
'<text x="178" y="192">D</text>' +
'<text x="251" y="134" class="b">E</text>' +
'</svg>';

DIA['c-ptolemy'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A quadrilateral A B C D with all four corners on one circle, with both diagonals drawn. The sides are labelled a, b, c and d in order, and the diagonals A C and B D are labelled p and q.">' +
'<circle cx="160" cy="100" r="74" class="l"/>' +
'<line x1="86.28" y1="93.55" x2="153.55" y2="26.28" class="l"/>' +
'<line x1="153.55" y1="26.28" x2="231.48" y2="80.85" class="l"/>' +
'<line x1="231.48" y1="80.85" x2="179.15" y2="171.48" class="l"/>' +
'<line x1="179.15" y1="171.48" x2="86.28" y2="93.55" class="l"/>' +
'<line x1="86.28" y1="93.55" x2="231.48" y2="80.85" class="a"/>' +
'<line x1="153.55" y1="26.28" x2="179.15" y2="171.48" class="a"/>' +
'<circle cx="86.28" cy="93.55" r="2.6" class="p"/>' +
'<circle cx="153.55" cy="26.28" r="2.6" class="p"/>' +
'<circle cx="231.48" cy="80.85" r="2.6" class="p"/>' +
'<circle cx="179.15" cy="171.48" r="2.6" class="p"/>' +
'<text x="74" y="90" class="b">A</text>' +
'<text x="160" y="17" class="b">B</text>' +
'<text x="242" y="78" class="b">C</text>' +
'<text x="185" y="187" class="b">D</text>' +
'<text x="110" y="50">a</text>' +
'<text x="199" y="43">b</text>' +
'<text x="216" y="133">c</text>' +
'<text x="122" y="144">d</text>' +
'<text x="120" y="104" class="j">p</text>' +
'<text x="160" y="138" text-anchor="middle" class="j">q</text>' +
'</svg>';

DIA['c-concyclic'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="The segment A B with the points C and D on the same side of it. The angle A C B and the angle A D B are marked with equal arcs, which is why the four points A, B, C and D all lie on one circle.">' +
'<circle cx="160" cy="110" r="72" class="a"/>' +
'<line x1="92.34" y1="134.63" x2="227.66" y2="134.63" class="l"/>' +
'<line x1="124" y1="47.65" x2="92.34" y2="134.63" class="l"/>' +
'<line x1="124" y1="47.65" x2="227.66" y2="134.63" class="l"/>' +
'<line x1="196" y1="47.65" x2="92.34" y2="134.63" class="l"/>' +
'<line x1="196" y1="47.65" x2="227.66" y2="134.63" class="l"/>' +
'<path d="M115.79 70.2 A24 24 0 0 0 142.39 63.08" class="m"/>' +
'<path d="M177.61 63.08 A24 24 0 0 0 204.21 70.2" class="m"/>' +
'<circle cx="92.34" cy="134.63" r="2.6" class="p"/>' +
'<circle cx="227.66" cy="134.63" r="2.6" class="p"/>' +
'<circle cx="124" cy="47.65" r="2.6" class="p"/>' +
'<circle cx="196" cy="47.65" r="2.6" class="p"/>' +
'<text x="78" y="148" class="b">A</text>' +
'<text x="232" y="148" class="b">B</text>' +
'<text x="111" y="40" class="b">C</text>' +
'<text x="205" y="40" class="b">D</text>' +
'</svg>';

/* circles-tangent — 8 figures */
DIA['c-tangent-radius'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A circle with centre O and a straight line that touches it at the single point P, with the radius O P drawn to the point of contact, so that the tangent and the radius meet there at a right angle.">' +
'<circle cx="145" cy="105" r="62" class="l"/>' +
'<line x1="159.8" y1="21.4" x2="229.4" y2="114.2" class="a"/>' +
'<line x1="145" y1="105" x2="194.6" y2="67.8" class="l"/>' +
'<path d="M185.8 74.4 L192.4 83.2 L201.2 76.6" class="l"/>' +
'<circle cx="145" cy="105" r="2.6" class="p"/>' +
'<circle cx="194.6" cy="67.8" r="2.6" class="p"/>' +
'<text x="131" y="101" class="b">O</text>' +
'<text x="201" y="60" class="b">P</text>' +
'<text x="158" y="76">r</text>' +
'<text x="191" y="99" text-anchor="middle">90°</text>' +
'</svg>';

DIA['c-two-tangents'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="From a point P outside a circle with centre O the two tangents P A and P B are drawn, touching the circle at A and at B, with O P joined, ticks showing the two tangent lengths are equal and small squares showing each tangent meets the radius at its point of contact at a right angle.">' +
'<circle cx="205" cy="100" r="60" class="l"/>' +
'<line x1="60" y1="100" x2="192.91" y2="39.58" class="a"/>' +
'<line x1="60" y1="100" x2="192.91" y2="160.42" class="a"/>' +
'<line x1="60" y1="100" x2="205" y2="100" class="l"/>' +
'<line x1="205" y1="100" x2="180.17" y2="45.38" class="l"/>' +
'<line x1="205" y1="100" x2="180.17" y2="154.62" class="l"/>' +
'<path d="M184.31 54.48 L175.21 58.62 L171.07 49.52" class="l"/>' +
'<path d="M184.31 145.52 L175.21 141.38 L171.07 150.48" class="l"/>' +
'<line x1="118.02" y1="68.14" x2="122.16" y2="77.24" class="m"/>' +
'<line x1="122.16" y1="122.76" x2="118.02" y2="131.86" class="m"/>' +
'<circle cx="60" cy="100" r="2.6" class="p"/>' +
'<circle cx="205" cy="100" r="2.6" class="p"/>' +
'<circle cx="180.17" cy="45.38" r="2.6" class="p"/>' +
'<circle cx="180.17" cy="154.62" r="2.6" class="p"/>' +
'<text x="44" y="105" class="b">P</text>' +
'<text x="212" y="105" class="b">O</text>' +
'<text x="170" y="33">A</text>' +
'<text x="170" y="172">B</text>' +
'</svg>';

DIA['c-tangent-angle'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="Two tangents drawn from an external point P touch a circle with centre O at A and at B; the angle between the two tangents at P is marked fifty degrees and the central angle A O B is marked one hundred and thirty degrees, so the two angles together make a straight angle.">' +
'<circle cx="200" cy="100" r="58" class="l"/>' +
'<line x1="62.76" y1="100" x2="189.99" y2="40.68" class="l"/>' +
'<line x1="62.76" y1="100" x2="189.99" y2="159.32" class="l"/>' +
'<line x1="200" y1="100" x2="175.49" y2="47.43" class="l"/>' +
'<line x1="200" y1="100" x2="175.49" y2="152.57" class="l"/>' +
'<path d="M93.57 114.37 A34 34 0 0 0 93.57 85.63" class="m"/>' +
'<path d="M191.55 118.13 A20 20 0 0 1 191.55 81.87" class="m"/>' +
'<circle cx="62.76" cy="100" r="2.6" class="p"/>' +
'<circle cx="200" cy="100" r="2.6" class="p"/>' +
'<circle cx="175.49" cy="47.43" r="2.6" class="p"/>' +
'<circle cx="175.49" cy="152.57" r="2.6" class="p"/>' +
'<text x="48" y="105" class="b">P</text>' +
'<text x="207" y="105" class="b">O</text>' +
'<text x="165" y="35">A</text>' +
'<text x="165" y="170">B</text>' +
'<text x="102" y="105">50°</text>' +
'<text x="159" y="104" text-anchor="middle">130°</text>' +
'</svg>';

DIA['c-alternate-seg'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A circle with a tangent touching it at the point A and a chord A B drawn from the point of contact; the angle between the tangent and the chord at A is marked theta and so is the angle A C B made by the same chord at a point C in the alternate segment, the two angles being equal.">' +
'<circle cx="160" cy="105" r="66" class="l"/>' +
'<line x1="46" y1="171" x2="274" y2="171" class="l"/>' +
'<line x1="160" y1="171" x2="222.02" y2="82.43" class="a"/>' +
'<line x1="105.94" y1="67.14" x2="160" y2="171" class="l"/>' +
'<line x1="105.94" y1="67.14" x2="222.02" y2="82.43" class="l"/>' +
'<path d="M186 171 A26 26 0 0 0 174.91 149.7" class="m"/>' +
'<path d="M118.86 91.98 A28 28 0 0 0 133.7 70.8" class="m"/>' +
'<circle cx="160" cy="171" r="2.6" class="p"/>' +
'<circle cx="222.02" cy="82.43" r="2.6" class="p"/>' +
'<circle cx="105.94" cy="67.14" r="2.6" class="p"/>' +
'<text x="155" y="188" class="b">A</text>' +
'<text x="231" y="78">B</text>' +
'<text x="90" y="60" class="b">C</text>' +
'<text x="190" y="158">θ</text>' +
'<text x="135" y="95">θ</text>' +
'</svg>';

DIA['c-tangent-secant'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="From a point P outside a circle the tangent P T touches the circle at T, and a second line from P cuts the circle first at the nearer point A and then at the farther point B, so that P A and P B lie along one secant.">' +
'<circle cx="205" cy="100" r="58" class="l"/>' +
'<line x1="45" y1="105" x2="185.68" y2="154.69" class="a"/>' +
'<line x1="45" y1="105" x2="248.58" y2="61.73" class="l"/>' +
'<circle cx="45" cy="105" r="2.6" class="p"/>' +
'<circle cx="185.68" cy="154.69" r="2.6" class="p"/>' +
'<circle cx="149.62" cy="82.76" r="2.6" class="p"/>' +
'<circle cx="248.58" cy="61.73" r="2.6" class="p"/>' +
'<text x="30" y="110" class="b">P</text>' +
'<text x="177" y="173" class="j">T</text>' +
'<text x="143" y="70" class="b">A</text>' +
'<text x="256" y="52" class="b">B</text>' +
'</svg>';

DIA['c-incircle-tri'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A triangle A B C with its inscribed circle drawn inside it; the circle has centre I and radius r and touches each of the three sides at one point.">' +
'<path d="M140 35 L60 165 L260 165 Z" class="l"/>' +
'<circle cx="147.86" cy="115.9" r="49.1" class="a"/>' +
'<line x1="147.86" y1="115.9" x2="147.86" y2="165" class="l"/>' +
'<circle cx="147.86" cy="115.9" r="2.6" class="p"/>' +
'<circle cx="147.86" cy="165" r="2.6" class="p"/>' +
'<circle cx="106.05" cy="90.17" r="2.6" class="p"/>' +
'<circle cx="183.94" cy="82.6" r="2.6" class="p"/>' +
'<text x="136" y="26" class="b">A</text>' +
'<text x="48" y="180" class="b">B</text>' +
'<text x="266" y="180" class="b">C</text>' +
'<text x="134" y="113" class="b">I</text>' +
'<text x="153" y="146">r</text>' +
'</svg>';

DIA['c-circum-tri'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A triangle A B C with its circumscribed circle passing through all three vertices; the circle has centre O inside the triangle and the radius R is drawn from O to the vertex A.">' +
'<circle cx="160" cy="100" r="70" class="a"/>' +
'<path d="M147.84 168.94 L96.56 70.42 L225.78 76.06 Z" class="l"/>' +
'<line x1="160" y1="100" x2="147.84" y2="168.94" class="l"/>' +
'<circle cx="160" cy="100" r="2.6" class="p"/>' +
'<circle cx="147.84" cy="168.94" r="2.6" class="p"/>' +
'<circle cx="96.56" cy="70.42" r="2.6" class="p"/>' +
'<circle cx="225.78" cy="76.06" r="2.6" class="p"/>' +
'<text x="160" y="92" text-anchor="middle" class="b">O</text>' +
'<text x="143" y="186" class="b">A</text>' +
'<text x="80" y="64" class="b">B</text>' +
'<text x="234" y="70" class="b">C</text>' +
'<text x="166" y="134" text-anchor="middle">R</text>' +
'</svg>';

DIA['c-tangent-lengths'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A triangle A B C with its incircle touching all three sides, where the two tangent segments from each vertex are equal: both marked s minus a at A, both marked s minus b at B and both marked s minus c at C.">' +
'<path d="M140 35 L60 165 L260 165 Z" class="l"/>' +
'<circle cx="147.86" cy="115.9" r="49.1" class="a"/>' +
'<circle cx="147.86" cy="165" r="2.6" class="p"/>' +
'<circle cx="106.05" cy="90.17" r="2.6" class="p"/>' +
'<circle cx="183.94" cy="82.6" r="2.6" class="p"/>' +
'<text x="136" y="26" class="b">A</text>' +
'<text x="48" y="180" class="b">B</text>' +
'<text x="266" y="180" class="b">C</text>' +
'<text x="107" y="55" text-anchor="middle">s-a</text>' +
'<text x="176" y="48" text-anchor="middle">s-a</text>' +
'<text x="66" y="120" text-anchor="middle">s-b</text>' +
'<text x="104" y="181" text-anchor="middle">s-b</text>' +
'<text x="237" y="114" text-anchor="middle">s-c</text>' +
'<text x="204" y="181" text-anchor="middle">s-c</text>' +
'</svg>';

/* circles-two — 11 figures */
DIA['c-ext-touch'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="Two circles that touch each other at a single point on the outside, with centres O one and O two joined by a straight line. The join passes through the point of contact, so the distance d between the centres is the radius r one added to the radius r two.">' +
'<circle cx="126" cy="100" r="50" class="l"/>' +
'<circle cx="210" cy="100" r="34" class="l"/>' +
'<line x1="126" y1="100" x2="210" y2="100" class="a"/>' +
'<circle cx="126" cy="100" r="2.6" class="p"/>' +
'<circle cx="210" cy="100" r="2.6" class="p"/>' +
'<circle cx="176" cy="100" r="2.6" class="p"/>' +
'<text x="160" y="34" text-anchor="middle">d = r₁ + r₂</text>' +
'<text x="151" y="92" text-anchor="middle">r₁</text>' +
'<text x="193" y="92" text-anchor="middle">r₂</text>' +
'<text x="168" y="116" text-anchor="middle" class="j">d</text>' +
'<text x="126" y="120" text-anchor="middle" class="b">O₁</text>' +
'<text x="210" y="120" text-anchor="middle" class="b">O₂</text>' +
'</svg>';

DIA['c-int-touch'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A small circle lying inside a large one and touching it at a single point, with the centres O one and O two joined. Because both centres and the point of contact lie on one straight line, the distance d between the centres is the large radius r one less the small radius r two.">' +
'<circle cx="160" cy="100" r="72" class="l"/>' +
'<circle cx="198" cy="100" r="34" class="l"/>' +
'<line x1="160" y1="100" x2="198" y2="100" class="a"/>' +
'<line x1="160" y1="100" x2="160" y2="28" class="l"/>' +
'<line x1="198" y1="100" x2="198" y2="66" class="l"/>' +
'<circle cx="160" cy="100" r="2.6" class="p"/>' +
'<circle cx="198" cy="100" r="2.6" class="p"/>' +
'<circle cx="232" cy="100" r="2.6" class="p"/>' +
'<text x="138" y="64">r₁</text>' +
'<text x="204" y="84">r₂</text>' +
'<text x="179" y="92" text-anchor="middle" class="j">d</text>' +
'<text x="154" y="118" text-anchor="middle" class="b">O₁</text>' +
'<text x="198" y="118" text-anchor="middle" class="b">O₂</text>' +
'<text x="160" y="190" text-anchor="middle">d = r₁ - r₂</text>' +
'</svg>';

DIA['c-intersect'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="Two circles that cut each other at the two points A and B. The common chord A B joins those points, and the line joining the centres O one and O two crosses the common chord at right angles and bisects it.">' +
'<circle cx="124" cy="100" r="62" class="l"/>' +
'<circle cx="209" cy="100" r="50" class="l"/>' +
'<line x1="124" y1="100" x2="209" y2="100" class="l"/>' +
'<line x1="174.4" y1="63.9" x2="174.4" y2="136.1" class="a"/>' +
'<path d="M174.4 91 L183.4 91 L183.4 100" class="l"/>' +
'<circle cx="124" cy="100" r="2.6" class="p"/>' +
'<circle cx="209" cy="100" r="2.6" class="p"/>' +
'<circle cx="174.4" cy="63.9" r="2.6" class="p"/>' +
'<circle cx="174.4" cy="136.1" r="2.6" class="p"/>' +
'<text x="178" y="50" text-anchor="middle" class="b">A</text>' +
'<text x="178" y="152" text-anchor="middle" class="b">B</text>' +
'<text x="124" y="118" text-anchor="middle" class="b">O₁</text>' +
'<text x="209" y="118" text-anchor="middle" class="b">O₂</text>' +
'</svg>';

DIA['c-dct'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="Two circles lying apart, with one direct common tangent drawn so that it touches both circles on the same side and does not cross the line joining the centres. The radius drawn to each point of contact meets the tangent at a right angle, the radii are r one and r two, and the centres are d apart.">' +
'<circle cx="78" cy="112" r="50" class="l"/>' +
'<circle cx="206" cy="112" r="30" class="l"/>' +
'<line x1="78" y1="112" x2="206" y2="112" class="l"/>' +
'<line x1="66.06" y1="59.48" x2="230.44" y2="85.5" class="a"/>' +
'<line x1="78" y1="112" x2="85.81" y2="62.61" class="l"/>' +
'<line x1="206" y1="112" x2="210.69" y2="82.37" class="l"/>' +
'<path d="M84.4 71.5 L93.29 72.91 L94.7 64.02" class="l"/>' +
'<path d="M209.28 91.26 L218.17 92.67 L219.58 83.78" class="l"/>' +
'<circle cx="78" cy="112" r="2.6" class="p"/>' +
'<circle cx="206" cy="112" r="2.6" class="p"/>' +
'<circle cx="85.81" cy="62.61" r="2.6" class="p"/>' +
'<circle cx="210.69" cy="82.37" r="2.6" class="p"/>' +
'<text x="62" y="90">r₁</text>' +
'<text x="214" y="100">r₂</text>' +
'<text x="142" y="128" text-anchor="middle">d</text>' +
'<text x="78" y="128" text-anchor="middle" class="b">O₁</text>' +
'<text x="206" y="128" text-anchor="middle" class="b">O₂</text>' +
'</svg>';

DIA['c-tct'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="Two circles lying apart, with one transverse common tangent drawn so that it touches one circle from above and the other from below and therefore crosses the line joining the centres O one and O two between them. The radius to each point of contact meets the tangent at a right angle.">' +
'<circle cx="90" cy="100" r="42" class="l"/>' +
'<circle cx="210" cy="100" r="28" class="l"/>' +
'<line x1="90" y1="100" x2="210" y2="100" class="l"/>' +
'<line x1="101.5" y1="56.58" x2="206.67" y2="132.06" class="a"/>' +
'<line x1="90" y1="100" x2="114.5" y2="65.91" class="l"/>' +
'<line x1="210" y1="100" x2="193.67" y2="122.73" class="l"/>' +
'<path d="M109.25 73.21 L116.56 78.46 L121.81 71.16" class="l"/>' +
'<path d="M198.92 115.43 L206.23 120.68 L200.98 127.98" class="l"/>' +
'<circle cx="90" cy="100" r="2.6" class="p"/>' +
'<circle cx="210" cy="100" r="2.6" class="p"/>' +
'<circle cx="114.5" cy="65.91" r="2.6" class="p"/>' +
'<circle cx="193.67" cy="122.73" r="2.6" class="p"/>' +
'<circle cx="162" cy="100" r="2.6" class="p"/>' +
'<text x="90" y="116" text-anchor="middle" class="b">O₁</text>' +
'<text x="210" y="88" text-anchor="middle" class="b">O₂</text>' +
'</svg>';

DIA['c-tangents-count'] =
'<svg viewBox="0 0 320 240" role="img" aria-label="Four small panels counting the common tangents of two circles. Two circles lying wholly apart have four common tangents, two circles touching on the outside have three, two circles that cut each other have two, and a circle touching another from the inside has one.">' +
'<line x1="160" y1="16" x2="160" y2="232" class="g"/>' +
'<line x1="12" y1="122" x2="308" y2="122" class="g"/>' +
'<circle cx="46" cy="58" r="20" class="l"/>' +
'<circle cx="106" cy="58" r="14" class="l"/>' +
'<line x1="38.05" y1="37.1" x2="117.35" y2="45.07" class="a"/>' +
'<line x1="38.05" y1="78.9" x2="117.35" y2="70.93" class="a"/>' +
'<line x1="49.91" y1="36.42" x2="105.49" y2="74.64" class="a"/>' +
'<line x1="49.91" y1="79.58" x2="105.49" y2="41.36" class="a"/>' +
'<text x="78" y="108" text-anchor="middle" class="j">apart: 4</text>' +
'<circle cx="206" cy="58" r="20" class="l"/>' +
'<circle cx="240" cy="58" r="14" class="l"/>' +
'<line x1="198.7" y1="36.37" x2="253.3" y2="46.16" class="a"/>' +
'<line x1="198.7" y1="79.63" x2="253.3" y2="69.84" class="a"/>' +
'<line x1="226" y1="32" x2="226" y2="84" class="a"/>' +
'<circle cx="226" cy="58" r="2.6" class="p"/>' +
'<text x="240" y="108" text-anchor="middle" class="j">externally: 3</text>' +
'<circle cx="66" cy="178" r="20" class="l"/>' +
'<circle cx="94" cy="178" r="14" class="l"/>' +
'<line x1="58.57" y1="155.9" x2="108.72" y2="166.9" class="a"/>' +
'<line x1="58.57" y1="200.1" x2="108.72" y2="189.1" class="a"/>' +
'<text x="77" y="228" text-anchor="middle" class="j">intersecting: 2</text>' +
'<circle cx="240" cy="178" r="24" class="l"/>' +
'<circle cx="253" cy="178" r="11" class="l"/>' +
'<line x1="264" y1="152" x2="264" y2="204" class="a"/>' +
'<circle cx="264" cy="178" r="2.6" class="p"/>' +
'<text x="240" y="228" text-anchor="middle" class="j">internally: 1</text>' +
'</svg>';

DIA['c-three-touch'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="Three circles of equal radius r, each one touching the other two, with their centres O one, O two and O three joined to form an equilateral triangle whose every side is two r long, each side passing through one point of contact.">' +
'<circle cx="160" cy="62" r="42" class="l"/>' +
'<circle cx="118" cy="134.75" r="42" class="l"/>' +
'<circle cx="202" cy="134.75" r="42" class="l"/>' +
'<line x1="160" y1="62" x2="118" y2="134.75" class="a"/>' +
'<line x1="160" y1="62" x2="202" y2="134.75" class="a"/>' +
'<line x1="118" y1="134.75" x2="202" y2="134.75" class="a"/>' +
'<circle cx="160" cy="62" r="2.6" class="p"/>' +
'<circle cx="118" cy="134.75" r="2.6" class="p"/>' +
'<circle cx="202" cy="134.75" r="2.6" class="p"/>' +
'<circle cx="139" cy="98.37" r="2.6" class="p"/>' +
'<circle cx="181" cy="98.37" r="2.6" class="p"/>' +
'<circle cx="160" cy="134.75" r="2.6" class="p"/>' +
'<text x="160" y="52" text-anchor="middle" class="b">O₁</text>' +
'<text x="100" y="150" class="b">O₂</text>' +
'<text x="206" y="150" class="b">O₃</text>' +
'<text x="138" y="150" text-anchor="middle" class="j">2r</text>' +
'</svg>';

DIA['c-in-square'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="The largest circle that fits inside a square of side a. The circle touches each of the four sides at the middle of that side, and the radius drawn to one point of contact meets the side at a right angle and measures a over two.">' +
'<rect x="100" y="40" width="120" height="120" class="l"/>' +
'<circle cx="160" cy="100" r="60" class="l"/>' +
'<line x1="160" y1="100" x2="220" y2="100" class="a"/>' +
'<path d="M210 100 L210 90 L220 90" class="l"/>' +
'<circle cx="160" cy="100" r="2.6" class="p"/>' +
'<circle cx="220" cy="100" r="2.6" class="p"/>' +
'<text x="160" y="176" text-anchor="middle">a</text>' +
'<text x="190" y="92" text-anchor="middle" class="j">a/2</text>' +
'</svg>';

DIA['c-circum-square'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A square of side a drawn inside a circle so that all four corners lie on the circle. The diagonal d of the square joins two opposite corners through the centre, so the diagonal is a diameter of the circle.">' +
'<circle cx="160" cy="100" r="68" class="l"/>' +
'<rect x="111.92" y="51.92" width="96.17" height="96.17" class="l"/>' +
'<line x1="111.92" y1="51.92" x2="208.08" y2="148.08" class="a"/>' +
'<path d="M198.08 51.92 L198.08 61.92 L208.08 61.92" class="l"/>' +
'<circle cx="160" cy="100" r="2.6" class="p"/>' +
'<circle cx="111.92" cy="51.92" r="2.6" class="p"/>' +
'<circle cx="208.08" cy="148.08" r="2.6" class="p"/>' +
'<text x="160" y="164" text-anchor="middle">a</text>' +
'<text x="182" y="112" class="j">d</text>' +
'</svg>';

DIA['c-equi-in-circle'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="An equilateral triangle of side a drawn inside a circle so that its three corners lie on the circle. The tick marks show the three sides are equal, and the radius R joins the centre to one corner, its length being a divided by the square root of three.">' +
'<circle cx="160" cy="100" r="70" class="l"/>' +
'<polygon points="160,30 220.62,135 99.38,135" class="l"/>' +
'<line x1="160" y1="100" x2="220.62" y2="135" class="a"/>' +
'<line x1="160" y1="130" x2="160" y2="140" class="m"/>' +
'<line x1="124.93" y1="79.75" x2="134.45" y2="85.25" class="m"/>' +
'<line x1="185.55" y1="85.25" x2="195.07" y2="79.75" class="m"/>' +
'<circle cx="160" cy="100" r="2.6" class="p"/>' +
'<circle cx="160" cy="30" r="2.6" class="p"/>' +
'<circle cx="99.38" cy="135" r="2.6" class="p"/>' +
'<circle cx="220.62" cy="135" r="2.6" class="p"/>' +
'<text x="160" y="150" text-anchor="middle">a</text>' +
'<text x="183" y="125" class="j">R</text>' +
'</svg>';

DIA['c-circle-in-equi'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A circle drawn inside an equilateral triangle of side a so that it touches all three sides, each at the middle of that side. The radius r runs from the centre to one point of contact and meets that side at a right angle, its length being a divided by twice the square root of three.">' +
'<polygon points="160,34.36 236,166 84,166" class="l"/>' +
'<circle cx="160" cy="122.12" r="43.88" class="l"/>' +
'<line x1="160" y1="122.12" x2="198" y2="100.18" class="a"/>' +
'<path d="M190.21 104.68 L194.71 112.47 L202.5 107.97" class="l"/>' +
'<circle cx="160" cy="122.12" r="2.6" class="p"/>' +
'<circle cx="198" cy="100.18" r="2.6" class="p"/>' +
'<text x="160" y="182" text-anchor="middle">a</text>' +
'<text x="184" y="122" class="j">r</text>' +
'</svg>';

/* heights — 10 figures */
DIA['h-elevation'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="An observer standing on level ground looks up at the top of a tower of height h, which stands at a horizontal distance d from him; the angle of elevation at the observer is theta.">' +
'<line x1="14" y1="170" x2="306" y2="170" class="l"/>' +
'<line x1="250" y1="170" x2="250" y2="60" class="a"/>' +
'<line x1="40" y1="170" x2="250" y2="60" class="l"/>' +
'<path d="M250 158 L238 158 L238 170" class="l"/>' +
'<path d="M70 170 A30 30 0 0 0 66.6 156.1" class="m"/>' +
'<circle cx="40" cy="170" r="2.6" class="p"/>' +
'<circle cx="250" cy="170" r="2.6" class="p"/>' +
'<circle cx="250" cy="60" r="2.6" class="p"/>' +
'<text x="76" y="165">θ</text>' +
'<text x="256" y="118" class="j">h</text>' +
'<text x="145" y="186" text-anchor="middle">d</text>' +
'</svg>';

DIA['h-depression'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A tower of height h with an object lying on the ground at a horizontal distance d from its foot; from the top of the tower the angle of depression of the object, measured down from the dashed horizontal, is thirty degrees.">' +
'<line x1="14" y1="175" x2="306" y2="175" class="l"/>' +
'<line x1="60" y1="175" x2="60" y2="60" class="a"/>' +
'<line x1="60" y1="60" x2="285" y2="60" class="g"/>' +
'<line x1="60" y1="60" x2="259.2" y2="175" class="l"/>' +
'<path d="M60 163 L72 163 L72 175" class="l"/>' +
'<path d="M96 60 A36 36 0 0 1 91.2 78" class="m"/>' +
'<circle cx="60" cy="60" r="2.6" class="p"/>' +
'<circle cx="60" cy="175" r="2.6" class="p"/>' +
'<circle cx="259.2" cy="175" r="2.6" class="p"/>' +
'<text x="102" y="76">30°</text>' +
'<text x="68" y="120" class="j">h</text>' +
'<text x="160" y="191" text-anchor="middle">d</text>' +
'</svg>';

DIA['h-complementary'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A tower of height h seen from two points on opposite sides of its foot, one at distance x where the angle of elevation is thirty degrees and one at distance y where it is sixty degrees, the two angles being complementary.">' +
'<line x1="14" y1="170" x2="306" y2="170" class="l"/>' +
'<line x1="207.2" y1="170" x2="207.2" y2="70" class="a"/>' +
'<line x1="34" y1="170" x2="207.2" y2="70" class="l"/>' +
'<line x1="264.9" y1="170" x2="207.2" y2="70" class="l"/>' +
'<path d="M207.2 158 L195.2 158 L195.2 170" class="l"/>' +
'<path d="M60 170 A26 26 0 0 0 56.5 157" class="m"/>' +
'<path d="M244.9 170 A20 20 0 0 1 254.9 152.7" class="m"/>' +
'<circle cx="34" cy="170" r="2.6" class="p"/>' +
'<circle cx="264.9" cy="170" r="2.6" class="p"/>' +
'<circle cx="207.2" cy="170" r="2.6" class="p"/>' +
'<circle cx="207.2" cy="70" r="2.6" class="p"/>' +
'<text x="66" y="165">30°</text>' +
'<text x="218" y="165">60°</text>' +
'<text x="120" y="186" text-anchor="middle">x</text>' +
'<text x="236" y="186" text-anchor="middle">y</text>' +
'<text x="215" y="122" class="j">h</text>' +
'</svg>';

DIA['h-flagstaff'] =
'<svg viewBox="0 0 320 240" role="img" aria-label="A flagstaff of height f standing on top of a tower of height h, seen from one point on the ground where the top of the tower is at an elevation of thirty degrees and the top of the flagstaff at sixty degrees.">' +
'<line x1="14" y1="210" x2="306" y2="210" class="l"/>' +
'<line x1="180" y1="210" x2="180" y2="146.5" class="l"/>' +
'<line x1="180" y1="146.5" x2="180" y2="19.5" class="a"/>' +
'<line x1="70" y1="210" x2="180" y2="146.5" class="l"/>' +
'<line x1="70" y1="210" x2="180" y2="19.5" class="l"/>' +
'<path d="M180 198 L168 198 L168 210" class="l"/>' +
'<path d="M100 210 A30 30 0 0 0 96 195" class="m"/>' +
'<path d="M126 210 A56 56 0 0 0 98 161.5" class="m"/>' +
'<circle cx="70" cy="210" r="2.6" class="p"/>' +
'<circle cx="180" cy="210" r="2.6" class="p"/>' +
'<circle cx="180" cy="146.5" r="2.6" class="p"/>' +
'<circle cx="180" cy="19.5" r="2.6" class="p"/>' +
'<text x="132" y="205">30°</text>' +
'<text x="130" y="145">60°</text>' +
'<text x="188" y="182">h</text>' +
'<text x="188" y="86" class="j">f</text>' +
'</svg>';

DIA['h-two-towers'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="Two towers of heights h one and h two standing on opposite sides of a road, each seen from the foot of the other; the top of the far tower is at forty five degrees from the foot of one and at thirty degrees from the foot of the other.">' +
'<line x1="14" y1="180" x2="306" y2="180" class="l"/>' +
'<line x1="80" y1="180" x2="80" y2="40" class="l"/>' +
'<line x1="220" y1="180" x2="220" y2="99.2" class="a"/>' +
'<line x1="80" y1="180" x2="220" y2="99.2" class="l"/>' +
'<line x1="220" y1="180" x2="80" y2="40" class="l"/>' +
'<path d="M80 168 L92 168 L92 180" class="l"/>' +
'<path d="M220 168 L208 168 L208 180" class="l"/>' +
'<path d="M106 180 A26 26 0 0 0 102.5 167" class="m"/>' +
'<path d="M194 180 A26 26 0 0 1 201.6 161.6" class="m"/>' +
'<circle cx="80" cy="180" r="2.6" class="p"/>' +
'<circle cx="80" cy="40" r="2.6" class="p"/>' +
'<circle cx="220" cy="180" r="2.6" class="p"/>' +
'<circle cx="220" cy="99.2" r="2.6" class="p"/>' +
'<text x="114" y="175">30°</text>' +
'<text x="166" y="175">45°</text>' +
'<text x="88" y="112">h₁</text>' +
'<text x="226" y="142" class="j">h₂</text>' +
'</svg>';

DIA['h-shadow'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A vertical pole of height h standing on level ground, with its shadow stretching away along the ground; the sun is at an elevation of thirty degrees, measured at the tip of the shadow between the ground and the line to the top of the pole.">' +
'<line x1="14" y1="170" x2="306" y2="170" class="l"/>' +
'<line x1="100" y1="170" x2="100" y2="80" class="l"/>' +
'<line x1="100" y1="170" x2="255.9" y2="170" class="a"/>' +
'<line x1="255.9" y1="170" x2="100" y2="80" class="l"/>' +
'<path d="M100 158 L112 158 L112 170" class="l"/>' +
'<path d="M229.9 170 A26 26 0 0 1 233.4 157" class="m"/>' +
'<circle cx="100" cy="80" r="2.6" class="p"/>' +
'<circle cx="100" cy="170" r="2.6" class="p"/>' +
'<circle cx="255.9" cy="170" r="2.6" class="p"/>' +
'<text x="84" y="124">h</text>' +
'<text x="200" y="165">30°</text>' +
'<text x="178" y="186" text-anchor="middle" class="j">shadow</text>' +
'</svg>';

DIA['h-river'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A tree of height h growing on the far bank of a river of width w; from the point on the near bank directly opposite the tree its top is at an elevation of sixty degrees, and from a point further back on the same bank it is at thirty degrees.">' +
'<line x1="14" y1="175" x2="196.7" y2="175" class="l"/>' +
'<line x1="280" y1="175" x2="306" y2="175" class="l"/>' +
'<rect x="196.7" y="175" width="83.3" height="20" class="f"/>' +
'<line x1="196.7" y1="175" x2="280" y2="175" class="a"/>' +
'<line x1="280" y1="175" x2="280" y2="30.7" class="l"/>' +
'<line x1="196.7" y1="175" x2="280" y2="30.7" class="l"/>' +
'<line x1="30" y1="175" x2="280" y2="30.7" class="l"/>' +
'<path d="M280 163 L268 163 L268 175" class="l"/>' +
'<path d="M220.7 175 A24 24 0 0 0 208.7 154.2" class="m"/>' +
'<path d="M56 175 A26 26 0 0 0 52.5 162" class="m"/>' +
'<circle cx="30" cy="175" r="2.6" class="p"/>' +
'<circle cx="196.7" cy="175" r="2.6" class="p"/>' +
'<circle cx="280" cy="175" r="2.6" class="p"/>' +
'<circle cx="280" cy="30.7" r="2.6" class="p"/>' +
'<text x="62" y="170">30°</text>' +
'<text x="224" y="170">60°</text>' +
'<text x="238" y="190" text-anchor="middle" class="j">w</text>' +
'<text x="288" y="100">h</text>' +
'</svg>';

DIA['h-plane'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="An aeroplane flying level at a height h above the ground, seen from one point at two instants: at the first the angle of elevation is sixty degrees and at the second, further away along the dashed flight line, it is thirty degrees.">' +
'<line x1="14" y1="175" x2="306" y2="175" class="l"/>' +
'<line x1="90" y1="55" x2="290" y2="55" class="g"/>' +
'<line x1="40" y1="175" x2="109.3" y2="55" class="l"/>' +
'<line x1="40" y1="175" x2="247.8" y2="55" class="l"/>' +
'<line x1="247.8" y1="175" x2="247.8" y2="55" class="a"/>' +
'<path d="M247.8 163 L235.8 163 L235.8 175" class="l"/>' +
'<path d="M66 175 A26 26 0 0 0 62.5 162" class="m"/>' +
'<path d="M90 175 A50 50 0 0 0 65 131.7" class="m"/>' +
'<circle cx="40" cy="175" r="2.6" class="p"/>' +
'<circle cx="109.3" cy="55" r="2.6" class="p"/>' +
'<circle cx="247.8" cy="55" r="2.6" class="p"/>' +
'<text x="96" y="170">30°</text>' +
'<text x="96" y="110">60°</text>' +
'<text x="254" y="118" class="j">h</text>' +
'</svg>';

DIA['h-cliff-boat'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A boat on the sea seen from the top of a cliff of height h at two angles of depression, forty five degrees when it is nearer the cliff and thirty degrees when it has moved further out, both measured down from the dashed horizontal at the top.">' +
'<line x1="14" y1="175" x2="306" y2="175" class="l"/>' +
'<rect x="55" y="175" width="251" height="20" class="f"/>' +
'<line x1="55" y1="175" x2="55" y2="65" class="a"/>' +
'<line x1="55" y1="65" x2="280" y2="65" class="g"/>' +
'<line x1="55" y1="65" x2="165" y2="175" class="l"/>' +
'<line x1="55" y1="65" x2="245.5" y2="175" class="l"/>' +
'<path d="M55 163 L67 163 L67 175" class="l"/>' +
'<path d="M85 65 A30 30 0 0 1 81 80" class="m"/>' +
'<path d="M107 65 A52 52 0 0 1 91.8 101.8" class="m"/>' +
'<circle cx="55" cy="65" r="2.6" class="p"/>' +
'<circle cx="165" cy="175" r="2.6" class="p"/>' +
'<circle cx="245.5" cy="175" r="2.6" class="p"/>' +
'<text x="112" y="88">30°</text>' +
'<text x="130" y="135">45°</text>' +
'<text x="63" y="124" class="j">h</text>' +
'</svg>';

DIA['h-ladder'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A ladder of length l leaning against a vertical wall, reaching a height h up the wall, with its foot a distance d out from the wall so that the ladder makes an angle of sixty degrees with the ground.">' +
'<line x1="14" y1="180" x2="306" y2="180" class="l"/>' +
'<line x1="70" y1="180" x2="70" y2="40" class="l"/>' +
'<line x1="140" y1="180" x2="70" y2="58.8" class="a"/>' +
'<path d="M70 168 L82 168 L82 180" class="l"/>' +
'<path d="M116 180 A24 24 0 0 1 128 159.2" class="m"/>' +
'<circle cx="140" cy="180" r="2.6" class="p"/>' +
'<circle cx="70" cy="58.8" r="2.6" class="p"/>' +
'<circle cx="70" cy="180" r="2.6" class="p"/>' +
'<text x="88" y="175">60°</text>' +
'<text x="56" y="120">h</text>' +
'<text x="114" y="125" class="j">l</text>' +
'<text x="105" y="194" text-anchor="middle">d</text>' +
'</svg>';

/* quads-fields — 10 figures */
/* The remaining quadrilaterals and the field figures. f-shaded-petals is
   deliberately not drawn: no question uses it, because the four-quadrant
   overlap it describes was left untested rather than keyed from a result
   nobody had derived. */

DIA['q-square-diag'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A square of side a with one diagonal drawn, meeting the side at a right angle at the corner. The diagonal is a times the square root of two.">' +
'<path d="M100 50 L220 50 L220 170 L100 170 Z" class="l"/>' +
'<line x1="100" y1="170" x2="220" y2="50" class="a"/>' +
'<path d="M100 158 L112 158 L112 170" class="l"/>' +
'<text x="160" y="43" text-anchor="middle">a</text>' +
'<text x="232" y="115">a</text>' +
'<text x="160" y="188" text-anchor="middle">a</text>' +
'<text x="88" y="115">a</text>' +
'<text x="172" y="102" class="j">a√2</text>' +
'</svg>';

DIA['q-kite'] =
'<svg viewBox="0 0 320 212" role="img" aria-label="A kite with its two diagonals drawn. The long diagonal bisects the short one at right angles, but the short one does not bisect the long one.">' +
'<path d="M160 20 L100 100 L160 190 L220 100 Z" class="l"/>' +
'<line x1="160" y1="20" x2="160" y2="190" class="a"/>' +
'<line x1="100" y1="100" x2="220" y2="100" class="a"/>' +
'<path d="M160 90 L170 90 L170 100" class="l"/>' +
'<line x1="128" y1="96" x2="132" y2="104" class="m"/>' +
'<line x1="188" y1="96" x2="192" y2="104" class="m"/>' +
'<circle cx="160" cy="100" r="2.6" class="p"/>' +
'<text x="160" y="14" text-anchor="middle" class="b">A</text>' +
'<text x="88" y="104">B</text>' +
'<text x="160" y="198" text-anchor="middle">C</text>' +
'<text x="226" y="104">D</text>' +
'<text x="226" y="60">BO = OD</text>' +
'<text x="226" y="150">AO ≠ OC</text>' +
'</svg>';

DIA['q-hexagon'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A regular hexagon of side a split by its three long diagonals into six equilateral triangles. Each interior angle is one hundred and twenty degrees and the longest diagonal is twice the side.">' +
'<path d="M230 105 L195 44.4 L125 44.4 L90 105 L125 165.6 L195 165.6 Z" class="l"/>' +
'<line x1="90" y1="105" x2="230" y2="105" class="a"/>' +
'<line x1="125" y1="44.4" x2="195" y2="165.6" class="g"/>' +
'<line x1="195" y1="44.4" x2="125" y2="165.6" class="g"/>' +
'<path d="M103 94 A20 20 0 0 1 112 84" class="m"/>' +
'<circle cx="160" cy="105" r="2.6" class="p"/>' +
'<text x="160" y="38" text-anchor="middle">a</text>' +
'<text x="246" y="100">a</text>' +
'<text x="118" y="88">120°</text>' +
'<text x="160" y="124" text-anchor="middle" class="j">2a</text>' +
'<text x="236" y="170">6 equilateral</text>' +
'<text x="236" y="184">triangles</text>' +
'</svg>';

DIA['q-polygon-diag'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A regular hexagon with all nine of its diagonals drawn, illustrating that an n sided polygon has n times n minus three, all over two, diagonals.">' +
'<path d="M230 105 L195 44.4 L125 44.4 L90 105 L125 165.6 L195 165.6 Z" class="l"/>' +
'<line x1="230" y1="105" x2="125" y2="44.4" class="a"/>' +
'<line x1="230" y1="105" x2="90" y2="105" class="a"/>' +
'<line x1="230" y1="105" x2="125" y2="165.6" class="a"/>' +
'<line x1="195" y1="44.4" x2="90" y2="105" class="a"/>' +
'<line x1="195" y1="44.4" x2="125" y2="165.6" class="a"/>' +
'<line x1="195" y1="44.4" x2="195" y2="165.6" class="a"/>' +
'<line x1="125" y1="44.4" x2="125" y2="165.6" class="a"/>' +
'<line x1="125" y1="44.4" x2="195" y2="165.6" class="a"/>' +
'<line x1="90" y1="105" x2="195" y2="165.6" class="a"/>' +
'<text x="250" y="100">n = 6</text>' +
'<text x="250" y="116">9 diagonals</text>' +
'<text x="160" y="190" text-anchor="middle">n(n − 3)/2</text>' +
'</svg>';

DIA['q-cyclic-brahma'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A cyclic quadrilateral with all four vertices on one circle and its four sides labelled a, b, c and d, for use with Brahmagupta formula.">' +
'<circle cx="160" cy="105" r="70" class="g"/>' +
'<path d="M99.4 70 L195 44.4 L220.6 140 L125 165.6 Z" class="l"/>' +
'<circle cx="99.4" cy="70" r="2.6" class="p"/>' +
'<circle cx="195" cy="44.4" r="2.6" class="p"/>' +
'<circle cx="220.6" cy="140" r="2.6" class="p"/>' +
'<circle cx="125" cy="165.6" r="2.6" class="p"/>' +
'<text x="88" y="66">A</text>' +
'<text x="200" y="38" class="b">B</text>' +
'<text x="228" y="145">C</text>' +
'<text x="116" y="180">D</text>' +
'<text x="140" y="50">a</text>' +
'<text x="216" y="94">b</text>' +
'<text x="178" y="166">c</text>' +
'<text x="98" y="124">d</text>' +
'</svg>';

DIA['f-path-out'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A rectangular field with a path of uniform width running all the way round the outside of it, the path shaded.">' +
'<path d="M70 50 H250 V170 H70 Z M90 70 H230 V150 H90 Z" fill-rule="evenodd" class="f"/>' +
'<path d="M70 50 H250 V170 H70 Z" class="l"/>' +
'<path d="M90 70 H230 V150 H90 Z" class="a"/>' +
'<line x1="70" y1="40" x2="90" y2="40" class="g"/>' +
'<text x="160" y="112" text-anchor="middle">field l × b</text>' +
'<text x="80" y="34" text-anchor="middle">w</text>' +
'<text x="160" y="188" text-anchor="middle">(l + 2w)(b + 2w) − lb</text>' +
'</svg>';

DIA['f-path-in'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A rectangular field with a path of uniform width running all the way round the inside of its boundary, the path shaded.">' +
'<path d="M70 50 H250 V170 H70 Z M90 70 H230 V150 H90 Z" fill-rule="evenodd" class="f"/>' +
'<path d="M70 50 H250 V170 H70 Z" class="a"/>' +
'<path d="M90 70 H230 V150 H90 Z" class="l"/>' +
'<text x="160" y="112" text-anchor="middle">what is left</text>' +
'<text x="160" y="42" text-anchor="middle">field l × b</text>' +
'<text x="160" y="188" text-anchor="middle">lb − (l − 2w)(b − 2w)</text>' +
'</svg>';

DIA['f-crossroads'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A rectangular field with two roads of equal width crossing it at right angles through the middle, both roads shaded, and the square where they cross counted once.">' +
'<path d="M60 96 H260 V124 H60 Z" class="f"/>' +
'<path d="M146 50 H174 V170 H146 Z" class="f"/>' +
'<path d="M60 50 H260 V170 H60 Z" class="l"/>' +
'<line x1="60" y1="96" x2="260" y2="96" class="g"/>' +
'<line x1="60" y1="124" x2="260" y2="124" class="g"/>' +
'<line x1="146" y1="50" x2="146" y2="170" class="g"/>' +
'<line x1="174" y1="50" x2="174" y2="170" class="g"/>' +
'<path d="M146 96 H174 V124 H146 Z" class="a"/>' +
'<text x="160" y="42" text-anchor="middle">l</text>' +
'<text x="272" y="115">b</text>' +
'<text x="100" y="88" text-anchor="middle">w</text>' +
'<text x="160" y="188" text-anchor="middle">lw + bw − w²</text>' +
'</svg>';

DIA['f-grazing'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A square field with an animal tied by a rope at one corner. The quarter circle it can graze is shaded, and the rope is the radius.">' +
'<path d="M90 180 L160 180 A70 70 0 0 0 90 110 Z" class="f"/>' +
'<path d="M90 40 H230 V180 H90 Z" class="l"/>' +
'<path d="M160 180 A70 70 0 0 0 90 110" class="a"/>' +
'<line x1="90" y1="180" x2="160" y2="180" class="a"/>' +
'<line x1="90" y1="180" x2="90" y2="110" class="a"/>' +
'<circle cx="90" cy="180" r="3" class="p"/>' +
'<text x="126" y="174" text-anchor="middle" class="j">r</text>' +
'<text x="160" y="34" text-anchor="middle">a</text>' +
'<text x="242" y="115">a</text>' +
'<text x="246" y="170">¼πr²</text>' +
'</svg>';

DIA['f-circle-in-rect'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="The largest circle that fits inside a rectangle. Its diameter equals the shorter side of the rectangle, and the four pieces left over sit at the corners.">' +
'<path d="M60 55 H260 V155 H60 Z" class="l"/>' +
'<circle cx="160" cy="105" r="50" class="a"/>' +
'<line x1="160" y1="105" x2="160" y2="55" class="g"/>' +
'<circle cx="160" cy="105" r="2.6" class="p"/>' +
'<text x="160" y="48" text-anchor="middle">l</text>' +
'<text x="272" y="110">b</text>' +
'<text x="166" y="84" class="j">r = b/2</text>' +
'<text x="160" y="184" text-anchor="middle">left over = lb − πr²</text>' +
'</svg>';

/* solids — 16 figures */
DIA['s-cube'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A cube of edge a drawn in three dimensions, with the diagonal of the front face marked a root two and the diagonal joining two opposite corners through the inside of the cube marked a root three.">' +
'<line x1="220" y1="150" x2="180" y2="124" class="g"/>' +
'<line x1="70" y1="124" x2="180" y2="124" class="g"/>' +
'<line x1="180" y1="124" x2="180" y2="14" class="g"/>' +
'<line x1="110" y1="150" x2="220" y2="150" class="l"/>' +
'<line x1="220" y1="150" x2="220" y2="40" class="l"/>' +
'<line x1="220" y1="40" x2="110" y2="40" class="l"/>' +
'<line x1="110" y1="40" x2="110" y2="150" class="l"/>' +
'<line x1="110" y1="150" x2="70" y2="124" class="l"/>' +
'<line x1="110" y1="40" x2="70" y2="14" class="l"/>' +
'<line x1="220" y1="40" x2="180" y2="14" class="l"/>' +
'<line x1="70" y1="124" x2="70" y2="14" class="l"/>' +
'<line x1="70" y1="14" x2="180" y2="14" class="l"/>' +
'<line x1="110" y1="150" x2="220" y2="40" class="l"/>' +
'<line x1="220" y1="150" x2="70" y2="14" class="a"/>' +
'<circle cx="220" cy="150" r="2.6" class="p"/>' +
'<circle cx="70" cy="14" r="2.6" class="p"/>' +
'<text x="165" y="166" text-anchor="middle" class="b">a</text>' +
'<text x="147" y="132">a√2</text>' +
'<text x="146" y="65" class="j">a√3</text>' +
'</svg>';

DIA['s-cuboid'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A cuboid of length l, breadth b and height h drawn in three dimensions, with the diagonal d joining two opposite corners through the inside of the solid.">' +
'<line x1="240" y1="155" x2="195" y2="127" class="g"/>' +
'<line x1="70" y1="127" x2="195" y2="127" class="g"/>' +
'<line x1="195" y1="127" x2="195" y2="52" class="g"/>' +
'<line x1="115" y1="155" x2="240" y2="155" class="l"/>' +
'<line x1="240" y1="155" x2="240" y2="80" class="l"/>' +
'<line x1="240" y1="80" x2="115" y2="80" class="l"/>' +
'<line x1="115" y1="80" x2="115" y2="155" class="l"/>' +
'<line x1="115" y1="155" x2="70" y2="127" class="l"/>' +
'<line x1="115" y1="80" x2="70" y2="52" class="l"/>' +
'<line x1="240" y1="80" x2="195" y2="52" class="l"/>' +
'<line x1="70" y1="127" x2="70" y2="52" class="l"/>' +
'<line x1="70" y1="52" x2="195" y2="52" class="l"/>' +
'<line x1="240" y1="155" x2="70" y2="52" class="a"/>' +
'<circle cx="240" cy="155" r="2.6" class="p"/>' +
'<circle cx="70" cy="52" r="2.6" class="p"/>' +
'<text x="177" y="171" text-anchor="middle">l</text>' +
'<text x="248" y="120">h</text>' +
'<text x="86" y="152">b</text>' +
'<text x="172" y="98" class="j">d</text>' +
'</svg>';

DIA['s-cylinder'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A cylinder of radius r and height h standing upright, with its curved surface opened out beside it as a rectangle whose height is h and whose base is the circumference two pi r.">' +
'<path d="M38 158 A42 18 0 0 1 122 158" class="g"/>' +
'<line x1="80" y1="48" x2="80" y2="158" class="g"/>' +
'<ellipse cx="80" cy="48" rx="42" ry="18" class="l"/>' +
'<path d="M38 158 A42 18 0 0 0 122 158" class="l"/>' +
'<line x1="38" y1="48" x2="38" y2="158" class="l"/>' +
'<line x1="122" y1="48" x2="122" y2="158" class="l"/>' +
'<line x1="80" y1="48" x2="122" y2="48" class="l"/>' +
'<rect x="165" y="48" width="130" height="110" class="a"/>' +
'<circle cx="80" cy="48" r="2.6" class="p"/>' +
'<text x="100" y="42" text-anchor="middle">r</text>' +
'<text x="87" y="106">h</text>' +
'<text x="230" y="174" text-anchor="middle" class="j">2πr</text>' +
'<text x="302" y="106">h</text>' +
'</svg>';

DIA['s-hollow-cylinder'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A hollow cylindrical pipe of length h standing upright and seen from slightly above, so that the ring of material between the outer radius R and the inner radius r is shaded at the open top.">' +
'<path d="M90 60 A70 24 0 1 0 230 60 A70 24 0 1 0 90 60 M120 60 A40 13.7 0 1 1 200 60 A40 13.7 0 1 1 120 60" class="f"/>' +
'<path d="M90 150 A70 24 0 0 1 230 150" class="g"/>' +
'<line x1="160" y1="60" x2="160" y2="150" class="g"/>' +
'<ellipse cx="160" cy="60" rx="70" ry="24" class="l"/>' +
'<ellipse cx="160" cy="60" rx="40" ry="13.7" class="l"/>' +
'<path d="M90 150 A70 24 0 0 0 230 150" class="l"/>' +
'<line x1="90" y1="60" x2="90" y2="150" class="l"/>' +
'<line x1="230" y1="60" x2="230" y2="150" class="l"/>' +
'<line x1="160" y1="60" x2="230" y2="60" class="l"/>' +
'<line x1="160" y1="60" x2="120" y2="60" class="a"/>' +
'<circle cx="160" cy="60" r="2.6" class="p"/>' +
'<text x="236" y="54" class="b">R</text>' +
'<text x="110" y="55" class="j">r</text>' +
'<text x="167" y="108">h</text>' +
'</svg>';

DIA['s-cone-open'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="The curved surface of a cone opened out flat as a sector of a circle whose two straight edges are each the slant height l and whose curved edge has length two pi r, the circumference of the base of the cone.">' +
'<path d="M160 35 L237.1 126.9 A120 120 0 0 1 82.9 126.9 Z" class="f"/>' +
'<line x1="160" y1="35" x2="82.9" y2="126.9" class="l"/>' +
'<line x1="160" y1="35" x2="237.1" y2="126.9" class="l"/>' +
'<path d="M237.1 126.9 A120 120 0 0 1 82.9 126.9" class="a"/>' +
'<circle cx="160" cy="35" r="2.6" class="p"/>' +
'<text x="110" y="73">l</text>' +
'<text x="209" y="73">l</text>' +
'<text x="160" y="172" text-anchor="middle" class="j">2πr</text>' +
'</svg>';

DIA['s-frustum'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A frustum, the flat-topped solid left when the point of a cone is cut off, with top radius r, base radius R, vertical height h and slant height l along the sloping edge.">' +
'<path d="M88 155 A72 22 0 0 1 232 155" class="g"/>' +
'<line x1="160" y1="50" x2="160" y2="155" class="g"/>' +
'<ellipse cx="160" cy="50" rx="38" ry="12" class="l"/>' +
'<path d="M88 155 A72 22 0 0 0 232 155" class="l"/>' +
'<line x1="122" y1="50" x2="88" y2="155" class="l"/>' +
'<line x1="198" y1="50" x2="232" y2="155" class="a"/>' +
'<line x1="160" y1="50" x2="198" y2="50" class="l"/>' +
'<line x1="160" y1="155" x2="232" y2="155" class="l"/>' +
'<circle cx="160" cy="50" r="2.6" class="p"/>' +
'<circle cx="160" cy="155" r="2.6" class="p"/>' +
'<text x="203" y="43">r</text>' +
'<text x="198" y="149" text-anchor="middle" class="b">R</text>' +
'<text x="146" y="106">h</text>' +
'<text x="228" y="100" class="j">l</text>' +
'</svg>';

DIA['s-cone-cut'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A cone cut right across by a plane parallel to its base, so that a small cone of base radius r sits above a frustum whose base radius is R, the small cone being similar to the whole cone.">' +
'<path d="M85 165 A75 22 0 0 1 235 165" class="g"/>' +
'<path d="M85 165 A75 22 0 0 0 235 165" class="l"/>' +
'<line x1="160" y1="30" x2="85" y2="165" class="l"/>' +
'<line x1="160" y1="30" x2="235" y2="165" class="l"/>' +
'<ellipse cx="160" cy="84" rx="30" ry="8.8" class="a"/>' +
'<line x1="160" y1="84" x2="190" y2="84" class="l"/>' +
'<line x1="160" y1="165" x2="235" y2="165" class="l"/>' +
'<circle cx="160" cy="30" r="2.6" class="p"/>' +
'<circle cx="160" cy="84" r="2.6" class="p"/>' +
'<circle cx="160" cy="165" r="2.6" class="p"/>' +
'<text x="196" y="80" class="j">r</text>' +
'<text x="200" y="158" text-anchor="middle" class="b">R</text>' +
'<text x="36" y="60">small cone</text>' +
'<text x="24" y="146">frustum</text>' +
'</svg>';

DIA['s-sphere'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A sphere of radius r, with one radius drawn from the centre to the surface and the great circle through the centre drawn as an ellipse right round the solid.">' +
'<circle cx="160" cy="100" r="72" class="l"/>' +
'<ellipse cx="160" cy="100" rx="72" ry="22" class="l"/>' +
'<line x1="160" y1="100" x2="201.3" y2="41" class="a"/>' +
'<circle cx="160" cy="100" r="2.6" class="p"/>' +
'<circle cx="201.3" cy="41" r="2.6" class="p"/>' +
'<text x="168" y="62" class="j">r</text>' +
'<text x="160" y="190" text-anchor="middle">great circle</text>' +
'</svg>';

DIA['s-hemisphere'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A solid hemisphere of radius r resting with its curved surface downwards, so that its flat circular face is on top and is shaded.">' +
'<path d="M85 80 A75 24 0 1 0 235 80 A75 24 0 1 0 85 80" class="f"/>' +
'<ellipse cx="160" cy="80" rx="75" ry="24" class="l"/>' +
'<path d="M85 80 A75 75 0 0 0 235 80" class="l"/>' +
'<line x1="160" y1="80" x2="235" y2="80" class="l"/>' +
'<circle cx="160" cy="80" r="2.6" class="p"/>' +
'<text x="200" y="74" text-anchor="middle" class="b">r</text>' +
'<text x="160" y="46" text-anchor="middle">flat face</text>' +
'</svg>';

DIA['s-prism-tri'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A right prism of height h standing on a triangular base, the shaded triangle at the bottom, with the same triangle as its top face and three vertical edges joining them.">' +
'<path d="M70 165 L190 165 L130 138 Z" class="f"/>' +
'<line x1="70" y1="165" x2="130" y2="138" class="g"/>' +
'<line x1="130" y1="138" x2="190" y2="165" class="g"/>' +
'<line x1="130" y1="138" x2="130" y2="38" class="g"/>' +
'<line x1="70" y1="165" x2="190" y2="165" class="l"/>' +
'<line x1="70" y1="165" x2="70" y2="65" class="l"/>' +
'<line x1="190" y1="165" x2="190" y2="65" class="l"/>' +
'<line x1="70" y1="65" x2="190" y2="65" class="l"/>' +
'<line x1="190" y1="65" x2="130" y2="38" class="l"/>' +
'<line x1="130" y1="38" x2="70" y2="65" class="l"/>' +
'<text x="198" y="118" class="b">h</text>' +
'<text x="130" y="186" text-anchor="middle">base</text>' +
'</svg>';

DIA['s-pyramid-square'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A right pyramid standing on a square base, with the vertical height h from the apex to the centre of the base meeting the base at a right angle, and the slant height l from the apex to the middle of one base edge.">' +
'<line x1="250" y1="132" x2="115" y2="132" class="g"/>' +
'<line x1="115" y1="132" x2="70" y2="165" class="g"/>' +
'<line x1="160" y1="40" x2="115" y2="132" class="g"/>' +
'<line x1="160" y1="40" x2="160" y2="148.5" class="g"/>' +
'<line x1="70" y1="165" x2="205" y2="165" class="l"/>' +
'<line x1="205" y1="165" x2="250" y2="132" class="l"/>' +
'<line x1="160" y1="40" x2="70" y2="165" class="l"/>' +
'<line x1="160" y1="40" x2="205" y2="165" class="l"/>' +
'<line x1="160" y1="40" x2="250" y2="132" class="l"/>' +
'<line x1="160" y1="148.5" x2="137.5" y2="165" class="l"/>' +
'<line x1="160" y1="40" x2="137.5" y2="165" class="a"/>' +
'<path d="M160 138.5 L151.9 144.4 L151.9 154.4" class="l"/>' +
'<circle cx="160" cy="40" r="2.6" class="p"/>' +
'<circle cx="160" cy="148.5" r="2.6" class="p"/>' +
'<text x="166" y="100" class="b">h</text>' +
'<text x="134" y="100" class="j">l</text>' +
'</svg>';

DIA['s-tetrahedron'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A regular tetrahedron, a solid with four triangular faces, drawn with the hidden back vertex dashed and tick marks showing that every edge has the same length a.">' +
'<line x1="70" y1="165" x2="160" y2="130" class="g"/>' +
'<line x1="160" y1="130" x2="210" y2="165" class="g"/>' +
'<line x1="160" y1="130" x2="147" y2="45" class="g"/>' +
'<line x1="70" y1="165" x2="210" y2="165" class="l"/>' +
'<line x1="70" y1="165" x2="147" y2="45" class="l"/>' +
'<line x1="210" y1="165" x2="147" y2="45" class="l"/>' +
'<line x1="140" y1="159" x2="140" y2="171" class="m"/>' +
'<line x1="104.3" y1="102.3" x2="112.7" y2="107.7" class="m"/>' +
'<line x1="174.1" y1="107.3" x2="182.9" y2="102.7" class="m"/>' +
'<circle cx="147" cy="45" r="2.6" class="p"/>' +
'<text x="118" y="182" text-anchor="middle" class="b">a</text>' +
'</svg>';

DIA['s-cone-hemi'] =
'<svg viewBox="0 0 320 220" role="img" aria-label="A cone of height h mounted on a hemisphere of the same radius r, the flat face of the hemisphere and the base of the cone being the same circle.">' +
'<path d="M90 118 A70 20 0 0 1 230 118" class="g"/>' +
'<line x1="160" y1="28" x2="160" y2="118" class="g"/>' +
'<path d="M90 118 A70 70 0 0 0 230 118" class="l"/>' +
'<path d="M90 118 A70 20 0 0 0 230 118" class="l"/>' +
'<line x1="160" y1="28" x2="90" y2="118" class="l"/>' +
'<line x1="160" y1="28" x2="230" y2="118" class="l"/>' +
'<line x1="160" y1="118" x2="230" y2="118" class="a"/>' +
'<line x1="160" y1="118" x2="160" y2="188" class="a"/>' +
'<circle cx="160" cy="28" r="2.6" class="p"/>' +
'<circle cx="160" cy="118" r="2.6" class="p"/>' +
'<text x="167" y="76" class="b">h</text>' +
'<text x="200" y="112" text-anchor="middle" class="j">r</text>' +
'<text x="167" y="158" class="j">r</text>' +
'</svg>';

DIA['s-cyl-cone-hemi'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A solid lying on its side made of three pieces of the same radius r: a cone at the left end, a cylinder of length h in the middle, and a hemisphere closing the right end.">' +
'<line x1="40" y1="110" x2="257" y2="110" class="g"/>' +
'<ellipse cx="110" cy="110" rx="14" ry="42" class="g"/>' +
'<ellipse cx="215" cy="110" rx="14" ry="42" class="g"/>' +
'<line x1="40" y1="110" x2="110" y2="68" class="l"/>' +
'<line x1="40" y1="110" x2="110" y2="152" class="l"/>' +
'<line x1="110" y1="68" x2="215" y2="68" class="l"/>' +
'<line x1="110" y1="152" x2="215" y2="152" class="l"/>' +
'<path d="M215 68 A42 42 0 0 1 215 152" class="l"/>' +
'<line x1="160" y1="110" x2="160" y2="68" class="a"/>' +
'<line x1="110" y1="172" x2="215" y2="172" class="g"/>' +
'<line x1="110" y1="166" x2="110" y2="178" class="g"/>' +
'<line x1="215" y1="166" x2="215" y2="178" class="g"/>' +
'<circle cx="160" cy="110" r="2.6" class="p"/>' +
'<text x="167" y="92" class="j">r</text>' +
'<text x="162" y="188" text-anchor="middle" class="b">h</text>' +
'<text x="48" y="42">cone</text>' +
'<text x="138" y="56">cylinder</text>' +
'<text x="216" y="50">hemisphere</text>' +
'</svg>';

DIA['s-cyl-in-sphere'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A sphere of radius R with the largest possible cylinder standing inside it, the four corners of the cylinder touching the sphere, so that the cylinder has radius r and height h.">' +
'<path d="M109.1 158.9 A50.9 15 0 0 1 210.9 158.9" class="g"/>' +
'<line x1="160" y1="57.1" x2="160" y2="158.9" class="g"/>' +
'<circle cx="160" cy="108" r="72" class="l"/>' +
'<ellipse cx="160" cy="57.1" rx="50.9" ry="15" class="l"/>' +
'<path d="M109.1 158.9 A50.9 15 0 0 0 210.9 158.9" class="l"/>' +
'<line x1="109.1" y1="57.1" x2="109.1" y2="158.9" class="l"/>' +
'<line x1="210.9" y1="57.1" x2="210.9" y2="158.9" class="l"/>' +
'<line x1="160" y1="57.1" x2="210.9" y2="57.1" class="l"/>' +
'<line x1="160" y1="108" x2="210.9" y2="57.1" class="a"/>' +
'<circle cx="160" cy="108" r="2.6" class="p"/>' +
'<circle cx="210.9" cy="57.1" r="2.6" class="p"/>' +
'<text x="186" y="51" text-anchor="middle">r</text>' +
'<text x="194" y="92" class="j">R</text>' +
'<text x="147" y="112">h</text>' +
'</svg>';

DIA['s-sphere-in-cube'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A sphere of radius r fitted exactly inside a cube of edge a, touching the middle of each of the six faces, so that the diameter of the sphere equals the edge of the cube.">' +
'<line x1="235" y1="160" x2="216" y2="148" class="g"/>' +
'<line x1="106" y1="148" x2="216" y2="148" class="g"/>' +
'<line x1="216" y1="148" x2="216" y2="38" class="g"/>' +
'<circle cx="170.5" cy="99" r="55" class="l"/>' +
'<ellipse cx="170.5" cy="99" rx="55" ry="17" class="g"/>' +
'<line x1="125" y1="160" x2="235" y2="160" class="l"/>' +
'<line x1="235" y1="160" x2="235" y2="50" class="l"/>' +
'<line x1="235" y1="50" x2="125" y2="50" class="l"/>' +
'<line x1="125" y1="50" x2="125" y2="160" class="l"/>' +
'<line x1="125" y1="160" x2="106" y2="148" class="l"/>' +
'<line x1="125" y1="50" x2="106" y2="38" class="l"/>' +
'<line x1="235" y1="50" x2="216" y2="38" class="l"/>' +
'<line x1="106" y1="148" x2="106" y2="38" class="l"/>' +
'<line x1="106" y1="38" x2="216" y2="38" class="l"/>' +
'<line x1="170.5" y1="99" x2="225.5" y2="99" class="a"/>' +
'<circle cx="170.5" cy="99" r="2.6" class="p"/>' +
'<text x="180" y="176" text-anchor="middle" class="b">a</text>' +
'<text x="202" y="93" class="j">r</text>' +
'</svg>';

/* triangles-centres — 7 figures */
/* The four centres, drawn on one scalene triangle A(140,45) B(60,165)
   C(260,165) so that the four figures can be compared, plus the two cevian
   figures on A(120,45) B(50,170) C(270,170). Every centre below is the
   computed one, not a placed one. */

DIA['t-centroid'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A triangle A B C with its three medians drawn to the midpoints of the opposite sides. All three meet at the centroid G, which divides each median in the ratio two to one from the vertex.">' +
'<path d="M140 45 L60 165 L260 165 Z" class="l"/>' +
'<line x1="140" y1="45" x2="160" y2="165" class="a"/>' +
'<line x1="60" y1="165" x2="200" y2="105" class="l"/>' +
'<line x1="260" y1="165" x2="100" y2="105" class="l"/>' +
'<circle cx="153.3" cy="125" r="3" class="p"/>' +
'<circle cx="160" cy="165" r="2.4" class="p"/>' +
'<text x="140" y="38" text-anchor="middle" class="b">A</text>' +
'<text x="48" y="180">B</text>' +
'<text x="264" y="180">C</text>' +
'<text x="160" y="182" text-anchor="middle">D</text>' +
'<text x="163" y="122" class="b">G</text>' +
'<text x="124" y="92" class="j">2</text>' +
'<text x="134" y="152" class="j">1</text>' +
'</svg>';

DIA['t-incentre'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A triangle A B C with its three angle bisectors meeting at the incentre I, and the incircle of radius r touching all three sides. The angle B I C equals ninety degrees plus half of angle A.">' +
'<path d="M140 45 L60 165 L260 165 Z" class="l"/>' +
'<circle cx="147.3" cy="118.3" r="46.7" class="a"/>' +
'<line x1="140" y1="45" x2="147.3" y2="118.3" class="g"/>' +
'<line x1="60" y1="165" x2="147.3" y2="118.3" class="g"/>' +
'<line x1="260" y1="165" x2="147.3" y2="118.3" class="g"/>' +
'<line x1="147.3" y1="118.3" x2="147.3" y2="165" class="l"/>' +
'<path d="M139 165 L139 157 L147.3 157" class="l"/>' +
'<circle cx="147.3" cy="118.3" r="3" class="p"/>' +
'<text x="140" y="38" text-anchor="middle" class="b">A</text>' +
'<text x="48" y="180">B</text>' +
'<text x="264" y="180">C</text>' +
'<text x="154" y="112" class="b">I</text>' +
'<text x="153" y="148" class="j">r</text>' +
'<text x="196" y="130">∠BIC = 90° + A/2</text>' +
'</svg>';

DIA['t-circumcentre'] =
'<svg viewBox="0 0 320 240" role="img" aria-label="A triangle A B C with its circumcircle of radius R, centre O, passing through all three vertices. The angle B O C at the centre is twice the angle A at the circumference.">' +
'<circle cx="160" cy="144.1" r="86.5" class="a"/>' +
'<path d="M140 60 L75 160 L245 160 Z" class="l"/>' +
'<line x1="160" y1="144.1" x2="75" y2="160" class="g"/>' +
'<line x1="160" y1="144.1" x2="245" y2="160" class="g"/>' +
'<line x1="160" y1="144.1" x2="140" y2="60" class="g"/>' +
'<path d="M138 155 A22 22 0 0 0 182 155" class="m"/>' +
'<circle cx="160" cy="144.1" r="3" class="p"/>' +
'<text x="140" y="52" text-anchor="middle" class="b">A</text>' +
'<text x="63" y="175">B</text>' +
'<text x="249" y="175">C</text>' +
'<text x="166" y="140" class="b">O</text>' +
'<text x="196" y="112" class="j">R</text>' +
'<text x="160" y="196" text-anchor="middle">∠BOC = 2A</text>' +
'</svg>';

DIA['t-orthocentre'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A triangle A B C with its three altitudes drawn to the opposite sides. All three meet at the orthocentre H, and the angle B H C equals one hundred and eighty degrees minus angle A.">' +
'<path d="M140 45 L60 165 L260 165 Z" class="l"/>' +
'<line x1="140" y1="45" x2="140" y2="165" class="a"/>' +
'<line x1="60" y1="165" x2="160" y2="65" class="l"/>' +
'<line x1="260" y1="165" x2="121.5" y2="72.7" class="l"/>' +
'<path d="M132 165 L132 157 L140 157" class="l"/>' +
'<circle cx="140" cy="85" r="3" class="p"/>' +
'<text x="140" y="38" text-anchor="middle" class="b">A</text>' +
'<text x="48" y="180">B</text>' +
'<text x="264" y="180">C</text>' +
'<text x="146" y="96" class="b">H</text>' +
'<text x="160" y="190" text-anchor="middle">∠BHC = 180° − A</text>' +
'</svg>';

DIA['t-centres-equi'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="An equilateral triangle in which the centroid, incentre, circumcentre and orthocentre all fall on the same point, with the incircle of radius r inside the circumcircle of radius R, and R equal to twice r.">' +
'<circle cx="160" cy="126.7" r="86.7" class="g"/>' +
'<path d="M160 40 L85 170 L235 170 Z" class="l"/>' +
'<circle cx="160" cy="126.7" r="43.3" class="a"/>' +
'<line x1="160" y1="40" x2="160" y2="170" class="g"/>' +
'<line x1="85" y1="170" x2="197.5" y2="105" class="g"/>' +
'<line x1="235" y1="170" x2="122.5" y2="105" class="g"/>' +
'<circle cx="160" cy="126.7" r="3.2" class="p"/>' +
'<text x="160" y="33" text-anchor="middle" class="b">A</text>' +
'<text x="73" y="185">B</text>' +
'<text x="239" y="185">C</text>' +
'<text x="166" y="123" class="b">G = I = O = H</text>' +
'<text x="160" y="160" text-anchor="middle" class="j">r</text>' +
'<text x="252" y="80">R = 2r</text>' +
'</svg>';

DIA['t-angle-bisector'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A triangle A B C in which A D bisects the angle at A and meets B C at D, so that B D is to D C as A B is to A C.">' +
'<path d="M120 45 L50 170 L270 170 Z" class="l"/>' +
'<line x1="120" y1="45" x2="143.1" y2="170" class="a"/>' +
'<path d="M114 74 A30 30 0 0 0 126 76" class="m"/>' +
'<circle cx="143.1" cy="170" r="2.6" class="p"/>' +
'<text x="120" y="38" text-anchor="middle" class="b">A</text>' +
'<text x="38" y="185">B</text>' +
'<text x="274" y="185">C</text>' +
'<text x="143" y="187" text-anchor="middle">D</text>' +
'<text x="72" y="105">c</text>' +
'<text x="206" y="100">b</text>' +
'<text x="160" y="140" class="j">BD : DC = c : b</text>' +
'</svg>';

DIA['t-median-apollonius'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A triangle A B C with the median A D drawn to the midpoint D of B C, so that B D equals D C. Apollonius theorem relates A B squared plus A C squared to A D squared and B D squared.">' +
'<path d="M120 45 L50 170 L270 170 Z" class="l"/>' +
'<line x1="120" y1="45" x2="160" y2="170" class="a"/>' +
'<line x1="103" y1="165" x2="107" y2="175" class="m"/>' +
'<line x1="213" y1="165" x2="217" y2="175" class="m"/>' +
'<circle cx="160" cy="170" r="2.6" class="p"/>' +
'<text x="120" y="38" text-anchor="middle" class="b">A</text>' +
'<text x="38" y="185">B</text>' +
'<text x="274" y="185">C</text>' +
'<text x="160" y="187" text-anchor="middle">D</text>' +
'<text x="138" y="112" class="j">AD</text>' +
'<text x="196" y="130">AB² + AC² = 2(AD² + BD²)</text>' +
'</svg>';

/* triangles-quads — 7 figures */
/* Three triangles and four quadrilaterals. Every length below is the computed
   one: the equilateral height really is (root 3 / 2) times the side, the
   rhombus side really is half the root of the sum of the squares of the
   diagonals, and the trapezium midline really is half the sum of the two
   parallel sides. */

DIA['t-equilateral'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="An equilateral triangle of side a with its altitude drawn from the apex to the midpoint of the base, meeting it at a right angle. The altitude is root three over two times a.">' +
'<path d="M160 40 L85 170 L235 170 Z" class="l"/>' +
'<line x1="160" y1="40" x2="160" y2="170" class="a"/>' +
'<path d="M152 170 L152 162 L160 162" class="l"/>' +
'<line x1="118" y1="100" x2="126" y2="104" class="m"/>' +
'<line x1="194" y1="100" x2="202" y2="104" class="m"/>' +
'<line x1="120" y1="165" x2="124" y2="175" class="m"/>' +
'<line x1="196" y1="165" x2="200" y2="175" class="m"/>' +
'<text x="160" y="33" text-anchor="middle" class="b">A</text>' +
'<text x="73" y="185">B</text>' +
'<text x="239" y="185">C</text>' +
'<text x="98" y="100">a</text>' +
'<text x="214" y="100">a</text>' +
'<text x="160" y="188" text-anchor="middle">a</text>' +
'<text x="166" y="110" class="j">(√3/2)a</text>' +
'</svg>';

DIA['t-isosceles'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="An isosceles triangle with the two equal sides marked, and the altitude from the apex bisecting the base at a right angle into two equal halves.">' +
'<path d="M160 45 L80 170 L240 170 Z" class="l"/>' +
'<line x1="160" y1="45" x2="160" y2="170" class="a"/>' +
'<path d="M152 170 L152 162 L160 162" class="l"/>' +
'<line x1="116" y1="103" x2="124" y2="107" class="m"/>' +
'<line x1="196" y1="103" x2="204" y2="107" class="m"/>' +
'<line x1="118" y1="165" x2="122" y2="175" class="m"/>' +
'<line x1="198" y1="165" x2="202" y2="175" class="m"/>' +
'<circle cx="160" cy="170" r="2.6" class="p"/>' +
'<text x="160" y="38" text-anchor="middle" class="b">A</text>' +
'<text x="68" y="185">B</text>' +
'<text x="244" y="185">C</text>' +
'<text x="160" y="188" text-anchor="middle">D</text>' +
'<text x="96" y="100">a</text>' +
'<text x="218" y="100">a</text>' +
'<text x="166" y="112" class="j">h</text>' +
'<text x="130" y="188">b/2</text>' +
'<text x="186" y="188">b/2</text>' +
'</svg>';

DIA['t-heron'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A scalene triangle with its three sides labelled a, b and c, for use with Heron formula, where s is half the sum of the three sides.">' +
'<path d="M120 45 L50 170 L270 170 Z" class="l"/>' +
'<circle cx="120" cy="45" r="2.6" class="p"/>' +
'<circle cx="50" cy="170" r="2.6" class="p"/>' +
'<circle cx="270" cy="170" r="2.6" class="p"/>' +
'<text x="120" y="38" text-anchor="middle" class="b">A</text>' +
'<text x="38" y="185">B</text>' +
'<text x="274" y="185">C</text>' +
'<text x="70" y="105">c</text>' +
'<text x="208" y="100">b</text>' +
'<text x="160" y="188" text-anchor="middle">a</text>' +
'<text x="186" y="140" class="j">s = (a + b + c)/2</text>' +
'</svg>';

DIA['q-parallelogram'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A parallelogram with its base, its height drawn to the base at a right angle, and both diagonals drawn. The diagonals bisect each other at the point where they cross.">' +
'<path d="M60 160 L200 160 L260 60 L120 60 Z" class="l"/>' +
'<line x1="60" y1="160" x2="260" y2="60" class="g"/>' +
'<line x1="200" y1="160" x2="120" y2="60" class="g"/>' +
'<line x1="120" y1="60" x2="120" y2="160" class="a"/>' +
'<path d="M112 160 L112 152 L120 152" class="l"/>' +
'<circle cx="160" cy="110" r="3" class="p"/>' +
'<text x="52" y="175">A</text>' +
'<text x="200" y="175">B</text>' +
'<text x="264" y="54">C</text>' +
'<text x="112" y="54">D</text>' +
'<text x="130" y="175" text-anchor="middle">b</text>' +
'<text x="126" y="112" class="j">h</text>' +
'<text x="166" y="106" class="b">O</text>' +
'</svg>';

DIA['q-rhombus'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A rhombus with both diagonals drawn. They cross at the centre at right angles and bisect each other, so each side is half the square root of the sum of the squares of the two diagonals.">' +
'<path d="M80 110 L160 50 L240 110 L160 170 Z" class="l"/>' +
'<line x1="80" y1="110" x2="240" y2="110" class="a"/>' +
'<line x1="160" y1="50" x2="160" y2="170" class="a"/>' +
'<path d="M160 100 L170 100 L170 110" class="l"/>' +
'<circle cx="160" cy="110" r="2.6" class="p"/>' +
'<text x="70" y="115">A</text>' +
'<text x="160" y="43" text-anchor="middle" class="b">B</text>' +
'<text x="246" y="115">C</text>' +
'<text x="160" y="186" text-anchor="middle">D</text>' +
'<text x="112" y="104" class="j">d₁</text>' +
'<text x="166" y="76" class="j">d₂</text>' +
'<text x="196" y="150">a = ½√(d₁² + d₂²)</text>' +
'</svg>';

DIA['q-trapezium'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A trapezium with parallel sides a on top and b below, its height drawn at a right angle, and the segment joining the midpoints of the two slant sides, which is half the sum of a and b.">' +
'<path d="M60 160 L260 160 L210 60 L110 60 Z" class="l"/>' +
'<line x1="85" y1="110" x2="235" y2="110" class="a"/>' +
'<line x1="110" y1="60" x2="110" y2="160" class="g"/>' +
'<path d="M102 160 L102 152 L110 152" class="l"/>' +
'<circle cx="85" cy="110" r="2.6" class="p"/>' +
'<circle cx="235" cy="110" r="2.6" class="p"/>' +
'<text x="160" y="54" text-anchor="middle">a</text>' +
'<text x="160" y="178" text-anchor="middle">b</text>' +
'<text x="116" y="112">h</text>' +
'<text x="180" y="104" class="j">½(a + b)</text>' +
'<text x="50" y="175">A</text>' +
'<text x="264" y="175">B</text>' +
'<text x="214" y="54">C</text>' +
'<text x="102" y="54">D</text>' +
'</svg>';

DIA['q-trapezium-diag'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A trapezium with both diagonals drawn, cutting it into four triangles. The two triangles on the parallel sides are similar, and the diagonals cut each other in the ratio of the two parallel sides.">' +
'<path d="M60 160 L260 160 L210 60 L110 60 Z" class="l"/>' +
'<line x1="60" y1="160" x2="210" y2="60" class="a"/>' +
'<line x1="260" y1="160" x2="110" y2="60" class="a"/>' +
'<circle cx="160" cy="93.3" r="3" class="p"/>' +
'<text x="160" y="54" text-anchor="middle">a</text>' +
'<text x="160" y="178" text-anchor="middle">b</text>' +
'<text x="166" y="88" class="b">P</text>' +
'<text x="50" y="175">A</text>' +
'<text x="264" y="175">B</text>' +
'<text x="214" y="54">C</text>' +
'<text x="102" y="54">D</text>' +
'<text x="196" y="130">AP : PC = b : a</text>' +
'</svg>';

/* triangles-similar — 8 figures */
DIA['t-bpt'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A triangle A B C with a line D E drawn parallel to the base B C, cutting the side A B at D and the side A C at E, so that A D is to D B as A E is to E C.">' +
'<line x1="160" y1="25" x2="40" y2="170" class="l"/>' +
'<line x1="160" y1="25" x2="280" y2="170" class="l"/>' +
'<line x1="40" y1="170" x2="280" y2="170" class="l"/>' +
'<line x1="106.2" y1="90" x2="213.8" y2="90" class="a"/>' +
'<path d="M155 84 L161 90 L155 96" class="m"/>' +
'<path d="M155 164 L161 170 L155 176" class="m"/>' +
'<circle cx="160" cy="25" r="2.6" class="p"/>' +
'<circle cx="40" cy="170" r="2.6" class="p"/>' +
'<circle cx="280" cy="170" r="2.6" class="p"/>' +
'<circle cx="106.2" cy="90" r="2.6" class="p"/>' +
'<circle cx="213.8" cy="90" r="2.6" class="p"/>' +
'<text x="160" y="18" text-anchor="middle" class="b">A</text>' +
'<text x="30" y="186">B</text>' +
'<text x="284" y="186">C</text>' +
'<text x="90" y="84" class="j">D</text>' +
'<text x="222" y="84" class="j">E</text>' +
'</svg>';

DIA['t-midpoint'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A triangle A B C in which D is the midpoint of A B and E is the midpoint of A C. The segment D E joining them is parallel to B C and exactly half as long.">' +
'<line x1="160" y1="25" x2="40" y2="170" class="l"/>' +
'<line x1="160" y1="25" x2="280" y2="170" class="l"/>' +
'<line x1="40" y1="170" x2="280" y2="170" class="l"/>' +
'<line x1="100" y1="97.5" x2="220" y2="97.5" class="a"/>' +
'<line x1="126.1" y1="58.1" x2="133.9" y2="64.4" class="m"/>' +
'<line x1="66.1" y1="130.6" x2="73.9" y2="136.9" class="m"/>' +
'<line x1="184.6" y1="61.8" x2="191.6" y2="56.1" class="m"/>' +
'<line x1="188.4" y1="66.4" x2="195.4" y2="60.7" class="m"/>' +
'<line x1="244.6" y1="134.3" x2="251.6" y2="128.6" class="m"/>' +
'<line x1="248.4" y1="138.9" x2="255.4" y2="133.2" class="m"/>' +
'<path d="M155 91.5 L161 97.5 L155 103.5" class="m"/>' +
'<path d="M155 164 L161 170 L155 176" class="m"/>' +
'<circle cx="160" cy="25" r="2.6" class="p"/>' +
'<circle cx="40" cy="170" r="2.6" class="p"/>' +
'<circle cx="280" cy="170" r="2.6" class="p"/>' +
'<circle cx="100" cy="97.5" r="2.6" class="p"/>' +
'<circle cx="220" cy="97.5" r="2.6" class="p"/>' +
'<text x="160" y="18" text-anchor="middle" class="b">A</text>' +
'<text x="30" y="186">B</text>' +
'<text x="284" y="186">C</text>' +
'<text x="82" y="90" class="j">D</text>' +
'<text x="228" y="90" class="j">E</text>' +
'</svg>';

DIA['t-similar'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="Two separate triangles A B C and P Q R of the same shape but different size. The single marked angles at B and Q are equal and the double marked angles at C and R are equal, so the sides A B and P Q drawn in jade are corresponding sides and all three pairs of sides are in the same ratio.">' +
'<line x1="16" y1="170" x2="136" y2="170" class="l"/>' +
'<line x1="136" y1="170" x2="56" y2="60" class="l"/>' +
'<line x1="56" y1="60" x2="16" y2="170" class="a"/>' +
'<line x1="186" y1="170" x2="258" y2="170" class="l"/>' +
'<line x1="258" y1="170" x2="210" y2="104" class="l"/>' +
'<line x1="210" y1="104" x2="186" y2="170" class="a"/>' +
'<path d="M38 170 A22 22 0 0 0 23.5 149.3" class="m"/>' +
'<path d="M202 170 A16 16 0 0 0 191.5 155" class="m"/>' +
'<path d="M116 170 A20 20 0 0 1 124.2 153.8" class="m"/>' +
'<path d="M110 170 A26 26 0 0 1 120.7 149" class="m"/>' +
'<path d="M242 170 A16 16 0 0 1 248.6 157.1" class="m"/>' +
'<path d="M236 170 A22 22 0 0 1 245.1 152.2" class="m"/>' +
'<circle cx="56" cy="60" r="2.6" class="p"/>' +
'<circle cx="16" cy="170" r="2.6" class="p"/>' +
'<circle cx="136" cy="170" r="2.6" class="p"/>' +
'<circle cx="210" cy="104" r="2.6" class="p"/>' +
'<circle cx="186" cy="170" r="2.6" class="p"/>' +
'<circle cx="258" cy="170" r="2.6" class="p"/>' +
'<text x="56" y="52" text-anchor="middle" class="b">A</text>' +
'<text x="10" y="186">B</text>' +
'<text x="138" y="186">C</text>' +
'<text x="210" y="96" text-anchor="middle" class="b">P</text>' +
'<text x="178" y="186">Q</text>' +
'<text x="262" y="186">R</text>' +
'</svg>';

DIA['t-exterior'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A triangle A B C with the side B C produced beyond C to D. The exterior angle at C, marked x plus y, is equal to the sum of the two interior opposite angles, x at A and y at B.">' +
'<line x1="30" y1="160" x2="200" y2="160" class="l"/>' +
'<line x1="30" y1="160" x2="90" y2="50" class="l"/>' +
'<line x1="90" y1="50" x2="200" y2="160" class="l"/>' +
'<line x1="200" y1="160" x2="300" y2="160" class="g"/>' +
'<path d="M78.5 71.1 A24 24 0 0 0 107 67" class="m"/>' +
'<path d="M56 160 A26 26 0 0 0 42.4 137.2" class="m"/>' +
'<path d="M228 160 A28 28 0 0 0 180.2 140.2" class="m"/>' +
'<circle cx="90" cy="50" r="2.6" class="p"/>' +
'<circle cx="30" cy="160" r="2.6" class="p"/>' +
'<circle cx="200" cy="160" r="2.6" class="p"/>' +
'<circle cx="300" cy="160" r="2.6" class="p"/>' +
'<text x="90" y="42" text-anchor="middle" class="b">A</text>' +
'<text x="22" y="176">B</text>' +
'<text x="200" y="176" text-anchor="middle">C</text>' +
'<text x="300" y="176" text-anchor="middle">D</text>' +
'<text x="97" y="90" text-anchor="middle">x</text>' +
'<text x="62" y="153">y</text>' +
'<text x="215" y="123" text-anchor="middle" class="b">x + y</text>' +
'</svg>';

DIA['t-right-altitude'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A right triangle A B C with the right angle at C, legs a and b and hypotenuse c. The altitude C D of length p is drawn from C perpendicular to the hypotenuse A B, meeting it at D.">' +
'<line x1="30" y1="165" x2="290" y2="165" class="l"/>' +
'<line x1="30" y1="165" x2="68.46" y2="72.69" class="l"/>' +
'<line x1="68.46" y1="72.69" x2="290" y2="165" class="l"/>' +
'<line x1="68.46" y1="72.69" x2="68.46" y2="165" class="a"/>' +
'<path d="M64.2 82.8 L74.4 87.1 L78.6 76.9" class="l"/>' +
'<path d="M68.5 154 L79.5 154 L79.5 165" class="l"/>' +
'<circle cx="30" cy="165" r="2.6" class="p"/>' +
'<circle cx="290" cy="165" r="2.6" class="p"/>' +
'<circle cx="68.46" cy="72.69" r="2.6" class="p"/>' +
'<circle cx="68.46" cy="165" r="2.6" class="p"/>' +
'<text x="68" y="64" text-anchor="middle" class="b">C</text>' +
'<text x="26" y="181" text-anchor="middle">A</text>' +
'<text x="68" y="181" text-anchor="middle">D</text>' +
'<text x="292" y="181" text-anchor="middle">B</text>' +
'<text x="160" y="181" text-anchor="middle">c</text>' +
'<text x="184" y="107">a</text>' +
'<text x="34" y="113">b</text>' +
'<text x="78" y="124" class="j">p</text>' +
'</svg>';

DIA['t-pythagoras'] =
'<svg viewBox="0 0 320 240" role="img" aria-label="A right triangle with the right angle at C, legs a and b and hypotenuse c, with a square drawn outward on each of the three sides. The square on the hypotenuse has the same area as the two squares on the legs together.">' +
'<line x1="126" y1="146" x2="194" y2="146" class="l"/>' +
'<line x1="126" y1="146" x2="126" y2="95" class="l"/>' +
'<line x1="126" y1="95" x2="194" y2="146" class="a"/>' +
'<path d="M126 146 L126 214 L194 214 L194 146" class="l"/>' +
'<path d="M126 95 L75 95 L75 146 L126 146" class="l"/>' +
'<path d="M126 95 L177 27 L245 78 L194 146" class="l"/>' +
'<path d="M126 134 L138 134 L138 146" class="l"/>' +
'<circle cx="126" cy="146" r="2.6" class="p"/>' +
'<circle cx="126" cy="95" r="2.6" class="p"/>' +
'<circle cx="194" cy="146" r="2.6" class="p"/>' +
'<text x="116" y="88">A</text>' +
'<text x="202" y="160">B</text>' +
'<text x="110" y="160" class="b">C</text>' +
'<text x="160" y="162">a</text>' +
'<text x="112" y="126">b</text>' +
'<text x="168" y="110" class="j">c</text>' +
'</svg>';

DIA['t-30-60-90'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A right triangle with the right angle at B, a sixty degree angle at A and a thirty degree angle at C. The side opposite the thirty degree angle is 1, the side opposite the sixty degree angle is root three, and the hypotenuse is 2.">' +
'<line x1="70" y1="75" x2="70" y2="170" class="l"/>' +
'<line x1="70" y1="170" x2="234.5" y2="170" class="l"/>' +
'<line x1="70" y1="75" x2="234.5" y2="170" class="a"/>' +
'<path d="M70 158 L82 158 L82 170" class="l"/>' +
'<path d="M70 105 A30 30 0 0 1 96 90" class="m"/>' +
'<path d="M200.5 170 A34 34 0 0 1 205.1 153" class="m"/>' +
'<circle cx="70" cy="75" r="2.6" class="p"/>' +
'<circle cx="70" cy="170" r="2.6" class="p"/>' +
'<circle cx="234.5" cy="170" r="2.6" class="p"/>' +
'<text x="70" y="66" text-anchor="middle" class="b">A</text>' +
'<text x="62" y="186">B</text>' +
'<text x="236" y="186">C</text>' +
'<text x="92" y="116" text-anchor="middle">60°</text>' +
'<text x="180" y="158" text-anchor="middle">30°</text>' +
'<text x="48" y="127">1</text>' +
'<text x="144" y="186">√3</text>' +
'<text x="160" y="108" class="j">2</text>' +
'</svg>';

DIA['t-45-45-90'] =
'<svg viewBox="0 0 320 200" role="img" aria-label="A right isosceles triangle with the right angle at B and forty five degree angles at A and C. The two legs are equal, each marked 1 with a tick, and the hypotenuse A C is root two.">' +
'<line x1="96" y1="58" x2="96" y2="170" class="l"/>' +
'<line x1="96" y1="170" x2="208" y2="170" class="l"/>' +
'<line x1="96" y1="58" x2="208" y2="170" class="a"/>' +
'<path d="M96 158 L108 158 L108 170" class="l"/>' +
'<line x1="91" y1="112" x2="101" y2="116" class="m"/>' +
'<line x1="150" y1="165" x2="154" y2="175" class="m"/>' +
'<path d="M96 88 A30 30 0 0 1 117.2 79.2" class="m"/>' +
'<path d="M176 170 A32 32 0 0 1 185.4 147.4" class="m"/>' +
'<circle cx="96" cy="58" r="2.6" class="p"/>' +
'<circle cx="96" cy="170" r="2.6" class="p"/>' +
'<circle cx="208" cy="170" r="2.6" class="p"/>' +
'<text x="96" y="50" text-anchor="middle" class="b">A</text>' +
'<text x="84" y="188">B</text>' +
'<text x="210" y="188">C</text>' +
'<text x="114" y="104" text-anchor="middle">45°</text>' +
'<text x="162" y="154" text-anchor="middle">45°</text>' +
'<text x="72" y="118">1</text>' +
'<text x="150" y="188">1</text>' +
'<text x="164" y="102" class="j">√2</text>' +
'</svg>';
