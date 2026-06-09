import { supabase } from "../supabaseClient";

export async function listarOrdens() {
  const { data, error } = await supabase
    .from("ordens_servico")
    .select(`
      *,
      clientes (
        nome
      )
    `)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
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