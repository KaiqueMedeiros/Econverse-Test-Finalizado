import React from 'react';
import styles from './NaveguePorMarcas.module.scss';
import logo from '../../assets/images/Logo.png'

const NaveguePorMarcas: React.FC = () => {
  return (
    <section className={styles.naveguePorMarcasContainer}>
      <h2 className={styles.title}>Navegue por marcas</h2>
      <div className={styles.marcasContainer}>
        <div className={styles.marca}>
        <img className={styles.logo} src={logo }alt="Logo Econverse" />
        </div>
        <div className={styles.marca}>
          <img className={styles.logo} src={logo }alt="Logo Econverse" />
        </div>
        <div className={styles.marca}>
        <img className={styles.logo} src={logo }alt="Logo Econverse" />
        </div>
        <div className={styles.marca}>
        <img className={styles.logo} src={logo }alt="Logo Econverse" />
        </div>
        <div className={styles.marca}>
        <img className={styles.logo} src={logo }alt="Logo Econverse" />
        </div>
      </div>
    </section>
  );
};

export default NaveguePorMarcas;
