const express = require('express')

const port  = 3000
const app = express()
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const create_db = 'CREATE TABLE IF NOT EXISTS people(id int AUTO_INCREMENT NOT NULL PRIMARY KEY, name varchar(255) NOT NULL)'
connection.query(create_db)
const sql = `INSERT INTO people(name) values('Gustavo Lopes :)');`
connection.query(sql)
connection.end()

app.get('/', async (req, res) => {
  let message = '<h1>Full Cycle Rocks!</h1>'
  const connection = mysql.createConnection(config)
  const sql = 'SELECT name FROM people;'
  await connection.query(sql, function (err, rows) {
    if (err) throw err
    rows.forEach(r => {
      message += `<span>${r.name}</span>`
    });
    res.send(message)
  })
  connection.end()
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})