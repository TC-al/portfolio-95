"use client"

import { useState, useEffect } from "react"
import DesktopIcon from "./desktop-icon"
import StartMenu from "./start-menu"
import Taskbar from "./taskbar"

interface DesktopProps {
  onIconClick: (windowId: string) => void
  openWindows: string[]
  activeWindow: string | null
  onWindowClick: (windowId: string) => void
}

export default function Desktop({ onIconClick, openWindows, activeWindow, onWindowClick }: DesktopProps) {
  const [showStartMenu, setShowStartMenu] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (showStartMenu && !target.closest(".start-menu") && !target.closest(".start-button")) {
        setShowStartMenu(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [showStartMenu])

  const desktopIcons = [
    { id: "about", label: "About Me", icon: "👨‍🎓", x: 30, y: 30 },
    { id: "projects", label: "Projects", icon: "💼", x: 30, y: 140 },
    { id: "contact", label: "Contact", icon: "📞", x: 30, y: 250 },
    { id: "resume", label: "Resume", icon: "📄", x: 30, y: 360 },
    { id: "extra", label: "Extras", icon: "🌟", x: 30, y: 470 },
  ]

  return (
      <>
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

        {showStartMenu && (
            <div className="start-menu">
              <StartMenu onClose={() => setShowStartMenu(false)} onItemClick={onIconClick} />
            </div>
        )}

        <Taskbar
            onStartClick={() => setShowStartMenu(!showStartMenu)}
            currentTime={currentTime}
            openWindows={openWindows}
            activeWindow={activeWindow}
            onWindowClick={onWindowClick}
        />
      </>
  )
}
