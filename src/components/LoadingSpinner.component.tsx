import * as S from "@styles/components/LoadingSpinner.styles";

interface Props {
  loading: boolean;
  size?: number;
}

export const LoadingSpinner: React.FC<Props> = ({ loading, size }) => {
  return loading ? (
    <S.SpinnerContainer>
      <S.Spinner size={size} />
    </S.SpinnerContainer>
  ) : null;
};
