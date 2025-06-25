import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
    title: "Windows 95 Portfolio",
    description: "A retro Windows 95 themed portfolio website",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="antialiased">{children}</body>
        </html>
    )
}
