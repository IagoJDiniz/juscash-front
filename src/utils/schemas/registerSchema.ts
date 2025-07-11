import { z } from "zod";

export const emailValidationRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/;

export const passwordValidationSchema = z
  .string()
  .min(8, { message: "A senha deve ter no mínimo 8 caracteres" })
  .regex(/[a-z]/, {
    message: "A senha deve conter ao menos uma letra minúscula",
  })
  .regex(/[A-Z]/, {
    message: "A senha deve conter ao menos uma letra maiúscula",
  })
  .regex(/[0-9]/, { message: "A senha deve conter ao menos um número" })
  .regex(/[!@#$%^&*(),.?":{}|<>]/, {
    message: "A senha deve conter ao menos um caractere especial (!@#$...)",
  });

export const registerSchema = z
  .object({
    name: z.string().min(3, "O nome é obrigatório e com mínimo de 03 letras"),
    email: z
      .string()
      .regex(
        emailValidationRegex,
        "O e-mail deve seguir o padrão 'xxx@xxx.com' e não conter letras maiúsculas"
      ),
    password: passwordValidationSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });
