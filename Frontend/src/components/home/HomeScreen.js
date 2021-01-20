import React from "react";

export const HomeScreen = () => {
  return (
    <div className="container">
      <h1>Balance</h1>
      <h3>Saldo:</h3>
      <span>$30000</span>
      <div className="mt-3">
        <h3>Last 10 operations:</h3>
        <table class="table table-hover">
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
            <tr>
              <td>Compra de Celular</td>
              <td>20/01/21</td>
              <td>200</td>
              <td>INGRESO</td>
              <td>
                <button type="button" className="btn btn-info mr-3">
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>Compra de Tablet</td>
              <td>20/01/21</td>
              <td>200</td>
              <td>EGRESO</td>
              <td>
                <button className="btn btn-info mr-3">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
