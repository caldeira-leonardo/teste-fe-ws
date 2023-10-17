import VehicleComponent from "../components/vehicleComponent";
import apiData from "~/db.json";

const Vehicle = () => {
  console.log("apiData", apiData); // remove logs

  return <VehicleComponent {...{ apiData }} />;
};

export default Vehicle;
