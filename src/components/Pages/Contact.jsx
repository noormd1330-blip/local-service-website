import { Icon } from "@iconify/react";

const Contact = () => {
  return (
     <section className="w-full bg-amber-950 px-4 py-10 sm:px-8 sm:py-16">
          <h1 className="text-center text-4xl font-bold text-white sm:text-5xl">Contact Us</h1>
    
          <div className="mx-auto mt-6 grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(16rem,1fr)] lg:gap-12">
            <div className="min-w-0">
              <h3 className="mb-4 text-2xl font-bold text-white">Get In Touch</h3>
              <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="w-full min-w-0 rounded-2xl border border-white bg-transparent px-5 py-3 text-white placeholder:text-white"
                type="text"
                placeholder="Your Name"
              />{" "}
              <input
                className="w-full min-w-0 rounded-2xl border border-white bg-transparent px-5 py-3 text-white placeholder:text-white"
                type="email"
                placeholder="Your email"
              />
              <input
                className="w-full min-w-0 rounded-2xl border border-white bg-transparent px-5 py-3 text-white placeholder:text-white sm:col-span-2"
                type="text"
                placeholder="Subject..."
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full min-w-0 resize-y rounded-lg border border-white bg-transparent px-5 py-3 text-white placeholder:text-white outline-none sm:col-span-2"
              ></textarea>
              </div>
              <button className="mt-4 cursor-pointer rounded-2xl bg-white px-5 py-3 font-bold text-black active:scale-105">
                Send Message
              </button>
            </div>
    
            <div className="rounded-xl p-2 text-white sm:p-4">
              <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>
    
              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-3 text-sm">
                  <Icon
                    className="text-xl "
                    icon="mdi:map-marker-outline"
                  />
                  10, G.J Khan Road Kolkata-700039
                </span>
                <span className="flex items-center gap-3 text-sm">
                  <Icon className="text-xl " icon="mdi:phone" />
                  +91 6290703640
                </span>
                <span className="flex items-center gap-3 text-sm">
                  <Icon className="text-xl " icon="mdi:email" />
                  noormd@gmail.com | sonexitel@gmail.com
                </span>
              </div>
    
              <h2 className="text-xl font-bold mt-6 mb-3">Follow Us</h2>
    
              <div className="flex gap-4 text-white text-xl cursor-pointer">
                <Icon icon="mdi:instagram" className="hover:text-pink-400" />
                <Icon icon="mdi:twitter" className="hover:text-blue-400" />
                <Icon icon="mdi:facebook" className="hover:text-blue-600" />
              </div>
            </div>
          </div>
        </section>
  )
}

export default Contact
