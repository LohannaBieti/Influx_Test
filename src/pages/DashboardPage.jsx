import React, { useEffect, useState } from "react";
import { listarOrdens } from "../services/ordensService";

export default function DashboardPage() {
  const [ordens, setOrdens] = useState([]);

  async function carregarDashboard() {
    try {
      const dados = await listarOrdens();
      setOrdens(dados || []);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    carregarDashboard();
  }, []);

  // Cálculos dos indicadores solicitados no teste técnico
  const totalOS = ordens.length;
  const pendentes = ordens.filter(o => o.status === "Pendente").length;
  const emAndamento = ordens.filter(o => o.status === "Em Andamento").length;
  const finalizadas = ordens.filter(o => o.status === "Finalizada").length;
  
  // Faturamento soma apenas as ordens com status "Finalizada"
  const faturamento = ordens
    .filter(o => o.status === "Finalizada")
    .reduce((acc, curr) => acc + Number(curr.valor || 0), 0);

  return (
    <div>
      <h2>Dashboard</h2>
      
      {/* Esta div usa a classe do seu arquivo CSS para colocar os cartões lado a lado */}
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total OS</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", margin: "10px 0 0 0" }}>{totalOS}</p>
        </div>

        <div className="card">
          <h3>Pendentes</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", margin: "10px 0 0 0", color: "#dc3545" }}>{pendentes}</p>
        </div>

        <div className="card">
          <h3>Em Andamento</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", margin: "10px 0 0 0", color: "#fd7e14" }}>{emAndamento}</p>
        </div>

        <div className="card">
          <h3>Finalizadas</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", margin: "10px 0 0 0", color: "#28a745" }}>{finalizadas}</p>
        </div>

        <div className="card">
          <h3>Faturamento</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", margin: "10px 0 0 0", color: "#2563eb" }}>
            {faturamento.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </p>
        </div>
      </div>
    </div>
  );
}