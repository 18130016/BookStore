import React from "react";

const Menu = () => {
  return (
    <div className="w-10/12 m-auto">
        <ul className="flex p-2 justify-center">
            <li className="pl-7 font-semibold hover:cursor-pointer">Home</li>
            <li className="pl-7 font-semibold hover:cursor-pointer">Category</li>
            <li className="pl-7 font-semibold hover:cursor-pointer">About</li>
            <li className="pl-7 font-semibold hover:cursor-pointer">Pages</li>
            <li className="pl-7 font-semibold hover:cursor-pointer">Blog</li>
            <li className="pl-7 font-semibold hover:cursor-pointer">Connect</li>
        </ul>
    </div>
  );
};

export default Menu;
