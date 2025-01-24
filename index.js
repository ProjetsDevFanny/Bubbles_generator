const bullesPop = () => {
  const bubble = document.createElement("span");
  document.body.appendChild(bubble);
  bubble.classList.add("bubble");

  // Taille random de la bulle:
  const size = Math.floor(Math.random() * 300) + 10 + "px";

  bubble.style.setProperty("--size", size);

  // Position random de la bulle:

  bubble.style.top = Math.random() * 100 + "%";
  bubble.style.left = Math.random() * 100 + "%";
};

// let interval = setInterval(() => {
//   bullesPop();
// }, 300);
