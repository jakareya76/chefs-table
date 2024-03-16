import { CiClock2 } from "react-icons/ci";
import { PiFireSimple } from "react-icons/pi";

const Card = ({ item, addToPreparing }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    preparing_time,
    ingredients,
    calories,
  } = item;

  return (
    <div className="p-5 border rounded-2xl">
      <img
        src={recipe_image}
        alt="img"
        className="object-cover w-full h-56 rounded-xl"
      />
      <h4 className="my-4 text-2xl font-medium text-[#282828]">
        {recipe_name}
      </h4>
      <p className="text-[#878787] text-xl">{short_description}</p>
      <hr className="my-5" />

      <h4 className="text-xl font-medium">Ingredients: {ingredients.length}</h4>
      <ul className="mt-2 ml-5 space-y-2 text-gray-600 list-disc">
        {ingredients.map((ingredient, idx) => {
          return <li key={idx}>{ingredient}</li>;
        })}
      </ul>

      <hr className="my-5" />

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <CiClock2 size={24} className="text-gray-500" />
          <p className="text-xl text-gray-500">{preparing_time}</p>
        </div>
        <div className="flex items-center gap-2">
          <PiFireSimple size={24} className="text-gray-500" />
          <p className="text-xl text-gray-500">{calories}</p>
        </div>
      </div>

      <button
        onClick={() => addToPreparing(item)}
        className="text-[#150B2B] px-8 py-4 bg-green-600 rounded-full mt-5 text-xl font-semibold"
      >
        Want to Cook
      </button>
    </div>
  );
};

export default Card;
