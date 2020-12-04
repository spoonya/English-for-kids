import SELECTORS from '../constants/selectors.const';

const chooseActiveLink = (): void => {
  SELECTORS.dom.menuBtn.forEach((el: HTMLElement) => {
    if (el.classList.contains(SELECTORS.styles.activeLink)) {
      el.classList.remove(SELECTORS.styles.activeLink);
    }

    if (el.getAttribute(SELECTORS.attr.category) === SELECTORS.dom.contentTitle.textContent.toLowerCase()) {
      el.classList.add(SELECTORS.styles.activeLink);
    }
  });
};

export default chooseActiveLink;
