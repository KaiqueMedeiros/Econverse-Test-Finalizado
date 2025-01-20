import React from "react";
import styles from "./Footer.module.scss";
import logo from '../../assets/images/Logo.png';
import instagram from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook.png';
import linkedin from '../../assets/images/linkedin.png';

const Footer: React.FC = () => {
  return (
    <div>
      <footer className={styles.container}>
       
        <div className={styles.left}>
          <img
            src={logo}
            alt="Logo Econverse"
            className={styles.logo}
          />
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
          </p>
          <div className={styles.socialIcons}>
            <img src={instagram} alt="Instagram" />
            <img src={facebook} alt="Facebook" />
            <img src={linkedin} alt="LinkedIn" />
          </div>
        </div>

      
        <div className={styles.divider}></div>

      
        <div className={styles.right}>
         
          <div className={styles.column}>
            <h4>Institucional</h4>
            <ul>
              <li>Sobre nós</li>
              <li>Movimento</li>
              <li>Trabalhe conosco</li>
            </ul>
          </div>

         
          <div className={styles.column}>
            <h4>Ajuda</h4>
            <ul>
              <li>Suporte</li>
              <li>Fale conosco</li>
              <li>Perguntas frequentes</li>
            </ul>
          </div>

          
          <div className={styles.column}>
            <h4>Termos</h4>
            <ul>
              <li>Termos e condições</li>
              <li>Política e privacidade</li>
              <li>Troca e devolução</li>
            </ul>
          </div>
        </div>
      </footer>

  
      <div className={styles.copyright}>
        © 2025 Econverse TEST. Desenvolvido por Kaique Medeiros .
      </div>
    </div>
  );
};

export default Footer;
