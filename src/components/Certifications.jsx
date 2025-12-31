import { certificationsData } from '../data/certifications';

const Certifications = () => {
    return (
        <section className="section certifications" id="certifications">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Achievements</span>
                    <h2 className="section-title">Certifications</h2>
                </div>
                <div className="certifications-grid">
                    {certificationsData.map(cert => (
                        <a
                            key={cert.id}
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-card glass-card"
                            style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: 'pointer' }}
                        >
                            <div className="cert-icon">{cert.icon}</div>
                            <h3>{cert.title}</h3>
                            <p>{cert.description}</p>
                            <span style={{
                                marginTop: '1rem',
                                display: 'inline-block',
                                fontSize: '0.8rem',
                                color: 'var(--color-primary)',
                                borderBottom: '1px solid var(--color-primary)'
                            }}>
                                View Credential ↗
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
