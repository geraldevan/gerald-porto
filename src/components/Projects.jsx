import { projectsData } from '../data/projects';

const Projects = () => {
    return (
        <section className="section projects" id="projects">
            <div className="container">
                <div className="section-header" data-label="WORKS">
                    <span className="section-label">Selected Works</span>
                    <h2 className="section-title">Featured Projects</h2>
                </div>

                <style>{`
                    .bento-grid {
                        display: grid;
                        grid-template-columns: repeat(12, 1fr);
                        gap: 1.5rem;
                        width: 100%;
                    }
                    .span-8 { grid-column: span 8; }
                    .span-4 { grid-column: span 4; }

                    /* Mobile Responsive Override */
                    @media (max-width: 968px) {
                        .bento-grid {
                            display: flex; /* Switch to flex column */
                            flex-direction: column;
                            gap: 2rem;
                        }
                        .bento-item {
                            width: 100% !important;
                            grid-column: auto !important;
                            min-height: 400px !important; /* Ensure visibility */
                        }
                        .span-8, .span-4 {
                            grid-column: span 1 !important;
                        }
                        .flip-card-front, .flip-card-back {
                            border-radius: 12px;
                            width: 100% !important;
                            height: 100% !important; /* Force fill */
                        }
                        .flip-card-inner {
                            width: 100% !important;
                            height: 100% !important; /* Force fill */
                        }
                    }
                `}</style>

                <div className="bento-grid">
                    {projectsData.map((project, index) => {
                        const isFeatured = index === 0;
                        const spanClass = isFeatured ? 'span-8' : 'span-4';
                        const minHeight = isFeatured ? '400px' : '340px';
                        const titleSize = isFeatured ? '2.5rem' : '1.5rem';
                        const paddingSize = isFeatured ? '2.5rem' : '1.5rem';
                        const descSize = isFeatured ? '1rem' : '0.875rem';

                        const displayTech = isFeatured ? project.tech : project.tech.slice(0, 3);

                        return (
                            <div
                                key={project.id}
                                className={`bento-item ${spanClass} flip-card`}
                                style={{
                                    minHeight: minHeight,
                                    padding: '0',
                                    background: 'transparent',
                                    border: 'none',
                                    boxShadow: 'none'
                                }}
                            >
                                <div className="flip-card-inner">
                                    {/* FRONT SIDE */}
                                    <div className="flip-card-front glass-card" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
                                        {/* Rotating Border */}
                                        <div className="featured-project-glow" style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}></div>

                                        {/* Gradient Overlay */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0, left: 0, width: '100%', height: '100%',
                                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))',
                                            zIndex: 1
                                        }}></div>

                                        {/* Content Container - STRICT CENTER */}
                                        <div style={{
                                            position: 'relative',
                                            zIndex: 2,
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center', // Vertically Centered
                                            alignItems: 'center', // Horizontally Centered
                                            padding: paddingSize,
                                            textAlign: 'center' // Text Centered
                                        }}>
                                            {/* Tag - Centered in flow */}
                                            <span className="project-tag" style={{
                                                border: 'none',
                                                marginBottom: '1rem',
                                                color: 'black',
                                                background: 'white',
                                                fontWeight: 'bold',
                                                fontSize: '0.75rem',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '50px'
                                            }}>
                                                {project.tag}
                                            </span>

                                            {/* Title */}
                                            <h3 style={{
                                                fontSize: titleSize,
                                                marginBottom: '0.75rem',
                                                color: 'white',
                                                lineHeight: 1.2,
                                                maxWidth: '90%',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden'
                                            }}>
                                                {project.title}
                                            </h3>

                                            {/* Description */}
                                            <p style={{
                                                color: '#ccc',
                                                marginBottom: '1.25rem',
                                                fontSize: descSize,
                                                lineHeight: 1.5,
                                                maxWidth: '100%', // Full width
                                                display: '-webkit-box',
                                                WebkitLineClamp: 6, // Show more lines (effectively full text)
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                                opacity: 0.9
                                            }}>
                                                {project.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="project-tech" style={{
                                                gap: '0.5rem',
                                                justifyContent: 'center',
                                                flexWrap: 'wrap'
                                            }}>
                                                {displayTech.map((tech, i) => (
                                                    <span key={i} className="tech-badge" style={{
                                                        background: 'rgba(255,255,255,0.15)',
                                                        border: 'none',
                                                        fontSize: '0.75rem',
                                                        padding: '0.2rem 0.6rem',
                                                        color: '#fff'
                                                    }}>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* BACK SIDE */}
                                    <div className="flip-card-back">
                                        <a href={project.evidenceUrl || '#'} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%', position: 'relative' }}>
                                            <img
                                                src={project.imageUrl || 'https://placehold.co/800x600/111/FFF?text=No+Preview'}
                                                alt={project.title}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                            <div className="flip-cta">
                                                View Project ↗
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
