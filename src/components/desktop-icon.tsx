"use client"

import { useState } from "react"

interface DesktopIconProps {
    label: string
    icon: string
    x: number
    y: number
    onClick: () => void
}

export default function DesktopIcon({ label, icon, x, y, onClick }: DesktopIconProps) {
    const [isSelected, setIsSelected] = useState(false)

    return (
        <div
            style={{
                position: "absolute",
                left: x,
                top: y,
                width: "64px",
                textAlign: "center",
                cursor: "pointer",
                userSelect: "none",
                backgroundColor: isSelected ? "#0000ff" : "transparent",
                color: isSelected ? "#ffffff" : "#ffffff",
            }}
            onClick={() => {
                setIsSelected(true)
                setTimeout(() => setIsSelected(false), 200)
                onClick()
            }}
            onDoubleClick={onClick}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "4px",
                }}
            >
                <div
                    style={{
                        fontSize: "32px",
                        marginBottom: "4px",
                        filter: isSelected ? "invert(1)" : "none",
                    }}
                >
                    {icon}
                </div>
                <div
                    style={{
                        fontSize: "11px",
                        fontFamily: "MS Sans Serif, Tahoma, sans-serif",
                        textAlign: "center",
                        lineHeight: "12px",
                        textShadow: isSelected ? "none" : "1px 1px 1px rgba(0,0,0,0.8)",
                        wordWrap: "break-word",
                        maxWidth: "64px",
                        color: "#ffffff",
                    }}
                >
                    {label}
                </div>
            </div>
        </div>
    )
}
