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

// console.log(averageResponseTime([120, "200", 150]));
