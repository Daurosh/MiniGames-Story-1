const GITHUB_USERNAME = 'Daurosh';
const CURRENT_YEAR = new Date().getFullYear();

export function renderFooter(): string {
  return `
    <footer class="footer">
      <div class="footer__top">
        <div class="footer__brand">
          <a href="/" class="footer__logo-link" aria-label="MiniGames home">
            <img src="/src/assets/icons/logo.png" alt="" class="footer__logo" width="32" height="32" />
            <span class="footer__logo-text">MiniGames</span>
          </a>
          <p class="footer__tagline">
            Take a short break and have fun. Hundreds of curated casual
            mini-games right in your web browser. No download required.
          </p>
        </div>

        <div class="footer__links">
          <div class="footer__column">
            <h3 class="footer__heading">Explore</h3>
            <ul class="footer__list">
              <li><a href="#" class="footer__link">Home</a></li>
              <li><a href="#" class="footer__link">Library</a></li>
              <li><a href="#" class="footer__link">Categories</a></li>
              <li><a href="#" class="footer__link">Tournaments</a></li>
            </ul>
          </div>

          <div class="footer__column">
            <h3 class="footer__heading">Company</h3>
            <ul class="footer__list">
              <li><a href="#" class="footer__link">About Us</a></li>
              <li><a href="#" class="footer__link">Contact</a></li>
              <li><a href="#" class="footer__link">Privacy Policy</a></li>
              <li><a href="#" class="footer__link">Terms of Service</a></li>
            </ul>
          </div>

          <div class="footer__column footer__column--community">
            <h3 class="footer__heading">Community</h3>
            <ul class="footer__social">
              <li>
                <a href="#" class="footer__social-icon" aria-label="Share">&#8599;</a>
              </li>
              <li>
                <a href="#" class="footer__social-icon" aria-label="Chat">&#128172;</a>
              </li>
              <li>
                <a href="#" class="footer__social-icon" aria-label="RSS feed">&#128225;</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <hr class="footer__divider" />
        <div class="footer__bottom-row">
          <p class="footer__copyright">
            &copy; ${CURRENT_YEAR} MiniGames. All rights reserved.
          </p>

          <div class="footer__credits">
            <a
              href="https://rs.school/courses/short-track"
              target="_blank"
              rel="noopener"
              class="footer__credit-link"
            >
              <span class="footer__rs-logo">RS</span>
              RS School
            </a>

            <a
              href="https://github.com/${GITHUB_USERNAME}"
              target="_blank"
              rel="noopener"
              class="footer__credit-link"
            >
              <span class="footer__github-icon" aria-hidden="true">&lt;/&gt;</span>
              @${GITHUB_USERNAME}
            </a>

            <span class="footer__love">Designed with love</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}
