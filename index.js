import confetti from 'https://cdn.skypack.dev/canvas-confetti';

let btn = document.getElementById('button');
let txt = document.querySelector('#text');

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
"Nam Jong",
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
"buenas noches amor",
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
"😪"
];

function boom() {
    confetti();
}

function print() {
    let rand = Math.floor(Math.random() * 87);
    let phrase = phrases[rand]; 
    txt.innerHTML = phrase;
}

btn.addEventListener('click', print);
btn.addEventListener('click', boom);
