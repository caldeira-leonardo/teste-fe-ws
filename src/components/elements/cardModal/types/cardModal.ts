import { VehicleProps } from "~/components/vehicle/types/vehicle";

export type CardModalProps = {
  isOpen: boolean;
  onClose(): void;
  vehicle?: VehicleProps;
};
