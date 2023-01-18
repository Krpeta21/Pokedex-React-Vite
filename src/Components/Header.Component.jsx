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
    <>
      <Link to="/"><img src="/PokedexLogo.png" alt="PkLogo" className="mx-auto hover:cursor-pointer" /></Link>
      <form className="max-w-xs m-auto" onSubmit={handleSubmit}>
       <input
       onChange={handleChange}
          id="inputB"
          type="text"
          placeholder="Ingresa un Pokemon . . ."
          className="mt-5 shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={keyword}
        />
      </form>
    </>
  );
}
