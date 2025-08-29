const MobileExtra = () => (
    <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold text-blue-600 mb-4">🏆 Extracurriculars</h2>
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
            <div key={index} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-blue-600 flex-1">{activity.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded ml-2 ${
                        activity.status === 'Leadership' ? 'bg-yellow-200 text-yellow-800' :
                            activity.status === 'Music' ? 'bg-green-200 text-green-800' :
                                activity.status === 'Athletic' ? 'bg-orange-200 text-orange-800' :
                                    'bg-purple-200 text-purple-800'
                    }`}>
            {activity.status}
          </span>
                </div>
                <p className="text-sm text-gray-700">{activity.roles}</p>
            </div>
        ))}

        <div className="bg-yellow-100 p-4 rounded-lg text-center">
            <div className="text-sm">🌟 These activities shaped my leadership and teamwork!</div>
        </div>
    </div>
)

export default MobileExtra