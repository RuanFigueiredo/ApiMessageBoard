const express = require('express')
const router = require('./src/routes/routes')
const cors = require('cors')

const app = express()
const port = 4000
app.use(cors())
app.use(express.json())
app.use(router)


// Rodando na porta 4000
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})