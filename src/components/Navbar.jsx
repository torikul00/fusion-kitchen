import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import flag from "../assets/language-flag.png"
import shoppingBag from "../assets/shopping-bag.svg"
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="h-[100px] w-full flex items-center justify-between text-white">
      <div className="flex gap-[60px] items-center">
        <Link to="/">
          <img src={logo} alt="" className="h-9 w-auto" />
        </Link>

        <ul className="flex items-center gap-8">
          <li className="flex items-center gap-[9px]">
            <span>Industries</span> <FaAngleDown />
          </li>
          <li className="flex items-center gap-[9px]">
            <span>Products</span> <FaAngleDown />
          </li>
          <li>
            <Link>Shop</Link>
          </li>
          <li>
            <Link>Demo</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>Pricing</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
        </ul>
      </div>

      <ul className="flex items-center gap-6">
        <li className="flex items-center gap-[9px]">
          <img src={flag} alt="" /> <FaAngleDown />
        </li>
        <li>
          <Link>Signin</Link>
        </li>
        <li>
          <Link>Support</Link>
        </li>
        <li>
          <Link>Shop</Link>
        </li>
        <li>
          <img src={shoppingBag} alt="" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;