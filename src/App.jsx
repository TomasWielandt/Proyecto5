import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";

function App() {

  return (
    <Router>
      <ErrorBoundary>
      <div className="flex flex-col min-h-screen">
      <Navbar />
        <div className="p-4 flex-grow flex justify-center items-center">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
      </ErrorBoundary>
    </Router>
  )
}

export default App
