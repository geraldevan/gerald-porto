import { useEffect } from 'react';

const Hero = () => {

    useEffect(() => {
        // No-op for now, removing shape logic
    }, []);

    const handleDownloadCV = (e) => {
        e.preventDefault();
        const notification = document.createElement('div');
        notification.style.cssText = `
      position: fixed;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #00D9FF, #0066FF);
      color: white;
      padding: 1rem 2rem;
      border-radius: 12px;
      font-weight: 600;
      z-index: 10000;
      box-shadow: 0 8px 32px rgba(0, 217, 255, 0.4);
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
        <section className="hero" id="home">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-label">
                        <span className="status-dot"></span>
                        <span>Available for opportunities</span>
                    </div>
                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Gerald Loppies</span>
                    </h1>
                    <div className="hero-roles">
                        <span className="role-item">IoT Developer</span>
                        <span className="separator">•</span>
                        <span className="role-item">IT Support</span>
                        <span className="separator">•</span>
                        <span className="role-item">Data Analyst</span>
                        <span className="separator">•</span>
                        <span className="role-item">UI/UX Designer</span>
                    </div>
                    <p className="hero-description">
                        Fresh Graduate in Informatics with strong expertise in IT Support and hands-on experience in IoT
                        system development, prototyping, computer vision, and UI/UX design.
                    </p>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary">
                            <span>Contact Me</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#projects" className="btn btn-secondary">
                            <span>View Projects</span>
                        </a>
                        <a href="#" className="btn btn-outline" onClick={handleDownloadCV}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 3v10m0 0l-4-4m4 4l4-4m5-1v8a2 2 0 01-2 2H3a2 2 0 01-2-2v-8"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Download CV</span>
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="glass-card hero-card">
                        <div className="card-glow"></div>
                        <div className="profile-placeholder">
                            <img src="src/images/photo.jpg" alt="Profile" className="profile-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
