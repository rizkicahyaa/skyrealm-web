export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-[#2a2a2a]">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3">
                            SkyRealm <span className="gradient-text">Boost</span>
                        </h2>
                        <p className="text-sm text-gray-500 font-light leading-relaxed">Professional game boosting services for popular gacha and RPG games.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-medium mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#home" className="text-gray-500 hover:text-white transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#games" className="text-gray-500 hover:text-white transition-colors">
                                    Games
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-gray-500 hover:text-white transition-colors">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#order" className="text-gray-500 hover:text-white transition-colors">
                                    Order Now
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-medium mb-3">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                                    Refund Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-[#2a2a2a] text-center text-sm text-gray-500">
                    <p>&copy; {currentYear} SkyRealm Boost. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
