const express = require('express');
const db = require('../config/config');



//Initializations
    const router = express.Router();


    router.post('/sendLandingWeb', async (req, res) => {
    const {name,email,phone} = req.body;

    var f = new Date();
    var fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();

    const result = db.database().ref("UsersPaginaWeb").push({
        Nombre:name,
        Email: email,
        Telefono: phone,
        Fecha: fecha
    })

    res.json(result);
    });

router.get('/consulta', async(req,res) =>{
    const result= db.database().ref("UsersPaginaWeb").once('value', function(snap){
    })

    res.send(result)
});

router.post('/sendLandingSocial', async (req, res) => {
    const {name,email,phone} = req.body;
 
    var f = new Date();
    var fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
 
    const result = db.database().ref("UsersRedesSociales").push({
        Nombre:name,
        Email: email,
        Telefono: phone,
        Fecha: fecha
    })
 
    res.json(result);
});

router.post('/sendLandingEcommerce', async (req, res) => {
    const {name,email,phone} = req.body;
 
    var f = new Date();
    var fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
 
    const result = db.database().ref("UsersEcommerce").push({
        Nombre:name,
        Email: email,
        Telefono: phone,
        Fecha: fecha
    })
 
    res.json(result);
 });

 router.post('/sendLandingEmbajador', async (req, res) => {
    const {name,email,phone} = req.body;
 
    var f = new Date();
    var fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
 
    const result = db.database().ref("UsersEmbajador").push({
        Nombre:name,
        Email: email,
        Telefono: phone,
        Fecha: fecha
    })
 
    res.json(result);
 });

module.exports = router;