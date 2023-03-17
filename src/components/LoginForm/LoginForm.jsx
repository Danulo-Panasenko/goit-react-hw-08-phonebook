import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { initialState } from './initialState';
import { fields } from './fields';

import styles from './LoginForm.module.css';

export const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
    },
    [setState]
  );

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          value={email}
          onChange={handleChange}
          {...fields.email}
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          className={styles.input}
          value={password}
          onChange={handleChange}
          {...fields.password}
        />
      </label>
      <button className={styles.button} type="submit">
        Log in
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
