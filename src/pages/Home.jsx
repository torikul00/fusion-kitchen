import CustomerReviews from "../components/CustomerReviews";
import Header from "../components/Header";
import SellAnywhere from "../components/SellAnywhere";

const Home = () => {
    return (
        <>
            <Header />
            <SellAnywhere />
            <CustomerReviews />
        </>
    );
};

export default Home;