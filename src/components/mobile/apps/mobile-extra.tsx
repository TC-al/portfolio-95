const MobileExtra = () => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <div style={{
            background: 'white',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
            <h2 style={{fontWeight: 'bold', color: '#2563eb', marginBottom: '16px', fontSize: '18px', margin: '0 0 16px 0'}}>🏆 Extracurriculars</h2>
        </div>

        {[
            {
                name: "Abbey Park High School",
                roles: "DECA Trainer, VP Ethics Bowl, Badminton President",
                status: "Leadership"
            },
            {
                name: "Piano Performance",
                roles: "Carnegie Hall, Oberlin Festival, Provincial Competitions",
                status: "Music"
            },
            {
                name: "Competitive Badminton",
                roles: "Provincially Ranked #137 in Ontario",
                status: "Athletic"
            },
            {
                name: "Hackathon Organizer",
                roles: "6+ events, Co-Lead & Finance roles",
                status: "Tech"
            }
        ].map((activity, index) => (
            <div key={index} style={{
                background: 'white',
                padding: '16px',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px'}}>
                    <h3 style={{fontWeight: 'bold', color: '#2563eb', flex: '1', fontSize: '16px', margin: '0'}}>{activity.name}</h3>
                    <span style={{
                        fontSize: '12px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        marginLeft: '8px',
                        ...(activity.status === 'Leadership' ? {background: '#fef3c7', color: '#92400e'} :
                            activity.status === 'Music' ? {background: '#dcfce7', color: '#166534'} :
                                activity.status === 'Athletic' ? {background: '#fed7aa', color: '#9a3412'} :
                                    {background: '#e9d5ff', color: '#7c3aed'})
                    }}>
                        {activity.status}
                    </span>
                </div>
                <p style={{fontSize: '14px', color: '#374151', margin: '0'}}>{activity.roles}</p>
            </div>
        ))}

        <div style={{
            background: '#fef3c7',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
        }}>
            <div style={{fontSize: '14px'}}>🌟 These activities shaped my leadership and teamwork!</div>
        </div>
    </div>
)

export default MobileExtra