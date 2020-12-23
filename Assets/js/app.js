// js script comes here

// Create Element to be grabbed for Timer Display
const timerDisplay = document.querySelector('.timer');

// Start Timer on Click Code
const startTimer = function () {
    // When Btn is clicked begin timer at 30 seconds (can be modified)
    let timeRemaining = 30;
    // Call the timer every second
    setInterval(() => {
        // with each call print the time remaining to the User Interface
        timerDisplay.textContent = timeRemaining;     
        // Decrease timer by 1 second for each call 
        time--;
        // When Timer reaches zero end game, show user score and high score log
    }, 1000);
}

// Call funtion to start timer on click of start button - add to eventlistener
startTimer();