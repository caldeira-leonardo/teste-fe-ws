export type ConfirmationModalProps = {
  isOpen: boolean;
  onClose(): void;
  vehicleToRemove?: string;
  onConfirm(): void;
};
