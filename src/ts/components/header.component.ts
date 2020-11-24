import selectors from '../constants/selectors.const';

export default class Header {
  private animationSetup = {
    duration: 250,
    easing: 'ease-in-out',
    iterations: 1,
  };

  private activateAnime = (onClose: boolean = false): void => {
    const chooseAnimeDirection = () => {
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

    selectors.DOM.menu?.animate(chooseAnimeDirection(), {
      duration: this.animationSetup.duration,
      easing: this.animationSetup.easing,
      iterations: this.animationSetup.iterations,
    });
  };

  private openMenu = (): void => {
    selectors.DOM.menu?.classList.remove(selectors.styles.hiddenPhys);
    this.activateAnime();
    selectors.DOM.openMenuBtn?.classList.add(selectors.styles.hiddenVisual);
    selectors.DOM.page?.classList.add(selectors.styles.blackout);
  };

  private closeMenu = (): void => {
    this.activateAnime(true);
    selectors.DOM.openMenuBtn?.classList.remove(selectors.styles.hiddenVisual);
    selectors.DOM.page?.classList.remove(selectors.styles.blackout);

    setTimeout(() => {
      selectors.DOM.menu?.classList.add(selectors.styles.hiddenPhys);
    }, this.animationSetup.duration - 10);
  };

  public initHeader = (): void => {
    selectors.DOM.openMenuBtn?.addEventListener('click', this.openMenu);
    selectors.DOM.closeMenuBtn?.addEventListener('click', this.closeMenu);
    // Blackout
    document.addEventListener('click', (e) => {
      const { target } = e;

      if (selectors.DOM.page?.classList.contains('page--blackout') && target === selectors.DOM.page) {
        this.closeMenu();
      }
    });
  };
}
