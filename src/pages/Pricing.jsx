import { FaAngleDown, FaArrowDown, FaArrowRight } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import HeaderContainer from "../components/HeaderContainer";
import { useEffect, useRef, useState } from "react";
import messageIcon from "../assets/images/online ordering/messageIcon.svg"
import headerImg from "../assets/images/pricing/header-img.png"
import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";
import send from '../assets/images/pos/send.svg'
import CustomerReviews from "../components/CustomerReviews";
import Faq from "../components/Faq";
import done from '../assets/images/pos/done.svg'
import pricingData from "../Utilities/pricingData";

const Pricing = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [industry, setIndustry] = useState("Restaurant");
    const [openBussinessType, setOpenBusinessType] = useState(false);
    const formRef = useRef(null)
    const [submitMessage, setSubmitMessage] = useState('')
    const [subscriptionType, setSubscriptionType] = useState('monthly')
    const [subscriptionTypeTwo, setSubscriptionTypeTwo] = useState('monthly')
    const [activeFeature, setActiveFeature] = useState(null)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setActiveFeature(pricingData[1])
    }, [])

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
                    <div className={`h-fit lg:h-[821px] w-full py-10 lg:py-0 text-white flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row lg:justify-between lg:items-center`}>
                        <div className="w-full lg:w-2/5 flex flex-col mt-10 lg:mt-0">
                            <h1 className="w-[90%] md:w-4/5 text-3xl md:text-4xl lg:text-6xl xl:text-[80px] lg:leading-[65px] xl:leading-[86px] font-bold">Simple and transparent <span className="text-[#9FE870]">POS pricing</span></h1>
                            <p className="mb-6 md:mb-8 mt-4 text-[#CCCCCC] text-xs sm:text-base md:text-lg xl:text-[22px] tracking-widest">Power your business with award-winning, purpose built technology</p>
                            <div className="flex gap-4 justify-center md:justify-start md:gap-5 lg:gap-6 xl:gap-8 text-sm md:text-base lg:text-lg font-bold">
                                <button onClick="" className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#9FE870] border border-[#9FE870]">Get Started</button>
                                <button onClick="" className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                            </div>
                        </div>

                        <div className="w-full lg:absolute lg:right-0 lg:w-[45%] mt-6">
                            <img className="scale-[1.1] md:scale-100" src={headerImg} alt="header" />
                        </div>
                    </div>

                    {/* large device sticky */}
                    <div className={`${isSticky ? 'hidden lg:block fixed bg-[#141817] text-white z-[99] top-0 left-0 right-0' : 'hidden'} transition-all sticky-nav`}>
                        <div className={`w-full h-[70px] flex gap-5 items-center justify-between px-7 sm:px-10`}>
                            <h4 className="text-medium text-xl">Pricing</h4>
                            <div className="flex items-center gap-7">
                                <ul className="flex items-center gap-6">
                                    <li onClick={() => setIndustry("Restaurant")} className={`${industry === 'Restaurant' ? 'text-primary' : ''} cursor-pointer`}>Restaurant</li>
                                    <li onClick={() => setIndustry("Retail")} className={`${industry === 'Retail' ? 'text-primary' : ''} cursor-pointer`}>Retail</li>
                                    <li onClick={() => setIndustry("Themes")} className={`${industry === 'Themes' ? 'text-primary' : ''} cursor-pointer`}>Themes</li>
                                    <li onClick={() => setIndustry("Pricing")} className={`${industry === 'Pricing' ? 'text-primary' : ''} cursor-pointer`}>Pricing</li>
                                </ul>
                                <div className={`ml-auto w-fit flex gap-4 text-sm font-bold`}>
                                    <button onClick="" className="py-2.5 px-6 rounded-full text-[#9FE870] border border-[#9FE870]">Get Started</button>
                                    <button onClick="" className="py-2.5 px-6 rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* small device sticky */}
                    <div className={`${isSticky ? 'block lg:hidden fixed bg-[#141817] text-white z-[99] top-0 left-0 right-0' : 'hidden'} ${openBussinessType ? 'w-full h-[calc(100vh-54px)]' : 'w-full h-fit'} transition-all`}>
                        <div onClick={() => setOpenBusinessType(!openBussinessType)} className={`w-full h-[54px] flex gap-5 items-center justify-between px-7 sm:px-10 ${openBussinessType ? 'border-b border-[#d9d9d9] border-opacity-20' : ''}`}>
                            <h4 className="text-medium">Pricing</h4>
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

            <section className="w-full bg-[#141817] text-white py-12 mb-[50px] md:-[100px] lg:mb-[180px]">
                <MainContainer>
                    <div className="w-fit mx-auto bg-[#9FE870] rounded-full p-2 flex gap-2 mb-[90px]" style={{ boxShadow: 'inset 9px 9px 15px 1px rgba(0,0,0,0.2)' }}>
                        <button onClick={() => setSubscriptionType('monthly')} className={`${subscriptionType === 'monthly' ? 'bg-white rounded-full shadow-lg' : 'bg-none'} px-10 py-2.5 text-[#1A1A1A] transition-all duration-200 hover:shadow-lg hover:bg-white hover:rounded-full min-w-fit`}>Monthly</button>
                        <button onClick={() => setSubscriptionType('yearly')} className={`${subscriptionType === 'yearly' ? 'bg-white rounded-full shadow-lg' : 'bg-none'} px-10 py-2.5 text-[#1A1A1A] transition-all duration-200 hover:shadow-lg hover:bg-white hover:rounded-full min-w-fit`}>Yearly</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-8 my-[40px] lg:my-[100px]">
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

                    <button className="mb-[40px] lg:mb-[100px] flex mx-auto text-primary items-center gap-x-3 tracking-[3px] animate-bounce">Compare Plans <FaArrowDown /></button>

                    <div>
                        <h3 className='text-left text-2xl md:text-3xl lg:text-5xl font-bold mb-12'>Want to know more? <span className="text-primary">Let&apos;s dig deeper</span></h3>

                        <div className="grid grid-cols-5 items-end pb-5 mb-10 border-b-[0.5px] border-primary">
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
                            </div>
                            <div>
                                <h4 className="font-bold text-3xl leading-[60px]">Enterprise</h4>
                                <p className="text-primary">Speak to sales</p>
                            </div>
                        </div>

                        {/* TODO: */}
                        <div className="grid grid-cols-5 gap-5">
                            <div className="space-y-8">
                                {pricingData.map(item => <div key={item.id} onClick={() => setActiveFeature(item)} className={`w-fit pb-[18px] cursor-pointer ${activeFeature?.id === item.id ? 'font-semibold border-b-[3px] border-primary' : 'border-b-[0.5px] border-[#ffffff]/50'}`}>
                                    {item.feature}
                                </div>)}
                            </div>
                            <div className="col-span-4 space-y-[51px]">
                                {activeFeature?.subFeatures?.map((subFeature) => <div key={subFeature?.id} className="grid grid-cols-4">
                                    <p className="font-semibold">{subFeature?.name}</p>
                                    <div className="px-12">
                                        {subFeature?.standard ?  <img src={done} alt="" /> : '-'}
                                    </div>
                                    <div className="px-12">
                                         {subFeature?.premium ? <img src={done} alt="" /> : '-'}
                                    </div>
                                    <div className="px-12">
                                        {subFeature?.enterprise ?  <img src={done} alt="" /> : '-'}
                                    </div>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </MainContainer>
            </section>

            <Faq />

            <CustomerReviews heading="Customers love our products" />

            <section className="my-[100px] lg:my-[180px]">
                <MainContainer>
                    <form ref={formRef} onSubmit={handleFormSubmit}>
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
        </>
    );
}
export default Pricing;