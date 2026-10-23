import { Icon } from '@iconify/react';

const BookingConfirmation = () => {
  return (
    <div>
    <div className='flex w-full items-center justify-center p-3 sm:p-5'>
   <div className="relative inline-flex p-6">
      {/* Left Side Yellow Rays / Sparkles */}
      <span className="absolute left-1 top-2 w-2 h-0.5 bg-amber-400 rotate-45 rounded-full"></span>
      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-0.5 bg-amber-400 rounded-full"></span>
      <span className="absolute left-1 bottom-2 w-2.5 h-0.5 bg-amber-400 -rotate-45 rounded-full"></span>

      {/* Right Side Yellow Rays / Sparkles */}
      <span className="absolute right-1 top-2 w-2 h-0.5 bg-amber-400 -rotate-45 rounded-full"></span>
      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-0.5 bg-amber-400 rounded-full"></span>
      <span className="absolute right-1 bottom-2 w-2.5 h-0.5 bg-amber-400 rotate-45 rounded-full"></span>

      {/* Center Iconify Green Check Icon */}
      <div className="relative z-10 text-emerald-700 text-5xl">
        <Icon icon="heroicons:check-circle-20-solid" />
        </div>
        </div>
      </div>
      
      <div className='flex flex-col text-center items-center'>
        <div >
        <h1 className='text-2xl font-bold font-serif sm:text-3xl'>Bookings <span className='text-amber-400'>Successful!</span></h1>
          <p className='px-4 font-semibold text-gray-600'>Your service has been booked successfully. You will receive a confirmation message shortly.</p>
          <div className='p-6 '>
            <button className='relative  cursor-pointer active:scale-90  bg-amber-500  font-bold  rounded-2xl px-6 py-1'>
              <span className='ml-4'> View My Bookings</span>
            <Icon 
             icon="fa6-solid:calendar-days" 
            className="absolute  left-4 top-1/2 -translate-y-1/2 text-xl" 
              />
              </button>
          </div>
        </div>
        <div className='h-auto w-full max-w-3xl rounded-2xl border border-gray-200 p-4 sm:p-6 lg:p-8'>
          <div className='mb-1 flex flex-wrap items-center justify-between gap-2'>
              <span className='font-serif text-xl font-semibold text-gray-500 sm:text-2xl'>Booking Id</span>
            <span className='flex items-center gap-2 rounded-full bg-green-300 px-4'>
              <Icon icon="heroicons:check" className="text-sm font-bold" />
              Confirmed
            </span>
          </div>
          <div className='flex flex-wrap items-center justify-between gap-2'>
            <h3 className='font-bold '>#SNX123456</h3>
            <div className='flex items-center gap-2 text-sm sm:text-base'>
              <Icon icon="lucide:calendar" className="text-gray-400 text-base" />
              <span className='p-1 text-gray-500 sm:p-2'>Apr 28, 2025 • 10:30 AM</span>
            </div>
        </div>
          <div className='bg-gray-500 h-px w-full '></div>
          
          <div className='flex flex-col gap-4 p-3 sm:flex-row sm:items-center sm:p-6'>
            <div className="w-full sm:w-1/2">
            <h2 className='p-2 font-semibold font-serif'>Service Details</h2>
              <img className='h-40 w-full rounded-2xl border border-gray-200 object-contain' src="https://i.pinimg.com/736x/25/b2/d6/25b2d6de50fdc7bf55ff0ef0bccab484.jpg" alt="Maid" />
            </div>
            <div className='m-auto flex min-w-0 flex-col gap-2 wrap-break-word sm:pr-2'>
              <span className='font-bold'>Home Cleaning</span>
              <p className='text-gray-500  text-sm font-semibold'>Deep Cleaning • 2 Hours</p>
              <span className='font-bold'>₹ 1,000</span>

            </div>
            
        </div>
          <div className='bg-gray-500 h-px w-full '></div>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
            <div className='w-full p-3 sm:w-1/2 sm:p-4'>
              <h1 className='p-3 font-bold font-serif'>Professional Details</h1>
              <img className='h-48 w-full rounded-2xl border border-gray-200 object-contain p-2' src="https://i.pinimg.com/736x/0c/63/6a/0c636a8c4ba387311927c902e9a170aa.jpg" alt="professional" />
          </div>
            <div className='px-4 pb-4 sm:mr-4 sm:pt-4'>
              <h2 className='font-bold font-serif'>Priya sharma</h2>
                <p className='text-gray-500  text-sm font-semibold py-2'>4.8 (124 reviews)</p>
              <span className='flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-black'> <Icon icon="heroicons:check" className="rounded-full bg-green-400 text-sm font-bold text-black" />Verified Professional</span>
            </div>
          </div>
        
         <div className='bg-gray-500 h-px w-full '></div>
          <div className='p-4 sm:p-5'>
            <div className='flex items-center gap-2'>
            <Icon icon="bi:geo-alt-fill" width="18" className="text-black " />
            <h1 className='font-serif text-xl font-bold sm:text-2xl'>Booking Address</h1>
            </div>
            <div className='flex flex-wrap p-1'>
              <span className='text-gray-500 font-semibold'>123 Green Park, Koramangala <br /> Bangalore, Karnataka 560034</span> 
            </div>
          </div>
          {/* Payment Details */}
<div className="border-t border-gray-200 w-full p-4">
  <div className="flex items-center gap-2 mb-3">
    <Icon
      icon="fa6-solid:credit-card"
      className="text-gray-800 text-sm"
    />
    <h2 className="font-bold text-sm">
      Payment Details
    </h2>
  </div>

  <div className="w-full rounded-lg bg-gray-50 p-3">
    <div className="flex justify-between items-center mb-2">
      <span className="text-xs text-gray-500">
        Service Amount
      </span>
      <span className="text-xs text-gray-800">
        ₹ 1,000
      </span>
    </div>

    <div className="flex justify-between items-center border-b border-gray-200 pb-3">
      <span className="text-xs text-gray-500">
        Platform Fee
      </span>
      <span className="text-xs text-gray-800">
        ₹ 50
      </span>
    </div>

    <div className="flex justify-between items-center mt-3 mb-3">
      <span className="text-xs font-semibold text-gray-900">
        Total Paid
      </span>
      <span className="text-sm font-bold text-gray-900">
        ₹ 1,050
      </span>
    </div>

    <span className="inline-flex items-center gap-1 rounded-full border border-green-300 bg-green-100 px-2 py-1 text-[10px] font-medium text-green-800">
      <Icon
        icon="heroicons:check-circle-20-solid"
        className="text-xs"
      />
      Payment Successful
    </span>
  </div>
</div>

        </div>
        {/* Need Help Section */}
<div className="m-3 flex w-[calc(100%-1.5rem)] max-w-3xl flex-col items-start justify-between gap-3 rounded-xl border border-amber-100 bg-amber-50/70 p-3 sm:m-5 sm:w-[calc(100%-2.5rem)] sm:flex-row sm:items-center">

  <div className="flex items-center gap-3">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-300">
      <Icon
        icon="fa-solid:headset"
        className="text-xl text-amber-900"
      />
    </div>

    <div>
      <h3 className="text-xs font-bold text-gray-900">
        Need Help?
      </h3>

      <p className="text-xs text-gray-500">
        Our support team is available 24/7 to help you.
      </p>
    </div>
  </div>

  <button className="flex shrink-0 items-center gap-1 rounded-lg border border-amber-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-800">
    <Icon
      icon="fa-solid:headset"
      className="text-xs"
    />
    Contact Support
  </button>

</div>
        
        
        </div>
    </div>
       
 
    
  )
}

export default BookingConfirmation
