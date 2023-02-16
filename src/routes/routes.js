const express = require('express')
const router = express.Router()
const MensagemController = require('../controllers/MensagemController')

router.get('/mensagem', MensagemController.listarMensagens)

router.post('/mensagem', MensagemController.adicionarMensagem)

router.put('/mensagem/:id', MensagemController.atualizarMensagem)

router.get('/', (req, res) => {
    res.send('Hello World!')
  })


module.exports = router