import { skillsData } from '../data/skills';

const SkillIcons = {
    iot: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.93 19.07a10 10 0 0 1 0-14.14" />
            <path d="M7.76 16.24a6 6 0 0 1 0-8.49" />
            <path d="M12 12h.01" />
            <path d="M16.24 7.76a6 6 0 0 1 0 8.49" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
    ),
    vision: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7Z" />
        </svg>
    ),
    professional: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),
    design: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19l7-7 3 3-7 7-3-3z" />
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
            <path d="M2 2l7.586 7.586" />
            <circle cx="11" cy="11" r="2" />
        </svg>
    ),
    database: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
    ),
    content: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <polygon points="9 8 16 12 9 16" />
        </svg>
    )
};

const Skills = () => {
    return (
        <section className="section skills" id="skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Capabilities</span>
                    <h2 className="section-title">Skills & Expertise</h2>
                </div>

                <div
                    className="skills-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: '1.5rem',
                        marginTop: '2rem'
                    }}
                >
                    {skillsData.map(category => (
                        <div
                            key={category.id}
                            className="skill-card"
                            style={{
                                background: '#0a0a0a',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '12px',
                                padding: '1.5rem',
                                transition: 'all 0.3s ease',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                                e.currentTarget.style.background = '#111';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                const icon = e.currentTarget.querySelector('.skill-icon-svg');
                                if (icon) icon.style.color = '#fff';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                e.currentTarget.style.background = '#0a0a0a';
                                e.currentTarget.style.transform = 'translateY(0)';
                                const icon = e.currentTarget.querySelector('.skill-icon-svg');
                                if (icon) icon.style.color = 'rgba(255,255,255,0.6)';
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <span
                                    className="skill-icon-svg"
                                    style={{
                                        color: 'rgba(255,255,255,0.6)',
                                        transition: 'color 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    {SkillIcons[category.icon] || category.icon}
                                </span>
                                <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#fff', margin: 0, letterSpacing: '0.02em', textTransform: 'uppercase' }}>{category.title}</h3>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignContent: 'flex-start' }}>
                                {category.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            fontSize: '0.8rem',
                                            color: '#999',
                                            padding: '0.4rem 0.8rem',
                                            borderRadius: '6px',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.05)',
                                            transition: 'all 0.2s ease',
                                            cursor: 'default'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = '#fff';
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = '#999';
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
