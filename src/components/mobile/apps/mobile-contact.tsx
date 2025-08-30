const MobileContact = () => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <div style={{
            background: 'white',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
            <h2 style={{fontWeight: 'bold', color: '#2563eb', marginBottom: '16px', fontSize: '18px', margin: '0 0 16px 0'}}>📞 Get In Touch</h2>
        </div>

        {[
            { icon: "📧", label: "Email", value: "tc.alanliu@gmail.com", link: "mailto:tc.alanliu@gmail.com" },
            { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/tc-alanliu", link: "https://linkedin.com/in/tc-alanliu" },
            { icon: "🙀", label: "GitHub", value: "github.com/TC-al", link: "https://github.com/TC-al" },
            { icon: "🔮", label: "Discord", value: "@yth3", link: null }
        ].map((contact, index) => (
            <div key={index} style={{
                background: 'white',
                padding: '16px',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div style={{fontSize: '24px', marginRight: '16px'}}>{contact.icon}</div>
                <div style={{flex: '1'}}>
                    <div style={{fontWeight: '500', fontSize: '14px', marginBottom: '2px'}}>{contact.label}</div>
                    {contact.link ? (
                        <a
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{color: '#2563eb', fontSize: '14px', textDecoration: 'none'}}
                        >
                            {contact.value}
                        </a>
                    ) : (
                        <div style={{color: '#2563eb', fontSize: '14px'}}>{contact.value}</div>
                    )}
                </div>
            </div>
        ))}

        <div style={{
            background: '#dcfce7',
            padding: '16px',
            borderRadius: '8px'
        }}>
            <h3 style={{fontWeight: 'bold', color: '#166534', marginBottom: '8px', fontSize: '16px', margin: '0 0 8px 0'}}>Let&apos;s Collaborate!</h3>
            <p style={{fontSize: '14px', color: '#15803d', margin: '0'}}>
                Always interested in new opportunities and projects. Feel free to reach out!
            </p>
        </div>
    </div>
)

export default MobileContact