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