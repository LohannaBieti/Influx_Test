import React from "react";

export default function OrdemList({ ordens = [], onStatusChange }) {
  
  function obterClasseStatus(status) {
    if (!status) return "";
    switch (status.toLowerCase()) {
      case "pendente": return "status-pendente";
      case "em andamento": return "status-andamento";
      case "finalizada": return "status-finalizada";
      case "cancelada": return "status-cancelada";
      default: return "";
    }
  }

  return (
    <div className="tabela-container" style={{ marginTop: "30px" }}>
      <h3>Ordens de Serviço Registradas</h3>
      
      <table>
        <thead>
          <tr>
            <th style={{ width: "90px" }}>Nº OS</th>
            <th>Cliente</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Status (Ação)</th>
          </tr>
        </thead>

        <tbody>
          {ordens.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", color: "#777" }}>
                Nenhuma ordem de serviço encontrada.
              </td>
            </tr>
          ) : (
            ordens.map((ordem) => (
              <tr key={ordem.id}>
                {/* Identificador numérico único da Ordem */}
                <td style={{ fontWeight: "bold", color: "#2563eb" }}>
                  {ordem.id}
                </td>

                <td style={{ fontWeight: "500" }}>
                  {ordem.clientes?.nome || "Cliente não identificado"}
                </td>

                <td>{ordem.descricao}</td>

                <td style={{ fontWeight: "bold" }}>
                  {Number(ordem.valor || 0).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>

                <td>
                  <select
                    className={`select-status ${obterClasseStatus(ordem.status)}`}
                    value={ordem.status || "Pendente"}
                    onChange={(e) => onStatusChange(ordem.id, e.target.value)}
                  >
                    <option value="Pendente">Pendente</option>
                    <option value="Em Andamento">Em Andamento</option>
                    <option value="Finalizada">Finalizada</option>
                    <option value="Cancelada">Cancelada</option>
                  </select>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}