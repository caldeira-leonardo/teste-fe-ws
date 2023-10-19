import * as yup from "yup";

export type ConditionalSchema<T> = T extends string
  ? yup.StringSchema
  : T extends number
  ? yup.NumberSchema
  : T extends boolean
  ? yup.BooleanSchema
  : T extends Record<AllTypes, AllTypes>
  ? yup.AnyObjectSchema
  : T extends Array<AllTypes>
  ? yup.ArraySchema<string[] | number[] | symbol[], AllTypes>
  : yup.AnySchema;

export type Shape<Fields> = {
  [Key in keyof Fields]: ConditionalSchema<Fields[Key]>;
};

type AllTypes = string | number | symbol;
