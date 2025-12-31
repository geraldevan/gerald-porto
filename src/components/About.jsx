import { useEffect, useRef, useState } from 'react';
import { skillsData } from '../data/skills';
import { animateCounter } from '../utils/animateCounter';

const About = () => {
    const [animated, setAnimated] = useState(false);
    const statsRef = useRef(null);
    const numberRefs = useRef([]);

    const stats = [
        { icon: '🎓', target: 3.78, label: 'GPA Score' },
        { icon: '💼', target: 8, label: 'Projects Completed' },
        { icon: '⚡', target: 6, label: 'Years Personal Experience in IT & Tech' }, // Adjusted based on context
        { icon: '📜', target: 7, label: 'Certifications' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !animated) {
                        setAnimated(true);
                        numberRefs.current.forEach((ref, index) => {
                            if (ref) {
                                setTimeout(() => {
                                    animateCounter(ref, stats[index].target);
                                }, index * 150);
                            }
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (statsRef.current) observer.observe(statsRef.current);

        return () => {
            if (statsRef.current) observer.unobserve(statsRef.current);
        };
    }, [animated]);

    return (
        <section className="section about" id="about" ref={statsRef}>
            <div className="container">
                <div className="section-header" data-label="PROFILE">
                    <span className="section-label">Profile</span>
                    <h2 className="section-title">About Me</h2>
                </div>

                <div className="bento-grid">
                    {/* 1. Bio / Introduction - Large Scanable Text */}
                    <div className="bento-item span-8">
                        <h3>Professional Summary</h3>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify' }}>
                            Fresh graduate in <strong style={{ color: 'white', fontWeight: 600 }}>Informatics</strong> with a strong interest in <strong style={{ color: 'white', fontWeight: 600 }}>IoT</strong> and <strong style={{ color: 'white', fontWeight: 600 }}>IT Support</strong>.
                            Familiar with basic <strong style={{ color: 'white', fontWeight: 600 }}>hardware</strong>, <strong style={{ color: 'white', fontWeight: 600 }}>software</strong>, and <strong style={{ color: 'white', fontWeight: 600 }}>networking</strong> support, and eager to learn, adaptable, and motivated to continuously develop technical and professional skills in a dynamic work environment.
                        </p>
                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                            <div className="gpa-badge">
                                <span>🎓 Informatics Engineering</span>
                            </div>

                        </div>
                    </div>

                    {/* 2. Education Card */}
                    <div className="bento-item span-4">
                        <h3>Education</h3>
                        <div style={{ marginTop: '1rem' }}>
                            <h4 style={{ fontSize: '1.25rem', color: 'var(--color-white)' }}>Univ. Gunadarma</h4>
                            <p style={{ color: 'var(--color-primary)', fontWeight: '600' }}>2021 – 2025</p>
                            <div style={{ marginTop: '1rem', fontSize: '2.5rem', fontWeight: '800' }}>
                                <span ref={el => numberRefs.current[0] = el}>0</span> <span style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}>/ 4.00</span>
                            </div>
                            <p style={{ color: 'var(--color-text-muted)' }}>GPA Score</p>
                        </div>
                    </div>

                    {/* 3. Stats Strip */}
                    {stats.slice(1).map((stat, index) => (
                        <div key={index} className="bento-item span-4" style={{ alignItems: 'center', textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                            <div
                                ref={el => numberRefs.current[index + 1] = el} // Offset index because we skipped first
                                style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-white)' }}
                            >
                                0
                            </div>
                            <div style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', fontSize: '0.875rem' }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    );
};

export default About;
