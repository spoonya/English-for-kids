const selectors = {
  styles: {
    hiddenVisual: 'hidden-visual',
    hiddenPhys: 'hidden-phys',
    visible: 'visible',
    blackout: 'page--blackout',
  },
  DOM: {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('.header__menu'),
    page: document.querySelector('.page'),
  },
};

export default selectors;
