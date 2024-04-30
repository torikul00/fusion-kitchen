import CustomTailored from "../components/CustomTailored";
import CustomerReviews from "../components/CustomerReviews";
import ElegantProducts from "../components/ElegantProducts";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OurPartner from "../components/OurPartner";
import SellAnywhere from "../components/SellAnywhere";

const Home = () => {
    return (
        <>
            <Header />
            <SellAnywhere />
            <ElegantProducts />
            <CustomTailored />
            <Faq />
            <CustomerReviews />
            <OurPartner />
            <Footer />
        </>
    );
};

export default Home;