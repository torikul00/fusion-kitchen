import MainContainer from './MainContainer';
import fireFly from '../assets/images/Firefly-20240428225411 1.png'
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useState } from 'react';

const ElegantProducts = () => {
    const [swiperInstance, setSwiperInstance] = useState(null)
    return (
        <section>
            <MainContainer>
                <div className="w-full elegantClass rounded-[20px] sm:rounded-[32px] bg-gradient-to-l from-[#002415] to-[#062F1D] overflow-hidden">
                    <h1 className='text-center text-[18px] sm:text-[40px] font-semibold sm:font-bold mx-auto text-white my-[26px]'>Elegant looking Smart <br /> Product for Your Business!</h1>
                    <Swiper
                        slidesPerView="auto"
                        effect={'fade'}
                        modules={[Pagination, Autoplay]}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                        pagination={{ clickable: true }}
                        // autoplay={{
                        //     "delay": 2500,
                        //     "disableOnInteraction": false
                        // }}

                    >
                        <SwiperSlide>
                            <img className='w-full' src={fireFly} alt="fireFly" />
                        </SwiperSlide>
                        <SwiperSlide>

                            <img className='w-full' src={fireFly} alt="fireFly" />
                        </SwiperSlide>
                        <SwiperSlide>

                            <img className='w-full' src={fireFly} alt="fireFly" />
                        </SwiperSlide>


                    </Swiper>
                </div>
            </MainContainer>
        </section>
    );
};

export default ElegantProducts;