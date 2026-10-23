import { Icon } from "@iconify/react";

const Addservices = () => {
  return (
    <div className="flex justify-center p-3 sm:p-6">
      <div className="w-full max-w-2xl rounded-2xl border border-amber-400 bg-white p-4 sm:p-6 lg:p-8">
        <div className="flex items-center">
          <div className="bg-amber-400 text-black font-bold w-10 h-10 flex items-center justify-center text-2xl rounded-full">
            1
          </div>

          <div className="h-px w-4 bg-amber-400 sm:w-10"></div>
          <div className="h-px flex-1 bg-gray-400"></div>

          <div className="bg-amber-400 text-black font-bold w-10 h-10 flex items-center justify-center text- rounded-full">
            2
          </div>

          <div className="h-px flex-1 bg-gray-400"></div>

          <div className="bg-amber-400 text-black font-bold w-10 h-10 flex items-center justify-center  rounded-full">
            3
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 sm:gap-5 sm:p-5">
          <Icon
            className="h-12 w-12 shrink-0 rounded-full bg-amber-100 py-2 sm:h-15 sm:w-15"
            icon="emojione:hammer-and-wrench"
          />
          <div>
            <h1 className="text-xl font-bold sm:text-2xl">Add your Services</h1>
            <p className="text-gray-500 text-sm font-semibold font-serif">
              Provide details about service your offer
            </p>
          </div>
        </div>
        <form action="">
          <div className="flex flex-col">
            <label className="py-2" htmlFor="">
              Service Name <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              className="w-full rounded-md border border-gray-400 px-3 py-2 text-sm"
              type="text"
              placeholder=" e.g. Home Cleaning, AC Repair, etc."
            />

            <label className="py-2" htmlFor="">
              Price <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              className="w-full rounded-md border border-gray-400 px-3 py-2 text-sm"
              type="text"
              placeholder=" ₹ 0"
            />

            <label className="py-2" htmlFor="">
              Duration <span className="text-red-500 font-bold">*</span>
            </label>
            <div className="relative">
              <span className="icon-[mdi--clock-outline] absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400"></span>

              <select
                className="w-full appearance-none rounded-md border border-gray-200 bg-white py-2 pl-9 pr-8 text-xs text-gray-500 outline-none focus:border-amber-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Select duration
                </option>
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
                <option value="120">2 hours</option>
                <option value="180">3 hours</option>
              </select>

              <span className="icon-[mdi--chevron-down] pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400"></span>
            </div>

            <div className="w-full">
              <label className="mb-2 py-2 block font-semibold text-gray-800">
                Service Mode <span className="text-red-500">*</span>
              </label>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {/* At Your Location */}
                <label className="flex cursor-pointer items-start gap-2 rounded-md border border-amber-400 bg-amber-50 px-2 py-3">
                  <Icon
                    icon="mdi:home"
                    className="mt-0.5 text-2xl text-amber-600"
                  />

                  <div>
                    <p className="text-xs font-medium text-gray-800">
                      At Your Location
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      I will come to your place
                    </p>
                  </div>
                </label>

                {/* At My Shop */}
                <label className="flex cursor-pointer items-start gap-2 rounded-md border border-gray-200 bg-white px-2 py-3">
                  <Icon
                    icon="mdi:store-outline"
                    className="mt-0.5 text-sm text-gray-400"
                  />

                  <div>
                    <p className="text-xs font-medium text-gray-800">
                      At My Shop
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Customer will come to my shop
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-md border border-amber-100 bg-amber-50 px-2 py-3">
            <Icon icon="mdi:information" className="text-2xl text-amber-500" />

            <p className="text-xs text-gray-500">
              You can add multiple services later from your profile.
            </p>
          </div>
          <button
            type="button"
            className="mt-4 flex w-full items-center active:scale-95 cursor-pointer justify-center gap-2 rounded-md bg-amber-400 px-4 py-2.5 text-xs font-semibold text-black transition-colors hover:bg-amber-500"
          >
            Save &amp; Continue
            <span className="icon-[mdi--arrow-right] text-sm"></span>
          </button>
          <div className="mt-5 flex items-center gap-2">
            <div className="h-px flex-1 bg-gray-100"></div>

            <p className="text-center text-xs text-gray-500">
              Need Help?
              <a href="#" className="ml-1 font-medium text-amber-600">
                Contact Support
              </a>
            </p>

            <div className="h-px flex-1 bg-gray-100"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addservices;
