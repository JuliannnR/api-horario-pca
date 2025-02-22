
const express = require('express')
const conexionDB =require('./config/db')
const app = express();
const PORT = 8000;
conexionDB();

app.listen(PORT, () => {
    console.log(`servidor inicializado en http://localhost:${PORT}`);
    
})