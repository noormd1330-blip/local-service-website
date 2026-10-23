import { Icon } from "@iconify/react";

const Herosection = () => {
  const badges = [
    { icon: "mdi:account-check-outline", label: "Verified Professionals" },
    { icon: "mdi:shield-check-outline", label: "Safe & Secure" },
    { icon: "material-symbols:calendar-month-outline", label: "Easy Booking" },
    { icon: "mdi:headset", label: "Support 24/7" },
  ];
  return (
    <div className="relative mx-auto grid min-h-128 w-full max-w-screen-2xl grid-cols-1 items-center border border-amber-400 bg-black px-4 py-8 sm:px-6 md:px-8 lg:min-h-152 lg:grid-cols-2">
      {/* main div outer wrapper */}
      <div className="relative z-10 min-w-0 flex flex-col gap-3">
        <h1 className="text-3xl font-bold italic text-white sm:text-4xl lg:text-5xl">
          Apne Area ke{" "}
          <span className="text-amber-400">
            Skilled Professionals ko Book Karein
          </span>
        </h1>
        <p className="mt-1 text-lg font-semibold italic text-gray-400 sm:text-xl lg:text-2xl">
          Salon, Barber, Beauty, Tutor, Home Chef, Repair aur bahut kuch... Ab
          aapke ghar ya najdeeki shop par!
        </p>

        <div className="m-0 mt-4 flex w-full max-w-2xl flex-col items-stretch gap-2 rounded-2xl border border-amber-400 p-3 sm:mt-6 sm:flex-row sm:items-center sm:rounded-full sm:p-2 lg:flex-col lg:items-stretch lg:rounded-2xl xl:flex-row xl:items-center xl:rounded-full xl:p-2">
          <div className="flex shrink-0 items-center gap-2 px-2 sm:px-4">
            <Icon icon="bx:map" width={22} className="text-amber-400" />
            <span className="text-sm text-white sm:text-base">
              Kolkata, West Bengal
            </span>
          </div>

          <div className="flex min-w-0 items-center gap-2 text-white sm:flex-1">
            <span className="hidden text-amber-400 sm:inline">|</span>
            <Icon
              icon="akar-icons:search"
              width={22}
              className="text-amber-400"
            />
            <input
              type="text"
              placeholder="Kis service ki zarurat hai?"
              aria-label="Search services"
              className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-gray-400"
            />
          </div>
          <button className="cursor-pointer rounded-full bg-amber-400 px-6 py-2 font-bold text-black active:scale-105 sm:px-8">
            Search
          </button>
        </div>
      </div>

      <div className="relative h-64 w-full lg:col-start-2 lg:row-start-1 lg:h-96 xl:h-120">
        <img
          src={`${import.meta.env.BASE_URL}Local.png`}
          alt="Local service professionals"
          className="h-full w-full object-contain object-center mix-blend-screen"
        />
      </div>

      <div className="relative z-10 flex flex-wrap gap-2 sm:gap-3 lg:col-span-2">
        {badges.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-2xl border border-amber-400 px-3 py-2 text-sm text-white sm:px-4 sm:py-3 sm:text-base"
          >
            <Icon icon={item.icon} className="text-amber-400 text-xl" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Herosection;
