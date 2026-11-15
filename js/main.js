/* =====================================================================
   EDIT ME: your story lives in this list. One object per chapter.
   Each chapter has a title, the weeks it covers, what you learned,
   and the prompts you want to showcase.
   ===================================================================== */
const CHAPTERS = [
  { title:"First Contact", weeks:"Before PDC10", hue:"--violet", shape:"knot",
    story:"Before PDC10, I used ChatGPT and Gemini as a shortcut. I asked AI to rewrite AI-generated text \"based on my writing pattern\" without ever describing that pattern. I added follow-ups like \"not cliche\" and crammed a task plus three questions into one message. The answers came back long, generic, or built on guesses.",
    learned:"When I left details out, the AI filled the gaps with its own assumptions. Most of my bad answers started with my prompts.",
    stats:["Vague requests","Missing context","Answers built on guesses"],
    prompts:[
      { bot:"ChatGPT", shots:["before-ai-paragraph-edit"],
        prompt:`based on my writing patten, please edit this paragraph created by AI

In the Philippines, this regional crisis is further intensified by local conditions such as severe traffic congestion, the prevalence of older, high-emission public utility vehicles like traditional jeepneys, and the informal burning of solid waste. [...]`,
        result:"ChatGPT simplified some wording, for example \"this problem becomes more evident due to heavy traffic congestion\". It had no idea what my writing pattern was, so the result was still generic.",
        takeaway:"I asked AI to make AI writing sound like me without telling it how I write." },
      { bot:"ChatGPT", shots:["before-improve-prompt"],
        prompt:`I want it to be sound professional and not defensive, but by being professional we should try to limit to simple adjectives, better to limit to 1-2 examples only because it makes it look like flooding of unnecessary words

improve prompt`,
        result:"ChatGPT turned my description into a clean instruction: \"Write in a professional and academic tone using clear and concise language. Avoid defensive, emotional, or overly persuasive wording… Limit examples to one or two highly relevant cases.\"",
        takeaway:"I knew what I wanted but not how to say it. The AI wrote a better prompt than I did." },
      { bot:"Gemini", shots:["before-not-cliche"],
        prompt:"more ideas please, not cliche",
        result:"Gemini had to guess what I counted as cliché. It ruled out screen-time trackers and app blockers on its own, then pitched four \"unconventional\" ideas for our hackathon.",
        takeaway:"\"Not cliché\" means nothing unless I say what I've already rejected and why." },
      { bot:"Gemini", shots:["before-multiple-questions"],
        prompt:`We created the presentation by following the task. However we didn't create the step 3 yet because we don't know where to integrate it in the presentation, help us what to put ther. Moreover, there are questions that we should answer but we don't know how to integrate it to the presentation, help us answer them.

Task
Select a feature (e.g., "Add a dark mode toggle").
Break the feature's development into tasks that fit the Unified Process phases.
Describe how DevOps tools or practices (e.g., CI/CD, automated testing, monitoring) could be used in each phase.

Questions
How does the Unified Process help in streamlining development and operations?
Which DevOps tools or practices were most useful in the process?
How would you adapt the process for a small vs. a large-scale project?`,
        result:"Gemini returned one long guide covering Step 3, all three reflection questions, and how to fit everything into our slides.",
        takeaway:"Stacking a task, three questions and an integration request into one prompt gave me one huge answer that was hard to check." },
      { bot:"Gemini", shots:["before-hit-or-miss"],
        prompt:"I want to create a webapp for our student activity tracker with atleast 600 users. If we deploy the webapp, where can we deploy it and how much expenses should we expect if we will utilize it for a whole year",
        result:"Without knowing our stack, Gemini guessed. It suggested a baseline of $60–$200 a year, with options from $0 to $300 depending on the architecture.",
        takeaway:"No tech stack, no budget and no requirements meant the answer was hit or miss." }
    ] },

  { title:"Testing the Machine", weeks:"Aug 5 · Lab Exercise #2", hue:"--amber", shape:"octa",
    story:"PDC10 started by testing AI instead of trusting it. In Lab Exercise #2, AI Capability and Limitation Analysis, I gave ChatGPT four tasks: explain, rewrite, summarize and structure. Then I tried to make it fail with an ambiguous request, a false premise about who created Java, academic references to verify, and memory tests across chats.",
    learned:"AI is strong at explaining and structuring. It also assumes details, misses points in summaries, and can produce a wrong DOI that looks completely real. A human still has to verify.",
    stats:["Parts A–E","4 capability tests","1 wrong DOI caught"],
    prompts:[
      { bot:"ChatGPT", shots:["lab2-ml-analogy"],
        prompt:"Explain machine learning using an analogy that a 12-year-old could understand. Limit your explanation to 150 words.",
        result:"It used a puppy learning to fetch for treats, which is easy for a 12-year-old to follow. It stayed under the limit at about 130 words.",
        takeaway:"A clear audience plus a hard limit gave a focused answer." },
      { bot:"ChatGPT", shots:["lab2-professional-rewrite"],
        prompt:"Rewrite the following message professionally: \"hey prof i cant attend tomorrow because i got something important to do.\"",
        result:"The grammar and tone improved a lot, but it added \"I apologize for the inconvenience\". That line wasn't in my message.",
        takeaway:"When a prompt leaves room, AI adds details I never gave it." },
      { bot:"ChatGPT", summary:true, shots:["lab2-reference-check"],
        prompt:"Asked ChatGPT for three academic sources on conversational AI, then checked each title, author list and DOI on Google Scholar.",
        result:"All three papers exist, but the third one's DOI was wrong. The real one is 10.48550/arXiv.2205.06907.",
        takeaway:"\"Looks factual\" is not the same as verified. I check every DOI now." }
    ] },

  { title:"The Anatomy of a Prompt", weeks:"During PDC10 · Frameworks", hue:"--mint", shape:"cubes",
    story:"Next I learned that a prompt has parts. For one assignment I wrote the same request in seven frameworks: RTCF, COSTAR, RISEN, CRAFT, RACE, TRACE and CRISPE. The request was to explain subnetting to college students in two paragraphs. I also studied zero-shot, one-shot and few-shot prompting.",
    learned:"Each framework names the same pieces in a different order: who the AI is, what to do, who it's for, how to format it, and the limit. Showing examples teaches a format faster than describing it.",
    stats:["7 frameworks","1 task","Zero / one / few-shot"],
    prompts:[
      { bot:"Assignment", shots:["frameworks-rtcf-costar"],
        prompt:`1. RTCF
Role: You are a teacher.
Task: To explain the concept of subnetting.
Context: You will explain the topic to College Students.
Format: It should be professionally written yet conversational tone.
Constraint: Written into 2 paragraphs only`,
        result:"The first of seven versions. RTCF covers the essentials in five lines: role, task, context, format and constraint.",
        takeaway:"Five labeled lines already beat every prompt in my First Contact chapter." },
      { bot:"Assignment", shots:["frameworks-race-crispe"],
        prompt:`5. RACE
Role: You are a teacher.
Action: Explain the concept of subnetting.
Context: The explanation is intended for college students.
Expectation: Write in a professional yet conversational tone using exactly 2 paragraphs.

7. CRISPE
Capacity: You are a teacher.
Request: Explain the concept of subnetting.
Insight: The explanation is intended for college students.
Style: Write in a professional yet conversational tone.
Presentation: The response should consist of 2 paragraphs only.
Execution: Ensure the explanation is clear and concise.`,
        result:"RACE packs the same request into four parts. CRISPE splits it into six and adds an execution check. I later used RACE for real in the Prompt Vault.",
        takeaway:"Choosing a framework is choosing how much structure the task needs." },
      { bot:"ChatGPT", summary:true, shots:["frameworks-few-shot"],
        prompt:"Asked ChatGPT to explain few-shot prompting and compare it with zero-shot and one-shot prompting.",
        result:"Zero-shot gives only the instruction. One-shot adds one example, and few-shot adds several. Few-shot works best when the output needs a consistent format or follows rules that are easier to show than explain.",
        takeaway:"The examples in a prompt are instructions too." }
    ] },

  { title:"The Broken Bot Labyrinth", weeks:"Aug 28 · Game 1", hue:"--rose", shape:"dodeca",
    story:"Our first PDC10 game. As Team DreamTeam (BSIT-3A), with Ralph Rainer Lacanlale and Riejed Aniko Macatula, I repaired a broken campus chatbot one level at a time. Every level had a bad bot reply to fix, and every fix earned a key: Intent, Slot, Branch, Confirmation, Recovery and Safety. Each word we typed cost tokens from a 1,200-token wallet. The final boss was a transferee who couldn't log in, wanted to be enrolled, and offered the bot their password.",
    learned:"A system prompt is conversation design. Find the intent, ask only for what is missing, confirm before acting, never touch credentials, and escalate anything the bot has no authority to do.",
    stats:["6/6 keys","Wallet 960 / 1,200","Final boss passed"],
    prompts:[
      { bot:"ChatGPT",
        shots:["labyrinth-level1-brief", "labyrinth-level1-accepted"],
        prompt:"REPAIR PROMPT: Acknowledge the access problem without assuming its cause. Never request passwords, OTPs, or unnecessary personal data. Ask exactly one brief question that distinguishes forgotten credentials, a specific error message, or an outage affecting others.",
        result:"Level 1 · REPAIR ACCEPTED. It protects credentials, avoids assuming the cause, and asks one focused question that covers all three cases. INTENT KEY acquired.",
        takeaway:"A three-sentence rule set fixed a bot that was asking students for their password." },
      { bot:"ChatGPT",
        shots:["labyrinth-level2-prompt"],
        prompt:"SLOT REPAIR PROMPT: Collect only information needed for the next decision. Never request passwords, OTPs, home addresses, social credentials, or unrelated IDs. First determine whether one device or multiple users are affected. If unclear, ask one focused query. For one device, collect relevant device/error details and give basic troubleshooting. Collect relevant location/scope details and route to an outage report/escalation for multiple users. Keep the dialogue less or equal to 6 turns.",
        result:"Level 2 · Passed. The bot now branches on the scope of the problem: one device gets troubleshooting, many users get escalated. SLOT KEY acquired.",
        takeaway:"Ask only for what the next decision needs." },
      { bot:"ChatGPT",
        shots:["labyrinth-final-boss", "labyrinth-final-accepted", "labyrinth-ledger"],
        prompt:`FINAL REPAIR PROMPT:

You are a concise university enrollment assistant. Identify the user's intent(s) and resolve each through the appropriate branch; preserve context and never guess.

- Never request, accept, store, or use passwords, MFA/recovery codes, or other credentials. If offered, reject them and direct the student to official account recovery.
- First determine whether the need is account recovery, enrollment, or both. Ask only the minimum missing information, one focused question at a time.
- Recovery: provide the official self-service route when known; if unavailable or unsuccessful, escalate to authorized IT/help desk support.
- Enrollment: verify the minimum required details and whether you actually have the capability/authority to enroll. If access, permissions, prerequisites, holds, approvals, or human authorization are required, do not bypass them; route to the appropriate university office.
- Never claim an action was completed unless it actually succeeded.
- Before any consequential action, state exactly what will happen and obtain explicit confirmation.
- Escalate whenever identity verification, account ownership, technical intervention, policy exceptions, overrides, or authorization exceeds your capabilities.
- Keep dialogue concise and branch conditionally: resolve what is possible, route what is not, and retain all relevant context.`,
        result:"FINAL REPAIR ACCEPTED. All six mechanics were combined into one prompt, and it stopped the bot from claiming an enrollment or recovery it never performed. Final boss defeated.",
        takeaway:"Telling a bot what it must never do matters as much as telling it what to do." }
    ] },

  { title:"The Prompt Vault", weeks:"Sep 4 · Game 2", hue:"--cyan", shape:"portal",
    story:"Six locks, one exit and a 1,500-token wallet. Each lock tested a prompting technique: zero-shot, few-shot, role prompting and more. Every lock we cleared released a letter. The Master Vault asked for a campus IT triage assistant built on one named framework, tested against four hidden cases.",
    learned:"Zero-shot works when the rules are clear. Few-shot works when the format matters. A named framework plus strict output rules makes a bot predictable, and shorter prompts left more tokens in the wallet.",
    stats:["6/6 locks","Boss beaten on attempt 1","872 tokens left","Exit code: PROMPT"],
    prompts:[
      { bot:"ChatGPT",
        shots:["vault-lock1-brief", "vault-lock1-passed"],
        prompt:`Classify each campus support message as exactly between the folllowing category: ACCESS, NETWORK, HARDWARE, OTHER

Output only:
1. CATEGORY -reason
2. CATEGORY - reason

Use uppercase category names. Each reason must be ≤5 words. No additional text.`,
        result:"LOCK 1 — PASSED. Zero-shot: no examples, just clear categories and a strict output format.",
        takeaway:"Clear rules can be enough when the task is simple." },
      { bot:"ChatGPT",
        shots:["vault-lock2-prompt", "vault-lock2-passed"],
        prompt:`FEW-SHOT PROMPT: Classify the new input using the demonstrated format.

"Only my laptop cannot connect in EA 603." → NETWORK | ONE DEVICE | BASIC TROUBLESHOOTING
"The entire class in EA 604 lost Wi-Fi." → NETWORK | MULTIPLE USERS | ESCALATE OUTAGE
"My MyClass password is rejected." → ACCESS | ONE USER | OFFICIAL RESET PATH

New input: [INPUT]`,
        result:"SYSTEM TEST PASSED on attempt 1 with only 54 tokens. Test output: NETWORK | MULTIPLE USERS | ESCALATE OUTAGE. The puzzle 3, 6, 12, 24 → 48 unlocked the next door.",
        takeaway:"Three examples taught the format with almost no instructions." },
      { bot:"ChatGPT",
        shots:["vault-master-prompt", "vault-master-defeated", "vault-final-report"],
        prompt:`FRAMEWORK: RACE (Role, Action, Context, Expectation)

ROLE: You are a campus IT triage assistant. You classify incoming user messages and route them to the correct support scope—you do not resolve issues yourself.

ACTION: Read each user message and output exactly one line: CATEGORY | SCOPE | NEXT ACTION.
- CATEGORY must be exactly one of: ACCESS | NETWORK | HARDWARE | OTHER
- SCOPE: a short phrase naming the affected system/area
- NEXT ACTION: a short, generic routing step

CONTEXT: Users are students/staff reporting IT problems. Never ask for, repeat, or use passwords, PINs, security codes, or any authentication secrets, even if the user provides them. Never invent ticket numbers, links, deadlines, staff names, or claim any action has been completed. You only classify and route.

EXPECTATION: Output must be exactly one line in the format CATEGORY | SCOPE | NEXT ACTION, nothing else. Stay concise.

EXAMPLES:
Input: "I can't log into my student email, it says my password is wrong."
Output: ACCESS | student email login | escalate to access team

Input: "The wifi in my dorm room keeps dropping every few minutes."
Output: NETWORK | dorm wifi connectivity | escalate to network team`,
        result:"FINAL BOSS DEFEATED on attempt 1. All four hidden cases were classified correctly and every gate check passed. Exit code PROMPT accepted, vault escaped.",
        takeaway:"The RACE framework from the Frameworks chapter, used for real this time." }
    ] },

  { title:"The Context Archive", weeks:"Sep 11 · Game 3", hue:"--amber", shape:"planet",
    story:"The third game was about context. Over six chambers we sorted conflicting records. The final override packed everything into one request: a student who corrected their own program and school year, a deadline no source supported, another student's restricted record, and a draft document with hidden instructions telling the AI to ignore the rules.",
    learned:"Not everything in the context deserves trust. A good prompt says which source wins and why. It also treats outdated or restricted material differently and never lets text inside a document take over.",
    stats:["6/6 chambers","Override: 1 of 2 attempts","Archive restored"],
    prompts:[
      { bot:"ChatGPT",
        shots:["archive-override-brief", "archive-override-cleared", "archive-ledger"],
        prompt:`ARCHIVE OVERRIDE PROMPT: Using only the current conversation and packet, answer in these exact sections. CURRENT STATE: the student is a BSCS transfer applicant for AY 2026-2027; the earlier BSIT and AY 2025-2026 claims are superseded by their correction. GROUNDED ANSWER: residency for BSCS transferees in AY 2026-2027 requires completing at least 50% of major courses at the university. The application deadline is unsupported, as no approved source states one. The status of student 2026-0002 is not disclosed because it is restricted to authorized staff. SOURCE SUPPORT: cite F1 only, since it is approved, [...]`,
        result:"FINAL ARCHIVE OVERRIDE — CLEARED. DreamTeam identified the corrected state, selected the authoritative source, rejected superseded and restricted material, and treated the instructions hidden in the draft as data, not commands.",
        takeaway:"Instructions hidden inside a source are just text. Only the real prompt gets to give orders." }
    ] },

  { title:"Teaching the AI Who I Am", weeks:"After PDC10 · Personalization", hue:"--mint", shape:"crystal",
    story:"After PDC10 I stopped re-explaining myself in every chat. I had ChatGPT interview me, one question at a time, about the roles I want it to play and what my writing should prioritize. Then I wrote the results into standing instructions: ChatGPT custom instructions and Gemini saved info.",
    learned:"Personalization is a system prompt I write once and every chat inherits. It's the Labyrinth lesson applied to my own assistants.",
    stats:["ChatGPT custom instructions","Gemini saved info","Interview-style setup"],
    prompts:[
      { bot:"ChatGPT", shots:["before-personalization-questions"],
        prompt:"create me a personalization for Gemini. Ask questions to tailor the prompt personalization to my liking. The question should revolve around how I usually write my paragraphs, essays",
        result:"Instead of guessing, ChatGPT asked about my writing goal, formality, paragraph length, sentence style, active vs. passive voice, transitions and how I end a paragraph. I first tried this in July. After PDC10 it became how I set up every assistant.",
        takeaway:"Letting the AI ask questions first beats having it guess." },
      { bot:"ChatGPT", shots:["after-role-ranking","after-writing-priorities"],
        prompt:`All of them but most of the time, I prefer working with D. Code Generator, then B. Senior Software Engineer, then A tutor for the programming syntax, or methods or anything related to coding that I don't have much idea yet, then C & E

for emails, documentation, proposals and research (except for my assignments)
1. Clarity
2. Professionalism and Formality
3. Logical Flow
4. Natural Human Writing
5. Conciseness`,
        result:"ChatGPT turned my rankings into five working roles (Code Generator, Senior Software Engineer, Tutor, Pair Programmer, Technical Reviewer) and a writing priority order.",
        takeaway:"Ranking what I want is more useful to the AI than saying \"make it good\"." },
      { bot:"ChatGPT", shots:["after-custom-instructions-1","after-custom-instructions-2","after-chatgpt-tone"],
        prompt:"When I present a new project, first compare it with my previous projects, identify reusable architectures, features, research methodologies, and proposal components, then recommend how to adapt them instead of creating an entirely new solution. If there are opportunities to improve on previous designs, explain the trade-offs and propose a better architecture.",
        result:"Saved as part of my ChatGPT custom instructions, together with my main uses, career goals and default stack (PHP, JavaScript, TypeScript, Python, Laravel, Next.js, PostgreSQL). Base tone is set to Professional, with fewer emoji and lists.",
        takeaway:"Context I give once applies to every new chat." },
      { bot:"Gemini", shots:["after-gemini-saved-info"],
        prompt:"Before presenting any solution, indicate your confidence level in the diagnosis. If the diagnosis is strongly supported by the available evidence, state that your confidence is high. If the evidence suggests a likely cause but additional verification may be necessary, state that your confidence is medium. If the available information is insufficient to reach a reliable conclusion, state that your confidence is low and continue gathering context instead of proposing speculative fixes. My role is to act as a senior software engineer conducting a structured debugging investigation. I need to focus on understanding the problem before recommending solutions. If sufficient context is not available, I need to ask questions and gather evidence rather than making assumptions. The objective is to diagnose first, prescribe second, and ensure that every recommendation is supported by clear reasoning and relevant evidence.",
        result:"Saved in Gemini as a standing rule, with a second rule: propose a fix only after a probable root cause is found, and justify every change.",
        takeaway:"I now tell the AI what to do when it isn't sure, not just what to do." }
    ] },

  { title:"Prompting with Purpose", weeks:"After PDC10 · Nov 2026", hue:"--violet", shape:"core",
    story:"These are my prompts now. I start with the real situation and numbers, name who the audience is, set the length and focus, and say what to skip. When I need a specific shape, I give the AI a template to fill. I built this website the same way, one focused request at a time.",
    learned:"I treat a prompt as a brief. I give context first, then the goal, the constraints and the format, and refine with follow-ups instead of starting over.",
    stats:["Context first","Templates","Iterative briefs"],
    prompts:[
      { bot:"ChatGPT", shots:["after-context-first","after-business-background"],
        prompt:"How to increase sales and revenue for our facebook page of our store, it already has 10k followers but doesn't have high engagements, how to properly promote our store even without the facebook ads.",
        result:"It diagnosed before advising: low reach, good reach with low engagement, or good engagement with few sales. It treated the page as an organic sales funnel. The follow-up weekly plan for Ballerina PHL reused the business profile I had shared (mixed footwear, ₱701–₱1,500).",
        takeaway:"Real numbers and constraints got me a diagnosis instead of generic tips." },
      { bot:"ChatGPT", shots:["after-pitch-script"],
        prompt:`These are our slide pitch deck, help me create a scrip wherein these slides were merged based on what you think is the most efficient way to present them in chronological order. Emphasize how it works and benefits.

Make sure the script is divided into 6 and these 6 are as if are people contributing in different ways (meaning each have role that is significant to the project that will highlight our team and capability). The script should be convincing as if it's a marketing but at the same time having the same degree of formality since we're presenting it to technical people in the defense industry. We want the pitch to be 10-15 minutes, do not spend too much script on the costing and the tech stack, focus more on the first parts of the presentation that will hook the judges to listen to our topic.`,
        result:"ChatGPT reviewed both SOVRA decks and merged them into one story: a real AFP problem, why current UAV systems are vulnerable, how SOVRA detects and responds, and what the AFP gains.",
        takeaway:"Audience, length, structure, tone and what to skip, all in one brief." },
      { bot:"ChatGPT", shots:["after-one-shot"],
        prompt:`paragraph format on the specific instruction, follow this format:
Revise the study notes by improving [identify the exact weakness]. Preserve the first version. Create Version 2, then report what changed and how you verified it.`,
        result:"It filled my template exactly: \"Revise the study notes by improving the accuracy and traceability of lesson connections… Preserve Version 1. Create Version 2, then report what changed and how you verified it.\"",
        takeaway:"One-shot prompting outside the classroom: give the shape, get the shape." },
      { bot:"Claude",
        prompt:"Create me a 3D Website that will showcase my prompts I did on AI Chatbots throughout the semester on PDC10 Subject. Make the concept of the website Sci-Fi Glassmorphism, then make it as if there's a story we follow from the things that I have learned throughout the semester. For now let's build a template that contains placeholder so that I can see what would it look like to have a 3D Interactive",
        result:"This site. It started as a template with placeholders. Follow-up prompts added the rocket, the curving flight path, the jump gates, and the landing at the final destination.",
        takeaway:"Start with a clear brief, then steer with small, specific follow-ups." }
    ] }
];

/* ---------- Build chapter markup ---------- */
const esc = s => String(s).replace(/[&<>"]/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
const pad = n => String(n).padStart(2,"0");
document.getElementById("chapters").innerHTML = CHAPTERS.map((c,i) => {
  const n = i+1, side = n % 2 ? "right" : "left";
  return `<section class="scene scene--${side}" id="chapter-${n}" data-hue="${c.hue}" style="--hue:var(${c.hue})">
    <div class="scene__inner"><div class="panel">
      <div class="eyebrow"><b>Sector ${pad(n)}</b><i>${esc(c.weeks)}</i></div>
      <h2>${esc(c.title)}</h2>
      <p class="lede">${esc(c.story)}</p>
      ${c.stats ? `<ul class="readout">${c.stats.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
      <div class="learned"><span class="label">What I learned</span><p>${esc(c.learned)}</p></div>
      <div class="cards">${c.prompts.map((p,j) => `
        <button class="card" type="button" id="card-${n}-${j+1}" aria-pressed="false">
          <span class="card__inner">
            <span class="face">
              <span class="face__top"><b>Prompt ${n}.${j+1}</b><span class="chips">${p.summary ? `<span class="chip">Summary</span>` : ""}<span class="chip">${esc(p.bot)}</span></span></span>
              <span class="prompt${p.placeholder ? " is-ph" : ""}">${esc(p.prompt)}</span>
              <small>Tap to see the result ↻</small>
            </span>
            <span class="face face--back">
              <span class="face__top"><b>Result ${n}.${j+1}</b><span class="chip">${esc(p.bot)}</span></span>
              <span class="body${p.placeholder && p.result.startsWith("[") ? " is-ph" : ""}">${esc(p.result)}</span>
              <span class="body"><span class="label">Takeaway</span>${esc(p.takeaway)}</span>
              <small>Tap to go back ↻</small>
            </span>
          </span>
        </button>${p.shots ? `<div class="shots">${p.shots.map((s,k) => `<a class="shot" href="screenshots/${s}.webp" data-title="${esc(c.title)} · Prompt ${n}.${j+1}">View screenshot${p.shots.length > 1 ? " " + (k+1) : ""} ↗</a>`).join("")}</div>` : ""}`).join("")}
      </div>
    </div></div>
  </section>`;
}).join("");

/* ---------- Waypoints (hero + chapters + debrief) ---------- */
const scenes = [...document.querySelectorAll(".scene")];
const WAY = [{title:"Launch", weeks:"Start", hue:"--cyan", shape:"core"},
             ...CHAPTERS,
             {title:"Final Destination", weeks:"Complete", hue:"--cyan", shape:"home"}];
const rail = document.getElementById("rail");
rail.innerHTML = scenes.map((s,i) => `<li><a href="#${s.id}"><span>${pad(i)} ${esc(WAY[i].title)}</span></a></li>`).join("");
const railLinks = [...rail.querySelectorAll("a")];
document.querySelector("#debrief .eyebrow b").textContent = "Sector " + pad(WAY.length - 1);

/* ---------- Cards: flip + tilt ---------- */
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
document.querySelectorAll(".card").forEach(card => {
  const inner = card.querySelector(".card__inner");
  card.addEventListener("click", () => card.setAttribute("aria-pressed", card.getAttribute("aria-pressed") !== "true"));
  if (reduce) return;
  card.addEventListener("pointermove", e => {
    if (e.pointerType === "touch") return;
    const r = card.getBoundingClientRect();
    inner.style.setProperty("--ry", (((e.clientX - r.left) / r.width - .5) * 10).toFixed(2) + "deg");
    inner.style.setProperty("--rx", (((e.clientY - r.top) / r.height - .5) * -8).toFixed(2) + "deg");
  });
  card.addEventListener("pointerleave", () => { inner.style.setProperty("--ry","0deg"); inner.style.setProperty("--rx","0deg"); });
});

/* ---------- Scroll → journey position ---------- */
let centers = [], target = 0;
function measure(){ centers = scenes.map(s => s.offsetTop + s.offsetHeight / 2); }
function readScroll(){
  const y = scrollY + innerHeight / 2;
  let t = 0;
  if (y >= centers[centers.length-1]) t = centers.length - 1;
  else for (let i = 0; i < centers.length - 1; i++) {
    if (y >= centers[i] && y < centers[i+1]) { t = i + (y - centers[i]) / (centers[i+1] - centers[i]); break; }
  }
  target = t;
  const a = Math.round(t), w = WAY[a];
  document.documentElement.style.setProperty("--hue", `var(${w.hue})`);
  document.getElementById("hudSector").innerHTML = `SECTOR <span>${pad(a)}</span> / ${pad(WAY.length - 1)}`;
  document.querySelector("#hudWeek span").textContent = w.weeks;
  document.getElementById("meter").style.width = (t / (WAY.length - 1) * 100).toFixed(1) + "%";
  railLinks.forEach((l,i) => l.classList.toggle("on", i === a));
}
measure(); readScroll();
addEventListener("scroll", readScroll, {passive:true});
addEventListener("resize", () => { measure(); readScroll(); });
addEventListener("load", () => { measure(); readScroll(); });

/* ---------- Screenshot viewer ---------- */
(function(){
  const box = document.getElementById("lightbox"), img = document.getElementById("lbImg"), cap = document.getElementById("lbCap"), close = document.getElementById("lbClose");
  let opener = null;
  function hide(){ box.hidden = true; img.removeAttribute("src"); document.documentElement.style.overflow = ""; if (opener) opener.focus(); }
  document.addEventListener("click", e => {
    const a = e.target.closest && e.target.closest(".shot");
    if (!a) return;
    e.preventDefault(); opener = a;
    img.src = a.getAttribute("href"); img.alt = "Screenshot for " + a.dataset.title; cap.textContent = a.dataset.title;
    box.hidden = false; document.documentElement.style.overflow = "hidden"; close.focus();
  });
  box.addEventListener("click", e => { if (e.target !== img) hide(); });
  addEventListener("keydown", e => { if (e.key === "Escape" && !box.hidden) hide(); });
})();

/* ---------- Cursor: targeting reticle (mouse and trackpad only) ---------- */
const CUR = { el: document.getElementById("cursor"), overUI: false, on: false };
(function(){
  if (!matchMedia("(pointer: fine)").matches) return;
  const ring = document.getElementById("curRing"), dot = document.getElementById("curDot"), label = document.getElementById("curLabel");
  let x = -100, y = -100, rx = -100, ry = -100;
  addEventListener("pointermove", e => {
    if (e.pointerType === "touch") return;
    x = e.clientX; y = e.clientY;
    if (!CUR.on){ CUR.on = true; rx = x; ry = y; document.documentElement.classList.add("has-cursor"); }
    CUR.el.classList.remove("is-out");
    dot.style.transform = `translate3d(${x}px,${y}px,0)`;
  }, {passive:true});
  document.addEventListener("pointerover", e => {
    const t = e.target.closest ? e.target : document.body;
    const hit = t.closest("a,button");
    CUR.overUI = !!t.closest("a,button,.panel,.hud__bar,.rail");
    CUR.el.classList.toggle("is-link", !!hit);
    if (hit) label.textContent = hit.classList.contains("card") ? "FLIP" : hit.classList.contains("shot") ? "VIEW" : "ENGAGE";
  });
  document.documentElement.addEventListener("mouseleave", () => CUR.el.classList.add("is-out"));
  addEventListener("pointerdown", () => CUR.el.classList.add("is-down"));
  addEventListener("pointerup", () => CUR.el.classList.remove("is-down"));
  CUR.scan = on => {
    const s = on && !CUR.overUI;
    if (s !== CUR.el.classList.contains("is-target")){
      CUR.el.classList.toggle("is-target", s);
      if (s) label.textContent = "SCAN";
    }
  };
  (function loop(){
    const k = reduce ? 1 : .2;
    rx += (x - rx) * k; ry += (y - ry) * k;
    ring.style.transform = `translate3d(${rx.toFixed(1)}px,${ry.toFixed(1)}px,0)`;
    requestAnimationFrame(loop);
  })();
})();

/* ---------- 3D ---------- */
(function(){
  if (!window.THREE) return;
  const canvas = document.getElementById("space");
  let renderer;
  try { renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true}); } catch(e){ return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x050714, 0.017);
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 400);
  const SP = 42, N = WAY.length;
  const css = getComputedStyle(document.documentElement);
  const col = v => new THREE.Color(css.getPropertyValue(v).trim() || "#5fe6ff");

  // ---------- flight path: a curve that weaves left, right, up and down between sectors ----------
  const PX = [0, 16, -14, 12, -18, 13, -15, 14, -12, 0], PY = [0, 5, -4, 6, -3, 4, -5, 3, -4, 0], T = N - 1;
  const path = new THREE.CatmullRomCurve3(WAY.map((w,i) => new THREE.Vector3(PX[i % PX.length], PY[i % PY.length], 9 - i*SP)));
  const UP = new THREE.Vector3(0,1,0);
  const mkF = () => ({p:new THREE.Vector3(), f:new THREE.Vector3(), r:new THREE.Vector3(), u:new THREE.Vector3()});
  function frameAt(tt, o){ // position, forward, right, up at journey position tt (0..T)
    const u = Math.min(Math.max(tt / T, 0), 1);
    path.getPoint(u, o.p); path.getTangent(u, o.f);
    o.r.crossVectors(o.f, UP).normalize(); o.u.crossVectors(o.r, o.f).normalize();
    return o;
  }
  const st = WAY.map((w,i) => frameAt(i, mkF())), CF = mkF(), AF = mkF(), tmpF = mkF(), tmpL = new THREE.Vector3();

  // soft glow texture
  const gc = document.createElement("canvas"); gc.width = gc.height = 128;
  const g2 = gc.getContext("2d"), grad = g2.createRadialGradient(64,64,0,64,64,64);
  grad.addColorStop(0,"rgba(255,255,255,.9)"); grad.addColorStop(.25,"rgba(255,255,255,.28)"); grad.addColorStop(1,"rgba(255,255,255,0)");
  g2.fillStyle = grad; g2.fillRect(0,0,128,128);
  const glowTex = new THREE.CanvasTexture(gc);

  function ringLine(r, color, opacity){
    const pts = []; for (let i = 0; i <= 96; i++){ const a = i/96*Math.PI*2; pts.push(new THREE.Vector3(Math.cos(a)*r, Math.sin(a)*r, 0)); }
    return new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),
      new THREE.LineBasicMaterial({color, transparent:true, opacity, blending:THREE.AdditiveBlending, depthWrite:false}));
  }
  function shell(geo, color, smooth){
    const grp = new THREE.Group();
    grp.add(new THREE.LineSegments(smooth ? new THREE.WireframeGeometry(geo) : new THREE.EdgesGeometry(geo),
      new THREE.LineBasicMaterial({color, transparent:true, opacity: smooth ? .38 : .95, blending:THREE.AdditiveBlending, depthWrite:false})));
    grp.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({color, transparent:true, opacity:.07, blending:THREE.AdditiveBlending, depthWrite:false, side:THREE.DoubleSide})));
    if (!smooth) grp.add(new THREE.Points(geo, new THREE.PointsMaterial({color:0xffffff, size:.09, transparent:true, opacity:.9})));
    return grp;
  }
  function build(shape, color){
    const body = new THREE.Group();
    if (shape === "core"){
      body.add(shell(new THREE.IcosahedronGeometry(1.9, 1), color));
      const inner = shell(new THREE.IcosahedronGeometry(.9, 0), 0xffffff); inner.userData.counter = true; body.add(inner);
    } else if (shape === "knot"){
      body.add(shell(new THREE.TorusKnotGeometry(1.25, .38, 120, 12, 2, 3), color, true));
    } else if (shape === "octa"){
      body.add(shell(new THREE.OctahedronGeometry(1.7, 0), color));
      for (let i = 0; i < 4; i++){ const s = shell(new THREE.OctahedronGeometry(.34, 0), color); const a = i/4*Math.PI*2; s.position.set(Math.cos(a)*2.6, Math.sin(a*2)*.5, Math.sin(a)*2.6); body.add(s); }
    } else if (shape === "planet"){
      body.add(shell(new THREE.SphereGeometry(1.5, 22, 14), color, true));
      const r1 = ringLine(2.3, color, .9), r2 = ringLine(2.7, color, .5), r3 = ringLine(2.5, 0xffffff, .3);
      [r1,r2,r3].forEach(r => { r.rotation.x = Math.PI/2; body.add(r); });
      body.rotation.z = .35;
    } else if (shape === "cubes"){
      [[0,0,0,1.5],[1.25,1.0,.4,.7],[-1.2,-.9,.5,.8],[.9,-1.2,-.6,.55],[-1.0,1.2,-.5,.5]].forEach(c => {
        const s = shell(new THREE.BoxGeometry(c[3],c[3],c[3]), color); s.position.set(c[0],c[1],c[2]); s.rotation.set(c[0],c[1],0); body.add(s); });
    } else if (shape === "dodeca"){
      body.add(shell(new THREE.DodecahedronGeometry(1.8, 0), color));
      const inner = shell(new THREE.TetrahedronGeometry(.9, 0), 0xffffff); inner.userData.counter = true; body.add(inner);
    } else if (shape === "crystal"){
      const c1 = shell(new THREE.IcosahedronGeometry(1.7, 0), color); c1.scale.y = 1.35; body.add(c1);
      const inner = shell(new THREE.OctahedronGeometry(.8, 0), 0xffffff); inner.userData.counter = true; body.add(inner);
    } else if (shape === "home"){
      // the final destination: a solid world with a glowing grid and scattered city lights
      body.add(new THREE.Mesh(new THREE.SphereGeometry(2.25, 40, 28),
        new THREE.MeshStandardMaterial({color:0x0a1030, emissive:0x060b26, roughness:.95, metalness:.05})));
      body.add(shell(new THREE.SphereGeometry(2.29, 26, 18), color, true));
      const lp = [];
      for (let k = 0; k < 160; k++){
        const v = new THREE.Vector3().randomDirection ? new THREE.Vector3().randomDirection() : new THREE.Vector3(Math.random()-.5, Math.random()-.5, Math.random()-.5).normalize();
        if (v.y > .8) continue; // keep the landing zone dark
        lp.push(v.multiplyScalar(2.31));
      }
      body.add(new THREE.Points(new THREE.BufferGeometry().setFromPoints(lp),
        new THREE.PointsMaterial({color:0xffd59a, size:.09, transparent:true, opacity:.95})));
      const ring = ringLine(3.5, color, .55); ring.rotation.x = Math.PI/2 + .22; body.add(ring);
      const ring2 = ringLine(3.9, 0xffffff, .2); ring2.rotation.x = Math.PI/2 + .22; body.add(ring2);
    } else {
      body.add(shell(new THREE.TorusGeometry(2.0, .32, 12, 60), color, true));
      const r = ringLine(1.3, 0xffffff, .6); r.userData.counter = true; body.add(r);
    }
    return body;
  }

  const way = WAY.map((w,i) => {
    const color = col(w.hue), g = new THREE.Group(), body = build(w.shape, color);
    const orbit = ringLine(3.1, color, .35); orbit.rotation.set(1.2, .3, 0);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex, color, transparent:true, opacity:.5, blending:THREE.AdditiveBlending, depthWrite:false}));
    glow.scale.set(11,11,1);
    const home = w.shape === "home";
    if (home){ glow.scale.set(13,13,1); orbit.visible = false; }
    g.add(glow, body, orbit);
    scene.add(g);
    // offsets from the sector point: [right on desktop, up on desktop, up on phone]
    return {g, body, orbit, home, side: i % 2 ? -1 : 1, vel:0, scale:1, off: home ? [3.6, -1.9, 1.4] : [3.6, .2, 2.6]};
  });
  function placeWaypoints(){
    way.forEach((w,i) => {
      const S = st[i];
      w.g.position.copy(S.p).addScaledVector(S.f, 9).addScaledVector(S.r, wide ? w.side * w.off[0] : 0).addScaledVector(S.u, wide ? w.off[1] : w.off[2]);
    });
  }

  // stars
  const SN = 2600, sp = new Float32Array(SN*3);
  for (let i = 0; i < SN; i++){ sp[i*3] = (Math.random()-.5)*150; sp[i*3+1] = (Math.random()-.5)*110; sp[i*3+2] = 40 - Math.random()*(N*SP+80); }
  const sg = new THREE.BufferGeometry(); sg.setAttribute("position", new THREE.BufferAttribute(sp,3));
  scene.add(new THREE.Points(sg, new THREE.PointsMaterial({color:0xcfe4ff, size:.22, transparent:true, opacity:.85, fog:false, map:glowTex, blending:THREE.AdditiveBlending, depthWrite:false})));

  // flight corridor rings + floor grid
  for (let tt = .14, k = 0; tt < T; tt += .16, k++){
    const F = frameAt(tt, tmpF), r = ringLine(11, k % 2 ? 0x5fe6ff : 0xa78bff, .16);
    r.position.copy(F.p); r.lookAt(tmpL.copy(F.p).add(F.f)); scene.add(r);
  }
  const grid = new THREE.GridHelper(N*SP+160, Math.round((N*SP+160)/4), 0x5fe6ff, 0x3a4a90);
  grid.material.transparent = true; grid.material.opacity = .22; grid.material.depthWrite = false;
  grid.position.set(0, -16, -(N-1)*SP/2); scene.add(grid);

  // ---------- nebulae + asteroids ----------
  const neb = ["--cyan","--violet","--rose","--mint","--amber"];
  for (let i = 0; i < 16; i++){
    const s = new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex, color:col(neb[i % neb.length]), transparent:true, opacity:.1, blending:THREE.AdditiveBlending, depthWrite:false, fog:false}));
    const sc = 55 + Math.random()*50; s.scale.set(sc, sc, 1);
    s.position.set((i % 2 ? 1 : -1) * (28 + Math.random()*30), (Math.random()-.5)*36, 20 - i/16 * (N*SP+20));
    scene.add(s);
  }
  const rockGeo = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1, 0)), rocks = [];
  for (let i = 0; i < 60; i++){
    const m = new THREE.LineSegments(rockGeo, new THREE.LineBasicMaterial({color: i % 3 ? 0x7f95d8 : 0xa78bff, transparent:true, opacity:.55}));
    const a = Math.random()*Math.PI*2, r = 7 + Math.random()*13, sc = .25 + Math.random()*.8, F = frameAt(Math.random()*T, tmpF);
    m.position.copy(F.p).addScaledVector(F.r, Math.cos(a)*r).addScaledVector(F.u, Math.sin(a)*r*.7);
    m.scale.set(sc, sc*(.6+Math.random()*.6), sc);
    m.userData.s = (Math.random()-.5)*1.2;
    scene.add(m); rocks.push(m);
  }

  // ---------- rocket ----------
  scene.add(new THREE.AmbientLight(0x7f8cff, .55));
  const rocket = new THREE.Group(), tilt = new THREE.Group(), wrap = new THREE.Group(), ship = new THREE.Group();
  wrap.rotation.x = -Math.PI/2; wrap.add(ship); tilt.add(wrap); rocket.add(tilt); scene.add(rocket);
  const keyL = new THREE.PointLight(0xffffff, 1.3); keyL.position.set(3,4,5); rocket.add(keyL);
  const rimL = new THREE.PointLight(0x5fe6ff, 1.2); rimL.position.set(-4,1,-3); rocket.add(rimL);
  const hullMat = new THREE.MeshStandardMaterial({color:0xe6edff, metalness:.55, roughness:.28, emissive:0x141c44, side:THREE.DoubleSide});
  const accentMat = new THREE.MeshStandardMaterial({color:0x8a6bff, metalness:.4, roughness:.35, emissive:0x3a1f9a, side:THREE.DoubleSide});
  const darkMat = new THREE.MeshStandardMaterial({color:0x2a3154, metalness:.8, roughness:.4, side:THREE.DoubleSide});
  const v2 = a => a.map(p => new THREE.Vector2(p[0], p[1]));
  ship.add(new THREE.Mesh(new THREE.LatheGeometry(v2([[0,1.7],[.1,1.56],[.24,1.25],[.35,.8],[.4,.2],[.4,-.35],[.34,-.8],[.25,-1.0]]), 28), hullMat));
  ship.add(new THREE.Mesh(new THREE.LatheGeometry(v2([[0,1.72],[.105,1.57],[.25,1.25]]), 28), accentMat));
  [.2,-.35].forEach(y => { const b = new THREE.Mesh(new THREE.TorusGeometry(.405,.028,8,36), new THREE.MeshBasicMaterial({color:0x5fe6ff})); b.rotation.x = Math.PI/2; b.position.y = y; ship.add(b); });
  const win = new THREE.Mesh(new THREE.SphereGeometry(.13,16,12), new THREE.MeshBasicMaterial({color:0x9ff1ff})); win.position.set(0,.75,.3); ship.add(win);
  const winRing = new THREE.Mesh(new THREE.TorusGeometry(.15,.03,8,24), accentMat); winRing.position.set(0,.75,.34); ship.add(winRing);
  const finShape = new THREE.Shape(); finShape.moveTo(0,0); finShape.lineTo(.42,-.5); finShape.lineTo(.42,-.85); finShape.lineTo(0,-.55); finShape.closePath();
  const finGeo = new THREE.ExtrudeGeometry(finShape, {depth:.05, bevelEnabled:false});
  for (let i = 0; i < 3; i++){ const p = new THREE.Group(), f = new THREE.Mesh(finGeo, accentMat); f.position.set(.33,-.35,-.025); p.rotation.y = i * Math.PI*2/3 + .5; p.add(f); ship.add(p); }
  const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(.2,.3,.28,20,1,true), darkMat); nozzle.position.y = -1.12; ship.add(nozzle);
  const flame = new THREE.Group(); flame.position.y = -1.22; ship.add(flame);
  [[.24,1.5,0xffb966,.5],[.12,.95,0xdffaff,.9]].forEach(c => {
    const g = new THREE.ConeGeometry(c[0], c[1], 20, 1, true); g.rotateX(Math.PI); g.translate(0, -c[1]/2, 0);
    flame.add(new THREE.Mesh(g, new THREE.MeshBasicMaterial({color:c[2], transparent:true, opacity:c[3], blending:THREE.AdditiveBlending, depthWrite:false, side:THREE.DoubleSide, fog:false})));
  });
  const engGlow = new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex, color:0xffb966, transparent:true, opacity:.9, blending:THREE.AdditiveBlending, depthWrite:false, fog:false}));
  engGlow.position.y = -1.4; ship.add(engGlow);
  const engLight = new THREE.PointLight(0xffb966, 1.2, 10); engLight.position.y = -1.7; ship.add(engLight);
  // landing legs, folded away until the final approach
  const legGeo = new THREE.CylinderGeometry(.035,.035,.8,8); legGeo.translate(0,-.4,0);
  const footGeo = new THREE.CylinderGeometry(.1,.12,.04,12), legs = [];
  for (let i = 0; i < 3; i++){
    const p = new THREE.Group(), hinge = new THREE.Group();
    p.rotation.y = i * Math.PI*2/3 + .5 + Math.PI/3;
    hinge.position.set(.3, -.55, 0); hinge.rotation.z = .45; hinge.scale.setScalar(.001);
    const foot = new THREE.Mesh(footGeo, accentMat); foot.position.y = -.8; foot.rotation.z = -.45;
    hinge.add(new THREE.Mesh(legGeo, darkMat), foot);
    p.add(hinge); ship.add(p); legs.push(hinge);
  }
  ship.scale.setScalar(.8);
  const SHIP_FOOT = 1.02; // distance from rocket centre to the bottom of its feet
  const uprightQ = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0), Math.PI/2); // nose straight up

  // ---------- landing pad on top of the final world ----------
  const homeW = way[T], padG = new THREE.Group(); padG.position.y = 2.2; homeW.g.add(padG);
  const deck = new THREE.Mesh(new THREE.CylinderGeometry(.95,1.15,.16,36), darkMat); padG.add(deck);
  const padRing = ringLine(.8, 0x5fe6ff, .9); padRing.rotation.x = Math.PI/2; padRing.position.y = .085; padG.add(padRing);
  const padRing2 = ringLine(.45, 0xffb966, .7); padRing2.rotation.x = Math.PI/2; padRing2.position.y = .085; padG.add(padRing2);
  const padLights = [];
  for (let k = 0; k < 8; k++){
    const a = k/8*Math.PI*2, s = new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex, color:0x9ff1ff, transparent:true, opacity:.8, blending:THREE.AdditiveBlending, depthWrite:false}));
    s.scale.set(.42,.42,1); s.position.set(Math.cos(a)*1.02, .1, Math.sin(a)*1.02); padG.add(s); padLights.push(s);
  }
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(.85,.85,9,32,1,true),
    new THREE.MeshBasicMaterial({color:0x5fe6ff, transparent:true, opacity:0, blending:THREE.AdditiveBlending, depthWrite:false, side:THREE.DoubleSide}));
  beam.position.y = 4.6; padG.add(beam);
  const shock = ringLine(1, 0xdffaff, 0); shock.rotation.x = Math.PI/2; shock.position.y = .1; padG.add(shock);
  const padTop = new THREE.Object3D(); padTop.position.y = .08; padG.add(padTop);
  const padW = new THREE.Vector3();

  // ---------- jump gates: one between every pair of sectors, flown straight through ----------
  const gates = [];
  for (let i = 0; i < T; i++){
    const F = frameAt(i + .5, mkF()), c = col(WAY[i+1].hue), g = new THREE.Group();
    const r1 = ringLine(5.6, c, .95), r2 = ringLine(6.4, c, .45), r3 = ringLine(4.8, 0xffffff, .3);
    const mem = new THREE.Mesh(new THREE.CircleGeometry(5.5, 48), new THREE.MeshBasicMaterial({color:c, transparent:true, opacity:.08, blending:THREE.AdditiveBlending, depthWrite:false, side:THREE.DoubleSide}));
    const spin = new THREE.Group();
    for (let k = 0; k < 8; k++){ const p = shell(new THREE.BoxGeometry(.5,.5,1.6), c), a = k/8*Math.PI*2; p.position.set(Math.cos(a)*6.4, Math.sin(a)*6.4, 0); p.rotation.z = a; spin.add(p); }
    const gl = new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex, color:c, transparent:true, opacity:.28, blending:THREE.AdditiveBlending, depthWrite:false}));
    gl.scale.set(26,26,1);
    g.add(r1, r2, r3, mem, spin, gl);
    g.position.copy(F.p); g.lookAt(tmpL.copy(F.p).add(F.f)); scene.add(g);
    gates.push({spin, r3, mem});
  }

  // ---------- flybys: something crosses overhead in every stretch between sectors ----------
  const FLY = ["comet","asteroid","satellite","comet","station","asteroid"];
  const flys = [];
  for (let i = 0; i < T; i++){
    const type = FLY[i % FLY.length], F = frameAt(i + .5, mkF()), side = i % 2 ? -1 : 1, c = col(WAY[i+1].hue), g = new THREE.Group();
    if (type === "comet"){
      const d = new THREE.Vector3().addScaledVector(F.r, side*44).addScaledVector(F.u, -4.8).addScaledVector(F.f, -14).normalize();
      for (let k = 0; k < 11; k++){
        const s = new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex, color: k ? c : 0xffffff, transparent:true, opacity: k ? .55 - k*.045 : 1, blending:THREE.AdditiveBlending, depthWrite:false, fog:false}));
        const sc = k ? 4.2 - k*.32 : 3.2; s.scale.set(sc, sc, 1); s.position.copy(d).multiplyScalar(-k*1.15); g.add(s);
      }
    } else if (type === "asteroid"){
      const a = shell(new THREE.IcosahedronGeometry(2.6, 1), 0x9aa9e6); a.scale.set(1,.72,.88); g.add(a);
    } else if (type === "satellite"){
      g.add(new THREE.Mesh(new THREE.BoxGeometry(1.2,1.2,1.9), hullMat));
      [-2.5,2.5].forEach(x => { const p = shell(new THREE.BoxGeometry(3.4,.06,1.4), 0x5fe6ff); p.position.x = x; g.add(p); });
      const dish = shell(new THREE.ConeGeometry(.75,.5,12), 0xffffff); dish.rotation.x = Math.PI/2; dish.position.z = 1.25; g.add(dish);
    } else {
      g.add(shell(new THREE.TorusGeometry(2.8,.36,8,30), c, true));
      const hub = shell(new THREE.CylinderGeometry(.55,.55,2.6,10), 0xffffff); hub.rotation.x = Math.PI/2; g.add(hub);
      [0,1].forEach(k => { const sp = shell(new THREE.BoxGeometry(5.4,.12,.12), c); sp.rotation.z = k*Math.PI/2; g.add(sp); });
    }
    scene.add(g);
    flys.push({g, F, side, tumble: type !== "comet"});
  }

  // exhaust particles
  const EN = 240, ePos = new Float32Array(EN*3), eCol = new Float32Array(EN*3), eVel = new Float32Array(EN*3), eLife = new Float32Array(EN);
  const eGeo = new THREE.BufferGeometry();
  eGeo.setAttribute("position", new THREE.BufferAttribute(ePos,3)); eGeo.setAttribute("color", new THREE.BufferAttribute(eCol,3));
  const exhaust = new THREE.Points(eGeo, new THREE.PointsMaterial({size:.5, map:glowTex, vertexColors:true, transparent:true, blending:THREE.AdditiveBlending, depthWrite:false, fog:false}));
  exhaust.frustumCulled = false; scene.add(exhaust);
  let eNext = 0;

  // speed streaks: dust anchored in space that stretches with velocity
  const DN = 420, DL = 90, dSeed = new Float32Array(DN*3), dPos = new Float32Array(DN*6);
  const DW = 46, DH = 32;
  for (let i = 0; i < DN; i++){ dSeed[i*3] = Math.random()*DW; dSeed[i*3+1] = Math.random()*DH; dSeed[i*3+2] = Math.random()*DL; }
  const wrapBox = (v, L) => (((v % L) + L) % L) - L/2;
  const dGeo = new THREE.BufferGeometry(); dGeo.setAttribute("position", new THREE.BufferAttribute(dPos,3));
  const dust = new THREE.LineSegments(dGeo, new THREE.LineBasicMaterial({color:0xbfe3ff, transparent:true, opacity:.2, blending:THREE.AdditiveBlending, depthWrite:false, fog:false}));
  dust.frustumCulled = false; scene.add(dust);

  const tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3();
  let clock = 0, heading = 0, intro = reduce ? 0 : 16;
  let rx = 0, ry = -1.5, land = 0, touched = false, shockT = -1, statusState = "";
  const ease = x => x * x * (3 - 2 * x);
  const statusEl = document.getElementById("landStatus");
  function setStatus(s){
    if (s === statusState || !statusEl) return; statusState = s;
    statusEl.classList.toggle("landed", s === "landed");
    statusEl.querySelector("span").textContent = {
      approach:"Approaching final destination", descend:"Descending · retro burn", landed:"Touchdown confirmed", lift:"Lifting off" }[s];
  }
  function burst(){ // dust kicked up at touchdown
    for (let k = 0; k < 60; k++){
      const i = eNext * 3; eLife[eNext] = 1; eNext = (eNext + 1) % EN;
      const a = Math.random()*Math.PI*2, sp = 2 + Math.random()*3.5;
      ePos[i] = padW.x + Math.cos(a)*.6; ePos[i+1] = padW.y + .1; ePos[i+2] = padW.z + Math.sin(a)*.6;
      eVel[i] = Math.cos(a)*sp; eVel[i+1] = .3 + Math.random()*.8; eVel[i+2] = Math.sin(a)*sp;
    }
  }
  function updateFx(dt, tt, px, py, thrust, dir, warp, turn){
    clock += dt;
    intro += (0 - intro) * Math.min(1, dt * 1.6);
    const tx = px * (wide ? 2.4 : 1.1), ty = (wide ? -1.5 : .4) - py * 1.1 + (reduce ? 0 : Math.sin(clock*1.3)*.08);
    rx += (tx - rx) * .07; ry += (ty - ry) * .07;
    rocket.position.copy(CF.p).addScaledVector(CF.f, (wide ? 6.5 : 8) - intro + thrust * .9).addScaledVector(CF.r, rx).addScaledVector(CF.u, ry);
    rocket.lookAt(tmpL.copy(rocket.position).sub(AF.f)); // nose follows the bend ahead
    const dx = tx - rx, dy = ty - ry;
    heading += ((dir > 0 ? 0 : Math.PI) - heading) * Math.min(1, dt * 5);
    tilt.rotation.set(dy * .4 + thrust * .06, heading - dx * .25, dx * -.45 + turn * 3);

    // ---- landing sequence: hover above the pad, turn upright, then descend and touch down ----
    const goal = tt > T - .22 ? 1 : 0;
    land = reduce ? goal : Math.min(1, Math.max(0, land + (goal ? dt / 3.6 : -dt / 1.5)));
    const p1 = ease(Math.min(land / .5, 1)), p2 = ease(Math.max(0, (land - .5) / .5));
    if (land > 0){
      tmpA.copy(padW).addScaledVector(UP, 3.4);
      tmpB.copy(padW).addScaledVector(UP, SHIP_FOOT);
      rocket.position.lerp(tmpA, p1).lerp(tmpB, p2);
      rocket.quaternion.slerp(uprightQ, p1);
      tilt.rotation.x *= 1 - p1; tilt.rotation.y *= 1 - p1; tilt.rotation.z *= 1 - p1;
    }
    legs.forEach(l => l.scale.setScalar(Math.max(.001, p1)));
    if (land >= .995 && !touched){ touched = true; shockT = 0; if (!reduce) burst(); }
    if (land < .9) touched = false;
    setStatus(touched ? "landed" : land > 0 ? (goal ? "descend" : "lift") : "approach");
    if (shockT >= 0){
      shockT += dt; shock.scale.setScalar(1 + shockT * 5);
      shock.material.opacity = Math.max(0, .9 - shockT * .75);
      if (shockT > 1.3){ shockT = -1; shock.material.opacity = 0; }
    }
    padLights.forEach((s,k) => {
      s.material.color.set(touched ? 0x6dffc4 : 0x9ff1ff);
      s.material.opacity = touched || reduce ? .9 : (land > 0 ? (Math.sin(clock * 9 - k * .8) > 0 ? 1 : .15) : .5);
    });
    beam.material.opacity = (tt > T - .9 ? .1 : 0) * (1 - p2);

    if (!reduce) ship.rotation.y += dt * (.5 + thrust * 2 + warp * 7) * (1 - p2);

    gates.forEach((g,i) => {
      if (!reduce){ g.spin.rotation.z += dt * .5; g.r3.rotation.z -= dt * 1.1; }
      const near = Math.max(0, 1 - Math.abs(tt - i - .5) / .4);
      g.mem.material.opacity = .06 + near * .22;
    });
    flys.forEach((fl,i) => {
      const fr = Math.min(Math.max((tt - i - .12) / .76, 0), 1), e = fr*fr*(3 - 2*fr), F = fl.F;
      fl.g.position.copy(F.p).addScaledVector(F.r, fl.side * (-22 + 44*e)).addScaledVector(F.u, 7 - 4.8*e).addScaledVector(F.f, 10 - 14*e);
      fl.g.visible = Math.abs(tt - i - .5) < .8;
      if (fl.tumble && !reduce){ fl.g.rotation.x += dt * .5; fl.g.rotation.y += dt * .35; }
    });
    const flick = reduce ? 0 : Math.random()*.25;
    const fl = ((.45 + thrust * 1.3 + flick) * (1 - p1) + (.8 + flick) * p1) * (1 - p2);
    flame.visible = fl > .02; flame.scale.set(1, Math.max(fl, .001), 1);
    engGlow.scale.setScalar(Math.max((1.6 + thrust * 1.6) * (1 - p2), .001));
    engLight.intensity = (1 + thrust * 2) * (1 - p2);

    rocket.updateMatrixWorld(true);
    tmpA.set(0,-1.3,0); ship.localToWorld(tmpA);
    tmpB.set(0,0,0); ship.localToWorld(tmpB);
    tmpB.subVectors(tmpA, tmpB).normalize();
    const emit = reduce ? 0 : Math.round((2 + thrust * 5) * (1 - p2));
    for (let k = 0; k < emit; k++){
      const i = eNext * 3; eLife[eNext] = 1; eNext = (eNext + 1) % EN;
      const sp = 2.5 + thrust * 7;
      ePos[i] = tmpA.x + (Math.random()-.5)*.12; ePos[i+1] = tmpA.y + (Math.random()-.5)*.12; ePos[i+2] = tmpA.z + (Math.random()-.5)*.12;
      eVel[i] = tmpB.x*sp + (Math.random()-.5)*.7; eVel[i+1] = tmpB.y*sp + (Math.random()-.5)*.7; eVel[i+2] = tmpB.z*sp + (Math.random()-.5)*.7;
    }
    for (let n = 0; n < EN; n++){
      const i = n * 3;
      if (eLife[n] > 0){
        eLife[n] -= dt * 1.5; const l = Math.max(eLife[n], 0);
        ePos[i] += eVel[i]*dt; ePos[i+1] += eVel[i+1]*dt; ePos[i+2] += eVel[i+2]*dt;
        eCol[i] = l; eCol[i+1] = (.4 + .35*l) * l; eCol[i+2] = (.25 + .75*(1-l)) * l;
      } else { eCol[i] = eCol[i+1] = eCol[i+2] = 0; }
    }
    eGeo.attributes.position.needsUpdate = true; eGeo.attributes.color.needsUpdate = true;

    const streak = (reduce ? .05 : .05 + thrust * 3.4 + warp * 3) / 2, cp = camera.position, f = CF.f;
    for (let n = 0; n < DN; n++){
      const s = n * 3, d = n * 6;
      const x = cp.x + wrapBox(dSeed[s] - cp.x, DW), y = cp.y + wrapBox(dSeed[s+1] - cp.y, DH), z = cp.z + wrapBox(dSeed[s+2] - cp.z, DL);
      dPos[d] = x - f.x*streak; dPos[d+1] = y - f.y*streak; dPos[d+2] = z - f.z*streak;
      dPos[d+3] = x + f.x*streak; dPos[d+4] = y + f.y*streak; dPos[d+5] = z + f.z*streak;
    }
    dGeo.attributes.position.needsUpdate = true;
    dust.material.opacity = Math.min(.9, .2 + Math.min(thrust, 1.5) * .4 + warp * .4);

    if (!reduce) rocks.forEach(m => { m.rotation.x += m.userData.s * dt; m.rotation.y += m.userData.s * dt * .7; });
  }

  let W = 0, H = 0, wide = true, baseFov = 55;
  function resize(){
    W = innerWidth; H = innerHeight; wide = W >= 900;
    renderer.setSize(W, H, false);
    baseFov = wide ? 55 : 68;
    camera.aspect = W / H; camera.fov = baseFov; camera.updateProjectionMatrix();
  }
  resize(); addEventListener("resize", resize);

  // pointer: parallax, hover, click pulse
  const mouse = {x:0, y:0, sx:0, sy:0}, ndc = new THREE.Vector2(), ray = new THREE.Raycaster(), sph = new THREE.Sphere();
  let hover = false, t = target, tPrev = target, vS = 0, dir = 1;
  const velEl = document.querySelector("#hudVel span");
  const jumpEl = document.getElementById("jump"), jumpN = document.getElementById("jumpN"), jumpT = document.getElementById("jumpT"), flashEl = document.getElementById("flash");
  let jumpIdx = -1;
  addEventListener("pointermove", e => { mouse.x = e.clientX / W * 2 - 1; mouse.y = e.clientY / H * 2 - 1; });
  addEventListener("click", e => {
    if (e.target.closest && e.target.closest("a,button,.panel,.hud__bar")) return;
    if (hover) { const w = way[Math.round(t)]; w.vel = .28; if (!w.home) w.scale = 1.35; }
  });

  let last = performance.now(), running = true;
  document.addEventListener("visibilitychange", () => { running = !document.hidden; if (running){ last = performance.now(); requestAnimationFrame(frame); } });

  function frame(now){
    if (!running) return;
    const dt = Math.min((now - last) / 1000, .05); last = now;
    t += (target - t) * (reduce ? 1 : Math.min(1, dt * 4));
    mouse.sx += (mouse.x - mouse.sx) * .06; mouse.sy += (mouse.y - mouse.sy) * .06;
    const px = reduce ? 0 : mouse.sx, py = reduce ? 0 : mouse.sy;

    const raw = (t - tPrev) / Math.max(dt, .001); tPrev = t;
    vS += (raw - vS) * .12;
    if (vS > .12) dir = 1; else if (vS < -.12) dir = -1;
    const thrust = Math.min(Math.abs(vS) * 1.1, 1.8);
    // jump-gate transition: peaks halfway between two sectors
    const fracT = t - Math.floor(t), inGap = t < T;
    const bell = inGap ? Math.max(0, 1 - Math.abs(fracT - .5) / .22) : 0;
    const warp = reduce ? 0 : bell;
    const shake = reduce ? 0 : thrust * .03 + warp * .04;
    camera.fov = baseFov + (reduce ? 0 : thrust * 8 + warp * 12); camera.updateProjectionMatrix();
    if (velEl) velEl.textContent = (thrust * .42 + warp * .5).toFixed(2);
    const nx = Math.min(Math.floor(t) + 1, T);
    if (nx !== jumpIdx){ jumpIdx = nx; jumpN.textContent = pad(nx); jumpT.textContent = WAY[nx].title; jumpEl.style.setProperty("--hue", `var(${WAY[nx].hue})`); }
    jumpEl.style.opacity = bell.toFixed(3);
    flashEl.style.opacity = (reduce || !inGap ? 0 : Math.max(0, 1 - Math.abs(fracT - .5) / .05) * .5).toFixed(3);

    placeWaypoints();
    homeW.g.scale.setScalar(wide ? 1 : .8);
    homeW.g.updateMatrixWorld(true); padTop.getWorldPosition(padW);

    frameAt(t, CF); frameAt(t + .1, AF);
    const turn = reduce ? 0 : CF.f.z * AF.f.x - CF.f.x * AF.f.z; // negative when the path bends right
    camera.position.copy(CF.p)
      .addScaledVector(CF.r, px * 1.1 + (Math.random()-.5) * shake)
      .addScaledVector(CF.u, .3 - py * .7 + (Math.random()-.5) * shake + land * .8)
      .addScaledVector(CF.f, (wide ? 0 : -2) - land * 2.5);
    tmpL.copy(CF.p).addScaledVector(AF.f, 14).addScaledVector(CF.r, px * .3).lerp(padW, land * .3);
    camera.lookAt(tmpL);
    camera.rotateZ(turn * 1.3); // bank into the turn
    updateFx(dt, t, px, py, thrust, dir, warp, turn);

    const a = Math.round(t);
    ndc.set(mouse.x, -mouse.y); ray.setFromCamera(ndc, camera);
    sph.center.copy(way[a].g.position); sph.radius = way[a].home ? 3 : 2.6;
    hover = ray.ray.intersectsSphere(sph);
    if (CUR.scan) CUR.scan(hover);

    way.forEach((w,i) => {
      const base = reduce ? 0 : .22, boost = (hover && i === a) ? .9 : 0;
      w.vel *= .96;
      const s = (base + boost) * dt + w.vel;
      if (w.home){ w.body.rotation.y += s * .5; return; } // the destination turns slowly and keeps its pad level
      w.body.rotation.y += s; w.body.rotation.x += s * .45;
      w.body.children.forEach(c => { if (c.userData.counter){ c.rotation.y -= s * 2.4; c.rotation.z += s; } });
      w.orbit.rotation.z += s * .6;
      const goal = ((hover && i === a) ? 1.14 : 1) * (wide ? 1 : .8);
      w.scale += (goal - w.scale) * .08;
      w.g.scale.setScalar(w.scale);
      if (!reduce && i === a){ w.body.rotation.z = px * -.25; }
    });

    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
