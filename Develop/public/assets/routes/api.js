const express = require("express");
const router = express.Router();

//Need to reference the json file either here or on server.js

//posting, deleting put etc are server calls, you are talking to the server
// Get route returns info from the json file then we parse it
//Get Notes, Save Notes and Delete Notes (Line 31-54 in index.js)
/*Using router.route to call the api/notes incase you want to reference a specific note*/
router.get("/notes", (req, res) => {
    console.log(`GET NOTES`);
    //We could use res.status(200).json() to add json info
})

router.post("/notes", (req, res) => {
    console.log(`POSTED NOTES`);
})

router.delete("/notes/:id", (req, res) => {
    //creating a variable for the id and converting it to numeric with * 1
    // const id = req.params.id * 1;
    res.status(500);
});

module.exports = router;