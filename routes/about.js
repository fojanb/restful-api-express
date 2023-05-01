const express = require("express");
const router = express();
router.get("/",(req,res) => {res.send("We are inside the about route")});
router.get("/link-1" , (req,res) => {
    res.send("Link-1 inside the about router /about/link-1")
});
router.get("/link-2" , (req,res) => {
    res.send("Link-2 inside the about router /about/link-2")
});
module.exports = router;

// "/" here is equal to /about
// So "/link-1" is equal to /about/link-1 and so on for the rest.