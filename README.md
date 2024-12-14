# Proyecto Final: Backend para Aplicaciones Web con Node.js

Este proyecto es la parte backend del trabajo final de un diplomado en aplicaciones web. Se desarrolla con **Node.js** y utiliza varias librerías para implementar un sistema que gestiona la información crediticia de clientes.

---

## Descripción

El backend está diseñado para proporcionar una API RESTful que permite manejar la información de clientes, autenticación de usuarios, créditos y reportes negativos.

Cuenta con las siguientes funcionalidades principales:

- Autenticación mediante JWT.
- CRUD para la gestión de clientes.
- Consultas específicas sobre créditos y reportes negativos.
- Manejo de datos sensibles mediante autenticación y autorización.

## Tecnologías Utilizadas

- **Node.js**: Plataforma de ejecución.
- **Express.js**: Framework para crear la API.
- **MySQL**: Base de datos relacional utilizada junto con Sequelize como ORM.
- **dotenv**: Gestión de variables de entorno.
- **jsonwebtoken**: Generación y validación de tokens de acceso.
- **bcrypt**: Encriptación de contraseñas.
- **cors**: Gestión de políticas de seguridad para solicitudes entre dominios.
- **body-parser**: Procesamiento de cuerpos de solicitudes.

---

## Instalación

### Prerrequisitos

- **Node.js** (versión >= 16.x)
- **npm** o **yarn** instalado.
- Instancia de **MySQL** configurada.

### Pasos para instalar

1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd taller_final
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` basado en el archivo `.env.example` y configura las variables de entorno:
   ```
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=contraseña
   DB_NAME=taller_final
   JWT_SECRET=clave_secreta
   ```

4. Ejecuta las migraciones (si aplican) para inicializar la base de datos:
   ```bash
   npx sequelize-cli db:migrate
   ```

5. Inicia el servidor:
   - Modo desarrollo:
     ```bash
     npm run dev
     ```
   - Modo producción:
     ```bash
     npm start
     ```

---

## Estructura del Proyecto

```plaintext
/src
  |-- app.js                # Archivo principal del servidor
  |-- routes/               # Rutas de la API
  |   |-- authRoutes.js
  |   |-- clienteRoutes.js
  |   |-- informacionCrediticiaRoutes.js
  |   |-- creditoRoutes.js
  |   |-- reporteNegativoRoutes.js
  |
  |-- controllers/          # Controladores que manejan la lógica de negocio
  |-- middleware/           # Middleware para autenticar y autorizar
  |-- models/               # Definiciones de modelos Sequelize
```

---

## Endpoints Principales

### Autenticación

- **POST** `/api/auth/login`

  **Cuerpo de la solicitud:**
  ```json
  {
    "login": "admin",
    "clave": "admin1"
  }
  ```

  **Respuesta esperada:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

### Gestión de Clientes

- **GET** `/api/clientes`
  - Devuelve la lista de clientes.

- **POST** `/api/clientes`
  - Crea un nuevo cliente.

- **GET** `/api/clientes/:id`
  - Devuelve la información de un cliente por su ID.

- **GET** `/api/clientes/ReporteNegativoMonto/:tipoDocumento/:numeroDocumento`

  **Encabezado:**
  ```plaintext
  Authorization: Bearer <TOKEN>
  ```

  **Respuesta esperada:**
  ```json
  {
    "id": 1,
    "nombre": "Carlos Alberto Pérez",
    "tipo_documento": "CC",
    "numero_documento": "1012345678",
    "fecha_nacimiento": "1985-07-15",
    "estado_civil": "Soltero",
    "nivel_educativo": "Profesional",
    "monto_reportado": "0250000.00"
  }
  ```

---

## Notas adicionales

- La autenticación es obligatoria para todas las rutas, excepto el endpoint de login.
- Asegúrate de tener configurada correctamente la base de datos antes de iniciar el servidor.

---

## Contribuciones

Este proyecto fue desarrollado como parte de un trabajo final para un diplomado. Si deseas contribuir, por favor, abre un issue o envía un pull request.
