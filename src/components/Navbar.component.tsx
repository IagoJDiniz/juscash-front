import * as S from "@styles/components/Navbar.styles";
import LogoSource from "@assets/logo-juscash.jpeg";
import { useNavigate } from "react-router";
import { logout } from "@utils/auth";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <S.NavbarContainer>
      <S.Logo src={LogoSource} />
      <S.LogoutButton onClick={handleLogout}>
        <S.Icon icon={faSignOutAlt} size="lg" />
        <h3>Sair</h3>
      </S.LogoutButton>
    </S.NavbarContainer>
  );
};
