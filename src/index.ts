import fastify from "fastify";
import initializeDatabase from "./db/config/connection";
import dotenv from 'dotenv'
import clientRoute from './route/client.controller'


const server = fastify()
const port = process.env.PORT
dotenv.config();
server.route(clientRoute)

interface IQuerystring {
    string: string
}

server.get<{
    Querystring: IQuerystring}>('/', async (request, reply) => {
    return "home"

})

server.listen(5000, (err, address) => {
    initializeDatabase()
    if(err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})

export default server;

