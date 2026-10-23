import { useState } from "react";
import { Icon } from "@iconify/react";
import MapPreview from "./MapPreview";

const locations = {
  "Andhra Pradesh": [
    "Visakhapatnam",
    "Vijayawada",
    "Guntur",
    "Nellore",
    "Tirupati",
    "Kurnool",
    "Rajahmundry",
    "Kakinada",
  ],
  "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tawang", "Ziro"],
  Assam: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tezpur", "Nagaon"],
  Bihar: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga", "Purnia"],
  Chhattisgarh: ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg", "Jagdalpur"],
  Goa: ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"],
  Gujarat: [
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Rajkot",
    "Gandhinagar",
    "Bhavnagar",
    "Jamnagar",
  ],
  Haryana: ["Gurugram", "Faridabad", "Panipat", "Ambala", "Hisar", "Karnal"],
  "Himachal Pradesh": ["Shimla", "Dharamshala", "Manali", "Solan", "Mandi"],
  Jharkhand: [
    "Ranchi",
    "Jamshedpur",
    "Dhanbad",
    "Bokaro",
    "Deoghar",
    "Hazaribagh",
  ],
  Karnataka: [
    "Bengaluru",
    "Mysuru",
    "Mangaluru",
    "Hubballi",
    "Belagavi",
    "Shivamogga",
    "Udupi",
  ],
  Kerala: [
    "Thiruvananthapuram",
    "Kochi",
    "Kozhikode",
    "Thrissur",
    "Kollam",
    "Kannur",
  ],
  "Madhya Pradesh": [
    "Bhopal",
    "Indore",
    "Gwalior",
    "Jabalpur",
    "Ujjain",
    "Sagar",
  ],
  Maharashtra: [
    "Mumbai",
    "Pune",
    "Nagpur",
    "Nashik",
    "Thane",
    "Navi Mumbai",
    "Kolhapur",
    "Chhatrapati Sambhajinagar",
  ],
  Manipur: ["Imphal", "Thoubal", "Bishnupur", "Churachandpur"],
  Meghalaya: ["Shillong", "Tura", "Jowai", "Nongpoh"],
  Mizoram: ["Aizawl", "Lunglei", "Champhai", "Kolasib"],
  Nagaland: ["Kohima", "Dimapur", "Mokokchung", "Wokha"],
  Odisha: [
    "Bhubaneswar",
    "Cuttack",
    "Rourkela",
    "Puri",
    "Sambalpur",
    "Balasore",
  ],
  Punjab: [
    "Ludhiana",
    "Amritsar",
    "Jalandhar",
    "Patiala",
    "Bathinda",
    "Mohali",
  ],
  Rajasthan: [
    "Jaipur",
    "Jodhpur",
    "Udaipur",
    "Kota",
    "Ajmer",
    "Bikaner",
    "Jaisalmer",
  ],
  Sikkim: ["Gangtok", "Namchi", "Gyalshing", "Mangan"],
  "Tamil Nadu": [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Tiruchirappalli",
    "Salem",
    "Erode",
    "Tirunelveli",
  ],
  Telangana: ["Hyderabad", "Warangal", "Karimnagar", "Nizamabad", "Khammam"],
  Tripura: ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar"],
  "Uttar Pradesh": [
    "Lucknow",
    "Kanpur",
    "Noida",
    "Ghaziabad",
    "Agra",
    "Varanasi",
    "Prayagraj",
    "Meerut",
    "Gorakhpur",
  ],
  Uttarakhand: [
    "Dehradun",
    "Haridwar",
    "Rishikesh",
    "Haldwani",
    "Roorkee",
    "Nainital",
  ],
  "West Bengal": [
    "Kolkata",
    "Howrah",
    "Durgapur",
    "Siliguri",
    "Asansol",
    "Darjeeling",
  ],
  "Andaman and Nicobar Islands": ["Port Blair", "Diglipur", "Rangat"],
  Chandigarh: ["Chandigarh"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
  Delhi: ["New Delhi", "Delhi"],
  "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla"],
  Ladakh: ["Leh", "Kargil"],
  Lakshadweep: ["Kavaratti", "Agatti", "Andrott"],
  Puducherry: ["Puducherry", "Karaikal", "Mahe", "Yanam"],
};

const ServiceArea = () => {
  const [state, setState] = useState("Karnataka");
  const [city, setCity] = useState("Bengaluru");
  const [pincode, setPincode] = useState("560001");
  const [address, setAddress] = useState("");

  const handleStateChange = (e) => {
    setState(e.target.value);
    setCity("");
    setPincode("");
  };

  return (
    <div>
      <div className="flex justify-center p-3 sm:p-4">
        <div className="mx-auto w-full max-w-2xl rounded-2xl border border-amber-400 p-4 sm:p-6 lg:p-8">
          {/* Progress Steps */}
          <div className="flex items-center">
            <Icon
              icon="mdi:check"
              className="h-10 w-10 shrink-0 rounded-full bg-amber-400 p-2 text-xl text-black"
            />

            <div className="h-px flex-1 bg-amber-400" />

            <Icon
              icon="mdi:check"
              className="h-10 w-10 shrink-0 rounded-full bg-amber-400 p-2 text-xl text-black"
            />

            <div className="h-px flex-1 bg-amber-400" />

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400 font-bold">
              3
            </div>
          </div>

          <div className="mt-2 flex justify-between text-xs font-medium sm:text-sm">
            <span>Services</span>
            <span>Availability</span>
            <span>Service Area</span>
          </div>

          {/* Heading */}
          <div className="flex items-center gap-3 p-3 sm:gap-4 sm:p-5">
            <Icon
              icon="mdi:map-marker"
              className="h-10 w-10 shrink-0 rounded-full bg-amber-200 p-2"
            />

            <div>
              <h1 className="font-serif text-xl font-bold sm:text-2xl">
                Service Location
              </h1>
              <p className="text-sm font-semibold text-gray-700">
                Enter Your Working Location (home or office).
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4">
            {/* Address */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">
                Address <span className="text-red-600">*</span>
              </label>

              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="House / Building Name, Street, Area"
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-amber-400"
              />
            </div>

            {/* City, State, Pincode */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {/* City */}
              <div className="min-w-0">
                <label className="mb-1 block text-xs font-medium text-gray-700">
                  City <span className="text-red-500">*</span>
                </label>

                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-2 py-2 text-xs outline-none focus:border-amber-400"
                >
                  <option value="">Select City</option>

                  {(locations[state] || []).map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* State */}
              <div className="min-w-0">
                <label className="mb-1 block text-xs font-medium text-gray-700">
                  State <span className="text-red-500">*</span>
                </label>

                <select
                  value={state}
                  onChange={handleStateChange}
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-2 py-2 text-xs outline-none focus:border-amber-400"
                >
                  <option value="">Select State</option>

                  {Object.keys(locations).map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pincode */}
              <div className="min-w-0">
                <label className="mb-1 block text-xs font-medium text-gray-700">
                  Pincode <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  maxLength={6}
                  pattern="[1-9][0-9]{5}"
                  placeholder="560001"
                  value={pincode}
                  onChange={(e) =>
                    setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))
                  }
                  required
                  className="w-full rounded-lg border border-gray-200 px-2 py-2 text-xs outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Service Radius heading */}
            <div className="mt-4 flex items-center gap-3">
              <Icon
                icon="mdi:map-marker-radius"
                className="h-10 w-10 shrink-0 rounded-full bg-amber-100 p-2 text-amber-600"
              />

              <div>
                <h2 className="font-serif text-lg font-bold">Service Radius</h2>
                <p className="text-xs text-gray-500">
                  Select how far you can travel for services.
                </p>
              </div>
            </div>

            {/* Service Radius Slider */}
            <ServiceRadius />
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
    </div>
  );
};

const ServiceRadius = () => {
  const [radius, setRadius] = useState(15);

  return (
    <div>
      <div className="flex items-center gap-3">
        <input
          type="range"
          min="1"
          max="100"
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          className="h-2 w-full cursor-pointer accent-amber-400"
          aria-label="Service radius in kilometers"
        />

        <span className="w-12 shrink-0 text-right text-xs font-semibold">
          {radius} km
        </span>

        <div></div>
      </div>

      <div className="p-2 sm:p-5">
        <div className=" bg-amber-100 rounded  flex flex-row  items-center p-2 w-full">
          <Icon
            icon="mdi:information"
            className="text-amber-500"
            width="25"
            height="25"
          />
          <p className="text-sm px-3  text-gray-500 font-semibold">
            You will be available for customers within {radius} km from your
            location.
          </p>
        </div>
      </div>
      <div>
        <MapPreview radiusKm={radius} />
      </div>
    </div>
  );
};

export default ServiceArea;
