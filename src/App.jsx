import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Fruits from "./pages/Fruits";
import CreateFruits from "./pages/CreateFruits";
import Veggies from "./pages/Veggies";
import CreateVeggies from "./pages/CreateVeggies";
function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/veggies">Veggies</Link>
        <Link to="/veggies/create">Create new Veggie</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Fruits />} />
        <Route path="/create" element={<CreateFruits />} />
        <Route path="/veggies" element={<Veggies />} />
        <Route path="/veggies/create" element={<CreateVeggies />} />
      </Routes>
    </>
  );
}

export default App;
