export default function Services() {
    const packages = [
        {
            id: "starter",
            name: "Starter",
            price: "$29",
            features: ["Basic level boosting", "1-3 days delivery", "Email support", "Account safety guaranteed"],
        },
        {
            id: "pro",
            name: "Pro",
            price: "$59",
            features: ["Advanced boosting", "12-24 hours delivery", "Priority support", "VPN protection", "Progress updates"],
            popular: true,
        },
        {
            id: "premium",
            name: "Premium",
            price: "$99",
            features: ["Premium service", "6-12 hours delivery", "24/7 VIP support", "Maximum security", "Live streaming", "Character optimization"],
        },
    ];

    return (
        <section id="services" className="py-24 px-6 bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
                        Choose Your <span className="gradient-text">Package</span>
                    </h2>
                    <p className="text-gray-400 font-light">Flexible pricing to match your needs</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className={`card-minimal rounded-xl p-8 ${pkg.popular ? "ring-1 ring-indigo-600" : ""}`}>
                            {pkg.popular && <div className="text-xs font-medium text-indigo-400 mb-4">MOST POPULAR</div>}

                            <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-semibold">{pkg.price}</span>
                                <span className="text-gray-500 text-sm ml-2">per service</span>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm">
                                        <svg className="w-5 h-5 text-indigo-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-400 font-light">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => {
                                    const element = document.getElementById("order");
                                    if (element) element.scrollIntoView({ behavior: "smooth" });
                                }}
                                className={`w-full py-3 rounded-lg font-medium transition-colors ${pkg.popular ? "bg-indigo-600 hover:bg-indigo-500" : "border border-[#2a2a2a] hover:border-indigo-600"}`}
                            >
                                Select Package
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
