import { ErrorMessageProps } from "../types/errorMessage";
import * as S from "./errorMessage.styles";

function ErrorMessage({ errorMessage, hasError }: ErrorMessageProps) {
  {
    /**
     * @element hasError
     * boolean que fala se existe ou não um erro
     *
     * @element errorMessage
     * mensagem de erro a ser mostrada quando houver um erro
     *
     * @component <S.Wrapper />
     * componente estilizado para mostrar a mensagem de erro
     */
  }
  return hasError ? <S.Wrapper>{errorMessage}</S.Wrapper> : <></>;
}

export { ErrorMessage };
