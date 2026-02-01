export default function Games() {
    const games = [
        {
            id: "genshin",
            name: "Genshin Impact",
            description: "Adventure Rank, Character Building, Spiral Abyss",
            icon: "⚔️",
        },
        {
            id: "hsr",
            name: "Honkai Star Rail",
            description: "Trailblaze Level, Memory of Chaos, Characters",
            icon: "🚂",
        },
        {
            id: "wuwa",
            name: "Wuthering Waves",
            description: "Union Level, Tower of Adversity, Echo Farming",
            icon: "🌊",
        },
        {
            id: "arknights",
            name: "Arknights Endfield",
            description: "Level Progression, Stage Clearing, Resources",
            icon: "🛡️",
        },
        {
            id: "nikke",
            name: "NIKKE",
            description: "Commander Level, Campaign, Arena Ranking",
            icon: "🎯",
        },
        {
            id: "zzz",
            name: "Zenless Zone Zero",
            description: "Inter-Knot Level, Shiyu Defense, Characters",
            icon: "⚡",
        },
    ];

    return (
        <section id="games" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
                        Supported <span className="gradient-text">Games</span>
                    </h2>
                    <p className="text-gray-400 font-light">Professional boosting for the most popular games</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {games.map((game) => (
                        <div key={game.id} className="card-minimal rounded-xl p-6 group cursor-pointer">
                            <div className="text-3xl mb-4">{game.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">{game.name}</h3>
                            <p className="text-sm text-gray-500 font-light leading-relaxed">{game.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
