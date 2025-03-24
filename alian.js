document.addEventListener("DOMContentLoaded", function () {
    var alienForm = document.getElementById("alienForm");
    var translateButton = document.getElementById("translateButton");
    var dancePartyButton = document.getElementById("danceParty");
    var mysteryScene = document.getElementById("mysteryScene");
    var fakeCrash = document.getElementById("fakeCrash");
    var alienLaugh = document.getElementById("alienLaugh");
    alienForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var alienName = document.getElementById("alienName").value;
        var reason = document.getElementById("reason").value;
        var captcha = document.getElementById("captcha").value;
        // Get selected species
        var selectedSpecies = document.querySelector("input[name='species']:checked");
        var selectedRelation = document.querySelector("input[name='Relationship']:checked");
        var selectedGummyStatus = document.querySelector("input[name='gummyStatus']:checked");
        // Get selected powers
        var selectedPowers = Array.from(document.querySelectorAll("input[name='Powers']:checked"));
        if (alienName.length < 5) {
            alert("Alien name must be at least 5 characters long!");
            return;
        }
        if (!selectedSpecies) {
            alert("Please select your species!");
            return;
        }
        if (!selectedRelation) {
            alert("Please select your relationship status!");
            return;
        }
        if (!selectedGummyStatus) {
            alert("Please select your gummy status!");
            return;
        }
        if (selectedPowers.length < 2) {
            alert("Please select at least 2 powers!");
            return;
        }
        if (reason.length > 200) {
            alert("Your reason must be 200 characters or less!");
            return;
        }
        if (captcha.trim() !== "10") {
            alert("Wrong answer to Alien Math!");
            return;
        }
        alert("Application Submitted Successfully! Welcome to ZipttyZog World!!");
    });
    translateButton.addEventListener("click", function () {
        alert("Alien Translator Activated! Beep Boop!");
    });
    dancePartyButton.addEventListener("click", function () {
        alert("Alien DJ Mode On...! It's time to Alien Party!!");
        alienLaugh.play();
    });
    document.querySelectorAll("input[name='Relationship']").forEach(function (radio) {
        radio.addEventListener("change", function () {
            var selectedRelations = document.querySelectorAll("input[name='Relationship']:checked");
            if (selectedRelations.length > 2) {
                mysteryScene.classList.remove("hidden");
            }
            else {
                mysteryScene.classList.add("hidden");
            }
        });
    });
    alienForm.addEventListener("mouseover", function () {
        if (Math.random() > 0.95) {
            fakeCrash.classList.remove("hidden");
            setTimeout(function () {
                fakeCrash.classList.add("hidden");
            }, 3000);
        }
    });
});
