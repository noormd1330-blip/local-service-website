import { Icon } from "@iconify/react";

const Whysonext = () => {
  const Cards = [
    {Icon:"andrsrxn:shield-check", Heading:"Verified Experts",  para:" Background checked & trusted professionals."},
    {Icon:"ph:calendar-dots", Heading:"Quick Booking",  para:" Book in minutes, get work done."},
    {Icon:"ph:currency-inr", Heading:"Transparent Pricings",  para:"No hidden charges, only fair prices."},
    {Icon:"ph:headset", Heading:"24/7 Support",  para:" We're here whenever you need us."}

  ]
  return (
    <div className="mx-auto my-8 h-auto w-full max-w-screen-2xl border border-amber-400 p-4 sm:p-6">
      <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {Cards.map((items, i) => {
          return <div key={i} className="flex flex-col items-center gap-4 rounded-2xl border border-amber-400 p-5 sm:p-6">
            <Icon className="bg-amber-400 p-3 italic rounded-2xl " icon={items.Icon} style={{ color: '#ffff', fontSize: '60px' }}></Icon>
            <h3 className="text-gray-700 font-bold font-serif">{items.Heading}</h3>
            <p className="text-sm text-center text-gray-400 font-semibold">{items.para}</p>
            </div>
          })}
      </div>
    </div>
  )
}

export default Whysonext
