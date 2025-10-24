console.log("im here!");

let results = "";
let currentGameX = [];
let currentGameO = [];
let getButtons = document.querySelectorAll('.box');
let getTurn = document.querySelector('header p');
let regex = /,/g;

for(let i = 0; i < getButtons.length; i++){
    getButtons[i].addEventListener('click', ()=>{
        if(getButtons[i].innerHTML == ''){

            if(getTurn.innerHTML == 'x'){
                getButtons[i].innerHTML = 'x';
                getTurn.innerHTML = 'o';
                currentGameX[i] += i.toString();
                fixBoard();
                CheckWinner(currentGameX);
            }else if(getTurn.innerHTML = 'o'){
                getButtons[i].innerHTML = 'o';
                getTurn.innerHTML = 'x';
                currentGameO[i] += i;
                //CheckWinner(currentGameO);
            }else{
                alert('uh oh something is wrong');
            }

        }else{
            alert('you already clicked that one!');
        }
        //console.log('this is o board', currentGameO);
        //console.log('this is x board', currentGameX.toString());
        
    });
}

function CheckWinner(game){
    let winorlose;
    let testcase = '012';
    let curgame = game.toString();
    console.log(curgame);
    curgame = curgame.replace(regex, '');
    console.log(curgame);

    let winningpatterns =[
            [/012/g],
            [/036/g],
            [/048/g],
            [/147/g],
            [/258/g],
            [/246/g],
            [/345/g],
            [/678/g]];
    
    
    winorlose = winningpatterns[0].test(testcase);
    console.log(winorlose);
    for(let i = 0;i < winningpatterns.length; i++){

        if(curgame.match(winningpatterns[i])){
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
}
function gameConvert(game){



    return game;
}

//CheckWinner(game1);
//CheckWinner(game2);