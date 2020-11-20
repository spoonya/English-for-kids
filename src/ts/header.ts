export default class Header {
  private openMenuBtn: HTMLElement | any = document.querySelector('[data-menu-open]');

  private closeMenuBtn: HTMLElement | any = document.querySelector('[data-menu-close]');

  private menu: HTMLElement | any = document.querySelector('.header__menu');

  private animationSetup = {
    duration: 250,
    easing: 'ease-in-out',
    iterations: 1,
  };

  private activateAnime = (onClose: boolean = false): void => {
    const chooseAnimeDirection = (): object[] => {
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

    this.menu?.animate(chooseAnimeDirection(), {
      duration: this.animationSetup.duration,
      easing: this.animationSetup.easing,
      iterations: this.animationSetup.iterations,
    });
  };

  private openMenu = (): void => {
    this.menu.style.display = 'flex';
    this.activateAnime();
    this.openMenuBtn.style.visibility = 'hidden';
  };

  private closeMenu = (): void => {
    this.activateAnime(true);
    this.openMenuBtn.style.visibility = 'visible';

    setTimeout(() => {
      this.menu.style.display = 'none';
    }, this.animationSetup.duration);
  };

  public initHeader(): void {
    this.openMenuBtn?.addEventListener('click', this.openMenu);
    this.closeMenuBtn?.addEventListener('click', this.closeMenu);
  }
}
