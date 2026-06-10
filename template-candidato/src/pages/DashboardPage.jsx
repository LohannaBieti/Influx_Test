import { useEffect, useState } from "react";

import Dashboard from "../components/Dashboard";

import {
  listarOrdens,
} from "../services/ordensService";

export default function DashboardPage() {
  const [ordens, setOrdens] = useState([]);

  useEffect(() => {
    async function carregar() {
      const dados =
        await listarOrdens();

      setOrdens(dados);
    }

    carregar();
  }, []);

  return (
    <Dashboard ordens={ordens} />
  );
}