// Fonction qui génère des bulles:
const bullesPop = () => {
  // Création d'un nouvelle bulle
  const bubble = document.createElement("span");
  document.body.appendChild(bubble); //Ajout d'un class CSS
  bubble.classList.add("bubble"); //Ajout de la bulle au DOM

  // Taille aléatoire de la bulle:
  const size = Math.floor(Math.random() * 300) + 10 + "px";
  bubble.style.setProperty("--size", size);

  // Autre technique pour taille aléatoire de la bulle
  // const size = Math.floor(Math.random() * 300) + 10; // Taille entre 10px et 300px
  // bubble.style.width = `${size}px`;
  // bubble.style.height = `${size}px`;
  // Dans ce cas, dans le CSS ne rien écrire dans "width" et le "height"

  // Position aléatoire de la bulle:
  bubble.style.top = Math.random() * 100 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  // Suppression automatique après un délai
  setTimeout(() => {
    bubble.remove(); // Supprime la bulle du DOM après 5 secondes
  }, 7000);
};

// Exemple : générer des bulles toutes les 500 ms
let interval = setInterval(() => {
  bullesPop();
}, 500);
