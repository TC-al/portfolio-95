"use client"

import type React from "react"

interface MobileWindowProps {
    title: string
    children: React.ReactNode
    onBack: () => void
}

const MobileWindow = ({ title, children, onBack }: MobileWindowProps) => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <div className="bg-blue-600 text-white p-4 flex items-center shadow-lg">
                <button onClick={onBack} className="mr-3 p-2 rounded-full bg-blue-700 active:bg-blue-800 transition-colors">
                    ←
                </button>
                <h1 className="text-lg font-bold">{title}</h1>
            </div>
            <div className="flex-1 overflow-auto p-4">{children}</div>
        </div>
    )
}

export default MobileWindow