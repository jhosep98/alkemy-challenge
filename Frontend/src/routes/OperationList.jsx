import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import OperationFinder from "../apis/OperationFinder";
import { AddOperation } from "../components/AddOperation";
import { OperationContext } from "../context/OperationContext";

export const OperationList = () => {
  let history = useHistory();

  const { operations, setOperations } = useContext(OperationContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await OperationFinder.get("/");
        setOperations(response.data);
      } catch (error) {}
    };
    fetchData();
  }, [setOperations]);

  const handleDelete = async (id) => {
    try {
      await OperationFinder.delete(`${id}`);
      setOperations(operations.filter((op) => op.operation_id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (id) => {
    history.push(`/operations/${id}/update`);
  };

  return (
    <div className="container mt-3">
      <AddOperation />
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
              {operations &&
                operations.map((operation) => (
                  <tr key={operation.operation_id}>
                    <td>{operation.concept}</td>
                    <td>{operation.operation_date}</td>
                    <td>{operation.amount}</td>
                    <td>{operation.type}</td>
                    <td>
                      <button
                        className="btn btn-warning mr-3 mb-3"
                        onClick={() => handleUpdate(operation.operation_id)}
                      >
                        <i className="fa fa-edit mr-1"></i>Update
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger mb-3"
                        onClick={() => handleDelete(operation.operation_id)}
                      >
                        <i className="fa fa-trash mr-1"></i>
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
