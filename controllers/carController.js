const express = require("express")
const router = express.Router();
const Cars = require("../models/car")

router.get("/", (req, res) => {
    console.log(req.body)
    res.redirect("/cars/new")
})

router.get("/new", (req, res) => {
    res.render("cars/new.ejs")
})

router.post("/", async (req, res) => {
    console.log('post req.body:', req.body)
    if (req.body.isFavorite === "on") {
        req.body.isFavorite = true
    }
    else {
        req.body.isFavorite = false
    }
    await Cars.create(req.body)
    res.redirect("/cars")
})




module.exports = router