import { GooseBoardClient } from "./GooseBoardClient.js"


// Innit Game
const appElement = document.getElementById('app');
const app = new GooseBoardClient(appElement);


$('#start-game-btn').on('click', () => {    
    setTimeout(() => {
        startGame();
    }, 300);
});

function startGame() {    
    // Remove overlay
    $('#start-screen').hide();    


    // Open instructions modal

    // setTimeout(() => {
    //     $("#instructionModal").modal({
    //         fadeDuration: 100
    //     });
    // }, 500);   
}