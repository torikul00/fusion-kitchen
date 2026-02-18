import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import flag from "../assets/language-flag.png";
import shoppingBag from "../assets/shopping.png"
import { FaAngleDown } from "react-icons/fa6";
import '../styles/navbar2.css';
import { useState } from "react";
import product1 from '../assets/images/navbar/product/1.png'
import product2 from '../assets/images/navbar/product/2.png'
import product3 from '../assets/images/navbar/product/3.png'
import product4 from '../assets/images/navbar/product/4.png'
import product5 from '../assets/images/navbar/product/5.png'
import product6 from '../assets/images/navbar/product/6.png'
import product7 from '../assets/images/navbar/product/7.png'
import product8 from '../assets/images/navbar/product/8.png'
import product9 from '../assets/images/navbar/product/9.png'


const Navbar = () => {
    const [dropdown, setDropdown] = useState(null);

    const handleMouseEnter = (menu) => {
        setDropdown(menu);
    };

    const handleMouseLeave = () => {
        setDropdown(null);
    };

    const productData = [
        {
            img: product1,
            title: 'Point of sale',
            desc: 'POS & multi-channel ordering',
            link: '/pos'
        },
        {
            img: product2,
            title: 'Payments',
            desc: 'Low cost, non-contracted payments',
            link: '/payments'
        },
        {
            img: product3,
            title: 'QR Mobile Order & Pay',
            desc: 'Increase average table value by 30%',
            link: '#'
        },
        {
            img: product4,
            title: 'Online Ordering',
            desc: 'Branded websites and mobile apps',
            link: '/online-ordering'
        },
        {
            img: product5,
            title: 'Delivery Management',
            desc: 'Delivery management and driver tracking',
            link: '#'
        },
        {
            img: product6,
            title: 'Kitchen Display (KDS)',
            desc: 'FuLt kitchen and order management',
            link: '#'
        },
        {
            img: product7,
            title: 'Enterprise & Franchise',
            desc: 'MuLti-location and Franchise management platform ',
            link: '#'
        },
        {
            img: product8,
            title: 'Collection Display',
            desc: 'Keep your customers in loop',
            link: '#'
        },
        {
            img: product9,
            title: 'Self-serve Kiosk ',
            desc: 'Automate customer ordering',
            link: '#'
        },
    ]


    return (
        <div className="fixed  left-0 top-0 right-0 z-10 max-w-[1620px] mx-auto px-5">
            <nav className={`bg-white shadow px-[30px] rounded-[20px] relative z-10 transition-all duration-200 ease-linear ${dropdown ? 'h-[400px]' : 'h-[80px] '}`}>
                <div className='w-full flex items-center mt-[10px]'>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                            <div className="flex items-center gap-x-8 font-semibold ml-[50px]">
                                <Link to="/pos" className="py-[28px]">POS</Link>
                                <Link to="/online-ordering" className="py-[28px]">Online Ordering</Link>
                                <Link to="/payments" className="py-[28px]">Payments</Link>
                                <div
                                    onMouseEnter={() => handleMouseEnter('Products')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <span className="flex items-center gap-x-2 py-[28px] cursor-pointer">
                                        Products <FaAngleDown className={dropdown === 'Products' ? 'rotate-180 transition-all duration-300' : ''} />
                                    </span>
                                    {dropdown === 'Products' && (
                                        <div className="absolute top-[80px] left-0 w-full bg-white transition-all rounded-[20px] p-[20px]">
                                            <div className="w-full h-full flex justify-between">
                                                <div className="w-[75%] navbar-gradient h-full rounded-[20px] p-[50px] pl-[100px]">
                                                    <div data-aos='fade-up' data-aos-duration={300} className="grid grid-cols-3 gap-[55px]">
                                                        {
                                                            productData.map(item => <Link to={item.link} key={item.title} className="flex items-center gap-x-3 w-fit">
                                                                <img className="min-w-[38px] h-[38px]" src={item.img} alt="" />
                                                                <div>
                                                                    <p className="text-sm font-semibold pb-1">{item.title}</p>
                                                                    <p className="text-xs text-[#383838] font-normal">{item.desc}</p>
                                                                </div>
                                                            </Link>)
                                                        }
                                                    </div>
                                                </div>
                                                <div className="w-[20%] h-full justify-center flex flex-col gap-4">
                                                    <p className="text-[#808080] font-medium">QUICK LINKS</p>
                                                    <Link className="text-[#383838] font-normal" to='/contact-us'>Contact us</Link>
                                                    <Link className="text-[#383838] font-normal" to='/pricing'>Pricing</Link>
                                                    <Link className="text-[#383838] font-normal" to='#'>Watch demo</Link>
                                                    <Link className="text-[#383838] font-normal" to='#'>Blog</Link>
                                                    <Link className="text-[#383838] font-normal" to='#'>Fusion Hospitality</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <Link to='/pricing' className="py-[28px]">Pricing</Link>
                                <Link to='/contact-us' className="py-[28px]">Contact Us</Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-6">
                            <Link>
                                <img className="w-[30px]" src={shoppingBag} alt="flag" />
                            </Link>
                            <div className="flex items-center gap-x-2 cursor-pointer">
                                <img src={flag} alt="flag" /> <FaAngleDown />
                            </div>
                            <button className="bg-primary w-[140px] h-[50px] rounded-[10px] font-semibold">Get Demo</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
