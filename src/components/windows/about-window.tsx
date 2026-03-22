export default function AboutWindow() {
    return (
        <div
            style={{
                fontFamily: "MS Sans Serif, Tahoma, sans-serif",
                fontSize: "11px",
                color: "#000000",
                padding: "8px",
                margin: "0",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    border: "2px inset #c0c0c0",
                    backgroundColor: "#ffffff",
                    padding: "12px",
                    marginBottom: "8px",
                    minHeight: "80px",
                    boxSizing: "border-box",
                }}
            >
                <div style={{display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px"}}>
                    <div style={{fontSize: "48px", lineHeight: "1.2", flexShrink: 0}}>👨‍💻</div>
                    <div style={{flex: 1, minWidth: 0}}>
                        <h2
                            style={{
                                fontSize: "14px",
                                fontWeight: "bold",
                                marginBottom: "8px",
                                color: "#000080",
                                wordWrap: "break-word",
                                margin: "0 0 8px 0",
                            }}
                        >
                            Hello, I&apos;m (Tsz Chai) Alan Liu
                        </h2>
                        <p style={{fontSize: "11px", lineHeight: "1.4", margin: "0", wordWrap: "break-word"}}>
                            Welcome to Portfolio 95™! I&apos;m a 16-year-old Abbey Park High School Junior currently based
                            in the Greater Toronto Area.
                        </p>
                    </div>
                </div>
            </div>

            <div
                style={{
                    border: "2px inset #c0c0c0",
                    backgroundColor: "#ffffff",
                    padding: "12px",
                    marginBottom: "8px",
                    minHeight: "60px",
                    boxSizing: "border-box",
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
                        margin: "0 0 8px 0",
                    }}
                >
                    Background
                </h3>
                <p style={{fontSize: "11px", lineHeight: "1.4", margin: "0", wordWrap: "break-word"}}>
                    I am an AP student with a deep passion for software engineering as well as blockchain technology.
                    I build projects using the MERN stack and have demonstrated my commitment to innovation by being a
                    10x hackathon participant, including the best UI/UX award at Hack The Ridge 2025, the Best Hack for a Social Cause at Hack404,
                    the Winner of the Entertainment Track at PennApps XXVI
                    as well as serving as a judge at Incubator Hacks and Eureka Hacks.
                    I also utilize Solidity, on the Ethereum blockchain to build meaningful applications which are impactful around the world.
                    Additionally, I conducted machine learning research at the University of Toronto Mississauga under Dr. Rutwa Engineer.
                    I am always eager to network and collaborate with fellow professionals.
                    Beyond technology, I also play the piano, having previously studied with Robert Shannon at the Oberlin Conservatory, as well as being a provincially ranked badminton player.
                </p>
            </div>

            <div
                style={{
                    border: "2px inset #c0c0c0",
                    backgroundColor: "#ffffff",
                    padding: "12px",
                    marginBottom: "8px",
                    minHeight: "60px",
                    boxSizing: "border-box",
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
                        margin: "0 0 8px 0",
                    }}
                >
                    Skills
                </h3>
                <div style={{fontSize: "11px", lineHeight: "1.6", margin: "0"}}>
                    <div style={{marginBottom: "2px"}}>• React (js, ts, next)</div>
                    <div style={{marginBottom: "2px"}}>• Python (tensorflow, numpy)</div>
                    <div style={{marginBottom: "2px"}}>• Ethereum (solidity)</div>
                    <div style={{marginBottom: "0"}}>• Game Dev (Unity - C#, Ue5 - C++)</div>
                </div>
            </div>

            <div
                style={{
                    border: "2px inset #c0c0c0",
                    backgroundColor: "#ffffff",
                    padding: "12px",
                    minHeight: "80px",
                    boxSizing: "border-box",
                    marginBottom: "0",
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
                        margin: "0 0 8px 0",
                    }}
                >
                    Fun Facts
                </h3>
                <div style={{fontSize: "11px", lineHeight: "1.6", margin: "0"}}>
                    <div style={{marginBottom: "2px"}}>• Caffeine Addict ☕</div>
                    <div style={{marginBottom: "2px"}}>• Wannabe Extrovert 🤗</div>
                    <div style={{marginBottom: "2px"}}>• Hobbyist Game Developer 🎮</div>
                    <div style={{marginBottom: "0"}}>• Always learning something new 📖</div>
                </div>
            </div>
        </div>
    )
}
