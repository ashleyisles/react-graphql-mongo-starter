import mongoose from 'mongoose'
import dotenv from 'dotenv'
mongoose.Promise = global.Promise

dotenv.config()

mongoose.set('useCreateIndex', true)

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).catch(() => {
  console.error(`Failed to connect to: ${process.env.DB_URL}`)
})

mongoose.connection.on('open', () => {
  console.log('Mongoose connected')
})

mongoose.connection.on('error', error => {
  console.error('A MongoDB error happened')
  console.log(error)
})

mongoose.connection.on('disconnected', () => {
  console.error('Disconnected from MongoDB...')
})