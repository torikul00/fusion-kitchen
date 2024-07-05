import { useRef, useState } from 'react';
import HeaderContainer from '../components/HeaderContainer';
import MobileNavbar from '../components/MobileNavbar';
import banner1 from '../assets/images/payments/banner1.png'
import banner2 from '../assets/images/payments/banner2.png'
import burgerMobile from '../assets/images/payments/burgerMobile.png'
import image1 from '../assets/images/payments/image1.png'
import image2 from '../assets/images/payments/image2.png'
import online1 from '../assets/images/payments/1.png'
import contactless from '../assets/images/payments/contactless.png'
import chip from '../assets/images/payments/chip.png'
import qr from '../assets/images/payments/qr.png'
import online from '../assets/images/payments/online.png'
import remote from '../assets/images/payments/remote.png'
import buy from '../assets/images/payments/buy.png'
import inPerson from '../assets/images/payments/inPerson.png'
import mobile from '../assets/images/payments/mobile.png'
import GetAQuote from '../components/GetAQuote';
import MainContainer from '../components/MainContainer';
import CustomerReviews from '../components/CustomerReviews';
import PaymentGridCard from '../components/PaymentGridCard';
import visa from '../assets/images/animation phone/visa.svg'
import mastercard from '../assets/images/animation phone/master.svg'
import applePay from '../assets/images/animation phone/applePay.svg'
import googlePay from '../assets/images/animation phone/pay.svg'
import Footer from '../components/Footer';
import send from '../assets/images/pos/send.svg'
import { FaArrowRight } from 'react-icons/fa6';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Navbar from '../components/Navbar';


const Payments = () => {
    const getAQuoteRef = useRef(null)
    const formRef = useRef(null)
    const [submitMessage, setSubmitMessage] = useState('')

    const [activeTab, setActiveTab] = useState('In Person')
    const [activeMethod, setActiveMethod] = useState('Contactless')
    const buttonRefs = useRef([]);
    const containerRef = useRef(null);

    const navigateToGetAQuote = () => {
        getAQuoteRef.current.scrollIntoView()
    }
    const navigateToForm = () => {
        formRef.current.scrollIntoView()
    }

    const handleActiveTab = (tab) => {
        setActiveTab(tab);
        if (containerRef.current) {
            setTimeout(() => {
                let scrollPosition = 0;
                if (tab === 'In Person') {
                    scrollPosition = 0;
                } else if (tab === 'Online') {
                    scrollPosition = 33;
                } else if (tab === 'Remote') {
                    scrollPosition = 165;
                } else if (tab === 'Buy Now, Pay Later') {
                    scrollPosition = 600;
                }
                containerRef.current.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            });
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
    const CustomContainar = ({ children }) => {
        return (
            <div className="max-w-[1425px] px-5 mx-auto">
                {children}
            </div>
        );
    }

    return (
        <div className='overflow-hidden'>
            <div className='bg-[#141817] pb-[100px] lg:pb-[200px]'>
                <header className='w-full mb-0 h-fit lg:h-[911px] pt-[70px] lg:pt-0'>
                    <HeaderContainer>
                        <div className="pt-[100px] hidden lg:block">
                            <Navbar />
                        </div>
                        <div className='lg:hidden fixed w-[90%] z-[99] top-0'>
                            <MobileNavbar />
                        </div>
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

                            <div className="w-full md:w-[90%] lg:w-[50%] mt-6">
                                <Swiper
                                    modules={[Autoplay]}
                                    // autoplay={{
                                    //     "delay": 3000,
                                    //     "disableOnInteraction": false
                                    // }}
                                    className='payment'
                                >
                                    <SwiperSlide className='md:px-5 px-[2px]'>
                                        <img className='w-full md:h-auto' src={buy} alt="header" />
                                    </SwiperSlide>
                                    <SwiperSlide className='md:px-5 px-[2px]'>
                                        <img className='w-full  md:h-auto' src={banner1} alt="header" />
                                    </SwiperSlide>
                                    <SwiperSlide className='md:px-5 px-[2px]'>
                                        <img className='w-full   md:h-auto' src={banner2} alt="header" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </HeaderContainer>
                </header>

                <CustomContainar>
                    <section className="my-[60px] md:my-[100px] lg:my-[120px]">
                        <h1 className="w-[90%] text-white sm:w-4/5 lg:w-full text-3xl md:text-4xl lg:text-6xl lg:leading-[65px] xl:leading-[86px] font-bold">Accept payments anywhere <br /> customers are.</h1>
                        <div ref={containerRef} className='hide-scrollbar flex justify-between text-white border-b-[0.5px] border-[#DADADA] mt-[60px] md:mt-[100px] overflow-x-scroll md:overflow-auto'>
                            {['In Person', 'Online', 'Remote', 'Buy Now, Pay Later'].map((tab, index) => (
                                // TODO:
                                <button
                                    key={tab}
                                    ref={(el) => (buttonRefs.current[index] = el)}
                                    className={`min-w-fit border-b-[3px] px-10 w-fit ${activeTab === tab ? 'border-primary font-bold' : 'border-primary/0'} pb-6`}
                                    onClick={() => handleActiveTab(tab, index)}>
                                    {tab}
                                </button>
                            ))}
                        </div>
                        {
                            activeTab == "In Person" && <div data-aos='fade-up' data-aos-duration="300" className='mt-10 flex flex-col gap-10 lg:flex-row justify-between'>
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

                                        <div className='max-w-[95%] lg:max-w-[82%] mx-auto '>
                                            <img src={inPerson} alt="" className='w-full object-cover rounded-[32px] h-[250px]  md:h-auto ' />
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

                                    </div>
                                </div>

                            </div>
                        }
                        {
                            activeTab == "Online" && <div data-aos='fade-up' data-aos-duration="300" className='mt-10 flex flex-col gap-10 lg:flex-row justify-between'>
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

                                        <div className='max-w-[95%] lg:max-w-[82%] mx-auto '>
                                            <img src={online1} alt="" className='w-full object-cover rounded-[32px] h-[250px]  md:h-[400px] ' />
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

                                    </div>
                                </div>

                            </div>
                        }
                        {
                            activeTab == "Remote" && <div data-aos='fade-up' data-aos-duration="300" className='mt-10 flex flex-col gap-10 lg:flex-row justify-between'>
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


                                        <div className='max-w-[95%] lg:max-w-[82%] mx-auto '>
                                            <img src={remote} alt="" className='w-full  rounded-[32px] h-[250px] md:h-[400px] ' />
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

                                    </div>
                                </div>

                            </div>
                        }
                        {
                            activeTab == "Buy Now, Pay Later" && <div data-aos='fade-up' data-aos-duration="300" className='mt-10 flex flex-col gap-10 lg:flex-row justify-between'>
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

                                        <div className='max-w-[95%] lg:max-w-[82%] mx-auto '>
                                            <img src={online} alt="" className='w-full object-cover rounded-[32px] h-[250px]  md:h-[400px] ' />
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

                                    </div>
                                </div>

                            </div>
                        }

                    </section>
                </CustomContainar>

                <CustomContainar>
                    <div className='relative'>
                        <div className="greenCustomAnimationPayment"></div>
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                            <div className='w-[90%] md:w-[70%] lg:w-[30%]'>
                                <div className='w-[50%] mx-auto relative'>
                                    <img src={burgerMobile} alt="burgerMobile" className="block mx-auto" />
                                    <img data-aos="fade-up-left" data-aos-delay="400" data-aos-once="true" className='w-[90px] md:w-auto absolute top-[80px] -left-[60px]' src={mastercard} alt="" />
                                    <img data-aos="fade-up-right" data-aos-delay="400" data-aos-once="true" className='w-[90px] md:w-auto absolute top-[140px] -right-[90px]' src={googlePay} alt="" />
                                    <img data-aos="fade-down-left" data-aos-delay="400" data-aos-once="true" className='w-[90px] md:w-auto absolute bottom-[100px] -left-[60px]' src={applePay} alt="" />
                                    <img data-aos="fade-down-right" data-aos-delay="400" data-aos-once="true" className='w-[90px] md:w-auto absolute bottom-[80px] -right-[90px]' src={visa} alt="" />
                                </div>

                            </div>
                            <div className="lg:w-[60%] mt-10 lg:mt-0">
                                <h1 className="w-[90%] text-white sm:w-4/5 lg:w-full text-3xl md:text-4xl lg:text-6xl  lg:leading-[65px] xl:leading-[86px] font-bold">Fully integrated card payments</h1>
                                <p className="w-5/6 mb-6 md:mb-8 mt-3 text-white text-sm sm:text-base md:text-lg xl:text-[22px] tracking-widest">Accept online food orders for <br /> collection or delivery.</p>
                                <div className="flex gap-4 justify-center md:justify-start md:gap-5 lg:gap-6 xl:gap-8 text-sm md:text-base lg:text-lg font-bold">
                                    <button className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#9FE870] border border-[#9FE870]">Sign up for now</button>
                                    <button onClick={navigateToForm} className="py-2.5 md:py-4 lg:py-[18px] px-6 md:px-7 lg:px-9 w-full md:w-fit rounded-full text-[#173303] border border-[#9FE870] bg-[#9FE870]">Contact Sales</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className='my-[60px] md:my-[100px] lg:my-[200px]'>
                        <h1 className='w-[90%] text-white sm:w-4/5 lg:w-[70%] text-3xl md:text-4xl lg:text-6xl lg:leading-[65px] xl:leading-[86px] font-bold'>Accept any payment methods to ensure secure and stable payment processing.</h1>
                        <div className='text-white flex h-[450px] lg:h-[500px] overflow-hidden items-center lg:mt-20'>
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
                            <div className='w-[70%] md:w-[50%] lg:w-[40%] '>
                                {activeMethod == 'Contactless' && <img className='w-full scale-100 lg:scale-110 lg:ml-[100px]' src={contactless} alt="" />}
                                {activeMethod == 'Chip & PIN' && <img className='w-full scale-100 lg:scale-125 lg:ml-[100px]' src={chip} alt="" />}
                                {activeMethod == 'QR Code Payment' && <img className='w-full scale-100 lg:scale-150 lg:ml-[100px]' src={qr} alt="" />}
                                {activeMethod == 'Mobile Payment' && <img className='w-full scale-100 lg:scale-150 lg:ml-[100px]' src={mobile} alt="" />}
                            </div>
                        </div>
                    </section>
                    <section>
                        <h1 className="w-[90%] text-white sm:w-4/5 lg:w-[80%] text-3xl md:text-4xl lg:text-6xl lg:leading-[65px] xl:leading-[86px] font-bold">Take contactless payments with just your iPhone or Android phone.</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                            <div>
                                <img src={image2} alt="" />
                                <button className='bg-primary px-2 py-1 mt-5'>Tap to Pay on Smartphone</button>
                            </div>
                            <div>
                                <img src={image1} alt="" />
                                <button className='bg-primary px-2 py-1 mt-5'>Tap to Pay on iPhone</button>
                            </div>
                        </div>
                    </section>
                </CustomContainar>
            </div>

            <div ref={getAQuoteRef} className='mt-[60px] lg:mt-[150px]'>
                <GetAQuote />
            </div>
            <div>
                <CustomerReviews />
            </div>

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

export default Payments;