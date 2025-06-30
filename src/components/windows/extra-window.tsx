export default function ExtraWindow() {
    const extracurriculars = [
        {
            name: "Abbey Park High School",
            image: "abbey_park.png",
            description: "In Abbey Park High School, I hold various leadership positions, including playing varsity badminton for 2 years, as well as the Principles Trainer for DECA. Additionally, I am the President of the Badminton Club, the Co-founder of the Data Science Club, as well as the Public Relations Manager of the TEDx Club, and the Lead Drummer for the Manifesto Rock Band.",
            awards: ["Top 10 Exams - DECA Regionals", "Silver Medal - Halton Badminton Finals"],
            status: "Ongoing",
        },
        {
            name: "Piano",
            image: "piano.jpg",
            description: "I am a hobbyist and competitive pianist making my debut in Carnegie Hall at the age of 14, interested in playing mainly romantic-era music, my favourite composer being Franz Liszt. I've attended the 2025 Oberlin Summer Piano Festival where I've studied with Ethan Yi Dong, and Haewon Song. Additionally, I've also had the opportunity to play in masterclasses featuring renowned teachers such as Michael Berkovsky, Alexander Malikov and Rudin Lengo.",
            awards: ["Gold Award - Steinway Piano Competition 2023", "Finalist - OMFA Open Level", "Runners Up - Doris Evans Award"],
            status: "Music",
        },
        {
            name: "Badminton",
            image: "badminton.png",
            description: "I'm a hobbyist and a competitive badminton player, training at Lions Badminton, as well as regularly competing in provincial competitions. Outside of my achievements in school tournaments, I am currently ranked 137th in Ontario for Boys Doubles.",
            awards: ["Provincially Ranked 137th"],
            status: "Athletic",
        },
        {
            name: "Hackathon Organizers",
            image: "ember.svg",
            description: "I am a 5x hackathon organizer, being the Lead Web Developer of Ember Hacks, the Web Developer Organizer for Eureka Hacks, the Finance Organizer of Incubator Hacks, the Finance & Logistics Organizer of Rythm Hacks, as well as the Event Organizer for Recess Hacks.",
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
                                <img src={activity.image} alt={activity.name} height="100"/>
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
