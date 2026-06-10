import { supabase } from "./supabaseClient"; 

export async function listarOrdens() {
  // 1. Busca primeiro as ordens de serviço puras
  const { data: ordens, error: errorOrdens } = await supabase
    .from("ordens_servico")
    .select("*")
    .order("created_at", { ascending: false });

  if (errorOrdens) throw errorOrdens;

  // 2. Busca todos os clientes para fazermos o vínculo no JavaScript
  const { data: clientes, error: errorClientes } = await supabase
    .from("clientes")
    .select("id, nome");

  if (errorClientes) throw errorClientes;

  // 3. Junta as duas informações manualmente (Garante que nunca mais dê erro de relacionamento!)
  const ordensFormatadas = ordens.map(ordem => {
    const clienteEncontrado = clientes.find(c => c.id === ordem.cliente_id);
    return {
      ...ordem,
      clientes: {
        nome: clienteEncontrado ? clienteEncontrado.nome : "Cliente não identificado"
      }
    };
  });

  return ordensFormatadas;
}

export async function criarOrdem(ordem) {
  const { data, error } = await supabase
    .from("ordens_servico")
    .insert([ordem])
    .select();

  if (error) throw error;
  return data;
}

export async function atualizarStatus(id, status) {
  const { error } = await supabase
    .from("ordens_servico")
    .update({ status })
    .eq("id", id);

  if (error) throw error;
}