const { Router } = require("express")

const ServiceController = require("../controllers/ServiceController")

const serviceRoutes = Router()

const serviceController = new ServiceController()

serviceRoutes.get("/", serviceController.show)

module.exports = serviceRoutes
