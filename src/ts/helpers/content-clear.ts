import SELECTORS from '../constants/selectors.const';

const clearContent = (): void => {
  while (SELECTORS.dom.content.firstChild) {
    SELECTORS.dom.content.removeChild(SELECTORS.dom.content.firstChild);
  }
};

export default clearContent;
