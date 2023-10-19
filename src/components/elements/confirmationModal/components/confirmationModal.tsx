import ReactModal from "react-modal";
import { ConfirmationModalProps } from "../types/confirmationModal";
import * as S from "./confirmationModal.styles";
import { customStyles } from "../../cardModal/components/cardModal.styles";

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
        {/**
         * @component <S.Title />
         * Mostra o título do modal, confirmando a decisão
         *
         * @component <Highlighted />
         * detalha qual é o ve´culo que será removido
         */}
        <S.Title>
          Deseja mesmo remover o veículo:
          <S.Highlighted> {vehicleToRemove}</S.Highlighted>?
        </S.Title>
        {/**
         * @component <S.Subtitle />
         * Mostra o subtitulo do modal, informando que a decisão é irreversível
         */}
        <S.Subtitle>
          Após a confirmação não será possivel reverter a ação
        </S.Subtitle>
        <S.ButtonsWrapper>
          {/**
           * @component <S.CancelButton />
           * Botão que cancela a ação de remoção do veículo
           *
           * @function onClose()
           * função que canela a ação
           *
           *
           * @component <S.SubmitButton />
           * botão que confirma a remoção do veículo
           *
           * @function onConfirm()
           * função que confirma a ação
           */}
          <S.CancelButton onClick={onClose}>Cancelar</S.CancelButton>
          <S.SubmitButton onClick={onConfirm}>Confirmar</S.SubmitButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
    </ReactModal>
  );
}

export { ConfirmationModal };
