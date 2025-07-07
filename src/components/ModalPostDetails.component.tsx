import React, { useEffect } from "react";
import * as S from "@styles/components/ModalPostDetails.styles";
import { format } from "date-fns";
interface PostModalProps {
  post: any;
  onClose: () => void;
}

export const ModalPostDetails = ({ post, onClose }: PostModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <S.Backdrop onClick={onClose}>
      <S.ModalContainer onClick={stopPropagation}>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>
        <h3>
          Publicação - <b>{post.numero_processo}</b>
        </h3>
        <S.ContentContainer>
          <p>
            <strong>Data de publicação no DJE:</strong>
            <br />
            {format(new Date(post.data_publicacao), "dd/MM/yyyy")}
          </p>
          <p>
            <strong>Autor(es):</strong>
            <br />
            <ul>
              {post.autores?.map((adv: string, i: number) => (
                <li key={i}>{adv}</li>
              ))}
            </ul>
          </p>
          <p>
            <strong>Réu:</strong>
            <br />
            <ul>
              <li>{post.reu}</li>
            </ul>
          </p>
          <p>
            <strong>Advogado(s):</strong>
          </p>
          <ul>
            {post.advogados?.map((adv: string, i: number) => (
              <li key={i}>{adv}</li>
            ))}
          </ul>
          <p>
            <strong>Valor principal bruto/ líquido</strong>
            <br />
            R$ {post.valor_principal_bruto_liquido || "0,00"}
          </p>
          <p>
            <strong>Valor dos juros moratórios:</strong>
            <br />
            R$ {post.valor_juros_moratorios || "0,00"}
          </p>
          <p>
            <strong>Valor dos honorários advocatícios:</strong>
            <br />
            R$ {post.honorarios_advocaticios || "0,00"}
          </p>
          <p>
            <strong>Conteúdo da Publicação:</strong>
            <br />
            {post.text}
          </p>
        </S.ContentContainer>
      </S.ModalContainer>
    </S.Backdrop>
  );
};
