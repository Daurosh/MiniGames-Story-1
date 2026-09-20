export function renderHeader(): string {
  return `
    <header class="header">
      <a href="/" class="header__brand" aria-label="MiniGames home">
        <img src="/src/assets/icons/logo.png" alt="" class="header__logo" width="32" height="32" />
        <span class="header__brand-name">MiniGames</span>
      </a>

      <nav class="header__nav" aria-label="Main navigation">
        <ul class="header__nav-links">
          <li><a href="#" class="header__nav-link header__nav-link--active">Home</a></li>
          <li><a href="#" class="header__nav-link">Library</a></li>
          <li><a href="#" class="header__nav-link">Tournaments</a></li>
          <li><a href="#" class="header__nav-link">Community</a></li>
        </ul>
      </nav>

      <div class="header__right">
        <div class="header__actions">
          <a href="#" class="header__btn header__btn--outline">Log In</a>
          <a href="#" class="header__btn header__btn--filled">Sign Up</a>
        </div>

        <button
          type="button"
          class="header__burger"
          aria-label="Open menu"
          aria-expanded="false"
        >
          <span class="header__burger-line"></span>
          <span class="header__burger-line"></span>
          <span class="header__burger-line"></span>
        </button>
      </div>
    </header>
  `;
}
