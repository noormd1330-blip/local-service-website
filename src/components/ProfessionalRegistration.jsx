import { Icon } from "@iconify/react";
import { useState } from "react";

const ProfessionalRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [category, setCategory] = useState("");
  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-3xl rounded-2xl border border-amber-400 bg-white p-4 sm:p-6 lg:p-8">
        <div className="flex items-start gap-3">
          <Icon
            className="h-12 w-12 shrink-0 font-light text-amber-400 sm:h-16 sm:w-16"
            icon="codicon:account"
          ></Icon>
          <div>
            <h1 className="text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
              Professional Registration
            </h1>
            <p className="text-sm font-semibold text-gray-500 sm:text-base">
              Create your account and start getting bookings today.
            </p>
          </div>
        </div>
        <div className="flex flex-col py-6 font-semibold sm:py-10">
          <form action="">
            <label className="mt-10">Full Name</label>
            <br />
            <input
              className="w-full rounded-lg border border-gray-400 px-4 py-2"
              type="text"
              placeholder="Enter Your full Name"
            />
            <br /> <br />
            <div className="mt-auto">
              <label className="mt-10">Mobile Number</label>
              <br />
              <input
                className="w-full rounded-lg border border-gray-400 px-4 py-2"
                type="tel"
                placeholder="+91 91235 23165"
              />
            </div>
            <br />
            <div className="mt-auto">
              <label className="mt-10">Password</label>
              <br />
              <div className="relative">
                <Icon
                  icon="mdi:lock-outline"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                />
                <input
                  className="w-full rounded-lg border border-gray-500 px-10 py-2"
                  type={showPassword ? "text" : "password"}
                  placeholder="     Enter Your Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                >
                  <Icon
                    icon={
                      showPassword ? "mdi:eye-off-outline" : "mdi:eye-outline"
                    }
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>
          </form>
          <span className="text-black py-5 font-bold"> Account Type</span>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            <label className="rounded-2xl border border-gray-400 p-4 gap-3">
              <input type="radio" name="accountType" value="professional" />
              <div>
                <Icon
                  icon="mdi:account-outline"
                  className="w-6 h-6 text-yellow-500"
                />

                <p className="font-medium text-sm">Professional</p>
                <p className="text-xs text-gray-500">
                  Individual service provider
                </p>
              </div>
            </label>

            <label className="rounded-2xl border border-gray-400 p-4 gap-3">
              <input type="radio" name="accountType" value="Business" />
              <div>
                <Icon
                  icon="mdi:storefront-outline"
                  className="w-6 h-6 text-yellow-500"
                />

                <p className="font-medium text-sm">Business</p>
                <p className="text-xs text-gray-500">Company or team</p>
              </div>
            </label>

            <span className="py-3 font-bold text-black sm:col-span-2"> Select Category</span>
            <div className="relative sm:col-span-2">
              {/* Left icon */}
              <Icon
                icon="mdi:briefcase-outline"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
              />

              <select
  name="category"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-10 focus:outline-none"
>
                <option value="" disabled>
                  Select your service category
                </option>
                <option value="plumber">Plumber</option>
                <option value="electrician">Electrician</option>
                <option value="cleaner">Cleaner</option>
                <option value="chef">Chef</option>
                <option value="carpenter">Carpenter</option>
              </select>

              {/* Right arrow */}
              <Icon
                icon="mdi:chevron-down"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
              />
            </div>
          </div>

          <div className="p-4 sm:p-8">
            <button className="font-bold active:scale-95 cursor-pointer rounded-full w-full py-2 bg-amber-400">
              Register
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="hidden flex-1 border-t border-gray-200 sm:block"></div>

            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-yellow-500 font-medium hover:underline"
              >
                Login
              </a>
            </p>

            <div className="hidden flex-1 border-t border-gray-200 sm:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalRegistration;
