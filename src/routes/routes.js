const express = require('express')
const router = express.Router()
//const EmpresaController = require('../controllers/EmpresaController')

router.get('/', (req, res) => {
    res.send('Hello World!')
  })


module.exports = router