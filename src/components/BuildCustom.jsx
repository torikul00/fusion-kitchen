import MainContainer from './MainContainer';
import support from '../assets/images/support.svg'
import experts from '../assets/images/experts.svg'
import owners from '../assets/images/owners.svg'
import rightArrow from '../assets/images/right-arrow.svg'
import phone from '../assets/images//animation phone/phone.svg'
import visa from '../assets/images//animation phone/visa.svg'
import pay from '../assets/images//animation phone/pay.svg'
import applePay from '../assets/images//animation phone/applePay.svg'
import master from '../assets/images//animation phone/master.svg'
import blur from '../assets/images//animation phone/blur.svg'

const BuildCustom = () => {

    return (
        <section className=' w-full relative overflow-hidden my-[100px] bg-[#002415] py-[100px]'>
            <div className='greenCustomAnimation'>
            </div>
            <MainContainer>
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
                    <div className='lg:w-[90%] sm:mr-[215px] mt-0 sm:mt-20 '>
                        {/* for desktop view */}
                        <div className='hidden sm:block relative w-fit lg:ml-[100px]'>
                            <img data-aos="fade-up-right" data-aos-delay="600" data-aos-once="true" className='absolute left-[60%] top-[-17%] z-1 max-w-[460px]' src={blur} alt="blur" />
                            <img className='z-10 relative' src={phone} alt="phone" />
                            <img data-aos="fade-down-right" data-aos-delay="400" data-aos-once="true" className='absolute z-20 right-[-60px] top-[60%]' src={visa} alt="visa" />
                            <img data-aos="fade-down-left" data-aos-delay="400" data-aos-once="true" className='absolute z-20 left-[-90px] top-[70%]' src={applePay} alt="visa" />
                            <img data-aos="fade-up-right" data-aos-delay="400" data-aos-once="true" className='absolute right-[-60px] top-[10%] z-20' src={pay} alt="visa" />
                            <img data-aos="fade-up-left" data-aos-delay="400" data-aos-once="true" className='absolute left-[-90px] top-[25%] z-20' src={master} alt="visa" />
                        </div>
                        {/* for mobile view */}
                        <div className='block sm:hidden relative w-fit lg:ml-[100px]'>
                        <img data-aos="fade-up-right" data-aos-delay="600" data-aos-once="true" className='absolute left-[29%] top-[-17%] z-1 max-w-[255px] ' src={blur} alt="blur" />
                            <img className='w-[60%] z-10 relative' src={phone} alt="phone" />
                            <img width={60} data-aos="fade-down-right" data-aos-delay="400" data-aos-once="true" className='absolute right-[75px] top-[60%] z-20' src={visa} alt="visa" />
                            <img width={60} data-aos="fade-down-left" data-aos-delay="400" data-aos-once="true" className='absolute left-[-45px] top-[70%] z-20' src={applePay} alt="visa" />
                            <img width={60} data-aos="fade-up-right" data-aos-delay="400" data-aos-once="true" className='absolute right-[75px] top-[10%] z-20' src={pay} alt="visa" />
                            <img width={60} data-aos="fade-up-left" data-aos-delay="400" data-aos-once="true" className='absolute left-[-45px] top-[25%] z-20' src={master} alt="visa" />
                        </div>


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

export default BuildCustom;