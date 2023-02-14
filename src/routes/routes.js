const express = require('express')
const router = express.Router()
const MensagemController = require('../controllers/MensagemController')

router.get('/mensagem', MensagemController.listarMensagens)

router.get('/', (req, res) => {
    res.send('Hello World!')
  })


module.exports = router