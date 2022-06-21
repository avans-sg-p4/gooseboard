import { getRandomInt } from "../plugins/random";

export class Player {
    _x;
    _y;
    
    constructor(index, boardPosition = 0, pawn, name) {
        this._index = index;
        this._boardPosition = boardPosition;
        this._x = 0;
        this._y = 0;
        this._pawn = pawn;
        this._name = name;

        this.#init()
    }   

    get boardPosition() {
        return this._boardPosition;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
        this.#setName();
    }

    updateBoardPosition(dice, delay = true) {        
        const newPosition = dice + this._boardPosition;
        this._boardPosition = newPosition;        
        
        const index = newPosition == 0 ? 0 : newPosition - 1;
        let positionData = $('#inline-board .item').get(index);

        // If index is Zero, the player hasnt moved yet
        if(index == 0) {
            positionData = $('#inline-board #start');
        }


        setTimeout(() => {
            this.#updatePosition(positionData);
        }, delay ? 1000 : 0)    
    }

    setStartPosition() {
        let position = $('#inline-board #start');        
        this.#updatePosition(position);
    }

    #updatePosition(element) {
        console.log('[LOG] UPDATE POSITION');
        let positionData = $(element).position();

        // Assign x,y values with slight deviation
        this._x = positionData.left - getRandomInt(15,35);
        this._y = positionData.top - getRandomInt(65,73);

        const player = `#player-${this._index}`;                   
        $(player).css('left', this._x + 'px');
        $(player).css('top', this._y + 'px');        
    }
    
    #init() {
        $('#board-container').append(`<img class='player-item' id='player-${this._index}' src='${this._pawn}' />`);
        this.#setName();

        const player = this;
        $(window).on('resize', function() {            
            player.updateBoardPosition(0, false);            
        })
    }

    #setName() {
        // Update name on the board
        $(`#player-${this._index}-name`).text(this._name);
    }

}