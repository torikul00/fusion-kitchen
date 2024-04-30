import MainContainer from './MainContainer';
import fireFly from '../assets/images/Firefly-20240428225411 1.png'

const ElegantProducts = () => {
    return (
        <section>
            <MainContainer>
                <div className="w-full rounded-[20px] sm:rounded-[32px] bg-gradient-to-l from-[#002415] to-[#062F1D] overflow-hidden">
                    <h1 className='text-center text-[18px] sm:text-[40px] font-semibold sm:font-bold mx-auto text-white my-[26px]'>Elegant looking Smart <br /> Product for Your Business!</h1>
                    <img className='w-full' src={fireFly} alt="fireFly" />
                </div>
            </MainContainer>
        </section>
    );
};

export default ElegantProducts;