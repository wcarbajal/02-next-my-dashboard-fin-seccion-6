
import { FavoritePokemons } from "@/pokemons";
import { useAppSelector } from "@/store";
import { IoHandRightOutline } from "react-icons/io5";


export const metadata = {
  title: 'Favoritos',
  description: 'Ad minim sit cupidatat culpa consectetur.',
};





export default async function FavoritesPage() {


  
  
    

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Pokémons Favoritos <small className="text-blue-500">Global state</small></span>

     {
      
     } <FavoritePokemons />

    </div>
  );
}

