import {
  currencyFormatter,
  timeFormatterDay,
  timeFormatterTime,
} from "~/utils/formatter";
import { VehicleCardProps } from "../types/vehicleCard";
import * as S from "./vehicleCard.styles";
import { FiEdit3, FiTrash } from "react-icons/fi";

const VehicleCard = ({ vehicle, onClick, onClickRemove }: VehicleCardProps) => {
  return (
    <S.Wrapper>
      <S.ImageWrapper onClick={() => onClick(vehicle)} />

      <S.Content>
        <div>
          <S.Title>
            {vehicle.nome_modelo} ({vehicle.ano})
          </S.Title>
          <S.Price>R$ {currencyFormatter(vehicle.valor * 1000)}</S.Price>
        </div>

        <S.TimeWrapper>
          <S.Title>{timeFormatterDay(vehicle.timestamp_cadastro)}</S.Title>
          <S.Title>{timeFormatterTime(vehicle.timestamp_cadastro)}</S.Title>
        </S.TimeWrapper>
      </S.Content>
      <S.RemoveIconWrapper onClick={() => onClickRemove(vehicle)}>
        <FiTrash />
      </S.RemoveIconWrapper>
      <S.EditIconWrapper onClick={() => console.log("1234")}>
        <FiEdit3 />
      </S.EditIconWrapper>
    </S.Wrapper>
  );
};

export default VehicleCard;
