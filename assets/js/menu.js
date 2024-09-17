// Création de la variable "play" à partir de l'identifiant "PLAY" pour le bouton du même nom
const play = document.getElementById("PLAY");

// Evenement qui amène le click sur la bouton "PLAY" à lancer la fonction "soundMenu"
play.addEventListener("click", soundMenu);

// Evenement qui amène le click sur la bouton "PLAY" à lancer la fonction "allAppaear"
play.addEventListener("click", allAppaear);

// Création de la variable "select" à partir de l'identifiant "SELECT" pour le bouton "SELECT PLAYER"
const select = document.getElementById("SELECT");

// Evenement qui amène le passage du pointeur de la souris sur la bouton "SELECT PLAYER" à lancer la fonction "soundFight"
select.addEventListener("mouseover", soundFight);

// Fonction qui lance l'audio du bouton à cliquer "SELECT" amenant à la page html de sélection des stagiaires
function soundFight() {
  var fight = new Audio();
  fight.src = "./assets/sound/fight.mp3";
  fight.play();
}

//  Fonction qui lance l'audio de la page du menu d'acceuil
function soundMenu() {
  var menu = new Audio();
  menu.src = "./assets/sound/menu.mp3";
  menu.play();
}

// Fonction qui ajoute la classe "hidden" a une variable choisie
function allAppaear() {
  document.getElementById("GAMETITLE").classList.replace("hidden", "appear");
  document.querySelector("div:nth-of-type(3)").classList.add("hidden");
  document.getElementById("SELECT").classList.remove("hidden");
  document.querySelector("footer").classList.remove("hidden");
  document.querySelector("html").classList.add("changebg");
  document.querySelector("html").classList.add("bgappear");
  document.getElementById("PLAY").classList.add("hidden");
}
