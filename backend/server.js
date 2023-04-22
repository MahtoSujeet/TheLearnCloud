import express from 'express'
import apiRouter from "./routes/api/todoDB.js"

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api", apiRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
