

interface ClientInter {
    url:any,
    method:any,
    handler: any
}

const route:ClientInter = {
    url:'/client',
    method:'POST',
    handler: (request:any, reply:any) => {
        reply.send(request.body)
    }
}


export default route;