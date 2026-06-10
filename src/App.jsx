import React, { useState } from "react";
import DashboardPage from "./pages/DashboardPage";
import ClientesPage from "./pages/ClientesPage";
import OrdensPage from "./pages/OrdensPage";

// Força a importação dos dois arquivos possíveis para garantir que um deles seja lido
import "./index.css"; 
import "./App.css"; 

export default function App() {
  const [abaAtiva, setAbaAtiva] = useState("dashboard");

  return (
    <div 
      className="container" 
      style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "24px", 
        fontFamily: "system-ui, -apple-system, sans-serif" 
      }}
    >
      <h1 style={{ marginBottom: "24px", color: "#1e293b", fontSize: "28px", fontWeight: "bold" }}>
        TecFix - Controle de Ordens de Serviço
      </h1>

      {/* Menu de Navegação Estilizado Manualmente */}
      <nav className="menu" style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
        <button 
          onClick={() => setAbaAtiva("dashboard")}
          style={{ 
            background: abaAtiva === "dashboard" ? "#1d4ed8" : "#2563eb",
            color: "white", border: "none", padding: "10px 16px", borderRadius: "8px", cursor: "pointer", fontWeight: "600"
          }}
        >
          Dashboard
        </button>
        <button 
          onClick={() => setAbaAtiva("clientes")}
          style={{ 
            background: abaAtiva === "clientes" ? "#1d4ed8" : "#2563eb",
            color: "white", border: "none", padding: "10px 16px", borderRadius: "8px", cursor: "pointer", fontWeight: "600"
          }}
        >
          Clientes
        </button>
        <button 
          onClick={() => setAbaAtiva("ordens")}
          style={{ 
            background: abaAtiva === "ordens" ? "#1d4ed8" : "#2563eb",
            color: "white", border: "none", padding: "10px 16px", borderRadius: "8px", cursor: "pointer", fontWeight: "600"
          }}
        >
          Ordens de Serviço
        </button>
      </nav>

      <hr style={{ border: "0", height: "1px", background: "#e2e8f0", marginBottom: "24px" }} />

      <main>
        {abaAtiva === "dashboard" && <DashboardPage />}
        {abaAtiva === "clientes" && <ClientesPage />}
        {abaAtiva === "ordens" && <OrdensPage />}
      </main>
    </div>
  );
}