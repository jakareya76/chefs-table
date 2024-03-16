const Banner = () => {
  return (
    <div className="container flex items-center justify-center p-5 mx-auto">
      <div
        className="flex items-center justify-center bg-center bg-cover w-full h-[580px] p-50 rounded-3xl"
        style={{ backgroundImage: `url('/banner.png')` }}
      >
        <div className="text-center text-white max-w-[820px] p-2 sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl xl:text-5xl">
            Discover an exceptional cooking class tailored for you!
          </h2>
          <p className="my-5 text-sm sm:text-md">
            Welcome to Recipe Calories, where culinary delights meet
            health-conscious choices! Dive into our treasure trove of recipes
            and discover an exceptional cooking class tailored just for you.
          </p>
          <div className="flex items-center justify-center gap-8">
            <button className="px-6 py-3 text-[#150B2B] font-medium bg-green-600 rounded-full">
              Explore Now
            </button>
            <button className="px-6 py-3 font-medium text-white bg-transparent border rounded-full">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
