const express = require('express');
const path = require('path');
const router = express.Router();

//Retrieving notes.html when /notes is written, /notes is referenced in server.js app.use
//HTML route so we use pathing (When we go to this path send them notes.html)
// ../ allows you to move out of a directory file path one backwards                            
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../../notes.html'))
})

module.exports = router;

                                                                                                                                                                                                    