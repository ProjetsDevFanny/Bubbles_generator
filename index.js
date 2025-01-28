// Affichage du compteur sur l'écran
const countDisplay = document.querySelector(".counter");
let count = 0;

// Fonction qui génère des bulles:
const bullesPop = () => {
  // Création d'un nouvelle bulle
  const bubble = document.createElement("span");
  bubble.classList.add("bubble"); //Ajout de la bulle au DOM
  document.body.appendChild(bubble); //Ajout d'un class CSS

  // Taille aléatoire de la bulle:
  const size = Math.floor(Math.random() * 300) + 50; // Taille entre 50px et 400px
  bubble.style.setProperty("--size", `${size}px`);

  // Position de départ horizontale aléatoire
  bubble.style.left = Math.random() * 100 + "%";

  // Position de départ verticale aléatoire
  bubble.style.top = Math.random() * 100 + 50 + "%";

  // Direction doite ou gauche aléatoire pour le mouvement horizontal
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty(
    "--directionLaterale",
    Math.random() * 100 * plusMinus + "%"
  );

  // Suppression de la bulle après la fin de l'animation
  bubble.addEventListener("animationend", () => {
    bubble.remove();
  });

  // Au click de la souris, la bulle disparaît, et le compteur augmente de 1:
  bubble.addEventListener("click", () => {
    bubble.remove();
    count++;
    // console.log(count);
    countDisplay.textContent = count;
  });
};

// Exemple : générer des bulles toutes les 100 ms
setInterval(bullesPop, 300);
