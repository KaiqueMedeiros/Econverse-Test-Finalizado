import React, { useState } from 'react';
import styles from './Newsletter.module.scss';

const Newsletter: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (acceptTerms) {
      alert('Inscrição realizada!');
    } else {
      alert('Você precisa aceitar os termos e condições!');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Inscreva-se na nossa newsletter</h2>
        <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos <br /> da Econverse</p>
      </div>

      <div className={styles.right}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            <button type="submit" className={styles.button}>INSCREVER</button>
          </div>

          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="terms"
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
              className={styles.checkbox}
            />
            <label htmlFor="terms">Aceito os termos e condições</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
