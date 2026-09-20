import { renderHeader } from '@/components/header/header';
import { renderBurgerMenu } from '@/components/header/burger-menu';
import { initBurgerMenu } from '@/components/header/burger-menu-controller';
import { renderHero } from '@/components/hero/hero';
import { renderCarousel } from '@/components/carousel/carousel';
import { renderLeaderboard } from '@/components/leaderboard/leaderboard';

export function renderHomePage(root: HTMLElement): void {
  root.innerHTML = `
    ${renderHeader()}
    ${renderBurgerMenu()}
    <main id="main">
      ${renderHero()}
      ${renderCarousel()}
      ${renderLeaderboard()}
    </main>
    <footer id="footer"></footer>
  `;

  initBurgerMenu();
}
