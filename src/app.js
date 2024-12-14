import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import clienteRoutes from './routes/clienteRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/clientes', clienteRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
