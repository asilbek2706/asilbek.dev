import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNav } from '../../../context/NavContext';
import styles from '../../../styles/Layout/Navbar/NavLinks.module.scss';

interface NavLinksProps {
    isMobile?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ isMobile }) => {
    const { setIsMenuOpen } = useNav();

    const links = [
        { path: "/", label: "Asosiy" },
        { path: "/about", label: "Men haqimda" },
        { path: "/projects", label: "Loyihalar" },
        { path: "/contact", label: "Bog'lanish" }
    ];

    const socials = [
        { icon: "bi-telegram", url: "https://t.me/username" },
        { icon: "bi-github", url: "https://github.com/username" },
        { icon: "bi-instagram", url: "https://instagram.com/username" }
    ];

    return (
        <div className={`${styles.navWrapper} ${isMobile ? styles.mobileLayout : ''}`}>
            <ul className={styles.navList}>
                {links.map((link, index) => (
                    <li key={link.path} className={`m-reveal delay-${index + 2}`}>
                        <NavLink
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) =>
                                `${styles.link} m-link ${isActive ? styles.active : ''}`
                            }
                        >
                            <span className={styles.linkLabel}>{link.label}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Social blok linklar tugagandan keyin chiqishi uchun links.length + 2 ishlatildi */}
            <div className={`${styles.socialLinks} m-reveal delay-${links.length + 2}`}>
                {socials.map((social, idx) => (
                    <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.socialIcon} m-link`}
                    >
                        <i className={`bi ${social.icon}`}></i>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default NavLinks;