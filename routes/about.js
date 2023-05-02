const express = require("express");
const router = express();
router.get("/",(req,res) => {res.send("We are inside the about route")});
router.get("/story" , (req,res) => {
    res.send("story page /about/story")
});
router.get("/future" , (req,res) => {
    res.send("future page /about/future")
});
module.exports = router;

// "/" here is equal to /about
// So "/link-1" is equal to /about/link-1 and so on for the rest.