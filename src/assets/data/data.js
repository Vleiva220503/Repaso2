import repetidor from "../images/Repetidor2.jpg"
import router from "../images/Router.jpg"	
import  Switch from "../images/Switch.jpg"
import Hub from "../images/Hub.jpg"
import Bri from "../images/Bir.png"
import Gat from "../images/Gate2.jpg"
import Brou from "../images/Brou2.jpg"
export const nav = [
  {
    id: 1,
    text: "Atras",
    url: "/",
  },
]
export const category = [
  {
    id: 1,
    category: "",
    title: "",
    cover: Switch,
  },
  {
    id: 2,
    category: "Hub",
    title: "",
    cover: Hub,
  },
  {
    id: 3,
    category: "BRIDGES",
    title: "",
    cover: Bri,
  },
  {
    id: 4,
    category: "Repetidor",
    title: "",
    cover: repetidor,
  },
  {
    id: 5,
    category: "",
    title: "",
    cover: router,
  },
  {
    id: 6,
    category: "Gateway",
    title: "",
    cover: Gat,
  },
  {
    id: 7,
    category: "Brouter",
    title: "",
    cover: Brou,
  },
]
export const blog = [
  {
    id: 1,
    title: "Repetidores",
    desc: "Un repetidor en el contexto de Dispositivos de Interconexión de Redes es un componente fundamental que nos permite extender la cobertura de una red inalámbrica o cableada. Más detalle:",
    category: "Dispositivos interconexión",
    cover: repetidor,
  },

  {
    id: 2,
    title: "Routers",
    desc: "Un router es un dispositivo de hardware que conecta una red local con Internet. Su función principal es gestionar el tráfico de datos entre dispositivos. Permíteme explicarte más detalladamente",
    category: "Dispositivos interconexión",
    cover: router,
  },
  {
    id: 3,
    title: " Switch",
    desc: "Un switch en el contexto de Dispositivos de Interconexión de Redes es un componente fundamental que nos permite extender la cobertura de una red inalámbrica o cableada.",
    category: "Redes de computador",
    cover: Switch,
  },
  {
    id: 4,
    title: "Concentrador o Hub",
    desc: "Un concentrador, también conocido como hub, es un dispositivo de red que permite centralizar diferentes nodos de una red de computadoras  Su función principal, establecer una conexión entre un número indefinido de computadoras y permitir el intercambio de datos",
    cover:Hub,
    category: "HUB",
  },
  {
    id: 5,
    title: "BRIDGES",
    desc: "Un bridge, también conocido como puente de red, es un dispositivo utilizado en redes de computadoras para conectar segmentos de red diferentes. Su función principal es la de interconectar dos o más redes que utilizan diferentes protocolos de comunicación, permitiendo que los dispositivos de una red se comuniquen con los dispositivos de la otra red.",
    category: "BRIDGES",
    cover: Bri,
  },
  {
    id: 6,
    title: "Gateway",
    desc:"Un Gateway o puerta de enlace de red es un dispositivo que conecta dos o más redes diferentes, lo que permite que los datos fluyan entre ellas. Actúa como un puente entre dos redes, facilitando la comunicación entre ellas",
    category: "Gateway",
    cover: Gat,
  },
  {
    id: 7,
    title: "Brouter",
    desc:"Un Brouter es un dispositivo que hace de puente y enruta paquetes de datos entre redes de ordenadores. Los brouters se utilizan para conectar dos o más redes informáticas y enrutar los paquetes de datos entre ellas",
    category: "Brouter",
    cover:Brou,
  },
]
