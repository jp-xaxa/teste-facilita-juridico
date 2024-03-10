const { Router } = require("express")

const clientsRoutes = require("./clients.routes")
const serviceRoutes = require("./service.routes")

const routes = Router()
routes.use("/client", clientsRoutes)
routes.use("/service", serviceRoutes)

module.exports = routes
