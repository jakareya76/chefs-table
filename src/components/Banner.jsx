const Banner = () => {
  return (
    <div className="container flex items-center justify-center mx-auto">
      <div
        className="flex items-center justify-center bg-center bg-cover w-full h-[580px] p-40 rounded-3xl"
        style={{ backgroundImage: `url('/banner.png')` }}
      >
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold">
            Discover an exceptional cooking <br /> class tailored for you!
          </h2>
          <p className="my-5">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding <br /> problems to become an
            exceptionally well world-class Programmer.
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
