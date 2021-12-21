import fastify from "fastify";
import dotenv from 'dotenv'
import serviceRoute from './route/service/route'
import db from './db/models'

const server = fastify()
const port = process.env.PORT
dotenv.config();

server.register(serviceRoute)

interface IQuerystring {
    string: string
}

server.get<{
    Querystring: IQuerystring}>('/', async (request, reply) => {
    return "home"

})

server.listen(5000, (err, address) => {
    db.sequelize.sync({force:true}).then(() => {
        return ""
    })
    if(err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})

export default server;

