import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Recipes from "./components/Recipes";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Recipes />

      <ToastContainer />
    </>
  );
};

export default App;
