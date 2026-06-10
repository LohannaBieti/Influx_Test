export default function OrdemList({
  ordens,
  onStatusChange,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {ordens.map((ordem) => (
          <tr key={ordem.id}>
            <td>{ordem.clientes?.nome}</td>

            <td>{ordem.descricao}</td>

            <td>
              {Number(ordem.valor).toLocaleString(
                "pt-BR",
                {
                  style: "currency",
                  currency: "BRL",
                }
              )}
            </td>

            <td>
              <select
                value={ordem.status}
                onChange={(e) =>
                  onStatusChange(
                    ordem.id,
                    e.target.value
                  )
                }
              >
                <option>Pendente</option>
                <option>Em Andamento</option>
                <option>Finalizada</option>
                <option>Cancelada</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}