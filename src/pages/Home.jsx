import HeaderContainer from "../components/HeaderContainer";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <header className="w-full h-screen bg-[#1A1A1A]">
            <HeaderContainer>
                <Navbar />
                <div>
                    <h1 className="text-3xl text-center">Home page Header here</h1>
                </div>
            </HeaderContainer>
        </header>
    );
};

export default Home;