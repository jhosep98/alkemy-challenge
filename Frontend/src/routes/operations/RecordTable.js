import React from "react";
import { useHistory } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const RecordTable = () => {
  const url = "http://localhost:3000/api/operations";
  const { data } = useFetch(url);
  let history = useHistory();

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/operations/${id}`,
        {
          method: "DELETE",
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (id) => {
    history.push(`/operations/${id}/update`);
  };
  return (
    <div className="mt-3">
      <h3>Operations log:</h3>
      <div className="list-group table-responsive">
        <table className="table table-hover table-dark">
          <thead>
            <tr className="bg-primary">
              <th scope="col">Description</th>
              <th scope="col">Date</th>
              <th scope="col">Amount ($)</th>
              <th scope="col">Type</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((n) => (
              <tr key={n.operation_id}>
                <td>{n.concept}</td>
                <td>{n.operation_date}</td>
                <td>{n.amount}</td>
                <td>{n.type}</td>
                <td>
                  <button
                    className="btn btn-info mr-3 mb-3"
                    onClick={() => handleUpdate(n.operation_id)}
                  >
                    <i className="fa fa-edit mr-1"></i>Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger mb-3"
                    onClick={() => handleDelete(n.operation_id)}
                  >
                    <i className="fa fa-trash mr-1"></i>delete
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
