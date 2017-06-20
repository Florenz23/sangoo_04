import Immutable from 'immutable';

import Reply from './Reply'
import Post from './Post'

var post1= "Hat jemand verstanden, was bei dem Vortrag Gehaltsverhandlung einem die Grafik auf Folie 10 sagen sollte?"
var post2 = "Im Vortrag Industrie 4.0 waren aber einige ganz schön alte Daten verbaut und der Text war zu klein und viel zu viel..."
var post3 = "Vortrag: Energiewende im 21. Jh im Netz und Controlling Zeit:16.10 Uhr Raum: 201 Vortragender: Prof. Dr. Kleist, CEO von DRT"
var post4 = "Weiß jemand, ob die Firma DRT Bohrtechnik heute da ist?"
var post5 = "Wie wird man eigentlich diese Geschichtsstudenten los? Da stand schon wieder einer von denen 30 Minuten bei uns am Stand und hat mir ein Ohr abgekaut. Er wollte mir weiß machen, dass Helmut Kohl maßgeblich zur Industrialisierung beigetragen hat ?!"

const reply_message_11 = "Nein, tut mir Leid"
const reply_message_12 = "Dort wurde die Vernetzungszeiten vom 3-D Drucker mit dem Computergesteuerten Roboterarm aufgetragen. Dabei war der Fokus auf dem Ablaufprotokoll 4a."
const reply_message_13 = "Hat jemand auch noch die Kontaktdaten von dem Vortragenden?"
const reply_message_14 = "Danke für die Antwort. Gerhard Halber bin noch bis 16 Uhr da, kannst mich also bequem adden."
const reply_message_21 = "Quellen wären auch hilfreich gewesen"
const reply_message_22 = "Dozent aber sehr sympathisch, hatte wohl keine Zeit gehabt, die Folien noch einmal durchzugehen."
const reply_message_23 = "Die Grafiken waren durchaus hilfreich."
const reply_message_24 = "Danke für die Hilfe, ich werde die Präsentation nochmal überarbeiten."
const reply_message_31 = "Es sind noch 3 Plätze frei, recht informativ."
const reply_message_32 = "Auch super für #Medientechnik geeignet "
const reply_message_33 = "Danke habe einen der Plätze besetzt ☺"
const reply_message_41 = "Ja die sind am Messestand 39"
const reply_message_42 = "Kommt doch auf jeden Fall bei uns #DRT Bohrtechnik vorbei, wir haben eine ganze Menge offener Praktika und Jobs im Bereich #Ingenieur #Bohrtechnik #Geowissenschaften für euch mitgebracht."
const reply_message_43 = "Der leuchtende Kuli lohnt sich ☺"
const reply_message_44 = "Also für Geologen ist leider nichts dabei..."
const reply_message_45 = "Da haben sich unsere Marketingkollegen wieder etwas Tolles einfallen lassen. Falls ihr es noch nicht wisst, unser #DRT CEO hält um 16:10 Uhr einen Vortrag im Raum 201 zum Thema “Energiewende im 21. Jh im Netz und Controlling“. Ihr seid alle herzlich eingeladen."
const reply_message_51 = "Mit 30 Minuten kannst du dich aber noch glücklich schätzen..."
const reply_message_52 = "Oh... tut mir leid, sie haben aber so interessiert gewirkt..."
const reply_message_53 = "Tja, nette Menschen kommen nicht weit."

const muserPost1 = {
  id : 1,
  message : post1,
  rating : 55,
  distance : 300,
  replies : [
    { id: 1 ,
      message : reply_message_11,
      rating : 30
    },
    { id: 2 ,
      message : reply_message_12,
      rating : 14
    },
    { id: 3 ,
      message : reply_message_13,
      rating : 25
    },
    { id: 4 ,
      message : reply_message_13,
      rating : 18
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
      rating : 22
    },
    { id: 2 ,
      message : reply_message_22,
      rating : 19
    },
    { id: 3 ,
      message : reply_message_23,
      rating : 22
    },
    { id: 4 ,
      message : reply_message_24,
      rating : 17
    }
  ],
  bgColor : "#f53240",
}
const muserPost3 = {
  id : 3,
  message : post3,
  rating : 50,
  distance : 300,
  replies : [
    { id: 1 ,
      message : reply_message_31,
      rating : 7
    },
    { id: 2 ,
      message : reply_message_32,
      rating : 19
    },
    { id: 3 ,
      message : reply_message_33,
      rating : 30
    }
  ],
  bgColor : "#f9be02",
}
const muserPost4 = {
  id : 4,
  message : post4,
  rating : 40,
  distance : 300,
  replies : [
    { id: 1 ,
      message : reply_message_41,
      rating : 30
    },
    { id: 2 ,
      message : reply_message_42,
      rating : 21
    },
    { id: 3 ,
      message : reply_message_43,
      rating : 15
    },
    { id: 4 ,
      message : reply_message_44,
      rating : 5
    },
    { id: 5 ,
      message : reply_message_45,
      rating : 32
    }
  ],
  bgColor : "#7cdbd5",
}
const muserPost5 = {
  id : 5,
  message : post5,
  rating : 35,
  distance : 300,
  replies : [
    { id: 1 ,
      message : reply_message_51,
      rating : 11
    },
    { id: 2 ,
      message : reply_message_52,
      rating : 8
    },
    { id: 3 ,
      message : reply_message_53,
      rating : 20
    }
  ],
  bgColor : "#7cdbd5",
}

posts  = [muserPost4,muserPost5,muserPost2,muserPost3,muserPost1]
const posts  = Immutable.fromJS(posts)

export default posts
