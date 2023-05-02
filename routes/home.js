const express = require("express");
const router = express();
router.get("/", (req, res) => res.sendFile('views/index.html',{root: __dirname }));
router.get("/contact", (req, res) => res.sendFile('views/contact.html',{root: __dirname }));
router.get("/about", (req, res) => res.sendFile('views/about.html',{root: __dirname }));
module.exports = router;

// "/" here is equal to /