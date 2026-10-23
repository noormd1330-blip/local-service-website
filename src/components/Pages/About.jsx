import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const About = () => {
  const services = [
    { icon: "mdi:home-heart", title: "Home Cleaning" },
    { icon: "mdi:wrench", title: "Repair & Maintenance" },
    { icon: "mdi:content-cut", title: "Beauty & Salon" },
    { icon: "mdi:chef-hat", title: "Home Chef" },
    { icon: "mdi:book-open-page-variant", title: "Home Tutor" },
    { icon: "mdi:account", title: "Maid Services" },
    { icon: "mdi:water-pump", title: "Plumbing" },
    { icon: "mdi:dots-horizontal-circle", title: "And More..." },
  ];

  const benefits = [
    {
      icon: "mdi:account-group-outline",
      title: "Local Professionals",
      description: "Explore service providers for your everyday needs.",
    },
    {
      icon: "mdi:calendar-check-outline",
      title: "Easy Booking",
      description: "Find a suitable service without unnecessary hassle.",
    },
    {
      icon: "mdi:map-marker-radius-outline",
      title: "Local & Nearby",
      description: "Discover services available in your area.",
    },
    {
      icon: "mdi:heart-outline",
      title: "Customer First",
      description: "We aim to make finding local services easier.",
    },
  ];

  return (
    <main className="w-full bg-white text-gray-900">
      {/* Hero Section */}

      {/* Hero Section */}
      <section className="relative isolate min-h-112.5 overflow-hidden bg-black text-white">
        {/* Right Side Image */}
        <img
          src={`${import.meta.env.BASE_URL}Girl.png`}
          alt="Local service professional"
          className="absolute inset-y-0 right-0 z-0 h-full w-full object-cover object-center sm:w-[65%] lg:w-[58%]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-1 bg-linear-to-r from-black via-black/90 to-black/20" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-112.5 max-w-7xl items-center px-5 py-14 sm:px-8 lg:px-12">
          <div className="w-full max-w-2xl lg:w-[55%]">
            {/* Breadcrumb */}
            <div className="mb-5 flex items-center gap-2 text-sm text-gray-300">
              <Link to="/" className="transition hover:text-amber-400">
                Home
              </Link>

              <Icon icon="mdi:chevron-right" className="text-lg" />

              <span className="text-amber-400">About Us</span>
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
              Welcome to Sonext
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Local Services.
              <span className="block text-amber-400">Local People.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
              We help you discover local professionals for everyday needs,
              making it easier to find the right service for your home and life.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/service"
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-semibold text-black transition hover:bg-amber-300"
              >
                Explore Services
                <Icon icon="mdi:arrow-right" className="text-xl" />
              </Link>

              <Link
                to="/forbusiness"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/70 px-6 py-3 font-semibold text-white transition hover:bg-amber-400 hover:text-black"
              >
                Join Sonext
                <Icon icon="mdi:briefcase-outline" className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-20">
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-2xl bg-amber-300/60" />

          <div className="relative flex min-h-75 items-center justify-center overflow-hidden rounded-2xl border border-amber-100 bg-linear-to-br from-amber-50 via-white to-orange-100 p-8 sm:min-h-90">
            <div className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber-400 text-black shadow-lg shadow-amber-200">
                <Icon icon="mdi:storefront-outline" className="text-6xl" />
              </div>

              <h3 className="mt-6 text-3xl font-bold text-gray-900">Sonext</h3>

              <p className="mt-2 text-gray-600">
                Local Services. Local People.
              </p>

              <div className="mt-6 flex justify-center gap-3">
                {[
                  "mdi:home-outline",
                  "mdi:account-group-outline",
                  "mdi:handshake-outline",
                ].map((icon) => (
                  <div
                    key={icon}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-200 bg-white text-amber-600"
                  >
                    <Icon icon={icon} className="text-2xl" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-amber-600">
            <span className="h-0.5 w-8 bg-amber-400" />
            Our Story
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Making Local Services
            <span className="text-amber-500"> Simple</span>
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Finding the right person for an everyday task should not be
            complicated. Sonext is designed to bring customers and local service
            professionals together in one convenient place.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            From home repairs and cleaning to beauty services and tutoring, our
            goal is to help people explore suitable services while giving local
            professionals a place to showcase what they do.
          </p>

          <div className="mt-7 flex gap-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-400 text-black">
              <Icon icon="mdi:heart-outline" className="text-2xl" />
            </div>

            <div>
              <h3 className="font-bold">Built Around Local Needs</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                We believe connecting people with useful local services can make
                everyday life more convenient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-amber-600">
              <span className="h-0.5 w-8 bg-amber-400" />
              What We Do
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Everyday Services,
              <span className="text-amber-500"> One Place</span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-600">
              Sonext helps customers explore different types of local services
              without having to search in many places. Browse service categories
              and find options that suit your needs.
            </p>

            <Link
              to="/service"
              className="mt-7 inline-flex items-center gap-2 font-bold text-gray-900 transition hover:text-amber-600"
            >
              Browse All Services
              <Icon icon="mdi:arrow-right" className="text-xl" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {services.map((service) => (
              <Link
                to="/service"
                key={service.title}
                className="group flex min-h-32 flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
              >
                <Icon
                  icon={service.icon}
                  className="mb-3 text-4xl text-amber-500 transition group-hover:scale-110"
                />

                <span className="text-sm font-semibold text-gray-800">
                  {service.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-amber-600">
            Our Purpose
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            What Drives <span className="text-amber-500">Us</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            We want to make local service discovery more convenient for
            customers and more accessible for professionals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-amber-100 bg-white p-7 shadow-sm transition hover:shadow-md sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
              <Icon icon="mdi:target" className="text-3xl" />
            </div>

            <h3 className="mt-5 text-xl font-bold">Our Mission</h3>

            <p className="mt-3 leading-7 text-gray-600">
              To create a simple and convenient platform where customers can
              explore local services and professionals can present their skills,
              services and availability.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-100 bg-white p-7 shadow-sm transition hover:shadow-md sm:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
              <Icon icon="mdi:eye-outline" className="text-3xl" />
            </div>

            <h3 className="mt-5 text-xl font-bold">Our Vision</h3>

            <p className="mt-3 leading-7 text-gray-600">
              To become a helpful destination for local service discovery,
              supporting stronger connections between customers and the
              businesses in their communities.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Sonext */}
      <section className="bg-[#171717] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-amber-400">
              Why Sonext?
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Local Services, A Better Experience
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
              Designed to make finding and exploring services easier for
              customers and local professionals.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-white/10 bg-white/4 p-6 transition hover:border-amber-400/60 hover:bg-white/[0.07]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-black">
                  <Icon icon={benefit.icon} className="text-2xl" />
                </div>

                <h3 className="mt-5 text-lg font-bold">{benefit.title}</h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-linear-to-r from-amber-200 via-amber-100 to-yellow-50 p-7 sm:p-10 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-400 text-black">
              <Icon icon="mdi:account-group-outline" className="text-3xl" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Be Part of Sonext
              </h2>

              <p className="mt-2 max-w-xl leading-6 text-gray-700">
                Find services for your everyday needs or bring your own local
                business to our community.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-wrap gap-3 md:w-auto">
            <Link
              to="/service"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-black px-5 py-3 font-semibold text-white transition hover:bg-gray-800 sm:flex-none"
            >
              Explore Services
              <Icon icon="mdi:arrow-right" className="text-xl" />
            </Link>

            <Link
              to="/forbusiness"
              className="inline-flex flex-1 items-center justify-center rounded-full border border-gray-800 px-5 py-3 font-semibold text-gray-900 transition hover:bg-amber-300 sm:flex-none"
            >
              For Business
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
