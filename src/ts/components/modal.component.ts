import STATE from '../constants/state.const';
import SELECTORS from '../constants/selectors.const';
import AssetsData from '../data/assets.data';

const images = new AssetsData().importModalImages();

export default class ModalComponent {
  private body = SELECTORS.dom.body;

  private modalBg: HTMLElement = document.createElement('div');

  private modal: HTMLElement = document.createElement('div');

  private modalInner: HTMLElement = document.createElement('div');

  private modalTitle: HTMLElement = document.createElement('h3');

  private modalMsg: HTMLElement = document.createElement('p');

  private modalImg: HTMLElement = document.createElement('img');

  public static alertType = {
    getMistakes(): number {
      return STATE.errors;
    },
    onSuccessEnd: {
      title: `Congratulations!`,
      msg: `You won the game with count of mistakes equal to `,
      img: images.modal['success.jpg'],
    },
    onFailureEnd: {
      title: `Failure! Keep trying hard. `,
      msg: `Mistakes: `,
      img: images.modal['failure.jpg'],
    },
  };

  constructor(type: object) {
    switch (type) {
      case ModalComponent.alertType.onSuccessEnd:
        this.modalTitle.innerText = ModalComponent.alertType.onSuccessEnd.title;
        this.modalMsg.innerText = `${
          ModalComponent.alertType.onSuccessEnd.msg
        }${ModalComponent.alertType.getMistakes()}.`;
        this.modalImg.setAttribute('src', ModalComponent.alertType.onSuccessEnd.img);
        this.modalImg.setAttribute('alt', 'Success');
        break;

      case ModalComponent.alertType.onFailureEnd:
        this.modalTitle.innerText = ModalComponent.alertType.onFailureEnd.title;
        this.modalMsg.innerText = `${
          ModalComponent.alertType.onFailureEnd.msg
        }${ModalComponent.alertType.getMistakes()}.`;
        this.modalImg.setAttribute('src', ModalComponent.alertType.onFailureEnd.img);
        this.modalImg.setAttribute('alt', 'Fail');
        break;

      default:
        throw new Error('Wrong alert type');
    }
  }

  public showAlert(): ModalComponent {
    this.modalBg.classList.add('modal-bg');
    this.modal.classList.add('modal');
    this.modalInner.classList.add('modal__inner');
    this.modalTitle.classList.add('modal__title');
    this.modalMsg.classList.add('modal__msg');
    this.modalImg.classList.add('modal__img');

    this.body?.append(this.modalBg);
    this.body?.classList.add(SELECTORS.styles.scrollOff);
    this.modalBg.append(this.modal);
    this.modal.append(this.modalInner);
    this.modalInner.prepend(this.modalTitle);
    this.modalInner.append(this.modalMsg);
    this.modalInner.append(this.modalImg);

    return this;
  }

  public closeAlert(delay: number): void {
    setTimeout(() => {
      this.body?.classList.remove(SELECTORS.styles.scrollOff);
      this.modalBg.remove();
    }, delay);
  }
}
