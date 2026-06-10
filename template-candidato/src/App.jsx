import { useState } from "react";

import DashboardPage from "./pages/DashboardPage";
import ClientesPage from "./pages/ClientesPage";
import OrdensPage from "./pages/OrdensPage";

import "./App.css";

function App() {
  const [pagina, setPagina] = useState("dashboard");

  return (
    <div className="container">
      <h1>TecFix - Controle de Ordens de Serviço</h1>

      <nav className="menu">
        <button onClick={() => setPagina("dashboard")}>
          Dashboard
        </button>

        <button onClick={() => setPagina("clientes")}>
          Clientes
        </button>

        <button onClick={() => setPagina("ordens")}>
          Ordens de Serviço
        </button>
      </nav>

      {pagina === "dashboard" && <DashboardPage />}

      {pagina === "clientes" && <ClientesPage />}

      {pagina === "ordens" && <OrdensPage />}
    </div>
  );
}

export default App;