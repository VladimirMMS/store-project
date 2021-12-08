

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
            
        reply.send("ok")

    }
}


export default route;