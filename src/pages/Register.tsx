import { Link, useNavigate } from "react-router";
import api from "@services/api";
import { useCallback, useState } from "react";
import LogoSource from "@assets/logo-juscash.jpeg";

import * as S from "@styles/Register.styles";
import { AuthFormsCentralContainer } from "@styles/Common.styles";
import { TextInput } from "components/TextInput.component";
import { createNotification } from "components/NotificationFlag.component";
import { toast } from "react-toastify";
import { registerSchema } from "@utils/schemas/registerSchema";
import { LoadingSpinner } from "components/LoadingSpinner.component";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    const formData = { name, email, password, confirmPassword };

    const validation = registerSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};

      validation.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0]] = err.message;
        }
      });

      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    try {
      setIsLoading(true);
      const registerResponse = await api.post("/register", {
        name,
        email,
        password,
      });
      if (registerResponse.status === 201) {
        await api.post("/login", {
          email,
          password,
        });

        toast.success("Cadastro realizado com sucesso!");
        setIsLoading(false);
        navigate("/posts");
      }
    } catch (error: any) {
      setIsLoading(false);
      createNotification({
        type: "error",
        message:
          error.response?.data?.errors?.[0]?.message ||
          error.response?.data?.message ||
          "Erro inesperado ao fazer login",
      });
    }
  };

  const checkIsButtonDisabled = useCallback(() => {
    if (
      email.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0 ||
      name.length === 0
    ) {
      return true;
    }
    return false;
  }, [password, confirmPassword, name, email]);

  return (
    <S.Container>
      <AuthFormsCentralContainer>
        <S.Logo src={LogoSource} />
        <TextInput
          label="Seu nome completo:"
          required
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrors((prev) => ({ ...prev, name: "" }));
          }}
          error={errors.name}
        />
        <TextInput
          label="E-mail:"
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors((prev) => ({ ...prev, email: "" }));
          }}
          error={errors.email}
        />
        <TextInput
          label="Senha:"
          required
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors((prev) => ({ ...prev, password: "" }));
          }}
          error={errors.password}
        />
        <TextInput
          label="Confirme sua senha:"
          required
          type="password"
          placeholder="Senha"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setErrors((prev) => ({ ...prev, confirmPassword: "" }));
          }}
          error={errors.confirmPassword}
        />
        <S.LinkRow>
          <Link to={"/login"}>Já possui uma conta? Fazer login</Link>
        </S.LinkRow>
        <LoadingSpinner loading={isLoading} />

        <S.RegisterButton
          onClick={handleRegister}
          disabled={checkIsButtonDisabled()}
        >
          Criar conta
        </S.RegisterButton>
      </AuthFormsCentralContainer>
    </S.Container>
  );
};

export default Register;
