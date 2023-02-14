const banco = []

class MensagemController{
    listarMensagens(req, res){
        res.json(banco)
    }
}

module.exports = new MensagemController()