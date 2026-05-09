# Deployment Plan — themoulioms.com

Wedding website for Abdel & Jaris · March 13, 2027 · El Nido, Palawan

> **Project location:** `C:\Users\abdel\Documents\themoulioms` — open this folder directly. The project lives at the workspace root, no `/site` subfolder.

---

## What's already done (code-wise)

- Decoupled from Base44: removed AuthProvider/AuthContext, deleted unused `base44Client.js`, `app-params.js`, `UserNotRegisteredError.jsx`, `ProtectedRoute.jsx`
- RSVP form now submits to your Formspree endpoint `https://formspree.io/f/meenqegr`
- Title + Open Graph + Twitter meta tags say "Abdel and Jaris - March 13, 2027"
- Footer date corrected (was 14, now 13)
- SVG favicon added at `public/favicon.svg`
- `vite.config.js` rebuilt without the Base44 telemetry plugin
- `vercel.json` added so React Router routes fall back to `index.html`
- MusicPlayer fixed so pause/resume keeps position (was restarting from 0:00)

The production build compiles cleanly: 2027 modules, ~121 KB gzipped JS.

---

## Phase 0 — Accounts you'll need

| Account | Purpose | Cost |
|---|---|---|
| GitHub | Holds the source code; Vercel deploys from here | Free |
| Vercel | Hosts the static site | Free Hobby tier |
| Formspree | Receives RSVP submissions | Free for ≤50/mo (already done) |
| Domain registrar | Owns themoulioms.com | ~$10/year |

Recommended registrar: **Cloudflare Registrar** (~$10.44/yr, free WHOIS privacy) or **Porkbun** (~$11/yr).

---

## Phase 1 — Run it locally

You need Node.js 20+ installed (nodejs.org).

Open PowerShell or Terminal in `C:\Users\abdel\Documents\themoulioms` and run:

```bash
npm install
npm run dev
```

The dev server starts at http://localhost:5173. Open it in your browser.

If your `.env.local` doesn't exist yet, copy `.env.example` to `.env.local` — though the Formspree endpoint is also hard-coded as a default in `RSVPForm.jsx`, so the form will work either way.

---

## Phase 2 — Feature QA checklist

Walk through this on **desktop** and **mobile** (Chrome DevTools device toolbar, then a real phone after deploy):

- Nav: hamburger appears on mobile; Story / Details / Travel / RSVP smooth-scroll
- Hero: image loads, names render in script font, date "13 · 03 · 2027" displays
- Countdown: shows correct days/hours/minutes/seconds to March 13, 2027
- Story: read the copy carefully — currently a generic "chance encounter" version
- Details: Ceremony 3:30 PM Beachfront Chapel; Reception 6:00 PM Garden Pavilion
- Dress Code: palette + Ladies/Gentlemen guidance
- Travel: three tip cards over El Nido cliffs background
- Gallery: all images load
- Gifts: Cashapp `$themoulioms`, Venmo `@themoulioms`, Zelle `themoulioms@email.com` (placeholder — replace!)
- Social: hashtag `themoulioms`, "Instagram · TikTok · Facebook" line
- RSVP: "Joyfully Accepts" / "Regretfully Declines" toggle, fields render conditionally, submit reaches Formspree (verify by checking your Formspree dashboard for the test entry)
- Contact: `hello@themoulioms.com` mailto link, `@themoulioms` Instagram link (verify these are right)
- FAQ: 7 collapsible questions, all expand/close cleanly
- Footer: A & J monogram, "13 · 03 · 2027", "El Nido, Palawan · Philippines"
- Music player: bottom-left pill shows "Palagi"; click to play; click again to pause and resume from same spot; × hides the player
- No console errors

---

## Phase 3 — Buy themoulioms.com

Quick check: go to **cloudflare.com/products/registrar** or **porkbun.com**, search `themoulioms.com`. If available, register for 1–2 years, enable WHOIS privacy and auto-renew.

If `.com` is taken, fallback options: `themoulioms.co`, `mouliomwedding.com`, `abdelandjaris.com`, `aandj2027.com`.

---

## Phase 4 — Push to GitHub (fresh start)

> **Heads up:** the `.git` folder I had set up earlier was lost when we restructured the project. The GitHub repo at `github.com/jarisingram/themoulioms` only had 4 files committed anyway. Easiest path is to start fresh and force-push:

In PowerShell, from `C:\Users\abdel\Documents\themoulioms`:

```bash
git init
git add .
git commit -m "Wedding site - initial deploy"
git branch -M main
git remote add origin https://github.com/jarisingram/themoulioms.git
git push -u origin main --force
```

The `--force` overwrites the 4-file repo with the full project. Safe to do because nothing else depends on those old commits.

If you'd rather keep the existing GitHub repo's commit history, instead:

```bash
git init
git remote add origin https://github.com/jarisingram/themoulioms.git
git fetch origin
git reset origin/main
git add .
git commit -m "Add full project"
git push origin main
```

---

## Phase 5 — Deploy on Vercel

1. Go to vercel.com and sign in with GitHub
2. **Add New → Project**, pick `jarisingram/themoulioms`, click **Import**
3. Vercel auto-detects Vite. Defaults are correct:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
4. Environment variables (optional but recommended):
   - `VITE_FORMSPREE_ENDPOINT` = `https://formspree.io/f/meenqegr`
5. Click **Deploy**. ~60 seconds later you have a working URL like `themoulioms.vercel.app`. Test it.

---

## Phase 6 — Attach the custom domain

In Vercel: project → **Settings → Domains** → add `themoulioms.com` and `www.themoulioms.com`.

Vercel shows DNS records to add. Two options:

**Option A — Cloudflare (recommended).** In Cloudflare DNS:
- A record: `@` → `76.76.21.21`
- CNAME: `www` → `cname.vercel-dns.com`
- Proxy status: **DNS only** (gray cloud)

**Option B — Vercel nameservers.** In your registrar, change nameservers to the ones Vercel gives you.

DNS propagation: 5–60 minutes. Vercel auto-issues a free Let's Encrypt SSL cert.

---

## Phase 7 — Optional polish

1. Replace the Zelle placeholder email in `src/components/wedding/Gifts.jsx`
2. Verify Cashapp `$themoulioms` and Venmo `@themoulioms` handles are real
3. Update `hello@themoulioms.com` and Instagram `@themoulioms` in `ContactFAQ.jsx` if those aren't your actual handles
4. Personalize the Story section copy (`src/components/wedding/Story.jsx`)
5. Add a real OG share image at `public/og-image.jpg` (1200×630, one of your hero photos works)
6. Self-host the `media.base44.com` images (download them into `public/images/`, update the JSX `src=` paths). Removes external dependency.
7. Disable the Formspree form after January 13, 2027 (your stated reply-by date) via Formspree's dashboard

---

## Cost summary

| Item | Cost |
|---|---|
| Domain (themoulioms.com via Cloudflare) | ~$10/year |
| Vercel Hobby hosting | $0 |
| Formspree free tier (50 RSVPs/mo) | $0 |
| GitHub | $0 |
| **Total** | **~$10/year** |

If RSVP volume exceeds 50/month, Formspree Basic ($10/mo) unlocks 1,000/mo.

---

## When something breaks

Tell me what step you're on and what error you're seeing — I can debug installs, walk through code edits, or troubleshoot the deploy.
