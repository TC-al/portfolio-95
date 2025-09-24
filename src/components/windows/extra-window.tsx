import Image from 'next/image'

export default function ExtraWindow() {
    const extracurriculars = [
        {
            name: "Abbey Park High School",
            image: "/abbey_park.png",
            description: "At Abbey Park High School, I hold several leadership roles that span competitive academics, athletics, and the arts. " +
                "I train my peers as the Principles Trainer for DECA and the Vice President of Training for Ethics Bowl. " +
                "My passion for new ideas is reflected in my roles as Co-founder of the Data Science Club and Public Relations Manager for the TEDx Club. " +
                "In athletics, I serve as President of the Badminton Club and have been a dedicated member of the varsity badminton team for two years. " +
                "As a creative outlet, I am the Lead Drummer for the Manifesto Rock Band.",
            awards: ["2x Honor Roll", "Top 10 Exams - DECA Regionals", "Silver Medal - Halton Badminton Finals"],
            status: "Ongoing",
        },
        {
            name: "Piano",
            image: "/piano.jpg",
            description: "As a competitive pianist, I’ve been privileged to perform on a variety of wonderful stages, including Carnegie Hall, David H. Stull Recital Hall, and Kulas Recital Hall. " +
                "My repertoire is centered on the Romantic era, and I have a deep passion for the brilliant and technically demanding works of my favorite composer, Franz Liszt. " +
                "This summer, I continued my musical education at the 2025 Oberlin Summer Piano Festival, where I had the opportunity to study with Robert Shannon and Alvin Chow. " +
                "I've also been fortunate to refine my skills in masterclasses with esteemed professors such as Michael Berkovsky, Carl Cranmer, Alexander Malikov, and Rudin Lengo.",
            awards: ["Gold Award - Steinway Piano Competition 2023", "Finalist - 2025 OMFA Open Level", "Semi-Finalist - 2025 Oberlin Summer Piano Festival Competition"],
            status: "Music",
        },
        {
            name: "Badminton",
            image: "/badminton.png",
            description: "I'm a dedicated and competitive badminton player who trains at Lions Badminton. " +
                "I regularly compete in provincial tournaments and am currently ranked 92nd in Ontario for the Under 19 Boys Doubles, " +
                "as well as 128th for the Under 19 Boys Singles, in addition to my achievements in school tournaments.",
            awards: ["Provincially Ranked 92nd"],
            status: "Athletic",
        },
        {
            name: "Hackathon Organizers",
            image: "/eureka.svg",
            description: "I have extensive experience in hackathon organization, having served in various capacities for six different events. My roles have included leading as the Co-Lead Organizer for Eureka Hacks, and the Lead Web Developer for Ember Hacks. I have also managed finances and logistics as the Finance Organizer for Incubator Hacks and the Finance & Logistics Organizer for Rythm Hacks. Additionally, I've served as a Web Developer for Jam Hacks and the Event Organizer for Recess Hacks.",
            awards: [],
            status: "Leadership",
        },
    ]

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
                    border: "2px outset #c0c0c0",
                    backgroundColor: "#c0c0c0",
                    padding: "8px",
                    marginBottom: "8px",
                    flexShrink: 0,
                    boxSizing: "border-box",
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
                    🏆 Extracurricular Activities
                </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "8px" }}>
                {extracurriculars.map((activity, index) => (
                    <div
                        key={index}
                        style={{
                            border: "2px inset #c0c0c0",
                            backgroundColor: "#ffffff",
                            padding: "12px",
                            minHeight: "80px",
                            boxSizing: "border-box",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "8px" }}>
                            <div style={{ fontSize: "12px", lineHeight: "1", flexShrink: 0 }}>
                                <Image
                                    src={activity.image}
                                    alt={activity.name}
                                    height={100}
                                    width={100}
                                    sizes="(max-width: 768px) 100px, 100px"
                                    style={{ objectFit: 'cover', height: 'auto', width: 'auto', maxHeight: '100px' }}
                                />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginBottom: "6px",
                                        flexWrap: "wrap",
                                        gap: "6px",
                                    }}
                                >
                                    <h3 style={{ fontSize: "12px", fontWeight: "bold", margin: "0", color: "#000080" }}>
                                        {activity.name}
                                    </h3>
                                    <div
                                        style={{
                                            fontSize: "10px",
                                            padding: "2px 6px",
                                            backgroundColor:
                                                activity.status === "Leadership" ? "#ffff00" :
                                                    activity.status === "Music" ? "#00ff00" :
                                                        activity.status === "Ongoing" ? "#00ffff" :
                                                            activity.status === "Athletic" ? "#ff8000" :
                                                                activity.status === "Founded" ? "#ff00ff" :
                                                                    activity.status === "Elected" ? "#8000ff" : "#c0c0c0",
                                            border: "1px solid #000000",
                                            color: "#000000",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {activity.status}
                                    </div>
                                </div>
                                <p style={{ fontSize: "11px", lineHeight: "1.3", margin: "0 0 8px 0", wordWrap: "break-word" }}>
                                    {activity.description}
                                </p>
                            </div>
                        </div>

                        <div
                            style={{
                                border: "1px inset #c0c0c0",
                                backgroundColor: "#f0f0f0",
                                padding: "8px",
                                marginTop: "8px",
                            }}
                        >
                            <h4
                                style={{
                                    fontSize: "11px",
                                    fontWeight: "bold",
                                    margin: "0 0 4px 0",
                                    color: "#000080",
                                }}
                            >
                                🏅 Awards & Achievements:
                            </h4>

                            {activity.awards.length > 0 ? (
                                <div style={{display: "flex", flexWrap: "wrap", gap: "4px"}}>
                                    {activity.awards.map((award, awardIndex) => (
                                        <span
                                            key={awardIndex}
                                            style={{
                                                fontSize: "10px",
                                                padding: "2px 6px",
                                                backgroundColor: "#ffffff",
                                                border: "1px solid #808080",
                                                color: "#000000",
                                                borderRadius: "0",
                                            }}
                                        >
                      {award}
                    </span>
                                    ))}
                                </div>
                            ) : (
                                <div
                                    style={{
                                        fontSize: "10px",
                                        padding: "4px 8px",
                                        backgroundColor: "#e0e0e0",
                                        border: "1px solid #808080",
                                        color: "#666666",
                                        fontStyle: "italic",
                                        textAlign: "center",
                                    }}
                                >
                                    No formal awards - Experience and skills gained through participation
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div
                style={{
                    border: "2px inset #c0c0c0",
                    backgroundColor: "#ffffcc",
                    padding: "8px",
                    flexShrink: 0,
                    boxSizing: "border-box",
                    marginBottom: "0",
                }}
            >
                <div style={{fontSize: "11px", textAlign: "center", margin: "0"}}>
                    🌟 <strong>Note:</strong> These activities have shaped my leadership, teamwork, and work-ethic!
                </div>
            </div>
        </div>
    )
}
