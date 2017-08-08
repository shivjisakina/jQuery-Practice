//Always start with document.ready
$(document).ready(function () {


    var doctors = {

        "Meredith Grey": {
            name: "Meredith Grey",
            HP: 291,
            attack: 60,
            image: "assets/images/meredith.png",
            emenyHP: 24
        },

        "Derek Shepherd": {
            name: "Derek Shepherd",
            HP: 137,
            attack: 30,
            image: "assets/images/derek2.png",
            emenyHP: 54
        }

    }

    // GLOBAL VARIABLES
    // ===================================================================

    // Variable for the users player
    var player;

    // Storing the other players in an array
    var enemies = [];

    // The enemy the user is playing against
    var enemy;

    // How many turns there are/damage
    var turns = 1;

    // Enemies that have been defeated in integers
    var killed = 0;

    // FUNCTIONS
    // ===================================================================

    // Rendering each character to the page in the characters section
    var showCharacters = function (doctor, render) {

        // How the card will appear in HTML

        // Append all the information to charDiv
        var charDiv = $("<div class='character' data-name='" + doctor.name + "'>");
        var charName = $("<div class='character-name'>").text(doctor.name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src", doctor.image);
        var charHP = $("<div class='character-HP'>").text(doctor.HP);

        // Appending all of the information to charDiv
        charDiv.append(charName).append(charImage).append(charHP);

        // Rending it to the page
        $(render).append(charDiv)

    }

    // Looping through doctors and rendering information using showCharacters funciton
    var startGame = function () {

        for (var i in doctors) {
            showCharacters(doctors[i], "#characters-section")
        }
    }

    startGame()



})