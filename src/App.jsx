import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Servicios from "./Servicios";
import Portafolio from "./Soporte";
import Soporte from "./Soporte";
import ProyectoDetalle from "./ProyectoDetalle";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
          <Route path="/servicios" element={<Servicios></Servicios>}></Route>
          <Route path="/portafolio" element={<Portafolio></Portafolio>}></Route>
          <Route path="/soporte" element={<Soporte></Soporte>}></Route>
          <Route path="/proyectos/:codigo" element={<ProyectoDetalle></ProyectoDetalle>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;