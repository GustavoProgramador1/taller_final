import sequelize from "./config/db.js";
import Cliente from "./models/Usuario.js";

const sincronizarBaseDeDatos = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos exitosa.');

        // Sincronizar todos los modelos
        await sequelize.sync(); 
        console.log('Modelos sincronizados correctamente.');
    } catch (error) {
        console.error('Error al sincronizar la base de datos:', error);        
    }
}

sincronizarBaseDeDatos();