import { Client } from 'boardgame.io/client';
import { Game } from './Game';
import inlineSVGMin from 'inline-svg';
import { Player } from './models/Player';
import { ActionHandler } from './handlers/ActionHandler';

export class GooseBoardClient {
  players = [];  
  _actionHandler = new ActionHandler(); 

    constructor(rootElement) {      
      this.client = Client({ game: Game });
      this.client.start();
      this.rootElement = rootElement;

      this.createBoard();
      this.createDiceAndPlayerContainer();
      this.createTurnIndicator();
      
      this.attachListeners();
      this.client.subscribe(state => this.update(state));
      this.addPlayers();
    }
  
    createBoard() {
      this.rootElement.innerHTML = '<div id="board-container"><img id="board" class="svg" src=' + require('/assets/inline-board.svg') + ' /></div>';  
      let players = this.players;

      inlineSVGMin.init({
        svgSelector: 'img.svg',
        initClass: 'js-inlinesvg',
      }, function () {

          // Set players at the start position
          players[0].setStartPosition();
          players[1].setStartPosition();
      });
    }
    
    createDiceAndPlayerContainer() {
      const diceContainer = `
        <div id="game-data">
          <div id="dice-container">
            <div id='dice'><img src='${ require('/assets/dice/dice_point_4.png')}' /></div>          
            <h2 id="dice-result"></h2>            
            <br/>
            <button id='roll-dice-btn' class='btn'>Roll the dice</button>
          </div>
          <div id="player-container">            
            <div class='pawn-container'>
              <div class='pawn' id='pawn-1'><img src='${ require('/assets/pawns/2_pawn.png')}' /> <span id='player-1-name' class='player-name'>Player 1</span> <br/> <p class='pawn-pos'>Place <span class='position'>0</span></p></div>
              <div class='pawn' id='pawn-2'><img src='${ require('/assets/pawns/1_pawn.png')}' /> <span id='player-2-name' class='player-name'>Player 2</span> <br/> <p class='pawn-pos'>Place <span class='position'>0</span></p></div>
            </div>
          </div>          
        </div>
      `;
      $('body').append(diceContainer);
    }    

    createTurnIndicator() {
      const turnIndicator = `
        <div id="turn-indicator">
          <h3 id="current-turn"></h3>      
        </div>
      `;
      $('body').append(turnIndicator);
    }

    addPlayers() {      
      const PlayerOne = new Player(1, 0, require('/assets/pawns/1_pawn.png'), 'Player 1');
      const PlayerTwo = new Player(2, 0, require('/assets/pawns/2_pawn.png'), 'Player 2');                    
      this.players.push(PlayerOne, PlayerTwo);            
    }

    attachListeners() {
      const handleDiceRoll = event => {      
        $('#roll-dice-btn').prop('disabled', true);

        $('#dice').toggleClass('roll-animation');     
        this.client.moves.rollDie()    
      };

      $('#roll-dice-btn').on('click', handleDiceRoll);           

      const players = this.players;
      $('#btn-play-game').on('click', function() {
          let playerOne = $('#player-1-name-input').val() != '' ? $('#player-1-name-input').val() : 'Player 1';
          let playerTwo = $('#player-2-name-input').val() != '' ? $('#player-2-name-input').val() : 'Player 2';

          players[0].name = playerOne;
          players[1].name = playerTwo;

      })
    }

    update(state) {
      const currentPlayer = this.players[state.ctx.currentPlayer];

      updateDiceIcon(state.G.dieRoll);                   
      updatePlayerPosition(currentPlayer, state);          

      this._actionHandler.determineAction(currentPlayer);

      updateCurrentPlayerData(currentPlayer, state);
      updateTurnData(state);             
    }
  }

  function updatePlayerPosition(player, state) {
    if(player == undefined) return;    

    let dice = state.G.dieRoll;
    player.updateBoardPosition(dice);      
  } 

  function updateDiceIcon(number) {
    let n = number ?? 4;   
    let image = require(`/assets/dice/dice_point_1.png`);              

    switch (n) {
      case 1:
        image = require(`/assets/dice/dice_point_1.png`);
        break;
      case 2:
        image = require(`/assets/dice/dice_point_2.png`);
        break;
      case 3:
        image = require(`/assets/dice/dice_point_3.png`);
        break;
      case 4:
        image = require(`/assets/dice/dice_point_4.png`);
        break;
      case 5:
        image = require(`/assets/dice/dice_point_5.png`);
        break;
      case 6:
        image = require(`/assets/dice/dice_point_6.png`);
    }

    setTimeout(() => {
      $('#dice').html(`<img src='${image}' />`) 
    }, 500)    
  }

  function updateCurrentPlayerData(player, state) {
    $('.pawn').removeClass('active');
    $('#pawn-' + (parseInt(state.ctx.currentPlayer) + 1)).addClass('active');

    let boardPosition = player != undefined ? player.boardPosition : 0;
    $('#pawn-' + (parseInt(state.ctx.currentPlayer) + 1) + ' .position').text(boardPosition);      
  }

  function updateTurnData(state) {
    $('#current-turn').text('Turn ' + state.ctx.turn);
  }