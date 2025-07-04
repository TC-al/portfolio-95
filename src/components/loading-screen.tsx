"use client"

import { useState, useEffect } from "react"

interface LoadingScreenProps {
    onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const [currentStep, setCurrentStep] = useState(0)
    const [dots, setDots] = useState("")

    const bootSequence = [
        { text: "PCx86 v2.23", delay: 500 },
        { text: "Copyright © 2025 Alan Liu <tc.alanliu@tcal.xyz>", delay: 300 },
        { text: "License: MIT <https://www.pcjs.org/LICENSE.txt>", delay: 300 },
        { text: "Loading /machines/pcx86/compaq/deskpro386/rom/1988-01-28/1988-01-28.json5", delay: 800, dots: true },
        { text: "Loading /machines/pcx86/ibm/video/vga/1986-10-27/1986-VGA.json5", delay: 600, dots: true },
        { text: "Loading /machines/pcx86/diskettes.json", delay: 700, dots: true },
        { text: 'HDC: Type 4 "68Mb Hard Disk" is fixed disk 0', delay: 400 },
        { text: "Loading", delay: 300 },
        { text: "/harddisks/pcx86/68mb/WIN95.json", delay: 1200, dots: true },
        { text: "Loading state.json", delay: 800, dots: true },
        { text: "Busx86: 32Kb ROM at 0xF8000", delay: 200 },
        { text: "Busx86: 24Kb ROM at 0xC0000", delay: 200 },
        { text: 'HDC: Mounted disk "68Mb Hard Disk" in drive C', delay: 300 },
        { text: "Busx86: 640Kb RAM at 0x0", delay: 200 },
        { text: "RAMx86: ROM BIOS memory test has been disabled", delay: 300 },
        { text: "Busx86: 384Kb RAM at 0xFA0000", delay: 200 },
        { text: "Busx86: 4 bytes H/W at 0x80C00000", delay: 200 },
        { text: "RAMx86: COMPAQ memory at 0xFA0000", delay: 200 },
        { text: "Busx86: 3072Kb RAM at 0x100000", delay: 200 },
        { text: "RAMx86: Extended memory at 0x100000", delay: 200 },
        { text: "Busx86: 32Kb VIDEO at 0xB8000", delay: 200 },
        { text: "Initialization complete", delay: 800 },
    ]

    useEffect(() => {
        if (currentStep >= bootSequence.length) {
            setTimeout(() => onComplete(), 1000)
            return
        }

        const currentItem = bootSequence[currentStep]

        if (currentItem.dots) {
            let dotCount = 0
            const dotInterval = setInterval(() => {
                setDots(".".repeat(dotCount % 7))
                dotCount++
            }, 150)

            const timer = setTimeout(() => {
                clearInterval(dotInterval)
                setDots("")
                setCurrentStep(currentStep + 1)
            }, currentItem.delay)

            return () => {
                clearTimeout(timer)
                clearInterval(dotInterval)
            }
        } else {
            const timer = setTimeout(() => {
                setCurrentStep(currentStep + 1)
            }, currentItem.delay)

            return () => clearTimeout(timer)
        }
    }, [currentStep, onComplete])

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "#000000",
                color: "#FFFFFF",
                fontFamily: "Courier New, monospace",
                fontSize: "14px",
                padding: "20px",
                overflow: "hidden",
                zIndex: 9999,
            }}
        >
            <div style={{ whiteSpace: "pre-wrap", lineHeight: "1.2" }}>
                {bootSequence.slice(0, currentStep + 1).map((item, index) => (
                    <div key={index} style={{ marginBottom: index < 3 ? "4px" : "2px" }}>
                        {item.text}
                        {index === currentStep && item.dots && <span style={{ color: "#FFFFFF" }}>{dots}</span>}
                    </div>
                ))}
                {currentStep < bootSequence.length && (
                    <span
                        style={{
                            animation: "blink 1s infinite",
                            color: "#FFFFFF",
                        }}
                    >
            _
          </span>
                )}
            </div>

            <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
        </div>
    )
}
