import { useState, useEffect } from "react";

import Recipe from "./Recipe";
import Cooking from "./Cooking";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipesData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      setRecipes(data);
    };

    getRecipesData();
  }, []);

  return (
    <div className="container py-20 mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-5xl font-bold text-[#150B2B]">Our Recipes</h2>
        <p className="my-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna <br /> volutpat curabitur
          elementum mauris aenean neque.
        </p>
      </div>

      <div className="flex flex-col justify-center gap-8 md:flex-row">
        <Recipe />
        <Cooking />
      </div>
    </div>
  );
};

export default Recipes;
