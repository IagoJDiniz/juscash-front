import { Link, useNavigate } from "react-router";
import { login } from "@utils/auth";
import api from "@services/api";
import { useState } from "react";
import LogoSource from "@assets/logo-juscash.jpeg";

import * as S from "@styles/Login.styles";
import { AuthFormsCentralContainer } from "@styles/Common.styles";
import { TextInput } from "components/TextInput.component";
import { createNotification } from "components/NotificationFlag.component";
import { LoadingSpinner } from "components/LoadingSpinner.component";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const response = await api.post("/login", {
        email,
        password,
      });

      const token = response.data.token;
      login(token);
      setIsLoading(false);
      navigate("/posts");
    } catch (error: any) {
      setIsLoading(false);
      createNotification({
        type: "error",
        message: error.response.data.errors
          ? error.response.data.errors[0].message
          : error.response.data.message,
      });
    }
  };

  return (
    <S.Container>
      <AuthFormsCentralContainer>
        <S.Logo src={LogoSource} />
        <TextInput
          label="E-mail:"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Senha:"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoadingSpinner loading={isLoading} />
        <S.LoginButton onClick={handleLogin}>Login</S.LoginButton>

        <Link to={"/register"}>Não possui uma conta? Cadastre-se</Link>
      </AuthFormsCentralContainer>
    </S.Container>
  );
};

export default Login;
