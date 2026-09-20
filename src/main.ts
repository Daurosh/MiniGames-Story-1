import './styles/main.scss';
import { renderHomePage } from '@/pages/home/home';

const app = document.getElementById('app');

if (app) {
  renderHomePage(app);
}
