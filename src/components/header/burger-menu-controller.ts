export function initBurgerMenu(): void {
  const burgerButton = document.querySelector<HTMLButtonElement>('[data-burger-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-burger-menu]');
  const overlay = document.querySelector<HTMLElement>('[data-burger-overlay]');
  const closeButton = document.querySelector<HTMLButtonElement>('[data-burger-close]');

  if (!burgerButton || !menu || !overlay || !closeButton) {
    return;
  }

  const openMenu = (): void => {
    menu.hidden = false;
    overlay.hidden = false;
    menu.setAttribute('aria-hidden', 'false');
    burgerButton.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      menu.classList.add('burger-menu--open');
      overlay.classList.add('burger-overlay--visible');
    });
  };

  const closeMenu = (): void => {
    menu.classList.remove('burger-menu--open');
    overlay.classList.remove('burger-overlay--visible');
    burgerButton.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    const handleTransitionEnd = (): void => {
      menu.hidden = true;
      overlay.hidden = true;
      menu.removeEventListener('transitionend', handleTransitionEnd);
    };
    menu.addEventListener('transitionend', handleTransitionEnd);
  };

  burgerButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape' && menu.classList.contains('burger-menu--open')) {
      closeMenu();
    }
  });

  const authTriggersInsideMenu = menu.querySelectorAll<HTMLElement>('[data-auth-trigger]');
  authTriggersInsideMenu.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      closeMenu();
    });
  });
}
