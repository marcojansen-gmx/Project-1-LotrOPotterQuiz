// Create Element to be grabbed for Timer Display
const timerDisplay = document.querySelector('.timer');
let timer;

// document Ready Wrapper MJ
$(document).ready(function () {
    
    // init Function MJ
    init()
    function init(){
       $("#startLOTR").show()
    }

    // hide Start Button On Click MJ
    $("#startLOTR").on("click", function(){
       $("#startLOTR").hide()
    })
    
    // on Click Of Start Button Request LOTR API MJ
    $("#startButton").on("click", function(){
 
        $.ajax({
            url: 'https://the-one-api.dev/v2/character',
            type: 'GET',
            contentType: 'application/json',
            headers: {
            'Authorization': 'Bearer 8dD_KqhUELsw37ZZ8_2t'
            },
            success: function (result) {
                const resultLOTRAPI = (JSON.stringify(result))
                console.log(resultLOTRAPI);
                return resultLOTRAPI;
            },
            error: function (error) {
                console.log(error);
            }
        });
        if (timer) clearInterval(timer);
        timer = startTimer();
    });

    // on Click Of Start Button Request Harry Potter API MJ
    $("#startButton").on("click", function(){

        $.ajax({
            url: 'https://hp-api.herokuapp.com/api/characters',
            method: "GET"
        }).then(function(response){  
            const resultHarryAPI = (JSON.stringify(response));
            console.log(resultHarryAPI);
            return resultHarryAPI;
        });

    });

    // random API Selector MJ
    function selectRandomAPIResult(){
        let selectorAPI = Math.round(Math.random());
        console.log(selectorAPI);
        let arrayAPIChoice = ["resultLOTRAPI","resultHarryAPI"];
        let choosenAPI = arrayAPIChoice[selectorAPI];
        console.log(choosenAPI);
        return(choosenAPI);
    };

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

