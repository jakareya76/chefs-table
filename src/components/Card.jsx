import { CiClock2 } from "react-icons/ci";
import { PiFireSimple } from "react-icons/pi";

const Card = () => {
  return (
    <div className="p-5 border rounded-2xl">
      <img
        src="https://images.pexels.com/photos/7758253/pexels-photo-7758253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="img"
        className="rounded-xl "
      />
      <h4 className="my-4 text-2xl font-medium text-[#282828]">
        Spaghetti Bolognese
      </h4>
      <p className="text-[#878787] text-xl">
        Classic Italian pasta dish with savory meat sauce.
      </p>
      <hr className="my-8" />

      <h4 className="text-xl font-medium">Ingredients: 6</h4>
      <ul className="mt-2 ml-5 space-y-2 text-gray-600 list-disc">
        <li>500g ground beef</li>
        <li>1 onion, chopped</li>
        <li>2 cloves garlic, minced</li>
      </ul>

      <hr className="my-8" />

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <CiClock2 size={24} className="text-gray-500" />
          <p className="text-xl text-gray-500">
            <span>30</span> minutes
          </p>
        </div>
        <div className="flex items-center gap-2">
          <PiFireSimple size={24} className="text-gray-500" />
          <p className="text-xl text-gray-500">
            <span>600</span> calories
          </p>
        </div>
      </div>

      <button className="text-[#150B2B] px-8 py-4 bg-green-600 rounded-full mt-5 text-xl font-semibold">
        Want to Cook
      </button>
    </div>
  );
};

export default Card;
