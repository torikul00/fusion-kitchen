import {FaArrowDown, FaArrowRight } from "react-icons/fa6";
import MobileNavbar from "../components/MobileNavbar";
import HeaderContainer from "../components/HeaderContainer";
import { useEffect, useState } from "react";
import headerImg from "../assets/images/pricing/header.png"
import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";
import send from '../assets/images/pos/send.svg'
import CustomerReviews from "../components/CustomerReviews";
import Faq from "../components/Faq";
import done from '../assets/images/pos/done.svg'
import pricingData from "../Utilities/pricingData";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import Navbar2 from "../components/Navbar";
import { HiOutlineArrowRight } from "react-icons/hi";
import table from '../assets/images/pos/table.png'
import one from '../assets/images/pricing/1.png'
import two from '../assets/images/pricing/2.png'


const Pricing = () => {
    const [submitMessage, setSubmitMessage] = useState('')
    const [subscriptionType, setSubscriptionType] = useState('monthly')
    const [subscriptionTypeTwo, setSubscriptionTypeTwo] = useState('monthly')
    const [activeFeature, setActiveFeature] = useState(null)
    const [swiperInstance, setSwiperInstance] = useState(null)
    const [activePlan, setActivePlan] = useState('standard')

    const handlePrev = () => {
        if (swiperInstance) {
            swiperInstance.slidePrev();
            if (activePlan === 'enterprise') setActivePlan('premium')
            else if (activePlan === 'premium') setActivePlan('standard')
        }
    };
    const handleNext = () => {
        if (swiperInstance) {
            swiperInstance.slideNext();
            if (activePlan === 'standard') setActivePlan('premium')
            else if (activePlan === 'premium') setActivePlan('enterprise')
        }
    };


    useEffect(() => {
        setActiveFeature(pricingData[1])
    }, [])

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
        <div>
            <header className={`w-full z-50 bg-[#141817] relative pt-[70px] lg:pt-0 h-fit lg:h-[911px]`}>
                <HeaderContainer>
                    <div className="pt-[100px] hidden lg:block">
                        <Navbar2 />
                    </div>
                    <div className='lg:hidden fixed w-[90%] z-[99] top-0'>
                            <MobileNavbar />
                        </div>
                </HeaderContainer>
                <div className={`h-fit lg:h-[821px] w-full py-10 lg:py-0 text-white flex flex-col-reverse md:gap-y-10 lg:gap-y-0 lg:flex-row lg:justify-between lg:items-center`}>
             
                    <div className="md:mx-auto">
                       <HeaderContainer>
                       <div className="flex gap-x-20 lg:items-center flex-col lg:flex-row gap-6 lg:gap-0 justify-between mb-[80px] lg:w-[85%] w-full mx-auto">
                            <h1 className="text-[28px] lg:text-[60px] font-bold lg:leading-[86px]">Simple and transparent <br />
                                <span className="text-primary">POS pricing</span></h1>
                            <p className="text-[18px] md:text-[22px] text-[#cccccc] font-normal">Power your business with award-winning,<br /> purpose built technology</p>
                        </div>
                       <div className=" hidden md:flex justify-center">
                       <img className="w-[80%] " src={headerImg} alt="" />
                       </div>
                       </HeaderContainer>
                        <div className="overflow-scroll md:overflow-hidden block md:hidden">
                            <div className="w-[700px] md:w-auto">
                                <img className="w-full ml-5" src={headerImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </header>

            <section className="w-full bg-[#141817] text-white py-12 mb-[50px] md:-[100px] lg:mb-[150px] relative overflow-hidden">
                <div className="greenCustomAnimationPayment"></div>
                <MainContainer>
                    <div className="w-fit mx-auto bg-[#9FE870] rounded-full p-2 flex gap-2 mb-[90px]" style={{ boxShadow: 'inset 9px 9px 15px 1px rgba(0,0,0,0.2)' }}>
                        <button onClick={() => setSubscriptionType('monthly')} className={`${subscriptionType === 'monthly' ? 'bg-white rounded-full shadow-lg' : 'bg-none'} px-8 md:px-10 py-2 md:py-2.5 text-[#1A1A1A] transition-all duration-200 hover:shadow-lg hover:bg-white hover:rounded-full min-w-fit`}>Monthly</button>
                        <button onClick={() => setSubscriptionType('yearly')} className={`${subscriptionType === 'yearly' ? 'bg-white rounded-full shadow-lg' : 'bg-none'} px-8 md:px-10 py-2 md:py-2.5 text-[#1A1A1A] transition-all duration-200 hover:shadow-lg hover:bg-white hover:rounded-full min-w-fit`}>Yearly</button>
                    </div>

                    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-8 my-[40px] lg:my-[100px]">
                        <div className=" bg-black/10 hover:border-[2px] support-shadow transition-all border-primary hover:lg:scale-110 rounded-[32px] overflow-hidden px-8 py-12">
                            <h1 className="text-[32px] font-bold">Free</h1>
                            <h3 className="text-[20px]">Unlimited orders</h3>
                            <h3 className="text-[32px] my-5"><span className="text-primary">{subscriptionType === 'monthly' ? '£55.00' : '£550.00'}</span> / per {subscriptionType === 'monthly' ? 'month' : 'year'}</h3>
                            <div className="space-y-3 mb-7">
                                <p className="font-bold">Order processing:</p>
                                <p className="text-primary">Unlimited forever</p>
                                <p>In-store, online, mobile and telephone ordering</p>
                            </div>
                            <div>
                                <p className="font-bold">Features:</p>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Stock management</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Item & ingredient stock tracking</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Delivery management</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Live driver tracking</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Staff management</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Staff Rotas</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">3rd party integrations</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Unlimited 24/7 support</p>
                                </div>
                            </div>
                            <button className="mt-6 text-[22px] text-primary flex items-center gap-x-3">Sign up now <FaArrowRight /></button>
                        </div>
                        <div className="bg-black/10 hover:border-[2px] support-shadow transition-all border-primary hover:lg:scale-110 rounded-[32px] overflow-hidden px-8 py-12">
                            <h1 className="text-[32px] font-bold">Premium</h1>
                            <h3 className="text-[20px]">Unlimited orders</h3>
                            <h3 className="text-[32px] my-5"><span className="text-primary">{subscriptionType === 'monthly' ? '£75.00' : '£750.00'}</span> / per {subscriptionType === 'monthly' ? 'month' : 'year'}</h3>
                            <div className="space-y-3 mb-7">
                                <p className="font-bold">Order processing:</p>
                                <p className="text-primary">Unlimited forever</p>
                                <p>In-store, online, mobile and telephone ordering</p>
                            </div>
                            <div>
                                <p className="font-bold">Features:</p>
                                <p className="mt-6 leading-[36px]">Everything in  Standard, plus:</p>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Table management</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Online table reservations</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Digital waiter pads</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Customer loyalty management</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Gift vouchers</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Customer marketing suite</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Unlimited 24/7 support</p>
                                </div>
                            </div>
                            <button className="mt-6 text-[22px] text-primary flex items-center gap-x-3">Sign up now <FaArrowRight /></button>
                        </div>
                        <div className="bg-black/10 hover:border-[2px] support-shadow transition-all border-primary hover:lg:scale-110 rounded-[32px] overflow-hidden px-8 py-12">
                            <h1 className="text-[32px] font-bold">Enterprise</h1>
                            <h3 className="text-[20px]">Multi-location + Franchise</h3>
                            <h3 className="text-[32px] my-5 text-primary">Speak to sales</h3>
                            <p className="mb-7">A complete POS and hospitality management system created for multi-location and franchise businesses</p>
                            <div>
                                <p className="font-bold">Features:</p>
                                <p className="mt-6 leading-[34px]">Everything in  Premium, plus:</p>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">HQ dashboards</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Advanced location reporting</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Location grouping</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Multi-location menu control</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Multi-location reporting suite</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Central data sharing</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Cross location vouchers</p>
                                </div>
                                <div className="flex items-start gap-x-3 mt-6">
                                    <img className="mt-1" src={done} alt="" />
                                    <p className="leading-[34px]">Franchisee management</p>
                                </div>
                            </div>
                            <button className="mt-6 text-[22px] text-primary flex items-center gap-x-3">Sign up now <FaArrowRight /></button>
                        </div>
                    </div>
                    <div className="mb-[50px] block md:hidden">
                        <Swiper
                            pagination={{ clickable: true }}
                            slidesPerView={1}
                            spaceBetween={10}
                            modules={[Pagination]}
                            className="pricingSwiper"
                        >
                            <SwiperSlide>
                                <div className=" bg-black/10 border-[2px] support-shadow transition-all border-primary rounded-[32px] overflow-hidden px-8 py-12 pb-16">
                                    <h1 className="text-[32px] font-bold">Free</h1>
                                    <h3 className="text-[20px]">Unlimited orders</h3>
                                    <h3 className="text-[32px] my-5"><span className="text-primary">{subscriptionType === 'monthly' ? '£55.00' : '£550.00'}</span> / per {subscriptionType === 'monthly' ? 'month' : 'year'}</h3>
                                    <div className="space-y-3 mb-7">
                                        <p className="font-bold">Order processing:</p>
                                        <p className="text-primary">Unlimited forever</p>
                                        <p>In-store, online, mobile and telephone ordering</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">Features:</p>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Stock management</p>
                                        </div>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Item & ingredient stock tracking</p>
                                        </div>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Delivery management</p>
                                        </div>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Live driver tracking</p>
                                        </div>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Staff management</p>
                                        </div>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Staff Rotas</p>
                                        </div>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">3rd party integrations</p>
                                        </div>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Unlimited 24/7 support</p>
                                        </div>
                                    </div>
                                    <button className="mt-6 text-[22px] text-primary flex items-center gap-x-3">Sign up now <FaArrowRight /></button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-black/10 border-[2px] support-shadow transition-all border-primary rounded-[32px] overflow-hidden px-8 py-12  pb-16">
                                    <h1 className="text-[32px] font-bold">Premium</h1>
                                    <h3 className="text-[20px]">Unlimited orders</h3>
                                    <h3 className="text-[32px] my-5"><span className="text-primary">{subscriptionType === 'monthly' ? '£75.00' : '£750.00'}</span> / per {subscriptionType === 'monthly' ? 'month' : 'year'}</h3>
                                    <div className="space-y-3 mb-7">
                                        <p className="font-bold">Order processing:</p>
                                        <p className="text-primary">Unlimited forever</p>
                                        <p>In-store, online, mobile and telephone ordering</p>
                                    </div>
                                    <div>
                                        <p className="font-bold">Features:</p>
                                        <p className="mt-6 leading-[36px]">Everything in  Standard, plus:</p>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Table management</p>
                                        </div>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Online table reservations</p>
                                        </div>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Digital waiter pads</p>
                                        </div>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Customer loyalty management</p>
                                        </div>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Gift vouchers</p>
                                        </div>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Customer marketing suite</p>
                                        </div>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Unlimited 24/7 support</p>
                                        </div>
                                    </div>
                                    <button className="mt-6 text-[22px] text-primary flex items-center gap-x-3">Sign up now <FaArrowRight /></button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-black/10 border-[2px] support-shadow transition-all border-primary rounded-[32px] overflow-hidden px-8 py-12 pb-14">
                                    <h1 className="text-[32px] font-bold">Enterprise</h1>
                                    <h3 className="text-[20px]">Multi-location + Franchise</h3>
                                    <h3 className="text-[32px] my-5 text-primary">Speak to sales</h3>
                                    <p className="mb-7">A complete POS and hospitality management system created for multi-location and franchise businesses</p>
                                    <div>
                                        <p className="font-bold">Features:</p>
                                        <p className="mt-6 leading-[34px]">Everything in  Premium, plus:</p>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">HQ dashboards</p>
                                        </div>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Advanced location reporting</p>
                                        </div>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Location grouping</p>
                                        </div>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Multi-location menu control</p>
                                        </div>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Multi-location reporting suite</p>
                                        </div>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Central data sharing</p>
                                        </div>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Cross location vouchers</p>
                                        </div>
                                        <div className="flex items-start gap-x-3 mt-6">
                                            <img className="mt-1" src={done} alt="" />
                                            <p className="leading-[34px]">Franchisee management</p>
                                        </div>
                                    </div>
                                    <button className="mt-6 text-[22px] text-primary flex items-center gap-x-3">Sign up now <FaArrowRight /></button>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <button className="mb-[40px] lg:mb-[100px] flex mx-auto text-primary items-center gap-x-3 tracking-[3px] animate-bounce">Compare Plans <FaArrowDown /></button>

                    <div id="deeper-pricing-section" className="mb-[40px] lg:mb-[100px]">
                        <h3 className='text-center lg:text-left text-3xl lg:text-5xl font-bold mb-12'>Want to know more? <span className="text-primary">Let&apos;s dig deeper</span></h3>

                        {/* large device */}
                        <div className="hidden lg:grid grid-cols-5 items-end pb-5 mb-10 border-b-[0.5px] border-primary">
                            <div className="col-span-2">
                                <div className="w-fit bg-[#9FE870] rounded-full p-2 flex gap-2 mb-12" style={{ boxShadow: 'inset 9px 9px 15px 1px rgba(0,0,0,0.2)' }}>
                                    <button onClick={() => setSubscriptionTypeTwo('monthly')} className={`${subscriptionTypeTwo === 'monthly' ? 'bg-white rounded-full shadow-lg' : 'bg-none'} px-10 py-2.5 text-[#1A1A1A] transition-all duration-200 hover:shadow-lg hover:bg-white hover:rounded-full min-w-fit`}>Monthly</button>
                                    <button onClick={() => setSubscriptionTypeTwo('yearly')} className={`${subscriptionTypeTwo === 'yearly' ? 'bg-white rounded-full shadow-lg' : 'bg-none'} px-10 py-2.5 text-[#1A1A1A] transition-all duration-200 hover:shadow-lg hover:bg-white hover:rounded-full min-w-fit`}>Yearly</button>
                                </div>
                                <p className="text-bold">Feature List</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-3xl leading-[60px]">Standard</h4>
                                <p><span className="text-primary">{subscriptionTypeTwo === 'monthly' ? '£55.00' : '£550.00'}</span> / per {subscriptionTypeTwo === 'monthly' ? 'month' : 'year'}</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-3xl leading-[60px]">Premium</h4>
                                <p><span className="text-primary">{subscriptionTypeTwo === 'monthly' ? '£75.00' : '£750.00'}</span> / per {subscriptionTypeTwo === 'monthly' ? 'month' : 'year'}</p>
                                <span className="bg-primary text-black inline-block mt-3 py-1.5 px-3">Most Popular</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-3xl leading-[60px]">Enterprise</h4>
                                <p className="text-primary">Speak to sales</p>
                            </div>
                        </div>
                        <div className="hidden lg:grid grid-cols-5 gap-5">
                            <div className="space-y-8">
                                {pricingData.map(item => <div key={item.id} onClick={() => setActiveFeature(item)} className={`w-fit pb-[18px] cursor-pointer ${activeFeature?.id === item.id ? 'font-semibold border-b-[3px] border-primary' : 'border-b-[0.5px] border-[#ffffff]/50'}`}>
                                    {item.feature}
                                </div>)}
                            </div>
                            <div className="col-span-4 space-y-[51px]">
                                {activeFeature?.subFeatures?.map((subFeature) => <div key={subFeature?.id} className="grid grid-cols-4">
                                    <p className="font-semibold">{subFeature?.name}</p>
                                    <div className="px-12">
                                        {subFeature?.standard ? <img src={done} alt="" /> : <span className="block w-6 text-center">-</span>}
                                    </div>
                                    <div className="px-12">
                                        {subFeature?.premium ? <img src={done} alt="" /> : <span className="block w-6 text-center">-</span>}
                                    </div>
                                    <div className="px-12">
                                        {subFeature?.enterprise ? <img src={done} alt="" /> : <span className="block w-6 text-center">-</span>}
                                    </div>
                                </div>)}
                            </div>
                        </div>

                        {/* small device */}
                        <div className="lg:hidden w-fit mx-auto bg-[#9FE870] rounded-full p-2 flex gap-2 mb-8" style={{ boxShadow: 'inset 9px 9px 15px 1px rgba(0,0,0,0.2)' }}>
                            <button onClick={() => setSubscriptionTypeTwo('monthly')} className={`${subscriptionTypeTwo === 'monthly' ? 'bg-white rounded-full shadow-lg' : 'bg-none'} px-8 py-2 text-[#1A1A1A] transition-all duration-200 hover:shadow-lg hover:bg-white hover:rounded-full min-w-fit`}>Monthly</button>
                            <button onClick={() => setSubscriptionTypeTwo('yearly')} className={`${subscriptionTypeTwo === 'yearly' ? 'bg-white rounded-full shadow-lg' : 'bg-none'} px-8 py-2 text-[#1A1A1A] transition-all duration-200 hover:shadow-lg hover:bg-white hover:rounded-full min-w-fit`}>Yearly</button>
                        </div>

                        <div className="flex lg:hidden gap-5 justify-between items-end pb-4 mb-8 border-b-[0.5px] border-primary">
                            <p>Feature List</p>
                            <div className="w-2/3 gap-7 flex items-end">
                                <button onClick={handlePrev}><svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.18164 1L1.61134 9.32733C1.2646 9.70875 1.2646 10.2913 1.61134 10.6727L9.18164 19" stroke="#EAEAEA" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                </button>
                                <Swiper
                                    slidesPerView="auto"
                                    effect={'fade'}
                                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                                    allowTouchMove={false}
                                    simulateTouch={false}
                                >
                                    <SwiperSlide>
                                        <div className="mt-12">
                                            <h4 className="font-bold text-3xl leading-[60px]">Standard</h4>
                                            <p><span className="text-primary">{subscriptionTypeTwo === 'monthly' ? '£55.00' : '£550.00'}</span> / per {subscriptionTypeTwo === 'monthly' ? 'month' : 'year'}</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="">
                                            <h4 className="font-bold text-3xl leading-[60px]">Premium</h4>
                                            <p><span className="text-primary">{subscriptionTypeTwo === 'monthly' ? '£75.00' : '£750.00'}</span> / per {subscriptionTypeTwo === 'monthly' ? 'month' : 'year'}</p>
                                            <span className="bg-primary text-black inline-block mt-3 py-1.5 px-3">Most Popular</span>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="mt-12">
                                            <h4 className="font-bold text-3xl leading-[60px]">Enterprise</h4>
                                            <p className="text-primary">Speak to sales</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <button onClick={handleNext}><svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L8.5703 9.32733C8.91704 9.70875 8.91704 10.2913 8.5703 10.6727L1 19" stroke="#EAEAEA" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex lg:hidden gap-2">
                            <div className="w-[55%] space-y-8">
                                {pricingData.map(item => <div key={item.id} onClick={() => setActiveFeature(item)} className={`w-fit pb-[18px] text-sm cursor-pointer ${activeFeature?.id === item.id ? 'font-semibold border-b-[3px] border-primary' : 'border-b-[0.5px] border-[#ffffff]/50'}`}>
                                    {item.feature}
                                </div>)}
                            </div>
                            <div className="w-[45%] space-y-8">
                                {activeFeature?.subFeatures?.map((subFeature) => <div key={subFeature?.id} className="grid grid-cols-5 gap-2 items-center">
                                    <p className="font-semibold col-span-4 text-sm">{subFeature?.name}</p>
                                    <div>
                                        {subFeature?.[activePlan] ? <img src={done} alt="" className="w-5" /> : <span className="block w-6 text-center">-</span>}
                                    </div>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </MainContainer>
            </section>

            <section className="my-[60px] lg:my-0">
                <MainContainer>
                    <h1 className="text-[25px] mb-4 sm:text-[30px] md:text-[45px] lg:text-5xl font-bold">Flexible hardware solutions</h1>
                    <p>Explore all hardware and accessories</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[40px] md:mt-[60px] gap-7">
                        <div className='w-full shadow h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px] relative overflow-hidden'>
                            <h3 className='text-[20px] md:text-2xl font-bold text-center mb-5'>Fusion register</h3>
                            <p className="text-lg my-3 text-center">$799 or $39/mo3 <br /> over 24 months</p>
                            <img src={table} alt="" className='w-[150px] block absolute bottom-[25%] right-[28%] scale-[1.4]' />
                            <button className='group absolute z-10 left-8 bottom-8 flex items-center gap-2 bg-[#9FE870] text-[#1A1A1A] px-5 py-1.5 w-fit'>
                                <p className='font-semibold text-lg'>Discover More</p>
                                <HiOutlineArrowRight size={18} />
                            </button>
                        </div>
                        <div className='w-full shadow h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px] relative overflow-hidden'>
                            <h3 className='text-[20px] md:text-2xl font-bold text-center mb-5'>Square stand</h3>
                            <p className="text-lg my-3 text-center">$149 or $14/mo.3 <br />
                                over 12 monthss</p>
                            <img src={one} alt="" className='w-[150px] block absolute bottom-[25%] right-[28%] scale-[1.8]' />
                            <button className='group absolute z-10 left-8 bottom-8 flex items-center gap-2 bg-[#9FE870] text-[#1A1A1A] px-5 py-1.5 w-fit'>
                                <p className='font-semibold text-lg'>Discover More</p>
                                <HiOutlineArrowRight size={18} />
                            </button>
                        </div>
                        <div className='w-full shadow h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px] relative overflow-hidden'>
                            <h3 className='text-[20px] md:text-2xl font-bold text-center mb-5'>Kitchen display</h3>
                            <p className="text-lg my-3 text-center">Streamline service and cut costs using automated customer ordering</p>
                            <img src={two} alt="" className='w-[150px] block absolute bottom-[25%] right-[28%] scale-[1.6]' />
                            <button className='group absolute z-10 left-8 bottom-8 flex items-center gap-2 bg-[#9FE870] text-[#1A1A1A] px-5 py-1.5 w-fit'>
                                <p className='font-semibold text-lg'>Discover More</p>
                                <HiOutlineArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </MainContainer>
            </section>
            <Faq />
            <CustomerReviews heading="Customers love our products" />

            <section id="contact-section" className="my-[60px] md:my-[100px] lg:my-[150px]">
                <MainContainer>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mt-[60px] lg:mt-[200px]">
                            <h1 className="text-[28px] lg:text-[60px] font-bold lg:leading-[70px]">Contact Us</h1>

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
}
export default Pricing;