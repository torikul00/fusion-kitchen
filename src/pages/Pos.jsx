import HeaderContainer from "../components/HeaderContainer";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import header from '../assets/images/pos/header.png'
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import { useState } from 'react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import one from '../assets/images/one.gif'
import three from '../assets/images/three.gif'
import four from '../assets/images/four.gif'
import image1 from '../assets/images/pos/image1.png'
import image2 from '../assets/images/pos/image2.png'
import image3 from '../assets/images/pos/image3.png'
import image4 from '../assets/images/pos/image4.png'
import image5 from '../assets/images/pos/image5.png'
import image6 from '../assets/images/pos/image6.svg'
import done from '../assets/images/pos/done.svg'
import circle from '../assets/images/pos/circle.svg'
import halfCir from '../assets/images/pos/halfCir.svg'
import minCir from '../assets/images/pos/minCir.svg'


const Pos = () => {
    const [swiperInstance, setSwiperInstance] = useState(null)

    const handlePrev = () => {
        if (swiperInstance) {
            swiperInstance.slidePrev();
        }
    };
    const handleNext = () => {
        if (swiperInstance) {
            swiperInstance.slideNext();
        }
    };
    return (
        <>
            <header className={`w-full z-50 bg-[#141817] relative overflow-hidden mb-0 h-fit lg:h-[911px]`}>
                <HeaderContainer>
                    <Navbar />
                    <div className={`h-fit lg:h-[821px] w-full py-10 lg:py-0 text-white flex flex-col lg:flex-row lg:justify-between lg:items-center overflow-hidden`}>
                        <div className="w-1/2 sm:w-3/5 lg:w-2/5 flex flex-col">
                            <h1 className="w-[90%] sm:w-4/5 lg:w-full text-3xl md:text-4xl lg:text-6xl xl:text-[80px] lg:leading-[65px] xl:leading-[86px] font-bold"><span className="text-[#9FE870]">ePOS </span>Software for Hospitality</h1>
                            <p className="mb-6 md:mb-8 mt-3 text-[#CCCCCC] text-xs sm:text-base md:text-lg xl:text-[22px] tracking-widest">Work smarter and automate for efficiency on the software and hardware platform millions of businesses trust</p>
                            <div className="flex gap-4 justify-center md:justify-start md:gap-5 lg:gap-6 xl:gap-8 text-sm md:text-base lg:text-lg font-bold">
                                <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#9FE870] border border-[#9FE870]">Get Started</button>
                                <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                            </div>

                        </div>

                        <div className=" w-[50%] mt-6">
                            <img className="" src={header} alt="header" />
                            <button className="text-primary flex items-center gap-x-3 mt-10 tracking-[3px] animate-bounce">Scroll <FaArrowDown /></button>
                        </div>
                    </div>
                </HeaderContainer>
            </header>

            <section className="py-[100px]">
                <MainContainer>
                    <div className="flex justify-between w-full items-center">
                        <div className="w-[55%]">
                            <h1 className="text-[#1A1A1A] text-[60px] font-bold leading-[70px]">Introducing the world&apos;s most powerful point of sale platform</h1>
                            <p className="mt-5 text-[22px]">Point of sale designed to power your whole business, not just your sales. Grafterr POS lets you manage every operational area of your business from a single screen</p>
                        </div>
                        <div className="w-[38%]">
                            <img src={image1} alt="image1" />
                        </div>
                    </div>
                    <div className="mt-[100px]">
                        <h1 className="text-[#1A1A1A] w-[70%] text-[60px] font-bold leading-[70px]">We have more functionality than anyone else</h1>
                        <button className="flex bg-primary px-2 py-1 gap-x-2 items-center mt-5">Discover More <FaArrowRight /></button>
                    </div>
                </MainContainer>
                <section className='h-fit max-w-[1450px] mx-auto mt-[80px] md:mt-[40px] px-5'>
                    <div className='flex gap-8 justify-between items-center'>
                        <button style={{ boxShadow: '4px 1px 4px 0px rgba(159, 232, 112, 1)' }} className='p-7 hidden xl:block rounded-full border border-[#9FE870] text-black bg-light-gray transition-all duration-200' onClick={handlePrev}>
                            <HiOutlineArrowLeft size={30} />
                        </button>

                        <div className='max-w-[95%] lg:max-w-[82%] mx-auto '>
                            <Swiper
                                slidesPerView="auto"
                                effect={'fade'}
                                modules={[Pagination, Autoplay]}
                                onSwiper={(swiper) => setSwiperInstance(swiper)}
                                pagination={{ clickable: true }}
                                autoplay={{
                                    "delay": 2500,
                                    "disableOnInteraction": false
                                }}
                                breakpoints={{
                                    // Responsive breakpoints
                                    320: {
                                        slidesPerView: 1
                                    },
                                    768: {
                                        slidesPerView: 2
                                    },
                                    1440: {
                                        slidesPerView: 3
                                    }

                                }}
                            >
                                <SwiperSlide
                                    className='w-[33.33%] p-4 lg:p-5 mb-14'>
                                    <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px] relative'>
                                        <h3 className='text-[20px] md:text-2xl font-medium text-center mb-5'>Hardware and POS systems designed to sell anywhere.</h3>
                                        <img src={three} alt="" className='w-[240px] block absolute bottom-[10%] right-[10%] md:right-[12%] xl:right-[15.6%]' />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className='w-[33.33%] p-4 lg:p-5 mb-14 '>
                                    <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px] relative overflow-hidden'>
                                        <h3 className='text-[20px] md:text-2xl font-medium text-center mb-5'>Secure payments anywhere your customers are.</h3>
                                        <img src={four} alt="" className='w-[240px] block absolute bottom-[11%] right-[40%] scale-[1.6]' />
                                    </div>
                                </SwiperSlide>


                                <SwiperSlide
                                    className='w-[33.33%] p-4 lg:p-5 mb-14'>
                                    <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-8 pb-0 rounded-[32px]'>
                                        <h3 className='text-[20px] md:text-2xl font-medium text-center mb-7'>In-store pickup, online ordering, delivery, and shipment options.</h3>
                                        <img src={one} alt="" className='h-[350px] w-auto object-cover  absolute bottom-[6%] left-[24%] scale-90' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide
                                    className='w-[33.33%] p-4 lg:p-5 mb-14'>
                                    <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px] relative'>
                                        <h3 className='text-[20px] md:text-2xl font-medium text-center mb-5'>Hardware and POS systems designed to sell anywhere.</h3>
                                        <img src={three} alt="" className='w-[240px] block absolute bottom-[10%] right-[10%] md:right-[12%] xl:right-[15.6%]' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='w-[33.33%] p-4 lg:p-5 mb-14 '>
                                    <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px] relative overflow-hidden'>
                                        <h3 className='text-[20px] md:text-2xl font-medium text-center mb-5'>Secure payments anywhere your customers are.</h3>
                                        <img src={four} alt="" className='w-[240px] block absolute bottom-[11%] right-[40%] scale-[1.6]' />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <button style={{ boxShadow: '-4px 1px 4px 0px rgba(159, 232, 112, 1)' }} className='p-7 hidden xl:block rounded-full border border-[#9FE870] text-black bg-light-gray transition-all duration-200' onClick={handleNext}>
                            <HiOutlineArrowRight size={30} />
                        </button>
                    </div>
                </section >


            </section>

            <section className="w-full bg-[#141817] text-white py-[120px]">
                <MainContainer>
                    <div className="w-[70%]">
                        <h1 className="text-[60px] font-bold leading-[70px] ">All your orders from different channels, synced directly to your <span className="text-primary">POS</span></h1>
                        <p className="text-[22px] tracking-[2px] mt-10">OS, website, mobile, self-serve kiosk, delivery apps... Manage all your orders in one place and prepare every order quicker than before</p>
                        <div className="mt-10">
                            <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#9FE870] border border-[#9FE870]">Get Fusion POS</button>
                            <button className="py-2.5 ml-10 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                        </div>
                    </div>
                    <img src={image2} alt="" />

                </MainContainer>
                <div className="flex justify-between items-center mt-[250px] max-w-[1300px] mx-auto">
                    <div className="w-[48%]">
                        <img src={image3} alt="" />
                    </div>
                    <div className="w-[48%]">
                        <h1 className="text-[55px] font-bold leading-[70px] "><span className="text-primary">A POS</span> that keeps you in control and maximizing table turnover</h1>
                        <p className="text-[22px] tracking-[3px] mt-10">Increase your table turnovers and manage all your reservations using Grafterr’s powerful table booking platform</p>
                        <div className="mt-10">
                            <div className="flex items-center gap-x-6 ml-[20px]">
                                <div className="w-[17px] h-[17px] bg-primary rounded-full"></div>
                                <p className="text-[20px]">Online table booking built-in</p>
                            </div>
                            <div className="flex items-center gap-x-6 ml-[20px] my-3">
                                <div className="w-[17px] h-[17px] bg-primary rounded-full"></div>
                                <p className="text-[20px]">Intuitive booking calendar showing upcoming reservations</p>
                            </div>
                            <div className="flex items-center gap-x-6 ml-[20px]">
                                <div className="w-[17px] h-[17px] bg-primary rounded-full"></div>
                                <p className="text-[20px]">Intelligent coursing and order management features</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="py-[150px]">
                <div className="flex justify-between items-center max-w-[1400px] mx-auto">
                    <div className="w-[48%]">
                        <img src={image4} alt="" />
                    </div>
                    <div className="w-[48%]">
                        <h1 className="text-[55px] font-bold leading-[70px] ">Build an intelligent menu
                            in seconds</h1>
                        <p className="text-[22px] tracking-[2px] mt-10">Our interactive menu builder allows you to add new items and customize your menu in seconds, while our powerful promotional tools make sure you’re always maximizing revenue</p>
                        <div className="mt-10">
                            <div className="flex items-center gap-x-6 ml-[20px]">
                                <div className="w-[17px] h-[17px]"><img src={circle} alt="circle" /></div>
                                <p className="text-[20px]">Intuitive menu builder with modifiers, variants and customizers</p>
                            </div>
                            <div className="flex items-center gap-x-6 ml-[20px] my-3">
                                <div className="w-[17px] h-[17px] "><img src={halfCir} alt="halfCir" /></div>
                                <p className="text-[20px]">Powerful meal deal and auto up-selling features</p>
                            </div>
                            <div className="flex items-center gap-x-6 ml-[20px]">
                                <div className="w-[17px] h-[17px]"><img src={minCir} alt="minCir" /></div>
                                <p className="text-[20px]">Update or edit your menu or item availability in seconds</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center max-w-[1300px] mx-auto mt-[200px]">
                    <div className="w-[48%]">
                        <h1 className="text-[55px] font-bold leading-[70px] ">Staff rotes and HR management built in</h1>
                        <p className="text-[22px] tracking-[2px] mt-10">You don’t need a dedicated HR platform, Grafterr POS can look after your staff! Create full staff profiles, build rotas, track payroll costs, and monitor productivity with staff login.</p>
                        <div className="mt-10">
                            <div className="flex gap-x-6 ml-[20px]">
                                <div className="min-w-[17px] h-[17px] mt-1"><img src={circle} alt="circle" /></div>
                                <p className="text-[20px]">Build weekly rotas & automatically send them to staff</p>
                            </div>
                            <div className="flex gap-x-6 ml-[20px] my-3">
                                <div className="min-w-[17px] h-[17px] mt-1"><img src={halfCir} alt="halfCir" /></div>
                                <p className="text-[20px]">Create employee profiles and track training requirements</p>
                            </div>
                            <div className="flex gap-x-6 ml-[20px]">
                                <div className="min-w-[17px] h-[17px] mt-1"><img src={minCir} alt="minCir" /></div>
                                <p className="text-[20px]">Gain insight into top sellers and most productive staff
                                    with intelligent productivity tracking</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[48%]">
                        <img src={image5} alt="" />
                    </div>
                </div>

                <div>
                    <div className="max-w-[1300px] mt-[200px] mx-auto">
                        <h1 className="text-[55px] font-bold leading-[70px] w-[60%]">Join 1000s businesses across the world using Fusion to elevate their operations.</h1>
                        <div className="mt-[70px]">
                            <h1 className="text-[40px]">Get a quote!</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full radial-gradient text-white py-[150px]">
                <MainContainer>
                    <h1 className="text-[55px] font-bold leading-[70px]">Process more orders,<br />faster than ever before</h1>
                    <p className="mb-6 md:mb-8 my-6 text-[#CCCCCC] text-xs sm:text-base md:text-lg xl:text-[22px] tracking-widest">Allow staff to focus on preparing orders and <br /> delivering a better service</p>
                    <div className="flex gap-4 justify-center md:justify-start md:gap-5 lg:gap-6 xl:gap-8 text-sm md:text-base lg:text-lg font-bold">
                        <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#9FE870] border border-[#9FE870]">Buy now</button>
                        <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Speak to an expert</button>
                    </div>
                    <img className="mt-10" src={image6} alt="image6" />

                    <div className="mt-[200px]">
                        <h1 className="text-[55px] font-bold leading-[70px]">Choose a plan that&apos;s <span className="text-primary">right</span> for you</h1>
                        <p className="w-[55%] mb-6 md:mb-8 my-6 text-[#CCCCCC] text-xs sm:text-base md:text-lg xl:text-[22px] tracking-widest">All of our packages are totally flexible, so you can upgrade, downgrade or pause your subscription anytime!</p>

                        <div className="grid grid-cols-3 gap-x-8 mt-[100px]">
                            <div className=" bg-black/10 support-shadow rounded-[32px] overflow-hidden px-8 py-12">
                                <h1 className="text-[32px] font-bold">Free</h1>
                                <h3 className="text-[20px]">Unlimited orders</h3>
                                <h3 className="text-[32px] my-5"><span className="text-primary">£55</span> / per month</h3>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Up to 2 POS terminals</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Perfect for those looking for a simple ePOS system but process larger volumes of customers orders</p>
                                </div>
                                <button className="mt-6 text-[22px] text-primary flex items-center gap-x-3">Sign up now <FaArrowRight /></button>
                            </div>
                            <div className="bg-black/10 border-[2px] border-primary scale-110 rounded-[32px] overflow-hidden px-8 py-12">
                                <h1 className="text-[32px] font-bold">Premium</h1>
                                <h3 className="text-[20px]">Unlimited orders</h3>
                                <h3 className="text-[32px] my-5"><span className="text-primary">£75</span> / per month</h3>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Up to 2 POS terminals</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Our most popular package for busy, growing businesses that want to elevate service and drive revenue</p>
                                </div>
                                <button className="mt-6 text-[22px] text-primary flex items-center gap-x-3">Sign up now <FaArrowRight /></button>
                            </div>
                            <div className="bg-black/10 support-shadow rounded-[32px] overflow-hidden px-8 py-12">
                                <h1 className="text-[32px] font-bold">Enterprise</h1>
                                <h3 className="text-[20px]">Multi-location + Franchise</h3>
                                <h3 className="text-[32px] my-5 text-primary">Speak to sales</h3>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">A bespoke, enterprise grade platform that streamlines multi-location menu control, customer management and operations in large & franchised F&B businesses</p>
                                </div>
                                <button className="mt-6 text-[22px] text-primary flex items-center gap-x-3">Sign up now <FaArrowRight /></button>
                            </div>
                        </div>
                    </div>
                </MainContainer>
            </section>
        </>
    );
};

export default Pos;