import { useState } from 'react';
import MainContainer from './MainContainer';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaCheck } from "react-icons/fa6";

const GetAQuote = () => {
    const [step, setStep] = useState(1)
    const [swiperInstance, setSwiperInstance] = useState(null)
    const [answers, setAnswers] = useState([
        { step: 1, answer: '' },
        { step: 2, answer: [] },
        { step: 3, answer: { fullName: '', businessName: '', phone: '', email: '' } },
    ])

    const handlePrev = () => {
        if (swiperInstance) {
            swiperInstance.slidePrev();
        }
        if (step > 1) {
            setStep(step - 1)
        }
    };
    const handleNext = () => {
        if (swiperInstance) {
            swiperInstance.slideNext();
        }
        if (step < 5) {
            setStep(step + 1)
        }
    };

    const handleStepOne = (answer) => {
        if (answers[0].answer === answer) {
            const updatedAnswers = [...answers]
            updatedAnswers[0].answer = ''
            setAnswers([...updatedAnswers])
        }
        else {
            const updatedAnswers = [...answers]
            updatedAnswers[0].answer = answer
            setAnswers([...updatedAnswers])
        }
    }

    const handleStepTwo = (aswer) => {
        const updatedAnswers = [...answers]
        if (updatedAnswers[1].answer.includes(aswer)) {
            updatedAnswers[1].answer = updatedAnswers[1].answer.filter(item => item !== aswer)
        }
        else {
            updatedAnswers[1].answer.push(aswer)
        }
        setAnswers([...updatedAnswers])
    }

    console.log(answers)

    return (
        <section>
            <MainContainer>
                <h3 className='text-[28px] lg:text-[60px] font-bold lg:leading-[70px]'>Join 1000s businesses across the world using Fusion to elevate their operations.</h3>
                <h4 className="text-[28px] lg:text-[60px] lg:leading-[70px] mt-[80px] mb-[50px]">Get a quote!</h4>
                <div className="flex mb-10">
                    <div className={`w-[100px] border-b-2 ${step >= 1 ? 'border-[#1A1A1A]' : 'border-primary'} relative`}>
                        <span className={`w-5 h-5 ${step >= 1 ? 'bg-[#1A1A1A]' : 'bg-primary'} rounded-full inline-block absolute -top-2.5 transition-all`}></span>
                    </div>

                    <div className={`w-[100px] border-b-2 border-primary before:absolute before:left-0 before:right-0 before:h-[2px] before:bg-[#1A1A1A] ${step >= 2 ? 'before:w-full' : 'before:w-0'} before:transition-[width] duration-[2.5s] relative`}>
                        <span className={`w-5 h-5 ${step >= 2 ? 'bg-[#1A1A1A]' : 'bg-primary'} rounded-full inline-block absolute -top-2.5 transition-all`}></span>
                    </div>
                    <div className={`w-[100px] border-b-2 border-primary before:absolute before:left-0 before:right-0 before:h-[2px] before:bg-[#1A1A1A] ${step >= 3 ? 'before:w-full' : 'before:w-0'} before:transition-[width] duration-[2.5s] relative`}>
                        <span className={`w-5 h-5 ${step >= 3 ? 'bg-[#1A1A1A]' : 'bg-primary'} rounded-full inline-block absolute -top-2.5 transition-all`}></span>
                    </div>
                    <div className={`w-[100px] border-b-2 border-primary before:absolute before:left-0 before:right-0 before:h-[2px] before:bg-[#1A1A1A] ${step >= 4 ? 'before:w-full' : 'before:w-0'} before:transition-[width] duration-[2.5s] relative`}>
                        <span className={`w-5 h-5 ${step >= 4 ? 'bg-[#1A1A1A]' : 'bg-primary'} rounded-full inline-block absolute -top-2.5 transition-all`}></span>
                        <span className={`w-5 h-5 ${step >= 5 ? 'bg-[#1A1A1A]' : 'bg-primary'} rounded-full inline-block absolute -top-2.5 -right-5 transition-all`}></span>
                    </div>
                </div>
            </MainContainer>

            <div className="flex gap-5 items-center justify-center">
                <button onClick={handlePrev} style={{ boxShadow: '4px 1px 4px 0px rgba(159, 232, 112, 1)' }} className={`p-7 hidden xl:block rounded-full border border-[#9FE870] text-black bg-light-gray transition-all duration-200 ${step > 1 ? 'opacity-100 visible' : 'opacity-0 -z-[99] invisible'}`}>
                    <HiOutlineArrowLeft size={30} />
                </button>
                <div className="max-w-[1170px] px-5 quote-swiper">
                    <Swiper
                        slidesPerView="auto"
                        effect={'fade'}
                        modules={[Pagination]}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide cl>
                            <div className="radial-gradient rounded-3xl pt-8 p-12">
                                <p className="text-white font-bold text-2xl mb-8">What type of business do you run?</p>
                                <div className="flex justify-start flex-wrap gap-5">
                                    <div className={`${answers[0].answer === 'Takeaway/QSR' ? 'ring-4 ring-primary' : ''} rounded-full transition-all`}>
                                        <button onClick={() => handleStepOne('Takeaway/QSR')} className="py-[14px] px-12 rounded-full bg-white text-xl shadow-inset">Takeaway/QSR</button>
                                    </div>
                                    <div className={`${answers[0].answer === 'Pop-up / Food truck' ? 'ring-4 ring-primary' : ''} rounded-full transition-all`}>
                                        <button onClick={() => handleStepOne('Pop-up / Food truck')} className="py-[14px] px-12 rounded-full bg-white text-xl shadow-inset">Pop-up / Food truck</button>
                                    </div>
                                    <div className={`${answers[0].answer === 'Bar' ? 'ring-4 ring-primary' : ''} rounded-full transition-all`}>
                                        <button onClick={() => handleStepOne('Bar')} className="py-[14px] px-12 rounded-full bg-white text-xl shadow-inset">Bar</button>
                                    </div>
                                    <div className={`${answers[0].answer === 'Cafe' ? 'ring-4 ring-primary' : ''} rounded-full transition-all`}>
                                        <button onClick={() => handleStepOne('Cafe')} className="py-[14px] px-12 rounded-full bg-white text-xl shadow-inset">Cafe</button>
                                    </div>
                                    <div className={`${answers[0].answer === 'Restaurant' ? 'ring-4 ring-primary' : ''} rounded-full transition-all`}>
                                        <button onClick={() => handleStepOne('Restaurant')} className="py-[14px] px-12 rounded-full bg-white text-xl shadow-inset">Restaurant</button>
                                    </div>
                                    <div className={`${answers[0].answer === 'Ghost/Dark Kitchen' ? 'ring-4 ring-primary' : ''} rounded-full transition-all`}>
                                        <button onClick={() => handleStepOne('Ghost/Dark Kitchen')} className="py-[14px] px-12 rounded-full bg-white text-xl shadow-inset">Ghost/Dark Kitchen</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rana">
                            <div className="radial-gradient rounded-3xl pt-8 p-12">
                                <p className="text-white font-bold text-2xl mb-8">What additional features are you interested in?</p>
                                <div className="flex justify-start flex-wrap gap-5">
                                    <div className={`${answers[1].answer?.includes('Integrated payment') ? 'ring-4 ring-primary' : ''} rounded-full transition-all`}>
                                        <button onClick={() => handleStepTwo('Integrated payment')} className="py-[14px] px-10 rounded-full bg-white text-xl shadow-inset flex items-center gap-4">
                                            Integrated payment
                                            <div className='w-5 h-5 border-2 border-[#1A1A1A] rounded flex items-center justify-center text-[#1A1A1A]'>{answers[1].answer?.includes('Integrated payment') && <FaCheck size={14} />}</div>
                                        </button>
                                    </div>

                                    <div className={`${answers[1].answer?.includes('Website & mobile app (Online Ordering)') ? 'ring-4 ring-primary' : ''} rounded-full transition-all`}>
                                        <button onClick={() => handleStepTwo('Website & mobile app (Online Ordering)')} className="py-[14px] px-10 rounded-full bg-white text-xl shadow-inset flex items-center gap-4">
                                            Website & mobile app (Online Ordering)
                                            <div className='w-5 h-5 border-2 border-[#1A1A1A] rounded flex items-center justify-center text-[#1A1A1A]'>{answers[1].answer?.includes('Website & mobile app (Online Ordering)') && <FaCheck size={14} />}</div>
                                        </button>
                                    </div>

                                    <div className={`${answers[1].answer?.includes('Stock management') ? 'ring-4 ring-primary' : ''} rounded-full transition-all`}>
                                        <button onClick={() => handleStepTwo('Stock management')} className="py-[14px] px-10 rounded-full bg-white text-xl shadow-inset flex items-center gap-4">
                                            Stock management
                                            <div className='w-5 h-5 border-2 border-[#1A1A1A] rounded flex items-center justify-center text-[#1A1A1A]'>{answers[1].answer?.includes('Stock management') && <FaCheck size={14} />}</div>
                                        </button>
                                    </div>

                                    <div className={`${answers[1].answer?.includes('Delivery management') ? 'ring-4 ring-primary' : ''} rounded-full transition-all`}>
                                        <button onClick={() => handleStepTwo('Delivery management')} className="py-[14px] px-10 rounded-full bg-white text-xl shadow-inset flex items-center gap-4">
                                            Delivery management
                                            <div className='w-5 h-5 border-2 border-[#1A1A1A] rounded flex items-center justify-center text-[#1A1A1A]'>{answers[1].answer?.includes('Delivery management') && <FaCheck size={14} />}</div>
                                        </button>
                                    </div>

                                    <div className={`${answers[1].answer?.includes('QR Order & Pay') ? 'ring-4 ring-primary' : ''} rounded-full transition-all`}>
                                        <button onClick={() => handleStepTwo('QR Order & Pay')} className="py-[14px] px-10 rounded-full bg-white text-xl shadow-inset flex items-center gap-4">
                                            QR Order & Pay
                                            <div className='w-5 h-5 border-2 border-[#1A1A1A] rounded flex items-center justify-center text-[#1A1A1A]'>{answers[1].answer?.includes('QR Order & Pay') && <FaCheck size={14} />}</div>
                                        </button>
                                    </div>

                                    <div className={`${answers[1].answer?.includes('Enterprise & Franchise management') ? 'ring-4 ring-primary' : ''} rounded-full transition-all`}>
                                        <button onClick={() => handleStepTwo('Enterprise & Franchise management')} className="py-[14px] px-10 rounded-full bg-white text-xl shadow-inset flex items-center gap-4">
                                            Enterprise & Franchise management
                                            <div className='w-5 h-5 border-2 border-[#1A1A1A] rounded flex items-center justify-center text-[#1A1A1A]'>{answers[1].answer?.includes('Enterprise & Franchise management') && <FaCheck size={14} />}</div>
                                        </button>
                                    </div>

                                    <div className={`${answers[1].answer?.includes('Customer management') ? 'ring-4 ring-primary' : ''} rounded-full transition-all`}>
                                        <button onClick={() => handleStepTwo('Customer management')} className="py-[14px] px-10 rounded-full bg-white text-xl shadow-inset flex items-center gap-4">
                                            Customer management
                                            <div className='w-5 h-5 border-2 border-[#1A1A1A] rounded flex items-center justify-center text-[#1A1A1A]'>{answers[1].answer?.includes('Customer management') && <FaCheck size={14} />}</div>
                                        </button>
                                    </div>

                                    <div className={`${answers[1].answer?.includes('Other') ? 'ring-4 ring-primary' : ''} rounded-full transition-all`}>
                                        <button onClick={() => handleStepTwo('Other')} className="py-[14px] px-10 rounded-full bg-white text-xl shadow-inset flex items-center gap-4">
                                            Other
                                            <div className='w-5 h-5 border-2 border-[#1A1A1A] rounded flex items-center justify-center text-[#1A1A1A]'>{answers[1].answer?.includes('Other') && <FaCheck size={14} />}</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rana">
                            <div className="radial-gradient rounded-3xl pt-8 p-12">
                                <p className="text-white font-bold text-2xl mb-8">Please provide us with your contact details so we can send you the best quote.</p>
                                <div className='grid grid-cols-2 gap-5'>
                                    <input type="text" id="fullName" name="fullName" className="w-full border-none outline-none bg-white text-[#1A1A1A] rounded-full py-[14px] px-6 mb-3 placeholder:text-[#808080] shadow-inset" placeholder="Full name" />
                                    <input type="text" id="businessName" name="businessName" className="w-full border-none outline-none bg-white text-[#1A1A1A] rounded-full py-[14px] px-6 mb-3 placeholder:text-[#808080] shadow-inset" placeholder="Business name" />
                                    <input type="text" id="phone" name="phone" className="w-full border-none outline-none bg-white text-[#1A1A1A] rounded-full py-[14px] px-6 mb-3 placeholder:text-[#808080] shadow-inset" placeholder="Phone no" />
                                    <input type="email" id="email" name="email" className="w-full border-none outline-none bg-white text-[#1A1A1A] rounded-full py-[14px] px-6 mb-3 placeholder:text-[#808080] shadow-inset" placeholder="Email address" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rana">
                            <div className="radial-gradient rounded-3xl pt-8 p-12 h-[290px] flex flex-col justify-center items-center">
                                <p className="text-white font-bold text-2xl mb-8">Submit Now to get the best quote for your business.</p>
                                <button onClick={handleNext} type="button" className="text-white w-fit border-2 border-primary hover:shadow-md hover:shadow-[#9ee8705d] transition-all text-lg font-bold flex gap-3 items-center px-8 py-3 mt-5 rounded-full">
                                    Submit
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.8054 2.03428L16.0559 23.564C15.8593 24.0228 15.5193 24.3054 15.0359 24.4119C14.5526 24.5184 14.1307 24.3914 13.7702 24.031L0.990024 11.2508C0.629557 10.8903 0.502574 10.4684 0.609076 9.98504C0.715577 9.50168 0.998216 9.1617 1.45699 8.96508L22.9867 0.21556C23.5766 -0.0138278 24.0845 0.0844815 24.5105 0.510488C24.9365 0.936494 25.0348 1.44443 24.8054 2.03428ZM14.2618 20.5901L20.9959 4.02504L4.43084 10.7592L7.87166 14.2L15.2449 9.77613L10.8209 17.1493L14.2618 20.5901Z" fill="white" />
                                    </svg>
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rana">
                            <div className="radial-gradient rounded-3xl pt-8 p-12 h-[290px] flex flex-col justify-center items-center">
                                <p className="text-white font-bold text-2xl">Successfully submitted your information.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <button onClick={handleNext} style={{ boxShadow: '4px 1px 4px 0px rgba(159, 232, 112, 1)' }} className='p-7 hidden xl:block rounded-full border border-[#9FE870] text-black bg-light-gray transition-all duration-200'>
                    <HiOutlineArrowRight size={30} />
                </button>
            </div>
        </section>
    );
};

export default GetAQuote;