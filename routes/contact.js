const express = require("express");
const router = express();
router.get("/",(req,res) => {
    res.send("I am a contact router")
});
router.get("/link-1" ,(req,res) => {
    res.send("I am the only link inside the contact router");
})
module.exports = router;