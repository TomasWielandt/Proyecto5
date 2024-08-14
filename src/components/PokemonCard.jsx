import PropTypes from 'prop-types';

const PokemonCard = ({ pokemon }) => {
  if (!pokemon) return null;

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-2">{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mb-2" />
      <p className="mb-2">Height: {pokemon.height}</p>
      <p className="mb-2">Weight: {pokemon.weight}</p>
      <p className="mb-2">Base Experience: {pokemon.base_experience}</p>
    </div>
  );
};

PokemonCard.propTypes = {
    pokemon: PropTypes.string.isRequired
  };


export default PokemonCard;
