console.log("im here!");

let results = "";
let currentGameX = [];
let currentGameO = [];
let getButtons = document.querySelectorAll('.box');
let getTurn = document.querySelector('header p');

for(let i = 0; i < getButtons.length; i++){
    getButtons[i].addEventListener('click', ()=>{
    console.log('you clicked me!');
        if(getButtons[i].innerHTML == ''){

            if(getTurn.innerHTML == 'x'){
                getButtons[i].innerHTML = 'x';
                getTurn.innerHTML = 'o';
                currentGameX[i] += i;
                //CheckWinner(currentGame, results);
            }else if(getTurn.innerHTML = 'o'){
                getButtons[i].innerHTML = 'o';
                getTurn.innerHTML = 'x';
                currentGameO[i] += i;
                //CheckWinner(currentGame, results);
            }else{
                alert('uh oh something is wrong');
            }

        }else{
            alert('you already clicked that one!');
        }
        console.log('this is o board', currentGameO);
        console.log('this is x board', currentGameX);
    });
}

function CheckWinner(game, results){
    let winorlose;
    let winningpatterns =[
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [3, 4, 5],
            [6, 7, 8]];

    for(let i = 0; i > game.length; i++){
        
    }

    return results;
}

//CheckWinner(game1);
//CheckWinner(game2);