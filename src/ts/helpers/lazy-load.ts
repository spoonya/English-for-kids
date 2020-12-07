import SELECTORS from '../constants/selectors.const';

const loadLazy = (): void => {
  [].forEach.call(document.querySelectorAll(SELECTORS.dom.lazyImg), (img: any): any => {
    img.setAttribute(SELECTORS.attr.src, img.getAttribute(SELECTORS.attr.dataSrc));
    img.onload = (): void => {
      img.removeAttribute(SELECTORS.attr.dataSrc);
    };
  });
};

export default loadLazy;
