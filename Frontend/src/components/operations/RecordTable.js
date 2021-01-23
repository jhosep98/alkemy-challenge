import React from "react";
import { useFetch } from "../hooks/useFetch";

export const RecordTable = () => {
  const url = "http://localhost:3000/api/operations";
  const { data } = useFetch(url);
  console.log(data);
  return (
    <div className="mt-3">
      <h3>Operations log:</h3>
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Concept</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((n) => (
              <tr key={n.operation_id}>
                <td>{n.concept}</td>
                <td>{n.operation_date}</td>
                <td>{n.amount}</td>
                <td>Ingress</td>
                <td>
                  <button className="btn btn-info mr-3 mb-3">
                    <i className="fa fa-edit"></i>edit
                  </button>
                  <button className="btn btn-danger mb-3">
                    <i className="fa fa-trash"></i>delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
