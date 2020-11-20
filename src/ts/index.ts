import '../styles/style.scss';
import Header from './header';

export const header: Header = new Header();

const init = (): void => {
  header.initHeader();
};

init();
