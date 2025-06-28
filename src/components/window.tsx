"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"

interface WindowProps {
    id: string
    title: string
    children: React.ReactNode
    isActive: boolean
    onClose: () => void
    onFocus: () => void
}

export default function Window({ id, title, children, isActive, onClose, onFocus }: WindowProps) {
    const [position, setPosition] = useState({ x: 100, y: 50 })
    const [size, setSize] = useState({ width: 480, height: 360 })
    const [isDragging, setIsDragging] = useState(false)
    const [isResizing, setIsResizing] = useState(false)
    const [resizeDirection, setResizeDirection] = useState("")
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
    const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 })
    const [isClient, setIsClient] = useState(false)
    const windowRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    const minSize = { width: 300, height: 200 }
    const maxSize = { width: 800, height: 600 }

    useEffect(() => {
        setIsClient(true)
        setPosition({
            x: 100 + Math.random() * 200,
            y: 50 + Math.random() * 100,
        })
    }, [])

    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains("window-header")) {
            setIsDragging(true)
            setDragOffset({
                x: e.clientX - position.x,
                y: e.clientY - position.y,
            })
            onFocus()
        }
    }

    const handleResizeStart = (e: React.MouseEvent, direction: string) => {
        e.preventDefault()
        e.stopPropagation()
        setIsResizing(true)
        setResizeDirection(direction)
        setResizeStart({
            x: e.clientX,
            y: e.clientY,
            width: size.width,
            height: size.height,
        })
        onFocus()
    }

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging) {
                setPosition({
                    x: Math.max(0, e.clientX - dragOffset.x),
                    y: Math.max(0, e.clientY - dragOffset.y),
                })
            } else if (isResizing) {
                const deltaX = e.clientX - resizeStart.x
                const deltaY = e.clientY - resizeStart.y

                let newWidth = resizeStart.width
                let newHeight = resizeStart.height
                let newX = position.x
                let newY = position.y

                if (resizeDirection.includes("right")) {
                    newWidth = Math.max(minSize.width, Math.min(maxSize.width, resizeStart.width + deltaX))
                }
                if (resizeDirection.includes("left")) {
                    const widthChange =
                        Math.max(minSize.width, Math.min(maxSize.width, resizeStart.width - deltaX)) - resizeStart.width
                    newWidth = resizeStart.width - widthChange
                    newX = position.x - widthChange
                }
                if (resizeDirection.includes("bottom")) {
                    newHeight = Math.max(minSize.height, Math.min(maxSize.height, resizeStart.height + deltaY))
                }
                if (resizeDirection.includes("top")) {
                    const heightChange =
                        Math.max(minSize.height, Math.min(maxSize.height, resizeStart.height - deltaY)) - resizeStart.height
                    newHeight = resizeStart.height - heightChange
                    newY = position.y - heightChange
                }

                setSize({ width: newWidth, height: newHeight })
                if (resizeDirection.includes("left") || resizeDirection.includes("top")) {
                    setPosition({ x: newX, y: newY })
                }
            }
        }

        const handleMouseUp = () => {
            setIsDragging(false)
            setIsResizing(false)
            setResizeDirection("")
        }

        if (isDragging || isResizing) {
            document.addEventListener("mousemove", handleMouseMove)
            document.addEventListener("mouseup", handleMouseUp)
        }

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)
        }
    }, [isDragging, isResizing, dragOffset, resizeStart, resizeDirection, position])

    if (!isClient) {
        return null
    }

    return (
        <div
            ref={windowRef}
            className={`absolute shadow-lg ${isActive ? "z-10" : "z-0"}`}
            style={{
                left: position.x,
                top: position.y,
                width: size.width,
                height: size.height,
                border: "2px outset #c0c0c0",
                background: "#c0c0c0",
                userSelect: isResizing || isDragging ? "none" : "auto",
            }}
            onClick={onFocus}
        >
            <div
                className="window-header"
                style={{
                    height: "18px",
                    background: isActive ? "linear-gradient(90deg, #0a246a 0%, #a6caf0 100%)" : "#c0c0c0",
                    fontSize: "11px",
                    fontFamily: "MS Sans Serif, Tahoma, sans-serif",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 4px",
                    cursor: "move",
                    color: isActive ? "#ffffff" : "#000000",
                }}
                onMouseDown={handleMouseDown}
            >
        <span
            style={{
                color: isActive ? "#ffffff" : "#000000",
                fontSize: "11px",
                fontFamily: "MS Sans Serif, Tahoma, sans-serif",
                fontWeight: "bold",
            }}
        >
          {title}
        </span>
                <button
                    style={{
                        width: "16px",
                        height: "14px",
                        border: "1px outset #c0c0c0",
                        background: "#c0c0c0",
                        fontSize: "11px",
                        fontFamily: "MS Sans Serif, Tahoma, sans-serif",
                        fontWeight: "bold",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000000",
                        padding: "0",
                        lineHeight: "1",
                    }}
                    onClick={onClose}
                    onMouseDown={(e) => e.stopPropagation()}
                >
                    ×
                </button>
            </div>

            <div
                ref={contentRef}
                className="window-content-scrollable"
                style={{
                    height: "calc(100% - 18px)",
                    background: "#ffffff",
                    border: "1px inset #c0c0c0",
                    position: "relative",
                    overflow: "auto",
                    boxSizing: "border-box",
                }}
            >
                {children}
            </div>

            {/* Resize handles */}
            <div
                style={{
                    position: "absolute",
                    top: -2,
                    left: -2,
                    width: "8px",
                    height: "8px",
                    cursor: "nw-resize",
                    zIndex: 10,
                }}
                onMouseDown={(e) => handleResizeStart(e, "top-left")}
            />
            <div
                style={{
                    position: "absolute",
                    top: -2,
                    right: -2,
                    width: "8px",
                    height: "8px",
                    cursor: "ne-resize",
                    zIndex: 10,
                }}
                onMouseDown={(e) => handleResizeStart(e, "top-right")}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: -2,
                    left: -2,
                    width: "8px",
                    height: "8px",
                    cursor: "sw-resize",
                    zIndex: 10,
                }}
                onMouseDown={(e) => handleResizeStart(e, "bottom-left")}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: -2,
                    right: -2,
                    width: "8px",
                    height: "8px",
                    cursor: "se-resize",
                    zIndex: 10,
                    background: "#c0c0c0",
                    border: "1px outset #c0c0c0",
                }}
                onMouseDown={(e) => handleResizeStart(e, "bottom-right")}
            />

            <div
                style={{
                    position: "absolute",
                    top: -2,
                    left: "8px",
                    right: "8px",
                    height: "4px",
                    cursor: "n-resize",
                    zIndex: 9,
                }}
                onMouseDown={(e) => handleResizeStart(e, "top")}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: -2,
                    left: "8px",
                    right: "8px",
                    height: "4px",
                    cursor: "s-resize",
                    zIndex: 9,
                }}
                onMouseDown={(e) => handleResizeStart(e, "bottom")}
            />
            <div
                style={{
                    position: "absolute",
                    left: -2,
                    top: "8px",
                    bottom: "8px",
                    width: "4px",
                    cursor: "w-resize",
                    zIndex: 9,
                }}
                onMouseDown={(e) => handleResizeStart(e, "left")}
            />
            <div
                style={{
                    position: "absolute",
                    right: -2,
                    top: "8px",
                    bottom: "8px",
                    width: "4px",
                    cursor: "e-resize",
                    zIndex: 9,
                }}
                onMouseDown={(e) => handleResizeStart(e, "right")}
            />

            <div
                style={{
                    position: "absolute",
                    bottom: "1px",
                    right: "1px",
                    width: "12px",
                    height: "12px",
                    background: "repeating-linear-gradient(45deg, #808080 0px, #808080 1px, transparent 1px, transparent 2px)",
                    cursor: "se-resize",
                    zIndex: 11,
                }}
                onMouseDown={(e) => handleResizeStart(e, "bottom-right")}
            />
        </div>
    )
}
