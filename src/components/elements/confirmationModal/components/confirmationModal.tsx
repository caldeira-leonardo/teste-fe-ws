import ReactModal from "react-modal";
import { customStyles } from "../../cardModal/components/cardModal.styles";
import { ConfirmationModalProps } from "../types/confirmationModal";
import * as S from "./confirmationModal.styles";

function ConfirmationModal({
  vehicleToRemove,
  isOpen,
  onClose,
  onConfirm,
}: ConfirmationModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <S.Wrapper>
        <S.Title>
          Deseja mesmo remover o veículo:
          <S.Highlighted> {vehicleToRemove}</S.Highlighted>?
        </S.Title>
        <S.Subtitle>
          Após a confirmação não será possivel reverter a ação
        </S.Subtitle>
        <S.ButtonsWrapper>
          <S.CancelButton onClick={onClose}>Cancelar</S.CancelButton>
          <S.SubmitButton onClick={onConfirm}>Confirmar</S.SubmitButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
    </ReactModal>
  );
}

export { ConfirmationModal };
