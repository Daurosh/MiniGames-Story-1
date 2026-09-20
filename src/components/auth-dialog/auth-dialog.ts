const ICON_MAIL = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>`;

const ICON_LOCK = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;

const ICON_USER = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;

function renderInput(
  id: string,
  label: string,
  type: string,
  placeholder: string,
  icon: string
): string {
  return `
    <div class="auth-field">
      <label class="auth-field__label" for="${id}">${label}</label>
      <div class="auth-field__input-wrapper">
        <span class="auth-field__icon" aria-hidden="true">${icon}</span>
        <input
          class="auth-field__input"
          type="${type}"
          id="${id}"
          name="${id}"
          placeholder="${placeholder}"
          required
        />
      </div>
    </div>
  `;
}

function renderDivider(): string {
  return `
    <div class="auth-divider">
      <span class="auth-divider__line"></span>
      <span class="auth-divider__text">or</span>
      <span class="auth-divider__line"></span>
    </div>
  `;
}

function renderGoogleButton(text: string): string {
  return `
    <button type="button" class="auth-google-btn">
      <span class="auth-google-btn__icon" aria-hidden="true">G</span>
      ${text}
    </button>
  `;
}

function renderLoginForm(): string {
  return `
    <form class="auth-form" data-auth-form="login" novalidate>
      <div class="auth-header">
        <h2 class="auth-header__title">Welcome Back!</h2>
        <p class="auth-header__subtitle">Sign in to resume your games and progress.</p>
      </div>

      <div class="auth-fields">
        ${renderInput('login-email', 'Email Address', 'email', 'e.g. alex@minigames.com', ICON_MAIL)}
        ${renderInput('login-password', 'Password', 'password', '••••••••', ICON_LOCK)}
      </div>

      <div class="auth-links">
        <a href="#" class="auth-links__forgot">Forgot Password?</a>
      </div>

      <div class="auth-actions">
        <button type="submit" class="auth-cta-btn">Login</button>
        ${renderDivider()}
        ${renderGoogleButton('Continue with Google')}
      </div>

      <p class="auth-footer">
        Don't have an account?
        <button type="button" class="auth-footer__switch" data-auth-switch="register">Register</button>
      </p>
    </form>
  `;
}

function renderRegisterForm(): string {
  return `
    <form class="auth-form" data-auth-form="register" hidden novalidate>
      <div class="auth-header">
        <h2 class="auth-header__title">Create Account</h2>
        <p class="auth-header__subtitle">Join MiniGames to track your score &amp; streak.</p>
      </div>

      <div class="auth-fields">
        ${renderInput('register-username', 'Username', 'text', 'e.g. CozyGamer_99', ICON_USER)}
        ${renderInput('register-email', 'Email Address', 'email', 'your.email@domain.com', ICON_MAIL)}
        ${renderInput('register-password', 'Password', 'password', 'Min. 8 characters', ICON_LOCK)}
        ${renderInput('register-confirm-password', 'Confirm Password', 'password', 'Repeat your password', ICON_LOCK)}
      </div>

      <div class="auth-actions">
        <button type="submit" class="auth-cta-btn">Create Account</button>
        ${renderDivider()}
        ${renderGoogleButton('Sign up with Google')}
      </div>

      <p class="auth-footer">
        Already have an account?
        <button type="button" class="auth-footer__switch" data-auth-switch="login">Login</button>
      </p>
    </form>
  `;
}

export function renderAuthDialog(): string {
  return `
    <div class="auth-overlay" data-auth-overlay hidden></div>
    <div
      class="auth-dialog"
      data-auth-dialog
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-dialog-title"
      hidden
    >
      <button type="button" class="auth-dialog__close" data-auth-close aria-label="Close dialog">
        &times;
      </button>

      <div class="auth-tabs" role="tablist">
        <button
          type="button"
          class="auth-tabs__tab auth-tabs__tab--active"
          data-auth-tab="login"
          role="tab"
          aria-selected="true"
        >
          Login
        </button>
        <button
          type="button"
          class="auth-tabs__tab"
          data-auth-tab="register"
          role="tab"
          aria-selected="false"
        >
          Register
        </button>
      </div>

      <h1 id="auth-dialog-title" class="sr-only">Account access</h1>

      ${renderLoginForm()}
      ${renderRegisterForm()}
    </div>
  `;
}
