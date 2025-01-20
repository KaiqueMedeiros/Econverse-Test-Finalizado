import React from 'react';
import styles from './ImageBanner.module.scss';

const BannersApoio: React.FC = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.content}>
                <h1 className={styles.title}>Venha conhecer nossas <br />promoções</h1>
                <p className={styles.subtitle}>
                    <span className={styles.highlight}>50% off</span> nos produtos
                </p>
                <button className={styles.button}>Ver produto</button>
            </div>
        </section>
    );
};

export default BannersApoio;
