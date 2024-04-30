import { FaArrowDown } from "react-icons/fa6";
import HeaderContainer from "./HeaderContainer";
import Navbar from "./Navbar";
import { useState } from "react";
import bannerImg from "../assets/banner-img.png"

const Header = () => {
    const [industry, setIndustry] = useState("All")

    return (
        <header className="w-full h-screen bg-[#1A1A1A]">
            <HeaderContainer>
                <Navbar />
                <div className="h-[calc(100vh-100px)] w-full text-white flex justify-between items-center overflow-hidden">
                    <div className="w-2/5">
                        <h1 className="text-[80px] leading-[86px] font-bold"><span className="text-[#9FE870]">Powering</span> all the ways you do business.</h1>
                        <p className="mb-8 mt-3 text-[#CCCCCC] text-[22px] tracking-widest">Work smarter and automate for efficiency on the software and hardware platform millions of businesses trust</p>
                        <div className="flex gap-8 text-lg font-bold">
                            <button className="py-[18px] px-9 rounded-full text-[#9FE870] border border-[#9FE870]">Get Started</button>
                            <button className="py-[18px] px-9 rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                        </div>

                        <div className="mt-[74px]">
                            <div className="flex items-center gap-[9px] mb-6">
                                <h3 className="text-[22px] font-bold">Customize your experience by</h3>
                                <FaArrowDown size={20} />
                            </div>
                            <div className="w-3/5 h-full flex gap-6 text-sm font-bold">
                                <button onClick={() => setIndustry("All")} className={`py-3 px-7 rounded-full transition ${industry === "All" ? 'text-[#173303] border border-[#9FE870] bg-[#9FE870]' : 'text-white border border-white hover:border-[#9FE870] hover:bg-[#9FE870] hover:text-[#173303]'}`}>All</button>
                                <button onClick={() => setIndustry("Restaurant")} className={`py-3 px-7 rounded-full transition ${industry === 'Restaurant' ? 'text-[#173303] border border-[#9FE870] bg-[#9FE870]' : 'text-white border border-white hover:border-[#9FE870] hover:bg-[#9FE870] hover:text-[#173303]'}`}>Restaurant</button>
                                <button onClick={() => setIndustry("Retail")} className={`py-3 px-7 rounded-full transition ${industry === 'Retail' ? 'text-[#173303] border border-[#9FE870] bg-[#9FE870]' : 'text-white border border-white hover:border-[#9FE870] hover:bg-[#9FE870] hover:text-[#173303]'}`}>Retail</button>
                                <button onClick={() => setIndustry("Beauty")} className={`py-3 px-7 rounded-full transition ${industry === 'Beauty' ? 'text-[#173303] border border-[#9FE870] bg-[#9FE870]' : 'text-white border border-white hover:border-[#9FE870] hover:bg-[#9FE870] hover:text-[#173303]'}`}>Beauty</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/5 h-full relative">
                        <img src={bannerImg} alt="" className="h-[750px] absolute bottom-0 right-0" />
                    </div>
                </div>
            </HeaderContainer>
        </header>
    );
};

export default Header;