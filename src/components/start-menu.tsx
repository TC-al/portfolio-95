"use client"

interface StartMenuProps {
    onClose: () => void
}

export default function StartMenu({ onClose }: StartMenuProps) {
    return (
        <div
            style={{
                position: "absolute",
                bottom: "28px",
                left: "0px",
                width: "200px",
                border: "2px outset #c0c0c0",
                background: "#c0c0c0",
                fontFamily: "MS Sans Serif, Tahoma, sans-serif",
                fontSize: "11px",
                zIndex: 20,
            }}
        >
            <div
                style={{
                    background: "linear-gradient(90deg, #0a246a 0%, #a6caf0 100%)",
                    color: "white",
                    padding: "8px",
                    fontWeight: "bold",
                    fontSize: "11px",
                }}
            >
                Windows 95
            </div>
            <div style={{ padding: "4px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <div
                        style={{
                            padding: "4px",
                            cursor: "pointer",
                            fontSize: "11px",
                        }}
                        className="hover:bg-blue-800 hover:text-white"
                    >
                        📝 About Me
                    </div>
                    <div
                        style={{
                            padding: "4px",
                            cursor: "pointer",
                            fontSize: "11px",
                        }}
                        className="hover:bg-blue-800 hover:text-white"
                    >
                        💼 Projects
                    </div>
                    <div
                        style={{
                            padding: "4px",
                            cursor: "pointer",
                            fontSize: "11px",
                        }}
                        className="hover:bg-blue-800 hover:text-white"
                    >
                        📞 Contact
                    </div>
                    <div
                        style={{
                            padding: "4px",
                            cursor: "pointer",
                            fontSize: "11px",
                        }}
                        className="hover:bg-blue-800 hover:text-white"
                    >
                        📄 Resume
                    </div>
                </div>
            </div>
        </div>
    )
}
