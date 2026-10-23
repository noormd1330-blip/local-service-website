import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#161616] p-2 sm:p-3">
      <nav className="mx-auto flex w-full max-w-screen-2xl flex-wrap items-center justify-between gap-x-5 gap-y-3 rounded-2xl border border-[#D4A52C] bg-transparent px-4 py-3 text-[#D4A52C] sm:px-6 lg:flex-nowrap lg:rounded-full">
        <div className="flex w-full items-center justify-between gap-3 lg:w-auto">
          <Link to="/home" className="shrink-0">
            <h1 className="flex items-center gap-2 text-2xl font-bold italic text-[#F5C95D] active:scale-110 sm:text-3xl">
              <Icon icon="bi:shop" />
              Sonext
            </h1>
          </Link>
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <Link to="/login" className="rounded-full border border-gray-200 px-3 py-1.5 text-sm italic text-white">Login</Link>
            <Link to="/register" className="rounded-full bg-amber-400 px-3 py-1.5 text-sm italic text-black">Register</Link>
          </div>
        </div>

        <ul className="order-3 flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[#F5C95D] sm:gap-x-6 lg:order-none lg:w-auto lg:flex-1 lg:gap-6">
          <li className="flex items-center gap-1.5"><Icon icon="bi:house-door" width="20" height="20" /><Link to="/home">Home</Link></li>
          <li className="flex items-center gap-1.5"><Icon icon="bi:gear" width="20" height="20" /><Link to="/service">Service</Link></li>
          <li className="flex items-center gap-1.5"><Icon icon="bi:briefcase" width="20" height="20" /><Link to="/ForBusiness">For Business</Link></li>
          <li className="flex items-center gap-1.5"><Icon icon="bi:person" width="20" height="20" /><Link to="/about">About</Link></li>
          <li className="flex items-center gap-1.5"><Icon icon="mdi:contact-mail" width="20" height="20" /><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-neutral-700 bg-[#1a1a1a] px-3 py-2 sm:flex-none lg:w-44">
          <Icon icon="bi:geo-alt-fill" width="18" className="text-amber-400 " />
          <input
            type="text"
            defaultValue="Kolkata"
            placeholder="Enter location"
            aria-label="Location"
            className="min-w-0 w-full bg-transparent text-sm text-white outline-none"
          />
        </div>
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Link to="/login">
            <span className="cursor-pointer rounded-2xl border border-gray-200 bg-black px-3 py-1 italic text-white shadow-lg">Login</span>
          </Link>
          <Link to="/register">
            <span className="cursor-pointer rounded-2xl border border-gray-900 bg-amber-400 px-3 py-1 italic text-black shadow-lg">Register</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
