import '../styles/style.scss';
import HeaderComponent from './components/header.component';
import CategoryComponent from './components/category.component';

export const header: HeaderComponent = new HeaderComponent();
export const categories: CategoryComponent = new CategoryComponent();

const init = (): void => {
  header.initHeader();
  categories.initCategories();
};

init();
