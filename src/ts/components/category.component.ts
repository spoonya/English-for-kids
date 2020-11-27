import CATEGORIES from '../data/categories.data';
import CARDS from '../data/cards.data';
import SELECTORS from '../constants/selectors.const';
import CardComponent from './card.component';

const cards: CardComponent = new CardComponent();

export default class CategoryComponent {
  public initCategories = (): void => {
    const setupCard = (img: string, title: string, id: string): string => {
      return `<div class="content__category-item" id="${id}">
                <div class="content__category-item-top"></div>
                <div class="content__category-item-mid">
                  <img class="content__category-item-img" src="${img}" alt="${title}">
                  <h3 class="content__category-item-title">${title}</h3>
                </div>
              </div>`;
    };

    // SELECTORS.DOM.contentTitle.textContent = CATEGORIES[0].title;

    for (let i = 0; i < CATEGORIES.length; i++) {
      SELECTORS.DOM.content?.insertAdjacentHTML(
        'beforeend',
        setupCard(CATEGORIES[i].img, CATEGORIES[i].title, CATEGORIES[i].id),
      );
    }

    SELECTORS.DOM.content.querySelectorAll('.content__category-item').forEach((el: HTMLElement): any => {
      el.addEventListener('click', () => {
        const category = el.id;
        SELECTORS.DOM.contentTitle.textContent = Object.keys(CARDS).find((key) => key === category);
        while (SELECTORS.DOM.content.firstChild) {
          SELECTORS.DOM.content.removeChild(SELECTORS.DOM.content.firstChild);
        }
        cards.initCards(CARDS[category]);
      });
    });
  };
}
