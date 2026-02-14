export default function Games() {
    const games = [
        {
            id: "genshin",
            name: "Genshin Impact",
            genre: "Open World RPG",
            description: "Adventure Rank, Build Karakter, Spiral Abyss",
            image: "/images/genshin.jpeg",
        },
        {
            id: "hsr",
            name: "Honkai: Star Rail",
            genre: "Turn-based RPG",
            description: "Trailblaze Level, Memory of Chaos, Karakter",
            image: "/images/hsr.jpg",
        },
        {
            id: "wuwa",
            name: "Wuthering Waves",
            genre: "Action RPG",
            description: "Union Level, Tower of Adversity, Farming Echo",
            image: "/images/wuwa.jpg",
        },
        {
            id: "umamusume",
            name: "Umamusume: Pretty Derby",
            genre: "Racing RPG",
            description: "Training, Race, Support Card",
            image: "/images/umamusume.jpg",
        },
        {
            id: "arknights",
            name: "Arknights: Endfield",
            genre: "Real-time RPG",
            description: "Progres Level, Clear Stage, Farming Resource",
            image: "/images/enfield.webp",
        },
    ];

    return (
        <section id="games" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
                        Game yang <span className="gradient-text">Didukung</span>
                    </h2>
                    <p className="text-gray-400 font-light">Jasa boosting profesional untuk game-game populer</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {games.map((game) => (
                        <div key={game.id} className="card-minimal rounded-xl overflow-hidden group cursor-pointer">
                            <div className="aspect-video w-full overflow-hidden">
                                <img src={game.image} alt={game.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-medium text-indigo-400 mb-2 block uppercase tracking-wider">{game.genre}</span>
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">{game.name}</h3>
                                <p className="text-sm text-gray-500 font-light leading-relaxed">{game.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
