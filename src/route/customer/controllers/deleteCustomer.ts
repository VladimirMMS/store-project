import db from '../../../db/models/index'


export async function deleteCustomerById(request:any, resply:any) {
    
    const {Customer} = db
    try {
        const customer = await Customer.destroy({
            where: {
                id: request.params.id
            }
        })
        resply.send(`Customer with id ${customer} was deleted successfully`)  
        
    } catch (error) {
        resply.send(error)   
    }
}