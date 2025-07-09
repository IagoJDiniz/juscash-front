<h1 align="center">juscash-front</h1>

<br/>

<p align="center">
<a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#-funcionalidades-principais">Funcionalidades principais</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#-regras-do-kanban">Regras do kanban</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#%EF%B8%8F-instalação-e-execução">Instalação e execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#-outros-links">Outros links</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#-pontos-de-melhoria">Pontos de melhoria</a>

</p>

## ❔ Sobre

Esse projeto é um Kanban para o manuseio das publicações extraídas pelo [dje-scraping](https://github.com/IagoJDiniz/dje-scraping) via API do [JusCashCase](https://github.com/IagoJDiniz/JusCashCase) por usuários autenticados.

## 🔧 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://react.dev/)
- [Axios](https://axios-http.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React-datepicker](https://www.npmjs.com/package/react-datepicker)
- [React Router](https://reactrouter.com/)
- [React Toastify](https://www.npmjs.com/package/react-toastify)
- [Styled components](https://styled-components.com/)

## 🧠 Funcionalidades principais

- Criação de conta e autenticação para uso do Kanban
- Filtragem por data de publicação, número de processo, autores e advogados(Psiu...a filtragem é por qualquer termo que esteja na publicação.... mas não conta pra ninguém!!)
- Kanban com 04 colunas para gerenciamento das publicações do DJE, sendo "Publicações novas", "Publicações lidas", "Enviar para advogado responsável" e "Concluídas"
- Responsividade para utilizar em diversas telas, full hd, notebooks e celulares

## 📒 Regras do Kanban

- Publicações novas só podem ser movimentadas para "Publicações lidas"
- Publicações lidas só podem ser movimentadas para "Enviar para advogado responsável"
- Publicações em "Enviar para advogado responsável" podem voltar para "Publicações lidas" ou avançar para "Concluídas"
- Publicações concluídas não podem ser movimentadas
- Você deve estar logado para ver e interagir com o Kanban

## ⚙️ Instalação e execução

  <p>Garanta que voce tem um gerenciador de pacotes(como npm) instalado e o NodeJS LTS</p>
  
  ```bash
git clone https://github.com/IagoJDiniz/juscash-front.git
cd juscash-front

npm install

```

  <p>Crie um arquivo .env com o seguinte padrão:</p>

```

REACT_APP_API_URL=http://localhost:3333
NODE_ENV=dev

```

<p>Por fim:</p>

```

npm run start

```
  <br/>


## 📄 Outros links

<br/>

  [Link do repositório Back-End](https://github.com/IagoJDiniz/JusCashCase/)

<br/>

  [Link do web scraper das publicações do DJE](https://github.com/IagoJDiniz/dje-scraping)

<br/>

## 📈 Pontos de melhoria
  - Criar sistema de redefinição de senha com envio de email de confirmação
  - Adicionar à busca dos filtros valores exatos pois pode tornar a aplicação mais rápida no futuro
  - Criar uma encriptação dos dados das requisições de autenticação para fazer uma dupla camada de proteção junto ao https
  - Atualizar a aplicação para o uso de ferramentas mais recentes como NextJS
  - Documentar o projeto com telas e exemplos de uso
  - Padronizar as flags de erro nos formulários pois como não haviam imagens dos casos de erro deixei implementado toasts e labels em conjunto
  - Criar mais arquivos com padrão do system design(Não foi fornecido todo)
  - Trocar o uso de requisições via useEffect para utilizar o React Query
  - Após a implementação do React Query poderemos gerenciar um estado global dos dados das requisições fazendo novas chamadas somente quando necessário
  - Adicionar mais tipagens para os arquivos e componentes utilizados pois o typescript do React é permissivo em excesso


```
