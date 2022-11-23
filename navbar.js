const navbar = document.getElementById("navbar");

window.addEventListener("load", () => {
  navbar.style.transformProperty = "translateY";
  navbar.style.transition = "0.4s ease";
  navbar.style.transform = "translateY(500px)";
});
