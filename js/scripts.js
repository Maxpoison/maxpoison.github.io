"use strict";

const section1 = document.querySelector("#section--1");
const section2 = document.querySelector("#section--2");
const section3 = document.querySelector("#section--3");
const scrollToSkills = document.querySelector(".scroll-to-skills");
const scrollToProjects = document.querySelector(".scroll-to-projects");
const scrollToContact = document.querySelector(".scroll-to-contact");
const nav = document.querySelector(".navmenu");

///// SCROLL /////
// Section 1 (Skills)
scrollToSkills.addEventListener('click', function(e) {
  const s1coords = section1.getBoundingClientRect();
  
  section1.scrollIntoView({behavior: 'smooth'});
});

// Section 2 (Projects)
scrollToProjects.addEventListener('click', function(e) {
  const s2coords = section2.getBoundingClientRect();

  section2.scrollIntoView({behavior: 'smooth'});
});

// Section 3 (Contact)
scrollToContact.addEventListener('click', function(e) {
  const s3coords = section3.getBoundingClientRect();

  section3.scrollIntoView({behavior: 'smooth'});
});

///// MODAL WINDOW /////
// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}