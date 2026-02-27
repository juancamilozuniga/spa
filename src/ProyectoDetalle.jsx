import { useParams } from "react-router-dom";



function ProyectoDetalle() {

  const { codigo } = useParams();

  return (
    <div>
      <h1>Detalle </h1>

      <p>Código: {codigo}</p>

    </div>

);


}

export default ProyectoDetalle;