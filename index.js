// Fonction qui génère des bulles:
const bullesPop = () => {
  // Création d'un nouvelle bulle
  const bubble = document.createElement("span");
  document.body.appendChild(bubble); //Ajout d'un class CSS
  bubble.classList.add("bubble"); //Ajout de la bulle au DOM

  // Taille aléatoire de la bulle:
  const size = Math.floor(Math.random() * 300) + 100; // Taille entre 10px et 300px
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
};

// Suppression automatique après un délai
//   setTimeout(() => {
//     bubble.remove(); // Supprime la bulle du DOM après 7secs
//   }, 9000);
// };

// Exemple : générer des bulles toutes les 500 ms

// let interval = setInterval(() => {
//   bullesPop();
// }, 300);
