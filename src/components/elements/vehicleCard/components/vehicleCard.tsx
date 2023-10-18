import {
  currencyFormatter,
  timeFormatterDay,
  timeFormatterTime,
} from "~/utils/formatter";
import { VehicleCardProps } from "../types/vehicleCard";
import * as S from "./vehicleCard.styles";

const VehicleCard = ({ vehicle, onClick }: VehicleCardProps) => {
  // TODO Mostrar todos os dados relevntes dos carror

  return (
    <S.Wrapper onClick={() => onClick(vehicle)}>
      <S.ImageWrapper></S.ImageWrapper>

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
    </S.Wrapper>
  );
};

export default VehicleCard;
