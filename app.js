const express = require('express');

const app = express();

//Routes
app.get('/', (req,res) => {
	res.send('We are on homepage');
});

app.get('/posts', (req,res) => {
	res.send('We are on posts');
})

//How do we start listening to the server
app.listen(3000);