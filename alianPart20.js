document.addEventListener("DOMContentLoaded", function () {
    var alienForm = document.getElementById("alienForm");
    var translateButton = document.getElementById("translateButton");
    var dancePartyButton = document.getElementById("danceParty");
    var mysteryScene = document.getElementById("mysteryScene");
    var fakeCrash = document.getElementById("fakeCrash");
    var alienLaugh = document.getElementById("alienLaugh");
    var instaCitizenshipButton = document.getElementById("instaCitizenship");
    var djVideoContainer = document.getElementById("djVideoContainer");
    var djVideo = document.getElementById("djVideo");
    alienForm.addEventListener("submit", function (Event) {
        Event.preventDefault();
        var alienName = document.getElementById("alienName").value;
        var alienAge = parseInt(document.getElementById("alienAge").value, 10);
        var reason = document.getElementById("reason").value;
        var captcha = document.getElementById("=captcha").value;
        var selectedPowers = document.querySelectorAll("input[name='powers']:checked");
        if (alienName.length < 5) {
            alert("Alien name is too Human!Try a Alien Name!");
            return;
        }
        if (alienAge < 50) {
            alert("Sorry! only Mature aliens (50+ Zog years) can apply!");
            return;
        }
        if (selectedPowers.length < 2) {
            alert("Even weak aliens need atleast 2 powers");
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
        alert("Application Submitted Successfully Welcome to ZipttyZog World!!");
    });
    translateButton.addEventListener("click", function () {
        alert("Alien Translator Activated! Beep Boop!");
    });
    instaCitizenshipButton === null || instaCitizenshipButton === void 0 ? void 0 : instaCitizenshipButton.addEventListener("click", function () {
        alert("Ha ! Ha! Nice Try Earthain? You think Insta Citizenship is that Easy??");
    });
    /*dancePartyButton.addEventListener("click",()=>{
        alert("Alien DJ Mode On..! Its time to Alien Party!!");
        document.getElementById("djVideoContainer")?.style.display="block";
        document.getElementById("djVideo").src += "autoplay=1";
        
    });*/
    dancePartyButton.addEventListener("click", function () {
        alert("Alien DJ Mode on..! Its time for an Alien Party!");
        djVideoContainer.style.display = "block";
        var videoSrc = "https://www.youtube.com/embed/FzG4uDgje3M?autoplay=1&enablejsapi=1";
        djVideo.src = videoSrc;
    });
    document.querySelectorAll("input[name='relation']").forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            var selectedRelations = Array.from(document.querySelectorAll("input[name='relation']:checked"));
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
