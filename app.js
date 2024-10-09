const express = require('express');
const cors    = require('cors');
const port    = 9090;
const tarefasRoutes = require('./Routes/tarefasRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/tarefas', tarefasRoutes);


app.listen(port, ()=>{
    try {
        console.log(`Servidor rodando na porta http://localhost:${port}`);
    } catch (error) {
        console.log(`Erro ao rodar o servidor: ${error}`);
    }
});
