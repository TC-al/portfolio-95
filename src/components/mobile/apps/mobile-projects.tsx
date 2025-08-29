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
        <div className="space-y-4">
            {projects.map((project, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-blue-600">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                {project.name}
                            </a>
                        </h3>
                        <span className={`text-xs px-2 py-1 rounded ${
                            project.status === 'Live' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                        }`}>
              {project.status}
            </span>
                    </div>
                    <div className="text-xs text-blue-500 mb-2">{project.tech}</div>
                    <p className="text-sm text-gray-700">{project.description}</p>
                </div>
            ))}

            <div className="bg-blue-100 p-4 rounded-lg text-center">
                <div className="text-sm">💡 Tap project names to view demos!</div>
            </div>
        </div>
    )
}

export default MobileProjects