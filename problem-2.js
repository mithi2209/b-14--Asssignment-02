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


    // let sum = isElevatorSafe("60,75,50");
    // console.log(sum);