import { INVALID_MOVE } from 'boardgame.io/core';

export const Game = {
    setup: () => ({ players: [] }),

    turn: {
        minMoves: 1,
        maxMoves: 1,
    },

    phases: {
        dice: {
            moves: {
                rollDie
            },
            next: 'play',
            start: true,
        },
        play: {
            moves: {}
        }
    },    
};

function rollDie(G, ctx) {
    G.dieRoll = ctx.random.D4();
}