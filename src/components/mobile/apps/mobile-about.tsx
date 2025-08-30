const MobileAbout = () => (
    <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">👨‍💻</div>
                <div>
                    <h2 className="text-lg font-bold text-blue-600">Hello, I&apos;m Alan Liu</h2>
                    <p className="text-sm text-gray-600">15-year-old Developer from GTA</p>
                </div>
            </div>
            <p className="text-sm leading-relaxed">
                Welcome to Portfolio 95™! I&apos;m a passionate software engineer and blockchain enthusiast
                studying at Abbey Park High School.
            </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-blue-600 mb-2">Background</h3>
            <p className="text-sm leading-relaxed">
                I&apos;m an AP student with experience in the MERN stack and blockchain technology.
                I&apos;ve participated in 6 hackathons, including wins for Best UI/UX and Best Hack for Social Cause.
                I&apos;m also a machine learning research assistant at the University of Toronto Mississauga.
            </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-blue-600 mb-2">Skills</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-gray-100 p-2 rounded">React/Next.js</div>
                <div className="bg-gray-100 p-2 rounded">Python/TensorFlow</div>
                <div className="bg-gray-100 p-2 rounded">Solidity</div>
                <div className="bg-gray-100 p-2 rounded">Unity/UE5</div>
            </div>
        </div>

        <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="font-bold text-blue-600 mb-2">Fun Facts</h3>
            <div className="text-sm space-y-1">
                <div>☕ Caffeine Addict</div>
                <div>🤗 Wannabe Extrovert</div>
                <div>🎮 Game Developer</div>
                <div>📖 Always Learning</div>
            </div>
        </div>
    </div>
)

export default MobileAbout