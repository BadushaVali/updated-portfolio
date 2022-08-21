const menu = document.getElementById("menu");
const header = document.querySelector("header");
console.log(menu);
console.log(header);

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};
