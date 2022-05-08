export default {
    baseColor: {
      label: "Base Color",
      type: "color",
      optional: true,
      default: "black",
    },
    backgroundColor: {
      label: "Background Color",
      type: "color",
      optional: true,
      default: "#181818",
    },
    accentColor: {
        label: "Accent Color",
        type: "color",
        optional: true,
        default: "#FFFFFF",
    },
    accentRGBAColor: {
      label: "Accent RGBA Color",
      type: "color",
      optional: true,
      default: "#FFFFFF1A",
    },
    primaryColor: {
      label: "Primary Color",
      type: "color",
      optional: true,
      default: "#bb1414",
    },
    secondaryColor: {
      label: "Secondary Color",
      type: "color",
      optional: true,
      default: "#ff3da2",
    },
    logo: {
      label: "Logo",
      type: "string",
      optional: true,
      default: "https://donkeyclip.github.io/sports-clip/demo/assets/logo.png",
    },
    audio: {
      label: "Audio",
      type: "string",
      optional: true,
      default:"https://donkeyclip.github.io/sports-clip/demo/assets/sportsAudio.mp3",
    },
    intro: {
      label: "Intro Slide",
      type: "object",
      optional: true,
      default:{
        name:["MANCHESTER","UNITED"],
        subtitle:["team","intro"] 
      }
    },
    player1: {
      label: "Player 1",
      type: "object",
      optional: true,
      props:{
        number:"string",
        firstname:"string",
        lastname:"string",
        img:"string"
      },
      default:{
        number:"01",
        firstname:"David",
        lastname:"De Gea",
        img:"https://donkeyclip.github.io/sports-clip/demo/assets/davidDeGea.png"
      }
    },
    player2: {
      label: "Player 2",
      type: "object",
      optional: true,
      props:{
        number:"string",
        firstname:"string",
        lastname:"string",
        img:"string"
      },
      default:{
        number:"05",
        firstname:"Harry",
        lastname:"Maguire",
        img:"https://donkeyclip.github.io/sports-clip/demo/assets/harry.png"
      }
    },
    player3: {
      label: "Player 3",
      type: "object",
      optional: true,
      props:{
        number:"string",
        firstname:"string",
        lastname:"string",
        img:"string"
      },
      default:{
        number:"06",
        firstname:"Paul",
        lastname:"Pogba",
        img:"https://donkeyclip.github.io/sports-clip/demo/assets/pogba.png"
      }
    },
    player4: {
      label: "Player 4",
      type: "object",
      optional: true,
      props:{
        number:"string",
        firstname:"string",
        lastname:"string",
        img:"string"
      },
      default:{
        number:"07",
        firstname:"Cristiano",
        lastname:"Ronaldo",
        img:"https://donkeyclip.github.io/sports-clip/demo/assets/ronaldo.png"
      }
    },
    player5: {
      label: "Player 5",
      type: "object",
      optional: true,
      props:{
        number:"string",
        firstname:"string",
        lastname:"string",
        img:"string"
      },
      default:{
        number:"10",
        firstname:"Marcus",
        lastname:"Rashford",
        img:"https://donkeyclip.github.io/sports-clip/demo/assets/rashford.png"
      }
    },
    player6: {
      label: "Player 6",
      type: "object",
      optional: true,
      props:{
        number:"string",
        firstname:"string",
        lastname:"string",
        img:"string"
      },
      default:{
        number:"18",
        firstname:"Bruno",
        lastname:"Fernandes",
        img:"https://donkeyclip.github.io/sports-clip/demo/assets/bruno.png"
      }
    },
  };