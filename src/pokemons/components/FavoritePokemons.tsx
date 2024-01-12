'use client'
import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid"
import { useState } from "react";
import { IoHandRightOutline } from "react-icons/io5";


export const FavoritePokemons = () => {

    const favoritePokemons = useAppSelector((state) => Object.values(state.pokemons));
    const [pokemons, setPokemons] = useState( favoritePokemons )

  return (
    <>
    
    {
        (pokemons.length === 0)
        ? (<NoFavoritos />)
        : (<PokemonGrid pokemons={ pokemons }/>)
    }
    

    </>
  )
}

export const NoFavoritos = () => {
    return(
      <div className="flex flex-col h-[50hv] items-center justify-center">
         <IoHandRightOutline  size={100} className="text-red-500" />
         <span>No hay favoritos</span>
  
      </div>
    )
  
  }