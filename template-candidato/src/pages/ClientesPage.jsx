import { useEffect, useState } from "react";
import ClienteForm from "../components/ClienteForm";
import ClienteList from "../components/ClienteList";
import {
  listarClientes,
  criarCliente,
} from "../services/clientesService";

export default function ClientesPage() {
  const [clientes, setClientes] = useState([]);

  async function carregarClientes() {
    const dados = await listarClientes();
    setClientes(dados);
  }

  async function salvarCliente(cliente) {
    await criarCliente(cliente);
    carregarClientes();
  }

  useEffect(() => {
    carregarClientes();
  }, []);

  return (
    <>
      <ClienteForm onSalvar={salvarCliente} />
      <ClienteList clientes={clientes} />
    </>
  );
}