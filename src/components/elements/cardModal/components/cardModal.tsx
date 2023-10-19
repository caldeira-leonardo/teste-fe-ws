/**
 * Componente utilizado para mostrar os detalhes dos vehiculos
 */

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
        {/**
         * @component <S.Header />
         * Componente que mostra o titulo e o botão de fechar o modal
         *
         * @component <S.ModalTitle />
         * Título do modal
         *
         * @component <S.CloseIcon />
         * ícone que é mostrado para fechar o modal
         *
         * @function onClose()
         * função utilizada para fechar o modal
         */}
        <S.Header>
          <S.ModalTitle>{vehicle?.nome_modelo}</S.ModalTitle>
          <S.CloseIcon onClick={onClose}>
            <FiX />
          </S.CloseIcon>
        </S.Header>

        {/**
         * @component <S.ImageWrapper />
         * Destaque para uma possível imagem do veículo em questão
         */}
        <S.ImageWrapper />

        {/**
         * @component <S.HorizontalSeparator />
         * Apenas um separador horizontal
         */}
        <S.HorizontalSeparator />

        {/**
         * @component <S.VehicleInfosWrapper />
         * Componente estilizado que mostra alguns detalhes do veículo
         */}
        <S.VehicleInfosWrapper>
          {/**
           * @component <S.VehicleInfos />
           * Wrapper que envolve o a informação de tituo e detalhe de uma informação
           *
           * @component <S.Title />
           * Componente que mostra otítulo de uma informação, ex: "Ano", "Combustível", etc...
           *
           * @component <S.Subtitle />
           * Componente que mostra a informação do veículo referente ao título
           *
           */}
          <S.VehicleInfos>
            <S.Title>Ano</S.Title>
            <S.Subtitle>{vehicle?.ano}</S.Subtitle>
          </S.VehicleInfos>
          <S.VehicleInfos>
            <S.Title>Combustível</S.Title>
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

        {/**
         * @component <S.Valor />
         * Componente que mostra com destaque o valor do veículo
         *
         * @function currencyFormatter()
         * função que formata o valor do veículo para: 10.000,00 ao invéz de 10000
         */}
        <S.Valor>
          R$ {vehicle?.valor && currencyFormatter(vehicle?.valor)}
        </S.Valor>
      </S.Wrapper>
    </Modal>
  );
}
