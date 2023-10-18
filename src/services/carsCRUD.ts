import { addDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
import { VehicleProps } from "~/components/vehicle/types/vehicle";
import { carsCollection } from "~/lib/firebase/controller";

export async function addVehicle(vehicle: Omit<VehicleProps, "id">) {
  await addDoc(carsCollection, {
    ...vehicle,
  });
}

export async function removeVehicle(id: string) {
  await deleteDoc(doc(carsCollection, id));
}

export async function updateVehicle(
  id: string,
  newVehicle: Omit<VehicleProps, "id">
) {
  await setDoc(doc(carsCollection, id), newVehicle, { merge: true });
}
