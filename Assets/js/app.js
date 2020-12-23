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
   
    