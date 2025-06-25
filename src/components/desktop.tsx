"use client"

import { useState, useEffect } from "react"
import DesktopIcon from "./desktop-icon"
import StartMenu from "./start-menu"
import Taskbar from "./taskbar"

interface DesktopProps {
  onIconClick: (windowId: string) => void
}

export default function Desktop({ onIconClick }: DesktopProps) {
  const [showStartMenu, setShowStartMenu] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const desktopIcons = [
    { id: "about", label: "About Me", icon: "📝", x: 30, y: 30 },
    { id: "projects", label: "My Projects", icon: "💼", x: 30, y: 140 },
    { id: "contact", label: "Contact", icon: "📞", x: 30, y: 250 },
    { id: "resume", label: "Resume", icon: "📄", x: 30, y: 360 },
  ]

  return (
      <>
        {/* Desktop Icons */}
        {desktopIcons.map((icon) => (
            <DesktopIcon
                key={icon.id}
                label={icon.label}
                icon={icon.icon}
                x={icon.x}
                y={icon.y}
                onClick={() => onIconClick(icon.id)}
            />
        ))}

        {showStartMenu && <StartMenu onClose={() => setShowStartMenu(false)} />}

        <Taskbar onStartClick={() => setShowStartMenu(!showStartMenu)} currentTime={currentTime} />
      </>
  )
}
