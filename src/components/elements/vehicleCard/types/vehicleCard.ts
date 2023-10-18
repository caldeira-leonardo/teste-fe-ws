import { VehicleProps } from "~/components/vehicle/types/vehicle";

export type VehicleCardProps = {
  vehicle: VehicleProps;
  onClick(vehicle: VehicleProps): void;
  onClickRemove(vehicle: VehicleProps): void;
};
