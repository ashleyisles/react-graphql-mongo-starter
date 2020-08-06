import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import cookieParser from 'cookie-parser'
import types from './types'
import resolvers from './resolvers'
import './config'

dotenv.config()

const corsOptions = {
  origin: true,
  credentials: true
}

const server = new ApolloServer({
  typeDefs: types,
  resolvers,
  playground: process.env.GRAPHQL_PLAYGROUND
})

const app = express()
app.use(cors(corsOptions))
app.use(cookieParser())

server.applyMiddleware({ app, cors: false })

app.use(express.static(path.join(__dirname, '../build')))

app.get('/*', (req, res) => {
  res.send(path.join(__dirname, '../build', 'index.html'))
})

app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(`Server ready at http://localhost:${process.env.PORT || 4000}${server.graphqlPath}!`)
})