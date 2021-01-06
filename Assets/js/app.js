    $('document').ready(function(){

        // Create Element to be grabbed for Timer Display
    // Create Element to be grabbed for Timer Display
    const timerDisplay = document.querySelector(".timer");
    let timer;
    let HPCharacters;
    let LOTRCharacters;
    let choosenAPI;
    let randomArrayNo;
    let currentScore = 0;
    let currentMultiplier =1;
    let isAnswerHP;
    let isAnswerLOTR;
    let quizCounter = 0;
    const maxQuestion = 10;
    let highscoreArray= [];

       
            // init Function MJ
            init()
            function init(){
                $("#intro").show()
                $(".timer").hide()
                $("#cover-start").show()
                $(".loader-container").hide()
                $("#quizContainer").hide()
        };

            // on click of start button run API requests
            $("#startButton").on("click", function(event){
                event.preventDefault();
                $("#intro").hide()   
                $(".loader-container").show()
                $("#cover-start").hide()
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

                }).then(function(response){ 
                    // let resultHarryAPI = (JSON.stringify(response));
                    HPCharacters = response;
                    // console.log(resultHarryAPI);  
                    // console.log("HarryArray:" + Array.isArray(HPCharacters));
                    // quiz timer start
                    if (timer) clearInterval(timer);
                    $(".timer").show()
                    $(".loader-container").hide()
                    timer = startTimer();
                    // quiz start
                    $("#quizContainer").show()
                    startQuiz(LOTRCharacters,HPCharacters);              
                }); 

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
    function scoreCalc(isAnswerEval){
        // set initial variable values
        currentScore;
        currentMultiplier;
        // with score still empty set initial current score and multiplier
        if (isAnswerEval) {

            if (currentScore==0) {
                currentMultiplier=2;
                currentScore += 1;
                console.log("A:"+currentMultiplier);
                console.log("B:"+currentScore);
            }
                // with score already set add +1 to multiplier and mutliply with current score
                else {
                currentMultiplier=(currentMultiplier+1);
                currentScore=(currentScore*currentMultiplier);
                console.log("C:"+currentMultiplier);
                console.log("D:"+currentScore);
            }
    }
            else {
            //added if statement for incorrect first answer under a evalualtion that is false
                if (currentScore==0) {
                    currentMultiplier=2;
                    currentScore = 0;
                    console.log("E:"+currentMultiplier);
                    console.log("F:"+currentScore);
            }               else {
                        currentMultiplier=2;
                        // currentScore=(currentScore*currentMultiplier);
                        console.log("G:"+currentMultiplier);
                        console.log("H:"+currentScore);
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
            let time = 60;
      
            // Call the timer every second
            tick();
            const timer = setInterval(tick, 1000);
            return timer;
    };

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
            window.location = "Highscores.html";
            containerElement.innerHTML = "";
            // Game is Over Notification
            const endGameMessageElement = document.createElement('div');
            endGameMessageElement.setAttribute('class', 'myClassRed');
            endGameMessageElement.innerText = "Game is Over!";
            // Let user know what their score is
            const userScoreMessageElement = document.createElement('h4');
            userScoreMessageElement.innerHTML = "Your final score is: " +currentScore;
            endGameMessageElement.append(userScoreMessageElement);
            // Request user input 
            const initialMessageElement = document.createElement('div');
            initialMessageElement.setAttribute('class', 'myClassBlue');
            initialMessageElement.innerHTML = "Enter your name here: <input type='text' id='initials'></input>"
            endGameMessageElement.append(initialMessageElement);
            // Submit score button that will also be used to creat event Listener to generate highscores record
            const addHighScoreBtnElement = document.createElement('button');
            addHighScoreBtnElement.setAttribute('class','btn btn-dark');
            addHighScoreBtnElement.setAttribute('id', 'submit-btn');
            addHighScoreBtnElement.innerText = "Submit Score";
            endGameMessageElement.append(addHighScoreBtnElement);
            // Error Message element
            const errorMessageElement = document.createElement('div');
            errorMessageElement.setAttribute('id', 'errorIndicator');
            // errorMessageElement.innerHTML = ""
            endGameMessageElement.append(errorMessageElement);
            createRow(1, endGameMessageElement);

            addHighScoreBtnElement.addEventListener("click", function(){
                let highscores = [];
                if(localStorage.getItem('localHighscores')){
                    highscores = localStorage.getItem('localHighscores');
                    highscores = JSON.parse(highscores);
                }   else{
                    let highscores = [];
                }
                const userInitial = document.getElementById('initials').value;
                // const userScore = calcFinalScore();
                highscores[(highscores.length)] = {
                    initial: userInitial,
                    score: currentScore,
                }
                window.localStorage.setItem('localHighscores', JSON.stringify(highscores));
                handleHighscore(highscores);
                // target highscore.html
                window.location = "Highscores.html";
            });
            
            function handleHighscore(highscores) {
            if(localStorage.getItem('localHighscores')){
                // highscores = localStorage.getItem('localHighscores');
                // highscores = JSON.parse(highscores);
            }   else{
                highscores = [];
            }

            document.body.innerHTML = "";
            const highscoreContainerElement = document.createElement('div');
            highscoreContainerElement.setAttribute('class','container');
            // Title and elements for highscore page
            const highscoreTitleElement = document.createElement('div');
            highscoreTitleElement.setAttribute('class', 'display-2 text-center mb-3')
            highscoreTitleElement.innerHTML = "Record of Highscores";
            highscoreContainerElement.append(highscoreTitleElement);
            for (let i=0; i < highscores.length; i++){
                let highscoreEL = document.getElementById("#highscoreContainer")
                let highscoreDisplayElement = document.createElement('div');
                highscoreDisplayElement.setAttribute('class','m-1 bg-secondary text-white p-1')
                highscoreDisplayElement.innerText = (i+1)+". "+highscores[i].initial+" - "+highscores[i].score;
                highscoreContainerElement.append(highscoreDisplayElement);
            }

            // // Buttons to Restart Quiz or Clear Record of Highscores and appending the Highscore elements to make them visible
            restartBtnElement = document.createElement('button');
            restartBtnElement.setAttribute('class', 'btn btn-light btn-block m-1');
            restartBtnElement.innerText = 'Restart The Kwiz';
            highscoreContainerElement.append(restartBtnElement);

            restartBtnElement.addEventListener('click', function(){
                document.location.reload()
            });
            
            clearScoresBtnElement = document.createElement('button');
            clearScoresBtnElement.setAttribute('class', 'btn btn-dark btn-block m-1');
            clearScoresBtnElement.innerText = 'Clear Highscores';
            highscoreContainerElement.append(clearScoresBtnElement);

            clearScoresBtnElement.addEventListener('click', function(){
                window.localStorage.removeItem('localHighscores');
                handleHighscore();
            });
            document.body.append(highscoreContainerElement);
            }
        }
        });
