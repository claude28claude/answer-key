/* Build the five maths data files out of the fragments in tools/frag — and,
 * run the other way, take an existing data file apart into fragments again.
 *
 *   node build.js            assemble frag/*.js into ../data-*.js
 *   node build.js --dry      say what would be written, write nothing
 *   node build.js --split    the reverse: ../data-*.js back into frag/*.js
 *   node build.js --figures  stitch dia/*.js into ../diagrams.js
 *
 * The split direction exists because the first run of this work kept its
 * fragments in a temp directory that did not survive the session, while the
 * assembled data file did. One topic per file is also what lets a dozen
 * agents work at once without two of them writing to the same file.
 *
 * A fragment is one topic as a JavaScript object literal. Assembly checks
 * that each one parses before it is used: the site is one script tag per data
 * file, so a syntax error in any of them is a blank page.
 */
'use strict';
var fs = require('fs');
var path = require('path');

var HERE = __dirname;
var REPO = path.join(HERE, '..');
var FRAG = path.join(HERE, 'frag');
var SUBJECTS = require('./manifest.js');
var dry = process.argv.indexOf('--dry') > -1;

function read(file) {
  var src = fs.readFileSync(file, 'utf8').trim();
  if (src.charCodeAt(0) === 0xFEFF) src = src.slice(1);
  if (src[src.length - 1] === ';') src = src.slice(0, -1).trim();
  return src;
}

/* ---------------------------------------------------------------- SPLIT -- */
if (process.argv.indexOf('--split') > -1) {
  if (!fs.existsSync(FRAG)) fs.mkdirSync(FRAG, { recursive: true });
  var made = 0;
  SUBJECTS.forEach(function (s) {
    var file = path.join(REPO, s.file);
    if (!fs.existsSync(file)) return;
    var win = { SUBJECTS: [] };
    try { (new Function('window', fs.readFileSync(file, 'utf8')))(win); }
    catch (e) { console.log('BROKEN  ' + s.file + ' — ' + e.message); return; }
    var sub = win.SUBJECTS[0];
    if (!sub || !sub.topics) return;
    sub.topics.forEach(function (t, i) {
      var name = s.topics[i];
      if (!name) { console.log('no name in the manifest for topic ' + (i + 1) + ' of ' + s.file); return; }
      var out = path.join(FRAG, name + '.js');
      if (fs.existsSync(out)) { console.log('kept    ' + name + ' (already a fragment)'); return; }
      /* JSON.stringify would lose the hand-written layout, so the object is
         printed back out in the same shape the fragments are written in. */
      fs.writeFileSync(out, stringify(t) + '\n', 'utf8');
      made++;
    });
  });
  console.log(made + ' fragments written to tools/frag');
  return;
}

function q(s) { return JSON.stringify(s); }

function stringify(t) {
  var L = [];
  L.push('{');
  L.push('id:' + q(t.id) + ', n:' + q(t.n) + (t.hy ? ', hy:1' : '') + ',');
  L.push('w:' + q(t.w) + ',');
  L.push('quick:[');
  L.push((t.quick || []).map(function (x) { return ' ' + q(x); }).join(',\n'));
  L.push('],');
  L.push('blocks:[');
  L.push((t.blocks || []).map(function (b) {
    var P = [];
    if (b.h) P.push('h:' + q(b.h));
    if (b.careful) P.push('careful:' + q(b.careful));
    if (b.p) P.push('p:' + (Array.isArray(b.p) ? '[' + b.p.map(q).join(',') + ']' : q(b.p)));
    if (b.dia) P.push('dia:' + q(b.dia));
    if (b.cap) P.push('cap:' + q(b.cap));
    if (b.cols) P.push('cols:[' + b.cols.map(q).join(',') + ']');
    if (b.rows) P.push('rows:[\n' + b.rows.map(function (r) { return '  [' + r.map(q).join(',') + ']'; }).join(',\n') + '\n ]');
    if (b.list) P.push('list:[\n' + b.list.map(function (x) { return '  ' + q(x); }).join(',\n') + '\n ]');
    if (b.swap) P.push('swap:[\n' + b.swap.map(function (x) { return '  [' + x.map(q).join(',') + ']'; }).join(',\n') + '\n ]');
    if (b.mcq) P.push('mcq:[\n' + b.mcq.map(function (m) {
      return '  {q:' + q(m.q) + ',\n   o:[' + (m.o || []).map(q).join(',') + '],\n   a:' + m.a +
        ',\n   why:' + q(m.why) + (m.tag ? ',\n   tag:' + q(m.tag) : '') +
        (m.d ? ',\n   d:' + q(m.d) : '') + (m.dcap ? ',\n   dcap:' + q(m.dcap) : '') + '}';
    }).join(',\n\n') + '\n ]');
    if (b.note) P.push('note:' + q(b.note));
    return ' {' + P.join(',\n  ') + '}';
  }).join(',\n\n'));
  L.push(']');
  L.push('}');
  return L.join('\n');
}

/* -------------------------------------------------------------- FIGURES -- */
/* The drawings are written one group to a file so that ten agents can draw at
   once; this stitches them into diagrams.js after the header and the three
   figures that were drawn by hand as the standard. */
if (process.argv.indexOf('--figures') > -1) {
  var NL = String.fromCharCode(10);
  var DIAFILE = path.join(REPO, 'diagrams.js');
  var cur = fs.readFileSync(DIAFILE, 'utf8');
  var cut = cur.indexOf('/* ===== GROUPS');
  if (cut > -1) cur = cur.slice(0, cut).replace(/\s+$/, '') + NL;
  var dir = path.join(HERE, 'dia');
  var files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(function (f) { return f.endsWith('.js'); }).sort() : [];
  var added = 0, body = '';
  files.forEach(function (f) {
    var src = fs.readFileSync(path.join(dir, f), 'utf8').trim();
    var probe = {};
    try { (new Function('DIA', 'window', src))(probe, { DIA: probe }); }
    catch (e) { console.log('BROKEN  ' + f + ' — ' + e.message); process.exitCode = 1; return; }
    var n = Object.keys(probe).length;
    added += n;
    body += NL + '/* ' + f.replace(/\.js$/, '') + ' — ' + n + ' figures */' + NL + src + NL;
  });
  if (!dry) fs.writeFileSync(DIAFILE, cur + NL + '/* ===== GROUPS ===== */' + NL + body, 'utf8');
  console.log((dry ? 'would merge ' : 'merged ') + added + ' figures from ' + files.length + ' groups into diagrams.js');
  return;
}

/* ------------------------------------------------------------- ASSEMBLE -- */
var missing = [], built = [], totalQ = 0, totalT = 0;

SUBJECTS.forEach(function (s) {
  var parts = [], got = 0;
  s.topics.forEach(function (name) {
    var f = path.join(FRAG, name + '.js');
    if (!fs.existsSync(f)) { missing.push(name); return; }
    var src = read(f), obj;
    try { obj = (new Function('return (' + src + ')'))(); }
    catch (e) { console.log('BROKEN  ' + name + ' — ' + e.message); process.exitCode = 1; return; }
    var nq = 0;
    (obj.blocks || []).forEach(function (b) { if (b.mcq) nq += b.mcq.length; });
    totalQ += nq; totalT++; got++;
    parts.push('/* ' + new Array(61).join('=') + ' ' + got + ' — ' + obj.n + ' (' + nq + ' questions) */\n' + src);
  });

  if (!parts.length) { console.log('skip    ' + s.file + ' — no fragments yet'); return; }

  var out = s.header + '\n\n(window.SUBJECTS = window.SUBJECTS || []).push({\n\n' +
    'id:' + q(s.id) + ', n:' + q(s.n) + ', tab:' + q(s.tab) + ', sub:' + q(s.sub) +
    ',\npart:' + q(s.part) + ',\nw:' + q(s.w) + ',\nintro:' + q(s.intro) + ',\n\ntopics:[\n\n' +
    parts.join(',\n\n') + '\n\n]});\n';

  built.push(s.file + '  ' + got + '/' + s.topics.length + ' topics  ' + Math.round(out.length / 1024) + ' KB');
  if (!dry) fs.writeFileSync(path.join(REPO, s.file), out, 'utf8');
});

built.forEach(function (b) { console.log((dry ? 'would write ' : 'wrote ') + b); });
if (missing.length) console.log('\nstill to come (' + missing.length + '): ' + missing.join(' '));
console.log('\n' + totalT + ' topics, ' + totalQ + ' questions assembled');
