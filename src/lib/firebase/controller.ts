import { collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase";

export const firestore = getFirestore(app);

export const carsCollection = collection(firestore, "cars");
