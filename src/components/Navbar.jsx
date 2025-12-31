import { useState, useEffect } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { smoothScroll } from '../utils/smoothScroll';

const Navbar = () => {
    const scrollPosition = useScrollPosition();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#publications', label: 'Publications' },
        { href: '#experience', label: 'Experience' },
        { href: '#certifications', label: 'Certifications' },
        { href: '#contact', label: 'Contact' },
    ];

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                setActiveSection(sectionId);
            }
        });
    }, [scrollPosition]);

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        smoothScroll(href);
        setMobileMenuOpen(false);
    };

    return (
        <nav
            className={`navbar ${scrollPosition > 50 ? 'scrolled' : ''}`}
            id="navbar"
            style={{
                background: scrollPosition > 50 ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
                backdropFilter: scrollPosition > 50 ? 'blur(10px)' : 'none',
                borderBottom: scrollPosition > 50 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                transition: 'all 0.3s ease',
                padding: scrollPosition > 50 ? '1rem 0' : '1.5rem 0'
            }}
        >
            <style>{`
                /* Desktop Defaults */
                .nav-menu {
                    display: flex;
                    list-style: none;
                    gap: 0.5rem;
                }
                .hamburger {
                    display: none;
                    cursor: pointer;
                    flex-direction: column;
                    gap: 5px;
                    z-index: 1000;
                }
                .hamburger span {
                    width: 25px;
                    height: 3px;
                    background-color: white;
                    transition: all 0.3s ease;
                }

                /* Mobile Views */
                @media (max-width: 968px) {
                    .hamburger {
                        display: flex;
                    }
                    .nav-menu {
                        position: fixed;
                        top: 0;
                        right: -100%; /* Hidden by default */
                        width: 100%;
                        height: 100vh;
                        background: rgba(0, 0, 0, 0.95);
                        backdrop-filter: blur(10px);
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        transition: 0.4s ease-in-out;
                        z-index: 999;
                        padding: 0;
                    }
                    .nav-menu.active {
                        right: 0; /* Slide in */
                    }
                    .nav-menu li {
                        margin: 1.5rem 0 !important;
                    }
                    .nav-link {
                        font-size: 1.5rem !important;
                        padding: 1rem 2rem !important;
                    }

                    /* Hamburger Animation */
                    .hamburger.active span:nth-child(1) {
                        transform: rotate(45deg) translate(5px, 5px);
                    }
                    .hamburger.active span:nth-child(2) {
                        opacity: 0;
                    }
                    .hamburger.active span:nth-child(3) {
                        transform: rotate(-45deg) translate(7px, -6px);
                    }
                }
            `}</style>
            <div className="nav-container">
                <div className="nav-logo">
                    <span className="logo-text" style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.02em' }}>
                        Gerald<span className="accent" style={{ color: '#fff' }}>.</span>
                    </span>
                </div>
                <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="navMenu">
                    {navLinks.map(link => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <li key={link.href} style={{ margin: '0 0.5rem' }}>
                                <a
                                    href={link.href}
                                    className={`nav-link ${isActive ? 'active' : ''}`}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    style={{
                                        color: isActive ? '#fff' : '#888',
                                        fontSize: '0.9rem',
                                        fontWeight: isActive ? '600' : '400',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '50px',
                                        background: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                                        border: isActive ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.color = '#fff';
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.color = '#888';
                                            e.currentTarget.style.background = 'transparent';
                                        }
                                    }}
                                >
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <div
                    className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
                    id="hamburger"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
