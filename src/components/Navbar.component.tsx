import * as S from "@styles/components/Navbar.styles";
import LogoSource from "@assets/logo-juscash.jpeg";
import { useNavigate } from "react-router";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { logout } from "@utils/auth";

export const Navbar = () => {
  const navigate = useNavigate();
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
