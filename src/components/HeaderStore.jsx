import React from "react";
import search from "../assets/search.svg";
import world from "../assets/world.svg";
import cart from "../assets/cart.svg";
import { Link, Outlet, useLocation } from "react-router-dom";
import ropa from "../assets/ropa.svg";
import InputSearch from "./InputSearch";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import PerfilUser from "./PerfilUser";


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
      <Link className="" to="/carrito">
        <div className=" border-2 hover:bg-[#9dc49c] border-[#000] w-[47px] h-[47px] rounded-lg flex justify-center items-center hover:top-1">
          <img src={cart} alt="" />
        </div>
      </Link>
    </>
  );
}

function HeaderStore() {
  const [icons, setIcon] = useState(false);
  const [perfil, setPerfil] = useState(false)
  const { user } = useAuth();

  const toggleMenu = () => {
    setIcon(!icons);
  };

  const toggleMenuPerfil = () => {
    setPerfil(!perfil);
  };

  return (
    <>
      <header className="fixed z-10 w-full flex items-start flex-col md:flex-row gap-4 justify-between p-5 lg:pl-[260px] bg-[#fff] border-b-2">
        <nav className="flex items-center justify-between w-full">
          <div className="flex gap-4">
            <button className=" border-2 hover:bg-[#9dc49c] text-white border-[#000] w-[47px] h-[47px] rounded-lg flex justify-center items-center ">
              <img className="border-5" src={world} alt="" />
            </button>

            {/* <button onClick={toggleMenu}>
                {icons ? <IconCart/> :  <IconRopa/>}
            </button> */}
            
              <IconCart />
           
            
              <IconRopa />
            
          </div>

          <div className="flex relative gap-3">
            <InputSearch />
            <button onClick={toggleMenuPerfil} className=" relative right-0 border-2 border-[#4A8549] bg-[#E1FFE1] w-[47px] h-[47px] rounded-lg flex justify-center items-center">
              {user ? (
                <>
                  <h3 className=" text-xl font-bold text-[#4A8549] uppercase">{user.nombre.charAt(0)}<span className=" uppercase">{user.apellido.charAt(0)}</span></h3>
                </>
                  
              ) : null }
            </button>
            <div className={`absolute top-16 transition-all ease-in-out duration-500  ${perfil ? "right-0" : "-right-[1000px]"}`}>
              <PerfilUser/>
            </div>
          </div>
        </nav>

      </header>

      <Outlet/>
    </>
  );
}

export default HeaderStore;
