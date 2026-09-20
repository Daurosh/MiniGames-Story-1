import { renderHeader } from '@/components/header/header';
import { renderBurgerMenu } from '@/components/header/burger-menu';
import { initBurgerMenu } from '@/components/header/burger-menu-controller';

export function renderHomePage(root: HTMLElement): void {
  root.innerHTML = `
    ${renderHeader()}
    ${renderBurgerMenu()}
    <main id="main"></main>
    <footer id="footer"></footer>
  `;

  initBurgerMenu();
}
