document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      const navbarPlaceholder = document.getElementById("navbar-placeholder");
      navbarPlaceholder.innerHTML = data;
      navbarPlaceholder.querySelector(".navbar").classList.add("fixed-top");
    });
});
