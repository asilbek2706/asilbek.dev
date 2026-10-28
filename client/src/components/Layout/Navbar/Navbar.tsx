import React from 'react';
import { useNav } from '../../../context/NavContext';
import { useAboutStore } from '../../../store/useAboutStore.ts';
import Logo from './Logo';
import NavLinks from './NavLinks';
import styles from '../../../styles/Layout/Navbar/Navbar.module.scss';

const Navbar: React.FC = () => {
    const { isMenuOpen, setIsMenuOpen, isScrolled } = useNav();
    const aboutInfo = useAboutStore((state) => state.aboutInfo);

    if (!aboutInfo) return null;

    return (
        <nav
            className={`
                ${styles.navbar}
                ${isScrolled ? styles.scrolled : ''}
            `}
        >
            <div className="container d-flex align-items-center justify-content-between">

                <div className={styles.logoWrapper}>
                    <Logo firstname={aboutInfo.firstname} />
                </div>

                <div className={styles.desktopMenu}>
                    <NavLinks />
                </div>

                <button
                    className={`
                        ${styles.hamburger}
                        ${isMenuOpen ? styles.open : ''}
                    `}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                    type="button"
                >
                    <span></span>
                    <span></span>
                </button>

                <div
                    className={`${styles.mobileMenu} ${
                        isMenuOpen ? styles.show : ''
                    }`}
                >
                    <NavLinks isMobile />
                </div>

            </div>
        </nav>
    );
};

export default Navbar;