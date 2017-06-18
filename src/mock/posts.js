import Immutable from 'immutable';

import Reply from './Reply'
import Post from './Post'

var post1= "Hat jemand verstendn, was auf Folie 10 im Diagramm dargestellt war?"
var post2 = "Oh man, da waren aber einige ganz schön alte Daten im Vortrag verbaut und der Text war zu klein und viel zu viel…….."
var post3 = "Vortrag: Energiewende im 21. Jh im Netz und Controlling Zeit:16.10 Uhr Raum: 201 Vortragender: Prof. Dr. Kleist, CEO von DRT"
var post4 = "Hat jemand Plan ob die Firma DRT Bohrtechnik da ist?"

const reply_message_11 = "Nein, tut mir Leid"
const reply_message_12 = "Dort wurde die Vernetzungszeiten vom 3-D Drucker mit dem Computergesteuerten Roboterarm aufgetragen. Dabei war der Fokus auf dem Ablaufprotokoll 4a."
const reply_message_13 = "Hat jemand auch noch die Kontaktdaten von dem Vortragenden?"
const reply_message_14 = "Danke für die Antwort. Gerhard Halber bin noch bis 16 Uhr da, kannst mich also bequem adden."
const reply_message_21 = "… Quellen wären auch hilfreich gewesen"
const reply_message_22 = "Danke für die Hilfe, ich werde die Präsentation nochmal überarbeiten."
const reply_message_31 = "Es sind noch 3 Plätze frei, recht informativ."
const reply_message_32 = "Auch super für #Medientechnik geeignet "
const reply_message_33 = "Danke habe einen der Plätze besetzt ☺"
const reply_message_41 = "Ja die sind am Messestand 39"
const reply_message_42 = "Kommt doch auf jeden Fall bei #DRT Bohrtechnik vorbei, wir haben eine ganze Menge offener Praktika und Jobs im Bereich #Ingenieur #Bohrtechnik #Geowissenschaften"
const reply_message_43 = "Der leuchtende Kuli lohnt sich ☺"
const reply_message_44 = "Da haben sich unsere Marketingkollegen wieder etwas Tolles einfallen lassen. Falls ihr es noch nicht wisst, unser #DRT CEO hält um 16:10 Uhr einen Vortrag im Raum 201 zum Thema “Energiewende im 21. Jh im Netz und Controlling“. Ihr seid alle herzlich eingeladen."

const muserPost1 = {
  id : 1,
  message : post1,
  rating : 55,
  distance : 300,
  replies : [
    { id: 1 ,
      message : reply_message_11,
      rating : 11
    },
    { id: 2 ,
      message : reply_message_12,
      rating : 12
    },
    { id: 3 ,
      message : reply_message_13,
      rating : 13
    },
    { id: 4 ,
      message : reply_message_13,
      rating : 20
    }
  ],
  bgColor : "#7cdbd5",
}
const muserPost2 = {
  id : 2,
  message : post2,
  rating : 45,
  distance : 300,
  replies : [
    { id: 1 ,
      message : reply_message_21,
      rating : 11
    },
    { id: 2 ,
      message : reply_message_22,
      rating : 12
    }
  ],
  bgColor : "#f53240",
}
const muserPost3 = {
  id : 3,
  message : post3,
  rating : 35,
  distance : 300,
  replies : [
    { id: 1 ,
      message : reply_message_31,
      rating : 11
    },
    { id: 2 ,
      message : reply_message_32,
      rating : 12
    },
    { id: 3 ,
      message : reply_message_33,
      rating : 13
    }
  ],
  bgColor : "#f9be02",
}
const muserPost4 = {
  id : 4,
  message : post4,
  rating : 35,
  distance : 300,
  replies : [
    { id: 1 ,
      message : reply_message_41,
      rating : 11
    },
    { id: 2 ,
      message : reply_message_42,
      rating : 12
    },
    { id: 3 ,
      message : reply_message_43,
      rating : 13
    },
    { id: 4 ,
      message : reply_message_43,
      rating : 13
    }
  ],
  bgColor : "#7cdbd5",
}

posts  = [muserPost1,muserPost2,muserPost3,muserPost4]
const posts  = Immutable.fromJS(posts)

export default posts
