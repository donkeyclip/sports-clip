export default {
    styles:{
      label:"Style Sheet",
      type:"object",
      props:{
        baseColor: {
          label: "Base Color",
          type: "color",
        },
        backgroundColor: {
          label: "Background Color",
          type: "color",
        },
        accentColor: {
            label: "Accent Color",
            type: "color",
        },
        accentRGBAColor: {
          label: "Accent RGBA Color",
          type: "color",
        },
        primaryColor: {
          label: "Primary Color",
          type: "color",
        },
        secondaryColor: {
          label: "Secondary Color",
          type: "color",
        },
      }
    },
    logo: {
      label: "Logo",
      type: "string",
    },
    audio: {
      label: "Audio",
      type: "string",
    },
    intro: {
      label: "Intro Slide",
      type: "object",
      props:{
        name:{
          type:"array",
          items:{
            type:"string"
          }
        },
        subtitle:{
          type:"array",
          items:{
            type:"string"
          }
        }
      }
    },
    player1: {
      label: "Player 1",
      type: "object",
      props:{
        number:{
          label:"Number",
          type:"string"},
        firstname:{
          label:"First Name",
           type:"string"},
        lastname:{
          label:"Last Name",
          type:"string"},
        img:{
          label:"Image",
          type:"string"}
      },
    },
    player2: {
      label: "Player 2",
      type: "object",
      props:{
        number:{
          label:"Number",
          type:"string"},
        firstname:{
          label:"First Name",
           type:"string"},
        lastname:{
          label:"Last Name",
          type:"string"},
        img:{
          label:"Image",
          type:"string"}
      },
    },
    player3: {
      label: "Player 3",
      type: "object",
      props:{
        number:{
          label:"Number",
          type:"string"},
        firstname:{
          label:"First Name",
           type:"string"},
        lastname:{
          label:"Last Name",
          type:"string"},
        img:{
          label:"Image",
          type:"string"}
      },
    },
    player4: {
      label: "Player 4",
      type: "object",
      props:{
        number:{
          label:"Number",
          type:"string"},
        firstname:{
          label:"First Name",
           type:"string"},
        lastname:{
          label:"Last Name",
          type:"string"},
        img:{
          label:"Image",
          type:"string"}
      },
    },
    player5: {
      label: "Player 5",
      type: "object",
      props:{
        number:{
          label:"Number",
          type:"string"},
        firstname:{
          label:"First Name",
           type:"string"},
        lastname:{
          label:"Last Name",
          type:"string"},
        img:{
          label:"Image",
          type:"string"}
      },
    },
    player6: {
      label: "Player 6",
      type: "object",
      props:{
        number:{
          label:"Number",
          type:"string"},
        firstname:{
          label:"First Name",
           type:"string"},
        lastname:{
          label:"Last Name",
          type:"string"},
        img:{
          label:"Image",
          type:"string"}
      },
    },
  };