import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import flag from "../assets/language-flag.png";
import shoppingBag from "../assets/shopping.png"
import { FaAngleDown } from "react-icons/fa6";
import '../styles/navbar2.css';
import { useState } from "react";
import bar from '../assets/images/navbar/restaurant/bar.png'
import burger from '../assets/images/navbar/restaurant/burger.png'
import coffee from '../assets/images/navbar/restaurant/coffee.png'
import ghost from '../assets/images/navbar/restaurant/ghost.png'
import takeaway from '../assets/images/navbar/restaurant/takeaway.png'
import truck from '../assets/images/navbar/restaurant/truck.png'
import restaurant from '../assets/images/navbar/restaurant/restaurant.png'
import retail1 from '../assets/images/navbar/retail/1.png'
import retail2 from '../assets/images/navbar/retail/2.png'
import retail3 from '../assets/images/navbar/retail/3.png'
import retail4 from '../assets/images/navbar/retail/4.png'
import retail5 from '../assets/images/navbar/retail/5.png'
import retail6 from '../assets/images/navbar/retail/6.png'
import retail7 from '../assets/images/navbar/retail/7.png'
import retail8 from '../assets/images/navbar/retail/8.png'
import beauty1 from '../assets/images/navbar/beauty/1.png'
import beauty2 from '../assets/images/navbar/beauty/2.png'
import beauty3 from '../assets/images/navbar/beauty/3.png'
import beauty4 from '../assets/images/navbar/beauty/4.png'
import beauty5 from '../assets/images/navbar/beauty/5.png'
import beauty6 from '../assets/images/navbar/beauty/6.png'
import beauty7 from '../assets/images/navbar/beauty/7.png'
import beauty8 from '../assets/images/navbar/beauty/8.png'
import beauty9 from '../assets/images/navbar/beauty/9.png'
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
    const restaurantData = [
        {
            img: takeaway,
            title: 'Takeaway',
            desc: 'POS & multi-channel ordering',
            link: '#'
        },
        {
            img: ghost,
            title: 'Ghost Kitchens',
            desc: 'Online & multi-channel ordering',
            link: '#'
        },
        {
            img: restaurant,
            title: 'Restaurants',
            desc: 'Full service or fine dining',
            link: '#'
        },
        {
            img: coffee,
            title: 'Cafes & Coffee',
            desc: 'Reduce queues and build loyalty',
            link: '#'
        },
        {
            img: bar,
            title: 'Bars & Pubs',
            desc: 'Maximize food and drink sales',
            link: '#'
        },
        {
            img: truck,
            title: 'Food Trucks',
            desc: 'Flexible selling in any location',
            link: '#'
        },
        {
            img: burger,
            title: 'Quick Service Restaurant',
            desc: 'Automate order flow and increase ATV ',
            link: '#'
        },
    ]
    const retailData = [
        {
            img: retail1,
            title: 'All retail solutions',
            desc: 'POS & multi-channel ordering',
            link: '#'
        },
        {
            img: retail2,
            title: 'Clothing & accessories',
            desc: 'Online & multi-channel ordering',
            link: '#'
        },
        {
            img: retail3,
            title: 'Grocery & convenience',
            desc: 'Full service or fine dining',
            link: '#'
        },
        {
            img: retail4,
            title: 'Home goods & furniture',
            desc: 'Reduce queues and build loyalty',
            link: '#'
        },
        {
            img: retail5,
            title: 'Wine & liquor',
            desc: 'Maximize food and drink sales',
            link: '#'
        },
        {
            img: retail6,
            title: 'CBD retail',
            desc: 'Flexible selling in any location',
            link: '#'
        },
        {
            img: retail7,
            title: 'Large businesses',
            desc: 'Automate order flow and increase ATV ',
            link: '#'
        },
        {
            img: retail8,
            title: 'Franchises',
            desc: 'Maximize food and drink sales',
            link: '#'
        },

    ]
    const beautyData = [
        {
            img: beauty1,
            title: 'All beauty solutions',
            desc: 'POS & multi-channel ordering',
            link: '#'
        },
        {
            img: beauty2,
            title: 'Beauty salon',
            desc: 'Online & multi-channel ordering',
            link: '#'
        },
        {
            img: beauty3,
            title: 'Nail salons',
            desc: 'Full service or fine dining',
            link: '#'
        },
        {
            img: beauty4,
            title: 'Hair salon',
            desc: 'Reduce queues and build loyalty',
            link: '#'
        },
        {
            img: beauty5,
            title: 'Day spa',
            desc: 'Maximize food and drink sales',
            link: '#'
        },
        {
            img: beauty6,
            title: 'Barbershop',
            desc: 'Flexible selling in any location',
            link: '#'
        },
        {
            img: beauty7,
            title: 'Tattoo & piercing',
            desc: 'Automate order flow and increase ATV ',
            link: '#'
        },
        {
            img: beauty8,
            title: 'Med spa',
            desc: 'Maximize food and drink sales',
            link: '#'
        },
        {
            img: beauty9,
            title: 'Large businesses ',
            desc: 'Flexible selling in any location',
            link: '#'
        },
    ]
    const productData = [
        {
            img: product1,
            title: 'Point of sale',
            desc: 'POS & multi-channel ordering',
            link: '#'
        },
        {
            img: product2,
            title: 'Payments',
            desc: 'Low cost, non-contracted payments',
            link: '#'
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
            link: '#'
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
                                {['Restaurants', 'Retail', 'Beauty', 'Products'].map((item) => (
                                    <div
                                        className=""
                                        onMouseEnter={() => handleMouseEnter(item)}
                                        onMouseLeave={handleMouseLeave}
                                        key={item}
                                    >
                                        <Link className="flex items-center gap-x-2 py-[28px]">
                                            {item} <FaAngleDown className={dropdown == item && 'rotate-180 transition-all duration-300'} />
                                        </Link>
                                        {dropdown === item && (
                                            <div className="absolute top-[80px] w-full left-0 bg-white h-full transition-all rounded-[20px] p-[20px]">
                                                {
                                                    dropdown == 'Restaurants' &&
                                                    <div className="w-full h-full flex justify-between">
                                                        <div className="w-[75%] navbar-gradient h-full rounded-[20px] p-[50px] pl-[100px]">
                                                            <div data-aos='fade-up' data-aos-duration={300} className="grid grid-cols-3 gap-[55px]">
                                                                {
                                                                    restaurantData.map(item => <Link to={item.link} key={item} className="flex items-center gap-x-3 w-fit">
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
                                                            <Link className="text-[#383838] font-normal" to='#'>Contact us</Link>
                                                            <Link className="text-[#383838] font-normal" to='#'>Pricing</Link>
                                                            <Link className="text-[#383838] font-normal" to='#'>Watch demo</Link>
                                                            <Link className="text-[#383838] font-normal" to='#'>Blog</Link>
                                                            <Link className="text-[#383838] font-normal" to='#'>Fusion Hospitality</Link>
                                                        </div>
                                                    </div>
                                                }
                                                {
                                                    dropdown == 'Retail' && <div className="w-full h-full flex justify-between">
                                                        <div className="w-[75%] navbar-gradient h-full rounded-[20px] p-[50px] pl-[100px]">
                                                            <div data-aos='fade-up' data-aos-duration={300} className="grid grid-cols-3 gap-[55px]">
                                                                {
                                                                    retailData.map(item => <Link to={item.link} key={item} className="flex items-center gap-x-3 w-fit">
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
                                                            <Link className="text-[#383838] font-normal" to='#'>Contact us</Link>
                                                            <Link className="text-[#383838] font-normal" to='#'>Pricing</Link>
                                                            <Link className="text-[#383838] font-normal" to='#'>Watch demo</Link>
                                                            <Link className="text-[#383838] font-normal" to='#'>Blog</Link>
                                                            <Link className="text-[#383838] font-normal" to='#'>Fusion Hospitality</Link>
                                                        </div>
                                                    </div>
                                                }
                                                {
                                                    dropdown == 'Beauty' && <div className="w-full h-full flex justify-between">
                                                        <div className="w-[75%] navbar-gradient h-full rounded-[20px] p-[50px] pl-[100px]">
                                                            <div data-aos='fade-up' data-aos-duration={300} className="grid grid-cols-3 gap-[55px]">
                                                                {
                                                                    beautyData.map(item => <Link to={item.link} key={item} className="flex items-center gap-x-3 w-fit">
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
                                                            <Link className="text-[#383838] font-normal" to='#'>Contact us</Link>
                                                            <Link className="text-[#383838] font-normal" to='#'>Pricing</Link>
                                                            <Link className="text-[#383838] font-normal" to='#'>Watch demo</Link>
                                                            <Link className="text-[#383838] font-normal" to='#'>Blog</Link>
                                                            <Link className="text-[#383838] font-normal" to='#'>Fusion Hospitality</Link>
                                                        </div>
                                                    </div>
                                                }
                                                {
                                                    dropdown == 'Products' && <div className="w-full h-full flex justify-between">
                                                        <div className="w-[75%] navbar-gradient h-full rounded-[20px] p-[50px] pl-[100px]">
                                                            <div data-aos='fade-up' data-aos-duration={300} className="grid grid-cols-3 gap-[55px]">
                                                                {
                                                                    productData.map(item => <Link to={item.link} key={item} className="flex items-center gap-x-3 w-fit">
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
                                                            <Link className="text-[#383838] font-normal" to='#'>Contact us</Link>
                                                            <Link className="text-[#383838] font-normal" to='#'>Pricing</Link>
                                                            <Link className="text-[#383838] font-normal" to='#'>Watch demo</Link>
                                                            <Link className="text-[#383838] font-normal" to='#'>Blog</Link>
                                                            <Link className="text-[#383838] font-normal" to='#'>Fusion Hospitality</Link>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <Link>Services</Link>
                                <Link to='/pricing'>Pricing</Link>
                                <Link to='/contact-us'>Contact Us</Link>
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
