//Always start with document.ready
$(document).ready(function () {


    var doctors = {

        "Meredith Grey": {
            name: "Meredith Grey",
            HP: 291,
            attack: 60,
            image: "assets/images/meredith.png",
            emenyHP: 24
        }

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

    // variable for the users player
    var player;

    // storing the other players in an array
    var enemies = [];

    // the enemy the user is playing against
    var enemy;

    // how many turns there are/damage
    var turns = 1;

    // enemies that have been defeated in integers
    var killed = 0;







})