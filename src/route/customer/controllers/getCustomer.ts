import db from '../../../db/models/index'


async function getAllCustomer(request:any, reply:any) {
    const {Customer} = db
    try {
        const customer = await Customer.findAll()
        if(customer.length) {
            return reply.send(customer)
        }
        else {
            reply.send("There isn't any customer")
        } 
    } catch (error) {
        reply.send('An error occurred in the server', error)
    }  
}



export default getAllCustomer


