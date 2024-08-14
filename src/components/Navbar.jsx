import { useState } from 'react';
// hook que permite navegar a diferentes rutas en la aplicación
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // actualiza la URL de la aplicación para incluir el término de búsqueda como un parámetro de consulta. Esto permitirá que el componente que maneja la ruta correspondiente lea el término de búsqueda desde la URL 
    navigate(`/?pokemon=${searchTerm}`);
  };

  return (
    <div className="bg-blue-600 text-black p-4 flex items-center justify-between">
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
          className="bg-yellow-400 text-black p-2 rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
