import React from 'react';
import styles from './BannersApoio.module.scss';

const BannersApoio: React.FC = () => {
    return (
        <section className={styles.bannersContainer}>
            <div className={styles.banner}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Parceiros</h1>
                    <p className={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur
                    </p>
                    <button className={styles.button}>Confira</button>
                </div>
            </div>
            <div className={styles.banner}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Parceiros</h1>
                    <p className={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur
                    </p>
                    <button className={styles.button}>Confira</button>
                </div>
            </div>
        </section>
    );
};

export default BannersApoio;
