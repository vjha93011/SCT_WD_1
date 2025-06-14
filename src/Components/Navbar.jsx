import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between h-24  items-center max-w-[1240px] mx-auto px-4 ">
      <h1 className="text-3xl w-full m-auto text-[#00df9a] font-bold ">
        REACT.
      </h1>
      <ul className="hidden md:flex ease-in-out duration-100">
        <li className="p-4">
          <a href="#">Home</a>
        </li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? (
          <AiOutlineClose className="text-xl" />
        ) : (
          <AiOutlineMenu className="text-xl" />
        )}
      </div>
      <div className={!nav ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full m-4 ease-in-out duration-150 bg-[#000300]" :"fixed left-[-100%] ease-in-out"}>
        <ul className=" uppercase m-2 flex flex-col items-start justify-center ">
          <h1 className="text-3xl w-full m-auto text-[#00df9a] font-bold mb-12 mt-2">
            REACT.
          </h1>
          <li className="p-4 border-b border-gray-400 w-[90%] ">
            <a href="#">Home</a>
          </li>
          <li className="p-4 border-b border-gray-400 w-[90%] ">
            <a href="#">Company</a>
          </li>
          <li className="p-4 border-b border-gray-400 w-[90%] ">
            <a href="#">Resources</a>
          </li>
          <li className="p-4 border-b border-gray-400 w-[90%] ">
            <a href="#">About</a>
          </li>
          <li className="p-4 border-b border-gray-400 w-[90%] ">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
