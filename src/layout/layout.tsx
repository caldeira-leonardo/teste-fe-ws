import { OnlyChildrenProps } from "~/types/children";
import * as S from "./layout.styles";
import WSLogo from "~/assets/logows.svg";

export function BaseLayout({ children }: OnlyChildrenProps) {
  return (
    <S.Wrapper>
      <S.Header>
        <img src={WSLogo} alt="logo" />
        <p>Carros</p>
      </S.Header>
      <S.Main>{children}</S.Main>
    </S.Wrapper>
  );
}
