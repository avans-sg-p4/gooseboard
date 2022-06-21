import { ImageQuestion } from "../models/ImageQuestion";
let images = new Map();

images.set(
  0,
  new ImageQuestion(
    "Welk dier is te zien op onderstaande afbeelding?",
    require("../../assets/recaptcha/kat.jpg"),
    ["Leeuw", "Hond", "Kat", "Paard"],
    2
  )
);

images.set(
  1,
  new ImageQuestion(
    "Welk dier is te zien op onderstaande afbeelding?",
    require("../../assets/recaptcha/paard.jpg"),
    ["Hond", "Paard", "Leeuw", "Kat"],
    1
  )
);

images.set(
  2,
  new ImageQuestion(
    "Welk voertuig is te zien op onderstaande afbeelding?",
    require("../../assets/recaptcha/saab.jpg"),
    ["Auto", "Vliegtuig", "Motor", "Fiets"],
    0
  )
);

images.set(
  3,
  new ImageQuestion(
    "Welk voertuig is te zien op onderstaande afbeelding?",
    require("../../assets/recaptcha/vliegtuig.jpg"),
    ["Auto", "Fiets", "Motor", "Vliegtuig"],
    3
  )
);

images.set(
  4,
  new ImageQuestion(
    "Welk fruitsoort is te zien op onderstaande afbeelding?",
    require("../../assets/recaptcha/sinaasappel.jpg"),
    ["Appel", "Peer", "Sinaasappel", "Banaan"],
    2
  )
);

images.set(
  5,
  new ImageQuestion(
    "Welk fruitsoort is te zien op onderstaande afbeelding?",
    require("../../assets/recaptcha/banaan.jpg"),
    ["Sinaasappel", "Peer", "Appel", "Banaan"],
    3
  )
);

images.set(
  6,
  new ImageQuestion(
    "Welk soort servies is te zien op onderstaande afbeelding?",
    require("../../assets/recaptcha/beker.jpg"),
    ["Mes", "Vork", "Bord", "Beker"],
    3
  )
);

images.set(
  7,
  new ImageQuestion(
    "Welk soort servies is te zien op onderstaande afbeelding?",
    require("../../assets/recaptcha/vork.jpg"),
    ["Beker", "Vork", "Mes", "Bord"],
    1
  )
);

images.set(
  8,
  new ImageQuestion(
    "Welk sportartikel is te zien op onderstaande afbeelding?",
    require("../../assets/recaptcha/frisbee.jpg"),
    ["Frisbee", "Voetbal", "Skateboard", "Tennis Racket"],
    0
  )
);

images.set(
  9,
  new ImageQuestion(
    "Welk sportartikel is te zien op onderstaande afbeelding?",
    require("../../assets/recaptcha/racket.jpg"),
    ["Voetbal", "Skateboard", "Tennis Racket", "Frisbee"],
    2
  )
);

export { images };
