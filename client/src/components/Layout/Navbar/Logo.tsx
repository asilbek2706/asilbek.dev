import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/Layout/Navbar/Logo.module.scss';

const Logo: React.FC<{ firstname: string }> = ({ firstname }) => (
    <Link className={styles.logoLink} to="/">
        <span className={styles.logoText}>
            {firstname.toLowerCase()}
        </span>
    </Link>
);
export default Logo;