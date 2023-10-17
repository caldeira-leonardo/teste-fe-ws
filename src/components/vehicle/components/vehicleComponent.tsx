import { VehicleProps } from "../types/vehicle";

type VehicleComponentProps = {
  apiData: {
    carsByBrand: VehicleProps[];
    cars: Omit<VehicleProps, "brand">[];
  };
};

const VehicleComponent = ({ apiData }: VehicleComponentProps) => {
  const { cars, carsByBrand } = apiData;
  console.log("carsByBrand", carsByBrand); // remove logs
  return <div>vehicle: {cars[0].ano}</div>;
};

export default VehicleComponent;
