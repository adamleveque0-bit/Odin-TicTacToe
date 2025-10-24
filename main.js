console.log("im here!");

let results = "";
let currentGame = [];



const game1 = [ 'x','o','x',
                'x','o','x',
                'o','x','o',];

const game2 = [ 'o','o','x',
                'x','o','x',
                'o','x','o',];

function CheckWinner(game, results){
    let winorlose;
    let X = [];
    let O = [];
    let winningpatterns =[
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [3, 4, 5],
            [6, 7, 8]];

    for(let i = 0; i > currentGame.length; i++){
        if(currentGame[i].innerHtml = 'x'){

        }else if(currentGame[i].innerHtml = '0'){

        }
    }

    return results;
}

CheckWinner(game1);
CheckWinner(game2)