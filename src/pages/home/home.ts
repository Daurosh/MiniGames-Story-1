import { renderHeader } from '@/components/header/header';
import { renderBurgerMenu } from '@/components/header/burger-menu';
import { initBurgerMenu } from '@/components/header/burger-menu-controller';
import { renderHero } from '@/components/hero/hero';

export function renderHomePage(root: HTMLElement): void {
  root.innerHTML = `
    ${renderHeader()}
    ${renderBurgerMenu()}
    <main id="main">
      ${renderHero()}
    </main>
    <footer id="footer"></footer>
  `;

  initBurgerMenu();
}
