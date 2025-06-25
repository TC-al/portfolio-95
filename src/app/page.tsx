"use client"

import { useState } from "react"
import Desktop from "../components/desktop"
import Window from "../components/window"
import AboutWindow from "../components/about-window"
import ProjectsWindow from "../components/projects-window"
import ContactWindow from "../components/contact-window"
import ResumeWindow from "../components/resume-window"

export default function Home() {
  const [openWindows, setOpenWindows] = useState<string[]>([])
  const [activeWindow, setActiveWindow] = useState<string | null>(null)

  const openWindow = (windowId: string) => {
    if (!openWindows.includes(windowId)) {
      setOpenWindows([...openWindows, windowId])
    }
    setActiveWindow(windowId)
  }

  const closeWindow = (windowId: string) => {
    setOpenWindows(openWindows.filter((id) => id !== windowId))
    if (activeWindow === windowId) {
      const remaining = openWindows.filter((id) => id !== windowId)
      setActiveWindow(remaining.length > 0 ? remaining[remaining.length - 1] : null)
    }
  }

  const focusWindow = (windowId: string) => {
    setActiveWindow(windowId)
  }

  return (
      <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#008080",
            background: "linear-gradient(45deg, #008080 0%, #20b2aa 100%)",
            fontFamily: "MS Sans Serif, Tahoma, sans-serif",
            fontSize: "11px",
            overflow: "hidden",
          }}
      >
        <Desktop onIconClick={openWindow} />

        {openWindows.map((windowId) => (
            <Window
                key={windowId}
                id={windowId}
                title={getWindowTitle(windowId)}
                isActive={activeWindow === windowId}
                onClose={() => closeWindow(windowId)}
                onFocus={() => focusWindow(windowId)}
            >
              {getWindowContent(windowId)}
            </Window>
        ))}
      </div>
  )
}

function getWindowTitle(windowId: string): string {
  const titles: Record<string, string> = {
    about: "About Me - Notepad",
    projects: "My Projects - File Explorer",
    contact: "Contact Info - Address Book",
    resume: "Resume - WordPad",
  }
  return titles[windowId] || "Window"
}

function getWindowContent(windowId: string) {
  switch (windowId) {
    case "about":
      return <AboutWindow />
    case "projects":
      return <ProjectsWindow />
    case "contact":
      return <ContactWindow />
    case "resume":
      return <ResumeWindow />
    default:
      return <div>Window content</div>
  }
}
