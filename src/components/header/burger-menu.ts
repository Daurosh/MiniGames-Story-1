export function renderBurgerMenu(): string {
  return `
    <div class="burger-overlay" data-burger-overlay hidden></div>
    <aside class="burger-menu" data-burger-menu hidden aria-hidden="true">
      <div class="burger-menu__top">
        <a href="/" class="burger-menu__brand" aria-label="MiniGames home">
          <img src="/src/assets/icons/logo.png" alt="" class="burger-menu__logo" width="32" height="32" />
          <span class="burger-menu__brand-name">MiniGames</span>
        </a>

        <button
          type="button"
          class="burger-menu__close"
          data-burger-close
          aria-label="Close menu"
        >
          &times;
        </button>
      </div>

      <nav class="burger-menu__nav" aria-label="Mobile navigation">
        <ul class="burger-menu__links">
          <li><a href="#" class="burger-menu__link burger-menu__link--active">Home</a></li>
          <li><a href="#" class="burger-menu__link">Library</a></li>
          <li><a href="#" class="burger-menu__link">Tournaments</a></li>
          <li><a href="#" class="burger-menu__link">Community</a></li>
        </ul>
      </nav>

      <div class="burger-menu__actions">
        <a href="#" class="burger-menu__btn burger-menu__btn--outline" data-auth-trigger="login">Log In</a>
        <a href="#" class="burger-menu__btn burger-menu__btn--filled" data-auth-trigger="register">Sign Up</a>
      </div>
    </aside>
  `;
}
