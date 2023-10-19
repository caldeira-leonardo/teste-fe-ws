import { useState } from "react";
import VehicleCard from "~/components/elements/vehicleCard/components/vehicleCard";
import { VehicleComponentProps, VehicleProps } from "../types/vehicle";
import * as S from "./vehicleComponent.styles";
import { brandKeys, brandValues } from "~/utils/cars";
import { ConfirmationModal } from "~/components/elements/confirmationModal/components/confirmationModal";
import { CarsBrand } from "~/types/cars";
import { FormModal } from "~/components/elements/formModal/components/formModal";
import { CardModal } from "~/components/elements/cardModal/components/cardModal";

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
  const [formModalType, setFormModalType] = useState<
    "Edit" | "Update" | "Create" | ""
  >("");

  const [showVehicleDetails, setShowVehicleDetails] = useState(false);

  function handleCloseModal() {
    setShowVehicleDetails(false);
    setSelectedVehicle(undefined);
  }

  function handleAddVehicle(vehicle: Omit<VehicleProps, "id">) {
    addVehicle(vehicle);
  }

  function handleRemoveVehicle(vehicleId: string) {
    removeVehicle(vehicleId);
    setVehicleToRemove(undefined);
  }

  function handleChangeVehicle(vehicleId: string, vehicle: VehicleProps) {
    changeVehicle(vehicleId, vehicle);
  }

  return (
    <S.Wrapper>
      <S.ButtonWrapper>
        <S.Button onClick={() => setFormModalType("Create")}>
          Adicionar Carro
        </S.Button>
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
                        onClick={(vehicle) => {
                          setSelectedVehicle(vehicle);
                          setShowVehicleDetails(true);
                        }}
                        vehicle={car}
                        onClickRemove={(vehicle) => setVehicleToRemove(vehicle)}
                        onClickEdit={(vehicle) => {
                          setFormModalType("Edit");
                          setSelectedVehicle(vehicle);
                        }}
                      />
                    </span>
                  );
              })}
            </S.Content>
          </span>
        ))}
      <CardModal
        isOpen={showVehicleDetails}
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

      <FormModal
        isOpen={["Edit", "Update", "Create"].includes(formModalType)}
        onClose={() => {
          setSelectedVehicle(undefined);
          setFormModalType("");
        }}
        vehicle={selectedVehicle}
        onSubmit={(newValues, vehicleId) => {
          formModalType === "Create"
            ? handleAddVehicle(newValues)
            : vehicleId && handleChangeVehicle(vehicleId, newValues);
          setSelectedVehicle(undefined);
          setFormModalType("");
        }}
      />
    </S.Wrapper>
  );
};

export default VehicleComponent;
