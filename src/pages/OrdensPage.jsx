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
  
  // 1. ESTADO DO FILTRO: Guarda o texto que o usuário digita na busca
  const [termoBusca, setTermoBusca] = useState("");

  async function carregarTudo() {
    try {
      const listaOrdens = await listarOrdens();
      const listaClientes = await listarClientes();

      setOrdens(listaOrdens || []);
      setClientes(listaClientes || []);
    } catch (error) {
      alert("❌ ERRO DE CONEXÃO: Falha ao buscar dados: " + error.message);
    }
  }

  async function salvarOrdem(ordem) {
    try {
      await criarOrdem(ordem);
      alert("🎉 Ordem de Serviço criada com sucesso!");
      await carregarTudo();
    } catch (error) {
      console.error("Erro ao salvar ordem:", error);
      alert("❌ ERRO AO CRIAR OS: " + (error.message || "Erro desconhecido."));
    }
  }

  async function mudarStatus(id, status) {
    try {
      await atualizarStatus(id, status);
      await carregarTudo();
    } catch (error) {
      console.error("Erro ao mudar status:", error);
    }
  }

  useEffect(() => {
    carregarTudo();
  }, []);

  // 2. LÓGICA DO FILTRO MULTI-CAMPO: Filtra a lista antes de mandar para a tabela
  const ordensFiltradas = ordens.filter((ordem) => {
    // Se a barra estiver vazia, mostra todas as ordens
    if (!termoBusca.trim()) return true;

    const termo = termoBusca.toLowerCase().replace("#", ""); // Remove a # para facilitar a busca pelo número
    
    const nomeCliente = (ordem.clientes?.nome || "").toLowerCase();
    const descricao = (ordem.descricao || "").toLowerCase();
    const numeroOS = String(ordem.id || ""); // O número aleatório gerado

    // Verifica se o termo digitado está no nome, na descrição ou no número da OS
    return (
      nomeCliente.includes(termo) || 
      descricao.includes(termo) || 
      numeroOS.includes(termo)
    );
  });

  return (
    <>
      {/* Formulário de Cadastro permanece no topo */}
      <OrdemForm
        clientes={clientes}
        onSalvar={salvarOrdem}
      />

      {/* 3. BARRA DE BUSCA ESTILIZADA */}
      <div style={{ marginTop: "32px", marginBottom: "16px" }}>
        <label style={{ fontWeight: "600", color: "#475569", display: "block", marginBottom: "8px" }}>
          🔍 Buscar Ordem de Serviço:
        </label>
        <input
          type="text"
          placeholder="Digite o nome do cliente, descrição do problema ou número do serviço..."
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
          style={{
            padding: "12px 16px",
            border: "2px solid #cbd5e1",
            borderRadius: "8px",
            fontSize: "15px",
            width: "100%",
            boxSizing: "border-box",
            outline: "none",
            transition: "border-color 0.2s"
          }}
        />
      </div>

      {/* 4. LISTA ATUALIZADA: Passamos 'ordensFiltradas' em vez da lista bruta */}
      <OrdemList
        ordens={ordensFiltradas}
        onStatusChange={mudarStatus}
      />
    </>
  );
}