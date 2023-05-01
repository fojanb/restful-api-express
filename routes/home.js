const express = require("express");
const router = express();
router.get("/", (req, res) => res.sendFile('views/index.html',{root: __dirname }));
router.get("/link-1", (req, res) => res.send("This is link-1 inside the home page /link-1"));
router.get("/link-2", (req, res) => res.send("This is link-2 inside the home page /link-2"));
module.exports = router;

// "/" here is equal to /