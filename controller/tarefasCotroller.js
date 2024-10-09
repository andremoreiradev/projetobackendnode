const database = require('../config/conect');


const listarTarefas = async (req, res) => {
    let dados = await database.executar(`SELECT * FROM tarefas`);
    res.send(dados);
}

const listarPorID = async (req, res) => {
    let id = req.params.id;
    let dados = await database.executar('SELECT * FROM tarefas WHERE id = ${id}');
    res.send(dados);

}
const deletarTarefa = async (req, res) => {
    let id = req.params.id;
    let dados = await database.executar('DELETE FROM tarefas WHERE id = ${id}');
    res.status(204).send('Tarefa deletada com sucesso');
}

const criarTarefa = async (req, res) => {
    const { nomeDoResponsavel, descricao, statusTarefas } = req.body; // Obtém a descrição da tarefa do corpo da requisição

    try {
        await database.executar(`INSERT INTO tarefas (nomeDoResponsavel,descricao,statusTarefas) VALUES ('${nomeDoResponsavel}',
             '${descricao}', '${statusTarefas}')`);

        res.status(201).send('Tarefa criada com sucesso');
    } catch (error) {
        console.error('Erro ao criar tarefa:', error);
        res.status(500).send('Erro ao criar tarefa');
    }
};

module.exports = { listarTarefas };

