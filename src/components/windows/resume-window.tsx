export default function ResumeWindow() {
  return (
      <div
          style={{
            fontFamily: "MS Sans Serif, Tahoma, sans-serif",
            fontSize: "11px",
            color: "#000000",
            padding: "8px",
          }}
      >
          <div
              style={{
                  border: "2px outset #c0c0c0",
                  backgroundColor: "#c0c0c0",
                  padding: "8px",
                  marginBottom: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
              }}
          >
              <h2
                  style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      margin: "0",
                      color: "#000080",
                  }}
              >
                  📄 Resume
              </h2>
              <a href="AlanLiuResume.pdf" download="AlanLiuResume.pdf">
              <button
                      style={{
                          border: "2px outset #c0c0c0",
                          backgroundColor: "#c0c0c0",
                          padding: "4px 8px",
                          fontSize: "11px",
                          fontFamily: "MS Sans Serif, Tahoma, sans-serif",
                          cursor: "pointer",
                          color: "#000000",
                      }}
              >
                  Download PDF
              </button>
              </a>
          </div>

          <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
              <div
                  style={{
                      border: "2px inset #c0c0c0",
                      backgroundColor: "#ffffff",
                      padding: "12px",
                  }}
              >
                  <h3
                      style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          marginBottom: "8px",
                          color: "#000080",
                          borderBottom: "1px solid #c0c0c0",
                          paddingBottom: "4px",
                      }}
                  >
                      💼 Experience
                  </h3>
                  <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                      <div>
                          <div style={{fontSize: "12px", fontWeight: "bold", marginBottom: "2px"}}>
                              Research Assistant
                          </div>
                          <div style={{fontSize: "10px", color: "#666666", marginBottom: "4px"}}>
                              University of Toronto Mississauga • May 2025 - Sep 2025
                          </div>
                          <div style={{fontSize: "11px", lineHeight: "1.3"}}>
                              <div>• Machine learning user input prediction research under Dr. Rutwa Engineer</div>
                              <div>• Appended a transformer layer improving architecture accuracy by 12%</div>
                              <div>• Collaborated with the Human Feedback Foundation and the Linux Foundation</div>
                          </div>
                      </div>
                      <div>
                          <div style={{fontSize: "12px", fontWeight: "bold", marginBottom: "2px"}}>
                              Lead Web Developer
                          </div>
                          <div style={{fontSize: "10px", color: "#666666", marginBottom: "4px"}}>
                              Ember Hacks • Jun 2025 - Oct 2026
                          </div>
                          <div style={{fontSize: "11px", lineHeight: "1.3"}}>
                              <div>• Built and maintained the Ember Hacks website using React and Next.js</div>
                              <div>• Engineered an interactive 3D landing page with Three.js and custom Blender models</div>
                              <div>• Animated website with GPU-accelerated CSS & lazy rendering, boosting speed by 40%</div>
                          </div>
                      </div>
                      <div>
                          <div style={{fontSize: "12px", fontWeight: "bold", marginBottom: "2px"}}>
                              Web Developer
                          </div>
                          <div style={{fontSize: "10px", color: "#666666", marginBottom: "4px"}}>
                              Jam Hacks • Aug 2025 - Present
                          </div>
                          <div style={{fontSize: "11px", lineHeight: "1.3"}}>
                              <div>• Built the Jam Hacks 10 website, largest high school hackathon in Canada</div>
                              <div>• Built a QR Code scanning system to handle over 200 expected participants</div>
                              <div>• Optimized website loading time by 28% via static image caching and a CDN</div>
                          </div>
                      </div>
                  </div>
              </div>

              <div
                  style={{
                      border: "2px inset #c0c0c0",
                      backgroundColor: "#ffffff",
                      padding: "12px",
                  }}
              >
                  <h3
                      style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          marginBottom: "8px",
                          color: "#000080",
                          borderBottom: "1px solid #c0c0c0",
                          paddingBottom: "4px",
                      }}
                  >
                      🙋‍♂️ Volunteer
                  </h3>
                  <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                      <div>
                      <div style={{fontSize: "12px", fontWeight: "bold", marginBottom: "2px"}}>
                              Eureka Hacks
                          </div>
                          <div style={{fontSize: "10px", color: "#666666", marginBottom: "4px"}}>
                              Judge • April 2025
                          </div>
                          <div style={{fontSize: "11px", lineHeight: "1.3"}}>
                              <div>• Judged over 150 students’ high school project submissions for EurekaHacks 2025
                              </div>
                          </div>
                      </div>
                      <div>
                          <div style={{fontSize: "12px", fontWeight: "bold", marginBottom: "2px"}}>
                              Incubator Hacks
                          </div>
                          <div style={{fontSize: "10px", color: "#666666", marginBottom: "4px"}}>
                              Mentor & Judge • Nov 2024
                          </div>
                          <div style={{fontSize: "11px", lineHeight: "1.3"}}>
                              <div>• Provided inspiring mentorship to hackers who are beginning their journey</div>
                              <div>• Judged for IncubatorHacks 1, with over 150 university and high school
                                  participants
                              </div>
                          </div>
                      </div>
                      </div>
                  </div>

              <div
                  style={{
                      border: "2px inset #c0c0c0",
                      backgroundColor: "#ffffff",
                      padding: "12px",
                  }}
              >
                  <h3
                      style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          marginBottom: "8px",
                          color: "#000080",
                          borderBottom: "1px solid #c0c0c0",
                          paddingBottom: "4px",
                      }}
                  >
                      🎓 Education
                  </h3>
                  <div>
                      <div style={{fontSize: "12px", fontWeight: "bold", marginBottom: "2px"}}>
                          Abbey Park High School
                      </div>
                      <div style={{fontSize: "10px", color: "#666666", marginBottom: "2px"}}>Junior •
                          Expected 2027
                      </div>
                      <div style={{fontSize: "11px"}}>Honour’s Roll 23-25 • GPA: 4.0/4.0</div>
                  </div>
              </div>

              <div
                  style={{
                      border: "2px inset #c0c0c0",
                      backgroundColor: "#ffffff",
                      padding: "12px",
                  }}
              >
                  <h3
                      style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          marginBottom: "8px",
                          color: "#000080",
                          borderBottom: "1px solid #c0c0c0",
                          paddingBottom: "4px",
                      }}
                  >
                      🏆 Awards
                  </h3>
                  <div style={{fontSize: "11px", lineHeight: "1.4"}}>
                      <div>• Entertainment Track Winner - PennApps XXVI</div>
                      <div>• Best Hack for a Social Cause - Hack404</div>
                      <div>• Best UI/UX - Hack The Ridge 2024</div>
                      <div>• Gold Division - USACO</div>
                  </div>
              </div>

              <div
                  style={{
                      border: "2px inset #c0c0c0",
                      backgroundColor: "#ffffff",
                      padding: "12px",
                  }}
              >
                  <h3
                      style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          marginBottom: "8px",
                          color: "#000080",
                          borderBottom: "1px solid #c0c0c0",
                          paddingBottom: "4px",
                      }}
                  >
                      👨‍🏫 References
                  </h3>
                  <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                      <div>
                          <div style={{fontSize: "12px", fontWeight: "bold", marginBottom: "2px"}}>
                              Adam Rivard
                          </div>
                          <div style={{fontSize: "10px", color: "#666666", marginBottom: "2px"}}>
                              AP Computer Science Teacher
                          </div>
                          <div style={{fontSize: "11px", lineHeight: "1.3"}}>
                              <div>rivarda@hdsb.ca</div>
                          </div>
                      </div>
                </div>
            </div>
          </div>
        </div>
  )
}
