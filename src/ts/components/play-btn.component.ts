import SELECTORS from '../constants/selectors.const';
import { playMode } from '../index';
import STATE from '../constants/state.const';
import AUDIO_CFG from '../constants/audio-cfg.const';

export default class PlayBtnComponent {
  private startIcon: string = `<i class="content__info-btn-icon fas fa-play"></i>`;

  private repeatIcon: string = `<i class="content__info-btn-icon fas fa-redo-alt"></i>`;

  private changeIcon = (): void => {
    SELECTORS.dom.contentInfoBtn.innerHTML = this.repeatIcon;
    SELECTORS.dom.contentInfoBtn.title = SELECTORS.text.playBtn.repeat;
  };

  public resetBtn = (): void => {
    SELECTORS.dom.contentInfoBtn.innerHTML = this.startIcon;
    SELECTORS.dom.contentInfoBtn.title = SELECTORS.text.playBtn.start;
  };

  public initPlayBtn = (): void => {
    SELECTORS.dom.contentInfoBtn.addEventListener('click', (): void => {
      if (!STATE.gameActive) {
        playMode.startGame();
        this.changeIcon();
      } else {
        playMode.playAudio(AUDIO_CFG.findPath(playMode.category, STATE.curWord));
      }
    });
  };
}
