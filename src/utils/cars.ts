import { CarsBrand } from "~/types/cars";

export const brandKeys = Object.keys(CarsBrand).filter((brand) =>
  isNaN(Number(brand))
);

export const brandValues = Object.values(CarsBrand).filter(
  (brand) => !isNaN(Number(brand))
);
