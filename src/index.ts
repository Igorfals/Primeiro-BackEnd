import express from "express";
import user from './routes/user'
import produto from './routes/produto'
import category from './routes/category'
const app = express()
const port = 3000
app.use(express.json())
app.use(user)
app.use(produto)
app.use(category)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})