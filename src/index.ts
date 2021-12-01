import fastify from "fastify";
import initializeDatabase from "./db/config/connection";
import dotenv from 'dotenv'

const server = fastify()
const port = process.env.PORT

dotenv.config();


server.get('/home', async (request, reply) => {
    reply.send('Hello World')

})




server.listen(5000, (err, address) => {
    initializeDatabase()
    if(err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})

