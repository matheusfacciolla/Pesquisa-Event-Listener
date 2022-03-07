const button = document.querySelector("button");
const msg = document.querySelector(".message");
const img = document.querySelector(".image-button");

button.addEventListener("click", () => {
  msg.classList.toggle("hidden");
  img.classList.toggle("hidden"); 
})

function toggleContent(e) {
  const item = e.target;
  const parent = item.parentNode.parentNode;
  parent.querySelector(".content").classList.toggle("hidden");
  
  if(item.name === "caret-forward-outline"){
    item.name = "caret-down-outline";
  }else if(item.name === "caret-down-outline") {
    item.name = "caret-forward-outline";
  }
}

const listas = document.querySelectorAll('.topic-title');
listas.forEach((lista) => {
  lista.addEventListener('click', toggleContent);
});