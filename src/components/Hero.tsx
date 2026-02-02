export default function Hero() {
    const scrollToOrder = () => {
        const element = document.getElementById("order");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-32">
            {/* Subtle Background Accent */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <div className="fade-in-up space-y-8">
                    <h1 className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight">
                        Level Up Your Game
                        <br />
                        <span className="gradient-text">Without The Grind</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">Professional boosting services for Genshin Impact, Honkai Star Rail, Wuthering Waves, and more.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <button onClick={scrollToOrder} className="px-8 py-3 bg-indigo-600 rounded-lg font-medium hover:bg-indigo-500 transition-colors">
                            Get Started
                        </button>
                        <button
                            onClick={() => {
                                const element = document.getElementById("games");
                                if (element) element.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="px-8 py-3 border border-[#2a2a2a] rounded-lg font-medium hover:border-indigo-600 transition-colors"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
