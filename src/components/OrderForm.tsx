import { useState } from "react";

export default function OrderForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        game: "",
        service: "",
        package: "",
        details: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you! We will contact you shortly via email.");
        setFormData({
            name: "",
            email: "",
            game: "",
            service: "",
            package: "",
            details: "",
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="order" className="py-24 px-6 bg-[#0a0a0a]">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
                        Place Your <span className="gradient-text">Order</span>
                    </h2>
                    <p className="text-gray-400 font-light">Fill out the form and we'll get started right away</p>
                </div>

                <div className="card-minimal rounded-xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Full Name
                            </label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a] focus:border-indigo-600 focus:outline-none transition-colors" placeholder="John Doe" />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email Address
                            </label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a] focus:border-indigo-600 focus:outline-none transition-colors" placeholder="john@example.com" />
                        </div>

                        {/* Game Selection */}
                        <div>
                            <label htmlFor="game" className="block text-sm font-medium mb-2">
                                Select Game
                            </label>
                            <select id="game" name="game" value={formData.game} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a] focus:border-indigo-600 focus:outline-none transition-colors">
                                <option value="">Choose a game...</option>
                                <option value="genshin">Genshin Impact</option>
                                <option value="hsr">Honkai Star Rail</option>
                                <option value="wuwa">Wuthering Waves</option>
                                <option value="arknights">Arknights Endfield</option>
                                <option value="nikke">NIKKE</option>
                                <option value="zzz">Zenless Zone Zero</option>
                            </select>
                        </div>

                        {/* Service Type */}
                        <div>
                            <label htmlFor="service" className="block text-sm font-medium mb-2">
                                Service Type
                            </label>
                            <select id="service" name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a] focus:border-indigo-600 focus:outline-none transition-colors">
                                <option value="">Choose a service...</option>
                                <option value="level-boost">Level/Rank Boost</option>
                                <option value="character-build">Character Building</option>
                                <option value="endgame-content">Endgame Content</option>
                                <option value="resource-farming">Resource Farming</option>
                                <option value="custom">Custom Service</option>
                            </select>
                        </div>

                        {/* Package Selection */}
                        <div>
                            <label htmlFor="package" className="block text-sm font-medium mb-2">
                                Select Package
                            </label>
                            <select id="package" name="package" value={formData.package} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a] focus:border-indigo-600 focus:outline-none transition-colors">
                                <option value="">Choose a package...</option>
                                <option value="starter">Starter - $29</option>
                                <option value="pro">Pro - $59</option>
                                <option value="premium">Premium - $99</option>
                            </select>
                        </div>

                        {/* Additional Details */}
                        <div>
                            <label htmlFor="details" className="block text-sm font-medium mb-2">
                                Additional Details
                            </label>
                            <textarea id="details" name="details" value={formData.details} onChange={handleChange} required rows={4} className="w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a] focus:border-indigo-600 focus:outline-none transition-colors resize-none" placeholder="Current level, target level, specific requirements..." />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full py-3 bg-indigo-600 rounded-lg font-medium hover:bg-indigo-500 transition-colors">
                            Submit Order
                        </button>

                        <p className="text-xs text-gray-500 text-center">We'll contact you within 24 hours to confirm your order</p>
                    </form>
                </div>
            </div>
        </section>
    );
}
