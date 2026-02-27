import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const irServicios = () => {
    navigate("/servicios");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={irServicios}> Servicios</button>
    </div>
  );
}

export default Dashboard;