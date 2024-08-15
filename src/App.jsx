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
