/* THE ANSWER KEY — data-profit.js
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
   two-rate average, including speeds, interest rates and profit rates. */

(window.SUBJECTS = window.SUBJECTS || []).push({

id:"profit", n:"Profit, Loss and Mixture", tab:"Profit & Mixture", sub:"Profit, discount, alligation",
part:"Maths — every formula as a question",
w:"Cost price and selling price, marked price and successive discounts, false weights, and then mixture and alligation — including the replacement formula and the use of alligation outside mixtures.",
intro:"Three topics on profit and discount, then two on mixture. The percentages are the part that is mis-stated most often, so each formula here says what it is a percentage *of*.",

topics:[

/* ============================================================ 1 — Cost price, selling price and the percentage (21 questions) */
{
id:"profit-basics", n:"Cost price, selling price and the percentage", hy:1,
w:"Profit and loss from the cost price up: the two directions between CP and SP, the percentage reckoned on the wrong base, and the standard results — same selling price at ±x%, n sold at the price of m, the selling price doubled.",
quick:[
 "**Profit = SP − CP** and **Loss = CP − SP**, both in rupees first. Then **Profit% = (Profit/CP) × 100** and **Loss% = (Loss/CP) × 100** — every percentage in this topic is a percentage **of the cost price** unless the question says otherwise.",
 "**SP = CP(100 + p)/100** for a profit and **SP = CP(100 − l)/100** for a loss. Backwards: **CP = SP × 100/(100 + p)** and **CP = SP × 100/(100 − l)** — you divide to come back, you never subtract the percentage from the selling price.",
 "**Two articles sold at the same selling price, one at a gain of `x%` and the other at a loss of `x%`, always give a loss of `x²/100` per cent of the total cost price** — never a break-even. Two articles of the same **cost price** at ±`x%` do break even.",
 "**`n` articles sold at the price of `m`: profit% = ((m − n)/n) × 100.** And if the **CP of `n` articles equals the SP of `m` articles: profit% = ((n − m)/m) × 100.** The base is the number whose price is being matched against.",
 "A profit of `x%` **of the selling price** is **`100x/(100 − x)` per cent of the cost price**; a profit of `x%` of the cost price is **`100x/(100 + x)` per cent of the selling price**. The figure on the selling price is always the smaller of the two.",
 "If **CP : SP = `a : b`** then **profit% = ((b − a)/a) × 100**. The ratio itself, `b/a` as a percentage, is `100 + p` and still has 100 to come off it.",
 "If the selling price is **doubled**, a profit of `p%` becomes **`100 + 2p` per cent** — not `2p`."
],
blocks:[
 {h:"THE SHEET — every formula this topic tests, and the base each percentage is taken on",
  cols:["Asked as","The formula","What the percentage is of"],
  rows:[
  ["**Profit, Loss**","Profit = SP − CP, Loss = CP − SP","Rupees, not per cent — find these before any percentage"],
  ["**Profit%**","(Profit/CP) × 100","Of the **cost price**"],
  ["**Loss%**","(Loss/CP) × 100","Of the **cost price**"],
  ["**SP from CP, profit `p%`**","SP = CP(100 + p)/100","The `p%` is of the CP"],
  ["**SP from CP, loss `l%`**","SP = CP(100 − l)/100","The `l%` is of the CP"],
  ["**CP from SP, profit `p%`**","CP = SP × 100/(100 + p)","Divide by the factor — subtracting `p%` from the SP is wrong"],
  ["**CP from SP, loss `l%`**","CP = SP × 100/(100 − l)","Divide by the factor — adding `l%` to the SP is wrong"],
  ["**Profit `x%` of the SP, as a per cent of the CP**","100x/(100 − x)","From the SP base to the CP base"],
  ["**Profit `x%` of the CP, as a per cent of the SP**","100x/(100 + x)","From the CP base to the SP base"],
  ["**Loss `x%` of the CP, as a per cent of the SP**","100x/(100 − x)","From the CP base to the SP base"],
  ["**Same SP, gain `x%` and loss `x%`**","Loss of x²/100 per cent","Of the **total cost price**. Never a gain"],
  ["**Same CP, gain `x%` and loss `x%`**","No profit, no loss","Both percentages fall on the same number"],
  ["**`n` sold at the price of `m`**","profit% = ((m − n)/n) × 100","Base `n`, the number actually sold"],
  ["**CP of `n` = SP of `m`**","profit% = ((n − m)/m) × 100","Base `m`, the number whose SP is named"],
  ["**CP : SP = `a : b`**","profit% = ((b − a)/a) × 100","Base `a`, the cost side of the ratio"],
  ["**SP doubled, profit was `p%`**","New profit% = 100 + 2p","Of the same cost price"],
  ["**Part at a gain, the rest at a loss**","Total SP − total CP, then ÷ total CP × 100","Of the **total** cost price — never the average of the two percentages"],
  ["**Bought `x` for ₹`y`, sold `p` for ₹`q`**","CP of one = y/x, SP of one = q/p","Reduce both to one article before comparing"],
  ["**Two SPs, a loss of `l%` and a gain of `p%`, differing by ₹`k`**","k = CP(p + l)/100","The gap is `(p + l)` per cent of the cost price"]
 ]},

 {careful:"**To go from the selling price back to the cost price you divide — you never subtract the percentage.** An article sold for ₹600 at a gain of 20% did **not** cost ₹480. The 20% was 20% **of the cost price**, so SP = CP × 120/100 and CP = 600 × 100/120 = `₹500`. Subtracting gives ₹480 and a profit of ₹120 on ₹480, which is 25% — a different question's answer."},

 {careful:"**Profit per cent is on the cost price; profit as a share of the selling price is a smaller number.** On a CP of ₹100 and an SP of ₹125 the profit per cent is `25%`, and the profit is `20%` of the selling price. Both figures are correct and they answer different questions, so read which base the question names. The two are joined by **100x/(100 − x)** going from the SP base to the CP base, and **100x/(100 + x)** going the other way."},

 {careful:"**Same selling price and same cost price are different questions.** Two articles at the same **selling price**, one at `+x%` and one at `−x%`, give a loss of `x²/100` per cent, because the article sold at a loss cost more and the percentage falls on more money. Two articles at the same **cost price** at `+x%` and `−x%` break even exactly. One word in the question decides which, and the `x²/100` result is never a gain."},

 {h:"QUESTIONS — the two prices, the base, and the standard results",
  mcq:[
  {q:"Profit per cent is:",
   o:["(Profit/SP) × 100","(Profit/CP) × 100","(SP/CP) × 100","(CP/Profit) × 100"],
   a:1,
   why:"**Profit% = (Profit/CP) × 100** — the profit is reckoned as a percentage **of the cost price**, not of the selling price, unless the question says otherwise. Option A divides by the selling price and so reports a smaller figure every time: on a CP of ₹100 and an SP of ₹125 it gives `20%` instead of `25%`, and it is the commonest misreading in the chapter. Option C is the ratio of the two prices, which is `100 + p` per cent and still has 100 to come off it.",
   tag:"Profit%"},

  {q:"If the cost price is ₹`C` and the profit is `p%`, the selling price is:",
   o:["C(100 − p)/100","C × 100/(100 + p)","C(100 + p)","C(100 + p)/100"],
   a:3,
   why:"**SP = CP(100 + p)/100.** A profit of `p%` **of the cost price** multiplies the cost price by `(100 + p)/100`, so a CP of ₹800 at 15% profit gives SP = 800 × 115/100 = `₹920`. Option B is the formula for going the other way, **CP = SP × 100/(100 + p)**, and using it here is the standard confusion. Option C forgets to divide by 100 and makes the price 115 times too big, which rules it out on sight.",
   tag:"SP from CP"},

  {q:"An article is sold for ₹`S` at a loss of `l%`. Its cost price is:",
   o:["S × 100/(100 − l)","S × (100 − l)/100","S × 100/(100 + l)","S(100 + l)/100"],
   a:0,
   why:"**CP = SP × 100/(100 − l).** A loss of `l%` **of the cost price** means the selling price is only `(100 − l)` per cent of it, so the cost price comes back by dividing. On an SP of ₹414 at a loss of 8%: CP = 414 × 100/92 = `₹450`. Option C is the profit version with the wrong sign — the single most frequent slip here — and option B applies the loss a second time instead of undoing it.",
   tag:"CP from SP"},

  {q:"An article is sold for ₹`600` at a gain of 20%. Its cost price is:",
   o:["₹480","₹750","₹500","₹720"],
   a:2,
   why:"**CP = SP × 100/(100 + p)** = 600 × 100/120 = `₹500`. Option A is ₹600 less 20% of ₹600, which is the tempting answer and the wrong one: the 20% was a percentage **of the cost price**, not of the selling price. Option D runs the formula forwards instead of backwards, 600 × 120/100, and option B uses `(100 − p)` in the denominator, 600 × 100/80.",
   tag:"CP from SP"},

  {q:"An article bought for ₹`480` is sold for ₹`600`. The profit per cent is:",
   o:["20%","25%","80%","125%"],
   a:1,
   why:"**Profit = SP − CP** = ₹120, and **Profit% = (Profit/CP) × 100** = (120/480) × 100 = `25%`. Option A is (120/600) × 100, the same profit taken as a percentage of the **selling** price — correct arithmetic on the wrong base. Option D is (600/480) × 100, the ratio of the two prices, which is `100 + p`; option C is (480/600) × 100, the cost price as a share of the selling price.",
   tag:"Profit%"},

  {q:"Two articles are sold at the same price, one at a gain of 20% and the other at a loss of 20%. The overall result is:",
   o:["a loss of 4%","no profit and no loss","a gain of 4%","a loss of 2%"],
   a:0,
   why:"**Two articles at the same selling price, one at a gain of `x%` and the other at a loss of `x%`, give a loss of `x²/100` per cent of the total cost price.** With x = 20 that is 400/100 = `4%`. Option B is what the two equal percentages suggest, and it is wrong because the article sold at a loss had the larger cost price, so the percentage falls on more money — taking SP = ₹100 each, the cost prices are ₹83⅓ and ₹125. Option D halves the figure as though the loss were shared between the two articles; `x²/100` is already the loss on the total.",
   tag:"Same SP, ±x%"},

  {q:"Two articles are sold at the same selling price, one at a gain of `x%` and the other at a loss of `x%`. The net result is always:",
   o:["no profit and no loss","a gain of x²/100 per cent","a loss of x²/100 per cent","a loss of 2x per cent"],
   a:2,
   why:"**The net result is always a loss of `x²/100` per cent of the total cost price**, whatever `x` is, and it is never a gain. Equal selling prices come from unequal cost prices: the article that lost `x%` cost more, so the same percentage is taken on a bigger number. Option A is the answer for two articles of the same **cost price** sold at `+x%` and `−x%` — that case does break even exactly, and telling the two cases apart is the whole of this formula.",
   tag:"Same SP, ±x%"},

  {q:"A trader's profit is 20% of the selling price. His profit per cent on the cost price is:",
   o:["20%","16 2/3 %","24%","25%"],
   a:3,
   why:"**A profit of `x%` of the selling price is `100x/(100 − x)` per cent of the cost price** = (100 × 20)/80 = `25%`. Check it with SP = ₹100: the profit is ₹20, so the CP is ₹80 and 20/80 = 25%. Option B is `100x/(100 + x)` = 2000/120, which is the conversion run the **other** way — from a percentage of the cost price to a percentage of the selling price — and it is the trap here. Option C, `24%`, comes from applying the 20 per cent to itself, 20 × 1.2, which is not a step in either formula.",
   tag:"SP base to CP base"},

  {q:"A trader makes a profit of 25% on the cost price. His profit as a percentage of the selling price is:",
   o:["25%","20%","33 1/3 %","75%"],
   a:1,
   why:"**A profit of `x%` of the cost price is `100x/(100 + x)` per cent of the selling price** = (100 × 25)/125 = `20%`. Check it with CP = ₹100: the profit is ₹25 and the SP is ₹125, so 25/125 = 20%. Option C is `100x/(100 − x)` = 2500/75 = 33⅓%, the same conversion in the wrong direction, and it is the one most often ticked — the figure on the selling price is always the **smaller** of the two, which rules it out at a glance, and rules out option D, `75%`, with it.",
   tag:"CP base to SP base"},

  {q:"If 16 articles are sold at the price of 20 articles, the gain per cent is:",
   o:["25%","20%","4%","125%"],
   a:0,
   why:"**When `n` articles are sold at the price of `m` articles, gain% = ((m − n)/n) × 100** — the base is `n`, the number actually sold, because `n` articles are what was paid for. Here ((20 − 16)/16) × 100 = `25%`. Option B divides by 20 instead of 16, which is the gain taken as a percentage of the selling price; option C offers the bare difference of 4 as a percentage; option D is the ratio 20 : 16, which is `100 + p`.",
   tag:"n at price of m"},

  {q:"The cost price of 18 articles is equal to the selling price of 15 articles. The gain per cent is:",
   o:["16 2/3 %","120%","3%","20%"],
   a:3,
   why:"**If the CP of `n` articles equals the SP of `m` articles, gain% = ((n − m)/m) × 100** — the base is `m`, the number whose selling price is named. Here ((18 − 15)/15) × 100 = `20%`. Take each cost price as ₹1: 18 articles cost ₹18, and that is the selling price of 15, so each sells for ₹1.20 and gains 20 paise on ₹1. Option A divides by 18 instead of 15, which is this chapter's standard base error; option B is the ratio 18 : 15 written as a percentage, which is `100 + p`.",
   tag:"CP of n = SP of m"},

  {q:"A man buys pencils at 4 for ₹`12` and sells them at 5 for ₹`20`. His gain per cent is:",
   o:["66 2/3 %","25%","33 1/3 %","40%"],
   a:2,
   why:"Reduce both to one pencil: CP = 12/4 = ₹3 and SP = 20/5 = ₹4. Then **Profit% = (Profit/CP) × 100** = (1/3) × 100 = `33 1/3 %`. Option A is (20 − 12)/12 × 100, which compares a batch of 4 with a batch of 5 and so compares nothing; option D is the same ₹8 taken on the ₹20 received; option B is (1/4) × 100, the gain on the selling price instead of the cost price.",
   tag:"x for ₹y"},

  {q:"An article is sold at a profit of 20%. If its selling price is doubled, the profit per cent becomes:",
   o:["140%","40%","120%","240%"],
   a:0,
   why:"**Doubling the selling price turns a profit of `p%` into `100 + 2p` per cent of the same cost price.** Take CP = ₹100: SP = ₹120, doubled it is ₹240, and the profit of ₹140 on ₹100 is `140%`. Option B is `2p`, which doubles the profit instead of the selling price; option D is the doubled selling price as a percentage of the cost price, `2(100 + p)`, with 100 still to come off it — that last step is where this question is usually lost.",
   tag:"SP doubled"},

  {q:"By selling a table for ₹`2,100` a man loses 12.5%. At what price must he sell it to gain 10%?",
   o:["₹2,310","₹2,640","₹2,400","₹2,362.50"],
   a:1,
   why:"Recover the cost price first: **CP = SP × 100/(100 − l)** = 2100 × 100/87.5 = `₹2,400`. Then **SP = CP(100 + p)/100** = 2400 × 110/100 = `₹2,640`. Option A adds 10% to the ₹2,100, skipping the first formula altogether, and it is the option most often ticked — the 10% is 10% **of the cost price**, not of the old selling price. Option C is the cost price itself, the step before the end.",
   tag:"Loss into gain"},

  {q:"A man buys 100 kg of rice at ₹`40` per kg. He sells 60 kg at a profit of 20% and the remaining 40 kg at a loss of 10%. His overall profit per cent is:",
   o:["5%","10%","8%","12%"],
   a:2,
   why:"Work in rupees, then take the percentage on the total cost price. Total CP = 100 × 40 = ₹4,000. The 60 kg cost ₹2,400 and sell for 2400 × 120/100 = ₹2,880; the 40 kg cost ₹1,600 and sell for 1600 × 90/100 = ₹1,440. Total SP = ₹4,320, so **Profit% = (Profit/CP) × 100** = (320/4000) × 100 = `8%`. Option A averages the two percentages as though the quantities were equal, and option D counts only the gain on the 60 kg, 0.6 × 20.",
   tag:"Part gain, part loss"},

  {q:"The cost price and the selling price of an article are in the ratio `4 : 5`. The profit per cent is:",
   o:["20%","80%","125%","25%"],
   a:3,
   why:"**For CP : SP = `a : b`, profit% = ((b − a)/a) × 100** — the base is the cost side. Take CP = ₹4 and SP = ₹5: the profit is ₹1 and (1/4) × 100 = `25%`. Option A is (1/5) × 100, the profit on the **selling** price. Option C is 5 : 4 as a percentage, which is `100 + p` and still has 100 to come off; option B is 4 : 5 as a percentage, the cost price's share of the selling price.",
   tag:"CP : SP ratio"},

  {q:"An article bought for ₹`2,500` is sold for ₹`2,000`. The loss per cent is:",
   o:["20%","25%","125%","80%"],
   a:0,
   why:"**Loss = CP − SP** = ₹500, and **Loss% = (Loss/CP) × 100** = (500/2500) × 100 = `20%` — on the cost price. Option B is (500/2000) × 100, the loss taken on the selling price, which always reports a bigger figure than the truth and is the tempting answer here. Option D is the selling price as a percentage of the cost price, which is `100 − l` and not `l`; option C is the same ratio inverted.",
   tag:"Loss%"},

  {q:"A man sells an article at a loss of 10%. Had he sold it for ₹`90` more, he would have gained 8%. The cost price is:",
   o:["₹450","₹500","₹900","₹540"],
   a:1,
   why:"Both percentages are **of the cost price**, so write both selling prices as multiples of it: **SP = CP(100 − l)/100 = 0.9 × CP** and **SP = CP(100 + p)/100 = 1.08 × CP**. The ₹90 is the gap, so **k = CP(p + l)/100** gives 90 = CP × 18/100 and CP = `₹500`. Option C is 90 ÷ 0.10, which treats the ₹90 as the loss alone rather than as the gap of 18 per cent; options A and D are the two selling prices, ₹450 and ₹540, which the question did not ask for.",
   tag:"Two SPs, gap ₹k"},

  {q:"A trader sells an article at a loss of 20% on the cost price. His loss as a percentage of the selling price is:",
   o:["20%","16 2/3 %","25%","80%"],
   a:2,
   why:"**A loss of `x%` of the cost price is `100x/(100 − x)` per cent of the selling price** = (100 × 20)/80 = `25%`. Check it with CP = ₹100: the loss is ₹20 and the SP is ₹80, so 20/80 = 25%. Option B uses `(100 + x)` in the denominator, which is the formula for a **profit** on the cost price turned into a percentage of the selling price; option A repeats the given figure without changing the base, and the base is the whole question.",
   tag:"CP base to SP base"},

  {q:"Two watches are sold at ₹`1,955` each, one at a gain of 15% and the other at a loss of 15%. The net result on the two together is:",
   o:["no profit and no loss","a gain of ₹90","a loss of ₹45","a loss of ₹90"],
   a:3,
   why:"**Equal selling prices with a gain of `x%` and a loss of `x%` give a loss of `x²/100` per cent of the total cost price**, here 225/100 = 2.25%. By **CP = SP × 100/(100 ± p)** the cost prices are 1955 × 100/115 = ₹1,700 and 1955 × 100/85 = ₹2,300, so the total CP is ₹4,000 against a total SP of ₹3,910 — a loss of `₹90`, and ₹90 is 2.25% of ₹4,000. Option A is what the equal percentages suggest and is wrong because the cost prices are unequal; this pairing is never a gain, which disposes of option B.",
   tag:"Same SP, ±x%"},

  {q:"A man sells two articles, each costing him ₹`800`, one at a gain of 10% and the other at a loss of 10%. On the two together he makes:",
   o:["no profit and no loss","a loss of ₹16","a loss of 1%","a gain of ₹80"],
   a:0,
   why:"**Equal cost prices with a gain of `x%` and a loss of `x%` break even**, because both percentages are taken on the same number: 800 × 110/100 = ₹880 and 800 × 90/100 = ₹720 add to ₹1,600, which is exactly the total cost price. Option C is the famous `x²/100` loss of 1%, and option B is that 1% of ₹1,600 — both belong to the **other** case, equal **selling** prices, where the cost prices differ. One word in the question decides which case it is.",
   tag:"Same CP, ±x%"}
 ],
  note:"Before computing anything, name the base: whose price is the percentage a percentage of. Most of the marks lost in this topic are lost there and not in the arithmetic."}
]
},

/* ============================================================ 2 — Marked price, discount and successive discounts (22 questions) */
{
id:"profit-discount", n:"Marked price, discount and successive discounts", hy:1,
w:"The discount is on the marked price and the profit is on the cost price — every formula here, and every mistake, turns on which of the two is the base.",
quick:[
 "**Discount = MP − SP** and **Discount% = (Discount/MP) × 100** — on the **marked price**, never on the selling price. From there, **SP = MP(100 − d)/100**.",
 "**MP = SP × 100/(100 − d)** going back the other way. Adding the discount per cent back on to the selling price is the standard mistake and is always wrong.",
 "**Two successive discounts of a% and b% are a single discount of (a + b − ab/100)%** — never `a + b`. 20% and 10% give `28%`; 20% and 20% give `36%`. Three discounts: apply the formula twice.",
 "**Marked x% above cost and sold at d% off: profit% = [(100 + x)(100 − d)/100] − 100.** Marked 40% up with 10% off gives a profit of `26%`; marked 20% up with 20% off gives a **loss** of `4%`, not break-even.",
 "**MP = CP(100 + p)/(100 − d)** is the marked price that allows a discount of `d%` and still leaves a profit of `p%` on the cost price.",
 "**Buy `y`, get `x` free is a discount of [x/(x + y)] × 100 per cent** — the free articles count against **all** the articles taken. Buy 2 get 1 free is `33⅓%`; buy 3 get 1 free is `25%`.",
 "The fastest route through any chain of discounts is the **net factor**: multiply (1 − a/100)(1 − b/100)… and compare. Two schemes are compared by their factors, not by the totals of their rates."
],
blocks:[
 {h:"THE SHEET — every formula this topic tests",
  cols:["Asked as","The formula","Where it bites"],
  rows:[
  ["**Discount**","MP − SP","The amount taken off the marked price, in rupees"],
  ["**Discount%**","(Discount/MP) × 100 = [(MP − SP)/MP] × 100","On the MP. Dividing by the SP is the commonest base error in the chapter"],
  ["**SP from MP and the discount**","SP = MP(100 − d)/100","d = 20 ⇒ SP is ⅘ of the MP"],
  ["**MP from SP and the discount**","MP = SP × 100/(100 − d)","Not SP(100 + d)/100 — you divide by (100 − d), you never add d back"],
  ["**CP from SP and the profit**","CP = SP × 100/(100 + p)","Borrowed from the profit topic, and needed whenever one question gives both a discount and a profit"],
  ["**Two successive discounts a%, b%**","single discount = (a + b − ab/100)%","20 and 10 give 28%, not 30%. 20 and 20 give 36%, not 40%"],
  ["**Any chain of discounts (net factor)**","SP = MP(1 − a/100)(1 − b/100)…","The quickest method on paper, and the only safe way to compare two schemes"],
  ["**Three successive discounts**","Apply the pair formula twice","10, 20 and 25 give 46%; the net factor is (0.90)(0.80)(0.75) = 0.54"],
  ["**Marked x% up, sold at d% off**","profit% = [(100 + x)(100 − d)/100] − 100","Subtracting the 100 at the end is the step most often dropped"],
  ["**Markup and discount at the same rate x%**","A loss of x²/100 per cent","20% up and 20% off is a 4% loss, because the discount acts on the larger number"],
  ["**MP to allow d% off and still make p%**","MP = CP(100 + p)/(100 − d)","CP ₹400, p = 25, d = 20 ⇒ MP = ₹625"],
  ["**Markup needed for a p% gain after d% off**","100 + x = (100 + p) × 100/(100 − d)","d = 20 with p = 20 needs a markup of 50%, not 40%"],
  ["**Discount that still leaves p% profit, markup m%**","d% = [(m − p)/(100 + m)] × 100","m = 25, p = 10 ⇒ d = 12%, not 15%"],
  ["**Buy `y` get `x` free**","discount% = [x/(x + y)] × 100","Buy 2 get 1 free = 33⅓%; buy 3 get 1 free = 25%; 3 free with 12 bought = 20%"],
  ["**CP : MP : SP given as a ratio**","Discount% off the MP part, profit% off the CP part","20 : 30 : 27 ⇒ a discount of 10% and a profit of 35%"],
  ["**Trade discount, then a cash discount**","Two successive discounts on the list price","20% then 5% on ₹1,500 leaves ₹1,140, a single discount of 24%"],
  ["**Comparing two schemes**","Reduce each to its single rate or its net factor","0.70 is cheaper than (0.80)(0.88) = 0.704, so a single 30% beats 20% with 12%"]
 ]},

 {careful:"**The discount per cent is on the marked price; the profit per cent is on the cost price.** The two bases are different numbers in the same question, and they are undone separately: an article sold for ₹1,080 at `10%` off and a profit of `20%` has MP = 1080 × 100/90 = `₹1,200` and CP = 1080 × 100/120 = `₹900`. Taking 10% of ₹1,080 and adding it, or taking 20% of ₹1,080 and subtracting it, gives ₹1,188 and ₹864 — both wrong, and both offered as options."},

 {careful:"**Marked 20% above cost and then sold at 20% off is a loss of 4%, not break-even.** The markup of 20% is taken on the cost price and the discount of 20% is taken on the bigger marked price, so the two do not cancel: (120 × 80)/100 = `96`. In general a markup of `x%` wiped out by a discount of `x%` leaves a loss of `x²/100` per cent."},

 {careful:"**Successive discounts never add.** Two discounts of `a%` and `b%` come to `(a + b − ab/100)%`, because the second is taken on what is left after the first — so 20% and 10% is `28%`, and the buyer who expects 30% is overcharged by 2% of the marked price. The same point decides which of two schemes is cheaper, and the totals of the rates decide nothing: 20%, 10% and 10% add to 40% but amount to only `35.2%`."},

 {h:"QUESTIONS — the marked price and what comes off it",
  mcq:[
  {q:"Discount per cent is given by:",
   o:["(Discount/CP) × 100","(Discount/SP) × 100","(Discount/MP) × 100","(MP/Discount) × 100"],
   a:2,
   why:"**Discount% = (Discount/MP) × 100 = [(MP − SP)/MP] × 100** — the discount is always reckoned on the **marked price**. Option B, the same discount over the selling price, is the trap: an article marked ₹1,250 and sold for ₹1,000 carries a discount of 250/1250 = `20%`, not 250/1000 = 25%. Profit per cent, by contrast, is reckoned on the cost price, and keeping those two bases apart is most of this topic.",
   tag:"Discount%"},

  {q:"If the marked price is MP and the rate of discount is `d%`, the selling price is:",
   o:["MP(100 − d)/100","MP(100 + d)/100","MP × 100/(100 − d)","MP(1 − d)"],
   a:0,
   why:"**SP = MP(100 − d)/100.** With MP = ₹800 and d = 15 that is 800 × 85/100 = `₹680`. Option C is the same relation read backwards — **MP = SP × 100/(100 − d)** — and using it where the first is wanted is the commonest slip in the chapter. Option D forgets to divide the rate by 100 and would make a 15% discount a reduction of fifteen times the price.",
   tag:"SP from MP"},

  {q:"The marked price of a bicycle is ₹1,500 and the dealer allows a discount of 20% on the marked price. The selling price is:",
   o:["₹1,250","₹1,200","₹1,800","₹300"],
   a:1,
   why:"**SP = MP(100 − d)/100** = 1500 × 80/100 = `₹1,200`. Option A is 1500 × 100/120 — dividing by (100 + d) instead of multiplying by (100 − d), which is the profit formula **CP = SP × 100/(100 + p)** borrowed into the wrong place. Option C adds the 20% instead of taking it off, and ₹300 is the discount itself rather than the price.",
   tag:"SP from MP"},

  {q:"A trader wants a profit of 25% on the cost price after allowing a discount of 20% on the marked price. If an article costs him ₹400, he must mark it at:",
   o:["₹500","₹600","₹580","₹625"],
   a:3,
   why:"**MP = CP(100 + p)/(100 − d)** = 400 × 125/80 = `₹625`. The selling price he needs is 400 × 125/100 = ₹500, so option A is the figure one step before the end. Option B is 400 × 1.25 × 1.20, which multiplies by (100 + d)/100 instead of dividing by (100 − d)/100; option C marks up by 25 + 20 = 45%, and percentages taken on different bases never add.",
   tag:"MP needed"},

  {q:"Two successive discounts of `a%` and `b%` on the same marked price are equivalent to a single discount of:",
   o:["(a + b)%","(a + b − ab/100)%","(a + b + ab/100)%","(a + b − ab)%"],
   a:1,
   why:"**Two successive discounts of a% and b% make a single discount of (a + b − ab/100)%**, because the second discount is taken on what is left after the first and not on the marked price. For 30% and 10% that is 40 − 3 = `37%`, not 40% — option A, the additive answer, is the one most often ticked. Option D drops the division by 100 and would give 40 − 300 = −260%, which is what the /100 is there to prevent.",
   tag:"Successive"},

  {q:"Successive discounts of 25% and 20% are equivalent to a single discount of:",
   o:["45%","50%","40%","60%"],
   a:2,
   why:"**Single discount = (a + b − ab/100)%** = 25 + 20 − (25 × 20)/100 = 45 − 5 = `40%`. The net factor confirms it: (0.75)(0.80) = 0.60, so the buyer pays 60% of the marked price — option D is that factor read as the discount, the step before the end. Option A simply adds the rates and option B gets the sign of the correction term wrong.",
   tag:"Successive"},

  {q:"The marked price of a refrigerator is ₹1,800. After two successive discounts of 25% and 12% the selling price is:",
   o:["₹1,134","₹1,188","₹1,350","₹612"],
   a:1,
   why:"**SP = MP(1 − a/100)(1 − b/100)** = 1800 × 0.75 × 0.88 = `₹1,188`. Option A is 1800 less 37% — the two rates added — and adding them always understates the price. ₹1,350 is the price after the first discount only, and ₹612 is the total discount rather than what is paid.",
   tag:"Net factor"},

  {q:"Three successive discounts of 10%, 20% and 25% are equivalent to a single discount of:",
   o:["55%","45.5%","54%","46%"],
   a:3,
   why:"Apply the pair formula twice: 10 and 20 give 10 + 20 − 2 = 28%, and then **28 + 25 − (28 × 25)/100** = 53 − 7 = `46%`. The net factor confirms it — (0.90)(0.80)(0.75) = 0.54, so 54% of the marked price is paid and 46% is the discount, which makes option C the factor misread as the answer. Option B, 45.5%, is what the pair formula stretched over three terms gives when the last correction is left out, and option A adds the three rates.",
   tag:"Three discounts"},

  {q:"An article is marked `x%` above its cost price and sold at a discount of `d%` on the marked price. The profit per cent is:",
   o:["(x − d)%","[(100 + x)(100 − d)/100] − 100","(100 + x)(100 − d)/100","(x − d + xd/100)%"],
   a:1,
   why:"**profit% = [(100 + x)(100 − d)/100] − 100**, because the markup acts on the cost price and the discount then acts on the larger marked price. Marked 25% up and sold at 8% off gives (125 × 92)/100 − 100 = 115 − 100 = `15%`. Option C is that calculation stopped one step early — 115 is the selling price as a percentage of the cost price, not the profit — and option D **adds** `xd/100` instead of subtracting it, turning the cross-term the wrong way. Option A, the plain difference of the two rates, is the answer most often given.",
   tag:"Markup and discount"},

  {q:"A shopkeeper marks his goods 40% above cost price and allows a discount of 10% on the marked price. His profit per cent is:",
   o:["30%","36%","26%","126%"],
   a:2,
   why:"**profit% = [(100 + x)(100 − d)/100] − 100** = (140 × 90)/100 − 100 = 126 − 100 = `26%`. Option A is 40 − 10, which treats the 10% as though it were taken on the cost price; option B is 40 × 0.9, the discount applied to the markup rate instead of to the marked price. `126` is the selling price as a percentage of the cost price — the figure one subtraction short of the answer.",
   tag:"Markup and discount"},

  {q:"An article is marked 20% above its cost price and then sold at a discount of 20% on the marked price. The result is:",
   o:["neither profit nor loss","a profit of 4%","a loss of 4%","a loss of 2%"],
   a:2,
   why:"**profit% = [(100 + x)(100 − d)/100] − 100** = (120 × 80)/100 − 100 = 96 − 100 = −4, so there is **a loss of 4% on the cost price**. Option A is the answer almost everyone gives, and it is wrong because the markup of 20% is taken on the smaller number, the cost price, while the discount of 20% is taken on the larger one, the marked price. In general a markup of `x%` and a discount of `x%` leave a loss of `x²/100` per cent — here 400/100 = `4%`.",
   tag:"20 up, 20 off"},

  {q:"On an article marked ₹1,000, shop A offers a single discount of 30% and shop B offers successive discounts of 20% and 12%. Which is cheaper for the buyer, and by how much?",
   o:["Shop A, by ₹4","Shop B, by ₹20","Shop B, by ₹4","the two prices are equal"],
   a:0,
   why:"Shop B's pair is a single discount of **(a + b − ab/100)%** = 20 + 12 − 2.4 = 29.6%, which is less than 30%, so **shop A is cheaper** by 0.4% of ₹1,000 = `₹4`. In factors: 0.70 against (0.80)(0.88) = 0.704. Option B comes from adding B's rates to 32%, which would make B cheaper by ₹20, and option C from the belief that two discounts must beat one — they need not, and the comparison is settled only by the single rate or the net factor.",
   tag:"Which is cheaper"},

  {q:"Under a 'buy 2 get 1 free' offer, the discount per cent on the marked price is:",
   o:["33⅓%","25%","50%","66⅔%"],
   a:0,
   why:"The customer pays for 2 and takes 3, so the discount is **[x/(x + y)] × 100** with `x = 1` free and `y = 2` paid for: (1/3) × 100 = `33⅓%`. Option C is 1/2 — the free article measured against the two paid for instead of against the three taken — and that denominator is the whole question. Option B, 25%, is the answer to 'buy 3 get 1 free'.",
   tag:"Free goods"},

  {q:"A shop gives one article free with every three bought. The discount per cent on the marked price is:",
   o:["33⅓%","20%","75%","25%"],
   a:3,
   why:"Four articles are taken and three are paid for, so the discount is **[x/(x + y)] × 100** = (1/4) × 100 = `25%`. Option A is 1/3, the free article measured against the three paid for — the same misplaced denominator that turns 'buy 2 get 1 free' into 50%. Option C, 75%, is the fraction actually paid for, and option B would be the answer to one free with every four bought.",
   tag:"Free goods"},

  {q:"A dealer gives 3 articles free with every 12 bought and a further discount of 10% on the marked price. The total discount per cent is:",
   o:["28%","30%","25%","32%"],
   a:0,
   why:"Three free with twelve bought is a discount of **[x/(x + y)] × 100** = (3/15) × 100 = 20%, and the 10% is a second discount on top of it, so the single equivalent is **(a + b − ab/100)%** = 30 − 2 = `28%`. Option C is the free-goods discount read as 3/12, which measures the free articles against the ones paid for instead of against all fifteen taken; option B adds the two rates and option D gets the correction term's sign wrong. By factors: 12 articles cost 12 × 0.90 = 10.8 marked prices and yield 15 articles, so 10.8/15 = 0.72 of the marked price is paid.",
   tag:"Free goods"},

  {q:"The cost price, the marked price and the selling price of an article are in the ratio `20 : 30 : 27`. The discount per cent and the profit per cent are:",
   o:["3% discount, 35% profit","10% discount, 35% profit","10% discount, 7% profit","11.1% discount, 35% profit"],
   a:1,
   why:"**Discount% = [(MP − SP)/MP] × 100** = (3/30) × 100 = `10%`, and **profit% = [(SP − CP)/CP] × 100** = (7/20) × 100 = `35%` — each percentage over its own base. Option D divides the same 3 parts by the selling price, 27, giving 11.1%: that is the standard base error, the discount reckoned on the SP. Option A reads the difference of the ratio parts straight off as a percentage, and option C does the same with the 7.",
   tag:"CP : MP : SP"},

  {q:"A shopkeeper allows a discount of 20% on the marked price and still gains 20% on the cost price. He has marked his goods above cost by:",
   o:["40%","44%","50%","150%"],
   a:2,
   why:"**100 + x = (100 + p) × 100/(100 − d)** = 120 × 100/80 = 150, so the markup is `50%` above cost. Option D is that 150 handed in without the subtraction — the marked price is 150% of the cost price, which is a markup of 50%. Option A adds the two rates, 20 + 20, and option B is 20 + 20 + 4, the successive-discount formula used with the correction term's sign reversed.",
   tag:"Markup needed"},

  {q:"A manufacturer lists an article at ₹1,500, gives a trade discount of 20% and then a cash discount of 5% on the reduced price. The buyer pays:",
   o:["₹1,125","₹1,200","₹1,425","₹1,140"],
   a:3,
   why:"A trade discount and a cash discount are two discounts in succession, so **SP = MP(1 − a/100)(1 − b/100)** = 1500 × 0.80 × 0.95 = `₹1,140`, the single equivalent being **(a + b − ab/100)%** = 25 − 1 = 24%. Option A takes 25% off in one go — the additive answer, and ₹15 too cheap. ₹1,200 is the price after the trade discount only, and ₹1,425 is the cash discount applied to the list price with the trade discount forgotten.",
   tag:"Trade and cash"},

  {q:"An article is marked so that selling it at the marked price would give a profit of 25% on the cost price. The discount that can be allowed on the marked price while still making a profit of 10% is:",
   o:["15%","8%","12%","13.6%"],
   a:2,
   why:"Take CP = ₹100, so MP = ₹125 and the selling price wanted is ₹110. Then **Discount% = [(MP − SP)/MP] × 100** = (15/125) × 100 = `12%`, which is the general result **d% = [(m − p)/(100 + m)] × 100** for a markup of `m%` and a profit of `p%`. Option A is 25 − 10, the two rates subtracted as though they stood on the same base — they do not, one being on ₹100 and the other on ₹125. Option D divides the same ₹15 by the selling price ₹110, the discount reckoned on the wrong price, and option B divides the wanted profit 10 by 125.",
   tag:"Discount allowed"},

  {q:"An article is sold for ₹1,080 after a discount of 10% on the marked price, at a profit of 20% on the cost price. Its marked price and cost price are:",
   o:["MP ₹1,200, CP ₹900","MP ₹1,188, CP ₹900","MP ₹1,200, CP ₹864","MP ₹1,188, CP ₹864"],
   a:0,
   why:"Each percentage is undone on its own base: **MP = SP × 100/(100 − d)** = 1080 × 100/90 = `₹1,200`, and **CP = SP × 100/(100 + p)** = 1080 × 100/120 = `₹900`. The three wrong options are the two standard slips in every combination — ₹1,188 is 1080 increased by 10% instead of divided by 0.90, and ₹864 is 1080 reduced by 20% instead of divided by 1.20. Coming back up through a percentage is never done by adding it on, and coming back down is never done by taking it off.",
   tag:"Both bases"},

  {q:"On the same marked price, which of these schemes gives the buyer the lowest price?",
   o:["a single discount of 36%","successive discounts of 20% and 20%","successive discounts of 20%, 10% and 10%","successive discounts of 30% and 10%"],
   a:3,
   why:"Reduce each to its net factor: 0.64, then (0.80)(0.80) = 0.64, then (0.80)(0.90)(0.90) = 0.648, then (0.70)(0.90) = `0.63`. So **30% and 10%, a single discount of 30 + 10 − 3 = 37%**, is the cheapest. Options A and B are exactly equal, because two successive discounts of 20% are a single discount of `36%`; option C has the largest total of rates at 40% and is in fact the dearest of the four, since every later discount is taken on a smaller amount.",
   tag:"Which is cheaper"},

  {q:"A trader marks his goods 50% above cost and allows two successive discounts of 20% and 10% on the marked price. His gain or loss per cent is:",
   o:["a gain of 20%","a gain of 8%","a gain of 5%","a loss of 8%"],
   a:1,
   why:"The two discounts are a single **(a + b − ab/100)%** = 30 − 2 = 28%, so **profit% = [(100 + x)(100 − d)/100] − 100** = (150 × 72)/100 − 100 = 108 − 100 = a gain of `8%`. Option C is what treating the discounts as 30% would give — 150 × 0.70 = 105, a gain of 5% — and it is the tempting answer here. Option A is 50 − 30, the markup and the rates netted off as though all three stood on the cost price.",
   tag:"Markup and discount"}
 ],
  note:"Every question above is answered by one line of the sheet. Before ticking, name the base: a discount per cent is a percentage of the marked price, a profit per cent a percentage of the cost price, and nothing in this topic goes wrong anywhere else."}
]
},

/* ============================================================ 3 — False weights and the dishonest shopkeeper (21 questions) */
{
id:"profit-dishonest", n:"False weights and the dishonest shopkeeper", hy:1,
w:"The false weight, the faulty measure, the water in the milk, and the one denominator that decides every answer in the topic.",
quick:[
 "**gain% = (error/(true value − error)) × 100.** The denominator is the weight the customer actually receives. 900 g sold as 1 kg gives 100/900, which is `11 1/9 %` — never 10%.",
 "Read backwards: **weight given = true weight × 100/(100 + g)**. A gain of `25%` means an 800 g weight, not a 750 g one.",
 "A false weight **and** a markup multiply, never add: **factor = (true/given) × (100 + x)/100**. An 800 g weight with `20%` on cost is 1.25 × 1.2 = 1.5, a gain of `50%`.",
 "A faulty length or volume measure takes the same formula with the same denominator: an 80 cm metre rod gains (20/80) × 100 = `25%`, and a litre measure holding 750 ml gains `33 1/3 %`.",
 "Water mixed into milk and sold at the cost price of milk: **gain% = (water/milk) × 100** — on the milk he paid for, not on the mixture he sells. 1 litre of water in 4 litres of milk is `25%`.",
 "A price fall of `x%` buys **(100x)/(100 − x)%** more for the same money; a price rise of `x%` needs consumption cut by **(100x)/(100 + x)%**. A fall of 20% buys `25%` more.",
 "Handing over only `(100 − x)%` of the weight while selling at `x%` below cost is exactly break-even: 900 g for a kilogram at 10% below cost leaves neither a gain nor a loss."
],
blocks:[
 {h:"THE SHEET — every formula in the topic, with the number it produces",
  cols:["Asked as","The formula","The number that comes out"],
  rows:[
  ["**False weight, sold at cost price**","gain% = (error/(true value − error)) × 100","900 g charged as 1 kg → 100/900 → `11 1/9 %`"],
  ["**What the denominator is**","the weight actually handed over, that is `true − error`","Dividing by the true kilogram gives `10%`, and it is wrong"],
  ["**The weight, from the gain**","weight given = true × 100/(100 + g)","gain `25%` → 1,000 × 100/125 = `800 g`"],
  ["**Giving more than he charges for**","loss% = (error/(true value + error)) × 100","1,100 g for 1 kg → 100/1100 → a loss of `9 1/11 %`"],
  ["**False weight with `x%` on cost**","factor = (true/given) × (100 + x)/100","800 g with 20% up → 1.25 × 1.2 = 1.5 → `50%`"],
  ["**False weight with `x%` off cost**","factor = (true/given) × (100 − x)/100","800 g at 10% below cost → 1.25 × 0.9 = 1.125 → `12.5%`"],
  ["**The break-even pair**","(100 − x)% of the weight sold at x% below cost","900 g at 10% below cost → factor `1` → nothing gained"],
  ["**Faulty length measure**","gain% = ((true length − measure)/measure) × 100","an 80 cm metre rod → 20/80 → `25%`"],
  ["**Faulty volume measure**","gain% = ((true volume − measure)/measure) × 100","a litre measure of 750 ml → 250/750 → `33 1/3 %`"],
  ["**Cheated buying, cheating selling**","factor = (quantity received)/(quantity given)","takes 1,200 g, gives 800 g → 1.5 → `50%`"],
  ["**Water in milk, sold at milk's cost**","gain% = (water/milk) × 100","1 litre in 4 litres of milk → `25%`"],
  ["**Water as a share of the mixture**","if the mixture is `w%` water, gain% = (w/(100 − w)) × 100","`25%` water → 25/75 → `33 1/3 %`"],
  ["**Water to add for a gain of `g%`**","water = milk × g/100","60 litres of milk, gain 20% → `12 litres`"],
  ["**Water with a markup of `x%` as well**","factor = (mixture/milk) × (100 + x)/100","water : milk = 1 : 4 at 10% up → 1.25 × 1.1 = 1.375 → `37.5%`"],
  ["**Price falls `x%`, extra quantity**","extra% = (100x)/(100 − x)","a fall of `20%` buys `25%` more for the same money"],
  ["**Price rises `x%`, cut in consumption**","cut% = (100x)/(100 + x)","a rise of `25%` needs a cut of `20%`"],
  ["**Reduced price per unit**","(reduction% × money spent)/(100 × extra quantity)","10% off, 5 kg more for ₹1,800 → `₹36` a kilogram"],
  ["**The markup, from the total gain**","(100 + x)/100 = total factor ÷ (true/given)","800 g weight, total gain 30% → 1.30/1.25 = 1.04 → `4%`"]
 ],
  note:"Every row above is tested by at least one question below, and every question below uses one row above."},

 {careful:"**The denominator is the weight he gives, not the weight he charges for.** A shopkeeper who hands over 900 g and charges for 1 kg has an error of 100 g on a delivered 900 g, so his gain is (100/900) × 100 = `11 1/9 %`. The answer `10%` comes from dividing by the true 1,000 g, and it is the single commonest mistake in the whole chapter — it is offered as an option almost every time."},

 {careful:"**A false weight and a markup multiply; they never add.** An 800 g weight is a factor of 1,000/800 = 1.25 and a markup of 20% on cost is a factor of 1.2, so together they are 1.25 × 1.2 = 1.5, a gain of `50%`. Adding the two percentages gives `45%`, which is the option put there for exactly that slip."},

 {careful:"**A gain per cent read backwards is still on the weight given.** A dealer gaining `25%` by false weight uses 1,000 × 100/125 = `800 g`, not 1,000 − 25% = 750 g. Taking the percentage off the kilogram is the same error as before, run in reverse."},

 {h:"QUESTIONS — false weights, faulty measures and watered milk",
  mcq:[
  {q:"A shopkeeper sells at cost price but gives less weight than he charges for. His gain per cent is:",
   o:["(error/true value) × 100","(error/(true value − error)) × 100","((true value − error)/true value) × 100","(error/(true value + error)) × 100"],
   a:1,
   why:"**gain% = (error/(true value − error)) × 100**, because `true value − error` is the weight the customer actually receives and that is what the gain is reckoned on. For 900 g charged as 1 kg the error is 100 g and the gain is (100/900) × 100 = `11 1/9 %`. Option A divides by the true kilogram and gives `10%` — the standard error of the chapter. Option D puts the error on the wrong side of the true value and gives `9 1/11 %`, which is the *loss* of a man who hands over 1,100 g.",
   tag:"The formula"},

  {q:"A shopkeeper professes to sell at cost price but uses a weight of 900 g in place of 1 kg. His gain per cent is:",
   o:["9 1/11 %","10%","11 1/9 %","111 1/9 %"],
   a:2,
   why:"**gain% = (error/(true value − error)) × 100** = (100/900) × 100 = `11 1/9 %`. Option B is what dividing by the true 1,000 g gives, and it is the commonest wrong answer in the topic. Option D, `111 1/9 %`, is the money he takes as a percentage of his cost — the step before the end, with the 100 still to come off.",
   tag:"900 g for 1 kg"},

  {q:"A dealer sells at cost price and gains `25%` by using a false weight. The weight he gives in place of 1 kg is:",
   o:["750 g","800 g","960 g","1,250 g"],
   a:1,
   why:"**weight given = true weight × 100/(100 + g)** = 1,000 × 100/125 = `800 g`. Check it forwards: the error is 200 g on a delivered 800 g, and (200/800) × 100 = 25%. Option A takes 25% off the kilogram, which is the same wrong-denominator error running backwards; option D multiplies by 125/100 instead of dividing by it. Option C, 960 g, is the weight that would give a gain of `4 1/6 %`.",
   tag:"Weight from gain"},

  {q:"A cloth merchant sells at cost price but his metre rod measures only 80 cm. His gain per cent is:",
   o:["20%","16 2/3 %","25%","125%"],
   a:2,
   why:"**gain% = ((true length − measure)/measure) × 100** = (20/80) × 100 = `25%` — the denominator is the 80 cm the customer gets, exactly as with a false weight. Option A divides by the true 100 cm; option B divides by 120 cm, which is the formula with the error on the wrong side. Option D is 100/80 as a percentage, the money taken before the cost is subtracted.",
   tag:"Faulty metre"},

  {q:"A seller charges for a litre but his measure holds only 750 ml, and he sells at cost price. His gain per cent is:",
   o:["33 1/3 %","25%","20%","133 1/3 %"],
   a:0,
   why:"**gain% = ((true volume − measure)/measure) × 100** = (250/750) × 100 = `33 1/3 %`. Option B divides the 250 ml error by the true 1,000 ml; option C divides it by 1,250 ml. Option D is the factor 1,000/750 written as a percentage — correct as far as it goes, but the gain is what is left after 100 comes off.",
   tag:"Faulty litre"},

  {q:"A shopkeeper uses a weight of 800 g for every kilogram and sells his goods at `20%` above cost price. His gain per cent is:",
   o:["45%","20%","25%","50%"],
   a:3,
   why:"**factor = (true/given) × (100 + x)/100** = (1,000/800) × (120/100) = 1.25 × 1.2 = 1.5, so the gain is `50%`. Option A adds the two percentages, 25 + 20, which is the standard slip — the two effects multiply because each acts on the result of the other. Options B and C are the markup and the weight gain taken one at a time.",
   tag:"Weight and markup"},

  {q:"A grocer marks his goods `12%` above cost and gives 800 g for every kilogram he charges for. His gain per cent is:",
   o:["12%","40%","37%","25%"],
   a:1,
   why:"**factor = (true/given) × (100 + x)/100** = 1.25 × 1.12 = 1.4, a gain of `40%`. Option C is 25 + 12, the two percentages added; options A and D are each effect alone. The 1.25 comes from 1,000/800 and not from 200/1,000, which is why the weight on its own is worth 25% and not 20%.",
   tag:"Weight and markup"},

  {q:"A trader sells his goods at `10%` below cost price but uses a weight of 800 g for 1 kg. The net result is:",
   o:["a gain of 12.5%","a loss of 10%","a gain of 15%","a gain of 25%"],
   a:0,
   why:"**factor = (true/given) × (100 − x)/100** = (1,000/800) × (90/100) = 1.25 × 0.9 = 1.125, so he gains `12.5%` in spite of the loss on paper. Option C subtracts the percentages, 25 − 10, instead of multiplying the factors. Option B takes the figure on the bill at face value, and option D ignores the discount altogether.",
   tag:"Loss on paper"},

  {q:"A shopkeeper sells at `10%` below cost price and uses a weight of 900 g in place of 1 kg. The net result is:",
   o:["a gain of 11 1/9 %","a loss of 10%","neither a gain nor a loss","a gain of 1 1/9 %"],
   a:2,
   why:"**factor = (true/given) × (100 − x)/100** = (1,000/900) × (90/100) = (10/9) × (9/10) = `1`, so there is neither a gain nor a loss. Handing over `(100 − x)%` of the weight while selling at `x%` below cost always cancels exactly, which is worth remembering as a result in itself. Option D is 11 1/9 − 10, the two percentages subtracted when it is the two factors that have to be multiplied; option A forgets the discount altogether.",
   tag:"Break-even"},

  {q:"A dealer pays for 1 kg but takes 1,200 g from his supplier, and then sells 800 g for the price of 1 kg at cost price. His gain per cent is:",
   o:["50%","40%","45%","25%"],
   a:0,
   why:"**factor = (quantity received)/(quantity given)** = 1,200/800 = 1.5, a gain of `50%`. Put money on it: ₹1,000 buys 1,200 g, and 1,200 g sells as one and a half lots of 1 kg for ₹1,500. Option C adds the two separate gains, 20% on the buying and 25% on the selling, when they compound to (1.2)(1.25) = 1.5; option B divides the 400 g difference by 1,000 g instead of by 800 g.",
   tag:"Both ends"},

  {q:"A milkman mixes 1 litre of water with 4 litres of milk and sells the mixture at the cost price of milk. His gain per cent is:",
   o:["20%","25%","80%","125%"],
   a:1,
   why:"**gain% = (water/milk) × 100** = (1/4) × 100 = `25%`, because the water costs nothing and the whole 5 litres is paid for at the price of the 4 litres of milk. Option A divides the water by the 5 litres of mixture, which is the wrong denominator — the gain is reckoned on what he paid for. Option C is the milk's share of the mixture, and option D is the money taken as a percentage of the cost.",
   tag:"Water in milk"},

  {q:"A mixture of milk and water contains `25%` water by volume and is sold at the cost price of pure milk. The gain per cent is:",
   o:["25%","20%","75%","33 1/3 %"],
   a:3,
   why:"**if the mixture is `w%` water, gain% = (w/(100 − w)) × 100** = (25/75) × 100 = `33 1/3 %`. In 100 litres of mixture there are 25 of water and 75 of milk, and the gain sits on the 75 he paid for. Option A repeats the 25 in the question — the water's share of the mixture, not of the milk — and is the tempting one. Option B uses 25/125, and option C is the milk's share of the mixture.",
   tag:"Water by share"},

  {q:"How much water must be mixed with 60 litres of milk so that selling the mixture at the cost price of milk gives a gain of `20%`?",
   o:["10 litres","15 litres","12 litres","72 litres"],
   a:2,
   why:"**gain% = (water/milk) × 100**, so water = milk × g/100 = 60 × 20/100 = `12 litres`. Check: the cost is 60 units, the money taken is 72, and 12/60 = 20%. Option B is what making the water 20% of the *mixture* gives, since 0.2(60 + w) = w leads to 15; option A divides by 120 instead of 100; option D is the size of the mixture, which the question did not ask for.",
   tag:"Water to add"},

  {q:"A fall of `20%` in the price of rice allows a man to buy how much more rice for the same money?",
   o:["25%","20%","16 2/3 %","80%"],
   a:0,
   why:"**extra% = (100x)/(100 − x)** = (100 × 20)/80 = `25%`. With ₹100 at ₹1 a kilogram he bought 100 kg; at 80 paise he buys 125 kg. Option C is the companion formula (100x)/(100 + x), which belongs to a price *rise*, and it is the standard confusion here. Option B repeats the fall itself, and option D is the new price as a percentage of the old.",
   tag:"Price fall"},

  {q:"A reduction of `10%` in the price of sugar lets a man buy 5 kg more for ₹1,800. The reduced price per kilogram is:",
   o:["₹40","₹45","₹36","₹50"],
   a:2,
   why:"**reduced price = (reduction% × money spent)/(100 × extra quantity)** = (10 × 1,800)/(100 × 5) = `₹36` a kilogram. Check: at ₹40 he got 45 kg, at ₹36 he gets 50 kg, which is 5 more. Option A is the original price — the formula's own check produces it, and it is the commonest thing ticked by mistake. Options B and D are the two quantities in kilograms, neither of which was asked for.",
   tag:"Reduced price"},

  {q:"The price of oil rises by `25%`. By what per cent must a family cut its consumption to keep its oil bill unchanged?",
   o:["25%","33 1/3 %","80%","20%"],
   a:3,
   why:"**cut% = (100x)/(100 + x)** = (100 × 25)/125 = `20%`. Spending stays the same only if price × quantity does, so the new quantity is 100/125 = 0.8 of the old, a cut of one fifth. Option B is (100x)/(100 − x), the price-fall formula used by mistake — the adjacent formula is always the trap in this pair. Option C is the new consumption as a share of the old, not the cut.",
   tag:"Price rise"},

  {q:"A shopkeeper hands over `w` grams in place of a true `t` grams and also sells at `x%` above cost price. The money he takes, as a multiple of his cost, is:",
   o:["(t/w) × (100 + x)/100","(w/t) × (100 + x)/100","(t/w) + (100 + x)/100","((t − w)/w) × (100 + x)/100"],
   a:0,
   why:"**factor = (true/given) × (100 + x)/100 = (t/w) × (100 + x)/100.** The weight contributes `t/w`, which is greater than 1 because he gives less than he charges for, and the markup contributes `(100 + x)/100`. Option B inverts the weight factor and makes the dishonesty into a loss. Option C adds the two instead of multiplying them, and option D uses the *gain* fraction `(t − w)/w` where the whole factor `t/w` is needed, the two differing by exactly 1. The gain per cent is this multiple less 1, multiplied by 100 — the multiple itself is not the gain.",
   tag:"Combined factor"},

  {q:"A dealer uses a weight of 800 g for 1 kg and finds that his total gain is `30%`. The percentage by which he marks his goods above cost is:",
   o:["5%","4%","24%","30%"],
   a:1,
   why:"**(100 + x)/100 = total factor ÷ (true/given)** = 1.30 ÷ 1.25 = 1.04, so he marks his goods `4%` above cost. Option A subtracts 25 from 30, which is the same adding-and-subtracting error as before, now run in reverse. Option C divides the 30 rather than the factor 1.30, giving 30/1.25 = 24, and option D repeats the figure in the question.",
   tag:"Markup from gain"},

  {q:"A shopkeeper selling at cost price uses a weight of 1,100 g in place of 1 kg. The result is:",
   o:["a gain of 10%","a loss of 10%","a loss of 9 1/11 %","a gain of 9 1/11 %"],
   a:2,
   why:"He gives more than he charges for, so **loss% = (error/(true value + error)) × 100** = (100/1,100) × 100 = `9 1/11 %` — the denominator is still the 1,100 g that leaves the shop. Option B divides by the true 1,000 g, the same wrong denominator that turns 11 1/9 into 10 the other way round. Options A and D have the direction wrong: a man handing over 1,100 g for the price of 1,000 g cannot be gaining.",
   tag:"1,100 g for a kg"},

  {q:"A shopkeeper who sells at cost price gains `g%` by using a false weight. The weight he gives in place of a true 1,000 g is:",
   o:["1,000 × (100 − g)/100","1,000 × 100/(100 + g)","1,000 × (100 + g)/100","1,000 × 100/(100 − g)"],
   a:1,
   why:"**weight given = true weight × 100/(100 + g)**, which is the formula gain% = (error/(true − error)) × 100 solved for the weight delivered. With `g = 25` it gives 1,000 × 100/125 = `800 g`. Option A takes `g%` off the kilogram and gives 750 g — the wrong denominator again. Options C and D are both greater than 1,000 g, which would mean giving away more than is charged for.",
   tag:"Weight from gain"},

  {q:"A milkman mixes water and milk in the ratio `1 : 4` and sells the mixture at `10%` above the cost price of milk. His gain per cent is:",
   o:["35%","25%","10%","37.5%"],
   a:3,
   why:"**factor = (mixture/milk) × (100 + x)/100** = (5/4) × (110/100) = 1.25 × 1.1 = 1.375, a gain of `37.5%`. Treat the water as free: 4 litres of milk cost 4 units and 5 litres go out at 1.1 units each, so ₹5.50 comes back on ₹4. Option A adds the 25 and the 10 instead of multiplying the factors, and options B and C are the water and the markup taken separately.",
   tag:"Water and markup"}
 ],
  note:"Every question here turns on which quantity the percentage is taken of. When an answer comes out at a round 10% or 20%, check the denominator before ticking it — the round number is usually the trap."}
]
},

/* ============================================================ 4 — Mixture and alligation (22 questions) */
{
id:"mix-allig", n:"Mixture and alligation", hy:1,
w:"The alligation cross and the one thing that goes wrong with it — which difference belongs to which quantity — then milk and water with water priced at nothing, and the rates, speeds, profit per cents and average marks where most of alligation's marks actually are.",
quick:[
 "**(quantity of cheaper)/(quantity of dearer) = (dearer price − mean price)/(mean price − cheaper price).** The two differences are *crossed*: the cheaper quantity carries the difference measured at the dearer end. Inverting this is the only mistake the topic really has.",
 "**Mean price = (mc + nd)/(m + n)** when prices ₹`c` and ₹`d` are mixed in the ratio `m : n` — the total cost over the total quantity. The simple average `(c + d)/2` is right only for equal quantities.",
 "**The check, on every answer: the mean price lies nearer the price of whatever there is more of.** More of the cheaper means a mean below the midpoint. If your ratio says one thing and the mean price says the other, the cross is inverted.",
 "Water costs nothing, so milk and water is alligation with a price of `0`: **water : milk = (price of milk − mean price) : mean price**. Selling the mixture at the price of pure milk gives **gain% = (water/milk) × 100**, on the cost of the milk — while water as a share of the mixture is **water/(water + milk)**. Three different numbers from one mixture.",
 "**Adding to a mixture: replace the mixture by a single ingredient priced at its own mean price**, then alligate that against whatever is being added. Its own mean price — not the simple average of the two prices inside it.",
 "**Alligation is not only for mixtures.** Two rates of interest averaging a return, two speeds averaging a speed (weighted by **time**), two lots averaging a profit per cent on cost, two groups averaging a mark — the same cross, with sums of money, times, cost prices or numbers of pupils as the quantities."
],
blocks:[
 {h:"THE SHEET — every formula this topic tests, and what each percentage is taken on",
  cols:["Asked as","The formula","What it is taken on, and the check"],
  rows:[
  ["**The rule of alligation**","(quantity of cheaper)/(quantity of dearer) = (dearer price − mean price)/(mean price − cheaper price)","The differences are crossed. The cheaper quantity takes the difference at the dearer end"],
  ["**The cross, in words**","Cheaper price at the top left, dearer price at the top right, mean price in the middle. Subtract the mean from each top price, ignore the sign, and write each difference at the bottom corner diagonally opposite","The number standing below the cheaper price is the number of parts of the **cheaper**"],
  ["**Mean price from a ratio `m : n`**","Mean price = (mc + nd)/(m + n)","Weighted by quantity. `(c + d)/2` is right only when m = n"],
  ["**The ratio from a given mean price**","(cheaper) : (dearer) = (d − m) : (m − c)","Cheaper named first. Never the ratio of the prices themselves"],
  ["**The direction check**","The mean price lies between the two prices, nearer the price of the ingredient there is more of","More of the cheaper ⇒ mean below the midpoint. A weighted average never falls outside the two prices"],
  ["**Quantity of the dearer in `Q` kg of mixture**","Q × (m − c)/(d − c)","The denominator is the whole gap. The cheaper is Q × (d − m)/(d − c)"],
  ["**Water mixed with milk at ₹`c`, mixture worth ₹`m`**","water : milk = (c − m) : m","Water's price is `0`, so water is the cheaper ingredient"],
  ["**Water to add to `q` litres of milk**","q × (c − m)/m","Of the **milk** — the milk is the quantity that stays fixed"],
  ["**Water as a percentage of the mixture**","(water/(water + milk)) × 100","Of the **mixture**, not of the milk"],
  ["**Gain% on selling the mixture at the price of pure milk**","(water/milk) × 100","Of the **cost of the milk**, because the milk is all that was paid for"],
  ["**Water to add to change the percentage of water**","Hold the milk fixed: new total = milk/(new milk fraction), and water added = new total − old total","The new percentage is of the **new** mixture, never of the old one"],
  ["**Adding one ingredient to a mixture**","Price the mixture at its own mean price, then alligate that against the price of what is added","The mixture's own mean price, not the simple average of the two prices in it"],
  ["**Two vessels, equal measures taken from each**","Milk fraction of the result = ½(milk fraction of A + milk fraction of B)","Adding the ratio terms is wrong unless both ratios have the same number of parts"],
  ["**Two vessels, mixed to reach a target ratio**","Alligate on the **fraction** of one component: A : B = (target fraction − fraction in B) : (fraction in A − target), with A the richer vessel","On the fraction, never on the ratio values 5/1 and 3/1 themselves"],
  ["**Three ingredients, taken in pairs**","Fix two of them in a known ratio, replace that pair by its mean price, then alligate the pair against the third","Split the pair's share back over the two at the end"],
  ["**Two rates of interest averaging a return**","(sum at the lower rate) : (sum at the higher) = (higher rate − average rate) : (average rate − lower rate)","Average rate = (total interest/total sum) × 100, per annum"],
  ["**Two speeds averaging a speed**","(time at the lower speed) : (time at the higher) = (higher speed − average) : (average − lower speed)","A ratio of **times**. The distances are in a different ratio"],
  ["**Two lots at two profit per cents**","(cost of the lower-profit lot) : (cost of the higher) = (higher% − overall%) : (overall% − lower%)","Every percentage on the **cost price**, and the quantities are cost prices"],
  ["**Two groups averaging a mark**","(number in the lower group) : (number in the higher) = (higher average − class average) : (class average − lower average)","The quantities are **numbers of pupils**, not marks"],
  ["**A mixture sold at a profit**","gain% = ((SP − mean price)/mean price) × 100","Of the **mean price**, which is the mixture's cost price per unit"]
 ]},

 {careful:"**The quantity of the cheaper ingredient goes with the difference taken at the dearer end.** `(cheaper)/(dearer) = (d − m)/(m − c)`, and writing it upside down is the one error that ruins this topic. The guard takes a second: the mean price must sit nearer the price of whatever there is more of. Tea at ₹60 and ₹75 blended to ₹66 is nearer ₹60, so there is more of the ₹60 tea — the ratio is `3 : 2`, cheaper first, and never `2 : 3`."},

 {careful:"**One milk-and-water mixture gives three different percentages, and the question decides which.** For milk and water in the ratio `4 : 1`: water is `20%` **of the mixture**, water is `25%` **of the milk**, and the gain on selling the mixture at the price of pure milk is `25%` **of the cost price of the milk**. The 20% and the 25% are both correct and they answer different questions, so read the base the question names before ticking."},

 {careful:"**The differences go on the prices; the ratio comes out on the quantities — and the quantities are not always kilograms.** For two rates of interest the quantities are the sums invested, for two speeds they are the **times** and not the distances, for two lots of goods they are the cost prices, and for two groups of pupils they are the numbers of pupils. Dividing a difference by the whole gap instead of by the other difference gives that ingredient's **share of the total**, which is a different answer and is always on the option list."},

 {h:"QUESTIONS — the cross, the mixtures, and alligation outside mixtures",
  mcq:[
  {q:"The rule of alligation states that (quantity of the cheaper)/(quantity of the dearer) equals:",
   o:["(dearer price − mean price)/(mean price − cheaper price)","(mean price − cheaper price)/(dearer price − mean price)","(dearer price − cheaper price)/(mean price − cheaper price)","(mean price − cheaper price)/(dearer price − cheaper price)"],
   a:0,
   why:"**(quantity of cheaper)/(quantity of dearer) = (dearer price − mean price)/(mean price − cheaper price).** The two differences are *crossed*: the cheaper quantity takes the difference measured at the dearer end. Option B is that inversion, and it is the commonest error in the chapter — the guard is that a mean price nearer the cheaper price has to mean more of the cheaper ingredient. Option D divides by the whole gap and so gives the dearer ingredient's share of the mixture, not a ratio of the two quantities.",
   tag:"Alligation"},

  {q:"Two ingredients costing ₹`c` and ₹`d` per kg are mixed in the ratio `m : n`. The mean price of the mixture per kg is:",
   o:["(c + d)/2","(md + nc)/(m + n)","(mc + nd)/(mn)","(mc + nd)/(m + n)"],
   a:3,
   why:"**Mean price = (mc + nd)/(m + n)** — the total cost divided by the total quantity, each price weighted by the quantity taken of it. Option A is the simple average, correct only when `m = n`, and it is the slip that makes an unequal mixture come out at the midpoint. Option B attaches each price to the wrong part of the ratio, which is the same inversion the alligation cross invites; option C divides by `mn`, which is not the quantity of anything.",
   tag:"Mean price"},

  {q:"Rice costing ₹30 per kg is mixed with rice costing ₹45 per kg in the ratio `2 : 3`. The mean price of the mixture per kg is:",
   o:["₹36","₹37.50","₹39","₹42"],
   a:2,
   why:"**Mean price = (mc + nd)/(m + n)** = (2 × 30 + 3 × 45)/5 = 195/5 = `₹39`. Option A is the ratio read the wrong way round, `3 : 2` in place of `2 : 3`, and option B is the simple average of the two prices, which holds only for equal quantities. There is more of the dearer rice here, so the mean must sit above ₹37.50 — that rules out both at a glance, and `₹42` would need a `1 : 4` mixture.",
   tag:"Mean price"},

  {q:"In what ratio must tea costing ₹60 per kg be mixed with tea costing ₹75 per kg so that the mixture is worth ₹66 per kg?",
   o:["2 : 3","3 : 2","4 : 5","5 : 4"],
   a:1,
   why:"**(cheaper)/(dearer) = (dearer price − mean price)/(mean price − cheaper price)** = (75 − 66)/(66 − 60) = 9/6 = `3 : 2`. Check it: 3 kg at ₹60 and 2 kg at ₹75 cost ₹180 + ₹150 = ₹330 over 5 kg, which is ₹66 per kg. Option A is the inversion, and the mean ₹66 lies nearer ₹60, so there must be more of the cheaper tea. Options C and D are the ratio of the prices, 60 : 75 — alligation uses the differences, never the prices themselves.",
   tag:"The ratio"},

  {q:"In what ratio must pulses costing ₹15 per kg be mixed with pulses costing ₹20 per kg to get a mixture worth ₹16.50 per kg?",
   o:["3 : 7","7 : 3","7 : 10","3 : 4"],
   a:1,
   why:"**(cheaper)/(dearer) = (d − m)/(m − c)** = (20 − 16.50)/(16.50 − 15) = 3.50/1.50 = `7 : 3`. Check: 7 kg at ₹15 and 3 kg at ₹20 cost ₹105 + ₹60 = ₹165 over 10 kg, which is ₹16.50 per kg. Option C divides the first difference by the whole gap `20 − 15` and so gives the cheaper variety's share of the mixture — 7 kg in every 10 — rather than its ratio to the dearer. Option A inverts the cross and option D is the ratio of the prices.",
   tag:"The ratio"},

  {q:"A mixture of two varieties of sugar costing ₹40 and ₹60 per kg is worth ₹45 per kg. Which of these is true?",
   o:["There is more of the ₹60 variety, in the ratio `1 : 3`","There is more of the ₹40 variety, in the ratio `1 : 3`","There is more of the ₹40 variety, in the ratio `3 : 1`","The two are present in equal quantities"],
   a:2,
   why:"**(cheaper)/(dearer) = (dearer − mean)/(mean − cheaper)** = (60 − 45)/(45 − 40) = 15/5 = `3 : 1`, so three parts of the ₹40 sugar to one part of the ₹60. The direction check settles it before any arithmetic: ₹45 is far nearer ₹40 than ₹60, so the cheap variety must dominate. Option B names the right variety with the ratio inverted, which is exactly the slip the cross invites; equal quantities would give the simple average, ₹50.",
   tag:"The check"},

  {q:"In 90 kg of a mixture of two kinds of wheat costing ₹20 and ₹35 per kg, the mixture is worth ₹25 per kg. The quantity of the dearer kind in it is:",
   o:["22.5 kg","30 kg","45 kg","60 kg"],
   a:1,
   why:"**Quantity of the dearer = Q × (mean − cheaper price)/(dearer price − cheaper price)** = 90 × (25 − 20)/(35 − 20) = 90 × 5/15 = `30 kg`, leaving 60 kg of the cheaper kind. Option D is that cheaper quantity — the figure the question did not ask for, and also what an inverted cross produces. Option C is an equal split, which would make the mixture worth ₹27.50 per kg; option A uses the whole gap `35 − 20` in place of the second difference and so gets a `3 : 1` ratio instead of `2 : 1`.",
   tag:"Quantity"},

  {q:"A mixture holds rice at ₹26 per kg and a dearer rice in the ratio `3 : 1`, and the mixture is worth ₹29 per kg. The price of the dearer rice per kg is:",
   o:["₹30","₹32","₹35","₹38"],
   a:3,
   why:"**Mean price = (mc + nd)/(m + n)**, so (3 × 26 + 1 × d)/4 = 29, giving 78 + d = 116 and `d = ₹38`. By the cross: the cheaper rice is 3 parts and the dearer 1, so (d − 29)/(29 − 26) = 3/1 and d = 29 + 9. Option B is what the simple average gives, (26 + d)/2 = 29, ignoring that there is three times as much cheap rice; option A is the ratio inverted, (26 + 3d)/4 = 29; option C adds the gap ₹3 three times to the **cheaper** price instead of to the mean price.",
   tag:"Dearer price"},

  {q:"Water is to be mixed with milk costing ₹40 per litre so that the mixture is worth ₹32 per litre. The ratio of water to milk is:",
   o:["4 : 1","1 : 5","1 : 4","5 : 1"],
   a:2,
   why:"Water costs nothing, so it is the cheaper ingredient at a price of `0`: **water : milk = (price of milk − mean price) : (mean price − 0)** = (40 − 32) : 32 = 8 : 32 = `1 : 4`. Option B, `1 : 5`, is water as a share of the whole mixture — one litre of water in every five litres sold — a true statement about the same mixture but not the ratio asked for. Option A inverts the cross, and a mixture with four times as much water as milk could not be worth four-fifths of the price of milk.",
   tag:"Milk and water"},

  {q:"Water is mixed with milk costing ₹45 per litre so that the mixture is worth ₹36 per litre. Water as a percentage of the mixture is:",
   o:["20%","25%","75%","80%"],
   a:0,
   why:"**water : milk = (price of milk − mean price) : mean price** = (45 − 36) : 36 = 9 : 36 = `1 : 4`, so water is one part in five of what is sold, and **water% of the mixture = (water/(water + milk)) × 100** = (1/5) × 100 = `20%`. Option B is water as a percentage of the **milk**, 1/4 — the same mixture against a different base, and also the gain per cent the seller would make at the milk's price. Options C and D are the milk's share: 80% of the mixture as it is, and 75% if water had wrongly been taken as a quarter of it.",
   tag:"Milk and water"},

  {q:"How much water must be added to 60 litres of milk costing ₹48 per litre so that the mixture is worth ₹36 per litre?",
   o:["15 litres","20 litres","30 litres","80 litres"],
   a:1,
   why:"**Water to add = q × (price of milk − mean price)/mean price** = 60 × (48 − 36)/36 = 60 × (1/3) = `20 litres`, the cross giving water : milk = 12 : 36 = `1 : 3`. Check: 60 litres of milk cost ₹2,880 and 80 litres at ₹36 come to ₹2,880. Option D is that new total volume, one step past the answer; option A takes water's share of the **mixture**, one part in four, and applies it to the milk instead; 30 litres of water would bring the mixture to ₹32 per litre.",
   tag:"Water added"},

  {q:"A milkman mixes water with milk and sells the mixture at the cost price of pure milk. If the mixture has milk and water in the ratio `4 : 1`, his gain per cent is:",
   o:["20%","33⅓%","25%","No gain — he sells at the cost price of milk"],
   a:2,
   why:"**Gain% = (water/milk) × 100**, taken on the cost of the milk, because the milk is the only thing he paid for: (1/4) × 100 = `25%`. On 4 litres of milk at ₹40 he spends ₹160, sells 5 litres for ₹200 and gains ₹40 on ₹160. Option A is the water's share of the mixture, the right figure for a different question and the commonest tick here; option B is the answer for a `3 : 1` mixture. He does sell at the cost price of milk, but the water he sells as milk cost him nothing, so option D is wrong.",
   tag:"Gain on water"},

  {q:"A 40-litre mixture of milk and water contains 10% water. How much water must be added so that water is 20% of the new mixture?",
   o:["4 litres","5 litres","8 litres","45 litres"],
   a:1,
   why:"The milk never changes, so work from it: milk = 36 litres, and it must become 80% of the new mixture, so **new total = milk/(new milk fraction)** = 36/0.80 = 45 litres and `5 litres` of water go in. Option D is that new total, the step before the answer. Option C is 20% of the original 40 litres, which is the standard slip — the 20% is of the **new** mixture. Option A merely doubles the water already there, giving 8 litres in 44, which is not a fifth.",
   tag:"Water added"},

  {q:"A 60-kg mixture holds rice at ₹30 per kg and rice at ₹45 per kg in the ratio `2 : 1`. How much rice at ₹45 per kg must be added to make the mixture worth ₹40 per kg?",
   o:["20 kg","30 kg","40 kg","60 kg"],
   a:3,
   why:"Price the whole mixture at its own mean price first: **(mc + nd)/(m + n)** = (2 × 30 + 1 × 45)/3 = `₹35` per kg. Now alligate ₹35 against ₹45 for a mean of ₹40: **(mixture)/(rice added) = (45 − 40)/(40 − 35) = 5/5 = 1 : 1**, so the rice added must match the 60 kg already there — `60 kg`. Option C is the quantity of ₹30 rice in the original mixture and option A the quantity of ₹45 rice, neither of which was asked for; option B is what the simple average ₹37.50 gives in place of the true mean price ₹35.",
   tag:"Adding to a mixture"},

  {q:"A grocer mixes rice costing ₹20 per kg with rice costing ₹30 per kg in the ratio `2 : 3` and sells the mixture at ₹31.20 per kg. His gain per cent on the cost price is:",
   o:["16⅔%","20%","24.8%","30%"],
   a:1,
   why:"The mean price is the mixture's cost price: (2 × 20 + 3 × 30)/5 = 130/5 = `₹26` per kg. Then **gain% = ((SP − mean price)/mean price) × 100**, on the cost price: (5.20/26) × 100 = `20%`. Option A is the same ₹5.20 taken on the **selling price**, 5.20/31.20 = 16⅔%, which is this chapter's standing confusion of base; option D is what the ratio inverted gives, since `3 : 2` puts the mean at ₹24; option C comes from using the simple average ₹25 instead of the weighted mean.",
   tag:"Mixture at a profit"},

  {q:"Vessel A holds milk and water in the ratio `2 : 1` and vessel B in the ratio `1 : 3`. Equal quantities are drawn from each vessel and mixed. In the new mixture milk and water are in the ratio:",
   o:["3 : 4","7 : 6","11 : 13","13 : 11"],
   a:2,
   why:"With equal quantities the milk fraction of the result is the **average of the two milk fractions**: ½(2/3 + 1/4) = ½(11/12) = 11/24, so milk : water = `11 : 13`. Count it with 12 litres from each: A gives 8 milk and 4 water, B gives 3 milk and 9 water, total 11 against 13. Option A adds the ratio terms, (2 + 1) : (1 + 3), which is right only when the two vessels have the same number of parts; option B averages the ratios as numbers, ½(2/1 + 1/3) = 7/6; option D is the answer with milk and water swapped.",
   tag:"Two vessels"},

  {q:"Vessel A holds milk and water in the ratio `5 : 1` and vessel B in the ratio `3 : 1`. In what ratio must the contents be mixed so that the result holds milk and water in the ratio `7 : 2`?",
   o:["1 : 2","2 : 1","1 : 3","3 : 1"],
   a:0,
   why:"Alligate on the **fraction of milk**, not on the ratio: A is 5/6, B is 3/4 and the target is 7/9, which over 36ths are 30/36, 27/36 and 28/36. B is the poorer vessel, so **B : A = (30 − 28) : (28 − 27) = 2 : 1**, and therefore A : B = `1 : 2`. Check: 1 litre of A with 2 of B gives 5/6 + 3/2 = 7/3 litres of milk against 1/6 + 1/2 = 2/3 of water, a ratio of 7 : 2. Option C is what alligating on the ratio values 5, 3 and 3.5 gives instead of on the fractions, and option B is the inversion.",
   tag:"Two vessels"},

  {q:"Three varieties of tea costing ₹70, ₹80 and ₹95 per kg are mixed so that the mixture is worth ₹80 per kg, the first two varieties being taken in equal quantities. The three varieties are in the ratio:",
   o:["1 : 1 : 1","1 : 1 : 6","3 : 3 : 1","3 : 3 : 2"],
   a:3,
   why:"Take the ingredients in pairs. Equal quantities of the ₹70 and ₹80 teas form one ingredient priced at `₹75` per kg, and then **(the pair)/(the third) = (95 − 80)/(80 − 75) = 15/5 = 3 : 1** — three parts of the ₹75 blend to one of the ₹95. Splitting those three parts equally between the first two gives `3 : 3 : 2`, and 210 + 240 + 190 = ₹640 over 8 kg is ₹80 per kg. Option B is that last cross inverted; option A, equal parts of all three, comes to 245/3 = ₹81.67 per kg.",
   tag:"Three ingredients"},

  {q:"A man invests ₹10,000, part of it at 6% per annum and the rest at 9% per annum, and earns ₹780 as interest in a year. The two sums are in the ratio:",
   o:["1 : 1","2 : 5","2 : 3","3 : 2"],
   a:2,
   why:"The average rate is (780/10000) × 100 = 7.8% per annum, and alligation runs on the rates: **(sum at the lower rate)/(sum at the higher) = (higher rate − average)/(average − lower rate)** = (9 − 7.8)/(7.8 − 6) = 1.2/1.8 = `2 : 3`, which is ₹4,000 and ₹6,000. Option D inverts it. Option B is the lower-rate sum as a share of the whole ₹10,000 — four thousand out of ten — got by dividing by the full gap `9 − 6` instead of by the other difference; equal sums would average 7.5% and earn ₹750.",
   tag:"Two interest rates"},

  {q:"A car runs part of a journey at 30 km/h and the rest at 50 km/h, and its average speed over the whole journey is 45 km/h. The times spent at the two speeds are in the ratio:",
   o:["3 : 1","1 : 3","1 : 5","5 : 1"],
   a:1,
   why:"An average speed is the mean of the speeds weighted by **time**, so **(time at the lower speed)/(time at the higher) = (higher speed − average)/(average − lower speed)** = (50 − 45)/(45 − 30) = 5/15 = `1 : 3`. Check: 1 hour at 30 km/h and 3 hours at 50 km/h cover 30 + 150 = 180 km in 4 hours, which is 45 km/h. Option C is the ratio of the **distances** covered at the two speeds, 30 : 150 — the quantity this cross does not give — and option A is the inversion.",
   tag:"Two speeds"},

  {q:"A trader sells one lot of goods at a profit of 10% on cost and another lot at a profit of 25% on cost, and on the two together makes a profit of 15% on cost. The cost prices of the two lots are in the ratio:",
   o:["1 : 2","2 : 3","2 : 1","3 : 2"],
   a:2,
   why:"All three percentages are on the cost price, so the cross runs on the profit per cents with the **cost prices** as the quantities: **(cost of the 10% lot)/(cost of the 25% lot) = (25 − 15)/(15 − 10) = 10/5 = `2 : 1`**. On ₹200 and ₹100 the profits are ₹20 and ₹25, which is ₹45 on ₹300 — 15%. Option A inverts the cross; option B is the first lot's share of the total cost, two parts in three, from dividing by the whole gap `25 − 10`.",
   tag:"Two profit rates"},

  {q:"In a class the boys average 72 marks and the girls average 84 marks, while the class as a whole averages 76 marks. The number of boys to the number of girls is in the ratio:",
   o:["1 : 1","1 : 2","2 : 3","2 : 1"],
   a:3,
   why:"A class average is the mean of the two group averages weighted by the **number** in each group, so **(boys)/(girls) = (girls' average − class average)/(class average − boys' average)** = (84 − 76)/(76 − 72) = 8/4 = `2 : 1`. Two boys at 72 and one girl at 84 make 228 marks over three pupils, which is 76. Option B is the inversion, and the check kills it — 76 lies nearer the boys' 72, so there must be more boys. Option C is the boys' share of the class, two pupils in every three.",
   tag:"Two groups"}
 ],
  note:"Every question above is one alligation cross, and the differences always sit on the prices, rates, speeds or averages while the ratio comes out on the quantities. If an answer disagrees with the check — the mean lies nearer the price of whatever there is more of — the cross was written upside down."}
]
},

/* ============================================================ 5 — Replacement, ratios and three-vessel mixing (20 questions) */
{
id:"mix-replace", n:"Replacement, ratios and three-vessel mixing", hy:1,
w:"The replacement formula and everything built on it: drawing off and refilling n times, changing a mixture's ratio by hand, and pouring three vessels into one.",
quick:[
 "**If `x` litres are drawn from a vessel of `v` litres and replaced with water, `n` times over, the original liquid left is `v(1 − x/v)ⁿ`.** The fraction of it left is `(1 − x/v)ⁿ` — a power, never `1 − nx/v`.",
 "When the vessel already holds a mixture, the same factor `(1 − x/v)ⁿ` multiplies **the component you are tracking, not the vessel**, and `v` is still the total volume. 80 litres of milk in a 100-litre vessel, 20 litres replaced twice, leaves 80 × (0.8)² = `51.2` litres.",
 "**Taking `k` litres out of a mixture of `a : b` removes `k × a/(a + b)` of the first component and `k × b/(a + b)` of the second** — the mixture leaves in its own ratio. This is the step most often skipped.",
 "To turn milk and water from `a : b` into `c : d` by replacing mixture with water, the milk fraction of the total must fall from `a/(a + b)` to `c/(c + d)`, so **the fraction left is [c/(c + d)] ÷ [a/(a + b)]** and in one operation `x = v(1 − that fraction)`.",
 "**Three vessels of equal capacity holding `a₁ : b₁`, `a₂ : b₂` and `a₃ : b₃` give a milk fraction of ⅓ of [a₁/(a₁ + b₁) + a₂/(a₂ + b₂) + a₃/(a₃ + b₃)].** Adding the ratio terms straight across is wrong.",
 "**A milk fraction of `f` is a milk-to-water ratio of `f : (1 − f)`.** After three draws of one-fourth from pure milk the milk is `(3/4)³ = 27/64` of the vessel, so the ratio is `27 : 37`, not `27 : 64`.",
 "Adding `p` litres of milk and `q` litres of water gives **`(milk + p) : (water + q)`** — add to the quantities, never to the ratio terms."
],
blocks:[
 {h:"THE SHEET — replacement, and every question built on it",
  cols:["Asked for","The formula","The step that gets skipped"],
  rows:[
  ["**Original liquid left after `n` replacements**","v(1 − x/v)ⁿ, from a vessel of `v` litres with `x` litres drawn and refilled each time","It is a power, not a multiple — `v − nx` is right only for n = 1"],
  ["**Fraction of the original left**","(1 − x/v)ⁿ","The fraction gone is 1 − (1 − x/v)ⁿ, which is not (x/v)ⁿ"],
  ["**Water in the vessel after `n` replacements**","v[1 − (1 − x/v)ⁿ]","The vessel is refilled each time, so it still holds `v`: water = v − liquid"],
  ["**A component when the vessel already holds a mixture**","(that component at the start) × (1 − x/v)ⁿ, with `v` the **total** volume","The factor multiplies the component, not the whole vessel"],
  ["**Milk removed when `k` litres of an `a : b` mixture is drawn off**","k × a/(a + b)","Not the whole of `k`, and not k × a/b"],
  ["**The number of operations `n`**","Solve (1 − x/v)ⁿ = the final fraction by writing both sides as the same power","(4/5)ⁿ = 64/125 gives n = 3, because 64/125 = (4/5)³"],
  ["**The amount `x` drawn each time**","Take the nth root first: 1 − x/v = the final fraction raised to 1/n, then x = v(1 − that)","Forgetting the root is the commonest single slip in the topic"],
  ["**The vessel's original capacity `v`**","v = x ÷ [1 − the final fraction raised to 1/n]","Work backwards from the final fraction, not from the total drawn off"],
  ["**Mixture to draw off and refill with water, to turn `a : b` into `c : d`**","In one operation, x = v{1 − [c/(c + d)] ÷ [a/(a + b)]}","Compare the milk fractions of the **total**, not the two ratios term by term"],
  ["**Water to add to turn `a : b` into `a : c`**","New total = milk × (a + c)/a; the water to add is that total minus the old one","The milk is unchanged, so every line of the working starts from the milk"],
  ["**Ratio after adding `p` of one and `q` of the other**","(milk + p) : (water + q)","Adding p and q to the ratio terms instead is the standard wrong move"],
  ["**Ratio after `k` litres of an `a : b` mixture is replaced by pure milk**","(milk − k × a/(a + b) + k) : (water − k × b/(a + b))","The `k` litres drawn off carries milk away before the pure milk goes in"],
  ["**Three vessels of equal capacity, ratios `a₁ : b₁`, `a₂ : b₂`, `a₃ : b₃`**","Milk fraction = ⅓[a₁/(a₁ + b₁) + a₂/(a₂ + b₂) + a₃/(a₃ + b₃)]","Put the three fractions over a common denominator; never add the ratio terms"],
  ["**Two mixtures combined to a stated final ratio**","Alligation on the milk fractions: quantity of A : quantity of B = (mean − B's fraction) : (A's fraction − mean), taken positive","The fractions of the total, not the ratio terms — and note that the differences come out **crossed**: A's share is measured by B's gap"],
  ["**Milk : water from a milk fraction `f`**","f : (1 − f)","`27/64` of the vessel is a ratio of `27 : 37`, not `27 : 64`"]
 ]},

 {careful:"**The mixture leaves in its own ratio.** When 12 litres is drawn out of 60 litres of a `7 : 5` mixture, the milk does not drop by 12 — it drops by 12 × 7/12 = `7`, from 35 to `28`. Treating the whole of the amount drawn as milk is the step skipped in more of these questions than any other."},

 {careful:"**`(1 − x/v)ⁿ` is not `1 − nx/v`, and the factor applies to the component, not to the vessel.** Two replacements of 20 litres in a 100-litre vessel leave a factor of (0.8)² = 0.64. If the vessel held 80 litres of milk, the milk left is 80 × 0.64 = `51.2` litres — `64` litres is 100 × 0.64, the factor applied to the whole vessel, and it is always offered as an option."},

 {careful:"**A fraction of the vessel is not a ratio.** If the milk is `9/16` of the vessel, then milk : water is `9 : 7`, because the water is the other `7/16`. Answering `9 : 16` gives milk to total, which is the quantity the question did not ask for."},

 {h:"QUESTIONS — drawing off, refilling and repouring",
  mcq:[
  {q:"A vessel holds `v` litres of pure milk. `x` litres is drawn off and replaced with water, and this is done `n` times over. The milk left in the vessel is:",
   o:["v(1 − x/v)ⁿ","v(1 − x/v)","v − nx","v(x/v)ⁿ"],
   a:0,
   why:"**Milk left = v(1 − x/v)ⁿ**, because each operation leaves the same fraction `(1 − x/v)` of whatever milk was there. Option C, `v − nx`, is the linear answer — it treats every draw as taking pure milk, which is only true of the first one, and it is the tempting option. Option B is the answer after a single operation; option D is the fraction taken raised to n, not the fraction left.",
   tag:"Replacement"},

  {q:"A vessel contains 64 litres of pure milk. 16 litres is drawn off and replaced with water, and the same is done once more. The milk now in the vessel is:",
   o:["32 litres","48 litres","36 litres","28 litres"],
   a:2,
   why:"**Milk left = v(1 − x/v)ⁿ** = 64 × (1 − 16/64)² = 64 × (3/4)² = 64 × 9/16 = `36` litres. Option A, `32`, is 64 − 2 × 16, the linear answer that ignores the dilution; option B, `48`, is the milk after one operation only, the result one step before the end; option D, `28`, is the water, which the question did not ask for.",
   tag:"Two replacements"},

  {q:"A vessel holds 60 litres of a mixture of milk and water in the ratio `7 : 5`. 12 litres of the mixture is taken out and nothing is put back. The milk left is:",
   o:["23 litres","28 litres","20 litres","48 litres"],
   a:1,
   why:"**Milk removed = k × a/(a + b)** = 12 × 7/12 = 7 litres, so the milk falls from 60 × 7/12 = 35 to `28` litres. Option A, `23`, is 35 − 12 — the whole of the amount drawn charged to the milk, and the commonest error in the chapter. Option C is the water left and option D is the mixture left, neither of which was asked for.",
   tag:"Drawing off"},

  {q:"A vessel holds 60 litres of pure milk. How much must be drawn off and replaced with water so that milk and water are in the ratio `3 : 2`?",
   o:["36 litres","40 litres","12 litres","24 litres"],
   a:3,
   why:"The vessel stays full at 60 litres, so **milk must become 60 × 3/(3 + 2) = 36 litres**, and since pure milk is drawn off, the amount removed is 60 − 36 = `24` litres. Option A, `36`, is the milk left rather than the amount drawn, and it is the trap. Option B is 60 × 2/3, which divides by the other part instead of by the sum `3 + 2`; option C is one share of five.",
   tag:"Making a ratio"},

  {q:"A vessel is full of pure spirit. One-fifth of the contents is drawn off and replaced with water each time. After how many such operations is the spirit left `64/125` of the vessel?",
   o:["2","3","4","5"],
   a:1,
   why:"**The fraction left after n operations is (1 − x/v)ⁿ**, here (4/5)ⁿ, so (4/5)ⁿ = 64/125 = (4/5)³ and n = `3`. Two operations would leave 16/25 and four would leave 256/625, so the adjacent options are both checkable in one line. Option D, `5`, is the number of equal parts the vessel was divided into, not the number of operations — that confusion is the trap.",
   tag:"Finding n"},

  {q:"A vessel full of pure milk has one-fourth of its contents drawn off and replaced with water, three times over. The ratio of milk to water in it is then:",
   o:["27 : 37","27 : 64","37 : 27","3 : 1"],
   a:0,
   why:"**The fraction left is (1 − x/v)ⁿ** = (3/4)³ = 27/64 of the vessel, and **a milk fraction of `f` is a ratio of f : (1 − f)**, so milk : water = 27 : (64 − 27) = `27 : 37`. Option B, `27 : 64`, is milk to total rather than milk to water, and it is the one most often ticked. Option C inverts the answer and option D is the ratio after a single operation.",
   tag:"Fraction to ratio"},

  {q:"From a 20-litre vessel of pure spirit, `x` litres is drawn off and replaced with water; the operation is then repeated once. 12.8 litres of spirit is left. `x` is:",
   o:["3.6 litres","7.2 litres","4 litres","8 litres"],
   a:2,
   why:"**v(1 − x/v)ⁿ = final amount**, so 20(1 − x/20)² = 12.8 and (1 − x/20)² = 0.64. **Take the square root before solving**: 1 − x/20 = 0.8, so x/20 = 0.2 and x = `4` litres. Option B, `7.2`, is what skipping the root gives, from 1 − x/20 = 0.64; option A is the 7.2 litres of spirit lost split evenly over the two draws; option D is the total drawn off, 2x.",
   tag:"Finding x"},

  {q:"A 40-litre mixture of milk and water is in the ratio `3 : 1`. How much of the mixture must be drawn off and replaced with water to make the ratio `3 : 2`?",
   o:["6 litres","10 litres","16 litres","8 litres"],
   a:3,
   why:"**The milk fraction must fall from 3/4 to 3/5, so the fraction left is (3/5) ÷ (3/4) = 4/5** and x = 40(1 − 4/5) = `8` litres. Checking: 8 litres of mixture carries off 8 × 3/4 = 6 litres of milk, leaving 24 litres of milk and 16 of water, which is `3 : 2`. Option A, `6`, is that milk removed rather than the mixture drawn, and it is the trap; option C is the final water and option B the water at the start.",
   tag:"Changing the ratio"},

  {q:"A 30-litre mixture of milk and water is 20% water by volume. 6 litres of the mixture is removed and 6 litres of pure milk is added. The water in the new mixture, as a percentage of the mixture, is:",
   o:["20%","16%","0%","4.8%"],
   a:1,
   why:"**Water removed = k × b/(a + b)** = 6 × 0.2 = 1.2 litres, so the water falls from 6 litres to 4.8 litres while the total stays 30 litres: `16%` of the mixture. Option C, `0%`, comes from taking all 6 litres removed out of the 6 litres of water, which is exactly the skipped step — the mixture leaves in its own ratio. Option A is the figure before the operation and option D is the 4.8 litres written as though it were a percentage.",
   tag:"Remove and add milk"},

  {q:"Three vessels of equal capacity hold mixtures of milk and water in the ratios `1 : 2`, `2 : 3` and `3 : 4`. All three are emptied into one large vessel. Milk and water in it are in the ratio:",
   o:["2 : 3","122 : 315","193 : 122","122 : 193"],
   a:3,
   why:"**Put the three milk fractions over a common denominator and add**: 1/3 + 2/5 + 3/7 = 35/105 + 42/105 + 45/105 = 122/105, against a total of 3 vessels = 315/105. So milk : water = 122 : (315 − 122) = `122 : 193`. Option A is what adding the ratio terms gives, (1 + 2 + 3) : (2 + 3 + 4) = 6 : 9 — the wrong method, and the option put there for it; option B is milk to total and option C inverts the answer.",
   tag:"Three vessels"},

  {q:"Three glasses of equal size are filled with mixtures of spirit and water in the ratios `1 : 1`, `2 : 1` and `3 : 1`. The contents are poured into a tumbler. The fraction of the tumbler that is spirit is:",
   o:["23/12","13/36","23/36","2/3"],
   a:2,
   why:"**The spirit fraction is ⅓ of the sum of the three spirit fractions**: ⅓(1/2 + 2/3 + 3/4) = ⅓(6/12 + 8/12 + 9/12) = ⅓ × 23/12 = `23/36`. Option A is that sum left undivided by 3 — a fraction greater than 1, which is the check to run; option B is the water's share and option D is 6/9, from adding the ratio terms straight across.",
   tag:"Three vessels"},

  {q:"A 30-litre mixture has milk and water in the ratio `2 : 1`. If 5 litres of milk and 5 litres of water are added, the new ratio of milk to water is:",
   o:["5 : 3","2 : 1","7 : 6","3 : 2"],
   a:0,
   why:"**The new ratio is (milk + p) : (water + q)**, so from milk 20 and water 10 it becomes (20 + 5) : (10 + 5) = 25 : 15 = `5 : 3`. Option C, `7 : 6`, adds the 5s to the ratio terms instead of to the quantities, which is the standard wrong move. Option B assumes equal additions leave a ratio alone — they do so only when the ratio is already `1 : 1`.",
   tag:"Adding both"},

  {q:"A vessel was full of pure milk. 15 litres was drawn off and replaced with water, and the same was then done a second time. The milk left is `4/9` of the vessel. Its capacity is:",
   o:["27 litres","30 litres","54 litres","45 litres"],
   a:3,
   why:"**(1 − x/v)ⁿ = the final fraction**, so (1 − 15/v)² = 4/9 and, taking the square root, 1 − 15/v = 2/3. Then 15/v = 1/3 and v = `45` litres. Option A, `27`, is what skipping the root gives, from 1 − 15/v = 4/9; option C, `54`, treats the 30 litres drawn off as pure milk, so that 30 = (5/9)v; option B is the total drawn off.",
   tag:"Finding the capacity"},

  {q:"Vessel A holds milk and water in the ratio `5 : 2` and vessel B holds them in the ratio `3 : 4`. In what ratio must the two be mixed so that the result has milk and water in the ratio `1 : 1`?",
   o:["1 : 3","3 : 1","1 : 1","5 : 3"],
   a:0,
   why:"Work in milk fractions of the total: A is 5/7, B is 3/7 and the mean wanted is 1/2. **By alligation, A : B = (mean − B's fraction) : (A's fraction − mean)** = (1/2 − 3/7) : (5/7 − 1/2) = (1/14) : (3/14) = `1 : 3`. Option B is that answer inverted, which is the standard slip — more of the weaker mixture is needed, so B must be the larger share. Option D is the ratio of the two milk shares and option C is the target ratio copied out.",
   tag:"Alligation"},

  {q:"A 40-litre mixture of milk and water is in the ratio `4 : 1`. How much water must be added so that the ratio becomes `4 : 3`?",
   o:["24 litres","16 litres","32 litres","12 litres"],
   a:1,
   why:"The milk does not change, so **work from the milk**: milk = 40 × 4/5 = 32 litres, and **the new total = milk × (a + c)/a** = 32 × 7/4 = 56 litres, so the water to add is 56 − 40 = `16` litres. Option A, `24`, is the water the mixture ends with rather than the water added, and it is the tempting one. Option C is the milk itself, lifted straight from the ratio; option D would give 32 : 20, that is `4 : 2.5`.",
   tag:"Adding water"},

  {q:"When `k` litres is drawn off a mixture of milk and water in the ratio `a : b`, the milk removed is:",
   o:["k × a/b","k × b/(a + b)","k × a/(a + b)","k ÷ (a + b)"],
   a:2,
   why:"**The mixture leaves in its own ratio, so the milk removed is k × a/(a + b)** and the water removed is k × b/(a + b) — option B, which is the water and the commonest mis-tick. Option A divides by the other part instead of by the sum, so it can exceed `k` itself; option D is the size of one share of the amount drawn, not the milk in it.",
   tag:"Milk removed"},

  {q:"A 100-litre vessel holds milk and water in the ratio `4 : 1`. 20 litres of the mixture is drawn off and replaced with water, and the operation is repeated once. The milk left is:",
   o:["64 litres","48 litres","51.2 litres","48.8 litres"],
   a:2,
   why:"**For a vessel already holding a mixture, the component left is (component at the start) × (1 − x/v)ⁿ with `v` the total volume**: 80 × (1 − 20/100)² = 80 × 0.64 = `51.2` litres. Option A, `64`, is 100 × 0.64 — the factor applied to the whole vessel instead of to the milk, and the trap in every question of this shape. Option B removes 16 litres of milk twice, as though the ratio had not changed after the first draw; option D is the water.",
   tag:"Mixture replaced"},

  {q:"A vessel full of pure milk has one-third of its contents replaced by water, twice over. The fraction of the vessel that is now water is:",
   o:["4/9","5/9","2/3","1/3"],
   a:1,
   why:"**The milk left is (1 − x/v)ⁿ = (2/3)² = 4/9 of the vessel, so the water is 1 − 4/9 = `5/9`.** Option C, `2/3`, adds the two thirds poured in, which double-counts: the second draw takes away part of the water already there. Option A is the milk rather than the water and option D is the water after one operation only.",
   tag:"Water left"},

  {q:"From a 45-litre vessel of pure milk, `x` litres is drawn off and replaced with water, and this is done twice. Milk and water are then in the ratio `16 : 9`. `x` is:",
   o:["9 litres","16.2 litres","18 litres","28.8 litres"],
   a:0,
   why:"A ratio of `16 : 9` means the milk is 16/25 of the vessel, so **(1 − x/45)² = 16/25** and, taking the square root, 1 − x/45 = 4/5. Then x/45 = 1/5 and x = `9` litres. Option B, `16.2`, is 45 × 9/25 — what skipping the square root gives; option C is the total drawn off over the two operations and option D is the 28.8 litres of milk left.",
   tag:"Finding x"},

  {q:"A 50-litre mixture of milk and water is in the ratio `3 : 2`. 10 litres of the mixture is drawn off and replaced with pure milk. The new ratio of milk to water is:",
   o:["2 : 1","8 : 17","3 : 2","17 : 8"],
   a:3,
   why:"**The ratio becomes (milk − k × a/(a + b) + k) : (water − k × b/(a + b))** = (30 − 6 + 10) : (20 − 4) = 34 : 16 = `17 : 8`. Option A, `2 : 1`, comes from adding the 10 litres of milk without taking the mixture out first, giving 40 : 20 — the skipped step, and the tempting option. Option B inverts the answer and option C is the ratio before the operation.",
   tag:"Refilled with milk"}
 ],
  note:"Every question above is one line of the sheet. If a question needed more than two lines of working, the line to go back to is the one about the component the mixture carries away when it leaves."}
]
}

]});
