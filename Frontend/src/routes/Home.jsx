import React, { useEffect, useState } from "react";

export const Home = () => {
  const [state, setState] = useState({
    balance: [],
    operations: [],
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/home")
      .then((res) => res.json())
      .then((data) =>
        setState({
          balance: data[0],
          operations: data[1],
        })
      );
  }, []);

  const { balance, operations } = state;

  return (
    <div className="container mt-4">
      <h2>Balance of all operations</h2>
      <div className="container d-flex justify-content-between">
        <p className="font-weight-bold">Total:</p>
        <div>
          {balance.map((n) => (
            <p key={n.sum}>
              <span>&#36;</span> {Number(n.sum).toFixed(2)}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <h2>Last 10 operations:</h2>
        <table className="table table-hover border mt-3">
          <thead>
            <tr className="bg-info">
              <th>Concept</th>
              <th>Date</th>
              <th>Amount ($)</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {operations.map((n) => (
              <tr key={n.operation_id}>
                <td>{n.concept}</td>
                <td>
                  {new Date(n.operation_date).toISOString().substring(0, 10)}
                </td>
                <td>{Number(n.amount).toFixed(2)}</td>
                <td>
                  {n.type === "expenses" ? (
                    <span className="badge badge-danger">{n.type}</span>
                  ) : (
                    <span className="badge badge-success">{n.type}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
