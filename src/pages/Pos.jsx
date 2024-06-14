import HeaderContainer from "../components/HeaderContainer";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import header from '../assets/images/pos/header.png'
import { FaAngleDown, FaArrowDown, FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import ipadMini from '../assets/images/ipad-mini.png'
import iphone from '../assets/images/iphone.png'
import pos1 from '../assets/images/pos1.png'
import image1 from '../assets/images/pos/image1.png'
import image2 from '../assets/images/pos/image2.png'
import image3 from '../assets/images/pos/image3.png'
import image4 from '../assets/images/pos/image4.png'
import image5 from '../assets/images/pos/image5.png'
import image6 from '../assets/images/pos/image6.svg'
import image8 from '../assets/images/pos/image8.png'
import done from '../assets/images/pos/done.svg'
import circle from '../assets/images/pos/circle.svg'
import send from '../assets/images/pos/send.svg'
import Footer from "../components/Footer";
import GetAQuote from "../components/GetAQuote";
import PaymentGridCard from "../components/PaymentGridCard";
import messageIcon from "../assets/images/online ordering/messageIcon.svg"

const Pos = () => {
    const [swiperInstance, setSwiperInstance] = useState(null)
    const [isSticky, setIsSticky] = useState(false);
    const [openBussinessType, setOpenBusinessType] = useState(false)
    const [industry, setIndustry] = useState("Restaurant")
    const [submitMessage, setSubmitMessage] = useState('')
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

    const handleFormSubmit = (e) => {
        e.preventDefault();
        e.target.reset()
        const formData = new FormData(e.target);
        const full_name = formData.get('full_name')
        const phone_no = formData.get('phone_no')
        const business_name = formData.get('business_name')
        const email = formData.get('email')
        const inquery = formData.get('inquery')
        console.log(full_name, phone_no, business_name, email, inquery);
        setSubmitMessage('Form submitted successfully!')
    }
    return (
        <>
            <header className={`w-full z-50 bg-[#141817] relative mb-0 h-fit lg:h-[911px]`}>
                <HeaderContainer>
                    <Navbar />
                    <div className={`h-fit lg:h-[821px] w-full py-10 lg:py-0 text-white flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center`}>
                        <div className="w-full lg:w-2/5 flex flex-col mt-10 lg:mt-0">
                            <h1 className="w-[90%] md:w-4/5 lg:w-full text-3xl md:text-4xl lg:text-6xl xl:text-[80px] lg:leading-[65px] xl:leading-[86px] font-bold"><span className="text-[#9FE870]">ePOS </span>Software for Hospitality</h1>
                            <p className="mb-6 md:mb-8 mt-3 text-[#CCCCCC] text-xs sm:text-base md:text-lg xl:text-[22px] tracking-widest">Work smarter and automate for efficiency on the software and hardware platform millions of businesses trust</p>
                            <div className="flex gap-4 justify-center md:justify-start md:gap-5 lg:gap-6 xl:gap-8 text-sm md:text-base lg:text-lg font-bold">
                                <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#9FE870] border border-[#9FE870]">Get Started</button>
                                <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                            </div>
                            <button className="lg:hidden flex mx-auto text-primary  items-center gap-x-3 mt-28 tracking-[3px] animate-bounce">Scroll <FaArrowDown /></button>
                        </div>

                        <div className="w-full lg:absolute lg:right-0 lg:w-[45%] mt-6">
                            <img className="" src={header} alt="header" />
                            <button className="lg:flex hidden text-primary  items-center gap-x-3 mt-10 tracking-[3px] animate-bounce">Scroll <FaArrowDown /></button>
                        </div>
                    </div>

                    {/* large device sticky */}
                    <div className={`${isSticky ? 'hidden lg:block fixed bg-[#141817] text-white z-[99] top-0 left-0 right-0' : 'hidden'} transition-all sticky-nav`}>
                        <div className={`w-full h-[70px] flex gap-5 items-center justify-between px-7 sm:px-10`}>
                            <h4 className="text-medium text-xl">Online Ordering</h4>
                            <div className="flex items-center gap-7">
                                <ul className="flex items-center gap-6">
                                    <li onClick={() => setIndustry("Restaurant")} className={`${industry === 'Restaurant' ? 'text-primary' : ''} cursor-pointer`}>Restaurant</li>
                                    <li onClick={() => setIndustry("Retail")} className={`${industry === 'Retail' ? 'text-primary' : ''} cursor-pointer`}>Retail</li>
                                    <li onClick={() => setIndustry("Themes")} className={`${industry === 'Themes' ? 'text-primary' : ''} cursor-pointer`}>Themes</li>
                                    <li onClick={() => setIndustry("Pricing")} className={`${industry === 'Pricing' ? 'text-primary' : ''} cursor-pointer`}>Pricing</li>
                                </ul>
                                <div className={`ml-auto w-fit flex gap-4 text-sm font-bold`}>
                                    <button className="py-2.5 px-6 rounded-full text-[#9FE870] border border-[#9FE870]">Get Started</button>
                                    <button className="py-2.5 px-6 rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* small device sticky */}
                    <div className={`${isSticky ? 'block lg:hidden fixed bg-[#141817] text-white z-[99] top-0 left-0 right-0' : 'hidden'} ${openBussinessType ? 'w-full h-[calc(100vh-54px)]' : 'w-full h-fit'} transition-all`}>
                        <div onClick={() => setOpenBusinessType(!openBussinessType)} className={`w-full h-[54px] flex gap-5 items-center justify-between px-7 sm:px-10 ${openBussinessType ? 'border-b border-[#d9d9d9] border-opacity-20' : ''}`}>
                            <h4 className="text-medium">Online Ordering</h4>
                            <button className={`${openBussinessType ? 'rotate-180' : 'rotate-0'} transition-all`}><FaAngleDown /></button>
                        </div>

                        {openBussinessType && <div className="mt-8">
                            <div className={`flex justify-center items-center gap-[9px] mb-4 sm:mb-5`}>
                                <h3 className={`text-lg font-medium'}`}>Customize your experience by</h3>
                                <FaArrowDown />
                            </div>
                            <div onClick={() => setOpenBusinessType(false)} className="text-sm flex flex-col items-center justify-center gap-4 w-[80%] sm:w-[70%] mx-auto">
                                <button onClick={() => setIndustry("Restaurant")} className={`w-full py-2 sm:py-2.5 px-4 rounded-full transition ${industry === 'Restaurant' ? 'text-[#173303] border border-[#9FE870] bg-[#9FE870]' : 'text-white border border-white hover:border-[#9FE870] hover:bg-[#9FE870] hover:text-[#173303]'}`}>Restaurant</button>
                                <button onClick={() => setIndustry("Retail")} className={`w-full py-2 sm:py-2.5 px-4 rounded-full transition ${industry === 'Retail' ? 'text-[#173303] border border-[#9FE870] bg-[#9FE870]' : 'text-white border border-white hover:border-[#9FE870] hover:bg-[#9FE870] hover:text-[#173303]'}`}>Retail</button>
                                <button onClick={() => setIndustry("Themes")} className={`w-full py-2 sm:py-2.5 px-4 rounded-full transition ${industry === 'Themes' ? 'text-[#173303] border border-[#9FE870] bg-[#9FE870]' : 'text-white border border-white hover:border-[#9FE870] hover:bg-[#9FE870] hover:text-[#173303]'}`}>Themes</button>
                                <button onClick={() => setIndustry("Pricing")} className={`w-full py-2 sm:py-2.5 px-4 rounded-full transition ${industry === 'Pricing' ? 'text-[#173303] border border-[#9FE870] bg-[#9FE870]' : 'text-white border border-white hover:border-[#9FE870] hover:bg-[#9FE870] hover:text-[#173303]'}`}>Pricing</button>
                            </div>
                        </div>}
                    </div>
                    <div className={`${isSticky ? 'lg:hidden bg-[#141817] py-2 w-full fixed text-white z-[99] left-0 bottom-0 right-0 flex gap-4 justify-center border-t border-[#d9d9d9] border-opacity-20' : 'hidden'} transition-all`}>
                        <img src={messageIcon} alt="" />
                        <button className="py-2.5 px-12 text-sm rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Create you site</button>
                    </div>
                </HeaderContainer>
            </header>

            <section className="py-[100px]">
                <MainContainer>
                    <div className="flex flex-col-reverse lg:flex-row justify-between w-full items-center">
                        <div className="w-full lg:w-[55%]">
                            <h1 className=" text-[#1A1A1A] text-[28px] md:text-[40px] lg:text-[60px] font-bold lg:leading-[70px]">Introducing the world&apos;s most powerful point of sale platform</h1>
                            <p className="mt-5 text-[20px] md:text-[22px]">Point of sale designed to power your whole business, not just your sales. Grafterr POS lets you manage every operational area of your business from a single screen</p>
                        </div>
                        <div className="w-full md:w-[70%] lg:w-[38%]">
                            <img src={image1} alt="image1" />
                        </div>
                    </div>
                    <div className="mt-[100px]">
                        <h1 className="text-[#1A1A1A] text-[28px] md:text-[40px] lg:text-[60px] font-bold lg:leading-[70px]">We have more functionality than anyone else</h1>
                        <button className="flex bg-primary px-2 py-1 gap-x-2 items-center mt-5">Discover More <FaArrowRight /></button>
                    </div>
                </MainContainer>

                <div className='h-fit max-w-[1450px] mx-auto mt-[80px] md:mt-[40px] px-5'>
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
                                // autoplay={{
                                //     "delay": 2500,
                                //     "disableOnInteraction": false
                                // }}
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
                                    <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-6 pb-0 rounded-[32px] relative'>
                                        <h3 className='text-[20px] md:text-2xl font-semibold text-center mb-5'>Interactive menu builder</h3>
                                        <h3 className='text-[20px] md:text-xl font-medium text-center mb-5'>Add new menu items in seconds with our interactive builder</h3>
                                        <img src={ipadMini} alt="" className='w-[240px] block absolute bottom-[10%] right-[10%] md:right-[12%] xl:right-[15.6%]' />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className='w-[33.33%] p-4 lg:p-5 mb-14 '>
                                    <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-6 pb-0 rounded-[32px] relative overflow-hidden'>
                                        <h3 className='text-[20px] md:text-2xl font-semibold text-center mb-5'>Multiple service types</h3>
                                        <h3 className='text-[20px] md:text-xl font-medium text-center mb-5'>Eat-in, takeaway, delivery, collection, drive through. Manage all your orders in one place</h3>
                                        <img src={iphone} alt="" className='w-[240px] block absolute bottom-[-1 0%] right-[14%] scale-[]' />
                                    </div>
                                </SwiperSlide>


                                <SwiperSlide
                                    className='w-[33.33%] p-4 lg:p-5 mb-14'>
                                    <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-6 pb-0 rounded-[32px]'>
                                        <h3 className='text-[20px] md:text-2xl font-semibold text-center mb-5'>Powerful promotions & marketing tools</h3>
                                        <h3 className='text-[20px] md:text-xl font-medium text-center mb-5'>Happy hour, discounts, vouchers and loyalty all built in. Marketing tools designed to drive revenue</h3>
                                        <img src={pos1} alt="" className='h-[350px] w-auto object-cover  absolute bottom-[-5%] left-[4%] scale-[0.8]' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide
                                    className='w-[33.33%] p-4 lg:p-5 mb-14'>
                                    <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-6 pb-0 rounded-[32px] relative'>
                                        <h3 className='text-[20px] md:text-2xl font-semibold text-center mb-5'>Interactive menu builder</h3>
                                        <h3 className='text-[20px] md:text-xl font-medium text-center mb-5'>Add new menu items in seconds with our interactive builder</h3>
                                        <img src={ipadMini} alt="" className='w-[240px] block absolute bottom-[10%] right-[10%] md:right-[12%] xl:right-[15.6%]' />
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>

                        <button style={{ boxShadow: '-4px 1px 4px 0px rgba(159, 232, 112, 1)' }} className='p-7 hidden xl:block rounded-full border border-[#9FE870] text-black bg-light-gray transition-all duration-200' onClick={handleNext}>
                            <HiOutlineArrowRight size={30} />
                        </button>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#141817] relative overflow-hidden text-white py-[120px]">
                <div className='greenCustomAnimationPOS '>
                </div>
                <MainContainer>
                    <div className="flex lg:flex-col flex-col-reverse">
                        <div className="w-full mt-10 lg:mt-0 lg:w-[70%]">
                            <h1 className="text-[28px] lg:text-[60px] font-bold lg:leading-[70px]">All your orders from different channels, synced directly to your <span className="text-primary">POS</span></h1>
                            <p className="text-[17px] lg:text-[22px] tracking-[2px] mt-10">OS, website, mobile, self-serve kiosk, delivery apps... Manage all your orders in one place and prepare every order quicker than before</p>
                            <div className="mt-10 flex">
                                <button className="text-sm py-2.5 md:py-4 lg:py-[18px] px-4 md:px-7 lg:px-9 md:w-fit rounded-full text-[#9FE870] border border-[#9FE870]">Get Fusion POS</button>
                                <button className="text-sm py-2.5 ml-5 md:py-4 lg:py-[18px] px-4 md:px-7 lg:px-9 md:w-fit rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                            </div>
                        </div>
                        <img data-aos="fade-up" src={image2} alt="" />
                    </div>
                </MainContainer>
                <div className="flex flex-col lg:flex-row justify-between items-center mt-[150px] lg:mt-[250px] max-w-[1300px] px-5 mx-auto">

                    <div className="w-[100%] lg:w-[48%]">
                        <img data-aos="fade-right" src={image3} alt="" />
                    </div>
                    <div data-aos="fade-left" className="w-[100%] lg:w-[48%] mt-10 lg:mt-0">
                        <h1 className="text-[28px] lg:text-[60px] font-bold lg:leading-[70px]"><span className="text-primary">A POS</span> that keeps you in control and maximizing table turnover</h1>
                        <p className="text-[17px] lg:text-[22px] tracking-[2px] mt-10">Increase your table turnovers and manage all your reservations using Grafterr&apos;s powerful table booking platform</p>
                        <div className="mt-10">
                            <div className="flex items-center gap-x-6 ml-[20px]">
                                <div className="min-w-[17px] h-[17px] bg-primary rounded-full"></div>
                                <p className="text-[17px] md:text-[20px]">Online table booking built-in</p>
                            </div>
                            <div className="flex items-center gap-x-6 ml-[20px] my-3">
                                <div className="min-w-[17px] h-[17px] bg-primary rounded-full"></div>
                                <p className="text-[17px] md:text-[20px]">Intuitive booking calendar showing upcoming reservations</p>
                            </div>
                            <div className="flex items-center gap-x-6 ml-[20px]">
                                <div className="min-w-[17px] h-[17px] bg-primary rounded-full"></div>
                                <p className="text-[17px] md:text-[20px]">Intelligent coursing and order management features</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="py-[150px]">
                <div className="flex justify-between flex-col lg:flex-row items-center max-w-[1400px] px-5 mx-auto">
                    <div data-aos="fade-right" className="w-[100%] lg:w-[48%]">
                        <img src={image4} alt="" />
                    </div>
                    <div data-aos="fade-left" className="w-[100%] lg:w-[48%] mt-10 lg:mt-0">
                        <h1 className="text-[28px] lg:text-[60px] font-bold lg:leading-[70px]">Build an intelligent menu
                            in seconds</h1>
                        <p className="text-[17px] lg:text-[22px] tracking-[2px] mt-10">Our interactive menu builder allows you to add new items and customize your menu in seconds, while our powerful promotional tools make sure you’re always maximizing revenue</p>
                        <div className="mt-10">
                            <div className="flex items-center gap-x-6 ml-[20px]">
                                <div className="min-w-[17px] h-[17px]"><img src={circle} alt="circle" /></div>
                                <p className="text-[17px] md:text-[20px]">Intuitive menu builder with modifiers, variants and customizers</p>
                            </div>
                            <div className="flex items-center gap-x-6 ml-[20px] my-3">
                                <div className="min-w-[17px] h-[17px] "><img src={circle} alt="halfCir" /></div>
                                <p className="text-[17px] md:text-[20px]">Powerful meal deal and auto up-selling features</p>
                            </div>
                            <div className="flex items-center gap-x-6 ml-[20px]">
                                <div className="min-w-[17px] h-[17px]"><img src={circle} alt="minCir" /></div>
                                <p className="text-[17px] md:text-[20px]">Update or edit your menu or item availability in seconds</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between flex-col-reverse lg:flex-row items-center max-w-[1300px] px-5 mx-auto lg:mt-[200px] mt-[100px]">
                    <div className="w-[100%] lg:w-[48%]">
                        <h1 className="text-[28px] lg:text-[60px] font-bold lg:leading-[70px]">Staff rotes and HR management built in</h1>
                        <p className="text-[17px] lg:text-[22px] tracking-[2px] mt-10">You don&apos;t need a dedicated HR platform, Grafterr POS can look after your staff! Create full staff profiles, build rotas, track payroll costs, and monitor productivity with staff login.</p>
                        <div className="mt-10">
                            <div className="flex gap-x-6 ml-[20px]">
                                <div className="min-w-[17px] h-[17px] mt-1"><img src={circle} alt="circle" /></div>
                                <p className="text-[17px] md:text-[20px]">Build weekly rotas & automatically send them to staff</p>
                            </div>
                            <div className="flex gap-x-6 ml-[20px] my-3">
                                <div className="min-w-[17px] h-[17px] mt-1"><img src={circle} alt="halfCir" /></div>
                                <p className="text-[17px] md:text-[20px]">Create employee profiles and track training requirements</p>
                            </div>
                            <div className="flex gap-x-6 ml-[20px]">
                                <div className="min-w-[17px] h-[17px] mt-1"><img src={circle} alt="minCir" /></div>
                                <p className="text-[17px] md:text-[20px]">Gain insight into top sellers and most productive staff
                                    with intelligent productivity tracking</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] lg:w-[48%]">
                        <img src={image5} alt="" />
                    </div>
                </div>

                {/* <div className="max-w-[1300px] px-5 mt-[200px] mx-auto">
                        <GetAQuote />
                    </div> */}
            </section>

            <GetAQuote />

            <section className="w-full radial-gradient text-white py-[100px] lg:py-[150px]">
                <MainContainer>
                    <div className="flex flex-col-reverse lg:flex-col">
                        <div>
                            <h1 className="text-[28px] lg:text-[60px] font-bold lg:leading-[70px]">Process more orders,<br />faster than ever before</h1>
                            <p className="mb-6 md:mb-8 my-6 text-[#CCCCCC] text-xs sm:text-base md:text-lg xl:text-[22px] tracking-widest">Allow staff to focus on preparing orders and <br /> delivering a better service</p>
                            <div className="flex gap-4 justify-center md:justify-start md:gap-5 lg:gap-6 xl:gap-8 text-sm md:text-base lg:text-lg font-bold">
                                <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#9FE870] border border-[#9FE870]">Buy now</button>
                                <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Speak to an expert</button>
                            </div>
                        </div>
                        <img data-aos="fade-up" className="mt-10 lg:block hidden" src={image6} alt="image6" />
                        <img data-aos="fade-up" className="mt-10 lg:hidden block" src={image8} alt="image6" />
                    </div>

                    <div className="mt-[150px] lg:mt-[200px]">
                        <h1 className="text-[28px] lg:text-[60px] font-bold lg:leading-[70px]">Choose a plan that&apos;s <span className="text-primary">right</span> for you</h1>
                        <p className="w-[90%] lg:w-[55%] mb-6 md:mb-8 my-6 text-[#CCCCCC] sm:text-base md:text-lg xl:text-[22px] tracking-widest">All of our packages are totally flexible, so you can upgrade, downgrade or pause your subscription anytime!</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-10 lg:gap-8 mt-[60px] lg:mt-[100px]">
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
                            <div className="bg-black/10 border-[2px] border-primary lg:scale-110 rounded-[32px] overflow-hidden px-8 py-12">
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

            <section className="my-[100px] lg:my-[180px]">
                <MainContainer>
                    <PaymentGridCard />
                    <form onSubmit={handleFormSubmit}>
                        <div className="mt-[150px] lg:mt-[200px]">
                            <h1 className="text-[28px] lg:text-[60px] font-bold lg:leading-[70px]">We’re here to help!</h1>

                            <div className="w-full radial-gradient overflow-hidden rounded-[20px] md:rounded-[32px] py-6 mt-10 p-4 md:p-8">
                                <h3 className="text-white">Speak to our friendly team today!</h3>
                                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                    <input className="inner-shadow focus:outline-none h-[50px] rounded-[32px] px-8" placeholder="Full name" type="text" name="full_name" required />
                                    <input className="inner-shadow focus:outline-none h-[50px] rounded-[32px] px-8" placeholder="Phone no" type="text" name="phone_no" required />
                                </div>
                                <div className="mt-4 grid  md:grid-cols-2 gap-4 md:gap-8">
                                    <input className="inner-shadow focus:outline-none h-[50px] rounded-[32px] px-8" placeholder="Business name" type="text" name="business_name" />
                                    <input className="inner-shadow focus:outline-none h-[50px] rounded-[32px] px-8" placeholder="Email address" type="email" name="email" required />
                                </div>
                                <textarea className="w-full px-8 py-4 mt-4 rounded-[32px] h-[150px]  inner-shadow focus:outline-none" name="inquery" id="" required placeholder="Let us know about you inquery"></textarea>
                                <div className="text-white mt-4 lg:block hidden">
                                    <div>
                                        <input type="radio" name="privacy1" required />
                                        <span className="text-xs ml-4">I agree to the processing and sharing of my personal data as required to use the Grafterr Service and as outlined within the Terms of Use and Privacy Policy.</span>
                                    </div>
                                    <div>
                                        <input type="radio" name="privacy2" required />
                                        <span className="text-xs ml-4">I would like to stay up to date with Grafterr&apos;s latest news and offers and agree to receive any updates and newsletter.</span>
                                    </div>
                                </div>
                                <div className="text-white mt-4 lg:hidden block">
                                    <div>
                                        <input type="radio" required />
                                        <span className="text-xs ml-4">I agree with the Terms of Use and Privacy Policy.</span>
                                    </div>
                                    <div>
                                        <input type="radio" required />
                                        <span className="text-xs ml-4">I agree to receive any updates and newsletter.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-5 mt-6">
                                <button type="submit" className="border-2 px-6 flex items-center gap-x-3 py-3 rounded-[56px] font-semibold border-black">Send Message <img src={send} alt="" /> </button>
                                <p className="font-semibold">{submitMessage && submitMessage}</p>
                            </div>
                        </div>
                    </form>
                </MainContainer>
            </section>

            <Footer />

        </>
    );
};

export default Pos;