import ReactDOM from "react-dom/client";
import { App } from "./App";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <NavBar />
        <App />
      <Footer />
    </BrowserRouter>

);
