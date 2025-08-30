const MobileResume = () => (
    <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
            <h2 className="font-bold text-blue-600">📄 Resume</h2>
            <a
                href="/AlanLiuResume.pdf"
                download="AlanLiuResume.pdf"
                className="bg-blue-600 text-white px-3 py-1 rounded text-sm active:bg-blue-700"
            >
                Download PDF
            </a>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-blue-600 mb-3">💼 Experience</h3>
            <div className="space-y-3">
                <div>
                    <div className="font-medium text-sm">Research Assistant</div>
                    <div className="text-xs text-gray-500">University of Toronto Mississauga • Jun 2025 — Present</div>
                    <div className="text-xs mt-1">ML research under Dr. Rutwa Engineer</div>
                </div>
                <div>
                    <div className="font-medium text-sm">Lead Web Developer</div>
                    <div className="text-xs text-gray-500">Ember Hacks • Jun 2025 — Present</div>
                    <div className="text-xs mt-1">Built React/Next.js websites with Three.js</div>
                </div>
            </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-blue-600 mb-3">🎓 Education</h3>
            <div>
                <div className="font-medium text-sm">Abbey Park High School</div>
                <div className="text-xs text-gray-500">Junior • Expected 2027</div>
                <div className="text-xs">Honour&apos;s Roll 23-25 • GPA: 4.0/4.0</div>
            </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-blue-600 mb-3">🏆 Awards</h3>
            <div className="text-xs space-y-1">
                <div>• Best UI/UX - Hack The Ridge 2024</div>
                <div>• Best Hack for Social Cause - Hack404</div>
                <div>• Distinction: Pascal, Cayley, COMC, Galois</div>
            </div>
        </div>
    </div>
)

export default MobileResume