const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class ServiceController {
  async show(request, response) {
    const clients = await knex("clients").select(
      "id",
      "name",
      "email",
      "telephone",
      "coordinateX",
      "coordinateY"
    )

    const startPoint = { x: 0, y: 0 }
    let currentPoint = startPoint
    let remainingClients = [...clients]

    const calculateDistance = (point1, point2) => {
      return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2)
    }

    let totalDistance = 0
    const route = []

    while (remainingClients.length > 0) {
      let minDistance = Number.MAX_VALUE
      let nearestClientIndex = -1

      for (let i = 0; i < remainingClients.length; i++) {
        const distance = calculateDistance(currentPoint, {
          x: remainingClients[i].coordinateX,
          y: remainingClients[i].coordinateY,
        })

        if (distance < minDistance) {
          minDistance = distance
          nearestClientIndex = i
        }
      }

      totalDistance += minDistance
      route.push(remainingClients[nearestClientIndex])
      currentPoint = {
        x: remainingClients[nearestClientIndex].coordinateX,
        y: remainingClients[nearestClientIndex].coordinateY,
      }
      remainingClients.splice(nearestClientIndex, 1)
    }

    // Volta para o ponto de origem
    totalDistance += calculateDistance(currentPoint, startPoint)
    route.push({
      id: 0,
      name: "Origem",
      coordinateX: startPoint.x,
      coordinateY: startPoint.y,
    })

    return response.json({ totalDistance, route })
  }
}

module.exports = ServiceController
