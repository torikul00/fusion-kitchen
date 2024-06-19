import { useEffect, useRef, useState } from 'react';
import HeaderContainer from '../components/HeaderContainer';
import Navbar from '../components/Navbar';
import banner from '../assets/images/payments/banner.png'
import burgerMobile from '../assets/images/payments/burgerMobile.png'
import image1 from '../assets/images/payments/image 190.png'
import image2 from '../assets/images/payments/image 191.png'
import image3 from '../assets/images/payments/image3.svg'
import GetAQuote from '../components/GetAQuote';
import MainContainer from '../components/MainContainer';
import CustomerReviews from '../components/CustomerReviews';
import PaymentGridCard from '../components/PaymentGridCard';
import Footer from '../components/Footer';
import send from '../assets/images/pos/send.svg'
import { FaAngleDown, FaArrowDown, FaArrowRight } from 'react-icons/fa6';
import messageIcon from "../assets/images/online ordering/messageIcon.svg"
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';

const Payments = () => {
    const getAQuoteRef = useRef(null)
    const formRef = useRef(null)
    const [submitMessage, setSubmitMessage] = useState('')
    const [industry, setIndustry] = useState('Restaurant')
    const [isSticky, setIsSticky] = useState(false)
    const [openBussinessType, setOpenBusinessType] = useState(false)
    const [activeTab, setActiveTab] = useState('In Person')
    const swiperRef = useRef(null)
    const [activeMethod, setActiveMethod] = useState('Contactless')

    const navigateToGetAQuote = () => {
        getAQuoteRef.current.scrollIntoView()
    }
    const navigateToForm = () => {
        formRef.current.scrollIntoView()
    }
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
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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
    const CustomContainar = ({ children }) => {
        return (
            <div className="max-w-[1425px] px-5 mx-auto">
                {children}
            </div>
        );
    }


    const handleNext = () => {
        swiperRef.current.swiper.slideNext()
    }
    const handlePrev = () => {
        swiperRef.current.swiper.slidePrev()
    }
    return (
        <div className='overflow-hidden'>
            <div className='bg-[#141817] pb-[100px] lg:pb-[200px]'>
                <header className='w-full mb-0 h-fit lg:h-[911px]'>
                    <HeaderContainer>
                        <Navbar />
                    </HeaderContainer>
                    <CustomContainar>
                        <div className={`h-fit lg:h-[821px] w-full py-10 lg:py-0 text-white flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center`}>
                            <div className="w-full lg:w-2/5 flex flex-col mt-10 lg:mt-0">
                                <h1 className="w-[90%] md:w-4/5 lg:w-full text-3xl md:text-4xl lg:text-6xl xl:text-[80px] lg:leading-[65px] xl:leading-[86px] font-bold"><span className="text-[#9FE870]">Payment </span>Processing</h1>
                                <p className="mb-6 md:mb-8 mt-3 text-[#CCCCCC] text-xs sm:text-base md:text-lg xl:text-[22px] tracking-widest">In-person, online and telephone <br />
                                    payments made simple</p>
                                <div className="flex gap-4 justify-center md:justify-start md:gap-5 lg:gap-6 xl:gap-8 text-sm md:text-base lg:text-lg font-bold">
                                    <button onClick={navigateToGetAQuote} className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#9FE870] border border-[#9FE870]">Get Started</button>
                                    <button onClick={navigateToForm} className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                                </div>
                            </div>

                            <div className="w-full md:w-[90%] lg:w-[45%] mt-6">
                                <img src={banner} alt="header" />
                            </div>
                        </div>

                        {/* large device sticky */}
                        <div className={`${isSticky ? 'hidden lg:block fixed bg-[#141817] text-white z-[99] top-0 left-0 right-0' : 'hidden'} transition-all sticky-nav`}>
                            <div className={`w-full h-[70px] flex gap-5 items-center justify-between px-7 sm:px-10`}>
                                <h4 className="text-medium text-xl">Point of sale</h4>
                                <div className="flex items-center gap-7">
                                    <ul className="flex items-center gap-6">
                                        <li onClick={() => setIndustry("Restaurant")} className={`${industry === 'Restaurant' ? 'text-primary' : ''} cursor-pointer`}>Restaurant</li>
                                        <li onClick={() => setIndustry("Retail")} className={`${industry === 'Retail' ? 'text-primary' : ''} cursor-pointer`}>Retail</li>
                                        <li onClick={() => setIndustry("Themes")} className={`${industry === 'Themes' ? 'text-primary' : ''} cursor-pointer`}>Themes</li>
                                        <li onClick={() => setIndustry("Pricing")} className={`${industry === 'Pricing' ? 'text-primary' : ''} cursor-pointer`}>Pricing</li>
                                    </ul>
                                    <div className={`ml-auto w-fit flex gap-4 text-sm font-bold`}>
                                        <button onClick={navigateToGetAQuote} className="py-2.5 px-6 rounded-full text-[#9FE870] border border-[#9FE870]">Get Started</button>
                                        <button onClick={navigateToForm} className="py-2.5 px-6 rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* small device sticky */}
                        <div className={`${isSticky ? 'block lg:hidden fixed bg-[#141817] text-white z-[99] top-0 left-0 right-0' : 'hidden'} ${openBussinessType ? 'w-full h-[calc(100vh-54px)]' : 'w-full h-fit'} transition-all`}>
                            <div onClick={() => setOpenBusinessType(!openBussinessType)} className={`w-full h-[54px] flex gap-5 items-center justify-between px-7 sm:px-10 ${openBussinessType ? 'border-b border-[#d9d9d9] border-opacity-20' : ''}`}>
                                <h4 className="text-medium">Point of sale</h4>
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
                    </CustomContainar>
                </header>

                <CustomContainar>
                    <section className="my-[100px] lg:my-[120px]">
                        <h1 className="w-[90%] text-white sm:w-4/5 lg:w-full text-3xl md:text-4xl lg:text-6xl lg:leading-[65px] xl:leading-[86px] font-bold">Accept payments anywhere <br /> customers are.</h1>
                        <div className='hide-scrollbar flex justify-between text-white border-b-[0.5px] border-[#DADADA] mt-[100px] overflow-x-scroll md:overflow-auto'>
                            {['In Person', 'Online', 'Remote', 'Buy Now, Pay Later'].map((tab) => (
                                <button
                                    key={tab}
                                    className={`min-w-fit border-b-[3px] px-10 w-fit ${activeTab === tab ? 'border-primary' : 'border-primary/0'} pb-6`}
                                    onClick={() => setActiveTab(tab)}>
                                    {tab}
                                </button>
                            ))}
                        </div>
                        {
                            activeTab == "In Person" && <div data-aos='fade-up'  data-aos-duration="300"  className='mt-10 flex flex-col gap-10 lg:flex-row justify-between'>
                                <div className='text-white md:w-[60%] lg:w-[30%]'>
                                    <h2 className='text-[24px]'>In person</h2>
                                    <p className='text-lg leading-[30px] my-4'>Accept payments at your counter or on the go. It&apos;s easy to get started. Try the Square POS app on your phone or pick from a range of hardworking hardware.</p>
                                    <button className='text-primary text-[21px] flex items-center gap-x-3'>Learn more <FaArrowRight size={16} /></button>
                                    <div className='w-[375px] py-10 px-8 bg-black/10 support-shadow rounded-[32px] mt-10'>
                                        <h2 className='text-[22px]'>ACCEPT</h2>
                                        <p className='text-lg mb-8'>Contactless payments Mobile payments Chip and PIN payments</p>
                                        <h2 className='text-[22px]'>PROCESSING FEE</h2>
                                        <p className='text-lg '>2.6% + 10 cents per transaction</p>
                                    </div>
                                </div>
                                <div className='lg:w-[60%]'>
                                    <div className='flex gap-8 justify-between'>
                                        <button style={{ boxShadow: '4px 1px 4px 0px rgba(159, 232, 112, 1)' }} className='p-5 hidden xl:block rounded-full mt-[180px] h-fit bg-white border border-[#9FE870] text-black bg-light-gray transition-all duration-200' onClick={handlePrev}>
                                            <HiOutlineArrowLeft size={30} />
                                        </button>

                                        <div className='max-w-[95%] lg:max-w-[82%] mx-auto '>
                                            <Swiper
                                                modules={[Pagination]}
                                                pagination={{ clickable: true }}
                                                autoplay={{
                                                    "delay": 2500,
                                                    "disableOnInteraction": false
                                                }}
                                                ref={swiperRef}
                                                className='payment'
                                            >
                                                <SwiperSlide className='px-1'>
                                                    <img src={image1} alt="" className='w-full object-cover rounded-[32px] h-[250px]  md:h-[400px] ' />
                                                </SwiperSlide>
                                                <SwiperSlide className='px-1'>
                                                    <img src={image2} alt="" className='w-full object-cover rounded-[32px] h-[250px] md:h-[400px]' />
                                                </SwiperSlide>

                                            </Swiper>
                                            <div className='text-white'>
                                                <h2 className='text-[22px] mt-8'>RECOMMENDED PRODUCTS</h2>
                                                <p className='text-lg my-4'>Take contactless payments with just your Android phone — no hardware needed. Start easily and sell on the go with the latest payment innovation.</p>
                                                <button className='px-2 py-1 bg-primary text-black'>Tap to Pay on iPhone</button>
                                                <div className={` mt-6 w-fit flex gap-4 text-sm font-bold`}>
                                                    <button onClick={navigateToGetAQuote} className="py-2.5 px-6 rounded-full text-[#9FE870] border border-[#9FE870]">Get Started</button>
                                                    <button onClick={navigateToForm} className="py-2.5 px-6 rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                                                </div>
                                            </div>
                                        </div>
                                        <button style={{ boxShadow: '-4px 1px 4px 0px rgba(159, 232, 112, 1)' }} className='p-5 hidden xl:block rounded-full mt-[180px] border bg-white border-[#9FE870] text-black bg-light-gray transition-all h-fit duration-200' onClick={handleNext}>
                                            <HiOutlineArrowRight size={30} />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        }
                        {
                            activeTab == "Online" && <div data-aos='fade-up'  data-aos-duration="300"  className='mt-10 flex flex-col gap-10 lg:flex-row justify-between'>
                                <div className='text-white md:w-[60%] lg:w-[30%]'>
                                    <h2 className='text-[24px]'>Online</h2>
                                    <p className='text-lg leading-[30px] my-4'>Accept payments at your counter or on the go. It&apos;s easy to get started. Try the Square POS app on your phone or pick from a range of hardworking hardware.</p>
                                    <button className='text-primary text-[21px] flex items-center gap-x-3'>Learn more <FaArrowRight size={16} /></button>
                                    <div className='w-[375px] py-10 px-8 bg-black/10 support-shadow rounded-[32px] mt-10'>
                                        <h2 className='text-[22px]'>ACCEPT</h2>
                                        <p className='text-lg mb-8'>Contactless payments Mobile payments Chip and PIN payments</p>
                                        <h2 className='text-[22px]'>PROCESSING FEE</h2>
                                        <p className='text-lg '>2.6% + 10 cents per transaction</p>
                                    </div>
                                </div>
                                <div className='lg:w-[60%]'>
                                    <div className='flex gap-8 justify-between'>
                                        <button style={{ boxShadow: '4px 1px 4px 0px rgba(159, 232, 112, 1)' }} className='p-5 hidden xl:block rounded-full mt-[180px] h-fit bg-white border border-[#9FE870] text-black bg-light-gray transition-all duration-200' onClick={handlePrev}>
                                            <HiOutlineArrowLeft size={30} />
                                        </button>

                                        <div className='max-w-[95%] lg:max-w-[82%] mx-auto '>
                                            <Swiper
                                                modules={[Pagination]}
                                                pagination={{ clickable: true }}
                                                autoplay={{
                                                    "delay": 2500,
                                                    "disableOnInteraction": false
                                                }}
                                                ref={swiperRef}
                                                className='payment'
                                            >
                                                <SwiperSlide className='px-1'>
                                                    <img src={image2} alt="" className='w-full object-cover rounded-[32px] h-[250px]  md:h-[400px] ' />
                                                </SwiperSlide>
                                                <SwiperSlide className='px-1'>
                                                    <img src={image1} alt="" className='w-full object-cover rounded-[32px] h-[250px] md:h-[400px]' />
                                                </SwiperSlide>

                                            </Swiper>
                                            <div className='text-white'>
                                                <h2 className='text-[22px] mt-8'>RECOMMENDED PRODUCTS</h2>
                                                <p className='text-lg my-4'>Take contactless payments with just your Android phone — no hardware needed. Start easily and sell on the go with the latest payment innovation.</p>
                                                <button className='px-2 py-1 bg-primary text-black'>Tap to Pay on iPhone</button>
                                                <div className={` mt-6 w-fit flex gap-4 text-sm font-bold`}>
                                                    <button onClick={navigateToGetAQuote} className="py-2.5 px-6 rounded-full text-[#9FE870] border border-[#9FE870]">Get Started</button>
                                                    <button onClick={navigateToForm} className="py-2.5 px-6 rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                                                </div>
                                            </div>
                                        </div>
                                        <button style={{ boxShadow: '-4px 1px 4px 0px rgba(159, 232, 112, 1)' }} className='p-5 hidden xl:block rounded-full mt-[180px] border bg-white border-[#9FE870] text-black bg-light-gray transition-all h-fit duration-200' onClick={handleNext}>
                                            <HiOutlineArrowRight size={30} />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        }
                        {
                            activeTab == "Remote" && <div data-aos='fade-up'  data-aos-duration="300"  className='mt-10 flex flex-col gap-10 lg:flex-row justify-between'>
                                <div className='text-white md:w-[60%] lg:w-[30%]'>
                                    <h2 className='text-[24px]'>Remote</h2>
                                    <p className='text-lg leading-[30px] my-4'>Accept payments at your counter or on the go. It&apos;s easy to get started. Try the Square POS app on your phone or pick from a range of hardworking hardware.</p>
                                    <button className='text-primary text-[21px] flex items-center gap-x-3'>Learn more <FaArrowRight size={16} /></button>
                                    <div className='w-[375px] py-10 px-8 bg-black/10 support-shadow rounded-[32px] mt-10'>
                                        <h2 className='text-[22px]'>ACCEPT</h2>
                                        <p className='text-lg mb-8'>Contactless payments Mobile payments Chip and PIN payments</p>
                                        <h2 className='text-[22px]'>PROCESSING FEE</h2>
                                        <p className='text-lg '>2.6% + 10 cents per transaction</p>
                                    </div>
                                </div>
                                <div className='lg:w-[60%]'>
                                    <div className='flex gap-8 justify-between'>
                                        <button style={{ boxShadow: '4px 1px 4px 0px rgba(159, 232, 112, 1)' }} className='p-5 hidden xl:block rounded-full mt-[180px] h-fit bg-white border border-[#9FE870] text-black bg-light-gray transition-all duration-200' onClick={handlePrev}>
                                            <HiOutlineArrowLeft size={30} />
                                        </button>

                                        <div className='max-w-[95%] lg:max-w-[82%] mx-auto '>
                                            <Swiper
                                                modules={[Pagination]}
                                                pagination={{ clickable: true }}
                                                autoplay={{
                                                    "delay": 2500,
                                                    "disableOnInteraction": false
                                                }}
                                                ref={swiperRef}
                                                className='payment'
                                            >
                                                <SwiperSlide className='px-1'>
                                                    <img src={image1} alt="" className='w-full object-cover rounded-[32px] h-[250px]  md:h-[400px] ' />
                                                </SwiperSlide>
                                                <SwiperSlide className='px-1'>
                                                    <img src={image2} alt="" className='w-full object-cover rounded-[32px] h-[250px] md:h-[400px]' />
                                                </SwiperSlide>

                                            </Swiper>
                                            <div className='text-white'>
                                                <h2 className='text-[22px] mt-8'>RECOMMENDED PRODUCTS</h2>
                                                <p className='text-lg my-4'>Take contactless payments with just your Android phone — no hardware needed. Start easily and sell on the go with the latest payment innovation.</p>
                                                <button className='px-2 py-1 bg-primary text-black'>Tap to Pay on iPhone</button>
                                                <div className={` mt-6 w-fit flex gap-4 text-sm font-bold`}>
                                                    <button onClick={navigateToGetAQuote} className="py-2.5 px-6 rounded-full text-[#9FE870] border border-[#9FE870]">Get Started</button>
                                                    <button onClick={navigateToForm} className="py-2.5 px-6 rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                                                </div>
                                            </div>
                                        </div>
                                        <button style={{ boxShadow: '-4px 1px 4px 0px rgba(159, 232, 112, 1)' }} className='p-5 hidden xl:block rounded-full mt-[180px] border bg-white border-[#9FE870] text-black bg-light-gray transition-all h-fit duration-200' onClick={handleNext}>
                                            <HiOutlineArrowRight size={30} />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        }
                        {
                            activeTab == "Buy Now, Pay Later" && <div data-aos='fade-up'  data-aos-duration="300"  className='mt-10 flex flex-col gap-10 lg:flex-row justify-between'>
                                <div className='text-white md:w-[60%] lg:w-[30%]'>
                                    <h2 className='text-[24px]'>Buy Now, Pay Later</h2>
                                    <p className='text-lg leading-[30px] my-4'>Accept payments at your counter or on the go. It&apos;s easy to get started. Try the Square POS app on your phone or pick from a range of hardworking hardware.</p>
                                    <button className='text-primary text-[21px] flex items-center gap-x-3'>Learn more <FaArrowRight size={16} /></button>
                                    <div className='w-[375px] py-10 px-8 bg-black/10 support-shadow rounded-[32px] mt-10'>
                                        <h2 className='text-[22px]'>ACCEPT</h2>
                                        <p className='text-lg mb-8'>Contactless payments Mobile payments Chip and PIN payments</p>
                                        <h2 className='text-[22px]'>PROCESSING FEE</h2>
                                        <p className='text-lg '>2.6% + 10 cents per transaction</p>
                                    </div>
                                </div>
                                <div className='lg:w-[60%]'>
                                    <div className='flex gap-8 justify-between'>
                                        <button style={{ boxShadow: '4px 1px 4px 0px rgba(159, 232, 112, 1)' }} className='p-5 hidden xl:block rounded-full mt-[180px] h-fit bg-white border border-[#9FE870] text-black bg-light-gray transition-all duration-200' onClick={handlePrev}>
                                            <HiOutlineArrowLeft size={30} />
                                        </button>

                                        <div className='max-w-[95%] lg:max-w-[82%] mx-auto '>
                                            <Swiper
                                                modules={[Pagination]}
                                                pagination={{ clickable: true }}
                                                autoplay={{
                                                    "delay": 2500,
                                                    "disableOnInteraction": false
                                                }}
                                                ref={swiperRef}
                                                className='payment'
                                            >
                                                <SwiperSlide className='px-1'>
                                                    <img src={image1} alt="" className='w-full object-cover rounded-[32px] h-[250px]  md:h-[400px] ' />
                                                </SwiperSlide>
                                                <SwiperSlide className='px-1'>
                                                    <img src={image2} alt="" className='w-full object-cover rounded-[32px] h-[250px] md:h-[400px]' />
                                                </SwiperSlide>

                                            </Swiper>
                                            <div className='text-white'>
                                                <h2 className='text-[22px] mt-8'>RECOMMENDED PRODUCTS</h2>
                                                <p className='text-lg my-4'>Take contactless payments with just your Android phone — no hardware needed. Start easily and sell on the go with the latest payment innovation.</p>
                                                <button className='px-2 py-1 bg-primary text-black'>Tap to Pay on iPhone</button>
                                                <div className={` mt-6 w-fit flex gap-4 text-sm font-bold`}>
                                                    <button onClick={navigateToGetAQuote} className="py-2.5 px-6 rounded-full text-[#9FE870] border border-[#9FE870]">Get Started</button>
                                                    <button onClick={navigateToForm} className="py-2.5 px-6 rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                                                </div>
                                            </div>
                                        </div>
                                        <button style={{ boxShadow: '-4px 1px 4px 0px rgba(159, 232, 112, 1)' }} className='p-5 hidden xl:block rounded-full mt-[180px] border bg-white border-[#9FE870] text-black bg-light-gray transition-all h-fit duration-200' onClick={handleNext}>
                                            <HiOutlineArrowRight size={30} />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        }

                    </section>
                </CustomContainar>

                <CustomContainar>
                    <section>
                        <div className="">
                            <div className="flex flex-col lg:flex-row items-center justify-between">
                                <img src={burgerMobile} alt="burgerMobile" className="w-[80%] lg:w-[30%] scale-75" />
                                <div className="lg:w-[58%]">
                                    <h1 className="w-[90%] text-white sm:w-4/5 lg:w-full text-3xl md:text-4xl lg:text-6xl  lg:leading-[65px] xl:leading-[86px] font-bold">Marketing<span className="text-primary"> tools</span> built in</h1>
                                    <p className="w-5/6 mb-6 md:mb-8 mt-3 text-white text-sm sm:text-base md:text-lg xl:text-[22px] tracking-widest">Connect with your customers directly, build relationships, create loyal customers and generate more repeat orders</p>
                                    <div className="flex gap-4 justify-center md:justify-start md:gap-5 lg:gap-6 xl:gap-8 text-sm md:text-base lg:text-lg font-bold">
                                        <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#9FE870] border border-[#9FE870]">Sign up for now</button>
                                        <button onClick={navigateToForm} className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className='my-[200px]'>
                        <h1 className='w-[90%] text-white sm:w-4/5 lg:w-[70%] text-3xl md:text-4xl lg:text-6xl lg:leading-[65px] xl:leading-[86px] font-bold'>Accept any payment methods to ensure secure and stable payment processing.</h1>
                        <div className='text-white flex justify-between items-center mt-20'>
                            <div className='w-[30%]'>
                                <div onClick={() => setActiveMethod('Contactless')} className='cursor-pointer'>
                                    <p className={`mb-5 text-sm md:text-base cursor-pointer ${activeMethod == 'Contactless' ? 'font-bold' : ''}`}>Contactless</p>
                                    <div className={` mb-10 ${activeMethod == 'Contactless' ? 'w-[100px] md:w-[200px] h-[4px] bg-primary' : 'w-[90px] md:w-[135px] h-[0.5px] bg-white'}`}></div>
                                </div>
                                <div onClick={() => setActiveMethod('Chip & PIN')} className='cursor-pointer'>
                                    <p className={`mb-5 text-sm md:text-base  cursor-pointer ${activeMethod == 'Chip & PIN' ? 'font-bold' : ''}`}>Chip & PIN</p>
                                    <div className={` mb-10 ${activeMethod == 'Chip & PIN' ? 'w-[100px] md:w-[200px] h-[4px] bg-primary' : 'w-[90px] md:w-[135px] h-[0.5px] bg-white'}`}></div>
                                </div>
                                <div onClick={() => setActiveMethod('QR Code Payment')} className='cursor-pointer'>
                                    <p className={`mb-5 text-sm md:text-base  cursor-pointer ${activeMethod == 'QR Code Payment' ? 'font-bold' : ''}`}>QR Code Payment</p>
                                    <div className={` mb-10 ${activeMethod == 'QR Code Payment' ? 'w-[100px] md:w-[200px] h-[4px] bg-primary' : 'w-[90px] md:w-[135px] h-[0.5px] bg-white'}`}></div>
                                </div>
                                <div onClick={() => setActiveMethod('Mobile Payment')} className='cursor-pointer'>
                                    <p className={`mb-5 text-sm md:text-base  cursor-pointer ${activeMethod == 'Mobile Payment' ? 'font-bold' : ''}`}>Mobile Payment</p>
                                    <div className={` mb-10 ${activeMethod == 'Mobile Payment' ? 'w-[100px] md:w-[200px] h-[4px] bg-primary' : 'w-[90px] md:w-[135px] h-[0.5px] bg-white'}`}></div>
                                </div>
                            </div>
                            <div className='w-[60%]'>
                                {activeMethod == 'Contactless' && <img src={image1} alt="" />}
                                {activeMethod == 'Chip & PIN' && <img src={image2} alt="" />}
                                {activeMethod == 'QR Code Payment' && <img src={image1} alt="" />}
                                {activeMethod == 'Mobile Payment' && <img src={image2} alt="" />}
                            </div>
                        </div>
                    </section>
                    <section className='mt-[100px]'>
                        <h1 className="w-[90%] text-white sm:w-4/5 lg:w-[80%] text-3xl md:text-4xl lg:text-6xl lg:leading-[65px] xl:leading-[86px] font-bold">Take contactless payments with just your iPhone or Android phone.</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                            <div>
                                <img src={image1} alt="" />
                                <button className='bg-primary px-2 py-1 mt-5'>Tap to Pay on Smartphone</button>
                            </div>
                            <div>
                                <img src={image2} alt="" />
                                <button className='bg-primary px-2 py-1 mt-5'>Tap to Pay on iPhone</button>
                            </div>
                        </div>
                    </section>
                </CustomContainar>
            </div>

            <div ref={getAQuoteRef} className='mt-[100px] lg:mt-[150px]'>
                <GetAQuote />
            </div>
            <div>
                <CustomerReviews />
            </div>

            <section className="my-[100px] lg:my-[150px]">
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

export default Payments;