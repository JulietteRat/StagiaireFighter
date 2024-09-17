const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".amelie");
const closeModalBtn = document.querySelector(".btn-close");
const modalinfo = document.querySelector(".infos");

//add event chaque image
const interns = document.querySelectorAll(".intern");

for (let intern of interns) {
  intern.addEventListener("click", openModal);
  intern.addEventListener("click", changeModal);
}

// function pour ouvrir la div cache avec les infos
//openModalBtn.addEventListener("click", openModal);
function openModal() {
  const audio = new Audio("./assets/sound/coin_1.mp3");
  audio.play();   
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}


// function pour fermer la div avec les infos
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);

function changeModal(evt) {
  const src = evt.target;
  const num = src.dataset["num"];
  const intern = infoPopup[num];
  document.querySelector("#modal .infos .name>span").textContent = intern.nome;
  document.querySelector("#modal .infos .lastName>span").textContent = intern.surname;
  document.querySelector("#modal .infos .country>span").textContent = intern.pays;
  document.querySelector("#modal .phAc>span").textContent = intern.frase;
  document.querySelector("#modal a").href = intern.resSoc;
  document.querySelector("#modal .infos img").src = intern.foto;

  // Abrir o modal
  // Código para abrir o modal, dependendo do método/modal que você está usando
  // ...
}

const infoPopup = [
  {
    nome: "Name: Amélie",
    surname: "LastName: Pruvost",
    pays: "Country: Scotland",
    frase: "En programmation objet, je crée des instances de succès avec la même détermination qu'un combattant choisit son personnage dans Street Fighter.",
    resSoc: "https://www.linkedin.com/in/am%C3%A9lie-solanas-pruvost-49a589242/",
    foto: "./assets/img/intern/Amélie.jpeg",
  },
  {
    nome: "Name: Anastasiia",
    surname: "LastName: Shlapak",
    pays: "Country: Ukraine",
    frase: "Mes classes et objets sont comme des guerriers bien entraînés, prêts à défendre le royaume du code.",
    resSo: "https://www.linkedin.com/in/anastasiia-shlapak/",
    foto: "./assets/img/intern/Anastasia.jpeg",
  },
  {
    nome: "Name: Caroline",
    surname: "LastName: Bergé",
    pays: "Country: Spain",
    frase: "Je manie l'encapsulation et l'héritage comme des mouvements spéciaux, créant une hiérarchie de code imbattable.",
    resSoc: "https://www.linkedin.com/in/caroline-berg%C3%A9-396646109/",
    foto: "./assets/img/intern/Caroline.jpeg",
  },
  {
    nome: "Name: Elisa",
    surname: "LastName: Bothy",
    pays: "Country: France",
    frase: "Les méthodes que je code sont comme des attaques spéciales, précises et redoutables dans l'arène de la programmation objet.",
    resSoc: "https://www.linkedin.com/in/elisa-bothy-a457b1225/",
    foto: "./assets/img/intern/Elisa.jpeg",
  },
  {
    nome: "Name: Federico",
    surname: "LastName: Manca",
    pays: "Country: Italy",
    frase: "Mon code est plus solide qu'une défense de Chun-Li, grâce à l'encapsulation qui protège mes données.",
    resSoc: "https://www.linkedin.com/in/federico-manca-48a9981b9/",
    foto: "./assets/img/intern/Federico.jpeg",
  },
  {
    nome: "Name: Guillaume",
    surname: "LastName: Rostagnat",
    pays: "Country: Corse",
    frase: "Comme un maître en arts martiaux, je gère les polymorphismes avec agilité, changeant de forme pour répondre à chaque situation.",
    resSoc: "https://www.linkedin.com/in/guillaume-rostagnat-299002200/",
    foto: "./assets/img/intern/Guillaume.jpeg",
  },
  {
    nome: "Name: Igor",
    surname: "LastName: Martellote",
    pays: "Country: Brazil",
    frase: "Les relations entre mes classes sont comme une équipe bien coordonnée, travaillant ensemble pour remporter la victoire.",
    resSoc: "https://www.linkedin.com/in/igor-martellote/",
    foto: "./assets/img/intern/Igor.jpeg",
  },
  {
    nome: "Name: Joan",
    surname: "LastName: Paupardin",
    pays: "Country: France",
    frase: "Dans le dojo du développement, la programmation objet est ma discipline, je sculpte des structures robustes comme un expert en katas.",
    resSoc: "https://www.linkedin.com/in/joan-paupardin-a448022a0/",
    foto: "./assets/img/intern/Joan.jpeg",
  },
  {
    nome: "Name: Jonathan",
    surname: "LastName: Dah",
    pays: "Country: Cameroon",
    frase: "Mon approche orientée objet est comme un combo fluide de mouvements, orchestrant la symphonie du code avec précision.",
    resSoc: "https://www.linkedin.com/",
    foto: "./assets/img/intern/Jonathan.jpeg",
  },
  {
    nome: "Name: Juliette",
    surname: "LastName: Rat",
    pays: "Country: France",
    frase: "Quand je code en objet, chaque classe est un combattant unique, apportant sa propre force et intelligence à l'équipe de développement",
    resSoc: "https://www.linkedin.com/in/juliette-rat-b36b42216/",
    foto: "./assets/img/intern/Juliette.jpeg",
  },
  {
    nome: "Name: Kevin",
    surname: "LastName: Hoppenot",
    pays: "Country: Laos",
    frase: "En programmation objet, mes objets interagissent comme des partenaires stratégiques dans une bataille de code.",
    resSoc: "https://www.linkedin.com/in/k%C3%A9vin-hoppenot-47066b149/",
    foto: "./assets/img/intern/Kevin.jpeg",
  },
  {
    nome: "Name: Klervia",
    surname: "LastName: Picaud",
    pays: "Country: France",
    frase: "Je modèle mes classes avec la même précision qu'un maître d'arts martiaux, créant un arsenal de fonctionnalités redoutables.",
    resSoc: "https://www.linkedin.com/in/klervia-picaud-9508022a0/",
    foto: "./assets/img/intern/Klervia.jpeg",
  },
  {
    nome: "Name: Licorne",
    surname: "LastName: LDNR",
    pays: "Country: France",
    frase: "J'aime me battre et le C++",
    resSoc: "https://www.linkedin.com/school/ldnr-formation/",
    foto: "./assets/img/intern/Licorne.jpeg",
  },
  {
    nome: "Name: Mohamad",
    surname: "LastName: AlMustafa",
    pays: "Country: Syria (Sham)",
    frase: "Les méthodes abstraites sont mes mouvements spéciaux, laissant une empreinte puissante dans l'arène de la programmation.",
    resSoc: "https://www.linkedin.com/in/mohamad-almustafa-3502a469/",
    foto: "./assets/img/intern/Mohamad.jpeg",
  },
  {
    nome: "Name: Ralph",
    surname: "LastName: Lee",
    pays: "Country: United Kingdom",
    frase: "En programmation objet, je conçois mes interfaces tel un menu de compétences, offrant des options puissantes pour résoudre chaque problème.",
    resSoc: "https://www.linkedin.com/in/ralph-lee-a8b536213/",
    foto: "./assets/img/intern/Ralph.jpeg",
  },
  {
    nome: "Name: thais",
    surname: "LastName: Genin",
    pays: "Country: France",
    frase: "La surcharge d'opérateurs est mon art du combat, permettant des interactions élégantes entre mes classes.",
    resSoc: "https://www.linkedin.com/in/tha%C3%AFs-genin-291647271/",
    foto: "./assets/img/intern/Thais.jpeg",
  },
  {
    nome: "Name: Valentina",
    surname: "LastName: Sarais ",
    pays: "Country: Italy",
    frase: "Mes instances sont des guerriers autonomes, prêts à entrer en action et à défendre l'intégrité du code.",
    resSoc: "https://www.linkedin.com/in/valentina-sarais-85a2ab90/",
    foto: "./assets/img/intern/Valentina.jpeg",
  },
  {
    nome: "Name: Wiame",
    surname: "LastName: ElAlami ",
    pays: "Country: Morocco",
    frase: "La polymorphie dans mon code est comme une danse fluide, chaque objet pouvant exprimer sa propre version de la chorégraphie.",
    resSoc: "https://www.linkedin.com/in/wiame-elalami/",
    foto: "./assets/img/intern/Wiame.jpeg",
  },
  {
    nome: "Name: Herbert",
    surname: "LastName: Caffarel ",
    pays: "Country: France",
    frase: "Le C++ est mon ami",
    resSoc: "https://www.linkedin.com/in/herbert-caffarel-05b351138/",
    foto: "./assets/img/intern/Herbert.jpeg",
  }
]

// Va chercher les objets 

