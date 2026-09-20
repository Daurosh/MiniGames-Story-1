import { renderHeader } from '@/components/header/header';

export function renderHomePage(root: HTMLElement): void {
  root.innerHTML = `
    ${renderHeader()}
    <main id="main"></main>
    <footer id="footer"></footer>
  `;
}
