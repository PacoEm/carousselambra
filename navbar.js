const navbar = document.getElementById("navbar");

// window.addEventListener("load", () => {
//   navbar.style.transformProperty = "translateY";
//   navbar.style.transition = "0.4s ease";
//   navbar.style.transform = "translateY(500px)";
// });

window.onresize = function () {
  if (window.innerWidth <= 960) {
    navbar.style.marginLeft = "-100px";
    navbar.style.transition = "0.4s ease";
    navbar.style.transitionProperty = "margin-left";
  } else {
    navbar.style.marginLeft = "20px";
    navbar.style.transition = "0.4s ease";
    navbar.style.transitionProperty = "margin-left";
  }
};
