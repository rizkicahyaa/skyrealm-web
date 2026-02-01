export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Alex Chen",
            game: "Genshin Impact",
            text: "Amazing service! Got my AR from 45 to 60 in just 2 days. Professional and kept me updated throughout.",
        },
        {
            id: 2,
            name: "Sarah Kim",
            game: "Honkai Star Rail",
            text: "Best boosting service. They cleared Memory of Chaos 12 and farmed extra relics. Highly recommended!",
        },
        {
            id: 3,
            name: "Mike Johnson",
            game: "Wuthering Waves",
            text: "Super fast and secure. My account was handled with care. Will definitely use again!",
        },
    ];

    return (
        <section id="testimonials" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
                        What Our <span className="gradient-text">Customers Say</span>
                    </h2>
                    <p className="text-gray-400 font-light">Trusted by thousands of gamers worldwide</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="card-minimal rounded-xl p-6">
                            {/* Stars */}
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-gray-400 mb-6 font-light leading-relaxed">"{testimonial.text}"</p>

                            <div>
                                <div className="font-medium">{testimonial.name}</div>
                                <div className="text-sm text-gray-500">{testimonial.game}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
