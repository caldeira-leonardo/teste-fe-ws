import { addDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
import { VehicleProps } from "~/components/vehicle/types/vehicle";
import { carsCollection } from "~/lib/firebase/controller";

export async function addVehicleService(vehicle: Omit<VehicleProps, "id">) {
  await addDoc(carsCollection, {
    ...vehicle,
  });
}

export async function removeVehicleService(id: string) {
  await deleteDoc(doc(carsCollection, id));
}

export async function updateVehicleService(
  id: string,
  newVehicle: Omit<VehicleProps, "id">
) {
  await setDoc(doc(carsCollection, id), newVehicle, { merge: true });
}
