const express = require("express")
const router = express.Router()
const SEModel = require('../models/SistemaEnergia.js')

router.get('/',(req,res) => {
    SEModel.OrdemDeServico.findAll({raw: true}).then(function(os){
        const osTratadas = os.map(o => ({ ...o, fechada: o.status == 'Fechada' }));
        res.render("ordensdeservico/index",{os: osTratadas})
    }).catch((err) => {
        req.flash("error_msg","Houve um erro ao listar as Ordems de Serviço")  
        res.redirect("ordensdeservico/index")  
    })
})

router.get('/cadastrar',(req,res) => {
    res.render("ordensdeservico/cadastrar.handlebars")
})

router.post('/cadastrar',(req,res) => {
    
    var erros = [];

    if(erros.length > 0){
        res.render("ordensdeservico/cadastrar",{erros: erros})
    }else{

    SEModel.OrdemDeServico.create({
        tipoordem: req.body.tipoordem,
        status: req.body.status,
        idunidadeconsumidora: req.body.idunidadeconsumidora,
        idusuario: 1
    }).then(function(){
        req.flash("success_msg","Ordem de Serviço criado com sucesso")
        res.redirect("/ordensdeservico")
    }).catch(function(erro){
        //não funciona
        req.flash("error_msg","Houve um erro ao salvar ao salvar a Ordem de Serviço")
        res.redirect("/ordensdeservico")
    })
    }
})

router.get("/cumprir/:idordemdeservico", (req,res) => {
      
    SEModel.OrdemDeServico.findAll({where: { idordemdeservico: req.params.idordemdeservico }},{raw: true}).then((os) => {
        const fechada = os[0].dataValues.status == 'Fechada' ? true : false; 
        res.render("ordensdeservico/cumprir", {os: os, fechada: fechada})
    }).catch((err) => {
        req.flash("error_msg", "Esta Ordem de Serviço não existe")
        res.redirect("ordensdeservico")
    })

})

router.post("/cumprir", (req,res) => {
    console.log("Tipo de Ordem: "+req.body.tipoordem)
    console.log("Status da Ordem: "+req.body.status)
    
    let msg = "Ordem de Serviço Cumprida"

    SEModel.OrdemDeServico.update(
        {status: req.body.status},
        {where: {idordemdeservico: req.body.idordemdeservico}},
        {raw: true}).then(function(){
            
            if(req.body.tipoordem == "Instalação" || req.body.status =="Executada"){
                msg += " Unidade Consumidora Instalada"
                SEModel.UnidadeConsumidora.update(
                    {instalacao: "Concluida"},
                    {where: {idunidadeconsumidora: req.body.idunidadeconsumidora}}
                    )
            }

        }).then(function(){
            req.flash("success_msg",msg)
            res.redirect("/ordensdeservico")
            
        }).catch(function(erro){
            req.flash("error_msg","Houve um erro ao cumprir a Ordem de Serviço")
            res.redirect("/ordensdeservico")
        })
})



module.exports = router