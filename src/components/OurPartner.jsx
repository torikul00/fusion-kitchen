import one from '../assets/images/our partners/1.png'
import two from '../assets/images/our partners/2.png'
import three from '../assets/images/our partners/3.png'
import four from '../assets/images/our partners/4.png'
import five from '../assets/images/our partners/5.png'
import six from '../assets/images/our partners/6.png'
import worldPlay from '../assets/images/service partners/world-play.svg'
import evo from '../assets/images/service partners/evo.svg'
import deliveroo from '../assets/images/service partners/deliveroo.svg'
import hungy from '../assets/images/service partners/hungy-pandey.svg'
import justEat from '../assets/images/service partners/just-eat.svg'
import paymentsense from '../assets/images/service partners/paymentsense.svg'
import sturt from '../assets/images/service partners/sturt.svg'
import uberEats from '../assets/images/service partners/uber-eats.svg'
import mailchimp from '../assets/images/service partners/mailchimp.svg'
import Marquee from "react-fast-marquee";

const OurPartner = () => {
    return (
        <section className='max-w-[1400px] px-5 mx-auto mt-[150px] mb-[120px]'>
            <div>
                <h1 className='text-[25px] mb-10 sm:text-[30px] md:text-[45px] lg:text-5xl font-bold'>Ours partners</h1>
                <div className='mt-10 rounded-[35px] border-[3px] overflow-hidden border-[#1A1A1A]'>
                    <div>
                        <h1 className='text-center font-semibold sm:font-normal mb-3 sm:mb-0 text-[20px] sm:text-[40px] mt-[60px]'>Restaurant Partners</h1>
                        <p className='text-center font-semibold  sm:font-normal w-[70%] mx-auto sm:w-full text-[14px] sm:text-[20px]'>Together we power 1000s of businesses around the world</p>
                    </div>

                    {/* for desktop */}
                    <div className='hidden sm:block'>
                        <Marquee direction='right'>
                            <div className='flex items-center gap-x-20 ml-[70px] mt-10'>
                                <img src={one} alt="" />
                                <img src={two} alt="" />
                                <img src={three} alt="" />
                                <img src={four} alt="" />
                                <img src={five} alt="" />
                                <img src={six} alt="" />
                            </div>
                        </Marquee>
                    </div>

                    {/* for mobile and tablet */}
                    <div className='block sm:hidden'>
                        <Marquee direction='right'>
                            <div className='flex items-center gap-x-10 sm:gap-x-20 ml-[70px] mt-5 sm:mt-10'>
                                <img className='w-[100px]' src={three} alt="" />
                                <img className='w-[100px]' src={one} alt="" />
                                <img className='w-[100px]' src={six} alt="" />
                                <img className='w-[100px]' src={five} alt="" />
                                <img className='w-[100px]' src={two} alt="" />
                                <img className='w-[100px]' src={four} alt="" />
                            </div>
                        </Marquee>
                        <Marquee direction='left'>
                            <div className='flex items-center gap-x-10 sm:gap-x-20 ml-[70px] mt-5 sm:mt-10'>
                                <img className='w-[100px]' src={six} alt="" />
                                <img className='w-[100px]' src={four} alt="" />
                                <img className='w-[100px]' src={three} alt="" />
                                <img className='w-[100px]' src={five} alt="" />
                                <img className='w-[100px]' src={one} alt="" />
                                <img className='w-[100px]' src={two} alt="" />
                            </div>
                        </Marquee>

                    </div>

                    <div className='radial-gradient w-full mt-10 sm:mt-20'>
                        <div className='text-white'>
                            <h1 className='text-center text-[40px] pt-[50px]'>Service Partners</h1>
                            <p className='text-center text-[20px]'>Together we power 1000s of businesses around the world</p>
                        </div>

                        {/* for desktop */}
                        <div className='hidden sm:block mt-10 pb-14'>
                            <Marquee direction='left' speed={50}>
                                <div className='flex items-center gap-x-20 ml-[70px] mt-10'>
                                    <img src={worldPlay} alt="" />
                                    <img src={evo} alt="" />
                                    <img src={mailchimp} alt="" />
                                    <img src={paymentsense} alt="" />
                                    <img src={uberEats} alt="" />
                                    <img src={paymentsense} alt="" />
                                </div>
                            </Marquee>
                            <Marquee direction='right' speed={50} className='mt-10'>
                                <div className='flex items-center gap-x-20 ml-[70px] mt-10'>
                                    <img src={hungy} alt="" />
                                    <img src={justEat} alt="" />
                                    <img src={deliveroo} alt="" />
                                    <img src={uberEats} alt="" />
                                    <img src={sturt} alt="" />
                                    <img src={uberEats} alt="" />
                                </div>
                            </Marquee>
                        </div>

                        {/* for mobile and tablet */}
                        <div className='block sm:hidden pb-10'>
                            <Marquee direction='right' speed={30}>
                                <div className='flex items-center gap-x-10 sm:gap-x-20 ml-[70px] mt-5 sm:mt-10'>
                                    <img className='w-[100px]' src={worldPlay} alt="worldPlay" />
                                    <img className='w-[100px]' src={justEat} alt="evo" />
                                    <img className='w-[100px]' src={sturt} alt="sturt" />
                                    <img className='w-[100px]' src={deliveroo} alt="deliveroo" />
                                    <img className='w-[100px]' src={hungy} alt="hungy" />
                                    <img className='w-[100px]' src={mailchimp} alt="mailchimp" />
                                    <img className='w-[100px]' src={evo} alt="evo" />

                                </div>
                            </Marquee>
                            <Marquee direction='left' speed={30}>
                                <div className='flex items-center gap-x-10 sm:gap-x-20 ml-[70px] mt-5 sm:mt-10'>
                                    <img className='w-[100px]' src={worldPlay} alt="worldPlay" />
                                    <img className='w-[100px]' src={justEat} alt="evo" />
                                    <img className='w-[100px]' src={mailchimp} alt="mailchimp" />
                                    <img className='w-[100px]' src={evo} alt="evo" />
                                    <img className='w-[100px]' src={deliveroo} alt="deliveroo" />
                                    <img className='w-[100px]' src={hungy} alt="hungy" />
                                    <img className='w-[100px]' src={sturt} alt="sturt" />


                                </div>
                            </Marquee>
                            {/* <Marquee direction='right' speed={30}>
                                <div className='flex items-center gap-x-10 sm:gap-x-20 ml-[70px] mt-5 sm:mt-10'>
                                    <img className='w-[100px]' src={worldPlay} alt="worldPlay" />
                                    <img className='w-[100px]' src={hungy} alt="hungy" />
                                    <img className='w-[100px]' src={evo} alt="evo" />
                                    <img className='w-[100px]' src={mailchimp} alt="mailchimp" />
                                    <img className='w-[100px]' src={justEat} alt="evo" />
                                    <img className='w-[100px]' src={deliveroo} alt="deliveroo" />
                                    <img className='w-[100px]' src={sturt} alt="sturt" />


                                </div>
                            </Marquee>
                            <Marquee direction='left' speed={30}>
                                <div className='flex items-center gap-x-10 sm:gap-x-20 ml-[70px] mt-5 sm:mt-10'>
                                    <img className='w-[100px]' src={worldPlay} alt="worldPlay" />
                                    <img className='w-[100px]' src={evo} alt="evo" />
                                    <img className='w-[100px]' src={sturt} alt="sturt" />
                                    <img className='w-[100px]' src={mailchimp} alt="mailchimp" />
                                    <img className='w-[100px]' src={deliveroo} alt="deliveroo" />
                                    <img className='w-[100px]' src={justEat} alt="evo" />
                                    <img className='w-[100px]' src={hungy} alt="hungy" />

                                </div>
                            </Marquee> */}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPartner;