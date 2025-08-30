const MobileContact = () => (
    <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold text-blue-600 mb-4">📞 Get In Touch</h2>
        </div>

        {[
            { icon: "📧", label: "Email", value: "tc.alanliu@gmail.com", link: "mailto:tc.alanliu@gmail.com" },
            { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/tc-alanliu", link: "https://linkedin.com/in/tc-alanliu" },
            { icon: "🙀", label: "GitHub", value: "github.com/TC-al", link: "https://github.com/TC-al" },
            { icon: "🔮", label: "Discord", value: "@yth3", link: null }
        ].map((contact, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow flex items-center">
                <div className="text-2xl mr-4">{contact.icon}</div>
                <div className="flex-1">
                    <div className="font-medium text-sm">{contact.label}</div>
                    {contact.link ? (
                        <a
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 text-sm"
                        >
                            {contact.value}
                        </a>
                    ) : (
                        <div className="text-blue-600 text-sm">{contact.value}</div>
                    )}
                </div>
            </div>
        ))}

        <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 mb-2">Let&apos;s Collaborate!</h3>
            <p className="text-sm text-green-700">
                Always interested in new opportunities and projects. Feel free to reach out!
            </p>
        </div>
    </div>
)

export default MobileContact