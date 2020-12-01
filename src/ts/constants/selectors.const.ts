const SELECTORS: any = {
  styles: {
    blackout: 'page--blackout',
    hiddenVisual: 'hidden-visual',
    hiddenPhys: 'hidden-phys',
    scrollOff: 'scroll-hidden',
    visible: 'visible',
    activeLink: 'header__menu-link--active',
  },
  DOM: {
    body: document.querySelector('body'),
    categoriesStr: '.content__category-item',
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    content: document.querySelector('.content__inner'),
    contentTitle: document.querySelector('.content__title'),
    openMenuBtn: document.querySelector('[data-menu-open]'),
    menu: document.querySelector('.header__menu'),
    menuBtn: document.querySelectorAll('.header__menu-link'),
    page: document.querySelector('.page'),
  },
};

export default SELECTORS;
