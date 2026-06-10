// Certifique-se de que este arquivo também tem o import idêntico no topo
import { supabase } from "./supabaseClient";

export async function listarClientes() {
  const { data, error } = await supabase
    .from("clientes")
    .select("*")
    .order("nome");

  if (error) throw error;
  return data;
}

export async function criarCliente(cliente) {
  const { data, error } = await supabase
    .from("clientes")
    .insert([cliente])
    .select();

  if (error) throw error;
  return data;
}