import '../styles/style.scss';

import HeaderComponent from './components/header.component';
import CategoryComponent from './components/category.component';
// import CardComponent from './components/card.component';

export const header: HeaderComponent = new HeaderComponent();
export const categories: CategoryComponent = new CategoryComponent();
// export const cards: CardComponent = new CardComponent();

const init = (): void => {
  header.initHeader();
  categories.initCategories();
};

init();
