const express = require("express");
const router = express.Router();
const fs = require("fs");

//Importing the db.json object
const db = require("../../../db/db.json");

//Adding middleware for body parsing
router.use(express.json());

//posting, deleting put etc are server calls, you are talking to the server
// Get route returns info from the json file then we parse it
//Get Notes, Save Notes and Delete Notes (Line 31-54 in index.js)
/*Using router.route to call the api/notes incase you want to reference a specific note*/
router.get("/notes", (req, res) => {
    console.log(`GET NOTES`);
    console.log(db);
    res.send(db);
    //We could use res.status(200).json() to add json info
});

router.post("/notes", (req, res) => {
    console.log(`POSTED NOTES`);
    if(!req.body.title && !req.body.text){
        return res.status(400).send("Cannot Find Notes");
    } 

    console.log("THE BODY INFO: ", req.body);

    const noteInfo = {
        title: req.body.title,
        text: req.body.text
    }

    db.push(noteInfo);
    res.send(noteInfo);
});

router.delete("/notes/:id", (req, res) => {
    console.log(`Deleted NOTES`);
    if(!req.body.title && !req.body.text){
        return res.status(400).send("Cannot Find Notes");
    } 
});

module.exports = router;