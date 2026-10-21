/* Check a file of figures.
 *
 *   node checkdia.js dia/circles-chords.js
 *
 * The figures take every colour and every stroke width from the stylesheet, so
 * the only thing a drawing may carry is a class. This checks that, and the
 * handful of other things that make a figure unreadable on a phone: a label
 * outside the box, a missing viewBox, a missing text alternative, a key that
 * is not in the catalogue, a tag left unclosed.
 *
 * What it cannot check is whether the geometry is right — whether the tangent
 * really is perpendicular to the radius, whether the angle marked 60° really
 * is 60°. That is done by eye, on the contact sheet at figures-test.html,
 * which puts every drawing on one screen at the size a phone shows it.
 */
'use strict';
var fs = require('fs');
var path = require('path');

var errs = [], warns = [], count = 0;
function err(k, m){ errs.push(k + ': ' + m); }
function warn(k, m){ warns.push(k + ': ' + m); }

var CAT = {}, m, re = /^\|\s*`([a-z0-9-]+)`\s*\|/gm;
var md = fs.readFileSync(path.join(__dirname, 'DIAGRAMS.md'), 'utf8');
while ((m = re.exec(md))) CAT[m[1]] = 1;

var OKCLASS = { l: 1, a: 1, g: 1, m: 1, f: 1, p: 1, b: 1, j: 1 };

process.argv.slice(2).forEach(function(file){
  var src = fs.readFileSync(file, 'utf8');
  var DIA = {};
  try { (new Function('DIA', 'window', src))(DIA, { DIA: DIA }); }
  catch (e){ err(path.basename(file), 'will not run as JavaScript — ' + e.message); return; }

  Object.keys(DIA).forEach(function(k){
    count++;
    var s = DIA[k];
    if (!CAT[k]) err(k, 'not a key in the catalogue');
    if (typeof s !== 'string'){ err(k, 'not a string'); return; }

    var vb = s.match(/viewBox="0 0 (\d+) (\d+)"/);
    if (!vb) { err(k, 'no viewBox="0 0 W H" on the svg'); return; }
    var W = +vb[1], H = +vb[2];
    if (W !== 320) err(k, 'the viewBox width must be 320, not ' + W);
    if (H < 100 || H > 260) err(k, 'the viewBox height should be between 100 and 260, not ' + H);

    if (!/role="img"/.test(s)) err(k, 'no role="img"');
    var al = s.match(/aria-label="([^"]*)"/);
    if (!al) err(k, 'no aria-label');
    else if (al[1].length < 30) err(k, 'the aria-label is too short to describe the figure: "' + al[1] + '"');

    if (/\sstroke="/.test(s)) err(k, 'a stroke attribute — colour comes from the class only');
    if (/\sfill="/.test(s)) err(k, 'a fill attribute — colour comes from the class only');
    if (/\sstyle="/.test(s)) err(k, 'an inline style');
    if (/<svg[^>]*\s(width|height)=/.test(s)) err(k, 'width or height on the svg — the stylesheet sizes it');
    if (/font-size|font-family/.test(s)) err(k, 'a font declaration — the stylesheet sets it');

    var cl, cre = /class="([^"]+)"/g;
    while ((cl = cre.exec(s))){
      cl[1].trim().split(/\s+/).forEach(function(c){
        if (!OKCLASS[c]) err(k, 'unknown class "' + c + '" — only l, a, g, m, f, p, b, j exist');
      });
    }

    var shapes = (s.match(/<(line|circle|ellipse|path|rect|polygon|polyline|text)\b/g) || []).length;
    if (shapes < 3) warn(k, 'only ' + shapes + ' shapes — is the figure finished?');
    var texts = s.match(/<text[^>]*>/g) || [];
    if (!texts.length) warn(k, 'no labels at all');
    texts.forEach(function(t){
      var x = t.match(/\sx="(-?[\d.]+)"/), y = t.match(/\sy="(-?[\d.]+)"/);
      if (!x || !y){ warn(k, 'a text with no x or y'); return; }
      var xv = +x[1], yv = +y[1];
      if (xv < 4 || xv > W - 4) err(k, 'a label at x=' + xv + ' is outside the box (width ' + W + ')');
      if (yv < 9 || yv > H - 3) err(k, 'a label at y=' + yv + ' is outside the box (height ' + H + ')');
    });

    var open = (s.match(/</g) || []).length, close = (s.match(/>/g) || []).length;
    if (open !== close) err(k, 'unbalanced angle brackets');
    if (!/<\/svg>$/.test(s.trim())) err(k, 'does not end with </svg>');
  });
});

warns.forEach(function(w){ console.log('warn  ' + w); });
errs.forEach(function(e){ console.log('ERROR ' + e); });
console.log(count + ' figures checked');
if (errs.length){ console.log(errs.length + ' error' + (errs.length === 1 ? '' : 's') + '. Not OK.'); process.exit(1); }
console.log('OK');
