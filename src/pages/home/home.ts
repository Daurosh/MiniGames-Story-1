import { renderHeader } from '@/components/header/header';
import { renderBurgerMenu } from '@/components/header/burger-menu';
import { initBurgerMenu } from '@/components/header/burger-menu-controller';
import { renderHero } from '@/components/hero/hero';
import { renderCarousel } from '@/components/carousel/carousel';
import { renderLeaderboard } from '@/components/leaderboard/leaderboard';
import { renderDeveloperCta } from '@/components/developer-cta/developer-cta';
import { renderFooter } from '@/components/footer/footer';
import { renderAuthDialog } from '@/components/auth-dialog/auth-dialog';
import { initAuthDialog } from '@/components/auth-dialog/auth-dialog-controller';

export function renderHomePage(root: HTMLElement): void {
  root.innerHTML = `
    ${renderHeader()}
    ${renderBurgerMenu()}
    <main id="main">
      ${renderHero()}
      ${renderCarousel()}
      ${renderLeaderboard()}
      ${renderDeveloperCta()}
    </main>
    ${renderFooter()}
    ${renderAuthDialog()}
  `;

  initBurgerMenu();
  initAuthDialog();
}
