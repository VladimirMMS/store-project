import db from '../../../db/models/index'


async function getAllCustomerById(request:any, reply:any) {
    const {Customer} = db
    const {id} = request.params

    try {
        const customer = await Customer.findOne({
            where:parseInt(id)
        })
        if(customer) {
            reply.send(customer)
        }
        else {
            reply.send("There isn't any customer with that id")
        }
        
    } catch (error) {
        reply.send('An error occurred in the server', error)
    }  
}


export default getAllCustomerById;