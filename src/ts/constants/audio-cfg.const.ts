import CARDS_DATA from '../data/cards.data';

interface T {
  longDelay: number;
  shortDelay: number;
  volume: number;
  // eslint-disable-next-line no-unused-vars
  findPath(...args: any[]): string;
}

const AUDIO_CFG: T = {
  longDelay: 1200,
  shortDelay: 300,
  volume: 0.2,
  findPath(category: string, word: string) {
    return CARDS_DATA[category].find((element: any) => element.word === word).audioSrc;
  },
};

export default AUDIO_CFG;
