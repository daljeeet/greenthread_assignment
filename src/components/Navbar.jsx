import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul className="flex h-12 items-center w-2/3 justify-around ">
        <li>Login</li>
        <li>Wall Createtors</li>
        <li>Features</li>
        <li>Testimonials</li>
        <li>contact Us</li>
        <li>
          <button className="bg-gradient-to-r from-[#B60B18] to-[#F35460] py-2 px-10 rounded-full text-white">
            Get Started For Free
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
