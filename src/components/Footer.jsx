import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="h-auto w-full bg-black p-4 sm:p-6">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 p-2 sm:grid-cols-2 sm:p-4 lg:grid-cols-4 lg:gap-8">
        <div>

          <h1 className="text-3xl text-amber-400  flex  gap-2 font-bold font-serif">
            <Icon icon="bi:shop" />
            Sonext
          </h1>
          <p className="py-2 text-sm font-semibold text-gray-500">Your trusted platform for local services. Get professional help for your home, work and personal needs.</p>

          <div className="flex gap-5 py-3">

            <Icon  icon="ic:baseline-facebook" className="text-gray-400 text-2xl" />
            <Icon icon="mdi:twitter" className="text-gray-400 text-2xl" />
            <Icon icon="mdi:instagram" className="text-gray-400 text-2xl" />
            <Icon icon="mdi:youtube" className="text-gray-400 text-2xl" />
          </div>

        </div>

          <div>
          <h3 className="text-2xl font-bold text-amber-400">Quick Links</h3>
          <ul className="p-2 text-gray-400 font-semibold">
            <li><a href="#">Home</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#business">For Business</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-amber-400 text-2xl font-bold">Popular Services</h4>
          <ul className="text-gray-400 font-semibold p-2">
            <li>Home Cleaning</li>
            <li>Plumbing</li>
            <li>Electrician</li>
            <li>Electrician</li>
            <li>Home Tutor</li>
          </ul>
        </div>


        <div>
          <h5 className="text-amber-400 font-bold text-2xl">Contact Us</h5>
          <span className="text-gray-500 p-2 flex gap-2 font-semibold">
            <Icon icon="fluent:call-24-filled" className="text-amber-400 text-2xl" />
            +91 6290 703 640
          </span>

          <span className="text-gray-500 p-2 flex gap-2 font-semibold">
            <Icon icon="andrsrxn:mail" className="text-amber-400 text-2xl" />
            sonexitel@gmail.com
          </span>

            <span className="flex items-center gap-2 p-2 font-semibold text-gray-500">
        <Icon icon="mdi:map-marker" className="h-7 w-7 shrink-0 text-amber-400" />
  10 G. J Khan Road, Kolkata, West Bengal- 700039
</span>
        </div>
      </div>
        <div className="text-amber-400 text-center  ">
          © 2026 Sonext. All rights reserved.
        </div>
     
    </div>
  )
}

export default Footer
