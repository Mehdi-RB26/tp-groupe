import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err))

const ItemSchema = new mongoose.Schema({
  text: String,
})

const Item = mongoose.model('Item', ItemSchema)

app.get('/api/items', async (req, res) => {
  const items = await Item.find()
  res.json(items)
})

app.post('/api/items', async (req, res) => {
  const { text } = req.body
  const newItem = new Item({ text })
  await newItem.save()
  res.json(newItem)
})

app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`))
