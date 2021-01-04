$('document').ready(function(){

    // Create Element to be grabbed for Timer Display
    const timerDisplay = document.querySelector(".timer");
    let timer;
    let HPCharacters;
    let LOTRCharacters;
    let choosenAPI;
    let randomArrayNo;
        
        // init Function MJ
        init()
        function init(){
           $("#intro").show()
           $(".timer").hide()
           $("#quizContainer").hide()
    
        }
    
        $("#startButton").on("click", function(){
          $("#intro").hide()    
          $.ajax({
            url: 'https://the-one-api.dev/v2/character',
            method: "GET",
            contentType: 'application/json',
            headers: {
            'Authorization': 'Bearer 8dD_KqhUELsw37ZZ8_2t'
            }
        }).then(function(response){ 
            let resultLOTRAPI = (JSON.stringify(response));
            LOTRCharacters = response.docs;
            //   console.log(resultLOTRAPI);  
              console.log("LOTRArray:" + Array.isArray(LOTRCharacters));   
            // second ajax call for Harry Potter API
              $.ajax({
                url: 'https://hp-api.herokuapp.com/api/characters',
                method: "GET"
            }).then(function(response){ 
                    let resultHarryAPI = (JSON.stringify(response));
                    HPCharacters = response;
                    // console.log(resultHarryAPI);  
                    console.log("HarryArray:" + Array.isArray(HPCharacters));
                    // quiz timer start
                    if (timer) clearInterval(timer);
                    $(".timer").show()
                    timer = startTimer();
                    // quiz start
                    $("#quizContainer").show()
                    startQuiz(LOTRCharacters,HPCharacters);       
            }); 
        });
        
    
            // $.ajax({
            //     url: 'https://the-one-api.dev/v2/character',
            //     type: 'GET',
            //     contentType: 'application/json',
            //     headers: {
            //     'Authorization': 'Bearer 8dD_KqhUELsw37ZZ8_2t'
            //     },
            //     success: function (result) {
            //         const resultLOTRAPI = (JSON.stringify(result));
            //         // console.log(resultLOTRAPI);
            //         LOTRCharacters = result.docs;
            //         console.log("LOTRArray:" + Array.isArray(LOTRCharacters));
            //     },
            //     error: function (error) {
            //         console.log(error);
            //     }
            // });
    
            // random API Selector MJ
            function selectRandomAPIResult(){
            let selectorAPI = Math.round(Math.random());
            let arrayAPIChoice = ["resultLOTRAPI","resultHarryAPI"];
            choosenAPI = arrayAPIChoice[selectorAPI];
            console.log(choosenAPI);
        };
    
            function startQuiz(LOTRCharacters,HPCharacters){
            selectRandomAPIResult();
            if (choosenAPI === "resultLOTRAPI") {
                console.log(LOTRCharacters);
                randomArrayNo = Math.floor(Math.random() * LOTRCharacters.length);
                console.log(randomArrayNo, LOTRCharacters[randomArrayNo].name);
                $("#question").text(`From which book is this char? Name: ${LOTRCharacters[randomArrayNo].name}`);
                $("#quizContainer").attr("data-answer", "buttonLOTR");
        }
            else{
                console.log(HPCharacters);
                randomHPAPIChar = Math.floor(Math.random() * HPCharacters.length);
                console.log(randomHPAPIChar, HPCharacters[randomHPAPIChar]);
                $("#question").text(`From which book is this char? Name: ${HPCharacters[randomHPAPIChar].name}`);
                $("#quizContainer").attr("data-answer", "buttonHP");
        }
    
        }
    
    });
       
    // Start Timer on Click Code
    const startTimer = function () {
        const tick = function() {
    
            const min = String(Math.trunc(time / 60)).padStart(2, 0);
            const sec = String(time % 60).padStart(2, 0);
            // with each call print the time remaining to the User Interface
            timerDisplay.textContent = `${min}:${sec}`;     
            // When Timer reaches zero end game, show user score and high score log
            if (time === 0) {
                clearInterval(timer);
                console.log("Game Over");
                console.log("Your Score will be displayed");
            }
    
            // Decrease timer by 1 second for each call 
            time--;
        }
        // When Btn is clicked begin timer at 30 seconds (can be modified)
        let time = 5;
        // Call the timer every second
        tick();
        const timer = setInterval(tick, 1000);
        return timer;
    }
    
    });