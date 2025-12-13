import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Stories from './pages/Stories';        // Akan dibuat nanti
import Itinerary from './pages/Itinerary';    // Akan dibuat nanti
import Resources from './pages/Resources';    // Akan dibuat nanti
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;