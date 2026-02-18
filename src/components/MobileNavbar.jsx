import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import flag from "../assets/language-flag.png"
import shoppingBag from "../assets/shopping.png"
import { FaAngleDown } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import '../styles/Navbar.css'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";
import product1 from '../assets/images/navbar/product/1.png'
import product2 from '../assets/images/navbar/product/2.png'
import product3 from '../assets/images/navbar/product/3.png'
import product4 from '../assets/images/navbar/product/4.png'
import product5 from '../assets/images/navbar/product/5.png'
import product6 from '../assets/images/navbar/product/6.png'
import product7 from '../assets/images/navbar/product/7.png'
import product8 from '../assets/images/navbar/product/8.png'
import product9 from '../assets/images/navbar/product/9.png'

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

const MobileNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openParentNav, setOpenParentNav] = useState(null)

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [openMenu])

  return (
    <div className="pt-3">
      <nav className={`h-[60px] shadow xl:h-[90px] w-full flex items-center bg-white justify-between px-5  rounded-[12px]  z-10`}>
        <div className="flex gap-10 2xl:gap-[60px] items-center ">
          <Link to="/">
            <img src={logo} alt="" className="h-6 sm:h-7 xl:h-9 w-auto" />
          </Link>
        </div>
        <button onClick={() => { setOpenMenu(!openMenu); setOpenParentNav(null) }} className="block xl:hidden cursor-pointer">
          {openMenu ? <IoCloseSharp size={25} /> : <HiOutlineMenuAlt3 size={25} />}
        </button>

        <div className={`${openMenu ? 'opcacity-1 z-[999] visible' : 'opacity-0 -z-[999] invisible'} transition-all duration-300 xl:hidden fixed z-[990] top-[70px] right-0 w-screen h-screen bg-[#000000a8] border-t border-[#d9d9d9] border-opacity-20`}>
        </div>

        <ul className={`${openMenu ? 'right-0' : '-right-[100%]'} h-screen max-h-fit w-full max-w-[420px] xl:hidden transition-all duration-300 fixed z-[999] top-[80px] bg-white text-black pb-[170px] overflow-y-scroll`}>
          <li>
            <Link to="/pos" className='w-full px-6 transition-all py-5 border-b border-[#2e2c2c] font-bold border-opacity-20 flex items-center outline-none'>POS</Link>
          </li>
          <li>
            <Link to="/online-ordering" className='w-full px-6 transition-all py-5 border-b border-[#2e2c2c] font-bold border-opacity-20 flex items-center outline-none'>Online Ordering</Link>
          </li>
          <li>
            <Link to="/payments" className='w-full px-6 transition-all py-5 border-b border-[#2e2c2c] font-bold border-opacity-20 flex items-center outline-none'>Payments</Link>
          </li>
          <li className={`${openParentNav === 'Products' ? 'bg-[#f5f5f5] text-black' : ''}`}>
            <button onClick={() => openParentNav === 'Products' ? setOpenParentNav(null) : setOpenParentNav('Products')}
              className={`${openParentNav === 'Products' ? 'mx-6 w-[calc(100%-48px)]' : 'w-full px-6'} transition-all py-5 border-b border-[#2e2c2c] font-bold border-opacity-20 flex justify-between items-center outline-none`}>
              Products <span className={`${openParentNav === 'Products' ? 'rotate-180' : 'rotate-0'} transition-all`}>
                <FaAngleDown /></span>
            </button>

            <ul className={`transition-all duration-200 overflow-hidden ${openParentNav === 'Products' ? 'h-fit py-2.5' : 'h-0'}`}>
              {
                productData.map(item => (
                  <li key={item.title} className="flex items-center text-black px-6">
                    <img className="w-[30px] h-[30px]" src={item.img} alt="" />
                    <Link to={item.link} className="w-full text-sm py-4 px-6 font-semibold">
                      {item.title}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </li>
          <li>
            <Link to='/pricing' className='w-full px-6 transition-all py-5 border-b border-[#2e2c2c] font-bold border-opacity-20 flex justify-between items-center outline-none'>Pricing</Link>
          </li>
          <li>
            <Link to='/contact-us' className='w-full px-6 transition-all py-5 border-b border-[#2e2c2c] font-bold border-opacity-20 flex justify-between items-center outline-none'>Contact Us</Link>
          </li>
          <div className="flex items-center gap-x-6 px-5 mt-10">
            <div className="">
              <img className="w-[30px]" src={shoppingBag} alt="flag" />
            </div>
            <div className="flex items-center gap-x-2 cursor-pointer">
              <img src={flag} alt="flag" /> <FaAngleDown />
            </div>
            <button className="bg-primary w-[140px] h-[40px] rounded-[10px] font-semibold">Get Demo</button>
          </div>
        </ul>

      </nav>
    </div>
  );
};

export default MobileNavbar;