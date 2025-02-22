const mongoose = require('mongoose');
const conexionDB =  async () => {
    try {
        const conexion = await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://julian:dbPassword1@api-horario-pca.iognz.mongodb.net/?retryWrites=true&w=majority&appName=api-horario-pca" , {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
        console.log(`conexion a la base de datos exitosa: ${conexion.connection.host}`);
        
    } catch (error) {
        console.error(`error al conectar a la base de datos: ${error.message}`);
        process.exit(1)

    }
}

module.exports = conexionDB

