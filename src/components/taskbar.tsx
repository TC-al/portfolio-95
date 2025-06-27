"use client"

import { useState, useEffect } from "react"

interface TaskbarProps {
    onStartClick: () => void
    currentTime: Date
}

export default function Taskbar({ onStartClick, currentTime }: TaskbarProps) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40px",
                backgroundColor: "#c0c0c0",
                border: "2px outset #c0c0c0",
                borderBottom: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 8px",
                fontFamily: "MS Sans Serif, Tahoma, sans-serif",
                fontSize: "11px",
                zIndex: 1000,
                boxShadow: "0 -2px 4px rgba(0,0,0,0.1)",
            }}
        >
            <button
                className="start-button"
                style={{
                    height: "32px",
                    border: "2px outset #c0c0c0",
                    backgroundColor: "#c0c0c0",
                    fontSize: "12px",
                    fontFamily: "MS Sans Serif, Tahoma, sans-serif",
                    fontWeight: "bold",
                    padding: "0 16px",
                    cursor: "pointer",
                    color: "#000000",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    minWidth: "80px",
                }}
                onClick={onStartClick}
                onMouseDown={(e) => {
                    e.currentTarget.style.border = "2px inset #c0c0c0"
                }}
                onMouseUp={(e) => {
                    e.currentTarget.style.border = "2px outset #c0c0c0"
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.border = "2px outset #c0c0c0"
                }}
            >
                <span style={{ fontSize: "14px" }}>☢️</span>
                Start
            </button>

            <div
                style={{
                    height: "32px",
                    border: "2px inset #c0c0c0",
                    backgroundColor: "#c0c0c0",
                    fontSize: "12px",
                    fontFamily: "MS Sans Serif, Tahoma, sans-serif",
                    minWidth: "80px",
                    textAlign: "center",
                    lineHeight: "28px",
                    padding: "0 12px",
                    color: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {isClient ? currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "--:--"}
            </div>
        </div>
    )
}
