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
  // Fix: Use consistent initial position to avoid hydration mismatch
  const [position, setPosition] = useState({ x: 100, y: 50 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)
  const windowRef = useRef<HTMLDivElement>(null)

  // Fix: Set random position only on client side after hydration
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, dragOffset])

  // Don't render until client-side hydration is complete
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
            width: "480px",
            height: "360px",
            border: "2px outset #c0c0c0",
            background: "#c0c0c0",
          }}
          onClick={onFocus}
      >
        {/* Title Bar */}
        <div
            className={`window-header flex items-center justify-between px-2 py-1 cursor-move ${
                isActive ? "text-white" : "text-black"
            }`}
            style={{
              height: "18px",
              background: isActive ? "linear-gradient(90deg, #0a246a 0%, #a6caf0 100%)" : "#c0c0c0",
              fontSize: "11px",
              fontFamily: "MS Sans Serif, Tahoma, sans-serif",
              fontWeight: "bold",
            }}
            onMouseDown={handleMouseDown}
        >
          <span>{title}</span>
          <button
              className="text-black font-bold leading-none"
              style={{
                width: "16px",
                height: "14px",
                border: "1px outset #c0c0c0",
                background: "#c0c0c0",
                fontSize: "11px",
                fontFamily: "MS Sans Serif, Tahoma, sans-serif",
              }}
              onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Window Content */}
        <div
            className="overflow-auto"
            style={{
              height: "calc(100% - 18px)",
              background: "#ffffff",
              border: "1px inset #c0c0c0",
              padding: "8px",
            }}
        >
          {children}
        </div>
      </div>
  )
}
