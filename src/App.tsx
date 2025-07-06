import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes/Routes";
import GlobalStyle from "@styles/GlobalStyles";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <GlobalStyle />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
