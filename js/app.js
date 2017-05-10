// Cambiar el tamaño del Menú de Navegación
var sections = document.getElementsByTagName("section");
var ranks = [];

for (var i = 0; i < sections.length; i++) {
  ranks.push(calculatePosition (sections[i], "top"));
  ranks.push(calculatePosition (sections[i], "bottom"));
}
console.log(ranks);

var endScroll = 0;
window.addEventListener("scroll", function () {
  var navBar = document.getElementById("nav-bar");
  var scroll = window.pageYOffset || document.body.scrollTop;
  var links = document.getElementsByClassName("link");
  console.log(scroll);
  if (scroll > endScroll) {
    navBar.classList.remove("nav-big");
    navBar.classList.add("nav-little");
  }
  else{
    navBar.classList.remove("nav-little");
    navBar.classList.add("nav-big");
  }
  if (scroll >= ranks[0] && scroll <= ranks[1]) {
    links[0].classList.remove("link-no-current");
    links[0].classList.add("link-current");
    console.log("estas en portfolio");
  }else {
    links[0].classList.remove("link-current");
    links[0].classList.add("link-no-current");
  }
  if (scroll >= ranks[2]+1 && scroll <= ranks[3]) {
    links[1].classList.remove("link-no-current");
    links[1].classList.add("link-current");
    console.log("estas en about");
  }else {
    links[1].classList.remove("link-current");
    links[1].classList.add("link-no-current");
  }
  if (scroll >= ranks[4]+1 && scroll <= ranks[5]) {
    links[2].classList.remove("link-no-current");
    links[2].classList.add("link-current");
    console.log("estas en about");
  }else {
    links[2].classList.remove("link-current");
    links[2].classList.add("link-no-current");
  }
})

function calculatePosition (element, location) {
  var position = element.getBoundingClientRect();
  if (location == "top") {
      return position.top;
  }
  if (location == "bottom") {
      return position.bottom;
  }
}
