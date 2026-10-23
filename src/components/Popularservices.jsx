const Popularservices = () => {
  const Cards = [
    {
      images:
        "https://media.istockphoto.com/id/830421324/photo/young-man-in-barbershop-hair-care-service-concept.jpg?s=1024x1024&w=is&k=20&c=IdOH65CP6vHnPGYr7DFLolGA-LFDfaszcqZU9-0lFpI=",
      Heading: "Salon",
      Span: "Badhiya Hair Cut Apke Ghar pe bhi aur booking bhi kar sakte ho professionals ko",
    },
    {
      images:
        "https://images.pexels.com/photos/7079148/pexels-photo-7079148.jpeg",
      Heading: "Home Tutor",
      Span: "Ghar baithe expert teachers",
    },
    {
      images:
        "https://i.pinimg.com/736x/77/32/d2/7732d2cb10063b3b10b93be05364320f.jpg",
      Heading: "Repair",
      Span: "AC, Bijli, Plumber - 24/7",
    },
    {
      images:
        "https://images.pexels.com/photos/8136891/pexels-photo-8136891.jpeg",
      Heading: "Home Chef",
      Span: "Ghar jaisa tasty khana be Healthy",
    },
    {
      images:
        "https://i.pinimg.com/736x/dc/2c/f0/dc2cf09529bb2a0da9d44f6661bd794a.jpg",
      Heading: "Maid",
      Span: "Bharosemand safai help",
    },
    {
      images:
        "https://i.pinimg.com/1200x/b2/07/77/b2077710d098f2da7015607e8be208eb.jpg",
      Heading: "Beauty Parlour",
      Span: "Salon ab ghar par",
    },
    {
      images:
        "https://i.pinimg.com/1200x/aa/b6/7e/aab67ee22f84fa401e100ce50d26b00b.jpg",
      Heading: "Store",
      Span: "Ration aur daily needs",
    },
    {
      images:
        "https://i.pinimg.com/1200x/7c/02/d6/7c02d6fd64b9bfe2ebfd8460d421d11e.jpg",
      Heading: "Others",
      Span: "Har choti-badi service",
    },
  ];
  return (
    <div className="mx-auto my-8 h-auto w-full max-w-screen-2xl border border-amber-400 bg-[#FFFFFF] sm:my-10">
      <div className="m-5 sm:m-8 lg:m-10">
        <h1 className="text-3xl font-bold italic text-amber-400 sm:text-4xl">
          Popular Services
        </h1>
        <p className="text-lg font-semibold italic text-gray-500 sm:text-xl lg:text-2xl">
          Apne Zaroorat K Hisab Se Category Choose Karein
        </p>
      </div>
      <div className="m-4 grid grid-cols-1 items-stretch justify-center gap-4 sm:m-6 sm:grid-cols-2 sm:gap-5 lg:m-8 lg:grid-cols-4 lg:gap-6">
        {Cards.map((items, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center overflow-hidden rounded-2xl border border-amber-400 p-4 sm:p-5 lg:p-6"
            >
              <img
                src={items.images}
                className="object-contain ease-out hover:scale-125 hover:-translate-y-1
                         transition-transform duration-500 h-48 w-full cursor-pointer rounded-3xl object-cover active:scale-110 sm:h-56 lg:h-64"
                          alt="all Cards Images"
              />
              <h1 className="p-3 text-xl font-semibold sm:text-2xl">
                {items.Heading}
              </h1>
              <span className="text-center text-base font-semibold text-gray-500 sm:text-lg">
                {items.Span}
              </span>
              <button className="m-4 cursor-pointer rounded-full bg-amber-400 px-6 py-2 font-bold text-black active:scale-95 sm:m-5">
                Booking Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popularservices;
