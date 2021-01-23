import { useEffect, useState } from "react";

const getOperations = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  const operation = data.map((op) => ({
    operation_id: op.operation_id,
    operation_date: op.operation_date,
    concept: op.concept,
    amount: op.amount,
  }));
  return operation;
};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getOperations(url).then((operation) => {
      setState({
        data: operation,
        loading: false,
      });
    });
  }, [url]);
  return state;
};
