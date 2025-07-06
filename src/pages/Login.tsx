import { useNavigate } from "react-router";
import { login } from "@utils/auth";
import api from "@services/api";
import { useState } from "react";
import LogoSource from "@assets/logo-juscash.jpeg";

import * as S from "@styles/Login.styles";
import { Row, AuthFormsCentralContainer, Column } from "@styles/Common.styles";
import { TextInput } from "components/TextInput.component";
import { createNotification } from "components/NotificationFlag.component";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      const token = response.data.token;
      login(token);
      navigate("/posts");
    } catch (error: any) {
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

        <S.LoginButton onClick={handleLogin}>Login</S.LoginButton>
      </AuthFormsCentralContainer>
      <ToastContainer />
    </S.Container>
  );
};

export default Login;
