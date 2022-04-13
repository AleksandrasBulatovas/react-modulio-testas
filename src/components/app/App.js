import Nav from '../nav/Nav';
import Recipes from '../recipes/Recipes';
import Favorites from '../favorites/Favorites';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/saved" element={<Favorites />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
