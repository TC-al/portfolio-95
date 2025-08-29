"use client"

import { useState, useEffect } from "react"
import LoadingScreen from "../components/loading-screen"
import Desktop from "../components/desktop"
import Window from "../components/window"
import AboutWindow from "../components/windows/about-window"
import ProjectsWindow from "../components/windows/projects-window"
import ContactWindow from "../components/windows/contact-window"
import ResumeWindow from "../components/windows/resume-window"
import ExtraWindow from "../components/windows/extra-window"
import MobileApp from "../components/mobile/mobile"

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth < 1400)
        }

        checkDevice()
        window.addEventListener("resize", checkDevice)
        return () => window.removeEventListener("resize", checkDevice)
    }, [])

    return isMobile
}

export default function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const [openWindows, setOpenWindows] = useState<string[]>([])
    const [activeWindow, setActiveWindow] = useState<string | null>(null)
    const isMobile = useIsMobile()

    const handleLoadingComplete = () => {
        setIsLoading(false)
    }

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

    if (isLoading) {
        return <LoadingScreen onComplete={handleLoadingComplete} />
    }

    if (isMobile) {
        return <MobileApp />
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
            <Desktop
                onIconClick={openWindow}
                openWindows={openWindows}
                activeWindow={activeWindow}
                onWindowClick={focusWindow}
            />

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
        about: "About Me",
        projects: "My Projects",
        contact: "Contact Info",
        resume: "Resume",
        extra: "Extracurriculars",
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
        case "extra":
            return <ExtraWindow />
        default:
            return <div>How on Earth did you get here... Please send an attached screenshot to tc.alanliu@gmail.com</div>
    }
}
