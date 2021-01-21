import { pool } from "../config/connectionDatabase";

export const getLastOperations = async (req, res) => {
  const response = await pool.query(
    "SELECT * FROM operations ORDER BY operation_id DESC LIMIT 10"
  );
  res.status(200).json(response.rows);
};
