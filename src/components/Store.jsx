import React from "react";

function Store() {
  return (
    <div className="px-8 py-5 border shadow-xl rounded-lg bg-white my-16 mx-10 w-fit flex gap-5 hover:cursor-pointer">
      <img className="h-14" src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="" />
      <div className="flex flex-col">
        <h4 className="text-2xl font-bold">Kalvium Store</h4>
        <p className="text-lg font-medium text-gray-600">
          Go through our new course!
        </p>
      </div>
    </div>
  );
}

export default Store;