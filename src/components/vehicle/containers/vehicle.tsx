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

  return <VehicleComponent {...{ carData }} />;
};

export default Vehicle;
