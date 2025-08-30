"use client"

import { useState, useEffect } from "react"

interface MobileDesktopProps {
    onIconClick: (id: string) => void
    activeSection: string | null
}

const MobileDesktop = ({ onIconClick, activeSection }: MobileDesktopProps) => {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const mainApps = [
        { id: "about", label: "About", icon: "👨‍🎓", gradient: "linear-gradient(135deg, #ff6b6b, #ee5a24)" },
        { id: "projects", label: "Projects", icon: "💼", gradient: "linear-gradient(135deg, #4834d4, #686de0)" },
        { id: "contact", label: "Contact", icon: "📞", gradient: "linear-gradient(135deg, #00d2d3, #54a0ff)" },
        { id: "extra", label: "More", icon: "🏆", gradient: "linear-gradient(135deg, #feca57, #ff9ff3)" },
    ]

    /*const dockApps = [
        { id: "resume", label: "Resume", icon: "📄", gradient: "linear-gradient(135deg, #ff9ff3, #f368e0)" },
        { id: "extra", label: "Awards", icon: "🏆", gradient: "linear-gradient(135deg, #feca57, #ff9ff3)" },
    ]*/

    return (
        <div
            style={{
                minHeight: '100vh',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: '14px'
            }}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'white',
                fontSize: '14px',
                padding: '8px 24px',
                fontWeight: '500'
            }}>
                <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                    <span>{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                    <div style={{display: 'flex', gap: '4px'}}>
                        <div style={{width: '4px', height: '4px', background: 'white', borderRadius: '50%'}}></div>
                        <div style={{width: '4px', height: '4px', background: 'white', borderRadius: '50%'}}></div>
                        <div style={{width: '4px', height: '4px', background: 'white', borderRadius: '50%'}}></div>
                        <div style={{width: '4px', height: '4px', background: 'white', borderRadius: '50%'}}></div>
                    </div>
                    <span style={{fontSize: '12px'}}>📶</span>
                    <span style={{fontSize: '12px'}}>📱</span>
                    <span style={{fontSize: '12px'}}>🔋</span>
                </div>
            </div>

            <div style={{margin: '32px 24px 48px', textAlign: 'center', color: 'white'}}>
                <div style={{fontSize: '64px', marginBottom: '8px'}}>💻</div>
                <div style={{fontSize: '36px', fontWeight: '300', marginBottom: '4px'}}>Portfolio 95™</div>
                <div style={{fontSize: '18px', opacity: '0.9'}}>Alan Liu - Software Developer</div>
                <div style={{fontSize: '14px', opacity: '0.75', marginTop: '8px'}}>TAP TO EXPLORE</div>
            </div>

            <div style={{margin: '0 24px 32px'}}>
                <div style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '24px',
                    padding: '12px 24px',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <span style={{color: 'white', opacity: '0.7', marginRight: '12px'}}>🔍</span>
                    <span style={{color: 'white', opacity: '0.7', flex: '1'}}>Search portfolio...</span>
                    <span style={{color: 'white', opacity: '0.7'}}>🎤</span>
                </div>
            </div>

            <div style={{margin: '0 24px 24px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    {mainApps.map((app) => (
                        <button
                            key={app.id}
                            onClick={() => onIconClick(app.id)}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                transform: activeSection === app.id ? 'scale(1.1)' : 'scale(1)',
                                transition: 'transform 0.2s ease'
                            }}
                            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                            onMouseUp={(e) => e.currentTarget.style.transform = activeSection === app.id ? 'scale(1.1)' : 'scale(1)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = activeSection === app.id ? 'scale(1.1)' : 'scale(1)'}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '24px',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                background: app.gradient
                            }}>
                                {app.icon}
                            </div>
                            <span style={{color: 'white', fontSize: '12px', fontWeight: '500'}}>{app.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px'}}>
                <div style={{width: '8px', height: '8px', background: 'white', borderRadius: '50%'}}></div>
                <div style={{width: '8px', height: '8px', background: 'rgba(255, 255, 255, 0.5)', borderRadius: '50%'}}></div>
                <div style={{width: '8px', height: '8px', background: 'rgba(255, 255, 255, 0.5)', borderRadius: '50%'}}></div>
            </div>

            <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                background: 'rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(10px)'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '16px 32px',
                    gap: '48px'
                }}>
                    <button
                        onClick={() => onIconClick('resume')}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '4px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            transform: activeSection === 'resume' ? 'scale(1.1)' : 'scale(1)',
                            transition: 'transform 0.2s ease'
                        }}
                        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                        onMouseUp={(e) => e.currentTarget.style.transform = activeSection === 'resume' ? 'scale(1.1)' : 'scale(1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = activeSection === 'resume' ? 'scale(1.1)' : 'scale(1)'}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '20px',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                            background: 'linear-gradient(135deg, #ff9ff3, #f368e0)'
                        }}>
                            📄
                        </div>
                        <span style={{color: 'white', fontSize: '12px', fontWeight: '500'}}>Resume</span>
                    </button>

                    <button
                        onClick={() => onIconClick('extra')}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '4px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            transform: activeSection === 'extra' ? 'scale(1.1)' : 'scale(1)',
                            transition: 'transform 0.2s ease'
                        }}
                        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                        onMouseUp={(e) => e.currentTarget.style.transform = activeSection === 'extra' ? 'scale(1.1)' : 'scale(1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = activeSection === 'extra' ? 'scale(1.1)' : 'scale(1)'}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '20px',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                            background: 'linear-gradient(135deg, #feca57, #ff9ff3)'
                        }}>
                            🏆
                        </div>
                        <span style={{color: 'white', fontSize: '12px', fontWeight: '500'}}>Extras</span>
                    </button>

                    <button style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        opacity: '0.7',
                        transition: 'transform 0.2s ease'
                    }}
                            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '20px',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                            background: 'linear-gradient(135deg, #48dbfb, #0abde3)'
                        }}>
                            ⚙️
                        </div>
                        <span style={{color: 'white', fontSize: '12px', fontWeight: '500'}}>Settings</span>
                    </button>
                </div>

                <div style={{display: 'flex', justifyContent: 'center', paddingBottom: '8px'}}>
                    <div style={{width: '128px', height: '4px', background: 'rgba(255, 255, 255, 0.3)', borderRadius: '2px'}}></div>
                </div>
            </div>
        </div>
    )
}

export default MobileDesktop