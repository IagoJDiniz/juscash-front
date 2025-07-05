import { logout } from "@utils/auth";
import { useNavigate } from "react-router";

const Posts = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h2>Posts Privados</h2>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Posts;
