import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prijava from "./components/Prijava";
import Provera from "./components/Provera";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Prijava />} />
          <Route path="/provera" element={<Provera />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
