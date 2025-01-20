import React from 'react';
import styles from './MenuItem.module.scss';

import corrida from '../../assets/images/corrida 1.png';
import saude from '../../assets/images/cuidados-de-saude 1.png';
import ferramentas from '../../assets/images/ferramentas 1.png';
import moda from '../../assets/images/moda 1.png';
import supermercado from '../../assets/images/supermercados 1.png';
import tecnologia from '../../assets/images/image.png';
import bebidas from '../../assets/images/whiskey.png';

const ImageCategoryMenu: React.FC = () => {
  return (
    <section className={styles.categoryMenu}>
      <div className={`${styles.menuItem} ${styles.tecnologia}`}>
        <div className={styles.imageContainer}>
          <img src={tecnologia} alt="Tecnologia" />
        </div>
        <p className={styles.categoryName}><span className={styles.highlight}>Tecnologia</span></p>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.imageContainer}>
          <img src={supermercado} alt="Supermercado" />
        </div>
        <p className={styles.categoryName}>Supermercado</p>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.imageContainer}>
          <img src={bebidas} alt="Bebidas" />
        </div>
        <p className={styles.categoryName}>Bebidas</p>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.imageContainer}>
          <img src={ferramentas} alt="Ferramentas" />
        </div>
        <p className={styles.categoryName}>Ferramentas</p>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.imageContainer}>
          <img src={saude} alt="Saúde" />
        </div>
        <p className={styles.categoryName}>Saúde</p>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.imageContainer}>
          <img src={corrida} alt="Corrida" />
        </div>
        <p className={styles.categoryName}>Corrida</p>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.imageContainer}>
          <img src={moda} alt="Moda" />
        </div>
        <p className={styles.categoryName}>Moda</p>
      </div>
    </section>
  );
};

export default ImageCategoryMenu;
