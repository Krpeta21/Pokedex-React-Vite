export default function Card({name='Pokemon',pokemonIndex=3}) {
  return (
    <div className="max-w-xs mt-10 bg-white min-w-full md:min-w-fit md:max-w-xl rounded-2xl">
      <p className="text-red-400 text-3xl font-bold text-center">
        {name}
      </p>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`}
        alt="Cyndaquil"
        className="max-w-full min-w-full"
      />
    </div>
  );
}
