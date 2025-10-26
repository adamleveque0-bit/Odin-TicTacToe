console.log("im here!");

let results = "";
let currentGameX = [];
let currentGameO = [];
let whosTurn = false; // false is O and True is X
let whoWon = [false, false];
let getButtons = document.querySelectorAll('.box');
let getTurn = document.querySelector('header p');
let regex = /,/g;

for(let i = 0; i < getButtons.length; i++){
    getButtons[i].addEventListener('click', ()=>{
        if(whoWon[0] == false && whoWon[1] == false){

            if(getButtons[i].innerHTML == ''){

                if(getTurn.innerHTML == 'x'){
                    getButtons[i].innerHTML = 'x';
                    getTurn.innerHTML = 'o';
                    whosTurn = true;
                    currentGameX[i] += i.toString();
                    fixBoard();
                    CheckWinner(currentGameX);
                }else if(getTurn.innerHTML = 'o'){
                    getButtons[i].innerHTML = 'o';
                    getTurn.innerHTML = 'x';
                    whosTurn = false;
                    currentGameO[i] += i.toString();
                    fixBoard();
                    CheckWinner(currentGameO);
                }else{
                    alert('uh oh something is wrong');
            }

            }else{
                alert('you already clicked that one!');
            }
    }

        if(whoWon[0] == true){
            getTurn.innerHTML = "X Wins!";
        }
        if(whoWon[1] == true){
            getTurn.innerHTML = "O Wins!";
        }
        
    });
}

function CheckWinner(game){
    let winorlose;
    let curgame = game.toString();
    curgame = curgame.replace(regex, '');

    let winningpatterns =[/012/g,/036/g,/048/g,/147/g,/258/g,/246/g,/345/g,/678/g];
    
    for(let i = 0;i < winningpatterns.length; i++){

        if(winningpatterns[i].test(curgame)){
            if(whosTurn == false){
                whoWon[1] = true;
            }else if(whosTurn == true){
                whoWon[0] = true;
            }
            console.log('you win');
        }else{
            console.log('no winner yet');
        }
    }

}
function fixBoard(){
    
    for(let i = 0; i < currentGameX.length; i++){
        if(typeof currentGameX[i] == 'string'){
            currentGameX[i] = currentGameX[i].replace('undefined','');
        }
    }
    for(let i = 0; i < currentGameO.length; i++){
        if(typeof currentGameO[i] == 'string'){
            currentGameO[i] = currentGameO[i].replace('undefined','');
        }
    }
}


//CheckWinner(game1);
//CheckWinner(game2);