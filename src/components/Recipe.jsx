import Card from "./Card";

const Recipe = () => {
  return (
    <div className="w-[70%]">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Recipe;
