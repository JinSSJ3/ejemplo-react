import React from "react";
import { Line } from "react-chartjs-2";
import { useState } from "react";

import { useEffect } from "react";
//import { getFakeDataChart } from "../../Conexion/User/user";

const BankTransfersChart = (props) => {
  const [dataMovements, setDataMovements] = useState({});
 
  useEffect(() => {
    callData();
  }, []);

  const callData = async () => {
 
   let auxDatosGenerales = [];
   //await getFakeDataChart();

    setDataMovements(auxDatosGenerales);
  };

  return (
    <div className="profile-body">
      <h1>Ingresos vs Egresos</h1>
      <Line data={dataMovements} id="charth" />
    </div>
  );
};

export default BankTransfersChart;
