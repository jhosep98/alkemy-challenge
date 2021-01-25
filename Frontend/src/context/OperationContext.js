import React, { createContext, useState } from "react";

export const OperationContext = createContext();

export const OperationContextProvider = (props) => {
  const [operations, setOperations] = useState([]);
  const addOperations = (operation) => {
    setOperations([...operations, operation]);
  };
  return (
    <OperationContext.Provider
      value={{
        operations,
        setOperations,
        addOperations,
      }}
    >
      {props.children}
    </OperationContext.Provider>
  );
};
