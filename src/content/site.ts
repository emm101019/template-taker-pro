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
    slug: "etsy-success-guide",
    title: "Etsy Success Guide",
    tagline: "Positioning and listings that actually convert on Etsy",
    status: "Selling",
    phase: "50% core",
    price: "$29",
    note: "Positioning notes and listing tweaks that actually convert.",
    image: images.iced6,
    pitch:
      "The playbook I wish I had before my first Etsy shop. Positioning, keyword research, listing photos, and the pricing math that actually works for digital sellers.",
    whatYouGet: [
      "48-page PDF guide with real examples",
      "Keyword research spreadsheet",
      "10 listing photo templates in Canva",
      "Pricing calculator (worksheet)",
      "The messages I send buyers to get 5-star reviews",
    ],
    whoItsFor: [
      "New Etsy sellers with 0 to 50 sales",
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
        a: "Nope. The guide covers getting your first views from Etsy search plus Pinterest.",
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
    slug: "etsy-starter-kit",
    title: "Etsy Starter Kit",
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
    slug: "first-digital-product-idea",
    title: "How I Came Up With My First Digital Product Idea",
    date: "May 12",
    month: "May 2026",
    cover: images.coquette5,
    excerpt:
      "The messy, non-linear process of turning a Notes-app scribble into an actual thing people paid for.",
    body: [
      "It didn't start as a business idea. It started as a note called 'stuff I keep re-explaining to friends.' Twelve bullet points, half of them typos, mostly things I'd figured out the hard way about opening an Etsy shop.",
      "I opened Canva and turned three of those bullet points into a one-page PDF. No cover, no pricing, no funnel. Just a link I DMed to two friends. They said it was helpful. That was the entire market research.",
      "The lesson I keep coming back to: the first version of your product should embarrass you a little. If the first draft feels too polished, you waited too long.",
      "I spent the next two weeks turning that PDF into a proper mini guide. New cover, real examples, a checklist at the back. I priced it at $9. It sold 41 copies in the first month. Nothing viral — just a slow drip from Pinterest and my tiny email list.",
      "Every product I've made since started the same way: a friction I kept explaining, dumped into a Notes doc, then dragged into Canva before I could talk myself out of it.",
    ],
    pullQuote: "The first version of your product should embarrass you a little.",
  },
  {
    slug: "first-etsy-sale",
    title: "From 0 To My First Etsy Sale",
    date: "May 9",
    month: "May 2026",
    cover: images.iced6,
    excerpt: "Nine days of refreshing the dashboard. What actually moved the needle.",
    body: [
      "Day one of my shop being open, I refreshed the seller dashboard 42 times. I know because Etsy shows you.",
      "The first three days were silent. Etsy's algorithm needs a little runway with a brand new shop, and I had exactly one listing, no reviews, and a shop banner made in twelve minutes.",
      "What actually broke the silence: I made three Pinterest pins for the same listing, each with a different hook, and scheduled them for the same evening. The next morning I woke up to my first sale — from a pin, not from Etsy search.",
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
      "I made a freebie called the Etsy Starter Kit on a whim. One page. Not even long. I gated it behind an email.",
      "For three weeks nobody signed up. Then I made a very simple Pinterest pin — cream background, one serif line — and pinned it four times to four different boards. That one pin brought in 68 subscribers over two weeks.",
      "The tiny list changed how I thought about the business. Instead of shouting at strangers, I was writing to 100 specific people, and I could see their replies.",
      "The email that made it click: 'I don't know what to make next — what are you actually stuck on?' 41 people replied. The Canva Crash Course was in half those replies.",
    ],
    pullQuote: "Ask your list what they're stuck on. The product is usually in their reply.",
  },
];

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
    slug: "etsy-success-guide",
    title: "Etsy Success Guide",
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
