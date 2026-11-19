# Ashish Kashyap — Portfolio

Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide.

## Run locally
Requires Node.js 20 or newer. Run `npm install`, then `npm run dev` and open http://localhost:3000.

## AI assistant
Copy `.env.example` to `.env.local` and add your Groq API key. Change GROQ_MODEL to a model available in your Groq account if necessary. Without a key, the assistant explicitly uses local FAQ mode. The API key stays server-side. Before public launch, add durable rate limiting/bot protection to the public chat route to protect your API quota.

## Deploy
Push this directory to GitHub, import the repo into Vercel, configure the environment variables, deploy. The included resume contains your public contact details; review before publishing. Set both Google Drive certificate files to anyone with the link can view if you intend public access. Certificate permissions and repository contents were not verified. Project diagrams are conceptual, not screenshots. Skill logos use external devicon/simpleicons CDNs with generic icon fallback. The portfolio uses resume's 700+ DSA count and avoids disputed internship metrics. Edit `app/data.ts` and `app/page.tsx` to update content. No live GitHub/LeetCode stats are claimed.

System Design lists only the confirmed architecture concepts, without technology stickers.
