![](https://github.com/UDDBootcamp/7M_FULLSTACK_M5_PROY/blob/master/images/banner.png)

# Proyecto 5: Aplicación Web con React

## Índice
1. [¿Qué construirás?](#qué-construirás)
2. [Objetivos](#objetivos)
3. [Requisitos](#requisitos)
4. [Planteamiento](#planteamiento)
5. [Despliegue](#despliegue)
6. [Solución](#solución)
7. [Contacto](#contacto)

___

## 1. ¿Qué construirás?
Para este proyecto, construirás una aplicación web con React que consumirá datos de una API pública. Los datos que obtenga de la API se mostrarán en una interfaz de usuario.

Para encontrar una API pública para este proyecto, puedes consultar esta lista en GitHub: https://github.com/public-apis/public-apis

Si lo requieres, puedes buscar otras APIs fuera de la lista anterior.

Hay libertad para usarlo en la industria que gustes, no necesariamente tienen que ser datos numéricos como economía o finanzas. Puedes extraer información sobre libros, música, ánime, videojuegos, geografía, mascotas, etc. La idea es que conozcas el flujo de información y puedas reflejarlo en la interfaz.

Tu aplicación deberá:

- Conectar con una API para obtener datos
- Mostrar los datos en una interfaz de usuario
- Permitir alguna interacción del usuario (por ejemplo, mediante botones o - formularios)

___

## 2. Objetivos
- Crear componentes en React y entender cómo se relacionan entre sí
- Pasar datos entre componentes usando props
- Manejar eventos en React
- Manejar el estado de los componentes con el hook useState
- Uso de useEffect para manejar efectos secundarios
- Implementar rutas con React Router
- Manejo de errores con Error Boundaries
- Conectar tu aplicación React a una API para obtener datos
- De manera opcional y si lo require, Uso de useRef, useCallback, y useMemo

___

## 3. Requisitos
A continuación, usarás esta lista para saber los requisitos mínimos del proyecto:

### REACT
- Uso de vite para la generación del proyecto
-  Crear componentes funcionales
-  Utilizar una API pública y mostrar los datos obtenidos en tu interfaz de usuario
-  Uso de Hooks (mínimo useEffect para los procesos asíncronos)
-  Implementar rutas en tu aplicación con React Router
-  Manejar errores de renderizado con Error Boundaries
-  Implementación CSS a través de un framework (TailwindCSS, MUI, Bootstrap)

### CONTROL DE VERSIONES
- Crear un repositorio en GitHub y Realizar mínimo 5 "commits" por persona en tu repositorio
-  Crear un README.md dentro del repositorio. Incluir la descripción, instalación y uso del proyecto

### DESPLIEGUE
 - Mostrar proyecto a través de una URL, usando un servicio de terceros (Netlify, GitHub Pages, Render)
 
### ENTREGA A TIEMPO
 - Entregar tu proyecto en el tiempo estipulado
 
 ___

##  4. Planteamiento
En esta proyecto, se desarrolla una aplicación que mostrará diferentes Pokémones de forma aleatoria o según su nombre, usando la siguiente API: https://pokeapi.co/

Estaremos obteniendo la información directamente de la API para posteriormente trazarla en una interfaz. 
Al ingresar a la página, se mostrará un Pokémon al azar. El usuario será capaz de utilizar una barra de búsqueda para ingresar el nombre de algún Pokémon y un botón de busqueda que mostrará el personaje ingresado, o si se busca sin haber escrito un nombre en la barra, mostrará un personaje al azar. En el caso de no encontrar el Pokémon solicitado, mostrará un mensaje indicando que no se encontró el personaje.

[![pantalla.png](https://i.postimg.cc/3rGtQdnv/pantalla.png)](https://postimg.cc/Wt2GMbRN)

___

## 5. Despliegue

### Localhost
Para usar este proyecto, es necesario:
- Clonar este repositorio: https://github.com/TomasWielandt/Proyecto5.git
- Acceder a esta carpeta a través de la terminal:
```
$ cd Proyecto5/
```
- Realizar la instalación de dependencias
```
$ npm install
```
- Ejecutar el proyecto con el script de dev
```
$  npm run dev
```

### Terceros
Ingresa a alguno de los siguiente links:
- Render: https://proyecto-5-hhv3.onrender.com
- Netlify: https://jazzy-centaur-d007db.netlify.app
- Vercel: https://proyecto5-sh3c.vercel.app/

___

## 6. Solución
### Tecnologías usadas
- JavaScript
- React
- Vite
- Tailwind

### Instalación de dependencias
- **prop-types (v15.8.1)**: Biblioteca de React que se utiliza para validar las propiedades (props) que se pasan a los componentes.
- **react-router-dom(v6.26.0)**: Biblioteca fundamental en aplicaciones React para implementar enrutamiento dinámico, es decir, la capacidad de cambiar lo que se muestra en la pantalla según la URL del navegador, sin necesidad de recargar la página completa.

### Código
-  **PokemonCard.jsx**: renderizar la información obtenida de la API.

[![card.png](https://i.postimg.cc/3RYxry2x/card.png)](https://postimg.cc/LqQpN8yc)

```
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
      {/* si son muchos forms, se mostrara 3 como máximo */}
      <p className="mb-2">Forms: {pokemon.forms.slice(0, 3).map((form, index) => (
            <span key={index}>
              {form.name}
              {index < pokemon.forms.slice(0, 3).length - 1 ? ', ' : ''}
            </span>
       ))}</p>
      {/* al ser mucho moves, dejé que mostrara 3 como máximo */}
      <p className="mb-2">Moves: {pokemon.moves.slice(0, 3).map((move, index) => (
            <span key={index}>
              {move.move.name}
              {index < pokemon.moves.slice(0, 3).length - 1 ? ', ' : ''}
            </span>
       ))}</p>  
    </div>
  );
};

PokemonCard.propTypes = {
    pokemon: PropTypes.object.isRequired
  };


export default PokemonCard;

```

- **Home.jsx**: conectarse con la API.

```
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtener parámetros de búsqueda
  const [searchParams] = useSearchParams();
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
        if (!response.ok) throw new Error('POKÉMON NOT FOUND!');

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
  if (error) return <p className="text-red-600 text-6xl font-bold">{error}</p>;

  return <PokemonCard pokemon={pokemon} />;
};

export default Home;

```

- **Navbar.jsx **: barra de navegación para hacer la busqueda a traves de una barra de texto y un botón.

[![navbar.png](https://i.postimg.cc/TYF2LNnS/navbar.png)](https://postimg.cc/8jdgxHKB)

```
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
      <img src="https://res.cloudinary.com/dfxlipbvl/image/upload/v1723759619/logo_bks99d.png" alt="Pokemon Logo" className="w-32" />
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

```

- **Footer.jsx**: pie de página que contienen un aviso de derechos de autor.

[![footer.png](https://i.postimg.cc/jd709xJg/footer.png)](https://postimg.cc/svsNGRm7)

```
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center border-t-2 border-slate-400">
      <p className="text-sm">
        Copyright © 2024 Todos los derechos reservados. Prohibida su reproducción total o parcial por cualquier medio.
      </p>
    </footer>
  );
};

export default Footer;

```

- **ErrorBoundary.jsx**: componente en React que se utiliza para manejar errores de JavaScript en la interfaz de usuario (UI).

```
import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="text-red-600">Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
    children: PropTypes.array.isRequired
  };

export default ErrorBoundary;

```

- **App.jsx**: componente principal o raíz de la aplicación.

[![app.png](https://i.postimg.cc/nV7fSVmd/app.png)](https://postimg.cc/s1VLvrwS)

```
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";

function App() {

  return (
    <Router>
      <ErrorBoundary>
      <div className="flex flex-col min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `url('https://res.cloudinary.com/dfxlipbvl/image/upload/v1723759608/fondo_ejyigq.jpg')` }}>
      <div className="absolute inset-0 bg-white opacity-15"></div>
      <div className="relative flex flex-col flex-grow">
        <Navbar />
          <div className="flex-grow flex justify-center items-center p-4">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        <Footer />
      </div>
      </div>
      </ErrorBoundary>
    </Router>
  )
}

export default App

```

- **index.html**: plantilla HTML base donde React monta su interfaz de usuario (UI). Sirve también para colocar el título de la página y un ícono que se muestran en la pestaña.

[![pesta-a.png](https://i.postimg.cc/VkwL1Gnc/pesta-a.png)](https://postimg.cc/D8CKPcxC)

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="https://res.cloudinary.com/dfxlipbvl/image/upload/v1723759636/esfera_ye7vfp.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pokemon Search</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

## 7. Contacto

Tomás Wielandt<br>
twielandt16@gmail.com
