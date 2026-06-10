import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function ClientesPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: ""
  });

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("ENVIANDO:", form);

    const { data, error } = await supabase
      .from("clientes")
      .insert([form])
      .select();

    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (error) {
      alert("Erro ao cadastrar");
      return;
    }

    alert("Cliente cadastrado!");

    setForm({ nome: "", email: "", telefone: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nome"
        value={form.nome}
        onChange={(e) =>
          setForm({ ...form, nome: e.target.value })
        }
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        placeholder="Telefone"
        value={form.telefone}
        onChange={(e) =>
          setForm({ ...form, telefone: e.target.value })
        }
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
}