import { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtener parámetros de búsqueda
  const searchParams = new URLSearchParams(window.location.search);
  const query = searchParams.get('pokemon');

  // se usa para obtener los datos del Pokémon cada vez que query cambia
  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError(null);

      try {
        // si hay un valor en query, se usa ese valor (el nombre del Pokémon). Si no, se genera un ID aleatorio entre 1 y 898 para obtener un Pokémon al azar.
        const id = query ? query.toLowerCase() : Math.floor(Math.random() * 898) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) throw new Error('Failed to fetch Pokémon');

        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [query]);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return <PokemonCard pokemon={pokemon} />;
};

export default Home;
