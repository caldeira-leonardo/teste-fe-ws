import ReactModal from "react-modal";
import { FormModalProps } from "../types/formModal";
import { customStyles } from "../../cardModal/components/cardModal.styles";
import { Form } from "./form";

export const FormModal = ({
  isOpen,
  onClose,
  vehicle,
  onSubmit,
}: FormModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <Form vehicleValues={vehicle} onSubmitValues={onSubmit} />
    </ReactModal>
  );
};
