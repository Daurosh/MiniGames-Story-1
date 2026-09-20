export function renderDeveloperCta(): string {
  return `
    <section class="developer-cta">
      <div class="developer-cta__illustration" aria-hidden="true"></div>

      <div class="developer-cta__card">
        <h2 class="developer-cta__title">Are You a Game Developer?</h2>
        <p class="developer-cta__text">
          Want to see your game on MiniGames? We're always looking for fun,
          engaging mini games to add to our platform. Submit your game and
          reach thousands of players!
        </p>
        <a href="#" class="developer-cta__button">
          <span class="developer-cta__icon" aria-hidden="true">&#8593;</span>
          Submit Form
        </a>
        <p class="developer-cta__contact">
          or contact us at developers@minigames.com
        </p>
      </div>
    </section>
  `;
}
