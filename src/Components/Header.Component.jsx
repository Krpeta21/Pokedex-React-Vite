import { useState } from "react";
import { useLocation,Link } from "wouter";

useLocation
export default function HeaderComponent() {
  const [keyword,setKeyword] = useState('')
  const [path, pushLocation] = useLocation()    
   const handleSubmit = evt =>{
    evt.preventDefault()    
    pushLocation(`/pokemon/${keyword.toLowerCase()}`)
   }
   const handleChange = evt =>{
    setKeyword(evt.target.value)
   }
  return (
    <div>
      <Link to="/"><img src="/PokedexLogo.png" alt="PkLogo" className="mx-auto hover:cursor-pointer" /></Link>
      <form className="m-auto" onSubmit={handleSubmit}> 
      <div className="flex flex-row items-center">       
       <input
       onChange={handleChange}
          id="inputB"
          type="text"
          placeholder="Ingresa el nombre de un Pokemon"
          className="mt-5 shadow appearance-none border rounded py-5 w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={keyword}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 py-5 px-3 rounded">Search</button>
        </div>
      </form>
    </div>
  );
}
