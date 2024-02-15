import { Link } from "react-router-dom";
import { Search, User } from "../assets/svg/common";
import CompanyLogo from '../assets/image/Logo.png';

export default function Header() {
  return (
    <header>
      <div className="h-32 flex items-center justify-between font-semibold text-sm px-4 lg:px-24">
        <div className="flex items-center gap-12">
          <div className="
            w-8 h-2 cursor-pointer
            after:content-[''] after:block after:absolute after:left-0 after:top-0 after:h-0.5 after:w-full after:bg-black
            before:content-[''] before:block before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-full before:bg-black
            "
          ></div>
          <Link to="" className=" hidden lg:block hover:opacity-75">Watch</Link>
          <Link to="" className=" hidden lg:block hover:opacity-75">Our world</Link>
          <Link to="" className=" hidden lg:block hover:opacity-75">Stories</Link>
        </div>
        <div>
          <img src={CompanyLogo} alt="Logo"/>
        </div>
        <div className="flex items-center gap-4 lg:gap-12">
          <Link to="" className=" hidden lg:block hover:opacity-75">Service</Link>
          <Link to="" className=" hidden lg:block hover:opacity-75">Boutiques</Link>
          <Link to="" className=" hover:opacity-75">
            <img src={User} alt="nav-item" className=" scale-125"/>
          </Link>
          <Link to="" className=" hover:opacity-75">
          <img src={Search} alt="nav-item" className=" scale-125"/>
          </Link>
        </div>
      </div>
      <div className=""></div>
    </header>
  )
}
