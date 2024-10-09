const express = require('express');
const router = express.Router();
const tarefasController = require('../controller/tarefasCotroller');


router.get('/', tarefasController.listarTarefas);

module.exports = router;