import Inicio from './components/Inicio';
import Registro from './components/Registro';
import Consulta from './components/Consulta';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />}/>
          <Route path="/consulta/:id" element={<Consulta />}/>
          <Route path="/registro" element={<Registro />}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
