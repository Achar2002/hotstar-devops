// Search functionality

const searchInput = document.querySelector(".nav-right input");
const movieCards = document.querySelectorAll(".movie-card");

searchInput.addEventListener("keyup", function () {

    const searchText = searchInput.value.toLowerCase();

    movieCards.forEach(function (card) {

        const movieName = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (movieName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


// Watch Now button

const watchButton = document.querySelector(".watch-button");

watchButton.addEventListener("click", function () {

    alert("Welcome! Your entertainment starts here.");

});


// Login button

const loginButton = document.querySelector(".nav-right button");

loginButton.addEventListener("click", function () {

    alert("Login functionality will be added later.");

});
