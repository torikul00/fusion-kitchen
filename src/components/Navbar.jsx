import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import flag from "../assets/language-flag.png"
import shoppingBag from "../assets/shopping-bag.svg"
import { FaAngleDown } from "react-icons/fa6";
import '../styles/Navbar.css'
import HeaderContainer from "./HeaderContainer";
import featureImg1 from "../assets/featured1.png"
import featureImg2 from "../assets/featured2.png"

const Navbar = () => {

  return (
    <nav className="h-[90px] w-full flex items-center justify-between text-white z-10">
      <div className="flex gap-[60px] items-center">
        <Link to="/">
          <img src={logo} alt="" className="h-9 w-auto" />
        </Link>

        <ul className="flex items-center">
          <li className="hoverable group">
            <Link className="relative py-8 px-4 flex items-center gap-[9px] cursor-pointer">
              <span>Industries</span> <span className="group-hover:rotate-180 transition-all duration-200"><FaAngleDown /></span>
            </Link>

            <div className="mega-menu shadow-xl bg-[#1a1a1a4d] h-fit">
              <div className="bg-[#1A1A1A] border-y border-gray-700 h-[700px] w-full py-7">
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
                      <li className="text-[#b8b8b8ea] font-semibold uppercase text-sm tracking-[3px] mb-8">Features</li>
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

            <div className="mega-menu shadow-xl bg-[#1a1a1a4d] h-fit">
              <div className="bg-[#1A1A1A] border-y border-gray-700 h-[620px] w-full py-7">
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
                      <li className="text-[#b8b8b8ea] font-semibold uppercase text-sm tracking-[3px] mb-8">Features</li>
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
          <li>
            <Link className="py-8 px-4">Shop</Link>
          </li>
          <li>
            <Link className="py-8 px-4">Demo</Link>
          </li>
          <li>
            <Link className="py-8 px-4">Blog</Link>
          </li>
          <li>
            <Link className="py-8 px-4">Pricing</Link>
          </li>
          <li>
            <Link className="py-8 px-4">Contact Us</Link>
          </li>
        </ul>
      </div>

      <ul className="flex items-center">
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
    </nav>
  );
};

export default Navbar;