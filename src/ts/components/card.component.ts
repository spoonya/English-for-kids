import SELECTORS from '../constants/selectors.const';

export default class CardComponent {
  public initCards = (topic: any): void => {
    const setupCard = (word: string, translation: string, img: string): string => {
      return `<div class="content__topic-item">
                <div class="content__topic-item-wrapper">
                  <div class="content__topic-item-front">
                    <img class="content__topic-item-img" src="${img}" alt="${word}" class="content__item-img">
                    <div class="content__topic-item-content">
                      <p class="content__topic-item-word">${word}</p>
                      <button class="content__topic-item-btn">Fisting</button>
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

    // SELECTORS.DOM.contentTitle.textContent = CATEGORIES[0].title;

    for (let i = 0; i < topic.length; i++) {
      SELECTORS.DOM.content?.insertAdjacentHTML(
        'beforeend',
        setupCard(topic[i].word, topic[i].translation, topic[i].img),
      );
    }
  };
}
