import HeaderContainer from "../components/HeaderContainer";
import Navbar from "../components/Navbar";
import bannerImg from "../assets/images/online ordering/banner.png";
import image1 from "../assets/images/online ordering/image 200.png"

const OnlineOrdering = () => {
    return (
        <>
            <header className={`w-full z-50 bg-[#141817] relative overflow-hidden mb-0 h-fit lg:h-[911px]`}>
                <HeaderContainer>
                    <Navbar />
                    <div className={`h-fit lg:h-[821px] w-full py-10 lg:py-0 text-white flex flex-col lg:flex-row lg:justify-between lg:items-center overflow-hidden`}>
                        <div className="w-full sm:w-3/5 lg:w-2/5 flex flex-col">
                            <h1 className="w-[90%] sm:w-4/5 lg:w-full text-3xl md:text-4xl lg:text-6xl xl:text-[80px] lg:leading-[65px] xl:leading-[86px] font-bold"><span className="text-[#9FE870]">Online</span> Ordering System</h1>
                            <p className="w-5/6 mb-6 md:mb-8 mt-3 text-[#CCCCCC] text-xs sm:text-base md:text-lg xl:text-[22px] tracking-widest">Cut the commission and generate direct orders for yourself</p>
                            <div className="flex gap-4 justify-center md:justify-start md:gap-5 lg:gap-6 xl:gap-8 text-sm md:text-base lg:text-lg font-bold">
                                <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#9FE870] border border-[#9FE870]">Get Started</button>
                                <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                            </div>

                            <div className="lg:hidden w-full mt-6 flex justify-center items-center">
                                <div className="w-[300px] md:w-[800px]">
                                    <img src={bannerImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="hidden h-full lg:w-[70%] xl:w-[55%] lg:flex justify-end items-center -z-10">
                            <img src={bannerImg} alt="" />
                        </div>
                    </div>
                </HeaderContainer>
            </header>

            <section className="my-[135px]">
                <div className="max-w-[1300px] mx-auto flex items-center gap-32">
                    <img src={image1} alt="" className="w-[70%] -ml-[24%] rounded-lg " />

                    <div className="w-[55%]">
                        <h2 className="mb-8 font-bold text-[60px] text-[#1A1A1A] leading-[70px]">Cut the commission & generate your own online orders</h2>
                        <p className="text-xl">Everything you need to take online orders directly from your customers without using 3rd parties. Grow your business with online ordering, marketing and loyalty campaigns.</p>

                        <ul className="text-lg list-disc pl-5 mt-6">
                            <li>Automatically sync new online orders to your POS + Kitchen or manage everything from your mobile or computer</li>
                            <li>Drive more orders using our marketing suite with email, SMS and mobile push notifications</li>
                            <li>Drive more orders using our marketing suite with email, SMS and mobile push notifications</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OnlineOrdering;