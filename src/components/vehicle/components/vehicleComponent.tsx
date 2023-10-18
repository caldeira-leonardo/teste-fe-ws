import { useState } from "react";
import VehicleCard from "~/components/elements/vehicleCard/components/vehicleCard";
import { VehicleProps } from "../types/vehicle";
import * as S from "./vehicleComponent.styles";
import { CardModal } from "~/components/elements/cardModal/components/cardModal";
import { brandKeys, brandValues } from "~/utils/cars";

//TODO fazer os filtros dos carros
//TODO fazer o formulário para a criação de um novo carro

const VehicleComponent = ({ carData }: { carData: VehicleProps[] }) => {
  const [selectedVehicle, setSelectedVehicle] = useState<
    VehicleProps | undefined
  >();

  function handleCloseModal() {
    setSelectedVehicle(undefined);
  }

  return (
    <S.Wrapper>
      <S.ButtonWrapper>
        <S.Button>Adicionar Novo Carro</S.Button>
      </S.ButtonWrapper>
      {brandValues
        .filter((brand) => !isNaN(Number(brand)))
        .map((carBrand, i) => (
          <>
            <div>{brandKeys[i]}</div>
            <S.Content>
              {carData?.map((car) => {
                if (carBrand === car.brand)
                  return (
                    <span key={car.id}>
                      <VehicleCard
                        onClick={(vehicle) => setSelectedVehicle(vehicle)}
                        vehicle={car}
                      />
                    </span>
                  );
              })}
            </S.Content>
          </>
        ))}
      <CardModal
        isOpen={!!selectedVehicle}
        onClose={handleCloseModal}
        vehicle={selectedVehicle}
      />
    </S.Wrapper>
  );
};

export default VehicleComponent;
