import { useState } from "react";

export default function OrdemForm({ clientes, onSalvar }) {
  const [clienteId, setClienteId] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!clienteId || !descricao || !valor) {
      alert("Preencha todos os campos");
      return;
    }

    const numeroAleatorio = Math.floor(1000 + Math.random() * 9000);

    onSalvar({
      id: numeroAleatorio,
      cliente_id: clienteId,
      descricao,
      valor: Number(valor),
      status: "Pendente",
    });

    setClienteId("");
    setDescricao("");
    setValor("");
  };

  return (
    // Removidos estilos inline horizontais para o CSS flex-direction: column agir
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <h2>Nova Ordem de Serviço</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <label style={{ fontWeight: "600", color: "#475569" }}>Selecione o Cliente:</label>
        <select
          value={clienteId}
          onChange={(e) => setClienteId(e.target.value)}
          required
        >
          <option value="">Selecione</option>
          {clientes && clientes.map((cliente) => (
            <option key={cliente.id} value={cliente.id}>
              {cliente.nome} (ID: {cliente.id}) {/* Mostra o ID ao lado do nome se forem homônimos */}
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <label style={{ fontWeight: "600", color: "#475569" }}>Descrição do Serviço:</label>
        <textarea
          placeholder="Descreva o problema do aparelho..."
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
          rows="3"
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <label style={{ fontWeight: "600", color: "#475569" }}>Valor do Serviço (R$):</label>
        <input
          type="number"
          placeholder="0.00"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
      </div>

      <button type="submit" style={{ alignSelf: "flex-start", marginTop: "8px" }}>
        Criar OS
      </button>
    </form>
  );
}