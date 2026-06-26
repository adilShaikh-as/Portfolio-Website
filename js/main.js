// =========================
// Wait until page loads
// =========================

document.addEventListener("DOMContentLoaded", function () {

    // Back To Top Button
    const topBtn = document.getElementById("topBtn");

    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    // Show/Hide Button
    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

});


// =========================
// Modal Functions
// =========================

function openModal(modalId){
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId){
    document.getElementById(modalId).style.display = "none";
}

window.addEventListener("click", function(event){

    const modals = document.querySelectorAll(".modal");

    modals.forEach(function(modal){

        if(event.target === modal){
            modal.style.display = "none";
        }

    });

});

/* ==========================
   Hamburger Menu
========================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    }else{

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});


/* Close menu after clicking any link */

document.querySelectorAll("#nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});


/* Close menu when clicking outside */

document.addEventListener("click",(event)=>{

    if(
        !menuToggle.contains(event.target) &&
        !navLinks.contains(event.target)
    ){

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});

document.querySelectorAll("#nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});