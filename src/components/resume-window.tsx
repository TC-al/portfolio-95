export default function ResumeWindow() {
  return (
      <div
          style={{
            fontFamily: "MS Sans Serif, Tahoma, sans-serif",
            fontSize: "11px",
            color: "#000000",
            padding: "8px",
          }}
      >
        <div
            style={{
              border: "2px outset #c0c0c0",
              backgroundColor: "#c0c0c0",
              padding: "8px",
              marginBottom: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
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
            📄 Resume
          </h2>
          <button
              style={{
                border: "2px outset #c0c0c0",
                backgroundColor: "#c0c0c0",
                padding: "4px 8px",
                fontSize: "11px",
                fontFamily: "MS Sans Serif, Tahoma, sans-serif",
                cursor: "pointer",
                color: "#000000",
              }}
          >
            Download PDF
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div
              style={{
                border: "2px inset #c0c0c0",
                backgroundColor: "#ffffff",
                padding: "12px",
              }}
          >
            <h3
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                  color: "#000080",
                  borderBottom: "1px solid #c0c0c0",
                  paddingBottom: "4px",
                }}
            >
              💼 Experience
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div>
                <div style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "2px" }}>Senior Frontend Developer</div>
                <div style={{ fontSize: "10px", color: "#666666", marginBottom: "4px" }}>
                  Tech Company Inc. • 2022 - Present
                </div>
                <div style={{ fontSize: "11px", lineHeight: "1.3" }}>
                  <div>• Led development of React-based dashboard serving 10k+ users</div>
                  <div>• Improved application performance by 40% through optimization</div>
                  <div>• Mentored junior developers and conducted code reviews</div>
                </div>
              </div>
              <div>
                <div style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "2px" }}>Full Stack Developer</div>
                <div style={{ fontSize: "10px", color: "#666666", marginBottom: "4px" }}>Startup Co. • 2020 - 2022</div>
                <div style={{ fontSize: "11px", lineHeight: "1.3" }}>
                  <div>• Built and maintained multiple client projects using MERN stack</div>
                  <div>• Implemented CI/CD pipelines reducing deployment time by 60%</div>
                  <div>• Collaborated with design team to create pixel-perfect UIs</div>
                </div>
              </div>
            </div>
          </div>

          <div
              style={{
                border: "2px inset #c0c0c0",
                backgroundColor: "#ffffff",
                padding: "12px",
              }}
          >
            <h3
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                  color: "#000080",
                  borderBottom: "1px solid #c0c0c0",
                  paddingBottom: "4px",
                }}
            >
              🎓 Education
            </h3>
            <div>
              <div style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "2px" }}>
                Bachelor of Science in Computer Science
              </div>
              <div style={{ fontSize: "10px", color: "#666666", marginBottom: "2px" }}>University Name • 2016 - 2020</div>
              <div style={{ fontSize: "11px" }}>Graduated Magna Cum Laude • GPA: 3.8/4.0</div>
            </div>
          </div>

          <div
              style={{
                border: "2px inset #c0c0c0",
                backgroundColor: "#ffffff",
                padding: "12px",
              }}
          >
            <h3
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                  color: "#000080",
                  borderBottom: "1px solid #c0c0c0",
                  paddingBottom: "4px",
                }}
            >
              🏆 Certifications
            </h3>
            <div style={{ fontSize: "11px", lineHeight: "1.4" }}>
              <div>• AWS Certified Developer Associate</div>
              <div>• Google Cloud Professional Developer</div>
              <div>• MongoDB Certified Developer</div>
            </div>
          </div>
        </div>
      </div>
  )
}
