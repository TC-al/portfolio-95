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
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)
  const windowRef = useRef<HTMLDivElement>(null)

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

  if (!isClient) {
    return null
  }

  return (
      <div
          ref={windowRef}
          className={`absolute bg-gray-200 border-2 border-gray-400 shadow-lg ${isActive ? "z-10" : "z-0"}`}
          style={{
            left: position.x,
            top: position.y,
            width: "650px",
            height: "500px",
            borderStyle: "outset",
          }}
          onClick={onFocus}
      >
        <div
            className={`window-header flex items-center justify-between px-3 py-2 cursor-move ${
                isActive ? "bg-blue-600 text-white" : "bg-gray-400 text-black"
            }`}
            onMouseDown={handleMouseDown}
        >
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-gray-300 border border-gray-500" style={{ borderStyle: "inset" }}></div>
            <span className="text-base font-sans">{title}</span>
          </div>
          <button
              className="w-8 h-8 bg-gray-300 border border-gray-500 text-black text-base font-bold hover:bg-gray-400"
              style={{ borderStyle: "outset" }}
              onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="p-6 h-full overflow-auto bg-white" style={{ height: "calc(100% - 40px)" }}>
          {children}
        </div>
      </div>
  )
}
