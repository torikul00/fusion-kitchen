import MainContainer from './MainContainer';
import support from '../assets/images/support.svg'
import experts from '../assets/images/experts.svg'
import owners from '../assets/images/owners.svg'
import rightArrow from '../assets/images/right-arrow.svg'
import phone from '../assets/images/phone.svg'
import circelLight from '../assets/images/light.svg'
import { animated, useScroll, useSpring } from '@react-spring/web'

const BuildCustome = () => {
 
    const styles = useSpring({
        from: { transform: 'translateY(0%)' },
        to: { transform: 'translateY(50%)' },
        config: { duration: 2000, loop: true },
    });

    return (
        <section className=' w-full relative overflow-hidden my-[100px] bg-[#002415] py-[100px]'>
          <div className='mainSection'>

          </div>
            <MainContainer>
                {/* <animated.div
                    className="absolute right-0  w-[700px] h-[500px] bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${circelLight})`,
                        ...styles,
                    }}
                /> */}
                <div className='flex flex-col-reverse lg:flex-row items-center sm:gap-x-10 '>
                    <div className='w-[90%]'>
                        <h1 className='mt-20 lg:mt-0 text-[25px] sm:text-3xl md:text-4xl lg:text-5xl text-white'>Build custom commerce <br /> experiences.</h1>
                        <div className='mt-10 lg:w-[480px] '>
                            <h2 className='text-white text-[20px] lg:text-[32px]'>APIs</h2>
                            <p className='text-white mt-4 text-sm sm:-text-[16px]'>Integrate Square with your business software or website using Square APIs for <span className='text-[#9FE870]'>payments, commerce, customers, staff,</span> and <span className='text-[#9FE870]'>merchants.</span></p>
                        </div>
                        <div className='mt-10 lg:w-[450px]'>
                            <h2 className='text-white text-[20px] lg:text-[32px]'>Integrations</h2>
                            <p className='text-white mt-4 text-sm sm:-text-[16px] w-[95%]'>Connect Square payment hardware to your business software using  Square APIs for <span className='text-[#9FE870]'>Terminal API, Reader SDK,</span> and <span className='text-[#9FE870]'>POS API.</span></p>
                        </div>
                        <div className='mt-10 lg:w-[450px]'>
                            <h2 className='text-white text-[20px] lg:text-[32px]'>Apps</h2>
                            <p className='text-white mt-4 text-sm sm:-text-[16px] w-[90%]'>Use our prebuilt, vetted partner integrations in the <span className='text-[#9FE870]'>Square App Marketplace.</span></p>
                        </div>
                        <div className='mt-10 lg:w-[450px]'>
                            <h2 className='text-white text-[20px] lg:text-[32px]'>Help</h2>
                            <p className='text-white mt-4 text-sm sm:-text-[16px] w-[80%]'><span className='text-[#9FE870]'>Hire a Square specialis</span> to customize <span className='text-[#9FE870]'>how Square works for you.</span></p>
                        </div>
                    </div>
                    <div className='w-[90%] z-10 mt-0 lg:mt-20 '>
                        <img src={phone} alt="phone" />
                        {/* <img  className='absolute top-[-500px] w-[50%] right-0' src={circelLight} alt="" /> */}
                    </div>
                </div>
                <div className='mt-[80px] lg:mt-[120px]'>
                    <h1 className='text-[25px] sm:text-3xl md:text-4xl lg:text-5xl text-white'>Get Support</h1>
                    <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-3  gap-x-8 mt-10 lg:mt-16'>
                        <div className='suppor-shadow bg-[#00000038] p-6 rounded-[32px]'>
                            <img src={support} alt="support" />
                            <p className='text-white text-[22px] sm:text-[24px] mt-[60px]'>For around the clock < br /> product support.</p>
                            <button className='flex items-center gap-x-2 mt-[40px] text-[#9FE870]'>
                                View support
                                <img width={20} src={rightArrow} alt="rightArrow" />
                            </button>
                        </div>
                        <div className='suppor-shadow bg-[#00000038] p-6 rounded-[32px]'>
                            <img src={experts} alt="support" />
                            <p className='text-white text-[22px] sm:text-[24px] mt-[60px]'>For exclusive insights from <br /> Square business experts.</p>
                            <button className='flex items-center gap-x-2 mt-[40px] text-[#9FE870]'>
                                View support
                                <img width={20} src={rightArrow} alt="rightArrow" />
                            </button>
                        </div>
                        <div className='suppor-shadow bg-[#00000038] p-6 rounded-[32px]'>
                            <img src={owners} alt="support" />
                            <p className='text-white text-[22px] sm:text-[24px] mt-[60px]'>To connect with other <br /> business owners.</p>
                            <button className='flex items-center gap-x-2 mt-[40px] text-[#9FE870]'>
                                View support
                                <img width={20} src={rightArrow} alt="rightArrow" />
                            </button>
                        </div>
                    </div>
                </div>
            </MainContainer>
        </section>
    );
};

export default BuildCustome;