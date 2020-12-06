import STATE from './constants/state.const';
import SELECTORS from './constants/selectors.const';
import CARDS_DATA from './data/cards.data';
import GAME_AUDIO from './constants/game-sounds.const';
import AUDIO_CFG from './constants/audio-cfg.const';
import ModalComponent from './components/modal.component';
import { categories } from './index';

export default class PlayMode {
  public category: string = '';

  private correctMark: string = `<i class="content__info-score fas fa-star"></i>`;

  private incorrectMark: string = `<i class="content__info-score content__info-score--mistake fas fa-star"></i>`;

  private createArray = (): any[] => {
    this.category = SELECTORS.dom.contentTitle.textContent;
    const arr = CARDS_DATA[this.category].slice();
    const arrLength: number = arr.length;

    for (let i = arrLength - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  };

  public playAudio = (path: string, optionalDelay?: number): void => {
    const delay = optionalDelay || 0;
    const audio = new Audio();
    audio.src = path;
    audio.volume = AUDIO_CFG.volume;
    setTimeout((): any => audio.play(), delay);
  };

  public startGame = (): void => {
    STATE.gameActive = true;
    STATE.randArr = this.createArray();
    STATE.curWord = STATE.randArr[STATE.randArr.length - 1].word;
    this.playAudio(AUDIO_CFG.findPath(this.category, STATE.curWord), AUDIO_CFG.shortDelay);
  };

  public resetGame = (): void => {
    STATE.curWord = '';
    STATE.gameActive = false;
    STATE.randArr = [];
    STATE.errors = 0;
    STATE.gameEnd = false;
    SELECTORS.dom.contentInfoAnswers.innerHTML = '';
    SELECTORS.dom.content.querySelectorAll(SELECTORS.dom.topicItemStr).forEach((el: HTMLElement): void => {
      el.classList.remove(SELECTORS.styles.topicItemDisabled);
    });
  };

  private notifyCorrectAnswer = (curWord: string, card: HTMLElement): boolean => {
    if (curWord === STATE.curWord) {
      this.playAudio(GAME_AUDIO.correctAnswer);
      card.classList.add(SELECTORS.styles.topicItemDisabled);
      SELECTORS.dom.contentInfoAnswers.insertAdjacentHTML('beforeEnd', this.correctMark);
    }
    return curWord === STATE.curWord;
  };

  private notifyWrongAnswer = (): void => {
    this.playAudio(GAME_AUDIO.incorrectAnswer);
    SELECTORS.dom.contentInfoAnswers.insertAdjacentHTML('beforeEnd', this.incorrectMark);
    STATE.errors += 1;
  };

  private prepareNextWord = (): void => {
    if (STATE.randArr.length > 1) {
      STATE.randArr.pop();
      STATE.curWord = STATE.randArr[STATE.randArr.length - 1].word;
      this.playAudio(AUDIO_CFG.findPath(this.category, STATE.curWord), AUDIO_CFG.longDelay);
    } else {
      STATE.gameEnd = true;
    }
  };

  private endGame = (): void => {
    const showTime: number = 10000;

    if (STATE.errors > 1) {
      this.playAudio(GAME_AUDIO.failureEnd, AUDIO_CFG.longDelay);
      new ModalComponent(ModalComponent.alertType.onFailureEnd).showAlert().closeAlert(showTime);
    } else {
      this.playAudio(GAME_AUDIO.successEnd, AUDIO_CFG.longDelay);
      new ModalComponent(ModalComponent.alertType.onSuccessEnd).showAlert().closeAlert(showTime);
    }

    setTimeout((): void => {
      categories.initCategories();
      this.resetGame();
    }, showTime);
  };

  public controlGame = (curWord: string, card: HTMLElement): void => {
    if (this.notifyCorrectAnswer(curWord, card)) {
      this.prepareNextWord();
    } else {
      this.notifyWrongAnswer();
    }

    if (STATE.gameEnd) {
      this.endGame();
    }
  };
}
