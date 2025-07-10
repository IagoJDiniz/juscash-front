import * as S from "@styles/components/Navbar.styles";
import LogoSource from "@assets/logo-juscash.jpeg";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { logout } from "@utils/auth";

export const Navbar = () => {
  return (
    <S.NavbarContainer>
      <S.Logo src={LogoSource} />
      <S.LogoutButton onClick={() => logout()}>
        <S.Icon icon={faSignOutAlt} size="lg" />
        <h3>Sair</h3>
      </S.LogoutButton>
    </S.NavbarContainer>
  );
};
