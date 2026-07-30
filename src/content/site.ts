import bootsAsset from "@/assets/boots.png.asset.json";
import brandStandsOutAsset from "@/assets/brand-stands-out.png.asset.json";
import brandingTipsAsset from "@/assets/branding-tips.png.asset.json";
import clarityAsset from "@/assets/clarity.png.asset.json";
import contentStrategyAsset from "@/assets/content-strategy.png.asset.json";
import coquette1Asset from "@/assets/coquette-1.png.asset.json";
import coquette2Asset from "@/assets/coquette-2.png.asset.json";
import coquette5Asset from "@/assets/coquette-5.png.asset.json";
import coquette6Asset from "@/assets/coquette-6.png.asset.json";
import coquette7Asset from "@/assets/coquette-7.png.asset.json";
import facelessBizAsset from "@/assets/faceless-biz.png.asset.json";
import iced1Asset from "@/assets/iced-1.png.asset.json";
import iced2Asset from "@/assets/iced-2.png.asset.json";
import iced6Asset from "@/assets/iced-6.png.asset.json";
import iced8Asset from "@/assets/iced-8.png.asset.json";
import latteOfferAsset from "@/assets/latte-offer.png.asset.json";
import social2026Asset from "@/assets/social-2026.png.asset.json";

export const images = {
  boots: bootsAsset.url,
  brandStandsOut: brandStandsOutAsset.url,
  brandingTips: brandingTipsAsset.url,
  clarity: clarityAsset.url,
  contentStrategy: contentStrategyAsset.url,
  coquette1: coquette1Asset.url,
  coquette2: coquette2Asset.url,
  coquette5: coquette5Asset.url,
  coquette6: coquette6Asset.url,
  coquette7: coquette7Asset.url,
  facelessBiz: facelessBizAsset.url,
  iced1: iced1Asset.url,
  iced2: iced2Asset.url,
  iced6: iced6Asset.url,
  iced8: iced8Asset.url,
  latteOffer: latteOfferAsset.url,
  social2026: social2026Asset.url,
};

export type Product = {
  slug: string;
  title: string;
  tagline: string;
  status: "In progress" | "Selling" | "Coming soon" | "Beta";
  phase: string;
  price: string;
  note: string;
  image: string;
  pitch: string;
  whatYouGet: string[];
  whoItsFor: string[];
  faq: { q: string; a: string }[];
  cta: string;
};

export const products: Product[] = [
  {
    slug: "canva-crash-course",
    title: "Canva Crash Course",
    tagline: "Design a launch-ready digital product in a weekend",
    status: "Selling",
    phase: "73% sold",
    price: "$47",
    note: "Step-by-step templates and launch lessons.",
    image: images.coquette5,
    pitch:
      "The exact Canva workflow I use to design every Blushbuild product — from the first blank page to a polished digital download that people actually want to buy.",
    whatYouGet: [
      "12 short video lessons (under 8 minutes each)",
      "6 editable Canva templates: workbook, checklist, planner, e-book, mini course, freebie",
      "Fonts, colors, and mood board starter files",
      "A launch checklist for your first paid product",
      "Lifetime updates as new templates drop",
    ],
    whoItsFor: [
      "Creators who freeze at a blank Canva page",
      "Beginners who want to sell their first digital product",
      "Anyone tired of ugly PDFs that never convert",
    ],
    faq: [
      {
        q: "Do I need paid Canva?",
        a: "No. Everything is built to work with the free plan. A few extras look prettier in Canva Pro, but not required.",
      },
      {
        q: "How long is the course?",
        a: "About 2.5 hours total. Most creators finish in a single weekend.",
      },
      {
        q: "Is there a refund policy?",
        a: "14-day no-questions-asked refund if it isn't what you hoped for.",
      },
    ],
    cta: "Buy the course",
  },
  {
    slug: "brand-success-guide",
    title: "Brand Success Guide",
    tagline: "Positioning and listings that actually convert",
    status: "Selling",
    phase: "50% core",
    price: "$29",
    note: "Positioning notes and listing tweaks that actually convert.",
    image: images.iced6,
    pitch:
      "The playbook I wish I had before my first shop. Positioning, keyword research, listing photos, and the pricing math that actually works for digital sellers.",
    whatYouGet: [
      "48-page PDF guide with real examples",
      "Keyword research spreadsheet",
      "10 listing photo templates in Canva",
      "Pricing calculator (worksheet)",
      "The messages I send buyers to get 5-star reviews",
    ],
    whoItsFor: [
      "New sellers with 0 to 50 sales",
      "Existing sellers stuck at the same monthly revenue",
      "Anyone who wants digital products to be their main income",
    ],
    faq: [
      {
        q: "Does this work for physical products too?",
        a: "Some of it — positioning and photos apply everywhere. Pricing math is written for digital.",
      },
      {
        q: "How often is it updated?",
        a: "Every quarter. You get every update for free.",
      },
      {
        q: "Do I need existing traffic?",
        a: "Nope. The guide covers getting your first views from marketplace search plus Pinterest.",
      },
    ],
    cta: "Get the guide",
  },
  {
    slug: "digital-product-bundle",
    title: "Digital Product Bundle",
    tagline: "Prompts, assets, and warm launch pages in one drop",
    status: "Coming soon",
    phase: "Creator soon",
    price: "$79",
    note: "A bundle of prompts, assets, and warm launch pages.",
    image: images.coquette1,
    pitch:
      "One bundle that replaces five subscriptions. Prompts, sales page templates, email sequences, and the warm launch playbook — priced like a beginner course, valued like a mentor.",
    whatYouGet: [
      "200 content prompts organized by funnel stage",
      "3 sales page templates (Notion + Canva)",
      "5-email warm launch sequence",
      "Sound-on Reels script pack",
      "Brand mood board starter files",
    ],
    whoItsFor: [
      "Creators launching their first paid offer",
      "Established sellers who want a consistent brand voice",
      "Anyone tired of paying $19/month for 4 different tools",
    ],
    faq: [
      {
        q: "When does it drop?",
        a: "Early July. Join the waitlist for a launch-day discount.",
      },
      {
        q: "Will there be updates?",
        a: "Yes — quarterly, and all included for anyone on the waitlist.",
      },
      {
        q: "Can I get it as part of another bundle?",
        a: "Waitlist members get a bundle price that pairs it with the Canva Crash Course.",
      },
    ],
    cta: "Join the waitlist",
  },
  {
    slug: "pinterest-growth-kit",
    title: "Pinterest Growth Kit",
    tagline: "Turn Pinterest saves into real product clicks",
    status: "In progress",
    phase: "Early stage",
    price: "$39",
    note: "A proven content engine to grow traffic and get more sales.",
    image: images.iced8,
    pitch:
      "The Pinterest system I use to send steady, free traffic to my digital products every single week — without spending an hour on each pin.",
    whatYouGet: [
      "60 editable pin templates (three aesthetics)",
      "Weekly Pinterest content calendar",
      "Keyword bank for creators, sellers, and coaches",
      "SEO checklist for boards and descriptions",
      "Analytics dashboard template",
    ],
    whoItsFor: [
      "Digital product sellers tired of relying on Instagram",
      "Bloggers who want traffic that compounds",
      "Anyone building a faceless brand",
    ],
    faq: [
      {
        q: "When will it be ready?",
        a: "Late summer. Progress lives on the /progress page.",
      },
      {
        q: "Do I need Tailwind or a scheduler?",
        a: "Nice to have, not required. The templates work with any scheduler or native Pinterest.",
      },
      {
        q: "Will it work for a brand new account?",
        a: "Yes — there's a specific first-90-days plan for new accounts.",
      },
    ],
    cta: "Join the waitlist",
  },
];

export type Resource = {
  slug: string;
  title: string;
  type: "PDF" | "FREE" | "DOC" | "GUIDE" | "TEMPLATE";
  text: string;
  cover?: string;
  whatsInside: string[];
  preview: string[];
};

export const resources: Resource[] = [
  {
    slug: "brand-starter-kit",
    title: "Pretty & Unforgettable Brand Starter Kit",
    type: "PDF",
    text: "Everything you need to open your shop with confidence.",
    cover: images.iced2,
    whatsInside: [
      "Shop setup checklist (banner, bio, sections)",
      "5 first-listing templates for digital products",
      "Beginner pricing worksheet",
      "The exact opening messages I send to first buyers",
    ],
    preview: [
      "1. Naming your shop without over-thinking",
      "2. Section structure that helps discovery",
      "3. Pricing so you don't undersell your first product",
      "4. The first-week promo plan",
    ],
  },
  {
    slug: "canva-prompt-ideas",
    title: "Canva Prompt Ideas",
    type: "FREE",
    text: "50 content ideas laid out for reels, pins, and posts.",
    cover: images.coquette2,
    whatsInside: [
      "50 prompts sorted by platform",
      "Reels hooks that pull people in the first 2 seconds",
      "Carousel outlines that get saves",
      "Pin title formulas",
    ],
    preview: [
      "Prompt 01 — The 'wish I knew earlier' post",
      "Prompt 02 — The tiny transformation reel",
      "Prompt 03 — The behind-the-scenes carousel",
      "Prompt 04 — The 'here's what I'd do instead' pin",
    ],
  },
  {
    slug: "product-launch-checklist",
    title: "Product Launch Checklist",
    type: "DOC",
    text: "A simple launch flow to batch, post, and sell faster.",
    cover: images.brandingTips,
    whatsInside: [
      "T-14 to T+7 timeline",
      "Content batch template",
      "Warm launch email outline",
      "Post-launch review worksheet",
    ],
    preview: [
      "Week -2: mood board, positioning, price",
      "Week -1: sales page, cover, testimonials",
      "Launch week: 3 emails, 5 pins, 3 reels",
      "Week +1: fix what didn't work, keep what did",
    ],
  },
  {
    slug: "pinterest-script-notes",
    title: "Pinterest Script Notes",
    type: "GUIDE",
    text: "Hooks and mini scripts that turn saves into clicks.",
    cover: images.contentStrategy,
    whatsInside: [
      "30 pin hook formulas",
      "SEO-first title starters",
      "Description templates by niche",
      "Idea pin script outlines",
    ],
    preview: [
      "Hook 01 — 'I wish someone had told me…'",
      "Hook 02 — 'Save this before you launch…'",
      "Hook 03 — 'The tiny tweak that doubled my…'",
      "Hook 04 — 'Read this before you spend $0 on ads'",
    ],
  },
  {
    slug: "brand-clarity-workbook",
    title: "Brand Clarity Workbook",
    type: "PDF",
    text: "Find your voice, palette, and offer in one weekend.",
    cover: images.clarity,
    whatsInside: [
      "12 brand voice prompts",
      "Palette + mood board worksheet",
      "Offer stack template",
      "One-line positioning generator",
    ],
    preview: [
      "Section 1 — Your unfair strengths",
      "Section 2 — The three feelings your brand gives people",
      "Section 3 — What you'll stop apologizing for",
      "Section 4 — Your one-line pitch",
    ],
  },
  {
    slug: "faceless-business-map",
    title: "Faceless Business Map",
    type: "GUIDE",
    text: "Build a brand people love — no face required.",
    cover: images.facelessBiz,
    whatsInside: [
      "Faceless niche selector",
      "Content pillars template",
      "Voice bank for aesthetic brands",
      "Product ladder for faceless creators",
    ],
    preview: [
      "Step 1 — Choose a niche you actually enjoy",
      "Step 2 — Pick three content pillars",
      "Step 3 — Set up a repeatable posting rhythm",
      "Step 4 — Launch a $9 offer to test the market",
    ],
  },
  {
    slug: "content-strategy-planner",
    title: "Content Strategy Planner",
    type: "TEMPLATE",
    text: "A weekly planner that batches your content in one sitting.",
    cover: images.contentStrategy,
    whatsInside: [
      "Weekly + monthly planning pages",
      "Content pillar tracker",
      "Batching flow (Sundays, 3 hours)",
      "Metrics dashboard",
    ],
    preview: [
      "Sunday reset — audit last week",
      "Monday batch — 3 reels, 2 pins, 1 email",
      "Wednesday refine — reply to comments, edit next drop",
      "Friday post-mortem — one thing to keep, one to cut",
    ],
  },
  {
    slug: "creator-launch-swipes",
    title: "Creator Launch Swipes",
    type: "FREE",
    text: "The exact emails and captions I use to launch.",
    cover: images.latteOffer,
    whatsInside: [
      "5-email launch sequence",
      "10 launch-week captions",
      "Sold-out follow-up template",
      "Testimonial request script",
    ],
    preview: [
      "Email 1 — 'A little something I've been building'",
      "Email 2 — Behind the scenes",
      "Email 3 — The doors are open",
      "Email 4 — Last call + FAQ",
    ],
  },
];

export type DiaryEntry = {
  slug: string;
  title: string;
  date: string;
  month: string;
  cover: string;
  excerpt: string;
  body: string[];
  pullQuote?: string;
};

export const diaryEntries: DiaryEntry[] = [
  {
    slug: "what-im-changing-before-august",
    title: "What I'm Changing Before August",
    date: "Jul 30",
    month: "July 2026",
    cover: images.clarity,
    excerpt:
      "A candid monthly reset: fewer content formats, finishing what's already open, and protecting the hours that actually build the brand.",
    body: [
      "July ended with more open tabs than finished things, and I want to say that plainly before I write anything encouraging. I had four content formats running at once, two products in half-built states, and a running list of 'quick fixes' for the site that had stopped being quick weeks ago. Nothing was on fire. Everything was just slightly unfinished, which is its own kind of exhausting.",
      "So I did the thing I put off every month until it becomes unavoidable: I printed the plan and crossed things out. Not reorganized — crossed out. Three of the four content formats are going. What stays is one weekly long-form piece, one Pinterest batch, and one email. That's it. Every other format was something I added because it seemed like the kind of thing a brand my size should be doing, and none of them were things my actual readers asked for.",
      "The second change is a finish-first rule I'm holding myself to through August. Nothing new starts until the Starter Kit revisions and the Canva lesson edits are done and live. Not 'mostly done.' Live, linked, and tested on a phone. I know exactly why I keep breaking this rule — starting is fun and finishing is admin — but the brand people see is made of finished things, not intentions.",
      "The third change is about hours. I blocked two mornings a week where nothing gets published, nothing gets answered, and nothing gets designed. Those mornings are for building the products themselves. Every time I've let content eat those blocks, the shop has stalled and the content has still felt rushed, so I lose twice.",
      "I also went back through June and July analytics with a colder eye than usual. The pieces that did the most were the specific ones — the ones with a number, a process, or a mistake in them. The vague inspirational posts, which took the least time to write, also did the least of anything. That's a comforting result, because it means effort and outcome are still roughly aligned here.",
      "The last thing I'm changing is smaller and more personal: I'm going to stop measuring a week by how much I published. A good week now means one finished thing shipped and one thing genuinely improved. That's a low bar on paper and a high bar in practice, which is usually the sign of a rule worth keeping.",
      "August starts on Saturday. I'd rather walk into it with a short, honest plan than a beautiful one I quietly abandon by the tenth.",
    ],
    pullQuote: "The brand people see is made of finished things, not intentions.",
  },
  {
    slug: "stopped-posting-every-day",
    title: "The Week I Stopped Trying to Post Every Day",
    date: "Jul 22",
    month: "July 2026",
    cover: images.coquette2,
    excerpt:
      "I dropped from daily posting to three intentional pieces a week — and the brand didn't collapse. Here's what actually changed.",
    body: [
      "For about five months I posted every single day, and I want to be honest about why: not strategy, fear. Somewhere I'd absorbed the idea that a day without a post was a day the algorithm forgot me, and that a forgotten brand is a dead brand. So I posted through tired days, uninspired days, and days when I clearly had nothing to say.",
      "What that produced was a feed with a lot of volume and very little weight. Looking back through it, maybe one in six posts was something I'd stand behind. The rest were filler I made to keep a streak alive that nobody but me was tracking.",
      "So in the middle of July I stopped. Three posts a week, each one planned, written, and actually edited. The first few days felt genuinely uncomfortable — that itchy sense that I was falling behind while everyone else kept going. That feeling lasted about four days and then simply left.",
      "The results were not dramatic in either direction, which is the part I want people to hear. Reach dipped slightly for a week and then recovered. Saves went up, because the posts were more useful. Replies went up noticeably, because I finally had the energy to answer them properly instead of drafting tomorrow's post while half-reading today's comments.",
      "The bigger change was off-screen. With four days a week not spent making content, I finished two product revisions that had been open since June and rewrote a sales page I'd been avoiding. None of that shows up in a metrics screenshot, but all of it is what the business is actually made of.",
      "I don't think daily posting is wrong. I think daily posting without capacity is wrong, because what you're really publishing on those days is your own depletion. A rhythm you can hold for a year beats a sprint you abandon in six weeks and feel guilty about for the rest.",
      "My rule now is simple: if I can't do it properly, it doesn't go out. Three good things a week is a real brand. Seven rushed ones is just noise with my name on it.",
    ],
    pullQuote: "A rhythm you can hold for a year beats a sprint you abandon in six weeks.",
  },
  {
    slug: "building-the-starter-kit",
    title: "Building the Pretty & Unforgettable Brand Starter Kit",
    date: "Jul 11",
    month: "July 2026",
    cover: images.brandStandsOut,
    excerpt:
      "Behind the scenes of rebuilding the free kit: sharper direction, marketplace language removed, and a first chapter beginners can actually finish.",
    body: [
      "The old free kit was fine, and fine is the worst thing a first impression can be. It was a tidy PDF with sensible advice, and almost nobody finished it. When I asked a handful of readers why, the answers were consistent: it told them what to think about but never told them what to do next.",
      "So I rebuilt it, and the rebuild started with language. The whole kit had been written around one marketplace — every example, every screenshot, every phrase. That made it feel narrow, and it dated the advice to one platform's rules. I stripped that out entirely and rewrote the examples so they work whether someone is selling on a marketplace, a shop page, or a single link in a bio.",
      "The name change came out of the same instinct. 'Pretty & Unforgettable Brand Starter Kit' says what the thing is for: making a brand that looks considered and stays in someone's head. It's a promise about the outcome, not a description of a platform.",
      "The structural change was the biggest one. Instead of a document you read, it's now an interactive first chapter you move through, with exercises that save as you go. You answer a prompt, you see your answer collected, and by the end you have a page of your own words rather than a page of mine. That difference in feeling is enormous for beginners, who usually don't need more information — they need a place to put their thinking.",
      "I also cut roughly a third of the content. Every section that started with 'you might also want to consider' got deleted. A starter kit that presents twelve possible directions isn't a starter kit; it's a menu that induces paralysis. What's left is one path, clearly sequenced, with the optional detours removed.",
      "I'm not going to pretend I have proof yet that this converts better. It went live too recently for that, and I'd rather report real numbers later than invent flattering ones now. What I can say is that the completion feedback so far is different in tone: people are telling me what they wrote, not just that they downloaded it.",
      "The next pass will add the brand assessment at the end, so someone finishing chapter one gets a clear read on where their brand actually stands before they decide what to build next.",
    ],
    pullQuote: "Beginners rarely need more information. They need a place to put their thinking.",
  },
  {
    slug: "finishing-before-starting-new",
    title: "Why I'm Finishing Before I Start Something New",
    date: "Jun 24",
    month: "June 2026",
    cover: images.iced2,
    excerpt:
      "Six half-built products, one honest audit, and the finish-first rule that changed how the shop actually grows.",
    body: [
      "I counted them in June: six half-finished products. A workbook at 70%, a template pack with the covers done and nothing else, two guides stuck at outline, a swipe file missing its examples, and a course module I'd recorded once and hated. Together they represented weeks of real work and exactly zero available things for anyone to buy.",
      "The uncomfortable part is that none of them stalled because they were bad ideas. They stalled at the same point — the boring 80% mark, where the concept is proven, the fun is over, and what remains is formatting, proofreading, and exporting. And every time I hit that wall, a new idea appeared, conveniently, feeling much more exciting than the one in front of me.",
      "New ideas are a form of procrastination that feels like ambition. That's why they're so hard to catch. Nobody feels guilty about starting something; you feel productive right up until you notice you have six versions of nearly-done and nothing live.",
      "So I made a finish-first rule and wrote it where I'd see it: nothing new gets started until one open thing is fully shipped. Fully means the file is exported, the listing is written, the images are made, the page is tested on a phone, and it is purchasable by a stranger. Not 90%. Shipped.",
      "The first two weeks under that rule were genuinely dull. I finished the workbook, which took eleven hours of unglamorous work and no creative highs at all. But it went live, and it started selling in its first week, and it was suddenly worth something instead of being a folder on my desktop.",
      "I also added a small release valve, because a rule with no flexibility gets broken entirely. New ideas go in an idea bank with three lines: who it's for, what it fixes, and why now. They wait there. Most of them look considerably less urgent two weeks later, which tells me everything about what they really were.",
      "The shop grew more in the four weeks after that rule than in the three months before it, and I didn't have a single new idea in that time. I just finished old ones.",
    ],
    pullQuote: "New ideas are a form of procrastination that feels like ambition.",
  },
  {
    slug: "the-quiet-work-nobody-sees",
    title: "The Quiet Work Nobody Sees",
    date: "Jun 8",
    month: "June 2026",
    cover: images.coquette6,
    excerpt:
      "Revisions, broken links, mobile testing, and the fourth rewrite of a paragraph — the invisible work that makes a brand feel polished.",
    body: [
      "This week I made nothing new. I fixed a footer link that had been broken for who knows how long, rewrote the same paragraph four times, tested six pages on an actual phone instead of a resized browser window, and re-exported a product file because the margins were wrong on page nine.",
      "None of that is postable. There's no before-and-after that photographs well, no number that went up, no lesson dramatic enough to build a caption around. And yet it's the exact category of work that separates a brand that feels considered from one that feels almost-there.",
      "The mobile testing was the most sobering part. On a real phone, two of my headings wrapped badly, one button sat too close to the edge to tap comfortably, and a section I'd been proud of turned into a wall of text. On my laptop all of it looked fine. Most of my readers have never seen the laptop version and never will.",
      "The paragraph I rewrote four times was the opening of a sales page. Version one explained the product. Version two explained the product with adjectives. Version three finally said what the buyer would be able to do afterward, and version four said it in half the words. That's roughly ninety minutes for about thirty words, and it's still probably the highest-leverage ninety minutes of the week.",
      "I think a lot of people burn out because they only count the visible work. If your definition of a productive day is 'published something,' then a day spent fixing, testing, and tightening feels like a failure, and you'll either skip that work or resent it. Both are expensive.",
      "So I started logging it. A short list at the end of each day of what got fixed, not just what got made. It's a small trick and it works, because seeing 'fixed the mobile spacing on three pages' written down makes it feel like the real work it is.",
      "Polished brands aren't made in the exciting hours. They're made in the quiet ones, by someone willing to look at the same paragraph a fourth time.",
    ],
    pullQuote: "Polished brands aren't made in the exciting hours. They're made in the quiet ones.",
  },
  {
    slug: "first-digital-product-idea",
    title: "How I Came Up With My First Digital Product Idea",
    date: "May 12",
    month: "May 2026",
    cover: images.coquette5,
    excerpt:
      "The messy, non-linear process of turning a Notes-app scribble into an actual thing people paid for.",
    body: [
      "It didn't start as a business idea. It started as a note called 'stuff I keep re-explaining to friends.' Twelve bullet points, half of them typos, mostly things I'd figured out the hard way about opening an shop.",
      "I opened Canva and turned three of those bullet points into a one-page PDF. No cover, no pricing, no funnel. Just a link I DMed to two friends. They said it was helpful. That was the entire market research.",
      "The lesson I keep coming back to: the first version of your product should embarrass you a little. If the first draft feels too polished, you waited too long.",
      "I spent the next two weeks turning that PDF into a proper mini guide. New cover, real examples, a checklist at the back. I priced it at $9. It sold 41 copies in the first month. Nothing viral — just a slow drip from Pinterest and my tiny email list.",
      "Every product I've made since started the same way: a friction I kept explaining, dumped into a Notes doc, then dragged into Canva before I could talk myself out of it.",
    ],
    pullQuote: "The first version of your product should embarrass you a little.",
  },
  {
    slug: "first-brand-sale",
    title: "From 0 To My First Sale",
    date: "May 9",
    month: "May 2026",
    cover: images.iced6,
    excerpt: "Nine days of refreshing the dashboard. What actually moved the needle.",
    body: [
      "Day one of my shop being open, I refreshed the seller dashboard 42 times. I know because the dashboard shows you.",
      "The first three days were silent. the marketplace algorithm needs a little runway with a brand new shop, and I had exactly one listing, no reviews, and a shop banner made in twelve minutes.",
      "What actually broke the silence: I made three Pinterest pins for the same listing, each with a different hook, and scheduled them for the same evening. The next morning I woke up to my first sale — from a pin, not from marketplace search.",
      "It's not glamorous. There was no viral moment. Just a slow, quiet building of listings, pins, and one-star product photos that I later replaced.",
      "If I could tell past-me one thing: your first ten listings won't be your best listings. Publish them anyway. The dashboard will only start moving when there's something to move.",
    ],
    pullQuote: "Your first ten listings won't be your best listings. Publish them anyway.",
  },
  {
    slug: "designing-canva-course-sneak-peek",
    title: "Designing My Canva Course Sneak Peek",
    date: "May 6",
    month: "May 2026",
    cover: images.coquette2,
    excerpt: "Behind the scenes of the intro module — mood board, cover, and voice.",
    body: [
      "I don't outline courses in Notion first. I open Canva and design the cover, because the cover forces me to answer the hardest question: who is this actually for?",
      "For the Canva Crash Course, I did about eleven cover versions before I landed on one that felt like a magazine layout more than a course thumbnail. Cream, warm ink, one editorial serif, one image.",
      "The cover unlocked the whole voice. Once I could see it, I knew every slide inside should match — no gradient buttons, no drop shadows, no course-in-a-box templates. Just paper.",
      "I filmed the intro module in one sitting on a Saturday afternoon. Twelve takes for a two-minute clip. Editing was faster than I expected because the visual system was already locked in.",
    ],
    pullQuote: "Design the cover first. The cover forces you to answer who it's for.",
  },
  {
    slug: "five-things-i-wish-i-knew",
    title: "5 Things I Wish I Knew Before Starting",
    date: "May 3",
    month: "May 2026",
    cover: images.brandStandsOut,
    excerpt: "The uncomfortable stuff nobody tells you in the 'quit your job' videos.",
    body: [
      "1. Your first six months will feel like nothing is happening. Then all of it happens at once, in one weird week that changes your entire year.",
      "2. Pinterest is a search engine, not a social network. Treat it like SEO and it will send you traffic for two years off a pin you made in twenty minutes.",
      "3. The people who buy from you first are almost never the ones you expected. Your best customer for year one is hiding in your DMs already.",
      "4. Your prices are too low. Every creator I know underpriced their first three products. Add 40% next launch.",
      "5. Consistency doesn't mean daily. It means predictable. One good pin a week for a year beats ten pins a week for a month.",
    ],
    pullQuote: "Consistency doesn't mean daily. It means predictable.",
  },
  {
    slug: "planning-content-full-time",
    title: "How I Plan Content as a Full-Time Creator",
    date: "Apr 29",
    month: "April 2026",
    cover: images.contentStrategy,
    excerpt: "The Sunday reset that keeps me from burning out.",
    body: [
      "Every Sunday at 6pm I sit down with an iced matcha and open one Notion page. That's the whole system.",
      "The page has four columns: reels, pins, emails, and journal. I fill each column with the three things I'll publish that week. No more, no less.",
      "Batching happens Monday morning. Three reels, six pins, one email, one diary entry. If I try to write the pin captions on the day they go live, I will not do it. Trust me.",
      "The magic is not the tool. It's that I made a decision once, on Sunday, and Monday-me doesn't have to choose anything. Choosing is what burns you out.",
    ],
    pullQuote: "Choosing is what burns you out.",
  },
  {
    slug: "first-100-email-subscribers",
    title: "How I Got My First 100 Email Subscribers",
    date: "Apr 22",
    month: "April 2026",
    cover: images.iced1,
    excerpt: "A tiny freebie, a slow-burn Pinterest pin, and one email that changed everything.",
    body: [
      "I made a freebie called the Pretty & Unforgettable Brand Starter Kit on a whim. One page. Not even long. I gated it behind an email.",
      "For three weeks nobody signed up. Then I made a very simple Pinterest pin — cream background, one serif line — and pinned it four times to four different boards. That one pin brought in 68 subscribers over two weeks.",
      "The tiny list changed how I thought about the business. Instead of shouting at strangers, I was writing to 100 specific people, and I could see their replies.",
      "The email that made it click: 'I don't know what to make next — what are you actually stuck on?' 41 people replied. The Canva Crash Course was in half those replies.",
    ],
    pullQuote: "Ask your list what they're stuck on. The product is usually in their reply.",
  },
];

export const diaryEntryExtras: Record<string, { lessons: string[]; nextSteps: string[] }> = {
  "what-im-changing-before-august": {
    lessons: [
      "Most overwhelm comes from too many open formats, not from too little effort.",
      "Specific content outperforms inspirational content almost every time.",
      "Protected build hours disappear unless they are blocked before content is scheduled.",
    ],
    nextSteps: [
      "Cut the content plan to one long-form piece, one Pinterest batch, and one email per week.",
      "Ship the Starter Kit revisions and Canva lesson edits before starting anything new.",
      "Hold two publish-free build mornings each week through August.",
    ],
  },
  "stopped-posting-every-day": {
    lessons: [
      "Daily posting without capacity publishes your depletion, not your best thinking.",
      "Fewer, better posts raise saves and replies even when reach stays flat.",
      "The time freed by a slower rhythm is what finally moves products forward.",
    ],
    nextSteps: [
      "Hold a firm three-posts-per-week rhythm for a full quarter before reassessing.",
      "Apply the 'if it can't be done properly, it doesn't go out' rule to every draft.",
      "Reinvest the reclaimed days into product revisions and sales page rewrites.",
    ],
  },
  "building-the-starter-kit": {
    lessons: [
      "A free resource that nobody finishes is a first impression working against you.",
      "Platform-specific language dates your advice and narrows who feels included.",
      "Beginners move faster with one clear path than with a menu of possible directions.",
    ],
    nextSteps: [
      "Add the brand assessment to the end of chapter one.",
      "Collect completion feedback for a full month before making conversion claims.",
      "Rewrite any remaining examples that still assume a single selling platform.",
    ],
  },
  "finishing-before-starting-new": {
    lessons: [
      "Products rarely stall on the idea. They stall at the unglamorous 80% mark.",
      "A new idea arriving mid-project is usually avoidance wearing a better outfit.",
      "Shipped means purchasable and phone-tested, not almost ready.",
    ],
    nextSteps: [
      "Keep the finish-first rule: nothing new starts until one open thing is live.",
      "Log every new idea in the idea bank with who, what, and why now.",
      "Clear the remaining half-built products in order of how close they are to done.",
    ],
  },
  "the-quiet-work-nobody-sees": {
    lessons: [
      "Most polish problems are only visible on a real phone, not a resized browser.",
      "The highest-leverage rewrites usually make a paragraph shorter, not longer.",
      "Counting only visible output makes maintenance work feel like failure.",
    ],
    nextSteps: [
      "Run a monthly mobile pass across every key page.",
      "Rewrite each sales page opener until it names the buyer's outcome in one line.",
      "Keep a daily fixed-it log alongside the published log.",
    ],
  },
  "first-digital-product-idea": {
    lessons: [
      "The strongest product ideas usually come from repeated questions, not from trend reports.",
      "A tiny proof-of-concept is more useful than a polished offer nobody has reacted to yet.",
      "Selling the first version creates better feedback than endlessly planning the perfect version.",
    ],
    nextSteps: [
      "Turn the original Notes-app list into a reusable idea bank.",
      "Review the first 41 buyers' questions and add the clearest answers to the sales page.",
      "Build a repeatable one-week validation process for every future product idea.",
    ],
  },
  "first-brand-sale": {
    lessons: [
      "A new shop needs external signals before marketplace search has enough data to help you.",
      "Pinterest can validate a listing faster than waiting for marketplace traffic alone.",
      "The first sale is less about scale and more about proving the product promise is clear.",
    ],
    nextSteps: [
      "Create three fresh pin angles for every active listing.",
      "Replace the weakest listing photo with a benefit-first mockup.",
      "Track which traffic source brings the next ten sales instead of guessing.",
    ],
  },
  "designing-canva-course-sneak-peek": {
    lessons: [
      "A cover is a positioning decision, not just a design task.",
      "Visual rules make lesson creation faster because every slide has a clear direction.",
      "A smaller, more opinionated aesthetic feels more premium than a huge generic template pack.",
    ],
    nextSteps: [
      "Finish the intro module edits and export captions.",
      "Create the first three buyer worksheets from the same visual system.",
      "Collect screenshots from beta students for the product page gallery.",
    ],
  },
  "five-things-i-wish-i-knew": {
    lessons: [
      "Quiet consistency compounds even when the dashboard looks flat for weeks.",
      "Search-led content gives a small brand more staying power than chasing daily virality.",
      "Pricing is part of positioning; underpricing teaches buyers to value the product less.",
    ],
    nextSteps: [
      "Raise the price on the next guide after the Q2 update ships.",
      "Move the strongest Pinterest posts into a reusable weekly workflow.",
      "Write a monthly review entry with numbers, mistakes, and fixes.",
    ],
  },
  "planning-content-full-time": {
    lessons: [
      "Planning works best when it removes decisions from the week, not when it creates a complicated system.",
      "Batching is a boundaries tool as much as a productivity tool.",
      "A realistic rhythm beats an impressive calendar that only lasts two weeks.",
    ],
    nextSteps: [
      "Turn the Sunday reset page into the Content Strategy Planner beta.",
      "Add a Friday review prompt so winning posts get reused instead of forgotten.",
      "Create a lighter version for launch weeks when the normal content rhythm is too much.",
    ],
  },
  "first-100-email-subscribers": {
    lessons: [
      "A simple freebie can work if it solves an urgent, specific problem.",
      "The email list becomes useful when it becomes a conversation, not a broadcast channel.",
      "Replies are product research. They show the language buyers already use for their problem.",
    ],
    nextSteps: [
      "Rewrite the Pretty & Unforgettable Brand Starter Kit opt-in page with the exact phrases subscribers used.",
      "Add one question to the welcome email and tag replies by product idea.",
      "Create a monthly freebie audit so old lead magnets keep improving.",
    ],
  },
};

export type BlogPost = {
  slug: string;
  title: string;
  category: "Strategy" | "Launches" | "Mindset" | "Behind the scenes";
  date: string;
  cover: string;
  excerpt: string;
  readingTime: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "brand-people-remember-without-showing-your-face",
    title: "How to Build a Brand People Remember Without Showing Your Face",
    category: "Strategy",
    date: "July 27, 2026",
    cover: images.facelessBiz,
    excerpt:
      "Recognition doesn't come from a face. It comes from repetition, a point of view, and a visual system people can spot in one scroll.",
    readingTime: "7 min read",
    body: [
      "The assumption behind most personal-brand advice is that people remember faces. They don't, particularly. They remember patterns. A face is one convenient pattern, but it's far from the only one, and it's the one most likely to make you avoid publishing on the days you don't feel like being seen.",
      "What actually creates recognition is repetition of a small number of distinctive signals. A consistent color story. A recurring sentence structure. A format people can name — 'the Sunday breakdown,' 'the one-photo teardown.' If someone can describe your content to a friend without describing you, you have a brand.",
      "Start with a point of view, because it's the signal that does the most work. Not a niche — an opinion. 'Digital products' is a niche. 'Most creators should finish one product before starting three' is a point of view. Opinions make people feel something, and feeling is what turns a scroll into a memory. Write down three things you believe that a reasonable person in your space might disagree with, and let those beliefs run underneath everything you publish.",
      "Then build a visual system tight enough to be recognized at thumbnail size. Two fonts, one background tone, one accent, and a fixed layout for your most common post type. The mistake is variety: people change their look constantly hoping something lands, which resets recognition every time. Boring consistency looks like confidence, and confidence reads as premium.",
      "Give your recurring content a name. Named formats are portable — they can be recommended, searched, and remembered. An unnamed weekly post is just a post. A named one becomes a small piece of intellectual property that people expect on a schedule.",
      "Use specifics as your substitute for presence. Faceless brands lose the warmth a face provides, and the way to replace it is with detail: the actual number, the actual mistake, the actual paragraph you rewrote four times. Vagueness is what makes faceless content feel like a bot. Specificity is what makes it feel like a person who simply chose not to be on camera.",
      "Build one owned channel so recognition compounds somewhere you control. Email is the obvious one. A reader who sees your name in an inbox every week will remember your brand far longer than someone who catches you occasionally in a feed, and no platform change can take that away from you.",
      "Finally, be patient in a specific way: recognition arrives around the point where you're most bored of your own material. That fatigue is a signal your patterns have become consistent enough to be memorable. Change the topics all you like. Keep the signals fixed.",
    ],
  },
  {
    slug: "simple-3-part-content-system",
    title: "The Simple 3-Part Content System I'd Use From Scratch",
    category: "Strategy",
    date: "July 18, 2026",
    cover: images.contentStrategy,
    excerpt:
      "One anchor piece, three derivatives, one invitation. The whole content system in a shape you can actually hold every week.",
    readingTime: "6 min read",
    body: [
      "If I were starting from zero tomorrow, I wouldn't build a content calendar. Calendars ask you to make decisions weeks in advance about a mood you can't predict, and they fail the first busy week. I'd build a system with three parts and repeat it until it was dull.",
      "Part one is the anchor. One substantial piece per week — a long post, a newsletter, or an article — that says one useful thing properly. This is where the thinking happens, and it should take the majority of your content time. If the anchor is weak, everything downstream is decoration on an empty idea.",
      "Choosing anchors is easier than people make it. Keep a running list of questions you've actually been asked, mistakes you've actually made, and processes you've actually run. Each of those is an anchor. You never need a content idea generator; you need a habit of writing down what already happened.",
      "Part two is the derivatives. From each anchor, pull three smaller pieces: the strongest single idea as a standalone post, a practical how-to slice, and a personal or contrarian angle. Same thinking, three shapes, three audiences. This is where most people over-invest — they try to make each small piece original, which triples the work and halves the coherence.",
      "The derivative rule that matters: never rewrite from scratch, always extract. Open the anchor, highlight a paragraph, and expand that paragraph. It takes about fifteen minutes per piece once you stop treating each one as a fresh creative act.",
      "Part three is the invitation. Exactly one call to action per week, pointing at one destination — usually a free resource that leads to your email list. Not a different link on every post. One invitation, repeated, so that your audience learns what the next step is without having to figure it out each time.",
      "Run this weekly and the shape looks like: Monday write the anchor, Tuesday extract the three derivatives, Wednesday through Friday publish, and one invitation woven in wherever it fits naturally. Three focused hours, not a permanently open calendar.",
      "Review it monthly with two questions: which anchor got the most saves, and which derivative shape performed best? Then bias the next month toward those answers. That's the entire optimization loop. Everything else people add to content strategy is usually a way of avoiding the anchor.",
    ],
  },
  {
    slug: "turn-one-freebie-into-an-email-list",
    title: "How to Turn One Freebie Into an Email List",
    category: "Launches",
    date: "July 8, 2026",
    cover: images.iced1,
    excerpt:
      "You don't need five lead magnets. You need one useful thing, one clear promise, and three places it consistently appears.",
    readingTime: "6 min read",
    body: [
      "Most people build too many freebies. Five half-promoted resources scattered across a site will always lose to one resource promoted properly, because attention compounds around repetition and nothing compounds when your traffic is split five ways.",
      "The freebie itself should solve one problem completely rather than introduce ten partially. A one-page checklist someone finishes in ten minutes builds more trust than a forty-page guide they abandon on page six. Completion is the trust event — not download, not open. Design for the moment someone finishes and thinks, that worked.",
      "The promise is where most freebies fail. 'Brand tips' promises nothing. 'The kit that gets your brand looking consistent in one afternoon' promises an outcome and a timeframe. Write the promise before you make the resource, and if you can't write a promise that specific, the resource idea isn't ready yet.",
      "Your opt-in form needs to be short and honest. First name and email. Every extra field costs signups, and you cannot personalize your way out of a form that feels like an application. Say clearly what arrives, when it arrives, and what else you'll send. People are far more generous with their email when they aren't guessing what they've agreed to.",
      "Then place it in exactly three spots and leave it alone: a dedicated landing page you can link anywhere, a contextual mention inside your most-read existing content, and a recurring reference in your regular posting rhythm. The dedicated page matters most — it gives the freebie a home that doesn't depend on any platform.",
      "The delivery sequence is where a list becomes a relationship. Email one delivers the thing immediately, no pitch. Email two, a couple of days later, helps them actually use it and asks one question — what are you stuck on? Email three shares a relevant story or example. Only after that does anything get sold, and even then softly.",
      "Reply rates on that second email are the metric I'd watch above all others. Replies tell you the list is alive, and the answers are the single best source of product ideas you will ever have. A list of a few hundred people who reply is worth more than thousands who never open.",
      "Give it three months before you judge it. One freebie, promoted consistently, with a sequence that actually helps, will outperform a rotating cast of new lead magnets every time — and it's far less work to maintain.",
    ],
  },
  {
    slug: "why-your-brand-feels-inconsistent",
    title: "Why Your Brand Feels Inconsistent (and How to Fix It)",
    category: "Strategy",
    date: "June 20, 2026",
    cover: images.brandingTips,
    excerpt:
      "Inconsistency is almost never a design problem. It's a decisions problem — and it's fixable in an afternoon.",
    readingTime: "6 min read",
    body: [
      "When someone says their brand feels inconsistent, they usually mean it looks slightly different everywhere. But the visual drift is a symptom. The cause is that no decisions were ever locked, so every new post, page, or product becomes a fresh round of choices made under time pressure and mild self-doubt.",
      "Start with an honest audit. Put your last twenty posts, your homepage, your shop, and your freebie covers side by side on one screen. You'll see it immediately: four background tones that are nearly the same but not quite, three fonts doing the same job, a voice that's warm in one place and corporate in another. Nothing there is bad. It's just unrelated.",
      "Fix the visual layer by shrinking your options rather than improving your taste. Two fonts total: one for headings, one for everything else. One background tone. One accent used sparingly. Three spacing values. Write them somewhere you'll actually open. Constraint is what creates consistency — not skill, and definitely not more templates.",
      "Then fix the voice layer, which is the one most people skip. Write down five phrases your brand says and five it never says. Decide whether you use exclamation marks, whether you write in first person, whether you're playful or plain. Voice inconsistency is more jarring than visual inconsistency because readers feel it without being able to point at it.",
      "The third layer is structural: what your brand is actually about. If your content jumps between five unrelated topics, no color palette will make it feel coherent. Pick one core problem you solve and let every piece connect back to it. Variety within a clear theme reads as depth. Variety without one reads as confusion.",
      "Apply the rules backwards over your most visible surfaces first — homepage, freebie, top three posts, product covers. You don't need to redo everything. Consistency is judged by what people encounter most, and fixing five surfaces buys you most of the perceived improvement.",
      "Then build a small guard against future drift: before publishing anything, check it against the rules. Right font, right tone, right accent, connected to the core problem. Thirty seconds, and it stops the slow slide that puts you right back here in four months.",
      "The reward for locking these decisions isn't just a tidier brand. It's speed. When the choices are already made, creating gets dramatically faster, because you're only deciding what to say — never how it should look or sound.",
    ],
  },
  {
    slug: "you-need-a-finish-line",
    title: "You Do Not Need More Ideas—You Need a Finish Line",
    category: "Mindset",
    date: "June 5, 2026",
    cover: images.clarity,
    excerpt:
      "Idea generation is the easy part. The skill that changes your business is defining done and getting there.",
    readingTime: "5 min read",
    body: [
      "Almost nobody building a creative business has an idea shortage. Open any notes app and you'll find twenty product concepts, forty content angles, and three business pivots. The bottleneck is never supply. It's the willingness to close something.",
      "Ideas feel good because they're all potential and no evidence. Nothing has been rejected, nothing has flopped, nothing is boring yet. Finishing feels bad for the same reason — it converts a beautiful possibility into a real thing with real flaws that real people can ignore. Choosing a new idea over finishing an old one is, most of the time, choosing to stay in the comfortable part.",
      "The fix starts with defining done before you begin. Write the finish line in concrete terms: the file exported, the page written, the images made, the link tested on a phone, purchasable by a stranger. Without a written definition, done is a feeling, and feelings can be argued with indefinitely.",
      "Then cap the project. A week, two weeks, whatever's realistic — but a real limit. Scope expands to fill available time, and creative scope expands faster than most, because every day gives you a new idea for how the thing could be better. A deadline turns those into version-two notes instead of version-one delays.",
      "Give new ideas a holding pen. An idea bank with three lines each: who it's for, what it fixes, why now. Writing an idea down satisfies most of the urge to act on it, and revisiting the bank two weeks later is remarkably clarifying — the ones that were genuinely good are still interesting, and the rest quietly reveal themselves as escape routes.",
      "Finish deliberately badly the first time, if that's what it takes. A shipped version that's 80% of your standard teaches you more in one week of real feedback than another month of private refinement. You cannot learn what's wrong with a product nobody has used.",
      "Track finishes, not starts. One number, updated monthly: how many things went fully live? It's an unglamorous metric and it's the one most correlated with an actual business. Most people who feel stuck are not lazy or uncreative. They're just measuring the wrong end of the process.",
    ],
  },
  {
    slug: "digital-products-that-actually-sell",
    title: "The 4 Digital Products That Actually Sell in 2026",
    category: "Strategy",
    date: "May 24, 2026",
    cover: images.social2026,
    excerpt:
      "Four product formats that quietly outperform courses this year — and how to build the smallest possible version of each.",
    readingTime: "6 min read",
    body: [
      "Courses are having a rough year. Attention spans are shorter, refund rates are higher, and buyers are tired of 47 modules they never finish. The four formats below are quietly outperforming courses in almost every niche I track.",
      "1. Notion templates that solve one very specific job. Not 'my life OS.' Something like 'the Sunday content batch page.' Under $19, no support burden, high review rate.",
      "2. Canva packs sized like magazines. Not 300 templates. 12 templates, one mood, one clear buyer. People pay a premium for the edit, not the volume.",
      "3. Mini guides that read like a magazine article. 20–40 pages, one big idea, one worksheet at the back. These sell on Pinterest for years.",
      "4. Swipes and scripts. Emails, captions, hooks. Buyers with a launch coming up will pay $29 to skip the blinking cursor.",
      "The pattern: small, specific, one job done well. Bundle them later once you know which one converts.",
    ],
  },
  {
    slug: "pinterest-flywheel-for-creators",
    title: "The Pinterest Flywheel Every Creator Should Set Up",
    category: "Strategy",
    date: "May 17, 2026",
    cover: images.iced8,
    excerpt: "Four steps to build a Pinterest system that runs itself and quietly compounds.",
    readingTime: "5 min read",
    body: [
      "Pinterest is not a social network. It's a search engine that happens to have pretty pictures. Once that clicks, everything about your strategy changes.",
      "Step 1 — Pick five keywords you want to own. Not five topics. Five actual searches your buyer types.",
      "Step 2 — Make three pin variants per blog post or product. Same link, different hook, different image.",
      "Step 3 — Schedule for the time zone of your buyer, not yours. Most creator pins should post 6–9pm EST.",
      "Step 4 — Review analytics monthly. Kill boards with 0 outbound clicks. Double down on the two boards driving 80% of the traffic.",
      "The whole system takes a Sunday to set up and about an hour a week to maintain. It is the single highest-leverage thing I've done for the business.",
    ],
  },
  {
    slug: "warm-launch-playbook",
    title: "The Warm Launch Playbook (No Big Audience Required)",
    category: "Launches",
    date: "May 10, 2026",
    cover: images.latteOffer,
    excerpt: "How to launch to 82 people and still hit $2k in the first week.",
    readingTime: "7 min read",
    body: [
      "Big launches with big audiences look great on Twitter. They are also the wrong model for 99% of us. A warm launch to a small list is the actual playbook.",
      "Day -7: tease the problem, not the product. Send an email about the friction your product solves. No pitch yet.",
      "Day -3: sneak peek. One image, one paragraph, one 'coming Tuesday' line.",
      "Day 0: doors open. Short, plain email. One button. That's it.",
      "Day +1: behind the scenes. Show them the making of, not the marketing of.",
      "Day +3: FAQ + last call. Answer the three questions people always ask, then close the cart or promote the price bump.",
      "82 subscribers, five well-written emails, one product priced at $47 — that's a $2k week if the offer solves something real.",
    ],
  },
  {
    slug: "quiet-marketing-for-introverts",
    title: "Quiet Marketing for Introverts",
    category: "Mindset",
    date: "May 3, 2026",
    cover: images.clarity,
    excerpt: "You do not have to be loud to be found. Here's the alternative.",
    readingTime: "4 min read",
    body: [
      "The loudest marketing advice on the internet is written by extroverts for extroverts. If posting seven Reels a week with your face makes you want to close your laptop and never open it again, you're not broken. You need a different plan.",
      "Quiet marketing has three moves: search-first content (Pinterest, Google, YouTube), a small email list you actually enjoy writing to, and one calm public channel where you can be yourself.",
      "You don't need to be everywhere. You need one place people can find you when they search, and one place they can hear from you when they subscribe. Two channels, done well, beat six done anxiously.",
      "The introvert advantage: your quiet, considered writing tends to convert better than loud takes. People buy from creators who sound like a smart friend, not a hype account.",
    ],
  },
  {
    slug: "pricing-your-first-digital-product",
    title: "How to Price Your First Digital Product",
    category: "Strategy",
    date: "Apr 26, 2026",
    cover: images.brandingTips,
    excerpt: "The pricing math I use to keep from underselling — and when to charge more.",
    readingTime: "5 min read",
    body: [
      "The default mistake is pricing your first product at $9 because you're nervous. The correct default is $27 for a mini product, $47 for a course, and $79 for a bundle.",
      "Rule of thumb: whatever price makes you slightly uncomfortable is probably $10 too low. Push through the discomfort. The buyers you want are not shopping on price.",
      "Add a payment plan on anything over $40. Two payments of $27 will convert better than one payment of $47 for most audiences.",
      "Revisit prices every 90 days. If reviews are strong and refund rate is under 3%, raise the price by 20% at the next launch.",
    ],
  },
  {
    slug: "week-in-my-full-time-creator-life",
    title: "A Week In My Full-Time Creator Life",
    category: "Behind the scenes",
    date: "Apr 19, 2026",
    cover: images.coquette7,
    excerpt: "The unglamorous, mostly-productive rhythm of a full-time creator week.",
    readingTime: "6 min read",
    body: [
      "Monday is batch day. Three reels, six pins, one email, one blog post. I don't check DMs until 3pm. This is the most important rule of the week.",
      "Tuesday is customer day. All support, all replies, all shipping updates. I don't create anything. I answer everything.",
      "Wednesday is deep work. One product task that takes actual thinking. New module, new sales page, a rewrite of an existing offer.",
      "Thursday is admin and finance. Boring. Necessary. This is the day I catch things before they become problems.",
      "Friday is publishing and reviewing. Everything I batched Monday goes live. Analytics on Friday night, over dinner, phone in another room.",
      "Weekends are off. Yes, really. The business runs on Pinterest and email while I'm not looking.",
    ],
  },
  {
    slug: "faceless-brands-are-having-a-moment",
    title: "Why Faceless Brands Are Having A Moment",
    category: "Strategy",
    date: "Apr 12, 2026",
    cover: images.facelessBiz,
    excerpt: "The rise of aesthetic, personality-driven brands with no personal face attached.",
    readingTime: "5 min read",
    body: [
      "Something is shifting. Some of the most interesting creator brands right now don't show a face. They show a mood.",
      "Buyers are getting more comfortable buying from a brand that feels like a magazine rather than a personal Instagram. It lowers the parasocial pressure on both sides.",
      "This isn't about hiding. It's about building something that could survive if you took a six-month break, or if you sold it, or if your co-founder handled the content while you built the products.",
      "If you're an introvert, a parent, or just someone with a real life outside content, faceless is not a compromise. It might be the best model for you.",
    ],
  },
];

export const blogPostExtras: Record<string, { takeaways: string[]; actionPlan: string[] }> = {
  "digital-products-that-actually-sell": {
    takeaways: [
      "Small, specific products are outperforming oversized courses because buyers want a faster win.",
      "Templates, scripts, mini guides, and swipe files sell best when they solve one clear job.",
      "The first version should be narrow enough to finish, ship, and improve from real buyer feedback.",
    ],
    actionPlan: [
      "List five problems your audience asks about repeatedly.",
      "Choose the one that can be solved with a template, checklist, guide, or script pack in under a week.",
      "Create the smallest paid version, sell it to your warmest audience, then bundle later only after one piece converts.",
    ],
  },
  "pinterest-flywheel-for-creators": {
    takeaways: [
      "Pinterest rewards searchable assets, not constant social presence.",
      "One product or post should have multiple pin angles because different hooks attract different buyers.",
      "Monthly analytics reviews keep the system from becoming a pretty content graveyard.",
    ],
    actionPlan: [
      "Pick five buyer-intent keywords and rename your most relevant boards around them.",
      "Create three pin variations for your strongest freebie or product page.",
      "Review outbound clicks after 30 days and rebuild the two pins sending the most traffic.",
    ],
  },
  "warm-launch-playbook": {
    takeaways: [
      "A small list can convert when the launch sequence warms the problem before it pitches the product.",
      "The best launch emails feel specific, plain, and human instead of over-designed.",
      "FAQs and behind-the-scenes content lower hesitation without adding pressure.",
    ],
    actionPlan: [
      "Write one pre-launch email about the problem your product solves.",
      "Send one visual sneak peek before the cart opens so the offer feels familiar.",
      "Close with an FAQ email that answers objections you have already heard in DMs or replies.",
    ],
  },
  "quiet-marketing-for-introverts": {
    takeaways: [
      "Quiet marketing works when your channels are chosen for longevity, not performance theatre.",
      "Search-first content and email can replace the need to be constantly visible on social media.",
      "Thoughtful writing is a conversion advantage because it builds trust without hype.",
    ],
    actionPlan: [
      "Choose one searchable channel and one owned channel for the next 90 days.",
      "Turn one strong essay into three Pinterest pins, one email, and one product-page improvement.",
      "Remove one content obligation that drains you but does not lead to clicks, replies, or sales.",
    ],
  },
  "pricing-your-first-digital-product": {
    takeaways: [
      "Pricing should reflect the outcome and usefulness of the product, not the creator's confidence level.",
      "A slightly uncomfortable price is often closer to the right one than a safe beginner price.",
      "Regular price reviews keep a product aligned with buyer results and stronger testimonials.",
    ],
    actionPlan: [
      "Place your product into one category: mini product, course, bundle, or template pack.",
      "Choose a launch price, then write what must be included for that price to feel obvious.",
      "Set a calendar reminder to review conversion, refunds, and testimonials after 90 days.",
    ],
  },
  "week-in-my-full-time-creator-life": {
    takeaways: [
      "A creator week works better when every day has a job instead of every day holding every task.",
      "Separating support, creation, admin, and review protects deep work from constant context switching.",
      "Time off is possible when traffic and email systems are designed to keep working quietly.",
    ],
    actionPlan: [
      "Assign each weekday one primary type of work.",
      "Batch one recurring task before checking messages or analytics.",
      "End the week by choosing one metric to improve and one workflow to simplify.",
    ],
  },
  "faceless-brands-are-having-a-moment": {
    takeaways: [
      "Faceless brands are succeeding because buyers connect with a clear world, not only a visible founder.",
      "An editorial mood, consistent language, and useful products can carry trust on their own.",
      "The model is especially strong for creators who want sustainability, privacy, or a sellable brand asset.",
    ],
    actionPlan: [
      "Define the three feelings your brand should create before choosing colors or templates.",
      "Write a voice bank with phrases your brand uses and phrases it avoids.",
      "Build one product ladder that can stand on its own without needing a personal daily presence.",
    ],
  },
};

export const homeStats: [string, string][] = [
  ["42+", "Products in progress"],
  ["12K+", "Followers across Pinterest & IG"],
  ["$12K+", "Generated with digital products"],
  ["1 Goal", "Build freedom online"],
];

export const progressStages: {
  id: "idea" | "building" | "beta" | "live";
  label: string;
  note: string;
}[] = [
  { id: "idea", label: "Idea", note: "Notes-app scribbles that keep coming back." },
  { id: "building", label: "Building", note: "Actively designing, filming, writing." },
  { id: "beta", label: "Beta", note: "First buyers, feedback loops, small tweaks." },
  { id: "live", label: "Live", note: "Selling in the shop, updates ongoing." },
];

export const progressBoard: {
  slug: string;
  title: string;
  stage: "idea" | "building" | "beta" | "live";
  percent: number;
  updated: string;
  update: string;
  image: string;
}[] = [
  {
    slug: "canva-crash-course",
    title: "Canva Crash Course",
    stage: "live",
    percent: 100,
    updated: "This week",
    update: "V2 templates dropped. 73% through the pre-sale cohort.",
    image: images.coquette5,
  },
  {
    slug: "brand-success-guide",
    title: "Brand Success Guide",
    stage: "live",
    percent: 100,
    updated: "This week",
    update: "Added the pricing calculator + 3 new listing examples.",
    image: images.iced6,
  },
  {
    slug: "digital-product-bundle",
    title: "Digital Product Bundle",
    stage: "beta",
    percent: 70,
    updated: "3 days ago",
    update: "5 beta buyers gave feedback. Rewriting two sections this week.",
    image: images.coquette1,
  },
  {
    slug: "pinterest-growth-kit",
    title: "Pinterest Growth Kit",
    stage: "building",
    percent: 40,
    updated: "5 days ago",
    update: "60 pin templates designed. Working on the SEO checklist next.",
    image: images.iced8,
  },
  {
    slug: "content-strategy-planner",
    title: "Content Strategy Planner",
    stage: "building",
    percent: 30,
    updated: "1 week ago",
    update: "Batching flow drafted. Metrics dashboard is next.",
    image: images.contentStrategy,
  },
  {
    slug: "faceless-brand-course",
    title: "Faceless Brand Course",
    stage: "idea",
    percent: 5,
    updated: "2 weeks ago",
    update: "Scoping the outline. Might launch as a mini-guide first.",
    image: images.facelessBiz,
  },
  {
    slug: "creator-swipe-vault",
    title: "Creator Swipe Vault",
    stage: "idea",
    percent: 10,
    updated: "This week",
    update: "Collecting 200 real-world captions, emails, and hooks.",
    image: images.latteOffer,
  },
  {
    slug: "brand-clarity-workbook",
    title: "Brand Clarity Workbook (paid)",
    stage: "beta",
    percent: 60,
    updated: "4 days ago",
    update: "First 15 beta buyers on board. Adding a workbook audio companion.",
    image: images.clarity,
  },
];

export type ProductExtras = {
  description: string[];
  features: { title: string; detail: string }[];
  howItWorks: { step: string; detail: string }[];
  gallery: string[];
};

export const productExtras: Record<string, ProductExtras> = {
  "canva-crash-course": {
    description: [
      "The Canva Crash Course is a weekend-length design workshop built for creators who freeze at a blank page. Twelve short lessons, six editable templates, and a launch checklist — everything you need to design and ship your first digital product without hiring a designer.",
      "Every lesson is under 8 minutes. Every template is production-ready. You'll leave with a workbook, a checklist, a planner, an e-book, a mini-course workbook, and a freebie — all in your brand, ready to sell.",
      "This is the exact system I use inside Blushbuild for every product I release, distilled into the shortest version I could make without cutting anything important.",
    ],
    features: [
      { title: "12 short video lessons", detail: "Bite-sized under 8 minutes so you can watch on a lunch break." },
      { title: "6 launch-ready templates", detail: "Workbook, checklist, planner, e-book, mini course, freebie — all editable in free Canva." },
      { title: "Brand starter files", detail: "Fonts, palettes, and mood boards you can drop into any product." },
      { title: "Launch checklist", detail: "The exact 14-day plan I use for every Blushbuild release." },
      { title: "Lifetime updates", detail: "Every new template drop lands in your account automatically." },
    ],
    howItWorks: [
      { step: "Download the welcome guide", detail: "Start with the 10-minute roadmap so you know exactly which lesson and template to open first." },
      { step: "Choose one product format", detail: "Pick the workbook, checklist, planner, e-book, course workbook, or freebie template based on what you want to sell." },
      { step: "Customize with your brand", detail: "Use the palette, font, and layout walkthroughs to make the template feel custom without redesigning it from scratch." },
      { step: "Export and launch", detail: "Follow the included launch checklist to price, publish, and announce your finished product." },
    ],
    gallery: [images.coquette5, images.coquette2, images.brandingTips, images.clarity],
  },
  "brand-success-guide": {
    description: [
      "The Brand Success Guide is the 48-page playbook I wish I'd had before opening my shop. Positioning, keyword research, listing photos, and the exact pricing math that works for digital sellers in 2026.",
      "It's not a course full of theory. It's the small tactical decisions that separate a shop stuck at 3 sales a month from one doing 300 — written the way I'd walk a friend through it over coffee.",
      "Includes real listing teardowns, a keyword research spreadsheet, and the follow-up messages I send buyers to reliably get 5-star reviews.",
    ],
    features: [
      { title: "48-page PDF guide", detail: "Positioning, keywords, photos, pricing — with real examples throughout." },
      { title: "Keyword spreadsheet", detail: "Sortable research template pre-filled with 200+ starter keywords." },
      { title: "10 photo templates", detail: "Editable listing photos in Canva — swap your product, ship in 20 minutes." },
      { title: "Pricing calculator", detail: "The exact worksheet I use to price digital products without underselling." },
      { title: "Review scripts", detail: "The 3 messages that reliably turn buyers into 5-star reviewers." },
    ],
    howItWorks: [
      { step: "Audit your current shop", detail: "Use the first worksheet to spot missing keywords, weak photos, confusing sections, and pricing gaps." },
      { step: "Rewrite your positioning", detail: "Clarify who the product is for, why it matters, and what makes your listing easier to buy." },
      { step: "Refresh listing visuals", detail: "Duplicate the Canva photo templates and create a complete listing image stack in one sitting." },
      { step: "Track and improve", detail: "Use the pricing calculator and review scripts to improve conversion over the next 30 days." },
    ],
    gallery: [images.iced6, images.iced2, images.iced1, images.contentStrategy],
  },
  "digital-product-bundle": {
    description: [
      "One bundle that replaces five subscriptions. Prompts, sales page templates, email sequences, and the warm launch playbook — priced like a beginner course, valued like a mentor.",
      "Built for creators who are done paying $19/month for four different tools that all do 60% of what they need. Everything here is production-tested inside Blushbuild's own launches.",
      "Ships early July. Join the waitlist for a launch-day discount and quarterly updates included.",
    ],
    features: [
      { title: "200 content prompts", detail: "Organized by funnel stage — awareness, warm, launch, retention." },
      { title: "3 sales page templates", detail: "Notion + Canva. Duplicate, swap copy, publish." },
      { title: "5-email warm launch", detail: "The exact sequence that turned an 82-person list into a $2k launch." },
      { title: "Reels script pack", detail: "Sound-on hooks and outlines for the top 20 creator formats." },
      { title: "Brand mood starters", detail: "Palettes, fonts, and moodboards to lock a look in one afternoon." },
    ],
    howItWorks: [
      { step: "Pick your launch goal", detail: "Choose whether you are validating an idea, warming a waitlist, or opening cart this week." },
      { step: "Build your offer page", detail: "Use the Notion or Canva sales page template to draft the promise, sections, FAQs, and CTA." },
      { step: "Batch content from prompts", detail: "Pull prompts by funnel stage so your posts lead naturally into the offer instead of feeling random." },
      { step: "Send the launch sequence", detail: "Customize the five emails and publish the matching Reels scripts during launch week." },
    ],
    gallery: [images.coquette1, images.latteOffer, images.social2026, images.coquette7],
  },
  "pinterest-growth-kit": {
    description: [
      "The Pinterest Growth Kit is the exact system I use to send steady, free traffic to my digital products every week — without spending an hour on each pin.",
      "60 editable templates across three aesthetics, a weekly content calendar, a keyword bank, and the SEO checklist that turned my dead board into a top traffic source in 90 days.",
      "Built specifically for digital product sellers, bloggers, and faceless brands who want traffic that compounds instead of disappearing after 48 hours.",
    ],
    features: [
      { title: "60 pin templates", detail: "Three aesthetics × twenty formats. Editable in free Canva." },
      { title: "Weekly calendar", detail: "The batching flow I use every Sunday in under 90 minutes." },
      { title: "Keyword bank", detail: "500+ keywords for creators, sellers, and coaches — copy/paste ready." },
      { title: "Board SEO checklist", detail: "The 12 checks that turn a board into a traffic engine." },
      { title: "Analytics dashboard", detail: "Notion template to track what's actually driving clicks." },
    ],
    howItWorks: [
      { step: "Choose your traffic goal", detail: "Decide whether you want clicks to a product, freebie, blog post, or waitlist before you design anything." },
      { step: "Match keywords to boards", detail: "Use the keyword bank to name boards, write descriptions, and choose the searches you want to own." },
      { step: "Batch weekly pins", detail: "Duplicate the templates, swap hooks and images, then schedule a full week in one focused session." },
      { step: "Review what compounds", detail: "Track outbound clicks monthly and rebuild the top-performing pins instead of guessing." },
    ],
    gallery: [images.iced8, images.iced6, images.contentStrategy, images.coquette6],
  },
};

export type ProgressDetail = {
  story: string[];
  shipped: string[];
  next: string[];
  updates: { date: string; note: string }[];
};

export const progressDetails: Record<string, ProgressDetail> = {
  "canva-crash-course": {
    story: [
      "The Canva Crash Course started as a single Notion doc titled 'stuff people keep asking me in DMs.' Twelve bullet points about how I design my products. I turned it into a paid mini-course in a weekend.",
      "V1 launched in February with 8 lessons. V2 dropped this month with 4 new lessons, a brand starter kit, and rebuilt templates. The pre-sale cohort is 73% through the material.",
      "Long-term the goal is to keep this evergreen and update it once a quarter as Canva rolls out new features.",
    ],
    shipped: [
      "V1 launched Feb 2026 (8 lessons)",
      "V2 dropped May 2026 (12 lessons + new templates)",
      "Brand starter kit added June 2026",
      "First 200 buyers onboarded",
    ],
    next: [
      "Recording the AI section for Q3",
      "Add a 'design a freebie in 30 minutes' bonus module",
      "Rebuild the sales page with buyer quotes",
    ],
    updates: [
      { date: "This week", note: "V2 templates dropped. 73% through the pre-sale cohort." },
      { date: "2 weeks ago", note: "Recorded the last two lessons of V2. Editing in progress." },
      { date: "4 weeks ago", note: "Announced V2 to the list. 68 upgrades in 48 hours." },
    ],
  },
  "brand-success-guide": {
    story: [
      "The Brand Success Guide was the second product I ever released. It started as a 12-page PDF and has grown into a proper 48-page playbook with a keyword spreadsheet, photo templates, and a pricing calculator.",
      "I update it every quarter as the marketplace algorithm changes. This quarter's update added the new pricing calculator and 3 fresh listing teardowns.",
    ],
    shipped: [
      "48-page PDF live",
      "Keyword research spreadsheet",
      "10 Canva photo templates",
      "Pricing calculator added",
    ],
    next: [
      "Add a video walkthrough of a full listing setup",
      "Interview 3 shop owners for case studies",
      "Translate the guide to Spanish (Q4)",
    ],
    updates: [
      { date: "This week", note: "Added the pricing calculator + 3 new listing examples." },
      { date: "3 weeks ago", note: "Started outlining the video walkthrough companion." },
      { date: "6 weeks ago", note: "Q2 update dropped. Buyers get it automatically." },
    ],
  },
  "digital-product-bundle": {
    story: [
      "The bundle came out of the same feedback loop over and over: buyers wanted the prompts, the templates, the launch sequences, and the mood boards all in one place. So I built it.",
      "Currently in beta with 5 buyers testing everything end-to-end. Their feedback is rewriting two sections this week before the public launch in July.",
    ],
    shipped: [
      "200 prompts finalized",
      "3 sales page templates live in Notion",
      "5-email warm launch sequence tested",
      "Beta cohort onboarded (5 buyers)",
    ],
    next: [
      "Rewrite the mood board section based on beta notes",
      "Design the launch-day landing page",
      "Send the waitlist a launch discount code",
    ],
    updates: [
      { date: "3 days ago", note: "5 beta buyers gave feedback. Rewriting two sections this week." },
      { date: "2 weeks ago", note: "Beta cohort opened. Feedback surveys sent." },
      { date: "5 weeks ago", note: "Finished the 200 prompts. Started sales page templates." },
    ],
  },
  "pinterest-growth-kit": {
    story: [
      "The Pinterest Growth Kit was the most-requested product on the last audience survey — by a lot. I've been building the templates since March and just crossed 60 designs across three aesthetics.",
      "Aim to launch in late summer. Progress lives here in public so waitlist buyers know exactly what they're getting.",
    ],
    shipped: [
      "60 pin templates designed",
      "Three aesthetics locked in (cream editorial, iced neutral, warm serif)",
      "Weekly content calendar drafted",
    ],
    next: [
      "Write the SEO checklist for boards + descriptions",
      "Build the keyword bank (500+ terms)",
      "Design the analytics dashboard in Notion",
    ],
    updates: [
      { date: "5 days ago", note: "60 pin templates designed. Working on the SEO checklist next." },
      { date: "3 weeks ago", note: "Locked the three aesthetics. Cream editorial tested best." },
      { date: "6 weeks ago", note: "Started the first 20 templates. Kept 12, killed 8." },
    ],
  },
  "content-strategy-planner": {
    story: [
      "The planner is the Notion + Canva companion to the Sunday reset I write about on the diary. Started as a page I use myself every week.",
      "Batching flow is drafted. Metrics dashboard is next. Planning a small beta with 10 creators before public launch.",
    ],
    shipped: [
      "Weekly + monthly planning pages drafted",
      "Content pillar tracker built",
      "Batching flow written",
    ],
    next: [
      "Build the metrics dashboard",
      "Open a 10-person beta",
      "Design the cover + sales page",
    ],
    updates: [
      { date: "1 week ago", note: "Batching flow drafted. Metrics dashboard is next." },
      { date: "3 weeks ago", note: "Locked the four core pages. Cut two 'nice to have' sections." },
    ],
  },
  "faceless-brand-course": {
    story: [
      "This might launch as a mini-guide first. Still scoping whether it wants to be a course or a 40-page PDF like a magazine.",
      "Waitlist is open on the sidebar of the faceless business essay on the blog.",
    ],
    shipped: [
      "Initial outline written",
      "Audience survey collected (127 responses)",
    ],
    next: [
      "Decide: mini-guide vs. course",
      "Write the first three lessons or chapters",
      "Design the cover",
    ],
    updates: [
      { date: "2 weeks ago", note: "Scoping the outline. Might launch as a mini-guide first." },
      { date: "5 weeks ago", note: "Sent the audience survey. 127 responses in a week." },
    ],
  },
  "creator-swipe-vault": {
    story: [
      "The Swipe Vault is a collection of 200 real captions, emails, and hooks pulled from launches that actually worked — mine and a handful from creator friends who agreed to share.",
      "Currently collecting and tagging. Aiming for a Q3 release.",
    ],
    shipped: [
      "78 captions logged",
      "34 emails logged",
      "Tag system designed in Notion",
    ],
    next: [
      "Hit 200 total swipes",
      "Get sign-off from contributing creators",
      "Build the search + filter UI",
    ],
    updates: [
      { date: "This week", note: "Collecting 200 real-world captions, emails, and hooks." },
      { date: "3 weeks ago", note: "First 3 creator friends signed off on sharing their launch emails." },
    ],
  },
  "brand-clarity-workbook": {
    story: [
      "The paid workbook is a longer, deeper version of the free clarity workbook already on the resources page. Adds audio prompts, real examples, and a 30-day rebrand plan.",
      "In beta with 15 buyers right now. Feedback so far: the audio companion is the favorite feature.",
    ],
    shipped: [
      "Workbook PDF drafted",
      "12 audio prompts recorded",
      "Beta cohort onboarded (15 buyers)",
    ],
    next: [
      "Edit audio companion based on beta feedback",
      "Add 3 case-study examples",
      "Public launch in July",
    ],
    updates: [
      { date: "4 days ago", note: "First 15 beta buyers on board. Adding a workbook audio companion." },
      { date: "3 weeks ago", note: "Finished recording the 12 audio prompts." },
    ],
  },
};
