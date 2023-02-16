const uuid = require('uuid')
const banco = []

class MensagemController{
    listarMensagens(req, res){
        res.json(banco)
    }
    adicionarMensagem(req,res){
        const mensagem = {
            id:uuid.v4(),
            autor:req.body.autor,
            mensagem:req.body.mensagem
        }
        banco.push(mensagem)
        res.status(201)
        res.json(mensagem)
    }
    atualizarMensagem(req,res){
        const id = req.params.id
        const encontrador = function(mensagemBanco){
            return mensagemBanco.id == id
        }
        const atualizarMensagem = banco.find(encontrador)
        if(atualizarMensagem == null){
            res.status(404)
            res.end()
        }else{
            atualizarMensagem.mensagem = req.body.mensagem
            res.json(atualizarMensagem)
        }
    }
}


module.exports = new MensagemController()