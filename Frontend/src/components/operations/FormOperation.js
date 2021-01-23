import React from "react";
import { useForm } from "../hooks/useForm";

export const FormOperation = () => {
  const initialForm = {
    concept: "",
    amount: 0,
    date: new Date(),
    type: "ingress",
  };
  const [formValues, handleInputChange] = useForm(initialForm);
  const { concept, amount, date, type } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <>
      <h2>Adding new operation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="concept">Concept</label>
          <input
            type="text"
            className="form-control"
            id="concept"
            placeholder="Enter concept"
            name="concept"
            value={concept}
            onChange={handleInputChange}
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="concept">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="Enter date"
            name="date"
            value={date}
            onChange={handleInputChange}
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
            <option value="ingress">Ingress</option>
            <option value="egress">Egress</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          add operation
        </button>
      </form>
    </>
  );
};
