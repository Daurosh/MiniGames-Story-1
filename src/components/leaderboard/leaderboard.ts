interface Player {
  rank: number;
  initials: string;
  avatarColor: string;
  name: string;
  games: number;
  score: string;
  streak: string;
  favoriteGame: string;
}

const players: Player[] = [
  {
    rank: 1,
    initials: 'AP',
    avatarColor: 'var(--color-accent)',
    name: 'Alex_Pro99',
    games: 142,
    score: '94,250',
    streak: '🔥 12 days',
    favoriteGame: 'Heartopia',
  },
  {
    rank: 2,
    initials: 'CG',
    avatarColor: '#a3e2c9',
    name: 'CozyGamer_x',
    games: 118,
    score: '81,400',
    streak: '🔥 8 days',
    favoriteGame: 'Cat Mail Co.',
  },
  {
    rank: 3,
    initials: 'MM',
    avatarColor: '#bce3ff',
    name: 'MatchMaster',
    games: 98,
    score: '72,110',
    streak: '🔥 5 days',
    favoriteGame: 'Tiny Glade',
  },
  {
    rank: 4,
    initials: 'BP',
    avatarColor: '#ffc6ff',
    name: 'BubblePop',
    games: 87,
    score: '65,900',
    streak: '🔥 3 days',
    favoriteGame: 'Whisper of the House',
  },
  {
    rank: 5,
    initials: 'SG',
    avatarColor: '#e8dff5',
    name: 'SudokuGod',
    games: 74,
    score: '59,320',
    streak: '🔥 2 days',
    favoriteGame: 'Cat Chess',
  },
];

function renderRow(player: Player): string {
  return `
    <li class="leaderboard__row" style="--row-index: ${player.rank}">
      <span class="leaderboard__cell leaderboard__cell--rank ${player.rank === 1 ? 'leaderboard__cell--rank-first' : ''}">
        #${player.rank}
      </span>

      <span class="leaderboard__cell leaderboard__cell--player">
        <span class="leaderboard__avatar" style="background: ${player.avatarColor}">
          ${player.initials}
        </span>
        <span class="leaderboard__name">${player.name}</span>
      </span>

      <span class="leaderboard__cell leaderboard__cell--games">${player.games}</span>

      <span class="leaderboard__cell leaderboard__cell--score">${player.score}</span>

      <span class="leaderboard__cell leaderboard__cell--streak">${player.streak}</span>

      <span class="leaderboard__cell leaderboard__cell--favorite">
        <span class="leaderboard__badge">${player.favoriteGame}</span>
      </span>
    </li>
  `;
}

export function renderLeaderboard(): string {
  return `
    <section class="leaderboard">
      <div class="leaderboard__header">
        <span class="leaderboard__accent" aria-hidden="true"></span>
        <h2 class="leaderboard__title">Top Players This Week</h2>
      </div>

      <div class="leaderboard__table">
        <div class="leaderboard__table-header">
          <span class="leaderboard__cell leaderboard__cell--rank">Rank</span>
          <span class="leaderboard__cell leaderboard__cell--player">Player</span>
          <span class="leaderboard__cell leaderboard__cell--games">Games</span>
          <span class="leaderboard__cell leaderboard__cell--score">Score</span>
          <span class="leaderboard__cell leaderboard__cell--streak">Streak</span>
          <span class="leaderboard__cell leaderboard__cell--favorite">Favorite Game</span>
        </div>

        <ul class="leaderboard__rows">
          ${players.map(renderRow).join('')}
        </ul>
      </div>
    </section>
  `;
}
