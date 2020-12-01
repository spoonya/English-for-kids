import CATEGORIES_DATA from '../data/categories.data';
import CARDS_DATA from '../data/cards.data';
import SELECTORS from '../constants/selectors.const';
import CardComponent from './card.component';
import clearContent from '../helpers/content-clear';
import chooseActiveLink from '../helpers/active-category';

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

    for (let i = 0; i < CATEGORIES_DATA.length; i++) {
      SELECTORS.DOM.content?.insertAdjacentHTML(
        'beforeend',
        setupCard(CATEGORIES_DATA[i].img, CATEGORIES_DATA[i].title, CATEGORIES_DATA[i].id),
      );
    }

    SELECTORS.DOM.content.querySelectorAll(SELECTORS.DOM.categoriesStr).forEach((el: HTMLElement): any => {
      el.addEventListener('click', () => {
        const category = el.id;
        clearContent();
        SELECTORS.DOM.contentTitle.textContent = Object.keys(CARDS_DATA).find((key) => key === category);
        chooseActiveLink();
        cards.initCards(CARDS_DATA[category]);
      });
    });
  };
}
