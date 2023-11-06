import { createContext, useState } from "react";

// crear el contexto, este se tiene que consumir 
export const FiltersContext = createContext()

// Este es el que nos provee de acceso al contexto
export function FiltersProvider ({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return (
        <FiltersContext.Provider value={{
          filters, 
          setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}