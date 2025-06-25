export default function AboutWindow() {
  return (
      <div className="font-mono text-base">
        <h2 className="font-bold mb-6 text-xl">About Me</h2>
        <div className="space-y-4">
          <p>
            Hello! I'm a passionate developer with a love for both modern web technologies and retro computing aesthetics.
          </p>
          <p>I specialize in:</p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>Frontend Development (React, Next.js, TypeScript)</li>
            <li>Backend Development (Node.js, Python)</li>
            <li>UI/UX Design</li>
            <li>Retro Computing & Vintage Interfaces</li>
          </ul>
          <p>
            When I'm not coding, you can find me exploring vintage software, playing retro games, or working on creative
            projects that blend nostalgia with modern functionality.
          </p>
        </div>
      </div>
  )
}
