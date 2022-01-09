/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();


/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));


/* Spin up the server*/
const port = 8000;

const hostName = '127.0.0.1';

const lestiningFunction = ()=> console.log (`server is runing at http://${hostName}:${port}/`);

app.listen(port , lestiningFunction);



// GET route & call back function 
const getData = (req , res) => res.status(200).send(projectData);

app.get('/all' , getData);


// POST route & call back function for  '/add' url 
const postData = (req , res) => {
projectData = req.body;
console.log(projectData);
res.status(200).send(projectData);
}

app.post('/add', postData);
