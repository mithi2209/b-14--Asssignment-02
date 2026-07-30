// Problem 1 — Match Winner
    function matchWinner(teamAGoals, teamBGoals) {
    
        if(typeof teamAGoals !== "number" || typeof teamBGoals !== "number"){

            return "Invalid" ;

        }

        if( teamAGoals > teamBGoals){
            return "Team A Won" ;
        }

        else if( teamBGoals > teamAGoals){
            return "Team B Won" ;
        }
        else{
            return "Draw" ;}
        
    }

// Problem 2 — Elevator Weight Safety Checker
    function isElevatorSafe(weights) {

        if(!Array.isArray(weights)){

            return "Invalid" ;
        }

        let totalWeight = 0 ;

        for (let number of weights){

            totalWeight += number ;
        }
            
        if( totalWeight <= 400 ){
            return true ;
        }
        else{
            return false ;
        }

    }

// Problem 3 — AI Token Cost Calculator 
    function calculateAiCost(tokensUsed) {
        
        if(typeof tokensUsed !== "number" || tokensUsed < 0){

            return "Invalid"
        }

        if( tokensUsed <= 500 ){

            return 0 ;
        }

        let extraTokenUsed = tokensUsed - 500;

        let extraTokenCharge = extraTokenUsed / 100  ;

        let totalCharge = Math.floor(extraTokenCharge)  * 5 ;

        
        return totalCharge ;

        
    }

// Problem 4 — Top Rated Restaurant Finder
    function topRatedRestaurant(restaurants) {

        if(Array.isArray(restaurants) === false  || restaurants .length === 0 ){

            return "Invalid"
        }

        let topRatedRestaurant = restaurants[0] ;

        for(let i = 1 ; i < restaurants.length ; i++){

            if(restaurants[i].rating > topRatedRestaurant.rating){

                topRatedRestaurant = restaurants[i] ;

            }
            
        }

        let topRatedResName = topRatedRestaurant.name.toUpperCase() ;
        return topRatedResName ;

    
    }

// Problem 5 —Debugging Challenge: API Response Time Monitor
    function averageResponseTime(times) {

    if (Array.isArray(times) === false || times.length === 0) {
            return "Invalid";
    }
    
    let totalTime = 0 ;
    for (let i = 0 ; i < times.length ; i++){

            if(typeof times[i] !== "number"){
                return "Invalid" ;
            }

        totalTime += times[i] ;
    }
    

        let avg = totalTime / times.length
        return avg;
    }