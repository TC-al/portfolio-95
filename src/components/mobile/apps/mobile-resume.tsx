const MobileResume = () => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <div style={{
            background: 'white',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <h2 style={{fontWeight: 'bold', color: '#2563eb', fontSize: '18px', margin: '0'}}>📄 Resume</h2>
            <a
                href="/AlanLiuResume.pdf"
                download="AlanLiuResume.pdf"
                style={{
                    background: '#2563eb',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    textDecoration: 'none',
                    cursor: 'pointer'
                }}
            >
                Download PDF
            </a>
        </div>

        <div style={{
            background: 'white',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
            <h3 style={{fontWeight: 'bold', color: '#2563eb', marginBottom: '12px', fontSize: '16px', margin: '0 0 12px 0'}}>💼 Experience</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                <div>
                    <div style={{fontWeight: '500', fontSize: '14px'}}>Research Assistant</div>
                    <div style={{fontSize: '12px', color: '#6b7280'}}>University of Toronto Mississauga • Jun 2025 — Present</div>
                    <div style={{fontSize: '12px', marginTop: '4px'}}>ML research under Dr. Rutwa Engineer</div>
                </div>
                <div>
                    <div style={{fontWeight: '500', fontSize: '14px'}}>Lead Web Developer</div>
                    <div style={{fontSize: '12px', color: '#6b7280'}}>Ember Hacks • Jun 2025 — Present</div>
                    <div style={{fontSize: '12px', marginTop: '4px'}}>Built React/Next.js websites with Three.js</div>
                </div>
            </div>
        </div>

        <div style={{
            background: 'white',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
            <h3 style={{fontWeight: 'bold', color: '#2563eb', marginBottom: '12px', fontSize: '16px', margin: '0 0 12px 0'}}>🎓 Education</h3>
            <div>
                <div style={{fontWeight: '500', fontSize: '14px'}}>Abbey Park High School</div>
                <div style={{fontSize: '12px', color: '#6b7280'}}>Junior • Expected 2027</div>
                <div style={{fontSize: '12px'}}>Honour&apos;s Roll 23-25 • GPA: 4.0/4.0</div>
            </div>
        </div>

        <div style={{
            background: 'white',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
            <h3 style={{fontWeight: 'bold', color: '#2563eb', marginBottom: '12px', fontSize: '16px', margin: '0 0 12px 0'}}>🏆 Awards</h3>
            <div style={{fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '4px'}}>
                <div>• Entertainment Track Winner - PennApps</div>
                <div>• Best UI/UX - Hack The Ridge 2024</div>
                <div>• Best Hack for Social Cause - Hack404</div>
                <div>• Distinction: Pascal, Cayley, COMC, Galois</div>
            </div>
        </div>
    </div>
)

export default MobileResume