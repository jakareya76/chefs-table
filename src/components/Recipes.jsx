import { useState, useEffect } from "react";

import { toast } from "react-toastify";

import Recipe from "./Recipe";
import Cooking from "./Cooking";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [preparing, setPreparing] = useState([]);

  useEffect(() => {
    const getRecipesData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      setRecipes(data);
    };

    getRecipesData();
  }, []);

  const addToPreparing = (item) => {
    const isExist = preparing.find(
      (existingItem) => existingItem.recipe_id === item.recipe_id
    );

    if (!isExist) {
      setPreparing((prev) => {
        return [...prev, item];
      });
    } else {
      toast("Already Exist");
    }
  };

  const removeFromPreparing = (id) => {
    setPreparing((prev) => {
      return prev.filter((item) => {
        return item.recipe_id !== id;
      });
    });
  };

  return (
    <div className="container py-20 mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#150B2B]">
          Our Recipes
        </h2>
        <p className="my-4 text-gray-500 max-w-[900px] mx-auto">
          Welcome to Recipe Calories, where culinary delights meet
          health-conscious choices! Dive into our treasure trove of recipes and
          discover an exceptional cooking class tailored just for you. Whether
          you're a seasoned chef or a kitchen novice
        </p>
      </div>

      <div className="flex flex-col justify-center gap-8 lg:flex-row">
        <Recipe recipes={recipes} addToPreparing={addToPreparing} />
        <Cooking
          preparing={preparing}
          removeFromPreparing={removeFromPreparing}
        />
      </div>
    </div>
  );
};

export default Recipes;
