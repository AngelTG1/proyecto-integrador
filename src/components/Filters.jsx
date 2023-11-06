import React, { useState } from 'react';
import { useId } from 'react';
import { useFilters } from '../hooks/useFilters';

export default function Filters() {
    const { filters, setFilters } = useFilters();

    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const [selectedCategory, setSelectedCategory] = useState('all');

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

    return (
        <>
            <section className="filters">
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
                    <select name="" id={categoryFilterId} onChange={handleChangeCategory} value={selectedCategory}>
                        <option value="all">Todos</option>
                        <option value="electronics">electronics</option>
                        <option value="jewelery">jewelery</option>
                        <option value="women's clothing">women's clothing</option>
                        <option value="men's clothing">men's clothing</option>
                    </select>
                </div>

                <div>
                    <label>Category</label>
                    
                    <div>
                        <input
                            className="cursor-pointer"
                            type="checkbox"
                            id="laptopsCheckbox"
                            onChange={handleChangeCategory}
                            value="all"
                            checked={selectedCategory === 'all'}
                        />
                        <span>Todos</span>
                    </div>

                    <div>
                        <input
                            className="cursor-pointer"
                            type="checkbox"
                            id="laptopsCheckbox"
                            onChange={handleChangeCategory}
                            value="laptops"
                            checked={selectedCategory === 'laptops'}
                        />
                        <span>Portatiles</span>
                    </div>

                    <div>
                        <input
                            className="cursor-pointer"
                            type="checkbox"
                            id="smartphonesCheckbox"
                            onChange={handleChangeCategory}
                            value="smartphones"
                            checked={selectedCategory === 'smartphones'}
                        />
                        <span>Moviles</span>
                    </div>
                </div>
            </section>
        </>
    );
}

