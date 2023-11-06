import React, { useState } from "react";
import { useId } from "react";
import { useFilters } from "../hooks/useFilters";


export default function Filters() {
    const [active, setActive] = useState(false)
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);

    setFilters((prevState) => ({
      ...prevState,
      category: selectedValue,
    }));
  };

  
  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <section
        className={`scrols fixed top-0 w-60 h-full overflow-y-scroll border-r-[.1px] border-[#b8b8b8] p-8 flex flex-col gap-10 bg-[#fff] lg:left-0 transition-all duration-300 ease-in-out z-50 ${
          active ? "left-0" : "-left-full"
        }`}
      >
        <div>
          <label htmlFor={minPriceFilterId}>Price</label>
          <input
            type="range"
            id={minPriceFilterId}
            min="0"
            max="1000"
            onChange={handleChangeMinPrice}
            value={filters.minPrice}
          />
          <span>{filters.minPrice}</span>
        </div>

        <div>
          <label htmlFor={categoryFilterId}>Category</label>
          <select
            name=""
            id={categoryFilterId}
            onChange={handleChangeCategory}
            value={selectedCategory}
          >
            <option value="all">Todos</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">jewelery</option>
            <option value="women's clothing">women's clothing</option>
            <option value="men's clothing">men's clothing</option>
          </select>
        </div>

        <div className="flex flex-col gap-6">
          <label className="font-bold">Category</label>

          <div className="grid grid-cols-2 gap-2 items-center justify-center">
            <div className="flex flex-row gap-1">
                <input
                className="cursor-pointer dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 "
                type="checkbox"
                id="laptopsCheckbox"
                onChange={handleChangeCategory}
                value="all"
                checked={selectedCategory === "all"}
                />
                <span>Todos</span>
            </div>

            <div className="flex flex-row gap-1">
                <input
                className="cursor-pointer dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100"
                type="checkbox"
                id="laptopsCheckbox"
                onChange={handleChangeCategory}
                value="electronics"
                checked={selectedCategory === "electronics"}
                />
                <span>electronics</span>
            </div>

            <div className="flex flex-row gap-1">
                <input
                className="cursor-pointer dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100"
                type="checkbox"
                id="smartphonesCheckbox"
                onChange={handleChangeCategory}
                value="men's clothing"
                checked={selectedCategory === "men's clothing"}
                />
                <span>men</span>
            </div>

            <div className="flex flex-row gap-1">
                <input
                className="cursor-pointer dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100"
                type="checkbox"
                id="smartphonesCheckbox"
                onChange={handleChangeCategory}
                value="women's clothing"
                checked={selectedCategory === "women's clothing"}
                />
                <span>women</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <label className="font-bold">Category</label>

          <div className="grid grid-cols-2 gap-2 items-center justify-center">
            <div className="flex flex-row gap-1">
                <input
                className="cursor-pointer dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 "
                type="checkbox"
                id="laptopsCheckbox"
                onChange={handleChangeCategory}
                value="all"
                checked={selectedCategory === "all"}
                />
                <span>Todos</span>
            </div>

            <div className="flex flex-row gap-1">
                <input
                className="cursor-pointer dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100"
                type="checkbox"
                id="laptopsCheckbox"
                onChange={handleChangeCategory}
                value="electronics"
                checked={selectedCategory === "electronics"}
                />
                <span>electronics</span>
            </div>

            <div className="flex flex-row gap-1">
                <input
                className="cursor-pointer dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100"
                type="checkbox"
                id="smartphonesCheckbox"
                onChange={handleChangeCategory}
                value="men's clothing"
                checked={selectedCategory === "men's clothing"}
                />
                <span>men</span>
            </div>

            <div className="flex flex-row gap-1">
                <input
                className="cursor-pointer dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100"
                type="checkbox"
                id="smartphonesCheckbox"
                onChange={handleChangeCategory}
                value="women's clothing"
                checked={selectedCategory === "women's clothing"}
                />
                <span>women</span>
            </div>
          </div>
        </div>

        
      </section>
      <button
          onClick={toggleMenu}
          className=" bg-blue-600 text-white fixed bottom-8 right-6 p-2 text-lg rounded-full transition-all ease-in-out duration-200  z-50"
        >
          {active ? "desactivar" : "activar"}
        </button>
    </>
  );
}
