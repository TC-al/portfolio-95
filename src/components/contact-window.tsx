export default function ContactWindow() {
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
            📞 Get In Touch
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "12px" }}>
          <div
              style={{
                border: "2px inset #c0c0c0",
                backgroundColor: "#ffffff",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
          >
            <span style={{ fontSize: "24px" }}>📧</span>
            <div>
              <div style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "2px" }}>Email</div>
              <div style={{ fontSize: "11px", color: "#000080" }}>your.email@example.com</div>
            </div>
          </div>

          <div
              style={{
                border: "2px inset #c0c0c0",
                backgroundColor: "#ffffff",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
          >
            <span style={{ fontSize: "24px" }}>💼</span>
            <div>
              <div style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "2px" }}>LinkedIn</div>
              <div style={{ fontSize: "11px", color: "#000080" }}>linkedin.com/in/yourprofile</div>
            </div>
          </div>

          <div
              style={{
                border: "2px inset #c0c0c0",
                backgroundColor: "#ffffff",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
          >
            <span style={{ fontSize: "24px" }}>🐙</span>
            <div>
              <div style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "2px" }}>GitHub</div>
              <div style={{ fontSize: "11px", color: "#000080" }}>github.com/yourusername</div>
            </div>
          </div>

          <div
              style={{
                border: "2px inset #c0c0c0",
                backgroundColor: "#ffffff",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
          >
            <span style={{ fontSize: "24px" }}>🐦</span>
            <div>
              <div style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "2px" }}>Twitter</div>
              <div style={{ fontSize: "11px", color: "#000080" }}>@yourusername</div>
            </div>
          </div>
        </div>

        <div
            style={{
              border: "2px inset #c0c0c0",
              backgroundColor: "#ffffff",
              padding: "10px",
              marginBottom: "8px",
            }}
        >
          <h3
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                marginBottom: "6px",
                color: "#000080",
              }}
          >
            Let's Collaborate!
          </h3>
          <p style={{ fontSize: "11px", lineHeight: "1.4", margin: "0" }}>
            I'm always interested in new opportunities and exciting projects. Whether you have a question, want to
            collaborate, or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div
            style={{
              border: "2px outset #c0c0c0",
              backgroundColor: "#ffff80",
              padding: "8px",
            }}
        >
          <div style={{ fontSize: "11px", textAlign: "center" }}>
            💡 <strong>Pro tip:</strong> I respond fastest to emails and LinkedIn messages!
          </div>
        </div>
      </div>
  )
}
