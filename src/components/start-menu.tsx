"use client"

interface StartMenuProps {
    onClose: () => void
    onItemClick: (windowId: string) => void
}

export default function StartMenu({ onClose, onItemClick }: StartMenuProps) {
    const handleShutdown = () => {
        if (typeof window !== "undefined") {
            window.close()
        }
    }

    const handleMenuItemClick = (windowId: string) => {
        onItemClick(windowId)
        onClose()
    }

    return (
        <div
            style={{
                position: "absolute",
                bottom: "40px",
                left: "0px",
                width: "280px",
                border: "2px outset #c0c0c0",
                background: "#c0c0c0",
                fontFamily: "MS Sans Serif, Tahoma, sans-serif",
                fontSize: "11px",
                zIndex: 20,
                boxShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
        >
            <div
                style={{
                    background: "linear-gradient(90deg, #0a246a 0%, #a6caf0 100%)",
                    color: "white",
                    padding: "12px 16px",
                    fontWeight: "bold",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                }}
            >
                <span style={{ fontSize: "16px" }}>🪟</span>
                Portfolio 95™
            </div>

            <div style={{ padding: "8px 4px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            padding: "8px 16px",
                            cursor: "pointer",
                            fontSize: "11px",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            borderRadius: "0",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#0000ff"
                            e.currentTarget.style.color = "#ffffff"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent"
                            e.currentTarget.style.color = "#000000"
                        }}
                        onClick={() => handleMenuItemClick("about")}
                    >
                        <span style={{ fontSize: "16px", width: "20px" }}>👨‍🎓</span>
                        About Me
                    </div>

                    <div
                        style={{
                            padding: "8px 16px",
                            cursor: "pointer",
                            fontSize: "11px",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#0000ff"
                            e.currentTarget.style.color = "#ffffff"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent"
                            e.currentTarget.style.color = "#000000"
                        }}
                        onClick={() => handleMenuItemClick("projects")}
                    >
                        <span style={{ fontSize: "16px", width: "20px" }}>💼</span>
                        Projects
                    </div>

                    <div
                        style={{
                            padding: "8px 16px",
                            cursor: "pointer",
                            fontSize: "11px",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#0000ff"
                            e.currentTarget.style.color = "#ffffff"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent"
                            e.currentTarget.style.color = "#000000"
                        }}
                        onClick={() => handleMenuItemClick("contact")}
                    >
                        <span style={{ fontSize: "16px", width: "20px" }}>📞</span>
                        Contact
                    </div>

                    <div
                        style={{
                            padding: "8px 16px",
                            cursor: "pointer",
                            fontSize: "11px",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#0000ff"
                            e.currentTarget.style.color = "#ffffff"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent"
                            e.currentTarget.style.color = "#000000"
                        }}
                        onClick={() => handleMenuItemClick("resume")}
                    >
                        <span style={{ fontSize: "16px", width: "20px" }}>📄</span>
                        Resume
                    </div>

                    <div
                        style={{
                            height: "1px",
                            backgroundColor: "#808080",
                            margin: "8px 12px",
                            borderTop: "1px solid #404040",
                            borderBottom: "1px solid #ffffff",
                        }}
                    />

                    <div
                        style={{
                            padding: "8px 16px",
                            cursor: "pointer",
                            fontSize: "11px",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#0000ff"
                            e.currentTarget.style.color = "#ffffff"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent"
                            e.currentTarget.style.color = "#000000"
                        }}
                        onClick={handleShutdown}
                    >
                        <span style={{ fontSize: "16px", width: "20px" }}>🔌</span>
                        Shut Down...
                    </div>
                </div>
            </div>
        </div>
    )
}
