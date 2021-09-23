const express = require('express');
const mongoose = require('mongoose');
const app=express();
const PORT=8080;
const url = 'mongodb+srv://papoapapo:PapoAPapo2021@cluster0.lygrh.mongodb.net/papoapapo?retryWrites=true&w=majority'

mongoose.connect(url);
const con = mongoose.connection;

con.on('open', function(){
	console.log('connected...');
})

app.use(express.json() )

const cardRouter = require('./routes/cards');
app.use('/cards', cardRouter);

app.listen(
	PORT,
	() => console.log(`it's alive on http://localhost:${PORT}`)
)
/*
app.get('/card', (req,res)  => {
	res.status(200).send({
		card: 'O que perguntarias a Deus?'
		
	})
});

app.post('/card/:id', (req,res)  => {
	
	const { id } = req.params;
	const { cardText } = req.body;
	
	if ( !cardText ) {
		res.status(418).send({
			mesage: 'We need cardText !'
			
		})
	}
	res.send({
			card: ` card with your text: ${cardText} and ID of ${id}`,
		})
});

*/