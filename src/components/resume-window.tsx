export default function ResumeWindow() {
  return (
      <div className="font-mono text-base">
        <div className="text-center mb-6">
          <h1 className="font-bold text-2xl">JOHN DOE</h1>
          <div className="text-base">Full Stack Developer</div>
          <div className="text-base">john.doe@email.com | (555) 123-4567</div>
        </div>
        <div className="space-y-6">
          <section>
            <h2 className="font-bold border-b border-black mb-3 text-lg">EXPERIENCE</h2>
            <div className="space-y-4">
              <div>
                <div className="font-bold text-base">Senior Frontend Developer</div>
                <div className="text-sm">Tech Company Inc. | 2022 - Present</div>
                <ul className="list-disc list-inside ml-6 text-sm mt-2">
                  <li>Led development of React-based applications</li>
                  <li>Implemented responsive designs and accessibility features</li>
                  <li>Mentored junior developers</li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-base">Full Stack Developer</div>
                <div className="text-sm">Startup Solutions | 2020 - 2022</div>
                <ul className="list-disc list-inside ml-6 text-sm mt-2">
                  <li>Built full-stack web applications using MERN stack</li>
                  <li>Designed and implemented RESTful APIs</li>
                  <li>Collaborated with design team on UI/UX improvements</li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <h2 className="font-bold border-b border-black mb-3 text-lg">SKILLS</h2>
            <div className="text-sm space-y-2">
              <div>
                <strong>Frontend:</strong> React, Next.js, TypeScript, HTML5, CSS3
              </div>
              <div>
                <strong>Backend:</strong> Node.js, Python, Express, MongoDB
              </div>
              <div>
                <strong>Tools:</strong> Git, Docker, AWS, Figma
              </div>
            </div>
          </section>
          <section>
            <h2 className="font-bold border-b border-black mb-3 text-lg">EDUCATION</h2>
            <div>
              <div className="font-bold text-base">Bachelor of Computer Science</div>
              <div className="text-sm">University of Technology | 2016 - 2020</div>
            </div>
          </section>
        </div>
      </div>
  )
}
