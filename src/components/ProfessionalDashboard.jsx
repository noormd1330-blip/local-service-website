import { Icon } from "@iconify/react";

const ProfessionalDashboard = () => {
  return (
    <div className="mx-auto my-6 h-auto w-full max-w-7xl border border-amber-400 p-3 sm:my-10 sm:p-5 lg:p-8">
      <div className="p-3 sm:p-5">
        <h1 className="text-3xl font-semibold text-amber-400 sm:text-4xl lg:text-5xl">
          Professional Dashboard
        </h1>
        <p className="text-lg font-semibold text-gray-500 sm:text-xl lg:text-2xl">
          (Dashboard for Service Provider)
        </p>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="h-auto w-full shrink-0 rounded-2xl bg-black p-3 sm:p-4 lg:w-64">
          <div className="flex items-center gap-3 p-2 text-center">
            <Icon className="text-3xl text-amber-400 sm:text-4xl" icon="bi:shop" />
            <h3 className="text-3xl font-bold text-amber-400 sm:text-4xl">Sonext</h3>
          </div>

          <ul className="flex flex-wrap gap-x-4 gap-y-1 p-3 text-sm font-semibold text-gray-400 sm:p-4 sm:text-base lg:flex-col lg:gap-0 lg:p-5 lg:text-lg">
            <li className="flex gap-3 items-center py-2">
              <Icon className="text-white   w-6" icon="bi:shop">
                {" "}
              </Icon>
              <span>Dashboard</span>
            </li>

            <li className="flex gap-3 items-center py-2 ">
              <Icon className="text-white   w-6" icon="lucide:calendar-check">
                {" "}
              </Icon>
              <span>Bookings</span>
            </li>

            <li className="flex gap-3 items-center py-2">
              <Icon className="text-white   w-6" icon="lucide:scissors">
                {" "}
              </Icon>
              <span>Services</span>
            </li>

            <li className="flex gap-3 items-center py-2 ">
              <Icon className="text-white   w-6" icon="lucide:calendar-heart">
                {" "}
              </Icon>
              <span>Availiblity</span>
            </li>

            <li className="flex gap-3 items-center  py-2">
              <Icon
                className="text-white   w-6"
                icon="lucide:circle-dollar-sign"
              >
                {" "}
              </Icon>
              <span>Availablity</span>
            </li>

            <li className="flex gap-3 items-center py-2 ">
              <Icon className="text-white   w-6" icon="lucide:user-circle-2">
                {" "}
              </Icon>
              <span>Profile</span>
            </li>
          </ul>

          <div className="mt-2 flex items-center justify-center lg:mt-10">
            <Icon
              className="text-2xl text-red-600 sm:text-3xl"
              icon="hugeicons:logout-square-01"
            />
            <button className="cursor-pointer rounded-full px-5 py-2 text-center text-base font-bold text-red-600 active:scale-95 sm:text-lg">
              Logout
            </button>
          </div>
        </div>

        <div className="h-auto min-w-0 w-full rounded-2xl border border-amber-400 bg-black p-4 sm:p-6 lg:p-8">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Welcome, Sameer!
              </h3>
              <span className="text-lg font-semibold text-white sm:text-xl">
                Sameer Salon
              </span>
            </div>
            <div>
              <Icon
                className="text-white  font-light h-15  w-20"
                icon="lucide:user-circle-2"
              >
                {" "}
              </Icon>
            </div>
          </div>

          {/* This is for cards Section */}
          <div className="grid grid-cols-1 items-stretch gap-3 p-2 sm:grid-cols-2 sm:gap-4 sm:p-4 xl:grid-cols-4">
            <div className="p-6 border flex flex-col items-center border-gray-600 rounded-2xl">
              <h2 className="text-gray-500   font-serif font-semibold">
                Total Bookings
              </h2>
              <p className="text-2xl text-normal py-2 text-white font-semibold ">
                24
              </p>
              <span className="text-2xl font-semibold  text-green-500">
                ↑12%
              </span>
            </div>

            <div className="p-6 border flex flex-col items-center border-gray-600 rounded-2xl">
              <h2 className="text-gray-500   font-serif font-semibold">
                Total Earnings
              </h2>
              <p className="text-2xl text-normal py-2 text-white font-semibold ">
                ₹ 12,480
              </p>
              <span className="text-2xl font-semibold  text-green-500">
                ↑18%
              </span>
            </div>

            <div className="p-6 border flex flex-col items-center border-gray-600 rounded-2xl">
              <h2 className="text-gray-500   font-serif font-semibold">
                Pending
              </h2>
              <p className="text-2xl text-normal py-2 text-red-500 font-semibold ">
                3
              </p>
              <span className="text-2xl font-semibold  text-red-500">↓ 2%</span>
            </div>

            <div className="p-6 border flex flex-col items-center border-gray-600 rounded-2xl">
              <h2 className="text-gray-500   font-serif font-semibold">
                Completed
              </h2>
              <p className="text-2xl text-normal py-2 text-white font-semibold ">
                21
              </p>
              <span className="text-2xl font-semibold  text-green-500">
                ↑ 15%
              </span>
            </div>
          </div>
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-gray-300 sm:text-2xl">
              Recent Bookings
            </h2>
            <a
              href="#"
              className="shrink-0 text-sm font-medium text-amber-400 transition-colors sm:text-base"
            >
              View All →
            </a>
          </div>

          {/* This is for cards profile sections */}
          <div className="min-h-70 w-full rounded-2xl border border-amber-400 p-3 sm:p-4">
            <div className="space-y-2">
            <div className="rounded-2xl border border-gray-500 p-2">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <img
                    className="object-cover h-20 rounded-full  border-2 border-amber-400"
                    src="https://i.pinimg.com/736x/e0/c1/62/e0c16260a50d8105f39fff05a36784ea.jpg"
                    alt="profile pic"
                  />
                </div>
                <div>
                  <span className="py-2 text-lg font-semibold italic text-gray-300 sm:text-xl">
                    Neha Sharma
                  </span>
                  <p className="text-sm text-white">
                    Hair Cut • 11:00 AM • 12 Sep
                  </p>
                </div>
                <div>
                  <button className="cursor-pointer rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-black active:scale-95">
                    Confirmed
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-500 p-2">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <img
                    className="object-cover h-20 rounded-full border-2 border-amber-400"
                    src="https://i.pinimg.com/736x/9d/db/3b/9ddb3bdd0b803a1366fe7872db352138.jpg"
                    alt="profile pic"
                  />
                </div>
                <div>
                  <span className="py-2 text-lg font-semibold italic text-gray-300 sm:text-xl">
                    Rohit Kumar Sharma
                  </span>
                  <p className="text-sm text-white">
                    Beard Trim - 3:00 PM - 12 Sep
                  </p>
                </div>
                <div>
                  <button className="cursor-pointer rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-black active:scale-95">
                    Pending
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-500 p-2">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <img
                    className="object-cover h-20 rounded-full  border-2 border-amber-400"
                    src="https://i.pinimg.com/1200x/49/8e/0c/498e0c971bc0eab6d9341172c94ec70b.jpg"
                    alt="profile pic"
                  />
                </div>
                <div>
                  <span className="py-2 text-lg font-semibold italic text-gray-300 sm:text-xl">
                    Pooja Sharma
                  </span>
                  <p className="text-sm text-white">
                    Facial - 5:00 PM - 12 Sep
                  </p>
                </div>
                <div>
                  <button className="cursor-pointer rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-black active:scale-95">
                    Confirmed
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-500 p-2">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <img
                    className="object-cover h-20 rounded-full  border-2 border-amber-400"
                    src="https://i.pinimg.com/736x/da/59/64/da59647bd31dd524c09991cb89949804.jpg"
                    alt="profile pic"
                  />
                </div>
                <div>
                  <span className="py-2 text-lg font-semibold italic text-gray-300 sm:text-xl">
                    Rohan Sharma
                  </span>
                  <p className="text-sm text-white">
                    Hair Colour - 10:00 AM - 13 Sep
                  </p>
                </div>
                <div>
                  <button className="cursor-pointer rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-black active:scale-95">
                    Rescheduled
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;
