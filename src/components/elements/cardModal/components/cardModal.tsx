import Modal from "react-modal";
import { CardModalProps } from "../types/cardModal";
import { customStyles } from "./cardModal.styles";
import * as S from "./cardModal.styles";
import { CarsBrand } from "~/types/cars";
import { currencyFormatter } from "~/utils/formatter";
import { FiX } from "react-icons/fi";

export function CardModal({ isOpen, vehicle, onClose }: CardModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <S.Wrapper>
        <S.Content>
          <S.ModalTitle>{vehicle?.nome_modelo}</S.ModalTitle>
          <S.CloseIcon onClick={onClose}>
            <FiX />
          </S.CloseIcon>
        </S.Content>
        <S.ImageWrapper />
        <S.HorizontalSeparator />
        <S.VehicleInfosWrapper>
          <S.VehicleInfos>
            <S.Title>Ano</S.Title>
            <S.Subtitle>{vehicle?.ano}</S.Subtitle>
          </S.VehicleInfos>
          <S.VehicleInfos>
            <S.Title>Combistível</S.Title>
            <S.Subtitle>{vehicle?.combustivel}</S.Subtitle>
          </S.VehicleInfos>
          <S.VehicleInfos>
            <S.Title>Cor</S.Title>
            <S.Subtitle>{vehicle?.cor}</S.Subtitle>
          </S.VehicleInfos>
          {vehicle?.brand && (
            <S.VehicleInfos>
              <S.Title>Marca</S.Title>
              <S.Subtitle>{CarsBrand[vehicle?.brand]}</S.Subtitle>
            </S.VehicleInfos>
          )}
          <S.VehicleInfos>
            <S.Title>Portas</S.Title>
            <S.Subtitle>{vehicle?.num_portas}</S.Subtitle>
          </S.VehicleInfos>
        </S.VehicleInfosWrapper>

        <S.Valor>
          R$ {vehicle?.valor && currencyFormatter(vehicle?.valor)}
        </S.Valor>
      </S.Wrapper>
    </Modal>
  );
}
