import SELECTORS from '../constants/selectors.const';
import CARDS_DATA from '../data/cards.data';
import STATE from '../constants/state.const';
import { header } from '../index';

export default class CardComponent {
  private getParentEl = (btn: HTMLElement | null): HTMLElement | null => {
    let el = btn;
    const parentClassName = SELECTORS.dom.content.className;

    while (el && el.parentElement?.className !== parentClassName) {
      el = el.parentElement;
    }

    return el;
  };

  private showBack = (card: HTMLElement | null): void => {
    card?.classList.add(SELECTORS.styles.rotate);
  };

  private showFront = (card: HTMLElement | null): void => {
    card?.classList.remove(SELECTORS.styles.rotate);
  };

  private playAudio = (card: HTMLElement | null): void => {
    if (!STATE.playMode) {
      const category: any = card?.hasAttribute(SELECTORS.attr.category)
        ? card.getAttribute(SELECTORS.attr.category)
        : '';
      const audio = new Audio();
      const path = CARDS_DATA[category].find((element: any) => element.word === card?.id).audioSrc;
      audio.src = path;
      audio.volume = 0.2;
      audio.play();
    }
  };

  public initCards = (topic: any, categoryName: string): void => {
    const setupCard = (word: string, translation: string, img: string): string => {
      return `<div class="content__topic-item" id=${word} data-category=${categoryName}>
                <div class="content__topic-item-wrapper">
                  <div class="content__topic-item-front">
                    <img class="content__topic-item-img" src="${img}" alt="${word}" class="content__item-img">
                    <div class="content__topic-item-content">
                      <p class="content__topic-item-word">${word}</p>
                      <button class="content__topic-item-btn" title="See translation">
                        <i class="content__topic-item-icon fas fa-sync-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div class="content__topic-item-back">
                    <img class="content__topic-item-img" src="${img}" alt="" class="content__item-img">
                    <div class="content__topic-item-content">
                      <p class="content__topic-item-word">${translation}</p>
                    </div>
                  </div>
                </div>
              </div>`;
    };

    for (let i = 0; i < topic.length; i++) {
      SELECTORS.dom.content?.insertAdjacentHTML(
        'beforeend',
        setupCard(topic[i].word, topic[i].translation, topic[i].img),
      );
    }

    SELECTORS.dom.content.querySelectorAll(SELECTORS.dom.rotateBtnStr).forEach((el: HTMLElement): any => {
      const card = this.getParentEl(el);

      el.addEventListener('click', (e): void => {
        e.stopPropagation();
        this.showBack(card);
      });
      card?.addEventListener('mouseleave', (): void => this.showFront(card));
      card?.querySelector(SELECTORS.dom.cardFrontStr).addEventListener('click', (): void => this.playAudio(card));
    });

    header.setStateStyles();
  };
}
