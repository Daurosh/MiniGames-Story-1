interface GameCard {
  image: string;
  title: string;
  rating: string;
  favorites: string;
  size: 'sm' | 'md' | 'lg';
}

const games: GameCard[] = [
  {
    image: 'shelve-the-potions-card.jpg',
    title: 'Shelve the Potions',
    rating: '',
    favorites: '',
    size: 'sm',
  },
  {
    image: 'islanders-new-shores-card.jpg',
    title: 'ISLANDERS: New Shores',
    rating: '4.9',
    favorites: '54.2K',
    size: 'md',
  },
  {
    image: 'vacation-cafe-simulator-card.jpg',
    title: 'Vacation Cafe Simulator',
    rating: '4.8',
    favorites: '28.7K',
    size: 'lg',
  },
  {
    image: 'winter-burrow-card.jpg',
    title: 'Winter Burrow',
    rating: '4.9',
    favorites: '32.4K',
    size: 'md',
  },
  {
    image: 'tailside-cozy-cafe-sim-card.jpg',
    title: 'Tailside Cozy Cafe',
    rating: '',
    favorites: '',
    size: 'sm',
  },
];

function renderCard(game: GameCard): string {
  const showInfo = game.rating !== '';

  return `
    <li class="game-card game-card--${game.size}">
      <div class="game-card__image" style="background-image: url('/src/assets/images/games/${game.image}')">
        ${
          showInfo
            ? `
          <div class="game-card__overlay">
            <p class="game-card__title">${game.title}</p>
            <div class="game-card__meta">
              <span class="game-card__stat">
                <span class="game-card__icon game-card__icon--star" aria-hidden="true"></span>
                ${game.rating}
              </span>
              <span class="game-card__stat">
                <span class="game-card__icon game-card__icon--heart" aria-hidden="true"></span>
                ${game.favorites}
              </span>
            </div>
          </div>
        `
            : ''
        }
      </div>
    </li>
  `;
}

export function renderCarousel(): string {
  return `
    <section class="carousel">
      <div class="carousel__header">
        <div class="carousel__heading">
          <span class="carousel__accent" aria-hidden="true"></span>
          <h2 class="carousel__title">New Games</h2>
        </div>

        <div class="carousel__controls">
          <button type="button" class="carousel__arrow carousel__arrow--prev" aria-label="Previous games">
            &#8592;
          </button>
          <button type="button" class="carousel__arrow carousel__arrow--next" aria-label="Next games">
            &#8594;
          </button>
        </div>
      </div>

      <ul class="carousel__track">
        ${games.map(renderCard).join('')}
      </ul>
    </section>
  `;
}
