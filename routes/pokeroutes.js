const { response } = require('express');
const express = require( 'express' );
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const pokemonData = require('../data/pokemon.json');



router.use(express.json());

//  routes the pokemon list 
router.get('/',(req, res) =>
    res.status(200).send(pokemonData)
);

//  destructures to obtain the id of the pokemon; guess map would be neater?
router.get('/:id', (req, res) => {
    const {id} = req.params;
    const pokemonDetails = pokemonData.find(({id:pokemonId}) => id === pokemonId);
    return res.json(pokemonDetails);
});


module.exports = router;