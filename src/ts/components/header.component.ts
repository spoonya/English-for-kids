import SELECTORS from '../constants/selectors.const';
import CARDS_DATA from '../data/cards.data';
import CardComponent from './card.component';
import clearContent from '../helpers/content-clear';
import chooseActiveLink from '../helpers/active-category';
import STATE from '../constants/state.const';
import { categories } from '../index';

const cards: CardComponent = new CardComponent();

export default class HeaderComponent {
  private animationSetup: { duration: number; easing: string; iterations: number } = {
    duration: 250,
    easing: 'ease-in-out',
    iterations: 1,
  };

  private activateAnime = (onClose: boolean = false): void => {
    const chooseAnimeDirection = (): any => {
      if (!onClose) {
        return [
          {
            transform: 'translateX(-100%)',
          },
          {
            transform: 'translateX(0%)',
          },
        ];
      }
      return [
        {
          transform: 'translateX(0%)',
        },
        {
          transform: 'translateX(-100%)',
        },
      ];
    };

    SELECTORS.dom.menu?.animate(chooseAnimeDirection(), {
      duration: this.animationSetup.duration,
      easing: this.animationSetup.easing,
      iterations: this.animationSetup.iterations,
    });
  };

  private openMenu = (): void => {
    SELECTORS.dom.menu?.classList.remove(SELECTORS.styles.hiddenPhys);
    this.activateAnime();
    SELECTORS.dom.openMenuBtn?.classList.add(SELECTORS.styles.hiddenVisual);
    SELECTORS.dom.page?.classList.add(SELECTORS.styles.blackout);
    SELECTORS.dom.body?.classList.add(SELECTORS.styles.scrollOff);
  };

  private closeMenu = (): void => {
    this.activateAnime(true);
    SELECTORS.dom.openMenuBtn?.classList.remove(SELECTORS.styles.hiddenVisual);
    SELECTORS.dom.page?.classList.remove(SELECTORS.styles.blackout);
    SELECTORS.dom.body?.classList.remove(SELECTORS.styles.scrollOff);

    setTimeout(() => {
      SELECTORS.dom.menu?.classList.add(SELECTORS.styles.hiddenPhys);
    }, this.animationSetup.duration - 10);
  };

  public setStateStyles = (): void => {
    SELECTORS.dom.content.querySelectorAll(SELECTORS.dom.categoriesStr).forEach((el: HTMLElement): void => {
      if (STATE.playMode) {
        el.classList.add(SELECTORS.styles.categoryPlayMode);
      } else {
        el.classList.remove(SELECTORS.styles.categoryPlayMode);
      }
    });

    SELECTORS.dom.content.querySelectorAll(SELECTORS.dom.topicItemStr).forEach((el: HTMLElement): void => {
      if (STATE.playMode) {
        el.classList.add(SELECTORS.styles.topicPlayMode);
      } else {
        el.classList.remove(SELECTORS.styles.topicPlayMode);
      }
    });

    if (STATE.playMode && SELECTORS.dom.contentTitle.textContent.toLowerCase() !== SELECTORS.strings.mainPage) {
      SELECTORS.dom.contentInfoBtn.classList.add(SELECTORS.styles.contentInfoBtnActive);
    } else {
      SELECTORS.dom.contentInfoBtn.classList.remove(SELECTORS.styles.contentInfoBtnActive);
    }
  };

  private setState = (): void => {
    STATE.playMode = !STATE.playMode;
    this.setStateStyles();
  };

  public initHeader = (): void => {
    SELECTORS.dom.openMenuBtn?.addEventListener('click', this.openMenu);
    SELECTORS.dom.closeMenuBtn?.addEventListener('click', this.closeMenu);

    SELECTORS.dom.menuBtn.forEach((el: HTMLElement): any => {
      el.addEventListener('click', (): void => {
        const category: any = el.hasAttribute(SELECTORS.attr.category) ? el.getAttribute(SELECTORS.attr.category) : '';
        clearContent();
        if (el.getAttribute(SELECTORS.attr.category) === SELECTORS.strings.mainPage) {
          categories.initCategories();
          SELECTORS.dom.contentTitle.textContent = SELECTORS.strings.mainPage;
        } else {
          SELECTORS.dom.contentTitle.textContent = Object.keys(CARDS_DATA).find((key) => key === category);
          cards.initCards(CARDS_DATA[category], category);
        }
        chooseActiveLink();
        this.setStateStyles();
        this.closeMenu();
      });
    });

    document.addEventListener('click', (e): void => {
      const { target } = e;

      if (SELECTORS.dom.page?.classList.contains(SELECTORS.styles.blackout) && target === SELECTORS.dom.page) {
        this.closeMenu();
      }
    });

    SELECTORS.dom.toggleMode.addEventListener('click', this.setState);
  };
}
