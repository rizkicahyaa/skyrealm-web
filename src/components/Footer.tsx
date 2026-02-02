export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-[#2a2a2a]">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <img src="/skyrealm-logo-2.png" alt="Skyrealm" className="h-8 w-auto mb-5" />
                        <p className="text-sm text-gray-500 font-light leading-relaxed">Jasa boosting game profesional untuk game gacha dan RPG populer.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-medium mb-3">Link Cepat</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#home" className="text-gray-500 hover:text-white transition-colors">
                                    Beranda
                                </a>
                            </li>
                            <li>
                                <a href="#games" className="text-gray-500 hover:text-white transition-colors">
                                    Game
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-gray-500 hover:text-white transition-colors">
                                    Paket
                                </a>
                            </li>
                            <li>
                                <a href="#order" className="text-gray-500 hover:text-white transition-colors">
                                    Pesan Sekarang
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
                                    Syarat & Ketentuan
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                                    Kebijakan Privasi
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                                    Kebijakan Refund
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-[#2a2a2a] text-center text-sm text-gray-500">
                    <p>&copy; {currentYear} Skyrealm. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
