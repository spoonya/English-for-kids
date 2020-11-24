import '../styles/style.scss';
import Header from './components/header.component';
import Images from './data/images.data';

export const header: Header = new Header();
export const images: object = new Images().importImages();

const init = (): void => {
  header.initHeader();
};

init();
