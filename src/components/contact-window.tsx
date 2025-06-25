export default function ContactWindow() {
  return (
      <div className="font-mono text-base">
        <h2 className="font-bold mb-6 text-xl">Contact Information</h2>
        <div className="space-y-6">
          <div className="border border-gray-400 p-4" style={{ borderStyle: "inset" }}>
            <div className="space-y-3">
              <div>
                <strong>📧 Email:</strong> john.doe@email.com
              </div>
              <div>
                <strong>🐙 GitHub:</strong> github.com/johndoe
              </div>
              <div>
                <strong>💼 LinkedIn:</strong> linkedin.com/in/johndoe
              </div>
              <div>
                <strong>🐦 Twitter:</strong> @johndoe
              </div>
            </div>
          </div>
          <div className="border border-gray-400 p-4" style={{ borderStyle: "inset" }}>
            <h3 className="font-bold mb-3 text-lg">Send me a message:</h3>
            <form className="space-y-3">
              <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border border-gray-400 text-base"
                  style={{ borderStyle: "inset" }}
              />
              <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border border-gray-400 text-base"
                  style={{ borderStyle: "inset" }}
              />
              <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-2 border border-gray-400 text-base resize-none"
                  style={{ borderStyle: "inset" }}
              />
              <button
                  type="submit"
                  className="px-6 py-2 bg-gray-300 border border-gray-500 text-base hover:bg-gray-400"
                  style={{ borderStyle: "outset" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
  )
}
