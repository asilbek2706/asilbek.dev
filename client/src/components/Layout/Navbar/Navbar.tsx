import React from 'react';
import { useNav } from '../../../context/NavContext';
import { useAboutStore } from "../../../store/useAboutStore.ts";
import { useAnimation } from "../../../context/AnimationContext"; // 👈 Context ulandi
import Logo from './Logo';
import NavLinks from './NavLinks';
import styles from '../../../styles/Layout/Navbar/Navbar.module.scss';

const Navbar: React.FC = () => {
    const { isMenuOpen, setIsMenuOpen, isScrolled } = useNav();
    const { isReady } = useAnimation();
    const aboutInfo = useAboutStore((state) => state.aboutInfo);

    if (!aboutInfo) return null;

    return (
        <nav className={`
            ${styles.navbar} 
            ${isScrolled ? styles.scrolled : ''} 
            ${isReady ? 'is-ready' : 'is-loading'}
        `}>
            <div className="container d-flex align-items-center justify-content-between">

                <div className={`m-reveal delay-1`}>
                    <Logo firstname={aboutInfo.firstname}/>
                </div>

                <div className={`${styles.desktopMenu} m-reveal delay-2`}>
                    <NavLinks />
                </div>

                <button
                    className={`
                        ${styles.hamburger} 
                        ${isMenuOpen ? styles.open : ''} 
                        m-reveal delay-3
                    `}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                </button>

                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.show : ''}`}>
                    <div className={isMenuOpen ? 'is-ready' : ''}>
                        <NavLinks isMobile />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;