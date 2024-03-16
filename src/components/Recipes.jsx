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
        <h2 className="text-5xl font-bold text-[#150B2B]">Our Recipes</h2>
        <p className="my-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna <br /> volutpat curabitur
          elementum mauris aenean neque.
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
