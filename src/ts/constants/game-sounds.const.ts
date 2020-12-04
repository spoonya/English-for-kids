import AssetsData from '../data/assets.data';

const sounds = new AssetsData().importGameSounds();

const GAME_AUDIO = {
  correctAnswer: sounds.game['correct.mp3'],
  incorrectAnswer: sounds.game['incorrect.mp3'],
  successEnd: sounds.game['success.mp3'],
  failureEnd: sounds.game['failure.mp3'],
};

export default GAME_AUDIO;
