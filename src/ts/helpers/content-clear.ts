import SELECTORS from '../constants/selectors.const';

const clearContent = (): void => {
  while (SELECTORS.DOM.content.firstChild) {
    SELECTORS.DOM.content.removeChild(SELECTORS.DOM.content.firstChild);
  }
};

export default clearContent;
