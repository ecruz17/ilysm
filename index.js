import confetti from 'https://cdn.skypack.dev/canvas-confetti';

let btn = document.getElementById('button');
let txt = document.querySelector('#text');
let imgContainer = document.querySelector('#img-container');

const phrases = [
    "Panchita",
    "No pasa nada oigaaa",
    "Afife",
    "Yocha chingu",
    "Fáciiil",
    "Como sin nadaaa 😋",
    "Chiii? 🥺",
    "Añeñe",
    "kierooo",
    "Po k?",
    "el audiooo",
    "embeces",
    "si se puede oigaa",
    "pofavo",
    "feli c:",
    "ricooo",
    "duele panchita",
    "aveeeer",
    "Nam Joon",
    "A manejar",
    "RECIO",
    "A la FEC",
    "No pasa la rutaaa",
    "La vdd",
    "vavava",
    "arreee",
    "Güichis",
    "Mi amorcito me va a mantener",
    "Te amo mucho",
    "Te amooo",
    "Ilysm",
    "Ily",
    "qué monitooo 🥺",
    "cuentaaa",
    "chismesito",
    "Ayñññ",
    "ahoritaaaa",
    "Te amodoro",
    "Me encantas",
    "invitaaa",
    "amos",
    "esooooo",
    "ayyyy",
    "siiiuuuu",
    "alratooo",
    "me kiero mimir",
    "ayno",
    "ausilioOo",
    "AGHhhHh",
    "grande UdeC",
    "buenas noches amor ❤",
    "amonos recio",
    "Fifi",
    "se antoja",
    "no antoje",
    "eyyy",
    "el lunes sin falta krnal",
    "ahí maomeno",
    "noOooO",
    "ora pues",
    "wueno",
    "ahijodesushingadamadre",
    "fino",
    "JAJAJAJAJA",
    "fresco",
    "noombreee",
    "imagínate",
    "cómo amaneció mi amorcito?",
    "ya casiiiiii",
    "ya meritoo",
    "pero yo te amo 🥺",
    "quedé",
    "uff",
    "ya hace falta",
    "cailee",
    "los tickets",
    "TP",
    "reu en discord",
    "happy week",
    "licencia de Patricio",
    "híjole",
    "al ranchito",
    "ahhhh",
    "cómo así oiga?",
    "meno pueshhh 😋",
    "meno 😋",
    "😪",
    "chamaco miado",
    "Meón",
    "Pihuamo",
    "El INE",
    "Chalequitos",
    "Mesaniversario 🥰",
    "Dimeeee",
    "a la cuenta de 3 voy a llorar 🥺",
    "me encanta estar contigo",
    "me haces mejor persona",
    "amo todo de tí ❤️",
    "como sin nadaaa",
    "échele ganas oiga",
    "oí nomaaaas",
    "beshito 🥰",
    "añeñe añeñe 😋",
    "Miraaa",
    "EHHH",
    "a las 7 o qué?",
    "clases de canto",
    "club de dibujo 😪",
    "ayyy pofavo 🥺",
    "(inserte sticker de patricio)",
    "con la awue",
    "t amo bebé ❤",
    "👀👀",
    "a",
    "manda fotooo",
    "ora pues",
    "te amo mucho 😋❤",
    "me va a hacer madrugar oiga 😪",
    "Logística y Gestión Aduanal",
    "ahhhhh",
    "wey noOoOo 😫",
    "Mi BEBÉ ❤️",
    "jijijijijijijij",
    "gatito nojao",
    "G A T I T O S :3",
    "Ali Express 🤑",
    "patooo 🐈",
    "CoreaAaAa",
    "La Bella Italia 🤏",
    "trabajar gratisss",
    "sueltame me estás lastimandooo",
    '<img src="resources/gato_nojao.jpeg">',
    '<img src="resources/ajo.png">',
    '<img src="resources/besito.png">',
    '<img src="resources/burbuja.png">',
    '<img src="resources/cat_fun.png">',
    '<img src="resources/cats_kiss.png">',
    '<img src="resources/cry.png">',
    '<img src="resources/ctm_udc.png">',
    '<img src="resources/dino_love.gif">',
    '<img src="resources/encima.png">',
    '<img src="resources/fino_emoji.png">',
    '<img src="resources/folr.png">',
    '<img src="resources/jijiji.png">',
    '<img src="resources/love_cat.png">',
    '<img src="resources/lovely.png">',
    '<img src="resources/mia.png">',
    '<img src="resources/pa_ti.png">',
    '<img src="resources/pablo.png">',
    '<img src="resources/para_uste.gif">',
    '<img src="resources/perrito_bailarin.gif">',
    '<img src="resources/te_amo.png">',
    '<img src="resources/tiste_sentones.png">',
    '<img src="resources/veso.png">',
];

console.log(phrases.length);

function boom() {
    confetti();
}

function print() {
    let rand = Math.floor(Math.random() * 153);
    let phrase = phrases[rand];
    if (rand < 132) {
        txt.innerHTML = phrase;
        imgContainer.innerHTML = "";
    } else {
        imgContainer.innerHTML = phrase;
        txt.innerHTML = "";
    }
}

btn.addEventListener('click', print);
btn.addEventListener('click', boom);
