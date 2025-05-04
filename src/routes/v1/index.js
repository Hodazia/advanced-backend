const express = require("express");

const router = express.Router();
// in the incoming request, please read it in json, 
app.use(express.json())
const {InfoController }= require("../../controllers");

const airplaneRoutes = require("./airplane-routes")
router.get('/info', InfoController.info)
router.use('/airplane', airplaneRoutes)

module.exports = router