import HeaderContainer from "../components/HeaderContainer";
import MainContainer from "../components/MainContainer";
import MobileNavbar from "../components/MobileNavbar";
import header from '../assets/images/pos/header.png'
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import {useRef, useState } from 'react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import ipadMini from '../assets/images/pos/ipad-mini.png'
import iphone from '../assets/images/iphone.png'
import pos1 from '../assets/images/pos1.png'
import image1 from '../assets/images/pos/image1.png'
import image2 from '../assets/images/pos/image2.png'
import image3 from '../assets/images/pos/image3.png'
import image4 from '../assets/images/pos/image4.png'
import image5 from '../assets/images/pos/image5.png'
import stuff from '../assets/images/pos/stuff.png'
import image6 from '../assets/images/pos/image6.png'
import shape1 from '../assets/images/pos/Shape.png'
import shape2 from '../assets/images/pos/Shape (1).png'
import shape3 from '../assets/images/pos/Shape (2).png'
import shape4 from '../assets/images/pos/Shape (3).png'
import delivery from '../assets/images/pos/delivery.png'
import parcel from '../assets/images/pos/parcel.png'
import dine from '../assets/images/pos/dine.png'
import pick from '../assets/images/pos/pick.png'
import fusion from '../assets/images/pos/fusion.png'
import deliveroo from '../assets/images/pos/deliveroo.png'
import eat from '../assets/images/pos/eat.png'
import uber from '../assets/images/pos/uber.png'
import addOrEdit from '../assets/images/pos/addOrEdit.png'

import doublePhone from '../assets/images/pos/doublePhone.png'
import map from '../assets/images/pos/map.png'
import kitchen from '../assets/images/pos/kitchen.png'
import order from '../assets/images/pos/order.png'
import table from '../assets/images/pos/table.png'
import done from '../assets/images/pos/done.svg'
import circle from '../assets/images/pos/circle.svg'
import send from '../assets/images/pos/send.svg'
import Footer from "../components/Footer";
import GetAQuote from "../components/GetAQuote";
import PaymentGridCard from "../components/PaymentGridCard";
import Navbar from "../components/Navbar";
import ScrollBottomBar from "../components/ScrollBottomBar";

const Pos = () => {
    const [swiperInstance, setSwiperInstance] = useState(null)
    const [submitMessage, setSubmitMessage] = useState('')
    const getAQuoteRef = useRef(null)
    const formRef = useRef(null)
    const pricingRef = useRef(null)
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

    const navigateToGetAQuote = () => {
        getAQuoteRef.current.scrollIntoView()
    }
    const navigateToForm = () => {
        formRef.current.scrollIntoView()
    }
    const navigateToPricing = () => {
        pricingRef.current.scrollIntoView()
    }
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
    const handleScrollBottom = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }
    return (
        <div className="overflow-hidden">
            <header className={`w-full z-50 bg-[#141817]  pt-[70px] lg:pt-0 relative mb-0 h-fit lg:h-[911px]`}>
                <HeaderContainer>
                <div className="pt-[100px] hidden lg:block">
                            <Navbar />
                        </div>
                         <div className='lg:hidden fixed w-[90%] z-[99] top-0'>
                            <MobileNavbar />
                        </div>
                    <div className={`h-fit lg:h-[821px] w-full py-10 lg:py-0 text-white flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center`}>
                        <div className="w-full lg:w-2/5 flex flex-col mt-10 lg:mt-0">
                            <h1 className="w-[90%] md:w-4/5 lg:w-full text-3xl md:text-4xl lg:text-6xl xl:text-[80px] lg:leading-[65px] xl:leading-[86px] font-bold"><span className="text-[#9FE870]">ePOS </span>Software for Hospitality</h1>
                            <p className="mb-6 md:mb-8 mt-3 text-[#CCCCCC] text-xs sm:text-base md:text-lg xl:text-[22px] tracking-widest">Work smarter and automate for efficiency on the software and hardware platform millions of businesses trust</p>
                            <div className="flex gap-4 justify-center md:justify-start md:gap-5 lg:gap-6 xl:gap-8 text-sm md:text-base lg:text-lg font-bold">
                                <button onClick={navigateToGetAQuote} className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#9FE870] border border-[#9FE870]">Get Started</button>
                                <button onClick={navigateToForm} className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                            </div>
                            <button className="lg:hidden flex mx-auto text-primary  items-center gap-x-3 mt-28 tracking-[3px] animate-bounce">Scroll <FaArrowDown /></button>
                        </div>

                        <div className="w-full lg:absolute lg:right-0 lg:w-[45%] mt-6">
                            <img className="scale-[1.1] md:scale-100" src={header} alt="header" />
                            <button onClick={handleScrollBottom} className="lg:flex hidden text-primary  items-center gap-x-3 mt-10 tracking-[3px] animate-bounce">Scroll <FaArrowDown /></button>
                        </div>
                    </div>
                    <ScrollBottomBar />
                </HeaderContainer>
            </header>

            <section className="py-[50px] md:py-[100px]">
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

                <div className='h-fit max-w-[1450px] mx-auto mt-[30px] md:mt-[40px] px-5'>
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
                                    className='w-[33.33%] p-4 lg:p-4 mb-14'>
                                    <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-6 pb-0 rounded-[32px] relative'>
                                        <h3 className='text-[20px] md:text-2xl font-semibold text-center mb-5'>Interactive menu builder</h3>
                                        <h3 className='text-[20px] md:text-xl font-medium text-center mb-5'>Add new menu items in seconds with our interactive builder</h3>
                                        <img src={ipadMini} alt="" className='w-[240px] block absolute bottom-[10%] right-[10%] md:right-[12%] xl:right-[15.6%]' />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className='w-[33.33%] p-4 lg:p-4 mb-14 '>
                                    <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-6 pb-0 rounded-[32px] relative overflow-hidden'>
                                        <h3 className='text-[20px] md:text-2xl font-semibold text-center mb-5'>Multiple service types</h3>
                                        <h3 className='text-[20px] md:text-xl font-medium text-center mb-5'>Eat-in, takeaway, delivery, collection, drive through. Manage all your orders in one place</h3>
                                        <img src={iphone} alt="" className='w-[240px] block absolute bottom-[-1 0%] right-[14%] scale-[]' />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide
                                    className='w-[33.33%] p-4 lg:p-4 mb-14'>
                                    <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-6 pb-0 rounded-[32px]'>
                                        <h3 className='text-[20px] md:text-2xl font-semibold text-center mb-5'>Powerful promotions & marketing tools</h3>
                                        <h3 className='text-[20px] md:text-xl font-medium text-center mb-5'>Happy hour, discounts, vouchers and loyalty all built in. Marketing tools designed to drive revenue</h3>
                                        <img src={pos1} alt="" className='h-[350px] w-auto object-cover  absolute bottom-[-5%] left-[1%] scale-[0.8]' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide
                                    className='w-[33.33%] p-4 lg:p-4 mb-14'>
                                    <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-6 pb-0 rounded-[32px] relative'>
                                        <h3 className='text-[20px] md:text-2xl font-semibold text-center mb-5'>Table management & booking</h3>
                                        <h3 className='text-[20px] md:text-xl font-medium text-center mb-5'>Stay on top of your table bookings and let customers book online </h3>
                                        <img src={table} alt="" className='w-[240px] block absolute bottom-[7%] right-[10%] md:right-[12%] xl:right-[15.6%]' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide
                                    className='w-[33.33%] p-4 lg:p-4 mb-14'>
                                    <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-6 pb-0 rounded-[32px] relative'>
                                        <h3 className='text-[20px] md:text-2xl font-semibold text-center mb-5'>Stock control & supplier management</h3>
                                        <h3 className='text-[20px] md:text-xl font-medium text-center mb-5'>Item & ingredient level tracking. out-of-stock notifications. supplier management and automatic item reordering</h3>
                                        <img src={doublePhone} alt="" className='w-[240px] block absolute bottom-[7%] right-[10%] md:right-[12%] xl:right-[15.6%]' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide
                                    className='w-[33.33%] p-4 lg:p-4 mb-14'>
                                    <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-6 pb-0 rounded-[32px] relative'>
                                        <h3 className='text-[20px] md:text-2xl font-semibold text-center mb-5'>Delivery management & live driver tracking</h3>
                                        <h3 className='text-[20px] md:text-xl font-medium text-center mb-5'>Manage all of your deliveries. assign orders to drivers. send customer updates and track drivers in real time</h3>
                                        <img src={map} alt="" className='w-[240px] block absolute bottom-[10%] scale-110 right-[10%] md:right-[12%] xl:right-[15.6%]' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide
                                    className='w-[33.33%] p-4 lg:p-4 mb-14'>
                                    <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-6 pb-0 rounded-[32px] relative'>
                                        <h3 className='text-[20px] md:text-2xl font-semibold text-center mb-5'>Kitchen management</h3>
                                        <h3 className='text-[20px] md:text-xl font-medium text-center mb-5'>Instantly send orders to the kitchen from FOR split orders by prep area and organize orders by courses</h3>
                                        <img src={kitchen} alt="" className='w-[240px] block absolute bottom-[10%] scale-110 right-[10%] md:right-[12%] xl:right-[15%]' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide
                                    className='w-[33.33%] p-4 lg:p-4 mb-14'>
                                    <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-6 pb-0 rounded-[32px] relative'>
                                        <h3 className='text-[20px] md:text-2xl font-semibold text-center mb-5'>Staff management & rotas</h3>
                                        <h3 className='text-[20px] md:text-xl font-medium text-center mb-5'>Create staff rotes. track payroll costs. stay on top of training, assign permissions and track productivity</h3>
                                        <img src={stuff} alt="" className='w-[240px] block absolute bottom-[7%] lg:bottom-[7%] md:bottom-0 lg:scale-110 right-[13%] md:right-[12%] xl:right-[15%]' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide
                                    className='w-[33.33%] p-4 lg:p-4 mb-14'>
                                    <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-6 pb-0 rounded-[32px] relative'>
                                        <h3 className='text-[20px] md:text-2xl font-semibold text-center mb-5'>Online order sync</h3>
                                        <h3 className='text-[20px] md:text-xl font-medium text-center mb-5'>Manage all your orders in one place. Sync your own website orders as well as Deliveroo & JustEat + others to your POS </h3>
                                        <img src={order} alt="" className='w-[240px] block absolute bottom-[7%] scale-125 right-[13%] md:right-[12%] xl:right-[15%]' />
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                        {/* TODO: */}
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
                                <button onClick={navigateToPricing} className="text-sm py-2.5 md:py-4 lg:py-[18px] px-4 md:px-7 lg:px-9 md:w-fit rounded-full text-[#9FE870] border border-[#9FE870]">Get Fusion POS</button>
                                <button onClick={navigateToForm} className="text-sm py-2.5 ml-5 md:py-4 lg:py-[18px] px-4 md:px-7 lg:px-9 md:w-fit rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
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

            <section className="py-[100px] lg:py-[150px]">
                <div className="flex justify-between flex-col lg:flex-row items-center max-w-[1400px] px-5 mx-auto">

                    <div className="w-[100%] lg:w-[40%]">
                        <img data-aos="fade-up" data-aos-delay="400" data-aos-once="true" src={addOrEdit} alt="" className="block lg:hidden"/>
                        <div className="relative lg:block hidden">
                            <img src={image4} alt="" />
                            <img data-aos-offset={600} data-aos="fade-up-left" data-aos-delay="400" data-aos-once="true" className="absolute top-[30px] -left-[100px] w-[120px]" src={delivery} alt="" />
                            <img data-aos-offset={600} data-aos="fade-down-left" data-aos-delay="400" data-aos-once="true" className="absolute bottom-[30px] -left-[100px] w-[120px]" src={parcel} alt="" />
                            <img data-aos-offset={600} data-aos="fade-up-right" data-aos-delay="400" data-aos-once="true" className="absolute top-[30px] -right-[100px] w-[120px]" src={dine} alt="" />
                            <img data-aos-offset={600} data-aos="fade-down-right" data-aos-delay="400" data-aos-once="true" className="absolute bottom-[30px] -right-[100px] w-[120px]" src={pick} alt="" />

                            <img data-aos-offset={600} data-aos="fade-down" data-aos-delay="400" data-aos-once="true" className="absolute left-[20px] -bottom-[110px]  w-[100px]" src={fusion} alt="" />
                            <img data-aos-offset={600} data-aos="fade-down" data-aos-delay="400" data-aos-once="true" className="absolute left-[155px] -bottom-[110px] w-[100px]" src={deliveroo} alt="" />
                            <img data-aos-offset={600} data-aos="fade-down" data-aos-delay="400" data-aos-once="true" className="absolute left-[285px] -bottom-[110px] w-[100px]" src={eat} alt="" />
                            <img data-aos-offset={600} data-aos="fade-down" data-aos-delay="400" data-aos-once="true" className="absolute right-[20px] -bottom-[110px] w-[100px]" src={uber} alt="" />
                        </div>
                    </div>
                    <div data-aos="fade-up" className="w-[100%] lg:w-[40%] mt-10 lg:mt-0">
                        <h1 className="text-[28px] lg:text-[60px] font-bold lg:leading-[70px]">Build an intelligent menu
                            in seconds</h1>
                        <p className="text-[17px] lg:text-[22px] tracking-[2px] mt-5">Our interactive menu builder allows you to add new items and customize your menu in seconds, while our powerful promotional tools make sure you’re always maximizing revenue</p>
                        <div className="mt-5">
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
                <div className="flex justify-between flex-col-reverse lg:flex-row items-center max-w-[1300px] px-5 mx-auto lg:mt-[200px] mt-[50px]">
                    <div className="w-[100%] lg:w-[48%]">
                        <h1 className="text-[28px] lg:text-[60px] font-bold lg:leading-[70px]">Staff rotes and HR management built in</h1>
                        <p className="text-[17px] lg:text-[22px] tracking-[2px] mt-5">You don&apos;t need a dedicated HR platform, Grafterr POS can look after your staff! Create full staff profiles, build rotas, track payroll costs, and monitor productivity with staff login.</p>
                        <div className="mt-5">
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

            </section>

            <div ref={getAQuoteRef}>
                <GetAQuote />
            </div>

            <section className="w-full radial-gradient text-white py-[60px] md:py-[100px] lg:py-[150px] overflow-hidden">
                <MainContainer>
                    <div className="flex flex-col-reverse lg:flex-col">
                        <div>

                            <h1 className="text-[28px] lg:text-[60px] font-bold lg:leading-[70px] mt-6 md:mt-0">Process more orders,<br />faster than ever before</h1>
                            <p className="mb-6 md:mb-8 my-6 text-[#CCCCCC] text-xs sm:text-base md:text-lg xl:text-[22px] tracking-widest">Allow staff to focus on preparing orders and <br /> delivering a better service</p>
                            <div className="flex gap-4 justify-center md:justify-start md:gap-5 lg:gap-6 xl:gap-8 text-sm md:text-base lg:text-lg font-bold">
                                <button onClick={navigateToPricing} className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#9FE870] border border-[#9FE870]">Buy now</button>
                                <button onClick={navigateToForm} className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Speak to an expert</button>
                            </div>
                        </div>
                        <div className="relative pt-[100px] mt-20 hidden lg:block">
                            <img className="scale-90 mt-[-50px] lg:block hidden" src={image6} alt="image6" />
                            <img data-aos="fade-up" data-aos-offset={600} data-aos-delay="600" data-aos-once="true" className="w-[170px] right-0 absolute top-0" src={shape1} alt="" />
                            <img data-aos="fade-left" data-aos-offset={600} data-aos-delay="600" data-aos-once="true" className="w-[170px] right-0 absolute top-[150px]" src={shape2} alt="" />
                            <img data-aos="fade-right" data-aos-offset={600} data-aos-delay="600" data-aos-once="true" className="w-[170px] right-0 absolute top-[300px]" src={shape3} alt="" />
                            <img data-aos="fade-left" data-aos-offset={600} data-aos-delay="600" data-aos-once="true" className="w-[170px] right-0 absolute top-[450px]" src={shape4} alt="" />
                        </div>
                        <div className="lg:hidden block relative">
                            <img className="lg:mt-10 scale-105" src={image6} alt="image6" />
                            {/* <img className="mt-10 lg:block hidden" src={image6} alt="image6" />
                            <img data-aos="fade-up" data-aos-offset={600} data-aos-delay="600" data-aos-once="true" className="w-[90px] md:w-[130px] left-0 absolute top-0" src={shape1} alt="" />
                            <img data-aos="fade-left" data-aos-offset={600} data-aos-delay="600" data-aos-once="true" className="w-[90px] md:w-[130px] left-0 absolute top-[80px] md:top-[120px]" src={shape2} alt="" />
                            <img data-aos="fade-right" data-aos-offset={600} data-aos-delay="600" data-aos-once="true" className="w-[90px] md:w-[130px] -right-3 absolute top-0" src={shape3} alt="" />
                            <img data-aos="fade-left" data-aos-offset={600} data-aos-delay="600" data-aos-once="true" className="w-[90px] md:w-[130px] -right-3 absolute top-[80px] md:top-[120px]" src={shape4} alt="" /> */}
                        </div>
                    </div>

                    <div ref={pricingRef} className="mt-[70px] md:mt[100px] lg:mt-[150px]">
                        <h1 className="text-[28px] lg:text-[60px] font-bold lg:leading-[70px]">Choose a plan that&apos;s <span className="text-primary">right</span> for you</h1>
                        <p className="w-[90%] lg:w-[55%] mb-6 md:mb-8 my-6 text-[#CCCCCC] sm:text-base md:text-lg xl:text-[22px] tracking-widest">All of our packages are totally flexible, so you can upgrade, downgrade or pause your subscription anytime!</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-8 mt-[40px] lg:mt-[100px]">
                            <div className=" bg-black/10 hover:border-[2px] support-shadow transition-all border-primary hover:lg:scale-110 rounded-[32px] overflow-hidden px-8 py-12">
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
                            <div className="bg-black/10 hover:border-[2px] support-shadow transition-all border-primary hover:lg:scale-110 rounded-[32px] overflow-hidden px-8 py-12">
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
                            <div className="bg-black/10 hover:border-[2px] support-shadow transition-all border-primary hover:lg:scale-110 rounded-[32px] overflow-hidden px-8 py-12">
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

            <section className="my-[60px] lg:my-[150px]">
                <MainContainer>
                    <PaymentGridCard />
                    <form ref={formRef} onSubmit={handleFormSubmit}>
                        <div className="mt-[60px] lg:mt-[200px]">
                            <h1 className="text-[28px] lg:text-[60px] font-bold lg:leading-[70px]">We&apos;re here to help!</h1>

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
                                        <input type="radio" name="privacy1" />
                                        <span className="text-xs ml-4">I agree to the processing and sharing of my personal data as required to use the Grafterr Service and as outlined within the Terms of Use and Privacy Policy.</span>
                                    </div>
                                    <div>
                                        <input type="radio" name="privacy2" />
                                        <span className="text-xs ml-4">I would like to stay up to date with Grafterr&apos;s latest news and offers and agree to receive any updates and newsletter.</span>
                                    </div>
                                </div>
                                <div className="text-white mt-4 lg:hidden block">
                                    <div>
                                        <input type="radio" />
                                        <span className="text-xs ml-4">I agree with the Terms of Use and Privacy Policy.</span>
                                    </div>
                                    <div>
                                        <input type="radio" />
                                        <span className="text-xs ml-4">I agree to receive any updates and newsletter.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-5 mt-6">
                                <button type="submit" className="border-2 px-6 flex items-center gap-x-3 py-3 rounded-[56px] font-semibold border-black">Send Message <img src={send} alt="" /> </button>
                                <p className="font-semibold">{submitMessage && submitMessage}</p>
                            </div>
                        </div>
                    </form>
                </MainContainer>
            </section>

            <Footer />

        </div>
    );
};

export default Pos;