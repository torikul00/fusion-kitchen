import { useEffect, useState } from "react";
import HeaderContainer from "../components/HeaderContainer";
import Navbar from "../components/Navbar";
import MainContainer from "../components/MainContainer";
import bannerImg from "../assets/images/online ordering/banner.png";
import bannerImg2 from "../assets/images/online ordering/banner2.png";
import image1 from "../assets/images/online ordering/image 200.png"
import image2 from "../assets/images/online ordering/image 807.png"
import electronicsImg1 from "../assets/images/online ordering/electronics-img-1 1.png"
import electronicsImg2 from "../assets/images/online ordering/electronics-img-2 1.png"
import electronicsImg3 from "../assets/images/online ordering/electronics-img-3 1.png"
import branded from "../assets/images/online ordering/branded.svg"
import delivery from "../assets/images/online ordering/delivery.svg"
import timeSlot from "../assets/images/online ordering/time-slot.svg"
import clickCollect from "../assets/images/online ordering/click-collect.svg"
import preOrder from "../assets/images/online ordering/pre-order.svg"
import timeBased from "../assets/images/online ordering/time-slot.svg"
import marketingTools from "../assets/images/online ordering/marketing-tools.png"
import mobileApp from "../assets/images/online ordering/mobile-app.svg"
import CustomerReviews from "../components/CustomerReviews";
import Footer from "../components/Footer";
import { FaAngleDown, FaArrowDown, FaArrowRight } from "react-icons/fa6";
import done from "../assets/images/online ordering/done.svg";
import wixLogo from "../assets/images/online ordering/wixLogo.svg";
import withWix from "../assets/images/online ordering/with-wix.png";
import phoneTabletCom from "../assets/images/online ordering/phone-table-computer.png";
import GetAQuote from "../components/GetAQuote";
import PaymentGridCard from "../components/PaymentGridCard";
import messageIcon from "../assets/images/online ordering/messageIcon.svg"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const OnlineOrdering = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [categoryTab, setCategoryTab] = useState("Fasion & Beauty");
    const [openBussinessType, setOpenBusinessType] = useState(false)
    const [industry, setIndustry] = useState("Restaurant")
    const [submitMessage, setSubmitMessage] = useState('')
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
        const formData = new FormData(e.target);
        const fullName = formData.get('fullName');
        const businessName = formData.get('businessName');
        const phone = formData.get('phone');
        const email = formData.get('email');
        console.log(fullName, businessName, phone, email);
        e.target.reset();
        setSubmitMessage('Form submitted successfully!');
    }


    return (
        <>
            <header className={`w-full z-50 bg-[#141817] relative overflow-hidden mb-0 h-fit lg:h-[911px]`}>
                <HeaderContainer>
                    <Navbar />
                    <div className={`h-fit lg:h-[821px] w-full py-10 lg:py-0 text-white flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center overflow-hidden`}>
                        <div className="w-full lg:w-2/5 flex flex-col-reverse">
                            <div className="my-20 lg:my-0">
                                <h1 className="w-[90%] sm:w-4/5 lg:w-full text-3xl md:text-4xl lg:text-6xl  lg:leading-[65px] xl:leading-[86px] font-bold"><span className="text-[#9FE870]">Online</span> Ordering System</h1>
                                <p className="w-5/6 mb-6 md:mb-8 mt-3 text-[#CCCCCC] text-sm sm:text-base md:text-lg xl:text-[22px] tracking-widest">Cut the commission and generate direct orders for yourself</p>
                                <div className="flex gap-4 justify-center md:justify-start md:gap-5 lg:gap-6 xl:gap-8 text-sm md:text-base lg:text-lg font-bold">
                                    <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#9FE870] border border-[#9FE870]">Get Started</button>
                                    <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                                </div>
                            </div>
                            <div className="lg:hidden w-full mt-6 flex justify-center items-center">
                                <div className="w-full md:w-[800px]">
                                    <Swiper
                                        effect={'fade'}
                                        autoplay={{
                                            delay: 3000,
                                        }}
                                        modules={[Autoplay]}
                                    >
                                        <SwiperSlide>
                                            <img src={bannerImg} alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src={bannerImg2} alt="" />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="hidden select-none h-full lg:w-[70%] xl:w-[55%] lg:flex justify-end items-center -z-10">
                            <Swiper
                                effect={'fade'}
                                autoplay={{
                                    delay: 3000,
                                }}
                                modules={[Autoplay]}
                            >
                                <SwiperSlide>
                                    <img src={bannerImg} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={bannerImg2} alt="" />
                                </SwiperSlide>
                            </Swiper>
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

            <section className="tab-section-gradient w-full py-12 mb-[50px] md:-[100px] lg:mb-[180px]">
                <div className="max-w-[1300px] mx-auto md:px-5">
                    <div className="bg-[#9FE870] hide-scrollbar md:rounded-full p-2 overflow-scroll flex lg:grid lg:grid-cols-7 gap-2 mb-[90px]" style={{ boxShadow: 'inset 9px 9px 15px 1px rgba(0,0,0,0.2)' }}>
                        <button onClick={() => setCategoryTab('Fasion & Beauty')} className={`${categoryTab === 'Fasion & Beauty' ? 'bg-white rounded-full shadow-lg' : 'bg-none'} px-4 lg:px-0 py-3 text-[#1A1A1A] transition-all duration-200 hover:shadow-lg hover:bg-white hover:rounded-full min-w-fit`}>Fashion & Beauty</button>
                        <button onClick={() => setCategoryTab('Electronics')} className={`${categoryTab === 'Electronics' ? 'bg-white rounded-full shadow-lg' : 'bg-none'} px-4 lg:px-0 py-3 text-[#1A1A1A] transition-all duration-200 hover:shadow-lg hover:bg-white hover:rounded-full min-w-fit`}>Electronics</button>
                        <button onClick={() => setCategoryTab('Arts & Crafts')} className={`${categoryTab === 'Arts & Crafts' ? 'bg-white rounded-full shadow-lg' : 'bg-none'} px-4 lg:px-0 py-3 text-[#1A1A1A] transition-all duration-200 hover:shadow-lg hover:bg-white hover:rounded-full min-w-fit`}>Arts & Crafts</button>
                        <button onClick={() => setCategoryTab('Home & Kitchen')} className={`${categoryTab === 'Home & Kitchen' ? 'bg-white rounded-full shadow-lg' : 'bg-none'} px-4 lg:px-0 py-3 text-[#1A1A1A] transition-all duration-200 hover:shadow-lg hover:bg-white hover:rounded-full min-w-fit`}>Home & Kitchen</button>
                        <button onClick={() => setCategoryTab('Jewelry')} className={`${categoryTab === 'Jewelry' ? 'bg-white rounded-full shadow-lg' : 'bg-none'} px-4 lg:px-0 py-3 text-[#1A1A1A] transition-all duration-200 hover:shadow-lg hover:bg-white hover:rounded-full min-w-fit`}>Jewelry</button>
                        <button onClick={() => setCategoryTab('Supermarket')} className={`${categoryTab === 'Supermarket' ? 'bg-white rounded-full shadow-lg' : 'bg-none'} px-4 lg:px-0 py-3 text-[#1A1A1A] transition-all duration-200 hover:shadow-lg hover:bg-white hover:rounded-full min-w-fit`}>Supermarket</button>
                        <button onClick={() => setCategoryTab('Restaurants')} className={`${categoryTab === 'Restaurants' ? 'bg-white rounded-full shadow-lg' : 'bg-none'} px-4 lg:px-0 py-3 text-[#1A1A1A] transition-all duration-200 hover:shadow-lg hover:bg-white hover:rounded-full min-w-fit`}>Restaurants</button>
                    </div>
                </div>
                <div key={categoryTab} data-aos="fade-up" data-aos-duration="500" className="px-5">
                    <div className="lg:grid grid-cols-3 hidden justify-center gap-10">
                        <div>
                            <img className="ml-[20%]" src={electronicsImg1} alt="" />
                        </div>
                        <div>
                            <img className="ml-[20%]" src={electronicsImg2} alt="" />
                        </div>
                        <div>
                            <img className="mx-auto w-[50%]" src={electronicsImg3} alt="" />
                        </div>
                    </div>
                    {categoryTab === 'Fasion & Beauty' && <div className="lg:hidden block px-3">
                        <Swiper
                            slidesPerView="auto"
                            modules={[Autoplay]}
                        >
                            <SwiperSlide>
                                <div>
                                    <img className="mx-auto px-2" src={electronicsImg1} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="mx-auto px-2" src={electronicsImg2} alt="" />

                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="mx-auto px-2 w-[50%]" src={electronicsImg3} alt="" />
                            </SwiperSlide>

                        </Swiper>
                    </div>}
                    {categoryTab !== 'Fasion & Beauty' && <div className="lg:hidden block px-3">
                        <Swiper
                            slidesPerView="auto"
                            modules={[Autoplay]}
                        >
                            <SwiperSlide>
                                <div>
                                    <img className="mx-auto px-2" src={electronicsImg2} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img className="mx-auto px-2" src={electronicsImg1} alt="" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img className="mx-auto px-2 w-[50%]" src={electronicsImg3} alt="" />
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>}
                </div>
            </section>

            <section className="mb-[50px] lg:mb-[135px]">
                <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-32">
                    <img src={image1} alt="" className="w-full lg:w-[70%] lg:-ml-[24%] rounded-lg " />

                    <div className="w-full px-5 lg:w-[55%]">
                        <h1 className="text-[28px] lg:text-[60px] font-bold lg:leading-[70px]">Cut the commission & generate your own online orders</h1>
                        <p className="text-[17px] lg:text-[22px] tracking-[2px] mt-5">Everything you need to take online orders directly from your customers without using 3rd parties. Grow your business with online ordering, marketing and loyalty campaigns.</p>

                        <div className="mt-5 space-y-3">
                            <div className="flex items-center gap-x-5">
                                <div className="min-w-[17px] h-[17px] bg-[#1A1A1A] rounded-full"></div>
                                <p className="text-[17px] md:text-[20px]">Automatically sync new online orders to your POS + Kitchen or manage everything from your mobile or computer</p>
                            </div>
                            <div className="flex items-center gap-x-5">
                                <div className="min-w-[17px] h-[17px] bg-[#1A1A1A] rounded-full"></div>
                                <p className="text-[17px] md:text-[20px]">Drive more orders using our marketing suite with email, SMS and mobile push notifications</p>
                            </div>
                            <div className="flex items-center gap-x-5">
                                <div className="min-w-[17px] h-[17px] bg-[#1A1A1A] rounded-full"></div>
                                <p className="text-[17px] md:text-[20px]">Drive more orders using our marketing suite with email, SMS and mobile push notifications</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className="bg-[#141817] py-[135px] relative overflow-hidden">
                <div className="greenCustomAnimationPOS"></div>
                <div className="max-w-[1300px] px-5 mx-auto mb-[130px] lg:mb-[180px]">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <img src={image2} alt="" className="w-full lg:w-[42%]" />
                        <div className=" lg:w-[58%]">
                            <h1 className="w-[90%] text-white sm:w-4/5 lg:w-full text-3xl md:text-4xl lg:text-6xl lg:leading-[65px] xl:leading-[86px] font-bold">Create your <span className="text-primary">Free</span> online ordering page today</h1>
                            <p className="w-5/6 mb-6 md:mb-8 mt-3 text-white text-sm sm:text-base md:text-lg xl:text-[22px] tracking-widest">Accept online food orders for collection or delivery.</p>
                            <div className="flex gap-4 justify-center md:justify-start md:gap-5 lg:gap-6 xl:gap-8 text-sm md:text-base lg:text-lg font-bold">
                                <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#9FE870] border border-[#9FE870]">Sign up for now</button>
                                <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                            </div>
                        </div>
                    </div>
                </div>

                <MainContainer>
                    <div className='mb-[200px]'>
                        <h1 className='w-full text-white sm:w-4/5 lg:w-full text-3xl md:text-4xl lg:text-6xl  lg:leading-[65px] xl:leading-[86px] font-bold'>All the features you need <br /> to help you <span className="text-primary">succeed</span></h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 mt-10 lg:mt-16'>
                            <div className='support-shadow bg-[#00000038] p-6 rounded-[32px]'>
                                <img src={branded} alt="support" />
                                <h3 className="font-bold text-2xl md:text-3xl my-6 text-white">Fully branded</h3>
                                <p className='text-white text-lg sm:text-xl'>Customize your online ordering to match your brand & add product images</p>
                            </div>
                            <div className='support-shadow bg-[#00000038] p-6 rounded-[32px]'>
                                <img src={delivery} alt="support" />
                                <h3 className="font-bold text-2xl md:text-3xl my-6 text-white">Delivery settings</h3>
                                <p className='text-white text-lg sm:text-xl'>Set estimated delivery times, delivery radius & fees as well minimum order values</p>
                            </div>
                            <div className='support-shadow bg-[#00000038] p-6 rounded-[32px]'>
                                <img src={timeSlot} alt="support" />
                                <h3 className="font-bold text-2xl md:text-3xl my-6 text-white">Time slot limits</h3>
                                <p className='text-white text-lg sm:text-xl'>Limit the number of orders you can accept in a set time period.</p>
                            </div>
                            <div className='support-shadow bg-[#00000038] p-6 rounded-[32px]'>
                                <img src={clickCollect} alt="support" />
                                <h3 className="font-bold text-2xl md:text-3xl my-6 text-white">Click & collect</h3>
                                <p className='text-white text-lg sm:text-xl'>Let customers choose what time they want delivery or collection in the future</p>
                            </div>
                            <div className='support-shadow bg-[#00000038] p-6 rounded-[32px]'>
                                <img src={preOrder} alt="support" />
                                <h3 className="font-bold text-2xl md:text-3xl my-6 text-white">Pre-orders</h3>
                                <p className='text-white text-lg sm:text-xl'>Offer customers free in-person collection for orders placed online</p>
                            </div>
                            <div className='support-shadow bg-[#00000038] p-6 rounded-[32px]'>
                                <img src={timeBased} alt="support" />
                                <h3 className="font-bold text-2xl md:text-3xl my-6 text-white">Time-based menus</h3>
                                <p className='text-white text-lg sm:text-xl'>Customize and change your menu automatically based on the time of day</p>
                            </div>
                        </div>
                    </div>
                </MainContainer>

                <div className="max-w-[1300px] px-5 mx-auto mb-[100px] lg:mb-[180px]">
                    <div className="flex flex-col-reverse lg:flex-row gap-20 items-center">
                        <div className="lg:w-[58%]">
                            <h1 className="w-[90%] text-white sm:w-4/5 lg:w-full text-3xl md:text-4xl lg:text-6xl  lg:leading-[65px] xl:leading-[86px] font-bold">Marketing<span className="text-primary"> tools</span> built in</h1>
                            <p className="w-5/6 mb-6 md:mb-8 mt-3 text-white text-sm sm:text-base md:text-lg xl:text-[22px] tracking-widest">Connect with your customers directly, build relationships, create loyal customers and generate more repeat orders</p>
                            <div className="flex gap-4 justify-center md:justify-start md:gap-5 lg:gap-6 xl:gap-8 text-sm md:text-base lg:text-lg font-bold">
                                <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#9FE870] border border-[#9FE870]">Sign up for now</button>
                                <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                            </div>
                        </div>
                        <img src={marketingTools} alt="" className="w-[80%] lg:w-[42%]" />
                    </div>
                </div>

                <div className="max-w-[1300px] px-5 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <img src={mobileApp} alt="" className="lg:w-[42%]" />
                        <div className="lg:w-[58%]">
                            <h1 className="w-[90%] text-white sm:w-4/5 lg:w-full text-3xl md:text-4xl lg:text-6xl  lg:leading-[65px] xl:leading-[86px] font-bold">Launch a fully branded mobile app for <span className="text-primary">free</span></h1>
                            <p className="w-5/6 mb-6 md:mb-8 mt-3 text-white text-sm sm:text-base md:text-lg xl:text-[22px] tracking-widest">Take your business to the next level with a fully branded mobile app. Let your customers place orders, track delivery status and collect loyalty points directly from their phone.</p>
                            <div className="flex gap-4 justify-center md:justify-start md:gap-5 lg:gap-6 xl:gap-8 text-sm md:text-base lg:text-lg font-bold">
                                <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#9FE870] border border-[#9FE870]">Sign up for now</button>
                                <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="my-[70px] lg:my-[180px]">
                <MainContainer>
                    <div className="flex gap-3 lg:gap-8 items-center">
                        <h3 className='text-[#1A1A1A] text-xl md:text-3xl lg:text-5xl font-bold'>We are now integrated with</h3>
                        <img className="w-[90px]" src={wixLogo} alt="" />
                    </div>
                    <p className="w-5/6 mb-6 md:mb-8 mt-3 text-sm sm:text-base md:text-lg xl:text-[22px] tracking-widest">Instantly launch your very own online ordering platform on your Wix website, no code required!</p>

                    <div className="bg-[#9ee8705d] hide-scrollbar overflow-scroll md:overflow-hidden w-full rounded-full p-2 flex md:grid md:grid-cols-3 gap-[14px] mt-7 mb-9 lg:w-3/5" style={{ boxShadow: 'inset 9px 9px 15px 1px rgba(0,0,0,0.1)' }}>
                        <button className={`bg-white min-w-fit rounded-full shadow-lg px-4 lg:px-0 py-2.5 text-[#1A1A1A] cursor-text`}>Install the Fusion App</button>
                        <button className={`bg-white min-w-fit rounded-full shadow-lg px-4 lg:px-0 py-2.5 text-[#1A1A1A] cursor-text`}>Add your menu</button>
                        <button className={`bg-white min-w-fit rounded-full shadow-lg px-4 lg:px-0 py-2.5 text-[#1A1A1A] cursor-text`}>Start receiving orders</button>
                    </div>
                    <img src={withWix} alt="" />
                </MainContainer>
            </section>

            <section className="mb-[200px]">
                <MainContainer>
                    <h3 className='w-[90%]sm:w-4/5 lg:w-full text-3xl md:text-4xl lg:text-6xl  lg:leading-[65px] xl:leading-[86px] font-bold'>Receive orders directly to <br /> your phone, tablet, or computer</h3>
                    <p className="w-5/6 mb-6 md:mb-8 mt-3 text-sm sm:text-base md:text-lg xl:text-[22px] tracking-widest">Effortlessly oversee your online orders from your phone, tablet, or desktop with our user-friendly platform. Simplifying order management like never before.</p>
                    <img className="scale-110 ml-[-20px] mt-10 md:scale-100 lg:ml-0 lg:mt-0" src={phoneTabletCom} alt="" />
                </MainContainer>
            </section>

            <GetAQuote />

            <MainContainer>
                <PaymentGridCard />
            </MainContainer>

            <section className="my-[60px] lg:my-[120px]">
                <MainContainer>
                    <h3 className='text-[28px] lg:text-[60px] font-bold lg:leading-[70px]'>We&apos;re here to help!</h3>
                    <div className="mt-10  radial-gradient rounded-3xl flex flex-col lg:flex-row gap-[100px] p-4 md:p-8">
                        <div className="lg:w-[40%] text-white border border-primary rounded-[32px] overflow-hidden px-12 py-10" style={{ boxShadow: '1px 1px 22px -7px #9ee87094' }}>
                            <h1 className="text-[32px] font-bold">Free</h1>
                            <h3 className="text-[20px] mb-3">Unlimited orders</h3>
                            <h3 className="text-[32px]"><span className="text-primary">£0</span> / per month</h3>
                            <h3 className="text-[32px]"><span className="text-primary">39%</span> Commission</h3>
                            <div className="flex items-start gap-x-3 mt-3">
                                <img className="mt-1" src={done} alt="" />
                                <p className="leading-[30px]">Fully branded mobile app</p>
                            </div>
                            <div className="flex items-start gap-x-3 mt-3">
                                <img className="mt-1" src={done} alt="" />
                                <p className="leading-[30px]">Interactive website builder</p>
                            </div>
                            <div className="flex items-start gap-x-3 mt-3">
                                <img className="mt-1" src={done} alt="" />
                                <p className="leading-[30px]">Online ordering platform</p>
                            </div>
                            <div className="flex items-start gap-x-3 mt-3">
                                <img className="mt-1" src={done} alt="" />
                                <p className="leading-[30px]">Marketing & promotional tools</p>
                            </div>
                            <button className="mt-6 text-[22px] text-primary flex items-center gap-x-3">Sign up now <FaArrowRight /></button>
                        </div>

                        <form onSubmit={handleFormSubmit} className="lg:w-[55%] text-white">
                            <h4 className="text-[22px] font-bold mb-1">Need some advice?</h4>
                            <p className="text-sm mb-5">Our friendly team are on hand to answer any questions you may have, no hard sale, we promise!</p>
                            <input required type="text" id="fullName" name="fullName" className="w-full border-none outline-none bg-white text-[#1A1A1A] rounded-full py-2.5 px-5 mb-3 placeholder:text-[#808080] shadow-inset" placeholder="Full name" />
                            <input required type="text" id="businessName" name="businessName" className="w-full border-none outline-none bg-white text-[#1A1A1A] rounded-full py-2.5 px-5 mb-3 placeholder:text-[#808080] shadow-inset" placeholder="Business name" />
                            <input required type="text" id="phone" name="phone" className="w-full border-none outline-none bg-white text-[#1A1A1A] rounded-full py-2.5 px-5 mb-3 placeholder:text-[#808080] shadow-inset" placeholder="Phone no" />
                            <input required type="email" id="email" name="email" className="w-full border-none outline-none bg-white text-[#1A1A1A] rounded-full py-2.5 px-5 mb-3 placeholder:text-[#808080] shadow-inset" placeholder="Email address" />
                            <textarea required rows={3} id="message" name="message" className="w-full border-none outline-none bg-white text-[#1A1A1A] rounded-[32px] py-2.5 px-5 placeholder:text-[#808080] shadow-inset" placeholder="Message"></textarea>
                            <div className="flex flex-col md:flex-row items-center mt-5 gap-5">
                                <button type="submit" className="border border-primary hover:shadow-md hover:shadow-[#9ee8705d] transition-all text-lg font-bold flex gap-3 items-center px-8 py-3  rounded-full">
                                    Send Message
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.8054 2.03428L16.0559 23.564C15.8593 24.0228 15.5193 24.3054 15.0359 24.4119C14.5526 24.5184 14.1307 24.3914 13.7702 24.031L0.990024 11.2508C0.629557 10.8903 0.502574 10.4684 0.609076 9.98504C0.715577 9.50168 0.998216 9.1617 1.45699 8.96508L22.9867 0.21556C23.5766 -0.0138278 24.0845 0.0844815 24.5105 0.510488C24.9365 0.936494 25.0348 1.44443 24.8054 2.03428ZM14.2618 20.5901L20.9959 4.02504L4.43084 10.7592L7.87166 14.2L15.2449 9.77613L10.8209 17.1493L14.2618 20.5901Z" fill="white" />
                                    </svg>
                                </button>
                                <p className="font-semibold text-white">{submitMessage && submitMessage}</p>
                            </div>
                        </form>
                    </div>
                </MainContainer>
            </section>

            <div className="mb-[60px] lg:mb-[150px]">
                <CustomerReviews />
            </div>
            <Footer />
        </>
    );
};

export default OnlineOrdering;