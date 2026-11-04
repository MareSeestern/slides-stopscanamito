// Slide order. Each slide is one HTML file holding one <section class="slide">.
// To add a slide, create the file and import it here in the right place.
// Tech team slides live in ./tech/ so both teams can edit without touching each other's files.
//
// IUI_Paper branch. This order is the IUI 2027 demo video, about five minutes.
// The slides of the IPTC and JPEG Trust talk that the video doesn't use are commented out,
// with their files kept, so the talk can be restored from main.

import title from './01-title.html?raw';
import misinformation from './02-misinformation.html?raw';
// IPTC talk only. Not in the IUI video.
// import pilot from './03-pilot.html?raw';
// import manyHands from './04-many-hands.html?raw';
// import twoFamilies from './05-two-families.html?raw';
// import frameworks from './06-frameworks.html?raw';
// import stopscan from './07-stopscan.html?raw';
// import marcus from './08-marcus.html?raw';
// import distribution from './09-distribution.html?raw';
// import handoff from './10-handoff.html?raw';
import techGap from './tech/10-gap.html?raw';
import techIntro from './tech/11-introducing-amito.html?raw';
import techOrchestrator from './tech/12a-orchestrator.html?raw';
import techExplains from './tech/12c-plain-words.html?raw';
import techDemo from './tech/13-demo.html?raw';
import techTogether from './tech/13b-together.html?raw';
import techReport from './tech/13c-trust-report.html?raw';
import techKeys from './tech/14-bring-your-own-keys.html?raw';
// IPTC talk only. Not in the IUI video.
// import asksOpening from './15-asks-opening.html?raw';
// import concernMap from './16-concern-map.html?raw';
// import fourAsks from './17-four-asks.html?raw';
import close from './18-close.html?raw';

export const slides = [
  title,
  misinformation,
  techGap,
  techIntro,
  techOrchestrator,
  techExplains,
  techDemo,
  techTogether,
  techReport,
  techKeys,
  close
];
