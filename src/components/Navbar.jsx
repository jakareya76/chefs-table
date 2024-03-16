import { useState } from "react";

import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between px-5 py-8 mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-[#150B2B] md:text-3xl">
          Recipe Calories
        </h2>
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center justify-center gap-8">
          <li className="text-[#150b2bd0] font-medium">Home</li>
          <li className="text-[#150b2bd0] font-medium">Recipes</li>
          <li className="text-[#150b2bd0] font-medium">About</li>
          <li className="text-[#150b2bd0] font-medium">Search</li>
        </ul>
      </div>
      <div className="items-center justify-center hidden gap-10 lg:flex">
        <div className="flex items-center justify-center px-4 py-1 bg-gray-100 rounded-full">
          <CiSearch size={24} />
          <input
            type="search"
            placeholder="Search"
            className="px-2 py-2 bg-transparent outline-none placeholder:text-[#150b2bd0] placeholder:font-medium"
          />
        </div>
        <div className="p-3 bg-green-500 rounded-full">
          <CgProfile size={24} />
        </div>
      </div>

      <div className="flex md:hidden">
        <FaBars size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
