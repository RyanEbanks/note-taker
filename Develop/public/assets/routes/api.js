const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

//Importing the db.json object
const db = require("../../../db/db.json");

//Adding middleware for body parsing
router.use(express.json());

//Defining an array by reading our .json file and adding it to the array
let noteArray;

//Recommend using path.join to get the exact location
fs.readFile(path.join(__dirname, "../../../db/db.json"), (error, data) => {
    if(error) {
        console.log(error);
        return;
    }
    //Reading the data from noteArray and converting it to json
    noteArray = JSON.parse(data);
});

//posting, deleting put etc are server calls, you are talking to the server
// Get route returns info from the json file then we parse it
router.get("/notes", (req, res) => {
    console.log(`GET NOTES`);
    res.json(noteArray);
});

//Creating notes and adding it to the json file
router.post("/notes", (req, res) => {
    console.log(`POSTED NOTES`);
    if(!req.body.title && !req.body.text){
        return res.status(400).send("Cannot Find Notes");
    } 

    console.log("THE BODY INFO: ", req.body);

    const noteInfo = {
        id: noteArray.length + 1,
        title: req.body.title,
        text: req.body.text
    }
    
    //Pushing the noteinfo object to the empty array
    noteArray.push(noteInfo);

    
    //Re-writing the json file with the new information
    fs.writeFile(path.join(__dirname, "../../../db/db.json"), JSON.stringify(noteArray), (error) => {
        if(error) {
            console.log(error);
        }
        console.log("File Successfully Created!");
    });
    
    //Sending the array of objects
    res.send(noteArray);
});

//Deleting notes using the id parameter
router.delete("/notes/:id", (req, res) => {
    console.log(`Deleted NOTES`);
   
    //Using filter to create a new array filled with elements that past the test
    noteArray = noteArray.filter((note) => {
        //The test is to return all id values that are not equal to the id parameter entered
        return note.id != req.params.id;
    });

     //Re-writing the json file based on the new noteArray from the filter
     fs.writeFile(path.join(__dirname, "../../../db/db.json"), JSON.stringify(noteArray), (error) => {
        if(error) {
            console.log(error);
        }
        console.log("Successfully removed id!");
        res.send("Information deleted from notes.");
    });
});

module.exports = router;