import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const OperationUpdate = () => {
  const { id } = useParams();
  const initialForm = {
    operation_date: new Date(),
    concept: "",
    amount: 0,
  };
  const [formValues, handleInputChange] = useForm(initialForm);
  const { operation_date, concept, amount } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/api/operations/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container mt-5">
      <h3 className="text-center">Update Operation</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="concept">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="Enter date"
            name="operation_date"
            value={operation_date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="concept">Description</label>
          <input
            type="text"
            className="form-control"
            id="concept"
            placeholder="Enter description"
            name="concept"
            value={concept}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            placeholder="Enter your amount"
            name="amount"
            value={amount}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          add operation
        </button>
      </form>
    </div>
  );
};
