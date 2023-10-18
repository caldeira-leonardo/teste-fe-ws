import VehicleComponent from "../components/vehicleComponent";
import { useEffect, useState } from "react";
import { carsCollection } from "~/lib/firebase/controller";
import { onSnapshot } from "firebase/firestore";
import { VehicleProps } from "../types/vehicle";

const Vehicle = () => {
  const [carData, setCarData] = useState<VehicleProps[]>([]);

  useEffect(() => {
    onSnapshot(carsCollection, (snapshot) => {
      setCarData(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          } as VehicleProps;
        })
      );
    });

    // updateCar("8qviWc6NSg2QjNhrVpvX", {
    //   timestamp_cadastro: 1696531234,
    //   modelo_id: 14,
    //   ano: 2014,
    //   combustivel: "FLEX",
    //   num_portas: 4,
    //   cor: "AZUL",
    //   nome_modelo: "JETTA",
    //   valor: 49.0,
    // });
    // removeCar("carId");
    // addCar({
    //   timestamp_cadastro: 1696539488,
    //   modelo_id: 12,
    //   ano: 2015,
    //   combustivel: "FLEX",
    //   num_portas: 4,
    //   cor: "BEGE",
    //   nome_modelo: "ONIX PLUS",
    //   valor: 50.0,
    // });
  }, []);

  return (
    <VehicleComponent
      {...{ carData, addVehicle, changeVehicle, removeVehicle }}
    />
  );
};

export default Vehicle;

function addVehicle(vehicle: Omit<VehicleProps, "id">) {
  console.log("addVehicle vehicle", vehicle); // remove logs
}

function changeVehicle(vehicleId: string, vehicle: VehicleProps) {
  console.log("changeVehicle vehicleId", vehicleId); // remove logs
  console.log("changeVehicle vehicle", vehicle); // remove logs
}

function removeVehicle(vehicleId: string) {
  console.log("vehicleId", vehicleId); // remove logs
}
