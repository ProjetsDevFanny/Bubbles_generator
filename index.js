
const bubble = document.createElement("span");
document.body.appendChild(bubble);
bubble.classList.add("bubble");


const size = Math.floor(Math.random()*300) + 10 + "px";

bubble.style.setProperty("--size", size);

bubble.style.top = Math.random() * 100 + "%";
bubble.style.left = Math.random() * 100 + "%";





