/* ==========================================================================
   THE ANSWER KEY — app.js

   One script. No framework, no build step, no dependencies.

   HOW THE SITE IS PUT TOGETHER. Each data-*.js file pushes one subject onto
   window.SUBJECTS. A subject holds topics; a topic holds blocks; a block is
   one of seven shapes (paragraph, table, list, careful-note, swap-cards, a
   bank of multiple-choice questions, a figure). The renderer knows those
   seven shapes and nothing else, so adding a subject is adding a data file
   and one line in index.html — never a change here.

   THE QUESTION BLOCK is the one shape that is not just read. A maths formula
   is either in your head or it is not, and reading it again tells you
   nothing about which. So the maths half of the site is written as questions
   with the four options an SSC paper would give, and the formula is in the
   explanation that opens once you have committed to an answer. Answering
   locks the question, because a formula you looked up before guessing has
   not been tested.

   THREE ROUTES, all in the hash so the site can be served from a static
   folder or a subdirectory of GitHub Pages without any server rewriting:

     #/                  the index — every subject, every topic, one screen
     #/s/<subject>       a subject — its own index of topics
     #/t/<sub>/<topic>   a topic — the actual reading page

   The topic page is the only one that renders content. That is deliberate:
   the static portion alone runs to several hundred rows, and a phone that has
   to lay out all of them before it can show the first one feels broken.
   ========================================================================== */
'use strict';

var SUBJECTS = window.SUBJECTS || [];
var main = document.getElementById('main');
var tabsEl = document.getElementById('tabs');
var qEl = document.getElementById('q');
var resEl = document.getElementById('results');
var backfab = document.getElementById('backfab');
var brandsub = document.getElementById('brandsub');

/* --------------------------------------------------------------------------
   SMALL HELPERS
   -------------------------------------------------------------------------- */

/* Everything written into the page goes through here first. The data files are
   hand-written prose containing ampersands, quotes and the occasional angle
   bracket, and one unescaped '<' in a folk-dance note would silently eat the
   rest of the table. */
function esc(s){
  return String(s == null ? '' : s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

/* Three deliberate marks are allowed in the data and nothing else:

     `backticks`   the mono treatment, for a number that is itself the answer
     **double**    bold, for the word the question turns on
     *single*      italic, for a term being quoted rather than used

   Escaping happens FIRST and the replacements only ever emit the three tags
   below, so a stray angle bracket in a folk-dance note can never become
   markup. The double-asterisk pass has to run before the single, or the
   opening pair of a bold run is eaten as an empty italic. */
function rich(s){
  return esc(s)
    .replace(/`([^`]+)`/g,       function(_, m){ return '<code>' + m + '</code>'; })
    .replace(/\*\*([^*]+)\*\*/g, function(_, m){ return '<b>' + m + '</b>'; })
    .replace(/\*([^*]+)\*/g,     function(_, m){ return '<em>' + m + '</em>'; });
}

function el(html){
  var d = document.createElement('div');
  d.innerHTML = html;
  return d.firstElementChild;
}

function subjectById(id){
  for (var i = 0; i < SUBJECTS.length; i++) if (SUBJECTS[i].id === id) return SUBJECTS[i];
  return null;
}
function topicById(sub, id){
  if (!sub) return null;
  for (var i = 0; i < sub.topics.length; i++) if (sub.topics[i].id === id) return sub.topics[i];
  return null;
}

/* How many facts a topic actually contains — every table row, list item and
   quick-revision line. Shown beside each topic in the index so the size of a
   topic is visible before you open it. */
function countTopic(t){
  var n = (t.quick || []).length;
  (t.blocks || []).forEach(function(b){
    if (b.rows) n += b.rows.length;
    if (b.list) n += b.list.length;
    if (b.swap) n += b.swap.length;
    if (b.mcq) n += b.mcq.length;
  });
  return n;
}

/* How many of a topic's entries are questions. A maths topic is worth opening
   for the practice rather than for the reading, so the index says how many
   questions are in it rather than only how many lines. */
function countQ(t){
  var n = 0;
  (t.blocks || []).forEach(function(b){ if (b.mcq) n += b.mcq.length; });
  return n;
}
function countSubjectQ(s){
  var n = 0;
  s.topics.forEach(function(t){ n += countQ(t); });
  return n;
}
function countSubject(s){
  var n = 0;
  s.topics.forEach(function(t){ n += countTopic(t); });
  return n;
}

/* --------------------------------------------------------------------------
   RENDERING A BLOCK

   Five shapes, checked in a fixed order. A block may carry a heading plus one
   of: p (paragraph or array of paragraphs), rows (a table), list (bullets),
   swap (facing cards), careful (a warning). Nothing else is understood, which
   is what keeps the data files honest.
   -------------------------------------------------------------------------- */
/* A FIGURE. The SVG comes out of diagrams.js, which is our own hand-written
   markup, so it is written into the page as markup rather than escaped — it
   is the one thing on the site that is. A key with no drawing behind it shows
   as a visible gap instead of silently nothing, because a question that says
   "in the figure" with no figure is unanswerable, and a silent omission is
   the one failure a reader cannot report. */
function figure(key, cap){
  var svg = (window.DIA || {})[key];
  if (!svg) return '<div class="dia miss">Figure missing: ' + esc(key) + '</div>';
  return '<figure class="dia">' + svg +
         (cap ? '<figcaption>' + rich(cap) + '</figcaption>' : '') + '</figure>';
}

var LETTERS = 'ABCD';

/* ONE QUESTION. The options are buttons: a question you have not answered
   has no answer on screen at all, and the explanation is written into the
   page from the start but hidden, so that revealing it needs no second
   thought and works with the network off. */
function renderQ(m, i){
  var h = ['<li class="mcq" data-a="' + (m.a | 0) + '">'];
  h.push('<div class="qt">' + rich(m.q) +
         (m.tag ? '<span class="qtag">' + esc(m.tag) + '</span>' : '') + '</div>');
  if (m.d) h.push(figure(m.d, m.dcap));
  h.push('<div class="opts" role="group" aria-label="Options">');
  (m.o || []).forEach(function(o, j){
    h.push('<button type="button" class="opt" data-i="' + j + '">' +
           '<span class="ol">' + LETTERS.charAt(j) + '</span>' +
           '<span class="ox">' + rich(o) + '</span></button>');
  });
  h.push('</div>');
  h.push('<button type="button" class="showans">Show the answer</button>');
  h.push('<div class="ans" hidden><span class="al">' + LETTERS.charAt(m.a | 0) + '</span>' +
         '<span class="aw">' + rich(m.why || '') + '</span></div>');
  h.push('</li>');
  return h.join('');
}

function renderBlock(b){
  var out = [];

  if (b.careful){
    return '<div class="careful"><span class="cl">Careful</span>' + rich(b.careful) + '</div>';
  }

  /* A bank of questions. Its own shape rather than a flag on the paragraph
     block, because it carries a score bar and a reset, and nothing else on
     the site has state. */
  if (b.mcq){
    out.push('<div class="block mcqblock">');
    if (b.h) out.push('<h3>' + esc(b.h) + '</h3>');
    if (b.p){
      var pq = Array.isArray(b.p) ? b.p : [b.p];
      pq.forEach(function(p){ out.push('<p>' + rich(p) + '</p>'); });
    }
    out.push('<div class="mcqbar"><span class="score">' + b.mcq.length +
             ' question' + (b.mcq.length === 1 ? '' : 's') + '</span>' +
             '<span class="acts">' +
             '<button type="button" data-mcq="reveal">Reveal all</button>' +
             '<button type="button" data-mcq="reset">Start again</button>' +
             '</span></div>');
    out.push('<ol class="mcqs">');
    b.mcq.forEach(function(m, i){ out.push(renderQ(m, i)); });
    out.push('</ol>');
    if (b.note) out.push('<p class="bnote">' + rich(b.note) + '</p>');
    out.push('</div>');
    return out.join('');
  }

  out.push('<div class="block">');
  if (b.h) out.push('<h3>' + esc(b.h) + '</h3>');

  if (b.dia) out.push(figure(b.dia, b.cap));

  if (b.p){
    var ps = Array.isArray(b.p) ? b.p : [b.p];
    ps.forEach(function(p){ out.push('<p>' + rich(p) + '</p>'); });
  }

  if (b.list){
    out.push('<ul>');
    b.list.forEach(function(li){ out.push('<li>' + rich(li) + '</li>'); });
    out.push('</ul>');
  }

  if (b.rows){
    var cols = b.cols || [];
    var wide = (b.rows[0] && b.rows[0].length > 2) ? ' class="wide"' : '';
    out.push('<div class="tw"><table' + wide + '>');
    if (cols.length){
      out.push('<thead><tr>');
      cols.forEach(function(c){ out.push('<th>' + esc(c) + '</th>'); });
      out.push('</tr></thead>');
    }
    out.push('<tbody>');
    b.rows.forEach(function(r){
      out.push('<tr>');
      r.forEach(function(cell){ out.push('<td>' + rich(cell) + '</td>'); });
      out.push('</tr>');
    });
    out.push('</tbody></table></div>');
  }

  if (b.swap){
    out.push('<div class="swap">');
    b.swap.forEach(function(s){
      out.push('<div><span class="k">' + esc(s[0]) + '</span>' +
               '<span class="v">' + rich(s[1]) + '</span>' +
               (s[2] ? '<span class="s">' + rich(s[2]) + '</span>' : '') + '</div>');
    });
    out.push('</div>');
  }

  if (b.note) out.push('<p class="bnote">' + rich(b.note) + '</p>');

  out.push('</div>');
  return out.join('');
}

/* --------------------------------------------------------------------------
   ANSWERING

   All of it is delegated from main, so a page that has just been re-rendered
   needs nothing wired up, and 900 questions cost 900 data attributes rather
   than 900 listeners.

   A question locks when it is answered. That is the whole point: a formula
   you were still deciding about while the answer was on screen has not been
   tested. "Start again" unlocks the block when you want to run it a second
   time.
   -------------------------------------------------------------------------- */
function scoreBlock(block){
  if (!block) return;
  var all = block.querySelectorAll('.mcq');
  var done = block.querySelectorAll('.mcq.done').length;
  var ok = block.querySelectorAll('.mcq.ok').length;
  var el2 = block.querySelector('.score');
  if (!el2) return;
  el2.textContent = done
    ? done + ' of ' + all.length + ' answered · ' + ok + ' right'
    : all.length + ' question' + (all.length === 1 ? '' : 's');
}

function revealQ(li){
  if (!li) return;
  var ans = li.querySelector('.ans');
  if (ans) ans.hidden = false;
  li.classList.add('open');
  var correct = li.querySelector('.opt[data-i="' + (li.dataset.a | 0) + '"]');
  if (correct) correct.classList.add('right');
  Array.prototype.forEach.call(li.querySelectorAll('.opt'), function(o){ o.disabled = true; });
}

function answerQ(opt){
  var li = opt.closest('.mcq');
  if (!li || li.classList.contains('done')) return;
  var right = (li.dataset.a | 0) === (opt.dataset.i | 0);
  li.classList.add('done');
  if (right) li.classList.add('ok'); else opt.classList.add('wrong');
  revealQ(li);
  scoreBlock(li.closest('.mcqblock'));
}

main.addEventListener('click', function(e){
  var opt = e.target.closest('.opt');
  if (opt && !opt.disabled){ answerQ(opt); return; }

  var show = e.target.closest('.showans');
  if (show){ revealQ(show.closest('.mcq')); return; }

  var act = e.target.closest('[data-mcq]');
  if (!act) return;
  var block = act.closest('.mcqblock');
  var qs = Array.prototype.slice.call(block.querySelectorAll('.mcq'));
  if (act.dataset.mcq === 'reveal'){
    qs.forEach(revealQ);
  } else {
    qs.forEach(function(li){
      li.classList.remove('done', 'ok', 'open');
      var ans = li.querySelector('.ans');
      if (ans) ans.hidden = true;
      Array.prototype.forEach.call(li.querySelectorAll('.opt'), function(o){
        o.disabled = false;
        o.classList.remove('right', 'wrong');
      });
    });
  }
  scoreBlock(block);
});

/* --------------------------------------------------------------------------
   THE THREE PAGES
   -------------------------------------------------------------------------- */

var PART_DEFAULT = 'Recall and theory';

function pageIndex(){
  var totalTopics = 0, totalFacts = 0, totalQ = 0;
  SUBJECTS.forEach(function(s){
    totalTopics += s.topics.length;
    totalFacts += countSubject(s);
    totalQ += countSubjectQ(s);
  });

  var h = [];
  h.push('<section class="hero">');
  h.push('<h1>Everything this site holds, on one screen</h1>');
  h.push('<p>Two halves. The part that is <b>pure recall</b> comes first — the eight ' +
         'classical dances and the folk dances of every state, the festivals and the fairs, ' +
         'Ancient and Medieval India, the three new criminal laws quoted by section number, ' +
         'Geography built around the Himalayas, and the two pieces of Polity that are asked ' +
         'most and understood least. Then the <b>maths</b>: algebra, geometry, mensuration in ' +
         'two and three dimensions, trigonometry with the whole of height and distance, and ' +
         'profit with mixture — written as questions rather than as a formula sheet, because ' +
         'reading a formula again never tells you whether you knew it.</p>');
  h.push('<div class="herostats">' +
         '<span><b>' + SUBJECTS.length + '</b> subjects</span>' +
         '<span><b>' + totalTopics + '</b> topics</span>' +
         '<span><b>' + totalFacts + '</b> indexed facts</span>' +
         (totalQ ? '<span><b>' + totalQ + '</b> questions</span>' : '') +
         '<span>Works offline</span></div>');
  h.push('</section>');

  /* The index is laid out in parts — the reading half and the practice half —
     because by eleven subjects an undivided grid of cards stops being an
     index and becomes a wall. A subject with no part named falls into the
     first one, so the six original subjects needed no editing. */
  var open = null;
  SUBJECTS.forEach(function(s, i){
    var part = s.part || PART_DEFAULT;
    if (part !== open){
      if (open !== null) h.push('</div>');
      h.push('<h2 class="parth"><span>' + esc(part) + '</span></h2>');
      h.push('<div class="indexgrid">');
      open = part;
    }
    var nq = countSubjectQ(s);
    h.push('<section class="idxcard">');
    h.push('<span class="num">Subject ' + (i + 1) + '</span>');
    h.push('<h2><a href="#/s/' + s.id + '">' + esc(s.n) + '</a></h2>');
    h.push('<p class="w">' + esc(s.w) + '</p>');
    h.push('<ul class="idxlist">');
    s.topics.forEach(function(t, j){
      h.push('<li><a href="#/t/' + s.id + '/' + t.id + '">' +
             '<span class="n">' + (j + 1) + '</span>' +
             '<span class="t">' + esc(t.n) + '</span>' +
             '<span class="c">' + countTopic(t) + '</span></a></li>');
    });
    h.push('</ul>');
    if (nq) h.push('<p class="qtot">' + nq + ' questions in this subject</p>');
    h.push('</section>');
  });
  if (open !== null) h.push('</div>');

  brandsub.textContent = 'The index';
  document.title = 'The Answer Key — SSC static GK, history, the new criminal laws, geography, polity, advanced maths';
  return h.join('');
}

function railFor(sub, activeId){
  var h = ['<nav class="railnav" aria-label="Topics in ' + esc(sub.n) + '">'];
  h.push('<span class="lbl">' + esc(sub.n) + '</span><ol>');
  sub.topics.forEach(function(t){
    h.push('<li><a href="#/t/' + sub.id + '/' + t.id + '"' +
           (t.id === activeId ? ' aria-current="true"' : '') + '>' + esc(t.n) + '</a></li>');
  });
  h.push('</ol></nav>');
  return h.join('');
}

function pageSubject(sub){
  var h = [];
  h.push('<div class="pagehead">');
  h.push('<p class="eyebrow">Subject</p>');
  h.push('<h1>' + esc(sub.n) + '</h1>');
  h.push('<p class="lede">' + esc(sub.intro || sub.w) + '</p>');
  var sq = countSubjectQ(sub);
  if (sq) h.push('<p class="herostats" style="margin-top:14px">' +
                 '<span><b>' + sub.topics.length + '</b> topics</span>' +
                 '<span><b>' + sq + '</b> questions</span>' +
                 '<span>Answer locks the question</span></p>');
  h.push('</div>');

  h.push('<div class="rail">' + railFor(sub, null) + '<div>');
  h.push('<ul class="idxlist" style="border-top:1px solid var(--line)">');
  sub.topics.forEach(function(t, j){
    h.push('<li><a href="#/t/' + sub.id + '/' + t.id + '" style="padding:12px 2px">' +
           '<span class="n">' + (j + 1) + '</span>' +
           '<span class="t"><b>' + esc(t.n) + '</b>' +
           (t.w ? '<span style="display:block;color:var(--dim);font-size:var(--t-tiny)">' + esc(t.w) + '</span>' : '') +
           '</span>' +
           '<span class="c">' + countTopic(t) + '</span></a></li>');
  });
  h.push('</ul></div></div>');

  brandsub.textContent = sub.sub || sub.n;
  document.title = sub.n + ' — The Answer Key';
  return h.join('');
}

function pageTopic(sub, t){
  var h = [];
  h.push('<div class="rail">' + railFor(sub, t.id) + '<div>');

  h.push('<article class="topic">');
  h.push('<p class="eyebrow"><a href="#/s/' + sub.id + '" style="color:inherit">' + esc(sub.n) + '</a></p>');
  h.push('<h2 style="font-size:var(--t-big)">' + esc(t.n) +
         (t.hy ? '<span class="hychip">High yield</span>' : '') + '</h2>');
  if (t.w) h.push('<p class="w">' + esc(t.w) + '</p>');

  if (t.quick && t.quick.length){
    h.push('<div class="quick"><div class="qh">If you revise nothing else</div><ul>');
    t.quick.forEach(function(q){ h.push('<li>' + rich(q) + '</li>'); });
    h.push('</ul></div>');
  }

  (t.blocks || []).forEach(function(b){ h.push(renderBlock(b)); });
  h.push('</article>');

  /* Previous and next inside the subject, so a whole subject can be read
     straight through without going back to the index between topics. */
  var i = sub.topics.indexOf(t);
  var prev = sub.topics[i - 1], next = sub.topics[i + 1];
  h.push('<div class="swap" style="margin-top:34px">');
  h.push(prev ? '<div><span class="k">Previous</span><a class="v" href="#/t/' + sub.id + '/' + prev.id + '">' + esc(prev.n) + '</a></div>'
              : '<div><span class="k">Start of</span><span class="v">' + esc(sub.n) + '</span></div>');
  h.push(next ? '<div><span class="k">Next</span><a class="v" href="#/t/' + sub.id + '/' + next.id + '">' + esc(next.n) + '</a></div>'
              : '<div><span class="k">End of</span><span class="v">' + esc(sub.n) + '</span></div>');
  h.push('</div>');

  h.push('</div></div>');

  brandsub.textContent = sub.sub || sub.n;
  document.title = t.n + ' — ' + sub.n + ' — The Answer Key';
  return h.join('');
}

/* --------------------------------------------------------------------------
   ROUTER
   -------------------------------------------------------------------------- */
function route(){
  var hash = location.hash.replace(/^#/, '') || '/';
  var parts = hash.split('/').filter(Boolean);
  var html, sub, t;

  if (parts[0] === 't' && parts[1] && parts[2]){
    sub = subjectById(parts[1]);
    t = topicById(sub, parts[2]);
    html = (sub && t) ? pageTopic(sub, t) : pageIndex();
  } else if (parts[0] === 's' && parts[1]){
    sub = subjectById(parts[1]);
    html = sub ? pageSubject(sub) : pageIndex();
  } else {
    html = pageIndex();
  }

  main.innerHTML = html;
  syncTabs();
  backfab.hidden = (hash === '/' || hash === '');

  /* A new page starts at the top. Without this, following a link from the
     bottom of one topic to the next leaves you halfway down the new one. */
  if (!window.__keepScroll) window.scrollTo(0, 0);
  window.__keepScroll = false;

  if (pendingHighlight){ highlight(main, pendingHighlight); pendingHighlight = null; }
}

function syncTabs(){
  var hash = location.hash.replace(/^#/, '') || '/';
  var parts = hash.split('/').filter(Boolean);
  var activeSub = (parts[0] === 't' || parts[0] === 's') ? parts[1] : null;
  Array.prototype.forEach.call(tabsEl.children, function(btn){
    if (btn.tagName !== 'BUTTON') return;
    var isOn = btn.dataset.sub === (activeSub || '__index__');
    if (isOn) btn.setAttribute('aria-current', 'true');
    else btn.removeAttribute('aria-current');
  });
}

function buildTabs(){
  var h = ['<button data-sub="__index__" type="button">Index</button>'];
  var open = null;
  SUBJECTS.forEach(function(s){
    /* A hairline where the reading half ends and the practice half begins, so
       that a row of twelve tabs still reads as two groups. */
    var part = s.part || PART_DEFAULT;
    if (open !== null && part !== open) h.push('<span class="tabdiv" aria-hidden="true"></span>');
    open = part;
    h.push('<button data-sub="' + s.id + '" type="button">' + esc(s.tab || s.n) + '</button>');
  });
  tabsEl.innerHTML = h.join('');
  tabsEl.addEventListener('click', function(e){
    var b = e.target.closest('button');
    if (!b) return;
    location.hash = b.dataset.sub === '__index__' ? '#/' : '#/s/' + b.dataset.sub;
  });
}

/* --------------------------------------------------------------------------
   SEARCH

   The index is built once, at startup, from every row, list item and
   quick-revision line in every data file — one entry per fact, not one per
   topic. That is the difference between searching "Zojila" and being told
   which topic mentions it, and being taken to the line that answers it.
   -------------------------------------------------------------------------- */
var INDEX = [];
var pendingHighlight = null;

function buildIndex(){
  SUBJECTS.forEach(function(s){
    s.topics.forEach(function(t){
      INDEX.push({ s: s, t: t, title: t.n, body: (t.w || ''), kind: 'Topic' });

      (t.quick || []).forEach(function(q){
        INDEX.push({ s: s, t: t, title: strip(q), body: '', kind: 'Key fact' });
      });

      (t.blocks || []).forEach(function(b){
        if (b.careful) INDEX.push({ s: s, t: t, title: strip(b.careful), body: '', kind: 'Careful' });
        if (b.p){
          var ps = Array.isArray(b.p) ? b.p : [b.p];
          ps.forEach(function(p){
            INDEX.push({ s: s, t: t, title: b.h || t.n, body: strip(p), kind: b.h || 'Note' });
          });
        }
        (b.list || []).forEach(function(li){
          INDEX.push({ s: s, t: t, title: strip(li), body: '', kind: b.h || 'Point' });
        });
        (b.rows || []).forEach(function(r){
          INDEX.push({ s: s, t: t, title: strip(r[0]), body: r.slice(1).map(strip).join(' — '), kind: b.h || 'Row' });
        });
        (b.swap || []).forEach(function(sw){
          INDEX.push({ s: s, t: t, title: strip(sw[1]), body: strip(sw[0]) + (sw[2] ? ' — ' + strip(sw[2]) : ''), kind: b.h || 'Pair' });
        });
        /* A question is indexed by its text, and its own explanation is the
           body — so searching a formula finds the question that tests it and
           the result row already shows what the formula is. */
        (b.mcq || []).forEach(function(m){
          var right = (m.o || [])[m.a | 0];
          INDEX.push({
            s: s, t: t, title: strip(m.q),
            body: (right ? strip(right) + ' — ' : '') + strip(m.why || ''),
            kind: 'Question'
          });
        });
      });
    });
  });
  INDEX.forEach(function(e){ e.hay = (e.title + ' ' + e.body + ' ' + e.t.n + ' ' + e.s.n).toLowerCase(); });
}

/* The search index holds plain text, not marked-up text, so that a search for
   "Sangeet" matches a phrase written as **Sangeet Natak Akademi** and the
   result row shows the words rather than the asterisks. */
function strip(s){ return String(s == null ? '' : s).replace(/[`*]/g, ''); }

function search(term){
  var q = term.trim().toLowerCase();
  if (q.length < 2) return [];
  var words = q.split(/\s+/);
  var hits = [];
  for (var i = 0; i < INDEX.length && hits.length < 400; i++){
    var e = INDEX[i], ok = true;
    for (var w = 0; w < words.length; w++){
      if (e.hay.indexOf(words[w]) === -1){ ok = false; break; }
    }
    if (!ok) continue;
    /* A hit in the title beats a hit buried in the body, and an exact opening
       match beats both — so typing "103" puts section 103 first rather than
       every row that happens to mention it. */
    var tl = e.title.toLowerCase();
    var score = tl.indexOf(q) === 0 ? 0 : tl.indexOf(q) > -1 ? 1 : 2;
    hits.push({ e: e, score: score });
  }
  hits.sort(function(a, b){ return a.score - b.score; });
  return hits.slice(0, 60).map(function(h){ return h.e; });
}

function mark(text, term){
  var t = esc(text);
  var words = term.trim().split(/\s+/).filter(function(w){ return w.length > 1; });
  words.forEach(function(w){
    var re = new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
    t = t.replace(re, '<mark>$1</mark>');
  });
  return t;
}

function renderResults(term){
  var hits = search(term);
  if (!term.trim() || term.trim().length < 2){ resEl.hidden = true; qEl.setAttribute('aria-expanded', 'false'); return; }
  resEl.hidden = false;
  qEl.setAttribute('aria-expanded', 'true');
  if (!hits.length){
    resEl.innerHTML = '<div class="empty">Nothing for &ldquo;' + esc(term) + '&rdquo;. ' +
      'Try a shorter word — a dance, a state, a section number, a pass.</div>';
    return;
  }
  var h = [];
  hits.forEach(function(e, i){
    h.push('<a class="rrow' + (i === 0 ? ' sel' : '') + '" href="#/t/' + e.s.id + '/' + e.t.id + '">' +
           '<div class="rk">' + esc(e.s.n) + ' · ' + esc(e.t.n) + '</div>' +
           '<div class="rt">' + mark(e.title, term) + '</div>' +
           (e.body ? '<div class="rs">' + mark(e.body.slice(0, 190), term) + '</div>' : '') +
           '</a>');
  });
  resEl.innerHTML = h.join('');
  resEl.dataset.term = term;
}

function closeResults(){ resEl.hidden = true; qEl.setAttribute('aria-expanded', 'false'); }

/* After a search result is followed, the words searched for are marked on the
   page that opens, so the line you were promised is findable in a table of a
   hundred rows without reading all hundred. */
function highlight(root, term){
  var words = term.trim().split(/\s+/).filter(function(w){ return w.length > 1; })
                  .map(function(w){ return w.toLowerCase(); });
  if (!words.length) return;
  var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  var nodes = [], n, first = null;
  while ((n = walker.nextNode())) nodes.push(n);
  nodes.forEach(function(node){
    var text = node.nodeValue, low = text.toLowerCase();
    var found = words.some(function(w){ return low.indexOf(w) > -1; });
    if (!found || !node.parentNode || node.parentNode.tagName === 'MARK') return;
    var html = esc(text);
    words.forEach(function(w){
      var re = new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
      html = html.replace(re, '<mark>$1</mark>');
    });
    var span = document.createElement('span');
    span.innerHTML = html;
    node.parentNode.replaceChild(span, node);
    if (!first) first = span;
  });

  /* A word found inside an explanation is inside a hidden box, so the search
     would otherwise scroll to a question and leave the line it promised
     invisible. Only the questions that actually hold the word are opened —
     opening the whole topic would hand over nine hundred answers because one
     formula was looked up. */
  Array.prototype.forEach.call(root.querySelectorAll('.ans[hidden] mark'), function(m){
    revealQ(m.closest('.mcq'));
  });

  if (first && first.scrollIntoView) first.scrollIntoView({ block: 'center' });
}

/* --------------------------------------------------------------------------
   EVENTS
   -------------------------------------------------------------------------- */
var searchTimer = null;
qEl.addEventListener('input', function(){
  clearTimeout(searchTimer);
  var v = qEl.value;
  searchTimer = setTimeout(function(){ renderResults(v); }, 90);
});
qEl.addEventListener('focus', function(){ if (qEl.value.trim().length > 1) renderResults(qEl.value); });

resEl.addEventListener('click', function(e){
  var a = e.target.closest('a.rrow');
  if (!a) return;
  pendingHighlight = resEl.dataset.term || '';
  closeResults();
  qEl.blur();
});

document.addEventListener('keydown', function(e){
  if (e.key === '/' && document.activeElement !== qEl){
    e.preventDefault(); qEl.focus(); qEl.select(); return;
  }
  if (e.key === 'Escape'){
    if (!resEl.hidden){ closeResults(); qEl.blur(); }
    return;
  }
  if (resEl.hidden) return;

  var rows = Array.prototype.slice.call(resEl.querySelectorAll('.rrow'));
  if (!rows.length) return;
  var cur = rows.findIndex(function(r){ return r.classList.contains('sel'); });

  if (e.key === 'ArrowDown' || (e.key === 'j' && document.activeElement !== qEl)){
    e.preventDefault();
    if (cur > -1) rows[cur].classList.remove('sel');
    var nx = rows[Math.min(cur + 1, rows.length - 1)];
    nx.classList.add('sel'); nx.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'ArrowUp' || (e.key === 'k' && document.activeElement !== qEl)){
    e.preventDefault();
    if (cur > -1) rows[cur].classList.remove('sel');
    var pv = rows[Math.max(cur - 1, 0)];
    pv.classList.add('sel'); pv.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'Enter' && cur > -1){
    e.preventDefault();
    pendingHighlight = resEl.dataset.term || '';
    location.hash = rows[cur].getAttribute('href');
    closeResults(); qEl.blur();
  }
});

document.addEventListener('click', function(e){
  if (!resEl.hidden && !resEl.contains(e.target) && e.target !== qEl) closeResults();
});

backfab.addEventListener('click', function(){
  if (history.length > 1) history.back(); else location.hash = '#/';
});

window.addEventListener('hashchange', route);

/* --------------------------------------------------------------------------
   INSTALL AND OFFLINE
   -------------------------------------------------------------------------- */
var deferredPrompt = null;
var installBtn = document.getElementById('install');
window.addEventListener('beforeinstallprompt', function(e){
  e.preventDefault();
  deferredPrompt = e;
  installBtn.hidden = false;
});
installBtn.addEventListener('click', function(){
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(function(){ deferredPrompt = null; installBtn.hidden = true; });
});
window.addEventListener('appinstalled', function(){ installBtn.hidden = true; deferredPrompt = null; });

if ('serviceWorker' in navigator && location.protocol !== 'file:'){
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('sw.js').catch(function(){ /* offline is a bonus, not a requirement */ });
  });
}

/* --------------------------------------------------------------------------
   START
   -------------------------------------------------------------------------- */
buildTabs();
buildIndex();
route();
