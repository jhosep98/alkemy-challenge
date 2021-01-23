import React from "react";
import { FormOperation } from "./FormOperation";
import { RecordTable } from "./RecordTable";

export const OperationsScreen = () => {
  return (
    <div className="container mt-3">
      <FormOperation />
      <RecordTable />
    </div>
  );
};
