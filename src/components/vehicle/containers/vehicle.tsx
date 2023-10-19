import VehicleComponent from "../components/vehicleComponent";
import { useEffect, useState } from "react";
import { carsCollection } from "~/lib/firebase/controller";
import { onSnapshot } from "firebase/firestore";
import { VehicleProps } from "../types/vehicle";
import {
  updateVehicleService,
  removeVehicleService,
  addVehicleService,
} from "~/services/carsCRUD";

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
  }, []);

  useEffect(() => {
    console.log("carData", carData); //TODO remove log
  }, [carData]);

  return (
    <VehicleComponent
      {...{ carData, addVehicle, changeVehicle, removeVehicle }}
    />
  );
};

export default Vehicle;

function addVehicle(vehicle: Omit<VehicleProps, "id">) {
  addVehicleService({
    ...vehicle,
    timestamp_cadastro: Date.now(),
    brand: Number(vehicle.brand),
  });
}

function changeVehicle(vehicleId: string, vehicle: VehicleProps) {
  updateVehicleService(vehicleId, { ...vehicle, brand: Number(vehicle.brand) });
}

function removeVehicle(vehicleId: string) {
  removeVehicleService(vehicleId);
}
