# Talk plan

The storyboard with full reasoning lives in a Claude Doc that John owns. This file is the short version for the repo.

## Meetings

| Audience | When | Status |
| --- | --- | --- |
| IPTC Provenance Best Practices and Implementation Working Group | Tue 3 Nov 2026 (moved from 20 Oct) | Confirmed. Dry run Mon 2 Nov, 16:00 CET |
| JPEG Trust | Not set | Waiting on confirmation |

Europe and the US are both back on standard time by 3 Nov, so label times CET and EST.

## Shape

One 30 minute deck, with about 5 minutes of questions inside the 30 (agreed at the technical team weekly, 30 Oct). The body is shared, and the asks switch between IPTC and JPEG Trust with the A key or the audience button. Amito is presented as a prototype that could run the methods, not one that runs them all now.

| Part | Slides | Owner | Minutes |
| --- | --- | --- | --- |
| Problem, pilot, the tools being built, STOP&SCAN, Marcus's case and distribution | 1 to 9 | STOP&SCAN (John) | about 10 to 12 |
| Handoff and Amito, with the demo | 10 to 14 | Tech team (Simone) | about 10 to 12 |
| Limits and asks | 15 to 16 | STOP&SCAN (John and Fatma) | about 3 |
| Close | 17 | STOP&SCAN | under 1 |
| Questions | | | about 5 |

The concern map (`16-concern-map.html`) is out of the order and kept as a backup. Bring it back in `src/slides/index.js`.

## The IPTC angle

The audience works on provenance best practice and implementation, so the deck uses IPTC's metadata vocabulary. Every IPTC field is a declaration, and STOP&SCAN says which step tests it (slide 7, beat 3). The limits slide uses IPTC's own Metawatch figures, and the IPTC asks point at the forthcoming implementation guide and the Photo Metadata software list.

If the tech half needs more time, it comes out of the social half.

## Throughline

A pile of method chips carries the talk. They arrive unsorted on "Many hands", split into detection and provenance, get joined by everyday verification practice, and sort into the five STOP&SCAN columns. During Marcus's case they light up as he uses them. They shrink into a strip, fly into Amito at the handoff, and four provenance chips come back out for the asks.

## Marcus's case

The case follows the fielded expert-panel instrument (revisit_v4, case3) as of 12 Aug 2024. Real posts on the slide are listed below.

- Trump's Truth Social post of 11 Aug 2024, the original screenshot via [Snopes](https://mediaproxy.snopes.com/width/600?url=https://media.snopes.com/2024/08/trump_on_harris_crowd_pic.png).
- The earliest posting, a [post](https://x.com/RachelBitecofer/status/1821376403348017643) from about 10:42 pm ET on 7 Aug 2024. It is shown as a recreated wrapper labelled "Political strategist", following the instrument, with the original caption.
- The commentator repost in the case is Chuck Callesto's X post of 10 Aug 2024, which appears inside Trump's screenshot with red circles on the aircraft.
- The crowd photo itself is shown as circulated, with two enlarged insets on the Content beat (the crowd edge under the aircraft, and phones in the crowd showing the same scene).

Detectors are shown generically as A and B, because the instrument names no product.

## Open items

- [x] IPTC meeting date, Tue 3 Nov 2026 (moved from 20 Oct)
- [ ] JPEG Trust meeting date
- [x] Trump screenshot and crowd photo on slide 8, in `public/media/case/`
- [x] Pilot n stays 46 as reported (John, 1 Nov)
- [ ] Tech team content for `src/slides/tech/`, including the demo as an animation or generated video
- [ ] Decide whether tool favicons go on the chips, and which tools
- [ ] Hosting at slides.stopandscan.org
