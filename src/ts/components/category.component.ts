import CATEGORIES from '../data/categories.data';
import SELECTORS from '../constants/selectors.const';

export default class CategoryComponent {
  public createCategories = (): void => {
    const setupCard = (img: string, title: string, id: string): any => {
      return `<div class="content__item" id="${id}">
        <div class="content__item-top"></div>
        <div class="content__item-mid">
        <img class="content__item-img" src="${img}" alt="${title}">
        <h3 class="content__item-title">${title}</h3>
        </div>
      </div>`;
    };

    for (let i = 0; i < CATEGORIES.length; i++) {
      SELECTORS.DOM.content?.insertAdjacentHTML(
        'beforeend',
        setupCard(CATEGORIES[i].img, CATEGORIES[i].title, CATEGORIES[i].id),
      );
    }
  };
}
