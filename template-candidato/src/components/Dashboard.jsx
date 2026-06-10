const Dashboard = ({ ordens = [] }) => {
  const total = ordens.length;

  const pendentes = ordens.filter(o => o.status === "Pendente").length;
  const andamento = ordens.filter(o => o.status === "Em Andamento").length;
  const finalizadas = ordens.filter(o => o.status === "Finalizada").length;

  const faturamento = ordens
    .filter(o => o.status === "Finalizada")
    .reduce((acc, o) => acc + Number(o.valor || 0), 0);

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total OS</h3>
          <p>{total}</p>
        </div>

        <div className="card">
          <h3>Pendentes</h3>
          <p>{pendentes}</p>
        </div>

        <div className="card">
          <h3>Em Andamento</h3>
          <p>{andamento}</p>
        </div>

        <div className="card">
          <h3>Finalizadas</h3>
          <p>{finalizadas}</p>
        </div>

        <div className="card">
          <h3>Faturamento</h3>
          <p>
            {faturamento.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;