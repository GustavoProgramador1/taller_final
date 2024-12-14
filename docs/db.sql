-- Crear base de datos
CREATE DATABASE IF NOT EXISTS CreditInfoDB;
USE CreditInfoDB;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,       
  nombre VARCHAR(255) NOT NULL,            
  correo VARCHAR(255) NOT NULL UNIQUE,     
  login VARCHAR(120) NOT NULL,
  clave VARCHAR(255) NOT NULL,        
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);

-- Crear tabla de clientes
CREATE TABLE Cliente (
    id INT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    tipo_documento VARCHAR(10) NOT NULL,
    numero_documento VARCHAR(20) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    estado_civil VARCHAR(20) NOT NULL,
    nivel_educativo VARCHAR(50) NOT NULL
);

-- Crear tabla de información crediticia
CREATE TABLE InformacionCrediticia (
    cliente_id INT,
    score_credito INT NOT NULL,
    total_creditos INT NOT NULL,
    creditos_al_dia INT NOT NULL,
    creditos_en_mora INT NOT NULL,
    dias_mora_promedio INT NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES Cliente(id)
);

-- Crear tabla de créditos
CREATE TABLE Credito (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    tipo VARCHAR(50) NOT NULL,
    entidad VARCHAR(100) NOT NULL,
    monto_original DECIMAL(15, 2),
    saldo_actual DECIMAL(15, 2),
    limite DECIMAL(15, 2),
    numero VARCHAR(30),
    estado VARCHAR(20) NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES Cliente(id)
);

-- Crear tabla de reportes negativos
CREATE TABLE ReporteNegativo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    fecha DATE NOT NULL,
    entidad VARCHAR(100) NOT NULL,
    monto DECIMAL(15, 2) NOT NULL,
    estado VARCHAR(20) NOT NULL,
    comentario TEXT,
    FOREIGN KEY (cliente_id) REFERENCES Cliente(id)
);

-- Insertar datos
INSERT INTO Cliente (id, nombre, tipo_documento, numero_documento, fecha_nacimiento, estado_civil, nivel_educativo)
VALUES
(1, 'Carlos Alberto Pérez', 'CC', '1012345678', '1985-07-15', 'Soltero', 'Profesional'),
(2, 'Ana María López', 'CC', '1023456789', '1990-03-22', 'Casada', 'Maestría'),
(3, 'Luis Eduardo Martínez', 'CC', '1034567890', '1982-01-12', 'Divorciado', 'Secundaria'),
(4, 'María Fernanda Rojas', 'CC', '1045678901', '1995-05-30', 'Soltera', 'Profesional');

INSERT INTO InformacionCrediticia (cliente_id, score_credito, total_creditos, creditos_al_dia, creditos_en_mora, dias_mora_promedio)
VALUES
(1, 720, 5, 4, 1, 30),
(2, 800, 3, 3, 0, 0),
(3, 650, 4, 3, 1, 45),
(4, 770, 2, 2, 0, 0);

INSERT INTO Credito (cliente_id, tipo, entidad, monto_original, saldo_actual, limite, numero, estado)
VALUES
(1, 'Tarjeta de crédito', 'Banco ABC', NULL, 1500000, 5000000, '**** **** **** 1234', 'Activo'),
(1, 'Crédito de vehículo', 'Financiera XYZ', 30000000, 12000000, NULL, NULL, 'Activo'),
(2, 'Crédito hipotecario', 'Banco DEF', 250000000, 200000000, NULL, NULL, 'Activo'),
(2, 'Tarjeta de crédito', 'Banco GHI', NULL, 2000000, 10000000, '**** **** **** 5678', 'Activo'),
(3, 'Préstamo personal', 'Banco JKL', 10000000, 3000000, NULL, NULL, 'Activo'),
(3, 'Crédito educativo', 'Instituto MNO', 15000000, 0, NULL, NULL, 'Pagado'),
(4, 'Crédito de consumo', 'Banco PQR', 5000000, 1000000, NULL, NULL, 'Activo');

INSERT INTO ReporteNegativo (cliente_id, fecha, entidad, monto, estado, comentario)
VALUES
(1, '2023-05-10', 'Tienda de Electrodomésticos LMN', 250000, 'En mora', 'Pago atrasado por más de 30 días.'),
(3, '2022-08-15', 'Comercio XYZ', 500000, 'En mora', 'Deuda vencida hace más de 60 días.');