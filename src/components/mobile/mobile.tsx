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
        const timer = setTimeout(() => setIsLoading(false), 2000)
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
                return <div style={{textAlign: 'center', color: '#6b7280'}}>Content not found</div>
        }
    }

    if (isLoading) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'system-ui, monospace',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}>
                <div style={{textAlign: 'center', color: 'white'}}>
                    <div style={{
                        fontSize: '64px',
                        marginBottom: '16px'
                    }}>💻</div>
                    <div style={{fontSize: '32px', marginBottom: '8px', fontWeight: '300'}}>Portfolio 95™</div>
                    <div style={{fontSize: '14px', opacity: '0.8'}}>Loading mobile interface...</div>
                    <div style={{marginTop: '16px', fontSize: '12px', opacity: '0.6'}}>Optimized for touch</div>

                    <div style={{marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '4px'}}>
                        <div style={{
                            width: '8px',
                            height: '8px',
                            background: 'white',
                            borderRadius: '50%'
                        }}></div>
                        <div style={{
                            width: '8px',
                            height: '8px',
                            background: 'white',
                            borderRadius: '50%',
                            opacity: '0.7'
                        }}></div>
                        <div style={{
                            width: '8px',
                            height: '8px',
                            background: 'white',
                            borderRadius: '50%',
                            opacity: '0.5'
                        }}></div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={{
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none'
        }}>
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