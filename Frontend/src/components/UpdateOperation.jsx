import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import OperationFinder from "../apis/OperationFinder";

export const UpdateOperation = () => {
  const { id } = useParams();
  let history = useHistory();

  const [concept, setConcept] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await OperationFinder.get(`/${id}`);
      setConcept(response.data.body.operation[0].concept);
      setDate(response.data.body.operation[0].operation_date);
      setAmount(response.data.body.operation[0].amount);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await OperationFinder.put(`/${id}`, {
      operation_date: date,
      concept,
      amount,
    });
    history.push("/");
  };

  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="concept">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="Enter date"
            name="operation_date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
            onChange={(e) => setConcept(e.target.value)}
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
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          add operation
        </button>
      </form>
    </>
  );
};
