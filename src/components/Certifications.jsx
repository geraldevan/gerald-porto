import { certificationsData } from '../data/certifications';

const Certifications = () => {
    return (
        <section className="section certifications" id="certifications">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Achievements</span>
                    <h2 className="section-title">Certifications</h2>
                </div>
                <style>{`
                    .cert-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                        gap: 2rem;
                        margin-top: 2rem;
                    }
                    .cert-card {
                        background: rgba(255, 255, 255, 0.03);
                        border: 1px solid rgba(255, 255, 255, 0.05);
                        border-radius: 20px;
                        padding: 2.5rem;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                        text-decoration: none;
                        color: inherit;
                        position: relative;
                        overflow: hidden;
                        height: 100%;
                        backdrop-filter: blur(10px);
                        min-height: 250px;
                        justify-content: center;
                    }
                    .cert-card:hover {
                        transform: translateY(-8px);
                        background: rgba(255, 255, 255, 0.06);
                        border-color: rgba(255, 255, 255, 0.15);
                        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                    }
                    .cert-icon {
                        font-size: 3rem;
                        margin-bottom: 1.5rem;
                        filter: drop-shadow(0 0 20px rgba(255,255,255,0.1));
                        transition: transform 0.4s ease;
                    }
                    .cert-card:hover .cert-icon {
                        transform: scale(1.2) rotate(5deg);
                    }
                    .cert-title {
                        font-size: 1.25rem;
                        font-weight: 700;
                        margin-bottom: 0.75rem;
                        color: white;
                        font-family: 'Syne', sans-serif;
                    }
                    .cert-desc {
                        color: #888;
                        font-size: 0.9rem;
                        margin-bottom: 0;
                        line-height: 1.5;
                        transition: color 0.3s ease;
                    }
                    .cert-card:hover .cert-desc {
                        color: #ccc;
                    }
                    .cert-cta {
                        margin-top: 1.5rem;
                        font-size: 0.8rem;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        color: white;
                        opacity: 0;
                        transform: translateY(10px);
                        transition: all 0.3s ease;
                    }
                    .cert-card:hover .cert-cta {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    @media (max-width: 768px) {
                        .cert-grid {
                            grid-template-columns: 1fr;
                            gap: 1rem;
                        }
                    }
                `}</style>
                <div className="cert-grid">
                    {certificationsData.map(cert => (
                        <a
                            key={cert.id}
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-card"
                        >
                            <div className="cert-icon">{cert.icon}</div>
                            <h3 className="cert-title">{cert.title}</h3>
                            <p className="cert-desc">{cert.description}</p>
                            <div className="cert-cta">View Credential ↗</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
