type AuthTab = 'login' | 'register';

export function initAuthDialog(): void {
  const overlay = document.querySelector<HTMLElement>('[data-auth-overlay]');
  const dialog = document.querySelector<HTMLElement>('[data-auth-dialog]');
  const closeButton = document.querySelector<HTMLButtonElement>('[data-auth-close]');
  const triggers = document.querySelectorAll<HTMLElement>('[data-auth-trigger]');
  const tabs = document.querySelectorAll<HTMLButtonElement>('[data-auth-tab]');
  const switchButtons = document.querySelectorAll<HTMLButtonElement>('[data-auth-switch]');
  const forms = document.querySelectorAll<HTMLFormElement>('[data-auth-form]');

  if (!overlay || !dialog || !closeButton) {
    return;
  }

  const setActiveTab = (tab: AuthTab): void => {
    tabs.forEach((tabButton) => {
      const isActive = tabButton.dataset.authTab === tab;
      tabButton.classList.toggle('auth-tabs__tab--active', isActive);
      tabButton.setAttribute('aria-selected', String(isActive));
    });

    forms.forEach((form) => {
      form.hidden = form.dataset.authForm !== tab;
    });
  };

  const openDialog = (tab: AuthTab = 'login'): void => {
    setActiveTab(tab);
    dialog.hidden = false;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      dialog.classList.add('auth-dialog--open');
      overlay.classList.add('auth-overlay--visible');
    });

    const firstInput = dialog.querySelector<HTMLInputElement>(`[data-auth-form="${tab}"] input`);
    firstInput?.focus();
  };

  const closeDialog = (): void => {
    dialog.classList.remove('auth-dialog--open');
    overlay.classList.remove('auth-overlay--visible');
    document.body.style.overflow = '';

    const handleTransitionEnd = (): void => {
      dialog.hidden = true;
      overlay.hidden = true;
      dialog.removeEventListener('transitionend', handleTransitionEnd);
    };
    dialog.addEventListener('transitionend', handleTransitionEnd);
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      const tab = (trigger.dataset.authTrigger as AuthTab) ?? 'login';
      openDialog(tab);
    });
  });

  closeButton.addEventListener('click', closeDialog);
  overlay.addEventListener('click', closeDialog);

  tabs.forEach((tabButton) => {
    tabButton.addEventListener('click', () => {
      setActiveTab(tabButton.dataset.authTab as AuthTab);
    });
  });

  switchButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setActiveTab(button.dataset.authSwitch as AuthTab);
    });
  });

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
    });
  });

  document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape' && dialog.classList.contains('auth-dialog--open')) {
      closeDialog();
    }
  });
}
