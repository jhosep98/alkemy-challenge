CREATE DATABASE budget;

CREATE TABLE operations (
    operation_id SERIAL PRIMARY KEY,
    operation_date DATE NOT NULL,
    concept VARCHAR(30) NOT NULL,
    amount INT NOT NULL
);

SELECT * FROM operations;

INSERT INTO operations(operation_date, concept, amount) VALUES('2021-01-20','compra de teclado para la pc', 1400);

