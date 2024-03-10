const { Router } = require("express")

const ClientController = require("../controllers/ClientController")

const clientsRoutes = Router()

const clientController = new ClientController()

clientsRoutes.post("/", clientController.create)
clientsRoutes.get("/", clientController.index)

module.exports = clientsRoutes
