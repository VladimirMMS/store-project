import Customer from '../db/models/customer'

interface ClientInter {
    url:any,
    method:any,
    handler: any
}

const route:ClientInter = {
    url:'/customer',
    method:'POST',
    handler: async(request:any, reply:any) => {
        const {name, lastname, age} = request.body
        const customer = await Customer.create({
            name,
            lastname,
            age
        })

        
        reply.send("ok")

    }
}


export default route;