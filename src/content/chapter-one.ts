export type Block =
  | { t: "p"; text: string }
  | { t: "lead"; text: string }
  | { t: "beats"; lines: string[] }
  | { t: "h3"; text: string; kicker?: string }
  | { t: "quote"; text: string; cite?: string }
  | { t: "checklist"; id: string; title: string; items: string[] }
  | { t: "prompts"; id: string; title: string; fields: string[]; note?: string }
  | { t: "words"; id: string; title: string; words: string[]; note?: string }
  | {
      t: "ba";
      label?: string;
      before: { title: string; caption?: string; items: string[] };
      after: { title: string; caption?: string; items: string[] };
    }
  | { t: "ph"; label: string }
  | { t: "cards"; items: { title: string; text: string }[] }
  | { t: "formula"; lines: string[] }
  | { t: "changed"; title: string; items: string[]; conclusion: string[] }
  | { t: "rating"; id: string; items: { key: string; label: string; text: string }[] }
  | { t: "note"; text: string }
  | { t: "divider" };

export type Section = {
  id: string;
  stage: string;
  eyebrow: string;
  title: string;
  italic?: string;
  tone?: "cream" | "panel" | "plum" | "blush" | "plain";
  blocks: Block[];
};

export const stages = [
  { id: "welcome", label: "Welcome" },
  { id: "foundation", label: "Foundation" },
  { id: "method", label: "The Pretty Method™" },
  { id: "implementation", label: "Implementation" },
  { id: "assessment", label: "Brand Assessment" },
] as const;

export const auditItems = [
  { key: "clarity", label: "Clarity", text: "My audience immediately knows what I do." },
  { key: "consistency", label: "Consistency", text: "My branding looks the same everywhere." },
  { key: "recognition", label: "Recognition", text: "People would recognize my content without seeing my username." },
  { key: "messaging", label: "Messaging", text: "My brand has a clear personality." },
  { key: "confidence", label: "Confidence", text: "I feel proud to send people to my page." },
];

export const sections: Section[] = [
  {
    id: "s1-mirror",
    stage: "welcome",
    eyebrow: "Section One",
    title: "Have you ever looked at someone else's brand and thought…",
    tone: "plain",
    blocks: [
      { t: "quote", text: "Why does hers look so put together while mine still feels all over the place?" },
      {
        t: "beats",
        lines: [
          "Maybe your colors keep changing.",
          "Maybe your Instagram doesn't feel cohesive.",
          "Maybe every time you create a post, it somehow looks different from the last one.",
        ],
      },
      {
        t: "beats",
        lines: [
          "Maybe you've bought templates.",
          "Watched countless YouTube videos.",
          "Saved branding inspiration.",
          "Changed your fonts.",
          "Started over.",
          "Again.",
          "And again.",
        ],
      },
      { t: "lead", text: "Yet somehow… your brand still doesn't feel like you." },
      {
        t: "beats",
        lines: [
          "You know your business has potential.",
          "You know your offer can help people.",
          "But when you look at your own page…",
        ],
      },
      {
        t: "beats",
        lines: [
          "It doesn't feel memorable.",
          "It doesn't feel premium.",
          "And deep down… you know it could be so much better.",
        ],
      },
      { t: "lead", text: "If that's you… you're exactly where you're supposed to be." },
      {
        t: "checklist",
        id: "reflect-today",
        title: "Which statement feels most like you today?",
        items: [
          "My brand changes every month.",
          "I don't know my style.",
          "My content feels inconsistent.",
          "My page doesn't look professional.",
          "I know what I want — but I don't know how to create it.",
        ],
      },
    ],
  },
  {
    id: "s1-truth",
    stage: "welcome",
    eyebrow: "The Truth",
    title: "They weren't prettier because they were more creative.",
    tone: "cream",
    blocks: [
      { t: "p", text: "For the longest time… I thought beautiful brands were created by people who were simply more creative than me." },
      { t: "beats", lines: ["People with better design skills.", "Better taste.", "Better ideas.", "Better equipment."] },
      { t: "p", text: "But I eventually realized something that changed everything." },
      { t: "quote", text: "The brands I admired weren't successful because they were prettier. They were prettier because they were strategic." },
      { t: "beats", lines: ["Every font.", "Every color.", "Every image.", "Every word.", "Every decision had a purpose."] },
      { t: "p", text: "And once I understood that… branding stopped feeling overwhelming. It started feeling repeatable." },
      {
        t: "ba",
        label: "Before & After Transformation #1",
        before: {
          title: "Before",
          caption: "[AI BEFORE IMAGE — Instagram grid]",
          items: [
            "Random Canva templates",
            "Different fonts on every post",
            "No consistent colors",
            "Generic messaging",
            "No visual identity",
            "Easy to scroll past",
          ],
        },
        after: {
          title: "After",
          caption: "[AI AFTER IMAGE — luxury Instagram grid]",
          items: [
            "Cohesive color palette",
            "Consistent typography",
            "Clear brand personality",
            "Premium visuals",
            "Recognizable style",
            "Instantly memorable",
          ],
        },
      },
      { t: "h3", text: "Lesson", kicker: "Take this with you" },
      { t: "beats", lines: ["The difference wasn't talent.", "It wasn't expensive software.", "It wasn't luck."] },
      { t: "lead", text: "It was having a system." },
    ],
  },
  {
    id: "s2-why",
    stage: "foundation",
    eyebrow: "Section Two",
    title: "Why I'm sharing this",
    tone: "panel",
    blocks: [
      { t: "p", text: "There was a time when branding felt like one giant guessing game." },
      { t: "p", text: "I knew I wanted my business to look beautiful. But more importantly… I wanted people to remember it." },
      { t: "beats", lines: ["Because there are thousands of creators online.", "Thousands of businesses.", "Thousands of people selling amazing products."] },
      { t: "quote", text: "Being good isn't always enough. People have to remember you." },
      { t: "p", text: "That realization completely changed the way I approached branding." },
      { t: "beats", lines: ["I stopped chasing trends.", "I stopped copying everyone else.", "I stopped redesigning everything every few weeks."] },
      { t: "p", text: "Instead… I focused on building a brand that felt unmistakably mine. One decision at a time." },
      { t: "p", text: "And that's exactly what you're going to learn throughout this Starter Kit. Not how to copy someone else's brand. But how to uncover your own." },
      {
        t: "prompts",
        id: "mini-remember",
        title: "Mini exercise — complete these sentences",
        fields: [
          "I want people to remember my brand because…",
          "I want my brand to make people feel…",
          "Three words I want someone to describe my brand with…",
        ],
      },
    ],
  },
  {
    id: "s3-overnight",
    stage: "foundation",
    eyebrow: "Section Three",
    title: "Beautiful brands aren't built overnight",
    tone: "plain",
    blocks: [
      { t: "p", text: "When you see a polished brand online… you're seeing the finished version." },
      {
        t: "beats",
        lines: [
          "You're not seeing the months of testing.",
          "The deleted posts.",
          "The redesigned logos.",
          "The color palettes that didn't work.",
          "The confusion.",
          "Or the countless times someone started over.",
        ],
      },
      { t: "p", text: "Every memorable brand has a beginning. Mine did too." },
      { t: "quote", text: "Please don't confuse someone's polished chapter twenty with your chapter one." },
      { t: "p", text: "Your job isn't to become perfect overnight. Your job is simply to become more intentional than you were yesterday." },
      {
        t: "prompts",
        id: "reflect-hardest",
        title: "Reflection",
        fields: ["What part of branding has felt the hardest for you?"],
      },
      { t: "divider" },
      { t: "h3", text: "Meet Emma", kicker: "AI Case Study #1" },
      { t: "ph", label: "[AI-GENERATED CREATOR PORTRAIT — Emma]" },
      { t: "beats", lines: ["Emma had incredible content.", "She posted consistently.", "She showed up every week."] },
      { t: "p", text: "But nothing about her brand stood out. Everything blended together." },
      { t: "p", text: "After simplifying her colors, creating a consistent visual identity, and clarifying her message… people began recognizing her content before they even saw her username." },
      {
        t: "changed",
        title: "What changed?",
        items: ["More posting? No.", "Better camera? No.", "More expensive tools? No."],
        conclusion: [
          "She simply became consistent.",
          "And consistency creates recognition.",
          "Recognition creates trust.",
          "Trust creates growth.",
        ],
      },
    ],
  },
  {
    id: "s3-pause",
    stage: "foundation",
    eyebrow: "End of Part One",
    title: "Before you continue…",
    tone: "cream",
    blocks: [
      { t: "p", text: "Take a moment to look back through your answers." },
      { t: "p", text: "Don't worry if your brand isn't where you want it to be yet. Awareness is the first step toward transformation." },
      { t: "lead", text: "In Part Two, I'll show you the exact three-part method I use to build brands that aren't just beautiful — but unforgettable." },
    ],
  },
  {
    id: "m-intro",
    stage: "method",
    eyebrow: "Part Two",
    title: "The Pretty Method™",
    italic: "The three shifts that turn ordinary brands into unforgettable ones",
    tone: "plum",
    blocks: [
      { t: "p", text: "Before we dive into logos, colors, fonts, or aesthetics… I need you to understand something." },
      { t: "p", text: "The prettiest brands aren't the ones with the nicest Canva templates. They're the brands that know exactly who they are." },
      { t: "beats", lines: ["Pretty isn't decoration.", "Pretty is clarity.", "Pretty is consistency.", "Pretty is strategy."] },
      { t: "quote", text: "Everything changed when I stopped asking, \"How do I make my brand prettier?\" …and started asking, \"How do I make my brand unforgettable?\"" },
      { t: "p", text: "That question changed everything. Because unforgettable brands aren't built by accident. They're built through three intentional shifts." },
      { t: "lead", text: "Let's walk through them together." },
    ],
  },
  {
    id: "m-step1",
    stage: "method",
    eyebrow: "Step One",
    title: "Stop decorating.",
    italic: "Start defining.",
    tone: "plain",
    blocks: [
      { t: "p", text: "One of the biggest mistakes I see… people start designing before they know who they're designing for." },
      { t: "beats", lines: ["They choose colors because they're trending.", "Fonts because they're pretty.", "Templates because someone else used them."] },
      { t: "p", text: "The result? A brand that looks nice… but says nothing." },
      { t: "lead", text: "Before you ever touch Canva… you need clarity." },
      {
        t: "cards",
        items: [
          { title: "Who am I?", text: "The personality behind the brand — not the logo." },
          { title: "Who am I speaking to?", text: "One person. Named, specific, real." },
          { title: "How do I want people to feel?", text: "Emotion is the memory hook." },
          { title: "What do I want to be remembered for?", text: "The one thing that's unmistakably yours." },
        ],
      },
      { t: "quote", text: "Branding isn't about making something beautiful. It's about making someone feel something." },
      {
        t: "ba",
        before: {
          title: "Before",
          caption: "[AI IMAGE PLACEHOLDER]",
          items: ["Random Pinterest inspiration", "Six fonts", "No direction", "Random colors"],
        },
        after: {
          title: "After",
          caption: "[AI IMAGE PLACEHOLDER]",
          items: ["One clear personality", "One message", "One recognizable feeling", "Everything supports the brand"],
        },
      },
      {
        t: "prompts",
        id: "step1-reflect",
        title: "Reflection — finish these sentences",
        fields: [
          "My dream client wants to feel…",
          "When someone lands on my page, I want them to think…",
          "The emotion I want my brand to leave people with is…",
        ],
      },
    ],
  },
  {
    id: "m-step2",
    stage: "method",
    eyebrow: "Step Two",
    title: "Stop copying.",
    italic: "Start creating.",
    tone: "panel",
    blocks: [
      { t: "p", text: "We've all done it. You see another creator. You love her colors. Then someone else has prettier graphics. Someone else has a better bio." },
      { t: "p", text: "Before you know it… your brand becomes a collection of everyone else's ideas." },
      { t: "quote", text: "People don't remember copies. They remember originality." },
      { t: "p", text: "The strongest brands don't try to look like everyone. They double down on what makes them different." },
      { t: "h3", text: "Your Brand DNA", kicker: "Think of your brand like a person" },
      { t: "beats", lines: ["If it walked into a room…", "How would it dress?", "How would it speak?", "How would it make people feel?"] },
      {
        t: "words",
        id: "brand-dna",
        title: "Choose three words",
        words: ["Elegant", "Warm", "Minimal", "Playful", "Calm", "Luxury", "Feminine", "Modern", "Confident", "Soft", "Bold", "Timeless"],
        note: "Those three words become your filter for every design decision you make.",
      },
      {
        t: "ba",
        label: "AI Example",
        before: {
          title: "Brand A",
          caption: "[AI EXAMPLE IMAGE]",
          items: ["Uses trendy colors", "Looks like everyone else", "Easy to forget"],
        },
        after: {
          title: "Brand B",
          caption: "[AI EXAMPLE IMAGE]",
          items: ["Uses intentional colors", "Clear personality", "Instantly recognizable", "People remember it"],
        },
      },
      {
        t: "prompts",
        id: "step2-why",
        title: "Now write why each word matters",
        fields: ["Word 1 — why?", "Word 2 — why?", "Word 3 — why?"],
      },
    ],
  },
  {
    id: "m-step3",
    stage: "method",
    eyebrow: "Step Three",
    title: "Stop starting over.",
    italic: "Start becoming consistent.",
    tone: "plain",
    blocks: [
      { t: "p", text: "This is where most brands fall apart. Not because they're ugly. Because they're inconsistent." },
      { t: "beats", lines: ["Monday… minimal.", "Wednesday… colorful.", "Friday… luxury.", "Sunday… boho."] },
      { t: "p", text: "Every post looks like a different person created it." },
      { t: "quote", text: "Consistency isn't boring. Consistency is what creates recognition." },
      { t: "beats", lines: ["Recognition builds trust.", "Trust builds businesses."] },
      { t: "p", text: "The goal isn't to make every post identical. The goal is to make every post unmistakably yours." },
      {
        t: "ba",
        label: "Before & After",
        before: {
          title: "Before",
          items: ["Different fonts every post", "Different colors every week", "No recognizable layouts", "Different editing styles", "No visual rhythm"],
        },
        after: {
          title: "After",
          items: ["Signature fonts", "Signature palette", "Consistent layouts", "Recognizable covers", "Unified editing", "Brand instantly recognizable"],
        },
      },
      {
        t: "formula",
        lines: [
          "Pretty + Personality = Recognition",
          "Recognition + Consistency = Trust",
          "Trust + Connection = Growth",
        ],
      },
      { t: "p", text: "Growth isn't created by prettier graphics. It's created because people know exactly who you are every time they see you." },
      {
        t: "prompts",
        id: "brand-foundation",
        title: "Interactive exercise — create your Brand Foundation",
        fields: [
          "My Brand Mission",
          "My Brand Promise",
          "My Three Core Values",
          "Three words my brand should always feel like",
        ],
      },
    ],
  },
  {
    id: "m-olivia",
    stage: "method",
    eyebrow: "AI Transformation #2",
    title: "Meet Olivia",
    tone: "cream",
    blocks: [
      { t: "ph", label: "[AI BEFORE & AFTER IMAGE — Olivia's feed]" },
      { t: "h3", text: "Before" },
      { t: "p", text: "Olivia is a wellness coach. She has incredible advice… but every post feels different." },
      { t: "beats", lines: ["One uses muted beige.", "The next uses bright pink.", "One is handwritten.", "The next uses bold sans serif fonts."] },
      { t: "p", text: "Nothing connects. People scroll… and forget." },
      { t: "h3", text: "After" },
      { t: "p", text: "Instead of redesigning everything… Olivia simplified." },
      { t: "beats", lines: ["She chose one visual direction.", "One font pairing.", "One color palette.", "One message."] },
      { t: "p", text: "Now… people recognize her content before reading her username. Her audience knows exactly what to expect. And her brand finally feels like her." },
      {
        t: "changed",
        title: "What actually changed?",
        items: ["Her expertise didn't change.", "Her offer didn't change.", "She didn't buy expensive software."],
        conclusion: ["She simply became intentional.", "That's the difference between creating content… and creating a brand."],
      },
      { t: "h3", text: "Pause & reflect" },
      { t: "p", text: "Before moving on… take a look at your answers. Can you already see where you've been making branding decisions based on trends instead of intention? Can you see where inconsistency has been creating confusion?" },
      { t: "lead", text: "That's okay. Because now… you have a framework. And frameworks create confidence." },
    ],
  },
  {
    id: "i-intro",
    stage: "implementation",
    eyebrow: "Part Three",
    title: "From pretty to unforgettable",
    tone: "plum",
    blocks: [
      { t: "p", text: "Now it's time to bring your brand to life." },
      { t: "p", text: "You've already discovered why most brands struggle. You've started defining who your brand is. Now let's make sure the world sees it." },
      { t: "quote", text: "Branding isn't just what you create. It's what people remember." },
    ],
  },
  {
    id: "i-first",
    stage: "implementation",
    eyebrow: "The First Impression Test",
    title: "Your audience decides in seconds.",
    tone: "plain",
    blocks: [
      { t: "beats", lines: ["Before they read your bio.", "Before they open your website.", "Before they know anything about your offer."] },
      { t: "p", text: "They're already deciding…" },
      {
        t: "cards",
        items: [
          { title: "Does this feel trustworthy?", text: "Signals of care and consistency." },
          { title: "Does this feel professional?", text: "Craft, spacing, restraint." },
          { title: "Does this feel like someone I want to learn from?", text: "Clarity of point of view." },
        ],
      },
      { t: "lead", text: "The goal isn't perfection. The goal is clarity." },
      {
        t: "ba",
        label: "AI Brand Makeover #1",
        before: {
          title: "Before",
          caption: "[AI-GENERATED INSTAGRAM PROFILE — before]",
          items: [
            "Random profile photo",
            "Generic username",
            "Confusing bio",
            "No clear niche",
            "Random highlight covers",
            "No visual consistency",
          ],
        },
        after: {
          title: "After",
          caption: "[AI-GENERATED LUXURY INSTAGRAM PROFILE — after]",
          items: [
            "Clean profile image",
            "Clear positioning",
            "Strong bio",
            "Consistent highlights",
            "Cohesive visual identity",
            "Recognizable color palette",
          ],
        },
      },
      { t: "note", text: "First impression before: \"I don't really know what this account is about.\" First impression after: \"I instantly understand this brand.\"" },
      {
        t: "checklist",
        id: "profile-audit",
        title: "Open your Instagram profile. Answer honestly.",
        items: [
          "Could someone describe my business in one sentence?",
          "Would someone know who I help?",
          "Does my profile feel cohesive?",
          "Does my page feel memorable?",
        ],
      },
      { t: "note", text: "If you answered \"no\" to any of these… don't worry. You're exactly where growth begins." },
    ],
  },
  {
    id: "i-consistency",
    stage: "implementation",
    eyebrow: "The Consistency Test",
    title: "Imagine walking into your favorite coffee shop.",
    tone: "panel",
    blocks: [
      { t: "beats", lines: ["One day it's modern.", "The next day it's rustic.", "The following week it's neon."] },
      { t: "quote", text: "Did I come to the right place?" },
      { t: "p", text: "Brands work the same way." },
      { t: "beats", lines: ["Consistency creates familiarity.", "Familiarity builds trust.", "Trust leads to action."] },
      {
        t: "ba",
        label: "AI Transformation #2",
        before: {
          title: "Before",
          caption: "[AI-GENERATED CANVA CAROUSEL COVERS — before]",
          items: ["Every post looks different", "Different colors", "Different fonts", "Different layouts", "No visual rhythm"],
        },
        after: {
          title: "After",
          caption: "[AI-GENERATED CAROUSEL COVERS — after]",
          items: ["One font family", "One color palette", "One layout style", "One recognizable identity", "Every post feels connected"],
        },
      },
      {
        t: "prompts",
        id: "last-nine",
        title: "Mini exercise — look at your last nine Instagram posts",
        fields: ["Colors:", "Fonts:", "Photography:", "Overall feeling:"],
        note: "If someone removed your username… would people still know the posts belong to you?",
      },
    ],
  },
  {
    id: "i-story",
    stage: "implementation",
    eyebrow: "The Story Test",
    title: "Beautiful brands don't just show products. They tell stories.",
    tone: "plain",
    blocks: [
      { t: "p", text: "Think about the brands you love. You probably don't remember every product they've ever sold. But you remember how they made you feel." },
      { t: "quote", text: "That's what branding does. It creates an emotional memory." },
      {
        t: "prompts",
        id: "story-exercise",
        title: "Exercise — finish these sentences",
        fields: [
          "I want my audience to feel…",
          "Every time someone visits my page, I want them to think…",
          "The story my brand tells is…",
        ],
      },
      {
        t: "ba",
        label: "AI Brand Makeover #3",
        before: {
          title: "Before",
          caption: "[AI-GENERATED HOMEPAGE — before]",
          items: ["Generic headline", "No emotion", "No personality", "Weak messaging", "Looks like everyone else"],
        },
        after: {
          title: "After",
          caption: "[AI-GENERATED HOMEPAGE — after]",
          items: ["Clear promise", "Beautiful typography", "Intentional messaging", "Luxury spacing", "Strong emotional positioning"],
        },
      },
      { t: "p", text: "Now visitors immediately understand the value." },
      { t: "h3", text: "What changed?" },
      { t: "p", text: "The website didn't become more complicated. It became more intentional." },
      { t: "beats", lines: ["Every headline.", "Every image.", "Every section.", "Every decision.", "Supported one clear story."] },
    ],
  },
  {
    id: "i-audit",
    stage: "implementation",
    eyebrow: "Brand Audit",
    title: "Let's audit your brand together.",
    tone: "cream",
    blocks: [
      { t: "note", text: "Rate yourself from 1–5. Your answers quietly build your Brand Assessment at the end of this chapter." },
      { t: "rating", id: "audit", items: auditItems },
      { t: "divider" },
      { t: "h3", text: "Meet Ava", kicker: "AI Case Study" },
      { t: "ph", label: "[AI CASE STUDY IMAGE — Ava]" },
      { t: "p", text: "Ava sold digital products. Her products were good. But her brand felt invisible." },
      { t: "beats", lines: ["Every week she changed something.", "A new logo.", "A new color palette.", "A different Instagram aesthetic."] },
      { t: "p", text: "Nothing stayed consistent long enough to become recognizable." },
      { t: "p", text: "So instead of redesigning everything… she simplified." },
      { t: "beats", lines: ["She chose one visual direction.", "One message.", "One audience.", "One experience."] },
      { t: "p", text: "Within weeks… creating content became easier. Her brand felt cohesive. And people started recognizing her content before they even read her name." },
      { t: "quote", text: "Consistency isn't restrictive. It's freeing." },
      { t: "p", text: "When you stop reinventing your brand every week… you finally have the space to grow it." },
    ],
  },
  {
    id: "i-blueprint",
    stage: "implementation",
    eyebrow: "Your Brand Blueprint",
    title: "Now it's your turn.",
    tone: "panel",
    blocks: [
      {
        t: "prompts",
        id: "blueprint",
        title: "Complete the prompts below",
        fields: [
          "My Brand Promise",
          "My Dream Client",
          "My Core Message",
          "Three words my brand should always feel like",
          "One thing I want people to remember",
          "My biggest branding weakness today",
          "My biggest opportunity",
        ],
      },
      { t: "h3", text: "Before you continue…" },
      { t: "p", text: "By now you've probably realized something. Building a beautiful brand isn't about collecting more inspiration. It's about making intentional decisions and repeating them consistently." },
      { t: "beats", lines: ["You've laid the foundation.", "You've audited your brand.", "You've seen what transformation can look like."] },
      { t: "lead", text: "Now it's time to go deeper." },
      { t: "p", text: "In the final part of this experience, you'll discover how to overcome the biggest branding beliefs holding you back, complete your personalized Brand Assessment, and uncover the next step in building a brand that's not just pretty — but unforgettable." },
    ],
  },
  {
    id: "i-sarah",
    stage: "implementation",
    eyebrow: "Your story doesn't end here…",
    title: "Meet Sarah",
    tone: "plain",
    blocks: [
      { t: "p", text: "If you've made it this far… you've already done something most people never do. You've stopped collecting random branding advice. And you've started building a real foundation." },
      { t: "quote", text: "But reading this framework won't change your brand. Applying it will." },
      { t: "ph", label: "[STUDENT STORY IMAGE — Sarah]" },
      { t: "p", text: "Sarah came to me feeling frustrated. She had a business she believed in. But every time she opened Instagram… she questioned everything." },
      { t: "beats", lines: ["Her colors.", "Her fonts.", "Her content.", "Her message."] },
      { t: "p", text: "Nothing felt consistent. Nothing felt memorable. She wasn't lacking creativity. She was missing a system." },
      { t: "p", text: "So we simplified. Instead of redesigning everything again… we clarified her message. Built one visual direction. Created a repeatable brand system." },
      {
        t: "cards",
        items: [
          { title: "✓ Clarity", text: "She knows exactly what her brand stands for." },
          { title: "✓ Ease", text: "Creating content feels easier." },
          { title: "✓ Credibility", text: "Her business finally looks as professional as the value she offers." },
        ],
      },
      { t: "lead", text: "The biggest transformation wasn't her feed. It was her confidence." },
      { t: "note", text: "Replace this story with a real client transformation as your business grows." },
    ],
  },
  {
    id: "i-emily",
    stage: "implementation",
    eyebrow: "Someone is starting today…",
    title: "Meet Emily",
    tone: "cream",
    blocks: [
      { t: "p", text: "Emily isn't where Sarah is yet. She's just getting started." },
      { t: "p", text: "She came to me because she was tired of second-guessing every branding decision. She knew her business had potential… she just didn't know how to bring it to life." },
      {
        t: "cards",
        items: [
          { title: "First", text: "We're uncovering her brand personality." },
          { title: "Next", text: "We'll build a visual identity around it." },
          { title: "Then", text: "We'll create a consistent experience people instantly recognize." },
        ],
      },
      { t: "p", text: "She's only at the beginning of her journey. But for the first time… she's building with intention instead of guessing." },
      { t: "lead", text: "Maybe today… that's exactly where you are too." },
    ],
  },
  {
    id: "i-mission",
    stage: "implementation",
    eyebrow: "My Mission",
    title: "Every woman deserves a brand she's proud to share.",
    tone: "plum",
    blocks: [
      { t: "p", text: "Her Story Unfolding was created because I believe every woman deserves a brand she's proud to share." },
      { t: "beats", lines: ["Not one she constantly changes.", "Not one she hides behind.", "Not one she keeps comparing to everyone else's."] },
      { t: "beats", lines: ["A brand that feels authentic.", "Beautiful.", "Strategic.", "And unforgettable."] },
      { t: "p", text: "Because when your brand finally feels aligned… everything else becomes easier." },
      { t: "beats", lines: ["Creating content.", "Growing your audience.", "Showing up with confidence.", "Selling your offers."] },
      { t: "lead", text: "It all starts with the story your brand tells." },
    ],
  },
  {
    id: "i-beliefs",
    stage: "implementation",
    eyebrow: "Let's replace a few beliefs…",
    title: "Maybe you've been telling yourself…",
    tone: "panel",
    blocks: [
      {
        t: "cards",
        items: [
          { title: "\"I'm just not creative enough.\"", text: "You don't need to be. You need a framework." },
          { title: "\"I need expensive branding.\"", text: "You don't. You need intentional branding." },
          { title: "\"I need to figure everything out before I start.\"", text: "You don't. Clarity comes from building. Not waiting." },
          { title: "\"I'm too late.\"", text: "You're not. The brands people remember tomorrow are the brands someone decides to build today." },
        ],
      },
      { t: "h3", text: "Here's the truth…" },
      { t: "quote", text: "If nothing changes… nothing changes." },
      {
        t: "beats",
        lines: [
          "If you keep changing your colors every month… you'll keep feeling disconnected from your brand.",
          "If you keep copying everyone else… people won't remember you.",
          "If you keep waiting until everything feels perfect… you'll still be waiting a year from now.",
        ],
      },
      { t: "lead", text: "The life you're dreaming about is built by the decisions you make today. Not someday." },
      { t: "h3", text: "The brutal truth" },
      { t: "p", text: "Most brands don't fail because the business wasn't good enough. They fail because nobody remembers them." },
      { t: "p", text: "Not because the owner wasn't talented. Because they never stayed consistent long enough to become recognizable." },
      { t: "lead", text: "Don't let your business become another forgotten brand." },
    ],
  },
];
