export type VehicleProps = {
  id: string;
  timestamp_cadastro: number;
  modelo_id: number;
  ano: number;
  combustivel: string;
  num_portas: number;
  cor: string;
  nome_modelo: string;
  valor: number;
  brand: number;
};

export type VehicleComponentProps = {
  carData: VehicleProps[];
  removeVehicle(vehicleId: string): void;
  addVehicle(vehicle: Omit<VehicleProps, "id">): void;
  changeVehicle(vehicleId: string, vehicle: VehicleProps): void;
};
