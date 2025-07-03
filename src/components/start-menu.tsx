"use client"

interface StartMenuProps {
    onClose: () => void
    onItemClick: (windowId: string) => void
}

export default function StartMenu({ onClose, onItemClick }: StartMenuProps) {
    const handleShutdown = () => {
        const shutdownConfirm = confirm(
            "Are you sure you want to shut down Portfolio 95™?\n\nThis will close the current session.",
        )

        if (shutdownConfirm) {
            // Create a shutdown screen overlay
            const shutdownOverlay = document.createElement("div")
            shutdownOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000080;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'MS Sans Serif', Tahoma, sans-serif;
        font-size: 18px;
        z-index: 9999;
      `

            shutdownOverlay.innerHTML = `
        <div style="text-align: center;">
          <div style="font-size: 24px; margin-bottom: 20px;">🖥️</div>
          <div style="margin-bottom: 10px;">Portfolio 95™</div>
          <div style="font-size: 14px; margin-bottom: 30px;">It's now safe to close this browser tab</div>
          <div style="font-size: 12px; color: #c0c0c0;">
            Thank you for visiting my portfolio!<br>
            You can safely close this tab or refresh to restart.
          </div>
        </div>
      `

            document.body.appendChild(shutdownOverlay)

            setTimeout(() => {
                if (typeof window !== "undefined") {
                    window.close()

                    if (window.history.length > 1) {
                        window.history.back()
                    } else {
                        window.location.href = "about:blank"
                    }
                }
            }, 2000)
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
                    background: "#000080",
                    color: "white",
                    padding: "12px 16px",
                    fontWeight: "bold",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                }}
            >
                <img src="logo.png" alt="" height="16"/>
                Portfolio 95™
            </div>

            <div style={{ padding: "8px 4px" }}>
                <div style={{display: "flex", flexDirection: "column"}}>
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
                        <span style={{fontSize: "16px", width: "20px"}}>👨‍🎓</span>
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
                        <span style={{fontSize: "16px", width: "20px"}}>💼</span>
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
                        <span style={{fontSize: "16px", width: "20px"}}>📞</span>
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
                        <span style={{fontSize: "16px", width: "20px"}}>📄</span>
                        Resume
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
                        onClick={() => handleMenuItemClick("extra")}
                    >
                        <span style={{fontSize: "16px", width: "20px"}}>🏆</span>
                        Extras
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
                        <span style={{fontSize: "16px", width: "20px"}}>🔌</span>
                        Shut Down...
                    </div>
                </div>
            </div>
        </div>
    )
}
