const MobileProjects = () => {
    const projects = [
        {
            name: "Eve",
            tech: "Next, PWA, Auth.js",
            description: "Personal safety network on campus through real-time alerts",
            link: "https://eve.codelikecrazy.dev/",
            status: "Live"
        },
        {
            name: "SkinScope",
            tech: "React, Yolo, Tensorflow",
            description: "Skin cancer detection using HAM10000 dataset",
            link: "https://devpost.com/software/skinscope",
            status: "Completed"
        },
        {
            name: "Jupbox",
            tech: "Next.js, Roboflow, Spotify",
            description: "Music control with hand gesture detection",
            link: "https://devpost.com/software/jupbox",
            status: "Completed"
        }
    ]

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            {projects.map((project, index) => (
                <div key={index} style={{
                    background: 'white',
                    padding: '16px',
                    borderRadius: '8px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px'}}>
                        <h3 style={{fontWeight: 'bold', color: '#2563eb', fontSize: '16px', margin: '0'}}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{color: '#2563eb', textDecoration: 'none'}}>
                                {project.name}
                            </a>
                        </h3>
                        <span style={{
                            fontSize: '12px',
                            padding: '2px 8px',
                            borderRadius: '4px',
                            ...(project.status === 'Live'
                                ? {background: '#dcfce7', color: '#166534'}
                                : {background: '#fef3c7', color: '#92400e'})
                        }}>
                            {project.status}
                        </span>
                    </div>
                    <div style={{fontSize: '12px', color: '#3b82f6', marginBottom: '8px'}}>{project.tech}</div>
                    <p style={{fontSize: '14px', color: '#374151', margin: '0'}}>{project.description}</p>
                </div>
            ))}

            <div style={{
                background: '#dbeafe',
                padding: '16px',
                borderRadius: '8px',
                textAlign: 'center'
            }}>
                <div style={{fontSize: '14px'}}>💡 Tap project names to view demos!</div>
            </div>
        </div>
    )
}

export default MobileProjects