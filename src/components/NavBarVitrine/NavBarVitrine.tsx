import React from 'react';
import styles from './NavBarVitrine.module.scss';

const NavbarCategorias: React.FC = () => {
  return (
    <div className={styles.container}>

      <div className={styles.titleContainer}>

        <div className={styles.decorativeLine}></div>
        <h2 className={styles.title}>Produtos relacionados</h2>

        <div className={styles.decorativeLine}></div>
      </div>


      <div className={styles.navbar}>
        <button className={styles.category}><span className={styles.highlight}>CELULAR</span></button>
        <button className={styles.category}>ACESSÓRIOS</button>
        <button className={styles.category}>TABLETS</button>
        <button className={styles.category}>NOTEBOOKS</button>
        <button className={styles.category}>TVS</button>
        <button className={styles.category}>VER TODOS</button>
      </div>
    </div>
  );
};

export default NavbarCategorias;
