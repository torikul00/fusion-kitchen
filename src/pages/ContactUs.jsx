import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import { useState } from 'react';
import send from '../assets/images/pos/send.svg'
import Footer from '../components/Footer';
import ScrollBottomBar from '../components/ScrollBottomBar';

const ContactUs = () => {
    const [submitMessage, setSubmitMessage] = useState('')


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
            <div className=''>
                <header className={`w-full bg-[#141817] overflow-hidden mb-0 md:h-[calc(100vh-400px)]  lg:h-[800px]`}>
                    <div className='max-w-[1100px] mx-auto px-5'>
                        <div className="pt-[100px] hidden lg:block">
                            <Navbar />
                        </div>
                        <div className='lg:hidden fixed w-[90%] z-[99] top-0'>
                            <MobileNavbar />
                        </div>
                        <div className="mt-[130px] mb-[60px] md:mb-[125px] text-white">
                            <h1 className="w-[90%] sm:w-4/5 lg:w-full text-[28px] md:text-4xl lg:text-6xl lg:leading-[65px] xl:leading-[86px] font-bold">
                                Let&apos;s get you set up
                            </h1>
                            <p className='text-[20px] md:text-[22px] text-[#CCCCCC] font-normal mt-7'>Speak to our friendly team today</p>
                        </div>
                        <ScrollBottomBar />
                    </div>
                </header>
            </div>
            <div className='max-w-[1100px] mx-auto px-5'>
                <form onSubmit={handleFormSubmit}>
                    <div className="md:mt-[-330px] mt-10">
                        <h1 className="text-[28px] lg:text-[50px] lg:text-white font-bold lg:leading-[70px]">We&apos;re here to help!</h1>

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
                        <div className="flex flex-col  items-center gap-5 mt-6">
                            <button type="submit" className="border-2 mx-auto px-6 flex items-center justify-center gap-x-3 py-3 rounded-[56px] font-semibold border-black">Send Message <img src={send} alt="" /> </button>
                            <p className="font-semibold">{submitMessage && submitMessage}</p>
                        </div>
                    </div>
                </form>
                <div className='my-[50px] md:my-[150px]'>
                    <h1 className='text-[28px] md:text-[50px] font-bold'>Our locations</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-[30px] md:gap-[60px]">
                        <div>
                            <p className='font-bold text-[20px]'>Head Office</p>
                            <p className='mt-3'>27 Old Gloucester Street,
                                London, WC1N 3AX, UK</p>
                        </div>
                        <div>
                            <p className='font-bold text-[20px]'>Head Office</p>
                            <p className='mt-3'>IF28, Threefield House,Threefield Lane Southampton, SO14 3LP, UK</p>
                        </div>
                        <div>
                            <p className='font-bold text-[20px]'>Speak to our team</p>
                            <p className='mt-3'>Sales: (+44)02030263355</p>
                            <p>Support: (+44)03301225960</p>
                            <p>Email: sales@fusionpos.co.uk</p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;