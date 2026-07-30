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

    // console.log(calculateAiCost("500")) ;
    