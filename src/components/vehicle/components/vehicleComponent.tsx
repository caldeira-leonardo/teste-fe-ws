import { useState } from "react";
import VehicleCard from "~/components/elements/vehicleCard/components/vehicleCard";
import { VehicleComponentProps, VehicleProps } from "../types/vehicle";
import * as S from "./vehicleComponent.styles";
import { CardModal } from "~/components/elements/cardModal/components/cardModal";
import { brandKeys, brandValues } from "~/utils/cars";
import { ConfirmationModal } from "~/components/elements/confirmationModal/components/confirmationModal";
import { CarsBrand } from "~/types/cars";

const VehicleComponent = ({
  carData,
  addVehicle,
  changeVehicle,
  removeVehicle,
}: VehicleComponentProps) => {
  const [selectedVehicle, setSelectedVehicle] = useState<
    VehicleProps | undefined
  >();
  const [vehicleToRemove, setVehicleToRemove] = useState<
    VehicleProps | undefined
  >();

  function handleCloseModal() {
    setSelectedVehicle(undefined);
  }

  function handleAddVehicle(vehicle: Omit<VehicleProps, "id">) {
    addVehicle(vehicle);
  }

  function handleRemoveVehicle(vehicleId: string) {
    removeVehicle(vehicleId);
  }

  function handleChangeVehicle(vehicleId: string, vehicle: VehicleProps) {
    changeVehicle(vehicleId, vehicle);
  }

  return (
    <S.Wrapper>
      <S.ButtonWrapper>
        <S.Button>Adicionar Novo Carro</S.Button>
      </S.ButtonWrapper>
      {brandValues
        .filter((brand) => !isNaN(Number(brand)))
        .map((carBrand, i) => (
          <span key={i + Date.now()}>
            <S.Brand>{brandKeys[i]}</S.Brand>
            <S.Content>
              {carData?.map((car) => {
                if (carBrand === car.brand)
                  return (
                    <span key={car.id}>
                      <VehicleCard
                        onClick={(vehicle) => setSelectedVehicle(vehicle)}
                        vehicle={car}
                        onClickRemove={(vehicle) => setVehicleToRemove(vehicle)}
                      />
                    </span>
                  );
              })}
            </S.Content>
          </span>
        ))}
      <CardModal
        isOpen={!!selectedVehicle}
        onClose={handleCloseModal}
        vehicle={selectedVehicle}
      />
      <ConfirmationModal
        isOpen={!!vehicleToRemove}
        onClose={() => setVehicleToRemove(undefined)}
        onConfirm={() =>
          vehicleToRemove && handleRemoveVehicle(vehicleToRemove?.id)
        }
        vehicleToRemove={`${
          vehicleToRemove?.brand && CarsBrand[vehicleToRemove?.brand]
        } ${vehicleToRemove?.nome_modelo}`}
      />
    </S.Wrapper>
  );
};

export default VehicleComponent;
