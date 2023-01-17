export default function HeaderComponent() {
  return (
    <>
      <a href="/"><img src="/PokedexLogo.png" alt="PkLogo" className="mx-auto" /></a>
      <form className="max-w-xs m-auto">
        <input
          type="text"
          placeholder="Ingresa un nombre . . ."
          className="mt-5 shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </form>
    </>
  );
}
