const banco = []

class MensagemController{
    listarMensagens(req, res){
        res.json(banco)
    }
    adicionarMensagem(req,res){
        const mensagem = {
            autor:req.body.autor,
            mensagem:req.body.mensagem
        }
        banco.push(mensagem)
        res.status(201)
        res.json(mensagem)
    }
}


module.exports = new MensagemController()