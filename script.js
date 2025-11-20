let nav = document.querySelector("nav");
let main = document.querySelector("main");
let pages = document.querySelector(".pages");
let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");
let page3 = document.querySelector(".page3");
let img = document.querySelector("img");
let h2 = document.querySelector("h2");
let sectionPage1 = document.querySelector(".section-page1");
let sectionPage2 = document.querySelector(".section-page2");
let sectionPage3 = document.querySelector(".section-page3");
let sectionPages = document.querySelector(".section-pages");
let footer = document.querySelector("footer");
let backButton = document.querySelector(".back-button");
let aboutPage = document.querySelector(".about-page");
let galleryPage = document.querySelector(".gallery-page");
let contactPage  = document.querySelector(".contact-page");
let redirectsHover = document.querySelector(".redirects-hover");
let aboutPage2 = document.querySelector(".about-page2");
let galleryPage2 = document.querySelector(".gallery-page2");
let contactPage2 = document.querySelector(".contact-page2");
let aboutPageNav = document.querySelector(".about-page-nav");
let galleryPageNav = document.querySelector(".gallery-page-nav");
let contactPageNav = document.querySelector(".contact-page-nav");


/////////////////////////////////////////////////////////////////////////////

page1.addEventListener("mouseover", function() {
  this.style.cursor = "pointer";
});

page2.addEventListener("mouseover", function() {
  this.style.cursor = "pointer";
});

page3.addEventListener("mouseover", function() {
  this.style.cursor = "pointer";
});

backButton.addEventListener("mouseover", function() {
  this.style.cursor = "pointer";
});

page1.addEventListener("click", function() {
  main.style.display = "none";
  aboutPage2.style.display = "block";
  contactPage2.style.display = "none";
  galleryPage2.style.display = "none";
  footer.style.display = "block";
});

page2.addEventListener("click", function() {
  main.style.display = "none";
  aboutPage2.style.display = "none";
  galleryPage2.style.display = "block";
  contactPage2.style.display = "none";
  footer.style.display = "block";
});

page3.addEventListener("click", function() {
  main.style.display = "none";
  aboutPage2.style.display = "none";
  galleryPage2.style.display = "none";
  contactPage2.style.display = "block";
  footer.style.display = "block";
});

backButton.addEventListener("click", function() {
  main.style.display = "block";
  aboutPage2.style.display = "none";
  galleryPage2.style.display = "none";
  contactPage2.style.display = "none";
  footer.style.display = "none";
  main.style.display = "flex";
  main.style.flexDirection = "row";
  main.style.justifyContent = "space-evenly";
});

aboutPage.addEventListener("click", function() {
  main.style.display = "none";
  footer.style.display = "block";
  aboutPage2.style.display = "block";
  galleryPage2.style.display = "none";
  contactPage2.style.display = "none";
});

galleryPage.addEventListener("click", function() {
  main.style.display = "none";
  footer.style.display = "block";
  aboutPage2.style.display = "none";
  galleryPage2.style.display = "block";
  contactPage2.style.display = "none";
});

contactPage.addEventListener("click", function() {
  main.style.display = "none";
  footer.style.display = "block";
  aboutPage2.style.display = "none";
  galleryPage2.style.display = "none";
  contactPage2.style.display = "block";
});