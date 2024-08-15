import { useState } from 'react';
// hook que permite navegar a diferentes rutas en la aplicación
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      // Generar un nuevo ID de Pokémon al azar si la barra de búsqueda está vacía
      const randomId = Math.floor(Math.random() * 898) + 1;
      navigate(`/?pokemon=${randomId}`);
    } else {
      navigate(`/?pokemon=${searchTerm}`);
    }
  };

  return (
    <div className="bg-blue-600 text-black p-4 flex items-center justify-between border-b-2 border-slate-400">
      <img src="src\assets\logo.png" alt="Pokemon Logo" className="w-32" />
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search Pokémon..."
          className="p-2 mr-2 rounded"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-yellow-400 text-black p-2 rounded hover:bg-yellow-500 active:bg-yellow-600 border-black border-2"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
