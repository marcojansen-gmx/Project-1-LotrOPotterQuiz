
    // // functionToRequestResponseFromHarryPotterURL
    // function queryRequestHarry (){
    //     var queryURL = "https://hp-api.herokuapp.com/api/characters";
    //     console.log(queryURL); 
    //     // Make the AJAX request to the API - GETs the JSON data at the queryURL.
    //     // The data then gets passed as an argument to the updatePage function
    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function(response){
      
    //         console.log(response)
    //     });
    // }
    
    // function queryRequestLOTR (){        
        var queryURL = "https://the-one-api.dev/v2/character";
        console.log(queryURL);        
        // Make the AJAX request to the API - GETs the JSON data at the queryURL.
        // The data then gets passed as an argument to the updatePage function
        $.ajax({
            url: queryURL + ("?access_token=8dD_KqhUELsw37ZZ8_2t"),
            method: "GET"

            
                }).then(function(response){
                console.log(response)
            });        
    //    }
                
        //     }
        // });
        
        
   
    // queryRequestLOTR ();
    
// insert API links on variable

// on start of the quiz

// run for loop to select random API

// select random char based on object and add ID based on API pulled from


