
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex min-h-[75vh] w-full items-start justify-center bg-white px-3 py-8 sm:px-4 sm:py-14">

      {/* Login Card */}
      <div className="w-full max-w-lg rounded-xl border border-amber-400 bg-white p-4 shadow-sm sm:p-6 md:p-8">

        {/* Heading */}
        <div className="mb-6 flex items-center gap-3 sm:mb-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-amber-400 text-amber-500 sm:h-14 sm:w-14">
            <Icon
              icon="mdi:account-outline"
              className="text-4xl"
            />
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Welcome Back!
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Login to your Sonext account.
            </p>
          </div>
        </div>

        {/* Login Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-800"
            >
              Email Address
            </label>

            <div className="flex items-center rounded-lg border border-gray-300 px-3 transition focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-100">
              <Icon
                icon="mdi:email-outline"
                className="shrink-0 text-xl text-gray-400"
              />

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                autoComplete="email"
                required
                className="min-w-0 w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-gray-800"
            >
              Password
            </label>

            <div className="flex items-center rounded-lg border border-gray-300 px-3 transition focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-100">
              <Icon
                icon="mdi:lock-outline"
                className="shrink-0 text-xl text-gray-400"
              />

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="min-w-0 w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                name="remember"
                className="h-4 w-4 accent-amber-500"
              />
              Remember me
            </label>

            <Link
              to="/home"
              className="font-medium text-amber-600 hover:text-amber-700"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-3 font-semibold text-black transition hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2"
          >
            <Icon icon="mdi:login" className="text-xl" />
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-7 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />

          <span className="text-xs text-gray-500">
            New to Sonext?
          </span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-amber-600 hover:text-amber-700"
          >
            Register Now
          </Link>
        </p>

        {/* Support */}
        <div className="mt-7 flex items-center justify-center gap-2 border-t border-gray-100 pt-5 text-xs text-gray-500">
          <Icon
            icon="mdi:shield-check-outline"
            className="text-lg text-amber-500"
          />
          Your local services, all in one place.
        </div>
      </div>
    </div>
  );
};

export default Login;
