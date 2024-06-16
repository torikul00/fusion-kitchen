import { useRef, useState } from 'react';
import HeaderContainer from '../components/HeaderContainer';
import Navbar from '../components/Navbar';
import banner from '../assets/images/payments/banner.png'
import burgerMobile from '../assets/images/payments/burgerMobile.png'
import image1 from '../assets/images/payments/image 190.png'
import image2 from '../assets/images/payments/image 191.png'
import GetAQuote from '../components/GetAQuote';
import MainContainer from '../components/MainContainer';
import CustomerReviews from '../components/CustomerReviews';
import PaymentGridCard from '../components/PaymentGridCard';
import Footer from '../components/Footer';
import send from '../assets/images/pos/send.svg'

const Payments = () => {
    const getAQuoteRef = useRef(null)
    const formRef = useRef(null)
    const [submitMessage, setSubmitMessage] = useState('')

    const navigateToGetAQuote = () => {
        getAQuoteRef.current.scrollIntoView()
    }
    const navigateToForm = () => {
        formRef.current.scrollIntoView()
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
    return (
        <>
            <div className='bg-[#141817] pb-[100px] lg:pb-[200px]'>
                <header className='w-full mb-0 h-fit lg:h-[911px]'>
                    <HeaderContainer>
                        <Navbar />
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
                    </HeaderContainer>
                </header>

                <MainContainer>
                    <section className='mt-[150px]'>
                        <div className=" mb-[100px] lg:mb-[180px]">
                            <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
                                <img src={burgerMobile} alt="" className="w-[80%] lg:w-[30%]" />
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

                    <section className=''>
                        <h1 className="w-[90%] text-white sm:w-4/5 lg:w-[80%] text-3xl md:text-4xl lg:text-6xl  lg:leading-[65px] xl:leading-[86px] font-bold">Take contactless payments with just your iPhone or Android phone.</h1>
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
                </MainContainer>
            </div>

            <div ref={getAQuoteRef} className='mt-[100px] lg:mt-[200px]'>
                <GetAQuote />
            </div>
            <div>
                <CustomerReviews />
            </div>

            <section className="my-[100px] lg:my-[180px]">
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
        </>
    );
};

export default Payments;