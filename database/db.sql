-- Creación de la base de datos
CREATE DATABASE examengm;

-- para usar la base de datos
use examengm;

-- crear una nueva tabla
CREATE TABLE cliente (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  rfc VARCHAR(50) NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  moneda DOUBLE) NOT NULL,
  activo BOOLEAN) NOT NULL,
  fechaIngreso DATE) NOT NULL
);

-- mostrar tablas
show tables;

-- describir tablas
describe customer;
