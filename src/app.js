import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import clienteRoutes from './routes/clienteRoutes.js';
import authRoutes from './routes/authRoutes.js';
import informacionCrediticiaRoutes from './routes/informacionCrediticiaRoutes.js';
import creditoRoutes from './routes/creditoRoutes.js';
import reporteNegativoRoutes from './routes/reporteNegativoRoutes.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/informacionCrediticia', informacionCrediticiaRoutes);
app.use('/api/credito', creditoRoutes);
app.use('/api/reporteNegativo', reporteNegativoRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
