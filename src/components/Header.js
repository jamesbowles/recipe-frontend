import React from 'react';
import styles from '../styles/Header.module.scss'
import { Link } from "react-router-dom";

const Header = () => (
  <div className={styles.Header}>
    <Link to={`/`}>
        Recipes!
    </Link>
  </div>
);

export default Header