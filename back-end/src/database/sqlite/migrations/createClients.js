const createClients = `
  CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    email VARCHAR,
    telephone VARCHAR,
    coordinateX INTEGER,
    coordinateY INTEGER
  )
`

module.exports = createClients
