import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Games from "./components/Games";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen bg-[#0f0f0f]">
            <Navbar />
            <Hero />
            <Games />
            <Services />
            <Testimonials />
            <OrderForm />
            <Footer />
        </div>
    );
}

export default App;
