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

    onSalvar({
      cliente_id: clienteId, // Removido o Number() para aceitar UUIDs do Supabase
      descricao,
      valor: Number(valor),
      status: "Pendente",
    });

    setClienteId("");
    setDescricao("");
    setValor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nova Ordem de Serviço</h2>

      <select
        value={clienteId}
        onChange={(e) => setClienteId(e.target.value)}
        required
      >
        <option value="">Selecione</option>

        {/* Adicionado o 'clientes &&' para garantir que só mapeia se a lista existir */}
        {clientes && clientes.map((cliente) => (
          <option
            key={cliente.id}
            value={cliente.id}
          >
            {cliente.nome}
          </option>
        ))}
      </select>

      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        required
      />

      <button type="submit">
        Criar OS
      </button>
    </form>
  );
}