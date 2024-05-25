import { FaArrowDown, FaAngleDown } from "react-icons/fa6";
import HeaderContainer from "./HeaderContainer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import bannerLottie from "../assets/banner-lottie.json"
import Lottie from 'react-lottie';

const Header = () => {
    const [industry, setIndustry] = useState("All")
    const [isSticky, setIsSticky] = useState(false);
    const [openBussinessType, setOpenBusinessType] = useState(false)

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

    useEffect(() => {
        if (openBussinessType) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [openBussinessType])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: bannerLottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <header className={`w-full z-50 bg-[#141817] relative overflow-hidden ${isSticky ? 'mb-[200px] h-[811px]' : 'mb-0 h-fit lg:h-[911px]'}`}>
            <div className='greenCustomAnimationHeader'>
            </div>
            <HeaderContainer>
                <Navbar />
                <div className={`h-fit lg:h-[821px] w-full py-10 lg:py-0 text-white flex flex-col lg:flex-row lg:justify-between lg:items-center overflow-hidden`}>
                    <div className="w-full sm:w-3/5 lg:w-2/5 flex flex-col mx-auto">
                        <h1 className="w-[90%] sm:w-4/5 lg:w-full text-3xl md:text-4xl lg:text-6xl xl:text-[80px] lg:leading-[65px] xl:leading-[86px] font-bold"><span className="text-[#9FE870]">Powering</span> all the ways you do business.</h1>
                        <p className="mb-6 md:mb-8 mt-3 text-[#CCCCCC] text-xs sm:text-base md:text-lg xl:text-[22px] tracking-widest">Work smarter and automate for efficiency on the software and hardware platform millions of businesses trust</p>
                        <div className="flex gap-4 justify-center md:justify-start md:gap-5 lg:gap-6 xl:gap-8 text-sm md:text-base lg:text-lg font-bold">
                            <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#9FE870] border border-[#9FE870]">Get Started</button>
                            <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                        </div>

                        <div className="lg:hidden w-full mt-6 flex justify-center items-center">
                            <div className="w-[300px] md:w-[800px]">
                                <Lottie options={defaultOptions} width="100%" height="auto" />
                            </div>
                        </div>

                        <div key={isSticky} className={`${isSticky ? 'px-7 h-[70px] fixed z-[99] top-0 left-0 right-0 w-screen bg-[#141817] text-white hidden lg:flex gap-5 items-center sticky-nav' : 'mt-6 xl:mt-[74px]'}`}>
                            <div data-aos={isSticky && "fade-left"} className={`flex items-center gap-[9px] ${isSticky ? 'mb-0' : 'mb-4 xl:mb-6'}`}>
                                <h3 className={`${isSticky ? 'text-lg font-medium' : 'text-base md:text-xl text-[22px] font-normal xl:font-bold'}`}>Customize your experience by</h3>
                                <span className={`${isSticky ? '-rotate-90' : 'rotate-0'}`}><FaArrowDown size={isSticky ? 16 : 20} /></span>
                            </div>
                            <div data-aos={isSticky && "fade-left"} className={`flex justify-between xl:justify-start text-xs xl:text-sm font-bold ${isSticky ? 'gap-3 xl:gap-4' : 'gap-2 sm:gap-3 xl:gap-6 w-full xl:w-3/5'}`}>
                                <button onClick={() => setIndustry("All")} className={`py-2 px-4 sm:px-5 lg:px-5 lg:py-2.5 xl:px-7 rounded-full transition ${industry === "All" ? 'text-[#173303] border border-[#9FE870] bg-[#9FE870]' : 'text-white border border-white hover:border-[#9FE870] hover:bg-[#9FE870] hover:text-[#173303]'}`}>All</button>
                                <button onClick={() => setIndustry("Restaurant")} className={`py-2 px-4 sm:px-5 lg:px-5 lg:py-2.5 rounded-full transition ${industry === 'Restaurant' ? 'text-[#173303] border border-[#9FE870] bg-[#9FE870]' : 'text-white border border-white hover:border-[#9FE870] hover:bg-[#9FE870] hover:text-[#173303]'}`}>Restaurant</button>
                                <button onClick={() => setIndustry("Retail")} className={`py-2 px-4 sm:px-5 lg:px-5 lg:py-2.5 rounded-full transition ${industry === 'Retail' ? 'text-[#173303] border border-[#9FE870] bg-[#9FE870]' : 'text-white border border-white hover:border-[#9FE870] hover:bg-[#9FE870] hover:text-[#173303]'}`}>Retail</button>
                                <button onClick={() => setIndustry("Beauty")} className={`py-2 px-4 sm:px-5 lg:px-5 lg:py-2.5 rounded-full transition ${industry === 'Beauty' ? 'text-[#173303] border border-[#9FE870] bg-[#9FE870]' : 'text-white border border-white hover:border-[#9FE870] hover:bg-[#9FE870] hover:text-[#173303]'}`}>Beauty</button>
                            </div>

                            {isSticky && <div data-aos="fade-right" className={`ml-auto w-fit flex gap-4 ${isSticky ? 'text-sm font-bold' : 'text-lg font-bold'}`}>
                                <button className="py-2.5 px-6 rounded-full text-[#9FE870] border border-[#9FE870]">Get Started</button>
                                <button className="py-2.5 px-6 rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                            </div>}
                        </div>

                        {/* mobile device styles */}
                        <div className={`${isSticky ? 'block lg:hidden fixed bg-[#141817] text-white z-[99] top-0 left-0 right-0' : 'hidden'} ${openBussinessType ? 'w-full h-[calc(100vh-54px)]' : 'w-full h-fit'} transition-all`}>
                            <div onClick={() => setOpenBusinessType(!openBussinessType)} className={`w-full h-[54px] flex gap-5 items-center justify-between px-7 sm:px-10 ${openBussinessType ? 'border-b border-[#d9d9d9] border-opacity-20' : ''}`}>
                                <h4 className="text-medium">All Business Types</h4>
                                <button className={`${openBussinessType ? 'rotate-180' : 'rotate-0'} transition-all`}><FaAngleDown /></button>
                            </div>

                            {openBussinessType && <div className="mt-8">
                                <div className={`flex justify-center items-center gap-[9px] mb-4 sm:mb-5`}>
                                    <h3 className={`text-lg font-medium'}`}>Customize your experience by</h3>
                                    <FaArrowDown />
                                </div>
                                <div onClick={() => setOpenBusinessType(false)} className="text-sm flex flex-col items-center justify-center gap-4 w-[80%] sm:w-[70%] mx-auto">
                                    <button onClick={() => setIndustry("All")} className={`w-full py-2 sm:py-2.5 px-4 rounded-full transition ${industry === "All" ? 'text-[#173303] border border-[#9FE870] bg-[#9FE870]' : 'text-white border border-white hover:border-[#9FE870] hover:bg-[#9FE870] hover:text-[#173303]'}`}>All</button>
                                    <button onClick={() => setIndustry("Restaurant")} className={`w-full py-2 sm:py-2.5 px-4 rounded-full transition ${industry === 'Restaurant' ? 'text-[#173303] border border-[#9FE870] bg-[#9FE870]' : 'text-white border border-white hover:border-[#9FE870] hover:bg-[#9FE870] hover:text-[#173303]'}`}>Restaurant</button>
                                    <button onClick={() => setIndustry("Retail")} className={`w-full py-2 sm:py-2.5 px-4 rounded-full transition ${industry === 'Retail' ? 'text-[#173303] border border-[#9FE870] bg-[#9FE870]' : 'text-white border border-white hover:border-[#9FE870] hover:bg-[#9FE870] hover:text-[#173303]'}`}>Retail</button>
                                    <button onClick={() => setIndustry("Beauty")} className={`w-full py-2 sm:py-2.5 px-4 rounded-full transition ${industry === 'Beauty' ? 'text-[#173303] border border-[#9FE870] bg-[#9FE870]' : 'text-white border border-white hover:border-[#9FE870] hover:bg-[#9FE870] hover:text-[#173303]'}`}>Beauty</button>
                                </div>
                            </div>}
                        </div>

                        {/* prevous black color was: #1A1A1A now #141817 */}
                        <div className={`${isSticky ? 'lg:hidden bg-[#141817] py-2 w-full fixed text-white z-[99] left-0 bottom-0 right-0 flex gap-2 justify-center border-t border-[#d9d9d9] border-opacity-20' : 'hidden'} transition-all`}>
                            <button className="py-2 px-5 text-sm rounded-full text-[#9FE870] border border-[#9FE870]">Get Started</button>
                            <button className="py-2 px-5 text-sm rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                        </div>
                    </div>
                    <div className="hidden h-full lg:w-[70%] xl:w-3/5 lg:flex justify-end items-center xl:items-end -z-10">
                        <Lottie options={defaultOptions} width="90%" height="auto" />
                    </div>
                </div>
            </HeaderContainer>
        </header>
    );
};

export default Header;