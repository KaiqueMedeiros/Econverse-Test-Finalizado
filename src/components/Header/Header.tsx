import React, { useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/Logo.png';
import CreditCard from '../../assets/images/CreditCard.png';
import ShieldCheck from '../../assets/images/ShieldCheck.png';
import Truck from '../../assets/images/Truck.png';
import lupa from '../../assets/images/MagnifyingGlass.png';
import userCircle from '../../assets/images/UserCircle.png';
import shoppingCart from '../../assets/images/ShoppingCart.png';
import heart from '../../assets/images/Heart.png';
import vector from '../../assets/images/Vector.png';
import crown from '../../assets/images/CrownSimple.png';

const Header: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>(''); 

  const handleNavClick = (item: string) => {
    setActiveNav(item); 
  };

  return (
    <header className={styles.header}>
      <div className={styles.benefitsBar}>
        <div className={styles.benefitItem}>
          <img className={styles.icon} src={ShieldCheck} alt="Ícone Compra Segura" />
          <p>Compra <span className={styles.highlight}>%100 segura</span></p>
        </div>
        <div className={styles.benefitItem}>
          <img className={styles.icon} src={Truck} alt="Ícone Frete Grátis" />
          <p><span className={styles.highlight}>Frete grátis</span> acima de R$200</p>
        </div>
        <div className={styles.benefitItem}>
          <img className={styles.icon} src={CreditCard} alt="Ícone Parcele" />
          <p><span className={styles.highlight}>Parcele</span> suas compras</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>

        <div className={styles.searchBar}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="O que você está buscando?"
          />
          <img
            className={styles.searchIcon}
            src={lupa}
            alt="Ícone de busca"
          />
        </div>

        <div className={styles.iconsContainer}>
          <img className={styles.icon} src={vector} alt="Ícone 1" />
          <img className={styles.icon} src={heart} alt="Ícone 2" />
          <img className={styles.icon} src={userCircle} alt="Ícone 3" />
          <img className={styles.icon} src={shoppingCart} alt="Ícone 4" />
        </div>
      </div>

      <div className={styles.linha}></div>

      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          {['TODAS CATEGORIAS', 'SUPERMERCADO', 'LIVROS', 'MODA', 'LANÇAMENTOS', 'OFERTAS DO DIA'].map((item, index) => (
            <li
              key={index}
              className={`${styles.navItem} ${activeNav === item ? styles.highlight : ''}`}
              onClick={() => handleNavClick(item)} 
            >
              {item}
            </li>
          ))}
          <li className={`${styles.navItem} ${activeNav === 'ASSINATURA' ? styles.highlight : ''}`} onClick={() => handleNavClick('ASSINATURA')}>
            <img src={crown} alt="Ícone Assinatura" className={styles.icon} />
            ASSINATURA
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
