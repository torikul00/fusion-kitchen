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
        <section className='h-fit max-w-[1450px] mx-auto mt-[150px] px-5' >
            <h3 className='max-w-[80%] mx-auto text-[#1A1A1A] text-5xl font-bold mb-9'>Don’t just take it form us</h3>
            <div className='flex gap-8 justify-between items-center'>
                <button style={{boxShadow: '4px 1px 4px 0px rgba(159, 232, 112, 1)'}} className='p-7 rounded-full border border-[#9FE870] text-black bg-light-gray transition-all duration-200' onClick={handlePrev}>
                    <HiOutlineArrowLeft size={30} />
                </button>

                <div className='max-w-[82%]'>
                    <Swiper
                        slidesPerView="auto"
                        grabCursor={true}
                        effect={'fade'}
                        modules={[Pagination]}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                    >
                        {
                            reviews.map(review => <SwiperSlide
                                key={review.id}
                                className='w-full p-5'>
                                <div style={{ boxShadow: '0px 4px 25px -4px rgba(0,0,0,0.15)' }} className='w-full bg-[#9FE8700A] p-10 rounded-2xl border-4 border-[#9FE870] flex md:gap-12 items-center justify-between'>
                                    <div className='order-2 sm:order-1'>
                                        <span><RiDoubleQuotesL size={70} /></span>
                                        <p className='text-gray mt-4'>{review.feedbackMessage.slice(0, 260)}...</p>

                                        <div className='my-6'>
                                            <p className='text-2xl mb-2 text-primary capitalize'>{review.customerName}</p>
                                            <p className='text-gray capitalize text-lg'>{review.customerDesignation}</p>
                                        </div>

                                        <div className='flex items-center gap-4'>
                                            <p className='text-lg'>Watch Video</p>
                                            <FaAngleRight />
                                        </div>
                                    </div>
                                    <div className='order-1 sm:order-2 w-fit h-fit'>
                                        <div className='w-[150px] h-[150px] md:w-[300px] md:h-[300px]'>
                                            <img className='rounded-2xl h-full w-full object-cover' src={review.customerImg} alt="Customer image" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
                
                <button style={{boxShadow: '-4px 1px 4px 0px rgba(159, 232, 112, 1)'}} className='p-7 rounded-full border border-[#9FE870] text-black bg-light-gray transition-all duration-200' onClick={handleNext}>
                    <HiOutlineArrowRight size={30} />
                </button>
            </div>
        </section >
    );
};

export default CustomerReviews;