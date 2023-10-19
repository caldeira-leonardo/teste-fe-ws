import { VehicleProps } from "~/components/vehicle/types/vehicle";

export type FormModalProps = {
  isOpen: boolean;
  onClose(): void;
  vehicle?: VehicleProps;
  onSubmit(vehicle: VehicleProps, vehicleId?: string): void;
};

export type FormProps = {
  vehicleValues?: VehicleProps;
  onSubmitValues(vehicle: Omit<VehicleProps, "id">, vehicleId?: string): void;
};

export type FormikProps = Omit<ExcludeIdFromVehicle, "timestamp_cadastro">;

type ExcludeIdFromVehicle = Omit<VehicleProps, "id">;
