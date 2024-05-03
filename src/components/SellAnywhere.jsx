import { useState } from 'react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import computerImg from '../assets/computer.png'
import iphoneImg from '../assets/iPhone.png'
import stripeImg from '../assets/stripe.png'

const SellAnywhere = () => {
    const [swiperInstance, setSwiperInstance] = useState(null)

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

    return (
        <section className='h-fit max-w-[1450px] mx-auto mt-[120px] mb-[72px] px-5'>
            <div className='max-w-[80%] mx-auto mb-6'>
                <h3 className='mx-auto text-[#1A1A1A] text-5xl font-bold mb-6'>Sell anywhere easily, <br /> quickly, and seamlessly.</h3>
                <div className='flex items-center gap-2 bg-[#9FE870] text-[#1A1A1A] px-5 py-1.5 w-fit'>
                    <p className='font-semibold'>Try the new Fusion Kitchen</p>
                    <HiOutlineArrowRight size={18} />
                </div>
            </div>
            <div className='flex gap-8 justify-between items-center'>
                <button style={{ boxShadow: '4px 1px 4px 0px rgba(159, 232, 112, 1)' }} className='p-7 rounded-full border border-[#9FE870] text-black bg-light-gray transition-all duration-200' onClick={handlePrev}>
                    <HiOutlineArrowLeft size={30} />
                </button>

                <div className='max-w-[82%]'>
                    <Swiper
                        slidesPerView="auto"
                        effect={'fade'}
                        modules={[Pagination, Autoplay]}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                        pagination={{clickable: true}}
                        autoplay={{
                            "delay": 2500,
                            "disableOnInteraction": false
                        }}
                    >
                        <SwiperSlide
                            className='w-[33.33%] p-5 mb-14'>
                            <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='w-full h-[500px] bg-[#00000010] border border-gray-200 p-8 pb-0 rounded-[32px]'>
                                <h3 className='text-2xl font-medium text-center mb-7'>Hardware and POS systems designed to sell anywhere.</h3>
                                <img src={computerImg} alt="" className='h-[350px] w-auto' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide
                            className='w-[33.33%] p-5 mb-14'>
                            <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='w-full h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px]'>
                                <h3 className='text-2xl font-medium text-center mb-5'>Secure payments anywhere your customers are.</h3>
                                <img src={stripeImg} alt="" className='h-[350px] w-auto' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide
                            className='w-[33.33%] p-5 mb-14'>
                            <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='w-full h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px] relative'>
                                <h3 className='text-2xl font-medium text-center mb-5'>In-store pickup, online ordering, delivery, and shipment options.</h3>
                                <img src={iphoneImg} alt="" className='w-[240px] block absolute bottom-0 right-[15.6%]' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide
                            className='w-[33.33%] p-5 mb-14'>
                            <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='w-full h-[500px] bg-[#00000010] border border-gray-200 p-8 pb-0 rounded-[32px]'>
                                <h3 className='text-2xl font-medium text-center mb-7'>Hardware and POS systems designed to sell anywhere.</h3>
                                <img src={computerImg} alt="" className='h-[350px] w-auto' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide
                            className='w-[33.33%] p-5 mb-14'>
                            <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='w-full h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px]'>
                                <h3 className='text-2xl font-medium text-center mb-5'>Secure payments anywhere your customers are.</h3>
                                <img src={stripeImg} alt="" className='h-[350px] w-auto' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide
                            className='w-[33.33%] p-5 mb-14'>
                            <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='w-full h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px] relative'>
                                <h3 className='text-2xl font-medium text-center mb-5'>In-store pickup, online ordering, delivery, and shipment options.</h3>
                                <img src={iphoneImg} alt="" className='w-[240px] block absolute bottom-0 right-[15.6%]' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <button style={{ boxShadow: '-4px 1px 4px 0px rgba(159, 232, 112, 1)' }} className='p-7 rounded-full border border-[#9FE870] text-black bg-light-gray transition-all duration-200' onClick={handleNext}>
                    <HiOutlineArrowRight size={30} />
                </button>
            </div>
        </section >
    );
};

export default SellAnywhere;