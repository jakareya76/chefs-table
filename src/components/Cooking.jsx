import { useState } from "react";

const Cooking = ({ preparing, removeFromPreparing }) => {
  const [cooking, setCooking] = useState([]);
  const [totalTime, settotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const addToCooking = (item) => {
    setCooking((prev) => {
      return [...prev, item];
    });

    const preparingTime = item.preparing_time;
    const calorieCount = item.calories;

    const preparingTimeString = preparingTime;
    const preparingTimeNumber = parseInt(preparingTimeString.match(/\d+/)[0]);

    const calorieCountString = calorieCount;
    const calorieCountNumber = parseInt(calorieCountString.match(/\d+/)[0]);

    settotalTime((prev) => {
      return prev + preparingTimeNumber;
    });

    setTotalCalories((prev) => {
      return prev + calorieCountNumber;
    });
  };

  return (
    <div className="lg:w-[40%] w-full border rounded-xl p-8">
      {/* preparing To Cook */}
      <div>
        <h2 className="text-2xl font-bold text-center">
          Want to cook: {preparing.length}
        </h2>
        <hr className="my-5" />
        <table className="w-full">
          <thead className="border">
            <tr className="text-left text-[#878787]">
              <th className="px-2 py-3 border">Name</th>
              <th className="px-2 py-3 border">Time</th>
              <th className="px-2 py-3 ">Calories</th>
            </tr>
          </thead>
          <tbody>
            {preparing.map((item) => {
              return (
                <tr
                  key={item.recipe_id}
                  className="text-[#878787] bg-gray-100 border"
                >
                  <td className="px-2 py-3">{item.recipe_name}</td>
                  <td className="px-2 py-3">{item.preparing_time}</td>
                  <td className="px-2 py-3">{item.calories}</td>
                  <td>
                    <button
                      onClick={() => {
                        addToCooking(item);
                        removeFromPreparing(item.recipe_id);
                      }}
                      className="px-4 py-2 my-4 text-xl bg-green-500 text-[#150B2B] rounded-full font-semibold"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Currently cooking */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center">
          Currently cooking: {cooking.length}
        </h2>
        <hr className="my-5" />

        <table className="w-full">
          <thead className="border">
            <tr className="text-left text-[#878787]">
              <th className="px-2 py-3 border">Name</th>
              <th className="px-2 py-3 border">Time</th>
              <th className="px-2 py-3 ">Calories</th>
            </tr>
          </thead>
          <tbody>
            {cooking.map((item) => {
              return (
                <tr
                  key={item.recipe_id}
                  className="text-[#878787] bg-gray-100 border"
                >
                  <td className="px-2 py-3">{item.recipe_name}</td>
                  <td className="px-2 py-3">{item.preparing_time}</td>
                  <td className="px-2 py-3">{item.calories}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="py-5 space-y-4">
          <p className="text-xl font-medium text-[#282828]">
            Total Time = {totalTime} minutes
          </p>
          <p className="text-xl font-medium text-[#282828]">
            Total Calories = {totalCalories} calories
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cooking;
