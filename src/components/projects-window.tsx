export default function ProjectsWindow() {
  const projects = [
    {
      name: "Retro Chat App",
      description: "A Windows 95-styled chat application built with React and Socket.io",
      tech: "React, Socket.io, CSS",
    },
    {
      name: "Pixel Art Generator",
      description: "Tool for creating pixel art with a retro interface",
      tech: "JavaScript, Canvas API",
    },
    {
      name: "Vintage Music Player",
      description: "A Winamp-inspired music player for the web",
      tech: "React, Web Audio API",
    },
    {
      name: "DOS-Style Terminal",
      description: "Interactive terminal emulator with classic DOS commands",
      tech: "TypeScript, Node.js",
    },
  ]

  return (
      <div className="font-mono text-base">
        <h2 className="font-bold mb-6 text-xl">My Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
              <div key={index} className="border border-gray-400 p-4" style={{ borderStyle: "inset" }}>
                <h3 className="font-bold text-blue-800 text-lg">{project.name}</h3>
                <p className="my-3">{project.description}</p>
                <div className="text-sm text-gray-600">
                  <strong>Technologies:</strong> {project.tech}
                </div>
              </div>
          ))}
        </div>
      </div>
  )
}
