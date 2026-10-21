/* THE ANSWER KEY — check.js
 *
 *   node check.js --site .
 *
 * Checks the maths half of the site — the five data files written as
 * questions — for the things that can be checked mechanically: that every
 * question has exactly four distinct options, that the keyed answer is one of
 * them, that no answer letter carries more than a third of a topic, that no
 * question is repeated anywhere on the site, that every explanation actually
 * says something, that the inline marks balance (a stray asterisk eats the
 * rest of the line), that no figure is referred to without being drawn, and
 * that nothing uses ^ for a power or * for multiplication.
 *
 * It cannot check whether a formula is right. That is done by a second reader
 * who re-solves every question without looking at the key, which is the only
 * thing that catches a wrong answer key — and a wrong answer key is worse
 * than a missing topic, because the reader learns it and then trusts it.
 *
 * Dev tool. Nothing on the site loads it and the service worker does not
 * cache it.
 */
'use strict';
var fs = require('fs');
var path = require('path');

var errs = [], warns = [];
function err(where, m){ errs.push(where + ': ' + m); }
function warn(where, m){ warns.push(where + ': ' + m); }

/* ---------- the figure catalogue, read out of DIAGRAMS.md ---------------- */
function catalogue(){
  /* While the topics are being written the catalogue is the document, not the
     drawings: a topic may name a figure before anyone has drawn it. */
  var keys = {}, m;
  try {
    var md = fs.readFileSync(path.join(__dirname, 'DIAGRAMS.md'), 'utf8');
    var re = /^\|\s*`([a-z0-9-]+)`\s*\|/gm;
    while ((m = re.exec(md))) keys[m[1]] = 1;
    return Object.keys(keys).length ? keys : null;
  } catch (e) { return null; }
}
var DIAKEYS = catalogue();

/* ---------- walking every string in a topic ------------------------------ */
function walk(node, trail, fn){
  if (typeof node === 'string'){ fn(node, trail); return; }
  if (Array.isArray(node)){ node.forEach(function(v, i){ walk(v, trail + '[' + i + ']', fn); }); return; }
  if (node && typeof node === 'object'){
    Object.keys(node).forEach(function(k){ walk(node[k], trail + '.' + k, fn); });
  }
}

/* ---------- the inline marks have to balance ----------------------------- */
function markTrouble(s){
  var t = s.replace(/`[^`]+`/g, '');
  if (t.indexOf('`') > -1) return 'unmatched backtick';
  t = s.replace(/\*\*([^*]+)\*\*/g, '').replace(/\*([^*]+)\*/g, '');
  if (t.indexOf('*') > -1) return 'unmatched * (a stray asterisk eats the rest of the line, and * is never multiplication)';
  return null;
}

var BANNED = [
  [/sqrt\s*\(/i,        'sqrt( — write √ instead'],
  [/[A-Za-z0-9)\]]\^/,  '^ used as a power — write ² ³ ⁴ ⁿ instead'],
  [/\s\*\s/,            '* used as multiplication — write × or run the factors together'],
  [/<\s*(b|i|em|br|strong|span|div|p|svg)\b/i, 'raw HTML'],
  [/&(nbsp|amp|lt|gt);/i, 'an HTML entity — write the character itself'],
  [/\\frac|\\sqrt|\$\$|\\\(/, 'LaTeX — this site has no maths typesetting'],
  [/\bpi\b(?!\w)/,      'the word "pi" — write π'],
  [/\btheta\b/i,        'the word "theta" — write θ']
];

/* ---------- one topic ---------------------------------------------------- */
/* question text -> where it was first seen. The key keeps every character
   that carries meaning and drops only the formatting marks and spaces: an
   earlier version stripped everything but letters and digits, which made
   x² + 1/x² and x³ + 1/x³ the same question and reported eight duplicates
   that were not duplicates. Near-duplicates are a judgement call and are left
   to the review pass. */
var seenQ = {};

function checkTopic(t, where){
  if (!t || typeof t !== 'object' || Array.isArray(t)){ err(where, 'not an object'); return; }

  ['id', 'n', 'w'].forEach(function(k){
    if (typeof t[k] !== 'string' || !t[k].trim()) err(where, 'missing ' + k);
  });
  if (t.id && !/^[a-z0-9-]+$/.test(t.id)) err(where, 'id "' + t.id + '" must be lowercase letters, digits and hyphens');
  if (!Array.isArray(t.quick) || t.quick.length < 5 || t.quick.length > 7)
    err(where, 'quick must hold 5 to 7 lines (has ' + (t.quick ? t.quick.length : 0) + ')');
  if (!Array.isArray(t.blocks) || !t.blocks.length){ err(where, 'no blocks'); return; }

  /* every string in the topic */
  walk(t, where, function(s, trail){
    var bad = markTrouble(s);
    if (bad) err(trail, bad + ' — in: ' + s.slice(0, 90));
    BANNED.forEach(function(b){
      if (b[0].test(s)) err(trail, b[1] + ' — in: ' + s.slice(0, 90));
    });
  });

  var nq = 0, letters = [0, 0, 0, 0], hasSheet = false, hasCareful = false, nNone = 0;

  t.blocks.forEach(function(b, bi){
    var bw = where + '.blocks[' + bi + ']';
    if (!b || typeof b !== 'object'){ err(bw, 'not an object'); return; }
    var shapes = ['p', 'rows', 'list', 'swap', 'careful', 'mcq', 'dia'].filter(function(k){ return b[k]; });
    if (!shapes.length) err(bw, 'block has none of p / rows / list / swap / careful / mcq / dia');
    if (b.careful) hasCareful = true;

    if (b.rows){
      hasSheet = true;
      if (!Array.isArray(b.rows)) err(bw, 'rows is not a list');
      else {
        var widths = {};
        b.rows.forEach(function(r, ri){
          if (!Array.isArray(r)){ err(bw + '.rows[' + ri + ']', 'row is not a list'); return; }
          widths[r.length] = 1;
          r.forEach(function(c, ci){
            if (typeof c !== 'string') err(bw + '.rows[' + ri + '][' + ci + ']', 'cell is not text');
          });
        });
        if (Object.keys(widths).length > 1) err(bw, 'rows have different numbers of cells: ' + Object.keys(widths).join(', '));
        if (b.cols && b.rows[0] && b.cols.length !== b.rows[0].length)
          err(bw, 'cols has ' + b.cols.length + ' headings but the rows have ' + b.rows[0].length + ' cells');
      }
    }
    if (b.swap) hasSheet = true;

    if (b.dia && DIAKEYS && !DIAKEYS[b.dia]) err(bw, 'figure key "' + b.dia + '" is not in the catalogue');

    if (b.mcq){
      if (!Array.isArray(b.mcq)){ err(bw, 'mcq is not a list'); return; }
      b.mcq.forEach(function(m, qi){
        var qw = bw + '.mcq[' + qi + ']';
        nq++;
        if (!m || typeof m !== 'object'){ err(qw, 'not an object'); return; }
        if (typeof m.q !== 'string' || m.q.trim().length < 12) err(qw, 'missing or too-short q');
        if (!Array.isArray(m.o)) err(qw, 'missing o');
        else {
          if (m.o.length !== 4) err(qw, 'has ' + m.o.length + ' options — SSC gives exactly four');
          var seen = {};
          m.o.forEach(function(o, oi){
            if (typeof o !== 'string' || !o.trim()) err(qw + '.o[' + oi + ']', 'empty option');
            else if (seen[o.trim()]) err(qw, 'two options are identical: "' + o + '"');
            else seen[o.trim()] = 1;
          });
        }
        if (!(typeof m.a === 'number' && m.a >= 0 && m.a < (m.o ? m.o.length : 4) && m.a === Math.floor(m.a)))
          err(qw, 'a must be 0, 1, 2 or 3 — it is ' + JSON.stringify(m.a));
        else letters[m.a]++;
        if (typeof m.why !== 'string' || m.why.trim().length < 60)
          err(qw, 'why must state the formula in full — it is ' + (m.why ? m.why.trim().length : 0) + ' characters');
        if (m.d && DIAKEYS && !DIAKEYS[m.d]) err(qw, 'figure key "' + m.d + '" is not in the catalogue');
        if (/\bin the (figure|diagram|given figure)\b/i.test(m.q || '') && !m.d)
          err(qw, 'the question says "in the figure" but carries no d: key');
        if (m.tag && String(m.tag).length > 22) warn(qw, 'tag is long: "' + m.tag + '"');
        var key = String(m.q || '').toLowerCase().replace(/[`*\s]/g, '');
        if (key){
          if (seenQ[key]) err(qw, 'this question already appears in ' + seenQ[key]);
          else seenQ[key] = qw;
        }
        if (/none of (these|the above)|all of (these|the above)/i.test((m.o || []).join(' '))) nNone++;
      });
    }
  });

  if (nq < 18) err(where, 'only ' + nq + ' questions — the contract asks for 18 to 28');
  if (nq > 28) err(where, nq + ' questions — the contract caps a topic at 28');
  if (!hasSheet) err(where, 'no formula sheet (a rows table or a swap block) — the topic has to be revisable as well as practisable');
  if (nNone > 1) err(where, nNone + ' questions use "none of these" — the contract allows at most one');
  if (!hasCareful) warn(where, 'no Careful box — most topics have at least one standard confusion worth naming');

  if (nq){
    var cap = Math.ceil(nq * 0.35), floorN = Math.floor(nq * 0.12);
    'ABCD'.split('').forEach(function(L, i){
      if (letters[i] > cap) err(where, 'answer ' + L + ' is used ' + letters[i] + ' times out of ' + nq + ' — the cap is ' + cap);
      if (letters[i] < floorN) warn(where, 'answer ' + L + ' is used only ' + letters[i] + ' times out of ' + nq);
    });
  }
  return { nq: nq, letters: letters };
}

/* ---------- loading --------------------------------------------------- */
function loadFragment(file){
  var src = fs.readFileSync(file, 'utf8').trim();
  if (src.charCodeAt(0) === 0xFEFF) src = src.slice(1);
  if (src[0] !== '{') { err(file, 'a fragment must be one object literal starting with {'); return null; }
  if (src[src.length - 1] === ';') { err(file, 'drop the trailing semicolon'); src = src.slice(0, -1).trim(); }
  try { return (new Function('return (' + src + ')'))(); }
  catch (e){ err(file, 'will not parse as JavaScript — ' + e.message); return null; }
}

function loadSite(dir){
  var win = { SUBJECTS: [], DIA: {} };
  var files = fs.readdirSync(dir).filter(function(f){ return /^(data-.*|diagrams)\.js$/.test(f); }).sort();
  files.forEach(function(f){
    var src = fs.readFileSync(path.join(dir, f), 'utf8');
    try { (new Function('window', src))(win); }
    catch (e){ err(f, 'will not run — ' + e.message); }
  });
  return win;
}

/* ---------- go ---------------------------------------------------------- */
var argv = process.argv.slice(2);

if (argv[0] === '--site'){
  var dir = argv[1] || '.';
  var win = loadSite(dir);
  var subs = win.SUBJECTS || [];
  var ids = {}, totalQ = 0, totalT = 0, usedDia = {};
  subs.forEach(function(s){
    if (!s.id) err('subject', 'a subject with no id');
    if (ids[s.id]) err('subject ' + s.id, 'duplicate subject id');
    ids[s.id] = 1;
    var tids = {};
    (s.topics || []).forEach(function(t){
      totalT++;
      if (tids[t.id]) err(s.id + '/' + t.id, 'duplicate topic id inside the subject');
      tids[t.id] = 1;
      /* Only the maths half is held to the question contract. */
      var isMaths = ['algebra', 'geometry', 'mensuration', 'trig', 'profit'].indexOf(s.id) > -1;
      var r = isMaths ? checkTopic(t, s.id + '/' + t.id) : null;
      if (r) totalQ += r.nq;
      (t.blocks || []).forEach(function(b){
        if (b.dia) usedDia[b.dia] = 1;
        (b.mcq || []).forEach(function(m){ if (m.d) usedDia[m.d] = 1; });
      });
    });
  });
  var drawn = Object.keys(win.DIA || {});
  Object.keys(usedDia).forEach(function(k){
    if (drawn.indexOf(k) === -1) err('figures', 'used but never drawn: ' + k);
  });
  drawn.forEach(function(k){
    if (!usedDia[k]) warn('figures', 'drawn but never used: ' + k);
  });
  console.log('subjects ' + subs.length + ' · topics ' + totalT + ' · maths questions ' + totalQ +
              ' · figures drawn ' + drawn.length + ', used ' + Object.keys(usedDia).length);
} else if (argv.length){
  argv.forEach(function(f){
    var t = loadFragment(f);
    if (t){
      var r = checkTopic(t, path.basename(f));
      if (r) console.log(path.basename(f) + ': ' + r.nq + ' questions · answers A ' +
        r.letters[0] + ', B ' + r.letters[1] + ', C ' + r.letters[2] + ', D ' + r.letters[3]);
    }
  });
  /* A question repeated in another fragment is still a repeat. */
  var fragDir = path.join(__dirname, 'frag');
  if (fs.existsSync(fragDir)){
    var mine = argv.map(function(f){ return path.resolve(f); });
    fs.readdirSync(fragDir).filter(function(f){ return f.endsWith('.js'); }).forEach(function(f){
      var full = path.join(fragDir, f);
      if (mine.indexOf(path.resolve(full)) > -1) return;
      var other;
      try { other = (new Function('return (' + fs.readFileSync(full, 'utf8').trim() + ')'))(); }
      catch (e){ return; }
      (other.blocks || []).forEach(function(b){
        (b.mcq || []).forEach(function(m){
          var key = String(m.q || '').toLowerCase().replace(/[`*\s]/g, '');
          if (key && seenQ[key] && seenQ[key].indexOf(f) === -1)
            err(seenQ[key], 'this question also appears in ' + f);
        });
      });
    });
  }
} else {
  console.log('usage: node checkfrag.js <fragment.js> | --site <dir>');
  process.exit(2);
}

warns.forEach(function(w){ console.log('warn  ' + w); });
errs.forEach(function(e){ console.log('ERROR ' + e); });
if (errs.length){ console.log('\n' + errs.length + ' error' + (errs.length === 1 ? '' : 's') + '. Not OK.'); process.exit(1); }
console.log(warns.length ? '\nOK (with ' + warns.length + ' warning' + (warns.length === 1 ? '' : 's') + ')' : '\nOK');
