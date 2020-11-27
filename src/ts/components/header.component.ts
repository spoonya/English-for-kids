import SELECTORS from '../constants/selectors.const';

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

    SELECTORS.DOM.menu?.animate(chooseAnimeDirection(), {
      duration: this.animationSetup.duration,
      easing: this.animationSetup.easing,
      iterations: this.animationSetup.iterations,
    });
  };

  private openMenu = (): void => {
    SELECTORS.DOM.menu?.classList.remove(SELECTORS.styles.hiddenPhys);
    this.activateAnime();
    SELECTORS.DOM.openMenuBtn?.classList.add(SELECTORS.styles.hiddenVisual);
    SELECTORS.DOM.page?.classList.add(SELECTORS.styles.blackout);
    SELECTORS.DOM.body?.classList.add(SELECTORS.styles.scrollOff);
  };

  private closeMenu = (): void => {
    this.activateAnime(true);
    SELECTORS.DOM.openMenuBtn?.classList.remove(SELECTORS.styles.hiddenVisual);
    SELECTORS.DOM.page?.classList.remove(SELECTORS.styles.blackout);
    SELECTORS.DOM.body?.classList.remove(SELECTORS.styles.scrollOff);

    setTimeout(() => {
      SELECTORS.DOM.menu?.classList.add(SELECTORS.styles.hiddenPhys);
    }, this.animationSetup.duration - 10);
  };

  public initHeader = (): void => {
    SELECTORS.DOM.openMenuBtn?.addEventListener('click', this.openMenu);
    SELECTORS.DOM.closeMenuBtn?.addEventListener('click', this.closeMenu);
    document.addEventListener('click', (e) => {
      const { target } = e;

      if (SELECTORS.DOM.page?.classList.contains(SELECTORS.styles.blackout) && target === SELECTORS.DOM.page) {
        this.closeMenu();
      }
    });
  };
}
