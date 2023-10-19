import { Formik } from "formik";
import { useMemo } from "react";
import { VehicleProps } from "~/components/vehicle/types/vehicle";
import { FormProps, FormikProps } from "../types/formModal";
import { Shape } from "~/components/vehicle/types/YupShape";
import { mockedModelOptions } from "./mock";
import * as S from "./formModal.styles";
import * as yup from "yup";
import { ErrorMessage } from "../../errorMessage/components/errorMessage";

const Form = ({ vehicleValues, onSubmitValues }: FormProps) => {
  const initialValues: Omit<VehicleProps, "id"> = useMemo(() => {
    return {
      ano: vehicleValues?.ano ?? 0,
      combustivel: vehicleValues?.combustivel ?? "",
      cor: vehicleValues?.cor ?? "",
      modelo_id: vehicleValues?.modelo_id ?? 0,
      nome_modelo: vehicleValues?.nome_modelo ?? "",
      num_portas: vehicleValues?.num_portas ?? 2,
      timestamp_cadastro: vehicleValues?.timestamp_cadastro ?? 0,
      valor: vehicleValues?.valor ?? 0,
      brand: vehicleValues?.brand ?? 1,
    };
  }, [vehicleValues]);

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={yup.object().shape<Shape<FormikProps>>({
        ano: yup
          .number()
          .typeError("Digite apenas números")
          .required("Campo obrigatório")
          .min(1800, "Coloque um ano maior que 1800"),
        brand: yup
          .number()
          .typeError("Digite apenas números")
          .required("Campo obrigatório"),
        combustivel: yup.string().required("Campo obrigatório"),
        cor: yup.string().required("Campo obrigatório"),
        modelo_id: yup.number(),
        nome_modelo: yup.string().required("Campo obrigatório"),
        num_portas: yup
          .number()
          .min(2, "Mínimo 2 portas")
          .typeError("Digite apenas números")
          .required("Campo obrigatório"),
        valor: yup
          .number()
          .moreThan(0, "Digite um valor válido")
          .typeError("Digite apenas números")
          .required("Campo obrigatório"),
      })}
      onSubmit={(values) => {
        console.log("values", values); // remove logs
        onSubmitValues(values, vehicleValues?.id);
      }}
    >
      {({
        values,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => {
        return (
          <S.Form onSubmit={handleSubmit}>
            <S.Content>
              {Object.keys(values)
                .filter(
                  (key) =>
                    !["timestamp_cadastro", "id", "modelo_id"].includes(
                      // ## Para que o formulário fosse completo o mesmo precisaria de uma lista com
                      // ## os modelos dos veículos, como não existe essa lista de opções e para cria-la
                      // ## poderia se tornar um mock muito grande devido aos inumeros modelos de veículos
                      // ## eu preferi remover o modelo, mas em uma aplicação completa, seria
                      // ## interessante ter essa opção predefinida pois quando o usuário seleciona
                      // ## o modelo do veículo, automaticamente é selecionado a marca e o modelo_id
                      key
                    )
                )
                .map((objKey) => {
                  const key = objKey as keyof typeof values;
                  return (
                    <S.FormElement>
                      {key === "brand" ? (
                        <>
                          <label>marca</label>
                          <select
                            name={objKey}
                            onChange={handleChange}
                            value={
                              values[key] ??
                              mockedModelOptions.filter(
                                (option) => option.key === values[key]
                              )[0]?.key
                            }
                          >
                            {mockedModelOptions.map((option) => (
                              <option value={option.key}>{option.label}</option>
                            ))}
                          </select>
                        </>
                      ) : (
                        <>
                          <label>{key.split("_").join(" ")}</label>
                          <input
                            type={
                              [
                                "valor",
                                "ano",
                                "brand",
                                "modelo_id",
                                "num_portas",
                                "brand",
                              ].includes(key)
                                ? "number"
                                : ""
                            }
                            name={objKey}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values[key]}
                          />
                        </>
                      )}
                      <ErrorMessage
                        hasError={!!errors[key]}
                        errorMessage={errors[key]}
                      />
                    </S.FormElement>
                  );
                })}
            </S.Content>
            <S.Button type="submit" disabled={isSubmitting}>
              Enviar
            </S.Button>
          </S.Form>
        );
      }}
    </Formik>
  );
};

export { Form };
