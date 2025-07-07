import { useEffect, useState } from "react";
import { debounce } from "lodash";
import "react-datepicker/dist/react-datepicker.css";
import { ptBR } from "date-fns/locale";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "@styles/components/PostFilters.styles";
import DatePicker from "react-datepicker";

interface Props {
  onFilterChange: (filters: {
    textToSearch?: string;
    startDate?: Date;
    endDate?: Date;
  }) => void;
}

export const PostFilters = ({ onFilterChange }: Props) => {
  const [text, setText] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const debouncedFilter = debounce(() => {
    onFilterChange({
      textToSearch: text,
      startDate: startDate ?? undefined,
      endDate: endDate ?? undefined,
    });
  }, 500);

  useEffect(() => {
    debouncedFilter();
    return () => debouncedFilter.cancel();
  }, [text, startDate, endDate]);

  const handleClickSearch = () => {
    debouncedFilter();
    debouncedFilter.flush();
  };

  return (
    <S.Container>
      <S.InputGroup>
        <S.Label>Pesquisar</S.Label>
        <S.TextInput
          placeholder="Digite o número do processo ou nome das partes envolvidas"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </S.InputGroup>

      <S.InputGroup>
        <S.Label>Data do diário</S.Label>
        <S.DateWrapper>
          <span>De:</span>
          <DatePicker
            selected={startDate ?? undefined}
            onChange={(date: Date | null) => setStartDate(date)}
            locale={ptBR}
            dateFormat="dd/MM/yyyy"
            placeholderText="DD/MM/AAAA"
            className=""
          />
          <span>Até:</span>
          <DatePicker
            selected={endDate ?? undefined}
            onChange={(date: Date | null) => setEndDate(date)}
            locale={ptBR}
            dateFormat="dd/MM/yyyy"
            placeholderText="DD/MM/AAAA"
          />
          <S.SearchButton onClick={handleClickSearch}>
            <FontAwesomeIcon icon={faSearch} size="sm" />
          </S.SearchButton>
        </S.DateWrapper>
      </S.InputGroup>
    </S.Container>
  );
};
