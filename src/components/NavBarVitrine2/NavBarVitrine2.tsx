import React from 'react';
import styles from './NavBarVitrine2.module.scss';

const NavbarCategorias: React.FC = () => {
  return (
    <div className={styles.container}>
     
      <div className={styles.titleContainer}>
       
        <div className={styles.decorativeLine}></div>
        <h2 className={styles.title}>Produtos relacionados</h2>
       
        <div className={styles.decorativeLine}></div>
      </div>

      
      <div className={styles.navbar}>
        <span className={styles.viewAllText}>Ver todos</span>
      </div>
    </div>
  );
};

export default NavbarCategorias;
