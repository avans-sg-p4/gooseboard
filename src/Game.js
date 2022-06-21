import { PlayAudio } from './plugins/audioPlayer';

export const Game = {
    setup: () => ({ players: [] }),

    turn: {
        minMoves: 1,
        maxMoves: 1,
    },

    phases: {
        intro: {},
        dice: {
            moves: {
                rollDie
            },
            next: 'play',
            start: true,
        },
        play: {
            moves: {}
        },
        end: {}
    },
};

function rollDie(G, ctx) {
    PlayAudio('DICE');
    G.dieRoll = ctx.random.D4();
}