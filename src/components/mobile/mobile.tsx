"use client"

import { useState, useEffect } from "react"
import MobileDesktop from "./mobile-desktop"
import MobileWindow from "./mobile-window"
import MobileAbout from "./apps/mobile-about"
import MobileProjects from "./apps/mobile-projects"
import MobileContact from "./apps/mobile-contact"
import MobileResume from "./apps/mobile-resume"
import MobileExtra from "./apps/mobile-extra"

export default function MobileApp() {
    const [activeSection, setActiveSection] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500)
        return () => clearTimeout(timer)
    }, [])

    const handleSectionClick = (sectionId: string) => {
        setActiveSection(sectionId)
    }

    const handleBack = () => {
        setActiveSection(null)
    }

    const getSectionTitle = (sectionId: string) => {
        const titles: Record<string, string> = {
            about: "About Me",
            projects: "My Projects",
            contact: "Contact Info",
            resume: "Resume",
            extra: "Extracurriculars",
        }
        return titles[sectionId] || "Section"
    }

    const renderSectionContent = (sectionId: string) => {
        switch (sectionId) {
            case "about":
                return <MobileAbout />
            case "projects":
                return <MobileProjects />
            case "contact":
                return <MobileContact />
            case "resume":
                return <MobileResume />
            case "extra":
                return <MobileExtra />
            default:
                return <div>Content not found</div>
        }
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-black text-green-400 flex items-center justify-center font-mono">
                <div className="text-center">
                    <div className="text-2xl mb-4">💻</div>
                    <div className="text-lg mb-2">Portfolio 95™</div>
                    <div className="text-sm">Loading mobile interface...</div>
                    <div className="mt-4 text-xs opacity-60">Optimized for touch</div>
                </div>
            </div>
        )
    }

    return (
        <div className="touch-manipulation select-none">
            {activeSection ? (
                <MobileWindow title={getSectionTitle(activeSection)} onBack={handleBack}>
                    {renderSectionContent(activeSection)}
                </MobileWindow>
            ) : (
                <MobileDesktop onIconClick={handleSectionClick} activeSection={activeSection} />
            )}
        </div>
    )
}
