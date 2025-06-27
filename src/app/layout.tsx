import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
    title: "Portfolio 95™",
    description: "Portfolio 95™",
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
