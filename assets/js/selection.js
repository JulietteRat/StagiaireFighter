// Générer les images dans la div image perso.
/*const noms = [
    "Amélie", "Anastasia", "Caroline", "Elisa", "Federico",
    "Guillaume", "Igor", "Joan", "Jonathan", "Juliette",
    "Kevin", "Klervia", "Licorne", "Mohamad", "Ralph",
    "Thais", "Valentina", "Wiame"
  ];
const container = document.querySelector('.ImgPerso');

for (const nom of noms) {
    const a = document.createElement('a');
    const img = document.createElement('img');
    const fileName = nom;
  
    a.href = '#';
    a.title = '';
    img.src = `./assets/img/intern/${fileName}.jpeg`;
    img.alt = `vignette ${nom}`;

    a.appendChild(img);
    container.appendChild(a);
    a.classList.add('imgPerso'); // Ajoutez la classe
}*/
// Générer les images dans la div image ImgPersoHidden.
const nomsHidden = [
  "Amélie",
  "Anastasia",
  "Caroline",
  "Elisa",
  "Federico",
  "Guillaume",
  "Igor",
  "Joan",
  "Jonathan",
  "Juliette",
  "Kevin",
  "Klervia",
  "Licorne",
  "Mohamad",
  "Ralph",
  "Thais",
  "Valentina",
  "Wiame",
  "Herbert",
];
const container = document.querySelector(".ImgPerso");
const containerHidden = document.querySelector(".ImgPersoHidden");

for (const nomHidden of nomsHidden) {
  const a = document.createElement("a");
  const img = document.createElement("img");
  const fileName = nomHidden;

  a.href = "#";
  a.title = "";
  img.src = `./assets/img/intern/${fileName}.jpeg`;
  img.alt = `vignette ${nomHidden}`;

  containerHidden.appendChild(img);
  containerHidden.classList.add("imgHidden"); // Ajoutez la classe
}
// Genère les titres h2 du blocPersohidden
// titre h2 dans le blocpersohidden

const containerTitre = document.querySelector(".titrehidden");

for (const texth2 of nomsHidden) {
  const h2 = document.createElement("h2");
  const span = document.createElement("span");
  // Ajoutez le nomHidden entre chaque balise h2
  span.textContent = texth2;
  h2.appendChild(span);
  containerTitre.appendChild(h2);
}
//________________GERER LES APPARITIONS DES CLASSES HIDDENS__________
// Va chercher les objets
const imgPerso = document.querySelector(".ImgPerso");
const imgPersoHidden = document.querySelector(".ImgPersoHidden");
//const containerTitre = document.querySelector('.titrehidden');

// construction de tableau
const TabImgPerso = Array.from(container.children);
const TabImgPersoHidden = Array.from(containerHidden.children);
const TabcontainerTitre = Array.from(containerTitre.children);

// application de la fct moussover et moussout en fct de l'image survolé
for (let i = 0; i < TabImgPerso.length; i++) {
  const imgVisible = TabImgPerso[i];
  const imgHidden = TabImgPersoHidden[i];
  const titreHidden = TabcontainerTitre[i];

  if (imgVisible && imgHidden && titreHidden) {
    imgVisible.addEventListener("mouseover", () => {
      imgHidden.style.display = "block";
      titreHidden.style.display = "block";
    });
    imgVisible.addEventListener("mouseout", () => {
      imgHidden.style.display = "none";
      titreHidden.style.display = "none";
    });
  }
}
// Génération des apparitions de drapeau en fct de l'image selectionnée

document
  .querySelector(".ImgPerso a:nth-of-type(7) img")
  .addEventListener("mouseover", flagbr);
function flagbr() {
  document.querySelector(".PartB img:nth-child(1)").classList.remove("hidden");
}
document
  .querySelector(".ImgPerso a:nth-of-type(7) img")
  .addEventListener("mouseleave", removebr);
function removebr() {
  document.querySelector(".PartB img:nth-child(1)").classList.add("hidden");
}

document
  .querySelector(".ImgPerso a:nth-of-type(5) img")
  .addEventListener("mouseover", flagita);
function flagita() {
  document.querySelector(".PartB img:nth-child(2)").classList.remove("hidden");
}
document
  .querySelector(".ImgPerso a:nth-of-type(5) img")
  .addEventListener("mouseleave", removeita);
function removeita() {
  document.querySelector(".PartB img:nth-child(2)").classList.add("hidden");
}

document
  .querySelector(".ImgPerso a:nth-of-type(17) img")
  .addEventListener("mouseover", flagita);
function flagita() {
  document.querySelector(".PartB img:nth-child(2)").classList.remove("hidden");
}
document
  .querySelector(".ImgPerso a:nth-of-type(17) img")
  .addEventListener("mouseleave", removeita);
function removeita() {
  document.querySelector(".PartB img:nth-child(2)").classList.add("hidden");
}

document
  .querySelector(".ImgPerso a:nth-of-type(11) img")
  .addEventListener("mouseover", flaglao);
function flaglao() {
  document.querySelector(".PartB img:nth-child(3)").classList.remove("hidden");
}
document
  .querySelector(".ImgPerso a:nth-of-type(11) img")
  .addEventListener("mouseleave", removelao);
function removelao() {
  document.querySelector(".PartB img:nth-child(3)").classList.add("hidden");
}

document
  .querySelector(".ImgPerso a:nth-of-type(14) img")
  .addEventListener("mouseover", flagsyr);
function flagsyr() {
  document.querySelector(".PartB img:nth-child(4)").classList.remove("hidden");
}
document
  .querySelector(".ImgPerso a:nth-of-type(14) img")
  .addEventListener("mouseleave", removesyr);
function removesyr() {
  document.querySelector(".PartB img:nth-child(4)").classList.add("hidden");
}

document
  .querySelector(".ImgPerso a:nth-of-type(8) img")
  .addEventListener("mouseover", flagfr);
function flagfr() {
  document.querySelector(".PartB img:nth-child(5)").classList.remove("hidden");
}
document
  .querySelector(".ImgPerso a:nth-of-type(8) img")
  .addEventListener("mouseleave", removefr);
function removefr() {
  document.querySelector(".PartB img:nth-child(5)").classList.add("hidden");
}
document
  .querySelector(".ImgPerso a:nth-of-type(6) img")
  .addEventListener("mouseover", flagfr);
function flagfr() {
  document.querySelector(".PartB img:nth-child(5)").classList.remove("hidden");
}

document
  .querySelector(".ImgPerso a:nth-of-type(6) img")
  .addEventListener("mouseleave", removefr);
function removefr() {
  document.querySelector(".PartB img:nth-child(5)").classList.add("hidden");
}

document
  .querySelector(".ImgPerso a:nth-of-type(12) img")
  .addEventListener("mouseover", flagfr);
function flagfr() {
  document.querySelector(".PartB img:nth-child(5)").classList.remove("hidden");
}
document
  .querySelector(".ImgPerso a:nth-of-type(12) img")
  .addEventListener("mouseleave", removefr);
function removefr() {
  document.querySelector(".PartB img:nth-child(5)").classList.add("hidden");
}

document
  .querySelector(".ImgPerso a:nth-of-type(10) img")
  .addEventListener("mouseover", flagfr);
function flagfr() {
  document.querySelector(".PartB img:nth-child(5)").classList.remove("hidden");
}
document
  .querySelector(".ImgPerso a:nth-of-type(10) img")
  .addEventListener("mouseleave", removefr);
function removefr() {
  document.querySelector(".PartB img:nth-child(5)").classList.add("hidden");
}

document
  .querySelector(".ImgPerso a:nth-of-type(16) img")
  .addEventListener("mouseover", flagfr);
function flagfr() {
  document.querySelector(".PartB img:nth-child(5)").classList.remove("hidden");
}
document
  .querySelector(".ImgPerso a:nth-of-type(16) img")
  .addEventListener("mouseleave", removefr);
function removefr() {
  document.querySelector(".PartB img:nth-child(5)").classList.add("hidden");
}

document
  .querySelector(".ImgPerso a:nth-of-type(15) img")
  .addEventListener("mouseover", flagru);
function flagru() {
  document.querySelector(".PartB img:nth-child(6)").classList.remove("hidden");
}
document
  .querySelector(".ImgPerso a:nth-of-type(15) img")
  .addEventListener("mouseleave", removeru);
function removeru() {
  document.querySelector(".PartB img:nth-child(6)").classList.add("hidden");
}

document
  .querySelector(".ImgPerso a:nth-of-type(1) img")
  .addEventListener("mouseover", flagec);
function flagec() {
  document.querySelector(".PartB img:nth-child(7)").classList.remove("hidden");
}
document
  .querySelector(".ImgPerso a:nth-of-type(1) img")
  .addEventListener("mouseleave", removeec);
function removeec() {
  document.querySelector(".PartB img:nth-child(7)").classList.add("hidden");
}

document
  .querySelector(".ImgPerso a:nth-of-type(2) img")
  .addEventListener("mouseover", flaguk);
function flaguk() {
  document.querySelector(".PartB img:nth-child(8)").classList.remove("hidden");
}
document
  .querySelector(".ImgPerso a:nth-of-type(2) img")
  .addEventListener("mouseleave", removeuk);
function removeuk() {
  document.querySelector(".PartB img:nth-child(8)").classList.add("hidden");
}

document
  .querySelector(".ImgPerso a:nth-of-type(4) img")
  .addEventListener("mouseover", flagesp);
function flagesp() {
  document.querySelector(".PartB img:nth-child(9)").classList.remove("hidden");
}
document
  .querySelector(".ImgPerso a:nth-of-type(4) img")
  .addEventListener("mouseleave", removesp);
function removesp() {
  document.querySelector(".PartB img:nth-child(9)").classList.add("hidden");
}

document
  .querySelector(".ImgPerso a:nth-of-type(3) img")
  .addEventListener("mouseover", flagesp);
function flagesp() {
  document.querySelector(".PartB img:nth-child(9)").classList.remove("hidden");
}
document
  .querySelector(".ImgPerso a:nth-of-type(3) img")
  .addEventListener("mouseleave", removesp);
function removesp() {
  document.querySelector(".PartB img:nth-child(9)").classList.add("hidden");
}

document
  .querySelector(".ImgPerso a:nth-of-type(9) img")
  .addEventListener("mouseover", flagcam);
function flagcam() {
  document.querySelector(".PartB img:nth-child(10)").classList.remove("hidden");
}
document
  .querySelector(".ImgPerso a:nth-of-type(9) img")
  .addEventListener("mouseleave", removecam);
function removecam() {
  document.querySelector(".PartB img:nth-child(10)").classList.add("hidden");
}

document
  .querySelector(".ImgPerso a:nth-of-type(18) img")
  .addEventListener("mouseover", flagmar);
function flagmar() {
  document.querySelector(".PartB img:nth-child(11)").classList.remove("hidden");
}
document
  .querySelector(".ImgPerso a:nth-of-type(18) img")
  .addEventListener("mouseleave", removemar);
function removemar() {
  document.querySelector(".PartB img:nth-child(11)").classList.add("hidden");
}

document
  .querySelector(".ImgPerso a:nth-of-type(13) img")
  .addEventListener("mouseover", flaglic);
function flaglic() {
  document.querySelector(".PartB img:nth-child(12)").classList.remove("hidden");
}
document
  .querySelector(".ImgPerso a:nth-of-type(13) img")
  .addEventListener("mouseleave", removelic);
function removelic() {
  document.querySelector(".PartB img:nth-child(12)").classList.add("hidden");
}

document
  .querySelector(".ImgPerso a:nth-of-type(19) img")
  .addEventListener("mouseover", flagfr);
function flagfr() {
  document.querySelector(".PartB img:nth-child(5)").classList.remove("hidden");
}
document
  .querySelector(".ImgPerso a:nth-of-type(19) img")
  .addEventListener("mouseleave", removefr);
function removefr() {
  document.querySelector(".PartB img:nth-child(5)").classList.add("hidden");
}

document.querySelector('.ImgPerso').addEventListener('mouseover',select);
function select(){
    var sound= new Audio();
    sound.src='./assets/sound/select.mp3';
    sound.play();
}
