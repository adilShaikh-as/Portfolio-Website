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