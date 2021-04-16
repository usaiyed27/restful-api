const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Middlewares - a function that executes
//whenever a route is hit.
// app.use('/posts', () => {
// 	console.log('This is a middleware running');
// });

//Routes
app.get('/', (req,res) => {
	res.send('We are on homepage');
});

app.get('/posts', (req,res) => {
	res.send('We are on posts');
})


//Connect to db
//mongoose.connect();

//How do we start listening to the server
app.listen(3000);