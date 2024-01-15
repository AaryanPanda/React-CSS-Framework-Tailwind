import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between bg-red-500 px-10 py-6 items-center">
      <div className="flex items-center gap-10">
        <div className="text-4xl font-bold text-white">Kalvium</div>
        <div className="flex gap-6">
          <a href="" className="text-xl mt-2 text-gray-200 font-semibold tracking-wide">
            About Us
          </a>
          <a href="" className="text-xl mt-2 text-gray-200 font-semibold tracking-wide">
            Contacts
          </a>
          <a href="" className="text-xl mt-2 text-gray-200 font-semibold tracking-wide">
            Courses
          </a>
        </div>
      </div>
      <button className="font-semibold text-white text-lg rounded px-6 py-1.5 bg-purple-900 border-2 border-solid border-slate-950 shadow shadow-slate-800 ">
        Login
      </button>
    </div>
  );
}

export default Navbar;