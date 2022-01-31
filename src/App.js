import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prijava from "./components/Prijava";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Prijava />}>
          </Route>
          <Route>
          </Route>
        </Routes>
      </Router >
    </div >
  );
}

export default App;
