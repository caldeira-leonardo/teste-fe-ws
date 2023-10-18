import { addDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
import { VehicleProps } from "~/components/vehicle/types/vehicle";
import { carsCollection } from "~/lib/firebase/controller";

export async function addCar(car: Omit<VehicleProps, "id">) {
  await addDoc(carsCollection, {
    ...car,
  });
}

export async function removeCar(id: string) {
  await deleteDoc(doc(carsCollection, id));
}

export async function updateCar(id: string, newCar: Omit<VehicleProps, "id">) {
  await setDoc(doc(carsCollection, id), newCar, { merge: true });
}
