import express from 'express'
import mongoose from 'mongoose'

const Animal = mongoose.model('Animal', new mongoose.Schema({
  tipo: String,
  estado: String,
}))

const app = express()

mongoose.connect('mongodb://tatas:password@tatas-mongodb:27017/miapp?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('listando... chanchitos...')
  const animales = await Animal.find();
  return res.send(animales)
})
app.get('/crear', async (_req, res) => {
  console.log('creando...')
  await Animal.create({ tipo: 'Chanchito', estado: 'Feliz' })
  return res.send('ok')
})

const DOCKER_PORT = 3000
app.listen(DOCKER_PORT, () => console.log(`servidor levantado correctamente en puerto ${DOCKER_PORT}...`))