import { CSSEffect, Combo} from "@donkeyclip/motorcortex";

export const fogMove = (selector) => new Combo(
  {
   incidents: [
    {
     incidentClass: CSSEffect,
     attrs: {
      animatedAttrs: {
        left:"60%",
      }
     },
     props: {
      selector: ".fog1",
      duration:4000,
     },
     position: 0
    },
    {
     incidentClass: CSSEffect,
     attrs: {
      animatedAttrs: {
        left:"-20%",
      }
     },
     props: {
      selector: ".fog2",
      duration:4000,
     },
     position: 0
    },
    {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
         left:"0%",
       }
      },
      props: {
       selector: ".fog1",
       duration:4000,
      },
      position:4000
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
         left:"0%",
       }
      },
      props: {
       selector: ".fog2",
       duration:4000,
      },
      position:4000
     },
   ]
  },
  {
   selector,
  }
);

export const smudgesBackCombo1 = (selector) => new Combo(
  {
   incidents: [
    {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
         left:"-20%",
         top:"120%"
       }
      },
      props: {
       selector: ".smudge-back1",
       duration: 2500,
       easing: "easeInOutQuint"
      },
      position: 0
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
         left:"90%",
         top:"-50%"
       }
      },
      props: {
       selector: ".smudge-back2",
       duration: 2500,
       easing: "easeInOutQuint"
      },
      position: 0
     }
   ]
  },
  {
   selector,
  }
);

export const smudgesBackCombo2 = (selector) => new Combo(
  {
   incidents: [
    {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        left:"110%",
        top:"-10%"
       }
      },
      props: {
       selector: ".smudge-back1",
       duration: 2500,
       easing: "easeInOutQuint"
      },
      position: 0
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
         left:"-50%",
         top:"80%"
       }
      },
      props: {
       selector: ".smudge-back2",
       duration: 2500,
       easing: "easeInOutQuint"
      },
      position: 0
     }
   ]
  },
  {
   selector,
  }
);

export const smudgesCombo1 = (selector) => new Combo(
  {
   incidents: [
    {
     incidentClass: CSSEffect,
     attrs: {
      animatedAttrs: {
        right:"60%",
        top:"60%"
      }
     },
     props: {
      selector: ".smudge.tr",
      duration: 2500,
      easing: "easeInOutQuint"
     },
     position: 0
    },
    {
     incidentClass: CSSEffect,
     attrs: {
      animatedAttrs: {
        left:"60%",
        bottom:"60%"
      }
     },
     props: {
      selector: ".smudge.bl",
      duration: 2500,
      easing: "easeInOutQuint"
     },
     position: 0
    },
    {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
         left:"-20%",
         top:"120%"
       }
      },
      props: {
       selector: ".smudge.r",
       duration: 2300,
       easing: "easeInOutQuint"
      },
      position: 200
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
         left:"50%",
         top:"-50%"
       }
      },
      props: {
       selector: ".smudge.l",
       duration: 2300,
       easing: "easeInOutQuint"
      },
      position: 200
     }
   ]
  },
  {
   selector,
  }
);

export const smudgesCombo2 = (selector) => new Combo(
  {
   incidents: [
    {
     incidentClass: CSSEffect,
     attrs: {
      animatedAttrs: {
        right:"-100%",
        top:"-100%"
      }
     },
     props: {
      selector: ".smudge.tr",
      duration: 2800,
      easing: "easeInOutQuint"
     },
     position: 0
    },
    {
     incidentClass: CSSEffect,
     attrs: {
      animatedAttrs: {
        left:"-100%",
        bottom:"-100%"
      }
     },
     props: {
      selector: ".smudge.bl",
      duration: 2800,
      easing: "easeInOutQuint"
     },
     position: 0
    },
    {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
         left:"110%",
         top:"-10%"
       }
      },
      props: {
       selector: ".smudge.r",
       duration: 2800,
       easing: "easeInOutQuint"
      },
      position: 0
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
         left:"-50%",
         top:"30%"
       }
      },
      props: {
       selector: ".smudge.l",
       duration: 2800,
       easing: "easeInOutQuint"
      },
      position: 0
     }
   ]
  },
  {
   selector,
  }
);

export const playerCombo = (selector,logo,numberShadow,line) => new Combo(
  {
   incidents: [
    {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        transform:{
          scale:1,
          translateX:"0px",
          translateY:"0px",
        }
       }
      },
      props: {
       selector,
       duration: 300,
       easing: "linear"
      },
      position: 0
     },
    {
     incidentClass: CSSEffect,
     attrs: {
      animatedAttrs: {
        opacity:1,
      }
     },
     props: {
      selector,
      duration: 100,
      easing: "linear"
     },
     position: 50
    },
    {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        fontSize:"1100px"
       }
      },
      props: {
       selector: numberShadow,
       duration: 600,
       easing: "linear"
      },
      position: 250
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
         width:"10%"
       }
      },
      props: {
       selector: line,
       duration: 400,
       delay:"@stagger(0,500)",
       easing: "linear"
      },
      position: 400
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
         opacity:1
       }
      },
      props: {
       selector: logo,
       duration: 400,
       easing: "linear"
      },
      position: 450
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
         top:"-100%"
       }
      },
      props: {
       selector,
       duration: 500,
       easing: "easeInBack"
      },
      position: 2150
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
         opacity:0
       }
      },
      props: {
       selector,
       duration: 300,
       easing: "easeInOutQuart"
      },
      position: 2650
     },
   ]
  },
  {
   selector: ".root",
  }
);

export const playerInfoCombo1 = (selector,img,logo,numberBack,lastnameBackLetter,lastnameBackLetterTop,lastnameLetter,firstnameLetter,numberBlock,firstnameBackground,line) => new Combo(
  {
   incidents: [
    {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        opacity:1
       }
      },
      props: {
       selector,
       duration: 1,
       easing: "linear"
      },
      position: 0
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        opacity:0.5
       }
      },
      props: {
       selector: lastnameBackLetter,
       duration: 300,
       delay:"@stagger(0,500)",
       easing: "linear"
      },
      position: 600
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        letterSpacing:"10px"
       }
      },
      props: {
       selector: lastnameBackLetter,
       duration: 600,
       easing: "linear"
      },
      position: 700
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        opacity:0
       }
      },
      props: {
       selector: lastnameBackLetterTop,
       duration: 300,
       delay:"@stagger(0,500)",
       easing: "linear"
      },
      position: 1500
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        opacity:1
       }
      },
      props: {
       selector: lastnameLetter,
       duration: 200,
       delay:"@stagger(0,300)",
       easing: "linear"
      },
      position: 900
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        letterSpacing:"10px"
       }
      },
      props: {
       selector: lastnameLetter,
       duration: 400,
       easing: "linear"
      },
      position: 1000
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        letterSpacing:"30px"
       }
      },
      props: {
       selector: numberBack,
       duration: 600,
       easing: "linear"
      },
      position: 600
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        right:"0%"
       }
      },
      props: {
       selector: numberBack,
       duration: 400,
       easing: "linear"
      },
      position: 600
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        opacity:1
       }
      },
      props: {
       selector: logo,
       duration: 200,
       easing: "linear"
      },
      position: 800
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        opacity:1
       }
      },
      props: {
       selector: firstnameLetter,
       duration: 200,
       delay:"@stagger(0,300)",
       easing: "linear"
      },
      position: 1700
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        width: "100%"
       }
      },
      props: {
       selector: firstnameBackground,
       duration: 400,
       easing: "linear"
      },
      position: 1700
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        opacity:1
       }
      },
      props: {
       selector: img,
       duration: 400,
       easing: "linear"
      },
      position: 600
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        opacity:1
       }
      },
      props: {
       selector: numberBlock,
       duration: 900,
       easing: "linear"
      },
      position: 1900
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        top:"-210px"
       }
      },
      props: {
       selector: numberBlock,
       duration: 200,
       easing: "easeInOutCubic"
      },
      position: 2200
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        top:"-410px"
       }
      },
      props: {
       selector: numberBlock,
       duration: 200,
       easing: "easeInOutCubic"
      },
      position: 2500
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        width:"40%"
       }
      },
      props: {
       selector: line,
       duration: 1000,
       delay:"@stagger(0,800)",
       easing: "linear"
      },
      position: 800
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        transform:{
          scale:1.05,
          translateX:"0px",
          translateY:"0px",
        }
       }
      },
      props: {
       selector,
       duration: 1500,
       easing: "linear"
      },
      position: 2100
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
       opacity:0
       }
      },
      props: {
       selector,
       duration: 1,
       easing: "linear"
      },
      position: 3900
     },
   ]
  },
  {
   selector: ".root",
  }
);

export const playerInfoCombo2 = (selector,img,logo,numberBack,lastnameBackLetter,lastnameBackLetterTop,lastnameLetter,firstnameLetter,numberBlock,firstnameBackground,line) => new Combo(
  {
   incidents: [
    {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        opacity:1
       }
      },
      props: {
       selector,
       duration: 1,
       easing: "linear"
      },
      position: 0
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        opacity:0.5
       }
      },
      props: {
       selector: lastnameBackLetter,
       duration: 300,
       delay:"@stagger(0,500)",
       easing: "linear"
      },
      position: 600
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        letterSpacing:"10px"
       }
      },
      props: {
       selector: lastnameBackLetter,
       duration: 600,
       easing: "linear"
      },
      position: 700
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        opacity:0
       }
      },
      props: {
       selector: lastnameBackLetterTop,
       duration: 300,
       delay:"@stagger(0,500)",
       easing: "linear"
      },
      position: 1500
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        opacity:1
       }
      },
      props: {
       selector: lastnameLetter,
       duration: 200,
       delay:"@stagger(0,300)",
       easing: "linear"
      },
      position: 900
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        letterSpacing:"10px"
       }
      },
      props: {
       selector: lastnameLetter,
       duration: 400,
       easing: "linear"
      },
      position: 1000
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        letterSpacing:"30px"
       }
      },
      props: {
       selector: numberBack,
       duration: 600,
       easing: "linear"
      },
      position: 600
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        left:"0%"
       }
      },
      props: {
       selector: numberBack,
       duration: 400,
       easing: "linear"
      },
      position: 600
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        opacity:1
       }
      },
      props: {
       selector: logo,
       duration: 200,
       easing: "linear"
      },
      position: 800
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        opacity:1
       }
      },
      props: {
       selector: firstnameLetter,
       duration: 200,
       delay:"@stagger(0,300)",
       easing: "linear"
      },
      position: 1700
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        width: "100%"
       }
      },
      props: {
       selector: firstnameBackground,
       duration: 400,
       easing: "linear"
      },
      position: 1700
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        opacity:1
       }
      },
      props: {
       selector: img,
       duration: 400,
       easing: "linear"
      },
      position: 600
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        opacity:1
       }
      },
      props: {
       selector: numberBlock,
       duration: 900,
       easing: "linear"
      },
      position: 1900
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        top:"-210px"
       }
      },
      props: {
       selector: numberBlock,
       duration: 200,
       easing: "easeInOutCubic"
      },
      position: 2200
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        top:"-410px"
       }
      },
      props: {
       selector: numberBlock,
       duration: 200,
       easing: "easeInOutCubic"
      },
      position: 2500
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        width:"40%"
       }
      },
      props: {
       selector: line,
       duration: 1000,
       delay:"@stagger(0,800)",
       easing: "linear"
      },
      position: 800
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
        transform:{
          scale:1.05,
          translateX:"0px",
          translateY:"0px",
        }
       }
      },
      props: {
       selector,
       duration: 1500,
       easing: "linear"
      },
      position: 2100
     },
     {
      incidentClass: CSSEffect,
      attrs: {
       animatedAttrs: {
       opacity:0
       }
      },
      props: {
       selector,
       duration: 1,
       easing: "linear"
      },
      position: 3900
     },
   ]
  },
  {
   selector: ".root",
  }
);

export const fontSize = (fontSize, selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs:{
        fontSize
      }
    },
    {
      selector,
      duration,
      easing,
    }
  );

export const scale = (scale, selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs:{
        transform:{
          scale
        }
      }
    },
    {
      selector,
      duration,
      easing,
    }
  );

export const opacity = (opacityNym=0, selector, duration, delay = 0, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: opacityNym,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );

export const moveTop = (
  top,
  selector,
  duration,
  delay = 0,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        top,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );

export const moveBottom = (
  bottom,
  selector,
  duration,
  delay = 0,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        bottom,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );

export const moveLeft = (
  left,
  selector,
  duration,
  delay = 0,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        left,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );

export const moveRight = (
  right,
  selector,
  duration,
  delay = 0,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        right,
      },
    },
    {
      selector,
      duration,
      easing,
      delay,
    }
  );

export const heightMove = (height, selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        height,
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

export const widthMove = (
  width,
  selector,
  duration,
  delay = 0,
  easing = "linear"
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        width,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );

  export const letterSpacing = (
    pixels,
    selector,
    duration,
    delay = 0,
    easing = "linear"
  ) =>
    new CSSEffect(
      {
        animatedAttrs: {
          letterSpacing:pixels,
        },
      },
      {
        selector,
        duration,
        delay,
        easing,
      }
    );

  export const changeColor = (
      color,
      selector,
      duration,
      delay = 0,
      easing = "linear"
    ) =>
      new CSSEffect(
        {
          animatedAttrs: {
            color
          },
        },
        {
          selector,
          duration,
          delay,
          easing,
        }
      );

    export const changeBackgroundColor = (
        color,
        selector,
        duration,
        delay = 0,
        easing = "linear"
      ) =>
        new CSSEffect(
          {
            animatedAttrs: {
              backgroundColor:color
            },
          },
          {
            selector,
            duration,
            delay,
            easing,
          }
        );
