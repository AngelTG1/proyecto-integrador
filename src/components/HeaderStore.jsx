import React from "react";
import search from "../assets/search.svg";
import world from "../assets/world.svg";
import cart from "../assets/cart.svg";
import { Link, Outlet, useLocation } from "react-router-dom";
import ropa from "../assets/ropa.svg";
import InputSearch from "./InputSearch";
import { useState } from "react";

export function IconRopa() {



  

  console.log

  return (
    <>
      <Link >
        <div className=" border-2 border-[#000] w-[47px] h-[47px] rounded-lg flex justify-center items-center">
          <img src={ropa} alt="" />
        </div>
      </Link>
    </>
  );
}

export function IconCart() {
  return (
    <>
      <Link to="/carrito">
        <div className=" border-2 border-[#000] w-[47px] h-[47px] rounded-lg flex justify-center items-center">
          <img src={cart} alt="" />
        </div>
      </Link>
    </>
  );
}

function HeaderStore() {
  const [icons, setIcon] = useState(false);

  const toggleMenu = () => {
    setIcon(!icons);
  };

  return (
    <>
      <header className="fixed z-10 w-full flex items-start flex-col md:flex-row gap-4 justify-between p-5 lg:pl-[260px] bg-[#fff] border-b-2">
        <nav className="flex items-center justify-between w-full">
          <div className="flex gap-4">
            <button className=" border-2 border-[#000] w-[47px] h-[47px] rounded-lg flex justify-center items-center">
              <img src={world} alt="" />
            </button>
            <button className=" border-2 border-[#000] w-[47px] h-[47px] rounded-lg flex justify-center items-center">
              <img src={world} alt="" />
            </button>

            {/* <button onClick={toggleMenu}>
                {icons ? <IconCart/> :  <IconRopa/>}
            </button> */}
            
              <IconCart />
           
            
              <IconRopa />
            
          </div>

          <div className="flex relative gap-3">
            <InputSearch />
            <button className=" right-0 border-2 border-[#4A8549] bg-[#E1FFE1] w-[47px] h-[47px] rounded-lg flex justify-center items-center">
              <h3 className=" text-xl font-bold text-[#4A8549]"></h3>
            </button>
          </div>
        </nav>
      </header>

      <Outlet/>
    </>
  );
}

export default HeaderStore;
