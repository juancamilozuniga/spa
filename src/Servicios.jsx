import { useNavigate } from "react-router-dom";

function Servicios() {
  const navigate = useNavigate();

  const irDashboard = () => {

    navigate("/");
    
  };

  return (
    <div>
      <h1>Servicios</h1>


      <button onClick={irDashboard}>Volver a Dashboard</button>

    </div>
  );
}

export default Servicios;