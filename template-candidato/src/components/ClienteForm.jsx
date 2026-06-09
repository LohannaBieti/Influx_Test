import { useState } from "react";

export default function ClienteForm({ onSalvar }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !email || !telefone) {
      alert("Preencha todos os campos");
      return;
    }

    const emailValido = /\S+@\S+\.\S+/;

    if (!emailValido.test(email)) {
      alert("Email inválido");
      return;
    }

    onSalvar({
      nome,
      email,
      telefone,
    });

    setNome("");
    setEmail("");
    setTelefone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Novo Cliente</h2>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />

      <button type="submit">
        Cadastrar Cliente
      </button>
    </form>
  );
}