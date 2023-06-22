// import React from 'react'  --  Ya no es necesario después de la versión 17 de react
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch man']);

  const onAddCategory = (newCategory) => {
    
    if (categories.includes(newCategory)) return; // Validar

    console.log(newCategory);
    
    // categories.push('One Piece'); -- No funcionaria con los Hooks
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
        {/* título */}
        <h1>Gif Expert App</h1>

        {/* input */}
        <AddCategory 
          onNewCategory={ (event) => onAddCategory(event) }
        />

        {/* Listado de Gif */}
        { 
          categories.map(category =>  (
              <GifGrid 
                key={category} 
                category={category}
              />
          ))
        }
    </>
  )
}


