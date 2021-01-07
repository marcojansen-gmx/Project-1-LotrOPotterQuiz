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
        var row = document.createElement("div");
        var initialCol = document.createElement("div");
        var scoreCol = document.createElement("div");
        row.classList.add("row");
        initialCol.classList.add("col");
        scoreCol.classList.add("col");
        initialCol.textContent = localHighscores[i].initial
        scoreCol.textContent = localHighscores[i].score;
        row.appendChild(initialCol)
        row.appendChild(scoreCol)
        highScore.appendChild(row);
    }
}
// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});