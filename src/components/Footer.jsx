import MainContainer from './MainContainer';
import facebookLogo from '../assets/images/facebook-logo.svg'
import instaLogo from '../assets/images/instagram-logo.svg'
import twitterLogo from '../assets/images/twitter-logo.svg'
import globalLogo from '../assets/images/global-logo.svg'
import copyrightImage from '../assets/images/copyright-image.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-[#052115] w-full text-white py-[80px]'>
            <MainContainer>
                <div className='grid grid-cols-2 gap-x-6 gap-y-20 text-sm sm:gap-0 sm:text-base sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4'>
                    <div>
                        <h1 className='text-[#808080] mb-4'>Products</h1>
                        <div className='flex flex-col gap-y-4'>
                            <Link to="#">Commerce</Link>
                            <Link to="#">Point of sale</Link>
                            <Link to="#">Payments</Link>
                            <Link to="#">Online</Link>
                            <Link to="#">Invoices</Link>
                            <Link to="#">Customers</Link>
                            <Link to="#">Marketing</Link>
                            <Link to="#">Loyalty</Link>
                            <Link to="#">Customer Directory</Link>
                            <Link to="#">Banking</Link>
                            <Link to="#">Staff</Link>
                            <Link to="#">Payroll</Link>
                            <Link to="#">Team Management</Link>
                            <Link to="#">Buy Now, Pay Later</Link>
                            <Link to="#">Hardware</Link>
                            <Link to="#">Business software & solutions</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[#808080] mb-4'>Business Types</h1>
                        <div className='flex flex-col gap-y-4'>
                            <Link to="#">Food & Beverage</Link>
                            <Link to="#">Quick Service</Link>
                            <Link to="#">Full Service</Link>
                            <Link to="#">Fast Casual</Link>
                            <Link to="#">Bars & Breweries</Link>
                            <Link to="#">Retail</Link>
                            <Link to="#">Beauty Salon</Link>
                            <Link to="#">Barbershop</Link>
                            <Link to="#">Hair Salon</Link>
                            <Link to="#">Hair Salon</Link>
                            <Link to="#">Nail Salon</Link>
                            <Link to="#">Day Spa</Link>
                            <Link to="#">Tattoo & Piercing</Link>
                            <Link to="#">Med spa</Link>
                            <Link to="#">Fitness</Link>
                            <Link to="#">Professional Services</Link>
                            <Link to="#">Home & Repair</Link>
                            <Link to="#">Large Businesses</Link>
                            <Link to="#">Franchises</Link>

                        </div>
                    </div>
                    <div>
                        <h1 className='text-[#808080] mb-4'>Resources</h1>
                        <div className='flex flex-col gap-y-4'>
                            <Link to="#">Pricing</Link>
                            <Link to="#">Why Square?</Link>
                            <Link to="#">Testimonials</Link>
                            <Link to="#">The Bottom Line</Link>
                            <Link to="#">Sales</Link>
                            <Link to="#">Support</Link>
                            <Link to="#">Seller Community</Link>
                            <Link to="#">Developer Platform</Link>
                            <Link to="#">Merchant Services</Link>
                            <Link to="#">Rent Hardware</Link>
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
                                <Link to="#">About</Link>
                                <Link to="#">Press & Media</Link>
                                <Link to="#">Careers</Link>
                                <Link to="#">Affiliates</Link>
                                <Link to="#">Partners</Link>
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
                            <Link to="#" target='_blank'><img src={facebookLogo} alt="facebook-logo" /> </Link>
                            <Link to="#" target='_blank'><img src={instaLogo} alt="instagram-logo" /> </Link>
                            <Link to="#" target='_blank'><img src={twitterLogo} alt="twitter-logo" />  </Link>
                        </div>
                    </div>
                </div>
                <div className='mt-8 flex justify-between items-start text-sm sm:text-base'>
                    <div className='flex items-center gap-x-2'>
                        <img src={copyrightImage} alt="" />
                        <h2 className='text-[#cccccc]'>Fusion Kitchen 2024</h2>
                    </div>
                    <div className='flex flex-col text-right text-sm sm:text-base font-[300] gap-y-4'>
                        <Link to="#">Privacy Notice</Link>
                        <Link to="#">Security</Link>
                        <Link to="#">Terms of Service</Link>
                        <Link to="#">Licenses</Link>
                        <Link to="#">PGovernment</Link>
                        <Link to="#">Square Capital, LLC Licenses</Link>
                        <Link to="#">Block, Inc.</Link>
                    </div>
                </div>
            </MainContainer>
        </footer>
    );
};

export default Footer;