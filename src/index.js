import { GooseBoardClient } from "./GooseBoardClient.js"
import { PlayAudio } from "./plugins/audioPlayer.js";


// Innit Game
const appElement = document.getElementById('app');
const app = new GooseBoardClient(appElement);

PlayAudio('START');


$('#start-game-btn').on('click', () => {    
    startGame();
});

function startGame() {    
    // Remove overlay
    $('#start-screen').hide();    

    // Open instructions modal
}