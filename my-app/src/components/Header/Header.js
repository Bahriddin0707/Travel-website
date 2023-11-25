import React from 'react';
import { Link } from "react-router-dom";
import Container from "../../UI/Container/Container";
import styles from "./Header.module.css";


const Header = () => {
  return (
      <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <h2><Link className={styles.Link} to="/">Main</Link></h2>
          <ul className={styles.ul}>
            <li className={styles.li}><Link className={styles.Link} to="/about">About</Link></li>
            <li className={styles.li}><Link className={styles.Link} to="/contact">Contact</Link></li>
          </ul>
        </nav>
        </Container>
      </header>
  );
};

export default Header;
