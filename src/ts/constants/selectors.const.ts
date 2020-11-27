const SELECTORS: any = {
  styles: {
    hiddenVisual: 'hidden-visual',
    hiddenPhys: 'hidden-phys',
    visible: 'visible',
    blackout: 'page--blackout',
    scrollOff: 'scroll-hidden',
  },
  DOM: {
    body: document.querySelector('body'),
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('.header__menu'),
    page: document.querySelector('.page'),
    content: document.querySelector('.content__inner'),
    contentTitle: document.querySelector('.content__title'),
  },
};

export default SELECTORS;
