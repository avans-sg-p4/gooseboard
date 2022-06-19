import { sounds } from '../constant/sounds';

export const PlayAudio = (sound) => {
    const audio = new Audio(sounds.get(sound));
    audio.play();
}