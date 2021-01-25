import React, { useContext } from "react";
import { useForm } from "../hooks/useForm";
import OperationFinder from "../apis/OperationFinder";
import { OperationContext } from "../context/OperationContext";

export const AddOperation = () => {
  const { addOperations } = useContext(OperationContext);
  const initialForm = {
    operation_date: new Date(),
    concept: "",
    amount: 0,
    type: "expenses",
  };
  const [formValues, handleInputChange, reset] = useForm(initialForm);
  const { operation_date, concept, amount, type } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formValues.type === "expenses") {
        const response = await OperationFinder.post("/", {
          amount: -Math.abs(amount),
          operation_date,
          concept,
          type,
        });
        addOperations(response.data.body.operation);
      } else {
        const response = await OperationFinder.post("/", formValues);
        addOperations(response.data.body.operation);
      }
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      reset();
    }, 1000);
  };
  return (
    <div className="mt-5">
      <h2>Add new operation</h2>
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
            placeholder="Enter concept"
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
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            className="form-control"
            id="type"
            name="type"
            value={type}
            onChange={handleInputChange}
          >
            <option value="expenses">Expenses</option>
            <option value="income">Income</option>
          </select>
        </div>
        <button type="submit" className="btn btn-outline-info">
          <i className="fa fa-plus mr-3"></i>
          add operation
        </button>
      </form>
    </div>
  );
};
