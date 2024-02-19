import React from "react";

 const Navbar = () => {


  return <div className="w-full border">
    
    <nav className="w-full border-2 flex justify-between py-2 px-7">
      <button id="menu"  className="border-2 border-black- 900">Menu</button>
      <input type="text" className="border border-black rounded-md " />
      <button id="login" className="border-2 border-black-900">Log in</button>
      
    </nav>
    <div className="flex text-center ">
      <li className="p-10 list-none">Home</li>
      <li className="p-10 list-none">About</li>
      <li className="p-10 list-none">Contact</li>
    </div>
  </div>;
};

export default Navbar;