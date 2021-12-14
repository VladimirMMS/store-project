import db from '../../../db/models/index'

export async function updateCustomer(request:any, resply:any) {
    const {Customer} = db
    const {name, lastname, age} = request.body;

    try {
        const customer = await Customer.findAll({
            where: {
                id: request.params.id
            }
        })
        if(customer.length > 0) {
            customer.forEach(async (each: any) => {
                await each.update({
                    name,
                    lastname,
                    age
                })
            })
        }
        resply.send(customer)  
        
    } catch (error) {
        resply.send(error)
    }
   
}