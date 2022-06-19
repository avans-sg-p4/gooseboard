export class Player {
    _x;
    _y;
    
    constructor(index, boardPosition = 0, pawn) {
        this._index = index;
        this._boardPosition = boardPosition;
        this._x = 0;
        this._y = 0;
        this._pawn = pawn;

        this.#init()
    }

    #init() {
        $('#board-container').append(`<img class='player-item' id='player-${this._index}' src='${this._pawn}' />`);

        const player = this;
        $(window).on('resize', function() {            
            player.updateBoardPosition(0, false);            
        })
    }   

    get boardPosition() {
        return this._boardPosition;
    }

    updateBoardPosition(dice, delay = true) {        
        const newPosition = dice + this._boardPosition;
        this._boardPosition = newPosition;
        let positionData = $('#inline-board .item').get(newPosition - 1);


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

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}