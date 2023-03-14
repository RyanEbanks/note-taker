const express = require('express');
const path = require('path');
const notesRouter = require('./Develop/public/assets/routes/notes');
const apiRouter = require('./Develop/public/assets/routes/api');
// const getAndRenderNotes = require('./Develop/public/assets/js/index.js');

const PORT = 3000;

const app = express();

//Middleware to parse JSON
app.use(express.json());

//Middleware for parsing urlencoded form data
app.use(express.urlencoded({extended : true}));

//Creating a static directory and all our static files use this as reference
app.use(express.static('Develop/public'));

//The parent for anything in the notes js that references /notes
app.use('/notes', notesRouter);
app.use('/api', apiRouter);


//Getting the route of the home page index.html
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, '/public/index.html'))
);



app.listen(PORT, () => console.log(`App Listening at PORT http://localhost:${PORT} !`));

