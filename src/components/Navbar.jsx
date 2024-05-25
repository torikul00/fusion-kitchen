import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import flag from "../assets/language-flag.png"
import shoppingBag from "../assets/shopping-bag.svg"
import { FaAngleDown } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import '../styles/Navbar.css'
import HeaderContainer from "./HeaderContainer";
import featureImg1 from "../assets/featured1.png"
import featureImg2 from "../assets/featured2.png"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openParentNav, setOpenParentNav] = useState(null)
  const [openChildNav, setOpenChildNav] = useState(null)

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [openMenu])

  return (
    <nav className={`h-[70px] xl:h-[90px] w-full flex items-center justify-between text-white z-10`}>
      <div className="flex gap-10 2xl:gap-[60px] items-center">
        <button>
          <img src={logo} alt="" className="h-6 sm:h-7 xl:h-9 w-auto" />
        </button>

        <ul className="hidden xl:flex items-center large">
          <li className="hoverable group">
            <Link className="relative py-8 px-4 flex items-center gap-[9px] cursor-pointer">
              <span>Industries</span> <span className="group-hover:rotate-180 transition-all duration-200"><FaAngleDown /></span>
            </Link>

            <div className="mega-menu shadow-xl bg-[#1418174d] h-fit">
              <div className="bg-[#141817] border-y border-gray-700 h-[700px] w-full py-7">
                <HeaderContainer>
                  <div className="grid grid-cols-4">
                    <ul className="nav-list space-y-5">
                      <li className="text-[#b8b8b8ea] font-semibold uppercase text-sm tracking-[3px] mb-8">Types</li>
                      <li><Link>All restaurants solutions</Link></li>
                      <li><Link>Quick service</Link></li>
                      <li><Link>Full service</Link></li>
                      <li><Link>Coffee shoes</Link></li>
                      <li><Link>Fast casual</Link></li>
                      <li><Link>Bars & breweries</Link></li>
                      <li><Link>Ghost kitchens</Link></li>
                      <li><Link>Caterers</Link></li>
                      <li><Link>Large businesses</Link></li>
                      <li><Link>Franchises</Link></li>
                    </ul>
                    <ul className="nav-list space-y-5">
                      <li className="text-[#b8b8b8ea] font-semibold uppercase text-sm tracking-[3px] mb-8">Products</li>
                      <li><Link>Restaurants POS</Link></li>
                      <li><Link>Fusion Point of Sale</Link></li>
                      <li><Link>Hardware</Link></li>
                      <li><Link>KDS</Link></li>
                      <li><Link>Online ordering</Link></li>
                      <li><Link>Marketing</Link></li>
                      <li><Link>Loyality programs</Link></li>
                      <li><Link>Gift cards</Link></li>
                      <li><Link>Staff & payroll</Link></li>
                      <li><Link>Payments</Link></li>
                      <li><Link>Invoices</Link></li>
                      <li><Link>Integrations</Link></li>
                    </ul>
                    <ul className="nav-list space-y-5">
                      <li className="text-[#b8b8b8ea] font-semibold uppercase text-sm tracking-[3px] mb-8">Explore</li>
                      <li><Link>Restaurants pricing</Link></li>
                      <li><Link>Quick service solution demo</Link></li>
                      <li><Link>Full service solution demo</Link></li>
                      <li><Link>Contact sales</Link></li>
                      <li><Link>Switch to Fusion</Link></li>
                      <li><Link>The Bottom Line</Link></li>
                      <li><Link>Why Fusion</Link></li>
                      <li><Link>Referrals</Link></li>
                      <li><Link>Testimonials</Link></li>
                    </ul>
                    <ul className="nav-list space-y-6">
                      <li className="text-[#b8b8b8ea] font-semibold uppercase text-sm tracking-[3px] mb-8">Featured</li>
                      <div className="w-[63%]">
                        <img src={featureImg1} alt="" className="w-full rounded-lg mb-3 border border-[#474747]" />
                        <h4 className="mb-1 text-[15px]">The Future of Restaurants Report: 2024 Edition</h4>
                        <p className="text-[13px]">Uncover the top trends and stategies defining the next era of the restaurant history.</p>
                      </div>

                      <div className="w-[63%]">
                        <img src={featureImg2} alt="" className="w-full rounded-lg mb-3 border border-[#474747]" />
                        <h4 className="mb-1 text-[15px]">Save 20% with Fusion restaurant essensial buldle</h4>
                        <p className="text-[13px]">Lorem ipsum dolor sit amet consect adipisicing elit. Cum, enim.</p>
                      </div>
                    </ul>
                  </div>
                </HeaderContainer>
              </div>
            </div>
          </li>
          <li className="hoverable group">
            <Link className="relative py-8 px-4 flex items-center gap-[9px] cursor-pointer">
              <span>Products</span> <span className="group-hover:rotate-180 transition-all duration-200"><FaAngleDown /></span>
            </Link>

            <div className="mega-menu shadow-xl bg-[#1418174d] h-fit">
              <div className="bg-[#141817] border-y border-gray-700 h-[620px] w-full py-7">
                <HeaderContainer>
                  <div className="grid grid-cols-5">
                    <ul className="nav-list space-y-5">
                      <li className="text-[#b8b8b8ea] font-semibold uppercase text-sm tracking-[3px] mb-8">Commerce</li>
                      <li><Link>All commerce products</Link></li>
                      <li><Link>Hardware</Link></li>
                      <li><Link>Point of sale</Link></li>
                      <li><Link>Restaurants POS</Link></li>
                      <li><Link>Retail POS</Link></li>
                      <li><Link>Appointment POS</Link></li>
                      <li><Link>Invoices</Link></li>
                      <li><Link>Online ordering</Link></li>
                      <li><Link>Online store</Link></li>
                      <li><Link>Payment links</Link></li>
                      <li><Link>Payments</Link></li>
                    </ul>
                    <ul className="nav-list space-y-5">
                      <li className="text-[#b8b8b8ea] font-semibold uppercase text-sm tracking-[3px] mb-8">Customers</li>
                      <li><Link>All customer products</Link></li>
                      <li><Link>Marketing</Link></li>
                      <li><Link>Messages</Link></li>
                      <li><Link>KDS</Link></li>
                      <li><Link>Loyalty programs</Link></li>
                      <li><Link>Customer directory</Link></li>
                      <li><Link>Gift cards</Link></li>
                      <li><Link>Photo Studio</Link></li>
                      <li><Link>Marketplace</Link></li>
                      <li><Link>Contracts</Link></li>
                    </ul>
                    <ul className="nav-list space-y-5">
                      <li className="text-[#b8b8b8ea] font-semibold uppercase text-sm tracking-[3px] mb-8">Staff</li>
                      <li><Link>All staff products</Link></li>
                      <li><Link>Shifts</Link></li>
                      <li><Link>Payroll</Link></li>
                      <li><Link>Advanced Access</Link></li>
                      <li><Link>Team communication</Link></li>
                      <li><Link>HR experts</Link></li>
                    </ul>
                    <ul className="nav-list space-y-5">
                      <li className="text-[#b8b8b8ea] font-semibold uppercase text-sm tracking-[3px] mb-8">Banking</li>
                      <li><Link>All banking products</Link></li>
                      <li><Link>Checking</Link></li>
                      <li><Link>Savings</Link></li>
                      <li><Link>Loans</Link></li>
                      <li><Link>Creadit card</Link></li>
                    </ul>
                    <ul className="nav-list space-y-6">
                      <li className="text-[#b8b8b8ea] font-semibold uppercase text-sm tracking-[3px] mb-8">Featured</li>
                      <div className="w-[78%]">
                        <img src={featureImg1} alt="" className="w-full rounded-lg mb-3 border border-[#474747]" />
                        <h4 className="mb-1 text-[15px]">The Future of Restaurants Report: 2024 Edition</h4>
                        <p className="text-[13px]">Uncover the top trends and stategies defining the next era of the restaurant history.</p>
                      </div>

                      <div className="w-[78%]">
                        <img src={featureImg2} alt="" className="w-full rounded-lg mb-3 border border-[#474747]" />
                        <h4 className="mb-1 text-[15px]">Save 20% with Fusion restaurant essensial buldle</h4>
                        <p className="text-[13px]">Lorem ipsum dolor sit amet consect adipisicing elit. Cum, enim.</p>
                      </div>
                    </ul>
                  </div>
                </HeaderContainer>
              </div>
            </div>
          </li>
          <li>
            <Link className="py-8 px-3 2xl:px-4">Demo</Link>
          </li>
          <li>
            <Link className="py-8 px-3 2xl:px-4">Blog</Link>
          </li>
          <li>
            <Link className="py-8 px-3 2xl:px-4">Pricing</Link>
          </li>
          <li>
            <Link className="py-8 px-3 2xl:px-4">Contact Us</Link>
          </li>
        </ul>
      </div>

      <ul className="hidden xl:flex items-center large">
        <li className="flex items-center gap-[9px] py-8 px-3 cursor-pointer">
          <img src={flag} alt="" /> <FaAngleDown />
        </li>
        <li>
          <Link className="py-8 px-3">Signin</Link>
        </li>
        <li>
          <Link className="py-8 px-3">Support</Link>
        </li>
        <li>
          <Link className="py-8 px-3">Shop</Link>
        </li>
        <li className="py-8 px-3 cursor-pointer">
          <img src={shoppingBag} alt="" />
        </li>
      </ul>

      {/* small devices design */}
      <button onClick={() => { setOpenMenu(!openMenu); setOpenParentNav(null), setOpenChildNav(null) }} className="block xl:hidden cursor-pointer">
        {openMenu ? <IoCloseSharp size={25} /> : <HiOutlineMenuAlt3 size={25} />}
      </button>

      <div className={`${openMenu ? 'opcacity-1 z-[999] visible' : 'opacity-0 -z-[999] invisible'} transition-all duration-300 xl:hidden fixed z-[990] top-[70px] right-0 w-screen h-screen bg-[#000000a8] border-t border-[#d9d9d9] border-opacity-20`}>
      </div>

      <ul className={`${openMenu ? 'right-0' : '-right-[100%]'} h-screen max-h-fit w-full max-w-[420px] xl:hidden transition-all duration-300 fixed z-[999] top-[70px] bg-black text-white pb-[170px] overflow-y-scroll`}>
        <li className={`${openParentNav === 'industries' ? 'bg-[#242424]' : ''}`}>
          <button onClick={() => openParentNav === 'industries' ? setOpenParentNav(null) : setOpenParentNav('industries')}
            className={`${openParentNav === 'industries' ? 'mx-6 w-[calc(100%-48px)]' : 'w-full px-6'} transition-all py-5 border-b border-[#d9d9d9] border-opacity-20 flex justify-between items-center outline-none`}>
            Industries <span className={`${openParentNav === 'industries' ? 'rotate-180' : 'rotate-0'} transition-all`}>
              <FaAngleDown /></span>
          </button>

          <ul className={`transition-all duration-200 overflow-hidden ${openParentNav === 'industries' ? 'h-fit py-2.5' : 'h-0'}`}>
            <li>
              <button onClick={() => (openParentNav === 'industries' && openChildNav === 'types') ? setOpenChildNav(null) : setOpenChildNav('types')} className="w-full py-3 px-6 flex justify-between items-center outline-none">
                Types <span className={`${(openParentNav === 'industries' && openChildNav === 'types') ? 'rotate-180' : 'rotate-0'} transition-all`}>
                  <FaAngleDown /></span>
              </button>

              {(openParentNav === 'industries' && openChildNav === 'types') && <ul className="pb-1.5">
                <li><Link className="py-2.5 px-12 inline-block w-full">All restaurants solutions</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Quick service</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Full service</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Coffee shoes</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Fast casual</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Bars & breweries</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Ghost kitchens</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Caterers</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Large businesses</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Franchises</Link></li>
              </ul>}
            </li>
            <li>
              <button onClick={() => (openParentNav === 'industries' && openChildNav === 'products') ? setOpenChildNav(null) : setOpenChildNav('products')} className="w-full py-3 px-6 flex justify-between items-center outline-none">
                Products <span className={`${(openParentNav === 'industries' && openChildNav === 'products') ? 'rotate-180' : 'rotate-0'} transition-all`}>
                  <FaAngleDown /></span>
              </button>

              {(openParentNav === 'industries' && openChildNav === 'products') && <ul className="pb-1.5">
                <li><Link className="py-2.5 px-12 inline-block w-full">Restaurants POS</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Fusion Point of Sale</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Hardware</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">KDS</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Online ordering</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Marketing</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Loyality programs</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Gift cards</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Staff & payroll</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Payments</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Invoices</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Integrations</Link></li>
              </ul>}
            </li>
            <li>
              <button onClick={() => (openParentNav === 'industries' && openChildNav === 'explore') ? setOpenChildNav(null) : setOpenChildNav('explore')} className="w-full py-3 px-6 flex justify-between items-center outline-none">
                Explore <span className={`${(openParentNav === 'industries' && openChildNav === 'explore') ? 'rotate-180' : 'rotate-0'} transition-all`}>
                  <FaAngleDown /></span>
              </button>

              {(openParentNav === 'industries' && openChildNav === 'explore') && <ul className="pb-1.5">
                <li><Link className="py-2.5 px-12 inline-block w-full">Restaurants pricing</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Quick service solution demo</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Full service solution demo</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Contact sales</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Switch to Fusion</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">The Bottom Line</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Why Fusion</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Referrals</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Testimonials</Link></li>
              </ul>}
            </li>
            <li>
              <button className="w-full py-3 px-6 flex justify-between items-center outline-none">
                Featured
              </button>

              <div className="w-full flex gap-2.5 py-2.5 px-6">
                <div className="w-1/2">
                  <img src={featureImg1} alt="" className="w-full rounded-lg mb-3 border border-[#474747]" />
                  <h4 className="mb-1 text-[15px]">The Future of Restaurants Report: 2024 Edition</h4>
                </div>

                <div className="w-1/2">
                  <img src={featureImg2} alt="" className="w-full rounded-lg mb-3 border border-[#474747]" />
                  <h4 className="mb-1 text-[15px]">Save 20% with Fusion restaurant essensial buldle</h4>
                </div>
              </div>
            </li>
          </ul>
        </li>

        <li className={`${openParentNav === 'products' ? 'bg-[#2E2E2E]' : ''}`}>
          <button onClick={() => openParentNav === 'products' ? setOpenParentNav(null) : setOpenParentNav('products')} className={`${openParentNav === 'products' ? 'mx-6 w-[calc(100%-48px)]' : 'w-full px-6'} py-5 border-b border-[#d9d9d9] border-opacity-20 flex justify-between items-center outline-none`}>
            Products <span className={`${openParentNav === 'products' ? 'rotate-180' : 'rotate-0'} transition-all`}>
              <FaAngleDown /></span>
          </button>

          <ul className={`transition-all duration-200 overflow-hidden ${openParentNav === 'products' ? 'h-fit py-2.5' : 'h-0'}`}>
            <li>
              <button onClick={() => (openParentNav === 'products' && openChildNav === 'commerce') ? setOpenChildNav(null) : setOpenChildNav('commerce')} className="w-full py-3 px-6 flex justify-between items-center outline-none">
                Commerce <span className={`${(openParentNav === 'products' && openChildNav === 'commerce') ? 'rotate-180' : 'rotate-0'} transition-all`}>
                  <FaAngleDown /></span>
              </button>

              {(openParentNav === 'products' && openChildNav === 'commerce') && <ul className="pb-1.5">
                <li><Link className="py-2.5 px-12 inline-block w-full">All commerce products</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Hardware</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Point of sale</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Restaurants POS</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Retail POS</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Appointment POS</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Invoices</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Online ordering</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Online store</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Payment links</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Payments</Link></li>
              </ul>}
            </li>
            <li>
              <button onClick={() => (openParentNav === 'products' && openChildNav === 'customers') ? setOpenChildNav(null) : setOpenChildNav('customers')} className="w-full py-3 px-6 flex justify-between items-center outline-none">
                Customers <span className={`${(openParentNav === 'products' && openChildNav === 'customers') ? 'rotate-180' : 'rotate-0'} transition-all`}>
                  <FaAngleDown /></span>
              </button>

              {(openParentNav === 'products' && openChildNav === 'customers') && <ul className="pb-1.5">
                <li><Link className="py-2.5 px-12 inline-block w-full">All customer products</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Marketing</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Messages</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">KDS</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Loyalty programs</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Customer directory</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Gift cards</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Photo Studio</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Marketplace</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Contracts</Link></li>
              </ul>}
            </li>
            <li>
              <button onClick={() => (openParentNav === 'products' && openChildNav === 'staff') ? setOpenChildNav(null) : setOpenChildNav('staff')} className="w-full py-3 px-6 flex justify-between items-center outline-none">
                Staff <span className={`${(openParentNav === 'products' && openChildNav === 'staff') ? 'rotate-180' : 'rotate-0'} transition-all`}>
                  <FaAngleDown /></span>
              </button>

              {(openParentNav === 'products' && openChildNav === 'staff') && <ul className="pb-1.5">
                <li><Link className="py-2.5 px-12 inline-block w-full">All staff products</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Shifts</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Payroll</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Advanced Access</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Team communication</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">HR experts</Link></li>
              </ul>}
            </li>
            <li>
              <button onClick={() => (openParentNav === 'products' && openChildNav === 'banking') ? setOpenChildNav(null) : setOpenChildNav('banking')} className="w-full py-3 px-6 flex justify-between items-center outline-none">
                Banking <span className={`${(openParentNav === 'products' && openChildNav === 'banking') ? 'rotate-180' : 'rotate-0'} transition-all`}>
                  <FaAngleDown /></span>
              </button>

              {(openParentNav === 'products' && openChildNav === 'banking') && <ul className="pb-1.5">
                <li><Link className="py-2.5 px-12 inline-block w-full">All banking products</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Checking</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Savings</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Loans</Link></li>
                <li><Link className="py-2.5 px-12 inline-block w-full">Creadit card</Link></li>
              </ul>}
            </li>
            <li>
              <button className="w-full py-3 px-6 flex justify-between items-center outline-none">
                Featured
              </button>

              <div className="w-full flex gap-2.5 py-2.5 px-6">
                <div className="w-1/2">
                  <img src={featureImg1} alt="" className="w-full rounded-lg mb-3 border border-[#474747]" />
                  <h4 className="mb-1 text-[15px]">The Future of Restaurants Report: 2024 Edition</h4>
                </div>

                <div className="w-1/2">
                  <img src={featureImg2} alt="" className="w-full rounded-lg mb-3 border border-[#474747]" />
                  <h4 className="mb-1 text-[15px]">Save 20% with Fusion restaurant essensial buldle</h4>
                </div>
              </div>
            </li>
          </ul>
        </li>

        <li className="py-5 px-6 border-b border-[#d9d9d9] border-opacity-20">Demo</li>
        <li className="py-5 px-6 border-b border-[#d9d9d9] border-opacity-20">Blog</li>
        <li className="py-5 px-6 border-b border-[#d9d9d9] border-opacity-20">Pricing</li>
        <li className="py-5 px-6 border-b border-[#d9d9d9] border-opacity-20">Contact Us</li>
        <li className="py-5 px-6 border-b border-[#d9d9d9] border-opacity-20">Signin</li>
        <li className="py-5 px-6 border-b border-[#d9d9d9] border-opacity-20">Support</li>
        <li className="py-5 px-6 border-b border-[#d9d9d9] border-opacity-20">Shop</li>
      </ul>
    </nav>
  );
};

export default Navbar;