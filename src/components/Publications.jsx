const Publications = () => {
    const publications = [
        {
            id: 2,
            type: 'Undergraduate Thesis',
            title: 'IoT Panic Button System (SKRIPSI)',
            description: 'Rancang Bangun Sistem IoT Panic Button Berbasis NodeMCU ESP8266 dengan Integrasi GPS U-Blox 6M untuk Meningkatkan Keamanan Penyandang Tunanetra.',
            date: '2025',
            link: 'https://library.gunadarma.ac.id/deposit-system/epaper/baca/OUZEVTZUTm05enhQVm1NdU1FOFhiSXdWR2JJbTBsb0xtNG5aTkdCU3ZOaXJHQ3pzb2ZIei9uNXBZTGpVUmZJWQ==?id=akw3bUZrSmNyaWg3TU10ek1FRzJ4Q0x4RGNUTk0yeVkxV1RVZmxzSG90ND0=',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.8 }}>
                    <path d="M12 14L3 8.3L12 2.6L21 8.3L12 14ZM3 8.3V14C3 15.6569 7.02944 17 12 17C16.9706 17 21 15.6569 21 14V8.3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 14V21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 21L3 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            gradient: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 100%)'
        },
        {
            id: 1,
            type: 'Scientific Publication',
            title: 'Dumbbell Rep & Set Counter System (Penelitian Ilmiah)',
            description: 'SISTEM PENGHITUNG REPETISI DAN SET OLAHRAGA DUMBBELL MENGGUNAKAN BAHASA PHYTON DENGAN METODE OPENCV2.',
            date: '2024',
            link: 'https://library.gunadarma.ac.id/deposit-system/epaper/baca/NmM1NzUxUlA0a2tkQXUrZjdiVEZkclBPYmMySnErenA0L3c5bkJYMUF6TVJsT1hFSWNUb1RZeTAvUThKY0JESw==?id=QzhpK3ZhUVVCaDY2TiszRHptWlp2N1lGVUF6S01ha0FjbHBZNUU2WEFGcz0=',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.8 }}>
                    <path d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H15L21 9V19C21 20.1046 20.1046 21 19 21Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 11V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 14H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 3V9H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            gradient: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 100%)'
        }
    ];

    return (
        <section className="section" id="publications" style={{ position: 'relative' }}>
            <div className="container">
                <style>{`
                    .pub-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr; /* Strict 2 columns */
                        gap: 2rem;
                        margin-top: 3rem;
                    }
                    .pub-card-link {
                        display: flex;
                        height: 100%; /* Stretch to fill grid cell */
                    }
                    .pub-card {
                        position: relative;
                        background: rgba(255, 255, 255, 0.03);
                        border: 1px solid rgba(255, 255, 255, 0.05);
                        border-radius: 20px;
                        padding: 3rem;
                        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        height: 100%; /* Fill the link wrapper */
                        width: 100%;
                        min-height: 350px;
                        backdrop-filter: blur(10px);
                    }
                    .pub-card:hover {
                        transform: translateY(-10px) scale(1.02);
                        background: rgba(255, 255, 255, 0.05);
                        border-color: rgba(255, 255, 255, 0.2);
                        box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(255,255,255,0.05);
                    }
                    .pub-card::before {
                        content: '';
                        position: absolute;
                        top: -50%;
                        left: -50%;
                        width: 200%;
                        height: 200%;
                        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
                        opacity: 0;
                        transition: opacity 0.5s ease;
                        pointer-events: none;
                        transform: translate(0, 0);
                    }
                    .pub-card:hover::before {
                        opacity: 1;
                    }
                    .pub-badge {
                        display: inline-flex;
                        align-items: center;
                        padding: 0.5rem 1rem;
                        border-radius: 50px;
                        background: rgba(255, 255, 255, 0.05);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        font-size: 0.8rem;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        color: #ccc;
                        margin-bottom: 2rem;
                        width: fit-content;
                    }
                    .pub-icon {
                        margin-bottom: 2rem;
                        filter: drop-shadow(0 0 20px rgba(255,255,255,0.2));
                    }
                    .pub-title {
                        font-size: 1.75rem;
                        font-weight: 700;
                        margin-bottom: 1rem;
                        background: linear-gradient(to right, #fff, #999);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                    .pub-desc {
                        color: #888;
                        line-height: 1.6;
                        margin-bottom: 2rem;
                        flex-grow: 1;
                    }
                    .pub-link {
                        display: inline-flex;
                        align-items: center;
                        gap: 0.5rem;
                        color: white;
                        text-decoration: none;
                        font-weight: 600;
                        font-size: 0.9rem;
                        transition: gap 0.3s ease;
                    }
                    .pub-link:hover {
                        gap: 1rem;
                    }
                    @media (max-width: 768px) {
                        .pub-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                `}</style>

                <div className="section-header" data-label="RESEARCH">
                    <span className="section-label">Academic Work</span>
                    <h2 className="section-title">Publications & Thesis</h2>
                </div>

                <div className="pub-grid">
                    {publications.map((pub) => (
                        <a href={pub.link} target="_blank" rel="noopener noreferrer" key={pub.id} className="pub-card-link" style={{ textDecoration: 'none' }}>
                            <article className="pub-card">
                                <div>
                                    <div className="pub-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div className="pub-badge">{pub.type}</div>
                                        <div className="pub-icon">{pub.icon}</div>
                                    </div>
                                    <h3 className="pub-title">{pub.title}</h3>
                                    <p className="pub-desc">{pub.description}</p>
                                </div>
                                <div className="pub-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
                                    <span style={{ fontSize: '0.9rem', color: '#666' }}>{pub.date}</span>
                                    <span className="pub-link">
                                        Read Paper
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </span>
                                </div>
                            </article>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
