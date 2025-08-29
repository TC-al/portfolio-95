"use client"

interface MobileDesktopProps {
    onIconClick: (id: string) => void
    activeSection: string | null
}

const MobileDesktop = ({ onIconClick, activeSection }: MobileDesktopProps) => {
    const icons = [
        { id: "about", label: "About Me", icon: "👨‍🎓" },
        { id: "projects", label: "Projects", icon: "💼" },
        { id: "contact", label: "Contact", icon: "📞" },
        { id: "resume", label: "Resume", icon: "📄" },
        { id: "extra", label: "Extras", icon: "🏆" },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-500 to-blue-600 p-4 flex flex-col">
            <div className="bg-gray-800 text-white p-4 rounded-lg mb-4 text-center">
                <h1 className="text-xl font-bold">Portfolio 95™ Mobile</h1>
                <p className="text-sm opacity-80">Alan Liu - Software Developer</p>
            </div>
            <div className="grid grid-cols-2 gap-4 flex-1">
                {icons.map((icon) => (
                    <button
                        key={icon.id}
                        onClick={() => onIconClick(icon.id)}
                        className={`
              bg-white rounded-lg p-6 shadow-lg flex flex-col items-center justify-center
              transition-all duration-200 active:scale-95 hover:shadow-xl
              ${activeSection === icon.id ? "bg-blue-100 border-2 border-blue-500" : ""}
            `}
                        style={{ minHeight: "120px" }}
                    >
                        <div className="text-4xl mb-2">{icon.icon}</div>
                        <span className="text-sm font-medium text-gray-800 text-center">{icon.label}</span>
                    </button>
                ))}
            </div>
            <div className="text-center text-white text-xs opacity-70 mt-4">Touch-optimized mobile version</div>
        </div>
    )
}

export default MobileDesktop