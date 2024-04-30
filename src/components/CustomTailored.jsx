import MainContainer from './MainContainer';
import customeTailored from '../assets/images/custome-tailored.png'
import signup from '../assets/images/signup.svg'
import settings from '../assets/images/settings.svg'
import analytics from '../assets/images/analytics.svg'

const CustomTailored = () => {
    return (
        <MainContainer>
            <div className="w-full mt-5 rounded-[20px] sm:rounded-[32px] bg-[#F2F2F2] pb-[60px] overflow-hidden">
                <div className='flex justify-between flex-col md:flex-row items-center mt-10'>
                    <h1 className='w-[85%] md:w-[460px] md:ml-[30px] lg:ml-[80px] text-[16px] sm:text-[26px] md:text-[26px] lg:text-[36px] font-bold'>Custom-tailored product suites for <span className='bg-[#9FE870] px-1'>restaurants,</span> <span className='bg-[#9FE870] px-1'>retail,</span> and <span className='bg-[#9FE870] px-1'>beauty</span> businesses.</h1>
                    <img  className='ml-auto w-full md:w-[70%]' src={customeTailored} alt="customeTailored" />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[90%] gap-x-10 gap-y-10 mt-10 mx-auto '>
                    <div className='flex justify-between'>
                        <div className='w-[17%] sm:w-[20%]'>
                            <img className='w-full' src={signup} alt="signup" />
                        </div>
                        <div className='w-[75%]'>
                            <p className='text-xs sm:text-base sm:text-[#808080]'>1st Step</p>
                            <h2 className='text-[22px] font-semibold sm:font-normal sm:text-[32px]'>Sign Up</h2>
                            <p className='text-xs sm:text-base text-[#808080]'>Embark on Our Partnership - Starting With Your Business&apos;s FSA Rating.</p>
                        </div>
                    </div>
                   
                    <div className='flex justify-between'>
                        <div className='w-[17%] sm:w-[20%]'>
                            <img className='w-full' src={settings} alt="signup" />
                        </div>
                        <div className='w-[75%]'>
                            <p className='text-xs sm:text-base sm:text-[#808080]'>2nd Step</p>
                            <h2 className='text-[22px] font-semibold sm:font-normal sm:text-[32px]'>Setup</h2>
                            <p className='text-xs sm:text-base text-[#808080]'>Contribute Your Menu and Declare Your Store Timings</p>
                        </div>
                    </div>
                   
                    <div className='flex justify-between'>
                        <div className='w-[17%] sm:w-[20%]'>
                            <img className='w-full' src={analytics} alt="signup" />
                        </div>
                        <div className='w-[75%]'>
                            <p className='text-xs sm:text-base sm:text-[#808080]'>3rd Step</p>
                            <h2 className='text-[22px] font-semibold sm:font-normal sm:text-[32px]'>Sell</h2>
                            <p className='text-xs sm:text-base text-[#808080]'>Track Your Orders in Real-Time with FK Restaurant Platform</p>
                        </div>
                    </div>
                   

                </div>
            </div>
        </MainContainer>
    );
};

export default CustomTailored;