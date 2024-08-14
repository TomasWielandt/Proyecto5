import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorBoundary from "./components/ErrorBoundary";

function App() {

  return (
    <Router>
      <ErrorBoundary>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  )
}

export default App
