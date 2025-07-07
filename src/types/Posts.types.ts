export interface Post {
  id: string;
  text: string;
  numero_processo: string;
  autores: string;
  advogados: string;
  valor_principal_bruto_liquido: string;
  valor_juros_moratorios: string;
  honorarios_advocaticios: string;
  reu: string;
  data_publicacao: string;
  created_at: string;
  updated_at: string;
  status: "NEW" | "READED" | "SENT" | "DONE" | string;
}
