import { GooseBoardClient } from "./GooseBoardClient.js"
import { PlayAudio } from "./plugins/audioPlayer.js";


$( document ).ready(function() {
    // Innit Game
    const appElement = document.getElementById('app');
    const app = new GooseBoardClient(appElement);

    PlayAudio('READY');
});

// Start the game
$('#start-game-btn').on('click', () => {    

    // Remove overlay
    $('#start-screen').hide();
    
    const slides = $('.modal-slide');
    const slideOne = $(slides).get(0);
    const slideTwo = $(slides).get(1);
    const slideThree = $(slides).get(2);

    $(slideOne).show();

    // Set player names
    $('#btn-next-slide').on('click', function() {
        $(slideOne).hide();
        $(slideTwo).show();
    });

    // Show instruction
    $('#btn-next-slide-3').on('click', function() {
        $(slideTwo).hide();
        $(slideThree).show();
    });

    // Close modal
    $('#btn-play-game').on('click', function() {
        $('#pseudo-close-modal-btn').click();
    });

    // Show introduction modal after 500ms
    setTimeout(() => {
        $("#introductionModal").modal({
            escapeClose: false,
            clickClose: false,
            showClose: false,
            fadeDuration: 500
        });
    }, 500);    
});