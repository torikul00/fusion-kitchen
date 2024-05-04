import { FaArrowDown } from "react-icons/fa6";
import HeaderContainer from "./HeaderContainer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import bannerImg from "../assets/banner-img.png"

const Header = () => {
    const [industry, setIndustry] = useState("All")
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const triggerScrollPos = 750;
        if (currentScrollPos > triggerScrollPos) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    return (
        <header className={`w-full bg-[#1A1A1A] z-10 relative overflow-hidden ${isSticky ? 'mb-[200px] h-[811px]' : 'mb-0 h-[911px]'}`}>
            <div className='greenCustomAnimationHeader'>
            </div>
            <HeaderContainer>
                <Navbar />
                <div className={`h-[811px] z-10 w-full text-white flex justify-between items-center overflow-hidden`}>
                    <div className="w-2/5">
                        <h1 className="text-[80px] leading-[86px] font-bold"><span className="text-[#9FE870]">Powering</span> all the ways you do business.</h1>
                        <p className="mb-8 mt-3 text-[#CCCCCC] text-[22px] tracking-widest">Work smarter and automate for efficiency on the software and hardware platform millions of businesses trust</p>
                        <div className="flex gap-8 text-lg font-bold">
                            <button className="py-[18px] px-9 rounded-full text-[#9FE870] border border-[#9FE870]">Get Started</button>
                            <button className="py-[18px] px-9 rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                        </div>

                        <div key={isSticky} className={`${isSticky ? 'px-[30px] h-[70px] fixed z-50 top-0 left-0 right-0 w-screen bg-[#1A1A1A] text-white flex gap-5 items-center sticky-nav' : 'mt-[74px]'}`}>
                            <div data-aos={isSticky && "fade-left"} className={`flex items-center gap-[9px] ${isSticky ? 'mb-0' : 'mb-6'}`}>
                                <h3 className={`${isSticky ? 'text-lg font-medium' : 'text-[22px] font-bold'}`}>Customize your experience by</h3>
                                <span className={`${isSticky ? '-rotate-90' : 'rotate-0'}`}><FaArrowDown size={isSticky ? 16 : 20} /></span>
                            </div>
                            <div data-aos={isSticky && "fade-left"} className={`flex text-sm font-bold ${isSticky ? 'gap-4' : 'gap-6 w-3/5'}`}>
                                <button onClick={() => setIndustry("All")} className={`py-2.5 px-7 rounded-full transition ${industry === "All" ? 'text-[#173303] border border-[#9FE870] bg-[#9FE870]' : 'text-white border border-white hover:border-[#9FE870] hover:bg-[#9FE870] hover:text-[#173303]'}`}>All</button>
                                <button onClick={() => setIndustry("Restaurant")} className={`py-2.5 px-6 rounded-full transition ${industry === 'Restaurant' ? 'text-[#173303] border border-[#9FE870] bg-[#9FE870]' : 'text-white border border-white hover:border-[#9FE870] hover:bg-[#9FE870] hover:text-[#173303]'}`}>Restaurant</button>
                                <button onClick={() => setIndustry("Retail")} className={`py-2.5 px-6 rounded-full transition ${industry === 'Retail' ? 'text-[#173303] border border-[#9FE870] bg-[#9FE870]' : 'text-white border border-white hover:border-[#9FE870] hover:bg-[#9FE870] hover:text-[#173303]'}`}>Retail</button>
                                <button onClick={() => setIndustry("Beauty")} className={`py-2.5 px-6 rounded-full transition ${industry === 'Beauty' ? 'text-[#173303] border border-[#9FE870] bg-[#9FE870]' : 'text-white border border-white hover:border-[#9FE870] hover:bg-[#9FE870] hover:text-[#173303]'}`}>Beauty</button>
                            </div>

                            {isSticky && <div data-aos="fade-right" className={`ml-auto w-fit flex gap-4 ${isSticky ? 'text-sm font-bold' : 'text-lg font-bold'}`}>
                                <button className="py-2.5 px-6 rounded-full text-[#9FE870] border border-[#9FE870]">Get Started</button>
                                <button className="py-2.5 px-6 rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                            </div>}
                        </div>
                    </div>
                    <div className="w-3/5 h-full flex justify-end items-end">
                        <img src={bannerImg} alt="" className="h-[750px]" />
                    </div>
                </div>
            </HeaderContainer>
        </header>
    );
};

export default Header;