import { HTMLClip, AudioPlayback, AudioEffect} from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import {
  playerCombo,
  scale,
  changeColor,
  changeBackgroundColor,
  letterSpacing,
  opacity,
  moveBottom,
  moveLeft,
  moveRight,
  moveTop,
  widthMove,
  heightMove,
  playerInfoCombo1,
  playerInfoCombo2
} from "./incidents";
import { initParams } from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700&family=Audiowide&family=Bebas+Neue&family=Gemunu+Libre:wght@700&display=swap",
    },
  ],
  audioSources: [
    {
      src: initParams[0].value.audio,
      id: "my-mp3",
      classes: ["songs"],
      base64: false,
    },
  ],
});

const songPlayback = new AudioPlayback({
  selector: "~#my-mp3",
  startFrom: 48000,
  duration: 39800,
});

clip.addIncident(songPlayback, 0);

const effect = new AudioEffect(
  {
    animatedAttrs: {
      gain: 0,
    },
  },
  {
    selector: "~#my-mp3",
    duration: 2000,
  }
);

clip.addIncident(effect,38000);

clip.addIncident(opacity(1, ".rectangle.tb", 100), 100);
clip.addIncident(opacity(1, ".rectangle.lr", 100), 100);
clip.addIncident(moveBottom("100%", ".rectangle.top", 200), 400);
clip.addIncident(moveTop("100%", ".rectangle.bottom", 200), 400);
clip.addIncident(moveLeft("100%", ".rectangle.right", 200), 400);
clip.addIncident(moveRight("100%", ".rectangle.left", 200), 400);

clip.addIncident(scale(1, ".intro", 100), 200);

clip.addIncident(opacity(0.5, ".intro .name-back .letter", 200, "@stagger(0,300)"),500);
clip.addIncident(letterSpacing("2px", ".name-back", 400), 600);

clip.addIncident(opacity(1, ".intro .name .letter", 700, "@expression(random(500))"),700);
clip.addIncident(letterSpacing("0px", ".intro .name", 400), 700);

clip.addIncident(opacity(1, ".intro .subtitle .letter", 700, "@expression(random(200))"),900);
clip.addIncident(letterSpacing("5px", ".intro .subtitle", 400), 900);

clip.addIncident(changeColor("@initParams.accentColor", ".intro .name", 1),1000);
clip.addIncident(changeColor("@initParams.secondaryColor", ".intro .name", 1),1100);

clip.addIncident(opacity(1, ".intro .block", 1), 1300);
clip.addIncident(changeBackgroundColor("@initParams.baseColor", ".intro .block", 1),1325);
clip.addIncident(changeBackgroundColor("@initParams.accentColor", ".intro .block", 1),1350);
clip.addIncident(changeBackgroundColor("@initParams.baseColor", ".intro .block", 1),1375);
clip.addIncident(heightMove("0%", ".intro .block", 100), 1400);

clip.addIncident(widthMove("23%", ".intro .wide-line", 800, "@stagger(0,300)"),700);
clip.addIncident(widthMove("10%", ".intro .slim-line", 600, "@stagger(0,300)"),900);

clip.addIncident(opacity(0, ".intro", 100), 2500);

clip.addIncident(playerCombo(
  ".player",
  ".player .logo",
  ".player .number-shadow",
  ".player .medium-line"),1300)

clip.addIncident(playerInfoCombo1(
  ".player-info1",
  ".player-info1 .player-img",
  ".player-info1 .logo",
  ".player-info1 .number-back",
  ".player-info1 .lastname-back .letter",
  ".player-info1 .lastname-back.top .letter",
  ".player-info1 .lastname .letter",
  ".player-info1 .firstname .letter",
  ".player-info1 .number-block",
  ".player-info1 .background",
  ".player-info1 .line"),3700)

clip.addIncident(playerInfoCombo2(
  ".player-info2",
  ".player-info2 .player-img",
  ".player-info2 .logo",
  ".player-info2 .number-back",
  ".player-info2 .lastname-back .letter",
  ".player-info2 .lastname-back.top .letter",
  ".player-info2 .lastname .letter",
  ".player-info2 .firstname .letter",
  ".player-info2 .number-block",
  ".player-info2 .background",
  ".player-info2 .line"),3700)

  //we need total duration to add this and audio
// clip.addIncident(scale(1,".logo-slide",300),37550)
// clip.addIncident(opacity(1,".logo-slide",1),37550)




