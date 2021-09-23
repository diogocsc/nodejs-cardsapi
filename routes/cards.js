const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Card = require('../models/card');

router.get('/', async(req,res) =>{
    try {
        const cards = await Card.find();
        res.json(cards);

    }catch(err){
        res.send('Error '+ err);
    }
})
router.get('/:id', async(req,res) =>{
    try {
        const card = await Card.findById(req.params.id);
        res.json(card);

    }catch(err){
        res.send('Error '+ err);
    }
})

router.post('/', async(req,res) =>{
    const card = new Card({
        cardText: req.body.cardText
    })
    try {
        const c= await card.save();
        res.json(c);

    }catch(err){
        res.send('Error '+ err);
    }
})

router.patch('/:id', async(req,res) =>{
    try {
        const card = await Card.findById(req.params.id);
        card.cardText= req.body.cardText;
        const c = await card.save();
        res.json(card);

    }catch(err){
        res.send('Error '+ err);
    }
})
router.delete('/:id', async(req,res) =>{
    try {
        const card = await Card.deleteOne({id:req.params.id});
        res.json(card);

    }catch(err){
        res.send('Error '+ err);
    }
})

module.exports=router;