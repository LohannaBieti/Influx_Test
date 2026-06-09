import { useState } from "react";

export default function OrdemForm({
  clientes,
  onSalvar,
}) {
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
      cliente_id: Number(clienteId),
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
      >
        <option value="">Selecione</option>

        {clientes.map((cliente) => (
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
        onChange={(e) =>
          setDescricao(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) =>
          setValor(e.target.value)
        }
      />

      <button type="submit">
        Criar OS
      </button>
    </form>
  );
}