const express = require("express")
const router = express.Router();
const Cars = require("../models/car")

router.get("/", async (req, res) => {
    const allCar = await Cars.find()
    console.log("all Cars" , allCar)
    res.render("cars/view.ejs" , {allCar:allCar})
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

router.get('/:carsId', async (req, res) => {
	const foundCar = await Cars.findById(req.params.carsId);
	res.render('cars/show.ejs', { foundCar: foundCar });
});
router.delete("/:carsId", async(req,res)=>{
    await Cars.findByIdAndDelete(req.params.carsId)
    res.redirect("/cars")
})
router.get("/:carsId/edit", async(req,res) =>{
    const foundCar =await Cars.findById(req.params.carsId)
    res.render('cars/edit.ejs', { car: foundCar });
})

router.put('/:carId', async (req, res) => {
	if (req.body.isFavorite === 'on') {
		req.body.isFavorite = true
	} else {
		req.body.isFavorite = false
	}
	await Cars.findByIdAndUpdate(req.params.carId, req.body)
	res.redirect(`/cars/${req.params.carId}`)
})

module.exports = router