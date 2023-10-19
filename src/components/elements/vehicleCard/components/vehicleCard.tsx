import {
  currencyFormatter,
  timeFormatterDay,
  timeFormatterTime,
} from "~/utils/formatter";
import { VehicleCardProps } from "../types/vehicleCard";
import { FiEdit3, FiTrash } from "react-icons/fi";
import * as S from "./vehicleCard.styles";

const VehicleCard = ({
  vehicle,
  onClick,
  onClickRemove,
  onClickEdit,
}: VehicleCardProps) => {
  return (
    <S.Wrapper>
      {/**
       * @component <S.ImageWrapper />
       * Imagem de fundo do card, de momento, por não está sendo utilizado a imagem exata do carro
       *
       * @function onClick()
       * função que seleciona o veículo para ser mostrado no modal de detalhes
       */}
      <S.ImageWrapper onClick={() => onClick(vehicle)} />

      {/**
       * @component <S.Content>...</S.Content>
       * Componente que separa os componentes na parte inferior do card, deixando um a esquerda e outro a direita
       */}
      <S.Content>
        <div>
          {/**
           * @component <S.Title>...</S.Title>
           * Mostra o titulo (modelo do carro) no canto inferior esquerdo
           */}
          <S.Title>
            {vehicle.nome_modelo} ({vehicle.ano})
          </S.Title>
          {/**
           * @component <S.Price>...</S.Price>
           * Mostra o Valor do carro no canto inferior esquerdo, abaixo do nome do carro
           *
           * @funtion currencyFormatter()
           * Função que formata o valor do carro para por exemplo: 10.000,00 ao invéz de 10000
           */}
          <S.Price>R$ {currencyFormatter(vehicle.valor)}</S.Price>
        </div>

        {/**
         * @component <S.TimeWrapper>...</S.TimeWrapper>
         * Mostram as datas no canto inferior direito, alinhados a direita
         */}
        <S.TimeWrapper>
          {/**
           * @funtion timeFormatterDay()
           * Formata o timestamp para mostrar a data: DD/MM/YYYY
           *
           * @funtion timeFormatterTime()
           * Formata o timestamp para mostrar a hora: hh:mm
           */}
          <S.Title>{timeFormatterDay(vehicle.timestamp_cadastro)}</S.Title>
          <S.Title>{timeFormatterTime(vehicle.timestamp_cadastro)}</S.Title>
        </S.TimeWrapper>
      </S.Content>

      {/**
       * @component <S.RemoveIconWrapper>...</S.RemoveIconWrapper>
       * componente com estilo que faz o posicionamento do ícone de remoção no topo a direita do card
       *
       * @icon <FiTrash />
       * Ícone escolhido para ser intuitivo de exclusão do veículo
       *
       * @funtion onClickRemove()
       * Utilizada para selecionar o veículo e abrir o modal de confirmação de exclusão
       *
       */}
      <S.RemoveIconWrapper onClick={() => onClickRemove(vehicle)}>
        <FiTrash />
      </S.RemoveIconWrapper>

      {/**
       * @component <S.EditIconWrapper>...</S.EditIconWrapper>
       * componente com estilo que faz o posicionamento do ícone de edição no topo a direita do card
       *
       * @icon <FiEdit3 />
       * Ícone escolhido para ser intuitivo de edição do veículo
       *
       * @funtion onClickEdit()
       * Utilizada para selecionar o veículo e abrir o modal com formulário para edição dos dados do veículo
       */}
      <S.EditIconWrapper onClick={() => onClickEdit(vehicle)}>
        <FiEdit3 />
      </S.EditIconWrapper>
    </S.Wrapper>
  );
};

export default VehicleCard;
