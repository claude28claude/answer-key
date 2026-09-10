# The Answer Key

Six subjects for the SSC track, on one site, index first. A sister site to
**The Article Machine** — same house style, same offline-first build, entirely
separate content and its own look.

Live locally at **http://localhost:8138** once the dev server is running.

---

## What is on it

The home page is a real **index**: every subject lists every topic inside it,
as a link, with a count of how many facts that topic holds. Nothing is hidden
behind a "read more".

**6 subjects · 52 topics · about 2,140 indexed facts.**

### 1. Static GK — first on the site, because it is pure recall

Eight topics.

- **The eight classical dances** — each one's state, its origin text, its
  signature move, and the names attached to it. Includes the Sangeet Natak
  Akademi's eight against the Ministry of Culture's nine.
- **Folk dances**, in four regional topics so a state and its dances are learnt
  together rather than as an alphabetical list — the North and the Hills, the
  West and Central India, the East and the North-East, the South and the Union
  Territories. Every state and every union territory is covered.
- **Harvest and new-year festivals, state by state** — including the mid-April
  cluster where Baisakhi, Bohag Bihu, Vishu, Puthandu and Pohela Boishakh are
  all the same day under different names.
- **The religious calendar** — Hindu, Sikh, Muslim, Jain, Buddhist, Christian
  and Parsi.
- **Fairs, melas and the festivals of one city** — Kumbh, Pushkar, Sonepur,
  Medaram, Thrissur Pooram, Hornbill and the rest.
- Plus India's fifteen entries on the **UNESCO Intangible Cultural Heritage**
  list, in order of inscription.

### 2. Ancient India

Nine topics: the stone age and the first villages; the Indus Valley
Civilisation site by site; the Vedic age; the sixteen Mahajanapadas and the rise
of Magadha; Jainism and Buddhism side by side; the Mauryan Empire and Ashoka's
edicts; the Sungas to the Kushanas; the Sangam Age; the Guptas and Harsha.

### 3. Medieval India

Eleven topics: the Rajputs and the invasions from the north-west; the Delhi
Sultanate in three topics (Slave dynasty, Khaljis and Tughlaqs, Sayyids and
Lodis with the administration); Vijayanagara and Bahmani; the Mughals in two
topics; Shivaji and the Marathas; the Bhakti and Sufi movements; the ten Sikh
Gurus; and medieval architecture with the chronicles.

### 4. The New Criminal Laws — quoted by section number

Ten topics on the three Acts that replaced the IPC, the CrPC and the Indian
Evidence Act on **1 July 2024**:

- **Bharatiya Nyaya Sanhita (BNS)** — 358 sections. Six topics: the punishments
  and general scheme, offences affecting the human body, offences against women
  and children, offences against the State and public tranquillity, property
  and documents and defamation, and the twenty new offences.
- **Bharatiya Nagarik Suraksha Sanhita (BNSS)** — 531 sections. Zero FIR, the
  fifteen-day custody rule, trial in absentia, and every statutory deadline.
- **Bharatiya Sakshya Adhiniyam (BSA)** — 170 sections. Electronic records as
  primary evidence.
- **The old number to the new number** — one long table. 302 → 103,
  420 → 318(4), 498A → 85, 124A → 152, 511 → 62, and so on.

Because these Acts are asked *by number*, every entry carries the new section
number, the old IPC / CrPC / Evidence Act number it replaces, and the
punishment.

### 5. Geography — built around the Himalayas

Six topics: India's physical divisions; the Himalayas' formation and the three
parallel ranges; the four Himalayan regions west to east; the peaks; the
passes; and the glaciers and the three river systems.

### 6. Polity — a small, targeted section

Eight topics: the Seventh Schedule and its entry counts; the Union, State and
Concurrent Lists entry by entry; legislative relations (Articles 245–255) with
the five ways Parliament can legislate on a State subject; administrative
relations (256–263); financial relations (264–293); and how federal India
actually is, with the commissions that have examined the question.

---

## How the site behaves

- **Search everything.** Press `/` from anywhere. The index is built from every
  table row, list item and key fact — one entry per *fact*, not one per topic —
  so searching `Zojila` or `103` takes you to the line that answers it, not to
  a topic that mentions it. `J` and `K` move through results, `Enter` opens,
  `Esc` closes. The words you searched for are highlighted on the page you land
  on.
- **A "If you revise nothing else" box** at the top of every topic, holding the
  handful of lines most likely to be the whole question. A revision pass can
  read only these.
- **"Careful" boxes** wherever the confidently repeated answer is the wrong one
  — Chhau is not one state's dance; Garba and Dandiya Raas are different;
  sedition was not simply renamed; the Planning Commission was never
  constitutional.
- **Works offline.** Everything is precached on first visit. No tracking, no
  analytics, and **no network request ever leaves the site** — the fonts are
  self-hosted, there is no CDN and no framework.
- **Installable** as an app on phone or desktop.

---

## Running it

From the workspace root:

```bash
npx -y http-server answer-key -p 8138 -c-1
```

Or, in Claude Code, the launch configuration named `answer-key` is already in
`.claude/launch.json`.

---

## How it is put together

No framework, no build step, no dependencies. Nine files do everything.

| File | What it is |
| --- | --- |
| `index.html` | The shell — header, search box, tabs, footer. Loads the six data files and then `app.js`. |
| `styles.css` | The whole look. One stylesheet, three self-hosted typefaces, a four-colour palette over one dark ground. |
| `app.js` | The router, the renderer and the search index. About 450 lines. |
| `data-static.js` | Static GK — dances and festivals. |
| `data-ancient.js` | Ancient India. |
| `data-medieval.js` | Medieval India. |
| `data-laws.js` | BNS, BNSS and BSA. |
| `data-geo.js` | Geography and the Himalayas. |
| `data-polity.js` | Centre–State relations and the Seventh Schedule. |
| `sw.js` | The service worker that makes it work offline. |

Each data file pushes one subject onto a shared list. A subject holds topics; a
topic holds blocks; a block is one of five shapes — a paragraph, a table, a
bullet list, a "Careful" note, or a row of facing cards. The renderer knows
those five shapes and nothing else, so **adding a subject means adding one data
file and one line in `index.html`** — never a change to `app.js`.

### Where the content came from, and how firm it is

- **The three criminal laws.** Section numbers were checked against the bare
  Acts and against published section-mapping tables rather than written from
  memory, because a wrong section number is worse than no number. Where sources
  genuinely disagree — the chapter counts of the BNS and BNSS — the site says so
  instead of picking one silently.
- **Static GK, Ancient and Medieval India, Geography, Polity.** Written from the
  established record. Dates of enactment, section numbers, regnal dates, battle
  years and Seventh Schedule entries are firm. Peak heights, range lengths,
  glacier lengths and List entry counts move by small amounts between sources;
  where they do, the figure the standard textbooks use is given and the note
  says that it moves.
- **Where a fact is genuinely contested** — the height of Everest, the highest
  peak "in India", how many classical dances there are — both answers are given,
  along with which one the exam usually expects.

---

## The two sites

| | The Article Machine | The Answer Key |
| --- | --- | --- |
| Subjects | Constitution (506 articles), Constituent Assembly, Modern History, Economy, Static GK, Biology | Static GK (dances and festivals), Ancient India, Medieval India, the new criminal laws, Geography, Polity |
| Home page | Subject cards | A full index — every topic listed |
| Layout | Tabs and cards | A sticky topic rail beside the reading column |
| Palette | Near-black with gold, purple and red | Cool slate with jade, sky and rose |
| Port | 8137 | 8138 |

They share nothing but the house style and the three typefaces. Neither
duplicates the other's content: Modern History is on the Article Machine,
Ancient and Medieval are here.
