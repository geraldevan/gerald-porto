import { useEffect } from 'react';

const Hero = () => {

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
                100% { transform: translateY(0px); }
            }
            @keyframes glow-pulse {
                0% { opacity: 0.5; transform: scale(0.95); }
                50% { opacity: 0.8; transform: scale(1.05); }
                100% { opacity: 0.5; transform: scale(0.95); }
            }

            /* Responsive Hero Layout */
            .hero-container-responsive {
                display: grid;
                grid-template-columns: 1.2fr 0.8fr;
                gap: 4rem;
                align-items: center;
                max-width: 1400px;
                margin: 0 auto;
                padding: 0 2rem;
            }

            @media (max-width: 968px) {
                .hero-container-responsive {
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    text-align: center;
                    padding-top: 6rem;
                    padding-bottom: 4rem;
                }
                .hero-content {
                    order: 2;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0 1rem;
                }
                .hero-title {
                    font-size: clamp(2.5rem, 10vw, 4rem) !important;
                    margin-bottom: 1rem !important;
                }
                .hero-roles {
                    font-size: 1.2rem !important;
                    margin-bottom: 2rem !important;
                }
                .hero-visual {
                    order: 1;
                    margin-bottom: 2rem;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
                .profile-image {
                    max-width: 80vw !important; /* Prevent huge image on mobile */
                    height: auto !important;
                }
                .hero-description {
                    text-align: center !important; 
                    margin: 0 auto 2.5rem auto !important;
                    font-size: 1rem !important;
                    max-width: 90% !important;
                }
                .hero-buttons {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    width: 100%;
                    max-width: 300px;
                }
                .btn {
                    width: 100%;
                    justify-content: center;
                }
                .hero-label div {
                    margin: 0 auto;
                }
            }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    const handleDownloadCV = (e) => {
        e.preventDefault();
        const notification = document.createElement('div');
        notification.style.cssText = `
      position: fixed;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #111111, #333333);
      color: #FFFFFF;
      padding: 1rem 2rem;
      border-radius: 12px;
      font-weight: 600;
      z-index: 10000;
      border: 1px solid #333;
      box-shadow: 0 8px 32px rgba(255, 255, 255, 0.1);
      animation: slideDown 0.3s ease-out;
    `;
        notification.textContent = 'CV download feature - Please contact for latest CV';

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideUp 0.3s ease-out';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    };

    return (
        <section className="hero" id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="hero-container-responsive">
                <div className="hero-content">
                    <div className="hero-label" style={{ marginBottom: '2rem' }}>
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            padding: '0.5rem 1rem',
                            borderRadius: '50px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)'
                        }}>
                            <span className="status-dot-pulse" style={{ position: 'relative', width: '8px', height: '8px' }}>
                                <span style={{ position: 'absolute', width: '100%', height: '100%', background: '#4CAF50', borderRadius: '50%' }}></span>
                                <span style={{ position: 'absolute', width: '100%', height: '100%', background: '#4CAF50', borderRadius: '50%', animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite', opacity: 0.7 }}></span>
                            </span>
                            <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', color: '#ccc', fontWeight: 500 }}>Available for work</span>
                        </div>
                    </div>

                    <h1 className="hero-title" style={{ fontSize: 'clamp(3.5rem, 5vw, 6rem)', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-0.02em', fontWeight: 800 }}>
                        GERALD<br />
                        <span style={{
                            background: 'linear-gradient(to bottom right, #FFFFFF 30%, #666666)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.15))'
                        }}>LOPPIES.</span>
                    </h1>

                    <div className="hero-roles" style={{ fontSize: '1.5rem', color: 'var(--color-white)', marginBottom: '3rem', fontWeight: '300', letterSpacing: '-0.01em' }}>
                        IoT Developer & IT Support Digital
                    </div>

                    <p className="hero-description" style={{
                        fontSize: '1.125rem',
                        color: 'var(--color-text-muted)',
                        marginBottom: '3rem',
                        maxWidth: '540px',
                        lineHeight: '1.8',
                        textAlign: 'justify',
                        hyphens: 'auto'
                    }}>
                        Dedicated <span style={{ color: '#FFF', fontWeight: 500 }}>Fresh Graduate</span> with a passion for continuous learning.
                        Committed to <span style={{ color: '#FFF', fontWeight: 500 }}>professional excellence</span> and building reliable solutions for the modern digital landscape.
                    </p>

                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary" style={{
                            padding: '1.1rem 3rem',
                            fontSize: '1rem',
                            background: 'white',
                            color: 'black',
                            fontWeight: 'bold',
                            letterSpacing: '1px',
                            boxShadow: '0 0 30px rgba(255,255,255,0.1)'
                        }}>
                            CONTACT ME
                        </a>
                        <a href="#projects" className="btn btn-outline" style={{ border: 'none', color: 'var(--color-text-muted)' }}>
                            VIEW WORK ↓
                        </a>
                        <a href="#publications" className="btn btn-outline" style={{ border: 'none', color: 'var(--color-text-muted)' }}>
                            PUBLICATIONS ↗
                        </a>
                    </div>
                </div>

                <div className="hero-visual" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {/* Glowing Aura Background */}
                    <div style={{
                        position: 'absolute',
                        width: '80%',
                        height: '80%',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 70%)',
                        filter: 'blur(60px)',
                        zIndex: 0,
                        animation: 'glow-pulse 8s infinite ease-in-out'
                    }}></div>

                    {/* Animated Image Container */}
                    <div
                        className="glass-card hero-card"
                        style={{
                            border: 'none',
                            background: 'transparent',
                            boxShadow: 'none',
                            zIndex: 1,
                            animation: 'float 6s ease-in-out infinite',
                            position: 'relative'
                        }}
                    >
                        <div className="profile-placeholder" style={{ position: 'relative' }}>
                            <img
                                src="https://noxccuzjrkvkcztozjlc.supabase.co/storage/v1/object/public/product-images/gerald2.png"
                                alt="Profile"
                                className="profile-image"
                                style={{
                                    width: '100%',
                                    maxWidth: '550px',
                                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5)) grayscale(100%) contrast(1.1)',
                                    transition: 'all 0.5s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.filter = 'drop-shadow(0 30px 50px rgba(255,255,255,0.1)) grayscale(0%) contrast(1.2)';
                                    e.currentTarget.style.transform = 'scale(1.02)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.filter = 'drop-shadow(0 20px 40px rgba(0,0,0,0.5)) grayscale(100%) contrast(1.1)';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            />

                            {/* Tech Frame Removed */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
