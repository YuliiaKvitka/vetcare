'use client';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

const Form = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращает перезагрузку страницы
    if (onSubmit) {
      onSubmit(email); // Передает значение email через callback
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputContainer}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={handleInputChange}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>Subscribe</button>
      </div>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;

