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
      <h1>Balance of all operations</h1>
      <div className="container d-flex justify-content-between">
        <div className="font-weight-bold">Total:</div>
        <div className="">
          {balance.map((n) => (
            <p key={n.sum}>$./{n.sum}</p>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <h2>Last 10 operations:</h2>
        <table className="table table-hover table-dark mt-3">
          <thead>
            <tr className="bg-primary">
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
