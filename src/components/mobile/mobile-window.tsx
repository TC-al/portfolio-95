"use client"

import type React from "react"

interface MobileWindowProps {
    title: string
    children: React.ReactNode
    onBack: () => void
}

const MobileWindow = ({ title, children, onBack }: MobileWindowProps) => {
    return (
        <div style={{
            minHeight: '100vh',
            background: '#f9fafb',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '14px'
        }}>
            <div style={{
                background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
                <button
                    onClick={onBack}
                    style={{
                        marginRight: '12px',
                        padding: '8px',
                        borderRadius: '50%',
                        background: 'rgba(0, 0, 0, 0.2)',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onMouseDown={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.3)'}
                    onMouseUp={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.2)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.2)'}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m15 18-6-6 6-6"/>
                    </svg>
                </button>
                <h1 style={{fontSize: '18px', fontWeight: '500'}}>{title}</h1>
            </div>

            <div style={{flex: '1', overflow: 'auto'}}>
                <div style={{padding: '24px'}}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MobileWindow