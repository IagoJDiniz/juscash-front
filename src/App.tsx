import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes/Routes";
import GlobalStyle from "@styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
