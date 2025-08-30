const MobileAbout = () => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <div style={{
            background: 'white',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '16px'}}>
                <div style={{fontSize: '32px', marginRight: '16px'}}>👨‍💻</div>
                <div>
                    <h2 style={{fontSize: '18px', fontWeight: 'bold', color: '#2563eb', margin: '0 0 4px 0'}}>Hello, I&apos;m Alan Liu</h2>
                    <p style={{fontSize: '14px', color: '#6b7280', margin: '0'}}>15-year-old Developer from GTA</p>
                </div>
            </div>
            <p style={{fontSize: '14px', lineHeight: '1.5', margin: '0'}}>
                Welcome to Portfolio 95™! I&apos;m a passionate software engineer and blockchain enthusiast
                studying at Abbey Park High School.
            </p>
        </div>

        <div style={{
            background: 'white',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
            <h3 style={{fontWeight: 'bold', color: '#2563eb', marginBottom: '8px', fontSize: '16px', margin: '0 0 8px 0'}}>Background</h3>
            <p style={{fontSize: '14px', lineHeight: '1.5', margin: '0'}}>
                I&apos;m an AP student with experience in the MERN stack and blockchain technology.
                I&apos;ve participated in 6 hackathons, including wins for Best UI/UX and Best Hack for Social Cause.
                I&apos;m also a machine learning research assistant at the University of Toronto Mississauga.
            </p>
        </div>

        <div style={{
            background: 'white',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
            <h3 style={{fontWeight: 'bold', color: '#2563eb', marginBottom: '8px', fontSize: '16px', margin: '0 0 8px 0'}}>Skills</h3>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px',
                fontSize: '14px'
            }}>
                <div style={{background: '#f3f4f6', padding: '8px', borderRadius: '4px'}}>React/Next.js</div>
                <div style={{background: '#f3f4f6', padding: '8px', borderRadius: '4px'}}>Python/TensorFlow</div>
                <div style={{background: '#f3f4f6', padding: '8px', borderRadius: '4px'}}>Solidity</div>
                <div style={{background: '#f3f4f6', padding: '8px', borderRadius: '4px'}}>Unity/UE5</div>
            </div>
        </div>

        <div style={{
            background: '#fef3c7',
            padding: '16px',
            borderRadius: '8px'
        }}>
            <h3 style={{fontWeight: 'bold', color: '#2563eb', marginBottom: '8px', fontSize: '16px', margin: '0 0 8px 0'}}>Fun Facts</h3>
            <div style={{fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '4px'}}>
                <div>☕ Caffeine Addict</div>
                <div>🤗 Wannabe Extrovert</div>
                <div>🎮 Game Developer</div>
                <div>📖 Always Learning</div>
            </div>
        </div>
    </div>
)

export default MobileAbout