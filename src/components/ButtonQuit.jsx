import React from "react";

function ButtonQuit() {
  return (
    <>
      <button class="bg-rose-950 inline-block w-full text-rose-400 border border-rose-400 border-b-4 font-medium overflow-hidden relative px-4 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
        <span class="bg-rose-400 shadow-rose-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
        Hover Me
      </button>
    </>
  );
}

export default ButtonQuit;
