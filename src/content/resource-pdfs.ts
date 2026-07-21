export type ResourcePdf = {
  subtitle: string;
  intro: string;
  sections: {
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
  closing: string;
};

export const resourcePdfs: Record<string, ResourcePdf> = {
  "etsy-starter-kit": {
    subtitle: "Everything you need to open your Etsy shop with quiet confidence.",
    intro:
      "This kit is the exact playbook I wish someone had handed me the week I opened my first Etsy shop. No fluff, no 'manifest your first sale' pep talk — just the setup steps, the templates, and the small pricing decisions that keep new sellers stuck for months. Work through it in one afternoon and you'll have a shop that's ready for its first listing by the end of the day.",
    sections: [
      {
        heading: "1. Naming your shop without over-thinking",
        paragraphs: [
          "Your shop name is not a tattoo. It is a URL slug and a header graphic. Pick something you can spell out loud, that's under 14 characters, and that doesn't box you into one niche. If you sell wedding printables today but might sell birthday printables next year, don't put 'wedding' in the name.",
          "A safe pattern that works: [word that feels like you] + [word that feels like your craft]. Blushbuild. Softserve. Slowmark. Read it out loud. If it makes you cringe, try again. If it makes you shrug, ship it.",
        ],
      },
      {
        heading: "2. Sections that actually help discovery",
        bullets: [
          "Best sellers — always first, even if you only have one item in there",
          "New — signals to buyers and to the algorithm that the shop is alive",
          "By use case (weddings, birthdays, launches) — not by file type",
          "Bundles — highest-margin section, put it third from the top",
          "On sale — only if you actually run sales",
        ],
      },
      {
        heading: "3. The first-listing template",
        paragraphs: [
          "Title formula: [Main Keyword] | [Secondary Keyword] | [Format] | [Style Descriptor]. Example: 'Wedding Seating Chart Template | Editable Canva | Printable PDF | Minimalist'.",
          "Description structure: one-line hook, three bullet points on what's included, three bullet points on how to use it, one paragraph on the vibe / who it's for, then FAQ and terms. Keep the hook above the fold — Etsy truncates fast on mobile.",
        ],
        bullets: [
          "5 mockup images (cover, in-context, close-up, dimensions, before/after)",
          "1 video (Canva 10-second walkthrough is enough)",
          "13 tags, all lowercase, none duplicating your title exactly",
          "Digital delivery via Etsy — never DM the file",
        ],
      },
      {
        heading: "4. Beginner pricing worksheet",
        paragraphs: [
          "Digital products get priced on perceived value, not effort. A worksheet that took you three hours can be $12 if it saves someone six hours. Start by writing down: what does the buyer stop doing / stop feeling once they use this?",
          "A simple ladder that keeps a new shop healthy: one freebie ($0), one starter product ($9), one main product ($19-$29), one bundle ($47-$67). Don't launch with the bundle. Launch with the starter, then stack.",
        ],
      },
      {
        heading: "5. The first-week promo plan",
        bullets: [
          "Day 1: 3 Pinterest pins for your first listing, each with a different hook",
          "Day 2: post the listing to your Instagram story with a 'first day open!' sticker",
          "Day 3: DM 5 friends the direct link, ask for one honest reaction, not a purchase",
          "Day 4: 3 more pins with new mockups",
          "Day 5: add a second listing (never let the shop sit at one)",
          "Day 6: rest — the algorithm needs a beat",
          "Day 7: review analytics, kill the pin with the worst CTR, double down on the best",
        ],
      },
      {
        heading: "6. Opening messages I send to first buyers",
        paragraphs: [
          "'Hi [name] — thanks so much for being one of my very first buyers, that genuinely made my week. Your file is attached to the order page but I'm dropping it here too just in case. If anything's off, message me directly — I'll fix it same day. — [You]'",
          "Follow-up 5 days later: 'Hi again! Just checking the file worked ok. If you have a second and it was helpful, a review would mean a lot. If it wasn't, tell me why — I'll rework it.'",
        ],
      },
    ],
    closing:
      "Opening a shop is 90% just publishing the first listing. The rest is iteration. Come back to this PDF at the end of month one and tick off what you actually did — you'll be further along than you think.",
  },

  "canva-prompt-ideas": {
    subtitle: "50 content prompts sorted by platform, with hooks that pull people in.",
    intro:
      "Every prompt here is one I've used or watched a client use to break a content dry spell. Pick one, open Canva, and give yourself 25 minutes — no more. The magic is in shipping something rough, not in polishing a masterpiece nobody sees.",
    sections: [
      {
        heading: "Reels — hooks that earn the first 2 seconds",
        bullets: [
          "01. 'I wish I knew this before I opened my shop.' Show one visual mistake on screen.",
          "02. 'POV: your first sale on a brand new shop.' Screen record the notification.",
          "03. 'Things I stopped doing that grew my brand.' Three quick text overlays.",
          "04. 'The Canva tip that saved me 4 hours a week.' One screen, one gesture.",
          "05. 'Rate my product mockup out of 10.' Ends with 'saving this one.'",
          "06. 'What $9 gets you in my shop.' Slow pan across a laid-out PDF.",
          "07. 'A day of batching content for a faceless brand.' 3 clips, 3 seconds each.",
          "08. 'The listing that outsells all my others.' Show the listing, then the analytics.",
          "09. 'How I write a product title in 30 seconds.' Type it live.",
          "10. 'Redoing my ugliest listing.' Before / after / result.",
        ],
      },
      {
        heading: "Carousels — outlines that earn saves",
        bullets: [
          "11. 5 mistakes I made in my first month on Etsy",
          "12. What to put on your shop banner (with visual examples)",
          "13. Pricing your first digital product without spiraling",
          "14. Anatomy of a listing that converts",
          "15. My weekly content batch, hour by hour",
          "16. Fonts I use for every launch (with samples)",
          "17. 3 free Canva alternatives to premium templates",
          "18. Reading your Etsy stats without panicking",
          "19. What I'd do with my first $100 in shop revenue",
          "20. 7 tabs I always have open on launch day",
        ],
      },
      {
        heading: "Pins — title formulas people click",
        bullets: [
          "21. '[Number] [Thing] for [Audience] Who [Painpoint]'",
          "22. 'The [Adjective] Way to [Outcome] (Without [Common Objection])'",
          "23. 'What I Wish I Knew About [Topic] Before [Milestone]'",
          "24. '[Time Period] to [Outcome]: My Honest Playbook'",
          "25. 'How to [Outcome] Even If You [Objection]'",
          "26. 'A Simple [Tool] Workflow for [Audience]'",
          "27. '[Number] Free [Templates/Prompts/Scripts] for [Audience]'",
          "28. 'Read This Before You Open Your [Etsy / Shopify / Ko-fi] Shop'",
          "29. 'The [Small Thing] That Changed My [Big Metric]'",
          "30. 'Behind the Scenes of a [Type of Launch] Launch'",
        ],
      },
      {
        heading: "Stories & posts — the low-lift daily drip",
        bullets: [
          "31. Poll: 'Which cover works better, A or B?'",
          "32. Screenshot of a good review with a soft thank-you",
          "33. Sunday reset routine, one slide at a time",
          "34. 'Ask me anything about opening a shop' sticker",
          "35. Behind-the-desk photo with a one-line lesson",
          "36. 'Save for later' post with your best 3 tips",
          "37. Reader question answered in 30 seconds",
          "38. A tiny win from the week (screenshot + caption)",
          "39. Product close-up with 'link in bio'",
          "40. Quote overlay from your latest blog post",
        ],
      },
      {
        heading: "Emails — 10 lines that get opened",
        bullets: [
          "41. 'A tiny thing I changed this week.'",
          "42. 'The launch I almost didn't run.'",
          "43. 'What I'd do differently on my first product.'",
          "44. 'This one is a little personal.'",
          "45. 'A free thing, no strings.'",
          "46. 'The listing I'm most proud of.'",
          "47. 'Read this before your next launch.'",
          "48. 'Something I stopped apologizing for.'",
          "49. 'A soft reminder about your shop.'",
          "50. 'Doors close tonight — quick note.'",
        ],
      },
    ],
    closing:
      "Content ideas aren't the bottleneck. Publishing them is. Print this out, cross off each one as you use it, and by the time you hit prompt 50 you'll have found the three formats that actually work for your brand.",
  },

  "product-launch-checklist": {
    subtitle: "A day-by-day launch flow that batches the work and skips the panic.",
    intro:
      "This is the checklist I run every time I launch a new digital product. It starts two weeks before the doors open and ends one week after — because the launch isn't over the day people buy. Copy this into your Notion, tick as you go, and adjust the dates but not the order.",
    sections: [
      {
        heading: "T-14 to T-8 — Positioning week",
        bullets: [
          "Write the one-line pitch. If you can't finish 'this helps [who] do [what] without [pain]', don't build it yet.",
          "Mood board the cover in Canva. 6 images max.",
          "Pick the price. Look at your ladder — does it slot in?",
          "Draft the outline of what's inside. Don't build it yet, just list it.",
          "Tell your email list a product is coming. One line, no details.",
        ],
      },
      {
        heading: "T-7 to T-3 — Build week",
        bullets: [
          "Batch the actual product. Set a 3-hour timer per day, no more.",
          "Design the sales page. Use your existing brand — don't redesign the site.",
          "Write 3 pins with different hooks, schedule for launch day + 1.",
          "Ask 2 beta users to try it. Trade for a testimonial.",
          "Set up the checkout / Etsy listing / Gumroad page. Test-buy it yourself.",
        ],
      },
      {
        heading: "T-2 to T-1 — Warm-up",
        paragraphs: [
          "Send the warm-launch email. Template: subject line 'a little something I've been building.' Body: three short paragraphs on why you made it, what's inside, and when doors open. End with 'reply if you want the early-bird link.' Do NOT send the link yet. The point is to gauge who's warm.",
        ],
        bullets: [
          "Post one behind-the-scenes story per day",
          "Update your Instagram / TikTok bio to hint at the drop",
          "Prepare the launch-day email (subject + body, scheduled but not sent)",
        ],
      },
      {
        heading: "Launch day (T-0)",
        bullets: [
          "9am: launch email goes out",
          "10am: first Instagram post — cover + pitch + link",
          "12pm: story series (5 slides) walking through what's inside",
          "3pm: Pinterest pin #1 goes live",
          "6pm: 'first 3 buyers, thank you' story with soft social proof",
          "9pm: do not check the dashboard. Close the laptop. Order dinner.",
        ],
      },
      {
        heading: "T+1 to T+7 — Momentum week",
        bullets: [
          "Day 1: send FAQ email addressing the top 3 questions from launch day",
          "Day 3: post one testimonial screenshot to stories",
          "Day 5: 'last call' email with a soft deadline (bonus expires, price rises, etc.)",
          "Day 6: share one win from a buyer",
          "Day 7: post-launch review — what worked, what didn't, what to keep for next time",
        ],
      },
      {
        heading: "The warm-launch email script",
        paragraphs: [
          "Subject: a little something I've been building",
          "Hi [first name], I've been quietly building something over the last few weeks that I think you're going to like. It's called [product], and it's the [format] I wish someone had handed me back when I was [struggle].",
          "It opens next [day] and I'll send the link then. But if you want to be the first to grab it (there's a small early-bird bonus), just reply with the word 'yes' and I'll DM you the link a day early.",
          "Either way — thank you for being here. This one meant a lot to make. — [You]",
        ],
      },
    ],
    closing:
      "A launch is not a moment. It's a two-week arc that ends with you knowing your product better than you did before. Do the review on day T+7 even if the launch was quiet — especially if it was quiet.",
  },

  "pinterest-script-notes": {
    subtitle: "Hooks, titles, and mini scripts that turn saves into clicks.",
    intro:
      "Pinterest is a search engine dressed up as a mood board. Everything in this guide leans into that: search-friendly titles, benefit-led hooks, and descriptions that answer the question the pinner just typed. Use one section per pin and cycle through — the same product with 5 different pin angles will always outperform 5 different products with one pin each.",
    sections: [
      {
        heading: "30 hook formulas",
        bullets: [
          "01. 'I wish someone had told me this before I…'",
          "02. 'Save this before you launch your…'",
          "03. 'The tiny tweak that doubled my…'",
          "04. 'Read this before you spend $0 on ads.'",
          "05. 'How I went from 0 to [milestone] in [time].'",
          "06. 'The [tool] workflow I use every week.'",
          "07. '[Number] things I stopped doing that grew my…'",
          "08. 'A [format] for creators who freeze at a blank page.'",
          "09. 'What no one tells you about starting a…'",
          "10. 'This is the only [thing] you need for…'",
          "11. 'The [industry] template I use for every launch.'",
          "12. 'My honest breakdown of [popular tool / method].'",
          "13. 'A soft-launch playbook for shy creators.'",
          "14. 'How to price your first digital product without spiraling.'",
          "15. 'The [X]-minute content batch that runs my week.'",
          "16. 'Behind the scenes of a [type] launch.'",
          "17. 'Fonts, colors, and vibes for a [aesthetic] brand.'",
          "18. 'Anatomy of a listing that actually converts.'",
          "19. 'The [number] mistakes I made on my first Etsy shop.'",
          "20. 'What I'd do with my first $100 in revenue.'",
          "21. 'A calm approach to Pinterest that still works.'",
          "22. 'How to write titles Pinterest actually shows.'",
          "23. 'The 3-pillar content system for solo creators.'",
          "24. 'A weekend product idea for [audience].'",
          "25. 'One page, five listings — the multipurpose printable.'",
          "26. 'The email that made me my first $500.'",
          "27. 'What to post when you have nothing to post.'",
          "28. 'A quiet way to launch without a big audience.'",
          "29. 'How to redo an ugly listing in 20 minutes.'",
          "30. 'The Pinterest strategy for people who hate Pinterest.'",
        ],
      },
      {
        heading: "SEO-first title starters",
        bullets: [
          "'[Number] [Thing] for [Audience] in [Year]'",
          "'How to [Outcome] Even If [Objection]'",
          "'The [Adjective] [Format] for [Audience]'",
          "'[Audience]'s Guide to [Topic]'",
          "'[Topic]: A [Time Period] Playbook'",
        ],
      },
      {
        heading: "Description templates by niche",
        paragraphs: [
          "Digital products: 'A [format] for [audience] who want to [outcome] without [pain]. Inside: [3 short things]. Free preview + full download in the shop.'",
          "Blog post: 'A calm, honest post on [topic]. Covers [thing 1], [thing 2], and [thing 3]. Save this for your next [moment].'",
          "Freebie: '[Freebie name] — a free [format] you can grab in 30 seconds. Best for [audience] who [pain]. No sign-up gymnastics.'",
        ],
      },
      {
        heading: "Idea pin script outlines (5 beats)",
        bullets: [
          "Slide 1: hook (question or bold claim)",
          "Slide 2: the mistake or friction you noticed",
          "Slide 3: the tiny fix",
          "Slide 4: what changed once you fixed it",
          "Slide 5: soft CTA — 'the full guide is in my bio if this helped'",
        ],
      },
    ],
    closing:
      "Pin the same product 5 different ways before you decide it 'doesn't work on Pinterest.' The platform rewards patience and volume more than perfection. Come back to this list any time you're staring at a blank Canva pin.",
  },

  "brand-clarity-workbook": {
    subtitle: "Find your voice, palette, and offer in one weekend.",
    intro:
      "This is a working document, not a reading document. Grab a pen. The point of a clarity workbook is not to feel inspired — it's to end the weekend with three decisions you don't have to remake every Monday: how you sound, what you look like, and what you sell.",
    sections: [
      {
        heading: "Section 1 — Your unfair strengths",
        paragraphs: [
          "List 5 things you keep getting complimented on, professionally or personally. Not what you think you should be good at — what people actually notice. Circle the two that would still be true if the internet disappeared tomorrow. Those two are your positioning.",
        ],
      },
      {
        heading: "Section 2 — The three feelings your brand gives people",
        paragraphs: [
          "Not adjectives. Feelings. 'Calm' is a feeling. 'Modern' isn't. Write three, in order. The first one is your headline energy. The second and third are what people say when they describe you to a friend.",
        ],
        bullets: [
          "Feeling 1 (headline energy): ______",
          "Feeling 2 (supporting): ______",
          "Feeling 3 (surprise): ______",
        ],
      },
      {
        heading: "Section 3 — 12 brand voice prompts",
        bullets: [
          "1. When you're excited about something, do you get louder or quieter?",
          "2. What word do you use too much? (Keep it. That's your tell.)",
          "3. Do you use contractions or spell it all out? (Contractions = warmer.)",
          "4. What do you never say, even when everyone else does?",
          "5. What sentence length feels most like you?",
          "6. Do you open with the point or the story?",
          "7. Are your CTAs soft ('grab it') or direct ('buy now')?",
          "8. What emoji do you keep coming back to?",
          "9. Do you use exclamation points sincerely or ironically?",
          "10. What's a metaphor you find yourself using twice?",
          "11. Read your last 5 captions out loud. Do they sound like you?",
          "12. If your brand had a signature sign-off, what would it be?",
        ],
      },
      {
        heading: "Section 4 — Palette + mood board worksheet",
        paragraphs: [
          "Save 12 images that feel like your brand — not that you like, that FEEL like it. Group them into 3 clusters. Pull the 5 colors that repeat most across clusters. That's your palette. One warm, one cool, one neutral, one accent, one deep.",
        ],
      },
      {
        heading: "Section 5 — Offer stack template",
        bullets: [
          "Free tier: [freebie] — the thing you'd give a friend",
          "Starter tier ($9-$19): [starter product] — the tiny yes",
          "Signature tier ($29-$47): [main product] — the thing you're known for",
          "Deep tier ($67+): [bundle or program] — for people who bought once and want more",
        ],
      },
      {
        heading: "Section 6 — One-line positioning generator",
        paragraphs: [
          "Fill in: 'I help [audience] [outcome] without [pain] — through [format].' Example: 'I help creators launch their first digital product without a big audience — through short courses and templates.' Say it out loud. If it makes your shoulders drop, keep it.",
        ],
      },
    ],
    closing:
      "Clarity doesn't come from thinking harder. It comes from writing something down and letting it be wrong for a week. Do these six sections this weekend, then revisit next Sunday. What you cross out matters more than what you keep.",
  },

  "faceless-business-map": {
    subtitle: "Build a brand people love — no face required.",
    intro:
      "Faceless doesn't mean anonymous. It means the brand is the personality, not you. This map walks you through the four decisions that make a faceless brand feel like a person: niche, pillars, voice, and product ladder. Do the whole map in a sitting.",
    sections: [
      {
        heading: "Step 1 — Choose a niche you actually enjoy",
        paragraphs: [
          "Rule: pick a niche where you'd read the top 3 accounts for free. If reading them feels like homework, run. Your consistency will die inside a month.",
        ],
        bullets: [
          "Aesthetic + audience combo: e.g. 'quiet luxury for career switchers'",
          "Format lean: video-first, static-first, or writing-first (pick one)",
          "Buying moment: what's the small purchase this audience already makes?",
        ],
      },
      {
        heading: "Step 2 — Pick three content pillars",
        paragraphs: [
          "Three, not five. Pillars are angles you can produce 20 posts on without repeating yourself.",
        ],
        bullets: [
          "Pillar 1 — teach (walkthroughs, mini-guides, breakdowns)",
          "Pillar 2 — inspire (mood, aesthetic, aspirational reference)",
          "Pillar 3 — relate (small tensions and wins in the niche)",
        ],
      },
      {
        heading: "Step 3 — Voice bank for aesthetic brands",
        bullets: [
          "A recurring greeting ('hi friend', 'good morning', 'welcome back')",
          "A sign-off ('softly, [brand]', 'til soon', 'always')",
          "3 phrases you always use ('quietly', 'gently', 'the calm way')",
          "3 phrases you never use ('crush it', 'grind', 'boss babe')",
          "A tone rule (e.g. 'never all caps, ever')",
        ],
      },
      {
        heading: "Step 4 — Product ladder for faceless creators",
        bullets: [
          "$0 — a free download that shows your aesthetic",
          "$9 — a micro-product (template, prompt pack, checklist)",
          "$27 — a mini course or workbook",
          "$67+ — a bundle or higher-tier system",
        ],
      },
      {
        heading: "Step 5 — Your 30-day launch plan",
        bullets: [
          "Days 1–7: publish 10 posts across your 3 pillars to seed the aesthetic",
          "Days 8–14: soft-drop the freebie in bio, in a story, in one email",
          "Days 15–21: tease the $9 product, share behind-the-scenes",
          "Days 22–28: launch the $9 product to whoever grabbed the freebie",
          "Days 29–30: review — did the aesthetic hold? Was the voice consistent?",
        ],
      },
    ],
    closing:
      "A faceless brand rises on repetition. The look, the voice, the small daily choices — those are the face. Come back to this map every quarter and ask: does everything I posted this month still sound like this brand?",
  },

  "content-strategy-planner": {
    subtitle: "A weekly planner that batches your content in one sitting.",
    intro:
      "This planner is built around a single idea: content should be batched once a week, not created every day. If you're posting from panic, you're leaking energy. Use the sections below to run a Sunday reset, a Monday batch, and a Friday review — that's the whole system.",
    sections: [
      {
        heading: "Sunday reset — 45 minutes",
        bullets: [
          "Skim last week's posts, star the top 2 by saves",
          "Note the one thing that worked, the one thing that flopped",
          "Delete or archive any drafts you won't publish",
          "Refill your idea bank: 5 new prompts pulled from DMs, comments, or your Notes app",
          "Pick your three pillars for the coming week",
        ],
      },
      {
        heading: "Monday batch — 3 hours, once a week",
        paragraphs: [
          "This is the whole week's content. If you don't finish, you post fewer times. That is the point — batching enforces the size of the calendar.",
        ],
        bullets: [
          "3 reels or short videos (one per pillar)",
          "2 pins (design once, resize into 2 formats)",
          "1 long-form (blog post, newsletter, or thread)",
          "5 story frames scheduled for the week",
        ],
      },
      {
        heading: "Wednesday refine — 20 minutes",
        bullets: [
          "Reply to every comment from Mon/Tue posts",
          "Answer any DMs that came in about your products",
          "Note anything that surprised you — good hook, unexpected question",
        ],
      },
      {
        heading: "Friday post-mortem — 25 minutes",
        bullets: [
          "Look at the week's metrics only for 10 minutes, then close the tab",
          "Write one line: 'This week I learned…'",
          "Pick one thing to keep next week, one thing to cut",
          "Do not decide on Friday to change your whole strategy",
        ],
      },
      {
        heading: "Content pillar tracker",
        paragraphs: [
          "Print (or duplicate) a page per week with three columns: Pillar 1, Pillar 2, Pillar 3. Every time you publish, mark a tally under the right column. If a pillar has zero tallies after two weeks, either kill it or force one post next week to test whether it deserves to stay.",
        ],
      },
      {
        heading: "Metrics dashboard — the only 4 numbers that matter",
        bullets: [
          "Reach: are new eyes seeing you? (weekly, not daily)",
          "Saves: is your content worth keeping?",
          "Profile visits: are people curious after a post?",
          "Product page visits from bio: does it convert to interest?",
        ],
      },
    ],
    closing:
      "The planner works because it makes the boring decisions on Sunday so you don't have to make them on Wednesday at 11pm. Try it for four weeks before you decide whether it fits you.",
  },

  "creator-launch-swipes": {
    subtitle: "The exact emails, captions, pins, and DMs I use to launch.",
    intro:
      "This is a swipe file. Steal what fits, rewrite what doesn't, and never send anything word-for-word — the point is to skip the blank-page panic, not to sound like everyone else. Every template here has actually made a sale.",
    sections: [
      {
        heading: "5-email launch sequence",
        bullets: [
          "Email 1 (T-7) — 'A little something I've been building.' No link, no urgency. Just a soft heads-up.",
          "Email 2 (T-3) — 'Here's what's inside.' Bullet list of the actual deliverables + a photo of the cover.",
          "Email 3 (T-0, morning) — 'The doors are open.' One clear button. No paragraphs about your process.",
          "Email 4 (T+2) — 'The three questions I keep getting.' Real objections, real answers.",
          "Email 5 (T+6) — 'Last call.' One soft deadline (bonus, price bump, or actual close).",
        ],
      },
      {
        heading: "10 launch-week captions",
        bullets: [
          "'It's here. [Product name] is in the shop — link in bio.'",
          "'The thing I've been quietly making for 6 weeks. Meet [product].'",
          "'If you've ever [pain], this is for you.'",
          "'The whole point of [product] was to save someone the weekend I lost figuring this out.'",
          "'Behind the scenes of a slow, quiet launch.'",
          "'Not a sales post — a thank you post.'",
          "'What's inside [product], one page at a time.'",
          "'The three FAQs I keep getting about [product].'",
          "'A real review from a real buyer.'",
          "'Last call on [product] — bonus disappears at midnight.'",
        ],
      },
      {
        heading: "Sales page starter (one page, five sections)",
        bullets: [
          "1. Headline: one-line promise (who + outcome)",
          "2. Subhead: the specific pain this ends",
          "3. What's inside: 5 bullets max, each starts with a verb",
          "4. Who it's for + who it's not for (yes, both)",
          "5. Price, guarantee, buy button — repeated at top and bottom",
        ],
      },
      {
        heading: "DM scripts",
        paragraphs: [
          "Reply to interested comment: 'yes! here's the link — [link] — happy to answer anything before you grab it.'",
          "Follow-up 3 days after purchase: 'hi! quick check — did [product] make sense once you opened it? if anything's confusing, tell me and I'll fix it.'",
          "Testimonial request: 'if you have a spare minute and it was helpful, would you send me a one-line reaction? I use them (with your name only if you're ok with it) on the sales page.'",
        ],
      },
      {
        heading: "Sold-out / doors-closed follow-up",
        paragraphs: [
          "'The doors on [product] just closed for this round. Thank you to everyone who grabbed it — I'll DM setup instructions in the next hour. If you missed it, drop your email at [link] and I'll open the waitlist for the next round.'",
        ],
      },
    ],
    closing:
      "Launching gets easier the third time you do it, not the first. Use these swipes for the first launch, rewrite them for the second, and by the third you'll have a voice of your own.",
  },
};
