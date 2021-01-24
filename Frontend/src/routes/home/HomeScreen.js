import React, { useEffect, useState } from "react";

export const HomeScreen = () => {
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
    <div className="container">
      <h1>Balance</h1>
      <h3>Saldo:</h3>
      <span>
        {balance.map((n) => (
          <p key={n.sum}>{n.sum}</p>
        ))}
      </span>
      <div className="mt-3">
        <h3>Last 10 operations:</h3>
        <table className="table table-hover table-dark">
          <thead>
            <tr className="bg-primary">
              <th>Concept</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {operations.map((n) => (
              <tr key={n.operation_id}>
                <td>{n.concept}</td>
                <td>{n.operation_date}</td>
                <td>{n.amount}</td>
                <td>{n.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
