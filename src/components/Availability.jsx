import { Icon } from "@iconify/react";

const Availability = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const slots = [
    { time: "09:00 AM - 11:00 AM" },
    { time: "11:00 AM - 01:00 PM" },
    { time: "02:00 PM - 04:00 PM" },
    { time: "04:00 PM - 06:00 PM" },
    { time: "06:00 PM - 08:00 PM" },
  ];

  return (
    <div className="flex justify-center  p-3 sm:p-4">
      <div className="w-full max-w-4xl rounded-2xl border border-amber-400 p-4 sm:p-6 lg:p-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400">
            <Icon icon="mdi:check" className="text-xl text-black" />
          </div>

          <div className="h-px w-10 bg-amber-400 sm:w-20" />

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400 font-bold">
            2
          </div>

          <div className="h-px w-10 bg-amber-400 sm:w-20" />

          <div className="h-px w-10 bg-gray-400 sm:w-20" />

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400 font-bold">
            3
          </div>
        </div>

        {/* Heading */}
        <div className="flex items-center justify-center gap-3 p-3 sm:gap-4 sm:p-6">
          <Icon
            icon="mdi:calendar-month"
            className="h-10 w-10 shrink-0 rounded-full bg-amber-200 p-2 text-black"
          />

          <div>
            <h2 className="font-serif text-xl font-bold sm:text-2xl">Working Hours</h2>

            <p className="font-semibold text-gray-400">
              Set your weekly working hours
            </p>
          </div>
        </div>

        {/* Weekly Availability */}
        <div className="flex flex-col items-center gap-4">
          {days.map((day) => (
            <div
              key={day}
              className="grid grid-cols-[5.5rem_auto] items-center gap-2 sm:flex sm:flex-nowrap sm:gap-4"
            >
              {/* Day Name */}
              <div className="w-22 shrink-0 font-serif text-sm font-semibold sm:w-24 sm:text-base">
                {day}
              </div>

              {/* Toggle Switch */}
              <label className="relative inline-block h-6 w-10 shrink-0 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="peer sr-only"
                  aria-label={`${day} availability`}
                />

                <span className="absolute inset-0 rounded-full bg-gray-300 transition-colors peer-checked:bg-amber-500 peer-focus-visible:ring-2 peer-focus-visible:ring-amber-500 peer-focus-visible:ring-offset-2" />

                <span className="absolute left-0.75 top-0.75 h-4.5 w-4.5 rounded-full bg-white transition-transform peer-checked:translate-x-5" />
              </label>

              {/* Start Time */}
              <div className="relative col-span-2 w-full sm:w-32 md:w-36">
                <input
                  type="text"
                  placeholder="09:00 A.M"
                  aria-label={`${day} start time`}
                  className="w-full rounded-xl border border-gray-400 px-3 py-2 pr-8 text-sm outline-none focus:border-amber-500"
                />

                <Icon
                  icon="lucide:clock"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  width="15"
                  height="15"
                />
              </div>

              {/* Time Separator */}
              <span className="hidden h-px w-3 shrink-0 bg-black sm:block" />

              {/* End Time */}
              <div className="relative col-span-2 w-full sm:w-32 md:w-36">
                <input
                  type="text"
                  placeholder="06:00 P.M"
                  aria-label={`${day} end time`}
                  className="w-full rounded-xl border border-gray-400 px-3 py-2 pr-8 text-sm outline-none focus:border-amber-500"
                />

                <Icon
                  icon="lucide:clock"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  width="15"
                  height="15"
                />
              </div>
            </div>
          ))}

          <div className="flex flex-row items-center gap-3 sm:gap-5">
            <Icon
              icon="noto:waning-crescent-moon"
              className="h-10 w-10 bg-amber-200 p-2 rounded-full"
            />
            <div>
              <h3 className="text-xl font-bold font-serif sm:text-2xl">Available Slots</h3>
              <p className="text-gray-500 font-semibold">
                Add specific time slots for quick booking.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 py-2">
            {slots.map((date) => {
              return (
                <div key={date.time}>
                  <div
                    className="flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-2.5 py-2"
                  >
                    <input
                      type="checkbox"
                      className="h-3.5 w-3.5 shrink-0 cursor-pointer accent-amber-500"
                    />

                    <span className="text-xs font-medium text-gray-700">
                      {date.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button
          type="button"
          className="mt-4 flex w-full items-center active:scale-95 cursor-pointer justify-center gap-2 rounded-md bg-amber-400 px-4 py-2.5 text-xs font-semibold text-black transition-colors hover:bg-amber-500"
        >
          Save &amp; Continue{" "}
        </button>

        <div className="px-5 pt-5">
          <p className="text-center text-xs text-gray-500">
            Need Help?
            <a
              href="#"
              className="ml-1 font-medium text-amber-600 hover:text-amber-700"
            >
              Contact Support
            </a>
          </p>

          <div className="mt-3 h-px w-full bg-gray-100" />
        </div>
      </div>
    </div>
  );
};

export default Availability;
