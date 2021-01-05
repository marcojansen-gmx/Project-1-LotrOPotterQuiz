$('document').ready(function () {

    // Create Element to be grabbed for Timer Display
    const timerDisplay = document.querySelector(".timer");
    let timer;
    let HPCharacters;
    let LOTRCharacters;
    let choosenAPI;
    let randomArrayNo;
    let currentScore;
    let currentMultiplier;
    let isAnswerHP;
    let isAnswerLOTR;
    let quizCounter = 0;
    const maxQuestion = 10;

    // init Function MJ
    init()
    function init() {
        $("#intro").show()
        $(".timer").hide()
        $("#quizContainer").hide()
    };

    // on click of start button run API requests
    $("#startButton").on("click", function () {
        $("#intro").hide()
        $.ajax({
            url: 'https://the-one-api.dev/v2/character',
            method: "GET",
            contentType: 'application/json',
            headers: {
                'Authorization': 'Bearer 8dD_KqhUELsw37ZZ8_2t'
            }
            // handle LOTR API result
        }).then(function (response) {
            // let resultLOTRAPI = (JSON.stringify(response));
            LOTRCharacters = response.docs;
            // console.log(resultLOTRAPI);  
            // console.log("LOTRArray:" + Array.isArray(LOTRCharacters));   
            $.ajax({
                url: 'https://hp-api.herokuapp.com/api/characters',
                method: "GET"
                // handle HP API result
            }).then(function (response) {
                // let resultHarryAPI = (JSON.stringify(response));
                HPCharacters = response;
                // console.log(resultHarryAPI);  
                // console.log("HarryArray:" + Array.isArray(HPCharacters));
                // quiz timer start
                if (timer) clearInterval(timer);
                $(".timer").show()
                timer = startTimer();
                // quiz start
                $("#quizContainer").show()
                startQuiz(LOTRCharacters, HPCharacters);
            });

        });
    });

    // random API Selector MJ
    function selectRandomAPIResult() {
        let selectorAPI = Math.round(Math.random());
        let arrayAPIChoice = ["resultLOTRAPI", "resultHarryAPI"];
        choosenAPI = arrayAPIChoice[selectorAPI];
        console.log(choosenAPI);
    };

    // function to startquiz and fill chars into container
    function startQuiz(LOTRCharacters, HPCharacters) {
        selectRandomAPIResult();
        // LOTR random selection
        if (choosenAPI === "resultLOTRAPI") {
            // console.log(LOTRCharacters);
            randomArrayNo = Math.floor(Math.random() * LOTRCharacters.length);
            console.log(randomArrayNo, LOTRCharacters[randomArrayNo].name);
            $("#question").text(`From which book is this char? Name: ${LOTRCharacters[randomArrayNo].name}`);
            $("#quizContainer").attr("data-answer", "buttonLOTR");
        }
        else {
            // console.log(HPCharacters);
            randomHPAPIChar = Math.floor(Math.random() * HPCharacters.length);
            console.log(randomHPAPIChar, HPCharacters[randomHPAPIChar]);
            $("#question").text(`From which book is this char? Name: ${HPCharacters[randomHPAPIChar].name}`);
            $("#quizContainer").attr("data-answer", "buttonHP");
        }
    };

    function checkAnswer(event) {
        event.preventDefault();
        quizCounter++;
        if(quizCounter > maxQuestion){
            return renderEndGame();
        }
        const buttonType = event.currentTarget.id;

        let answerAttribute = $("#quizContainer").attr("data-answer");
        console.log(answerAttribute);
        isAnswerEval = (buttonType === answerAttribute);
        if (isAnswerEval) {
            console.log("correct");
            scoreCalc(isAnswerEval);
            startQuiz(LOTRCharacters, HPCharacters)
        }
        else {
            console.log("incorrect");
            scoreCalc(isAnswerEval);
            startQuiz(LOTRCharacters, HPCharacters)
        }


    }

    // HP button evaluation on click
    $("#buttonHP").on('click', checkAnswer)


    // LOTR button evaluation on on click
    $("#buttonLOTR").on("click", checkAnswer)

    // Calculate score
    function scoreCalc(isAnswerEval) {
        // set initial variable values
        currentScore;
        currentMultiplier = 2;
        // with score still empty set initial current score and multiplier
        if (isAnswerEval) {
            if (currentScore == undefined) {
                currentMultiplier = 2;
                currentScore = 1;
                console.log("A:" + currentMultiplier);
                console.log("B:" + currentScore);
            }
            // with score already set add +1 to multiplier and mutliply with current score
            else {
                currentMultiplier = (currentMultiplier + 1);
                currentScore = (currentScore * currentMultiplier);
                console.log("C:" + currentMultiplier);
                console.log("D:" + currentScore);
            }
        }
        else {
            //added if statement for incorrect first answer under a evalualtion that is false
            if (currentScore == undefined) {
                currentMultiplier = 2;
                currentScore = 0;
                console.log("E:" + currentMultiplier);
                console.log("F:" + currentScore);
            } else {
                currentMultiplier = 2;
                currentScore = (currentScore * currentMultiplier);
                console.log("G:" + currentMultiplier);
                console.log("H:" + currentScore);
            }
        }
    };

    // Start Timer on Click Code
    const startTimer = function () {
        const tick = function () {
            const min = String(Math.trunc(time / 60)).padStart(2, 0);
            const sec = String(time % 60).padStart(2, 0);
            // with each call print the time remaining to the User Interface
            timerDisplay.textContent = `${min}:${sec}`;
            // When Timer reaches zero end game, show user score and high score log
            if (time === 0) {
                clearInterval(timer);
                console.log("Game Over");
                console.log("Your Score will be displayed");
                renderEndGame();
            }

            // Decrease timer by 1 second for each call 
            time--;
        }

        // When Btn is clicked begin timer at 30 seconds (can be modified)
        let time = 120;
        // Call the timer every second
        tick();
        const timer = setInterval(tick, 1000);
        return timer;
    };

});

// creating container element to add end of game elements
let containerElement = document.getElementById("quizContainer");

function createRow(rowTotal, content) {

    for (let i = 0; i < rowTotal; i++) {
        const rowElement = document.createElement("div");
        rowElement.setAttribute("class", "row")
        const colElement = document.createElement("div");
        colElement.setAttribute("class", "col");
        colElement.append(content);
        rowElement.append(colElement);
        containerElement.append(rowElement);

    }
}
function renderEndGame() {
    containerElement.innerHTML = "";
    // Game is Over Notification
    const endGameMessageElement = document.createElement('div');
    // endGameMessageElement.setAttribute('class', 'h4');
    endGameMessageElement.innerText = "Game is Over!";
    // Let user know what their score is
    const userScoreMessageElement = document.createElement('div');
    userScoreMessageElement.innerHTML = "Your final score is: ";
    endGameMessageElement.append(userScoreMessageElement);
    // Request user input 
    const initialMessageElement = document.createElement('div');
    initialMessageElement.setAttribute('class', 'myClassBlue');
    initialMessageElement.innerHTML = "Enter your name here: <input type='text' id='initial-input'></input>"
    endGameMessageElement.append(initialMessageElement);
    // Submit score button that will also be used to creat event Listener to generate highscores record
    const addHighScoreBtnElement = document.createElement('button');
    addHighScoreBtnElement.setAttribute('class', 'btn btn-dark');
    addHighScoreBtnElement.setAttribute('id', 'submit-btn');
    addHighScoreBtnElement.innerText = "Submit Score";
    endGameMessageElement.append(addHighScoreBtnElement);
    createRow(1, endGameMessageElement);
}
