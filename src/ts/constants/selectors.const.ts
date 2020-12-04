const SELECTORS: any = {
  styles: {
    activeLink: 'header__menu-link--active',
    blackout: 'page--blackout',
    categoryPlayMode: 'content__category-item--active',
    contentInfoBtnActive: 'content__info-btn--active',
    hiddenVisual: 'hidden-visual',
    hiddenPhys: 'hidden-phys',
    rotate: 'content__topic-item--rotated',
    scrollOff: 'scroll-hidden',
    topicPlayMode: 'content__topic-item--active',
    visible: 'visible',
  },
  dom: {
    body: document.querySelector('body'),
    categoriesStr: '.content__category-item',
    cardFrontStr: '.content__topic-item-front',
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    content: document.querySelector('.content__inner'),
    contentInfoBtn: document.querySelector('.content__info-btn'),
    contentTitle: document.querySelector('.content__info-title'),
    openMenuBtn: document.querySelector('[data-menu-open]'),
    linkTxt: '.header__menu-link-txt',
    menu: document.querySelector('.header__menu'),
    menuBtn: document.querySelectorAll('.header__menu-link'),
    page: document.querySelector('.page'),
    rotateBtnStr: '.content__topic-item-btn',
    toggleMode: document.querySelector('.header__toggle-mode'),
    topicItemStr: '.content__topic-item',
  },
  attr: {
    category: 'data-category',
  },
  strings: {
    mainPage: 'main page',
  },
};

export default SELECTORS;
