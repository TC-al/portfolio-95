export default function AboutWindow() {
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
                    border: "2px inset #c0c0c0",
                    backgroundColor: "#ffffff",
                    padding: "12px",
                    marginBottom: "8px",
                    minHeight: "80px",
                    boxSizing: "border-box",
                }}
            >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
                    <div style={{ fontSize: "48px", lineHeight: "1", flexShrink: 0 }}>👨‍💻</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <h2
                            style={{
                                fontSize: "14px",
                                fontWeight: "bold",
                                marginBottom: "8px",
                                color: "#000080",
                                wordWrap: "break-word",
                                margin: "0 0 8px 0",
                            }}
                        >
                            Hello, I'm (Tsz Chai) Alan Liu
                        </h2>
                        <p style={{ fontSize: "11px", lineHeight: "1.4", margin: "0", wordWrap: "break-word" }}>
                            Welcome to my retro portfolio! I'm a passionate developer who loves creating innovative solutions and
                            bringing ideas to life through code.
                        </p>
                    </div>
                </div>
            </div>

            <div
                style={{
                    border: "2px inset #c0c0c0",
                    backgroundColor: "#ffffff",
                    padding: "12px",
                    marginBottom: "8px",
                    minHeight: "60px",
                    boxSizing: "border-box",
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
                        margin: "0 0 8px 0",
                    }}
                >
                    Background
                </h3>
                <p style={{ fontSize: "11px", lineHeight: "1.4", margin: "0", wordWrap: "break-word" }}>
                    I specialize in full-stack development with expertise in React, Next.js, Node.js, and various databases. I'm
                    always eager to learn new technologies and take on challenging projects.
                </p>
            </div>

            <div
                style={{
                    border: "2px inset #c0c0c0",
                    backgroundColor: "#ffffff",
                    padding: "12px",
                    minHeight: "80px",
                    boxSizing: "border-box",
                    marginBottom: "0",
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
                        margin: "0 0 8px 0",
                    }}
                >
                    Fun Facts
                </h3>
                <div style={{ fontSize: "11px", lineHeight: "1.6", margin: "0" }}>
                    <div style={{ marginBottom: "2px" }}>• I love retro computing and 90s aesthetics</div>
                    <div style={{ marginBottom: "2px" }}>• Coffee enthusiast ☕</div>
                    <div style={{ marginBottom: "2px" }}>• Open source contributor</div>
                    <div style={{ marginBottom: "0" }}>• Always learning something new</div>
                </div>
            </div>
        </div>
    )
}
