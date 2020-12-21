// document Ready Wrapper MJ
$(document).ready(function () {
    
    // init Function MJ
    init()
    function init(){
       $("#intro").show()
    }

    // hide Start Button On Click MJ
    $("#startLOTR").on("click", function(){
       $("#intro").hide()
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
                console.log(JSON.stringify(result));             
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
            console.log(response)
        });

    });
});
    // // functionToRequestResponseFromHarryPotterURL
    
    