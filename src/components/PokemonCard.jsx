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
      <p className="mb-2">Abilities: {pokemon.abilities.map((ability, index) => (
            <span key={index}>
              {ability.ability.name}
              {index < pokemon.abilities.length - 1 ? ', ' : ''}
            </span>
       ))}</p>
      <p className="mb-2">Forms: {pokemon.forms.map((form, index) => (
            <span key={index}>
              {form.name}
              {index < pokemon.forms.length - 1 ? ', ' : ''}
            </span>
       ))}</p>
      {/* al ser mucho moves, dejé que mostrara 3 como máximo */}
      <p className="mb-2">Moves: {pokemon.moves.slice(0, 3).map((move, index) => (
            <span key={index}>
              {move.move.name}
              {index < pokemon.moves.slice(0, 3).length - 1 ? ', ' : ' ...'}
            </span>
       ))}</p>  
    </div>
  );
};

PokemonCard.propTypes = {
    pokemon: PropTypes.object.isRequired
  };


export default PokemonCard;
