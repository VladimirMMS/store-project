import fastify from "fastify";


const server = fastify()


server.get('/home', async (request, reply) => {
    return "home"

})



server.listen(5000, (err, address) => {
    if(err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})