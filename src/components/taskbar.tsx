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
                height: "28px",
                backgroundColor: "#c0c0c0",
                border: "1px solid #000000",
                borderTop: "1px solid #dfdfdf",
                borderLeft: "1px solid #dfdfdf",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 4px",
                fontFamily: "MS Sans Serif, Tahoma, sans-serif",
                fontSize: "11px",
                zIndex: 1000,
            }}
        >
            <button
                style={{
                    height: "22px",
                    border: "1px outset #c0c0c0",
                    backgroundColor: "#c0c0c0",
                    fontSize: "11px",
                    fontFamily: "MS Sans Serif, Tahoma, sans-serif",
                    fontWeight: "bold",
                    padding: "0 8px",
                    cursor: "pointer",
                    color: "#000000",
                }}
                onClick={onStartClick}
            >
                Start
            </button>

            <div
                style={{
                    height: "22px",
                    border: "1px inset #c0c0c0",
                    backgroundColor: "#c0c0c0",
                    fontSize: "11px",
                    fontFamily: "MS Sans Serif, Tahoma, sans-serif",
                    minWidth: "60px",
                    textAlign: "center",
                    lineHeight: "20px",
                    padding: "0 4px",
                    color: "#000000",
                }}
            >
                {isClient ? currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "--:--"}
            </div>
        </div>
    )
}
