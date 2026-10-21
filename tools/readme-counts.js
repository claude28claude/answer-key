/* Fill the counts in README.md from the site itself.
 *
 *   node readme-counts.js
 *
 * The README quotes five numbers — subjects, topics, indexed entries,
 * questions and figures — and a number typed by hand into a document is a
 * number that is wrong by the next commit. These are read out of the data
 * files instead, from the same counting the site's own index uses.
 */
'use strict';
var fs = require('fs');
var path = require('path');

var REPO = path.join(__dirname, '..');
var win = { SUBJECTS: [], DIA: {} };
fs.readdirSync(REPO)
  .filter(function (f) { return /^(data-.*|diagrams)\.js$/.test(f); })
  .sort()
  .forEach(function (f) { (new Function('window', fs.readFileSync(path.join(REPO, f), 'utf8')))(win); });

var subjects = win.SUBJECTS.length, topics = 0, facts = 0, questions = 0;
win.SUBJECTS.forEach(function (s) {
  (s.topics || []).forEach(function (t) {
    topics++;
    facts += (t.quick || []).length;
    (t.blocks || []).forEach(function (b) {
      if (b.rows) facts += b.rows.length;
      if (b.list) facts += b.list.length;
      if (b.swap) facts += b.swap.length;
      if (b.mcq) { facts += b.mcq.length; questions += b.mcq.length; }
    });
  });
});
var figures = Object.keys(win.DIA || {}).length;

/* round the entry count down to a round number, because quoting it to the
   unit invites a reader to check it against a figure that moves every time a
   row is added */
var about = Math.floor(facts / 10) * 10;

var p = path.join(REPO, 'README.md');
var md = fs.readFileSync(p, 'utf8');
var before = md;
md = md.replace(/\{\{SUBJECTS\}\}/g, subjects)
       .replace(/\{\{TOPICS\}\}/g, topics)
       .replace(/\{\{FACTS\}\}/g, about)
       .replace(/\{\{QUESTIONS\}\}/g, questions)
       .replace(/\{\{FIGURES\}\}/g, figures);

if (md === before && /\{\{/.test(before)) console.log('no placeholders matched — check the README');
fs.writeFileSync(p, md, 'utf8');
console.log('README: ' + subjects + ' subjects, ' + topics + ' topics, about ' + about +
            ' entries, ' + questions + ' questions, ' + figures + ' figures');
if (/\{\{/.test(md)) console.log('WARNING: placeholders still left in the README');
