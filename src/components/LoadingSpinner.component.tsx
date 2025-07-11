import * as S from "@styles/components/LoadingSpinner.styles";
import LogoImage from "@assets/logo32.png";
interface Props {
  loading: boolean;
  size?: number;
}

export const LoadingSpinner: React.FC<Props> = ({ loading, size }) => {
  return loading ? (
    <S.SpinnerContainer>
      <S.SpinningLogo src={LogoImage} />
    </S.SpinnerContainer>
  ) : null;
};
