import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/90 backdrop-blur-sm border-b border-[#2a2a2a]">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div>
                        <h1 className="text-lg font-semibold tracking-tight">
                            SkyRealm <span className="gradient-text">Boost</span>
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button onClick={() => scrollToSection("home")} className="text-sm text-gray-400 hover:text-white transition-colors">
                            Home
                        </button>
                        <button onClick={() => scrollToSection("games")} className="text-sm text-gray-400 hover:text-white transition-colors">
                            Games
                        </button>
                        <button onClick={() => scrollToSection("services")} className="text-sm text-gray-400 hover:text-white transition-colors">
                            Services
                        </button>
                        <button onClick={() => scrollToSection("order")} className="px-5 py-2 bg-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-500 transition-colors">
                            Order Now
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-400 hover:text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-[#2a2a2a] bg-[#0f0f0f]">
                    <div className="px-6 py-4 space-y-3">
                        <button onClick={() => scrollToSection("home")} className="block w-full text-left text-sm text-gray-400 hover:text-white py-2">
                            Home
                        </button>
                        <button onClick={() => scrollToSection("games")} className="block w-full text-left text-sm text-gray-400 hover:text-white py-2">
                            Games
                        </button>
                        <button onClick={() => scrollToSection("services")} className="block w-full text-left text-sm text-gray-400 hover:text-white py-2">
                            Services
                        </button>
                        <button onClick={() => scrollToSection("order")} className="w-full px-5 py-2 bg-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-500 transition-colors mt-2">
                            Order Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
