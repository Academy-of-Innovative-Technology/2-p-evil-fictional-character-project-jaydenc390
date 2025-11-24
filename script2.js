/* 
function el(target, all) {
    if (all) {
        return document.querySelectorAll(target);
    } else {
        return document.querySelector(target);
    }
}

const aboutPage2 = document.querySelector(".about-page2");
const main = document.querySelector("main");

el(".page1, .about-page", true).forEach(btn => {
    main.addEventListener("click", function () {
        if (main.style.display === "block") {
            main.style.display = "none";
            aboutPage2.style.display = "block";
        } else if (main.style.display === "none") {
            main.style.display = "block";
        }
    });
});



el("h1").addEventListener("click", function() {
  // Toggle display between "none" and "block"
  const h1 = el("h1");
  if (h1.style.display === "none") {
    h1.style.display = "block"; // Make the element visible
  } else {
    h1.style.display = "none";  // Hide the element
  }
});
*/