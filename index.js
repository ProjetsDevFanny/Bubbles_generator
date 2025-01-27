const countDisplay = document.querySelector(".counter");
let count = 0;

// Fonction qui génère des bulles:
const bullesPop = () => {
  // Création d'un nouvelle bulle
  const bubble = document.createElement("span");
  document.body.appendChild(bubble); //Ajout d'un class CSS
  bubble.classList.add("bubble"); //Ajout de la bulle au DOM

  // Taille aléatoire de la bulle:
  const size = Math.floor(Math.random() * 400) + 50; // Taille entre 50px et 400px
  bubble.style.setProperty("--size", `${size}px`);

  // Position horizontale aléatoire
  bubble.style.left = Math.random() * 100 + "%";

  // Direction aléatoire pour le mouvement horizontal
  const direction = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--direction", direction);

  // Suppression de la bulle après la fin de l'animation
  bubble.addEventListener("animationend", () => {
    bubble.remove();
  });

  // Au click de la souris, la bulle disparaît :
  bubble.addEventListener("click", () => {
    bubble.remove();
    count++;
    // console.log(count);
    countDisplay.textContent = count;
  });
};

// Exemple : générer des bulles toutes les 100 ms
let interval = setInterval(() => {
  bullesPop();
}, 100);
