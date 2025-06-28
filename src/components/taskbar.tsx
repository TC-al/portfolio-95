"use client"

import { useState, useEffect } from "react"

interface TaskbarProps {
    onStartClick: () => void
    currentTime: Date
    openWindows: string[]
    activeWindow: string | null
    onWindowClick: (windowId: string) => void
}

export default function Taskbar({ onStartClick, currentTime, openWindows, activeWindow, onWindowClick }: TaskbarProps) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const getWindowTitle = (windowId: string): string => {
        const titles: Record<string, string> = {
            about: "About Me",
            projects: "My Projects",
            contact: "Contact Info",
            resume: "Resume",
        }
        return titles[windowId] || "Window"
    }

    const getWindowIcon = (windowId: string): string => {
        const icons: Record<string, string> = {
            about: "👨‍🎓",
            projects: "💼",
            contact: "📞",
            resume: "📄",
        }
        return icons[windowId] || "🪟"
    }

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
            <div style={{ display: "flex", alignItems: "center", gap: "2px", flex: 1 }}>
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
                        flexShrink: 0,
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
                    <span style={{ fontSize: "14px" }}>🪟</span>
                    Start
                </button>

                <div
                    style={{
                        width: "4px",
                        height: "32px",
                        borderLeft: "2px solid #808080",
                        borderRight: "2px solid #ffffff",
                        margin: "0 4px",
                    }}
                />

                <div style={{ display: "flex", alignItems: "center", gap: "2px", flex: 1, overflow: "hidden" }}>
                    {openWindows.map((windowId) => (
                        <button
                            key={windowId}
                            style={{
                                height: "32px",
                                border: activeWindow === windowId ? "2px inset #c0c0c0" : "2px outset #c0c0c0",
                                backgroundColor: "#c0c0c0",
                                fontSize: "11px",
                                fontFamily: "MS Sans Serif, Tahoma, sans-serif",
                                padding: "0 12px",
                                cursor: "pointer",
                                color: "#000000",
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                minWidth: "160px",
                                maxWidth: "220px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                flexShrink: 1,
                            }}
                            onClick={() => onWindowClick(windowId)}
                            onMouseDown={(e) => {
                                if (activeWindow !== windowId) {
                                    e.currentTarget.style.border = "2px inset #c0c0c0"
                                }
                            }}
                            onMouseUp={(e) => {
                                if (activeWindow !== windowId) {
                                    e.currentTarget.style.border = "2px outset #c0c0c0"
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeWindow !== windowId) {
                                    e.currentTarget.style.border = "2px outset #c0c0c0"
                                }
                            }}
                        >
                            <span style={{ fontSize: "12px", flexShrink: 0 }}>{getWindowIcon(windowId)}</span>
                            <span
                                style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    fontSize: "11px",
                                }}
                            >
                {getWindowTitle(windowId)}
              </span>
                        </button>
                    ))}
                </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <div
                    style={{
                        width: "4px",
                        height: "32px",
                        borderLeft: "2px solid #808080",
                        borderRight: "2px solid #ffffff",
                        margin: "0 4px",
                    }}
                />

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
                        flexShrink: 0,
                    }}
                >
                    {isClient ? currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "--:--"}
                </div>
            </div>
        </div>
    )
}
