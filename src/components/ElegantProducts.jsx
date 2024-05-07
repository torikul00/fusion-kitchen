import MainContainer from './MainContainer';
import fireFly1 from '../assets/images/Firefly1.png'
import fireFly2 from '../assets/images/Firefly2.png'
import fireFly3 from '../assets/images/Firefly3.png'
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const ElegantProducts = () => {
    
    return (
        <section>
            <MainContainer>
                <div className="w-full elegantClass rounded-[20px] sm:rounded-[32px] bg-gradient-to-b from-[#141414] to-[#3D3D3D] overflow-hidden">
                    <h1 className='text-center text-[18px] sm:text-[40px] font-semibold sm:font-bold mx-auto text-white my-[26px]'>Elegant looking Smart <br /> Product for Your Business!</h1>
                    <Swiper
                        slidesPerView="auto"
                        effect={'fade'}
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{
                            "delay": 2500,
                            "disableOnInteraction": false
                        }}
                    >
                        <SwiperSlide>
                            <img className='w-full' src={fireFly1} alt="fireFly" />
                        </SwiperSlide>
                        <SwiperSlide>

                            <img className='w-full' src={fireFly2} alt="fireFly" />
                        </SwiperSlide>
                        <SwiperSlide>

                            <img className='w-full' src={fireFly3} alt="fireFly" />
                        </SwiperSlide>


                    </Swiper>
                </div>
            </MainContainer>
        </section>
    );
};

export default ElegantProducts;