"use client"

interface StartMenuProps {
  onClose: () => void
}

export default function StartMenu({ onClose }: StartMenuProps) {
  return (
      <div
          className="absolute shadow-lg z-20"
          style={{
            bottom: "28px",
            left: "0px",
            width: "200px",
            border: "2px outset #c0c0c0",
            background: "#c0c0c0",
            fontFamily: "MS Sans Serif, Tahoma, sans-serif",
            fontSize: "11px",
          }}
      >
        <div
            className="text-white p-2 font-bold"
            style={{
              background: "linear-gradient(90deg, #0a246a 0%, #a6caf0 100%)",
              fontSize: "11px",
            }}
        >
          Windows 95
        </div>
        <div className="p-1">
          <div className="space-y-1">
            <div className="hover:bg-blue-800 hover:text-white p-1 cursor-pointer text-xs">📝 About Me</div>
            <div className="hover:bg-blue-800 hover:text-white p-1 cursor-pointer text-xs">💼 Projects</div>
            <div className="hover:bg-blue-800 hover:text-white p-1 cursor-pointer text-xs">📞 Contact</div>
            <div className="hover:bg-blue-800 hover:text-white p-1 cursor-pointer text-xs">📄 Resume</div>
          </div>
        </div>
      </div>
  )
}
