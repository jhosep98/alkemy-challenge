import React from "react";
import { useForm } from "../../hooks/useForm";

export const FormOperation = () => {
  const initialForm = {
    operation_date: new Date(),
    concept: "",
    amount: 0,
    type: "expenses",
  };
  const [formValues, handleInputChange] = useForm(initialForm);
  const { operation_date, concept, amount, type } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    try {
      const response = await fetch("http://localhost:3000/api/operations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h2>Adding new operation</h2>
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
        <button type="submit" className="btn btn-primary">
          add operation
        </button>
      </form>
    </>
  );
};
