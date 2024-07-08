import HeaderContainer from "./HeaderContainer";
import MobileNavbar from "./MobileNavbar";
import { useEffect, useState } from "react";
import bannerLottie from "../assets/banner-lottie.json"
import Lottie from 'react-lottie';
import Navbar from "./Navbar";
import messageIcon from "../assets/images/online ordering/messageIcon.svg"

const Header = () => {
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


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: bannerLottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <header className={`w-full z-50 bg-[#141817] relative pt-[70px] lg:pt-0 overflow-hidden ${isSticky ? 'mb-[200px] h-[811px]' : 'mb-0 h-fit lg:h-[911px]'}`}>
            <div className='greenCustomAnimationHeader'>
            </div>
            <HeaderContainer>
                <div className="pt-[100px] hidden lg:block">
                    <Navbar />
                </div>
                <div className='lg:hidden fixed w-[90%] md:w-[95%] z-[99] top-0'>
                    <MobileNavbar />
                </div>
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
                    </div>

                    {/* small device bottom sticky */}
                    <div data-aos='fade-up' className={`${isSticky ? 'lg:hidden bg-[#141817] py-2 w-full fixed text-white z-[99] left-0 bottom-0 right-0 flex gap-4 justify-center border-t border-[#d9d9d9] border-opacity-20' : 'hidden'} transition-all`}>
                        <img src={messageIcon} alt="" />
                        <button className="py-2.5 px-12 text-sm rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Create you site</button>
                    </div>
                    {/* small device bottom sticky */}
                    <div className="hidden h-full lg:w-[70%] xl:w-3/5 lg:flex justify-end items-center xl:items-end -z-10">
                        <Lottie options={defaultOptions} width="100%" height="auto" />
                    </div>
                </div>
            </HeaderContainer>
        </header>
    );
};

export default Header;