import MainContainer from './MainContainer';
import facebookLogo from '../assets/images/facebook-logo.svg'
import instaLogo from '../assets/images/instagram-logo.svg'
import twitterLogo from '../assets/images/twitter-logo.svg'
import globalLogo from '../assets/images/global-logo.svg'
import copyrightImage from '../assets/images/copyright-image.svg'
const Footer = () => {
    return (
        <footer className='bg-[#052115] w-full text-white py-[80px]'>
            <MainContainer>
                <div className='grid grid-cols-2 gap-x-6 gap-y-20 text-sm sm:gap-0 sm:text-base sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4'>
                    <div>
                        <h1 className='text-[#808080] mb-4'>Products</h1>
                        <div className='flex flex-col gap-y-4'>
                            <a href="#">Commerce</a>
                            <a href="#">Point of sale</a>
                            <a href="#">Payments</a>
                            <a href="#">Online</a>
                            <a href="#">Invoices</a>
                            <a href="#">Customers</a>
                            <a href="#">Marketing</a>
                            <a href="#">Loyalty</a>
                            <a href="#">Customer Directory</a>
                            <a href="#">Banking</a>
                            <a href="#">Staff</a>
                            <a href="#">Payroll</a>
                            <a href="#">Team Management</a>
                            <a href="#">Buy Now, Pay Later</a>
                            <a href="#">Hardware</a>
                            <a href="#">Business software & solutions</a>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[#808080] mb-4'>Business Types</h1>
                        <div className='flex flex-col gap-y-4'>
                            <a href="#">Food & Beverage</a>
                            <a href="#">Quick Service</a>
                            <a href="#">Full Service</a>
                            <a href="#">Fast Casual</a>
                            <a href="#">Bars & Breweries</a>
                            <a href="#">Retail</a>
                            <a href="#">Beauty Salon</a>
                            <a href="#">Barbershop</a>
                            <a href="#">Hair Salon</a>
                            <a href="#">Hair Salon</a>
                            <a href="#">Nail Salon</a>
                            <a href="#">Day Spa</a>
                            <a href="#">Tattoo & Piercing</a>
                            <a href="#">Med spa</a>
                            <a href="#">Fitness</a>
                            <a href="#">Professional Services</a>
                            <a href="#">Home & Repair</a>
                            <a href="#">Large Businesses</a>
                            <a href="#">Franchises</a>

                        </div>
                    </div>
                    <div>
                        <h1 className='text-[#808080] mb-4'>Resources</h1>
                        <div className='flex flex-col gap-y-4'>
                            <a href="#">Pricing</a>
                            <a href="#">Why Square?</a>
                            <a href="#">Testimonials</a>
                            <a href="#">The Bottom Line</a>
                            <a href="#">Sales</a>
                            <a href="#">Support</a>
                            <a href="#">Seller Community</a>
                            <a href="#">Developer Platform</a>
                            <a href="#">Merchant Services</a>
                            <a href="#">Rent Hardware</a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className='text-[#808080] mb-4'>Contact</h1>
                            <div className='flex flex-col gap-y-4'>
                                <p>Customer support: 1 (855) 700-6000</p>
                                <p>Sales: 1 (800) 470-1673</p>

                            </div>
                        </div>
                        <div className='mt-[60px]'>
                            <h1 className='text-[#808080] mb-4'>Square</h1>
                            <div className='flex flex-col gap-y-4'>
                                <a href="#">About</a>
                                <a href="#">Press & Media</a>
                                <a href="#">Careers</a>
                                <a href="#">Affiliates</a>
                                <a href="#">Partners</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[70px] flex items-center  mt-[90px] border-b border-t border-[#ffffff35]'>
                    <div className="flex w-full justify-between items-center">
                        <div className='flex items-center gap-x-3 text-sm sm:text-base'>
                            <img src={globalLogo} alt="global-logo" />
                            <p>United States (English)</p>
                        </div>
                        <div className='flex items-center gap-x-5'>
                            <a href="#"><img src={facebookLogo} alt="facebook-logo" /> </a>
                            <a href="#"><img src={instaLogo} alt="instagram-logo" /> </a>
                            <a href="#"><img src={twitterLogo} alt="twitter-logo" />  </a>
                        </div>
                    </div>
                </div>
                <div className='mt-8 flex justify-between items-start text-sm sm:text-base'>
                    <div className='flex items-center gap-x-2'>
                        <img src={copyrightImage} alt="" />
                        <h2 className='text-[#cccccc]'>Fusion Kitchen 2024</h2>
                    </div>
                    <div className='flex flex-col text-right text-sm sm:text-base font-[300] gap-y-4'>
                        <a href="#">Privacy Notice</a>
                        <a href="#">Security</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Licenses</a>
                        <a href="#">PGovernment</a>
                        <a href="#">Square Capital, LLC Licenses</a>
                        <a href="#">Block, Inc.</a>
                    </div>

                </div>
            </MainContainer>
        </footer>
    );
};

export default Footer;