import { ErrorMessageProps } from "../types/errorMessage";
import * as S from "./errorMessage.styles";

function ErrorMessage({ errorMessage, hasError }: ErrorMessageProps) {
  return hasError ? <S.Wrapper>{errorMessage}</S.Wrapper> : <></>;
}

export { ErrorMessage };
