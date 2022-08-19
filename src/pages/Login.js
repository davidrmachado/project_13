import React, { useState, useEffect } from 'react';
// import AppContext from '../context/AppContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  const buttonEnable = () => {
    const minPasswordLength = 6;
    const validEmail = (/\S+@\S+\.\S+/i);
    if (
      password.length > minPasswordLength
      && validEmail.test(email)
      && email.includes('.com')
    ) {
      setButtonIsDisabled(false);
    } else {
      setButtonIsDisabled(true);
    }
  };

  useEffect(() => {
    buttonEnable();
  }, [email, password]);

  const handleChange = ({ target }) => {
    if (target.name === 'email') {
      setEmail(target.value);
    }
    if (target.name === 'password') {
      setPassword(target.value);
    }
  };

  return (
    <main>
      <h1>Login</h1>
      <label htmlFor="email">
        <input
          type="email"
          name="email"
          data-testid="email-input"
          placeholder="email"
          onChange={ handleChange }
        />

      </label>
      <label htmlFor="password">
        <input
          name="password"
          type="password"
          data-testid="password-input"
          placeholder="password"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ buttonIsDisabled }
      >
        Entrar
      </button>
    </main>
  );
}

export default Login;
