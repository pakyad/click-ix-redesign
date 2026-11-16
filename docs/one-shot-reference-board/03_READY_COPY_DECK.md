# C — READY-TO-IMPLEMENT COPY DECK
## CLICK IX | Home / CS Play / Maxis retail-network chapter | 16 November 2026

This is the editorial draft for the design reference board. It is NOT a claim that any new wording, client material, software capability or case result has been approved for public release.

**Truth source:** src/lib/content.ts, src/lib/routes.ts, src/lib/contact.ts and existing page components on main.
**Statuses:** [EXISTING] worded or closely paraphrased from the published repository; [PROPOSED] art-directed copy requiring editorial review; [APPROVAL] client/product clearance required; [OMIT UNTIL SUPPLIED] do not show placeholders.
**Implementation rule:** Make src/lib/content.ts the canonical data source; do not scatter company facts through JSX. Use these proposed strings to update appropriate copy objects only after review.

---

# PAGE 1 — HOME (/)

## 01 Announcement [EXISTING]
Text: Click iX presents City Screen in APAC
Action: Visit page
Link: Existing PromoBar.tsx external link (do not replace with a made-up destination)
Visual: Existing supplied APAC award asset. Do not redraw either mark.

## 02 Main navigation [EXISTING]
Brand: official image from /brand/click-ix-horizontal-black.png or white variant, selected for contrast.
Menus: derive from src/lib/navigation.ts and src/lib/routes.ts.
CTA: Get a quote -> existing mailto('Quote').

## 03 Hero [EXISTING primary, PROPOSED presentation]
Brand eyebrow/subline: Immersive experience
Headline:
Smarter Screen.
Smarter Business.
Supporting copy:
The software that runs, sells and proves digital screen networks — and the displays, players and installation that carry it. One team, Kuala Lumpur.
Primary CTA: Explore our services -> /our-services/
Secondary CTA: See the work -> /case-studies/
Utility scope labels: Screens / Players / Software / Measurement
Primary visual: /media/hero.mp4 with /media/hero-poster.jpg.
Caption: Installation film · MotoGP KL26 launch (existing component label).
Note: This real film is *not* the KL Fashion Week/Pavilion mockup image from the reference board. Do not change its identity. Preserve the existing PixelMark / HeroCinematic direction unless modifying the hero has been approved.

## 04 Capability statement [PROPOSED]
Eyebrow: ONE CONNECTED DELIVERY TEAM
Heading: One partner for your screen network.
Paragraph:
CLICK IX brings physical displays, media players, software, content and measurement into one delivery conversation.
Capabilities:
- Hardware — Screens and media players.
- Software — Platforms for content and operations.
- Installation — Deployment and configuration.
- Content — Publishing and campaign scheduling.
- Measurement — Reporting and audience insights.
Small note: Distinguish service scope from product licensing; do not imply every capability is bundled in every contract.
CTA: Explore our services -> /our-services/

## 05 Connected ecosystem [PROPOSED layout, EXISTING offering taxonomy]
Eyebrow: THE SYSTEM BEHIND THE SCREEN
Heading: More than the display.
Supporting paragraph:
The screen is what audiences see. Behind it sit the systems for bookings, scheduling, content delivery and evidence.
Choose a chapter to inspect the physical screen, the operating workflow and the reporting layer.
Selectable chapter names:
01 / The physical network
   One deployment, with the hardware and players that bring content to the screen.
02 / Content operations
   The software that manages what plays, where and when.
03 / Evidence and measurement
   Playback records and measurement support campaign reporting.
Caption rules:
- Image of a real installation: identify actual documented project.
- Screenshot of real software: name version/screen only when verified, redact account/client data.
- Conceptual diagram: label "Illustrative workflow, not a live system screenshot."
Primary CTA: Explore our software -> /software/

## 06 Software ecosystem [EXISTING product roles, PROPOSED section copy]
Eyebrow: THE CLICK IX STACK
Heading: Different jobs. One connected operation.
Intro:
Explore the products used across commercial operations, content delivery, programmatic media and measurement.
Main products:
- CS Deals — Media owner ERP and CRM.
- CS Play — CMS for billboards and large-format screens.
- CS Play SSN — CMS for indoor small-screen networks.
- CS Sign Hub — CMS for in-house, non-advertising screens.
Supporting:
- OmniBuy DSP — Programmatic planning and buying.
- CS Context — Supply-side inventory management.
- Measurement — Audience measurement and campaign evidence.
- Data Partnerships — Third-party data and activation; current partners and claims need verification.
Use exact source capabilities from src/lib/content.ts for any further expansion.
CTA: Compare the products -> /software/
Visual: Existing official marks in /brand/cityscreen; if missing a specific logo, set the name as text without impersonating a trademark.

## 07 Delivery process [EXISTING sourced stages]
Eyebrow: HOW DELIVERY WORKS
Heading: From the first screen audit to ongoing support.
Lead:
Plan a deployment around the estate that exists, its technical requirements and the operational work that follows.
Ordered stages:
01 Discovery & audit
   Capture each screen, player, controller and resolution.
02 Compatibility & design
   Establish what can remain, what must change and how the network should be structured.
03 Pilot
   Validate the proposed workflow at a first site.
04 Rollout & support
   Extend the installation in phases and define ongoing support.
CTA: See our process -> /our-process/
Note: This is an editorial summary of deliverySteps; do not imply a fixed SLA, timeline or scope for every customer.

## 08 Real deployments [EXISTING project inventory]
Eyebrow: SELECTED WORK
Heading: Real screens. Real installations.
Paragraph:
Explore documented work across retail environments, malls, outdoor LED and healthcare.
Featured story A:
Client: Maxis
Title: Maxis retail network: every screen on one CMS
Summary:
A retail screen estate supported through hardware, CMS, content services and queue-system integration.
Visual: /media/maxis-store.jpg or /media/maxis-screen.jpg; preserve genuine caption.
Link: /case-studies-retail-malls/#maxis
Featured story B:
Client: Cheras LeisureMall
Title: Cheras LeisureMall: the indoor network, maintained
Summary:
Indoor mall screens managed on CS Play SSN with an ongoing maintenance scope described in the source record.
Visual: /media/cheras-mall.jpg
Link: /case-studies-retail-malls/#cheras
CTA: All case studies -> /case-studies/
Do not invent installation counts, visitor results, performance improvements or testimonials.

## 09 Insights [OMIT UNTIL SUPPLIED]
The reference board has editorial article cards, but current repo audit did not verify a published Insights route or article data. Do not invent dates, bylines or headlines.
Approved interim replacement, if desired: a quiet link trio to Products (/software/), Process (/our-process/) and Case Studies (/case-studies/). This is site navigation, not fabricated news.

## 10 Closing contact [EXISTING idea, PROPOSED short edit]
Heading: Start with your screen list.
Paragraph:
Share the locations, screen types, media players and requirements you are working with. We'll begin with a practical conversation about the estate and the next step.
CTA: Get a quote -> existing mailto('Quote').
Secondary: See the process -> /our-process/
Visual: Dark ink band. Optional existing real installation frame; no stock/generated city image.

---

# PAGE 2 — CS PLAY PRODUCT (/cs-play/)

## 01 Product hero [PROPOSED]
Official mark: existing /brand/cityscreen/cs-play-light.svg or tone-appropriate variant through ProductMark.
Eyebrow: PRODUCT / CS PLAY
Heading: Run your large-format screens with confidence.
Description:
CS Play is CLICK IX's content management platform for billboards and large-format digital screens. It supports campaign scheduling, remote content delivery and proof-of-play reporting.
Primary CTA: Start a review -> existing mailto('Product enquiry')
Secondary CTA: Compare the stack -> /software/
Visual:
- Preferred: approved CS Play product screenshot [MISSING FROM VERIFIED PUBLIC ASSET INVENTORY].
- Fallback: genuine relevant installation photo with no misleading UI overlay.
- A schematic must be visibly labeled illustrative.

## 02 Anchor navigation [PROPOSED]
Overview / Scheduling / Playback / Evidence / Screen types / Related work.
Implement as ordinary anchors first; no JS requirement and no fake feature route.

## 03 Product overview [SOURCE: product id 'cs-play']
Heading: Scheduling, playback and proof for large-format digital screens.
Paragraph:
Organize campaign content, deliver it to supported screens and review playback evidence from the CMS workflow.
Highlights drawn from sourced product record:
- Schedule campaigns with day-parting and slot/duration options.
- Deliver content remotely to individual screens or groups.
- Review per-screen proof-of-play records for advertiser reporting.
Status: These capabilities are in content.ts with evidence 'supplied'; product-owner confirmation needed before publishing new emphasis or technical guarantees.

## 04 Scheduling [SOURCE / PROPOSED explanation]
Eyebrow: 01 / PLAN THE PLAYBACK
Heading: Place the right content in the right slot.
Paragraph:
Schedules can be organized around screen availability, timing and campaign requirements.
Visual: approved scheduling screenshot, redacted for publication, or no UI artifact. Do not invent a calendar resembling an actual customer account.
Link: Discuss a deployment -> existing mailto('Product enquiry').

## 05 Playback [SOURCE / PROPOSED explanation]
Eyebrow: 02 / OPERATE THE NETWORK
Heading: Keep content delivery under control.
Paragraph:
Supported screens can receive campaign content remotely while the operating team reviews delivery and network status.
Visual: real deployment photo or approved content/playback specimen.

## 06 Proof of play [SOURCE / PROPOSED explanation]
Eyebrow: 03 / ACCOUNT FOR DELIVERY
Heading: Playback records belong with the campaign.
Paragraph:
Per-screen logs support proof-of-play reporting. Measurement capabilities across the wider CLICK IX ecosystem can add context where deployed.
Visual: approved redacted report. If not available, present a simple nonnumeric, clearly labeled explanatory workflow; never fabricate figures.

## 07 Supported screen types [EXISTING from platformRows]
Heading: Where CS Play fits.
- Roadside billboards and outdoor LED
- Building facades, atrium and concourse LED
- Partner- or third-party-operated screens, subject to technical compatibility
Use the existing platformRows and any relevant product.screens; do not expand supported hardware claims without approval.

## 08 Related ecosystem [EXISTING]
Heading: The next layer.
Links:
- CS Play SSN -> /cs-play-ssn/
- CS Deals -> /cs-deals/
- CS Context -> /cs-context/
Copy source: src/lib/content.ts and ProductDetail RELATED registry.
Reminder: CS Sign Hub is a distinct product for in-house screens; don't conflate it with CS Play.

## 09 Related work [EXISTING]
Heading: Where it is running.
Reference the exact case studies whose systems include CS Play.
For the Maxis retail network, use the current anchored case link.
Use project descriptions from content.ts; no invented metrics.

## 10 Contact [EXISTING]
Heading: Put your screens on it.
CTA: Start a review -> existing mailto('Product enquiry')
Secondary CTA: Compare the stack -> /software/

---

# PAGE 3 — MAXIS RETAIL NETWORK (existing anchored article)

Route: /case-studies-retail-malls/#maxis
Source: src/lib/content.ts → caseStudies entry id='maxis'
Editorial status: source supplied, client and publication approval must be checked.

## 01 Case opener [SOURCE]
Eyebrow: CASE STUDY / RETAIL & ENTERPRISE
Client: Maxis
Headline: Maxis retail network: every screen on one CMS
Subheadline [PROPOSED]:
Digital screens, queue displays and LED supported through one coordinated deployment and content workflow.
Image: /media/maxis-store.jpg
Alternative: /media/maxis-screen.jpg (inspect suitability).
Alt text as supplied: Hanging LED screen above a Maxis MC+ store display.
Do not use an imagined Maxis storefront hero generated by AI.

## 02 Project context [SOURCE]
Heading: The requirement.
Copy:
Maxis needed an end-to-end solution for digital screens, queue displays and LED across its Maxis Centres, enterprise partners and dealerships, with the estate managed through one CMS.

## 03 Scope [SOURCE]
Heading: What CLICK IX delivered.
Use actual bullet facts from caseStudies[maxis].did:
- LED designed to fit the pillars and walls of six MC+ flagship stores, coordinated with store-opening timelines.
- CMS and content services across the retail estate.
- Integration with queue systems so live queue information could appear with content.
- Media player supply and maintenance, including installation and cabling.
- A single-player and license configuration for the KLCC dual-sided LED.
Publication: all scope statements require customer approval as documented in original source notes.

## 04 Systems [SOURCE]
Heading: Systems involved.
- CS Play
- LED
- Media players
- Queue integration
Do not claim unsupported product integrations beyond these.

## 05 Project location [SOURCE]
Heading: Where it operates.
Copy:
The documented project includes Maxis Centres, enterprise partners and dealerships, with MC+ flagship examples including KLCC, Sunway Pyramid, The Gardens, Queensbay, Taman Molek and TRX.
No exact address map is needed without validated individual site records.

## 06 Why it matters [SOURCE, NO INVENTED KPI]
Heading: One partner across the screen estate.
Copy:
The project combines hardware, installation, CMS and queue integration under a coordinated delivery scope.
Do not turn this into a quantified claim about engagement, sales lift or reliability.

## 07 Supporting media [EXISTING/MISSING]
Use /media/maxis-store.jpg and /media/maxis-screen.jpg.
If additional photos are not approved, use a two-image editorial arrangement or a single hero. Do not manufacture image variety by AI-recreating a store or inventing a before-and-after comparison.

## 08 Related work and CTA [EXISTING routes]
CTA: See retail & enterprise work -> /case-studies-retail-malls/
Secondary: All case studies -> /case-studies/
Final CTA: Get a quote -> existing mailto('Quote').

---

# OPTIONAL ALTERNATE — CHERAS LEISUREMALL
Use if visual quality or client approval makes it a better case than Maxis.
Route: /case-studies-retail-malls/#cheras
Title: Cheras LeisureMall: the indoor network, maintained.
Source 'brief': the indoor mall screen network needed ongoing operation and maintenance, not simply installation.
Source 'did': mall screens on CS Play SSN; annual SLA for monitoring, support and software updates; a further 12-month term noted from October 2026.
Source 'why': continued monitoring, support and software updates.
Photo: /media/cheras-mall.jpg.
No fabricated campaign performance or attendance numbers.

---

# GLOBAL MICROCOPY

Navigation CTA: Get a quote (do not say Get a Demo unless there is a real process).
Breadcrumb: Case Studies / Retail & Enterprise / Maxis.
Image caption: identify actual installation, never fictional venue.
Interface caption: "Illustrative workflow — not a live customer dashboard" for any conceptual visual.
Error/empty state: "No approved visual is available for this section." (use only during editorial staging; for public site omit the visual instead).
Footer CTA: "Talk through your screen requirements."

# APPROVAL AND CONTENT GATES

- The repository product taxonomy is sourced from the supplied 2026 company materials, but evidence='supplied' in src/lib/content.ts is not the same as company publication approval.
- Real photos and client trademarks already tracked in the repo still need appropriate customer/advertiser rights checks.
- Do not fabricate article lists to match the board's Insights area.
- Do not invent CS Play screenshots or data.
- Do not invent a dedicated case-study slug route without route policy approval.
- Keep factual data in src/lib/content.ts; ensure layout copy uses that source or an approved extension to it.
