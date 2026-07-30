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

// let winner = matchWinner(0,0);
// console.log(winner) ;