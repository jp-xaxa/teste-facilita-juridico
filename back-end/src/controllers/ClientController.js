const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")
const knex = require("../database/knex")

class ClientController {
  async create(request, response) {
    const { name, email, telephone, coordinateX, coordinateY } = request.body

    const database = await sqliteConnection()

    const checkUserExists = await database.get(
      "SELECT * FROM clients WHERE email = (?)",
      [email]
    )

    if (checkUserExists) {
      throw new AppError("Este e-mail já esta sendo usado.")
    }

    await database.run(
      "INSERT INTO clients ( name, email, telephone, coordinateX, coordinateY) VALUES ( ?, ?, ?, ?, ?)",
      [name, email, telephone, coordinateX, coordinateY]
    )

    return response.status(201).json()
  }

  async index(request, response) {
    const { name } = request.query

    const clients = await knex("clients")
      .whereLike("clients.name", `%${name}%`)
      .orderBy("clients.name")

    return response.json(clients)
  }
}

module.exports = ClientController
