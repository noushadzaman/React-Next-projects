import Footer from "./compoents/Footer";
import Hero from "./compoents/Hero";
import Nav from "./compoents/Nav";
import TableSection from "./compoents/TableSection";

const Home = () => {
    return (
        <div className="bg-[#172227] font-[Inter] text-white">
            <Nav />
            <Hero />
            <TableSection />
            <Footer />
        </div>
    );
};

export default Home;