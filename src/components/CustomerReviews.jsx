import { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import customerImg from '../assets/customer.png'

const reviews = [
    {
        "id": 1,
        "customerImg": customerImg,
        "customerName": "Rey Davila",
        "customerDesignation": "CEO & Administrator",
        "feedbackTitle": "Fantastic Selection",
        "feedbackMessage": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio minima fugiat qui dignissimos praesentium, quisquam in totam itaque aliquid unde ullam, nulla, neque earum adipisci."
    },
    {
        "id": 2,
        "customerImg": customerImg,
        "customerName": "Rey Davila",
        "customerDesignation": "CEO & Administrator",
        "feedbackTitle": "Fantastic Selection",
        "feedbackMessage": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio minima fugiat qui dignissimos praesentium, quisquam in totam itaque aliquid unde ullam, nulla, neque earum adipisci."
    },
    {
        "id": 3,
        "customerImg": customerImg,
        "customerName": "Rey Davila",
        "customerDesignation": "CEO & Administrator",
        "feedbackTitle": "Fantastic Selection",
        "feedbackMessage": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio minima fugiat qui dignissimos praesentium, quisquam in totam itaque aliquid unde ullam, nulla, neque earum adipisci."
    },
    {
        "id": 4,
        "customerImg": customerImg,
        "customerName": "Rey Davila",
        "customerDesignation": "CEO & Administrator",
        "feedbackTitle": "Fantastic Selection",
        "feedbackMessage": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio minima fugiat qui dignissimos praesentium, quisquam in totam itaque aliquid unde ullam, nulla, neque earum adipisci."
    },
    {
        "id": 5,
        "customerImg": customerImg,
        "customerName": "Rey Davila",
        "customerDesignation": "CEO & Administrator",
        "feedbackTitle": "Fantastic Selection",
        "feedbackMessage": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio minima fugiat qui dignissimos praesentium, quisquam in totam itaque aliquid unde ullam, nulla, neque earum adipisci."
    },
]

const CustomerReviews = () => {
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
        <section className='h-fit max-w-[1450px] mx-auto mt-[80px] lg:mt-[150px] md:px-5' >
            <h3 className='max-w-[80%] mx-auto text-[#1A1A1A] text-2xl md:text-3xl lg:text-5xl font-bold mb-9'>Don’t just take it form us</h3>
            <div className='flex gap-8 justify-between items-center'>
                <button style={{ boxShadow: '4px 1px 4px 0px rgba(159, 232, 112, 1)' }} className='p-7 hidden lg:block rounded-full border border-[#9FE870] text-black bg-light-gray transition-all duration-200' onClick={handlePrev}>
                    <HiOutlineArrowLeft size={30} />
                </button>

                <div className='max-w-[95%] sm:max-w-[70%] xl:max-w-[82%] mx-auto'>
                    <Swiper
                        slidesPerView="auto"
                        effect={'fade'}
                        modules={[Pagination]}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                        pagination={{ clickable: true }}
                    >
                        {
                            reviews.map(review => <SwiperSlide
                                key={review.id}
                                className='w-full mb-14 px-5'>
                                <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='w-full bg-[#9FE8700A] p-5 xl:p-10 rounded-[32px] border-4 border-[#9FE870] flex flex-col sm:flex-col-reverse lg:flex-row md:gap-12 items-center justify-between shadow-xl'>
                                    <div className='order-2 sm:order-1'>
                                        <span><RiDoubleQuotesL className='text-[40px] xl:text-[70px]'  /></span>
                                        <p className='text-[15px] xl:text-2xl text-gray mt-2 lg:mt-4'>{review.feedbackMessage.slice(0, 260)}...</p>

                                        <div className='my-3 lg:my-6'>
                                            <p className='text-[16px] xl:text-2xl mb-1 lg:mb-2 text-primary capitalize'>{review.customerName}</p>
                                            <p className='text-gray capitalize text-[16px] md:text-lg'>{review.customerDesignation}</p>
                                        </div>

                                        <div className='flex items-center gap-4'>
                                            <p className='text-[16px] md:text-lg'>Watch Video</p>
                                            <FaAngleRight />
                                        </div>
                                    </div>
                                    <div className='order-1 sm:order-2 w-fit h-fit'>
                                        <div className='w-[200px] h-[200px] md:w-[300px] lg:w-[250px] md:h-[300px]'>
                                            <img className='rounded-2xl h-full w-full object-cover' src={review.customerImg} alt="Customer image" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>

                <button style={{ boxShadow: '-4px 1px 4px 0px rgba(159, 232, 112, 1)' }} className='p-7 hidden lg:block rounded-full border border-[#9FE870] text-black bg-light-gray transition-all duration-200' onClick={handleNext}>
                    <HiOutlineArrowRight size={30} />
                </button>
            </div>
        </section >
    );
};

export default CustomerReviews;