import {spotify, airbnb, twitter, reactjs, nextjs, tailwind, framer, typescript, nextauth, mongodb} from '../../images/index'


export const SliderData = [
  { id:1,
    mainImg:twitter,
    secondaryImg:[
      { sId:11,
        img:reactjs,
        name:'ReactJS'
      },
      { sId:12,
        img:nextjs,
        name:'NextJS'
      },
      { sId:13,
        img:nextauth,
        name:'NextAuth'
      },
      { sId:14,
        img: typescript,
        name:'Typescript'
      },
      { sId:15,
        img:tailwind,
        name:'Tailwind CSS'
      },
      { sId:16,
        img:mongodb,
        name:'MongoDB'
      }
    ],
    url:'https://twitter-got-cloned.vercel.app/',
  },
  { id:2,
    mainImg:spotify,
    secondaryImg:[
      { sId:21,
        img:reactjs,
        name:'ReactJS'
      },
      { sId:22,
        img:nextjs,
        name:'NextJS'
      },
      { sId:23,
        img:tailwind,
        name:'Tailwind CSS'
      },
    ],
    url:'https://spotify-clone-yt-rust.vercel.app/',
  },
  { id: 3,
    mainImg:airbnb,
    secondaryImg:[
      { sId:31,
        img:reactjs,
        name:'ReactJS'
      },
      { sId:32,
        img:nextjs,
        name:'NextJS'
      },
      { sId:33,
        img:tailwind,
        name:'Tailwind CSS'
      },
      { sId:34,
        img:framer,
        name:'ReactJS'
      }
    ],
    url:'https://airbnb-yt-vinxe08.vercel.app/',
  },
]