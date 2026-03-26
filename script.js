     let score= JSON.parse(localStorage.getItem('score')) || {
            wins:0,
            losses:0,
            ties:0
        }; 
        updateScore();
         // we are retrieving the score object from local storage and converting it back to an object using JSON.parse() method
        function playGame(playerMove){
             const computerChoice=pickComputerMove();
             let result='';
                    if(playerMove==='Scissors'){
                        if(computerChoice==='Rock'){
                result='Lose';
            }
            else if(computerChoice==='Paper'){
                result='Win';
            }
            else if(computerChoice==='Scissors'){
                result='Tie';
            }
                    }
                    else if(playerMove==='Paper'){
                         if(computerChoice==='Rock'){
        result='Win';
    }
    else if(computerChoice==='Paper'){
        result='Tie';
    }
    else if(computerChoice==='Scissors'){
        result='Lose';
    }
                    }
                    else if(playerMove==='Rock'){
                          if(computerChoice==='Rock'){
        result='Tie';
    }
    else if(computerChoice==='Paper'){
        result='Lose';
    }
    else if(computerChoice==='Scissors'){
        result='Win';
    }
                    }

                    if(result==='Win'){
                        score.wins+=1;
                    }
                    else if(result==='Lose'){
                        score.losses+=1;

                    }
                    else if(result==='Tie'){
                        score.ties+=1;
                    }

                     localStorage.setItem('score',JSON.stringify(score));  // we are storing the score object in local storage as a string using JSON.stringify() method 
                   updateScore();
                   document.querySelector('.js-result')
                   .innerHTML=`You ${result}`;

                   document.querySelector('.js-moves')
                   .innerHTML=`You 
        <img src="images/${playerMove.toLowerCase()}-emoji.png " class="move-icon">
        <img src="images/${computerChoice.toLowerCase()}-emoji.png" class="move-icon">
        Computer`;
                }
        function updateScore(){
            document.querySelector('.js-score')
        .innerHTML=`Wins : ${score.wins}, Losses : ${score.losses},Ties : ${score.ties} `;
        }
        function pickComputerMove(){
            const randomNumber=Math.random();
            let computerChoice ='';
            if(randomNumber >=0 && randomNumber <1/3){
                computerChoice='Rock';
            }
            else if(randomNumber >=1/3 && randomNumber <2/3){
                computerChoice='Paper';
            }
            else if(randomNumber >=2/3 && randomNumber <1){
                computerChoice='Scissors';
            }
            return computerChoice;
        }