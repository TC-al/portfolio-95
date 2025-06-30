export default function ProjectsWindow() {
  const projects = [
    {
      name: "SkinScope",
      tech: "React, Yolo, Tensorflow, OpenAI API",
      description: "Skin cancer detect application using the HAM10000 dataset, recognizing 7 different types of skin diseases",
      link: "https://devpost.com/software/skinscope",
      image: "SkinScope.jpg",
      status: "Completed",
    },
    {
      name: "Club Bubbles",
      tech: "React, Node.js, MongoDB, Cerebras API",
      description: "Collaborative project management tool with real-time updates and team features",
      link: "https://devpost.com/software/club-bubbles",
      image: "ClubBubbles.jpg",
      status: "Completed",
    },
    {
      name: "Stockify",
      tech: "Next.js, API Integration, Supabase",
      description: "Stock Market Predictor",
      link: "https://stockify.tcal.xyz",
      image: "e",
      status: "Completed",
    },
    {
      name: "Portfolio 95™",
      tech: "Next.js, CSS, Tailwind",
      description: "This retro Windows 95 themed portfolio you're currently viewing!",
      link: "https://www.tcal.xyz",
      image: "logo.png",
      status: "Live",
    },
  ]

  return (
      <div
          style={{
            fontFamily: "MS Sans Serif, Tahoma, sans-serif",
            fontSize: "11px",
            color: "#000000",
            padding: "8px",
            margin: "0",
            boxSizing: "border-box",
          }}
      >
        <div
            style={{
              border: "2px outset #c0c0c0",
              backgroundColor: "#c0c0c0",
              padding: "8px",
              marginBottom: "8px",
              flexShrink: 0,
              boxSizing: "border-box",
            }}
        >
          <h2
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                margin: "0",
                color: "#000080",
              }}
          >
            📁 Featured Projects
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "8px" }}>
          {projects.map((project, index) => (
              <div
                  key={index}
                  style={{
                    border: "2px inset #c0c0c0",
                    backgroundColor: "#ffffff",
                    padding: "10px",
                    minHeight: "60px",
                    boxSizing: "border-box",
                  }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{ fontSize: "10px", lineHeight: "1", flexShrink: 0 }}>
                      <img src={project.image} alt={project.name} height="100" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "4px",
                          flexWrap: "wrap",
                          gap: "4px",
                        }}
                    >
                      <h3 style={{ fontSize: "12px", fontWeight: "bold", margin: "0", color: "#000080" }}>
                          <a href={project.link} target="_blank">
                              {project.name}
                          </a>
                      </h3>
                      <div
                          style={{
                            fontSize: "10px",
                            padding: "2px 6px",
                            backgroundColor:
                                project.status === "Live" ? "#00ff00" : project.status === "Completed" ? "#ffff00" : "#ff8000",
                            border: "1px solid #000000",
                            color: "#000000",
                            flexShrink: 0,
                          }}
                      >
                        {project.status}
                      </div>
                    </div>
                    <div style={{ fontSize: "10px", color: "#000080", marginBottom: "4px", fontWeight: "bold" }}>
                      {project.tech}
                    </div>
                    <p style={{ fontSize: "11px", lineHeight: "1.3", margin: "0", wordWrap: "break-word" }}>
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
          ))}
        </div>

        <div
            style={{
              border: "2px inset #c0c0c0",
              backgroundColor: "#ffffcc",
              padding: "8px",
              flexShrink: 0,
              boxSizing: "border-box",
              marginBottom: "0",
            }}
        >
          <div style={{ fontSize: "11px", textAlign: "center", margin: "0" }}>
            💡 <strong>Tip:</strong> Click on the title of any project to view more details and live demos!
          </div>
        </div>
      </div>
  )
}
