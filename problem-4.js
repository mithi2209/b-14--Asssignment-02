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

// console.log(topRatedRestaurant("restaurants")) ;