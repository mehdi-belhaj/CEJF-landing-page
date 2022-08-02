// Get the go to top button
goToTopBtn = document.getElementById("gotoTopBtn");

window.onscroll = function () {
  userScrolling(); // used to show and hide the go to top button
  dynamicActiveNav(); // used to highlight the active nav link
};

function userScrolling() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
}

function goToTop() {
  window.scrollTo(0, 0);
}

// change the active list when scrolling navbar
// navbar = document.getElementById("navbar");
// navElements = navbar.getElementsByTagName("li"); // get the li elements
// for (let i = 0; i < navElements.length; i++) {
//   navElements[i].addEventListener("click", function () {
//     clearActiveNav(navElements);
//     link = navElements[i].getElementsByTagName("a")[0];
//     link.classList.add("active");
//   });
// }

function dynamicActiveNav() {
  ht = document.getElementById("About").offsetHeight;
  console.log(ht);
}

function clearActiveNav(elements) {
  for (let j = 0; j < elements.length; j++) {
    const link = elements[j].getElementsByTagName("a")[0];
    link.classList.remove("active");
  }
}
