import Card from "./Card";

const Recipe = ({ recipes, addToPreparing }) => {
  return (
    <div className="lg:w-[60%] w-full">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {recipes.map((item) => {
          return (
            <Card
              key={item.recipe_id}
              item={item}
              addToPreparing={addToPreparing}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Recipe;
