import { useEffect, useState } from "react";

import OrdemForm from "../components/OrdemForm";
import OrdemList from "../components/OrdemList";

import {
  listarOrdens,
  criarOrdem,
  atualizarStatus,
} from "../services/ordensService";

import {
  listarClientes,
} from "../services/clientesService";

export default function OrdensPage() {
  const [ordens, setOrdens] = useState([]);
  const [clientes, setClientes] = useState([]);

  async function carregarTudo() {
    const listaOrdens =
      await listarOrdens();

    const listaClientes =
      await listarClientes();

    setOrdens(listaOrdens);
    setClientes(listaClientes);
  }

  async function salvarOrdem(ordem) {
    await criarOrdem(ordem);
    carregarTudo();
  }

  async function mudarStatus(
    id,
    status
  ) {
    await atualizarStatus(
      id,
      status
    );

    carregarTudo();
  }

  useEffect(() => {
    carregarTudo();
  }, []);

  return (
    <>
      <OrdemForm
        clientes={clientes}
        onSalvar={salvarOrdem}
      />

      <OrdemList
        ordens={ordens}
        onStatusChange={mudarStatus}
      />
    </>
  );
}