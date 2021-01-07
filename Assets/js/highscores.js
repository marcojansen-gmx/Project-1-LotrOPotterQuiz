var highScore = document.querySelector("#highscoreContainer");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#tryAgain");

// Event listener to clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retreives local stroage 
var localHighscores = localStorage.getItem("localHighscores");
localHighscores = JSON.parse(localHighscores);

if (localHighscores !== null) {

    for (var i = 0; i < localHighscores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = localHighscores[i].initial + "       |       " + localHighscores[i].score;
        highScore.appendChild(createLi);

    }
}
// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});