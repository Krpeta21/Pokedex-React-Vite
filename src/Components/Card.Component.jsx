export default function Card({name='Pokemon',pokemonIndex=3}) {
  return (
    <div className="mt-10 bg-white min-w-full md:min-w-full rounded-3xl transition hover:scale-125">
      <p className="text-center text-2xl md:text-4xl text-gray-700">{pokemonIndex}</p>
      <div className="p-5 ">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`}
        alt="Pokemon"
        className="min-w-full rounded-lg bg-slate-500"
      />
      </div>
      <p className="text-black font-bold text-center text-2xl md:text-4xl capitalize pb-2">
        {name}
      </p>
    </div>
  );
}
