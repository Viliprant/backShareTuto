const express = require('express');
const router = express.Router();
const {connection} = require('./DB/connection');

/* GET home page. */
router.get('/', function(req, res) {
    connection( 
        () => { // resolve
            console.log('Connexion réussie')
        },
        () => { // reject
            console.log('Connexion échouée')
        });
        
    res.send({
        response: 'ok',
        });
});

module.exports = router;