import React from 'react';

function Login() {
  return (
    <main>
      <h1>Login</h1>
      <label htmlFor="email-input">
        <input
          type="email"
          data-testid="email-input"
          placeholder="email"
        />

      </label>
      <label htmlFor="password-input">
        <input
          type="password"
          data-testid="password-input"
          placeholder="password"
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
      >
        Entrar
      </button>
    </main>
  );
}

export default Login;
