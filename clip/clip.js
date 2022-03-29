import { HTMLClip, AudioPlayback, AudioEffect} from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import {
  smudgesCombo1,
  smudgesCombo2,
  smudgesBackCombo1,
  smudgesBackCombo2,
  playerCombo,
  fogMove,
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

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParams: initParams[0].value,
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700&&family=Dancing+Script&family=Varela+Round&display=swap",
    },
  ],
  audioSources: [
    {
      src: "assets/sportsAudio.mp3",
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

clip.addIncident(opacity(1, ".intro .name .letter", 700, "@stagger(0,300)"),700);
clip.addIncident(letterSpacing("0px", ".intro .name", 400), 700);

clip.addIncident(opacity(1, ".intro .subtitle .letter", 700, "@stagger(0,300)"),900);
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

clip.addIncident(fogMove(".background"),0)
clip.addIncident(fogMove(".background"),8000)
clip.addIncident(fogMove(".background"),16000)
clip.addIncident(fogMove(".background"),24000)
clip.addIncident(fogMove(".background"),32000)

///////
clip.addIncident(opacity(0, ".intro", 100), 2500);
/////// player1
clip.addIncident(playerCombo(
  ".player1",
  ".player1 .logo",
  ".player1 .number-shadow",
  ".player1 .medium-line"),2450)
/// player1-info
clip.addIncident(playerInfoCombo1(
  ".player1-info",
  ".player1-info .player-img",
  ".player1-info .logo",
  ".player1-info .number-back",
  ".player1-info .lastname-back .letter",
  ".player1-info .lastname-back.top .letter",
  ".player1-info .lastname .letter",
  ".player1-info .firstname .letter",
  ".player1-info .number-block",
  ".player1-info .background",
  ".player1-info .line"),4500)

clip.addIncident(playerCombo(
  ".player2",
  ".player2 .logo",
  ".player2 .number-shadow",
  ".player2 .medium-line"),8300)

clip.addIncident(playerInfoCombo2(
  ".player2-info",
  ".player2-info .player-img",
  ".player2-info .logo",
  ".player2-info .number-back",
  ".player2-info .lastname-back .letter",
  ".player2-info .lastname-back.top .letter",
  ".player2-info .lastname .letter",
  ".player2-info .firstname .letter",
  ".player2-info .number-block",
  ".player2-info .background",
  ".player2-info .line"),10350)

clip.addIncident(playerCombo(
  ".player3",
  ".player3 .logo",
  ".player3 .number-shadow",
  ".player3 .medium-line"),14150)

clip.addIncident(playerInfoCombo1(
  ".player3-info",
  ".player3-info .player-img",
  ".player3-info .logo",
  ".player3-info .number-back",
  ".player3-info .lastname-back .letter",
  ".player3-info .lastname-back.top .letter",
  ".player3-info .lastname .letter",
  ".player3-info .firstname .letter",
  ".player3-info .number-block",
  ".player3-info .background",
  ".player3-info .line"),16200)

clip.addIncident(playerCombo(
  ".player4",
  ".player4 .logo",
  ".player4 .number-shadow",
  ".player4 .medium-line"),20000)

clip.addIncident(playerInfoCombo2(
  ".player4-info",
  ".player4-info .player-img",
  ".player4-info .logo",
  ".player4-info .number-back",
  ".player4-info .lastname-back .letter",
  ".player4-info .lastname-back.top .letter",
  ".player4-info .lastname .letter",
  ".player4-info .firstname .letter",
  ".player4-info .number-block",
  ".player4-info .background",
  ".player4-info .line"),22050)

clip.addIncident(playerCombo(
  ".player5",
  ".player5 .logo",
  ".player5 .number-shadow",
  ".player5 .medium-line"),25850)

clip.addIncident(playerInfoCombo1(
  ".player5-info",
  ".player5-info .player-img",
  ".player5-info .logo",
  ".player5-info .number-back",
  ".player5-info .lastname-back .letter",
  ".player5-info .lastname-back.top .letter",
  ".player5-info .lastname .letter",
  ".player5-info .firstname .letter",
  ".player5-info .number-block",
  ".player5-info .background",
  ".player5-info .line"),27900)

clip.addIncident(playerCombo(
  ".player6",
  ".player6 .logo",
  ".player6 .number-shadow",
  ".player6 .medium-line"),31700)

clip.addIncident(playerInfoCombo2(
  ".player6-info",
  ".player6-info .player-img",
  ".player6-info .logo",
  ".player6-info .number-back",
  ".player6-info .lastname-back .letter",
  ".player6-info .lastname-back.top .letter",
  ".player6-info .lastname .letter",
  ".player6-info .firstname .letter",
  ".player6-info .number-block",
  ".player6-info .background",
  ".player6-info .line"),33750)
///smudges
clip.addIncident(smudgesCombo1(".smudges"),1300)
clip.addIncident(smudgesCombo2(".smudges"),3800)
clip.addIncident(smudgesCombo1(".smudges"),7200)
clip.addIncident(smudgesCombo2(".smudges"),9700)
clip.addIncident(smudgesCombo1(".smudges"),13100)
clip.addIncident(smudgesCombo2(".smudges"),15600)
clip.addIncident(smudgesCombo1(".smudges"),19000)
clip.addIncident(smudgesCombo2(".smudges"),21500)
clip.addIncident(smudgesCombo1(".smudges"),24900)
clip.addIncident(smudgesCombo2(".smudges"),27400)
clip.addIncident(smudgesCombo1(".smudges"),30800)
clip.addIncident(smudgesCombo2(".smudges"),33300)
clip.addIncident(smudgesCombo1(".smudges"),36500)

///smudges-back
clip.addIncident(smudgesBackCombo1(".background"),1500)
clip.addIncident(smudgesBackCombo2(".background"),4000)
clip.addIncident(smudgesBackCombo1(".background"),7400)
clip.addIncident(smudgesBackCombo2(".background"),9900)
clip.addIncident(smudgesBackCombo1(".background"),13300)
clip.addIncident(smudgesBackCombo2(".background"),15800)
clip.addIncident(smudgesBackCombo1(".background"),19200)
clip.addIncident(smudgesBackCombo2(".background"),21700)
clip.addIncident(smudgesBackCombo1(".background"),25100)
clip.addIncident(smudgesBackCombo2(".background"),27600)
clip.addIncident(smudgesBackCombo1(".background"),31000)
clip.addIncident(smudgesBackCombo2(".background"),33500)
clip.addIncident(smudgesBackCombo1(".background"),36700)

clip.addIncident(scale(1,".logo-slide",300),37550)
clip.addIncident(opacity(1,".logo-slide",1),37550)




