import Modal from "react-modal";
import { CardModalProps } from "../types/cardModal";
import { customStyles } from "./cardModal.styles";
import * as S from "./cardModal.styles";

export function CardModal({ isOpen, vehicle, onClose }: CardModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <S.Wrapper>{vehicle?.nome_modelo}</S.Wrapper>
    </Modal>
  );
}
