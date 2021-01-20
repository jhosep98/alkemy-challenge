import React from "react";

export const FormOperation = () => {
  return (
    <>
      <h2>Adding new operation</h2>
      <form>
        <div className="form-group">
          <label htmlFor="concept">Concept</label>
          <input
            type="text"
            className="form-control"
            id="concept"
            placeholder="Enter concept"
            name="concept"
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select className="form-control" id="type" name="concept">
            <option>Ingress</option>
            <option>Egress</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          add operation
        </button>
      </form>
    </>
  );
};
