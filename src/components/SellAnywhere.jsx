import { useState } from 'react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import one from '../assets/images/one.gif'
import three from '../assets/images/three.gif'
import four from '../assets/images/four.gif'

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
        <section className='h-fit max-w-[1450px] mx-auto mt-[80px] md:mt-[120px] mb-[72px] px-5'>
            <div className='max-w-[80%] mx-auto mb-6'>
                <h3 className='mx-auto text-[#1A1A1A] text-2xl md:text-3xl lg:text-5xl font-bold mb-6'>Sell anywhere easily, <br /> quickly, and seamlessly.</h3>
                <div className='flex items-center gap-2 bg-[#9FE870] text-[#1A1A1A] px-5 py-1.5 w-fit'>
                    <p className='font-semibold'>Try the new Fusion Kitchen</p>
                    <HiOutlineArrowRight size={18} />
                </div>
            </div>
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
                        autoplay={{
                            "delay": 2500,
                            "disableOnInteraction": false
                        }}
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
                            className='w-[33.33%] p-4 lg:p-5 mb-14'>
                            <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px] relative'>
                                <h3 className='text-[20px] md:text-2xl font-medium text-center mb-5'>Hardware and POS systems designed to sell anywhere.</h3>
                                <img src={three} alt="" className='w-[240px] block absolute bottom-[10%] right-[10%] md:right-[12%] xl:right-[15.6%]' />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='w-[33.33%] p-4 lg:p-5 mb-14 '>
                            <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px] relative overflow-hidden'>
                                <h3 className='text-[20px] md:text-2xl font-medium text-center mb-5'>Secure payments anywhere your customers are.</h3>
                                <img src={four} alt="" className='w-[240px] block absolute bottom-[11%] right-[40%] scale-[1.6]' />
                            </div>
                        </SwiperSlide>
                     

                        <SwiperSlide
                            className='w-[33.33%] p-4 lg:p-5 mb-14'>
                            <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-8 pb-0 rounded-[32px]'>
                                <h3 className='text-[20px] md:text-2xl font-medium text-center mb-7'>In-store pickup, online ordering, delivery, and shipment options.</h3>
                                <img src={one} alt="" className='h-[350px] w-auto object-cover  absolute bottom-[6%] left-[24%] scale-90' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide
                            className='w-[33.33%] p-4 lg:p-5 mb-14'>
                            <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px] relative'>
                                <h3 className='text-[20px] md:text-2xl font-medium text-center mb-5'>Hardware and POS systems designed to sell anywhere.</h3>
                                <img src={three} alt="" className='w-[240px] block absolute bottom-[10%] right-[10%] md:right-[12%] xl:right-[15.6%]' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[33.33%] p-4 lg:p-5 mb-14 '>
                            <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='swipChild w-full h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px] relative overflow-hidden'>
                                <h3 className='text-[20px] md:text-2xl font-medium text-center mb-5'>Secure payments anywhere your customers are.</h3>
                                <img src={four} alt="" className='w-[240px] block absolute bottom-[11%] right-[40%] scale-[1.6]' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <button style={{ boxShadow: '-4px 1px 4px 0px rgba(159, 232, 112, 1)' }} className='p-7 hidden xl:block rounded-full border border-[#9FE870] text-black bg-light-gray transition-all duration-200' onClick={handleNext}>
                    <HiOutlineArrowRight size={30} />
                </button>
            </div>
        </section>
    );
};

export default SellAnywhere;