import fastify from "fastify";
import dotenv from 'dotenv'
import productRoute from './route/product/route'
import db from './db/models'

const server = fastify()
const port = process.env.PORT
dotenv.config();

server.register(productRoute)

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

