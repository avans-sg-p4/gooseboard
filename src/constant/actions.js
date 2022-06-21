import {Question} from '../models/Question';
import { ReCaptcha } from '../models/ReCaptcha';

let actions = new Map();
let recaptcha = new ReCaptcha();

// Question 7
actions.set(7, new Question(
    "Hoe werkt algoritme op sociale media?",
    [
        'Bepaald wat je als eerst ziet op je pagina',
        'Zorgt ervoor dat je sneller op sociale media kan zijn',
        'Zorgt ervoor dat je veel op iemand anders zijn pagina te zien bent'        
    ],
    0,
    'Dit is omdat een algoritme van sociale media bekijkt wat je allemaal bekijkt en laat dit dan zien op je pagina.'    
));

// Question 9
actions.set(9, recaptcha);

// Question 12
actions.set(12, new Question(
    "Wat is een voordeel van een algoritme?",
    [
        'Verhoogde wifi snelheid',
        'Door patronen uit data te halen, kan je sneller een opdracht oplossen',
        'Je krijgt advertenties die je wilt zien'        
    ],
    1,
    'Dit is omdat een algoritme leert over wat de vorige keren fout is gegaan en kan je hierdoor in de toekomst opdracht sneller oplossen'   
));

// Question 17
actions.set(17, new Question(
    "Wat is een nadeel van een algoritme?",
    [
        'Een oneerlijk besluit kan genomen worden',
        'Je bent niet anoniem op het internet',
        'Je data wordt verwijderd'        
    ],
    0,
    'Dit kan bijvoorbeeld tijdens een rechtszaak zijn. Dit is wanneer er keuzes wordt gemaakt door data wat niet tot betrekking van de persoon in de rechtszaak is. Hierdoor wordt een beslissing gemaakt die niet betrekking heeft tot degene waar de rechtszaak over gaat.'   
));

// Question 20
actions.set(20, new Question(
    "Wat is een nadeel van een algoritme?",
    [
        'Een oneerlijk besluit kan genomen worden',
        'Je bent niet anoniem op het internet',
        'Je data wordt verwijderd'        
    ],
    0,
    'Dit kan bijvoorbeeld tijdens een rechtszaak zijn. Dit is wanneer er keuzes wordt gemaakt door data wat niet tot betrekking van de persoon in de rechtszaak is. Hierdoor wordt een beslissing gemaakt die niet betrekking heeft tot degene waar de rechtszaak over gaat.'   
));

// Question 23
actions.set(23, new Question(
    "Waarvoor worden algoritme gebruikt?",
    [
        'Vrijwel alle aspecten',
        'Sociale media, advertenties, online artikelen en datingapps',
        'Geen van de bovenstaande'        
    ],
    0,
    'Algoritmes komen je bijna overal wel tegen in het dagelijks leven'   
));

// Question 29
actions.set(29, new Question(
    "Word je in de gaten gehouden door een algoritme?",
    [
        'Ja',
        'Nee'
    ],
    0,
    'Een algoritme houdt in de gaten wat je allemaal doet op het internet, dus ja'   
));

// Question 32
actions.set(32, recaptcha);

// Question 35
actions.set(35, new Question(
    "Wat is het grootste twijfelpunt van een algoritme",
    [
        'Geen optimale sociale media',
        'Niet gewenste advertenties',
        'Privacy'        
    ],
    2,
    'Privacy blijft altijd het grootste vraagteken bij algoritmes. Er zijn veel vragen of al je data wordt opgeslagen, waardoor je niet veel privacy zou hebben'   
));

// Question 39
actions.set(39, recaptcha);

// Question 41
actions.set(41, new Question(
    "Waar kan een algoritme niet voor ingezet worden",
    [
        'Het maken van voor spellingen',
        'Het berekenen van een emoties',
        'Adviezen geven of beslissingen nemen door het gebruik van zelf lerende logica, statistiek of data-analyse'        
    ],
    1,
    'Dit is omdat een algoritme niet ingezet kan worden voor het berekenen van emoties, omdat een algoritme zich niet bewust is van de wereld; het herkent objecten, maar heeft geen benul van wat een object doet.'   
));

// Question 44
actions.set(44, recaptcha);

// Question 47
actions.set(47, new Question(
    "In welk geval kan een algoritme discrimineren",
    [
        'Bij het uitkiezen wie wel of geen fraude pleegt a.h.v vooraf bepaalde gegevens.',
        'Bij het bepalen hoeveel iemand moet betalen',
        'Bij het bepalen van de juiste match tussen personen'        
    ],
    0,
    'Dit is omdat een algoritme data van een bepaalde doelgroep kan gebruiken voor een bepaald persoon terwijl deze data niet bij dit persoon hoort. Bijvoorbeeld wanneer een algoritme leert over dat donkere mensen veel drugs handelen en dat een beslissing wordt gebaseerd op deze informatie voor een donkere man. '   
));

// Question 49
actions.set(49, new Question(
    "In welk geval kan een algoritme discrimineren",
    [
        'Bij het uitkiezen wie wel of geen fraude pleegt a.h.v vooraf bepaalde gegevens.',
        'Bij het bepalen hoeveel iemand moet betalen',
        'Bij het bepalen van de juiste match tussen personen'        
    ],
    0,
    'Dit is omdat een algoritme data van een bepaalde doelgroep kan gebruiken voor een bepaald persoon terwijl deze data niet bij dit persoon hoort. Bijvoorbeeld wanneer een algoritme leert over dat donkere mensen veel drugs handelen en dat een beslissing wordt gebaseerd op deze informatie voor een donkere man. '   
));

// Question 53
actions.set(53, new Question(
    "Hoe kan je een algoritme het beste beschrijven?",
    [
        'Een eindige reeks instructies met een vaste volgorde die de oplossing van een bepaald probleem omschrijft.',
        'De handelingen die een computer moet verrichten om een bepaalde opdracht uit te voeren.',
        'Een term uit de wiskunde, soort omgekeerd machtsverheffen'        
    ],
    0,
    ''   
));

export {actions};

