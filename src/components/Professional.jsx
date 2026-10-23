import { Icon } from "@iconify/react";


const Professional = () => {

  
  const Cards = [
    {images:"https://i.pinimg.com/1200x/db/84/59/db8459bcf799fcf16ef78af82b96b42f.jpg", Headings:"Taj Salon", Ratings:"6.5", Span:"₹ 150  onwards",  services: "Hair Cut · Beard · Facial", centers:"At Shop At Home"},
    {images:"https://i.pinimg.com/736x/57/6e/d7/576ed778f9a4cd19ccc99ea7b929b5eb.jpg", Headings:"Zoya Beauty parlour", Ratings:"7.5", Span:"₹ 500  onwards",  services: "Makeup · Facial · Hair Spa",centers:"At Shop At Home"},
    {images:"https://i.pinimg.com/1200x/69/26/37/6926376dc2a91c84b3afb90de432ea0b.jpg", Headings:"Amit Tutor", Ratings:"8.5", Span:"₹ 800  onwards",  services: "Maths · Science · English",center:"Home Service"},
    {images:"https://i.pinimg.com/736x/c2/16/c9/c216c9ef43c741d050cb91ff0d9052e3.jpg", Headings:"John Chef", Ratings:"9.5", Span:"₹ 3000  onwards",  services: "Tiffin · Home Food", center:"Home Service"},
  ]
  return (
    <div className="mx-auto my-8 h-auto w-full max-w-screen-2xl border border-amber-400 p-4 sm:my-10 sm:p-6 lg:p-10">
        
      <div className="m-4 sm:m-6 lg:m-10">
        <h1 className="text-3xl font-bold italic text-amber-400 sm:text-4xl">Top Rated Professionals</h1>
        <p className="text-lg font-semibold italic text-gray-400 sm:text-xl lg:text-2xl">Local Experts, Trusted by Thousands</p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {Cards.map((items, i) => {
          return <div key={i} className="flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-amber-400 p-4 sm:p-5 lg:gap-4 lg:p-6">
              <img src={items.images} alt="Professional Experts" className="h-48 w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-105 sm:h-56" />
            <h1 className="text-center text-xl font-bold sm:text-2xl">{items.Headings}</h1>
            <span className="flex items-center gap-2 text-xl sm:text-2xl"> <Icon className="text-amber-400" icon="at-icons:star" />{items.Ratings}</span>
            <p className="text-center text-base font-semibold text-gray-500 sm:text-lg">{items.services}</p>
            <span className="text-center text-xl font-semibold italic sm:text-2xl">{items.Span}</span>
            <span className="flex items-center gap-2 text-center text-base sm:text-lg"><Icon className="shrink-0 text-amber-400" icon="material-symbols:home-work-rounded" />{items.centers} {items.center}</span>
             <div>
              <button className="px-9 py-2 active:scale-95 cursor-pointer bg-amber-400 text-black rounded-full font-bold">Book Now</button>
            </div>

          </div>
        })}

      </div>
    </div>
  )
}

export default Professional
