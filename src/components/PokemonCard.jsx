import PropTypes from 'prop-types';

const PokemonCard = ({ pokemon }) => {
  if (!pokemon) return null;

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center border-4 border-black shadow-black shadow-lg">
      <h2 className="text-2xl font-bold mb-2 text-transform: uppercase text-yellow-400">{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mb-2 w-36 transform transition-transform duration-300 hover:scale-110" />
      <p className="mb-2">Height: {pokemon.height}</p>
      <p className="mb-2">Weight: {pokemon.weight}</p>
      <p className="mb-2">Base Experience: {pokemon.base_experience}</p>
    </div>
  );
};

PokemonCard.propTypes = {
    pokemon: PropTypes.object.isRequired
  };


export default PokemonCard;
