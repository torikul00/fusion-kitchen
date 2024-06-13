import { HiOutlineArrowRight } from 'react-icons/hi';
import onlineOrdering from "../assets/images/online ordering/online-ordering.png"
import qrPay from "../assets/images/online ordering/qr-pay.png"
import payment from "../assets/images/online ordering/payment.png"
import pointOfSlae from "../assets/images/online ordering/point-of-sale.png"
import kitchenDisplay from "../assets/images/online ordering/kitchen-display.png"
const PaymentGridCard = () => {
    return (
        <div className='mb-[100px]'>
            <h3 className='mx-auto text-[#1A1A1A] text-2xl md:text-3xl lg:text-5xl font-bold mb-12'>Payments, fully integrated across <br /> your channels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='w-full h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px] relative overflow-hidden'>
                    <h3 className='text-[20px] md:text-2xl font-bold text-center mb-5'>Online Ordering</h3>
                    <p className="text-lg my-3 text-center">Low cost, totally flexible payments fully integrated into your POS products</p>
                    <img src={onlineOrdering} alt="" className='w-[150px] block absolute bottom-[11%] right-[28%] scale-[1.6]' />
                    <button className='group absolute z-10 left-8 bottom-8 flex items-center gap-2 bg-[#9FE870] text-[#1A1A1A] px-5 py-1.5 w-fit'>
                        <p className='font-semibold text-lg'>Discover More</p>
                        <HiOutlineArrowRight size={18} />
                    </button>
                </div>
                <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='w-full h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px] relative overflow-hidden'>
                    <h3 className='text-[20px] md:text-2xl font-bold text-center mb-5'>Point of Sale</h3>
                    <p className="text-lg my-3 text-center">A complete ePOS and kitchen management solution to keep you in control</p>
                    <img src={pointOfSlae} alt="" className='w-[150px] block absolute bottom-[24%] right-[28%] scale-[1.6]' />
                    <button className='group absolute z-10 left-8 bottom-8 flex items-center gap-2 bg-[#9FE870] text-[#1A1A1A] px-5 py-1.5 w-fit'>
                        <p className='font-semibold text-lg'>Discover More</p>
                        <HiOutlineArrowRight size={18} />
                    </button>
                </div>
                <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='w-full h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px] relative overflow-hidden'>
                    <h3 className='text-[20px] md:text-2xl font-bold text-center mb-5'>Kitchen Display</h3>
                    <p className="text-lg my-3 text-center">Streamline service and cut costs using automated customer ordering</p>
                    <img src={kitchenDisplay} alt="" className='w-[150px] block absolute bottom-[28%] right-[28%] scale-[1.6]' />
                    <button className='group absolute z-10 left-8 bottom-8 flex items-center gap-2 bg-[#9FE870] text-[#1A1A1A] px-5 py-1.5 w-fit'>
                        <p className='font-semibold text-lg'>Discover More</p>
                        <HiOutlineArrowRight size={18} />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7 lg:hidden">
                <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className=' h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px] relative overflow-hidden'>
                    <h3 className='text-[20px] md:text-2xl font-bold text-center mb-5'>QR Order & Pay</h3>
                    <p className="text-lg my-3 text-center">From stock control to staff rotas, automate your operational admin</p>
                    <img src={qrPay} alt="" className='w-[170px] block absolute bottom-[26%] right-[26%] scale-[1.6]' />
                    <button className='group absolute z-10 left-8 bottom-8 flex items-center gap-2 bg-[#9FE870] text-[#1A1A1A] px-5 py-1.5 w-fit'>
                        <p className='font-semibold text-lg'>Discover More</p>
                        <HiOutlineArrowRight size={18} />
                    </button>
                </div>
                <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className=' h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px] relative overflow-hidden'>
                    <h3 className='text-[20px] md:text-2xl font-bold text-center mb-5'>Payment Terminal</h3>
                    <p className="text-lg my-3 text-center">Automate customer ordering, increase revenue by 30% and reduce customer queues</p>
                    <img src={payment} alt="" className='w-[150px] block absolute bottom-[20%] right-[28%] scale-[1.6]' />
                    <button className='group absolute z-10 left-8 bottom-8 flex items-center gap-2 bg-[#9FE870] text-[#1A1A1A] px-5 py-1.5 w-fit'>
                        <p className='font-semibold text-lg'>Discover More</p>
                        <HiOutlineArrowRight size={18} />
                    </button>
                </div>
            </div>
            <div className="justify-center gap-7 mt-7 lg:flex hidden">
                <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='w-[31.7%] h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px] relative overflow-hidden'>
                    <h3 className='text-[20px] md:text-2xl font-bold text-center mb-5'>QR Order & Pay</h3>
                    <p className="text-lg my-3 text-center">From stock control to staff rotas, automate your operational admin</p>
                    <img src={qrPay} alt="" className='w-[170px] block absolute bottom-[26%] right-[26%] scale-[1.6]' />
                    <button className='group absolute z-10 left-8 bottom-8 flex items-center gap-2 bg-[#9FE870] text-[#1A1A1A] px-5 py-1.5 w-fit'>
                        <p className='font-semibold text-lg'>Discover More</p>
                        <HiOutlineArrowRight size={18} />
                    </button>
                </div>
                <div style={{ boxShadow: '8px 8px 13px 0px rgba(0,0,0,0.15)' }} className='w-[31.7%] h-[500px] bg-[#00000010] border border-gray-200 p-10 pb-0 rounded-[32px] relative overflow-hidden'>
                    <h3 className='text-[20px] md:text-2xl font-bold text-center mb-5'>Payment Terminal</h3>
                    <p className="text-lg my-3 text-center">Automate customer ordering, increase revenue by 30% and reduce customer queues</p>
                    <img src={payment} alt="" className='w-[150px] block absolute bottom-[20%] right-[28%] scale-[1.6]' />
                    <button className='group absolute z-10 left-8 bottom-8 flex items-center gap-2 bg-[#9FE870] text-[#1A1A1A] px-5 py-1.5 w-fit'>
                        <p className='font-semibold text-lg'>Discover More</p>
                        <HiOutlineArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentGridCard;